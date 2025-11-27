import * as THREE from 'three';

export class MultiplayerClient {
    constructor({ player, scene, url, nick = 'Player', color = '#29b6f6', roomCode = 'PUBLIC' }) {
        this.player = player;
        this.scene = scene;
        this.url = url;
        this.nick = nick;
        this.color = color;
        this.roomCode = roomCode || 'PUBLIC';
        this.socket = null;
        this.id = null;
        this.others = new Map(); // id -> mesh
        this.lastSend = 0;
        this.sendInterval = 0.1; // seconds
        this.lastSentPos = null;
        this.lastAnimSig = null;
        this.heartbeatTimer = 0;
        this.isHost = false;
        this.connect();
    }

    connect() {
        if (!this.url) {
            console.warn('Multiplayer URL not configured.');
            const log = document.getElementById('ai-log');
            if (log) {
                const div = document.createElement('div');
                div.textContent = 'Multiplayer URL not set in settings.';
                div.style.color = '#ff9b9b';
                log.appendChild(div);
            }
            return;
        }
        try {
            this.socket = new WebSocket(this.url);
            this.socket.onopen = () => {
                this.sendJoin();
            };
            this.socket.onmessage = (ev) => this.handleMessage(ev);
            this.socket.onclose = () => {
                setTimeout(() => this.connect(), 1500);
            };
            this.socket.onerror = () => {};
        } catch (e) {
            console.warn('Multiplayer connect failed:', e);
        }
    }

    handleMessage(ev) {
        try {
            const data = JSON.parse(ev.data);
            if (data.type === 'hello') {
                // wait for join response
            } else if (data.type === 'welcome') {
                this.id = data.id;
                this.isHost = !!data.isHost;
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
                if (this.onHostChanged) this.onHostChanged(this.isHost);
            } else if (data.type === 'player-join') {
                // Create placeholder
                this.ensureRemote(data.id);
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'player-leave') {
                this.removeRemote(data.id);
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'state' && data.id !== this.id) {
                const mesh = this.ensureRemote(data.id, data.color);
                if (mesh && data.pos) {
                    mesh.position.set(data.pos.x, data.pos.y, data.pos.z);
                    this.applyRemoteAnimation(mesh, data.anim);
                    this.updateLabel(mesh, data.nick);
                }
            } else if (data.type === 'hit') {
                if (data.targetId && data.targetId === this.id && this.player) {
                    const dmg = typeof data.amount === 'number' ? data.amount : 0;
                    if (dmg > 0 && typeof this.player.takeDamage === 'function') {
                        this.player.takeDamage(dmg);
                    }
                }
            } else if (data.type === 'host-changed') {
                this.isHost = data.hostId === this.id;
                if (this.onHostChanged) this.onHostChanged(this.isHost);
            } else if (data.type === 'start-countdown') {
                if (this.onCountdown) this.onCountdown(data.duration || 10);
            } else if (data.type === 'match-start') {
                if (this.onMatchStart) this.onMatchStart();
            }
        } catch (e) {
            console.warn('Multiplayer parse error:', e);
        }
    }

    ensureRemote(id, colorOverride = null) {
        if (!id || id === this.id) return null;
        if (this.others.has(id)) return this.others.get(id);
        const mesh = this.clonePlayerAvatar(colorOverride);
        if (mesh) {
            mesh.userData = { ...(mesh.userData || {}), gameId: id, gameName: 'Player', color: colorOverride || this.color };
            this.scene.add(mesh);
            this.others.set(id, mesh);
            return mesh;
        }
        // Fallback simple box
        const geo = new THREE.BoxGeometry(0.8, 1.8, 0.8);
        const mat = new THREE.MeshStandardMaterial({ color: colorOverride || this.color, emissive: 0x0, roughness: 0.7 });
        const fallback = new THREE.Mesh(geo, mat);
        fallback.position.y = 1;
        fallback.userData = { gameId: id, gameName: 'Player' };
        this.scene.add(fallback);
        this.others.set(id, fallback);
        return fallback;
    }

    removeRemote(id) {
        const mesh = this.others.get(id);
        if (mesh) {
            if (mesh.userData && mesh.userData.label && mesh.userData.label.parentNode) {
                try { mesh.userData.label.parentNode.removeChild(mesh.userData.label); } catch (e) {}
            }
            try { this.scene.remove(mesh); } catch (e) {}
            this.others.delete(id);
        }
    }

