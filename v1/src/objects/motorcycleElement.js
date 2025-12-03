import * as THREE from 'three';

/**
 * Creates a voxel-style motorcycle
 * @returns {THREE.Group} Motorcycle group with seat position metadata
 */
export function createMotorcycle() {
    const motoGroup = new THREE.Group();
    
    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.3, metalness: 0.8 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x212121, roughness: 0.8 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xecf0f1, roughness: 0.1, metalness: 0.9 });
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.7 });
    
    // Main frame (body)
    const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.3, 1.8),
        bodyMat
    );
    frame.position.y = 0.8;
    frame.castShadow = true;
    motoGroup.add(frame);
    
    // Engine block
    const engine = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.7),
        chromeMat
    );
    engine.position.set(0, 0.6, 0.2);
    engine.castShadow = true;
    motoGroup.add(engine);
    
    // Front wheel
    const frontWheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 16);
    const frontWheel = new THREE.Mesh(frontWheelGeometry, wheelMat);
    frontWheel.rotation.z = Math.PI / 2;
    frontWheel.position.set(0, 0.5, 1.2);
    frontWheel.castShadow = true;
    motoGroup.add(frontWheel);
    
    // Rear wheel (slightly larger)
    const rearWheelGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.25, 16);
    const rearWheel = new THREE.Mesh(rearWheelGeometry, wheelMat);
    rearWheel.rotation.z = Math.PI / 2;
    rearWheel.position.set(0, 0.6, -0.8);
    rearWheel.castShadow = true;
    motoGroup.add(rearWheel);
    
    // Fork (front suspension)
    const fork = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.8, 0.15),
        chromeMat
    );
    fork.position.set(0, 0.9, 1.2);
    fork.rotation.x = -0.3;
    fork.castShadow = true;
    motoGroup.add(fork);
    
    // Handlebars
    const handlebar = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.1, 0.1),
        chromeMat
    );
    handlebar.position.set(0, 1.3, 1.1);
    motoGroup.add(handlebar);
    
    // Handlebar grips
    [-0.45, 0.45].forEach(x => {
        const grip = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 0.2, 8),
            bodyMat
        );
        grip.rotation.z = Math.PI / 2;
        grip.position.set(x, 1.3, 1.1);
        motoGroup.add(grip);
    });
    
    // Seat
    const seat = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.15, 0.8),
        seatMat
    );
    seat.position.set(0, 1.1, -0.2);
    seat.castShadow = true;
    motoGroup.add(seat);
    
    // Fuel tank
    const tank = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.4, 0.6),
        bodyMat
    );
    tank.position.set(0, 1.0, 0.5);
    tank.castShadow = true;
    motoGroup.add(tank);
    
    // Headlight
    const headlight = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 8, 8),
        new THREE.MeshStandardMaterial({ 
            color: 0xffffcc, 
            emissive: 0xffffcc, 
            emissiveIntensity: 0.3 
        })
    );
    headlight.position.set(0, 1.1, 1.3);
    motoGroup.add(headlight);
    
    // Taillight
    const taillight = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.1, 0.05),
        new THREE.MeshStandardMaterial({ 
            color: 0xff0000, 
            emissive: 0xff0000, 
            emissiveIntensity: 0.4 
        })
    );
    taillight.position.set(0, 1.0, -1.1);
    motoGroup.add(taillight);
    
    // Exhaust pipe
    const exhaust = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.1, 0.8, 8),
        chromeMat
    );
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(0.3, 0.5, -0.3);
    exhaust.castShadow = true;
    motoGroup.add(exhaust);
    
    // Store seat position for player mounting
    motoGroup.userData = {
        seatPosition: new THREE.Vector3(0, 1.2, -0.2),
        vehicleType: 'motorcycle',
        mountable: true
    };
    
    return motoGroup;
}
