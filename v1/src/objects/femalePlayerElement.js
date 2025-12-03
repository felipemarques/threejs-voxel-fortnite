import * as THREE from 'three';

/**
 * Creates a female player character mesh for the object viewer
 * @param {Object} options - Customization options
 * @param {number} options.shirtColor - Hex color for shirt (default 0xE91E63 - pink)
 * @param {number} options.hairColor - Hex color for hair (default 0x8B4513 - brown)
 * @param {string} options.hairStyle - Hair style: 'long', 'ponytail', 'short', 'bun'
 * @param {string} options.mouthStyle - Mouth style: 'serious', 'smile', 'angry', 'surprised', 'none'
 * @param {boolean} options.showEarrings - Whether to show earrings
 * @param {boolean} options.showGlasses - Whether to show glasses
 * @param {string} options.weapon - Weapon to equip: 'none', 'pistol', 'rifle', 'sniper', 'smg', 'shotgun', 'dmr'
 * @returns {THREE.Group} Player group with mesh and animation pivots
 */
export function createFemalePlayer(options = {}) {
    const {
        shirtColor = 0xE91E63, // Pink
        hairColor = 0x8B4513, // Brown
        hairStyle = 'long',
        mouthStyle = 'smile',
        showEarrings = true,
        showGlasses = false,
        weapon = 'none'
    } = options;

    const playerGroup = new THREE.Group();

    // Materials
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xffccaa }); // Skin
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x4A148C }); // Purple pants
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor });
    
    // Head (slightly smaller and more refined)
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), skinMat);
    head.position.y = 1.75;
    playerGroup.add(head);
    
    // Hair based on style
    createHairStyle(head, hairStyle, hairMat);
    
    // Earrings
    if (showEarrings) {
        const earringMat = new THREE.MeshStandardMaterial({ 
            color: 0xFFD700, 
            metalness: 0.9, 
            roughness: 0.1 
        });
        
        // Left earring
        const leftEarring = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 8, 8), 
            earringMat
        );
        leftEarring.position.set(-0.25, 0.05, 0);
        head.add(leftEarring);
        
        // Right earring
        const rightEarring = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 8, 8), 
            earringMat
        );
        rightEarring.position.set(0.25, 0.05, 0);
        head.add(rightEarring);
    }
    
    // Sunglasses
    if (showGlasses) {
        const glassesMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
        const glassLensMat = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a, 
            transparent: true, 
            opacity: 0.7,
            metalness: 0.8,
            roughness: 0.2
        });
        
        // Left lens
        const leftLens = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.11, 0.02), glassLensMat);
        leftLens.position.set(-0.11, 0.05, 0.24);
        head.add(leftLens);
        
        // Right lens
        const rightLens = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.11, 0.02), glassLensMat);
        rightLens.position.set(0.11, 0.05, 0.24);
        head.add(rightLens);
        
        // Bridge
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.02), glassesMat);
        bridge.position.set(0, 0.05, 0.24);
        head.add(bridge);
        
        // Arms
        const glassLeftArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.28), glassesMat);
        glassLeftArm.position.set(-0.19, 0.05, 0.08);
        head.add(glassLeftArm);
        
        const glassRightArm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.28), glassesMat);
        glassRightArm.position.set(0.19, 0.05, 0.08);
        head.add(glassRightArm);
    }

    // Eyes (more prominent)
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), eyeMat);
    leftEye.position.set(-0.1, 0.08, 0.23);
    head.add(leftEye);
    
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), eyeMat);
    rightEye.position.set(0.1, 0.08, 0.23);
    head.add(rightEye);

    // Mouth
    const mouth = buildMouthMesh(mouthStyle);
    if (mouth) head.add(mouth);

    // Body (slightly narrower waist)
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.28), shirtMat);
    torso.position.y = 1.25;
    playerGroup.add(torso);
    
    const waist = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.3, 0.26), shirtMat);
    waist.position.y = 0.95;
    playerGroup.add(waist);

    // Arms - Use Pivots (slightly thinner)
    const armGeo = new THREE.BoxGeometry(0.18, 0.75, 0.18);
    armGeo.translate(0, -0.28, 0);

    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(-0.38, 1.4, 0);
    playerGroup.add(leftArmPivot);
    const leftArm = new THREE.Mesh(armGeo, skinMat);
    leftArmPivot.add(leftArm);

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(0.38, 1.4, 0);
    playerGroup.add(rightArmPivot);
    const rightArm = new THREE.Mesh(armGeo, skinMat);
    rightArmPivot.add(rightArm);

    // Legs - Use Pivots
    const legGeo = new THREE.BoxGeometry(0.22, 0.75, 0.22);
    legGeo.translate(0, -0.38, 0);

    const leftLegPivot = new THREE.Group();
    leftLegPivot.position.set(-0.13, 0.75, 0);
    playerGroup.add(leftLegPivot);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLegPivot.add(leftLeg);

    const rightLegPivot = new THREE.Group();
    rightLegPivot.position.set(0.13, 0.75, 0);
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

