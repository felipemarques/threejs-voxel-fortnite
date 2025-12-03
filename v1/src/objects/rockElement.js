import * as THREE from 'three';

export function createRockElement(x, z, baseY = 0) {
  const baseSize = 0.6 + Math.random() * 1.4;
  const geo = new THREE.IcosahedronGeometry(baseSize, 1);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i);
    const vy = pos.getY(i);
    const vz = pos.getZ(i);
    const jitter = (Math.random() - 0.5) * baseSize * 0.15;
    pos.setXYZ(i, vx + jitter, vy + jitter * 0.5, vz + (Math.random() - 0.5) * baseSize * 0.15);
  }
  geo.computeVertexNormals();

  const rockMat = new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 1 });
  const rock = new THREE.Mesh(geo, rockMat);
  rock.position.set(x, baseY + baseSize / 2, z);
  rock.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5);
  rock.castShadow = true;
  rock.receiveShadow = true;

  if (Math.random() > 0.6) {
    const moss = new THREE.Mesh(new THREE.CircleGeometry(baseSize * 0.4, 6), new THREE.MeshStandardMaterial({ color: 0x2ecc71 }));
    moss.rotation.x = -Math.PI / 2;
    moss.position.y = 0.01;
    rock.add(moss);
  }
  return rock;
}

export function createRockPillarElement(x, z, baseY = 0) {
  const height = 2.5 + Math.random() * 2.5;
  const radiusTop = 0.4 + Math.random() * 0.3;
  const radiusBottom = radiusTop + 0.5;
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 8, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0x6d6d6d, roughness: 1 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, baseY + height / 2, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function createFlatBoulderElement(x, z, baseY = 0) {
  const w = 2 + Math.random() * 2;
  const h = 0.8 + Math.random() * 0.6;
  const d = 1.5 + Math.random() * 1;
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = new THREE.MeshStandardMaterial({ color: 0x8b8b8b, roughness: 1 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, baseY + h / 2, z);
  mesh.rotation.y = Math.random() * Math.PI;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function createCrystalShardElement(x, z, baseY = 0) {
  const height = 2 + Math.random() * 2;
  const geo = new THREE.ConeGeometry(0.6 + Math.random() * 0.4, height, 6);
  const mat = new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.7, metalness: 0.2, emissive: 0x3d2b64, emissiveIntensity: 0.25 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, baseY + height / 2, z);
  mesh.rotation.y = Math.random() * Math.PI;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function createStackedRockElement(x, z, baseY = 0) {
  const group = new THREE.Group();
  const base = createRockElement(0, 0, 0);
  group.add(base);
  const mid = createRockElement(0, 0);
  mid.scale.set(0.6, 0.6, 0.6);
  mid.position.set(0.3, mid.position.y + 0.9, -0.2);
  group.add(mid);
  const top = createRockElement(0, 0);
  top.scale.set(0.4, 0.4, 0.4);
  top.position.set(-0.2, top.position.y + 1.5, 0.3);
  group.add(top);
  group.position.set(x, baseY, z);
  group.traverse(o => { o.castShadow = true; o.receiveShadow = true; });
  return group;
}

export function createBasaltClusterElement(x, z, baseY = 0) {
  const group = new THREE.Group();
  const columns = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < columns; i++) {
    const h = 1 + Math.random() * 2;
    const geo = new THREE.CylinderGeometry(0.4, 0.4, h, 6);
    const mat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 1 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set((Math.random() - 0.5) * 2, baseY + h / 2, (Math.random() - 0.5) * 2);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  }
  group.position.set(x, 0, z);
  return group;
}
