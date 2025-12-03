import * as THREE from 'three';

export function createSmallBuildingElement() {
  const g = new THREE.Group();
  g.rotation.y = Math.random() * Math.PI * 2;

  const wallMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d });
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7 });
  const width = 8;
  const depth = 8;
  const height = 6;
  const thick = 0.35;
  const doorGap = 2.2;
  const halfW = width / 2;
  const halfD = depth / 2;

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(width, height, thick), wallMat);
  backWall.position.set(0, height / 2, -halfD);
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(thick, height, depth), wallMat);
  leftWall.position.set(-halfW, height / 2, 0);
  const rightWall = leftWall.clone();
  rightWall.position.x = halfW;

  const frontLeft = new THREE.Mesh(new THREE.BoxGeometry((width - doorGap) / 2, height, thick), wallMat);
  frontLeft.position.set(-(doorGap / 2 + (width - doorGap) / 4), height / 2, halfD);
  const frontRight = frontLeft.clone();
  frontRight.position.x = (doorGap / 2 + (width - doorGap) / 4);

  [backWall, leftWall, rightWall, frontLeft, frontRight].forEach(w => {
    w.castShadow = true;
    w.receiveShadow = true;
    g.add(w);
  });

  const floor1 = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.3, depth - 0.4), floorMat);
  floor1.position.y = 0.15;
  floor1.receiveShadow = true;
  g.add(floor1);

  const floor2 = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.3, depth - 0.4), floorMat);
  floor2.position.y = 3.4;
  floor2.receiveShadow = true;
  g.add(floor2);

  const rampHeight = floor2.position.y;
  const rampLength = 10;
  const rampGeo = new THREE.BoxGeometry(3, rampHeight, rampLength);
  const ramp = new THREE.Mesh(rampGeo, floorMat);
  ramp.position.set(0, rampHeight / 2, halfD + rampLength / 2);
  ramp.rotation.x = -Math.atan(rampHeight / rampLength);
  ramp.castShadow = true;
  ramp.receiveShadow = true;
  g.add(ramp);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 0.4, depth + 0.4), new THREE.MeshStandardMaterial({ color: 0x95a5a6 }));
  roof.position.y = height + 0.2;
  roof.castShadow = true;
  g.add(roof);

  return g;
}
