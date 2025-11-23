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

    initLoot() {
        // Create some random chests/items
        for (let i = 0; i < 24; i++) {
            const x = (Math.random() - 0.5) * this.spawnSpan;
            const z = (Math.random() - 0.5) * this.spawnSpan;
            this.createChest(x, 0.5, z);
        }

        // Spawn some stamina items (juice bottles)
        for (let i = 0; i < 36; i++) {
            const x = (Math.random() - 0.5) * this.spawnSpan;
            const z = (Math.random() - 0.5) * this.spawnSpan;
            this.spawnJuiceBottle(x, z);
        }
    }

    createChest(x, y, z) {
        // The y parameter is ignored here as spawnChest sets its own y
        this.spawnChest(x, z);
    }

    spawnChest(x, z) {
        const chest = new THREE.Group();
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
        const lootTable = ['Rifle', 'Sniper', 'Pistol', 'ShieldPotion'];
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
    }

    spawnJuiceBottle(x, z) {
        const bottle = new THREE.Group();
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
    }

    generateID() {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }
    // Spawn loot inside a house (currently just spawns a chest)
    spawnLootInHouse(x, y, z) {
        this.spawnChest(x, z);
    }

    update() {
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

        if (nearbyItem) {
            this.interactionPrompt.classList.remove('hidden');
            const data = nearbyItem.userData || {};
            if (data.type === 'chest') {
                this.interactionPrompt.innerText = `Press E to open (Contains: ${data.loot})`;
            } else if (data.type === 'stamina') {
                this.interactionPrompt.innerText = `Press E to collect ${data.gameName} (+${data.amount} Stamina)`;
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
