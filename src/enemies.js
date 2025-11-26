import * as THREE from 'three';
import deathSfx from './assets/mixkit-kill-blood-zombie.ogg';
import zombieGroanSfx from './assets/zombie.ogg';

export class EnemyManager {
    constructor(scene, player, world, settings) {
        this.scene = scene;
        this.player = player;
        this.world = world;
        this.enemies = [];
        this.spawnInterval = 5000; 
        this.lastSpawn = 0;
        this.killedCount = 0;
        this.groanBuffer = null;
        
        const count = (settings && (settings.gameMode === 'matrix' || settings.gameMode === 'studio')) ? 0 : (settings ? settings.enemyCount : 15);
        this.difficulty = settings ? settings.difficulty : 'medium';
        this.gameMode = settings && settings.gameMode ? settings.gameMode : 'survival';

        // Initial spawn
        for(let i=0; i<count; i++) this.spawnEnemy();
        
        // Load death SFX (Web Audio API)
        this.deathBuffer = null;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
                fetch(deathSfx)
                    .then(r => r.arrayBuffer())
                    .then(b => this.audioCtx.decodeAudioData(b))
                    .then(d => { 
                        this.deathBuffer = d; 
                        // Propagate buffer to already spawned enemies
                        this.enemies.forEach(e => {
                            e.audioCtx = this.audioCtx;
                            e.deathBuffer = d;
                        });
                    })
                    .catch(e => {});
                // Load proximity groan buffer
                fetch(zombieGroanSfx)
                    .then(r => r.arrayBuffer())
                    .then(b => this.audioCtx.decodeAudioData(b))
                    .then(d => {
                        this.groanBuffer = d;
                        this.enemies.forEach(e => {
                            e.audioCtx = this.audioCtx;
                            e.groanBuffer = d;
                        });
                    })
                    .catch(e => {});
            }
        } catch(e) {}
    }

    spawnEnemy(force = false) {
        if (!force && (this.gameMode === 'matrix' || this.gameMode === 'studio')) return;
        const spawnSpan = (this.world && this.world.halfMapSize) ? this.world.halfMapSize : 100;
        const x = (Math.random() - 0.5) * spawnSpan;
        const z = (Math.random() - 0.5) * spawnSpan;
        const groundY = (this.world && typeof this.world.getHeightAt === 'function') ? this.world.getHeightAt(x, z) : 0;
        
        const mapHalfSize = (this.world && this.world.halfMapSize) ? this.world.halfMapSize : 100;
        const enemy = new Bot(this.scene, x, groundY, z, this.difficulty, mapHalfSize, this.player);
        enemy.audioCtx = this.audioCtx; // Pass audio context to bot
        enemy.deathBuffer = this.deathBuffer; // Pass death buffer
        enemy.groanBuffer = this.groanBuffer; // Pass groan buffer
        enemy.world = this.world;
        this.enemies.push(enemy);
    }

    update(dt) {
        if (this.gameMode === 'matrix' || this.gameMode === 'studio') return;
        this.enemies.forEach(enemy => {
            enemy.update(dt, this.player);
            
            // Storm Damage
            const dist = Math.sqrt(enemy.position.x * enemy.position.x + enemy.position.z * enemy.position.z);
            if (dist > this.world.stormRadius) {
                enemy.takeDamage(5 * dt); // 5 dps from storm
            }
            // Keep inside bounds
            if (this.world && typeof this.world.halfMapSize === 'number') {
                const limit = this.world.halfMapSize - 1;
                enemy.position.x = Math.max(-limit, Math.min(limit, enemy.position.x));
                enemy.position.z = Math.max(-limit, Math.min(limit, enemy.position.z));
            }
        });
        
        // Remove dead enemies
        this.enemies = this.enemies.filter(enemy => {
            if (enemy.readyToDespawn) {
                this.killedCount++;
                return false;
            }
            return true;
        });
    }
}


