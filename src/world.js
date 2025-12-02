import * as THREE from 'three';
import { createOakTree } from './objects/treeOakElement.js';
import { createAlpineTree } from './objects/treeAlpineElement.js';
import {
    createRockElement,
    createRockPillarElement,
    createFlatBoulderElement,
    createCrystalShardElement,
    createStackedRockElement,
    createBasaltClusterElement
} from './objects/rockElement.js';
import { createHouseElement } from './objects/houseElement.js';
import { createSmallBuildingElement } from './objects/smallBuildingElement.js';
import { createPlateauElement } from './objects/plateauElement.js';
import { createVehicleElement } from './objects/vehicleElement.js';
import { createBus } from './objects/busElement.js';
import { createMotorcycle } from './objects/motorcycleElement.js';
import { InstanceManager } from './graphics/InstanceManager.js';

export const DEFAULT_MAP_SIZE = 400;

export class World {
    constructor(scene, itemManager, settings) {
        this.scene = scene;
        this.itemManager = itemManager;
        this.objects = []; // Objects for collision detection
        this.gameMode = settings && settings.gameMode ? settings.gameMode : 'arcade';
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
        this.stormEnabled = settings && settings.stormEnabled !== false;
        
        const stormTime = settings ? settings.stormTime : 180; // seconds
        this.stormShrinkRate = this.stormRadius / stormTime; 

        this.safeZoneCenter = new THREE.Vector3(0, 0, 0);
        
        this.instanceManager = new InstanceManager(this.scene);
        this.useInstancing = this.gameMode !== 'studio' && this.gameMode !== 'matrix' && this.gameMode !== 'matrix-ai';

        this.init();
    }

    init() {
        if (this.gameMode === 'arena') {
            this.createArenaEnvironment();
        } else if (this.gameMode === 'matrix') {
            this.createMatrixEnvironment();
        } else if (this.gameMode === 'matrix-ai') {
            this.createMatrixAIEnvironment();
        } else if (this.gameMode === 'multiplayer') {
            this.createMultiplayerEnvironment();
        } else if (this.gameMode === 'studio') {
            this.createStudioEnvironment();
        } else if (this.gameMode === 'survival') {
            this.createSurvivalEnvironment();
        } else {
            this.createEnvironment();
        }
        
        if (this.useInstancing) {
            const meshes = this.instanceManager.build();
            // Add instanced meshes to objects list for Raycasting (Shooting)
            meshes.forEach(mesh => {
                this.objects.push(mesh);
            });
        }

        if (this.gameMode !== 'matrix' && this.gameMode !== 'studio') {
            if (this.stormEnabled) this.createStormVisuals();
        }
    }

    addWorldObject(type, proto, x, y, z, scale = 1, rotationY = 0, userData = {}) {
        const pos = new THREE.Vector3(x, y, z);
        const rot = new THREE.Euler(0, rotationY, 0);
        const scl = new THREE.Vector3(scale, scale, scale);

        if (this.useInstancing) {
            this.instanceManager.addInstance(type, proto, pos, rot, scl, userData);
            
            // Create Ghost Object for Collision (Distance checks)
            // We don't add this to the scene, only to this.objects
            const ghost = new THREE.Object3D();
            ghost.position.copy(pos);
            ghost.rotation.copy(rot);
            ghost.scale.copy(scl);
            ghost.userData = { ...userData };
            
            // Approximate radius for collision if not provided
            if (!ghost.userData.radius) {
                if (type.includes('Tree')) ghost.userData.radius = 1.0;
                else if (type.includes('Rock')) ghost.userData.radius = 1.5;
                else if (type.includes('Bush')) ghost.userData.radius = 1.0;
            }
            
            this.objects.push(ghost);
            return ghost;
        } else {
            // Fallback to standard Mesh (Studio mode)
            // We need to clone the prototype because we are modifying it
            // Actually, the prototype might be a complex group.
            // For Studio, we might just call the original creator functions inline to get unique geometry if needed,
            // but here we are trying to unify.
            // Let's assume for Studio we might just clone the proto.
            const clone = proto.clone();
            clone.position.copy(pos);
            clone.rotation.copy(rot);
            clone.scale.copy(scl);
            clone.userData = { ...userData, gameId: this.generateID() };
            
            // Fix materials on clone if needed (cloning doesn't always clone materials unique instances)
            // But for Studio it's fine.
            
            this.scene.add(clone);
            this.objects.push(clone);
            return clone;
        }
    }

