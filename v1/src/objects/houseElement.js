import * as THREE from 'three';

export function createHouseElement(scale = 1, wallColor = 0xbdc3c7, roofColor = 0x7f8c8d) {
  const houseGroup = new THREE.Group();

  const wallMat = new THREE.MeshStandardMaterial({ color: wallColor, roughness: 0.9 });
  const roofMat = new THREE.MeshStandardMaterial({ color: roofColor, roughness: 0.7, metalness: 0.1 });

  const walls = [
    { x: 0, y: 2, z: -3, w: 6, h: 4, d: 0.4 },
    { x: 0, y: 2, z: 3, w: 6, h: 4, d: 0.4 },
    { x: -3, y: 2, z: 0, w: 0.4, h: 4, d: 6 },
    { x: 3, y: 2, z: 0, w: 0.4, h: 4, d: 6 }
  ];

  walls.forEach(w => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w.w, w.h, w.d), wallMat);
    mesh.position.set(w.x, w.y, w.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    houseGroup.add(mesh);
  });

  const roof = new THREE.Mesh(new THREE.ConeGeometry(5, 2, 4), roofMat);
  roof.position.y = 5;
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  houseGroup.add(roof);

  const doorMat = new THREE.MeshStandardMaterial({ color: 0x4d2b1b });
  const door = new THREE.Mesh(new THREE.BoxGeometry(1, 2.2, 0.1), doorMat);
  door.position.set(0, 1.1, 3.26);
  houseGroup.add(door);

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
