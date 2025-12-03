import * as THREE from 'three';
import { DEFAULT_MAP_SIZE } from './world.js';

export class ItemManager {
    constructor(scene, player, settings) {
        this.scene = scene;
        this.player = player;
        this.items = [];
        this.interactionPrompt = document.getElementById('interaction-prompt');
        this.mapSize = (settings && settings.mapSize) ? settings.mapSize : DEFAULT_MAP_SIZE;
        this.spawnSpan = this.mapSize * 0.75; // Keep loot inside playable area with margin
        this.glowRadius = 7; // Distance to show glow particles
        this.world = null;
        this.settings = settings || {};
        this.matrixDropInterval = 5; // seconds
        this._matrixDropTimer = 0;
        this.matrixDropBatchSize = 10;
        this.matrixDropRadiusLimit = 10; // meters around player to cap drops
        
        this.initLoot();
        
        // Listen for interaction
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyE') this.tryInteract();
        });
    }

    setWorld(world) {
        this.world = world;
        this.realignItemsToGround();
    }


    getClampedCoord(x, z) {
        if (this.world && typeof this.world.halfMapSize === 'number') {
            const limit = this.world.halfMapSize - 1;
            return {
                x: Math.max(-limit, Math.min(limit, x)),
                z: Math.max(-limit, Math.min(limit, z))
            };
        }
        return { x, z };
    }

    initLoot() {
        // Matrix/Studio/Matrix-AI mode: no auto-loot here (loadout/spawns handled elsewhere)
        if (this.settings.gameMode === 'matrix' || this.settings.gameMode === 'studio' || this.settings.gameMode === 'matrix-ai') return;
        if (this.settings.skipLoot) return;
        // Create some random chests/items
        for (let i = 0; i < 24; i++) {
            let x = (Math.random() - 0.5) * this.spawnSpan;
            let z = (Math.random() - 0.5) * this.spawnSpan;
            ({ x, z } = this.getClampedCoord(x, z));
            this.createChest(x, 0.5, z);
        }

        // Spawn some stamina items (juice bottles)
        for (let i = 0; i < 36; i++) {
            let x = (Math.random() - 0.5) * this.spawnSpan;
            let z = (Math.random() - 0.5) * this.spawnSpan;
            ({ x, z } = this.getClampedCoord(x, z));
            this.spawnJuiceBottle(x, z);
        }

        // Spawn backpacks (cosmetic/one at a time equip)
        const backpackColors = [0x2c3e50, 0xe67e22, 0x1abc9c, 0xe74c3c, 0x9b59b6];
        for (let i = 0; i < 8; i++) {
            let x = (Math.random() - 0.5) * this.spawnSpan;
            let z = (Math.random() - 0.5) * this.spawnSpan;
            ({ x, z } = this.getClampedCoord(x, z));
            const color = backpackColors[i % backpackColors.length];
            this.spawnBackpack(x, z, color);
        }
        
        // Spawn MedKits (health recovery)
        for (let i = 0; i < 12; i++) {
            let x = (Math.random() - 0.5) * this.spawnSpan;
            let z = (Math.random() - 0.5) * this.spawnSpan;
            ({ x, z } = this.getClampedCoord(x, z));
            this.spawnMedKit(x, z);
        }
    }

    createChest(x, y, z) {
        // The y parameter is ignored here as spawnChest sets its own y
        this.spawnChest(x, z);
    }

    spawnChest(x, z) {
        const chest = new THREE.Group();
        ({ x, z } = this.getClampedCoord(x, z));
        let y = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            y = this.world.getHeightAt(x, z) + 0.5;
        }
        chest.position.set(x, y, z);
        
        const boxGeo = new THREE.BoxGeometry(1, 0.8, 0.6);
        const boxMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.3, metalness: 0.5 });
        const box = new THREE.Mesh(boxGeo, boxMat);
        chest.add(box);
        
        const lidGeo = new THREE.BoxGeometry(1, 0.2, 0.6);
        const lid = new THREE.Mesh(lidGeo, boxMat);
        lid.position.y = 0.5;
        chest.add(lid);
        
        // Outline/Detail
        const lock = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.1), new THREE.MeshStandardMaterial({ color: 0x95a5a6 }));
        lock.position.set(0, 0.3, 0.3);
        chest.add(lock);

        chest.castShadow = true;
        chest.receiveShadow = true;
        
        // Random loot
        const lootTable = ['Rifle', 'Sniper', 'Pistol', 'ShieldPotion', 'SMG', 'Shotgun', 'DMR', 'MedKit'];
        const loot = lootTable[Math.floor(Math.random() * lootTable.length)];

        chest.userData = { 
            type: 'chest', 
            isOpened: false,
            gameId: this.generateID(),
            gameName: 'Chest',
            loot: loot // Store loot in userData
        };
        
        const glow = this.createGlowEffect();
        glow.position.y = 1.0;
        chest.add(glow);
        chest.userData.glow = glow;
        
        this.scene.add(chest);
        this.items.push(chest);
        return chest;
    }

    spawnChestWithLoot(x, z, loot) {
        const chest = new THREE.Group();
        ({ x, z } = this.getClampedCoord(x, z));
        let y = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            y = this.world.getHeightAt(x, z) + 0.5;
        }
        chest.position.set(x, y, z);
        
        const boxGeo = new THREE.BoxGeometry(1, 0.8, 0.6);
        const boxMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.3, metalness: 0.5 });
        const box = new THREE.Mesh(boxGeo, boxMat);
        chest.add(box);
        
        const lidGeo = new THREE.BoxGeometry(1, 0.2, 0.6);
        const lid = new THREE.Mesh(lidGeo, boxMat);
        lid.position.y = 0.5;
        chest.add(lid);
        
        const lock = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.1), new THREE.MeshStandardMaterial({ color: 0x95a5a6 }));
        lock.position.set(0, 0.3, 0.3);
        chest.add(lock);

        chest.castShadow = true;
        chest.receiveShadow = true;

        chest.userData = { 
            type: 'chest', 
            isOpened: false,
            gameId: this.generateID(),
            gameName: 'Chest',
            loot
        };
        
        const glow = this.createGlowEffect();
        glow.position.y = 1.0;
        chest.add(glow);
        chest.userData.glow = glow;
        
        this.scene.add(chest);
        this.items.push(chest);
        return chest;
    }

    spawnJuiceBottle(x, z) {
        const bottle = new THREE.Group();
        ({ x, z } = this.getClampedCoord(x, z));
        let y = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            y = this.world.getHeightAt(x, z) + 0.5;
        }
        bottle.position.set(x, y, z);

        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8), new THREE.MeshStandardMaterial({ color: 0x27ae60 }));
        body.position.y = 0.5;
        bottle.add(body);

        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.15, 8), new THREE.MeshStandardMaterial({ color: 0xc0392b }));
        cap.position.y = 0.9;
        bottle.add(cap);

        bottle.castShadow = true;
        bottle.receiveShadow = true;

        bottle.userData = {
            type: 'stamina',
            gameId: this.generateID(),
            gameName: 'JuiceBottle',
            amount: 50
        };
        
        const glow = this.createGlowEffect();
        glow.position.y = 0.9;
        bottle.add(glow);
        bottle.userData.glow = glow;

        this.scene.add(bottle);
        this.items.push(bottle);
        return bottle;
    }

    generateID() {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }
    // Spawn loot inside a house (currently just spawns a chest)
    spawnLootInHouse(x, y, z) {
        this.spawnChest(x, z);
    }

    spawnBackpack(x, z, color) {
        const pack = new THREE.Group();
        ({ x, z } = this.getClampedCoord(x, z));
        let y = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            y = this.world.getHeightAt(x, z) + 0.5;
        }
        pack.position.set(x, y, z);

        const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.35), new THREE.MeshStandardMaterial({ color, metalness: 0.15, roughness: 0.8 }));
        pack.add(body);
        const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.25, 0.16), new THREE.MeshStandardMaterial({ color: 0x34495e, metalness: 0.1, roughness: 0.8 }));
        pocket.position.set(0, -0.55, 0.18);
        pack.add(pocket);
        pack.castShadow = true;
        pack.receiveShadow = true;

        const glow = this.createGlowEffect();
        glow.position.y = 1.0;
        pack.add(glow);
        pack.userData = {
            type: 'backpack',
            color,
            gameId: this.generateID(),
            gameName: 'Backpack',
            isOpened: false,
            glow
        };

        this.scene.add(pack);
        this.items.push(pack);
        return pack;
    }

    spawnMedKit(x, z) {
        const medkit = new THREE.Group();
        ({ x, z } = this.getClampedCoord(x, z));
        let y = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            y = this.world.getHeightAt(x, z) + 0.3;
        }
        medkit.position.set(x, y, z);

        // Main case body (white with red accents)
        const caseBody = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 0.5, 0.6),
            new THREE.MeshStandardMaterial({ color: 0xf0f0f0, metalness: 0.2, roughness: 0.6 })
        );
        medkit.add(caseBody);

        // Red cross on top (horizontal bar)
        const crossH = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 0.05, 0.15),
            new THREE.MeshStandardMaterial({ color: 0xe74c3c, metalness: 0.1, roughness: 0.4 })
        );
        crossH.position.y = 0.28;
        medkit.add(crossH);

        // Red cross on top (vertical bar)
        const crossV = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, 0.05, 0.5),
            new THREE.MeshStandardMaterial({ color: 0xe74c3c, metalness: 0.1, roughness: 0.4 })
        );
        crossV.position.y = 0.28;
        medkit.add(crossV);

        // Handle on top
        const handle = new THREE.Mesh(
            new THREE.BoxGeometry(0.6, 0.1, 0.08),
            new THREE.MeshStandardMaterial({ color: 0x95a5a6, metalness: 0.4, roughness: 0.5 })
        );
        handle.position.y = 0.35;
        medkit.add(handle);

        // Latch detail
        const latch = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, 0.08, 0.08),
            new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.5, roughness: 0.4 })
        );
        latch.position.set(0, 0, 0.32);
        medkit.add(latch);

        medkit.castShadow = true;
        medkit.receiveShadow = true;

        const glow = this.createGlowEffect();
        glow.position.y = 0.6;
        medkit.add(glow);
        
        medkit.userData = {
            type: 'medkit',
            gameId: this.generateID(),
            gameName: 'MedKit',
            healAmount: 25, // 25% of max health
            isOpened: false,
            glow
        };

        this.scene.add(medkit);
        this.items.push(medkit);
        return medkit;
    }

    spawnMatrixLoadout(cx = 0, cz = 0) {
        // Layout items around player for quick testing
        const ring = [
            { dx: 2, dz: 0, loot: 'Pistol' },
            { dx: -2, dz: 0, loot: 'Rifle' },
            { dx: 0, dz: 2, loot: 'Sniper' },
            { dx: 0, dz: -2, loot: 'ShieldPotion' },
            { dx: 2, dz: 2, loot: 'SMG' },
            { dx: -2, dz: -2, loot: 'Shotgun' },
            { dx: -2, dz: 2, loot: 'DMR' },
        ];
        ring.forEach(r => {
            this.spawnChestWithLoot(cx + r.dx, cz + r.dz, r.loot);
        });
        // Stamina bottles
        this.spawnJuiceBottle(cx + 3, cz + 3);
        this.spawnJuiceBottle(cx - 3, cz - 3);
        // Backpacks (different colors)
        const backpackColors = [0x2c3e50, 0xe67e22, 0x1abc9c];
        backpackColors.forEach((c, i) => {
            this.spawnBackpack(cx + (i - 1) * 2, cz + 4, c);
        });
    }

    countNearbyChests(radius = 10) {
        if (!this.player) return 0;
        const pos = this.player.position;
        let count = 0;
        this.items.forEach(item => {
            const ud = item.userData || {};
            if (ud.type !== 'chest' || ud.isOpened) return;
            const dx = item.position.x - pos.x;
            const dz = item.position.z - pos.z;
            if (Math.sqrt(dx * dx + dz * dz) <= radius) count++;
        });
        return count;
    }

    createUmbrella() {
        const group = new THREE.Group();
        // Handle
        const handle = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 1.6, 6),
            new THREE.MeshStandardMaterial({ color: 0x4a3428, roughness: 0.8 })
        );
        handle.position.y = -0.2;
        group.add(handle);
        // Canopy (voxel-ish stacked plates)
        const canopyColors = [0xff3b30, 0xf1c40f, 0x3498db];
        canopyColors.forEach((c, i) => {
            const plate = new THREE.Mesh(
                new THREE.BoxGeometry(1.8 - i * 0.3, 0.15, 1.8 - i * 0.3),
                new THREE.MeshStandardMaterial({ color: c, roughness: 0.4, metalness: 0.2 })
            );
            plate.position.y = 0.7 + i * 0.12;
            group.add(plate);
        });
        // Tip
        const tip = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 0.25, 6),
            new THREE.MeshStandardMaterial({ color: 0x2c3e50 })
        );
        tip.position.y = 1.1;
        group.add(tip);
        group.castShadow = true;
        group.receiveShadow = true;
        return group;
    }

    spawnMatrixDropNearPlayer() {
        if (!this.player) return;
        const angle = Math.random() * Math.PI * 2;
        const dist = 4 + Math.random() * 8;
        let x = this.player.position.x + Math.cos(angle) * dist;
        let z = this.player.position.z + Math.sin(angle) * dist;
        ({ x, z } = this.getClampedCoord(x, z));

        let groundY = 0.5;
        if (this.world && typeof this.world.getHeightAt === 'function') {
            groundY = this.world.getHeightAt(x, z) + 0.5;
        }

        // Random loot choice
        const lootTable = ['Rifle', 'Sniper', 'Pistol', 'ShieldPotion', 'SMG', 'Shotgun', 'DMR', 'MedKit'];
        const loot = lootTable[Math.floor(Math.random() * lootTable.length)];

        const chest = this.spawnChestWithLoot(x, z, loot);
        if (chest) {
            chest.position.y = groundY + 18;
            chest.userData.isDropping = true;
            chest.userData.dropTargetY = groundY;
            chest.userData.dropVelocity = 0;
            // Attach voxel umbrella while falling
            const umbrella = this.createUmbrella();
            umbrella.position.y = 1.2;
            chest.add(umbrella);
            chest.userData.umbrella = umbrella;
        }
    }

    spawnMatrixDropsBatch() {
        if (this.countNearbyChests(this.matrixDropRadiusLimit) >= this.matrixDropBatchSize) return;
        const available = this.matrixDropBatchSize - this.countNearbyChests(this.matrixDropRadiusLimit);
        const toSpawn = Math.max(0, Math.min(this.matrixDropBatchSize, available));
        for (let i = 0; i < toSpawn; i++) {
            this.spawnMatrixDropNearPlayer();
        }
    }

    update(dt = 0.016) {
        const delta = Math.max(0, dt || 0);

        // Matrix mode: periodic drops near player
        if (this.settings.gameMode === 'matrix' && this.player) {
            this._matrixDropTimer += delta;
            if (this._matrixDropTimer >= this.matrixDropInterval) {
                this._matrixDropTimer = 0;
                this.spawnMatrixDropsBatch();
            }
        }

        // Update falling drops
        this.items.forEach(item => {
            const ud = item.userData || {};
            if (ud.isDropping) {
                const gravity = 5; // even slower fall for drops
                ud.dropVelocity = (ud.dropVelocity || 0) + gravity * delta;
                item.position.y -= ud.dropVelocity * delta;
                if (item.position.y <= ud.dropTargetY) {
                    item.position.y = ud.dropTargetY;
                    ud.isDropping = false;
                    ud.dropVelocity = 0;
                    if (ud.umbrella) {
                        try { item.remove(ud.umbrella); } catch (e) {}
                        ud.umbrella = null;
                    }
                }
            }
        });

        // Check for nearby items
        let nearbyItem = null;
        const playerPos = this.player.position;

        for (const item of this.items) {
            // Use userData to track opened state and loot
            if (item.userData && item.userData.isOpened) continue;

            const dist = playerPos.distanceTo(item.position);
            this.updateGlow(item, dist);
            if (dist < 3) {
                nearbyItem = item;
                break;
            }
        }

        // If vehicle prompt is active, don't override the interaction prompt
        if (this.interactionPrompt && this.interactionPrompt.dataset.vehiclePrompt === '1') {
            return;
        }

        if (nearbyItem) {
            this.interactionPrompt.classList.remove('hidden');
            const data = nearbyItem.userData || {};
            if (data.type === 'chest') {
                this.interactionPrompt.innerText = `Press E to open (Contains: ${data.loot})`;
            } else if (data.type === 'stamina') {
                this.interactionPrompt.innerText = `Press E to collect ${data.gameName} (+${data.amount} Stamina)`;
            } else if (data.type === 'medkit') {
                this.interactionPrompt.innerText = `Press E to use ${data.gameName} (+${data.healAmount}% Health)`;
            } else if (data.type === 'backpack') {
                const color = data.color ? '#' + data.color.toString(16).padStart(6, '0') : '';
                this.interactionPrompt.innerText = `Press E to equip Backpack ${color}`;
            } else {
                this.interactionPrompt.innerText = `Press E to interact`;
            }
            this.currentItem = nearbyItem;
        } else {
            this.interactionPrompt.classList.add('hidden');
            this.currentItem = null;
        }
    }

    tryInteract() {
        if (this.currentItem) {
            const data = this.currentItem.userData;
            if (!data) return;

            if (data.type === 'chest' && !data.isOpened) {
                // Mark as opened
                data.isOpened = true;
                // Remove chest from scene
                this.scene.remove(this.currentItem);
                // Give loot to player
                this.player.collectItem(data.loot);
                console.log(`Looted ${data.loot}!`);
            } else if (data.type === 'stamina') {
                // Stamina pickup -- apply to player
                const amount = data.amount || 50;
                if (this.player) {
                    this.player.stamina = Math.min(100, this.player.stamina + amount);
                }
                // Remove bottle
                this.scene.remove(this.currentItem);
                // Mark removed so it's ignored
                data.isOpened = true;
                console.log(`Picked up stamina item: +${amount}`);
            } else if (data.type === 'medkit') {
                // MedKit pickup -- heal player by 25% of max health
                const healAmount = data.healAmount || 25;
                if (this.player) {
                    const maxHealth = 100;
                    const healValue = (maxHealth * healAmount) / 100;
                    this.player.health = Math.min(maxHealth, this.player.health + healValue);
                    console.log(`Used MedKit: +${healValue} HP (${healAmount}%)`);
                }
                // Remove medkit
                this.scene.remove(this.currentItem);
                data.isOpened = true;
            } else if (data.type === 'backpack') {
                const color = data.color || 0x2c3e50;
                if (this.player && typeof this.player.collectItem === 'function') {
                    const dropColor = this.player.collectItem(`Backpack:${color.toString(16)}`);
                    if (dropColor !== undefined && dropColor !== null) {
                        const pos = this.player.position.clone();
                        this.spawnBackpack(pos.x + 0.5, pos.z + 0.5, dropColor);
                    }
                }
                this.scene.remove(this.currentItem);
                data.isOpened = true;
                console.log(`Equipped backpack ${color.toString(16)}`);
            }
        }
    }

    realignItemsToGround() {
        if (!this.world || typeof this.world.getHeightAt !== 'function') return;
        this.items.forEach(item => {
            const pos = item.position;
            const baseY = this.world.getHeightAt(pos.x, pos.z);
            const offset = (item.userData && item.userData.type === 'chest') ? 0.5 : 0.5;
            item.position.y = baseY + offset;
        });
    }

    updateGlow(item, dist) {
        if (!item || !item.userData || !item.userData.glow) return;
        const glow = item.userData.glow;
        const shouldShow = !item.userData.isOpened && dist < this.glowRadius;
        glow.visible = shouldShow;
        if (shouldShow) {
            glow.rotation.y += 0.02;
            glow.position.y = (item.userData.type === 'chest' ? 1 : 0.9) + Math.sin(performance.now() / 500) * 0.1;
        }
    }

    createGlowEffect() {
        const particleCount = 40;
        const positions = new Float32Array(particleCount * 3);
        const radius = 0.6;
        for (let i = 0; i < particleCount; i++) {
            const r = radius * Math.random();
            const theta = Math.random() * Math.PI * 2;
            const y = Math.random() * radius * 0.6;
            positions[i * 3] = Math.cos(theta) * r;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(theta) * r;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            color: 0xffd166,
            size: 0.15,
            transparent: true,
            opacity: 0.9,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        const points = new THREE.Points(geometry, material);
        points.visible = false;
        return points;
    }

}
