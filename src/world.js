import * as THREE from 'three';

export const DEFAULT_MAP_SIZE = 400;

export class World {
    constructor(scene, itemManager, settings) {
        this.scene = scene;
        this.itemManager = itemManager;
        this.objects = []; // Objects for collision detection
        this.gameMode = settings && settings.gameMode ? settings.gameMode : 'survival';
        // Map dimensions (smaller for arena)
        if (this.gameMode === 'arena') {
            this.mapSize = 150;
        } else {
            this.mapSize = (settings && settings.mapSize) ? settings.mapSize : DEFAULT_MAP_SIZE;
        }
        this.halfMapSize = this.mapSize / 2;
        this.stormRadius = this.halfMapSize;
        this.initialStormRadius = this.stormRadius;
        this._heightFn = this._buildHeightFn();
        
        const stormTime = settings ? settings.stormTime : 180; // seconds
        this.stormShrinkRate = this.stormRadius / stormTime; 

        this.safeZoneCenter = new THREE.Vector3(0, 0, 0);
        
        this.init();
    }

    init() {
        if (this.gameMode === 'arena') {
            this.createArenaEnvironment();
        } else if (this.gameMode === 'matrix') {
            this.createMatrixEnvironment();
        } else if (this.gameMode === 'studio') {
            this.createStudioEnvironment();
        } else {
            this.createEnvironment();
        }
        if (this.gameMode !== 'matrix' && this.gameMode !== 'studio') {
            this.createStormVisuals();
        }
    }

