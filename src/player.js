import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import gunshotSfx from './assets/mixkit-game-gun-shot.mp3';

export class Player {
    constructor(camera, scene, worldObjects, settings = {}) {
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
        this.isSprinting = false;
        this.canJump = false;
        this.speed = 100.0;
        this.jumpHeight = 30.0;
        this.gravity = 250.0;

        // Distance tracking
        this.distanceTraveled = 0; // in meters
        this.previousPosition = new THREE.Vector3();

        // Weapons
        this.allWeapons = [
            { name: 'Pistol', ammo: 12, maxAmmo: 60, magazineSize: 12, currentMag: 12, damage: 20, cooldown: 0.5, lastShot: 0, reloadTime: 1.5, range: 50 },
            // Faster punch, no charge time
            { name: 'Fist', ammo: Infinity, maxAmmo: Infinity, magazineSize: Infinity, currentMag: Infinity, damage: 10, cooldown: 0.2, lastShot: 0, reloadTime: 0, range: 3 },
            { name: 'Rifle', ammo: 30, maxAmmo: 120, magazineSize: 30, currentMag: 30, damage: 25, cooldown: 0.15, lastShot: 0, reloadTime: 2.0, range: 120 },
            { name: 'Sniper', ammo: 5, maxAmmo: 20, magazineSize: 5, currentMag: 5, damage: 100, cooldown: 2.0, lastShot: 0, reloadTime: 3.0, range: 400 }
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
        // Allow movement on mobile when touch controls are present
        this.allowTouchMovement = false;

        // Touch-controlled camera rotation state (mobile)
        this._touchYaw = 0;
        this._touchPitch = 0;
        
        // Prevent automatic fullscreen on pointer lock
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            }
        });
        
        // Create Player Mesh (Voxel Style)
        this.createPlayerMesh();

        // Camera Mode (First Person / Third Person)
        this.cameraMode = settings.cameraMode || 'TPS'; // 'FPS' or 'TPS'
        this.fpsCameraOffset = new THREE.Vector3(0, 1.6, 0); // Eye level
        // Offset to right (1.0) to see past character (Right Shoulder View)
        // Z reduced to 3.0 to bring character closer to camera
        this.tpsCameraOffset = new THREE.Vector3(1.0, 1.8, 3.4); // Behind and up
        
        this.initControls();

        // Sound effects pool (gunshots)
        this.sfxVolume = 0.7;
        // Sound effects (Web Audio API to avoid WebMediaPlayer limits)
        this.sfxVolume = 0.7;
        this.gunshotBuffer = null;
        this.reloadBuffer = null;
        
        // Crouch state
        this.isCrouching = false;
        this.crouchHeight = 0.8; // Height multiplier when crouching
        
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
                
                // Load gunshot buffer
                fetch(gunshotSfx)
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.gunshotBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading gunshot SFX:', e));
                
                // Load reload buffer
                import('./assets/mixkit-shotgun-recharge.mp3')
                    .then(module => fetch(module.default))
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.reloadBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading reload SFX:', e));
            }
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
        }
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
        
        // Cap (Baseball cap style)
        const capMat = new THREE.MeshStandardMaterial({ color: 0xe74c3c }); // Red cap
        const capTop = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.52), capMat);
        capTop.position.set(0, 0.3, 0);
        this.head.add(capTop);
        
        const capBrim = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.02, 0.35), capMat);
        capBrim.position.set(0, 0.22, 0.35);
        this.head.add(capBrim);
        
        // Sunglasses
        const glassesMat = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black frames
        const glassLensMat = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a, 
            transparent: true, 
            opacity: 0.7,
            metalness: 0.8,
            roughness: 0.2
        });
        
        // Left lens
        const leftLens = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.02), glassLensMat);
        leftLens.position.set(-0.12, 0.05, 0.26);
        this.head.add(leftLens);
        
        // Right lens
        const rightLens = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.02), glassLensMat);
        rightLens.position.set(0.12, 0.05, 0.26);
        this.head.add(rightLens);
        
        // Glasses bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), glassesMat);
        bridge.position.set(0, 0.05, 0.26);
        this.head.add(bridge);
        
        // Glasses arms
        const glassLeftArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.3), glassesMat);
        glassLeftArm.position.set(-0.21, 0.05, 0.1);
        this.head.add(glassLeftArm);
        
        const glassRightArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.3), glassesMat);
        glassRightArm.position.set(0.21, 0.05, 0.1);
        this.head.add(glassRightArm);

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

        // Pistol (Glock-style)
        const pistol = new THREE.Group();
        const pSlide = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.35), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8, roughness: 0.3 }));
        pSlide.position.set(0, -0.28, 0.2);
        const pBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.15), new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.2 }));
        pBarrel.position.set(0, -0.28, 0.4);
        const pHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.12), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        pHandle.position.set(0, -0.42, 0.15);
        const pTrigger = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 0.03), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        pTrigger.position.set(0, -0.35, 0.18);
        pistol.add(pSlide, pBarrel, pHandle, pTrigger);
        this.rightArmPivot.add(pistol);
        this.weaponModels['Pistol'] = pistol;

        // Rifle (AR-15 style)
        const rifle = new THREE.Group();
        const rBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.9), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8, roughness: 0.3 }));
        rBarrel.position.set(0, -0.28, 0.45);
        const rBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.4), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        rBody.position.set(0, -0.3, 0.2);
        const rHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.12), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        rHandle.position.set(0, -0.44, 0.15);
        const rStock = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.25), new THREE.MeshStandardMaterial({ color: 0x3a3a3a }));
        rStock.position.set(0, -0.28, -0.1);
        const rMag = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.1), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        rMag.position.set(0, -0.5, 0.2);
        rifle.add(rBarrel, rBody, rHandle, rStock, rMag);
        this.rightArmPivot.add(rifle);
        this.weaponModels['Rifle'] = rifle;

        // Sniper (AWP-style)
        const sniper = new THREE.Group();
        const sBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.3), new THREE.MeshStandardMaterial({ color: 0x1a5c1a, metalness: 0.6, roughness: 0.4 }));
        sBarrel.position.set(0, -0.28, 0.65);
        const sBody = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.5), new THREE.MeshStandardMaterial({ color: 0x2d5016 }));
        sBody.position.set(0, -0.3, 0.25);
        const sScope = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.35, 8), new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.1 }));
        sScope.rotation.z = Math.PI / 2;
        sScope.position.set(0, -0.18, 0.4);
        const sScopeLens = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 8), new THREE.MeshStandardMaterial({ color: 0x1a4d8f, metalness: 0.9, roughness: 0.1, emissive: 0x0a2040 }));
        sScopeLens.rotation.z = Math.PI / 2;
        sScopeLens.position.set(0, -0.18, 0.58);
        const sStock = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.3), new THREE.MeshStandardMaterial({ color: 0x3a2a1a }));
        sStock.position.set(0, -0.28, -0.05);
        const sBipod = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.15, 0.02), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        sBipod.position.set(0, -0.42, 0.5);
        sniper.add(sBarrel, sBody, sScope, sScopeLens, sStock, sBipod);
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
        this.hitTimer = 0; // time remaining for hit/flinch animation
        
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
        
        // Animation state
        this.animTime = 0;
        this.isPunching = false;
        this.punchSide = 0; // 0: Right, 1: Left
        this.isBlocking = false;
        
        // Touch look state - Initialize from camera if possible, or 0
        this.yaw = 0;
        this.pitch = 0;
        if (this.camera) {
            const e = new THREE.Euler().setFromQuaternion(this.camera.quaternion, 'YXZ');
            this.yaw = e.y;
            this.pitch = e.x;
        }
    }

    rotateCamera(dx, dy) {
        // dx, dy are angles in radians (positive = right/down)
        if (!this.controls || !this.controls.isLocked) {
            // Update state variables
            this.yaw -= dx;
            this.pitch -= dy;
            
            // Clamp pitch strictly (vertical limit)
            const limit = Math.PI / 2 - 0.01;
            this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
            
            // Apply to camera
            // Order YXZ is crucial for FPS/TPS to prevent roll
            this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
            
            // Note: We DO NOT sync mesh rotation here anymore.
            // This allows the camera to orbit around the character freely (Free Fire style).
            // The character will only rotate when moving.
        }
    }

    initControls() {
        // Pointer Lock: handled by main game canvas click to avoid UI click conflicts

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
                case 'KeyC': 
                    // Toggle crouch
                    this.isCrouching = !this.isCrouching;
                    break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    // start sprint input
                    this.isSprinting = true;
                    break;
                case 'KeyV': this.toggleCameraMode(); break; // Toggle camera view
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
                case 'ShiftLeft':
                case 'ShiftRight':
                    // stop sprint input
                    this.isSprinting = false;
                    break;
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
        // Guard against environments where Pointer Lock API is unavailable
        const hasPointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
        if (!hasPointerLock) {
            console.warn('Pointer Lock API not available in this environment.');
            return;
        }

        try {
            this.controls.lock();
        } catch (e) {
            console.warn('Unable to lock pointer:', e);
        }
    }

    toggleCameraMode() {
        // Toggle between FPS and TPS
        this.cameraMode = this.cameraMode === 'FPS' ? 'TPS' : 'FPS';
        
        // Update player mesh visibility (hide in FPS, show in TPS)
        if (this.mesh) {
            this.mesh.visible = this.cameraMode === 'TPS';
        }
        
        console.log(`Camera mode: ${this.cameraMode}`);
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
        
        // Play reload sound
        this.playReloadSound();
        
        // Simple timeout for reload
        setTimeout(() => {
            this.finishReload();
        }, weapon.reloadTime * 1000);
    }
    
    playReloadSound() {
        try {
            if (this.audioCtx && this.reloadBuffer) {
                // Resume if suspended
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume();
                }
                
                const src = this.audioCtx.createBufferSource();
                src.buffer = this.reloadBuffer;
                const gain = this.audioCtx.createGain();
                gain.gain.value = this.sfxVolume * 0.8;
                src.connect(gain);
                gain.connect(this.audioCtx.destination);
                src.start(0);
            }
        } catch (e) {
            console.warn('Error playing reload sound:', e);
        }
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
        if (weapon.name === 'Fist') {
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
        // Allow shooting when pointer lock is active OR when touch controls enabled
        const canShoot = (this.controls && this.controls.isLocked === true) || this.allowTouchMovement === true;
        if (!canShoot || this.isDead || this.isReloading || this.isBlocking) return;

        const weapon = this.weapons[this.currentWeaponIndex];
        const now = performance.now() / 1000;

        if (now - weapon.lastShot < weapon.cooldown) return;
        if (weapon.currentMag <= 0) {
            this.reload();
            return;
        }

        weapon.lastShot = now;
        if (weapon.ammo !== Infinity) weapon.currentMag--;

        if (weapon.name === 'Fist') {
            this.punch();
            return;
        }


        this.createMuzzleFlash();
        // Play gunshot SFX (use pooled audio elements to allow overlapping)
        // Play gunshot SFX using Web Audio API
        try {
            if (this.audioCtx && this.gunshotBuffer && this.audioCtx.state === 'running') {
                const source = this.audioCtx.createBufferSource();
                source.buffer = this.gunshotBuffer;
                
                // Pitch variation per weapon
                if (weapon.name === 'Pistol') source.playbackRate.value = 1.0;
                else if (weapon.name === 'Rifle') source.playbackRate.value = 1.15;
                else if (weapon.name === 'Sniper') source.playbackRate.value = 0.9;
                else source.playbackRate.value = 1.0;

                const gainNode = this.audioCtx.createGain();
                gainNode.gain.value = this.sfxVolume;
                
                source.connect(gainNode);
                gainNode.connect(this.audioCtx.destination);
                source.start(0);
            } else if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
        } catch (e) {
            // Non-fatal
        }

        // Raycast from Camera (center of screen)
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);

        // Get bullet start position (from weapon/camera)
        const bulletStart = this.camera.position.clone();
        const direction = new THREE.Vector3();
        raycaster.ray.direction.clone().normalize();
        
        // Default end point (max range)
        let bulletEnd = bulletStart.clone().add(raycaster.ray.direction.clone().multiplyScalar(1000));
        let hitSomething = false;

        // Check world objects first (trees, rocks, houses)
        if (this.worldObjects && this.worldObjects.length > 0) {
            const worldIntersects = raycaster.intersectObjects(this.worldObjects, true);
            if (worldIntersects.length > 0) {
                bulletEnd = worldIntersects[0].point.clone();
                hitSomething = true;
            }
        }

        // Check enemies (only if closer than world hit)
        if (this.enemyManager && this.enemyManager.enemies) {
            const intersects = raycaster.intersectObjects(this.enemyManager.enemies.map(e => e.mesh), true);
            if (intersects.length > 0) {
                const hitPoint = intersects[0].point;
                const distanceToEnemy = bulletStart.distanceTo(hitPoint);
                const distanceToWorld = bulletStart.distanceTo(bulletEnd);
                
                // Only hit enemy if it's closer than world object
                if (distanceToEnemy < distanceToWorld) {
                    const hitObject = intersects[0].object;
                    bulletEnd = hitPoint.clone();
                    hitSomething = true;
                    
                    // Find enemy instance (hitObject might be a child mesh)
                    let enemy = null;
                    // Try to resolve by traversing parents (in case the hit object is a child mesh)
                    const findEnemyFromObject = (obj) => {
                        let cur = obj;
                        while (cur) {
                            const found = this.enemyManager.enemies.find(e => e.mesh === cur);
                            if (found) return found;
                            cur = cur.parent;
                        }
                        return null;
                    };
                    enemy = findEnemyFromObject(hitObject);

                    if (enemy) {
                        // Check weapon range
                        const distEnemy = bulletStart.distanceTo(enemy.position);
                        const weaponRange = weapon.range || 1000;
                        if (distEnemy <= weaponRange) {
                            enemy.takeDamage(weapon.damage);
                        } else {
                            // Out of range: treat as miss
                            hitSomething = false;
                        }
                    }
                }
            }
        }
        
        // Create bullet tracer visualization
        this.createBulletTracer(bulletStart, bulletEnd, hitSomething);
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
        setTimeout(() => this.scene.remove(flash), 100);
    }

    createBulletTracer(start, end, hit) {
        // Create a line geometry for the bullet tracer
        const points = [start, end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Yellow/orange tracer for visibility, red if hit
        const color = hit ? 0xff4444 : 0xffff00;
        const material = new THREE.LineBasicMaterial({ 
            color: color,
            linewidth: 2,
            opacity: 0.8,
            transparent: true
        });
        
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        
        // Animate tracer fade out
        let opacity = 0.8;
        const fadeInterval = setInterval(() => {
            opacity -= 0.1;
            material.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                this.scene.remove(line);
                geometry.dispose();
                material.dispose();
            }
        }, 30);
    }

    update(dt) {
        if (this.isDead) return;

        // Allow updates when PointerLock is active OR when touch controls requested movement
        const canMove = (this.controls && this.controls.isLocked === true) || this.allowTouchMovement === true;
        if (canMove) {
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
            const moving = moveVec.length() > 0;
            let sprintMultiplier = 1.0;
            if (this.isSprinting && moving && this.stamina > 0) sprintMultiplier = 1.9; // ~double speed
            const moveSpeed = this.speed * dt * 0.1 * sprintMultiplier;
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
                // Idle: Do not force rotation. Allow camera to orbit freely.
                // Character stays facing last direction.
            }

            this.mesh.position.y += this.velocity.y * dt;

            if (this.mesh.position.y < 0) {
                this.velocity.y = 0;
                this.mesh.position.y = 0;
                this.canJump = true;
            }

            // Track distance traveled
            if (this.previousPosition.length() > 0) {
                const distance = this.mesh.position.distanceTo(this.previousPosition);
                this.distanceTraveled += distance;
            }
            this.previousPosition.copy(this.mesh.position);

            // Handle stamina drain/recovery
            if (this.isSprinting && moving && this.stamina > 0) {
                // Drain stamina per second while sprinting
                const drain = 20 * dt; // 20 stamina per second
                this.stamina = Math.max(0, this.stamina - drain);
                if (this.stamina <= 0) {
                    this.isSprinting = false; // stop sprinting when out
                }
            } else {
                // Regenerate stamina when not sprinting
                const regen = 10 * dt; // 10 stamina per second
                this.stamina = Math.min(100, this.stamina + regen);
            }

            // Camera Follow
            this.camera.position.copy(this.mesh.position);
            
            // Adjust camera height based on crouch state
            const eyeHeight = this.isCrouching ? 1.6 * this.crouchHeight : 1.6;
            this.camera.position.y += eyeHeight;
            
            // Apply crouch visual effect to player mesh
            const targetScaleY = this.isCrouching ? this.crouchHeight : 1.0;
            this.mesh.scale.y += (targetScaleY - this.mesh.scale.y) * 10 * dt; // Smooth transition

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
            
            // Update Camera Position based on mode (FPS or TPS)
            let idealOffset;
            if (this.cameraMode === 'FPS') {
                // First Person: Camera at eye level, no offset behind
                idealOffset = this.fpsCameraOffset.clone();
            } else {
                // Third Person: Camera behind and above player
                idealOffset = this.tpsCameraOffset.clone();
                // Apply camera rotation to the offset
                // Since we use YXZ order for camera, we should apply it similarly or just use the quaternion which is auto-updated
                idealOffset.applyQuaternion(this.camera.quaternion);
            }
            
            idealOffset.add(this.mesh.position);
            this.camera.position.copy(idealOffset);

            // Apply touch-controlled rotation (if any) when not using PointerLock
            // Note: rotateCamera() now handles this directly by setting camera.rotation.
            // We don't need to re-apply it here, which avoids conflict.
            
            this.updateAnimations(dt);
        }
    }

    updateAnimations(dt) {
        const isMoving = this.moveForward || this.moveBackward || this.moveLeft || this.moveRight;
        
        // Leg Animation (faster when sprinting)
        const baseAnimSpeed = 10;
        const sprintFactor = (this.isSprinting && isMoving) ? 1.8 : 1.0;
        if (isMoving) {
            this.animTime += dt * baseAnimSpeed * sprintFactor;
            const angle = Math.sin(this.animTime) * (0.5 * sprintFactor);
            this.leftLegPivot.rotation.x = angle;
            this.rightLegPivot.rotation.x = -angle;
        } else {
            this.leftLegPivot.rotation.x = THREE.MathUtils.lerp(this.leftLegPivot.rotation.x, 0, dt * baseAnimSpeed);
            this.rightLegPivot.rotation.x = THREE.MathUtils.lerp(this.rightLegPivot.rotation.x, 0, dt * baseAnimSpeed);
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
                const armSwing = Math.sin(this.animTime) * 0.5 * sprintFactor;
                this.leftArmPivot.rotation.x = -armSwing;
                this.rightArmPivot.rotation.x = armSwing;
            } else {
                this.leftArmPivot.rotation.x = THREE.MathUtils.lerp(this.leftArmPivot.rotation.x, 0, dt * 10);
                this.rightArmPivot.rotation.x = THREE.MathUtils.lerp(this.rightArmPivot.rotation.x, 0, dt * 10);
            }
            // Reset Z
            this.leftArmPivot.rotation.z = THREE.MathUtils.lerp(this.leftArmPivot.rotation.z, 0, dt * 10);
            this.rightArmPivot.rotation.z = THREE.MathUtils.lerp(this.rightArmPivot.rotation.z, 0, dt * 10);
        }

        // Hit / Flinch animation: override arms briefly when player is hit
        if (this.hitTimer > 0) {
            this.hitTimer -= dt;
            const t = Math.max(0, this.hitTimer) / 0.6; // 0..1
            const flinchAngle = THREE.MathUtils.lerp(-Math.PI / 2.2, 0, 1 - t);
            // Move both arms up defensively
            this.leftArmPivot.rotation.x = THREE.MathUtils.lerp(this.leftArmPivot.rotation.x, flinchAngle, dt * 20);
            this.rightArmPivot.rotation.x = THREE.MathUtils.lerp(this.rightArmPivot.rotation.x, flinchAngle, dt * 20);
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
        // Trigger hit animation
        this.hitTimer = 0.6; // 600ms flinch
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


