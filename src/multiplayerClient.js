import * as THREE from 'three';

export class MultiplayerClient {
    constructor({ player, scene, url, nick = 'Player', color = '#29b6f6', roomCode = 'PUBLIC', settings = null }) {
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
        this.sendInterval = 0.05; // seconds (20 Hz)
        this.lastSentPos = null;
        this.lastAnimSig = null;
        this.heartbeatTimer = 0;
        this.isHost = false;
        this.roomSettings = settings;
        this._manualClose = false;
        this.deadPeers = new Set();
        this.matchLive = false;
        this.remoteStates = new Map(); // id -> [{ t, pos, anim, nick, color }]
        this.interpDelayMs = 100;
        this.maxBufferMs = 1000;
        this.maxExtrapMs = 80;
        this._now = (typeof performance !== 'undefined' && performance.now.bind(performance)) || Date.now;
        this._tmpVec = new THREE.Vector3();
        this.netStats = {
            txBytes: 0,
            rxBytes: 0,
            txPerSec: 0,
            rxPerSec: 0,
            lastSample: this._now(),
            history: [] // [{ t, tx, rx, ping }]
        };
        this.lastPingSent = 0;
        this.pingInterval = 5;
        this.connect();
    }

    applyColorToTorso(mesh, colorHex) {
        if (!mesh || !colorHex) return;
        let applied = false;
        const color = new THREE.Color(colorHex);
        mesh.traverse((n) => {
            if (!n.isMesh || !n.material || Array.isArray(n.material)) return;
            const name = (n.userData && n.userData.gameName) ? n.userData.gameName.toLowerCase() : '';
            const isTorso = name.includes('body') || name.includes('torso') || name.includes('shirt') || name.includes('clothes') ||
                (n.geometry && n.geometry.parameters && Math.abs(n.geometry.parameters.width - 0.6) < 0.05);
            if (isTorso) {
                n.material = n.material.clone();
                n.material.color = color;
                applied = true;
            }
        });
        if (mesh.userData) {
            mesh.userData.color = colorHex;
        }
        return applied;
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
                // Remove all remote players on disconnect to avoid ghost meshes
                this.others.forEach(mesh => {
                    try { this.scene.remove(mesh); } catch (e) {}
                });
                this.others.clear();
                this.deadPeers.clear();
                this.matchLive = false;
                if (!this._manualClose) {
                    setTimeout(() => this.connect(), 1500);
                }
            };
            this.socket.onerror = () => {};
        } catch (e) {
            console.warn('Multiplayer connect failed:', e);
        }
    }

    handleMessage(ev) {
        try {
            const receiveSize = typeof ev.data === 'string' ? ev.data.length : 0;
            const data = JSON.parse(ev.data);
            if (receiveSize > 0) this.trackRx(receiveSize);
            if (data.type === 'hello') {
                // wait for join response
            } else if (data.type === 'welcome') {
                this.id = data.id;
                this.isHost = !!data.isHost;
                if (data.settings) this.roomSettings = data.settings;
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
                if (this.onHostChanged) this.onHostChanged(this.isHost);
                if (data.settings && this.onSettings) this.onSettings(data.settings);
            } else if (data.type === 'player-join') {
                // Create placeholder, ignore self
                if (data.id && data.id !== this.id) {
                    this.ensureRemote(data.id);
                }
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'player-leave') {
                this.removeRemote(data.id);
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'state' && data.id !== this.id) {
                if (this.deadPeers.has(data.id)) return; // ignore updates from dead peers
                const mesh = this.ensureRemote(data.id, data.color);
                const snapTime = typeof data.ts === 'number' ? data.ts : this._now();
                this.bufferRemoteState(data.id, {
                    t: snapTime,
                    pos: data.pos,
                    anim: data.anim,
                    nick: data.nick,
                    color: data.color
                });
                if (mesh && data.color && mesh.userData?.color !== data.color) {
                    this.applyColorToTorso(mesh, data.color);
                }
            } else if (data.type === 'hit') {
                if (this.onHit) {
                    this.onHit(data);
                }
            } else if (data.type === 'host-changed') {
                this.isHost = data.hostId === this.id;
                if (this.onHostChanged) this.onHostChanged(this.isHost);
            } else if (data.type === 'start-countdown') {
                if (this.onCountdown) this.onCountdown(data.duration || 10);
            } else if (data.type === 'match-start') {
                if (this.onMatchStart) this.onMatchStart();
                this.matchLive = true;
            } else if (data.type === 'settings') {
                this.roomSettings = data.settings;
                if (this.onSettings) this.onSettings(data.settings);
            } else if (data.type === 'player-dead') {
                if (data.id) {
                    this.deadPeers.add(data.id);
                    this.killRemote(data.id);
                    if (this.onPeerDeath) this.onPeerDeath(data.id);
                }
            } else if (data.type === 'pong' && typeof data.ts === 'number') {
                const rtt = this._now() - data.ts;
                this.netStats.lastPing = rtt;
            }
        } catch (e) {
            console.warn('Multiplayer parse error:', e);
        }
    }

    ensureRemote(id, colorOverride = null) {
        if (!id || id === this.id) return null;
        if (this.deadPeers && this.deadPeers.has(id)) return null;
        if (this.others.has(id)) return this.others.get(id);
        const mesh = this.clonePlayerAvatar(colorOverride);
        if (mesh) {
            mesh.userData = { ...(mesh.userData || {}), gameId: id, gameName: 'Player', color: colorOverride || this.color };
            this.applyColorToTorso(mesh, colorOverride || this.color);
            // Remote players: disable shadow casting to avoid double-shadow artifacts
            mesh.traverse(n => {
                if (n.isMesh) {
                    n.castShadow = false;
                    n.receiveShadow = true;
                }
            });
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
        this.remoteStates.delete(id);
    }

    killRemote(id) {
        const mesh = this.others.get(id);
        if (!mesh) return;
        try {
            mesh.rotation.x = -Math.PI / 2;
            mesh.userData.dead = true;
        } catch (e) {}
        setTimeout(() => {
            this.removeRemote(id);
        }, 3500);
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
                    // Apply color override to shirt/torso
                    if (colorOverride && n.material && !Array.isArray(n.material)) {
                        const name = (n.userData && n.userData.gameName) ? n.userData.gameName.toLowerCase() : '';
                        // Fallback: also check geometry size (torso roughly 0.6x0.8x0.3)
                        const isTorso = name.includes('body') || name.includes('torso') || name.includes('shirt') || name.includes('clothes') || (n.geometry && n.geometry.parameters && Math.abs(n.geometry.parameters.width - 0.6) < 0.05);
                        if (isTorso) {
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
        // Apply remote smoothing even if we skip sending this frame
        this.updateRemoteInterpolation();
        this.sampleNetRates();

        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        this.lastSend += dt;
        this.heartbeatTimer += dt;
        if (this.player && !this.player.isDead) {
            this.lastPingSent += dt;
            if (this.lastPingSent >= this.pingInterval) {
                this.sendPing();
                this.lastPingSent = 0;
            }
        }
        if (this.lastSend < this.sendInterval) return;
        this.lastSend = 0;
        if (!this.player || !this.player.mesh) return;
        if (this.player.isDead) return;
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
        const payload = { type: 'state', pos: { x: pos.x, y: pos.y, z: pos.z }, nick: this.nick, color: this.color, anim, ts: this._now() };

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
            const msg = JSON.stringify(payload);
            try { this.socket.send(msg); } catch (e) {}
            this.trackTx(msg.length);
            this.lastSentPos = { x: pos.x, y: pos.y, z: pos.z };
            this.lastAnimSig = animSig;
            if (heartbeatDue) this.heartbeatTimer = 0;
        }
    }

    dispose() {
        this._manualClose = true;
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
        const msg = JSON.stringify(payload);
        try { this.socket.send(msg); } catch (e) {}
        this.trackTx(msg.length);
    }

    getPeerCount() {
        return 1 + this.others.size;
    }

    sendJoin() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        try {
            const msg = JSON.stringify({ type: 'join', room: this.roomCode, nick: this.nick, color: this.color });
            this.socket.send(msg);
            this.trackTx(msg.length);
        } catch (e) {}
    }

    sendStart() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        try {
            const msg = JSON.stringify({ type: 'start' });
            this.socket.send(msg);
            this.trackTx(msg.length);
        } catch (e) {}
    }

    sendSettings(settings) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!this.isHost || !settings) return;
        try {
            const msg = JSON.stringify({ type: 'settings', settings });
            this.socket.send(msg);
            this.trackTx(msg.length);
        } catch (e) {}
    }

    sendDeath() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!this.id) return;
        try {
            const msg = JSON.stringify({ type: 'player-dead', id: this.id });
            this.socket.send(msg);
            this.trackTx(msg.length);
        } catch (e) {}
    }

    isMatchLive() {
        return this.matchLive === true;
    }

    resetMatchState() {
        this.deadPeers.clear();
        this.matchLive = false;
    }

    bufferRemoteState(id, state) {
        if (!id || !state) return;
        const arr = this.remoteStates.get(id) || [];
        arr.push(state);
        while (arr.length > 24) arr.shift();
        this.remoteStates.set(id, arr);
    }

    updateRemoteInterpolation() {
        if (!this.remoteStates || this.remoteStates.size === 0) return;
        const now = this._now();
        const target = now - this.interpDelayMs;
        this.remoteStates.forEach((states, id) => {
            if (!states || states.length === 0) return;
            const mesh = this.others.get(id);
            if (!mesh) return;
            // Drop very old samples
            while (states.length > 2 && (target - states[0].t) > this.maxBufferMs) {
                states.shift();
            }

            const latest = states[states.length - 1];
            let a = states[0];
            let b = latest;

            for (let i = 1; i < states.length; i++) {
                if (states[i].t >= target) {
                    a = states[i - 1] || states[i];
                    b = states[i];
                    break;
                }
            }

            const span = (b.t - a.t);
            let alpha = span > 0 ? (target - a.t) / span : 1;

            // If we're past the newest sample, allow a tiny extrapolation window
            if (target > latest.t && (target - latest.t) <= this.maxExtrapMs && states.length >= 2) {
                const prev = states[states.length - 2];
                const dt = Math.max(1, latest.t - prev.t);
                const vx = (latest.pos.x - prev.pos.x) / dt;
                const vy = (latest.pos.y - prev.pos.y) / dt;
                const vz = (latest.pos.z - prev.pos.z) / dt;
                const lookahead = target - latest.t;
                this._tmpVec.set(
                    latest.pos.x + vx * lookahead,
                    latest.pos.y + vy * lookahead,
                    latest.pos.z + vz * lookahead
                );
                mesh.position.copy(this._tmpVec);
                this.applyRemoteAnimation(mesh, latest.anim);
                this.updateLabel(mesh, latest.nick);
                return;
            }

            alpha = Math.min(1, Math.max(0, alpha));

            // Interpolate position
            const px = a.pos?.x ?? 0;
            const py = a.pos?.y ?? 0;
            const pz = a.pos?.z ?? 0;
            const qx = b.pos?.x ?? px;
            const qy = b.pos?.y ?? py;
            const qz = b.pos?.z ?? pz;
            this._tmpVec.set(
                px + (qx - px) * alpha,
                py + (qy - py) * alpha,
                pz + (qz - pz) * alpha
            );
            mesh.position.copy(this._tmpVec);

            // Interpolate simple limb rotations
            const lerpVal = (x1, x2) => {
                if (typeof x1 !== 'number') x1 = 0;
                if (typeof x2 !== 'number') x2 = x1;
                return x1 + (x2 - x1) * alpha;
            };
            const animA = a.anim || {};
            const animB = b.anim || {};
            const anim = {
                arms: {
                    leftX: lerpVal(animA?.arms?.leftX, animB?.arms?.leftX),
                    rightX: lerpVal(animA?.arms?.rightX, animB?.arms?.rightX)
                },
                legs: {
                    leftX: lerpVal(animA?.legs?.leftX, animB?.legs?.leftX),
                    rightX: lerpVal(animA?.legs?.rightX, animB?.legs?.rightX)
                }
            };
            this.applyRemoteAnimation(mesh, anim);
            this.updateLabel(mesh, b.nick || a.nick);
        });
    }

    sendPing() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        const payload = { type: 'ping', ts: this._now() };
        const msg = JSON.stringify(payload);
        try { this.socket.send(msg); } catch (e) {}
        this.trackTx(msg.length);
    }

    trackTx(bytes) {
        if (!bytes || bytes <= 0) return;
        this.netStats.txBytes += bytes;
    }

    trackRx(bytes) {
        if (!bytes || bytes <= 0) return;
        this.netStats.rxBytes += bytes;
    }

    sampleNetRates() {
        const now = this._now();
        const elapsed = now - this.netStats.lastSample;
        if (elapsed < 1000) return;
        const secs = elapsed / 1000;
        const txRate = this.netStats.txBytes / secs;
        const rxRate = this.netStats.rxBytes / secs;
        this.netStats.txPerSec = txRate;
        this.netStats.rxPerSec = rxRate;
        this.netStats.history.push({
            t: now,
            tx: txRate,
            rx: rxRate,
            ping: this.netStats.lastPing || null
        });
        while (this.netStats.history.length > 60) this.netStats.history.shift();
        this.netStats.txBytes = 0;
        this.netStats.rxBytes = 0;
        this.netStats.lastSample = now;
    }

    getNetStats() {
        return this.netStats;
    }
}
