import * as THREE from "three";

export function createVehicleElement(type = "car", color = null) {
  const vehicleGroup = new THREE.Group();
  vehicleGroup.rotation.y = Math.random() * Math.PI * 2; // Random rotation
  const wheelRadius = type === "truck" ? 0.45 : 0.35;
  const wheelCenterY = type === "truck" ? 0.4 : 0.3;
  vehicleGroup.userData = vehicleGroup.userData || {};
  vehicleGroup.userData = {
    vehicleType: type,
    wheelRadius,
    wheelCenterY,
    groundClearance: wheelRadius - wheelCenterY,
    wheels: [],
  };

  if (type === "car") {
    // Car body with voxel-ish layers
    const palette = [
      0x1976d2, 0xf2f2f2, 0x111111, 0x8b1a1a, 0xe53935, 0xf1c40f,
    ];
    const bodyColor = color !== null ? color : palette[Math.floor(Math.random() * palette.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      metalness: 0.45,
      roughness: 0.38,
    });
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      metalness: 0.2,
      roughness: 0.6,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1f2a30,
      roughness: 0.8,
    });

    const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.9, 4.2), bodyMat);
    body.position.y = 0.85;
    body.castShadow = true;
    vehicleGroup.add(body);

    // Side stripes
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(2.25, 0.15, 4.25),
      stripeMat
    );
    stripe.position.set(0, 0.9, 0);
    vehicleGroup.add(stripe);

    // Cabin block
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.9, 2.1), darkMat);
    cabin.position.set(0, 1.55, -0.2);
    cabin.castShadow = true;
    vehicleGroup.add(cabin);

    // Windows (dark glass)
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.7,
      metalness: 0.2,
      roughness: 0.1,
    });
    const frontWindow = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.6, 0.08),
      glassMat
    );
    frontWindow.position.set(0, 1.55, 1.0);
    vehicleGroup.add(frontWindow);

    const backWindow = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.6, 0.08),
      glassMat
    );
    backWindow.position.set(0, 1.55, -1.5);
    vehicleGroup.add(backWindow);

    // Bumpers
    const bumper = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 0.25, 0.35),
      darkMat
    );
    bumper.position.set(0, 0.55, 2.1);
    vehicleGroup.add(bumper);
    const bumperRear = bumper.clone();
    bumperRear.position.z = -2.1;
    vehicleGroup.add(bumperRear);

    // Wheels
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d0d,
      roughness: 0.9,
    });
    const rimPalette = [0xdfe4ea, 0x0c0c0c, 0xffffff];
    const wheelPositions = [
      [-0.95, wheelCenterY, 1.35],
      [0.95, wheelCenterY, 1.35],
      [-0.95, wheelCenterY, -1.35],
      [0.95, wheelCenterY, -1.35],
    ];

    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(
          wheelRadius,
          wheelRadius,
          0.35,
          14,
          1,
          false
        ),
        tireMat
      );
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(...pos);
      wheel.castShadow = true;
      // Add simple voxel-ish tread
      const tread = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.12, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x111 })
      );
      tread.position.set(0, 0, 0);
      tread.rotation.y = Math.PI / 8;
      wheel.add(tread);
      // Rim
      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(
          wheelRadius * 0.55,
          wheelRadius * 0.55,
          0.18,
          12
        ),
        new THREE.MeshStandardMaterial({
          color: rimPalette[Math.floor(Math.random() * rimPalette.length)],
          roughness: 0.45,
          metalness: 0.65,
        })
      );
      rim.rotation.z = Math.PI / 2;
      rim.position.set(0, 0, 0);
      wheel.add(rim);
      // Stripe marker to make rotation readable
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, wheelRadius * 1.2, 0.02),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0x888888,
          emissiveIntensity: 0.6,
        })
      );
      stripe.position.set(0, 0, 0.18);
      wheel.add(stripe);
      vehicleGroup.add(wheel);
      vehicleGroup.userData.wheels.push(wheel);
    });

    // Headlights and tail lights
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffffaa,
      emissive: 0xfff59d,
      emissiveIntensity: 0.8,
    });
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0xff5252,
      emissive: 0xff5252,
      emissiveIntensity: 0.6,
    });
    const headlightL = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.2, 0.1),
      headMat
    );
    headlightL.position.set(-0.75, 0.8, 2.15);
    vehicleGroup.add(headlightL);

    const headlightR = headlightL.clone();
    headlightR.position.x = 0.75;
    vehicleGroup.add(headlightR);

    const taillightL = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.2, 0.1),
      tailMat
    );
    taillightL.position.set(-0.75, 0.8, -2.15);
    vehicleGroup.add(taillightL);
    const taillightR = taillightL.clone();
    taillightR.position.x = 0.75;
    vehicleGroup.add(taillightR);
  } else if (type === "truck") {
    // Truck body (larger, voxel-ish)
    const palette = [
      0x1e3a5f, 0xf2f2f2, 0x111111, 0x8b1a1a, 0xe53935, 0xf1c40f,
    ];
    const bodyColor = color !== null ? color : palette[Math.floor(Math.random() * palette.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      metalness: 0.55,
      roughness: 0.42,
    });
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.7,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1f2a30,
      roughness: 0.8,
    });

    const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.1, 5.2), bodyMat);
    body.position.y = 1.05;
    body.castShadow = true;
    vehicleGroup.add(body);

    // Side stripe
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(2.65, 0.18, 5.25),
      stripeMat
    );
    stripe.position.set(0, 1.1, 0);
    vehicleGroup.add(stripe);

    // Truck cabin
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.3, 2.2), darkMat);
    cabin.position.set(0, 2.05, 1.2);
    cabin.castShadow = true;
    vehicleGroup.add(cabin);

    // Cargo bed
    const cargoBed = new THREE.Mesh(
      new THREE.BoxGeometry(2.35, 0.85, 2.6),
      new THREE.MeshStandardMaterial({ color: 0x7f8c8d })
    );
    cargoBed.position.set(0, 1.55, -1.55);
    cargoBed.castShadow = true;
    vehicleGroup.add(cargoBed);

    // Windows
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      transparent: true,
      opacity: 0.7,
    });
    const frontWindow = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.7, 0.08),
      glassMat
    );
    frontWindow.position.set(0, 2.05, 2.05);
    vehicleGroup.add(frontWindow);
    const sideWindowL = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.6, 1.2),
      glassMat
    );
    sideWindowL.position.set(-1.15, 2.05, 1.2);
    vehicleGroup.add(sideWindowL);
    const sideWindowR = sideWindowL.clone();
    sideWindowR.position.x = 1.15;
    vehicleGroup.add(sideWindowR);

    // Wheels (bigger)
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0d0d0d });
    const rimPalette = [0xdfe4ea, 0x0c0c0c, 0xffffff];
    const wheelPositions = [
      [-1.1, 0.4, 1.8],
      [1.1, 0.4, 1.8],
      [-1.1, 0.4, -1.5],
      [1.1, 0.4, -1.5],
      [-1.1, 0.4, -2.2],
      [1.1, 0.4, -2.2],
    ];

    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(
          wheelRadius,
          wheelRadius,
          0.45,
          14,
          1,
          false
        ),
        tireMat
      );
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(...pos);
      wheel.castShadow = true;
      const tread = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.14, 0.16),
        new THREE.MeshStandardMaterial({ color: 0x111 })
      );
      tread.rotation.y = Math.PI / 8;
      wheel.add(tread);
      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(
          wheelRadius * 0.55,
          wheelRadius * 0.55,
          0.2,
          12
        ),
        new THREE.MeshStandardMaterial({
          color: rimPalette[Math.floor(Math.random() * rimPalette.length)],
          roughness: 0.45,
          metalness: 0.65,
        })
      );
      rim.rotation.z = Math.PI / 2;
      rim.position.set(0, 0, 0);
      wheel.add(rim);
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, wheelRadius * 1.3, 0.025),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0x888888,
          emissiveIntensity: 0.6,
        })
      );
      stripe.position.set(0, 0, 0.2);
      wheel.add(stripe);
      vehicleGroup.add(wheel);
      vehicleGroup.userData.wheels.push(wheel);
    });

    // Headlights
    const lightMat = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      emissive: 0xffff00,
      emissiveIntensity: 0.6,
    });
    const tailMat = new THREE.MeshStandardMaterial({
      color: 0xff5252,
      emissive: 0xff5252,
      emissiveIntensity: 0.5,
    });
    const headlightL = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.22, 0.12),
      lightMat
    );
    headlightL.position.set(-0.95, 1.85, 2.35);
    vehicleGroup.add(headlightL);

    const headlightR = headlightL.clone();
    headlightR.position.x = 0.95;
    vehicleGroup.add(headlightR);

    const tailL = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.22, 0.12),
      tailMat
    );
    tailL.position.set(-0.95, 1.2, -2.55);
    vehicleGroup.add(tailL);
    const tailR = tailL.clone();
    tailR.position.x = 0.95;
    vehicleGroup.add(tailR);
  }

  return vehicleGroup;
}