    createEnvironment() {
        const randCoord = (spread = 1) => (Math.random() - 0.5) * (this.mapSize * spread);
        const safeCoord = (spread = 1) => {
            const limit = this.halfMapSize - 5;
            const v = randCoord(spread);
            return Math.max(-limit, Math.min(limit, v));
        };
        
        // Helper to avoid spawning objects on top of the player at (0,0,0)
        const getSafePosition = (spread = 1, safeRadius = 12) => {
            let x, z;
            let attempts = 0;
            do {
                x = safeCoord(spread);
                z = safeCoord(spread);
                attempts++;
            } while ((x * x + z * z < safeRadius * safeRadius) && attempts < 20);
            return { x, z };
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

        // Prototypes for Instancing
        const protoOak = this.createTree(0, 0, 'Oak');
        const protoPine = this.createTree(0, 0, 'Pine');
        const protoRock = this.createRock(0, 0);
        const protoRockPillar = this.createRockPillar(0, 0);
        const protoFlatBoulder = this.createFlatBoulder(0, 0);
        const protoCrystal = this.createCrystalShard(0, 0);
        const protoStacked = this.createStackedRock(0, 0);
        const protoBasalt = this.createBasaltCluster(0, 0);
        const protoBush = this.createBush(0, 0);
        const protoGrass = this.createGrassClump(0, 0);

        // Trees
        for (let i = 0; i < density.trees; i++) {
            const { x, z } = getSafePosition(0.9);
            const y = groundY(x, z);
            
            const type = Math.random() > 0.5 ? 'Oak' : 'Pine';
            const proto = type === 'Oak' ? protoOak : protoPine;
            // Randomize scale slightly per instance
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            
            this.addWorldObject(type, proto, x, y, z, scale, rot, { gameName: `Tree_${type}`, type: 'tree' });
        }

        // Rocks (more variety)
        const rockProtos = [protoRock, protoRockPillar, protoFlatBoulder, protoCrystal, protoStacked, protoBasalt];
        const rockNames = ['Rock', 'RockPillar', 'FlatBoulder', 'Crystal', 'StackedRock', 'Basalt'];
        
        for (let i = 0; i < density.rocks; i++) {
            const { x, z } = getSafePosition(0.9);
            const y = groundY(x, z);
            const idx = i % rockProtos.length;
            const proto = rockProtos[idx];
            const name = rockNames[idx];
            
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            
            this.addWorldObject(name, proto, x, y, z, scale, rot, { gameName: 'Rock', type: 'rock' });
        }
        
        // Small bushes
        for (let i = 0; i < density.bushes; i++) {
            const { x, z } = getSafePosition(0.85);
            const y = groundY(x, z);
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            this.addWorldObject('Bush', protoBush, x, y, z, scale, rot, { gameName: 'Bush' });
        }

        // Scattered grass clumps across the map for texture
        for (let i = 0; i < density.grass; i++) {
            const { x, z } = getSafePosition(0.95);
            const y = groundY(x, z);
            const rot = Math.random() * Math.PI * 2;
            this.addWorldObject('Grass', protoGrass, x, y, z, 1.0, rot, { gameName: 'Grass' });
        }
        
        // Buildings
        for (let i = 0; i < density.houses; i++) {
            const { x, z } = getSafePosition(0.75, 20); // Larger safe radius for houses
            const y = groundY(x, z);
            // Randomize size to better label larger builds
            const roll = Math.random();
            const isLarge = roll > 0.7;
            const isSmall = roll < 0.25;
            const scale = isLarge ? 1.55 : (isSmall ? 0.9 : 1);
            const sizeLabel = isLarge ? 'Mansion' : (isSmall ? 'Cabin' : 'House');
            const sizeTag = isLarge ? 'large' : (isSmall ? 'small' : 'medium');
            const house = this.createHouse(x, z, { scale });
            house.position.y = y;
            house.userData = { gameId: this.generateID(), gameName: sizeLabel, type: 'house', size: sizeTag };
            this.scene.add(house);
            this.objects.push(house);
            
            // Spawn loot inside
            this.itemManager.spawnLootInHouse(x, 1, z);
        }
        
        // Vehicles (Cars and Trucks)
        for (let i = 0; i < density.vehicles; i++) {
            const { x, z } = getSafePosition(0.8);
            const y = groundY(x, z);
            const type = Math.random() > 0.6 ? 'truck' : 'car';
            const vehicle = this.createVehicle(x, z, type);
            vehicle.position.y = y;
            vehicle.userData = {
                ...(vehicle.userData || {}),
                gameId: this.generateID(),
                gameName: `Vehicle_${type}`,
                type: 'vehicle'
            };
            this.scene.add(vehicle);
            this.objects.push(vehicle);
        }    

        // Elevated natural plateaus with gentle ramps
        for (let i = 0; i < density.plateaus; i++) {
            const { x, z } = getSafePosition(0.6, 25); // Large safe radius for plateaus
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
            const { x, z } = getSafePosition(0.7, 18);
            const y = groundY(x, z);
            const b = this.createSmallBuilding(x, z);
            b.position.y = y;
            b.userData = { gameId: this.generateID(), gameName: 'SmallBuilding', type: 'house' };
            this.scene.add(b);
            this.objects.push(b);
        }
    }

    createSurvivalEnvironment() {
        const randCoord = (spread = 1) => (Math.random() - 0.5) * (this.mapSize * spread);
        const safeCoord = (spread = 1) => {
            const limit = this.halfMapSize - 5;
            const v = randCoord(spread);
            return Math.max(-limit, Math.min(limit, v));
        };
        
        // Helper to avoid spawning objects on top of the player at (0,0,0)
        const getSafePosition = (spread = 1, safeRadius = 12) => {
            let x, z;
            let attempts = 0;
            do {
                x = safeCoord(spread);
                z = safeCoord(spread);
                attempts++;
            } while ((x * x + z * z < safeRadius * safeRadius) && attempts < 20);
            return { x, z };
        };

        const groundY = (x, z) => (this.getHeightAt ? this.getHeightAt(x, z) : 0);
        
        // Reduced density for survival mode, no buildings/vehicles
        const density = {
            trees: 90, // Slightly more trees for nature feel
            rocks: 60,
            bushes: 80,
            grass: 250
        };
        
        // Ground
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 64, 64);
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

        // Prototypes for Instancing
        const protoOak = this.createTree(0, 0, 'Oak');
        const protoPine = this.createTree(0, 0, 'Pine');
        const protoRock = this.createRock(0, 0);
        const protoRockPillar = this.createRockPillar(0, 0);
        const protoFlatBoulder = this.createFlatBoulder(0, 0);
        const protoCrystal = this.createCrystalShard(0, 0);
        const protoStacked = this.createStackedRock(0, 0);
        const protoBasalt = this.createBasaltCluster(0, 0);
        const protoBush = this.createBush(0, 0);
        const protoGrass = this.createGrassClump(0, 0);

        // Trees
        for (let i = 0; i < density.trees; i++) {
            const { x, z } = getSafePosition(0.9);
            const y = groundY(x, z);
            
            const type = Math.random() > 0.5 ? 'Oak' : 'Pine';
            const proto = type === 'Oak' ? protoOak : protoPine;
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            
            this.addWorldObject(type, proto, x, y, z, scale, rot, { gameName: `Tree_${type}`, type: 'tree' });
        }

        // Rocks
        const rockProtos = [protoRock, protoRockPillar, protoFlatBoulder, protoCrystal, protoStacked, protoBasalt];
        const rockNames = ['Rock', 'RockPillar', 'FlatBoulder', 'Crystal', 'StackedRock', 'Basalt'];
        
        for (let i = 0; i < density.rocks; i++) {
            const { x, z } = getSafePosition(0.9);
            const y = groundY(x, z);
            const idx = i % rockProtos.length;
            const proto = rockProtos[idx];
            const name = rockNames[idx];
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            this.addWorldObject(name, proto, x, y, z, scale, rot, { gameName: 'Rock', type: 'rock' });
        }
        
        // Small bushes
        for (let i = 0; i < density.bushes; i++) {
            const { x, z } = getSafePosition(0.85);
            const y = groundY(x, z);
            const scale = 0.8 + Math.random() * 0.4;
            const rot = Math.random() * Math.PI * 2;
            this.addWorldObject('Bush', protoBush, x, y, z, scale, rot, { gameName: 'Bush' });
        }

        // Scattered grass clumps across the map for texture
        for (let i = 0; i < density.grass; i++) {
            const { x, z } = getSafePosition(0.95);
            const y = groundY(x, z);
            const rot = Math.random() * Math.PI * 2;
            this.addWorldObject('Grass', protoGrass, x, y, z, 1.0, rot, { gameName: 'Grass' });
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
        // Flat ground for building with voxel/Minecraft-like tiling
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 128, 128);
        const groundMat = this.buildVoxelGroundMaterial();
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);

