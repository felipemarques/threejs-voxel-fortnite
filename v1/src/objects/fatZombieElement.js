import * as THREE from 'three';

/**
 * Creates a Fat Zombie mesh
 * @param {THREE.Scene} scene - The scene to add the mesh to
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {number} z - Z position
 * @returns {Object} Object containing mesh and pivot points for animation
 */
export function createFatZombie(scene, x = 0, y = 0, z = 0) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x4a7c59 }); // Green
    const clothesMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 });

    // Fat zombie proportions
    const headScale = 1.3;
    const bodyWidthScale = 1.6;
    const bodyDepthScale = 1.4;
    const armThicknessScale = 1.3;
    const legThicknessScale = 1.4;

    // Head (larger)
    const headSize = 0.5 * headScale;
    const head = new THREE.Mesh(new THREE.BoxGeometry(headSize, headSize * 0.9, headSize), skinMat);
    head.position.y = 1.75;
    group.add(head);
    
    // Eyes (scaled with head)
    const eyeMat = new THREE.MeshStandardMaterial({ 
        color: 0xff1744, 
        emissive: 0xff1744, 
        emissiveIntensity: 0.8,
        roughness: 0.2
    });
    const eyeScale = 1.2;
    const eyeGeo = new THREE.BoxGeometry(0.12 * eyeScale, 0.08 * eyeScale, 0.02);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.12 * headScale, 0.05, 0.26 * headScale);
    const rightEye = leftEye.clone();
    rightEye.position.x = 0.12 * headScale;
    head.add(leftEye);
    head.add(rightEye);
    
    // Mouth (scaled with head)
    const mouthMat = new THREE.MeshStandardMaterial({ 
        color: 0x0d0d0d, 
        emissive: 0x330000, 
        emissiveIntensity: 0.4 
    });
    const mouthScale = 1.3;
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.24 * mouthScale, 0.08 * mouthScale, 0.04), mouthMat);
    mouth.position.set(0, -0.14 * headScale, 0.25 * headScale);
    head.add(mouth);
    
    // Teeth (scaled)
    const toothMat = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.3 });
    const toothGeo = new THREE.BoxGeometry(0.05 * mouthScale, 0.06 * mouthScale, 0.02);
    for (let i = -1; i <= 1; i += 2) {
        const tooth = new THREE.Mesh(toothGeo, toothMat);
        tooth.position.set(i * 0.06 * mouthScale, -0.05, 0.04);
        mouth.add(tooth);
    }

    // Body (wider and deeper)
    const bodyWidth = 0.6 * bodyWidthScale;
    const bodyDepth = 0.3 * bodyDepthScale;
    const bodyHeight = 0.9;
    const body = new THREE.Mesh(new THREE.BoxGeometry(bodyWidth, bodyHeight, bodyDepth), clothesMat);
    body.position.y = 1.05;
    group.add(body);
    
    // Belly (prominent sphere)
    const bellyGeo = new THREE.SphereGeometry(0.45, 8, 8);
    const belly = new THREE.Mesh(bellyGeo, clothesMat);
    belly.position.y = 0.9;
    belly.position.z = 0.25;
    belly.scale.set(1.1, 1.0, 0.9);
    group.add(belly);

    // Arms (thicker and wider apart)
    const armWidth = 0.2 * armThicknessScale;
    const armDepth = 0.2 * armThicknessScale;
    const armGeo = new THREE.BoxGeometry(armWidth, 0.8, armDepth);
    armGeo.translate(0, -0.3, 0);

    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(-0.55, 1.4, 0);
    group.add(leftArmPivot);
    leftArmPivot.add(new THREE.Mesh(armGeo, skinMat));

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(0.55, 1.4, 0);
    group.add(rightArmPivot);
    rightArmPivot.add(new THREE.Mesh(armGeo, skinMat));

    // Legs (thicker and wider apart)
    const legWidth = 0.25 * legThicknessScale;
    const legDepth = 0.25 * legThicknessScale;
    const legGeo = new THREE.BoxGeometry(legWidth, 0.8, legDepth);
    legGeo.translate(0, -0.4, 0);

    const leftLegPivot = new THREE.Group();
    leftLegPivot.position.set(-0.2, 0.7, 0);
    group.add(leftLegPivot);
    leftLegPivot.add(new THREE.Mesh(legGeo, clothesMat));

    const rightLegPivot = new THREE.Group();
    rightLegPivot.position.set(0.2, 0.7, 0);
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
