import * as THREE from 'three';

/**
 * Creates a standalone player mesh for the object viewer
 * @param {Object} options - Customization options
 * @param {number} options.shirtColor - Hex color for shirt (default 0x3498db)
 * @param {string} options.mouthStyle - Mouth style: 'serious', 'smile', 'angry', 'surprised', 'none'
 * @param {boolean} options.showHat - Whether to show the hat
 * @param {boolean} options.showGlasses - Whether to show glasses
 * @param {string} options.weapon - Weapon to equip: 'none', 'pistol', 'rifle', 'sniper', 'smg', 'shotgun', 'dmr'
 * @returns {THREE.Group} Player group
 */
export function createPlayer(options = {}) {
    const {
        shirtColor = 0x3498db,
        mouthStyle = 'serious',
        showHat = true,
        showGlasses = false,
        weapon = 'none'
    } = options;

    const playerGroup = new THREE.Group();

    // Materials
    const material = new THREE.MeshStandardMaterial({ color: shirtColor }); // Shirt
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffccaa }); // Skin
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50 }); // Dark pants
    
    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), skinMat);
    head.position.y = 1.75;
    playerGroup.add(head);
    
    // Hat (Baseball cap style)
    if (showHat) {
        const capMat = new THREE.MeshStandardMaterial({ color: 0xe74c3c }); // Red cap
        const capTop = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.52), capMat);
        capTop.position.set(0, 0.3, 0);
        head.add(capTop);
        
        const capBrim = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.02, 0.35), capMat);
        capBrim.position.set(0, 0.22, 0.35);
        head.add(capBrim);
    }
    
    // Sunglasses
    if (showGlasses) {
        const glassesMat = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black frames
        const glassLensMat = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a, 
            transparent: true, 
            opacity: 0.7,
            metalness: 0.8,
            roughness: 0.2
        });
        
        // Left lens
        const leftLens = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.02), glassLensMat);
        leftLens.position.set(-0.12, 0.05, 0.26);
        head.add(leftLens);
        
        // Right lens
        const rightLens = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.02), glassLensMat);
        rightLens.position.set(0.12, 0.05, 0.26);
        head.add(rightLens);
        
        // Bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), glassesMat);
        bridge.position.set(0, 0.05, 0.26);
        head.add(bridge);
        
        // Arms
        const glassLeftArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.3), glassesMat);
        glassLeftArm.position.set(-0.21, 0.05, 0.1);
        head.add(glassLeftArm);
        
        const glassRightArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.3), glassesMat);
        glassRightArm.position.set(0.21, 0.05, 0.1);
        head.add(glassRightArm);
    }

    // Eyes (more prominent)
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), eyeMat);
    leftEye.position.set(-0.1, 0.08, 0.26);
    head.add(leftEye);
    
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), eyeMat);
    rightEye.position.set(0.1, 0.08, 0.26);
    head.add(rightEye);

    // Mouth
    const mouth = buildMouthMesh(mouthStyle);
    if (mouth) head.add(mouth);

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.3), material);
    body.position.y = 1.1;
    playerGroup.add(body);

    // Arms - Use Pivots
    const armGeo = new THREE.BoxGeometry(0.2, 0.8, 0.2);
    armGeo.translate(0, -0.3, 0); // Shift geometry down so origin is at shoulder

    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(-0.45, 1.4, 0);
    playerGroup.add(leftArmPivot);
    const leftArm = new THREE.Mesh(armGeo, skinMat);
    leftArmPivot.add(leftArm);

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(0.45, 1.4, 0);
    playerGroup.add(rightArmPivot);
    const rightArm = new THREE.Mesh(armGeo, skinMat);
    rightArmPivot.add(rightArm);

    // Legs - Use Pivots
    const legGeo = new THREE.BoxGeometry(0.25, 0.8, 0.25);
    legGeo.translate(0, -0.4, 0); // Shift geometry down so origin is at hip

    const leftLegPivot = new THREE.Group();
    leftLegPivot.position.set(-0.15, 0.7, 0);
    playerGroup.add(leftLegPivot);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLegPivot.add(leftLeg);

    const rightLegPivot = new THREE.Group();
    rightLegPivot.position.set(0.15, 0.7, 0);
    playerGroup.add(rightLegPivot);
    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLegPivot.add(rightLeg);

    // Weapons
    if (weapon && weapon !== 'none') {
        const weaponMesh = createWeapon(weapon);
        if (weaponMesh) {
            rightArmPivot.add(weaponMesh);
            // Raise arm to aiming position
            rightArmPivot.rotation.x = -Math.PI / 2;
        }
    }

    // Cast shadows
    playerGroup.traverse(obj => {
        if (obj.isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });

    return {
        mesh: playerGroup,
        leftArmPivot,
        rightArmPivot,
        leftLegPivot,
        rightLegPivot
    };
}

