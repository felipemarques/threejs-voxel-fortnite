import * as THREE from 'three';

export class EnemyManager {
    constructor(scene, player, world, settings) {
        this.scene = scene;
        this.player = player;
        this.world = world;
        this.enemies = [];
        this.spawnInterval = 5000; 
        this.lastSpawn = 0;
        this.killedCount = 0;
        
        const count = settings ? settings.enemyCount : 15;
        this.difficulty = settings ? settings.difficulty : 'medium';

        // Initial spawn
        for(let i=0; i<count; i++) this.spawnEnemy();
    }

    spawnEnemy() {
        const x = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        
        const enemy = new Bot(this.scene, x, 0, z, this.difficulty);
        this.enemies.push(enemy);
    }

    update(dt) {
        this.enemies.forEach(enemy => {
            enemy.update(dt, this.player);
            
            // Storm Damage
            const dist = Math.sqrt(enemy.position.x * enemy.position.x + enemy.position.z * enemy.position.z);
            if (dist > this.world.stormRadius) {
                enemy.takeDamage(5 * dt); // 5 dps from storm
            }
        });
        
        // Remove dead enemies
        this.enemies = this.enemies.filter(enemy => {
            if (enemy.isDead) {
                this.killedCount++;
                return false;
            }
            return true;
        });
    }
}


class Bot {
    constructor(scene, x, y, z, difficulty) {
        this.scene = scene;
        this.position = new THREE.Vector3(x, y, z);
        
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
        if (this.isDead) return;

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
            const direction = new THREE.Vector3().subVectors(playerPos, this.position).normalize();
            direction.y = 0; // Stay on ground
            
            // Smart Movement with Strafing
            // Chase until close (melee range)
            if (dist > this.attackRange - 0.5) { 
                // Move towards player
                const moveDir = direction.clone();
                
                // Add strafing (sine wave based on time + random offset per bot)
                const strafe = Math.sin(performance.now() / 500 + this.position.x) * 0.5;
                const strafeVec = new THREE.Vector3(direction.z, 0, -direction.x).multiplyScalar(strafe);
                
                moveDir.add(strafeVec).normalize();
                
                this.position.add(moveDir.multiplyScalar(this.speed * dt));
                this.mesh.lookAt(playerPos);
                isMoving = true;
            } else {
                // In melee range, just look at player
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
            // Wander logic (simple random movement)
            this.wanderTimer += dt;

            // Pick a new wander target periodically or if none
            if (!this.wanderTarget || this.wanderTimer > this.wanderChangeInterval) {
                // Choose a random point near current position but within world bounds (~ -90..90)
                const radius = 10 + Math.random() * 30; // wander radius
                const angle = Math.random() * Math.PI * 2;
                const tx = this.position.x + Math.cos(angle) * radius;
                const tz = this.position.z + Math.sin(angle) * radius;
                // Clamp to world bounds
                const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
                const nx = clamp(tx, -90, 90);
                const nz = clamp(tz, -90, 90);
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
                if (!child.userData.originalColor) {
                    child.userData.originalColor = child.material.color.clone();
                }
                child.material.emissive = new THREE.Color(0xff0000);
            }
        });

        setTimeout(() => {
            if(!this.isDead) {
                this.mesh.traverse((child) => {
                    if (child.isMesh && child !== this.healthBarBg && child !== this.healthBarFg) {
                        child.material.emissive = new THREE.Color(0x000000);
                    }
                });
            }
        }, 100);

        if (this.health <= 0) {
            this.die();
        }
    }


    die() {
        this.isDead = true;
        this.scene.remove(this.mesh);
    }
}

