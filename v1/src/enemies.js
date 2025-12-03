import * as THREE from 'three';
import deathSfx from './assets/mixkit-kill-blood-zombie.ogg';
import zombieGroanSfx from './assets/zombie.ogg';
import { createNormalZombie } from './objects/normalZombieElement.js';
import { createFatZombie } from './objects/fatZombieElement.js';
import { createBigZombie } from './objects/bigZombieElement.js';
import { createSlenderman } from './objects/slendermanElement.js';
import { createSpider } from './objects/spiderElement.js';

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
        
        const count = (settings && (settings.gameMode === 'matrix' || settings.gameMode === 'studio' || settings.gameMode === 'matrix-ai'))
            ? 0
            : (settings ? settings.enemyCount : 15);
        this.targetCount = count;
        this.difficulty = settings ? settings.difficulty : 'medium';
        this.gameMode = settings && settings.gameMode ? settings.gameMode : 'arcade';
        this.sfxVolume = settings && settings.sfxVolume !== undefined ? settings.sfxVolume / 100 : 0.5;
        this.studioAiEnabled = false;

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

    spawnEnemy(force = false, enemyType = null) {
        if (!force && (this.gameMode === 'matrix' || this.gameMode === 'studio')) return;
        const spawnSpan = (this.world && this.world.halfMapSize) ? this.world.halfMapSize : 100;
        let x = (Math.random() - 0.5) * spawnSpan;
        let z = (Math.random() - 0.5) * spawnSpan;
        
        // Studio mode: spawn near player
        if (this.gameMode === 'studio' && this.player) {
            const offset = 5;
            x = this.player.position.x + (Math.random() - 0.5) * offset;
            z = this.player.position.z + (Math.random() - 0.5) * offset;
        }
        
        // Matrix AI Builder: ensure enemies spawn far (>= mapHalfSize * 0.6 away from player)
        if (this.gameMode === 'matrix-ai' && this.player) {
            const minDist = (this.world && this.world.halfMapSize ? this.world.halfMapSize : 100) * 0.6;
            let attempts = 0;
            while (attempts < 10) {
                const px = this.player.position.x;
                const pz = this.player.position.z;
                const dx = x - px;
                const dz = z - pz;
                if (Math.sqrt(dx * dx + dz * dz) >= minDist) break;
                x = (Math.random() - 0.5) * spawnSpan;
                z = (Math.random() - 0.5) * spawnSpan;
                attempts++;
            }
        }
        const groundY = (this.world && typeof this.world.getHeightAt === 'function') ? this.world.getHeightAt(x, z) : 0;
        
        const mapHalfSize = (this.world && this.world.halfMapSize) ? this.world.halfMapSize : 100;
        
        // Determine zombie type
        let isBig = false;
        let zombieType = enemyType || 'normal'; // Use provided type or default to 'normal'
        
        // If no specific type provided, use game mode logic
        if (!enemyType) {
            if (this.gameMode === 'survival') {
                // Count existing zombies by type
                const bigCount = this.enemies.filter(e => e.isBig).length;
                const slenderCount = this.enemies.filter(e => e.zombieType === 'slender').length;
                
                // Calculate allowed big zombies based on total target count (1 per 5)
                const allowedBig = Math.floor(this.targetCount / 5);
                // Calculate allowed slenderman (1 per 10)
                const allowedSlender = Math.floor(this.targetCount / 10);
                
                if (bigCount < allowedBig) {
                    isBig = true;
                    zombieType = 'big';
                } else if (slenderCount < allowedSlender) {
                    zombieType = 'slender';
                } else {
                    // For remaining zombies, alternate between normal and fat (1:1 ratio)
                    const normalCount = this.enemies.filter(e => !e.isBig && e.zombieType === 'normal').length;
                    const fatCount = this.enemies.filter(e => !e.isBig && e.zombieType === 'fat').length;
                    zombieType = fatCount < normalCount ? 'fat' : 'normal';
                }
            } else if (this.gameMode === 'arcade') {
                // Count slenderman
                const slenderCount = this.enemies.filter(e => e.zombieType === 'slender').length;
                const allowedSlender = Math.floor(this.targetCount / 10);
                
                if (slenderCount < allowedSlender) {
                    zombieType = 'slender';
                } else {
                    // In arcade mode, alternate between normal and fat (1:1 ratio)
                    const normalCount = this.enemies.filter(e => e.zombieType === 'normal').length;
                    const fatCount = this.enemies.filter(e => e.zombieType === 'fat').length;
                    zombieType = fatCount < normalCount ? 'fat' : 'normal';
                }
            }
        } else {
            // If specific type provided, set isBig flag for big zombies
            if (zombieType === 'big') {
                isBig = true;
            }
        }

        const enemy = new Bot(this.scene, x, groundY, z, this.difficulty, mapHalfSize, this.player, isBig, zombieType);
        enemy.audioCtx = this.audioCtx; // Pass audio context to bot
        enemy.deathBuffer = this.deathBuffer; // Pass death buffer
        enemy.groanBuffer = this.groanBuffer; // Pass groan buffer
        enemy.world = this.world;
        
        // Studio mode: disable AI, keep idle only
        if (this.gameMode === 'studio') {
            enemy.studioMode = true;
            enemy.isStudioNPC = true;
        }
        
        this.enemies.push(enemy);
        
        if (force && this.gameMode === 'studio') {
            this.studioAiEnabled = false; // Keep AI disabled in studio
        }
        
        return enemy;
    }

    spawnEnemyAt(x, z, type = 'normal') {
        const groundY = (this.world && typeof this.world.getHeightAt === 'function') ? this.world.getHeightAt(x, z) : 0;
        const mapHalfSize = (this.world && this.world.halfMapSize) ? this.world.halfMapSize : 100;
        
        let isBig = false;
        let zombieType = type;
        
        if (zombieType === 'big') isBig = true;

        const enemy = new Bot(this.scene, x, groundY, z, this.difficulty, mapHalfSize, this.player, isBig, zombieType);
        enemy.audioCtx = this.audioCtx;
        enemy.deathBuffer = this.deathBuffer;
        enemy.groanBuffer = this.groanBuffer;
        enemy.world = this.world;
        
        // Always studio mode for manual placement
        enemy.studioMode = true;
        enemy.isStudioNPC = true;
        
        this.enemies.push(enemy);
        return enemy;
    }

    setTargetCount(count) {
        if (typeof count === 'number' && count >= 0) {
            this.targetCount = count;
        }
    }

    update(dt) {
        if (this.gameMode === 'matrix') return;
        if (this.gameMode === 'studio' && !this.studioAiEnabled) return;
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

        if (this.gameMode === 'survival' && this.targetCount !== undefined && this.targetCount > 0) {
            const deficit = this.targetCount - this.enemies.length;
            if (deficit > 0) {
                for (let i = 0; i < deficit; i++) this.spawnEnemy();
            }
        }
    }

    getEnemyById(id) {
        if (!id) return null;
        return this.enemies.find(e => e && e.mesh && e.mesh.userData && e.mesh.userData.gameId === id) || null;
    }

    applyRemoteZombieHit(id, amount) {
        const enemy = this.getEnemyById(id);
        if (!enemy || enemy.isDead) return null;
        enemy.takeDamage(amount);
        return enemy.health;
    }

    syncZombieState(id, health) {
        const enemy = this.getEnemyById(id);
        if (!enemy) return;
        enemy.health = health;
        const denom = enemy.maxHealth || 100;
        const percent = Math.max(0, enemy.health / denom);
        if (enemy.healthBarFg) {
            enemy.healthBarFg.scale.x = percent;
        }
        if (health <= 0 && !enemy.isDead) {
            enemy.startDeath();
        }
    }

    setSFXVolume(volume) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
        this.enemies.forEach(e => {
            if (e && typeof e.setSFXVolume === 'function') {
                e.setSFXVolume(this.sfxVolume);
            }
        });
    }
}


