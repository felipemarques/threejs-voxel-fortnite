import * as THREE from 'three';

/**
 * Creates a voxel spider enemy with 8 legs and animated body
 * @param {THREE.Scene} scene - The three.js scene
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} z - Z position
 * @returns {Object} Spider mesh data with animation pivots
 */
export function createSpider(scene, x, y, z) {
    const spiderGroup = new THREE.Group();
    spiderGroup.position.set(x, y, z);

    // Body material - dark spider color
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2c1810, roughness: 0.8 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0x440000, emissiveIntensity: 0.5 });
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a2318, roughness: 0.9 });

    // Main body (abdomen) - rounder back part (bumbum)
    const abdomenGeo = new THREE.SphereGeometry(0.9, 8, 8);
    abdomenGeo.scale(1, 0.8, 1.3); // Flatten slightly and elongate
    const abdomen = new THREE.Mesh(abdomenGeo, bodyMat);
    abdomen.position.set(0, 0.7, -0.5);
    abdomen.castShadow = true;
    spiderGroup.add(abdomen);

    // Head (cephalothorax) - smaller front part
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), bodyMat);
    head.position.set(0, 0.5, 0.6);
    head.castShadow = true;
    spiderGroup.add(head);

    // Eyes - 8 eyes in two rows
    const eyeSize = 0.1;
    const eyePositions = [
        // Top row (4 eyes)
        [-0.25, 0.7, 1.0],
        [-0.08, 0.7, 1.05],
        [0.08, 0.7, 1.05],
        [0.25, 0.7, 1.0],
        // Bottom row (4 eyes)
        [-0.2, 0.55, 1.0],
        [-0.06, 0.55, 1.05],
        [0.06, 0.55, 1.05],
        [0.2, 0.55, 1.0]
    ];

    eyePositions.forEach((pos, index) => {
        const size = index < 4 ? eyeSize : eyeSize * 0.7; 
        const eye = new THREE.Mesh(new THREE.BoxGeometry(size, size, size * 0.5), eyeMat);
        eye.position.set(...pos);
        spiderGroup.add(eye);
    });

    // Mandibles (fangs)
    const fangGeo = new THREE.ConeGeometry(0.08, 0.3, 4);
    const fangMat = new THREE.MeshStandardMaterial({ color: 0x1a0f0a, roughness: 0.5 });
    
    const leftFang = new THREE.Mesh(fangGeo, fangMat);
    leftFang.position.set(-0.15, 0.35, 1.0);
    leftFang.rotation.x = Math.PI / 6; // Point inward/down
    leftFang.rotation.z = -Math.PI / 12;
    spiderGroup.add(leftFang);

    const rightFang = new THREE.Mesh(fangGeo, fangMat);
    rightFang.position.set(0.15, 0.35, 1.0);
    rightFang.rotation.x = Math.PI / 6;
    rightFang.rotation.z = Math.PI / 12;
    spiderGroup.add(rightFang);

    // Leg segments storage
    const legs = [];
    
    // Leg configuration: 2 legs per side, perpendicular-ish
    // We want them to look like a spider, so maybe slightly angled
    // Leg configuration: 4 legs per side
    // User liked the perpendicular look (0), so we'll keep them mostly straight
    // but maybe slight fanning for realism/clearance? 
    // "Quadruplicate" implies copying the style. Let's keep them uniform.
    const legAngles = [
        0,              // Front
        0,              // 2nd
        0,              // 3rd
        0               // Back
    ];

    // Create 8 legs (4 on each side)
    for (let side = 0; side < 2; side++) { // 0 = left, 1 = right
        const xMult = side === 0 ? -1 : 1;
        
        for (let legIndex = 0; legIndex < 4; legIndex++) {
            const legGroup = new THREE.Group();
            
            // Attach legs to cephalothorax/body
            // Start from front (0.7) and go back towards abdomen
            // Spacing increased to 0.5
            const zOffset = 0.7 - legIndex * 0.5; 
            legGroup.position.set(xMult * 0.45, 0.5, zOffset);
            
            // Base rotation
            // If side 0 (left), we want it to point Left (-X).
            // Z axis (0,0,1) -> Rotate Y(-90) -> (-1,0,0).
            // If side 1 (right), we want it to point Right (+X).
            // Z axis (0,0,1) -> Rotate Y(90) -> (1,0,0).
            
            const baseAngle = side === 0 ? -Math.PI / 2 : Math.PI / 2;
            // Add slight variation
            const angleOffset = legAngles[legIndex];
            legGroup.rotation.y = baseAngle + angleOffset;

            // Upper leg segment pivot
            const upperPivot = new THREE.Group();
            upperPivot.position.set(0, 0, 0);
            
            // Upper leg segment (femur) - goes up and out
            // Length 0.8
            const upperLeg = new THREE.Mesh(
                new THREE.BoxGeometry(0.12, 0.12, 0.8),
                legMat
            );
            // Pivot is at start of leg. Leg points along +Z (local).
            // We want it to point up.
            upperLeg.position.set(0, 0, 0.35); // Center of box is at 0.4
            upperPivot.rotation.x = -Math.PI / 4; // Rotate up 45 deg
            upperLeg.castShadow = true;
            upperPivot.add(upperLeg);
            
            // Lower leg segment pivot (knee)
            const lowerPivot = new THREE.Group();
            // Position at end of upper leg
            // Upper leg length 0.8.
            lowerPivot.position.set(0, 0, 0.7); 
            
            // Lower leg segment (tibia) - goes down
            // Length 1.2 (longer to reach ground)
            const lowerLeg = new THREE.Mesh(
                new THREE.BoxGeometry(0.1, 0.1, 1.2),
                legMat
            );
            lowerLeg.position.set(0, 0, 0.5); // Center at 0.6
            
            // Rotate down to touch ground
            // Upper is up 45 deg. Tip Y ~= 0.5 + 0.7 * sin(45) ~= 1.0
            // We need to go down 1.0.
            // Lower leg length 1.2.
            // Angle needed?
            // If we rotate lowerPivot by 90 deg relative to upper, it points down-ish?
            lowerPivot.rotation.x = Math.PI / 1.2; // Bend down sharply
            
            lowerLeg.castShadow = true;
            lowerPivot.add(lowerLeg);
            
            upperPivot.add(lowerPivot);
            legGroup.add(upperPivot);
            spiderGroup.add(legGroup);
            
            // Store pivots for animation
            legs.push({
                upper: upperPivot,
                lower: lowerPivot,
                side: side,
                index: legIndex,
                baseRotation: legGroup.rotation.y
            });
        }
    }

    // Add to scene
    if (scene) scene.add(spiderGroup);

    // Return data structure similar to zombies for animation
    return {
        mesh: spiderGroup,
        legs: legs, // Spider-specific: leg pivots for walking animation
        abdomen: abdomen, // For bobbing animation
        head: head
    };
}