class Bot {
    constructor(scene, x, y, z, difficulty, mapHalfSize = 100, player = null) {
        this.scene = scene;
        this.position = new THREE.Vector3(x, y, z);
        this.mapHalfSize = mapHalfSize;
        this.world = null;
        this.player = player;
        this.deathTimer = 0;
        this.deathDuration = 0;
        this.deathFallProgress = 0;
        this.readyToDespawn = false;
        this.groanBuffer = null;
        this.groanCooldown = 0;
        this.groanRange = 15;
        this._groanSource = null;
        this._groanGain = null;
        
        // Stats based on difficulty
        if (difficulty === 'easy') {
            this.health = 50;
            this.damage = 2;
            this.speed = 3.0; // Was 1.5
        } else if (difficulty === 'hard') {
            this.health = 150;
            this.damage = 10;
            this.speed = 6.0; // Was 3.5
        } else { // Medium
            this.health = 100;
            this.damage = 5;
            this.speed = 4.5; // Was 2.5
        }

        this.state = 'wander'; // wander, chase, attack
        this.isDead = false;
        this.attackRange = 2; // Melee range
        this.detectionRange = 25;
        this.attackCooldown = 1.5; // Slower attacks
        this.lastAttack = 0;
        // Wander AI
        this.wanderTarget = null;
        this.wanderTimer = 0;
        this.wanderChangeInterval = 2 + Math.random() * 4; // 2-6s

        this.createMesh();
    }