    createEnvironment() {
        const randCoord = (spread = 1) => (Math.random() - 0.5) * (this.mapSize * spread);
        const safeCoord = (spread = 1) => {
            const limit = this.halfMapSize - 5;
            const v = randCoord(spread);
            return Math.max(-limit, Math.min(limit, v));
        };
        const groundY = (x, z) => (this.getHeightAt ? this.getHeightAt(x, z) : 0);
        // Trimmed density keeps arcade/survival performant without gutting cover variety
        const density = {
            trees: 70,
            rocks: 50,
            bushes: 50,
            grass: 180,
            houses: 12,
            vehicles: 12,
            plateaus: 4,
            smallBuildings: 5
        };
        
        // Ground
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 64, 64);
        // Flat ground (no height displacement to avoid navigation issues)
        const pos = groundGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            pos.setZ(i, 0);
        }
        pos.needsUpdate = true;
        
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
        for (let i = 0; i < density.trees; i++) {
            const x = safeCoord(0.9);
            const z = safeCoord(0.9);
            const y = groundY(x, z);
            
            const type = Math.random() > 0.5 ? 'Oak' : 'Pine';
            const tree = this.createTree(x, z, type);
            tree.position.y = y;
            tree.userData = { gameId: this.generateID(), gameName: `Tree_${type}`, type: 'tree' };
            this.scene.add(tree);
            this.objects.push(tree);
        }

        // Rocks (more variety)
        const rockMakers = [
            (x, z) => this.createRock(x, z),
            (x, z, y) => this.createRockPillar(x, z, y),
            (x, z, y) => this.createFlatBoulder(x, z, y),
            (x, z, y) => this.createCrystalShard(x, z, y),
            (x, z, y) => this.createStackedRock(x, z, y),
            (x, z, y) => this.createBasaltCluster(x, z, y)
        ];
        for (let i = 0; i < density.rocks; i++) {
            const x = safeCoord(0.9);
            const z = safeCoord(0.9);
            const y = groundY(x, z);
            const maker = rockMakers[i % rockMakers.length];
            const rock = maker(x, z, y);
            rock.userData = { gameId: this.generateID(), gameName: 'Rock', type: 'rock' };
            this.scene.add(rock);
            this.objects.push(rock);
        }
        // Small bushes
        for (let i = 0; i < density.bushes; i++) {
            const x = safeCoord(0.85);
            const z = safeCoord(0.85);
            const y = groundY(x, z);
            const bush = this.createBush(x, z);
            bush.position.y = y;
            bush.userData = { gameId: this.generateID(), gameName: 'Bush' };
            this.scene.add(bush);
            this.objects.push(bush);
        }

        // Scattered grass clumps across the map for texture
        for (let i = 0; i < density.grass; i++) {
            const x = safeCoord(0.95);
            const z = safeCoord(0.95);
            const y = groundY(x, z);
            const g = this.createGrassClump(x, z);
            g.position.y = y;
            this.scene.add(g);
        }
        
        // Buildings
        for (let i = 0; i < density.houses; i++) {
            const x = safeCoord(0.75);
            const z = safeCoord(0.75);
            const y = groundY(x, z);
            const house = this.createHouse(x, z);
            house.position.y = y;
            house.userData = { gameId: this.generateID(), gameName: 'House', type: 'house' };
            this.scene.add(house);
            this.objects.push(house);
            
            // Spawn loot inside
            this.itemManager.spawnLootInHouse(x, 1, z);
        }
        
        // Vehicles (Cars and Trucks)
        for (let i = 0; i < density.vehicles; i++) {
            const x = safeCoord(0.8);
            const z = safeCoord(0.8);
            const y = groundY(x, z);
            const type = Math.random() > 0.6 ? 'truck' : 'car';
            const vehicle = this.createVehicle(x, z, type);
            vehicle.position.y = y;
            vehicle.userData = { gameId: this.generateID(), gameName: `Vehicle_${type}`, type: 'vehicle' };
            this.scene.add(vehicle);
            this.objects.push(vehicle);
        }    

        // Elevated natural plateaus with gentle ramps
        for (let i = 0; i < density.plateaus; i++) {
            const x = safeCoord(0.6);
            const z = safeCoord(0.6);
            const height = 6 + Math.random() * 6;
            const radius = 8 + Math.random() * 6;
            const y = groundY(x, z);
            const plateau = this.createPlateau(x, z, radius, height, y);
            plateau.userData = { gameId: this.generateID(), gameName: 'Plateau', type: 'house' };
            this.scene.add(plateau);
            this.objects.push(plateau);
        }

        // Small 2‑story buildings with ramps
        for (let i = 0; i < density.smallBuildings; i++) {
            const x = safeCoord(0.7);
            const z = safeCoord(0.7);
            const y = groundY(x, z);
            const b = this.createSmallBuilding(x, z);
            b.position.y = y;
            b.userData = { gameId: this.generateID(), gameName: 'SmallBuilding', type: 'house' };
            this.scene.add(b);
            this.objects.push(b);
        }
    }

    createArenaEnvironment() {
        const randCoord = (spread = 1) => (Math.random() - 0.5) * (this.mapSize * spread);
        const safeCoord = (spread = 1) => {
            const limit = this.halfMapSize - 5;
            const v = randCoord(spread);
            return Math.max(-limit, Math.min(limit, v));
        };

        // Ground - simple flat shading
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 1, 1);
        const groundMat = new THREE.MeshPhongMaterial({ color: 0x3b4b5b, flatShading: true });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);

        // Low-poly obstacles (boxes/pillars)
        for (let i = 0; i < 30; i++) {
            const x = safeCoord(0.8);
            const z = safeCoord(0.8);
            const h = 1 + Math.random() * 3;
            const w = 1 + Math.random() * 2;
            const d = 1 + Math.random() * 2;
            const boxGeo = new THREE.BoxGeometry(w, h, d);
            const boxMat = new THREE.MeshPhongMaterial({ color: 0x556677, flatShading: true });
            const box = new THREE.Mesh(boxGeo, boxMat);
            box.position.set(x, h / 2, z);
            box.castShadow = true;
            box.receiveShadow = true;
            box.userData = { gameId: this.generateID(), gameName: 'Crate', type: 'house' };
            this.scene.add(box);
            this.objects.push(box);
        }

        // Ramps for verticality
        for (let i = 0; i < 6; i++) {
            const x = safeCoord(0.7);
            const z = safeCoord(0.7);
            const length = 6 + Math.random() * 3;
            const height = 3 + Math.random() * 2;
            const width = 3;
            const rampGeo = new THREE.BoxGeometry(width, height, length);
            const rampMat = new THREE.MeshPhongMaterial({ color: 0x4b5563, flatShading: true });
            const ramp = new THREE.Mesh(rampGeo, rampMat);
            ramp.position.set(x, height / 2, z);
            ramp.rotation.x = -Math.atan(height / length);
            ramp.castShadow = true;
            ramp.receiveShadow = true;
            ramp.userData = { gameId: this.generateID(), gameName: 'Ramp', type: 'house' };
            this.scene.add(ramp);
            this.objects.push(ramp);
        }

        // Minimal bunkers
        for (let i = 0; i < 6; i++) {
            const x = safeCoord(0.6);
            const z = safeCoord(0.6);
            const bunker = this.createArenaBunker(x, z);
            bunker.userData = { gameId: this.generateID(), gameName: 'Bunker', type: 'house' };
            this.scene.add(bunker);
            this.objects.push(bunker);
        }

        // Few rocks for cover
        for (let i = 0; i < 20; i++) {
            const x = safeCoord(0.8);
            const z = safeCoord(0.8);
            const rock = this.createFlatBoulder(x, z, 0);
            rock.userData = { gameId: this.generateID(), gameName: 'Rock', type: 'rock' };
            this.scene.add(rock);
            this.objects.push(rock);
        }

        // Loot in arena
        this.itemManager.spawnLootInHouse(0, 0, 0); // ensure some loot
    }

    createMatrixEnvironment() {
        // Visible ground similar to other modes, but without extra props
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 128, 128);
        const count = groundGeo.attributes.position.count;
        groundGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
        const colors = groundGeo.attributes.color;
        const color = new THREE.Color();
        for (let i = 0; i < count; i++) {
            const r = Math.random();
            if (r > 0.8) color.setHex(0x27ae60); // Darker grass
            else if (r > 0.4) color.setHex(0x2ecc71); // Normal grass
            else color.setHex(0x58d68d); // Lighter grass
            colors.setXYZ(i, color.r, color.g, color.b);
        }
        const groundMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);

        // Simple white wall for target testing (thick box to block collision)
        const wallGeo = new THREE.BoxGeometry(20, 6, 0.5);
        const wallMat = new THREE.MeshStandardMaterial({ color: 0xf3f3f3, roughness: 0.9 });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.set(0, 3, -15);
        wall.castShadow = true;
        wall.receiveShadow = true;
        wall.userData = { gameId: this.generateID(), gameName: 'Wall', type: 'house' };
        this.scene.add(wall);
        this.objects.push(wall);

        // Trees flanking the wall
        const leftTree = this.createTree(-12, -15, 'Oak');
        const rightTree = this.createTree(12, -15, 'Pine');
        this.scene.add(leftTree);
        this.scene.add(rightTree);
        this.objects.push(leftTree);
        this.objects.push(rightTree);
    }

    createStudioEnvironment() {
        // Flat ground for building
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 128, 128);
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x9cb27c, roughness: 0.9 });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);
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
                mesh.castShadow = false;
                mesh.receiveShadow = false;
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
                mesh.castShadow = false;
                mesh.receiveShadow = false;
                treeGroup.add(mesh);
            }
            // add a small topper
            const topGeo = new THREE.SphereGeometry(0.25, 6, 6);
            const top = new THREE.Mesh(topGeo, leavesMat);
            top.position.y = trunk.position.y + coneCount * 0.9 + 0.3;
            top.castShadow = false;
            top.receiveShadow = false;
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
            grass.receiveShadow = false;
            treeGroup.add(grass);
        }

        return treeGroup;
    }

    createRock(x, z, baseY = 0) {
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
        rock.position.set(x, baseY + baseSize / 2, z);
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

    createRockPillar(x, z, baseY = 0) {
        const height = 2.5 + Math.random() * 2.5;
        const radiusTop = 0.4 + Math.random() * 0.3;
        const radiusBottom = radiusTop + 0.5;
        const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 8, 1);
        const mat = new THREE.MeshStandardMaterial({ color: 0x6d6d6d, roughness: 1 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, baseY + height / 2, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        return mesh;
    }

    createFlatBoulder(x, z, baseY = 0) {
        const w = 2 + Math.random() * 2;
        const h = 0.8 + Math.random() * 0.6;
        const d = 1.5 + Math.random() * 1;
        const geo = new THREE.BoxGeometry(w, h, d);
        const mat = new THREE.MeshStandardMaterial({ color: 0x8b8b8b, roughness: 1 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, baseY + h / 2, z);
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        return mesh;
    }

    createCrystalShard(x, z, baseY = 0) {
        const height = 2 + Math.random() * 2;
        const geo = new THREE.ConeGeometry(0.6 + Math.random() * 0.4, height, 6);
        const mat = new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.7, metalness: 0.2, emissive: 0x3d2b64, emissiveIntensity: 0.25 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, baseY + height / 2, z);
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        return mesh;
    }

    createStackedRock(x, z, baseY = 0) {
        const group = new THREE.Group();
        const base = this.createRock(0, 0, 0);
        group.add(base);
        const mid = this.createRock(0, 0);
        mid.scale.set(0.6, 0.6, 0.6);
        mid.position.set(0.3, mid.position.y + 0.9, -0.2);
        group.add(mid);
        const top = this.createRock(0, 0);
        top.scale.set(0.4, 0.4, 0.4);
        top.position.set(-0.2, top.position.y + 1.5, 0.3);
        group.add(top);
        group.position.set(x, baseY, z);
        group.traverse(o => { o.castShadow = true; o.receiveShadow = true; });
        return group;
    }

    createBasaltCluster(x, z, baseY = 0) {
        const group = new THREE.Group();
        const columns = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < columns; i++) {
            const h = 1 + Math.random() * 2;
            const geo = new THREE.CylinderGeometry(0.35, 0.4, h, 6);
            const mat = new THREE.MeshStandardMaterial({ color: 0x4b4b4b, roughness: 0.9 });
            const c = new THREE.Mesh(geo, mat);
            c.position.set((Math.random() - 0.5) * 0.9, h / 2, (Math.random() - 0.5) * 0.9);
            c.castShadow = true;
            c.receiveShadow = true;
            group.add(c);
        }
        group.position.set(x, baseY, z);
        return group;
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
    
    createVehicle(x, z, type = 'car') {
        const vehicleGroup = new THREE.Group();
        vehicleGroup.position.set(x, 0, z);
        vehicleGroup.rotation.y = Math.random() * Math.PI * 2; // Random rotation
        
        if (type === 'car') {
            // Car body
            const bodyMat = new THREE.MeshStandardMaterial({ 
                color: [0xe74c3c, 0x3498db, 0xf1c40f, 0x2ecc71, 0x9b59b6][Math.floor(Math.random() * 5)],
                metalness: 0.7,
                roughness: 0.3
            });
            const body = new THREE.Mesh(new THREE.BoxGeometry(2, 0.8, 4), bodyMat);
            body.position.y = 0.8;
            body.castShadow = true;
            vehicleGroup.add(body);
            
            // Car roof/cabin
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 2), bodyMat);
            cabin.position.set(0, 1.5, -0.3);
            cabin.castShadow = true;
            vehicleGroup.add(cabin);
            
            // Windows (dark glass)
            const glassMat = new THREE.MeshStandardMaterial({ 
                color: 0x1a1a1a, 
                transparent: true, 
                opacity: 0.6,
                metalness: 0.9,
                roughness: 0.1
            });
            const frontWindow = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.6, 0.05), glassMat);
            frontWindow.position.set(0, 1.5, 0.7);
            vehicleGroup.add(frontWindow);
            
            const backWindow = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.6, 0.05), glassMat);
            backWindow.position.set(0, 1.5, -1.3);
            vehicleGroup.add(backWindow);
            
            // Wheels
            const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
            const wheelPositions = [
                [-0.9, 0.3, 1.3],
                [0.9, 0.3, 1.3],
                [-0.9, 0.3, -1.3],
                [0.9, 0.3, -1.3]
            ];
            
            wheelPositions.forEach(pos => {
                const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.3, 8), wheelMat);
                wheel.rotation.z = Math.PI / 2;
                wheel.position.set(...pos);
                wheel.castShadow = true;
                vehicleGroup.add(wheel);
            });
            
            // Headlights
            const lightMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.5 });
            const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.1), lightMat);
            headlightL.position.set(-0.7, 0.7, 2.05);
            vehicleGroup.add(headlightL);
            
            const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.1), lightMat);
            headlightR.position.set(0.7, 0.7, 2.05);
            vehicleGroup.add(headlightR);
            
        } else if (type === 'truck') {
            // Truck body (larger)
            const bodyMat = new THREE.MeshStandardMaterial({ 
                color: [0xe67e22, 0x34495e, 0xc0392b][Math.floor(Math.random() * 3)],
                metalness: 0.6,
                roughness: 0.4
            });
            const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 5), bodyMat);
            body.position.y = 1;
            body.castShadow = true;
            vehicleGroup.add(body);
            
            // Truck cabin
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.2, 2), bodyMat);
            cabin.position.set(0, 2, 1.2);
            cabin.castShadow = true;
            vehicleGroup.add(cabin);
            
            // Cargo bed
            const cargoBed = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.8, 2.5), new THREE.MeshStandardMaterial({ color: 0x7f8c8d }));
            cargoBed.position.set(0, 1.5, -1.5);
            cargoBed.castShadow = true;
            vehicleGroup.add(cargoBed);
            
            // Wheels (bigger)
            const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
            const wheelPositions = [
                [-1.1, 0.4, 1.8],
                [1.1, 0.4, 1.8],
                [-1.1, 0.4, -1.5],
                [1.1, 0.4, -1.5],
                [-1.1, 0.4, -2.2],
                [1.1, 0.4, -2.2]
            ];
            
            wheelPositions.forEach(pos => {
                const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.4, 8), wheelMat);
                wheel.rotation.z = Math.PI / 2;
                wheel.position.set(...pos);
                wheel.castShadow = true;
                vehicleGroup.add(wheel);
            });
            
            // Headlights
            const lightMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 0.5 });
            const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.2, 0.1), lightMat);
            headlightL.position.set(-0.9, 1.8, 2.25);
            vehicleGroup.add(headlightL);
            
            const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.2, 0.1), lightMat);
            headlightR.position.set(0.9, 1.8, 2.25);
            vehicleGroup.add(headlightR);
        }
        
        return vehicleGroup;
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

    createPlateau(x, z, radius = 10, height = 8, baseY = 0) {
        const g = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 1 });
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.05, height, 16, 1), mat);
        cyl.position.set(0, height / 2, 0);
        cyl.castShadow = true;
        cyl.receiveShadow = true;
        g.add(cyl);

        // Ramp to top
        const rampLength = radius * 1.4;
        const rampHeight = height;
        const rampWidth = radius * 0.8;
        const rampGeo = new THREE.BoxGeometry(rampWidth, rampHeight, rampLength);
        const ramp = new THREE.Mesh(rampGeo, new THREE.MeshStandardMaterial({ color: 0x8e8e8e, roughness: 1 }));
        ramp.castShadow = true;
        ramp.receiveShadow = true;
        const angle = Math.atan(rampHeight / rampLength);
        ramp.rotation.x = -angle;
        ramp.position.set(0, rampHeight / 2, radius);
        ramp.userData = { type: 'house' };
        g.add(ramp);

        // Small guard rail
        const railGeo = new THREE.BoxGeometry(rampWidth, 0.2, rampLength);
        const rail = new THREE.Mesh(railGeo, new THREE.MeshStandardMaterial({ color: 0x6c6c6c }));
        rail.position.set(0, rampHeight, radius);
        rail.rotation.x = ramp.rotation.x;
        rail.castShadow = true;
        g.add(rail);

        g.position.set(x, baseY, z);
        g.userData = { type: 'house' };
        return g;
    }

    createSmallBuilding(x, z) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        g.rotation.y = Math.random() * Math.PI * 2;

        const wallMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d });
        const floorMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7 });
        const width = 8;
        const depth = 8;
        const height = 6;
        const thick = 0.35;
        const doorGap = 2.2;
        const halfW = width / 2;
        const halfD = depth / 2;

        // Walls (split front wall to leave doorway gap)
        const backWall = new THREE.Mesh(new THREE.BoxGeometry(width, height, thick), wallMat);
        backWall.position.set(0, height / 2, -halfD);
        const leftWall = new THREE.Mesh(new THREE.BoxGeometry(thick, height, depth), wallMat);
        leftWall.position.set(-halfW, height / 2, 0);
        const rightWall = leftWall.clone();
        rightWall.position.x = halfW;

        const frontLeft = new THREE.Mesh(new THREE.BoxGeometry((width - doorGap) / 2, height, thick), wallMat);
        frontLeft.position.set(-(doorGap / 2 + (width - doorGap) / 4), height / 2, halfD);
        const frontRight = frontLeft.clone();
        frontRight.position.x = (doorGap / 2 + (width - doorGap) / 4);

        [backWall, leftWall, rightWall, frontLeft, frontRight].forEach(w => {
            w.castShadow = true;
            w.receiveShadow = true;
            g.add(w);
        });

        // Floor 1
        const floor1 = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.3, depth - 0.4), floorMat);
        floor1.position.y = 0.15;
        floor1.receiveShadow = true;
        g.add(floor1);

        // Floor 2
        const floor2 = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.3, depth - 0.4), floorMat);
        floor2.position.y = 3.4;
        floor2.receiveShadow = true;
        g.add(floor2);

        // Ramp (wide, gentle) from front to second floor
        const rampHeight = floor2.position.y;
        const rampLength = 10;
        const rampGeo = new THREE.BoxGeometry(3, rampHeight, rampLength);
        const ramp = new THREE.Mesh(rampGeo, floorMat);
        ramp.position.set(0, rampHeight / 2, halfD + rampLength / 2);
        ramp.rotation.x = -Math.atan(rampHeight / rampLength);
        ramp.castShadow = true;
        ramp.receiveShadow = true;
        g.add(ramp);

        // Roof trim
        const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 0.4, depth + 0.4), new THREE.MeshStandardMaterial({ color: 0x95a5a6 }));
        roof.position.y = height + 0.2;
        roof.castShadow = true;
        g.add(roof);

        return g;
    }

    createArenaBunker(x, z) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);
        g.rotation.y = Math.random() * Math.PI * 2;

        const wallMat = new THREE.MeshPhongMaterial({ color: 0x4b5563, flatShading: true });
        const floorMat = new THREE.MeshPhongMaterial({ color: 0x5f6c7b, flatShading: true });

        const base = new THREE.Mesh(new THREE.BoxGeometry(6, 2.5, 6), wallMat);
        base.position.y = 1.25;
        base.castShadow = true;
        base.receiveShadow = true;
        g.add(base);

        const roof = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.3, 6.2), floorMat);
        roof.position.y = 2.65;
        roof.castShadow = true;
        g.add(roof);

        // Door opening (placeholder visual)
        const door = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 0.2), new THREE.MeshPhongMaterial({ color: 0x8d9aa8, flatShading: true, transparent: true, opacity: 0.2 }));
        door.position.set(0, 0.9, 3.1);
        g.add(door);

        // Simple ramp to roof
        const rampGeo = new THREE.BoxGeometry(2, 1.2, 4);
        const ramp = new THREE.Mesh(rampGeo, floorMat);
        ramp.position.set(-2.5, 0.6, -1);
        ramp.rotation.x = -Math.atan(1.2 / 4);
        ramp.castShadow = true;
        ramp.receiveShadow = true;
        ramp.userData = { type: 'house' };
        g.add(ramp);

        return g;
    }


    createStormVisuals() {
        if (this.gameMode === 'matrix') return;
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

    createTarget(x, z) {
        const g = new THREE.Group();
        g.position.set(x, 0, z);

        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2, 6), new THREE.MeshStandardMaterial({ color: 0x888888 }));
        pole.position.y = 1;
        g.add(pole);

        const targetGeo = new THREE.CircleGeometry(0.8, 24);
        const targetMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const target = new THREE.Mesh(targetGeo, targetMat);
        target.position.set(0, 2, 0);
        target.rotation.y = Math.PI;
        g.add(target);

        const ringMatRed = new THREE.MeshStandardMaterial({ color: 0xff4444 });
        const ringMatGold = new THREE.MeshStandardMaterial({ color: 0xf1c40f });
        const ringMatBlue = new THREE.MeshStandardMaterial({ color: 0x3498db });
        const makeRing = (r, mat) => {
            const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.02, 6, 24), mat);
            ring.rotation.x = Math.PI / 2;
            ring.position.y = 2;
            return ring;
        };
        g.add(makeRing(0.75, ringMatBlue));
        g.add(makeRing(0.55, ringMatRed));
        g.add(makeRing(0.35, ringMatGold));

        const center = new THREE.Mesh(new THREE.CircleGeometry(0.1, 12), new THREE.MeshStandardMaterial({ color: 0x000000 }));
        center.position.set(0, 2.01, 0);
        center.rotation.y = Math.PI;
        g.add(center);

        g.userData = { gameId: this.generateID(), gameName: 'Target', type: 'house' };
        return g;
    }

    update(dt, playerPos) {
        if (this.gameMode === 'matrix' || this.gameMode === 'studio') {
            return { inStorm: false };
        }
        // Shrink storm
        if (this.stormRadius > 10) {
            this.stormRadius -= this.stormShrinkRate * dt;
            const scale = this.initialStormRadius ? (this.stormRadius / this.initialStormRadius) : 1;
            this.stormMesh.scale.set(scale, 1, scale);
        }

        // Check storm damage
        const dist = Math.sqrt(playerPos.x * playerPos.x + playerPos.z * playerPos.z);
        return { inStorm: dist > this.stormRadius };
    }

    _buildHeightFn() {
        // Flat height map to keep navigation stable
        return () => 0;
    }

    getHeightAt(x, z) {
        return this._heightFn ? this._heightFn(x, z) : 0;
    }
}