    clonePlayerAvatar(colorOverride = null) {
        if (!this.player || !this.player.mesh) return null;
        try {
            const clone = this.player.mesh.clone(true);
            const pivots = { leftArm: null, rightArm: null, leftLeg: null, rightLeg: null };
            clone.traverse(n => {
                if (n.isMesh) {
                    n.castShadow = true;
                    n.receiveShadow = true;
                    if (n.material && n.material.clone) {
                        n.material = n.material.clone();
                    }
                    if (n.geometry && n.geometry.clone) {
                        n.geometry = n.geometry.clone();
                    }
                    // Apply color override only to torso/clothes
                    if (colorOverride && n.material && !Array.isArray(n.material)) {
                        const name = (n.userData && n.userData.gameName) ? n.userData.gameName.toLowerCase() : '';
                        if (name.includes('body') || name.includes('torso') || name.includes('shirt') || name.includes('clothes')) {
                            n.material = n.material.clone();
                            n.material.color = new THREE.Color(colorOverride);
                        }
                    }
                }
                // Prevent controls/extra refs on cloned object
                if (n.userData) n.userData = { ...n.userData };
                if (n.name === 'leftArmPivot') pivots.leftArm = n;
                else if (n.name === 'rightArmPivot') pivots.rightArm = n;
                else if (n.name === 'leftLegPivot') pivots.leftLeg = n;
                else if (n.name === 'rightLegPivot') pivots.rightLeg = n;
            });
            clone.userData = { ...(clone.userData || {}), pivots };
            return clone;
        } catch (e) {
            console.warn('Failed to clone player avatar:', e);
            return null;
        }
    }

    applyRemoteAnimation(mesh, anim) {
        if (!anim || !mesh || !mesh.userData) return;
        const pivots = mesh.userData.pivots || {};
        try {
            if (pivots.leftArm && typeof anim?.arms?.leftX === 'number') {
                pivots.leftArm.rotation.x = anim.arms.leftX;
            }
            if (pivots.rightArm && typeof anim?.arms?.rightX === 'number') {
                pivots.rightArm.rotation.x = anim.arms.rightX;
            }
            if (pivots.leftLeg && typeof anim?.legs?.leftX === 'number') {
                pivots.leftLeg.rotation.x = anim.legs.leftX;
            }
            if (pivots.rightLeg && typeof anim?.legs?.rightX === 'number') {
                pivots.rightLeg.rotation.x = anim.legs.rightX;
            }
        } catch (e) {
            // Ignore anim sync errors to keep multiplayer running
        }
    }

    update(dt) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        this.lastSend += dt;
        this.heartbeatTimer += dt;
        if (this.lastSend < this.sendInterval) return;
        this.lastSend = 0;
        if (!this.player || !this.player.mesh) return;
        const pos = this.player.mesh.position;
        const anim = {
            arms: {
                leftX: this.player.leftArmPivot ? this.player.leftArmPivot.rotation.x : 0,
                rightX: this.player.rightArmPivot ? this.player.rightArmPivot.rotation.x : 0
            },
            legs: {
                leftX: this.player.leftLegPivot ? this.player.leftLegPivot.rotation.x : 0,
                rightX: this.player.rightLegPivot ? this.player.rightLegPivot.rotation.x : 0
            }
        };
        const payload = { type: 'state', pos: { x: pos.x, y: pos.y, z: pos.z }, nick: this.nick, color: this.color, anim };

        // Only send if something meaningful changed, or as a heartbeat every few seconds
        let moved = false;
        if (!this.lastSentPos) {
            moved = true;
        } else if (pos.distanceTo) {
            moved = pos.distanceTo(new THREE.Vector3(this.lastSentPos.x, this.lastSentPos.y, this.lastSentPos.z)) > 0.015;
        } else {
            moved = Math.abs(pos.x - (this.lastSentPos?.x || 0)) > 0.015 ||
                    Math.abs(pos.y - (this.lastSentPos?.y || 0)) > 0.015 ||
                    Math.abs(pos.z - (this.lastSentPos?.z || 0)) > 0.015;
        }
        const animSig = `${anim.arms.leftX.toFixed(3)},${anim.arms.rightX.toFixed(3)},${anim.legs.leftX.toFixed(3)},${anim.legs.rightX.toFixed(3)}`;
        const animChanged = this.lastAnimSig !== animSig;
        const heartbeatDue = this.heartbeatTimer >= 5;

        if (moved || animChanged || heartbeatDue) {
            try { this.socket.send(JSON.stringify(payload)); } catch (e) {}
            this.lastSentPos = { x: pos.x, y: pos.y, z: pos.z };
            this.lastAnimSig = animSig;
            if (heartbeatDue) this.heartbeatTimer = 0;
        }
    }

    dispose() {
        if (this.socket) {
            try { this.socket.close(); } catch (e) {}
        }
        this.others.forEach(m => {
            try { this.scene.remove(m); } catch (e) {}
        });
        this.others.clear();
    }

    updateLabel(mesh, nick) {
        // Hide nickname labels for remote players (avoid sticking to crosshair/touch issues)
        if (mesh.userData && mesh.userData.label) {
            try {
                mesh.userData.label.style.display = 'none';
            } catch (e) {}
        }
        if (mesh.userData) {
            mesh.userData.nick = nick || 'Player';
        }
    }

    sendHit(targetId, amount) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!targetId || typeof amount !== 'number') return;
        const payload = { type: 'hit', targetId, amount };
        try { this.socket.send(JSON.stringify(payload)); } catch (e) {}
    }

    getPeerCount() {
        return 1 + this.others.size;
    }

    sendJoin() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        try {
            this.socket.send(JSON.stringify({ type: 'join', room: this.roomCode, nick: this.nick, color: this.color }));
        } catch (e) {}
    }

    sendStart() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        try { this.socket.send(JSON.stringify({ type: 'start' })); } catch (e) {}
    }
}
