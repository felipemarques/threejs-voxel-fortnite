import * as THREE from 'three';

export function createPlateauElement(radius = 10, height = 8) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x7f7f7f, roughness: 1 });
  const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.05, height, 16, 1), mat);
  cyl.position.set(0, height / 2, 0);
  cyl.castShadow = true;
  cyl.receiveShadow = true;
  g.add(cyl);

  const rampLength = radius * 1.4;
  const rampHeight = height;
  const rampWidth = radius * 0.8;
  const rampGeo = new THREE.BoxGeometry(rampWidth, rampHeight, rampLength);
  const ramp = new THREE.Mesh(rampGeo, new THREE.MeshStandardMaterial({ color: 0x8e8e8e, roughness: 1 }));
  ramp.castShadow = true;
  ramp.receiveShadow = true;
  const angle = Math.atan(rampHeight / rampLength);
  ramp.rotation.x = -angle;
  ramp.position.set(0, rampHeight / 2, radius);
  ramp.userData = { type: 'house' };
  g.add(ramp);

  const railGeo = new THREE.BoxGeometry(rampWidth, 0.2, rampLength);
  const rail = new THREE.Mesh(railGeo, new THREE.MeshStandardMaterial({ color: 0x6c6c6c }));
  rail.position.set(0, rampHeight, radius);
  rail.rotation.x = ramp.rotation.x;
  rail.castShadow = true;
  g.add(rail);

  return g;
}