function buildMouthMesh(style) {
    const s = (style || 'serious').toLowerCase();
    const matBase = new THREE.MeshStandardMaterial({ color: 0x2b1b10, roughness: 0.6, metalness: 0 });
    let mesh = null;

    if (s === 'smile') {
        const group = new THREE.Group();
        const segMat = matBase.clone();
        const seg1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.02), segMat);
        const seg2 = seg1.clone();
        const seg3 = seg1.clone();
        seg1.position.set(-0.1, -0.15, 0.26);
        seg1.rotation.z = -0.2;
        seg2.position.set(0, -0.16, 0.26);
        seg3.position.set(0.1, -0.15, 0.26);
        seg3.rotation.z = 0.2;
        group.add(seg1, seg2, seg3);
        mesh = group;
    } else if (s === 'angry') {
        const mat = new THREE.MeshStandardMaterial({ color: 0x5a0c0c, roughness: 0.4 });
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.02), mat);
        mesh.position.set(0, -0.16, 0.26);
        mesh.rotation.z = -0.18;
    } else if (s === 'surprised') {
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 20), matBase);
        mesh.position.set(0, -0.14, 0.26);
        mesh.rotation.x = Math.PI / 2;
    } else if (s === 'none') {
        return null;
    } else {
        // Serious (default)
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.02), matBase);
        mesh.position.set(0, -0.16, 0.26);
    }
    return mesh;
}

function createWeapon(type) {
    const t = type.toLowerCase();
    
    // Pistol (Glock-style)
    if (t === 'pistol') {
        const pistol = new THREE.Group();
        const pSlide = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.35), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8, roughness: 0.3 }));
        pSlide.position.set(0, -0.28, 0.2);
        const pBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.15), new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.2 }));
        pBarrel.position.set(0, -0.28, 0.4);
        const pHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.12), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        pHandle.position.set(0, -0.42, 0.15);
        const pTrigger = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 0.03), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        pTrigger.position.set(0, -0.35, 0.18);
        pistol.add(pSlide, pBarrel, pHandle, pTrigger);
        return pistol;
    }

    // Rifle (AR-15 style)
    if (t === 'rifle' || t === 'smg' || t === 'shotgun' || t === 'dmr') {
        const rifle = new THREE.Group();
        const rBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.9), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.8, roughness: 0.3 }));
        rBarrel.position.set(0, -0.28, 0.45);
        const rBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.4), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        rBody.position.set(0, -0.3, 0.2);
        const rHandle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.12), new THREE.MeshStandardMaterial({ color: 0x2c2c2c }));
        rHandle.position.set(0, -0.44, 0.15);
        const rStock = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.25), new THREE.MeshStandardMaterial({ color: 0x3a3a3a }));
        rStock.position.set(0, -0.28, -0.1);
        const rMag = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.1), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
        rMag.position.set(0, -0.5, 0.2);
        rifle.add(rBarrel, rBody, rHandle, rStock, rMag);

        // Variations
        if (t === 'smg') {
            rifle.scale.set(0.8, 0.8, 0.8);
            rBody.material.color.setHex(0x556b8f);
        } else if (t === 'shotgun') {
            rifle.scale.set(1.1, 1.0, 0.8);
            rBody.material.color.setHex(0x8b5a2b);
        } else if (t === 'dmr') {
            rifle.scale.set(0.95, 0.95, 1.0);
            rBody.material.color.setHex(0x2e8b57);
        }

        return rifle;
    }

    // Sniper (AWP-style)
    if (t === 'sniper') {
        const sniper = new THREE.Group();
        const sBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 1.3), new THREE.MeshStandardMaterial({ color: 0x1a5c1a, metalness: 0.6, roughness: 0.4 }));
        sBarrel.position.set(0, -0.28, 0.65);
        const sBody = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.5), new THREE.MeshStandardMaterial({ color: 0x2d5016 }));
        sBody.position.set(0, -0.3, 0.25);
        const sScope = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.35, 8), new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.9, roughness: 0.1 }));
        sScope.rotation.z = Math.PI / 2;
        sScope.position.set(0, -0.18, 0.4);
        const sStock = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.3), new THREE.MeshStandardMaterial({ color: 0x3a2a1a }));
        sStock.position.set(0, -0.28, -0.05);
        sniper.add(sBarrel, sBody, sScope, sStock);
        return sniper;
    }

    return null;
}
