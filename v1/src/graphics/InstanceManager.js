import * as THREE from 'three';

export class InstanceManager {
    constructor(scene) {
        this.scene = scene;
        // Map<key, { mesh: InstancedMesh, dummy: Object3D, count: number, instances: Array<{pos, rot, scale}> }>
        // Key format: "Type_MaterialUUID_GeometryUUID"
        this.buckets = new Map();
    }

    /**
     * Register an object to be instanced.
     * @param {string} type - Identifier for the object type (e.g., 'OakTree', 'Rock')
     * @param {THREE.Object3D} object - The prototype object (Mesh or Group)
     * @param {THREE.Vector3} position
     * @param {THREE.Euler} rotation
     * @param {THREE.Vector3} scale
     * @param {Object} userData - Extra data to store (optional)
     */
    addInstance(type, object, position, rotation, scale, userData = {}) {
        // Decompose the object into renderable meshes
        const meshes = [];
        object.traverse((child) => {
            if (child.isMesh) {
                meshes.push(child);
            }
        });

        meshes.forEach((mesh) => {
            // Create a unique key for this geometry+material combo within this object type
            // We include 'type' to separate, say, OakTree leaves from AlpineTree leaves even if they shared a mat/geo (unlikely but safe)
            const matID = Array.isArray(mesh.material) ? mesh.material.map(m => m.uuid).join('-') : mesh.material.uuid;
            const geoID = mesh.geometry.uuid;
            const key = `${type}_${geoID}_${matID}`;

            if (!this.buckets.has(key)) {
                this.buckets.set(key, {
                    geometry: mesh.geometry,
                    material: mesh.material,
                    instances: [],
                    castShadow: mesh.castShadow,
                    receiveShadow: mesh.receiveShadow
                });
            }

            const bucket = this.buckets.get(key);
            
            // Calculate world matrix for this part relative to the group root
            // The 'mesh' is a child of 'object'. We need to apply the instance transform (pos/rot/scale)
            // to the child's local transform.
            
            // 1. Get child's local transform relative to the root object
            // Since we are traversing, 'mesh' might be 'object' itself or a child.
            // We need the matrix of 'mesh' relative to 'object'.
            // But 'object' is not in the scene yet, so worldMatrix is not updated.
            // We can calculate it manually.
            
            // Simplified approach: We assume the structure is flat (Group -> Mesh) or just Mesh.
            // If it's deeper, we'd need full matrix multiplication.
            // For this game's trees/rocks, it's usually Group -> Mesh.
            
            const offsetPosition = mesh.position.clone();
            const offsetRotation = mesh.rotation.clone();
            const offsetScale = mesh.scale.clone();

            bucket.instances.push({
                pos: position,
                rot: rotation,
                scl: scale,
                offsetPos: offsetPosition,
                offsetRot: offsetRotation,
                offsetScl: offsetScale,
                userData
            });
        });
    }

    /**
     * Build the InstancedMeshes and add them to the scene.
     */
    build() {
        const dummy = new THREE.Object3D();

        const createdMeshes = [];
        this.buckets.forEach((bucket, key) => {
            if (bucket.instances.length === 0) return;

            const instancedMesh = new THREE.InstancedMesh(
                bucket.geometry,
                bucket.material,
                bucket.instances.length
            );

            instancedMesh.castShadow = bucket.castShadow;
            instancedMesh.receiveShadow = bucket.receiveShadow;
            instancedMesh.userData = { isInstanced: true };

            for (let i = 0; i < bucket.instances.length; i++) {
                const inst = bucket.instances[i];

                // 1. Apply the instance transform (The position of the tree in the world)
                dummy.position.copy(inst.pos);
                dummy.rotation.copy(inst.rot || new THREE.Euler());
                dummy.scale.copy(inst.scl || new THREE.Vector3(1, 1, 1));
                dummy.updateMatrix();

                // 2. Apply the offset transform (The position of the branch relative to the tree center)
                // We do this by creating a temp object for the child, applying its local transform, 
                // and then multiplying matrices.
                // However, simple parenting logic: ChildWorld = ParentWorld * ChildLocal
                
                const childDummy = new THREE.Object3D();
                childDummy.position.copy(inst.offsetPos);
                childDummy.rotation.copy(inst.offsetRot);
                childDummy.scale.copy(inst.offsetScl);
                childDummy.updateMatrix();

                // Final matrix = InstanceMatrix * ChildLocalMatrix
                const finalMatrix = new THREE.Matrix4();
                finalMatrix.multiplyMatrices(dummy.matrix, childDummy.matrix);

                instancedMesh.setMatrixAt(i, finalMatrix);
            }

            instancedMesh.instanceMatrix.needsUpdate = true;
            this.scene.add(instancedMesh);
            createdMeshes.push(instancedMesh);
        });
        
        // Clear buckets to free memory, we don't need the raw data anymore
        this.buckets.clear();
        return createdMeshes;
    }
}