function createHairStyle(head, style, hairMat) {
    const s = (style || 'long').toLowerCase();
    
    if (s === 'long') {
        // Long flowing hair
        const hairTop = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.48), hairMat);
        hairTop.position.set(0, 0.28, 0);
        head.add(hairTop);
        
        // Back hair (long)
        const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.6, 0.12), hairMat);
        hairBack.position.set(0, -0.05, -0.28);
        head.add(hairBack);
        
        // Side hair (left)
        const hairLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.35), hairMat);
        hairLeft.position.set(-0.28, -0.02, 0);
        head.add(hairLeft);
        
        // Side hair (right)
        const hairRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.35), hairMat);
        hairRight.position.set(0.28, -0.02, 0);
        head.add(hairRight);
        
    } else if (s === 'ponytail') {
        // Top hair
        const hairTop = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.48), hairMat);
        hairTop.position.set(0, 0.28, 0);
        head.add(hairTop);
        
        // Ponytail base
        const ponytailBase = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.2), hairMat);
        ponytailBase.position.set(0, 0.15, -0.28);
        head.add(ponytailBase);
        
        // Ponytail tail
        const ponytail = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.5, 0.15), hairMat);
        ponytail.position.set(0, -0.15, -0.35);
        ponytail.rotation.x = 0.3;
        head.add(ponytail);
        
    } else if (s === 'bun') {
        // Top hair
        const hairTop = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.48), hairMat);
        hairTop.position.set(0, 0.28, 0);
        head.add(hairTop);
        
        // Bun
        const bun = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), hairMat);
        bun.position.set(0, 0.32, -0.15);
        head.add(bun);
        
        // Side coverage
        const hairLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.35), hairMat);
        hairLeft.position.set(-0.28, 0.05, 0);
        head.add(hairLeft);
        
        const hairRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, 0.35), hairMat);
        hairRight.position.set(0.28, 0.05, 0);
        head.add(hairRight);
        
    } else if (s === 'short') {
        // Short pixie cut
        const hairTop = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.48), hairMat);
        hairTop.position.set(0, 0.28, 0);
        head.add(hairTop);
        
        // Short back
        const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.25, 0.12), hairMat);
        hairBack.position.set(0, 0.1, -0.28);
        head.add(hairBack);
        
        // Short sides
        const hairLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.25, 0.35), hairMat);
        hairLeft.position.set(-0.28, 0.1, 0);
        head.add(hairLeft);
        
        const hairRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.25, 0.35), hairMat);
        hairRight.position.set(0.28, 0.1, 0);
        head.add(hairRight);
    }
}

function buildMouthMesh(style) {
    const s = (style || 'smile').toLowerCase();
    const matBase = new THREE.MeshStandardMaterial({ color: 0xE91E63, roughness: 0.4, metalness: 0 }); // Pink lips
    let mesh = null;

    if (s === 'smile') {
        const group = new THREE.Group();
        const segMat = matBase.clone();
        const seg1 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.04, 0.02), segMat);
        const seg2 = seg1.clone();
        const seg3 = seg1.clone();
        seg1.position.set(-0.09, -0.14, 0.23);
        seg1.rotation.z = -0.25;
        seg2.position.set(0, -0.15, 0.23);
        seg3.position.set(0.09, -0.14, 0.23);
        seg3.rotation.z = 0.25;
        group.add(seg1, seg2, seg3);
        mesh = group;
    } else if (s === 'angry') {
        const mat = new THREE.MeshStandardMaterial({ color: 0xC2185B, roughness: 0.4 });
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.02), mat);
        mesh.position.set(0, -0.15, 0.23);
        mesh.rotation.z = -0.15;
    } else if (s === 'surprised') {
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 16), matBase);
        mesh.position.set(0, -0.13, 0.23);
        mesh.rotation.x = Math.PI / 2;
    } else if (s === 'none') {
        return null;
    } else {
        // Serious
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.02), matBase);
        mesh.position.set(0, -0.15, 0.23);
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
