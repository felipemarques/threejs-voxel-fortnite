import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export class Player {
    constructor(camera, scene, worldObjects) {
        this.camera = camera;
        this.scene = scene;
        this.worldObjects = worldObjects;

        // Stats
        this.health = 100;
        this.shield = 100;
        this.isDead = false;
        // Stamina for punching
        this.stamina = 100; // max stamina
        this.punchCount = 0; // punches since last rest
        this.isTired = false; // fatigue flag

        // Movement
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.canJump = false;
        this.speed = 100.0;
        this.jumpHeight = 30.0;
        this.gravity = 250.0;

        // Weapons
        this.allWeapons = [
            { name: 'Pistola', ammo: 12, maxAmmo: 60, magazineSize: 12, currentMag: 12, damage: 20, cooldown: 0.5, lastShot: 0, reloadTime: 1.5 },
            // Faster punch, no charge time
            { name: 'Soco', ammo: Infinity, maxAmmo: Infinity, magazineSize: Infinity, currentMag: Infinity, damage: 10, cooldown: 0.2, lastShot: 0, reloadTime: 0 },
            { name: 'Rifle', ammo: 30, maxAmmo: 120, magazineSize: 30, currentMag: 30, damage: 25, cooldown: 0.15, lastShot: 0, reloadTime: 2.0 },
            { name: 'Sniper', ammo: 5, maxAmmo: 20, magazineSize: 5, currentMag: 5, damage: 100, cooldown: 2.0, lastShot: 0, reloadTime: 3.0 }
        ];

        
        // Start with Punch and Pistol
        this.weapons = [
            this.allWeapons[1], // Soco
            this.allWeapons[0]  // Pistola
        ];

        this.currentWeaponIndex = 0;

        this.isReloading = false;


        // Controls & Camera
        // We use a container for the player logic, but PointerLockControls usually controls the camera directly.
        // For 3rd person, we need to separate the camera from the player mesh rotation.
        // Actually, standard PointerLockControls is FPS. We need to adapt it or manually handle camera.
        // Let's keep PointerLockControls for the "Look" input but detach camera from it?
        // Easier: Use PointerLockControls on a dummy object (the "Pivot") and parent the camera to it?
        // Or just manually handle mouse movement.
        // Let's stick to PointerLockControls but modify how we use the object.
        
        this.controls = new PointerLockControls(camera, document.body);
        
        // Prevent automatic fullscreen on pointer lock
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            }
        });
        
        // Create Player Mesh (Voxel Style)
        this.createPlayerMesh();

        // Camera Offset
        this.cameraOffset = new THREE.Vector3(0, 2, 4); // Behind and up
        
        this.initControls();
    }

    createPlayerMesh() {
        this.mesh = new THREE.Group();
        this.scene.add(this.mesh);

        const material = new THREE.MeshStandardMaterial({ color: 0x3498db }); // Blue shirt
        const skinMat = new THREE.MeshStandardMaterial({ color: 0xffccaa }); // Skin
        const pantsMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 }); // Dark pants

        // Head
        this.head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), skinMat);
        this.head.position.y = 1.75;
        this.mesh.add(this.head);

        // Body
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.3), material);
        body.position.y = 1.1;
        this.mesh.add(body);

        // Arms - Use Pivots
        const armGeo = new THREE.BoxGeometry(0.2, 0.8, 0.2);
        armGeo.translate(0, -0.3, 0); // Shift geometry down so origin is at shoulder

        this.leftArmPivot = new THREE.Group();
        this.leftArmPivot.position.set(-0.45, 1.4, 0);
        this.mesh.add(this.leftArmPivot);
        const leftArm = new THREE.Mesh(armGeo, skinMat);
        this.leftArmPivot.add(leftArm);

        this.rightArmPivot = new THREE.Group();
        this.rightArmPivot.position.set(0.45, 1.4, 0);
        this.mesh.add(this.rightArmPivot);
        const rightArm = new THREE.Mesh(armGeo, skinMat);
        this.rightArmPivot.add(rightArm);

        // Weapon Models
        this.weaponModels = {};

        // Pistol
        const pistol = new THREE.Group();
        const pBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0x2c3e50 }));
        pBarrel.position.set(0, -0.3, 0.2);
        const pHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x000000 }));
        pHandle.position.set(0, -0.4, 0.15);
        pistol.add(pBarrel, pHandle);
        this.rightArmPivot.add(pistol);
        this.weaponModels['Pistola'] = pistol;

        // Rifle
        const rifle = new THREE.Group();
        const rBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.8), new THREE.MeshStandardMaterial({ color: 0x2c3e50 }));
        rBarrel.position.set(0, -0.3, 0.4);
        const rHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x000000 }));
        rHandle.position.set(0, -0.4, 0.1);
        rifle.add(rBarrel, rHandle);
        this.rightArmPivot.add(rifle);
        this.weaponModels['Rifle'] = rifle;

        // Sniper
        const sniper = new THREE.Group();
        const sBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 1.2), new THREE.MeshStandardMaterial({ color: 0x27ae60 }));
        sBarrel.position.set(0, -0.3, 0.6);
        const sScope = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0x000000 }));
        sScope.position.set(0, -0.2, 0.4);
        sniper.add(sBarrel, sScope);
        this.rightArmPivot.add(sniper);
        this.weaponModels['Sniper'] = sniper;

        // Hide all initially
        Object.values(this.weaponModels).forEach(m => m.visible = false);

        // Legs - Use Pivots
        const legGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
        legGeo.translate(0, -0.4, 0); // Shift geometry down so origin is at hip

        this.leftLegPivot = new THREE.Group();
        this.leftLegPivot.position.set(-0.15, 0.7, 0);
        this.mesh.add(this.leftLegPivot);
        const leftLeg = new THREE.Mesh(legGeo, pantsMat);
        this.leftLegPivot.add(leftLeg);

        this.rightLegPivot = new THREE.Group();
        this.rightLegPivot.position.set(0.15, 0.7, 0);
        this.mesh.add(this.rightLegPivot);
        const rightLeg = new THREE.Mesh(legGeo, pantsMat);
        this.rightLegPivot.add(rightLeg);

        this.isAiming = false;
        this.baseFov = 75;
        this.aimFov = 20;
        
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        
        // Animation state
        this.animTime = 0;
        this.isPunching = false;
        this.punchSide = 0; // 0: Right, 1: Left
        this.isBlocking = false;
    }

    initControls() {
        // Pointer Lock
        document.addEventListener('click', () => {
            if (!this.controls.isLocked && !this.isDead) {
                this.controls.lock();
            }
        });

        // Movement
        const onKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW': this.moveForward = true; break;
                case 'ArrowLeft':
                case 'KeyA': this.moveLeft = true; break;
                case 'ArrowDown':
                case 'KeyS': this.moveBackward = true; break;
                case 'ArrowRight':
                case 'KeyD': this.moveRight = true; break;
                case 'Space':
                    if (this.canJump === true) {
                        this.velocity.y += this.jumpHeight;
                        this.canJump = false;
                    }
                    break;
                case 'Digit1': this.switchWeapon(0); break;
                case 'Digit2': this.switchWeapon(1); break;
                case 'Digit3': this.switchWeapon(2); break;
                case 'Digit4': this.switchWeapon(3); break;
                case 'KeyR': this.reload(); break;
            }

        };

        const onKeyUp = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW': this.moveForward = false; break;
                case 'ArrowLeft':
                case 'KeyA': this.moveLeft = false; break;
                case 'ArrowDown':
                case 'KeyS': this.moveBackward = false; break;
                case 'ArrowRight':
                case 'KeyD': this.moveRight = false; break;
            }
        };

        // Mouse Inputs
        const onMouseDown = (event) => {
            if (this.controls.isLocked) {
                if (event.button === 0) { // Left Click
                    this.shoot();
                } else if (event.button === 2) { // Right Click
                    this.isAiming = true;
                }
            }
        };

        const onMouseUp = (event) => {
            if (event.button === 2) { // Right Click
                this.isAiming = false;
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        // Prevent context menu
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    lockControls() {
        this.controls.lock();
    }

    switchWeapon(index) {
        if (index >= 0 && index < this.weapons.length) {
            if (this.isReloading) return; // Can't switch while reloading
            this.currentWeaponIndex = index;
            
            // Update visual
            const weaponName = this.weapons[index].name;
            Object.values(this.weaponModels).forEach(m => m.visible = false);
            if (this.weaponModels[weaponName]) {
                this.weaponModels[weaponName].visible = true;
            }
        }
    }

    reload() {
        if (this.isReloading) return;
        
        const weapon = this.weapons[this.currentWeaponIndex];
        if (weapon.ammo === Infinity) return; // Melee
        if (weapon.currentMag === weapon.magazineSize) return; // Full mag
        if (weapon.ammo <= 0) return; // No reserve ammo

        this.isReloading = true;
        console.log("Reloading...");
        
        // Simple timeout for reload
        setTimeout(() => {
            this.finishReload();
        }, weapon.reloadTime * 1000);
    }

    finishReload() {
        if (!this.isReloading) return;
        
        const weapon = this.weapons[this.currentWeaponIndex];
        const needed = weapon.magazineSize - weapon.currentMag;
        const available = weapon.ammo;
        
        const amount = Math.min(needed, available);
        weapon.currentMag += amount;
        weapon.ammo -= amount;
        
        this.isReloading = false;
        console.log("Reloaded!");
    }

    startBlocking() {
        const weapon = this.weapons[this.currentWeaponIndex];
        if (weapon.name === 'Soco') {
            this.isBlocking = true;
        }
    }

    stopBlocking() {
        this.isBlocking = false;
    }


    collectItem(itemName) {
        if (itemName === 'ShieldPotion') {
            this.shield = Math.min(100, this.shield + 50);
            return;
        }

        // Check if we already have it
        const existing = this.weapons.find(w => w.name === itemName);
        if (existing) {
            // Add ammo
            existing.ammo = Math.min(existing.maxAmmo, existing.ammo + existing.magazineSize);
            console.log("Added ammo for " + itemName);
        } else {
            // Add new weapon
            const newWeapon = this.allWeapons.find(w => w.name === itemName);
            if (newWeapon) {
                // Clone it so we don't share state if we had multiple players (not needed here but good practice)
                // Actually for single player it's fine.
                // But wait, allWeapons has initial state. If we drop it and pick it up again?
                // Let's just push the reference from allWeapons for now.
                this.weapons.push(newWeapon);
                console.log("Picked up " + itemName);
            }
        }
    }

    setEnemyManager(enemyManager) {

        this.enemyManager = enemyManager;
    }

    shoot() {
        if (!this.controls.isLocked || this.isDead || this.isReloading || this.isBlocking) return;

        const weapon = this.weapons[this.currentWeaponIndex];
        const now = performance.now() / 1000;

        if (now - weapon.lastShot < weapon.cooldown) return;
        if (weapon.currentMag <= 0) {
            this.reload();
            return;
        }

        weapon.lastShot = now;
        if (weapon.ammo !== Infinity) weapon.currentMag--;

        if (weapon.name === 'Soco') {
            this.punch();
            return;
        }


        this.createMuzzleFlash();

        // Raycast from Camera (center of screen)
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);

        if (this.enemyManager && this.enemyManager.enemies) {
            const intersects = raycaster.intersectObjects(this.enemyManager.enemies.map(e => e.mesh));
            if (intersects.length > 0) {
                const hitObject = intersects[0].object;
                // Find enemy instance (hitObject might be a child mesh)
                // We need to traverse up or find which enemy owns this mesh
                // Since we map e.mesh (which is a Group or Mesh), it should be fine if we hit that exact object.
                // But if we make enemies complex groups, we need to be careful.
                // For now, let's assume simple mesh or handle parent.
                
                let enemy = this.enemyManager.enemies.find(e => e.mesh === hitObject);
                if (!enemy) {
                     // Try checking parent if it's a group part
                     enemy = this.enemyManager.enemies.find(e => e.mesh === hitObject.parent);
                }

                if (enemy) {
                    enemy.takeDamage(weapon.damage);
                }
            }
        }
    }

    createMuzzleFlash() {
        const flash = new THREE.PointLight(0xffff00, 1, 5);
        // Flash at player position + forward
        // We need to know player rotation. 
        // The controls object (camera) has the rotation.
        
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);
        
        flash.position.copy(this.mesh.position);
        flash.position.y += 1.5; // Shoulder height
        flash.position.add(direction.multiplyScalar(1));
        
        this.scene.add(flash);
        setTimeout(() => this.scene.remove(flash), 50);
    }

    update(dt) {
        if (this.isDead) return;

        if (this.controls.isLocked === true) {
            // Physics
            this.velocity.x -= this.velocity.x * 10.0 * dt;
            this.velocity.z -= this.velocity.z * 10.0 * dt;
            this.velocity.y -= this.gravity * dt;

            this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
            this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
            this.direction.normalize();

            if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * this.speed * dt;
            if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * this.speed * dt;

            // Move the Camera Object (which controls the "Look" direction)
            // Wait, PointerLockControls moves the camera. 
            // But we want the player mesh to move, and camera to follow.
            // We can use the controls object as a "pivot" or just extract rotation from it.
            
            // Let's move the MESH based on velocity relative to camera direction.
            
            const camDir = new THREE.Vector3();
            this.camera.getWorldDirection(camDir);
            camDir.y = 0;
            camDir.normalize();
            
            const camRight = new THREE.Vector3();
            camRight.crossVectors(camDir, new THREE.Vector3(0, 1, 0));
            
            // Calculate actual move vector
            const moveVec = new THREE.Vector3();
            if (this.moveForward) moveVec.add(camDir);
            if (this.moveBackward) moveVec.sub(camDir);
            if (this.moveRight) moveVec.add(camRight);
            if (this.moveLeft) moveVec.sub(camRight);
            moveVec.normalize();

            // Apply speed
            // We overwrite the previous velocity logic slightly to be relative to camera
            // Re-implement friction/velocity for X/Z manually?
            // Let's simplify: Direct movement with some inertia
            
            // Apply speed with Collision Detection
            const moveSpeed = this.speed * dt * 0.1;
            const velocityVec = moveVec.multiplyScalar(moveSpeed);

            // X Axis Movement
            if (velocityVec.x !== 0) {
                if (!this.checkCollision(new THREE.Vector3(Math.sign(velocityVec.x), 0, 0), Math.abs(velocityVec.x))) {
                    this.mesh.position.x += velocityVec.x;
                }
            }

            // Z Axis Movement
            if (velocityVec.z !== 0) {
                if (!this.checkCollision(new THREE.Vector3(0, 0, Math.sign(velocityVec.z)), Math.abs(velocityVec.z))) {
                    this.mesh.position.z += velocityVec.z;
                }
            }

            this.mesh.position.y += this.velocity.y * dt;

            // Rotate mesh to face movement direction
            if (moveVec.length() > 0) {
                const targetRotation = Math.atan2(moveVec.x, moveVec.z);
                // Smooth rotation could be added here
                this.mesh.rotation.y = targetRotation;
            } else {
                // If not moving, maybe rotate with camera? 
                // Fortnite style: Body rotates with camera when aiming/shooting, but legs stay until threshold.
                // Simple: Rotate body to match camera yaw.
                const yaw = Math.atan2(camDir.x, camDir.z);
                this.mesh.rotation.y = yaw;
            }

            this.mesh.position.y += this.velocity.y * dt;

            if (this.mesh.position.y < 0) {
                this.velocity.y = 0;
                this.mesh.position.y = 0;
                this.canJump = true;
            }

            // Camera Follow
            this.camera.position.copy(this.mesh.position);
            this.camera.position.y += 1.6; // Eye height

            // Zoom Logic
            let targetFov = this.baseFov;
            if (this.isAiming && this.weapons[this.currentWeaponIndex].name === 'Sniper') {
                targetFov = this.aimFov;
            }

            // Lerp FOV
            if (Math.abs(this.camera.fov - targetFov) > 0.1) {
                this.camera.fov += (targetFov - this.camera.fov) * 10 * dt;
                this.camera.updateProjectionMatrix();
            }
            // Update Camera Position (Third Person)
            // Camera should be behind player based on camera rotation (controlled by mouse)
            // PointerLockControls rotates the camera object. 
            // We need to position the camera relative to the mesh, but using the camera's own rotation.
            
            // The problem: PointerLockControls assumes it moves the camera. 
            // If we move the camera manually, it fights.
            // Solution: Use a "Pivot" object for PointerLockControls.
            // But we passed 'camera' to it.
            // Let's just manually position the camera every frame.
            
            // Update Camera Position
            const idealOffset = new THREE.Vector3(0, 2, 4);
            idealOffset.applyQuaternion(this.camera.quaternion);
            idealOffset.add(this.mesh.position);
            this.camera.position.copy(idealOffset);
            
            this.updateAnimations(dt);
        }
    }

    updateAnimations(dt) {
        const isMoving = this.moveForward || this.moveBackward || this.moveLeft || this.moveRight;
        
        // Leg Animation
        if (isMoving) {
            this.animTime += dt * 10;
            const angle = Math.sin(this.animTime) * 0.5;
            this.leftLegPivot.rotation.x = angle;
            this.rightLegPivot.rotation.x = -angle;
        } else {
            this.leftLegPivot.rotation.x = THREE.MathUtils.lerp(this.leftLegPivot.rotation.x, 0, dt * 10);
            this.rightLegPivot.rotation.x = THREE.MathUtils.lerp(this.rightLegPivot.rotation.x, 0, dt * 10);
        }

        // Arm Animation
        if (this.isBlocking) {
            // Blocking Pose: Both arms up in front of face
            const targetAngle = -Math.PI / 2.5;
            const targetInward = 0.5;
            
            this.leftArmPivot.rotation.x = THREE.MathUtils.lerp(this.leftArmPivot.rotation.x, targetAngle, dt * 15);
            this.rightArmPivot.rotation.x = THREE.MathUtils.lerp(this.rightArmPivot.rotation.x, targetAngle, dt * 15);
            
            this.leftArmPivot.rotation.z = THREE.MathUtils.lerp(this.leftArmPivot.rotation.z, -targetInward, dt * 15);
            this.rightArmPivot.rotation.z = THREE.MathUtils.lerp(this.rightArmPivot.rotation.z, targetInward, dt * 15);

        } else if (this.isPunching) {
            this.punchTime += dt * 20; // Faster punch
            const punchAngle = -Math.PI / 2 + Math.sin(this.punchTime) * 0.8;
            
            if (this.punchSide === 0) { // Right
                this.rightArmPivot.rotation.x = punchAngle;
                this.leftArmPivot.rotation.x = THREE.MathUtils.lerp(this.leftArmPivot.rotation.x, 0, dt * 10);
            } else { // Left
                this.leftArmPivot.rotation.x = punchAngle;
                this.rightArmPivot.rotation.x = THREE.MathUtils.lerp(this.rightArmPivot.rotation.x, 0, dt * 10);
            }
            
            if (this.punchTime > Math.PI) {
                this.isPunching = false;
                this.rightArmPivot.rotation.x = 0;
                this.leftArmPivot.rotation.x = 0;
            }
            
            // Reset Z rotation from blocking
            this.leftArmPivot.rotation.z = THREE.MathUtils.lerp(this.leftArmPivot.rotation.z, 0, dt * 10);
            this.rightArmPivot.rotation.z = THREE.MathUtils.lerp(this.rightArmPivot.rotation.z, 0, dt * 10);

        } else {
            // Idle / Walking Arms
            if (isMoving) {
                const angle = Math.sin(this.animTime) * 0.5;
                this.leftArmPivot.rotation.x = -angle;
                this.rightArmPivot.rotation.x = angle;
            } else {
                this.leftArmPivot.rotation.x = THREE.MathUtils.lerp(this.leftArmPivot.rotation.x, 0, dt * 10);
                this.rightArmPivot.rotation.x = THREE.MathUtils.lerp(this.rightArmPivot.rotation.x, 0, dt * 10);
            }
            // Reset Z
            this.leftArmPivot.rotation.z = THREE.MathUtils.lerp(this.leftArmPivot.rotation.z, 0, dt * 10);
            this.rightArmPivot.rotation.z = THREE.MathUtils.lerp(this.rightArmPivot.rotation.z, 0, dt * 10);
        }
    }

    punch() {
        // Prevent punching when fatigued
        if (this.isTired) return;
        if (this.isPunching || this.isBlocking) return;
        this.isPunching = true;
        this.punchTime = 0;
        this.punchSide = this.punchSide === 0 ? 1 : 0; // Toggle side

        // Increment punch counter and handle fatigue
        this.punchCount++;
        if (this.punchCount >= 20) {
            this.isTired = true;
            // Reduce stamina as penalty
            this.stamina = Math.max(0, this.stamina - 20);
            // Recover after a short cooldown (e.g., 3 seconds)
            setTimeout(() => {
                this.isTired = false;
                this.punchCount = 0;
            }, 3000);
        }

        // Check hit
        // Simple distance check in front of player
        if (this.enemyManager && this.enemyManager.enemies) {
            const playerDir = new THREE.Vector3();
            this.mesh.getWorldDirection(playerDir);
            
            this.enemyManager.enemies.forEach(enemy => {
                const dist = this.mesh.position.distanceTo(enemy.position);
                if (dist < 3) {
                    // Check angle
                    const enemyDir = new THREE.Vector3().subVectors(enemy.position, this.mesh.position).normalize();
                    const angle = playerDir.angleTo(enemyDir);
                    if (angle < Math.PI / 3) { // 60 degrees cone
                        enemy.takeDamage(10); // Punch damage (Nerfed)
                        // Knockback?
                        const knockback = playerDir.clone().multiplyScalar(2);
                        enemy.position.add(knockback);
                    }
                }
            });
        }
    }


    get position() {
        return this.mesh.position;
    }

    takeDamage(amount) {
        if (this.isBlocking) {
            amount *= 0.2; // 80% damage reduction
            console.log("Blocked! Reduced damage to " + amount);
        }
        
        if (this.shield > 0) {
            this.shield -= amount;
            if (this.shield < 0) {
                this.health += this.shield;
                this.shield = 0;
            }
        } else {
            this.health -= amount;
        }

        if (this.health <= 0) {
            this.health = 0;
            this.die();
        }
    }

    die() {
        this.isDead = true;
        this.controls.unlock();
        this.mesh.rotation.x = -Math.PI / 2; // Fall over
    }

    checkCollision(direction, distance) {
        const raycaster = new THREE.Raycaster();
        // Ray origin at player center (waist height)
        const origin = this.mesh.position.clone();
        origin.y += 1.0; 
        
        raycaster.set(origin, direction);
        
        // Buffer distance (player radius approx 0.4)
        const buffer = 0.5;
        
        // Check collision with world objects and enemies
        let obstacles = this.worldObjects || [];
        if (this.enemyManager && this.enemyManager.enemies) {
            const enemyMeshes = this.enemyManager.enemies.map(e => e.mesh);
            obstacles = obstacles.concat(enemyMeshes);
        }

        if (obstacles.length > 0) {
            const intersects = raycaster.intersectObjects(obstacles, true); // recursive
            if (intersects.length > 0) {
                if (intersects[0].distance < distance + buffer) {
                    return true;
                }
            }
        }
        return false;
    }
}