class Bot {
    constructor(scene, x, y, z, difficulty, mapHalfSize = 100, player = null, isBig = false, zombieType = 'normal', sfxVolume = 0.5) {
        this.scene = scene;
        this.position = new THREE.Vector3(x, y, z);
        this.mapHalfSize = mapHalfSize;
        this.world = null;
        this.player = player;
        this.isBig = isBig;
        this.zombieType = zombieType; // 'normal', 'fat', or 'big'
        this.deathTimer = 0;
        this.deathDuration = 0;
        this.deathFallProgress = 0;
        this.readyToDespawn = false;
        this.groanBuffer = null;
        this.groanCooldown = 0;
        this.groanRange = 15;
        this._groanSource = null;
        this._groanGain = null;
        this.sfxVolume = sfxVolume;
        
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

        // Apply Big Zombie modifiers
        if (this.isBig) {
            this.health *= 5;
            this.damage *= 2; // Increased damage for big zombie
            this.speed *= 0.75; // 25% slower
        }
        
        // Apply FatZombie modifiers
        if (this.zombieType === 'fat') {
            this.health *= 1.5; // 50% more health
            this.speed *= 0.5; // 50% slower
        }
        
        // Apply Slenderman modifiers
        if (this.zombieType === 'slender') {
            this.health *= 0.8; // 20% less health (glass cannon)
            this.speed *= 1.5; // 50% faster
            this.damage *= 1.5; // 50% more damage
            this.attackRange = 3.0; // Longer reach
        }

        this.maxHealth = this.health;

        this.state = 'wander'; // wander, chase, attack
        this.isDead = false;
        this.attackRange = this.isBig ? 3.5 : 2; // Larger attack range for big zombie
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
        // Set name based on zombie type
        let zombieName = 'Zombie';
        if (this.isBig) {
            zombieName = 'Big Zombie';
        } else if (this.zombieType === 'fat') {
            zombieName = 'Fat Zombie';
        } else if (this.zombieType === 'slender') {
            zombieName = 'Slenderman';
        }

        // Use the appropriate module to create the zombie mesh
        let zombieData;
        const x = this.position.x;
        const y = this.position.y;
        const z = this.position.z;

        if (this.zombieType === 'slender') {
            zombieData = createSlenderman(this.scene, x, y, z);
        } else if (this.isBig) {
            zombieData = createBigZombie(this.scene, x, y, z);
        } else if (this.zombieType === 'fat') {
            zombieData = createFatZombie(this.scene, x, y, z);
        } else if (this.zombieType === 'spider') {
            zombieData = createSpider(this.scene, x, y, z);
        } else {
            zombieData = createNormalZombie(this.scene, x, y, z);
        }

        // Extract data from the module
        this.mesh = zombieData.mesh;
        this.leftArmPivot = zombieData.leftArmPivot;
        this.rightArmPivot = zombieData.rightArmPivot;
        this.leftLegPivot = zombieData.leftLegPivot;
        this.rightLegPivot = zombieData.rightLegPivot;

        // Set userData
        this.mesh.userData = { 
            gameId: Math.random().toString(36).substr(2, 9).toUpperCase(), 
            gameName: zombieName,
            isNPC: true  // Mark as NPC for selection
        };

        this.animTime = 0;
        this.attackAnimTime = 0;
        this.attackAnimDuration = 0.5;

        this.createHealthBar();
    }

    createHealthBar() {
        const bgGeo = new THREE.PlaneGeometry(1, 0.1);
        const bgMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        this.healthBarBg = new THREE.Mesh(bgGeo, bgMat);
        // Position health bar higher for Slenderman
        const barY = this.zombieType === 'slender' ? 3.0 : 2.3;
        this.healthBarBg.position.y = barY;
        this.mesh.add(this.healthBarBg);

        const fgGeo = new THREE.PlaneGeometry(1, 0.1);
        const fgMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.healthBarFg = new THREE.Mesh(fgGeo, fgMat);
        this.healthBarFg.position.y = barY;
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

        // Studio Mode: Skip AI, only play idle animation
        if (this.studioMode || this.isStudioNPC) {
            // Just play idle animation
            this.animTime += dt;
            this.animateIdle();
            return;
        }

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
        const denom = this.maxHealth || 100;
        const percent = Math.max(0, this.health / denom);
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
            gain.gain.value = this.sfxVolume * 1.4; // Slightly louder than base volume
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
            gain.gain.value = this.sfxVolume * 0.9;
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

    setSFXVolume(volume) {
        this.sfxVolume = volume;
    }
}
