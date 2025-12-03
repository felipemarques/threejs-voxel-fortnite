import * as THREE from 'three';

export class MultiplayerClient {
    constructor(options) {
        const { player, scene, url, nick = 'Player', color = '#29b6f6', roomCode = 'PUBLIC', settings = null, customSpawn = null } = options;
        this.player = player;
        this.scene = scene;
        this.url = url;
        this.nick = nick;
        this.color = color;
        this.roomCode = roomCode || 'PUBLIC';
        this.customSpawnStr = customSpawn || null; // Store as string "x,y,z"
        this.socket = null;
        this.id = null;
        this.others = new Map(); // id -> mesh
        this.lastSend = 0;
        this.sendInterval = 0.05; // seconds (20 Hz)
        this.lastSentPos = null;
        this.lastSentRot = null;
        this.lastAnimSig = null;
        this.heartbeatTimer = 0;
        this.isHost = false;
        this.roomSettings = settings;
        this._manualClose = false;
        this.deadPeers = new Set();
        this.matchLive = false;
        this.remoteStates = new Map(); // id -> [{ t, pos, anim, nick, color }]
        this.remoteLastYaw = new Map(); // id -> last unwrapped yaw for continuity
        this.interpDelayMs = 100;
        this.maxBufferMs = 1000;
        this.maxExtrapMs = 80;
        this.remoteFaceOffset = 0; // adjust facing if model forward differs from camera forward
        this._now = (typeof performance !== 'undefined' && performance.now.bind(performance)) || Date.now;
        this._tmpVec = new THREE.Vector3();
        this.enemyManager = null;
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
        this.showHitboxes = false; // Debug: toggle bounding boxes
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
                if (data.custom) {
                    this.localCustom = data.custom;
                }
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
                if (this.onHostChanged) this.onHostChanged(this.isHost);
                if (data.settings && this.onSettings) this.onSettings(data.settings);
            } else if (data.type === 'player-join') {
                // Create placeholder, ignore self
                if (data.id && data.id !== this.id) {
                    this.ensureRemote(data.id, null, data.custom);
                }
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'player-leave') {
                this.removeRemote(data.id);
                if (this.onPeersChanged) this.onPeersChanged(this.getPeerCount());
            } else if (data.type === 'state' && data.id !== this.id) {
                if (this.deadPeers.has(data.id)) return; // ignore updates from dead peers
                const mesh = this.ensureRemote(data.id, data.color, data.custom);
                const snapTime = typeof data.ts === 'number' ? data.ts : this._now();
                this.bufferRemoteState(data.id, {
                    t: snapTime,
                    pos: data.pos,
                    rot: data.rot,
                    fwd: data.fwd,
                    anim: data.anim,
                    nick: data.nick,
                    color: data.color,
                    custom: data.custom ? { ...data.custom } : null
                });
                if (mesh && data.color && mesh.userData?.color !== data.color) {
                    this.applyColorToTorso(mesh, data.color);
                }
                this.applyRemoteCustomization(mesh, data.custom);
                if (mesh && mesh.userData) {
                    mesh.userData.custom = data.custom ? { ...data.custom } : null;
                }
            } else if (data.type === 'hit') {
                // DEPRECATED: Old direct hit messages
                console.warn('[DEPRECATED] Received old hit message, use hit-confirm');
                if (this.onHit) {
                    this.onHit(data);
                }
            } else if (data.type === 'hit-confirm') {
                // Show hit marker
                if (data.position && this.scene) {
                    this.createHitMarker(data.position);
                }
                
                // Detailed Debug Log
                if (data.hitPoint && data.region) {
                    console.log(`%c[HIT CONFIRM] Region: ${data.region} | Damage: ${data.damage}`, 'color: #00ff00; font-weight: bold; font-size: 14px;');
                    console.log(`Exact Hit: (${data.hitPoint.x.toFixed(2)}, ${data.hitPoint.y.toFixed(2)}, ${data.hitPoint.z.toFixed(2)})`);
                    
                    // Visual feedback on screen (optional, but requested)
                    const debugInfo = document.getElementById('debug-info');
                    if (debugInfo) {
                        debugInfo.style.display = 'block';
                        document.getElementById('debug-target-name').innerText = `HIT: ${data.region}`;
                        document.getElementById('debug-target-id').innerText = `DMG: ${data.damage}`;
                    }
                }

                // Server confirmed a hit
                if (this.onHitConfirm) {
                    this.onHitConfirm(data);
                }
                
                // If we are the target, take damage
                if (data.targetId === this.id && this.player) {
                    if (typeof this.player.takeDamage === 'function') {
                        this.player.takeDamage(data.damage);
                    }
                }
                
                // Visual feedback for all clients
                if (data.position && this.scene) {
                    this.createHitMarker(data.position);
                    
                    /* DISABLED: Debug raycast line (performance issue)
                    // DEBUG: Show raycast direction line
                    if (data.shooterId === this.id && data.direction && this.player) {
                        // Draw line from shooter to hit point
                        const start = this.player.mesh.position.clone();
                        start.y += 1.6; // Eye level
                        const end = new THREE.Vector3(data.hitPoint.x, data.hitPoint.y, data.hitPoint.z);
                        
                        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
                        const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
                        const line = new THREE.Line(geometry, material);
                        this.scene.add(line);
                        
                        // Remove after 2 seconds
                        setTimeout(() => {
                            this.scene.remove(line);
                            geometry.dispose();
                            material.dispose();
                        }, 2000);
                    }
                    */
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
            } else if (data.type === 'zombie-hit') {
                if (this.isHost && this.enemyManager && data.id && typeof data.amount === 'number') {
                    const health = this.enemyManager.applyRemoteZombieHit(data.id, data.amount);
                    if (typeof health === 'number') {
                        this.sendZombieState(data.id, health);
                    }
                }
            } else if (data.type === 'zombie-state') {
                if (this.enemyManager && data.id && typeof data.health === 'number') {
                    this.enemyManager.syncZombieState(data.id, data.health);
                }
            } else if (data.type === 'player-dead') {
                if (data.id) {
                    // Handle local player death
                    if (data.id === this.id) {
                        if (this.player && typeof this.player.die === 'function' && !this.player.isDead) {
                            console.log('[MP] Received own death confirmation from server');
                            this.player.die();
                        }
                    } else {
                        // Handle remote player death
                        this.deadPeers.add(data.id);
                        this.killRemote(data.id);
                        if (this.onPeerDeath) this.onPeerDeath(data.id);
                    }
                }
            } else if (data.type === 'pong' && typeof data.ts === 'number') {
                const rtt = this._now() - data.ts;
                this.netStats.lastPing = rtt;
            }
        } catch (e) {
            console.warn('Multiplayer parse error:', e);
        }
    }

    ensureRemote(id, colorOverride = null, custom = null) {
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
            if (mesh.userData) mesh.userData.custom = custom ? { ...custom } : null;
            this.applyRemoteCustomization(mesh, custom);
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
        if (fallback.userData) fallback.userData.custom = custom ? { ...custom } : null;
        this.applyRemoteCustomization(fallback, custom);
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
        
        // Add debug hitbox (invisible by default)
        this.addDebugHitbox(clone);
        
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
        // Use camera forward vector to derive facing; send forward dir explicitly to avoid wrap issues
        let rotToSend = 0;
        let fwd = { x: 0, z: 1 };
        
        // USER REQUEST: Remove mouse/camera synchronization
        // Only use mesh rotation if available, otherwise default to 0
        if (this.player && this.player.mesh && this.player.mesh.rotation) {
             rotToSend = this.player.mesh.rotation.y;
             fwd = { x: Math.sin(rotToSend), z: Math.cos(rotToSend) };
        }
        
        /* 
        // DISABLED: Camera-based rotation sync
        if (this.player && this.player.camera && this.player.camera.getWorldDirection) {
            const dir = new THREE.Vector3();
            this.player.camera.getWorldDirection(dir);
            dir.y = 0;
            if (dir.lengthSq() < 1e-6 && this.player.mesh && this.player.mesh.rotation) {
                rotToSend = this.player.mesh.rotation.y;
                fwd = { x: Math.sin(rotToSend), z: Math.cos(rotToSend) };
            } else {
                dir.normalize();
                rotToSend = Math.atan2(dir.x, dir.z);
                fwd = { x: dir.x, z: dir.z };
            }
        } else {
            const viewYaw = (typeof this.player.yaw === 'number') ? this.player.yaw : (this.player.mesh && this.player.mesh.rotation ? this.player.mesh.rotation.y : 0);
            rotToSend = this._wrapAngle(viewYaw);
            fwd = { x: Math.sin(rotToSend), z: Math.cos(rotToSend) };
        }
        */
        // NOTE: Removed Math.PI offset that was causing inverted facing
        // rotToSend = this._wrapAngle(rotToSend + Math.PI);
        // fwd = { x: Math.sin(rotToSend), z: Math.cos(rotToSend) };
        
        // Parse custom spawn from settings
        let customSpawn = null;
        if (this.customSpawnStr && typeof this.customSpawnStr === 'string') {
            const parts = this.customSpawnStr.split(',').map(s => parseFloat(s.trim()));
            if (parts.length === 3 && parts.every(n => !isNaN(n))) {
                customSpawn = {
                    x: parts[0],
                    y: parts[1],
                    z: parts[2]
                };
            }
        }

        const payload = {
            type: 'state',
            pos: { x: pos.x, y: pos.y, z: pos.z },
            rot: rotToSend,
            fwd,
            nick: this.nick,
            color: this.color,
            anim,
            ts: this._now(),
            custom: { ...this.getCustomization() },
            customSpawn // Send requested spawn to server
        };

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
        const rotChanged = Math.abs(this._angleDiff(this.lastSentRot ?? rotToSend, rotToSend)) > 0.02;
        const heartbeatDue = this.heartbeatTimer >= 5;

        if (moved || animChanged || rotChanged || heartbeatDue) {
            const msg = JSON.stringify(payload);
            try { this.socket.send(msg); } catch (e) {}
            this.trackTx(msg.length);
            this.lastSentPos = { x: pos.x, y: pos.y, z: pos.z };
            this.lastAnimSig = animSig;
            this.lastSentRot = rotToSend;
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
        // DEPRECATED: Old client-side hit detection
        // Kept for backward compatibility but server ignores this
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!targetId || typeof amount !== 'number') return;
        const payload = { type: 'hit', targetId, amount };
        const msg = JSON.stringify(payload);
        try { this.socket.send(msg); } catch (e) {}
        this.trackTx(msg.length);
    }

    sendShoot(direction, weaponName, origin = null) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        
        const payload = {
            type: 'shoot',
            direction: { x: direction.x, y: direction.y, z: direction.z },
            weapon: weaponName || 'Pistol',
            ts: this._now()
        };
        
        // Include origin if provided (for TPS camera)
        if (origin) {
            payload.origin = { x: origin.x, y: origin.y, z: origin.z };
        }
        
        this.socket.send(JSON.stringify(payload));
    }

    getPeerCount() {
        return 1 + this.others.size;
    }

    sendJoin() {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        try {
            const msg = JSON.stringify({ type: 'join', room: this.roomCode, nick: this.nick, color: this.color, custom: this.getCustomization() });
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
        if (typeof state.rot === 'number') {
            const prev = this.remoteLastYaw.get(id);
            const unwrapped = this._unwrapAngle(state.rot, prev);
            state.rot = unwrapped;
            this.remoteLastYaw.set(id, unwrapped);
        }
        arr.push(state);
        while (arr.length > 24) arr.shift();
        this.remoteStates.set(id, arr);
    }

    applyRemoteCustomization(mesh, custom) {
        if (!mesh || !custom) return;
        const head = mesh.getObjectByName('playerHead');
        if (!head) return;
        this.removeNodesByRole(head, 'playerMouth');
        const mouth = this._buildMouthMesh(custom.mouthStyle || 'serious');
        if (mouth) head.add(mouth);
        this.setHatVisibility(head, custom.showHat !== false);
    }

    removeNodesByRole(root, role) {
        if (!root) return;
        const toRemove = [];
        root.traverse(node => {
            if (node.userData && node.userData.role === role) {
                toRemove.push(node);
            }
        });
        toRemove.forEach(node => {
            if (node.parent) node.parent.remove(node);
        });
    }

    setHatVisibility(root, visible) {
        if (!root) return;
        root.traverse(node => {
            if (node.userData && node.userData.role === 'playerHat') {
                node.visible = visible;
            }
        });
    }

    _buildMouthMesh(style) {
        const s = (style || 'serious').toLowerCase();
        const matBase = new THREE.MeshStandardMaterial({ color: 0x2b1b10, roughness: 0.6, metalness: 0 });
        let mesh = null;
        if (s === 'smile') {
            const group = new THREE.Group();
            group.userData = { role: 'playerMouth' };
            group.name = 'playerMouth';
            const segMat = matBase.clone();
            const seg1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.02), segMat);
            const seg2 = seg1.clone();
            const seg3 = seg1.clone();
            seg1.position.set(-0.1, -0.15, 0.26);
            seg1.rotation.z = -0.2;
            seg2.position.set(0, -0.16, 0.26);
            seg3.position.set(0.1, -0.15, 0.26);
            seg3.rotation.z = 0.2;
            [seg1, seg2, seg3].forEach(seg => {
                seg.userData = { role: 'playerMouth' };
                seg.name = 'playerMouthSeg';
            });
            group.add(seg1, seg2, seg3);
            mesh = group;
        } else if (s === 'angry') {
            const mat = new THREE.MeshStandardMaterial({ color: 0x5a0c0c, roughness: 0.4 });
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.02), mat);
            mesh.position.set(0, -0.16, 0.26);
            mesh.rotation.z = -0.18;
        } else if (s === 'surprised') {
            mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 20), matBase);
            mesh.position.set(0, -0.14, 0.26);
            mesh.rotation.x = Math.PI / 2;
        } else if (s === 'none') {
            return null;
        } else {
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.02), matBase);
            mesh.position.set(0, -0.16, 0.26);
        }
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        if (!mesh.userData) mesh.userData = {};
        mesh.userData.role = 'playerMouth';
        mesh.name = mesh.name || 'playerMouth';
        return mesh;
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
                if (mesh.rotation) {
                    if (typeof latest.rot === 'number') {
                        mesh.rotation.y = this._wrapAngle(latest.rot); // Removed remoteFaceOffset
                    } else if (latest.fwd && typeof latest.fwd.x === 'number' && typeof latest.fwd.z === 'number') {
                        mesh.rotation.y = this._wrapAngle(Math.atan2(latest.fwd.x, latest.fwd.z)); // Removed remoteFaceOffset
                    }
                }
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

            // Interpolate facing (yaw). Keep shortest angle path.
            const baseYawA = typeof a.rot === 'number'
                ? a.rot
                : (typeof a.fwd?.x === 'number' && typeof a.fwd?.z === 'number' ? Math.atan2(a.fwd.x, a.fwd.z) : mesh.rotation.y || 0);
            const baseYawB = typeof b.rot === 'number'
                ? b.rot
                : (typeof b.fwd?.x === 'number' && typeof b.fwd?.z === 'number' ? Math.atan2(b.fwd.x, b.fwd.z) : baseYawA);
            // Removed remoteFaceOffset adjustments
            const yawA = baseYawA;
            const yawB = baseYawB;
            const wrapAngle = (ang) => {
                while (ang > Math.PI) ang -= Math.PI * 2;
                while (ang < -Math.PI) ang += Math.PI * 2;
                return ang;
            };
            const deltaYaw = yawB - yawA;
            const interpYaw = yawA + deltaYaw * alpha;
            if (mesh.rotation) mesh.rotation.y = wrapAngle(interpYaw); // Removed remoteFaceOffset


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
            const customToApply = b.custom || a.custom || (mesh.userData ? mesh.userData.custom : null);
            this.applyRemoteCustomization(mesh, customToApply);
            if (mesh.userData) mesh.userData.custom = customToApply ? { ...customToApply } : null;
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

    sendZombieHit(id, amount) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!id || typeof amount !== 'number') return;
        const msg = JSON.stringify({ type: 'zombie-hit', id, amount });
        try { this.socket.send(msg); } catch (e) {}
        this.trackTx(msg.length);
    }

    sendZombieState(id, health) {
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
        if (!id || typeof health !== 'number') return;
        const msg = JSON.stringify({ type: 'zombie-state', id, health });
        try { this.socket.send(msg); } catch (e) {}
        this.trackTx(msg.length);
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

    getCustomization() {
        if (!this.player) return { mouthStyle: 'serious', showHat: true };
        return {
            mouthStyle: this.player.mouthStyle || 'serious',
            showHat: this.player.showHat !== false
        };
    }

    setEnemyManager(em) {
        this.enemyManager = em;
    }

    _wrapAngle(a) {
        let ang = a;
        while (ang > Math.PI) ang -= Math.PI * 2;
        while (ang < -Math.PI) ang += Math.PI * 2;
        return ang;
    }

    _angleDiff(a, b) {
        return this._wrapAngle(a - b);
    }

    _unwrapAngle(angle, prev) {
        if (typeof prev !== 'number') return angle;
        let a = angle;
        let diff = a - prev;
        while (diff > Math.PI) { a -= Math.PI * 2; diff = a - prev; }
        while (diff < -Math.PI) { a += Math.PI * 2; diff = a - prev; }
        return a;
    }
    createHitMarker(position) {
        try {
            const geometry = new THREE.SphereGeometry(0.1, 8, 8);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0xff0000, 
                transparent: true,
                opacity: 0.8 
            });
            const marker = new THREE.Mesh(geometry, material);
            marker.position.set(position.x, position.y, position.z);
            this.scene.add(marker);
            
            setTimeout(() => {
                this.scene.remove(marker);
                geometry.dispose();
                material.dispose();
            }, 200);
        } catch (e) {
            // Non-fatal visual feedback error
        }
    }
    
    addDebugHitbox(mesh) {
        // Add wireframe sphere matching server hitbox (radius 0.8)
        const geometry = new THREE.SphereGeometry(0.8, 16, 12);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xff0000, 
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        const hitbox = new THREE.Mesh(geometry, material);
        hitbox.position.y = 0.9; // Match server hitbox offset
        hitbox.name = 'debugHitbox';
        hitbox.visible = false; // Hidden by default
        mesh.add(hitbox);
    }
    
    toggleHitboxes() {
        this.showHitboxes = !this.showHitboxes;
        console.log(`[DEBUG] Hitboxes ${this.showHitboxes ? 'ON' : 'OFF'}`);
        
        // Toggle visibility for all remote players
        this.others.forEach(mesh => {
            const hitbox = mesh.getObjectByName('debugHitbox');
            if (hitbox) {
                hitbox.visible = this.showHitboxes;
            }
        });
    }
}
