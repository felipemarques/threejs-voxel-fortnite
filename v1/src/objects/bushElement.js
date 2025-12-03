import * as THREE from 'three';

/**
 * Creates a bush mesh with random spherical parts
 * @param {number} scale - Optional scale multiplier (default 1.0)
 * @returns {THREE.Group} Bush group
 */
export function createBush(scale = 1.0) {
    const bushGroup = new THREE.Group();
    const col = new THREE.MeshStandardMaterial({ color: 0x2ca02c, roughness: 1 });
    const parts = 2 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < parts; i++) {
        const r = (1.2 + Math.random() * 1.0) * scale; // Apply scale to radius
        const g = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 6), col);
        g.position.set((Math.random() - 0.5) * 1.2 * scale, r * 0.65, (Math.random() - 0.5) * 1.2 * scale);
        g.castShadow = true;
        bushGroup.add(g);
    }
    
    return bushGroup;
}

