import * as THREE from 'three';

export class ItemManager {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;
        this.items = [];
        this.interactionPrompt = document.getElementById('interaction-prompt');
        
        this.initLoot();
        
        // Listen for interaction
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyE') this.tryInteract();
        });
    }

    initLoot() {
        // Create some random chests/items
        for (let i = 0; i < 8; i++) {
            const x = (Math.random() - 0.5) * 150;
            const z = (Math.random() - 0.5) * 150;
            this.createChest(x, 0.5, z);
        }

        // Spawn some stamina items (juice bottles)
        for (let i = 0; i < 12; i++) {
            const x = (Math.random() - 0.5) * 150;
            const z = (Math.random() - 0.5) * 150;
            this.spawnJuiceBottle(x, z);
        }
    }

    createChest(x, y, z) {
        // The y parameter is ignored here as spawnChest sets its own y
        this.spawnChest(x, z);
    }

    spawnChest(x, z) {
        const chest = new THREE.Group();
        chest.position.set(x, 0.5, z);
        
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
        const lootTable = ['Rifle', 'Sniper', 'Pistola', 'ShieldPotion'];
        const loot = lootTable[Math.floor(Math.random() * lootTable.length)];

        chest.userData = { 
            type: 'chest', 
            isOpened: false,
            gameId: this.generateID(),
            gameName: 'Chest',
            loot: loot // Store loot in userData
        };
        
        this.scene.add(chest);
        this.items.push(chest);
    }

    spawnJuiceBottle(x, z) {
        const bottle = new THREE.Group();
        bottle.position.set(x, 0.5, z);

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

}
