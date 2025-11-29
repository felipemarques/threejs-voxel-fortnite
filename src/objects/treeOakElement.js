import * as THREE from 'three';

export function createOakTree() {
  const treeGroup = new THREE.Group();

  const scale = 0.8 + Math.random() * 0.4;
  treeGroup.scale.set(scale, scale, scale);

  const trunkHeight = 3.5 + Math.random() * 1.5;
  const trunkGeo = new THREE.CylinderGeometry(0.45, 0.6, trunkHeight, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b3f26, roughness: 1 });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = trunkHeight / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  treeGroup.add(trunk);

  if (Math.random() > 0.7) {
    const knotGeo = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const knotMat = new THREE.MeshStandardMaterial({ color: 0x5a3320 });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(0.25, trunk.position.y + 0.6, 0.45);
    knot.rotation.z = 0.4;
    treeGroup.add(knot);
  }

  const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2e8b57, roughness: 0.9 });
  const canopyCount = 6 + Math.floor(Math.random() * 4);
  for (let i = 0; i < canopyCount; i++) {
    const radius = 1.2 + Math.random() * 1.6;
    const geo = new THREE.SphereGeometry(radius, 8, 6);
    const mesh = new THREE.Mesh(geo, leavesMat);
    mesh.position.y = trunk.position.y + 0.8 + Math.random() * 1.6;
    mesh.position.x = (Math.random() - 0.5) * 1.5;
    mesh.position.z = (Math.random() - 0.5) * 1.5;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    treeGroup.add(mesh);
  }

  if (Math.random() > 0.3) {
    const grassGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, side: THREE.DoubleSide });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = 0.01;
    grass.position.x = (Math.random() - 0.5) * 0.5;
    grass.position.z = (Math.random() - 0.5) * 0.5;
    grass.receiveShadow = false;
    treeGroup.add(grass);
  }

  return treeGroup;
}
