import * as THREE from 'three';

export function createAlpineTree() {
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

  const leavesMat = new THREE.MeshStandardMaterial({ color: 0x1a5e28, roughness: 0.9 });
  const coneCount = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < coneCount; i++) {
    const size = 1.8 - i * 0.4 + Math.random() * 0.2;
    const geo = new THREE.ConeGeometry(size, 1.2 + Math.random() * 0.6, 8);
    const mesh = new THREE.Mesh(geo, leavesMat);
    mesh.position.y = trunk.position.y + 0.6 + i * 0.9;
    mesh.position.x = (Math.random() - 0.5) * 0.2;
    mesh.position.z = (Math.random() - 0.5) * 0.2;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    treeGroup.add(mesh);
  }

  const topGeo = new THREE.SphereGeometry(0.25, 6, 6);
  const top = new THREE.Mesh(topGeo, leavesMat);
  top.position.y = trunk.position.y + coneCount * 0.9 + 0.3;
  treeGroup.add(top);

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
