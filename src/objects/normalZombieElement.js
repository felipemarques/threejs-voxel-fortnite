import * as THREE from 'three';

/**
 * Creates a Normal Zombie mesh
 * @param {THREE.Scene} scene - The scene to add the mesh to
 * @param {number} x - X position
 * @param {number} y - Y position  
 * @param {number} z - Z position
 * @returns {Object} Object containing mesh and pivot points for animation
 */
export function createNormalZombie(scene, x = 0, y = 0, z = 0) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8e44ad }); // Purple
    const clothesMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.45, 0.5), skinMat);
    head.position.y = 1.75;
    group.add(head);
    
    // Eyes (glowing red)
    const eyeMat = new THREE.MeshStandardMaterial({ 
        color: 0xff1744, 
        emissive: 0xff1744, 
        emissiveIntensity: 0.8,
        roughness: 0.2
    });
    const eyeGeo = new THREE.BoxGeometry(0.12, 0.08, 0.02);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.12, 0.05, 0.26);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.12;
    head.add(leftEye);
    head.add(rightEye);
    
    // Mouth
    const mouthMat = new THREE.MeshStandardMaterial({ 
        color: 0x0d0d0d, 
        emissive: 0x330000, 
        emissiveIntensity: 0.4 
    });
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.04), mouthMat);
    mouth.position.set(0, -0.14, 0.25);
    head.add(mouth);
    
    // Teeth
    const toothMat = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.3 });
    const toothGeo = new THREE.BoxGeometry(0.05, 0.06, 0.02);
    for (let i = -1; i <= 1; i += 2) {
        const tooth = new THREE.Mesh(toothGeo, toothMat);
        tooth.position.set(i * 0.06, -0.05, 0.04);
        mouth.add(tooth);
    }

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.3), clothesMat);
    body.position.y = 1.1;
    group.add(body);

    // Arms - Pivots
    const armGeo = new THREE.BoxGeometry(0.2, 0.8, 0.2);
    armGeo.translate(0, -0.3, 0);

    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(-0.45, 1.4, 0);
    group.add(leftArmPivot);
    leftArmPivot.add(new THREE.Mesh(armGeo, skinMat));

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(0.45, 1.4, 0);
    group.add(rightArmPivot);
    rightArmPivot.add(new THREE.Mesh(armGeo, skinMat));

    // Legs - Pivots
    const legGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    legGeo.translate(0, -0.4, 0);

    const leftLegPivot = new THREE.Group();
    leftLegPivot.position.set(-0.15, 0.7, 0);
    group.add(leftLegPivot);
    leftLegPivot.add(new THREE.Mesh(legGeo, clothesMat));

    const rightLegPivot = new THREE.Group();
    rightLegPivot.position.set(0.15, 0.7, 0);
    group.add(rightLegPivot);
    rightLegPivot.add(new THREE.Mesh(legGeo, clothesMat));

    group.castShadow = true;
    group.receiveShadow = true;
    
    scene.add(group);

    return {
        mesh: group,
        leftArmPivot,
        rightArmPivot,
        leftLegPivot,
        rightLegPivot
    };
}
