import * as THREE from 'three';

export class World {
    constructor(scene, itemManager, settings) {
        this.scene = scene;
        this.itemManager = itemManager;
        this.objects = []; // Objects for collision detection
        this.stormRadius = 100;
        
        const stormTime = settings ? settings.stormTime : 180; // seconds
        this.stormShrinkRate = this.stormRadius / stormTime; 

        this.safeZoneCenter = new THREE.Vector3(0, 0, 0);
        
        this.init();
    }

    init() {
        this.createEnvironment();
        this.createStormVisuals();
    }

    createEnvironment() {
        // Ground
        const groundGeo = new THREE.PlaneGeometry(200, 200, 64, 64);
        
        // Improved Ground Material (Vertex Colors for variation)
        const count = groundGeo.attributes.position.count;
        groundGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
        
        const colors = groundGeo.attributes.color;
        const color = new THREE.Color();
        
        for (let i = 0; i < count; i++) {
            // Noise-like variation
            const r = Math.random();
            if (r > 0.8) color.setHex(0x27ae60); // Darker grass
            else if (r > 0.4) color.setHex(0x2ecc71); // Normal grass
            else color.setHex(0x58d68d); // Lighter grass
            
            colors.setXYZ(i, color.r, color.g, color.b);
        }

        const groundMat = new THREE.MeshStandardMaterial({ 
            vertexColors: true,
            roughness: 0.8
        });
        
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);

        // Trees
        for (let i = 0; i < 50; i++) {
            const x = (Math.random() - 0.5) * 180;
            const z = (Math.random() - 0.5) * 180;
            
            const type = Math.random() > 0.5 ? 'Oak' : 'Pine';
            const tree = this.createTree(x, z, type);
            tree.userData = { gameId: this.generateID(), gameName: `Tree_${type}` };
            this.scene.add(tree);
            this.objects.push(tree);
        }

        // Rocks
        for (let i = 0; i < 30; i++) {
            const x = (Math.random() - 0.5) * 180;
            const z = (Math.random() - 0.5) * 180;
            const rock = this.createRock(x, z);
            rock.userData = { gameId: this.generateID(), gameName: 'Rock' };
            this.scene.add(rock);
            this.objects.push(rock);
        }
        // Small bushes
        for (let i = 0; i < 40; i++) {
            const x = (Math.random() - 0.5) * 170;
            const z = (Math.random() - 0.5) * 170;
            const bush = this.createBush(x, z);
            bush.userData = { gameId: this.generateID(), gameName: 'Bush' };
            this.scene.add(bush);
            this.objects.push(bush);
        }

        // Scattered grass clumps across the map for texture
        for (let i = 0; i < 200; i++) {
            const x = (Math.random() - 0.5) * 190;
            const z = (Math.random() - 0.5) * 190;
            const g = this.createGrassClump(x, z);
            this.scene.add(g);
        }
        