        // Voxel clouds (visual only, not part of collision objects)
        const cloudCount = 12;
        for (let i = 0; i < cloudCount; i++) {
            const x = (Math.random() - 0.5) * this.mapSize * 0.6;
            const z = (Math.random() - 0.5) * this.mapSize * 0.6;
            const cloud = this.createVoxelCloud(x, z);
            this.scene.add(cloud);
        }
    }

    createMatrixAIEnvironment() {
        // Transparent grid floor using GridHelper
        const gridSize = this.mapSize;
        const divisions = 80;
        const grid = new THREE.GridHelper(gridSize, divisions, 0xffffff, 0xffffff);
        const gridMats = Array.isArray(grid.material) ? grid.material : [grid.material];
        gridMats.forEach((mat) => {
            mat.opacity = 0.3;
            mat.transparent = true;
            mat.depthWrite = false;
        });
        grid.position.y = 0.02; // lift slightly to avoid z-fighting
        this.scene.add(grid);

        // Invisible ground plane for raycasting/placement
        const groundGeo = new THREE.PlaneGeometry(gridSize, gridSize, 1, 1);
        const groundMat = new THREE.MeshBasicMaterial({ visible: false });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground', type: 'ground' };
        this.scene.add(ground);
        this.objects.push(ground);
    }

    createMultiplayerEnvironment() {
        // Use the same voxel-ish ground material as Studio
        const groundGeo = new THREE.PlaneGeometry(this.mapSize, this.mapSize, 128, 128);
        const groundMat = this.buildVoxelGroundMaterial();
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        ground.userData = { gameId: this.generateID(), gameName: 'Ground' };
        this.scene.add(ground);
        this.objects.push(ground);
        // Storm disabled for this mode
        this.stormEnabled = false;
    }

    generateID() {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    createTree(x, z, type) {
        const tree = type === 'Oak' ? createOakTree() : createAlpineTree();
        tree.position.set(x, 0, z);
        return tree;
    }

    createVoxelCloud(x, z) {
        const group = new THREE.Group();
        const blockGeo = new THREE.BoxGeometry(3, 2, 3);
        const mat = new THREE.MeshLambertMaterial({ color: 0xf2f6ff, transparent: true, opacity: 0.9 });
        const blobs = 8 + Math.floor(Math.random() * 6);
        for (let i = 0; i < blobs; i++) {
            const dx = (Math.random() - 0.5) * 12;
            const dz = (Math.random() - 0.5) * 12;
            const dy = (Math.random() - 0.5) * 2;
            const cube = new THREE.Mesh(blockGeo, mat);
            cube.position.set(dx, dy, dz);
            cube.castShadow = false;
            cube.receiveShadow = false;
            group.add(cube);
        }
        group.position.set(x, 30 + Math.random() * 8, z);
        return group;
    }

    buildVoxelGroundMaterial() {
        // Create a small procedural checker/grass pattern and let Three.js repeat it
        const size = 64;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        // Base colors
        const green1 = '#4caf50';
        const green2 = '#66bb6a';
        const dirt = '#8d6e63';
        // Draw checkers
        const tile = 8;
        for (let y = 0; y < size; y += tile) {
            for (let x = 0; x < size; x += tile) {
                const useDirt = Math.random() > 0.85;
                const color = useDirt ? dirt : ((x / tile + y / tile) % 2 === 0 ? green1 : green2);
                ctx.fillStyle = color;
                ctx.fillRect(x, y, tile, tile);
            }
        }
        // Subtle noise overlay
        const imageData = ctx.getImageData(0, 0, size, size);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const n = (Math.random() * 30) - 15; // -15..15
            data[i] = Math.min(255, Math.max(0, data[i] + n));
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n));
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n));
        }
        ctx.putImageData(imageData, 0, 0);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(this.mapSize / 10, this.mapSize / 10);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestMipMapNearestFilter;

        return new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 1,
            metalness: 0
        });
    }

    createRock(x, z, baseY = 0) {
        const rock = createRockElement(x, z, baseY);
        this._tagStaticCollider(rock, 'rock');
        return rock;
    }

    createRockPillar(x, z, baseY = 0) {
        const mesh = createRockPillarElement(x, z, baseY);
        this._tagStaticCollider(mesh, 'rock');
        return mesh;
    }

    createFlatBoulder(x, z, baseY = 0) {
        const mesh = createFlatBoulderElement(x, z, baseY);
        this._tagStaticCollider(mesh, 'rock');
        return mesh;
    }

    createCrystalShard(x, z, baseY = 0) {
        return createCrystalShardElement(x, z, baseY);
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
        this._tagStaticCollider(group, 'rock');
        return group;
    }

    createBasaltCluster(x, z, baseY = 0) {
        const group = createBasaltClusterElement(x, z, baseY);
        this._tagStaticCollider(group, 'rock');
        return group;
    }

    createVehicle(x, z, type = 'car') {
        let vehicleGroup;
        
        if (type === 'bus') {
            vehicleGroup = createBus();
        } else if (type === 'motorcycle') {
            vehicleGroup = createMotorcycle();
        } else {
            vehicleGroup = createVehicleElement(type);
        }
        
        vehicleGroup.position.set(x, 0, z);
        return vehicleGroup;
    }

    createBush(x, z) {
        const bushGroup = new THREE.Group();
        bushGroup.position.set(x, 0, z);
        const col = new THREE.MeshStandardMaterial({ color: 0x2ca02c, roughness: 1 });
        const parts = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < parts; i++) {
            const r = 1.2 + Math.random() * 1.0; // bigger bushes to hide inside
            const g = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 6), col);
            g.position.set((Math.random() - 0.5) * 1.2, r * 0.65, (Math.random() - 0.5) * 1.2);
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

    createHouse(x, z, { scale = 1 } = {}) {
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

        houseGroup.scale.setScalar(scale);

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

    spawnPrefab(type, x, z, options = {}) {
        const y = (this.getHeightAt && typeof this.getHeightAt === 'function') ? this.getHeightAt(x, z) : 0;
        let obj = null;
        switch (type) {
            case 'house': {
                obj = this.createHouse(x, z, { scale: 1 });
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: 'House', type: 'house' };
                break;
            }
            case 'mansion': {
                obj = this.createHouse(x, z, { scale: 1.6 });
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: 'Mansion', type: 'house', size: 'large' };
                break;
            }
            case 'cabin': {
                obj = this.createHouse(x, z, { scale: 0.85 });
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: 'Cabin', type: 'house', size: 'small' };
                break;
            }
            case 'smallBuilding': {
                obj = this.createSmallBuilding(x, z);
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: 'SmallBuilding', type: 'house' };
                break;
            }
            case 'plateau': {
                const plateau = this.createPlateau(x, z, 10 + Math.random() * 6, 8 + Math.random() * 6, y);
                plateau.userData = { gameId: this.generateID(), gameName: 'Plateau', type: 'house', size: 'large' };
                obj = plateau;
                break;
            }
            case 'rock': {
                obj = this.createRock(x, z);
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: 'Rock', type: 'rock' };
                break;
            }
            case 'tree': {
                const t = options.variant || (Math.random() > 0.5 ? 'Oak' : 'Pine');
                obj = this.createTree(x, z, t);
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: `Tree_${t}`, type: 'tree' };
                break;
            }
            case 'vehicle': {
                const vType = options.variant || (Math.random() > 0.6 ? 'truck' : 'car');
                obj = this.createVehicle(x, z, vType);
                obj.position.y = y;
                obj.userData = { gameId: this.generateID(), gameName: `Vehicle_${vType}`, type: 'vehicle' };
                break;
            }
            case 'crate': {
                const box = new THREE.Mesh(
                    new THREE.BoxGeometry(2, 2, 2),
                    new THREE.MeshStandardMaterial({ color: 0x8e8e8e, roughness: 0.9 })
                );
                box.position.set(x, y + 1, z);
                box.castShadow = true;
                box.receiveShadow = true;
                box.userData = { gameId: this.generateID(), gameName: 'Crate', type: 'house' };
                obj = box;
                break;
            }
        }

        if (obj) {
            this.scene.add(obj);
            this.objects.push(obj);
        }
        return obj;
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
        if (this.gameMode === 'matrix' || this.gameMode === 'studio' || this.gameMode === 'matrix-ai') {
            return { inStorm: false };
        }
        if (this.stormEnabled === false) return { inStorm: false };
        // Shrink storm
        if (this.stormRadius > 10) {
            this.stormRadius -= this.stormShrinkRate * dt;
            const scale = this.initialStormRadius ? (this.stormRadius / this.initialStormRadius) : 1;
            if (this.stormMesh && this.stormMesh.scale) {
                this.stormMesh.scale.set(scale, 1, scale);
            }
        }

        // Check storm damage
        const dist = Math.sqrt(playerPos.x * playerPos.x + playerPos.z * playerPos.z);
        return { inStorm: dist > this.stormRadius };
    }

    _buildHeightFn() {
        // Flat height map to keep navigation stable
        return () => 0;
    }

    _tagStaticCollider(obj, type = null) {
        if (!obj) return;
        obj.updateWorldMatrix(true, true);
        const box = new THREE.Box3().setFromObject(obj);
        obj.userData = obj.userData || {};
        if (type && !obj.userData.type) obj.userData.type = type;
        obj.userData.colliderBox = box;
        obj.userData.colliderType = 'solid';
    }

    getHeightAt(x, z) {
        return this._heightFn ? this._heightFn(x, z) : 0;
    }
}