    createMesh() {
        this.mesh = new THREE.Group();
        this.mesh.position.copy(this.position);
        this.mesh.userData = { gameId: Math.random().toString(36).substr(2, 9).toUpperCase(), gameName: 'Zombie' };
        this.scene.add(this.mesh);

        const skinMat = new THREE.MeshStandardMaterial({ color: 0x8e44ad }); // Purple enemy (Zombie-like)
        const clothesMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });

        // Head
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), skinMat);
        head.position.y = 1.75;
        this.mesh.add(head);

        // Body
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.3), clothesMat);
        body.position.y = 1.1;
        this.mesh.add(body);

        // Arms - Pivots
        const armGeo = new THREE.BoxGeometry(0.2, 0.8, 0.2);
        armGeo.translate(0, -0.3, 0);

        this.leftArmPivot = new THREE.Group();
        this.leftArmPivot.position.set(-0.45, 1.4, 0);
        this.mesh.add(this.leftArmPivot);
        this.leftArmPivot.add(new THREE.Mesh(armGeo, skinMat));

        this.rightArmPivot = new THREE.Group();
        this.rightArmPivot.position.set(0.45, 1.4, 0);
        this.mesh.add(this.rightArmPivot);
        this.rightArmPivot.add(new THREE.Mesh(armGeo, skinMat));

        // Legs - Pivots
        const legGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
        legGeo.translate(0, -0.4, 0);

        this.leftLegPivot = new THREE.Group();
        this.leftLegPivot.position.set(-0.15, 0.7, 0);
        this.mesh.add(this.leftLegPivot);
        this.leftLegPivot.add(new THREE.Mesh(legGeo, clothesMat));

        this.rightLegPivot = new THREE.Group();
        this.rightLegPivot.position.set(0.15, 0.7, 0);
        this.mesh.add(this.rightLegPivot);
        this.rightLegPivot.add(new THREE.Mesh(legGeo, clothesMat));

        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        
        this.animTime = 0;
        this.attackAnimTime = 0;
        this.attackAnimDuration = 0.5;

        this.createHealthBar();
    }

    createHealthBar() {
        const bgGeo = new THREE.PlaneGeometry(1, 0.1);
        const bgMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        this.healthBarBg = new THREE.Mesh(bgGeo, bgMat);
        this.healthBarBg.position.y = 2.3;
        this.mesh.add(this.healthBarBg);

        const fgGeo = new THREE.PlaneGeometry(1, 0.1);
        const fgMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.healthBarFg = new THREE.Mesh(fgGeo, fgMat);
        this.healthBarFg.position.y = 2.3;
        this.healthBarFg.position.z = 0.01; // Slightly in front
        this.mesh.add(this.healthBarFg);
    }

    update(dt, player) {
        if (this.isDead) {
            this.updateDeath(dt);
            return;
        }

        // Groan when close to the player (alive only)
        this.groanCooldown = Math.max(0, this.groanCooldown - dt);
        if (this.groanBuffer && this.audioCtx && player && this.groanCooldown <= 0) {
            const distToPlayer = this.position.distanceTo(player.position);
            if (distToPlayer <= this.groanRange) {
                this.playGroan();
                // Slightly randomized interval to avoid synced spam
                this.groanCooldown = 2 + Math.random() * 2.5;
            }
        }

        const playerPos = player.position;

        // Update Health Bar Rotation (Look at camera)
        this.healthBarBg.lookAt(playerPos);
        this.healthBarFg.lookAt(playerPos);

        const dist = this.position.distanceTo(playerPos);
        
        // AI State Machine
        if (dist < this.detectionRange) {
            this.state = 'chase';
        } else {
            this.state = 'wander';
        }

        let isMoving = false;

        if (this.state === 'chase') {
            // Check if player is visible (line of sight)
            const canSeePlayer = this.hasLineOfSight(player, playerPos);
            
            if (dist < this.detectionRange && canSeePlayer) {
                // Chase player
                const direction = new THREE.Vector3().subVectors(playerPos, this.position).normalize();
                direction.y = 0; // Stay on ground
                
                // Maintain minimum distance (don't overlap with player)
                const minDistance = 2.0; // Minimum 2 units away
                if (dist > minDistance) { 
                    // Move towards player
                    const moveDir = direction.clone();
                    
                    // Add strafing (sine wave based on time + random offset per bot)
                    const strafe = Math.sin(performance.now() / 500 + this.position.x) * 0.5;
                    const strafeVec = new THREE.Vector3(direction.z, 0, -direction.x).multiplyScalar(strafe);
                    
                    moveDir.add(strafeVec).normalize();
                    
                    // Check collision before moving
                    const nextPos = this.position.clone().add(moveDir.multiplyScalar(this.speed * dt));
                    if (!this.checkCollision(nextPos)) {
                        this.position.copy(nextPos);
                    }
                    
                    this.mesh.lookAt(playerPos);
                    isMoving = true;
                } else {
                    // Too close, back away slightly
                    const backDir = direction.clone().multiplyScalar(-1);
                    const nextPos = this.position.clone().add(backDir.multiplyScalar(this.speed * dt * 0.5));
                    if (!this.checkCollision(nextPos)) {
                        this.position.copy(nextPos);
                    }
                    this.mesh.lookAt(playerPos);
                }

                // Attack
                if (dist < this.attackRange) { // Can attack if in melee range
                    const now = performance.now() / 1000;
                    if (now - this.lastAttack > this.attackCooldown) {
                        // Apply damage and trigger attack animation (handled below)
                        player.takeDamage(this.damage);
                        this.lastAttack = now;
                        this.attackAnimTime = this.attackAnimDuration;
                    }
                }
            } else {
                // Can't see player, switch to wander
                this.state = 'wander';
            }
        } else {
            // Wander logic (simple random movement)
            this.wanderTimer += dt;

            // Pick a new wander target periodically or if none
            if (!this.wanderTarget || this.wanderTimer > this.wanderChangeInterval) {
                // Choose a random point near current position but within world bounds
                const radius = 10 + Math.random() * 30; // wander radius
                const angle = Math.random() * Math.PI * 2;
                const tx = this.position.x + Math.cos(angle) * radius;
                const tz = this.position.z + Math.sin(angle) * radius;
                // Clamp to world bounds
                const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
                const wanderLimit = this.mapHalfSize * 0.9;
                const nx = clamp(tx, -wanderLimit, wanderLimit);
                const nz = clamp(tz, -wanderLimit, wanderLimit);
                this.wanderTarget = new THREE.Vector3(nx, 0, nz);
                this.wanderTimer = 0;
                this.wanderChangeInterval = 2 + Math.random() * 4;
            }

            if (this.wanderTarget) {
                const dir = new THREE.Vector3().subVectors(this.wanderTarget, this.position);
                dir.y = 0;
                const distToTarget = dir.length();
                if (distToTarget > 0.5) {
                    dir.normalize();
                    this.position.add(dir.multiplyScalar(this.speed * dt * 0.5)); // wander slower than chase
                    this.mesh.lookAt(this.wanderTarget.x, this.position.y, this.wanderTarget.z);
                    isMoving = true;
                } else {
                    // Reached target, wait a bit then pick another
                    this.wanderTimer += dt;
                    if (this.wanderTimer > this.wanderChangeInterval) {
                        this.wanderTarget = null;
                        this.wanderTimer = 0;
                    }
                }
            }
        }

        // Update Mesh
        this.mesh.position.copy(this.position);
        // Terrain adherence
        if (this.world && typeof this.world.getHeightAt === 'function') {
            const groundY = this.world.getHeightAt(this.position.x, this.position.z);
            this.mesh.position.y = Math.max(this.mesh.position.y, groundY);
            this.position.y = this.mesh.position.y;
        }
        
        // Animation
        if (isMoving) {
            this.animTime += dt * 5;
            const angle = Math.sin(this.animTime) * 0.5;
            
            this.leftLegPivot.rotation.x = angle;
            this.rightLegPivot.rotation.x = -angle;
            
            // Zombie arms (always up slightly)
            this.leftArmPivot.rotation.x = -Math.PI / 3 + angle * 0.2;
            this.rightArmPivot.rotation.x = -Math.PI / 3 - angle * 0.2;
        } else if (this.state !== 'attack') {
            // Idle
            this.leftLegPivot.rotation.x = 0;
            this.rightLegPivot.rotation.x = 0;
            this.leftArmPivot.rotation.x = -Math.PI / 3; // Zombie pose
            this.rightArmPivot.rotation.x = -Math.PI / 3;
        }

        // Attack animation (swing arms and slight lunge)
        if (this.attackAnimTime > 0) {
            this.attackAnimTime = Math.max(0, this.attackAnimTime - dt);
            const progress = 1 - (this.attackAnimTime / this.attackAnimDuration); // 0..1
            // Swing using sine for smooth motion
            const swing = Math.sin(progress * Math.PI) * 1.5; // swing amplitude
            this.leftArmPivot.rotation.x = -Math.PI / 2 + swing * 0.2;
            this.rightArmPivot.rotation.x = -Math.PI / 2 - swing * 0.2;

            // Lunge forward a bit at attack peak
            if (progress > 0.3 && progress < 0.7) {
                const forward = new THREE.Vector3();
                this.mesh.getWorldDirection(forward);
                forward.y = 0;
                forward.normalize();
                this.position.add(forward.multiplyScalar(0.02));
            }
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        
        // Update Health Bar
        const percent = Math.max(0, this.health / 100);
        this.healthBarFg.scale.x = percent;
        // Shift position to keep left aligned? 
        // Default plane is centered. Scaling X shrinks to center.
        // To align left, we'd need to translate.
        // Or just let it shrink to center, it's fine for now.

        // Flash effect (Safe traversal)
        this.mesh.traverse((child) => {
            if (child.isMesh && child !== this.healthBarBg && child !== this.healthBarFg) {
                const mat = child.material;
                if (!child.userData.originalColor && mat && mat.color) {
                    try { child.userData.originalColor = mat.color.clone(); } catch (e) { child.userData.originalColor = null; }
                }

                // Only set emissive on materials that support it (e.g., Standard, Phong, Lambert)
                if (mat && (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial || mat.isMeshLambertMaterial)) {
                    mat.emissive = new THREE.Color(0xff0000);
                } else if (mat && mat.color) {
                    // Fallback: tint the color temporarily for basic materials
                    try { mat.color = mat.color.clone().lerp(new THREE.Color(0xff0000), 0.6); } catch (e) { }
                }
            }
        });

        setTimeout(() => {
            if(!this.isDead) {
                this.mesh.traverse((child) => {
                    if (child.isMesh && child !== this.healthBarBg && child !== this.healthBarFg) {
                        const mat = child.material;
                        if (mat && (mat.isMeshStandardMaterial || mat.isMeshPhongMaterial || mat.isMeshLambertMaterial)) {
                            mat.emissive = new THREE.Color(0x000000);
                        } else if (mat && mat.color && child.userData && child.userData.originalColor) {
                            try { mat.color.copy(child.userData.originalColor); } catch (e) { }
                        }
                    }
                });
            }
        }, 100);

        if (this.health <= 0 && !this.isDead) {
            this.startDeath();
        }
    }
    
    playDeathSound() {
        try {
            const src = this.audioCtx.createBufferSource();
            src.buffer = this.deathBuffer;
            const gain = this.audioCtx.createGain();
            gain.gain.value = 0.7; // Volume (increased from 0.5)
            src.connect(gain);
            gain.connect(this.audioCtx.destination);
            src.start(0);
        } catch (e) {
            console.warn('playDeathSound error:', e);
        }
    }

    checkCollision(nextPos) {
        // Check collision with world objects (houses, trees, etc)
        if (!this.scene) return false;
        
        const checkRadius = 0.5; // NPC collision radius
        
        // Check all objects in scene
        for (let child of this.scene.children) {
            if (child.userData && (child.userData.type === 'house' || child.userData.type === 'tree')) {
                const objPos = child.position;
                const dist = Math.sqrt(
                    Math.pow(nextPos.x - objPos.x, 2) + 
                    Math.pow(nextPos.z - objPos.z, 2)
                );
                
                // Simple radius-based collision
                const objRadius = child.userData.type === 'house' ? 5 : 2;
                if (dist < (checkRadius + objRadius)) {
                    return true; // Collision detected
                }
            }
        }
        
        return false; // No collision
    }
    
    hasLineOfSight(player, playerPos) {
        // Raycast from NPC to player to check for obstacles
        if (!this.scene) return true;
        
        const direction = new THREE.Vector3().subVectors(playerPos, this.position).normalize();
        const distance = this.position.distanceTo(playerPos);
        
        const raycaster = new THREE.Raycaster(
            this.position.clone().add(new THREE.Vector3(0, 1, 0)), // Start from head height
            direction,
            0,
            distance
        );
        
        // Check for obstacles
        const intersects = raycaster.intersectObjects(this.scene.children, true);
        
        for (let intersect of intersects) {
            // Ignore self, player, and non-blocking objects
            if (intersect.object === this.mesh || 
                intersect.object.parent === this.mesh ||
                intersect.object === player.mesh ||
                intersect.object.parent === player.mesh) {
                continue;
            }
            
            // Check if it's a blocking object (house, tree)
            let obj = intersect.object;
            while (obj.parent && obj.parent !== this.scene) {
                obj = obj.parent;
            }
            
            if (obj.userData && (obj.userData.type === 'house' || obj.userData.type === 'tree')) {
                return false; // Line of sight blocked
            }
        }
        
        return true; // Clear line of sight
    }

    startDeath() {
        this.isDead = true;
        this.deathTimer = 0;
        this.deathFallProgress = 0;
        this.deathDuration = 3 + Math.random() * 2; // 3–5 seconds before despawn
        this.stopGroan();

        // Hide health bar during death
        if (this.healthBarBg) this.healthBarBg.visible = false;
        if (this.healthBarFg) this.healthBarFg.visible = false;

        // Play death sound only if player is nearby
        const hearRadius = 25;
        const playerPos = this.player && this.player.position;
        const canHear = playerPos ? this.position.distanceTo(playerPos) <= hearRadius : true;
        if (canHear) {
            try {
                if (this.audioCtx && this.deathBuffer) {
                    // Resume AudioContext if suspended (mobile requirement)
                    if (this.audioCtx.state === 'suspended') {
                        this.audioCtx.resume().then(() => {
                            this.playDeathSound();
                        });
                    } else if (this.audioCtx.state === 'running') {
                        this.playDeathSound();
                    }
            }
        } catch (e) {
            console.warn('Error playing death sound:', e);
        }
    }
    }

    updateDeath(dt) {
        // Smoothly tilt forward and sink a bit
        this.deathFallProgress = Math.min(1, this.deathFallProgress + dt * 2.5);
        const tilt = -Math.PI / 2 * this.deathFallProgress;
        if (this.mesh) {
            this.mesh.rotation.x = tilt;
            // Drop slightly so it rests on the ground
            this.mesh.position.y = Math.max(0, this.mesh.position.y - dt * 0.6);
        }

        this.deathTimer += dt;
        if (this.deathTimer >= (this.deathDuration || 3)) {
            if (this.mesh && this.mesh.parent) {
                this.scene.remove(this.mesh);
            }
            this.readyToDespawn = true;
        }
    }

    playGroan() {
        try {
            if (!this.audioCtx || !this.groanBuffer) return;
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume().then(() => this.playGroan());
                return;
            }
            const src = this.audioCtx.createBufferSource();
            src.buffer = this.groanBuffer;
            const gain = this.audioCtx.createGain();
            gain.gain.value = 0.45;
            src.connect(gain);
            gain.connect(this.audioCtx.destination);
            src.onended = () => {
                this._groanSource = null;
                this._groanGain = null;
            };
            src.start(0);
            this._groanSource = src;
            this._groanGain = gain;
        } catch (e) {
            console.warn('playGroan error:', e);
        }
    }

    stopGroan() {
        if (this._groanSource) {
            try { this._groanSource.stop(); } catch (e) {}
            try { this._groanSource.disconnect(); } catch (e) {}
            this._groanSource = null;
        }
        if (this._groanGain) {
            try { this._groanGain.disconnect(); } catch (e) {}
            this._groanGain = null;
        }
    }
}