        // Buildings
        for (let i = 0; i < 8; i++) {
            const x = (Math.random() - 0.5) * 150;
            const z = (Math.random() - 0.5) * 150;
            const house = this.createHouse(x, z);
            house.userData = { gameId: this.generateID(), gameName: 'House' };
            this.scene.add(house);
            this.objects.push(house);
            
            // Spawn loot inside
            this.itemManager.spawnLootInHouse(x, 1, z);
        }
    }

    generateID() {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    createTree(x, z, type) {
        const treeGroup = new THREE.Group();
        treeGroup.position.set(x, 0, z);

        const scale = 0.8 + Math.random() * 0.4;
        treeGroup.scale.set(scale, scale, scale);

        // Trunk (cylindrical, with subtle color variation to resemble bark)
        const trunkHeight = 3.5 + Math.random() * 1.5;
        const trunkGeo = new THREE.CylinderGeometry(0.45, 0.6, trunkHeight, 8);
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b3f26, roughness: 1 });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = trunkHeight / 2;
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        treeGroup.add(trunk);
        this.objects.push(trunk);

        // Add some bark segments / knots (small tori or boxes) for visual detail
        if (Math.random() > 0.7) {
            const knotGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05);
            const knotMat = new THREE.MeshStandardMaterial({ color: 0x5a3320 });
            const knot = new THREE.Mesh(knotGeo, knotMat);
            knot.position.set(0.25, trunk.position.y + 0.6, 0.45);
            knot.rotation.z = 0.4;
            treeGroup.add(knot);
        }

        // Leaves
        // Leaves / foliage
        const leavesMat = new THREE.MeshStandardMaterial({ color: type === 'Oak' ? 0x2e8b57 : 0x1a5e28, roughness: 0.9 });

        if (type === 'Oak') {
            // Create multiple sphere clusters to simulate leafy canopy
            const canopyCount = 6 + Math.floor(Math.random() * 4);
            for (let i = 0; i < canopyCount; i++) {
                const radius = 1.2 + Math.random() * 1.6;
                const geo = new THREE.SphereGeometry(radius, 8, 6);
                const mesh = new THREE.Mesh(geo, leavesMat);
                // Scatter around the top of the trunk
                mesh.position.y = trunk.position.y + 0.8 + Math.random() * 1.6;
                mesh.position.x = (Math.random() - 0.5) * 1.5;
                mesh.position.z = (Math.random() - 0.5) * 1.5;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                treeGroup.add(mesh);
            }
        } else { // Pine
            // Stacked cones for a pine silhouette
            const coneCount = 3 + Math.floor(Math.random() * 3);
            for (let i = 0; i < coneCount; i++) {
                const size = 1.8 - i * 0.4 + Math.random() * 0.2;
                const geo = new THREE.ConeGeometry(size, 1.2 + Math.random() * 0.6, 8);
                const mesh = new THREE.Mesh(geo, leavesMat);
                mesh.position.y = trunk.position.y + 0.6 + i * 0.9;
                mesh.position.x = (Math.random() - 0.5) * 0.2;
                mesh.position.z = (Math.random() - 0.5) * 0.2;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                treeGroup.add(mesh);
            }
            // add a small topper
            const topGeo = new THREE.SphereGeometry(0.25, 6, 6);
            const top = new THREE.Mesh(topGeo, leavesMat);
            top.position.y = trunk.position.y + coneCount * 0.9 + 0.3;
            treeGroup.add(top);
        }

        // Small grass clump at tree base
        if (Math.random() > 0.3) {
            const grassGeo = new THREE.PlaneGeometry(0.8, 0.8);
            const grassMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, side: THREE.DoubleSide });
            const grass = new THREE.Mesh(grassGeo, grassMat);
            grass.rotation.x = -Math.PI / 2;
            grass.position.y = 0.01;
            grass.position.x = (Math.random() - 0.5) * 0.5;
            grass.position.z = (Math.random() - 0.5) * 0.5;
            grass.receiveShadow = true;
            treeGroup.add(grass);
        }

        return treeGroup;
    }

    createRock(x, z) {
        // Irregular rock using icosahedron + vertex jitter
        const baseSize = 0.6 + Math.random() * 1.4;
        const geo = new THREE.IcosahedronGeometry(baseSize, 1);
        // Jitter vertices for a natural look
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const vx = pos.getX(i);
            const vy = pos.getY(i);
            const vz = pos.getZ(i);
            const jitter = (Math.random() - 0.5) * baseSize * 0.15;
            pos.setXYZ(i, vx + jitter, vy + jitter * 0.5, vz + (Math.random() - 0.5) * baseSize * 0.15);
        }
        geo.computeVertexNormals();

        const rockMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 1 });
        const rock = new THREE.Mesh(geo, rockMat);
        rock.position.set(x, baseSize / 2, z);
        rock.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
        rock.castShadow = true;
        rock.receiveShadow = true;

        // small moss patch
        if (Math.random() > 0.6) {
            const moss = new THREE.Mesh(new THREE.CircleGeometry(baseSize * 0.4, 6), new THREE.MeshStandardMaterial({ color: 0x2ecc71 }));
            moss.rotation.x = -Math.PI / 2;
            moss.position.y = 0.01;
            rock.add(moss);
        }

        return rock;
    }

    createBush(x, z) {
        const bushGroup = new THREE.Group();
        bushGroup.position.set(x, 0, z);
        const col = new THREE.MeshStandardMaterial({ color: 0x2ca02c, roughness: 1 });
        const parts = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < parts; i++) {
            const r = 0.6 + Math.random() * 0.6;
            const g = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 6), col);
            g.position.set((Math.random() - 0.5) * 0.5, r * 0.6, (Math.random() - 0.5) * 0.5);
            g.castShadow = true;
            bushGroup.add(g);
        }
        return bushGroup;
    }

    createGrassClump(x, z) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        const blades = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < blades; i++) {
            const h = 0.2 + Math.random() * 0.6;
            const geo = new THREE.PlaneGeometry(0.05, h);
            const mat = new THREE.MeshStandardMaterial({ color: 0x55c26b, side: THREE.DoubleSide });
            const blade = new THREE.Mesh(geo, mat);
            blade.position.y = h / 2;
            blade.rotation.y = Math.random() * Math.PI;
            blade.rotation.z = (Math.random() - 0.5) * 0.6;
            blade.receiveShadow = true;
            g.add(blade);
        }
        return g;
    }

    createHouse(x, z) {
        const houseGroup = new THREE.Group();
        houseGroup.position.set(x, 0, z);
        houseGroup.rotation.y = Math.random() * Math.PI * 2;

        const wallMat = new THREE.MeshStandardMaterial({ color: 0x95a5a6 }); 
        const roofMat = new THREE.MeshStandardMaterial({ color: 0xc0392b });

        // Walls
        const walls = [
            { w: 6, h: 4, d: 0.5, x: 0, y: 2, z: -3 }, // Back
            { w: 0.5, h: 4, d: 6, x: -3, y: 2, z: 0 }, // Left
            { w: 0.5, h: 4, d: 6, x: 3, y: 2, z: 0 }, // Right
            { w: 2, h: 4, d: 0.5, x: -2, y: 2, z: 3 }, // Front Left
            { w: 2, h: 4, d: 0.5, x: 2, y: 2, z: 3 }, // Front Right
            { w: 2, h: 1, d: 0.5, x: 0, y: 3.5, z: 3 } // Front Top
        ];

        walls.forEach(w => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(w.w, w.h, w.d), wallMat);
            mesh.position.set(w.x, w.y, w.z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            houseGroup.add(mesh);
            this.objects.push(mesh);
        });

        // Roof
        const roof = new THREE.Mesh(new THREE.ConeGeometry(5, 2, 4), roofMat);
        roof.position.y = 5;
        roof.rotation.y = Math.PI / 4;
        roof.castShadow = true;
        houseGroup.add(roof);

        // Door
        const doorMat = new THREE.MeshStandardMaterial({ color: 0x4d2b1b });
        const door = new THREE.Mesh(new THREE.BoxGeometry(1, 2.2, 0.1), doorMat);
        door.position.set(0, 1.1, 3.26);
        houseGroup.add(door);

        // Windows (simple glass with slight emissive tint)
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x88c0ff, metalness: 0.1, roughness: 0.2, transparent: true, opacity: 0.8 });
        const win1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.05), glassMat);
        win1.position.set(-2, 2.2, -3.26);
        const win2 = win1.clone();
        win2.position.set(2, 2.2, -3.26);
        houseGroup.add(win1);
        houseGroup.add(win2);

        return houseGroup;
    }


    createStormVisuals() {
        const geometry = new THREE.CylinderGeometry(this.stormRadius, this.stormRadius, 50, 32, 1, true);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x8e44ad, 
            transparent: true, 
            opacity: 0.3, 
            side: THREE.DoubleSide 
        });
        this.stormMesh = new THREE.Mesh(geometry, material);
        this.stormMesh.position.y = 25;
        this.scene.add(this.stormMesh);
    }

    update(dt, playerPos) {
        // Shrink storm
        if (this.stormRadius > 10) {
            this.stormRadius -= this.stormShrinkRate * dt;
            const scale = this.stormRadius / 100; 
            this.stormMesh.scale.set(scale, 1, scale);
        }

        // Check storm damage
        const dist = Math.sqrt(playerPos.x * playerPos.x + playerPos.z * playerPos.z);
        return { inStorm: dist > this.stormRadius };
    }

}
