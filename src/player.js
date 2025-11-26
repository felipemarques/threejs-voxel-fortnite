import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import gunshotSfx from './assets/mixkit-game-gun-shot.ogg';
import smackSfx from './assets/smack.ogg';
import ughSfx from './assets/ugh.ogg';
import footStepsSfx from './assets/mixkit-footsteps-on-tall-grass-532.ogg';
import vehicleDoorSfx from './assets/mixkit-car-door-slam.wav';


export class Player {
    constructor(camera, scene, worldObjects, settings = {}) {
        this.camera = camera;
        this.scene = scene;
        this.worldObjects = worldObjects;
        this.world = null;
        this.gameMode = settings.gameMode || 'survival';
        // Optional visual tracers; off by default to avoid extra draw calls
        this.showTracers = settings.showTracers === true;
        this.backpack = null;
        this.backpackColor = null;
        this.placedBlocks = [];
        this.blockSize = 1;
        this.minBlockSize = 0.5;
        this.maxBlockSize = 2;
        this.previewBlock = null;
        this.isFloating = false;
        this.selectedBlock = null;
        this.selectedBlockHelper = null;

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
            { name: 'Rifle', ammo: 30, maxAmmo: 120, magazineSize: 30, currentMag: 30, damage: 25, cooldown: 0.15, lastShot: 0, reloadTime: 2.0, range: 120, zoomFov: 30 },
            { name: 'Sniper', ammo: 5, maxAmmo: 20, magazineSize: 5, currentMag: 5, damage: 100, cooldown: 2.0, lastShot: 0, reloadTime: 3.0, range: 400, zoomFov: 12 },
            { name: 'SMG', ammo: 40, maxAmmo: 200, magazineSize: 40, currentMag: 40, damage: 15, cooldown: 0.08, lastShot: 0, reloadTime: 1.8, range: 80 },
            { name: 'Shotgun', ammo: 6, maxAmmo: 24, magazineSize: 6, currentMag: 6, damage: 60, cooldown: 1.0, lastShot: 0, reloadTime: 2.5, range: 25 },
            { name: 'DMR', ammo: 12, maxAmmo: 48, magazineSize: 12, currentMag: 12, damage: 45, cooldown: 0.35, lastShot: 0, reloadTime: 2.2, range: 200, zoomFov: 18 }
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
        this.smackBuffer = null;
        this.ughBuffer = null;
        this.footstepsBuffer = null;
        this._footstepsSource = null;
        this._footstepsGain = null;
        this.vehicleDoorBuffer = null;
        this.vehicleDriveBuffer = null;
        this._vehicleDriveSource = null;
        this._vehicleDriveGain = null;
        this._lastVehicleDriveActive = false;
        this.enableVehicleDriveSound = false; // Keep silent for now; ready for future engine SFX
        this._hurtAccumulator = 0;
        this._hurtQueue = 0;
        this._hurtBeatTimer = null;
        this._lastFootstepsActive = false;
        
        // Crouch state
        this.isCrouching = false;
        this.crouchHeight = 0.8; // Height multiplier when crouching

        // Vehicle state
        this.isInVehicle = false;
        this.currentVehicle = null;
        this.vehicleSpeed = 0;
        this.vehicleBaseMaxSpeed = 70;
        this.vehicleBoostMax = 45; // extra speed gained by sustained acceleration
        this.vehicleAccel = 70;
        this.vehicleTurnSpeed = 1.8;
        this.vehicleFriction = 2.8;
        this.vehicleAccelHold = 0; // ramps up as you keep accelerating
        this.vehiclePromptEl = document.getElementById('interaction-prompt');
        this.nearVehicle = null;
        this.vehicleFuel = 0;
        this.vehicleFuelCapacity = 0;
        this.vehicleDistance = 0;
        this.vehicleHud = {
            root: document.getElementById('vehicle-hud'),
            speed: document.getElementById('vehicle-speed'),
            fuelBar: document.getElementById('vehicle-fuel-bar'),
            fuelFill: document.getElementById('vehicle-fuel-fill'),
            fuelText: document.getElementById('vehicle-fuel-text'),
            distance: document.getElementById('vehicle-distance')
        };

        // Studio selection state
        this.studioSelected = null;
        this._studioRaycaster = new THREE.Raycaster();
        this.studioSelectionHelper = null;
        this.selectionInfo = document.getElementById('selection-info');

        // Disable PointerLock requirement in Studio so clicks can select prefabs without lock
        this.controls.enabled = this.gameMode !== 'studio';
        
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
                import('./assets/mixkit-shotgun-recharge.ogg')
                    .then(module => fetch(module.default))
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.reloadBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading reload SFX:', e));

                // Load punch smack buffer
                fetch(smackSfx)
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.smackBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading smack SFX:', e));

                // Load hurt buffer
                fetch(ughSfx)
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.ughBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading hurt SFX:', e));

                // Load footsteps buffer
                fetch(footStepsSfx)
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.footstepsBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading footsteps SFX:', e));

                // Load vehicle door buffer
                fetch(vehicleDoorSfx)
                    .then(response => response.arrayBuffer())
                    .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
                    .then(audioBuffer => {
                        this.vehicleDoorBuffer = audioBuffer;
                    })
                    .catch(e => console.warn('Error loading vehicle door SFX:', e));
            }
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
        }
    }

    placeBlock() {
        if (!this.world) return;
        const target = this.getBlockTarget();
        const size = target.size;
        const blockGeo = new THREE.BoxGeometry(size, size, size);
        const blockMat = new THREE.MeshStandardMaterial({ color: 0xb5651d, roughness: 0.9 });
        const block = new THREE.Mesh(blockGeo, blockMat);
        block.position.copy(target.position);
        block.castShadow = true;
        block.receiveShadow = true;
        block.userData = { type: 'block', size, gameId: this.world.generateID ? this.world.generateID() : undefined, gameName: 'Block' };

        this.scene.add(block);
        if (this.world.objects) this.world.objects.push(block);
        this.placedBlocks.push(block);
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
        // Additional weapon visuals (reuse base meshes)
        const smg = rifle.clone();
        smg.traverse(o => { if (o.material && o.material.color) o.material.color.setHex(0x556b8f); });
        smg.scale.set(0.8, 0.8, 0.8);
        this.rightArmPivot.add(smg);
        this.weaponModels['SMG'] = smg;

        const shotgun = rifle.clone();
        shotgun.traverse(o => { if (o.material && o.material.color) o.material.color.setHex(0x8b5a2b); });
        shotgun.scale.set(1.1, 1.0, 0.8);
        this.rightArmPivot.add(shotgun);
        this.weaponModels['Shotgun'] = shotgun;

        const dmr = rifle.clone();
        dmr.traverse(o => { if (o.material && o.material.color) o.material.color.setHex(0x2e8b57); });
        dmr.scale.set(0.95, 0.95, 1.0);
        this.rightArmPivot.add(dmr);
        this.weaponModels['DMR'] = dmr;

        // Preview block (Studio mode)
        const previewGeo = new THREE.BoxGeometry(this.blockSize, this.blockSize, this.blockSize);
        const previewMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, transparent: true, opacity: 0.35, wireframe: true });
        this.previewBlock = new THREE.Mesh(previewGeo, previewMat);
        this.previewBlock.visible = this.gameMode === 'studio';
        this.previewBlock.castShadow = false;
        this.previewBlock.receiveShadow = false;
        this.scene.add(this.previewBlock);

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

        // Backpack: none by default, equipped via loot

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
            // Studio selection move/delete when an object is selected
            if (this.gameMode === 'studio' && this.studioSelected) {
                const step = 2;
                const verticalStep = 1.5;
                switch (event.code) {
                    case 'ArrowUp':
                        if (event.shiftKey) this.moveSelectedObject(0, 0, verticalStep);
                        else this.moveSelectedObject(0, -step);
                        event.preventDefault(); return;
                    case 'ArrowDown':
                        if (event.shiftKey) this.moveSelectedObject(0, 0, -verticalStep);
                        else this.moveSelectedObject(0, step);
                        event.preventDefault(); return;
                    case 'ArrowLeft': this.moveSelectedObject(-step, 0); event.preventDefault(); return;
                    case 'ArrowRight': this.moveSelectedObject(step, 0); event.preventDefault(); return;
                    case 'KeyX': this.removeSelectedObject(); event.preventDefault(); return;
                }
            }

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
                case 'Digit5': this.switchWeapon(4); break;
                case 'Digit6': this.switchWeapon(5); break;
                case 'Numpad1': this.switchWeapon(0); break;
                case 'Numpad2': this.switchWeapon(1); break;
                case 'Numpad3': this.switchWeapon(2); break;
                case 'Numpad4': this.switchWeapon(3); break;
                case 'Numpad5': this.switchWeapon(4); break;
                case 'Numpad6': this.switchWeapon(5); break;
                case 'KeyB':
                    if (this.gameMode === 'studio') {
                        this.placeBlock();
                    }
                    break;
                case 'KeyU':
                    if (this.gameMode === 'studio') {
                        this.isFloating = !this.isFloating;
                        if (!this.isFloating) {
                            const y = this.getSurfaceHeight(this.position.x, this.position.z);
                            this.mesh.position.y = y;
                            this.velocity.y = 0;
                        }
                    }
                    break;
                case 'Minus':
                    if (this.gameMode === 'studio') this.adjustBlockSize(-0.1);
                    break;
                case 'Equal':
                    if (this.gameMode === 'studio') this.adjustBlockSize(0.1);
                    break;
                case 'KeyM':
                    if (this.gameMode === 'studio') this.moveLastBlock();
                    break;
                case 'KeyX':
                    if (this.gameMode === 'studio') {
                        if (this.studioSelected) {
                            this.removeSelectedObject();
                        } else if (this.selectedBlock) {
                            this.removeBlock(this.selectedBlock);
                        } else {
                            this.removeLastBlock();
                        }
                    }
                    break;
                case 'KeyR': this.reload(); break;
                case 'KeyC': 
                    // Toggle crouch
                    this.isCrouching = !this.isCrouching;
                    if (this.isCrouching) this.isSprinting = false; // stop sprint when crouching
                    break;
                case 'ShiftLeft':
                case 'ShiftRight':
                    // start sprint input
                    if (!this.isCrouching) this.isSprinting = true;
                    break;
                case 'KeyV': this.toggleCameraMode(); break; // Toggle camera view
                case 'KeyE':
                    // Enter/Exit vehicles before other interactions
                    if (this.isInVehicle) {
                        this.exitVehicle();
                        return;
                    } else {
                        const nearby = this.findNearbyVehicle();
                        if (nearby) {
                            this.enterVehicle(nearby);
                            return;
                        }
                    }
                    break;
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
                if (this.gameMode === 'studio') {
                    const hitObj = this.selectStudioObject(event);
                    if (hitObj) return; // consume click for selection/move
                    const hitBlock = this.selectBlockUnderCrosshair();
                    if (hitBlock) return;
                }
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
        // Avoid locking when menu/paused overlays are active
        const menu = document.getElementById('main-menu');
        if (menu && menu.style.display !== 'none') return;
        if (this.isPaused) return;

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
        if (itemName && itemName.startsWith('Backpack:')) {
            const colorHex = itemName.split(':')[1] || '2c3e50';
            const dropColor = this.equipBackpack(parseInt(colorHex, 16));
            return dropColor;
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

        // Check world objects first (trees, rocks, houses, blocks)
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
        
        // Create bullet tracer visualization (optional; off by default for perf)
        if (this.showTracers) {
            this.createBulletTracer(bulletStart, bulletEnd, hitSomething);
        }

        // Impact smoke for sniper hits
        if (hitSomething && weapon.name === 'Sniper') {
            this.createImpactSmoke(bulletEnd);
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

    createImpactSmoke(position) {
        const group = new THREE.Group();
        group.position.copy(position);

        const puffCount = 8;
        for (let i = 0; i < puffCount; i++) {
            const scale = 0.15 + Math.random() * 0.2;
            const geo = new THREE.SphereGeometry(scale, 6, 6);
            const mat = new THREE.MeshBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.5 });
            const puff = new THREE.Mesh(geo, mat);
            puff.position.set(
                (Math.random() - 0.5) * 0.4,
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.4
            );
            group.add(puff);
        }

        this.scene.add(group);

        const lifetime = 600;
        const start = performance.now();
        const fade = () => {
            const t = performance.now() - start;
            const alpha = Math.max(0, 1 - t / lifetime);
            group.children.forEach(c => {
                if (c.material) c.material.opacity = alpha * 0.5;
            });
            if (t < lifetime) {
                requestAnimationFrame(fade);
            } else {
                group.traverse(obj => {
                    if (obj.geometry) obj.geometry.dispose();
                    if (obj.material) obj.material.dispose();
                });
                this.scene.remove(group);
            }
        };
        fade();
    }

    update(dt) {
        if (this.isDead) return;

        // Vehicle prompt logic (works even without pointer lock)
        this.updateVehiclePrompt();

        // Driving branch
        if (this.isInVehicle) {
            this.updateVehicleDrive(dt);
            return;
        }

        // Allow updates when PointerLock is active OR when touch controls requested movement
        const canMove = (this.controls && this.controls.isLocked === true) || this.allowTouchMovement === true;
        if (canMove) {
            // Physics
        this.velocity.x -= this.velocity.x * 10.0 * dt;
        this.velocity.z -= this.velocity.z * 10.0 * dt;
        if (!this.isFloating) {
            this.velocity.y -= this.gravity * dt;
        } else {
            this.velocity.y *= 0.9;
        }

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
            if (this.isSprinting && !this.isCrouching && moving && this.stamina > 0) sprintMultiplier = 1.9; // ~double speed
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

            // Floating vertical control
            let verticalBoost = 0;
            if (this.isFloating) {
                const camDir = new THREE.Vector3();
                this.camera.getWorldDirection(camDir);
                const pitchY = camDir.y;
                if (this.moveForward) verticalBoost += pitchY * this.speed * dt * 0.3;
                if (this.moveBackward) verticalBoost -= pitchY * this.speed * dt * 0.3;
            }

            this.mesh.position.y += this.velocity.y * dt + verticalBoost;

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

            if (!this.isFloating) {
            if (!this.isFloating) {
                if (this.mesh.position.y < 0) {
                    this.velocity.y = 0;
                    this.mesh.position.y = 0;
                    this.canJump = true;
                }
                // Clamp to surface height (terrain + blocks)
                const surfaceY = this.getSurfaceHeight(this.mesh.position.x, this.mesh.position.z);
                if (this.mesh.position.y < surfaceY) {
                    this.mesh.position.y = surfaceY;
                    this.velocity.y = 0;
                    this.canJump = true;
                }
            }
            }
            const onGround = (!this.isFloating) && (this.canJump || this.mesh.position.y <= 0.01);

            // Footsteps loop when moving on ground
            this.handleFootsteps(moving && onGround && !this.isDead);

            // Update block preview for Studio
            if (this.gameMode === 'studio') {
                this.updateBlockPreview();
            } else if (this.previewBlock) {
                this.previewBlock.visible = false;
            }

            // Keep player inside map bounds
            if (this.world && typeof this.world.halfMapSize === 'number') {
                const limit = this.world.halfMapSize - 1;
                this.mesh.position.x = Math.max(-limit, Math.min(limit, this.mesh.position.x));
                this.mesh.position.z = Math.max(-limit, Math.min(limit, this.mesh.position.z));
            }

            // Track distance traveled
            if (this.previousPosition.length() > 0) {
                const distance = this.mesh.position.distanceTo(this.previousPosition);
                this.distanceTraveled += distance;
            }
            this.previousPosition.copy(this.mesh.position);

            // Handle stamina drain/recovery
            if (this.isSprinting && !this.isCrouching && moving && this.stamina > 0) {
                // Drain stamina per second while sprinting
                if (this.gameMode !== 'studio') {
                    const drain = 20 * dt; // 20 stamina per second
                    this.stamina = Math.max(0, this.stamina - drain);
                    if (this.stamina <= 0) {
                        this.isSprinting = false; // stop sprinting when out
                    }
                }
            } else {
                // Regenerate stamina when not sprinting
                if (this.gameMode !== 'studio') {
                    const regen = 10 * dt; // 10 stamina per second
                    this.stamina = Math.min(100, this.stamina + regen);
                }
            }

            if (this.gameMode === 'studio') {
                this.stamina = 100;
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
            const weapon = this.weapons[this.currentWeaponIndex];
            if (this.isAiming && weapon && weapon.zoomFov) {
                targetFov = weapon.zoomFov;
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

    findNearbyVehicle() {
        if (!this.worldObjects) return null;
        let closest = null;
        let closestDist = 4; // meters
        this.worldObjects.forEach(obj => {
            if (!obj || !obj.userData || obj.userData.type !== 'vehicle') return;
            const dist = obj.position.distanceTo(this.mesh.position);
            if (dist < closestDist) {
                closest = obj;
                closestDist = dist;
            }
        });
        return closest;
    }

    updateVehiclePrompt() {
        const el = this.vehiclePromptEl;
        if (!el) return;
        if (this.isInVehicle) {
            el.innerText = 'Press E to exit vehicle';
            el.dataset.vehiclePrompt = '1';
            el.classList.remove('hidden');
            return;
        }
        const nearby = this.findNearbyVehicle();
        this.nearVehicle = nearby;
        if (nearby) {
            el.innerText = 'Press E to drive vehicle';
            el.dataset.vehiclePrompt = '1';
            el.classList.remove('hidden');
        } else if (el.dataset.vehiclePrompt === '1') {
            el.classList.add('hidden');
            delete el.dataset.vehiclePrompt;
        }
    }

    enterVehicle(vehicle) {
        if (!vehicle || this.isInVehicle) return false;
        if (!vehicle.userData) vehicle.userData = {};
        if (!vehicle.userData.hasFrontAligned) {
            vehicle.rotation.y += Math.PI; // flip once so model faces travel direction
            vehicle.userData.hasFrontAligned = true;
        }
        this.isInVehicle = true;
        this.vehicleAccelHold = 0;
        this.currentVehicle = vehicle;
        this.vehicleSpeed = 0;
        const vType = (vehicle.userData && vehicle.userData.vehicleType) || 'car';
        this.vehicleFuelCapacity = vType === 'truck' ? 60 : 40; // liters
        this.vehicleFuel = this.vehicleFuelCapacity;
        this.vehicleDistance = 0;
        this.stopFootsteps();
        this.stopVehicleDriveSound();
        this.playVehicleDoor();
        this.mesh.visible = false;
        this.velocity.set(0, 0, 0);
        this.mesh.position.copy(vehicle.position);
        this.updateVehicleHUD(true);
        return true;
    }

    exitVehicle() {
        if (!this.currentVehicle) {
            this.isInVehicle = false;
            return;
        }
        const vehicle = this.currentVehicle;
        this.playVehicleDoor();
        this.stopVehicleDriveSound();
        this.stopFootsteps(); // ensure walking loop is silenced when transitioning out of vehicles
        if (this.world && typeof this.world.getHeightAt === 'function') {
            const groundY = this.world.getHeightAt(vehicle.position.x, vehicle.position.z);
            const clearance = this.getVehicleGroundClearance(vehicle);
            vehicle.position.y = groundY + clearance;
        }
        const exitOffset = new THREE.Vector3(-1.5, 0, -2).applyEuler(vehicle.rotation);
        const exitPos = vehicle.position.clone().add(exitOffset);
        this.mesh.position.copy(exitPos);
        // Drop the player exactly onto the surface height to prevent floating
        const surfaceY = (typeof this.getSurfaceHeight === 'function')
            ? this.getSurfaceHeight(exitPos.x, exitPos.z)
            : (this.world && typeof this.world.getHeightAt === 'function' ? this.world.getHeightAt(exitPos.x, exitPos.z) : exitPos.y);
        this.mesh.position.y = surfaceY;
        // Reset vertical velocity so player doesn't drift
        this.velocity.set(0, 0, 0);
        this.mesh.visible = true;
        this.isInVehicle = false;
        this.currentVehicle = null;
        this.vehicleSpeed = 0;
        this.canJump = true;
        this.updateVehicleHUD(false);
        if (this.vehiclePromptEl && this.vehiclePromptEl.dataset.vehiclePrompt === '1') {
            this.vehiclePromptEl.classList.add('hidden');
            delete this.vehiclePromptEl.dataset.vehiclePrompt;
        }
    }

    getVehicleGroundClearance(vehicle) {
        if (!vehicle) return 0.05;
        const ud = vehicle.userData || {};
        if (typeof ud.groundClearance === 'number') {
            return ud.groundClearance;
        }
        if (typeof ud.wheelRadius === 'number' && typeof ud.wheelCenterY === 'number') {
            return Math.max(0, ud.wheelRadius - ud.wheelCenterY);
        }
        return 0.05;
    }

    updateVehicleDrive(dt) {
        const vehicle = this.currentVehicle;
        if (!vehicle) {
            this.isInVehicle = false;
            return;
        }

        // Ensure walking loop is silent while driving
        this.stopFootsteps();

        const prevPos = vehicle.position.clone();

        // Stop everything if out of fuel
        if (this.vehicleFuel <= 0) {
            this.vehicleSpeed = 0;
            this.mesh.position.copy(vehicle.position);
            this.previousPosition.copy(vehicle.position);
            this.updateVehicleHUD(true);
            return;
        }

        let accelInput = 0;
        if (this.moveForward) accelInput += 1;
        if (this.moveBackward) accelInput -= 1;
        this.vehicleSpeed += accelInput * this.vehicleAccel * dt;
        // Ramp up max speed while holding forward
        if (this.moveForward && accelInput > 0) {
            this.vehicleAccelHold = Math.min(1, this.vehicleAccelHold + dt * 0.8);
        } else {
            this.vehicleAccelHold = Math.max(0, this.vehicleAccelHold - dt * 0.6);
        }
        const maxFwd = this.vehicleBaseMaxSpeed + this.vehicleBoostMax * this.vehicleAccelHold;
        const maxBack = this.vehicleBaseMaxSpeed * 0.5;
        this.vehicleSpeed = Math.min(maxFwd, Math.max(-maxBack, this.vehicleSpeed));
        this.vehicleSpeed *= Math.max(0, 1 - this.vehicleFriction * dt);

        // Fuel consumption (only when moving)
        if (Math.abs(this.vehicleSpeed) > 0.1) {
            this.vehicleFuel = Math.max(0, this.vehicleFuel - (8 * dt));
            if (this.vehicleFuel <= 0) {
                this.vehicleSpeed = 0;
            }
        }

        const turnDir = (this.vehicleSpeed >= 0 ? 1 : -1);
        if (this.moveLeft) vehicle.rotation.y += this.vehicleTurnSpeed * dt * turnDir;
        if (this.moveRight) vehicle.rotation.y -= this.vehicleTurnSpeed * dt * turnDir;

        const forward = new THREE.Vector3(0, 0, 1).applyEuler(vehicle.rotation);
        const desired = vehicle.position.clone().addScaledVector(forward, this.vehicleSpeed * dt);

        // Basic collision against world objects (treat as spheres)
        if (this.checkVehicleCollision(desired, vehicle)) {
            this.vehicleSpeed *= 0.2; // bounce/slow on impact
        } else {
            vehicle.position.copy(desired);
        }

        if (this.world && typeof this.world.getHeightAt === 'function') {
            const groundY = this.world.getHeightAt(vehicle.position.x, vehicle.position.z);
            const clearance = this.getVehicleGroundClearance(vehicle);
            vehicle.position.y = groundY + clearance;
        }

        if (this.world && typeof this.world.halfMapSize === 'number') {
            const limit = this.world.halfMapSize - 1;
            vehicle.position.x = Math.max(-limit, Math.min(limit, vehicle.position.x));
            vehicle.position.z = Math.max(-limit, Math.min(limit, vehicle.position.z));
        }

        if (this.previousPosition.length() > 0) {
            const dist = vehicle.position.distanceTo(this.previousPosition);
            this.distanceTraveled += dist;
        }
        this.mesh.position.copy(vehicle.position);
        this.previousPosition.copy(vehicle.position);

        // Rotate wheels based on traveled distance
        const movedDist = vehicle.position.distanceTo(prevPos);
        this.rotateVehicleWheels(vehicle, movedDist);

        // Fuel consumption based on distance (liters per meter)
        if (movedDist > 0) {
            const type = (vehicle.userData && vehicle.userData.vehicleType) || 'car';
            const efficiencyKmPerL = type === 'truck' ? 6 : 10; // trucks: 6 km/L, cars: 10 km/L
            const kmMoved = movedDist / 1000; // world units treated as meters
            const fuelUsed = kmMoved / efficiencyKmPerL;
            this.vehicleFuel = Math.max(0, this.vehicleFuel - fuelUsed);
            if (this.vehicleFuel <= 0) {
                this.vehicleSpeed = 0;
            }
            this.vehicleDistance += kmMoved;
        }

        // Update vehicle HUD display
        this.updateVehicleHUD(true);

        if (this.enemyManager && Array.isArray(this.enemyManager.enemies)) {
            const now = performance.now();
            this.enemyManager.enemies.forEach(enemy => {
                if (!enemy || !enemy.position) return;
                const dist = enemy.position.distanceTo(vehicle.position);
                if (dist < 2.4) {
                    if (!enemy.userData) enemy.userData = {};
                    const lastHit = enemy.userData.lastRunOver || 0;
                    if (now - lastHit > 400) {
                        enemy.userData.lastRunOver = now;
                        try { enemy.takeDamage(999); } catch (e) {}
                    }
                }
            });
        }

        // Allow camera orbit while in vehicle, similar to on-foot TPS orbit
        const lookTarget = vehicle.position.clone();
        const camOffset = new THREE.Vector3(0, 2, 6).applyQuaternion(this.camera.quaternion);
        const targetCamPos = lookTarget.clone().add(camOffset);
        this.camera.position.lerp(targetCamPos, 0.18);

        // Ready for future engine SFX without playing anything yet
        const driveActive = Math.abs(this.vehicleSpeed) > 0.5;
        this.handleVehicleDriveSound(driveActive);
    }

    rotateVehicleWheels(vehicle, distanceMoved) {
        if (!vehicle || !vehicle.userData || !vehicle.userData.wheels || !vehicle.userData.wheels.length) return;
        const radius = vehicle.userData.wheelRadius || 0.35;
        const rot = (distanceMoved / (radius || 0.35));
        vehicle.userData.wheels.forEach(w => {
            try { w.rotation.x -= rot; } catch (e) {}
        });
    }

    updateVehicleHUD(show) {
        if (!this.vehicleHud || !this.vehicleHud.root) return;
        const root = this.vehicleHud.root;
        if (!show) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
        const speedKmh = Math.abs(this.vehicleSpeed) * 3.6;
        if (this.vehicleHud.speed) this.vehicleHud.speed.innerText = speedKmh.toFixed(0);
        if (this.vehicleHud.fuelFill) {
            const capacity = this.vehicleFuelCapacity || 1;
            const pct = Math.max(0, Math.min(100, (this.vehicleFuel / capacity) * 100));
            this.vehicleHud.fuelFill.style.width = `${pct}%`;
            this.vehicleHud.fuelFill.style.background = pct < 20 ? 'linear-gradient(90deg, #ff7043, #ff3d00)' : 'linear-gradient(90deg, #8bc34a, #cddc39)';
        }
        if (this.vehicleHud.fuelText) {
            const capacity = this.vehicleFuelCapacity || 1;
            const pct = Math.max(0, Math.min(100, (this.vehicleFuel / capacity) * 100));
            this.vehicleHud.fuelText.innerText = `${pct.toFixed(0)}%`;
        }
        if (this.vehicleHud.distance) {
            this.vehicleHud.distance.innerText = this.vehicleDistance.toFixed(1);
        }
    }

    selectStudioObject(event) {
        if (this.gameMode !== 'studio' || !this.worldObjects || this.worldObjects.length === 0) return null;
        const mouse = new THREE.Vector2();
        if (this.controls && this.controls.isLocked) {
            mouse.set(0, 0);
        } else if (event && event.clientX !== undefined) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        } else {
            mouse.set(0, 0);
        }
        this._studioRaycaster.setFromCamera(mouse, this.camera);
        const pickables = this.worldObjects.filter(o => o && o.userData && o.userData.gameName !== 'Ground');
        const hits = this._studioRaycaster.intersectObjects(pickables, true);
        if (!hits.length) {
            this.clearStudioSelection();
            return null;
        }
        let obj = hits[0].object;
        while (obj && !this.worldObjects.includes(obj)) {
            obj = obj.parent;
        }
        if (obj) {
            this.setStudioSelection(obj);
        }
        return obj;
    }

    moveSelectedObject(dx, dz, dy = 0) {
        if (!this.studioSelected) return;
        const obj = this.studioSelected;
        obj.position.x += dx;
        obj.position.z += dz;
        obj.position.y += dy;
        if (dy === 0 && this.world && typeof this.world.getHeightAt === 'function') {
            obj.position.y = this.world.getHeightAt(obj.position.x, obj.position.z);
        }
        this.refreshStudioSelectionHelper();
    }

    clearStudioSelection() {
        this.studioSelected = null;
        if (this.studioSelectionHelper) {
            try { this.scene.remove(this.studioSelectionHelper); } catch (e) {}
            this.studioSelectionHelper = null;
        }
        if (this.selectionInfo) {
            this.selectionInfo.classList.add('hidden');
        }
    }

    removeSelectedObject() {
        if (!this.studioSelected) return;
        const obj = this.studioSelected;
        this.clearStudioSelection();
        try { this.scene.remove(obj); } catch (e) {}
        if (this.worldObjects) {
            const idx = this.worldObjects.indexOf(obj);
            if (idx >= 0) this.worldObjects.splice(idx, 1);
        }
    }

    setStudioSelection(obj) {
        this.studioSelected = obj;
        if (this.selectionInfo) {
            const data = obj.userData || {};
            this.selectionInfo.innerText = `${data.gameName || 'Object'} (${data.gameId || '---'})`;
            this.selectionInfo.classList.remove('hidden');
        }
        this.refreshStudioSelectionHelper();
    }

    refreshStudioSelectionHelper() {
        if (this.studioSelectionHelper) {
            try { this.scene.remove(this.studioSelectionHelper); } catch (e) {}
            this.studioSelectionHelper = null;
        }
        if (!this.studioSelected) return;
        try {
            const box = this.buildStudioSelectionBox(this.studioSelected);
            this.studioSelectionHelper = new THREE.Box3Helper(box, 0xffd700);
            this.studioSelectionHelper.material.depthTest = false;
            this.studioSelectionHelper.material.transparent = true;
            this.studioSelectionHelper.material.opacity = 0.9;
            this.scene.add(this.studioSelectionHelper);
        } catch (e) {
            this.studioSelectionHelper = null;
        }
    }

    buildStudioSelectionBox(obj) {
        const box = new THREE.Box3();
        obj.traverse(child => {
            if (!child.isMesh || !child.geometry) return;
            const ud = child.userData || {};
            const mat = child.material;
            const isTransparent = mat && mat.transparent;
            if (isTransparent || ud.isShadow || ud.shadow) return;
            if (!child.geometry.boundingBox) {
                try { child.geometry.computeBoundingBox(); } catch (e) {}
            }
            if (child.geometry.boundingBox) {
                const childBox = child.geometry.boundingBox.clone();
                child.updateWorldMatrix(true, false);
                childBox.applyMatrix4(child.matrixWorld);
                box.union(childBox);
            }
        });
        if (box.isEmpty()) {
            box.setFromCenterAndSize(obj.position, new THREE.Vector3(1, 1, 1));
        }
        return box;
    }

    checkVehicleCollision(targetPos, currentVehicle = null) {
        if (!this.worldObjects) return false;
        const radius = 2.0;
        for (let i = 0; i < this.worldObjects.length; i++) {
            const obj = this.worldObjects[i];
            if (!obj) continue;
            const ud = obj.userData || {};
            if (currentVehicle && obj === currentVehicle) continue;
            if (ud.gameName === 'Ground' || ud.type === 'ground') continue; // allow driving over ground plane

            const objPos = obj.position || (obj.getWorldPosition ? obj.getWorldPosition(new THREE.Vector3()) : null);
            if (!objPos) continue;
            const dist = objPos.distanceTo(targetPos);
            let objRadius = 1.5;
            if (obj.geometry && obj.geometry.boundingSphere) {
                objRadius = obj.geometry.boundingSphere.radius || objRadius;
            } else if (ud && ud.size === 'large') {
                objRadius = 5;
            } else if (ud.type === 'vehicle') {
                objRadius = 2.5;
            }
            if (dist < radius + objRadius) {
                return true;
            }
        }
        return false;
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
            let hitSomething = false;
            
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
                        hitSomething = true;
                    }
                }
            });

            if (hitSomething) {
                this.playSmack();
            }
        }
    }

    playSmack() {
        try {
            if (this.audioCtx) {
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume().then(() => this.playSmack());
                    return;
                }
                if (this.smackBuffer) {
                    const src = this.audioCtx.createBufferSource();
                    src.buffer = this.smackBuffer;
                    const gain = this.audioCtx.createGain();
                    gain.gain.value = this.sfxVolume;
                    src.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    src.start(0);
                }
            }
        } catch (e) {
            console.warn('playSmack error:', e);
        }
    }

    equipBackpack(color = 0x2c3e50) {
        const prevColor = this.backpackColor;
        if (this.backpack && this.backpack.parent) {
            this.backpack.parent.remove(this.backpack);
        }
        const backpack = new THREE.Group();
        backpack.position.set(0, 1.25, -0.32);

        const packBody = new THREE.Mesh(
            new THREE.BoxGeometry(0.7, 0.9, 0.35),
            new THREE.MeshStandardMaterial({ color, metalness: 0.15, roughness: 0.8 })
        );
        packBody.position.set(0, 0, 0);
        backpack.add(packBody);

        const packPocket = new THREE.Mesh(
            new THREE.BoxGeometry(0.6, 0.25, 0.16),
            new THREE.MeshStandardMaterial({ color: 0x34495e, metalness: 0.1, roughness: 0.8 })
        );
        packPocket.position.set(0, -0.55, 0.22);
        backpack.add(packPocket);

        const strapMat = new THREE.MeshStandardMaterial({ color: 0x1f2c3a, metalness: 0.1, roughness: 0.9 });
        const strapL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.82, 0.07), strapMat);
        strapL.position.set(-0.28, -0.03, 0.2);
        const strapR = strapL.clone();
        strapR.position.x = 0.28;
        backpack.add(strapL, strapR);

        this.mesh.add(backpack);
        this.backpack = backpack;
        this.backpackColor = color;
        return prevColor;
    }

    queueHurtBeat() {
        // Convert multiple simultaneous hits into heart-beat cadence
        this._hurtAccumulator += 1;
        if (this._hurtAccumulator >= 2) {
            const beats = Math.floor(this._hurtAccumulator / 2);
            this._hurtQueue += beats;
            this._hurtAccumulator -= beats * 2;
        }
        // Ensure at least one beat when attacked and no queue
        if (this._hurtQueue === 0 && this._hurtAccumulator > 0) {
            this._hurtQueue = 1;
            this._hurtAccumulator = 0;
        }
        if (!this._hurtBeatTimer) {
            this._playHurtBeatLoop();
        }
    }

    _playHurtBeatLoop() {
        if (this._hurtQueue <= 0) {
            this._hurtBeatTimer = null;
            return;
        }
        this.playHurt();
        this._hurtQueue = Math.max(0, this._hurtQueue - 1);
        this._hurtBeatTimer = setTimeout(() => this._playHurtBeatLoop(), 2000);
    }

    clearHurtQueue() {
        this._hurtAccumulator = 0;
        this._hurtQueue = 0;
        if (this._hurtBeatTimer) {
            clearTimeout(this._hurtBeatTimer);
            this._hurtBeatTimer = null;
        }
    }

    playHurt() {
        try {
            if (this.audioCtx) {
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume().then(() => this.playHurt());
                    return;
                }
                if (this.ughBuffer) {
                    const src = this.audioCtx.createBufferSource();
                    src.buffer = this.ughBuffer;
                    const gain = this.audioCtx.createGain();
                    gain.gain.value = this.sfxVolume;
                    src.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    src.start(0);
                }
            }
        } catch (e) {
            console.warn('playHurt error:', e);
        }
    }

    playVehicleDoor() {
        try {
            if (this.audioCtx) {
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume().then(() => this.playVehicleDoor());
                    return;
                }
                if (this.vehicleDoorBuffer) {
                    const src = this.audioCtx.createBufferSource();
                    src.buffer = this.vehicleDoorBuffer;
                    const gain = this.audioCtx.createGain();
                    gain.gain.value = this.sfxVolume;
                    src.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    src.start(0);
                }
            }
        } catch (e) {
            console.warn('playVehicleDoor error:', e);
        }
    }

    handleVehicleDriveSound(active) {
        try {
            if (!this.audioCtx || !this.enableVehicleDriveSound) {
                this.stopVehicleDriveSound();
                return;
            }
            if (!this.vehicleDriveBuffer) {
                this.stopVehicleDriveSound();
                return;
            }
            if (active === this._lastVehicleDriveActive && ((active && this._vehicleDriveSource) || (!active && !this._vehicleDriveSource))) {
                return;
            }

            this._lastVehicleDriveActive = active;

            if (active) {
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume();
                }
                if (this._vehicleDriveSource) {
                    return;
                }
                const src = this.audioCtx.createBufferSource();
                src.buffer = this.vehicleDriveBuffer;
                src.loop = true;
                const gain = this.audioCtx.createGain();
                gain.gain.value = this.sfxVolume * 0.4;
                src.connect(gain);
                gain.connect(this.audioCtx.destination);
                src.start(0);
                this._vehicleDriveSource = src;
                this._vehicleDriveGain = gain;
                src.onended = () => {
                    this._vehicleDriveSource = null;
                    this._vehicleDriveGain = null;
                };
            } else {
                this.stopVehicleDriveSound();
            }
        } catch (e) {
            console.warn('handleVehicleDriveSound error:', e);
        }
    }

    stopVehicleDriveSound() {
        this._lastVehicleDriveActive = false;
        if (this._vehicleDriveSource) {
            try { this._vehicleDriveSource.stop(); } catch (e) {}
            try { this._vehicleDriveSource.disconnect(); } catch (e) {}
        }
        if (this._vehicleDriveGain) {
            try { this._vehicleDriveGain.disconnect(); } catch (e) {}
        }
        this._vehicleDriveSource = null;
        this._vehicleDriveGain = null;
    }

    handleFootsteps(active) {
        try {
            if (this.isInVehicle) {
                this.stopFootsteps();
                return;
            }
            if (!this.audioCtx || !this.footstepsBuffer) {
                this.stopFootsteps();
                return;
            }

            // No change in state? keep current playback/stop state
            if (active === this._lastFootstepsActive && ((active && this._footstepsSource) || (!active && !this._footstepsSource))) {
                // Still update rate if playing
                if (active && this._footstepsSource) {
                    const rate = this.isSprinting ? 1.4 : (this.isCrouching ? 0.8 : 1.0);
                    this._footstepsSource.playbackRate.value = rate;
                }
                return;
            }

            this._lastFootstepsActive = active;

            if (active) {
                if (this.audioCtx.state === 'suspended') {
                    this.audioCtx.resume();
                }
                if (this._footstepsSource) {
                    const rate = this.isSprinting ? 1.4 : (this.isCrouching ? 0.8 : 1.0);
                    this._footstepsSource.playbackRate.value = rate;
                    return;
                }
                const src = this.audioCtx.createBufferSource();
                src.buffer = this.footstepsBuffer;
                src.loop = true;
                src.playbackRate.value = this.isSprinting ? 1.4 : (this.isCrouching ? 0.8 : 1.0);
                const gain = this.audioCtx.createGain();
                gain.gain.value = this.sfxVolume * 0.35;
                src.connect(gain);
                gain.connect(this.audioCtx.destination);
                src.start(0);
                this._footstepsSource = src;
                this._footstepsGain = gain;
                src.onended = () => {
                    this._footstepsSource = null;
                    this._footstepsGain = null;
                };
            } else {
                this.stopFootsteps();
            }
        } catch (e) {
            console.warn('handleFootsteps error:', e);
        }
    }

    stopFootsteps() {
        this._lastFootstepsActive = false;
        if (this._footstepsSource) {
            try { this._footstepsSource.stop(); } catch (e) {}
            try { this._footstepsSource.disconnect(); } catch (e) {}
        }
        if (this._footstepsGain) {
            try { this._footstepsGain.disconnect(); } catch (e) {}
        }
        this._footstepsSource = null;
        this._footstepsGain = null;
    }


    get position() {
        return this.mesh.position;
    }

    getSurfaceHeight(x, z) {
        let surface = (this.world && typeof this.world.getHeightAt === 'function') ? this.world.getHeightAt(x, z) : 0;
        if (this.world && this.world.objects && this.world.objects.length > 0) {
            this.world.objects.forEach(obj => {
                if (obj.userData && obj.userData.type === 'block') {
                    const size = obj.userData.size || this.blockSize;
                    if (Math.abs(obj.position.x - x) < size * 0.6 && Math.abs(obj.position.z - z) < size * 0.6) {
                        const top = obj.position.y + size / 2;
                        if (top > surface) surface = top;
                    }
                }
            });
        }
        return surface;
    }

    adjustBlockSize(delta) {
        const next = Math.max(this.minBlockSize, Math.min(this.maxBlockSize, this.blockSize + delta));
        this.blockSize = next;
        console.log('Block size:', this.blockSize.toFixed(2));
    }

    moveLastBlock() {
        if (!this.placedBlocks.length) return;
        const block = this.placedBlocks[this.placedBlocks.length - 1];
        if (!block) return;

        // Position in front of player
        const target = this.getBlockTarget(block);
        block.position.set(target.position.x, target.position.y, target.position.z);
    }

    getBlockTarget(existingBlock = null) {
        const forward = new THREE.Vector3();
        this.camera.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();
        const size = existingBlock && existingBlock.userData && existingBlock.userData.size ? existingBlock.userData.size : this.blockSize;

        const pos = this.mesh.position.clone().add(forward.multiplyScalar(2));
        pos.x = Math.round(pos.x);
        pos.z = Math.round(pos.z);

        if (this.world && typeof this.world.halfMapSize === 'number') {
            const limit = this.world.halfMapSize - 1;
            pos.x = Math.max(-limit, Math.min(limit, pos.x));
            pos.z = Math.max(-limit, Math.min(limit, pos.z));
        }

        let baseY = this.world.getHeightAt ? this.world.getHeightAt(pos.x, pos.z) : 0;
        const existingBlocks = (this.world.objects || []).filter(obj => obj.userData && obj.userData.type === 'block' && obj !== existingBlock);
        const atSameXZ = existingBlocks.filter(b => Math.abs(b.position.x - pos.x) < 0.1 && Math.abs(b.position.z - pos.z) < 0.1);
        if (atSameXZ.length > 0) {
            const top = Math.max(...atSameXZ.map(b => b.position.y + (b.userData && b.userData.size ? b.userData.size / 2 : size / 2)));
            baseY = top;
        }

        const targetY = baseY + size / 2;
        return { position: new THREE.Vector3(pos.x, targetY, pos.z), size };
    }

    updateBlockPreview() {
        if (!this.previewBlock) return;
        const target = this.getBlockTarget();
        this.previewBlock.visible = true;
        this.previewBlock.position.copy(target.position);
        const scale = target.size / this.blockSize;
        this.previewBlock.scale.set(scale, scale, scale);
    }

    removeLastBlock() {
        if (!this.placedBlocks.length) return;
        const block = this.placedBlocks.pop();
        if (block && block.parent) {
            block.parent.remove(block);
        }
        if (this.world && this.world.objects) {
            this.world.objects = this.world.objects.filter(o => o !== block);
        }
        if (block && block.geometry) block.geometry.dispose();
        if (block && block.material) {
            if (Array.isArray(block.material)) block.material.forEach(m => m.dispose());
            else block.material.dispose();
        }
        if (this.selectedBlock === block) {
            this.clearBlockSelection();
        }
    }

    selectBlockUnderCrosshair() {
        if (!this.world || !this.world.objects) return false;
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        const intersects = raycaster.intersectObjects(this.world.objects, true);
        if (intersects.length === 0) {
            this.clearBlockSelection();
            return false;
        }
        let found = null;
        for (const hit of intersects) {
            let obj = hit.object;
            while (obj && obj.parent) {
                if (obj.userData && obj.userData.type === 'block') {
                    found = obj;
                    break;
                }
                obj = obj.parent;
            }
            if (found) break;
        }
        if (found) {
            this.setBlockSelection(found);
            return true;
        } else {
            this.clearBlockSelection();
            return false;
        }
    }

    setBlockSelection(block) {
        this.clearBlockSelection();
        this.selectedBlock = block;
        const helper = new THREE.BoxHelper(block, 0xffff00);
        helper.userData = { ignoreSelect: true };
        this.scene.add(helper);
        this.selectedBlockHelper = helper;
    }

    clearBlockSelection() {
        this.selectedBlock = null;
        if (this.selectedBlockHelper) {
            this.scene.remove(this.selectedBlockHelper);
            if (this.selectedBlockHelper.material) this.selectedBlockHelper.material.dispose();
            if (this.selectedBlockHelper.geometry) this.selectedBlockHelper.geometry.dispose();
            this.selectedBlockHelper = null;
        }
    }

    removeBlock(block) {
        if (!block) return;
        this.placedBlocks = this.placedBlocks.filter(b => b !== block);
        if (block.parent) block.parent.remove(block);
        if (this.world && this.world.objects) {
            this.world.objects = this.world.objects.filter(o => o !== block);
        }
        if (block.geometry) block.geometry.dispose();
        if (block.material) {
            if (Array.isArray(block.material)) block.material.forEach(m => m.dispose());
            else block.material.dispose();
        }
        if (this.selectedBlock === block) {
            this.clearBlockSelection();
        }
    }

    takeDamage(amount) {
        if (this.gameMode === 'matrix' || this.gameMode === 'studio') {
            // No damage in Matrix mode
            return;
        }
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

        // Play hurt sound when taking damage (throttled)
        if (amount > 0) {
            this.queueHurtBeat();
        }

        if (this.health <= 0) {
            this.health = 0;
            this.die();
        }
        // Trigger hit animation
        this.hitTimer = 0.6; // 600ms flinch
    }

    die() {
        if (this.gameMode === 'matrix' || this.gameMode === 'studio') return;
        this.handleFootsteps(false);
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
