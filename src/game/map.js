import * as THREE from "three";

export const MAP = {
  half: 48,
  crates: [],
  walls: [],
  extract: new THREE.Vector3(18, 0, -16),
  hangarDoor: new THREE.Vector3(26, 0, -23.2),
  ammo: new THREE.Vector3(-10, 0, 4),
  med: new THREE.Vector3(3.5, 0, 10),
};

export function inHangar(pos) {
  return pos.x > 18 && pos.x < 34 && pos.z < -23 && pos.z > -33;
}

export function inWarehouse(pos) {
  return pos.x > -30.4 && pos.x < -13.6 && pos.z > 21.4 && pos.z < 30.6;
}

export function inShed(pos) {
  return pos.x > 22.6 && pos.x < 31.4 && pos.z > 16.6 && pos.z < 25.4;
}

export function inLookout(pos) {
  return pos.x > -26.2 && pos.x < -21.4 && pos.z > -22.6 && pos.z < -17.8 && pos.y > 2.4;
}

export function inRadio(pos) {
  return pos.x > -3.6 && pos.x < 7.6 && pos.z > 29.6 && pos.z < 36.4;
}

export function inShop(pos) {
  return pos.x > -11.4 && pos.x < -0.6 && pos.z > -34.4 && pos.z < -25.6;
}

export function inHut(pos) {
  return pos.x > 23.6 && pos.x < 31.4 && pos.z > 29.6 && pos.z < 36.4;
}

export function inCistern(pos) {
  return pos.x > 31.6 && pos.x < 36.2 && pos.z > 30.4 && pos.z < 35.0 && pos.y > 3.1;
}

export function inMag(pos) {
  return pos.x > -35.8 && pos.x < -28.6 && pos.z > 5.2 && pos.z < 11.2;
}

export function inCrush(pos) {
  return pos.x > 33.4 && pos.x < 41.2 && pos.z > -10.4 && pos.z < -3.6;
}

export function inDock(pos) {
  return pos.x > 32.4 && pos.x < 38.8 && pos.z > 5.0 && pos.z < 11.4;
}

export function inAssay(pos) {
  return pos.x > -36.6 && pos.x < -30.0 && pos.z > -12.2 && pos.z < -5.4;
}

export function inWeigh(pos) {
  return pos.x > 6.2 && pos.x < 12.4 && pos.z > 18.6 && pos.z < 25.0;
}

export function inGen(pos) {
  return pos.x > -22.4 && pos.x < -14.6 && pos.z > -10.4 && pos.z < -3.6;
}

export function inComp(pos) {
  return pos.x > 13.2 && pos.x < 20.4 && pos.z > 8.0 && pos.z < 14.4;
}

export function inLube(pos) {
  return pos.x > -10.6 && pos.x < -3.2 && pos.z > -19.6 && pos.z < -13.0;
}

export function inWash(pos) {
  return pos.x > 4.6 && pos.x < 11.8 && pos.z > -30.8 && pos.z < -24.2;
}

export function inTire(pos) {
  return pos.x > 25.0 && pos.x < 31.9 && pos.z > -4.5 && pos.z < 2.1;
}

export function inPaint(pos) {
  return pos.x > -20.4 && pos.x < -13.2 && pos.z > 12.2 && pos.z < 18.8;
}

export function inParts(pos) {
  return pos.x > -9.1 && pos.x < -2.1 && pos.z > 4.5 && pos.z < 11.1;
}

export function inWeld(pos) {
  return pos.x > 1.7 && pos.x < 8.7 && pos.z > -20.9 && pos.z < -14.3;
}

export function inBatt(pos) {
  return pos.x > 13.1 && pos.x < 19.7 && pos.z > 25.0 && pos.z < 31.4;
}

export function inHoist(pos) {
  return pos.x > -34.2 && pos.x < -27.4 && pos.z > -31.6 && pos.z < -24.8;
}

export function inMill(pos) {
  return pos.x > 35.7 && pos.x < 42.6 && pos.z > 15.1 && pos.z < 21.7;
}

export function inKiln(pos) {
  return pos.x > 37.7 && pos.x < 44.5 && pos.z > 31.0 && pos.z < 37.6;
}

export function inSort(pos) {
  return pos.x > 17.6 && pos.x < 24.6 && pos.z > -41.4 && pos.z < -34.6;
}

export function inLab(pos) {
  return pos.x > -43.2 && pos.x < -36.2 && pos.z > 14.4 && pos.z < 21.2;
}

export function inPow(pos) {
  return pos.x > 38.05 && pos.x < 44.85 && pos.z > -22.45 && pos.z < -15.95;
}

export function inFuse(pos) {
  return pos.x > -45.05 && pos.x < -38.15 && pos.z > -5.25 && pos.z < 1.55;
}

export function inSkip(pos) {
  return pos.x > -25.7 && pos.x < -18.7 && pos.z > 36.55 && pos.z < 42.55;
}

export function inTip(pos) {
  return pos.x > 5.45 && pos.x < 11.75 && pos.z > 39.25 && pos.z < 44.85;
}

export function inAdit(pos) {
  return pos.x > -17.55 && pos.x < -10.45 && pos.z > -43.15 && pos.z < -29.35;
}

export function inSluice(pos) {
  const s = MAP.sluice;
  if (!s) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function onBelt(pos) {
  const b = MAP.belt;
  if (!b) return false;
  return Math.abs(pos.x - b.x) < b.hx && Math.abs(pos.z - b.z) < b.hz && pos.y > b.minY;
}

export function inInterior(pos) {
  return inHangar(pos) || inWarehouse(pos) || inShed(pos) || inRadio(pos) || inShop(pos) || inHut(pos) || inMag(pos) || inCrush(pos) || inDock(pos) || inAssay(pos) || inWeigh(pos) || inGen(pos) || inComp(pos) || inLube(pos) || inWash(pos) || inTire(pos) || inPaint(pos) || inParts(pos) || inWeld(pos) || inBatt(pos) || inHoist(pos) || inMill(pos) || inKiln(pos) || inSort(pos) || inLab(pos) || inPow(pos) || inFuse(pos) || inSkip(pos) || inTip(pos) || inAdit(pos);
}

export function floorY(x, z) {
  let y = 0;
  for (const p of MAP.platforms || []) {
    if (Math.abs(x - p.x) < p.sx * 0.5 && Math.abs(z - p.z) < p.sz * 0.5) y = Math.max(y, p.top);
  }
  return y;
}

function box(scene, x, y, z, sx, sy, sz, mat) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  scene.add(m);
  return m;
}

export function buildMap(scene) {
  const sand = new THREE.MeshLambertMaterial({ color: 0x6b5a3a });
  const rock = new THREE.MeshLambertMaterial({ color: 0x3d3a32 });
  const rust = new THREE.MeshLambertMaterial({ color: 0x6a4a2a });
  const steel = new THREE.MeshLambertMaterial({ color: 0x4a5250 });
  const night = new THREE.MeshLambertMaterial({ color: 0x1a2230 });
  const amber = new THREE.MeshLambertMaterial({ color: 0xc9a227 });
  const oil = new THREE.MeshLambertMaterial({ color: 0x2a2e28 });
  const concrete = new THREE.MeshLambertMaterial({ color: 0x4a4842 });
  const crateWood = new THREE.MeshLambertMaterial({ color: 0x5a4630 });

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), sand);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const hemi = new THREE.HemisphereLight(0xffc080, 0x203010, 0.55);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffd0a0, 0.9);
  sun.position.set(-20, 28, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = sun.shadow.camera.bottom = -50;
  sun.shadow.camera.right = sun.shadow.camera.top = 50;
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0x304050, 0.25));
  scene.fog = new THREE.FogExp2(0x2a2014, 0.012);
  scene.background = new THREE.Color(0x1c140c);
  MAP.sun = sun;
  MAP.hemi = hemi;
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xe8d8b0 })
  );
  moon.position.set(28, 42, -36);
  scene.add(moon);
  MAP.moon = moon;

  const starGeo = new THREE.BufferGeometry();
  const starN = 180;
  const starPos = new Float32Array(starN * 3);
  for (let i = 0; i < starN; i++) {
    const a = Math.random() * Math.PI * 2;
    const e = 0.15 + Math.random() * 0.7;
    starPos[i * 3] = Math.cos(a) * Math.cos(e) * 90;
    starPos[i * 3 + 1] = 18 + Math.sin(e) * 55;
    starPos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 90;
  }
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xffe8c0, size: 0.35, transparent: true, opacity: 0.7, depthWrite: false })
  );
  scene.add(stars);
  MAP.stars = stars;

  const wallH = 4.2;
  const placements = [
    [-40, 0, 0, 2, wallH, 80],
    [40, 0, 0, 2, wallH, 80],
    [0, 0, -40, 80, wallH, 2],
    [0, 0, 40, 80, wallH, 2],
  ];
  for (const p of placements) {
    const m = box(scene, p[0], p[1] + p[4] / 2, p[2], p[3], p[4], p[5], rock);
    MAP.walls.push({ mesh: m, pos: new THREE.Vector3(p[0], 0, p[2]), sx: p[3], sy: p[4], sz: p[5] });
  }

  const crateSpecs = [
    [-8, 1, 6, 2.2, 2, 2.2],
    [-6, 1, 9, 2, 2, 2],
    [4, 1.1, -4, 2.4, 2.2, 2.4],
    [7, 0.8, -6, 1.6, 1.6, 1.6],
    [-14, 1.2, -10, 2.6, 2.4, 2.2],
    [12, 1, 12, 2, 2, 3],
    [14, 1, 10, 2, 2, 2],
    [-2, 0.9, 18, 3, 1.8, 2],
    [22, 1.3, 4, 2.8, 2.6, 2.4],
    [-22, 1, -4, 2, 2, 4],
    [0, 1, -22, 4, 2, 2],
    [8, 1, 22, 2, 2, 2],
  ];
  const stencil = new THREE.MeshBasicMaterial({ color: 0x2a2214, transparent: true, opacity: 0.45 });
  for (const c of crateSpecs) {
    const m = box(scene, c[0], c[1], c[2], c[3], c[4], c[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(c[0], 0, c[2]), mesh: m, sx: c[3], sy: c[4], sz: c[5] });
    const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.22), stencil);
    tag.position.set(c[0], c[1] + c[4] * 0.15, c[2] + c[5] * 0.51);
    scene.add(tag);
    const tag2 = tag.clone();
    tag2.rotation.y = Math.PI;
    tag2.position.z = c[2] - c[5] * 0.51;
    scene.add(tag2);
  }

  // West warehouse — split south wall so a door gap exists at x≈-22, z≈22
  const whWall = (x, z, sx, sz) => {
    const m = box(scene, x, 3.5, z, sx, 7, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 7, sz });
    return m;
  };
  whWall(-26.8, 22, 6.4, 1.15);
  whWall(-17.2, 22, 6.4, 1.15);
  box(scene, -22, 6.15, 22, 3.4, 1.7, 1.15, steel); // lintel over door
  whWall(-22, 30, 16.2, 1.15);
  whWall(-30, 26, 1.15, 9.2);
  whWall(-14, 26, 1.15, 9.2);
  box(scene, -22, 7.2, 26, 16.2, 0.45, 9.2, steel);
  MAP.warehouseDoor = new THREE.Vector3(-22, 0, 21.15);
  const whFloor = box(scene, -22, 0.04, 26, 15.4, 0.08, 8.4, concrete);
  whFloor.receiveShadow = true;
  const whLamp = new THREE.PointLight(0xffc070, 1.15, 16);
  whLamp.position.set(-22, 5.6, 26);
  scene.add(whLamp);
  MAP.warehouseLamp = whLamp;
  const whRing = new THREE.Mesh(
    new THREE.RingGeometry(1.5, 1.85, 18),
    new THREE.MeshBasicMaterial({ color: 0xc9a227, side: THREE.DoubleSide })
  );
  whRing.rotation.x = -Math.PI / 2;
  whRing.position.copy(MAP.warehouseDoor).setY(0.05);
  scene.add(whRing);
  MAP.warehouseRing = whRing;
  const whRacks = [
    [-27.4, 0.85, 24.2, 1.6, 1.7, 1.2],
    [-27.6, 0.55, 27.8, 1.4, 1.1, 2.0],
    [-16.8, 0.9, 24.6, 1.8, 1.8, 1.3],
    [-16.6, 0.5, 28.4, 1.5, 1.0, 1.6],
    [-22.2, 0.35, 28.6, 2.4, 0.7, 1.1],
  ];
  for (const r of whRacks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], crateWood);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const whMoteN = 50;
  const whGeo = new THREE.BufferGeometry();
  const whPos = new Float32Array(whMoteN * 3);
  const whPhase = new Float32Array(whMoteN);
  for (let i = 0; i < whMoteN; i++) {
    whPos[i * 3] = -29 + Math.random() * 14;
    whPos[i * 3 + 1] = 0.4 + Math.random() * 5.2;
    whPos[i * 3 + 2] = 22.4 + Math.random() * 7.2;
    whPhase[i] = Math.random() * Math.PI * 2;
  }
  whGeo.setAttribute("position", new THREE.BufferAttribute(whPos, 3));
  const whMotes = new THREE.Points(
    whGeo,
    new THREE.PointsMaterial({
      color: 0xd0b878,
      size: 0.04,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    })
  );
  scene.add(whMotes);
  MAP.warehouseMotes = whMotes;
  MAP.warehouseMotePhase = whPhase;

  // East pump shed — door gap on west wall at x≈23, z≈21
  const shWall = (x, z, sx, sz) => {
    const m = box(scene, x, 2.35, z, sx, 4.7, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 4.7, sz });
    return m;
  };
  shWall(23, 18.4, 1.05, 4.4);
  shWall(23, 23.6, 1.05, 4.4);
  box(scene, 23, 4.35, 21, 1.05, 1.3, 2.6, rust); // lintel
  shWall(31, 21, 1.05, 9.2);
  shWall(27, 16.6, 8.2, 1.05);
  shWall(27, 25.4, 8.2, 1.05);
  box(scene, 27, 4.8, 21, 8.2, 0.35, 9.2, rust);
  MAP.shedDoor = new THREE.Vector3(22.3, 0, 21);
  const shFloor = box(scene, 27, 0.04, 21, 7.4, 0.08, 8.2, concrete);
  shFloor.receiveShadow = true;
  const shLamp = new THREE.PointLight(0xffa050, 0.95, 11);
  shLamp.position.set(27, 4.1, 21);
  scene.add(shLamp);
  MAP.shedLamp = shLamp;
  const shRing = new THREE.Mesh(
    new THREE.RingGeometry(1.15, 1.45, 16),
    new THREE.MeshBasicMaterial({ color: 0xc07030, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
  );
  shRing.rotation.x = -Math.PI / 2;
  shRing.position.copy(MAP.shedDoor).setY(0.05);
  scene.add(shRing);
  MAP.shedRing = shRing;
  const shGear = [
    [29.4, 0.7, 18.4, 1.5, 1.4, 1.4],
    [29.2, 0.45, 23.2, 1.6, 0.9, 1.8],
    [24.8, 0.55, 23.8, 1.2, 1.1, 1.3],
  ];
  for (const r of shGear) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], crateWood);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  // Pump column + tank
  box(scene, 27.2, 1.1, 21, 0.55, 2.2, 0.55, steel);
  const tank = box(scene, 27.2, 2.55, 21, 1.4, 0.7, 1.4, steel);
  tank.material = oil;
  const shMoteN = 28;
  const shGeo = new THREE.BufferGeometry();
  const shPos = new Float32Array(shMoteN * 3);
  const shPhase = new Float32Array(shMoteN);
  for (let i = 0; i < shMoteN; i++) {
    shPos[i * 3] = 23.4 + Math.random() * 7.2;
    shPos[i * 3 + 1] = 0.3 + Math.random() * 3.6;
    shPos[i * 3 + 2] = 17.4 + Math.random() * 7.2;
    shPhase[i] = Math.random() * Math.PI * 2;
  }
  shGeo.setAttribute("position", new THREE.BufferAttribute(shPos, 3));
  const shMotes = new THREE.Points(
    shGeo,
    new THREE.PointsMaterial({
      color: 0xd09050,
      size: 0.035,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(shMotes);
  MAP.shedMotes = shMotes;
  MAP.shedMotePhase = shPhase;

  // SW lookout tower — climbable deck over the quarry floor
  const lx = -23.8;
  const lz = -20.2;
  MAP.lookout = new THREE.Vector3(lx, 0, lz);
  MAP.lookoutDeck = new THREE.Vector3(lx, 2.85, lz);
  const postMat = steel;
  const posts = [
    [lx - 1.45, lz - 1.45],
    [lx + 1.45, lz - 1.45],
    [lx - 1.45, lz + 1.45],
    [lx + 1.45, lz + 1.45],
  ];
  for (const [px, pz] of posts) {
    const m = box(scene, px, 1.45, pz, 0.22, 2.9, 0.22, postMat);
    MAP.crates.push({ pos: new THREE.Vector3(px, 0, pz), mesh: m, sx: 0.22, sy: 2.9, sz: 0.22 });
  }
  const deck = box(scene, lx, 2.95, lz, 3.4, 0.16, 3.4, rust);
  MAP.platforms = MAP.platforms || [];
  MAP.platforms.push({ x: lx, z: lz, sx: 3.2, sz: 3.2, top: 3.05 });
  MAP.crates.push({
    pos: new THREE.Vector3(lx, 0, lz),
    mesh: deck,
    sx: 3.4,
    sy: 3.05,
    sz: 3.4,
    walkOn: true,
  });
  box(scene, lx, 3.55, lz - 1.62, 3.3, 0.08, 0.08, steel);
  box(scene, lx, 3.55, lz + 1.62, 3.3, 0.08, 0.08, steel);
  box(scene, lx - 1.62, 3.55, lz, 0.08, 0.08, 3.3, steel);
  box(scene, lx + 1.62, 3.55, lz, 0.08, 0.08, 3.3, steel);
  // Ladder on +Z face
  const lad = box(scene, lx, 1.45, lz + 1.78, 0.55, 2.9, 0.16, steel);
  MAP.crates.push({
    pos: new THREE.Vector3(lx, 0, lz + 1.78),
    mesh: lad,
    sx: 0.55,
    sy: 2.9,
    sz: 0.16,
    climb: true,
    climbTo: MAP.lookout,
  });
  for (let r = 0; r < 6; r++) {
    box(scene, lx, 0.35 + r * 0.46, lz + 1.78, 0.5, 0.05, 0.18, rust);
  }
  const lookLamp = new THREE.PointLight(0xffc070, 0.7, 10);
  lookLamp.position.set(lx, 3.7, lz);
  scene.add(lookLamp);
  MAP.lookoutLamp = lookLamp;
  const lookRing = new THREE.Mesh(
    new THREE.RingGeometry(1.1, 1.35, 14),
    new THREE.MeshBasicMaterial({ color: 0xb08040, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  lookRing.rotation.x = -Math.PI / 2;
  lookRing.position.set(lx, 0.05, lz + 2.1);
  scene.add(lookRing);
  MAP.lookoutRing = lookRing;

  // Sandbag berms — low vaultable cover
  const bagMat = new THREE.MeshLambertMaterial({ color: 0x6a5a38 });
  const bags = [
    [14.2, -12.4, 2.4, 0.62, 1.1],
    [16.4, -13.6, 1.8, 0.58, 0.9],
    [-10.5, -8.2, 2.2, 0.6, 1.0],
    [lx + 3.2, lz + 1.6, 1.9, 0.55, 0.85],
    [0.2, 28.6, 1.8, 0.52, 0.9],
    [3.8, 28.4, 1.6, 0.5, 0.85],
    [-6.0, -24.2, 2.0, 0.55, 0.9],
    [-4.2, -23.6, 1.6, 0.5, 0.8],
  ];
  MAP.sandbags = [];
  for (const b of bags) {
    const m = box(scene, b[0], b[3] * 0.5, b[1], b[2], b[3], b[4], bagMat);
    const crate = { pos: new THREE.Vector3(b[0], 0, b[1]), mesh: m, sx: b[2], sy: b[3], sz: b[4], climb: true };
    MAP.crates.push(crate);
    MAP.sandbags.push(crate);
  }

  // Fuel drums — shot or blast cooks them off
  const drumMat = new THREE.MeshLambertMaterial({ color: 0x3a4a32 });
  const drumSpec = [
    [8.2, 2.1],
    [9.35, 2.55],
    [7.4, 3.15],
    [19.6, 17.4],
    [20.4, 16.6],
    [-12.8, -6.4],
    [-1.2, 28.2],
    [5.6, 28.0],
    [-26.4, 7.2],
    [-25.6, 8.8],
    [31.4, -9.2],
    [31.8, -4.8],
    [30.2, 5.6],
    [30.4, 10.6],
    [-29.6, -7.2],
    [-29.2, -10.4],
    [5.4, 20.4],
    [5.6, 23.2],
  ];
  MAP.drums = [];
  for (const [dx, dz] of drumSpec) {
    const body = box(scene, dx, 0.55, dz, 0.62, 1.1, 0.62, drumMat);
    const lid = box(scene, dx, 1.12, dz, 0.58, 0.08, 0.58, rust);
    const crate = {
      pos: new THREE.Vector3(dx, 0, dz),
      mesh: body,
      lid,
      sx: 0.62,
      sy: 1.15,
      sz: 0.62,
      drum: true,
      hp: 28,
      dead: false,
    };
    MAP.crates.push(crate);
    MAP.drums.push(crate);
  }

  // Extract pad jeep silhouette
  const jeep = new THREE.Group();
  const jBody = box(scene, 0, 0, 0, 2.6, 0.7, 1.35, rust);
  jBody.position.set(0, 0.55, 0);
  const jCab = box(scene, 0, 0, 0, 1.1, 0.7, 1.25, rust);
  jCab.position.set(-0.45, 1.15, 0);
  const jBed = box(scene, 0, 0, 0, 1.15, 0.22, 1.2, steel);
  jBed.position.set(0.7, 0.95, 0);
  jeep.add(jBody, jCab, jBed);
  jeep.position.set(MAP.extract.x + 5.4, 0, MAP.extract.z + 3.2);
  jeep.rotation.y = -0.55;
  scene.add(jeep);
  MAP.extractJeep = jeep;

  // North radio bunker — door gap on south wall at x≈2, z≈30
  const rx = 2;
  const rz = 33;
  const radWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.85, z, sx, 3.7, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.7, sz });
    return m;
  };
  radWall(-2.2, 30.1, 4.4, 0.7);
  radWall(6.2, 30.1, 4.4, 0.7);
  box(scene, rx, 3.35, 30.1, 2.6, 0.7, 0.7, steel); // lintel
  radWall(rx, 36.05, 11.4, 0.7);
  radWall(-3.35, 33.1, 0.7, 6.6);
  radWall(7.35, 33.1, 0.7, 6.6);
  box(scene, rx, 3.75, rz, 11.2, 0.28, 6.4, steel);
  MAP.radioDoor = new THREE.Vector3(rx, 0, 29.55);
  MAP.radio = new THREE.Vector3(rx, 0, rz);
  const radFloor = box(scene, rx, 0.04, rz, 10.2, 0.08, 5.6, concrete);
  radFloor.receiveShadow = true;
  const radLamp = new THREE.PointLight(0x70c8a0, 0.95, 12);
  radLamp.position.set(rx, 3.2, rz);
  scene.add(radLamp);
  MAP.radioLamp = radLamp;
  const radRing = new THREE.Mesh(
    new THREE.RingGeometry(1.15, 1.4, 16),
    new THREE.MeshBasicMaterial({ color: 0x50b888, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
  );
  radRing.rotation.x = -Math.PI / 2;
  radRing.position.copy(MAP.radioDoor).setY(0.05);
  scene.add(radRing);
  MAP.radioRing = radRing;
  const consoles = [
    [-1.6, 0.55, 34.6, 1.8, 1.1, 0.7],
    [5.4, 0.5, 34.8, 1.5, 1.0, 0.65],
    [5.6, 0.7, 31.4, 1.2, 1.4, 0.8],
  ];
  for (const r of consoles) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const dish = box(scene, rx + 2.4, 4.35, rz - 0.4, 1.6, 0.12, 1.6, steel);
  dish.rotation.x = 0.35;
  const mast = box(scene, rx + 2.4, 4.15, rz - 0.4, 0.12, 0.9, 0.12, rust);
  MAP.radioDish = dish;
  const radMoteN = 36;
  const radGeo = new THREE.BufferGeometry();
  const radPos = new Float32Array(radMoteN * 3);
  const radPhase = new Float32Array(radMoteN);
  for (let i = 0; i < radMoteN; i++) {
    radPos[i * 3] = -2.8 + Math.random() * 9.6;
    radPos[i * 3 + 1] = 0.35 + Math.random() * 3.1;
    radPos[i * 3 + 2] = 30.4 + Math.random() * 5.2;
    radPhase[i] = Math.random() * Math.PI * 2;
  }
  radGeo.setAttribute("position", new THREE.BufferAttribute(radPos, 3));
  const radMotes = new THREE.Points(
    radGeo,
    new THREE.PointsMaterial({
      color: 0x88d0a8,
      size: 0.035,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    })
  );
  scene.add(radMotes);
  MAP.radioMotes = radMotes;
  MAP.radioMotePhase = radPhase;
  const led = new THREE.PointLight(0x40ff90, 0.35, 4);
  led.position.set(-1.6, 1.2, 34.2);
  scene.add(led);
  MAP.radioLed = led;

  // Wrecked comms truck — cover hull east of the bunker door
  const truck = new THREE.Group();
  const tBody = box(scene, 0, 0, 0, 3.4, 1.05, 1.55, rust);
  tBody.position.set(0, 0.7, 0);
  const tCab = box(scene, 0, 0, 0, 1.2, 0.85, 1.45, steel);
  tCab.position.set(-1.05, 1.45, 0);
  const tBed = box(scene, 0, 0, 0, 1.6, 0.2, 1.4, steel);
  tBed.position.set(0.7, 1.2, 0);
  truck.add(tBody, tCab, tBed);
  truck.position.set(10.4, 0, 27.6);
  truck.rotation.y = 0.4;
  scene.add(truck);
  MAP.radioTruck = truck;
  MAP.crates.push({ pos: new THREE.Vector3(10.4, 0, 27.6), mesh: tBody, sx: 3.2, sy: 1.6, sz: 1.7 });

  // South machine shop — door gap on north wall at x≈-6, z≈-26
  const shopX = -6;
  const shopZ = -30;
  const shopWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.75, z, sx, 3.5, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.5, sz });
    return m;
  };
  shopWall(-9.6, -25.95, 4.4, 0.7);
  shopWall(-2.4, -25.95, 4.4, 0.7);
  box(scene, shopX, 3.25, -25.95, 2.8, 0.65, 0.7, rust);
  shopWall(shopX, -34.15, 11.2, 0.7);
  shopWall(-11.15, -30.05, 0.7, 8.6);
  shopWall(-0.85, -30.05, 0.7, 8.6);
  box(scene, shopX, 3.6, shopZ, 10.8, 0.26, 8.4, rust);
  MAP.shopDoor = new THREE.Vector3(shopX, 0, -25.4);
  MAP.shop = new THREE.Vector3(shopX, 0, shopZ);
  const shopFloor = box(scene, shopX, 0.04, shopZ, 10.0, 0.08, 7.6, concrete);
  shopFloor.receiveShadow = true;
  const shopLamp = new THREE.PointLight(0xe0a050, 1.05, 13);
  shopLamp.position.set(shopX, 3.1, shopZ);
  scene.add(shopLamp);
  MAP.shopLamp = shopLamp;
  const shopRing = new THREE.Mesh(
    new THREE.RingGeometry(1.15, 1.4, 16),
    new THREE.MeshBasicMaterial({ color: 0xd08030, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
  );
  shopRing.rotation.x = -Math.PI / 2;
  shopRing.position.copy(MAP.shopDoor).setY(0.05);
  scene.add(shopRing);
  MAP.shopRing = shopRing;
  const benches = [
    [-9.2, 0.55, -32.6, 2.2, 1.1, 0.85],
    [-2.4, 0.5, -32.8, 2.0, 1.0, 0.8],
    [-2.2, 0.7, -27.6, 1.4, 1.4, 0.9],
  ];
  for (const r of benches) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  // Lathe + hanging chain
  box(scene, -9.0, 0.85, -28.2, 1.6, 0.7, 0.7, steel);
  box(scene, -9.0, 1.15, -28.2, 0.35, 0.35, 1.4, rust);
  box(scene, shopX, 2.7, shopZ + 1.2, 0.06, 1.6, 0.06, steel);
  const shopMoteN = 40;
  const shopGeo = new THREE.BufferGeometry();
  const shopPos = new Float32Array(shopMoteN * 3);
  const shopPhase = new Float32Array(shopMoteN);
  for (let i = 0; i < shopMoteN; i++) {
    shopPos[i * 3] = -10.6 + Math.random() * 9.6;
    shopPos[i * 3 + 1] = 0.3 + Math.random() * 3.0;
    shopPos[i * 3 + 2] = -33.6 + Math.random() * 7.4;
    shopPhase[i] = Math.random() * Math.PI * 2;
  }
  shopGeo.setAttribute("position", new THREE.BufferAttribute(shopPos, 3));
  const shopMotes = new THREE.Points(
    shopGeo,
    new THREE.PointsMaterial({
      color: 0xe0a060,
      size: 0.038,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    })
  );
  scene.add(shopMotes);
  MAP.shopMotes = shopMotes;
  MAP.shopMotePhase = shopPhase;
  const grind = new THREE.PointLight(0xff7030, 0.28, 3.6);
  grind.position.set(-9.0, 1.15, -28.2);
  scene.add(grind);
  MAP.shopGrind = grind;

  // Scrap hopper + crane boom west of the shop door
  const hopX = -14.4;
  const hopZ = -26.8;
  box(scene, hopX, 1.35, hopZ, 2.4, 2.7, 2.0, rust);
  box(scene, hopX, 2.85, hopZ, 2.8, 0.22, 2.4, steel);
  box(scene, hopX - 0.2, 3.9, hopZ, 0.18, 2.2, 0.18, steel);
  const boom = box(scene, hopX + 1.6, 4.85, hopZ, 3.6, 0.16, 0.22, rust);
  MAP.shopBoom = boom;
  MAP.crates.push({ pos: new THREE.Vector3(hopX, 0, hopZ), mesh: boom, sx: 2.4, sy: 2.7, sz: 2.0 });
  MAP.shopHopper = new THREE.Vector3(hopX, 0, hopZ);

  // NE filter hut — door gap on south wall at x≈27.4, z≈30
  const hutX = 27.4;
  const hutZ = 33.0;
  const hutWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.7, z, sx, 3.4, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.4, sz });
    return m;
  };
  hutWall(24.6, 30.05, 3.6, 0.65);
  hutWall(30.2, 30.05, 3.6, 0.65);
  box(scene, hutX, 3.15, 30.05, 2.6, 0.6, 0.65, rust);
  hutWall(hutX, 36.05, 8.2, 0.65);
  hutWall(23.85, 33.05, 0.65, 6.4);
  hutWall(30.95, 33.05, 0.65, 6.4);
  box(scene, hutX, 3.5, hutZ, 7.8, 0.24, 6.2, rust);
  MAP.hutDoor = new THREE.Vector3(hutX, 0, 29.55);
  MAP.hut = new THREE.Vector3(hutX, 0, hutZ);
  const hutFloor = box(scene, hutX, 0.04, hutZ, 6.8, 0.08, 5.6, concrete);
  hutFloor.receiveShadow = true;
  const hutLamp = new THREE.PointLight(0x70b0d0, 0.95, 11);
  hutLamp.position.set(hutX, 3.05, hutZ);
  scene.add(hutLamp);
  MAP.hutLamp = hutLamp;
  const hutRing = new THREE.Mesh(
    new THREE.RingGeometry(1.1, 1.35, 16),
    new THREE.MeshBasicMaterial({ color: 0x60a8c8, side: THREE.DoubleSide, transparent: true, opacity: 0.58 })
  );
  hutRing.rotation.x = -Math.PI / 2;
  hutRing.position.copy(MAP.hutDoor).setY(0.05);
  scene.add(hutRing);
  MAP.hutRing = hutRing;
  const hutGear = [
    [25.2, 0.55, 34.4, 1.5, 1.1, 1.1],
    [29.4, 0.5, 34.6, 1.4, 1.0, 1.2],
    [29.2, 0.65, 31.2, 1.2, 1.3, 0.9],
  ];
  for (const r of hutGear) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  box(scene, hutX, 0.95, hutZ, 0.7, 1.9, 0.7, steel);
  box(scene, hutX, 2.05, hutZ, 1.5, 0.35, 1.5, oil);
  const hutMoteN = 32;
  const hutGeo = new THREE.BufferGeometry();
  const hutPos = new Float32Array(hutMoteN * 3);
  const hutPhase = new Float32Array(hutMoteN);
  for (let i = 0; i < hutMoteN; i++) {
    hutPos[i * 3] = 24.2 + Math.random() * 6.4;
    hutPos[i * 3 + 1] = 0.3 + Math.random() * 2.8;
    hutPos[i * 3 + 2] = 30.4 + Math.random() * 5.4;
    hutPhase[i] = Math.random() * Math.PI * 2;
  }
  hutGeo.setAttribute("position", new THREE.BufferAttribute(hutPos, 3));
  const hutMotes = new THREE.Points(
    hutGeo,
    new THREE.PointsMaterial({
      color: 0x90c8d8,
      size: 0.036,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    })
  );
  scene.add(hutMotes);
  MAP.hutMotes = hutMotes;
  MAP.hutMotePhase = hutPhase;

  // NE cistern tower — climbable tank deck
  const cx = 33.8;
  const cz = 32.6;
  MAP.cistern = new THREE.Vector3(cx, 0, cz);
  MAP.cisternDeck = new THREE.Vector3(cx, 4.15, cz);
  for (const [px, pz] of [
    [cx - 1.35, cz - 1.35],
    [cx + 1.35, cz - 1.35],
    [cx - 1.35, cz + 1.35],
    [cx + 1.35, cz + 1.35],
  ]) {
    const m = box(scene, px, 2.05, pz, 0.24, 4.1, 0.24, steel);
    MAP.crates.push({ pos: new THREE.Vector3(px, 0, pz), mesh: m, sx: 0.24, sy: 4.1, sz: 0.24 });
  }
  const tankDeck = box(scene, cx, 4.2, cz, 3.2, 0.18, 3.2, rust);
  MAP.platforms = MAP.platforms || [];
  MAP.platforms.push({ x: cx, z: cz, sx: 3.0, sz: 3.0, top: 4.3 });
  MAP.crates.push({
    pos: new THREE.Vector3(cx, 0, cz),
    mesh: tankDeck,
    sx: 3.2,
    sy: 4.3,
    sz: 3.2,
    walkOn: true,
  });
  box(scene, cx, 5.15, cz, 2.6, 1.7, 2.6, steel);
  box(scene, cx, 6.1, cz, 2.2, 0.18, 2.2, rust);
  box(scene, cx, 4.75, cz - 1.52, 3.1, 0.08, 0.08, steel);
  box(scene, cx, 4.75, cz + 1.52, 3.1, 0.08, 0.08, steel);
  box(scene, cx - 1.52, 4.75, cz, 0.08, 0.08, 3.1, steel);
  box(scene, cx + 1.52, 4.75, cz, 0.08, 0.08, 3.1, steel);
  const tankLad = box(scene, cx, 2.1, cz + 1.72, 0.5, 4.2, 0.16, steel);
  MAP.crates.push({
    pos: new THREE.Vector3(cx, 0, cz + 1.72),
    mesh: tankLad,
    sx: 0.5,
    sy: 4.2,
    sz: 0.16,
    climb: true,
    climbTo: MAP.cistern,
  });
  for (let r = 0; r < 8; r++) {
    box(scene, cx, 0.35 + r * 0.5, cz + 1.72, 0.46, 0.05, 0.18, rust);
  }
  const tankLamp = new THREE.PointLight(0xa0d0e0, 0.75, 12);
  tankLamp.position.set(cx, 6.4, cz);
  scene.add(tankLamp);
  MAP.cisternLamp = tankLamp;
  const tankRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 14),
    new THREE.MeshBasicMaterial({ color: 0x70b8d0, side: THREE.DoubleSide, transparent: true, opacity: 0.5 })
  );
  tankRing.rotation.x = -Math.PI / 2;
  tankRing.position.set(cx, 0.05, cz + 2.05);
  scene.add(tankRing);
  MAP.cisternRing = tankRing;

  // Sluice pipe shed → hut
  box(scene, 29.2, 1.55, 27.4, 0.28, 0.28, 4.6, steel);
  box(scene, 30.6, 1.55, 29.6, 2.6, 0.28, 0.28, steel);

  // West blasting magazine — door gap on east wall at x≈-28.8
  const magX = -32.2;
  const magZ = 8.2;
  const magWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  magWall(magX, 5.45, 6.8, 0.58);
  magWall(magX, 10.95, 6.8, 0.58);
  magWall(-35.55, magZ, 0.58, 6.0);
  magWall(-28.85, 6.55, 0.58, 2.4);
  magWall(-28.85, 9.85, 0.58, 2.4);
  box(scene, -28.85, 2.85, magZ, 0.58, 0.55, 1.7, rust);
  box(scene, magX, 3.2, magZ, 7.0, 0.22, 5.8, rust);
  MAP.magDoor = new THREE.Vector3(-28.4, 0, magZ);
  MAP.mag = new THREE.Vector3(magX, 0, magZ);
  const magFloor = box(scene, magX, 0.04, magZ, 6.2, 0.08, 5.0, concrete);
  magFloor.receiveShadow = true;
  const magLamp = new THREE.PointLight(0xe0a040, 0.9, 10);
  magLamp.position.set(magX, 2.85, magZ);
  scene.add(magLamp);
  MAP.magLamp = magLamp;
  const magRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd08030, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  magRing.rotation.x = -Math.PI / 2;
  magRing.position.copy(MAP.magDoor).setY(0.05);
  scene.add(magRing);
  MAP.magRing = magRing;
  const magGear = [
    [-34.4, 0.5, 6.6, 1.4, 1.0, 1.1],
    [-34.2, 0.45, 9.8, 1.3, 0.9, 1.2],
    [-30.4, 0.55, 9.7, 1.1, 1.1, 0.9],
  ];
  for (const r of magGear) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  box(scene, magX, 0.7, magZ, 1.6, 0.35, 0.7, steel);
  box(scene, magX, 0.95, magZ, 0.55, 0.18, 0.4, amber);
  const magMoteN = 30;
  const magGeo = new THREE.BufferGeometry();
  const magPos = new Float32Array(magMoteN * 3);
  const magPhase = new Float32Array(magMoteN);
  for (let i = 0; i < magMoteN; i++) {
    magPos[i * 3] = -35.2 + Math.random() * 6.0;
    magPos[i * 3 + 1] = 0.28 + Math.random() * 2.6;
    magPos[i * 3 + 2] = 5.6 + Math.random() * 5.0;
    magPhase[i] = Math.random() * Math.PI * 2;
  }
  magGeo.setAttribute("position", new THREE.BufferAttribute(magPos, 3));
  const magMotes = new THREE.Points(
    magGeo,
    new THREE.PointsMaterial({
      color: 0xe0a050,
      size: 0.034,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(magMotes);
  MAP.magMotes = magMotes;
  MAP.magMotePhase = magPhase;

  // Magazine door berms + extra drum
  const magBag = box(scene, -27.2, 0.28, 6.8, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-27.2, 0, 6.8), mesh: magBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const magBag2 = box(scene, -27.0, 0.26, 9.6, 1.4, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-27.0, 0, 9.6), mesh: magBag2, sx: 1.4, sy: 0.52, sz: 0.75, climb: true });

  // Wrecked rotary drill east of magazine
  const drX = -24.2;
  const drZ = 12.4;
  box(scene, drX, 0.55, drZ, 2.2, 1.1, 1.4, rust);
  box(scene, drX + 0.2, 1.7, drZ, 0.35, 2.2, 0.35, steel);
  const boom2 = box(scene, drX + 1.4, 2.55, drZ, 2.6, 0.16, 0.2, steel);
  boom2.rotation.z = -0.35;
  MAP.drillBoom = boom2;
  MAP.crates.push({ pos: new THREE.Vector3(drX, 0, drZ), mesh: boom2, sx: 2.2, sy: 1.4, sz: 1.4 });
  MAP.drill = new THREE.Vector3(drX, 0, drZ);

  // SE crusher house — door gap on west wall facing the pad
  const crX = 37.2;
  const crZ = -7.0;
  const crWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.65, z, sx, 3.3, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.3, sz });
    return m;
  };
  crWall(crX, -10.05, 7.2, 0.58);
  crWall(crX, -3.95, 7.2, 0.58);
  crWall(40.75, crZ, 0.58, 6.6);
  crWall(33.65, -9.05, 0.58, 2.2);
  crWall(33.65, -4.95, 0.58, 2.2);
  box(scene, 33.65, 2.95, crZ, 0.58, 0.55, 1.9, rust);
  box(scene, crX, 3.35, crZ, 7.4, 0.22, 6.4, rust);
  MAP.crushDoor = new THREE.Vector3(33.2, 0, crZ);
  MAP.crush = new THREE.Vector3(crX, 0, crZ);
  const crFloor = box(scene, crX, 0.04, crZ, 6.6, 0.08, 5.6, concrete);
  crFloor.receiveShadow = true;
  const crLamp = new THREE.PointLight(0xe07030, 1.05, 12);
  crLamp.position.set(crX, 2.95, crZ);
  scene.add(crLamp);
  MAP.crushLamp = crLamp;
  const crRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd06028, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  crRing.rotation.x = -Math.PI / 2;
  crRing.position.copy(MAP.crushDoor).setY(0.05);
  scene.add(crRing);
  MAP.crushRing = crRing;
  const crGear = [
    [39.6, 0.7, -9.1, 1.5, 1.4, 1.3],
    [39.4, 0.55, -5.0, 1.4, 1.1, 1.2],
    [35.2, 0.5, -9.0, 1.2, 1.0, 1.0],
  ];
  for (const r of crGear) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const jaw = box(scene, crX + 0.4, 1.15, crZ, 1.8, 1.6, 1.4, steel);
  MAP.crushJaw = jaw;
  box(scene, crX + 0.4, 2.05, crZ, 0.9, 0.22, 0.9, amber);
  const crMoteN = 34;
  const crGeo = new THREE.BufferGeometry();
  const crPos = new Float32Array(crMoteN * 3);
  const crPhase = new Float32Array(crMoteN);
  for (let i = 0; i < crMoteN; i++) {
    crPos[i * 3] = 34.0 + Math.random() * 6.4;
    crPos[i * 3 + 1] = 0.28 + Math.random() * 2.8;
    crPos[i * 3 + 2] = -9.8 + Math.random() * 5.6;
    crPhase[i] = Math.random() * Math.PI * 2;
  }
  crGeo.setAttribute("position", new THREE.BufferAttribute(crPos, 3));
  const crMotes = new THREE.Points(
    crGeo,
    new THREE.PointsMaterial({
      color: 0xd07030,
      size: 0.036,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    })
  );
  scene.add(crMotes);
  MAP.crushMotes = crMotes;
  MAP.crushMotePhase = crPhase;

  // Conveyor trestle west from crusher toward the pad
  MAP.conveyorRolls = [];
  for (let i = 0; i < 6; i++) {
    const zx = 31.4 - i * 1.55;
    const zz = -7.0 + i * 0.35;
    const roll = box(scene, zx, 1.15, zz, 1.4, 0.18, 0.42, steel);
    roll.rotation.z = 0.08;
    MAP.conveyorRolls.push(roll);
    box(scene, zx, 0.55, zz - 0.35, 0.12, 1.1, 0.12, rust);
    box(scene, zx, 0.55, zz + 0.35, 0.12, 1.1, 0.12, rust);
  }
  box(scene, 27.2, 1.35, -5.4, 8.6, 0.08, 0.55, rust);
  MAP.conveyor = new THREE.Vector3(28.4, 0, -5.8);
  MAP.belt = { x: 27.4, z: -5.9, hx: 4.3, hz: 0.7, minY: 0.85, vx: -2.6, vz: 0.55 };

  // Crusher-door berms
  const crBag = box(scene, 32.0, 0.28, -8.6, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(32.0, 0, -8.6), mesh: crBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const crBag2 = box(scene, 32.2, 0.26, -5.4, 1.5, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(32.2, 0, -5.4), mesh: crBag2, sx: 1.5, sy: 0.52, sz: 0.75, climb: true });

  // Rust hopper bin south of crusher
  const hopX = 36.6;
  const hopZ = -13.2;
  box(scene, hopX, 1.4, hopZ, 2.4, 2.2, 2.0, rust);
  box(scene, hopX, 0.45, hopZ - 1.4, 0.7, 0.9, 0.7, steel);
  box(scene, hopX, 0.45, hopZ + 1.4, 0.7, 0.9, 0.7, steel);
  const hopLip = box(scene, hopX, 2.55, hopZ, 2.6, 0.16, 2.2, steel);
  hopLip.rotation.z = 0.08;
  MAP.hopper = new THREE.Vector3(hopX, 0, hopZ);
  MAP.crates.push({ pos: MAP.hopper.clone(), mesh: hopLip, sx: 2.4, sy: 2.4, sz: 2.0 });

  // East loading dock — door gap on west wall facing the quarry
  const dkX = 35.6;
  const dkZ = 8.2;
  const dkWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  dkWall(dkX, 11.55, 7.0, 0.55);
  dkWall(dkX, 4.85, 7.0, 0.55);
  dkWall(38.95, dkZ, 0.55, 6.6);
  dkWall(32.25, 10.55, 0.55, 2.15);
  dkWall(32.25, 5.85, 0.55, 2.15);
  box(scene, 32.25, 2.85, dkZ, 0.55, 0.5, 2.0, rust);
  box(scene, dkX, 3.2, dkZ, 7.2, 0.2, 6.8, rust);
  MAP.dockDoor = new THREE.Vector3(31.9, 0, dkZ);
  MAP.dock = new THREE.Vector3(dkX, 0, dkZ);
  const dkFloor = box(scene, dkX, 0.04, dkZ, 6.4, 0.08, 5.8, concrete);
  dkFloor.receiveShadow = true;
  const dkLamp = new THREE.PointLight(0xc88830, 1.0, 11);
  dkLamp.position.set(dkX, 2.85, dkZ);
  scene.add(dkLamp);
  MAP.dockLamp = dkLamp;
  const dkRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc87828, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  dkRing.rotation.x = -Math.PI / 2;
  dkRing.position.copy(MAP.dockDoor).setY(0.05);
  scene.add(dkRing);
  MAP.dockRing = dkRing;
  const pallets = [
    [37.8, 0.55, 10.4, 1.5, 1.1, 1.3],
    [37.6, 0.5, 6.1, 1.4, 1.0, 1.2],
    [34.0, 0.48, 10.3, 1.2, 0.96, 1.1],
  ];
  for (const r of pallets) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], crateWood);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  // Forklift silhouette
  const fkX = 36.4;
  const fkZ = 8.15;
  box(scene, fkX, 0.55, fkZ, 1.7, 1.1, 0.95, steel);
  box(scene, fkX - 0.55, 1.25, fkZ, 0.7, 0.55, 0.85, rust);
  const forks = box(scene, fkX - 1.35, 0.22, fkZ, 1.4, 0.08, 0.55, steel);
  MAP.dockForks = forks;
  MAP.crates.push({ pos: new THREE.Vector3(fkX, 0, fkZ), mesh: forks, sx: 1.8, sy: 1.4, sz: 1.0 });
  const dkMoteN = 30;
  const dkGeo = new THREE.BufferGeometry();
  const dkPos = new Float32Array(dkMoteN * 3);
  const dkPhase = new Float32Array(dkMoteN);
  for (let i = 0; i < dkMoteN; i++) {
    dkPos[i * 3] = 32.8 + Math.random() * 5.6;
    dkPos[i * 3 + 1] = 0.28 + Math.random() * 2.6;
    dkPos[i * 3 + 2] = 5.2 + Math.random() * 5.8;
    dkPhase[i] = Math.random() * Math.PI * 2;
  }
  dkGeo.setAttribute("position", new THREE.BufferAttribute(dkPos, 3));
  const dkMotes = new THREE.Points(
    dkGeo,
    new THREE.PointsMaterial({
      color: 0xc87830,
      size: 0.034,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(dkMotes);
  MAP.dockMotes = dkMotes;
  MAP.dockMotePhase = dkPhase;

  // Dock-door berms
  const dkBag = box(scene, 30.7, 0.28, 6.6, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(30.7, 0, 6.6), mesh: dkBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const dkBag2 = box(scene, 30.9, 0.26, 9.8, 1.5, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(30.9, 0, 9.8), mesh: dkBag2, sx: 1.5, sy: 0.52, sz: 0.75, climb: true });

  // Wrecked flatbed south of dock
  const fbX = 34.8;
  const fbZ = 2.2;
  box(scene, fbX, 0.7, fbZ, 3.6, 0.55, 1.5, rust);
  box(scene, fbX - 1.5, 0.85, fbZ, 0.9, 0.9, 1.35, steel);
  box(scene, fbX - 1.7, 0.35, fbZ + 0.7, 0.45, 0.7, 0.22, oil);
  box(scene, fbX - 1.7, 0.35, fbZ - 0.7, 0.45, 0.7, 0.22, oil);
  box(scene, fbX + 1.4, 0.35, fbZ + 0.7, 0.45, 0.7, 0.22, oil);
  box(scene, fbX + 1.4, 0.35, fbZ - 0.7, 0.45, 0.7, 0.22, oil);
  MAP.flatbed = new THREE.Vector3(fbX, 0, fbZ);
  MAP.crates.push({ pos: MAP.flatbed.clone(), mesh: forks, sx: 3.6, sy: 1.4, sz: 1.6 });

  // NW assay office — door gap on east wall facing the quarry
  const asX = -33.4;
  const asZ = -8.8;
  const asWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  asWall(asX, -5.55, 6.6, 0.55);
  asWall(asX, -12.05, 6.6, 0.55);
  asWall(-36.55, asZ, 0.55, 6.6);
  asWall(-30.25, -6.55, 0.55, 2.15);
  asWall(-30.25, -11.05, 0.55, 2.15);
  box(scene, -30.25, 2.85, asZ, 0.55, 0.5, 2.0, rust);
  box(scene, asX, 3.2, asZ, 6.8, 0.2, 6.8, rust);
  MAP.assayDoor = new THREE.Vector3(-29.9, 0, asZ);
  MAP.assay = new THREE.Vector3(asX, 0, asZ);
  const asFloor = box(scene, asX, 0.04, asZ, 6.0, 0.08, 6.0, concrete);
  asFloor.receiveShadow = true;
  const asLamp = new THREE.PointLight(0xc89840, 0.95, 10);
  asLamp.position.set(asX, 2.85, asZ);
  scene.add(asLamp);
  MAP.assayLamp = asLamp;
  const asRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc89038, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  asRing.rotation.x = -Math.PI / 2;
  asRing.position.copy(MAP.assayDoor).setY(0.05);
  scene.add(asRing);
  MAP.assayRing = asRing;
  const trays = [
    [-35.4, 0.52, -6.7, 1.4, 1.04, 1.2],
    [-35.2, 0.48, -10.8, 1.3, 0.96, 1.15],
    [-32.0, 0.46, -11.0, 1.15, 0.92, 1.05],
  ];
  for (const r of trays) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], crateWood);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  box(scene, asX, 0.72, asZ, 1.5, 0.32, 0.7, steel);
  const scaleArm = box(scene, asX + 0.15, 1.55, asZ, 0.12, 1.1, 0.12, steel);
  MAP.assayScale = scaleArm;
  box(scene, asX + 0.15, 2.05, asZ, 0.55, 0.08, 0.55, rust);
  const asMoteN = 28;
  const asGeo = new THREE.BufferGeometry();
  const asPos = new Float32Array(asMoteN * 3);
  const asPhase = new Float32Array(asMoteN);
  for (let i = 0; i < asMoteN; i++) {
    asPos[i * 3] = -36.2 + Math.random() * 5.6;
    asPos[i * 3 + 1] = 0.28 + Math.random() * 2.6;
    asPos[i * 3 + 2] = -11.9 + Math.random() * 6.0;
    asPhase[i] = Math.random() * Math.PI * 2;
  }
  asGeo.setAttribute("position", new THREE.BufferAttribute(asPos, 3));
  const asMotes = new THREE.Points(
    asGeo,
    new THREE.PointsMaterial({
      color: 0xc89840,
      size: 0.034,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(asMotes);
  MAP.assayMotes = asMotes;
  MAP.assayMotePhase = asPhase;

  // Assay-door berms
  const asBag = box(scene, -28.7, 0.28, -7.2, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-28.7, 0, -7.2), mesh: asBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const asBag2 = box(scene, -28.5, 0.26, -10.4, 1.5, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-28.5, 0, -10.4), mesh: asBag2, sx: 1.5, sy: 0.52, sz: 0.75, climb: true });

  // Wrecked core truck south of assay
  const ctX = -32.6;
  const ctZ = -15.4;
  box(scene, ctX, 0.7, ctZ, 3.4, 0.55, 1.45, rust);
  box(scene, ctX + 1.35, 0.9, ctZ, 0.85, 0.95, 1.3, steel);
  box(scene, ctX - 1.5, 0.35, ctZ + 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, ctX - 1.5, 0.35, ctZ - 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, ctX + 1.3, 0.35, ctZ + 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, ctX + 1.3, 0.35, ctZ - 0.65, 0.42, 0.7, 0.22, oil);
  MAP.coreTruck = new THREE.Vector3(ctX, 0, ctZ);
  MAP.crates.push({ pos: MAP.coreTruck.clone(), mesh: scaleArm, sx: 3.4, sy: 1.4, sz: 1.5 });

  // South weigh station — door gap on west wall facing the pad
  const wgX = 9.2;
  const wgZ = 21.8;
  const wgWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  wgWall(wgX, 25.05, 6.6, 0.55);
  wgWall(wgX, 18.55, 6.6, 0.55);
  wgWall(12.35, wgZ, 0.55, 6.6);
  wgWall(6.05, 23.55, 0.55, 2.15);
  wgWall(6.05, 20.05, 0.55, 2.15);
  box(scene, 6.05, 2.85, wgZ, 0.55, 0.5, 2.0, rust);
  box(scene, wgX, 3.2, wgZ, 6.8, 0.2, 6.8, rust);
  MAP.weighDoor = new THREE.Vector3(5.85, 0, wgZ);
  MAP.weigh = new THREE.Vector3(wgX, 0, wgZ);
  const wgFloor = box(scene, wgX, 0.04, wgZ, 6.0, 0.08, 6.0, concrete);
  wgFloor.receiveShadow = true;
  const wgLamp = new THREE.PointLight(0xc8a040, 0.95, 10);
  wgLamp.position.set(wgX, 2.85, wgZ);
  scene.add(wgLamp);
  MAP.weighLamp = wgLamp;
  const wgRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc8a038, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  wgRing.rotation.x = -Math.PI / 2;
  wgRing.position.copy(MAP.weighDoor).setY(0.05);
  scene.add(wgRing);
  MAP.weighRing = wgRing;
  const desks = [
    [11.3, 0.52, 19.7, 1.4, 1.04, 1.2],
    [11.1, 0.48, 23.8, 1.3, 0.96, 1.15],
    [8.0, 0.46, 24.0, 1.15, 0.92, 1.05],
  ];
  for (const r of desks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], crateWood);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  box(scene, wgX, 0.18, wgZ, 2.4, 0.12, 1.4, steel);
  const boom = box(scene, wgX - 0.2, 1.35, wgZ, 2.4, 0.08, 0.12, rust);
  MAP.weighBoom = boom;
  box(scene, wgX - 1.3, 0.7, wgZ, 0.18, 1.2, 0.18, steel);
  const wgMoteN = 28;
  const wgGeo = new THREE.BufferGeometry();
  const wgPos = new Float32Array(wgMoteN * 3);
  const wgPhase = new Float32Array(wgMoteN);
  for (let i = 0; i < wgMoteN; i++) {
    wgPos[i * 3] = 6.4 + Math.random() * 5.6;
    wgPos[i * 3 + 1] = 0.28 + Math.random() * 2.6;
    wgPos[i * 3 + 2] = 18.8 + Math.random() * 6.0;
    wgPhase[i] = Math.random() * Math.PI * 2;
  }
  wgGeo.setAttribute("position", new THREE.BufferAttribute(wgPos, 3));
  const wgMotes = new THREE.Points(
    wgGeo,
    new THREE.PointsMaterial({
      color: 0xc8a040,
      size: 0.034,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(wgMotes);
  MAP.weighMotes = wgMotes;
  MAP.weighMotePhase = wgPhase;
  const wgLed = new THREE.PointLight(0x40c860, 0.22, 4.2);
  wgLed.position.set(11.2, 1.35, 19.7);
  scene.add(wgLed);
  MAP.weighLed = wgLed;
  box(scene, 11.2, 1.12, 19.7, 0.16, 0.08, 0.16, steel);

  // Weigh-door berms
  const wgBag = box(scene, 4.7, 0.28, 20.2, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(4.7, 0, 20.2), mesh: wgBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const wgBag2 = box(scene, 4.5, 0.26, 23.4, 1.5, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(4.5, 0, 23.4), mesh: wgBag2, sx: 1.5, sy: 0.52, sz: 0.75, climb: true });

  // Wrecked hopper truck south of weigh
  const htX = 10.4;
  const htZ = 15.2;
  box(scene, htX, 0.7, htZ, 3.5, 0.55, 1.5, rust);
  box(scene, htX + 1.2, 1.15, htZ, 1.4, 1.15, 1.45, rust);
  box(scene, htX - 1.5, 0.9, htZ, 0.85, 0.95, 1.3, steel);
  box(scene, htX - 1.6, 0.35, htZ + 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, htX - 1.6, 0.35, htZ - 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, htX + 1.4, 0.35, htZ + 0.65, 0.42, 0.7, 0.22, oil);
  box(scene, htX + 1.4, 0.35, htZ - 0.65, 0.42, 0.7, 0.22, oil);
  MAP.hopperTruck = new THREE.Vector3(htX, 0, htZ);
  MAP.crates.push({ pos: MAP.hopperTruck.clone(), mesh: boom, sx: 3.5, sy: 1.6, sz: 1.5 });

  // West generator shack — door gap on east wall facing the pad
  const gnX = -18.5;
  const gnZ = -7.0;
  const gnWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  gnWall(gnX, -3.75, 7.4, 0.5);
  gnWall(gnX, -10.25, 7.4, 0.5);
  gnWall(-22.05, gnZ, 0.5, 6.6);
  gnWall(-14.95, -4.95, 0.5, 2.0);
  gnWall(-14.95, -9.05, 0.5, 2.0);
  box(scene, -14.95, 2.8, gnZ, 0.5, 0.5, 2.1, rust);
  box(scene, gnX, 3.1, gnZ, 7.6, 0.18, 6.8, rust);
  MAP.genDoor = new THREE.Vector3(-14.7, 0, gnZ);
  MAP.gen = new THREE.Vector3(gnX, 0, gnZ);
  const gnFloor = box(scene, gnX, 0.04, gnZ, 6.8, 0.08, 6.0, concrete);
  gnFloor.receiveShadow = true;
  const gnLamp = new THREE.PointLight(0x70a0c0, 1.0, 11);
  gnLamp.position.set(gnX, 2.8, gnZ);
  scene.add(gnLamp);
  MAP.genLamp = gnLamp;
  const gnRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x68a0c8, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  gnRing.rotation.x = -Math.PI / 2;
  gnRing.position.copy(MAP.genDoor).setY(0.05);
  scene.add(gnRing);
  MAP.genRing = gnRing;
  const gensets = [
    [-21.0, 0.62, -5.1, 1.5, 1.24, 1.3],
    [-21.0, 0.58, -8.9, 1.45, 1.16, 1.25],
    [-16.6, 0.5, -4.8, 1.2, 1.0, 1.1],
  ];
  for (const r of gensets) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  box(scene, gnX, 0.9, gnZ, 0.55, 1.7, 0.55, rust);
  const fanBlade = box(scene, gnX, 1.55, gnZ + 0.05, 1.15, 0.06, 0.18, steel);
  MAP.genFan = fanBlade;
  const gnMoteN = 30;
  const gnGeo = new THREE.BufferGeometry();
  const gnPos = new Float32Array(gnMoteN * 3);
  const gnPhase = new Float32Array(gnMoteN);
  for (let i = 0; i < gnMoteN; i++) {
    gnPos[i * 3] = -21.8 + Math.random() * 6.6;
    gnPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    gnPos[i * 3 + 2] = -10.0 + Math.random() * 6.0;
    gnPhase[i] = Math.random() * Math.PI * 2;
  }
  gnGeo.setAttribute("position", new THREE.BufferAttribute(gnPos, 3));
  const gnMotes = new THREE.Points(
    gnGeo,
    new THREE.PointsMaterial({
      color: 0x88b8d0,
      size: 0.034,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(gnMotes);
  MAP.genMotes = gnMotes;
  MAP.genMotePhase = gnPhase;
  const gnLed = new THREE.PointLight(0x40e070, 0.24, 4.4);
  gnLed.position.set(-21.0, 1.4, -5.1);
  scene.add(gnLed);
  MAP.genLed = gnLed;
  box(scene, -21.0, 1.28, -5.1, 0.14, 0.08, 0.14, steel);

  // Gen-door berms + cook-off drums
  const gnBag = box(scene, -13.5, 0.28, -5.4, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-13.5, 0, -5.4), mesh: gnBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const gnBag2 = box(scene, -13.3, 0.26, -8.6, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-13.3, 0, -8.6), mesh: gnBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const gnDrum = box(scene, -12.6, 0.55, -6.9, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-12.6, 0, -6.9), mesh: gnDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const gnDrum2 = box(scene, -12.4, 0.55, -8.0, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-12.4, 0, -8.0), mesh: gnDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked service van south of gen
  const svX = -18.2;
  const svZ = -13.6;
  box(scene, svX, 0.68, svZ, 3.4, 0.52, 1.45, rust);
  box(scene, svX + 1.1, 1.12, svZ, 1.35, 1.1, 1.4, rust);
  box(scene, svX - 1.45, 0.88, svZ, 0.8, 0.9, 1.25, steel);
  box(scene, svX - 1.55, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX - 1.55, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.35, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.35, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.serviceVan = new THREE.Vector3(svX, 0, svZ);
  MAP.crates.push({ pos: MAP.serviceVan.clone(), mesh: fanBlade, sx: 3.4, sy: 1.5, sz: 1.45 });

  // East compressor house — door gap on west wall facing the pad
  const cpX = 16.8;
  const cpZ = 11.2;
  const cpWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  cpWall(cpX, 14.25, 7.4, 0.5);
  cpWall(cpX, 8.15, 7.4, 0.5);
  cpWall(20.25, cpZ, 0.5, 6.2);
  cpWall(13.35, 13.15, 0.5, 2.0);
  cpWall(13.35, 9.25, 0.5, 2.0);
  box(scene, 13.35, 2.8, cpZ, 0.5, 0.5, 2.1, rust);
  box(scene, cpX, 3.1, cpZ, 7.6, 0.18, 6.4, rust);
  MAP.compDoor = new THREE.Vector3(13.1, 0, cpZ);
  MAP.comp = new THREE.Vector3(cpX, 0, cpZ);
  const cpFloor = box(scene, cpX, 0.04, cpZ, 6.8, 0.08, 5.8, concrete);
  cpFloor.receiveShadow = true;
  const cpLamp = new THREE.PointLight(0xc09050, 1.05, 11);
  cpLamp.position.set(cpX, 2.8, cpZ);
  scene.add(cpLamp);
  MAP.compLamp = cpLamp;
  const cpRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc88840, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  cpRing.rotation.x = -Math.PI / 2;
  cpRing.position.copy(MAP.compDoor).setY(0.05);
  scene.add(cpRing);
  MAP.compRing = cpRing;
  const tanks = [
    [19.3, 0.7, 9.4, 1.35, 1.4, 1.25],
    [19.2, 0.66, 13.0, 1.3, 1.32, 1.2],
    [14.9, 0.52, 13.1, 1.15, 1.04, 1.05],
  ];
  for (const r of tanks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const piston = box(scene, 16.8, 1.15, 11.2, 0.42, 1.5, 0.42, rust);
  MAP.compPiston = piston;
  const cpMoteN = 30;
  const cpGeo = new THREE.BufferGeometry();
  const cpPos = new Float32Array(cpMoteN * 3);
  const cpPhase = new Float32Array(cpMoteN);
  for (let i = 0; i < cpMoteN; i++) {
    cpPos[i * 3] = 13.6 + Math.random() * 6.4;
    cpPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    cpPos[i * 3 + 2] = 8.3 + Math.random() * 5.8;
    cpPhase[i] = Math.random() * Math.PI * 2;
  }
  cpGeo.setAttribute("position", new THREE.BufferAttribute(cpPos, 3));
  const cpMotes = new THREE.Points(
    cpGeo,
    new THREE.PointsMaterial({
      color: 0xd0a060,
      size: 0.034,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(cpMotes);
  MAP.compMotes = cpMotes;
  MAP.compMotePhase = cpPhase;
  const cpLed = new THREE.PointLight(0xe07040, 0.24, 4.4);
  cpLed.position.set(19.3, 1.5, 9.4);
  scene.add(cpLed);
  MAP.compLed = cpLed;
  box(scene, 19.3, 1.38, 9.4, 0.14, 0.08, 0.14, steel);

  // Comp-door berms + cook-off drums
  const cpBag = box(scene, 11.9, 0.28, 12.8, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(11.9, 0, 12.8), mesh: cpBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const cpBag2 = box(scene, 11.7, 0.26, 9.6, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(11.7, 0, 9.6), mesh: cpBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const cpDrum = box(scene, 11.1, 0.55, 11.3, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(11.1, 0, 11.3), mesh: cpDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const cpDrum2 = box(scene, 10.9, 0.55, 10.2, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(10.9, 0, 10.2), mesh: cpDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked air truck south of compressor
  const atX = 16.6;
  const atZ = 4.8;
  box(scene, atX, 0.68, atZ, 3.4, 0.52, 1.45, rust);
  box(scene, atX + 1.1, 1.12, atZ, 1.35, 1.1, 1.4, rust);
  box(scene, atX - 1.45, 0.88, atZ, 0.8, 0.9, 1.25, steel);
  box(scene, atX - 1.55, 0.34, atZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, atX - 1.55, 0.34, atZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, atX + 1.35, 0.34, atZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, atX + 1.35, 0.34, atZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.airTruck = new THREE.Vector3(atX, 0, atZ);
  MAP.crates.push({ pos: MAP.airTruck.clone(), mesh: piston, sx: 3.4, sy: 1.5, sz: 1.45 });

  // North-west lube bay — door gap on east wall facing the pad
  const lbX = -6.8;
  const lbZ = -16.2;
  const lbWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  lbWall(lbX, -13.15, 7.2, 0.5);
  lbWall(lbX, -19.25, 7.2, 0.5);
  lbWall(-10.25, lbZ, 0.5, 6.2);
  lbWall(-3.35, -14.15, 0.5, 2.0);
  lbWall(-3.35, -18.25, 0.5, 2.0);
  box(scene, -3.35, 2.8, lbZ, 0.5, 0.5, 2.1, rust);
  box(scene, lbX, 3.1, lbZ, 7.4, 0.18, 6.4, rust);
  MAP.lubeDoor = new THREE.Vector3(-3.1, 0, lbZ);
  MAP.lube = new THREE.Vector3(lbX, 0, lbZ);
  const lbFloor = box(scene, lbX, 0.04, lbZ, 6.6, 0.08, 5.8, concrete);
  lbFloor.receiveShadow = true;
  const lbLamp = new THREE.PointLight(0xc8a040, 1.02, 11);
  lbLamp.position.set(lbX, 2.8, lbZ);
  scene.add(lbLamp);
  MAP.lubeLamp = lbLamp;
  const lbRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd0a038, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  lbRing.rotation.x = -Math.PI / 2;
  lbRing.position.copy(MAP.lubeDoor).setY(0.05);
  scene.add(lbRing);
  MAP.lubeRing = lbRing;
  const racks = [
    [-9.2, 0.62, -14.4, 1.4, 1.24, 1.2],
    [-9.1, 0.58, -18.1, 1.35, 1.16, 1.15],
    [-4.8, 0.5, -14.2, 1.15, 1.0, 1.05],
  ];
  for (const r of racks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const drumSpin = box(scene, lbX, 0.72, lbZ, 0.85, 1.44, 0.85, rust);
  MAP.lubeDrum = drumSpin;
  const lbMoteN = 30;
  const lbGeo = new THREE.BufferGeometry();
  const lbPos = new Float32Array(lbMoteN * 3);
  const lbPhase = new Float32Array(lbMoteN);
  for (let i = 0; i < lbMoteN; i++) {
    lbPos[i * 3] = -10.1 + Math.random() * 6.6;
    lbPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    lbPos[i * 3 + 2] = -19.1 + Math.random() * 5.8;
    lbPhase[i] = Math.random() * Math.PI * 2;
  }
  lbGeo.setAttribute("position", new THREE.BufferAttribute(lbPos, 3));
  const lbMotes = new THREE.Points(
    lbGeo,
    new THREE.PointsMaterial({
      color: 0xd0b050,
      size: 0.034,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(lbMotes);
  MAP.lubeMotes = lbMotes;
  MAP.lubeMotePhase = lbPhase;
  const lbLed = new THREE.PointLight(0xe0a030, 0.24, 4.4);
  lbLed.position.set(-9.2, 1.4, -14.4);
  scene.add(lbLed);
  MAP.lubeLed = lbLed;
  box(scene, -9.2, 1.28, -14.4, 0.14, 0.08, 0.14, steel);

  // Lube-door berms + cook-off drums
  const lbBag = box(scene, -1.9, 0.28, -14.6, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-1.9, 0, -14.6), mesh: lbBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const lbBag2 = box(scene, -1.7, 0.26, -17.8, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-1.7, 0, -17.8), mesh: lbBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const lbCook = box(scene, -1.1, 0.55, -16.3, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-1.1, 0, -16.3), mesh: lbCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const lbCook2 = box(scene, -0.9, 0.55, -15.2, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-0.9, 0, -15.2), mesh: lbCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked grease truck south of lube
  const gtX = -6.5;
  const gtZ = -22.4;
  box(scene, gtX, 0.68, gtZ, 3.4, 0.52, 1.45, rust);
  box(scene, gtX + 1.1, 1.12, gtZ, 1.35, 1.1, 1.4, rust);
  box(scene, gtX - 1.45, 0.88, gtZ, 0.8, 0.9, 1.25, steel);
  box(scene, gtX - 1.55, 0.34, gtZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, gtX - 1.55, 0.34, gtZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, gtX + 1.35, 0.34, gtZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, gtX + 1.35, 0.34, gtZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.greaseTruck = new THREE.Vector3(gtX, 0, gtZ);
  MAP.crates.push({ pos: MAP.greaseTruck.clone(), mesh: drumSpin, sx: 3.4, sy: 1.5, sz: 1.45 });

  // South wash rack — door gap on north wall facing the pad
  const wsX = 8.2;
  const wsZ = -27.4;
  const wsWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  wsWall(wsX, -30.55, 7.0, 0.5);
  wsWall(4.85, wsZ, 0.5, 6.4);
  wsWall(11.55, wsZ, 0.5, 6.4);
  wsWall(6.15, -24.35, 2.2, 0.5);
  wsWall(10.25, -24.35, 2.2, 0.5);
  box(scene, wsX, 2.8, -24.35, 2.4, 0.5, 0.5, rust);
  box(scene, wsX, 3.1, wsZ, 7.2, 0.18, 6.6, rust);
  MAP.washDoor = new THREE.Vector3(wsX, 0, -24.1);
  MAP.wash = new THREE.Vector3(wsX, 0, wsZ);
  const wsFloor = box(scene, wsX, 0.04, wsZ, 6.4, 0.08, 5.8, concrete);
  wsFloor.receiveShadow = true;
  const wsLamp = new THREE.PointLight(0x88c0d8, 1.05, 11);
  wsLamp.position.set(wsX, 2.8, wsZ);
  scene.add(wsLamp);
  MAP.washLamp = wsLamp;
  const wsRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x70c0d8, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  wsRing.rotation.x = -Math.PI / 2;
  wsRing.position.copy(MAP.washDoor).setY(0.05);
  scene.add(wsRing);
  MAP.washRing = wsRing;
  const wsRacks = [
    [5.7, 0.62, -29.4, 1.35, 1.24, 1.15],
    [10.6, 0.58, -29.5, 1.3, 1.16, 1.1],
    [5.8, 0.5, -25.4, 1.15, 1.0, 1.05],
  ];
  for (const r of wsRacks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const wand = box(scene, wsX, 1.55, wsZ, 0.18, 0.18, 2.4, steel);
  MAP.washWand = wand;
  const nozzle = box(scene, wsX, 1.35, wsZ + 1.15, 0.22, 0.28, 0.28, rust);
  MAP.washNozzle = nozzle;
  const wsMoteN = 32;
  const wsGeo = new THREE.BufferGeometry();
  const wsPos = new Float32Array(wsMoteN * 3);
  const wsPhase = new Float32Array(wsMoteN);
  for (let i = 0; i < wsMoteN; i++) {
    wsPos[i * 3] = 5.0 + Math.random() * 6.4;
    wsPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    wsPos[i * 3 + 2] = -30.4 + Math.random() * 5.8;
    wsPhase[i] = Math.random() * Math.PI * 2;
  }
  wsGeo.setAttribute("position", new THREE.BufferAttribute(wsPos, 3));
  const wsMotes = new THREE.Points(
    wsGeo,
    new THREE.PointsMaterial({
      color: 0xa8d8e8,
      size: 0.036,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(wsMotes);
  MAP.washMotes = wsMotes;
  MAP.washMotePhase = wsPhase;
  const wsLed = new THREE.PointLight(0x70d0e0, 0.26, 4.6);
  wsLed.position.set(5.7, 1.4, -29.4);
  scene.add(wsLed);
  MAP.washLed = wsLed;
  box(scene, 5.7, 1.28, -29.4, 0.14, 0.08, 0.14, steel);

  // Wash-door berms + cook-off drums
  const wsBag = box(scene, 6.1, 0.28, -22.6, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(6.1, 0, -22.6), mesh: wsBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const wsBag2 = box(scene, 10.3, 0.26, -22.5, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(10.3, 0, -22.5), mesh: wsBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const wsCook = box(scene, 8.2, 0.55, -22.0, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(8.2, 0, -22.0), mesh: wsCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const wsCook2 = box(scene, 9.2, 0.55, -21.6, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(9.2, 0, -21.6), mesh: wsCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked tanker south of wash
  const tkX = 8.4;
  const tkZ = -34.2;
  box(scene, tkX, 0.72, tkZ, 3.8, 0.56, 1.5, rust);
  box(scene, tkX + 0.2, 1.28, tkZ, 2.6, 1.05, 1.35, rust);
  box(scene, tkX - 1.65, 0.92, tkZ, 0.85, 0.95, 1.3, steel);
  box(scene, tkX - 1.75, 0.34, tkZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, tkX - 1.75, 0.34, tkZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, tkX + 1.55, 0.34, tkZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, tkX + 1.55, 0.34, tkZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.washTanker = new THREE.Vector3(tkX, 0, tkZ);
  MAP.crates.push({ pos: MAP.washTanker.clone(), mesh: wand, sx: 3.8, sy: 1.6, sz: 1.5 });

  // East tire bay — door gap on west wall facing the quarry
  const trX = 28.4;
  const trZ = -1.2;
  const rubber = new THREE.MeshLambertMaterial({ color: 0x2a2420 });
  const trWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  trWall(trX, -4.45, 7.0, 0.5);
  trWall(trX, 2.05, 7.0, 0.5);
  trWall(31.75, trZ, 0.5, 6.4);
  trWall(25.05, -3.25, 0.5, 2.3);
  trWall(25.05, 0.85, 0.5, 2.3);
  box(scene, 25.05, 2.8, trZ, 0.5, 0.5, 2.4, rust);
  box(scene, trX, 3.1, trZ, 7.2, 0.18, 6.6, rust);
  MAP.tireDoor = new THREE.Vector3(24.85, 0, trZ);
  MAP.tire = new THREE.Vector3(trX, 0, trZ);
  const trFloor = box(scene, trX, 0.04, trZ, 6.4, 0.08, 5.8, concrete);
  trFloor.receiveShadow = true;
  const trLamp = new THREE.PointLight(0xc89848, 1.05, 11);
  trLamp.position.set(trX, 2.8, trZ);
  scene.add(trLamp);
  MAP.tireLamp = trLamp;
  const trRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd08830, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  trRing.rotation.x = -Math.PI / 2;
  trRing.position.copy(MAP.tireDoor).setY(0.05);
  scene.add(trRing);
  MAP.tireRing = trRing;
  const trStacks = [
    [26.2, 0.42, -3.3, 1.15, 0.84, 1.15],
    [30.5, 0.48, -3.35, 1.2, 0.96, 1.2],
    [30.55, 0.4, 0.55, 1.1, 0.8, 1.1],
  ];
  for (const r of trStacks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], rubber);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const balancer = box(scene, trX, 0.95, trZ, 0.85, 1.1, 0.85, steel);
  MAP.tireSpin = balancer;
  const spinCap = box(scene, trX, 1.58, trZ, 0.55, 0.16, 0.55, rust);
  MAP.tireCap = spinCap;
  const trMoteN = 32;
  const trGeo = new THREE.BufferGeometry();
  const trPos = new Float32Array(trMoteN * 3);
  const trPhase = new Float32Array(trMoteN);
  for (let i = 0; i < trMoteN; i++) {
    trPos[i * 3] = 25.2 + Math.random() * 6.4;
    trPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    trPos[i * 3 + 2] = -4.3 + Math.random() * 5.8;
    trPhase[i] = Math.random() * Math.PI * 2;
  }
  trGeo.setAttribute("position", new THREE.BufferAttribute(trPos, 3));
  const trMotes = new THREE.Points(
    trGeo,
    new THREE.PointsMaterial({
      color: 0xc8a070,
      size: 0.036,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(trMotes);
  MAP.tireMotes = trMotes;
  MAP.tireMotePhase = trPhase;
  const trLed = new THREE.PointLight(0xe0a040, 0.26, 4.6);
  trLed.position.set(26.2, 1.4, -3.3);
  scene.add(trLed);
  MAP.tireLed = trLed;
  box(scene, 26.2, 1.28, -3.3, 0.14, 0.08, 0.14, steel);

  // Tire-door berms + cook-off drums
  const trBag = box(scene, 23.4, 0.28, -2.4, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(23.4, 0, -2.4), mesh: trBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const trBag2 = box(scene, 23.5, 0.26, 0.05, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(23.5, 0, 0.05), mesh: trBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const trCook = box(scene, 22.9, 0.55, -1.2, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(22.9, 0, -1.2), mesh: trCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const trCook2 = box(scene, 22.5, 0.55, -0.2, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(22.5, 0, -0.2), mesh: trCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked tire truck south of bay
  const ttX = 28.6;
  const ttZ = -8.6;
  box(scene, ttX, 0.72, ttZ, 3.6, 0.54, 1.48, rust);
  box(scene, ttX + 0.15, 1.22, ttZ, 2.4, 0.98, 1.32, rubber);
  box(scene, ttX - 1.55, 0.9, ttZ, 0.82, 0.92, 1.28, steel);
  box(scene, ttX - 1.65, 0.34, ttZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, ttX - 1.65, 0.34, ttZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, ttX + 1.45, 0.34, ttZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, ttX + 1.45, 0.34, ttZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.tireTruck = new THREE.Vector3(ttX, 0, ttZ);
  MAP.crates.push({ pos: MAP.tireTruck.clone(), mesh: balancer, sx: 3.6, sy: 1.5, sz: 1.48 });

  // West paint booth — door gap on east wall facing the pad
  const ptX = -16.8;
  const ptZ = 15.5;
  const ptWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  ptWall(ptX, 12.25, 7.2, 0.5);
  ptWall(ptX, 18.75, 7.2, 0.5);
  ptWall(-20.25, ptZ, 0.5, 6.4);
  ptWall(-13.35, 13.35, 0.5, 2.2);
  ptWall(-13.35, 17.65, 0.5, 2.2);
  box(scene, -13.35, 2.8, ptZ, 0.5, 0.5, 2.4, rust);
  box(scene, ptX, 3.1, ptZ, 7.4, 0.18, 6.6, rust);
  MAP.paintDoor = new THREE.Vector3(-13.15, 0, ptZ);
  MAP.paint = new THREE.Vector3(ptX, 0, ptZ);
  const ptFloor = box(scene, ptX, 0.04, ptZ, 6.6, 0.08, 5.8, concrete);
  ptFloor.receiveShadow = true;
  const ptLamp = new THREE.PointLight(0xc07040, 1.05, 11);
  ptLamp.position.set(ptX, 2.8, ptZ);
  scene.add(ptLamp);
  MAP.paintLamp = ptLamp;
  const ptRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd06030, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  ptRing.rotation.x = -Math.PI / 2;
  ptRing.position.copy(MAP.paintDoor).setY(0.05);
  scene.add(ptRing);
  MAP.paintRing = ptRing;
  const ptRacks = [
    [-19.2, 0.7, 13.2, 1.3, 1.4, 0.42],
    [-19.15, 0.7, 17.7, 1.3, 1.4, 0.42],
    [-14.5, 0.55, 13.15, 1.15, 1.1, 0.4],
  ];
  for (const r of ptRacks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const gunArm = box(scene, ptX, 1.35, ptZ, 0.22, 1.7, 0.22, steel);
  MAP.paintArm = gunArm;
  const gunHead = box(scene, ptX + 0.55, 1.85, ptZ, 0.7, 0.16, 0.16, rust);
  MAP.paintHead = gunHead;
  const ptMoteN = 34;
  const ptGeo = new THREE.BufferGeometry();
  const ptPos = new Float32Array(ptMoteN * 3);
  const ptPhase = new Float32Array(ptMoteN);
  for (let i = 0; i < ptMoteN; i++) {
    ptPos[i * 3] = -20.1 + Math.random() * 6.6;
    ptPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    ptPos[i * 3 + 2] = 12.4 + Math.random() * 6.0;
    ptPhase[i] = Math.random() * Math.PI * 2;
  }
  ptGeo.setAttribute("position", new THREE.BufferAttribute(ptPos, 3));
  const ptMotes = new THREE.Points(
    ptGeo,
    new THREE.PointsMaterial({
      color: 0xd08050,
      size: 0.038,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(ptMotes);
  MAP.paintMotes = ptMotes;
  MAP.paintMotePhase = ptPhase;
  const ptLed = new THREE.PointLight(0xe06030, 0.28, 4.6);
  ptLed.position.set(-19.2, 1.5, 13.2);
  scene.add(ptLed);
  MAP.paintLed = ptLed;
  box(scene, -19.2, 1.38, 13.2, 0.14, 0.08, 0.14, steel);

  // Paint-door berms + cook-off drums
  const ptBag = box(scene, -12.0, 0.28, 14.4, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-12.0, 0, 14.4), mesh: ptBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const ptBag2 = box(scene, -12.1, 0.26, 16.5, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-12.1, 0, 16.5), mesh: ptBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const ptCook = box(scene, -11.5, 0.55, 15.5, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-11.5, 0, 15.5), mesh: ptCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const ptCook2 = box(scene, -11.15, 0.55, 16.3, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-11.15, 0, 16.3), mesh: ptCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  // Wrecked paint truck south of booth
  const pvX = -16.6;
  const pvZ = 9.4;
  box(scene, pvX, 0.72, pvZ, 3.6, 0.54, 1.48, rust);
  box(scene, pvX + 0.15, 1.22, pvZ, 2.4, 0.98, 1.32, rust);
  box(scene, pvX - 1.55, 0.9, pvZ, 0.82, 0.92, 1.28, steel);
  box(scene, pvX - 1.65, 0.34, pvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX - 1.65, 0.34, pvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX + 1.45, 0.34, pvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX + 1.45, 0.34, pvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.paintTruck = new THREE.Vector3(pvX, 0, pvZ);
  MAP.crates.push({ pos: MAP.paintTruck.clone(), mesh: gunArm, sx: 3.6, sy: 1.5, sz: 1.48 });

  // North parts crib — door gap on east wall facing the pad
  const prX = -5.6;
  const prZ = 7.8;
  const binMat = new THREE.MeshLambertMaterial({ color: 0x3a3830 });
  const prWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  prWall(prX, 4.55, 7.0, 0.5);
  prWall(prX, 11.05, 7.0, 0.5);
  prWall(-8.95, prZ, 0.5, 6.4);
  prWall(-2.25, 5.75, 0.5, 2.3);
  prWall(-2.25, 9.85, 0.5, 2.3);
  box(scene, -2.25, 2.8, prZ, 0.5, 0.5, 2.4, rust);
  box(scene, prX, 3.1, prZ, 7.2, 0.18, 6.6, rust);
  MAP.partsDoor = new THREE.Vector3(-2.05, 0, prZ);
  MAP.parts = new THREE.Vector3(prX, 0, prZ);
  const prFloor = box(scene, prX, 0.04, prZ, 6.4, 0.08, 5.8, concrete);
  prFloor.receiveShadow = true;
  const prLamp = new THREE.PointLight(0xc8a050, 1.05, 11);
  prLamp.position.set(prX, 2.8, prZ);
  scene.add(prLamp);
  MAP.partsLamp = prLamp;
  const prRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc89038, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  prRing.rotation.x = -Math.PI / 2;
  prRing.position.copy(MAP.partsDoor).setY(0.05);
  scene.add(prRing);
  MAP.partsRing = prRing;
  const prBins = [
    [-7.8, 0.48, 5.7, 1.2, 0.96, 1.15],
    [-3.5, 0.42, 5.65, 1.1, 0.84, 1.1],
    [-7.75, 0.4, 9.6, 1.15, 0.8, 1.1],
  ];
  for (const r of prBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], binMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const carousel = box(scene, prX, 0.92, prZ, 1.05, 0.7, 1.05, steel);
  MAP.partsSpin = carousel;
  const carCap = box(scene, prX, 1.32, prZ, 0.72, 0.12, 0.72, rust);
  MAP.partsCap = carCap;
  const prMoteN = 32;
  const prGeo = new THREE.BufferGeometry();
  const prPos = new Float32Array(prMoteN * 3);
  const prPhase = new Float32Array(prMoteN);
  for (let i = 0; i < prMoteN; i++) {
    prPos[i * 3] = -8.9 + Math.random() * 6.4;
    prPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    prPos[i * 3 + 2] = 4.7 + Math.random() * 5.8;
    prPhase[i] = Math.random() * Math.PI * 2;
  }
  prGeo.setAttribute("position", new THREE.BufferAttribute(prPos, 3));
  const prMotes = new THREE.Points(
    prGeo,
    new THREE.PointsMaterial({
      color: 0xc8a070,
      size: 0.036,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(prMotes);
  MAP.partsMotes = prMotes;
  MAP.partsMotePhase = prPhase;
  const prLed = new THREE.PointLight(0xe0a040, 0.26, 4.6);
  prLed.position.set(-7.8, 1.4, 5.7);
  scene.add(prLed);
  MAP.partsLed = prLed;
  box(scene, -7.8, 1.28, 5.7, 0.14, 0.08, 0.14, steel);

  const prBag = box(scene, -0.7, 0.28, 6.6, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-0.7, 0, 6.6), mesh: prBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const prBag2 = box(scene, -0.6, 0.26, 8.95, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-0.6, 0, 8.95), mesh: prBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const prCook = box(scene, -0.15, 0.55, 7.8, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-0.15, 0, 7.8), mesh: prCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const prCook2 = box(scene, 0.25, 0.55, 8.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(0.25, 0, 8.7), mesh: prCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const pbX = -5.4;
  const pbZ = 1.6;
  box(scene, pbX, 0.72, pbZ, 3.6, 0.54, 1.48, rust);
  box(scene, pbX + 0.15, 1.22, pbZ, 2.4, 0.98, 1.32, binMat);
  box(scene, pbX - 1.55, 0.9, pbZ, 0.82, 0.92, 1.28, steel);
  box(scene, pbX - 1.65, 0.34, pbZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pbX - 1.65, 0.34, pbZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pbX + 1.45, 0.34, pbZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pbX + 1.45, 0.34, pbZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.partsTruck = new THREE.Vector3(pbX, 0, pbZ);
  MAP.crates.push({ pos: MAP.partsTruck.clone(), mesh: carousel, sx: 3.6, sy: 1.5, sz: 1.48 });

  // South weld bay — door gap on north wall facing the pad
  const wdX = 5.2;
  const wdZ = -17.6;
  const slag = new THREE.MeshLambertMaterial({ color: 0x2c2a26 });
  const wdWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  wdWall(1.85, wdZ, 0.5, 6.4);
  wdWall(8.55, wdZ, 0.5, 6.4);
  wdWall(wdX, -20.85, 6.6, 0.5);
  wdWall(3.05, -14.35, 2.3, 0.5);
  wdWall(7.35, -14.35, 2.3, 0.5);
  box(scene, wdX, 2.8, -14.35, 2.4, 0.5, 0.5, rust);
  box(scene, wdX, 3.1, wdZ, 7.0, 0.18, 6.6, rust);
  MAP.weldDoor = new THREE.Vector3(wdX, 0, -14.15);
  MAP.weld = new THREE.Vector3(wdX, 0, wdZ);
  const wdFloor = box(scene, wdX, 0.04, wdZ, 6.2, 0.08, 5.8, concrete);
  wdFloor.receiveShadow = true;
  const wdLamp = new THREE.PointLight(0xc07040, 1.08, 11);
  wdLamp.position.set(wdX, 2.8, wdZ);
  scene.add(wdLamp);
  MAP.weldLamp = wdLamp;
  const wdRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd05028, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  wdRing.rotation.x = -Math.PI / 2;
  wdRing.position.copy(MAP.weldDoor).setY(0.05);
  scene.add(wdRing);
  MAP.weldRing = wdRing;
  const wdBenches = [
    [3.0, 0.46, -19.6, 1.35, 0.92, 1.15],
    [7.4, 0.42, -19.7, 1.2, 0.84, 1.1],
    [7.35, 0.4, -15.7, 1.15, 0.8, 1.1],
  ];
  for (const r of wdBenches) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], slag);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const torchArm = box(scene, wdX, 1.35, wdZ, 0.18, 1.55, 0.18, steel);
  MAP.weldArm = torchArm;
  const torchHead = box(scene, wdX + 0.55, 2.05, wdZ, 0.42, 0.18, 0.22, rust);
  MAP.weldHead = torchHead;
  const wdMoteN = 32;
  const wdGeo = new THREE.BufferGeometry();
  const wdPos = new Float32Array(wdMoteN * 3);
  const wdPhase = new Float32Array(wdMoteN);
  for (let i = 0; i < wdMoteN; i++) {
    wdPos[i * 3] = 2.0 + Math.random() * 6.2;
    wdPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    wdPos[i * 3 + 2] = -20.7 + Math.random() * 5.8;
    wdPhase[i] = Math.random() * Math.PI * 2;
  }
  wdGeo.setAttribute("position", new THREE.BufferAttribute(wdPos, 3));
  const wdMotes = new THREE.Points(
    wdGeo,
    new THREE.PointsMaterial({
      color: 0xe07040,
      size: 0.036,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(wdMotes);
  MAP.weldMotes = wdMotes;
  MAP.weldMotePhase = wdPhase;
  const wdLed = new THREE.PointLight(0xff7030, 0.3, 4.8);
  wdLed.position.set(3.0, 1.4, -19.6);
  scene.add(wdLed);
  MAP.weldLed = wdLed;
  box(scene, 3.0, 1.28, -19.6, 0.14, 0.08, 0.14, steel);

  const wdBag = box(scene, 3.9, 0.28, -12.7, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(3.9, 0, -12.7), mesh: wdBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const wdBag2 = box(scene, 6.5, 0.26, -12.6, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(6.5, 0, -12.6), mesh: wdBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const wdCook = box(scene, 5.2, 0.55, -12.2, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(5.2, 0, -12.2), mesh: wdCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const wdCook2 = box(scene, 4.3, 0.55, -11.8, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(4.3, 0, -11.8), mesh: wdCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const wvX = 10.6;
  const wvZ = -17.4;
  box(scene, wvX, 0.72, wvZ, 3.6, 0.54, 1.48, rust);
  box(scene, wvX + 0.15, 1.22, wvZ, 2.4, 0.98, 1.32, slag);
  box(scene, wvX - 1.55, 0.9, wvZ, 0.82, 0.92, 1.28, steel);
  box(scene, wvX - 1.65, 0.34, wvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, wvX - 1.65, 0.34, wvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, wvX + 1.45, 0.34, wvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, wvX + 1.45, 0.34, wvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.weldTruck = new THREE.Vector3(wvX, 0, wvZ);
  MAP.crates.push({ pos: MAP.weldTruck.clone(), mesh: torchArm, sx: 3.6, sy: 1.5, sz: 1.48 });

  // North battery shack — door gap on south wall facing the pad
  const btX = 16.4;
  const btZ = 28.2;
  const cellMat = new THREE.MeshLambertMaterial({ color: 0x2a3228 });
  const btWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  btWall(13.25, btZ, 0.5, 6.4);
  btWall(19.55, btZ, 0.5, 6.4);
  btWall(btX, 31.25, 6.4, 0.5);
  btWall(14.45, 25.15, 2.3, 0.5);
  btWall(18.35, 25.15, 2.3, 0.5);
  box(scene, btX, 2.8, 25.15, 2.4, 0.5, 0.5, rust);
  box(scene, btX, 3.1, btZ, 6.6, 0.18, 6.4, rust);
  MAP.battDoor = new THREE.Vector3(btX, 0, 24.95);
  MAP.batt = new THREE.Vector3(btX, 0, btZ);
  const btFloor = box(scene, btX, 0.04, btZ, 5.8, 0.08, 5.6, concrete);
  btFloor.receiveShadow = true;
  const btLamp = new THREE.PointLight(0x70c080, 1.05, 11);
  btLamp.position.set(btX, 2.8, btZ);
  scene.add(btLamp);
  MAP.battLamp = btLamp;
  const btRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x50c070, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  btRing.rotation.x = -Math.PI / 2;
  btRing.position.copy(MAP.battDoor).setY(0.05);
  scene.add(btRing);
  MAP.battRing = btRing;
  const racks = [
    [14.2, 0.48, 29.8, 1.2, 0.96, 1.15],
    [18.5, 0.42, 29.9, 1.1, 0.84, 1.1],
    [18.4, 0.4, 26.6, 1.15, 0.8, 1.1],
  ];
  for (const r of racks) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], cellMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const busBar = box(scene, btX, 1.05, btZ, 1.85, 0.18, 0.28, steel);
  MAP.battBar = busBar;
  const sparkHead = box(scene, btX + 0.7, 1.18, btZ, 0.22, 0.12, 0.22, rust);
  MAP.battSpark = sparkHead;
  const btMoteN = 32;
  const btGeo = new THREE.BufferGeometry();
  const btPos = new Float32Array(btMoteN * 3);
  const btPhase = new Float32Array(btMoteN);
  for (let i = 0; i < btMoteN; i++) {
    btPos[i * 3] = 13.4 + Math.random() * 6.0;
    btPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    btPos[i * 3 + 2] = 25.2 + Math.random() * 5.8;
    btPhase[i] = Math.random() * Math.PI * 2;
  }
  btGeo.setAttribute("position", new THREE.BufferAttribute(btPos, 3));
  const btMotes = new THREE.Points(
    btGeo,
    new THREE.PointsMaterial({
      color: 0x80e090,
      size: 0.036,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(btMotes);
  MAP.battMotes = btMotes;
  MAP.battMotePhase = btPhase;
  const btLed = new THREE.PointLight(0x50ff70, 0.28, 4.6);
  btLed.position.set(14.2, 1.4, 29.8);
  scene.add(btLed);
  MAP.battLed = btLed;
  box(scene, 14.2, 1.28, 29.8, 0.14, 0.08, 0.14, steel);

  const btBag = box(scene, 15.1, 0.28, 23.6, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(15.1, 0, 23.6), mesh: btBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const btBag2 = box(scene, 17.7, 0.26, 23.5, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(17.7, 0, 23.5), mesh: btBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const btCook = box(scene, 16.4, 0.55, 23.1, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(16.4, 0, 23.1), mesh: btCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const btCook2 = box(scene, 15.5, 0.55, 22.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(15.5, 0, 22.7), mesh: btCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const bvX = 21.6;
  const bvZ = 28.0;
  box(scene, bvX, 0.72, bvZ, 3.6, 0.54, 1.48, rust);
  box(scene, bvX + 0.15, 1.22, bvZ, 2.4, 0.98, 1.32, cellMat);
  box(scene, bvX - 1.55, 0.9, bvZ, 0.82, 0.92, 1.28, steel);
  box(scene, bvX - 1.65, 0.34, bvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, bvX - 1.65, 0.34, bvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, bvX + 1.45, 0.34, bvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, bvX + 1.45, 0.34, bvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.battTruck = new THREE.Vector3(bvX, 0, bvZ);
  MAP.crates.push({ pos: MAP.battTruck.clone(), mesh: busBar, sx: 3.6, sy: 1.5, sz: 1.48 });

  // West hoist house — door gap on east wall facing the quarry
  const hsX = -30.8;
  const hsZ = -28.2;
  const cableMat = new THREE.MeshLambertMaterial({ color: 0x3a3830 });
  const hsWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  hsWall(hsX, -31.45, 6.6, 0.5);
  hsWall(hsX, -24.95, 6.6, 0.5);
  hsWall(-34.05, hsZ, 0.5, 6.4);
  hsWall(-27.55, -30.25, 0.5, 2.3);
  hsWall(-27.55, -26.15, 0.5, 2.3);
  box(scene, -27.55, 2.8, hsZ, 0.5, 0.5, 2.4, rust);
  box(scene, hsX, 3.1, hsZ, 6.8, 0.18, 6.6, rust);
  MAP.hoistDoor = new THREE.Vector3(-27.35, 0, hsZ);
  MAP.hoist = new THREE.Vector3(hsX, 0, hsZ);
  const hsFloor = box(scene, hsX, 0.04, hsZ, 6.0, 0.08, 5.8, concrete);
  hsFloor.receiveShadow = true;
  const hsLamp = new THREE.PointLight(0xc8a050, 1.05, 11);
  hsLamp.position.set(hsX, 2.8, hsZ);
  scene.add(hsLamp);
  MAP.hoistLamp = hsLamp;
  const hsRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc8a038, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  hsRing.rotation.x = -Math.PI / 2;
  hsRing.position.copy(MAP.hoistDoor).setY(0.05);
  scene.add(hsRing);
  MAP.hoistRing = hsRing;
  const winches = [
    [-33.1, 0.48, -30.2, 1.2, 0.96, 1.15],
    [-28.6, 0.42, -30.3, 1.1, 0.84, 1.1],
    [-33.0, 0.4, -26.2, 1.15, 0.8, 1.1],
  ];
  for (const r of winches) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], cableMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const drumWinch = box(scene, hsX, 1.05, hsZ, 1.15, 0.7, 1.15, steel);
  MAP.hoistDrum = drumWinch;
  const hook = box(scene, hsX, 0.42, hsZ, 0.22, 0.55, 0.22, rust);
  MAP.hoistHook = hook;
  const hsMoteN = 32;
  const hsGeo = new THREE.BufferGeometry();
  const hsPos = new Float32Array(hsMoteN * 3);
  const hsPhase = new Float32Array(hsMoteN);
  for (let i = 0; i < hsMoteN; i++) {
    hsPos[i * 3] = -33.9 + Math.random() * 6.2;
    hsPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    hsPos[i * 3 + 2] = -31.4 + Math.random() * 6.2;
    hsPhase[i] = Math.random() * Math.PI * 2;
  }
  hsGeo.setAttribute("position", new THREE.BufferAttribute(hsPos, 3));
  const hsMotes = new THREE.Points(
    hsGeo,
    new THREE.PointsMaterial({
      color: 0xc8a060,
      size: 0.036,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(hsMotes);
  MAP.hoistMotes = hsMotes;
  MAP.hoistMotePhase = hsPhase;
  const hsLed = new THREE.PointLight(0xe0a040, 0.26, 4.6);
  hsLed.position.set(-33.1, 1.4, -30.2);
  scene.add(hsLed);
  MAP.hoistLed = hsLed;
  box(scene, -33.1, 1.28, -30.2, 0.14, 0.08, 0.14, steel);

  const hsBag = box(scene, -25.9, 0.28, -29.4, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-25.9, 0, -29.4), mesh: hsBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const hsBag2 = box(scene, -25.8, 0.26, -26.9, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-25.8, 0, -26.9), mesh: hsBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const hsCook = box(scene, -25.3, 0.55, -28.2, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-25.3, 0, -28.2), mesh: hsCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const hsCook2 = box(scene, -25.0, 0.55, -27.3, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-25.0, 0, -27.3), mesh: hsCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const hvX = -30.6;
  const hvZ = -22.6;
  box(scene, hvX, 0.72, hvZ, 3.6, 0.54, 1.48, rust);
  box(scene, hvX + 0.15, 1.22, hvZ, 2.4, 0.98, 1.32, cableMat);
  box(scene, hvX - 1.55, 0.9, hvZ, 0.82, 0.92, 1.28, steel);
  box(scene, hvX - 1.65, 0.34, hvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, hvX - 1.65, 0.34, hvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, hvX + 1.45, 0.34, hvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, hvX + 1.45, 0.34, hvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.hoistTruck = new THREE.Vector3(hvX, 0, hvZ);
  MAP.crates.push({ pos: MAP.hoistTruck.clone(), mesh: drumWinch, sx: 3.6, sy: 1.5, sz: 1.48 });

  // East mill house — door gap on west wall facing the quarry
  const mlX = 39.2;
  const mlZ = 18.4;
  const millMat = new THREE.MeshLambertMaterial({ color: 0x3c3428 });
  const mlWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  mlWall(mlX, 15.15, 6.6, 0.5);
  mlWall(mlX, 21.65, 6.6, 0.5);
  mlWall(42.45, mlZ, 0.5, 6.4);
  mlWall(35.95, 16.35, 0.5, 2.3);
  mlWall(35.95, 20.45, 0.5, 2.3);
  box(scene, 35.95, 2.8, mlZ, 0.5, 0.5, 2.4, rust);
  box(scene, mlX, 3.1, mlZ, 6.8, 0.18, 6.6, rust);
  MAP.millDoor = new THREE.Vector3(35.75, 0, mlZ);
  MAP.mill = new THREE.Vector3(mlX, 0, mlZ);
  const mlFloor = box(scene, mlX, 0.04, mlZ, 6.0, 0.08, 5.8, concrete);
  mlFloor.receiveShadow = true;
  const mlLamp = new THREE.PointLight(0xc89040, 1.05, 11);
  mlLamp.position.set(mlX, 2.8, mlZ);
  scene.add(mlLamp);
  MAP.millLamp = mlLamp;
  const mlRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xc07028, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  mlRing.rotation.x = -Math.PI / 2;
  mlRing.position.copy(MAP.millDoor).setY(0.05);
  scene.add(mlRing);
  MAP.millRing = mlRing;
  const millBins = [
    [41.5, 0.48, 16.4, 1.2, 0.96, 1.15],
    [36.9, 0.42, 16.35, 1.1, 0.84, 1.1],
    [41.4, 0.4, 20.4, 1.15, 0.8, 1.1],
  ];
  for (const r of millBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], millMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const millWheel = box(scene, mlX, 1.05, mlZ, 1.25, 1.25, 0.28, steel);
  millWheel.rotation.z = 0.15;
  MAP.millWheel = millWheel;
  const millAxle = box(scene, mlX, 1.05, mlZ, 0.22, 0.22, 1.35, rust);
  MAP.millAxle = millAxle;
  const mlMoteN = 32;
  const mlGeo = new THREE.BufferGeometry();
  const mlPos = new Float32Array(mlMoteN * 3);
  const mlPhase = new Float32Array(mlMoteN);
  for (let i = 0; i < mlMoteN; i++) {
    mlPos[i * 3] = 36.0 + Math.random() * 6.2;
    mlPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    mlPos[i * 3 + 2] = 15.2 + Math.random() * 6.2;
    mlPhase[i] = Math.random() * Math.PI * 2;
  }
  mlGeo.setAttribute("position", new THREE.BufferAttribute(mlPos, 3));
  const mlMotes = new THREE.Points(
    mlGeo,
    new THREE.PointsMaterial({
      color: 0xc88850,
      size: 0.036,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  scene.add(mlMotes);
  MAP.millMotes = mlMotes;
  MAP.millMotePhase = mlPhase;
  const mlLed = new THREE.PointLight(0xe07030, 0.26, 4.6);
  mlLed.position.set(41.5, 1.4, 16.4);
  scene.add(mlLed);
  MAP.millLed = mlLed;
  box(scene, 41.5, 1.28, 16.4, 0.14, 0.08, 0.14, steel);

  const mlBag = box(scene, 34.3, 0.28, 19.6, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(34.3, 0, 19.6), mesh: mlBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const mlBag2 = box(scene, 34.2, 0.26, 17.1, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(34.2, 0, 17.1), mesh: mlBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const mlCook = box(scene, 33.7, 0.55, 18.4, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(33.7, 0, 18.4), mesh: mlCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const mlCook2 = box(scene, 33.4, 0.55, 17.5, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(33.4, 0, 17.5), mesh: mlCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const mvX = 39.0;
  const mvZ = 12.8;
  box(scene, mvX, 0.72, mvZ, 3.6, 0.54, 1.48, rust);
  box(scene, mvX + 0.15, 1.22, mvZ, 2.4, 0.98, 1.32, millMat);
  box(scene, mvX - 1.55, 0.9, mvZ, 0.82, 0.92, 1.28, steel);
  box(scene, mvX - 1.65, 0.34, mvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, mvX - 1.65, 0.34, mvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, mvX + 1.45, 0.34, mvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, mvX + 1.45, 0.34, mvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.millTruck = new THREE.Vector3(mvX, 0, mvZ);
  MAP.crates.push({ pos: MAP.millTruck.clone(), mesh: millWheel, sx: 3.6, sy: 1.5, sz: 1.48 });

  // North kiln house — door gap on west wall facing the quarry
  const knX = 41.1;
  const knZ = 34.3;
  const kilnMat = new THREE.MeshLambertMaterial({ color: 0x4a3020 });
  const knWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  knWall(knX, 31.05, 6.6, 0.5);
  knWall(knX, 37.55, 6.6, 0.5);
  knWall(44.35, knZ, 0.5, 6.4);
  knWall(37.85, 32.25, 0.5, 2.3);
  knWall(37.85, 36.35, 0.5, 2.3);
  box(scene, 37.85, 2.8, knZ, 0.5, 0.5, 2.4, rust);
  box(scene, knX, 3.1, knZ, 6.8, 0.18, 6.6, rust);
  MAP.kilnDoor = new THREE.Vector3(37.65, 0, knZ);
  MAP.kiln = new THREE.Vector3(knX, 0, knZ);
  const knFloor = box(scene, knX, 0.04, knZ, 6.0, 0.08, 5.8, concrete);
  knFloor.receiveShadow = true;
  const knLamp = new THREE.PointLight(0xe07030, 1.1, 11);
  knLamp.position.set(knX, 2.8, knZ);
  scene.add(knLamp);
  MAP.kilnLamp = knLamp;
  const knRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xe05020, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  knRing.rotation.x = -Math.PI / 2;
  knRing.position.copy(MAP.kilnDoor).setY(0.05);
  scene.add(knRing);
  MAP.kilnRing = knRing;
  const kilnBins = [
    [43.4, 0.48, 32.3, 1.2, 0.96, 1.15],
    [38.8, 0.42, 32.25, 1.1, 0.84, 1.1],
    [43.3, 0.4, 36.3, 1.15, 0.8, 1.1],
  ];
  for (const r of kilnBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], kilnMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const kilnBowl = box(scene, knX, 0.85, knZ, 1.45, 1.7, 1.45, rust);
  MAP.kilnBowl = kilnBowl;
  const kilnGlow = new THREE.PointLight(0xff6020, 0.55, 5.5);
  kilnGlow.position.set(knX, 1.15, knZ);
  scene.add(kilnGlow);
  MAP.kilnGlow = kilnGlow;
  const knMoteN = 36;
  const knGeo = new THREE.BufferGeometry();
  const knPos = new Float32Array(knMoteN * 3);
  const knPhase = new Float32Array(knMoteN);
  for (let i = 0; i < knMoteN; i++) {
    knPos[i * 3] = 37.9 + Math.random() * 6.2;
    knPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    knPos[i * 3 + 2] = 31.1 + Math.random() * 6.2;
    knPhase[i] = Math.random() * Math.PI * 2;
  }
  knGeo.setAttribute("position", new THREE.BufferAttribute(knPos, 3));
  const knMotes = new THREE.Points(
    knGeo,
    new THREE.PointsMaterial({
      color: 0xff7030,
      size: 0.04,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    })
  );
  scene.add(knMotes);
  MAP.kilnMotes = knMotes;
  MAP.kilnMotePhase = knPhase;

  const knBag = box(scene, 36.2, 0.28, 35.5, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(36.2, 0, 35.5), mesh: knBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const knBag2 = box(scene, 36.1, 0.26, 33.0, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(36.1, 0, 33.0), mesh: knBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const knCook = box(scene, 35.6, 0.55, 34.3, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(35.6, 0, 34.3), mesh: knCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const knCook2 = box(scene, 35.3, 0.55, 33.4, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(35.3, 0, 33.4), mesh: knCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const kvX = 41.0;
  const kvZ = 28.6;
  box(scene, kvX, 0.72, kvZ, 3.6, 0.54, 1.48, rust);
  box(scene, kvX + 0.15, 1.22, kvZ, 2.4, 0.98, 1.32, kilnMat);
  box(scene, kvX - 1.55, 0.9, kvZ, 0.82, 0.92, 1.28, steel);
  box(scene, kvX - 1.65, 0.34, kvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, kvX - 1.65, 0.34, kvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, kvX + 1.45, 0.34, kvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, kvX + 1.45, 0.34, kvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.kilnTruck = new THREE.Vector3(kvX, 0, kvZ);
  MAP.crates.push({ pos: MAP.kilnTruck.clone(), mesh: kilnBowl, sx: 3.6, sy: 1.5, sz: 1.48 });

  // South sorter house — door gap on north wall facing the hangar
  const soX = 21.1;
  const soZ = -38.0;
  const sortMat = new THREE.MeshLambertMaterial({ color: 0x3a4238 });
  const soWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  soWall(soX, -41.25, 6.8, 0.5);
  soWall(17.75, soZ, 0.5, 6.4);
  soWall(24.45, soZ, 0.5, 6.4);
  soWall(19.0, -34.75, 2.5, 0.5);
  soWall(23.2, -34.75, 2.5, 0.5);
  box(scene, soX, 2.8, -34.75, 2.0, 0.5, 0.5, rust);
  box(scene, soX, 3.1, soZ, 6.9, 0.18, 6.6, rust);
  MAP.sortDoor = new THREE.Vector3(soX, 0, -34.55);
  MAP.sort = new THREE.Vector3(soX, 0, soZ);
  const soFloor = box(scene, soX, 0.04, soZ, 6.2, 0.08, 5.8, concrete);
  soFloor.receiveShadow = true;
  const soLamp = new THREE.PointLight(0xc8d070, 1.0, 11);
  soLamp.position.set(soX, 2.8, soZ);
  scene.add(soLamp);
  MAP.sortLamp = soLamp;
  const soRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xb0c040, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  soRing.rotation.x = -Math.PI / 2;
  soRing.position.copy(MAP.sortDoor).setY(0.05);
  scene.add(soRing);
  MAP.sortRing = soRing;
  const sortBins = [
    [18.6, 0.48, -40.2, 1.15, 0.96, 1.1],
    [23.5, 0.42, -40.15, 1.1, 0.84, 1.05],
    [18.55, 0.4, -35.7, 1.12, 0.8, 1.05],
  ];
  for (const r of sortBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], sortMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const sortDeck = box(scene, soX, 0.95, soZ, 2.2, 0.16, 1.6, steel);
  MAP.sortDeck = sortDeck;
  const sortArm = box(scene, soX + 0.15, 1.25, soZ, 1.6, 0.12, 0.55, oil);
  MAP.sortArm = sortArm;
  const soMoteN = 36;
  const soGeo = new THREE.BufferGeometry();
  const soPos = new Float32Array(soMoteN * 3);
  const soPhase = new Float32Array(soMoteN);
  for (let i = 0; i < soMoteN; i++) {
    soPos[i * 3] = 17.85 + Math.random() * 6.5;
    soPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    soPos[i * 3 + 2] = -41.2 + Math.random() * 6.4;
    soPhase[i] = Math.random() * Math.PI * 2;
  }
  soGeo.setAttribute("position", new THREE.BufferAttribute(soPos, 3));
  const soMotes = new THREE.Points(
    soGeo,
    new THREE.PointsMaterial({
      color: 0xc8d060,
      size: 0.04,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(soMotes);
  MAP.sortMotes = soMotes;
  MAP.sortMotePhase = soPhase;

  const soBag = box(scene, 19.4, 0.28, -33.35, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(19.4, 0, -33.35), mesh: soBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const soBag2 = box(scene, 22.8, 0.26, -33.2, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(22.8, 0, -33.2), mesh: soBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const soCook = box(scene, 21.1, 0.55, -33.05, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(21.1, 0, -33.05), mesh: soCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const soCook2 = box(scene, 20.3, 0.55, -32.35, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(20.3, 0, -32.35), mesh: soCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const svX = 21.2;
  const svZ = -43.4;
  box(scene, svX, 0.72, svZ, 3.6, 0.54, 1.48, rust);
  box(scene, svX + 0.15, 1.22, svZ, 2.4, 0.98, 1.32, sortMat);
  box(scene, svX - 1.55, 0.9, svZ, 0.82, 0.92, 1.28, steel);
  box(scene, svX - 1.65, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX - 1.65, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.45, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.45, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.sortTruck = new THREE.Vector3(svX, 0, svZ);
  MAP.crates.push({ pos: MAP.sortTruck.clone(), mesh: sortDeck, sx: 3.6, sy: 1.5, sz: 1.48 });

  // West sample lab — door gap on east wall facing the quarry
  const lbX = -39.7;
  const lbZ = 17.8;
  const labMat = new THREE.MeshLambertMaterial({ color: 0x3a4450 });
  const lbWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  lbWall(lbX, 14.55, 6.8, 0.5);
  lbWall(lbX, 21.05, 6.8, 0.5);
  lbWall(-43.05, lbZ, 0.5, 6.4);
  lbWall(-36.35, 15.7, 0.5, 2.3);
  lbWall(-36.35, 19.9, 0.5, 2.3);
  box(scene, -36.35, 2.8, lbZ, 0.5, 0.5, 2.4, steel);
  box(scene, lbX, 3.1, lbZ, 6.9, 0.18, 6.6, steel);
  MAP.labDoor = new THREE.Vector3(-36.15, 0, lbZ);
  MAP.lab = new THREE.Vector3(lbX, 0, lbZ);
  const lbFloor = box(scene, lbX, 0.04, lbZ, 6.2, 0.08, 5.8, concrete);
  lbFloor.receiveShadow = true;
  const lbLamp = new THREE.PointLight(0x80c8e0, 1.0, 11);
  lbLamp.position.set(lbX, 2.8, lbZ);
  scene.add(lbLamp);
  MAP.labLamp = lbLamp;
  const lbRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x70c0d8, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  lbRing.rotation.x = -Math.PI / 2;
  lbRing.position.copy(MAP.labDoor).setY(0.05);
  scene.add(lbRing);
  MAP.labRing = lbRing;
  const labBins = [
    [-42.2, 0.48, 15.5, 1.15, 0.96, 1.1],
    [-37.4, 0.42, 15.45, 1.1, 0.84, 1.05],
    [-42.15, 0.4, 20.1, 1.12, 0.8, 1.05],
  ];
  for (const r of labBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], labMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const labBench = box(scene, lbX, 0.72, lbZ, 2.4, 0.9, 0.85, steel);
  MAP.labBench = labBench;
  const labScope = box(scene, lbX + 0.2, 1.28, lbZ, 0.55, 0.28, 0.4, oil);
  MAP.labScope = labScope;
  const lbMoteN = 32;
  const lbGeo = new THREE.BufferGeometry();
  const lbPos = new Float32Array(lbMoteN * 3);
  const lbPhase = new Float32Array(lbMoteN);
  for (let i = 0; i < lbMoteN; i++) {
    lbPos[i * 3] = -43.0 + Math.random() * 6.6;
    lbPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    lbPos[i * 3 + 2] = 14.5 + Math.random() * 6.4;
    lbPhase[i] = Math.random() * Math.PI * 2;
  }
  lbGeo.setAttribute("position", new THREE.BufferAttribute(lbPos, 3));
  const lbMotes = new THREE.Points(
    lbGeo,
    new THREE.PointsMaterial({
      color: 0x80d0e8,
      size: 0.04,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(lbMotes);
  MAP.labMotes = lbMotes;
  MAP.labMotePhase = lbPhase;

  const lbBag = box(scene, -34.7, 0.28, 19.2, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-34.7, 0, 19.2), mesh: lbBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const lbBag2 = box(scene, -34.6, 0.26, 16.4, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-34.6, 0, 16.4), mesh: lbBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const lbCook = box(scene, -34.1, 0.55, 17.8, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-34.1, 0, 17.8), mesh: lbCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const lbCook2 = box(scene, -33.8, 0.55, 16.9, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-33.8, 0, 16.9), mesh: lbCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const lvX = -39.6;
  const lvZ = 12.4;
  box(scene, lvX, 0.72, lvZ, 3.6, 0.54, 1.48, rust);
  box(scene, lvX + 0.15, 1.22, lvZ, 2.4, 0.98, 1.32, labMat);
  box(scene, lvX - 1.55, 0.9, lvZ, 0.82, 0.92, 1.28, steel);
  box(scene, lvX - 1.65, 0.34, lvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, lvX - 1.65, 0.34, lvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, lvX + 1.45, 0.34, lvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, lvX + 1.45, 0.34, lvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.labTruck = new THREE.Vector3(lvX, 0, lvZ);
  MAP.crates.push({ pos: MAP.labTruck.clone(), mesh: labBench, sx: 3.6, sy: 1.5, sz: 1.48 });

  // East powder house — door gap on west wall facing the quarry
  const pwX = 41.45;
  const pwZ = -19.2;
  const powMat = new THREE.MeshLambertMaterial({ color: 0x5a3820 });
  const pwWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, rust);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  pwWall(pwX, -22.45, 6.8, 0.5);
  pwWall(pwX, -15.95, 6.8, 0.5);
  pwWall(44.8, pwZ, 0.5, 6.4);
  pwWall(38.1, -21.05, 0.5, 2.3);
  pwWall(38.1, -17.35, 0.5, 2.3);
  box(scene, 38.1, 2.8, pwZ, 0.5, 0.5, 2.4, rust);
  box(scene, pwX, 3.1, pwZ, 6.9, 0.18, 6.6, rust);
  MAP.powDoor = new THREE.Vector3(37.9, 0, pwZ);
  MAP.pow = new THREE.Vector3(pwX, 0, pwZ);
  const pwFloor = box(scene, pwX, 0.04, pwZ, 6.2, 0.08, 5.8, concrete);
  pwFloor.receiveShadow = true;
  const pwLamp = new THREE.PointLight(0xe08040, 1.05, 11);
  pwLamp.position.set(pwX, 2.8, pwZ);
  scene.add(pwLamp);
  MAP.powLamp = pwLamp;
  const pwRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xe07030, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  pwRing.rotation.x = -Math.PI / 2;
  pwRing.position.copy(MAP.powDoor).setY(0.05);
  scene.add(pwRing);
  MAP.powRing = pwRing;
  const powBins = [
    [43.7, 0.48, -21.4, 1.15, 0.96, 1.1],
    [39.2, 0.42, -21.35, 1.1, 0.84, 1.05],
    [43.65, 0.4, -16.9, 1.12, 0.8, 1.05],
  ];
  for (const r of powBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], powMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const powKeg = box(scene, pwX, 0.78, pwZ, 1.35, 1.56, 1.35, rust);
  MAP.powKeg = powKeg;
  const powArm = box(scene, pwX, 1.72, pwZ, 1.85, 0.12, 0.18, steel);
  MAP.powArm = powArm;
  const pwMoteN = 32;
  const pwGeo = new THREE.BufferGeometry();
  const pwPos = new Float32Array(pwMoteN * 3);
  const pwPhase = new Float32Array(pwMoteN);
  for (let i = 0; i < pwMoteN; i++) {
    pwPos[i * 3] = 38.15 + Math.random() * 6.6;
    pwPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    pwPos[i * 3 + 2] = -22.4 + Math.random() * 6.4;
    pwPhase[i] = Math.random() * Math.PI * 2;
  }
  pwGeo.setAttribute("position", new THREE.BufferAttribute(pwPos, 3));
  const pwMotes = new THREE.Points(
    pwGeo,
    new THREE.PointsMaterial({
      color: 0xe88840,
      size: 0.04,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(pwMotes);
  MAP.powMotes = pwMotes;
  MAP.powMotePhase = pwPhase;

  const pwBag = box(scene, 36.4, 0.28, -17.7, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(36.4, 0, -17.7), mesh: pwBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const pwBag2 = box(scene, 36.5, 0.26, -20.6, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(36.5, 0, -20.6), mesh: pwBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const pwCook = box(scene, 36.0, 0.55, -19.2, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(36.0, 0, -19.2), mesh: pwCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const pwCook2 = box(scene, 35.7, 0.55, -20.1, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(35.7, 0, -20.1), mesh: pwCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const pvX = 41.4;
  const pvZ = -14.6;
  box(scene, pvX, 0.72, pvZ, 3.6, 0.54, 1.48, rust);
  box(scene, pvX + 0.15, 1.22, pvZ, 2.4, 0.98, 1.32, powMat);
  box(scene, pvX - 1.55, 0.9, pvZ, 0.82, 0.92, 1.28, steel);
  box(scene, pvX - 1.65, 0.34, pvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX - 1.65, 0.34, pvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX + 1.45, 0.34, pvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvX + 1.45, 0.34, pvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.powTruck = new THREE.Vector3(pvX, 0, pvZ);
  MAP.crates.push({ pos: MAP.powTruck.clone(), mesh: powKeg, sx: 3.6, sy: 1.5, sz: 1.48 });

  // West fuse shack — door gap on east wall facing the quarry
  const fuX = -41.6;
  const fuZ = -1.8;
  const fuseMat = new THREE.MeshLambertMaterial({ color: 0x3a3020 });
  const fuWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  fuWall(fuX, -5.05, 6.8, 0.5);
  fuWall(fuX, 1.45, 6.8, 0.5);
  fuWall(-44.95, fuZ, 0.5, 6.4);
  fuWall(-38.25, -3.65, 0.5, 2.3);
  fuWall(-38.25, 0.05, 0.5, 2.3);
  box(scene, -38.25, 2.8, fuZ, 0.5, 0.5, 2.4, steel);
  box(scene, fuX, 3.1, fuZ, 6.9, 0.18, 6.6, steel);
  MAP.fuseDoor = new THREE.Vector3(-38.05, 0, fuZ);
  MAP.fuse = new THREE.Vector3(fuX, 0, fuZ);
  const fuFloor = box(scene, fuX, 0.04, fuZ, 6.2, 0.08, 5.8, concrete);
  fuFloor.receiveShadow = true;
  const fuLamp = new THREE.PointLight(0xe0b040, 1.0, 11);
  fuLamp.position.set(fuX, 2.8, fuZ);
  scene.add(fuLamp);
  MAP.fuseLamp = fuLamp;
  const fuRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xd8a030, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  fuRing.rotation.x = -Math.PI / 2;
  fuRing.position.copy(MAP.fuseDoor).setY(0.05);
  scene.add(fuRing);
  MAP.fuseRing = fuRing;
  const fuseBins = [
    [-44.1, 0.48, -4.1, 1.15, 0.96, 1.1],
    [-39.3, 0.42, -4.05, 1.1, 0.84, 1.05],
    [-44.05, 0.4, 0.6, 1.12, 0.8, 1.05],
  ];
  for (const r of fuseBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], fuseMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const fuseRack = box(scene, fuX, 0.7, fuZ, 2.2, 0.85, 0.7, steel);
  MAP.fuseRack = fuseRack;
  const fuseReel = box(scene, fuX + 0.15, 1.22, fuZ, 0.7, 0.22, 0.7, oil);
  MAP.fuseReel = fuseReel;
  const fuMoteN = 32;
  const fuGeo = new THREE.BufferGeometry();
  const fuPos = new Float32Array(fuMoteN * 3);
  const fuPhase = new Float32Array(fuMoteN);
  for (let i = 0; i < fuMoteN; i++) {
    fuPos[i * 3] = -44.9 + Math.random() * 6.6;
    fuPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    fuPos[i * 3 + 2] = -5.1 + Math.random() * 6.4;
    fuPhase[i] = Math.random() * Math.PI * 2;
  }
  fuGeo.setAttribute("position", new THREE.BufferAttribute(fuPos, 3));
  const fuMotes = new THREE.Points(
    fuGeo,
    new THREE.PointsMaterial({
      color: 0xe0b050,
      size: 0.04,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(fuMotes);
  MAP.fuseMotes = fuMotes;
  MAP.fuseMotePhase = fuPhase;

  const fuBag = box(scene, -36.6, 0.28, -0.4, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-36.6, 0, -0.4), mesh: fuBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const fuBag2 = box(scene, -36.5, 0.26, -3.2, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-36.5, 0, -3.2), mesh: fuBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const fuCook = box(scene, -36.0, 0.55, -1.8, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-36.0, 0, -1.8), mesh: fuCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const fuCook2 = box(scene, -35.7, 0.55, -2.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-35.7, 0, -2.7), mesh: fuCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

  const fvX = -41.5;
  const fvZ = -7.2;
  box(scene, fvX, 0.72, fvZ, 3.6, 0.54, 1.48, rust);
  box(scene, fvX + 0.15, 1.22, fvZ, 2.4, 0.98, 1.32, fuseMat);
  box(scene, fvX - 1.55, 0.9, fvZ, 0.82, 0.92, 1.28, steel);
  box(scene, fvX - 1.65, 0.34, fvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, fvX - 1.65, 0.34, fvZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, fvX + 1.45, 0.34, fvZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, fvX + 1.45, 0.34, fvZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.fuseTruck = new THREE.Vector3(fvX, 0, fvZ);
  MAP.crates.push({ pos: MAP.fuseTruck.clone(), mesh: fuseRack, sx: 3.6, sy: 1.5, sz: 1.48 });

  // North skip house — door gap on south wall facing the quarry
  const skX = -22.2;
  const skZ = 39.5;
  const skipMat = new THREE.MeshLambertMaterial({ color: 0x3a3428 });
  const skWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  skWall(skX, 42.45, 6.8, 0.5);
  skWall(-25.55, skZ, 0.5, 6.4);
  skWall(-18.85, skZ, 0.5, 6.4);
  skWall(-24.05, 36.65, 0.5, 2.2);
  skWall(-20.35, 36.65, 0.5, 2.2);
  box(scene, skX, 2.8, 36.65, 2.4, 0.5, 0.5, steel);
  box(scene, skX, 3.1, skZ, 6.9, 0.18, 6.6, steel);
  MAP.skipDoor = new THREE.Vector3(skX, 0, 36.4);
  MAP.skip = new THREE.Vector3(skX, 0, skZ);
  const skFloor = box(scene, skX, 0.04, skZ, 6.2, 0.08, 5.8, concrete);
  skFloor.receiveShadow = true;
  const skLamp = new THREE.PointLight(0xd8a060, 1.05, 11);
  skLamp.position.set(skX, 2.8, skZ);
  scene.add(skLamp);
  MAP.skipLamp = skLamp;
  const skRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0a040, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  skRing.rotation.x = -Math.PI / 2;
  skRing.position.copy(MAP.skipDoor).setY(0.05);
  scene.add(skRing);
  MAP.skipRing = skRing;
  const skipRails = [
    [skX - 1.1, 0.55, skZ, 0.12, 1.1, 3.4],
    [skX + 1.1, 0.55, skZ, 0.12, 1.1, 3.4],
    [skX, 1.15, skZ + 0.2, 2.4, 0.1, 0.12],
  ];
  for (const r of skipRails) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], steel);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const skipBucket = box(scene, skX, 1.35, skZ - 0.2, 1.35, 0.72, 1.15, rust);
  MAP.skipBucket = skipBucket;
  MAP.crates.push({ pos: new THREE.Vector3(skX, 0, skZ - 0.2), mesh: skipBucket, sx: 1.35, sy: 1.5, sz: 1.15 });
  const skMoteN = 32;
  const skGeo = new THREE.BufferGeometry();
  const skPos = new Float32Array(skMoteN * 3);
  const skPhase = new Float32Array(skMoteN);
  for (let i = 0; i < skMoteN; i++) {
    skPos[i * 3] = -25.4 + Math.random() * 6.4;
    skPos[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    skPos[i * 3 + 2] = 36.7 + Math.random() * 5.5;
    skPhase[i] = Math.random() * Math.PI * 2;
  }
  skGeo.setAttribute("position", new THREE.BufferAttribute(skPos, 3));
  const skMotes = new THREE.Points(
    skGeo,
    new THREE.PointsMaterial({
      color: 0xc8a060,
      size: 0.045,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
    })
  );
  scene.add(skMotes);
  MAP.skipMotes = skMotes;
  MAP.skipMotePhase = skPhase;
  const skBag = box(scene, -24.4, 0.28, 35.2, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-24.4, 0, 35.2), mesh: skBag, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const skBag2 = box(scene, -20.0, 0.26, 35.15, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-20.0, 0, 35.15), mesh: skBag2, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const skCook = box(scene, -23.5, 0.55, 34.6, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-23.5, 0, 34.6), mesh: skCook, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const skCook2 = box(scene, -20.9, 0.55, 34.55, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-20.9, 0, 34.55), mesh: skCook2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const chute = box(scene, -17.2, 0.42, 39.4, 2.4, 0.22, 1.1, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-17.2, 0, 39.4), mesh: chute, sx: 2.4, sy: 0.42, sz: 1.1, climb: true });
  MAP.platforms = MAP.platforms || [];
  MAP.platforms.push({ x: -17.2, z: 39.4, sx: 2.2, sz: 1.0, top: 0.55 });
  const svX = -22.2;
  const svZ = 33.4;
  box(scene, svX, 0.72, svZ, 3.6, 0.54, 1.48, rust);
  box(scene, svX + 0.15, 1.22, svZ, 2.4, 0.98, 1.32, skipMat);
  box(scene, svX - 1.55, 0.9, svZ, 0.82, 0.92, 1.28, steel);
  box(scene, svX - 1.65, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX - 1.65, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.45, 0.34, svZ + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX + 1.45, 0.34, svZ - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.skipTruck = new THREE.Vector3(svX, 0, svZ);
  MAP.crates.push({ pos: MAP.skipTruck.clone(), mesh: skipBucket, sx: 3.6, sy: 1.5, sz: 1.48 });

  // North tipple — door gap on south wall, fed by the ore tram
  const tpX = 8.6;
  const tpZ = 42.05;
  const tipMat = new THREE.MeshLambertMaterial({ color: 0x3e3830 });
  const tpWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  tpWall(tpX, 44.85, 6.5, 0.45);
  tpWall(5.4, tpZ, 0.45, 5.7);
  tpWall(11.8, tpZ, 0.45, 5.7);
  tpWall(6.55, 39.25, 1.7, 0.45);
  tpWall(10.65, 39.25, 1.7, 0.45);
  box(scene, tpX, 2.9, 39.25, 2.2, 0.42, 0.45, steel);
  box(scene, tpX, 3.15, tpZ, 6.6, 0.16, 5.8, steel);
  MAP.tipDoor = new THREE.Vector3(tpX, 0, 39.05);
  MAP.tip = new THREE.Vector3(tpX, 0, tpZ);
  const tpFloor = box(scene, tpX, 0.04, tpZ, 5.9, 0.08, 5.2, concrete);
  tpFloor.receiveShadow = true;
  const tpLamp = new THREE.PointLight(0xe0b060, 1.0, 10);
  tpLamp.position.set(tpX, 2.75, tpZ);
  scene.add(tpLamp);
  MAP.tipLamp = tpLamp;
  const tpRing = new THREE.Mesh(
    new THREE.RingGeometry(1.0, 1.24, 16),
    new THREE.MeshBasicMaterial({ color: 0xe8b040, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  tpRing.rotation.x = -Math.PI / 2;
  tpRing.position.copy(MAP.tipDoor).setY(0.05);
  scene.add(tpRing);
  MAP.tipRing = tpRing;
  const tipWheel = box(scene, tpX + 1.3, 1.55, tpZ + 0.4, 0.22, 1.55, 1.55, rust);
  tipWheel.rotation.z = 0.15;
  MAP.tipWheel = tipWheel;
  const tipChute = box(scene, tpX - 1.2, 1.7, tpZ - 0.3, 0.7, 0.18, 2.4, steel);
  MAP.crates.push({ pos: new THREE.Vector3(tpX - 1.2, 0, tpZ - 0.3), mesh: tipChute, sx: 0.7, sy: 1.9, sz: 2.4 });
  const tipBin = box(scene, tpX + 0.2, 0.55, tpZ + 1.3, 1.4, 1.05, 1.1, rust);
  MAP.crates.push({ pos: new THREE.Vector3(tpX + 0.2, 0, tpZ + 1.3), mesh: tipBin, sx: 1.4, sy: 1.15, sz: 1.1 });
  const tpMoteN = 28;
  const tpGeo = new THREE.BufferGeometry();
  const tpPos = new Float32Array(tpMoteN * 3);
  const tpPhase = new Float32Array(tpMoteN);
  for (let i = 0; i < tpMoteN; i++) {
    tpPos[i * 3] = tpX + (Math.random() - 0.5) * 5.2;
    tpPos[i * 3 + 1] = 0.4 + Math.random() * 2.2;
    tpPos[i * 3 + 2] = tpZ + (Math.random() - 0.5) * 4.6;
    tpPhase[i] = Math.random() * Math.PI * 2;
  }
  tpGeo.setAttribute("position", new THREE.BufferAttribute(tpPos, 3));
  const tpMotes = new THREE.Points(
    tpGeo,
    new THREE.PointsMaterial({ color: 0xe8c080, size: 0.05, transparent: true, opacity: 0.45 })
  );
  scene.add(tpMotes);
  MAP.tipMotes = tpMotes;
  MAP.tipMotePhase = tpPhase;
  const tpBag = box(scene, 6.35, 0.28, 38.15, 1.55, 0.54, 0.78, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(6.35, 0, 38.15), mesh: tpBag, sx: 1.55, sy: 0.54, sz: 0.78, climb: true });
  const tpBag2 = box(scene, 10.85, 0.26, 38.1, 1.45, 0.5, 0.74, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(10.85, 0, 38.1), mesh: tpBag2, sx: 1.45, sy: 0.5, sz: 0.74, climb: true });
  const tpCook = box(scene, 6.9, 0.55, 37.45, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(6.9, 0, 37.45), mesh: tpCook, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const tpCook2 = box(scene, 10.3, 0.55, 37.4, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(10.3, 0, 37.4), mesh: tpCook2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const tvX = 12.6;
  const tvZ = 36.6;
  box(scene, tvX, 0.7, tvZ, 3.4, 0.5, 1.4, rust);
  box(scene, tvX + 0.1, 1.18, tvZ, 2.2, 0.9, 1.22, tipMat);
  box(scene, tvX - 1.45, 0.88, tvZ, 0.78, 0.86, 1.2, steel);
  box(scene, tvX - 1.5, 0.32, tvZ + 0.55, 0.38, 0.64, 0.2, oil);
  box(scene, tvX - 1.5, 0.32, tvZ - 0.55, 0.38, 0.64, 0.2, oil);
  box(scene, tvX + 1.35, 0.32, tvZ + 0.55, 0.38, 0.64, 0.2, oil);
  box(scene, tvX + 1.35, 0.32, tvZ - 0.55, 0.38, 0.64, 0.2, oil);
  MAP.tipTruck = new THREE.Vector3(tvX, 0, tvZ);
  MAP.crates.push({ pos: MAP.tipTruck.clone(), mesh: tipBin, sx: 3.4, sy: 1.4, sz: 1.4 });

  // Ore tram — moving solid cover between skip and tipple
  const tramPath = [
    new THREE.Vector3(-16.4, 0, 34.55),
    new THREE.Vector3(1.6, 0, 34.55),
    new THREE.Vector3(8.6, 0, 37.35),
  ];
  MAP.tramPath = tramPath;
  MAP.tramT = 0;
  MAP.tramDir = 1;
  for (let i = 0; i < tramPath.length - 1; i++) {
    const a = tramPath[i];
    const b = tramPath[i + 1];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const len = a.distanceTo(b);
    const alongX = Math.abs(b.x - a.x) > Math.abs(b.z - a.z);
    const railA = box(scene, mid.x + (alongX ? 0 : -0.55), 0.08, mid.z + (alongX ? -0.55 : 0), alongX ? len : 0.1, 0.08, alongX ? 0.1 : len, steel);
    const railB = box(scene, mid.x + (alongX ? 0 : 0.55), 0.08, mid.z + (alongX ? 0.55 : 0), alongX ? len : 0.1, 0.08, alongX ? 0.1 : len, steel);
    railA.castShadow = false;
    railB.castShadow = false;
  }
  const tram = new THREE.Group();
  const bed = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.42, 2.15), rust);
  bed.position.y = 0.48;
  const lip = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.55, 0.1), steel);
  lip.position.set(0, 0.85, 1.02);
  const lip2 = lip.clone();
  lip2.position.z = -1.02;
  const ore = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.38, 1.5), new THREE.MeshLambertMaterial({ color: 0x6a5434 }));
  ore.position.y = 0.82;
  tram.add(bed, lip, lip2, ore);
  tram.position.copy(tramPath[0]);
  scene.add(tram);
  MAP.tramMesh = tram;
  const tramCrate = { pos: tramPath[0].clone(), mesh: tram, sx: 1.62, sy: 1.2, sz: 2.2, tram: true };
  MAP.crates.push(tramCrate);
  MAP.tramCrate = tramCrate;
  MAP.tramDx = 0;
  MAP.tramDz = 0;

  // South adit — timbered drift, door gap on the north wall
  const adX = -14;
  const adZ = -36.2;
  const timber = new THREE.MeshLambertMaterial({ color: 0x5a4630 });
  const adWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.45, z, sx, 2.9, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 2.9, sz });
    return m;
  };
  adWall(adX, -43.15, 7.2, 0.42);
  adWall(-17.55, adZ, 0.42, 13.6);
  adWall(-10.45, adZ, 0.42, 13.6);
  adWall(-16.05, -29.35, 2.5, 0.42);
  adWall(-11.95, -29.35, 2.5, 0.42);
  box(scene, adX, 2.75, -29.35, 2.1, 0.38, 0.42, timber);
  box(scene, adX, 3.0, adZ, 7.3, 0.18, 13.8, rock);
  for (let i = 0; i < 5; i++) {
    const z = -31.2 - i * 2.3;
    box(scene, -16.7, 1.35, z, 0.28, 2.5, 0.28, timber);
    box(scene, -11.3, 1.35, z, 0.28, 2.5, 0.28, timber);
    const cap = box(scene, adX, 2.55, z, 5.6, 0.16, 0.22, timber);
    cap.castShadow = false;
  }
  MAP.aditDoor = new THREE.Vector3(adX, 0, -29.15);
  MAP.adit = new THREE.Vector3(adX, 0, adZ);
  const adFloor = box(scene, adX, 0.04, adZ, 6.4, 0.08, 13.2, concrete);
  adFloor.receiveShadow = true;
  const adLamp = new THREE.PointLight(0xffc878, 0.85, 12);
  adLamp.position.set(adX, 2.4, adZ + 1.2);
  scene.add(adLamp);
  MAP.aditLamp = adLamp;
  const adRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.28, 16),
    new THREE.MeshBasicMaterial({ color: 0xd8a040, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  adRing.rotation.x = -Math.PI / 2;
  adRing.position.copy(MAP.aditDoor).setY(0.05);
  scene.add(adRing);
  MAP.aditRing = adRing;
  const adPile = box(scene, adX + 1.4, 0.45, adZ - 2.4, 1.6, 0.9, 1.3, rust);
  MAP.crates.push({ pos: new THREE.Vector3(adX + 1.4, 0, adZ - 2.4), mesh: adPile, sx: 1.6, sy: 1.0, sz: 1.3 });
  const adCart = box(scene, adX - 1.5, 0.42, adZ + 2.6, 1.1, 0.7, 1.6, steel);
  MAP.crates.push({ pos: new THREE.Vector3(adX - 1.5, 0, adZ + 2.6), mesh: adCart, sx: 1.1, sy: 0.85, sz: 1.6 });
  const adMoteN = 32;
  const adGeo = new THREE.BufferGeometry();
  const adPos = new Float32Array(adMoteN * 3);
  const adPhase = new Float32Array(adMoteN);
  for (let i = 0; i < adMoteN; i++) {
    adPos[i * 3] = adX + (Math.random() - 0.5) * 5.4;
    adPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    adPos[i * 3 + 2] = adZ + (Math.random() - 0.5) * 11;
    adPhase[i] = Math.random() * Math.PI * 2;
  }
  adGeo.setAttribute("position", new THREE.BufferAttribute(adPos, 3));
  const adMotes = new THREE.Points(
    adGeo,
    new THREE.PointsMaterial({ color: 0xe0c090, size: 0.045, transparent: true, opacity: 0.4 })
  );
  scene.add(adMotes);
  MAP.aditMotes = adMotes;
  MAP.aditMotePhase = adPhase;

  // Headframe cage — rideable deck that climbs outside the adit mouth
  const cgX = -14;
  const cgZ = -26.6;
  for (const ox of [-1.35, 1.35]) {
    for (const oz of [-1.15, 1.15]) {
      box(scene, cgX + ox, 2.6, cgZ + oz, 0.16, 5.2, 0.16, steel);
    }
  }
  box(scene, cgX, 5.15, cgZ, 3.0, 0.16, 2.6, steel);
  const cage = new THREE.Group();
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.12, 1.85), steel);
  deck.position.y = 0.12;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.05, 1.85), rust);
  railL.position.set(-1.02, 0.62, 0);
  const railR = railL.clone();
  railR.position.x = 1.02;
  cage.add(deck, railL, railR);
  cage.position.set(cgX, 0.15, cgZ);
  scene.add(cage);
  MAP.cageMesh = cage;
  MAP.cage = { x: cgX, z: cgZ, y: 0.15, sx: 2.15, sz: 1.85, top: 0.32 };
  MAP.platforms = MAP.platforms || [];
  MAP.platforms.push(MAP.cage);
  MAP.cageDir = 1;
  const sheave = box(scene, cgX, 5.35, cgZ, 0.28, 0.7, 0.7, rust);
  MAP.cageSheave = sheave;

  // Sluice flume — east of the pad, shoves anyone standing in the wash
  const slX = 20.4;
  const slZ = 1.2;
  const waterMat = new THREE.MeshLambertMaterial({ color: 0x6a8a78, transparent: true, opacity: 0.72 });
  const flume = box(scene, slX, 0.08, slZ, 2.4, 0.1, 14.5, concrete);
  flume.receiveShadow = true;
  const wash = box(scene, slX, 0.16, slZ, 1.55, 0.08, 13.6, waterMat);
  wash.castShadow = false;
  MAP.sluiceWash = wash;
  MAP.sluice = { x: slX, z: slZ, hx: 0.78, hz: 6.6, vx: 3.4, vz: 1.6 };
  box(scene, slX - 1.15, 0.28, slZ, 0.18, 0.42, 14.2, concrete);
  box(scene, slX + 1.15, 0.28, slZ, 0.18, 0.42, 14.2, concrete);

  // Adit-door berms + cook-off drums
  const adBag = box(scene, -16.6, 0.28, -27.6, 1.6, 0.56, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-16.6, 0, -27.6), mesh: adBag, sx: 1.6, sy: 0.56, sz: 0.8, climb: true });
  const adBag2 = box(scene, -11.4, 0.26, -27.5, 1.45, 0.52, 0.75, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-11.4, 0, -27.5), mesh: adBag2, sx: 1.45, sy: 0.52, sz: 0.75, climb: true });
  const adDrum = box(scene, -17.8, 0.55, -28.4, 0.7, 1.1, 0.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-17.8, 0, -28.4), mesh: adDrum, sx: 0.7, sy: 1.1, sz: 0.7 });
  const adDrum2 = box(scene, -10.2, 0.55, -28.2, 0.7, 1.1, 0.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-10.2, 0, -28.2), mesh: adDrum2, sx: 0.7, sy: 1.1, sz: 0.7 });

  // Wrecked adit truck south of the drift
  const avX = -14.2;
  const avZ = -46.4;
  const adCab = box(scene, avX, 0.7, avZ, 1.5, 1.15, 1.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(avX, 0, avZ), mesh: adCab, sx: 1.5, sy: 1.3, sz: 1.7 });
  const adBed = box(scene, avX, 0.55, avZ - 2.1, 1.7, 0.7, 2.2, steel);
  MAP.crates.push({ pos: new THREE.Vector3(avX, 0, avZ - 2.1), mesh: adBed, sx: 1.7, sy: 0.9, sz: 2.2 });
  MAP.aditTruck = new THREE.Vector3(avX, 0, avZ);




  // Extra berms + drums at the hut door
  const hutBag = box(scene, 25.4, 0.28, 28.8, 1.7, 0.56, 0.85, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(25.4, 0, 28.8), mesh: hutBag, sx: 1.7, sy: 0.56, sz: 0.85, climb: true });
  const hutBag2 = box(scene, 29.2, 0.26, 28.6, 1.5, 0.52, 0.8, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(29.2, 0, 28.6), mesh: hutBag2, sx: 1.5, sy: 0.52, sz: 0.8, climb: true });

  // Shallow quarry trench — vaultable ditch cover east of pad
  const trenchMat = new THREE.MeshLambertMaterial({ color: 0x4a3c28 });
  const trench = [
    [11.4, -8.6, 3.4, 0.55, 1.15],
    [13.2, -9.4, 2.2, 0.5, 0.95],
    [10.2, -7.4, 1.8, 0.48, 0.85],
  ];
  MAP.trench = [];
  for (const t of trench) {
    const m = box(scene, t[0], t[3] * 0.5, t[1], t[2], t[3], t[4], trenchMat);
    const crate = { pos: new THREE.Vector3(t[0], 0, t[1]), mesh: m, sx: t[2], sy: t[3], sz: t[4], climb: true };
    MAP.crates.push(crate);
    MAP.trench.push(crate);
  }
  MAP.crates.push({
    pos: new THREE.Vector3(MAP.extract.x + 5.4, 0, MAP.extract.z + 3.2),
    mesh: jBody,
    sx: 2.6,
    sy: 1.2,
    sz: 1.5,
  });

  // Hangar catwalk railing (visual, along west interior)
  box(scene, 20.2, 3.15, -28, 0.12, 0.08, 6.4, steel);
  box(scene, 20.2, 2.55, -25.2, 0.08, 1.2, 0.08, steel);
  box(scene, 20.2, 2.55, -30.8, 0.08, 1.2, 0.08, steel);

  // Night hangar wing — split north wall so a door gap exists at z≈-24
  box(scene, 20.4, 3.2, -24, 3.2, 6.4, 1, night);
  box(scene, 31.6, 3.2, -24, 3.2, 6.4, 1, night);
  box(scene, 26, 5.6, -24, 8.2, 1.6, 1, night); // lintel
  box(scene, 26, 3.2, -32, 14, 6.4, 1, night);
  box(scene, 19, 3.2, -28, 1, 6.4, 9, night);
  box(scene, 33, 3.2, -28, 1, 6.4, 9, night);
  box(scene, 26, 6.5, -28, 14, 0.4, 9, night);

  const door = box(scene, 26, 1.7, -23.55, 4.6, 3.4, 0.18, steel);
  door.userData.hangarDoor = true;
  MAP.hangarDoorMesh = door;
  const doorRing = new THREE.Mesh(
    new THREE.RingGeometry(1.8, 2.15, 20),
    new THREE.MeshBasicMaterial({ color: 0x88a0c8, side: THREE.DoubleSide })
  );
  doorRing.rotation.x = -Math.PI / 2;
  doorRing.position.copy(MAP.hangarDoor).setY(0.04);
  scene.add(doorRing);
  const lamp = new THREE.PointLight(0x6688ff, 1.4, 18);
  lamp.position.set(26, 5.4, -28);
  scene.add(lamp);
  MAP.hangarLamp = lamp;
  box(scene, 26, 0.15, -28, 3, 0.3, 3, steel);

  // Door light leak — warm slab spilling through the gap
  const leak = new THREE.SpotLight(0xffc070, 1.8, 16, 0.55, 0.55, 1);
  leak.position.set(26, 3.4, -22.4);
  leak.target.position.set(26, 0.2, -18);
  scene.add(leak);
  scene.add(leak.target);
  MAP.doorLeak = leak;
  const leakPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(4.4, 3.2),
    new THREE.MeshBasicMaterial({
      color: 0xffd090,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  leakPlane.position.set(26, 1.7, -23.35);
  scene.add(leakPlane);
  MAP.doorLeakPlane = leakPlane;

  // Dust motes inside hangar volume
  const moteCount = 90;
  const moteGeo = new THREE.BufferGeometry();
  const motePos = new Float32Array(moteCount * 3);
  const motePhase = new Float32Array(moteCount);
  for (let i = 0; i < moteCount; i++) {
    motePos[i * 3] = 20 + Math.random() * 12;
    motePos[i * 3 + 1] = 0.4 + Math.random() * 5.4;
    motePos[i * 3 + 2] = -32 + Math.random() * 9;
    motePhase[i] = Math.random() * Math.PI * 2;
  }
  moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
  const motes = new THREE.Points(
    moteGeo,
    new THREE.PointsMaterial({
      color: 0xc8b890,
      size: 0.045,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    })
  );
  scene.add(motes);
  MAP.motes = motes;
  MAP.motePhase = motePhase;

  const hangarClutter = [
    [22.4, 0.7, -26.2, 1.4, 1.4, 1.4, crateWood],
    [23.6, 0.45, -29.8, 1.1, 0.9, 1.8, oil],
    [29.2, 0.85, -26.6, 2.0, 1.7, 1.2, rust],
    [30.4, 0.55, -30.4, 1.6, 1.1, 1.6, concrete],
    [24.2, 1.1, -31.0, 0.7, 2.2, 0.7, steel],
    [28.6, 0.4, -27.4, 2.4, 0.8, 1.0, oil],
    [21.6, 0.35, -28.8, 0.9, 0.7, 2.2, concrete],
    [32.2, 0.55, -31.2, 1.2, 1.1, 0.9, rust],
  ];
  for (const h of hangarClutter) {
    const m = box(scene, h[0], h[1], h[2], h[3], h[4], h[5], h[6]);
    MAP.crates.push({
      pos: new THREE.Vector3(h[0], 0, h[2]),
      mesh: m,
      sx: h[3],
      sy: h[4],
      sz: h[5],
    });
  }

  // Workbench + drum silhouettes (visual only if too thin for cover)
  const sheen = new THREE.Mesh(
    new THREE.CircleGeometry(1.8, 16),
    new THREE.MeshBasicMaterial({ color: 0x3a4a38, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
  );
  sheen.rotation.x = -Math.PI / 2;
  sheen.position.set(26.4, 0.03, -28.2);
  scene.add(sheen);
  const genLamp = new THREE.PointLight(0xffa060, 0.55, 6);
  genLamp.position.set(32.2, 1.4, -31.2);
  scene.add(genLamp);
  MAP.genLamp = genLamp;
  MAP.oilSheen = sheen;

  const fan = new THREE.Group();
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 10), steel);
  hub.rotation.x = Math.PI / 2;
  fan.add(hub);
  for (let i = 0; i < 3; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 0.18), steel);
    blade.rotation.z = (i / 3) * Math.PI * 2;
    fan.add(blade);
  }
  fan.position.set(26, 6.15, -28);
  scene.add(fan);
  MAP.fan = fan;

  MAP.chains = [];
  const chainMat = new THREE.MeshLambertMaterial({ color: 0x3a3e38 });
  for (let i = 0; i < 5; i++) {
    const chain = new THREE.Group();
    const links = 7 + (i % 3);
    for (let k = 0; k < links; k++) {
      const link = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.05), chainMat);
      link.position.y = -k * 0.2;
      chain.add(link);
    }
    chain.position.set(21 + i * 1.7, 6.05, -25.2 - (i % 2) * 1.4);
    scene.add(chain);
    MAP.chains.push({ mesh: chain, phase: i * 0.7 });
  }

  MAP.skyFlares = [];
  for (let i = 0; i < 3; i++) {
    const flare = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xffc060, transparent: true, opacity: 0 })
    );
    flare.position.set(-30 + i * 22, 28, -42 - i * 4);
    scene.add(flare);
    MAP.skyFlares.push({ mesh: flare, t: 8 + i * 11, lit: 0 });
  }

  const cable = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.04, 7.2),
    new THREE.MeshLambertMaterial({ color: 0x2a2418 })
  );
  cable.position.set(23.2, 5.4, -28);
  cable.rotation.z = 0.08;
  scene.add(cable);
  box(scene, 27.4, 0.9, -24.8, 2.8, 0.12, 1.1, steel);
  box(scene, 20.8, 0.55, -30.6, 0.55, 1.1, 0.55, oil);
  box(scene, 20.8, 0.55, -31.3, 0.55, 1.1, 0.55, oil);

  // Ammo restock crate
  const ammoMat = new THREE.MeshLambertMaterial({ color: 0x2a6a3a });
  const ammoCrate = box(scene, MAP.ammo.x, 0.55, MAP.ammo.z, 1.6, 1.1, 1.6, ammoMat);
  ammoCrate.userData.ammo = true;
  const ammoLid = box(scene, MAP.ammo.x, 1.14, MAP.ammo.z, 1.55, 0.08, 1.55, steel);
  const ammoRing = new THREE.Mesh(
    new THREE.RingGeometry(1.15, 1.45, 18),
    new THREE.MeshBasicMaterial({ color: 0x50c868, side: THREE.DoubleSide })
  );
  ammoRing.rotation.x = -Math.PI / 2;
  ammoRing.position.copy(MAP.ammo).setY(0.04);
  scene.add(ammoRing);
  MAP.ammoMesh = ammoCrate;
  MAP.ammoLid = ammoLid;
  MAP.ammoLidClosedY = 1.14;
  MAP.ammoLidOpenY = 1.62;
  MAP.ammoLidOpen = 0;
  MAP.ammoRing = ammoRing;

  // Med crate — hold F to pack vitals
  const medMat = new THREE.MeshLambertMaterial({ color: 0x6a2030 });
  const medCrate = box(scene, MAP.med.x, 0.5, MAP.med.z, 1.35, 1.0, 1.35, medMat);
  medCrate.userData.med = true;
  const cross = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.08, 0.16),
    new THREE.MeshBasicMaterial({ color: 0xe8d0d0 })
  );
  cross.position.set(MAP.med.x, 1.06, MAP.med.z + 0.68);
  scene.add(cross);
  const cross2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.08, 0.55),
    new THREE.MeshBasicMaterial({ color: 0xe8d0d0 })
  );
  cross2.position.copy(cross.position);
  scene.add(cross2);
  const medRing = new THREE.Mesh(
    new THREE.RingGeometry(0.95, 1.22, 16),
    new THREE.MeshBasicMaterial({ color: 0xc05060, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  medRing.rotation.x = -Math.PI / 2;
  medRing.position.copy(MAP.med).setY(0.04);
  scene.add(medRing);
  MAP.medMesh = medCrate;
  MAP.medRing = medRing;

  // Distant ridge haze — stacked translucent bands on the horizon
  const hazeGroup = new THREE.Group();
  const hazeBands = [];
  const hazeColors = [0xc48a48, 0xa07038, 0x7a5028, 0x5a3818];
  for (let i = 0; i < 4; i++) {
    const band = new THREE.Mesh(
      new THREE.PlaneGeometry(130 - i * 8, 6 + i * 2.2),
      new THREE.MeshBasicMaterial({
        color: hazeColors[i],
        transparent: true,
        opacity: 0.14 + i * 0.05,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    band.position.set(-8 - i * 4, 3.2 + i * 1.6, -46 - i * 3);
    hazeGroup.add(band);
    hazeBands.push(band);
    const band2 = band.clone();
    band2.position.set(18 + i * 3, 2.8 + i * 1.4, 46 + i * 2);
    band2.rotation.y = Math.PI;
    hazeGroup.add(band2);
    hazeBands.push(band2);
  }
  scene.add(hazeGroup);
  MAP.haze = hazeGroup;
  MAP.hazeBands = hazeBands;

  // Quarry floor mirage — low heat sheets far from the player start
  const mirage = [];
  for (let i = 0; i < 6; i++) {
    const sheet = new THREE.Mesh(
      new THREE.PlaneGeometry(8 + (i % 3) * 3, 1.2),
      new THREE.MeshBasicMaterial({
        color: 0xd8b070,
        transparent: true,
        opacity: 0.07,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    sheet.rotation.x = -Math.PI / 2 + 0.04;
    const a = (i / 6) * Math.PI * 2;
    sheet.position.set(Math.cos(a) * 28, 0.35, Math.sin(a) * 28);
    sheet.rotation.y = a + Math.PI / 2;
    scene.add(sheet);
    mirage.push(sheet);
  }
  MAP.mirage = mirage;

  // Crate rope ties — visual lash on a few crates
  const ropeMat = new THREE.MeshLambertMaterial({ color: 0x3a2a18 });
  for (let i = 0; i < MAP.crates.length; i += 3) {
    const c = MAP.crates[i];
    const rope = new THREE.Mesh(new THREE.BoxGeometry(c.sx + 0.08, 0.05, 0.05), ropeMat);
    rope.position.set(c.pos.x, Math.max(0.7, c.sy * 0.55), c.pos.z);
    scene.add(rope);
    const rope2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, c.sz + 0.08), ropeMat);
    rope2.position.copy(rope.position);
    scene.add(rope2);
  }

  // Extract crate
  const ex = box(scene, MAP.extract.x, 0.7, MAP.extract.z, 2.4, 1.4, 2.4, amber);
  ex.userData.extract = true;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(2.6, 3.1, 24),
    new THREE.MeshBasicMaterial({ color: 0xe8d050, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.copy(MAP.extract).setY(0.05);
  scene.add(ring);
  MAP.extractRing = ring;

  // Extract pad chevrons pointing at the crate
  const chevMat = new THREE.MeshBasicMaterial({
    color: 0xe8d050,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const chevrons = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const chev = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.18), chevMat.clone());
    chev.rotation.x = -Math.PI / 2;
    chev.rotation.z = a + Math.PI / 2;
    chev.position.set(
      MAP.extract.x + Math.cos(a) * 3.6,
      0.04,
      MAP.extract.z + Math.sin(a) * 3.6
    );
    scene.add(chev);
    chevrons.push(chev);
  }
  MAP.extractChevs = chevrons;

  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.22, 9.5, 8, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xffc050,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  beacon.position.copy(MAP.extract).setY(4.8);
  scene.add(beacon);
  MAP.extractBeacon = beacon;
  const strobes = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const sl = new THREE.PointLight(0xff8030, 0, 10);
    sl.position.set(MAP.extract.x + Math.cos(a) * 2.8, 1.6, MAP.extract.z + Math.sin(a) * 2.8);
    scene.add(sl);
    strobes.push(sl);
  }
  MAP.extractStrobes = strobes;

  const flood = new THREE.SpotLight(0xffc070, 0, 28, 0.55, 0.4, 1);
  flood.position.set(MAP.extract.x, 9.2, MAP.extract.z);
  flood.target.position.set(MAP.extract.x, 0, MAP.extract.z);
  scene.add(flood);
  scene.add(flood.target);
  MAP.extractFlood = flood;

  // Wind sock on the extract pad rim
  box(scene, MAP.extract.x + 3.2, 1.35, MAP.extract.z + 1.35, 0.07, 2.7, 0.07, steel);
  const sock = new THREE.Mesh(
    new THREE.ConeGeometry(0.16, 0.72, 6, 1, true),
    new THREE.MeshLambertMaterial({ color: 0xc85028, side: THREE.DoubleSide })
  );
  sock.position.set(MAP.extract.x + 3.2, 2.62, MAP.extract.z + 1.35);
  sock.rotation.z = Math.PI / 2;
  scene.add(sock);
  MAP.windsock = sock;

  // Ridge searchlight that sweeps the quarry at dusk
  const search = new THREE.SpotLight(0xc8d4ee, 1.15, 90, 0.16, 0.55, 1);
  search.position.set(-34, 26, -30);
  scene.add(search);
  scene.add(search.target);
  MAP.search = search;

  // Heat shimmer over extract pad — stacked translucent discs that breathe
  const shimmerGroup = new THREE.Group();
  const shimmerMats = [];
  for (let i = 0; i < 5; i++) {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(1.4 + i * 0.35, 18),
      new THREE.MeshBasicMaterial({
        color: 0xffc070,
        transparent: true,
        opacity: 0.07,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.06 + i * 0.11;
    shimmerGroup.add(disc);
    shimmerMats.push(disc);
  }
  shimmerGroup.position.copy(MAP.extract);
  scene.add(shimmerGroup);
  MAP.shimmer = shimmerGroup;
  MAP.shimmerDiscs = shimmerMats;

  const rimLights = [];
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const r = 34 + (i % 3) * 2;
    box(scene, Math.cos(a) * r, 1.4, Math.sin(a) * r, 3 + (i % 3), 2.8, 3, rock);
    if (i % 3 === 0) {
      const lamp = new THREE.PointLight(0xffaa66, 0.35, 10);
      lamp.position.set(Math.cos(a) * (r - 1.2), 3.4, Math.sin(a) * (r - 1.2));
      scene.add(lamp);
      rimLights.push(lamp);
    }
  }
  MAP.rimLights = rimLights;

  scene.fog = new THREE.FogExp2(0x2a2014, 0.018);
  scene.background = new THREE.Color(0x24180e);

  // Distant ridge muzzle pops — ambient war on the far rim
  const rimFlashes = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.4;
    const fl = new THREE.PointLight(0xffc070, 0, 14);
    fl.position.set(Math.cos(a) * 42, 3.6 + (i % 3), Math.sin(a) * 42);
    scene.add(fl);
    rimFlashes.push({ light: fl, t: Math.random() * 4, burst: 0 });
  }
  MAP.rimFlashes = rimFlashes;

  // Quarry rim birds — small box flocks circling the cliffs
  const birds = [];
  const birdMat = new THREE.MeshLambertMaterial({ color: 0x1a1610 });
  for (let i = 0; i < 11; i++) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.07, 0.28), birdMat);
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.12), birdMat);
    wingL.position.set(-0.22, 0.01, 0);
    const wingR = wingL.clone();
    wingR.position.x = 0.22;
    g.add(body, wingL, wingR);
    const radius = 22 + (i % 5) * 3.4;
    const height = 7.5 + (i % 4) * 1.6;
    const phase = (i / 11) * Math.PI * 2;
    g.position.set(Math.cos(phase) * radius, height, Math.sin(phase) * radius);
    scene.add(g);
    birds.push({
      mesh: g,
      wingL,
      wingR,
      radius,
      height,
      phase,
      speed: 0.18 + (i % 3) * 0.06,
      flap: Math.random() * Math.PI * 2,
      spook: 0,
    });
  }
  MAP.birds = birds;

  // Wind tarps on crate tops
  const tarps = [];
  const tarpMat = new THREE.MeshLambertMaterial({
    color: 0x6a5a38,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85,
  });
  for (let i = 0; i < 5; i++) {
    const c = MAP.crates[i * 2];
    if (!c) continue;
    const tarp = new THREE.Mesh(new THREE.PlaneGeometry(c.sx * 0.9, c.sz * 0.55, 4, 2), tarpMat.clone());
    tarp.rotation.x = -Math.PI / 2 + 0.12;
    tarp.position.set(c.pos.x, c.sy + 0.08, c.pos.z);
    scene.add(tarp);
    tarps.push(tarp);
  }
  MAP.tarps = tarps;

  // Radio mast with blink beacon
  box(scene, -32, 6, 18, 0.18, 12, 0.18, steel);
  const blink = new THREE.PointLight(0xff4030, 0.8, 16);
  blink.position.set(-32, 12.2, 18);
  scene.add(blink);
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xff5030 })
  );
  cap.position.set(-32, 12.2, 18);
  scene.add(cap);
  MAP.mastBlink = blink;
  MAP.mastCap = cap;
  MAP.mastT = 0;

  // Wind grit — low drifting particles across quarry floor (not hangar)
  const gritN = 140;
  const gritGeo = new THREE.BufferGeometry();
  const gritPos = new Float32Array(gritN * 3);
  const gritSpd = new Float32Array(gritN);
  for (let i = 0; i < gritN; i++) {
    gritPos[i * 3] = (Math.random() - 0.5) * 70;
    gritPos[i * 3 + 1] = 0.04 + Math.random() * 0.55;
    gritPos[i * 3 + 2] = (Math.random() - 0.5) * 70;
    gritSpd[i] = 1.4 + Math.random() * 2.2;
  }
  gritGeo.setAttribute("position", new THREE.BufferAttribute(gritPos, 3));
  const grit = new THREE.Points(
    gritGeo,
    new THREE.PointsMaterial({
      color: 0x8a7048,
      size: 0.07,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    })
  );
  scene.add(grit);
  MAP.grit = grit;
  MAP.gritSpd = gritSpd;

  const truck = new THREE.Group();
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), rust);
  cab.position.y = 1.15;
  const bed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 1.35), steel);
  bed.position.set(-1.7, 0.85, 0);
  const wheelA = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.55, 1.5), night);
  wheelA.position.set(0.4, 0.28, 0);
  const wheelB = wheelA.clone();
  wheelB.position.x = -2.1;
  const lampL = new THREE.PointLight(0xffe8b0, 1.4, 18);
  lampL.position.set(0.95, 1.05, 0.45);
  const lampR = lampL.clone();
  lampR.position.z = -0.45;
  truck.add(cab, bed, wheelA, wheelB, lampL, lampR);
  truck.position.set(-40, 0, -8);
  scene.add(truck);
  MAP.truck = truck;
  MAP.truckT = 0;

  const tufts = [];
  const grassMat = new THREE.MeshLambertMaterial({ color: 0x4a5a28, side: THREE.DoubleSide });
  for (let i = 0; i < 48; i++) {
    const g = new THREE.Group();
    for (let b = 0; b < 3; b++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.28 + Math.random() * 0.22, 0.015), grassMat);
      blade.position.set((Math.random() - 0.5) * 0.12, 0.16, (Math.random() - 0.5) * 0.12);
      blade.rotation.z = (Math.random() - 0.5) * 0.35;
      g.add(blade);
    }
    let gx = (Math.random() - 0.5) * 70;
    let gz = (Math.random() - 0.5) * 70;
    if (gx > 16 && gz < -20) {
      gx -= 20;
      gz += 12;
    }
    g.position.set(gx, 0, gz);
    scene.add(g);
    tufts.push(g);
  }
  MAP.tufts = tufts;

  const rabbits = [];
  const fur = new THREE.MeshLambertMaterial({ color: 0x8a6a40 });
  for (let i = 0; i < 5; i++) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.34), fur);
    body.position.y = 0.14;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.12), fur);
    head.position.set(0, 0.2, -0.18);
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.04), fur);
    ear.position.set(-0.04, 0.3, -0.18);
    const ear2 = ear.clone();
    ear2.position.x = 0.04;
    g.add(body, head, ear, ear2);
    const rx = (Math.random() - 0.5) * 50;
    const rz = (Math.random() - 0.5) * 50;
    g.position.set(rx, 0, rz);
    scene.add(g);
    rabbits.push({
      mesh: g,
      x: rx,
      z: rz,
      heading: Math.random() * Math.PI * 2,
      speed: 2.2 + Math.random() * 1.6,
      pause: Math.random() * 3,
      spook: 0,
    });
  }
  MAP.rabbits = rabbits;

  const sparks = [];
  const sparkPts = [
    [24.2, 3.4, -25.4],
    [31.6, 2.8, -30.2],
    [22.8, 4.1, -31.5],
  ];
  for (const p of sparkPts) {
    const light = new THREE.PointLight(0xffc060, 0, 6);
    light.position.set(p[0], p[1], p[2]);
    scene.add(light);
    sparks.push({ light, t: 1 + Math.random() * 4, flash: 0 });
  }
  MAP.sparks = sparks;

  const moths = [];
  const mothMat = new THREE.MeshBasicMaterial({ color: 0xd8c890, transparent: true, opacity: 0.7 });
  const lampPts = [
    [24.2, 3.4, -25.4],
    [31.6, 2.8, -30.2],
    [22.8, 4.1, -31.5],
  ];
  for (let i = 0; i < 10; i++) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.015, 0.04), mothMat);
    const lamp = lampPts[i % lampPts.length];
    m.position.set(lamp[0], lamp[1], lamp[2]);
    scene.add(m);
    moths.push({
      mesh: m,
      lamp,
      phase: Math.random() * Math.PI * 2,
      r: 0.35 + Math.random() * 0.45,
      spd: 2.2 + Math.random() * 1.8,
    });
  }
  MAP.moths = moths;

  return MAP;
}

export function updateBirds(dt, spookAt = null) {
  if (!MAP.birds) return;
  for (const b of MAP.birds) {
    if (spookAt) {
      const d = Math.hypot(b.mesh.position.x - spookAt.x, b.mesh.position.z - spookAt.z);
      if (d < 18) b.spook = Math.max(b.spook, 1.6 + Math.random() * 0.8);
    }
    b.spook = Math.max(0, b.spook - dt * 0.35);
    const climb = b.spook > 0 ? 4.5 : 0;
    b.phase += dt * (b.speed + b.spook * 0.55);
    const r = b.radius + Math.sin(b.phase * 0.7) * 1.4 + b.spook * 3;
    b.mesh.position.set(
      Math.cos(b.phase) * r,
      b.height + climb + Math.sin(b.phase * 2.2) * 0.35,
      Math.sin(b.phase) * r
    );
    const next = b.phase + 0.08;
    b.mesh.lookAt(Math.cos(next) * r, b.mesh.position.y, Math.sin(next) * r);
    b.flap += dt * (8 + b.spook * 10);
    const w = Math.sin(b.flap) * (0.55 + b.spook * 0.35);
    b.wingL.rotation.z = w;
    b.wingR.rotation.z = -w;
  }
}

export function updateGrit(dt) {
  if (!MAP.grit) return;
  const pos = MAP.grit.geometry.attributes.position;
  const arr = pos.array;
  const spd = MAP.gritSpd;
  for (let i = 0; i < spd.length; i++) {
    arr[i * 3] += dt * spd[i] * 1.6;
    arr[i * 3 + 2] += dt * spd[i] * 0.35;
    arr[i * 3 + 1] = 0.05 + Math.abs(Math.sin(performance.now() * 0.001 + i)) * 0.35;
    // keep grit off the hangar slab
    const x = arr[i * 3];
    const z = arr[i * 3 + 2];
    if (x > 19 && x < 33 && z < -23 && z > -33) {
      arr[i * 3] = -20 + Math.random() * 30;
      arr[i * 3 + 2] = 8 + Math.random() * 20;
    }
    if (arr[i * 3] > 36) arr[i * 3] = -36;
    if (arr[i * 3 + 2] > 36) arr[i * 3 + 2] = -36;
  }
  pos.needsUpdate = true;
  if (MAP.truck) {
    MAP.truckT = (MAP.truckT || 0) + dt * 0.12;
    const t = MAP.truckT;
    MAP.truck.position.set(-42 + ((t * 8) % 86), 0.02, -36 + Math.sin(t * 0.4) * 2.4);
    MAP.truck.rotation.y = Math.PI * 0.5 + Math.sin(t * 0.3) * 0.08;
  }
}

export function updateWildlife(dt, spookAt = null) {
  if (MAP.rabbits) {
    for (const r of MAP.rabbits) {
      if (spookAt) {
        const d = Math.hypot(r.x - spookAt.x, r.z - spookAt.z);
        if (d < 14) {
          r.spook = 1.8;
          r.heading = Math.atan2(r.x - spookAt.x, r.z - spookAt.z);
        }
      }
      r.spook = Math.max(0, r.spook - dt);
      r.pause -= dt;
      const spd = r.spook > 0 ? r.speed * 2.4 : r.pause > 0 ? 0 : r.speed;
      if (r.pause <= -2.5) r.pause = 0.8 + Math.random() * 2.4;
      if (spd > 0 && Math.random() < dt * 0.6) r.heading += (Math.random() - 0.5) * 0.8;
      r.x += Math.sin(r.heading) * spd * dt;
      r.z += Math.cos(r.heading) * spd * dt;
      if (Math.abs(r.x) > 46) {
        r.x = Math.sign(r.x) * 45;
        r.heading += Math.PI;
      }
      if (Math.abs(r.z) > 46) {
        r.z = Math.sign(r.z) * 45;
        r.heading += Math.PI;
      }
      if (r.x > 18 && r.z < -22) {
        r.x = 16;
        r.heading = Math.PI;
      }
      r.mesh.position.set(r.x, r.spook > 0 ? 0.06 : 0, r.z);
      r.mesh.rotation.y = r.heading;
    }
  }
  if (MAP.sparks) {
    for (const s of MAP.sparks) {
      s.t -= dt;
      s.flash = Math.max(0, s.flash - dt * 6);
      if (s.t <= 0) {
        s.t = 2.2 + Math.random() * 5;
        s.flash = 1;
      }
      s.light.intensity = s.flash * (2.4 + Math.random() * 1.6);
    }
  }
  if (MAP.moths) {
    for (const m of MAP.moths) {
      m.phase += dt * m.spd;
      const [lx, ly, lz] = m.lamp;
      m.mesh.position.set(
        lx + Math.cos(m.phase) * m.r,
        ly + Math.sin(m.phase * 1.7) * 0.22,
        lz + Math.sin(m.phase * 0.9) * m.r
      );
      m.mesh.rotation.y = m.phase;
      m.mesh.rotation.z = Math.sin(m.phase * 8) * 0.5;
    }
  }
}

export function nearestCrate(from) {
  let best = null;
  let bestD = Infinity;
  for (const c of MAP.crates) {
    const d = from.distanceTo(c.pos);
    if (d < bestD) {
      bestD = d;
      best = c;
    }
  }
  return best;
}

/** Axis-aligned slab ray vs crate AABBs. Returns first hit dist or null. */
export function rayVsCrates(origin, dir, maxDist = 80, ignore = null) {
  let best = Infinity;
  let hit = null;
  const d = dir.clone();
  if (d.lengthSq() < 1e-8) return null;
  d.normalize();
  for (const c of MAP.crates) {
    if (c === ignore) continue;
    if (c.dead) continue;
    const t = rayAabb(
      origin,
      d,
      c.pos.x - c.sx * 0.5,
      0,
      c.pos.z - c.sz * 0.5,
      c.pos.x + c.sx * 0.5,
      Math.max(c.sy, 1.2),
      c.pos.z + c.sz * 0.5
    );
    if (t != null && t > 0.08 && t < best && t < maxDist) {
      best = t;
      hit = { crate: c, dist: t };
    }
  }
  return hit;
}

function rayAabb(o, d, minX, minY, minZ, maxX, maxY, maxZ) {
  let tmin = 0;
  let tmax = 200;
  const axes = [
    [o.x, d.x, minX, maxX],
    [o.y, d.y, minY, maxY],
    [o.z, d.z, minZ, maxZ],
  ];
  for (const [oo, dd, mn, mx] of axes) {
    if (Math.abs(dd) < 1e-8) {
      if (oo < mn || oo > mx) return null;
      continue;
    }
    let t1 = (mn - oo) / dd;
    let t2 = (mx - oo) / dd;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return null;
  }
  return tmin;
}

/** True if a chest-height ray from a to b is not blocked by a crate. */
function segNear(a, b, p, rad) {
  const abx = b.x - a.x, abz = b.z - a.z;
  const len2 = abx * abx + abz * abz;
  if (len2 < 0.01) return Math.hypot(a.x - p.x, a.z - p.z) < rad;
  let t = ((p.x - a.x) * abx + (p.z - a.z) * abz) / len2;
  t = Math.max(0, Math.min(1, t));
  const x = a.x + abx * t, z = a.z + abz * t;
  return Math.hypot(x - p.x, z - p.z) < rad;
}

export function hasLOS(from, to, eyeY = 1.5) {
  const a = from.clone();
  a.y = eyeY;
  const b = to.clone();
  b.y = eyeY;
  const delta = b.sub(a);
  const dist = delta.length();
  if (dist < 0.2) return true;
  if (MAP.dust && MAP.dust.life > 0 && segNear(a, b, MAP.dust, MAP.dust.r)) return false;
  const hit = rayVsCrates(a, delta, dist - 0.35);
  return !hit;
}

export function peekCorners(crate, playerPos) {
  const hx = crate.sx * 0.5 + 0.85;
  const hz = crate.sz * 0.5 + 0.85;
  const pts = [
    new THREE.Vector3(crate.pos.x + hx, 0, crate.pos.z + hz),
    new THREE.Vector3(crate.pos.x + hx, 0, crate.pos.z - hz),
    new THREE.Vector3(crate.pos.x - hx, 0, crate.pos.z + hz),
    new THREE.Vector3(crate.pos.x - hx, 0, crate.pos.z - hz),
  ];
  const scored = pts.map((p) => {
    const los = hasLOS(p, playerPos);
    const d = p.distanceTo(playerPos);
    return { p, los, d };
  });
  scored.sort((a, b) => {
    if (a.los !== b.los) return a.los ? -1 : 1;
    return a.d - b.d;
  });
  return scored[0].p;
}

export function updateHangarFx(dt, doorOpenAmt = 0) {
  if (MAP.doorLeak) {
    MAP.doorLeak.intensity = 1.2 + doorOpenAmt * 2.2 + Math.sin(performance.now() * 0.004) * 0.15;
  }
  if (MAP.doorLeakPlane) {
    MAP.doorLeakPlane.material.opacity = 0.06 + doorOpenAmt * 0.18;
  }
  if (!MAP.motes) return;
  const pos = MAP.motes.geometry.attributes.position;
  const arr = pos.array;
  const ph = MAP.motePhase;
  for (let i = 0; i < ph.length; i++) {
    ph[i] += dt * (0.4 + (i % 5) * 0.07);
    arr[i * 3 + 1] += Math.sin(ph[i]) * dt * 0.12;
    arr[i * 3] += Math.cos(ph[i] * 0.6) * dt * 0.05;
    if (arr[i * 3 + 1] > 6.2) arr[i * 3 + 1] = 0.35;
    if (arr[i * 3] < 19.5) arr[i * 3] = 31.5;
    if (arr[i * 3] > 32) arr[i * 3] = 20;
  }
  pos.needsUpdate = true;
  if (MAP.oilSheen) {
    MAP.oilSheen.material.opacity = 0.2 + Math.sin(performance.now() * 0.0016) * 0.08;
  }
  if (MAP.warehouseMotes && MAP.warehouseMotePhase) {
    const wpos = MAP.warehouseMotes.geometry.attributes.position;
    const warr = wpos.array;
    const wph = MAP.warehouseMotePhase;
    for (let i = 0; i < wph.length; i++) {
      wph[i] += dt * (0.35 + (i % 4) * 0.06);
      warr[i * 3 + 1] += Math.sin(wph[i]) * dt * 0.1;
      warr[i * 3] += Math.cos(wph[i] * 0.5) * dt * 0.04;
      if (warr[i * 3 + 1] > 5.8) warr[i * 3 + 1] = 0.35;
      if (warr[i * 3] < -29.2) warr[i * 3] = -14.6;
      if (warr[i * 3] > -14.4) warr[i * 3] = -28.8;
    }
    wpos.needsUpdate = true;
  }
  if (MAP.warehouseLamp) {
    MAP.warehouseLamp.intensity = 1.05 + Math.sin(performance.now() * 0.003) * 0.12;
  }
  if (MAP.shedMotes && MAP.shedMotePhase) {
    const spos = MAP.shedMotes.geometry.attributes.position;
    const sarr = spos.array;
    const sph = MAP.shedMotePhase;
    for (let i = 0; i < sph.length; i++) {
      sph[i] += dt * (0.32 + (i % 3) * 0.05);
      sarr[i * 3 + 1] += Math.sin(sph[i]) * dt * 0.09;
      sarr[i * 3 + 2] += Math.cos(sph[i] * 0.45) * dt * 0.035;
      if (sarr[i * 3 + 1] > 4.2) sarr[i * 3 + 1] = 0.3;
      if (sarr[i * 3 + 2] < 17.2) sarr[i * 3 + 2] = 24.8;
      if (sarr[i * 3 + 2] > 25) sarr[i * 3 + 2] = 17.4;
    }
    spos.needsUpdate = true;
  }
  if (MAP.shedLamp) {
    MAP.shedLamp.intensity = 0.85 + Math.sin(performance.now() * 0.0026) * 0.14;
  }
  if (MAP.shedRing) {
    MAP.shedRing.material.opacity = 0.55 + Math.sin(performance.now() * 0.004) * 0.2;
  }
  if (MAP.lookoutLamp) {
    MAP.lookoutLamp.intensity = 0.55 + Math.sin(performance.now() * 0.0028) * 0.18;
  }
  if (MAP.lookoutRing) {
    MAP.lookoutRing.material.opacity = 0.4 + Math.sin(performance.now() * 0.0035) * 0.18;
  }
  if (MAP.radioMotes && MAP.radioMotePhase) {
    const rpos = MAP.radioMotes.geometry.attributes.position;
    const rarr = rpos.array;
    const rph = MAP.radioMotePhase;
    for (let i = 0; i < rph.length; i++) {
      rph[i] += dt * (0.3 + (i % 3) * 0.05);
      rarr[i * 3 + 1] += Math.sin(rph[i]) * dt * 0.08;
      rarr[i * 3] += Math.cos(rph[i] * 0.4) * dt * 0.03;
      if (rarr[i * 3 + 1] > 3.4) rarr[i * 3 + 1] = 0.3;
      if (rarr[i * 3] < -2.9) rarr[i * 3] = 7.2;
      if (rarr[i * 3] > 7.4) rarr[i * 3] = -2.6;
    }
    rpos.needsUpdate = true;
  }
  if (MAP.radioLamp) {
    MAP.radioLamp.intensity = 0.8 + Math.sin(performance.now() * 0.0042) * 0.16;
  }
  if (MAP.radioRing) {
    MAP.radioRing.material.opacity = 0.45 + Math.sin(performance.now() * 0.0038) * 0.2;
  }
  if (MAP.radioDish) {
    MAP.radioDish.rotation.z = Math.sin(performance.now() * 0.0004) * 0.08;
  }
  if (MAP.shopMotes && MAP.shopMotePhase) {
    const spos = MAP.shopMotes.geometry.attributes.position;
    const sarr = spos.array;
    const sph = MAP.shopMotePhase;
    for (let i = 0; i < sph.length; i++) {
      sph[i] += dt * (0.34 + (i % 3) * 0.05);
      sarr[i * 3 + 1] += Math.sin(sph[i]) * dt * 0.09;
      sarr[i * 3] += Math.cos(sph[i] * 0.42) * dt * 0.03;
      if (sarr[i * 3 + 1] > 3.3) sarr[i * 3 + 1] = 0.28;
      if (sarr[i * 3] < -10.8) sarr[i * 3] = -1.0;
      if (sarr[i * 3] > -0.8) sarr[i * 3] = -10.4;
    }
    spos.needsUpdate = true;
  }
  if (MAP.shopLamp) {
    MAP.shopLamp.intensity = 0.92 + Math.sin(performance.now() * 0.0036) * 0.18;
  }
  if (MAP.shopRing) {
    MAP.shopRing.material.opacity = 0.48 + Math.sin(performance.now() * 0.004) * 0.2;
  }
  if (MAP.shopGrind) {
    MAP.shopGrind.intensity = 0.18 + Math.abs(Math.sin(performance.now() * 0.012)) * 0.28;
  }
  if (MAP.shopBoom) {
    MAP.shopBoom.rotation.z = Math.sin(performance.now() * 0.00035) * 0.06;
  }
  if (MAP.hutMotes && MAP.hutMotePhase) {
    const hpos = MAP.hutMotes.geometry.attributes.position;
    const harr = hpos.array;
    const hph = MAP.hutMotePhase;
    for (let i = 0; i < hph.length; i++) {
      hph[i] += dt * (0.3 + (i % 3) * 0.05);
      harr[i * 3 + 1] += Math.sin(hph[i]) * dt * 0.08;
      harr[i * 3 + 2] += Math.cos(hph[i] * 0.4) * dt * 0.03;
      if (harr[i * 3 + 1] > 3.1) harr[i * 3 + 1] = 0.28;
      if (harr[i * 3 + 2] < 30.2) harr[i * 3 + 2] = 35.6;
      if (harr[i * 3 + 2] > 35.8) harr[i * 3 + 2] = 30.4;
    }
    hpos.needsUpdate = true;
  }
  if (MAP.hutLamp) {
    MAP.hutLamp.intensity = 0.82 + Math.sin(performance.now() * 0.0032) * 0.16;
  }
  if (MAP.hutRing) {
    MAP.hutRing.material.opacity = 0.46 + Math.sin(performance.now() * 0.0036) * 0.2;
  }
  if (MAP.cisternLamp) {
    MAP.cisternLamp.intensity = 0.6 + Math.sin(performance.now() * 0.0024) * 0.16;
  }
  if (MAP.cisternRing) {
    MAP.cisternRing.material.opacity = 0.38 + Math.sin(performance.now() * 0.0032) * 0.18;
  }
  if (MAP.magMotes && MAP.magMotePhase) {
    const mpos = MAP.magMotes.geometry.attributes.position;
    const marr = mpos.array;
    const mph = MAP.magMotePhase;
    for (let i = 0; i < mph.length; i++) {
      mph[i] += dt * (0.28 + (i % 3) * 0.05);
      marr[i * 3 + 1] += Math.sin(mph[i]) * dt * 0.08;
      marr[i * 3 + 2] += Math.cos(mph[i] * 0.4) * dt * 0.03;
      if (marr[i * 3 + 1] > 2.9) marr[i * 3 + 1] = 0.26;
      if (marr[i * 3 + 2] < 5.4) marr[i * 3 + 2] = 10.8;
      if (marr[i * 3 + 2] > 11.0) marr[i * 3 + 2] = 5.5;
    }
    mpos.needsUpdate = true;
  }
  if (MAP.magLamp) {
    MAP.magLamp.intensity = 0.72 + Math.sin(performance.now() * 0.0034) * 0.18;
  }
  if (MAP.magRing) {
    MAP.magRing.material.opacity = 0.42 + Math.sin(performance.now() * 0.0038) * 0.2;
  }
  if (MAP.crushMotes && MAP.crushMotePhase) {
    const cpos = MAP.crushMotes.geometry.attributes.position;
    const carr = cpos.array;
    const cph = MAP.crushMotePhase;
    for (let i = 0; i < cph.length; i++) {
      cph[i] += dt * (0.32 + (i % 3) * 0.05);
      carr[i * 3 + 1] += Math.sin(cph[i]) * dt * 0.09;
      carr[i * 3 + 2] += Math.cos(cph[i] * 0.45) * dt * 0.03;
      if (carr[i * 3 + 1] > 3.0) carr[i * 3 + 1] = 0.26;
      if (carr[i * 3 + 2] < -10.2) carr[i * 3 + 2] = -4.0;
      if (carr[i * 3 + 2] > -3.8) carr[i * 3 + 2] = -10.0;
    }
    cpos.needsUpdate = true;
  }
  if (MAP.crushLamp) {
    MAP.crushLamp.intensity = 0.88 + Math.sin(performance.now() * 0.0042) * 0.2;
  }
  if (MAP.crushRing) {
    MAP.crushRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0037) * 0.2;
  }
  if (MAP.crushJaw) {
    MAP.crushJaw.scale.y = 1 + Math.sin(performance.now() * 0.006) * 0.06;
  }
  if (MAP.dockMotes && MAP.dockMotePhase) {
    const dpos = MAP.dockMotes.geometry.attributes.position;
    const darr = dpos.array;
    const dph = MAP.dockMotePhase;
    for (let i = 0; i < dph.length; i++) {
      dph[i] += dt * (0.3 + (i % 3) * 0.05);
      darr[i * 3 + 1] += Math.sin(dph[i]) * dt * 0.08;
      darr[i * 3 + 2] += Math.cos(dph[i] * 0.42) * dt * 0.03;
      if (darr[i * 3 + 1] > 2.9) darr[i * 3 + 1] = 0.26;
      if (darr[i * 3 + 2] < 5.1) darr[i * 3 + 2] = 11.1;
      if (darr[i * 3 + 2] > 11.3) darr[i * 3 + 2] = 5.2;
    }
    dpos.needsUpdate = true;
  }
  if (MAP.dockLamp) {
    MAP.dockLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0036) * 0.18;
  }
  if (MAP.dockRing) {
    MAP.dockRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.dockForks) {
    MAP.dockForks.position.y = 0.22 + Math.sin(performance.now() * 0.002) * 0.03;
  }
  if (MAP.assayMotes && MAP.assayMotePhase) {
    const apos = MAP.assayMotes.geometry.attributes.position;
    const aarr = apos.array;
    const aph = MAP.assayMotePhase;
    for (let i = 0; i < aph.length; i++) {
      aph[i] += dt * (0.3 + (i % 3) * 0.05);
      aarr[i * 3 + 1] += Math.sin(aph[i]) * dt * 0.08;
      aarr[i * 3 + 2] += Math.cos(aph[i] * 0.42) * dt * 0.03;
      if (aarr[i * 3 + 1] > 2.9) aarr[i * 3 + 1] = 0.26;
      if (aarr[i * 3 + 2] < -12.1) aarr[i * 3 + 2] = -5.5;
      if (aarr[i * 3 + 2] > -5.3) aarr[i * 3 + 2] = -12.0;
    }
    apos.needsUpdate = true;
  }
  if (MAP.assayLamp) {
    MAP.assayLamp.intensity = 0.88 + Math.sin(performance.now() * 0.0034) * 0.16;
  }
  if (MAP.assayRing) {
    MAP.assayRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.assayScale) {
    MAP.assayScale.rotation.z = Math.sin(performance.now() * 0.0018) * 0.08;
  }
  if (MAP.weighMotes && MAP.weighMotePhase) {
    const wpos = MAP.weighMotes.geometry.attributes.position;
    const warr = wpos.array;
    const wph = MAP.weighMotePhase;
    for (let i = 0; i < wph.length; i++) {
      wph[i] += dt * (0.3 + (i % 3) * 0.05);
      warr[i * 3 + 1] += Math.sin(wph[i]) * dt * 0.08;
      warr[i * 3 + 2] += Math.cos(wph[i] * 0.42) * dt * 0.03;
      if (warr[i * 3 + 1] > 2.9) warr[i * 3 + 1] = 0.26;
      if (warr[i * 3 + 2] < 18.6) warr[i * 3 + 2] = 24.9;
      if (warr[i * 3 + 2] > 25.1) warr[i * 3 + 2] = 18.7;
    }
    wpos.needsUpdate = true;
  }
  if (MAP.weighLamp) {
    MAP.weighLamp.intensity = 0.88 + Math.sin(performance.now() * 0.0033) * 0.16;
  }
  if (MAP.weighRing) {
    MAP.weighRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.weighBoom) {
    MAP.weighBoom.rotation.z = Math.sin(performance.now() * 0.0014) * 0.22;
  }
  if (MAP.weighLed) {
    MAP.weighLed.intensity = 0.12 + (Math.sin(performance.now() * 0.007) > 0.15 ? 0.22 : 0.04);
  }
  if (MAP.genMotes && MAP.genMotePhase) {
    const gpos = MAP.genMotes.geometry.attributes.position;
    const garr = gpos.array;
    const gph = MAP.genMotePhase;
    for (let i = 0; i < gph.length; i++) {
      gph[i] += dt * (0.32 + (i % 3) * 0.05);
      garr[i * 3 + 1] += Math.sin(gph[i]) * dt * 0.08;
      garr[i * 3 + 2] += Math.cos(gph[i] * 0.4) * dt * 0.03;
      if (garr[i * 3 + 1] > 2.85) garr[i * 3 + 1] = 0.24;
      if (garr[i * 3 + 2] < -10.3) garr[i * 3 + 2] = -3.7;
      if (garr[i * 3 + 2] > -3.5) garr[i * 3 + 2] = -10.2;
    }
    gpos.needsUpdate = true;
  }
  if (MAP.genLamp) {
    MAP.genLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0031) * 0.18;
  }
  if (MAP.genRing) {
    MAP.genRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.genFan) {
    MAP.genFan.rotation.y += dt * 4.2;
  }
  if (MAP.genLed) {
    MAP.genLed.intensity = 0.14 + (Math.sin(performance.now() * 0.009) > 0.1 ? 0.26 : 0.05);
  }
  if (MAP.compMotes && MAP.compMotePhase) {
    const cpos = MAP.compMotes.geometry.attributes.position;
    const carr = cpos.array;
    const cph = MAP.compMotePhase;
    for (let i = 0; i < cph.length; i++) {
      cph[i] += dt * (0.32 + (i % 3) * 0.05);
      carr[i * 3 + 1] += Math.sin(cph[i]) * dt * 0.08;
      carr[i * 3 + 2] += Math.cos(cph[i] * 0.4) * dt * 0.03;
      if (carr[i * 3 + 1] > 2.85) carr[i * 3 + 1] = 0.24;
      if (carr[i * 3 + 2] < 7.9) carr[i * 3 + 2] = 14.3;
      if (carr[i * 3 + 2] > 14.5) carr[i * 3 + 2] = 8.1;
    }
    cpos.needsUpdate = true;
  }
  if (MAP.compLamp) {
    MAP.compLamp.intensity = 0.92 + Math.sin(performance.now() * 0.0032) * 0.18;
  }
  if (MAP.compRing) {
    MAP.compRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.compPiston) {
    MAP.compPiston.position.y = 1.15 + Math.sin(performance.now() * 0.008) * 0.18;
  }
  if (MAP.compLed) {
    MAP.compLed.intensity = 0.14 + (Math.sin(performance.now() * 0.01) > 0.12 ? 0.28 : 0.05);
  }
  if (MAP.lubeMotes && MAP.lubeMotePhase) {
    const lpos = MAP.lubeMotes.geometry.attributes.position;
    const larr = lpos.array;
    const lph = MAP.lubeMotePhase;
    for (let i = 0; i < lph.length; i++) {
      lph[i] += dt * (0.32 + (i % 3) * 0.05);
      larr[i * 3 + 1] += Math.sin(lph[i]) * dt * 0.08;
      larr[i * 3 + 2] += Math.cos(lph[i] * 0.4) * dt * 0.03;
      if (larr[i * 3 + 1] > 2.85) larr[i * 3 + 1] = 0.24;
      if (larr[i * 3 + 2] < -19.7) larr[i * 3 + 2] = -13.1;
      if (larr[i * 3 + 2] > -12.9) larr[i * 3 + 2] = -19.5;
    }
    lpos.needsUpdate = true;
  }
  if (MAP.lubeLamp) {
    MAP.lubeLamp.intensity = 0.9 + Math.sin(performance.now() * 0.003) * 0.18;
  }
  if (MAP.lubeRing) {
    MAP.lubeRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.lubeDrum) {
    MAP.lubeDrum.rotation.y += dt * 0.55;
  }
  if (MAP.lubeLed) {
    MAP.lubeLed.intensity = 0.14 + (Math.sin(performance.now() * 0.0095) > 0.12 ? 0.28 : 0.05);
  }
  if (MAP.washMotes && MAP.washMotePhase) {
    const wpos = MAP.washMotes.geometry.attributes.position;
    const warr = wpos.array;
    const wph = MAP.washMotePhase;
    for (let i = 0; i < wph.length; i++) {
      wph[i] += dt * (0.36 + (i % 3) * 0.05);
      warr[i * 3 + 1] += Math.sin(wph[i]) * dt * 0.09;
      warr[i * 3 + 2] += Math.cos(wph[i] * 0.4) * dt * 0.03;
      if (warr[i * 3 + 1] > 2.85) warr[i * 3 + 1] = 0.24;
      if (warr[i * 3 + 2] < -30.9) warr[i * 3 + 2] = -24.3;
      if (warr[i * 3 + 2] > -24.1) warr[i * 3 + 2] = -30.6;
    }
    wpos.needsUpdate = true;
  }
  if (MAP.washLamp) {
    MAP.washLamp.intensity = 0.92 + Math.sin(performance.now() * 0.0031) * 0.18;
  }
  if (MAP.washRing) {
    MAP.washRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.washWand) {
    MAP.washWand.rotation.y = Math.sin(performance.now() * 0.0016) * 0.55;
  }
  if (MAP.washNozzle && MAP.washWand) {
    MAP.washNozzle.rotation.y = MAP.washWand.rotation.y;
    MAP.washNozzle.position.x = 8.2 + Math.sin(MAP.washWand.rotation.y) * 1.1;
    MAP.washNozzle.position.z = -27.4 + Math.cos(MAP.washWand.rotation.y) * 1.15;
  }
  if (MAP.washLed) {
    MAP.washLed.intensity = 0.14 + (Math.sin(performance.now() * 0.01) > 0.12 ? 0.28 : 0.05);
  }
  if (MAP.tireMotes && MAP.tireMotePhase) {
    const tpos = MAP.tireMotes.geometry.attributes.position;
    const tarr = tpos.array;
    const tph = MAP.tireMotePhase;
    for (let i = 0; i < tph.length; i++) {
      tph[i] += dt * 1.15;
      tarr[i * 3 + 1] = 0.28 + ((Math.sin(tph[i]) + 1) * 0.5) * 2.3;
      if (tarr[i * 3] < 25.1) tarr[i * 3] = 31.7;
      if (tarr[i * 3] > 31.8) tarr[i * 3] = 25.2;
      if (tarr[i * 3 + 2] < -4.4) tarr[i * 3 + 2] = 2.0;
      if (tarr[i * 3 + 2] > 2.05) tarr[i * 3 + 2] = -4.3;
    }
    tpos.needsUpdate = true;
  }
  if (MAP.tireLamp) {
    MAP.tireLamp.intensity = 0.92 + Math.sin(performance.now() * 0.0029) * 0.18;
  }
  if (MAP.tireRing) {
    MAP.tireRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0033) * 0.2;
  }
  if (MAP.tireSpin) {
    MAP.tireSpin.rotation.y += dt * 1.6;
  }
  if (MAP.tireCap && MAP.tireSpin) {
    MAP.tireCap.rotation.y = MAP.tireSpin.rotation.y;
  }
  if (MAP.tireLed) {
    MAP.tireLed.intensity = 0.14 + (Math.sin(performance.now() * 0.011) > 0.12 ? 0.28 : 0.05);
  }
  if (MAP.paintMotes && MAP.paintMotePhase) {
    const ppos = MAP.paintMotes.geometry.attributes.position;
    const parr = ppos.array;
    const pph = MAP.paintMotePhase;
    for (let i = 0; i < pph.length; i++) {
      pph[i] += dt * 1.2;
      parr[i * 3 + 1] = 0.28 + ((Math.sin(pph[i]) + 1) * 0.5) * 2.3;
      if (parr[i * 3] < -20.3) parr[i * 3] = -13.4;
      if (parr[i * 3] > -13.3) parr[i * 3] = -20.1;
      if (parr[i * 3 + 2] < 12.3) parr[i * 3 + 2] = 18.6;
      if (parr[i * 3 + 2] > 18.7) parr[i * 3 + 2] = 12.4;
    }
    ppos.needsUpdate = true;
  }
  if (MAP.paintLamp) {
    MAP.paintLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0032) * 0.2;
  }
  if (MAP.paintRing) {
    MAP.paintRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.paintArm) {
    MAP.paintArm.rotation.y = Math.sin(performance.now() * 0.0014) * 0.7;
  }
  if (MAP.paintHead && MAP.paintArm) {
    const a = MAP.paintArm.rotation.y;
    MAP.paintHead.rotation.y = a;
    MAP.paintHead.position.x = -16.8 + Math.sin(a) * 0.7;
    MAP.paintHead.position.z = 15.5 + Math.cos(a) * 0.15;
  }
  if (MAP.paintLed) {
    MAP.paintLed.intensity = 0.14 + (Math.sin(performance.now() * 0.01) > 0.1 ? 0.3 : 0.05);
  }
  if (MAP.partsMotes && MAP.partsMotePhase) {
    const spos = MAP.partsMotes.geometry.attributes.position;
    const sarr = spos.array;
    const sph = MAP.partsMotePhase;
    for (let i = 0; i < sph.length; i++) {
      sph[i] += dt * 1.12;
      sarr[i * 3 + 1] = 0.28 + ((Math.sin(sph[i]) + 1) * 0.5) * 2.3;
      if (sarr[i * 3] < -9.0) sarr[i * 3] = -2.3;
      if (sarr[i * 3] > -2.2) sarr[i * 3] = -8.9;
      if (sarr[i * 3 + 2] < 4.6) sarr[i * 3 + 2] = 11.0;
      if (sarr[i * 3 + 2] > 11.05) sarr[i * 3 + 2] = 4.7;
    }
    spos.needsUpdate = true;
  }
  if (MAP.partsLamp) {
    MAP.partsLamp.intensity = 0.92 + Math.sin(performance.now() * 0.003) * 0.18;
  }
  if (MAP.partsRing) {
    MAP.partsRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.partsSpin) {
    MAP.partsSpin.rotation.y += dt * 1.35;
  }
  if (MAP.partsCap && MAP.partsSpin) {
    MAP.partsCap.rotation.y = MAP.partsSpin.rotation.y;
  }
  if (MAP.partsLed) {
    MAP.partsLed.intensity = 0.14 + (Math.sin(performance.now() * 0.011) > 0.12 ? 0.28 : 0.05);
  }
  if (MAP.weldMotes && MAP.weldMotePhase) {
    const wpos = MAP.weldMotes.geometry.attributes.position;
    const warr = wpos.array;
    const wph = MAP.weldMotePhase;
    for (let i = 0; i < wph.length; i++) {
      wph[i] += dt * 1.22;
      warr[i * 3 + 1] = 0.28 + ((Math.sin(wph[i]) + 1) * 0.5) * 2.3;
      if (warr[i * 3] < 1.8) warr[i * 3] = 8.5;
      if (warr[i * 3] > 8.6) warr[i * 3] = 1.9;
      if (warr[i * 3 + 2] < -20.8) warr[i * 3 + 2] = -14.5;
      if (warr[i * 3 + 2] > -14.4) warr[i * 3 + 2] = -20.7;
    }
    wpos.needsUpdate = true;
  }
  if (MAP.weldLamp) {
    MAP.weldLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0033) * 0.22;
  }
  if (MAP.weldRing) {
    MAP.weldRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0036) * 0.2;
  }
  if (MAP.weldArm) {
    MAP.weldArm.rotation.y = Math.sin(performance.now() * 0.0015) * 0.65;
  }
  if (MAP.weldHead && MAP.weldArm) {
    const a = MAP.weldArm.rotation.y;
    MAP.weldHead.rotation.y = a;
    MAP.weldHead.position.x = 5.2 + Math.sin(a) * 0.55;
    MAP.weldHead.position.z = -17.6 + Math.cos(a) * 0.12;
  }
  if (MAP.weldLed) {
    MAP.weldLed.intensity = 0.16 + (Math.sin(performance.now() * 0.014) > 0.08 ? 0.42 : 0.06);
  }
  if (MAP.battMotes && MAP.battMotePhase) {
    const bpos = MAP.battMotes.geometry.attributes.position;
    const barr = bpos.array;
    const bph = MAP.battMotePhase;
    for (let i = 0; i < bph.length; i++) {
      bph[i] += dt * 1.18;
      barr[i * 3 + 1] = 0.28 + ((Math.sin(bph[i]) + 1) * 0.5) * 2.3;
      if (barr[i * 3] < 13.3) barr[i * 3] = 19.5;
      if (barr[i * 3] > 19.6) barr[i * 3] = 13.4;
      if (barr[i * 3 + 2] < 25.1) barr[i * 3 + 2] = 31.2;
      if (barr[i * 3 + 2] > 31.3) barr[i * 3 + 2] = 25.2;
    }
    bpos.needsUpdate = true;
  }
  if (MAP.battLamp) {
    MAP.battLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0031) * 0.22;
  }
  if (MAP.battRing) {
    MAP.battRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.battBar) {
    MAP.battBar.rotation.y = Math.sin(performance.now() * 0.0022) * 0.08;
  }
  if (MAP.battSpark) {
    MAP.battSpark.position.y = 1.18 + Math.abs(Math.sin(performance.now() * 0.012)) * 0.06;
  }
  if (MAP.battLed) {
    MAP.battLed.intensity = 0.14 + (Math.sin(performance.now() * 0.016) > 0.1 ? 0.36 : 0.05);
  }
  if (MAP.hoistMotes && MAP.hoistMotePhase) {
    const hpos = MAP.hoistMotes.geometry.attributes.position;
    const harr = hpos.array;
    const hph = MAP.hoistMotePhase;
    for (let i = 0; i < hph.length; i++) {
      hph[i] += dt * 1.2;
      harr[i * 3 + 1] = 0.28 + ((Math.sin(hph[i]) + 1) * 0.5) * 2.3;
      if (harr[i * 3] < -34.0) harr[i * 3] = -27.6;
      if (harr[i * 3] > -27.5) harr[i * 3] = -33.9;
      if (harr[i * 3 + 2] < -31.5) harr[i * 3 + 2] = -25.0;
      if (harr[i * 3 + 2] > -24.9) harr[i * 3 + 2] = -31.4;
    }
    hpos.needsUpdate = true;
  }
  if (MAP.hoistLamp) {
    MAP.hoistLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0032) * 0.22;
  }
  if (MAP.hoistRing) {
    MAP.hoistRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0036) * 0.2;
  }
  if (MAP.hoistDrum) {
    MAP.hoistDrum.rotation.y += dt * 1.15;
  }
  if (MAP.hoistHook && MAP.hoistDrum) {
    MAP.hoistHook.position.y = 0.38 + Math.sin(performance.now() * 0.003) * 0.18;
  }
  if (MAP.hoistLed) {
    MAP.hoistLed.intensity = 0.14 + (Math.sin(performance.now() * 0.013) > 0.12 ? 0.3 : 0.05);
  }
  if (MAP.millMotes && MAP.millMotePhase) {
    const mpos = MAP.millMotes.geometry.attributes.position;
    const marr = mpos.array;
    const mph = MAP.millMotePhase;
    for (let i = 0; i < mph.length; i++) {
      mph[i] += dt * 1.2;
      marr[i * 3 + 1] = 0.28 + ((Math.sin(mph[i]) + 1) * 0.5) * 2.3;
      if (marr[i * 3] < 35.8) marr[i * 3] = 42.4;
      if (marr[i * 3] > 42.5) marr[i * 3] = 36.0;
      if (marr[i * 3 + 2] < 15.15) marr[i * 3 + 2] = 21.55;
      if (marr[i * 3 + 2] > 21.6) marr[i * 3 + 2] = 15.2;
    }
    mpos.needsUpdate = true;
  }
  if (MAP.millLamp) {
    MAP.millLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0031) * 0.22;
  }
  if (MAP.millRing) {
    MAP.millRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0035) * 0.2;
  }
  if (MAP.millWheel) {
    MAP.millWheel.rotation.x += dt * 1.35;
  }
  if (MAP.millLed) {
    MAP.millLed.intensity = 0.14 + (Math.sin(performance.now() * 0.014) > 0.12 ? 0.3 : 0.05);
  }
  if (MAP.kilnMotes && MAP.kilnMotePhase) {
    const kpos = MAP.kilnMotes.geometry.attributes.position;
    const karr = kpos.array;
    const kph = MAP.kilnMotePhase;
    for (let i = 0; i < kph.length; i++) {
      kph[i] += dt * 1.35;
      karr[i * 3 + 1] = 0.3 + ((Math.sin(kph[i]) + 1) * 0.5) * 2.4;
      if (karr[i * 3] < 37.8) karr[i * 3] = 44.3;
      if (karr[i * 3] > 44.4) karr[i * 3] = 37.9;
      if (karr[i * 3 + 2] < 31.05) karr[i * 3 + 2] = 37.45;
      if (karr[i * 3 + 2] > 37.5) karr[i * 3 + 2] = 31.1;
    }
    kpos.needsUpdate = true;
  }
  if (MAP.kilnLamp) {
    MAP.kilnLamp.intensity = 0.95 + Math.sin(performance.now() * 0.004) * 0.28;
  }
  if (MAP.kilnRing) {
    MAP.kilnRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0038) * 0.2;
  }
  if (MAP.kilnGlow) {
    MAP.kilnGlow.intensity = 0.4 + Math.abs(Math.sin(performance.now() * 0.006)) * 0.45;
  }
  if (MAP.sortMotes && MAP.sortMotePhase) {
    const spos = MAP.sortMotes.geometry.attributes.position;
    const sarr = spos.array;
    const sph = MAP.sortMotePhase;
    for (let i = 0; i < sph.length; i++) {
      sph[i] += dt * 1.4;
      sarr[i * 3 + 1] = 0.28 + ((Math.sin(sph[i]) + 1) * 0.5) * 2.35;
      if (sarr[i * 3] < 17.7) sarr[i * 3] = 24.4;
      if (sarr[i * 3] > 24.5) sarr[i * 3] = 17.8;
      if (sarr[i * 3 + 2] < -41.3) sarr[i * 3 + 2] = -34.7;
      if (sarr[i * 3 + 2] > -34.65) sarr[i * 3 + 2] = -41.2;
    }
    spos.needsUpdate = true;
  }
  if (MAP.sortLamp) {
    MAP.sortLamp.intensity = 0.88 + Math.sin(performance.now() * 0.0034) * 0.22;
  }
  if (MAP.sortRing) {
    MAP.sortRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0036) * 0.2;
  }
  if (MAP.sortDeck) {
    MAP.sortDeck.position.y = 0.95 + Math.sin(performance.now() * 0.018) * 0.04;
  }
  if (MAP.sortArm) {
    MAP.sortArm.rotation.z = Math.sin(performance.now() * 0.01) * 0.18;
  }
  if (MAP.labMotes && MAP.labMotePhase) {
    const lpos = MAP.labMotes.geometry.attributes.position;
    const larr = lpos.array;
    const lph = MAP.labMotePhase;
    for (let i = 0; i < lph.length; i++) {
      lph[i] += dt * 1.25;
      larr[i * 3 + 1] = 0.28 + ((Math.sin(lph[i]) + 1) * 0.5) * 2.3;
      if (larr[i * 3] < -43.1) larr[i * 3] = -36.3;
      if (larr[i * 3] > -36.25) larr[i * 3] = -43.0;
      if (larr[i * 3 + 2] < 14.45) larr[i * 3 + 2] = 21.05;
      if (larr[i * 3 + 2] > 21.1) larr[i * 3 + 2] = 14.5;
    }
    lpos.needsUpdate = true;
  }
  if (MAP.labLamp) {
    MAP.labLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0032) * 0.2;
  }
  if (MAP.labRing) {
    MAP.labRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0037) * 0.2;
  }
  if (MAP.labScope) {
    MAP.labScope.rotation.y += dt * 0.8;
  }
  if (MAP.powMotes && MAP.powMotePhase) {
    const ppos = MAP.powMotes.geometry.attributes.position;
    const parr = ppos.array;
    const pph = MAP.powMotePhase;
    for (let i = 0; i < pph.length; i++) {
      pph[i] += dt * 1.2;
      parr[i * 3 + 1] = 0.28 + ((Math.sin(pph[i]) + 1) * 0.5) * 2.3;
      if (parr[i * 3] < 38.1) parr[i * 3] = 44.7;
      if (parr[i * 3] > 44.75) parr[i * 3] = 38.15;
      if (parr[i * 3 + 2] < -22.45) parr[i * 3 + 2] = -16.0;
      if (parr[i * 3 + 2] > -15.95) parr[i * 3 + 2] = -22.4;
    }
    ppos.needsUpdate = true;
  }
  if (MAP.powLamp) {
    MAP.powLamp.intensity = 0.92 + Math.sin(performance.now() * 0.0034) * 0.22;
  }
  if (MAP.powRing) {
    MAP.powRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0036) * 0.2;
  }
  if (MAP.powArm) {
    MAP.powArm.rotation.y += dt * 1.4;
  }
  if (MAP.fuseMotes && MAP.fuseMotePhase) {
    const fpos = MAP.fuseMotes.geometry.attributes.position;
    const farr = fpos.array;
    const fph = MAP.fuseMotePhase;
    for (let i = 0; i < fph.length; i++) {
      fph[i] += dt * 1.15;
      farr[i * 3 + 1] = 0.28 + ((Math.sin(fph[i]) + 1) * 0.5) * 2.3;
      if (farr[i * 3] < -45.0) farr[i * 3] = -38.2;
      if (farr[i * 3] > -38.15) farr[i * 3] = -44.9;
      if (farr[i * 3 + 2] < -5.2) farr[i * 3 + 2] = 1.45;
      if (farr[i * 3 + 2] > 1.5) farr[i * 3 + 2] = -5.1;
    }
    fpos.needsUpdate = true;
  }
  if (MAP.fuseLamp) {
    MAP.fuseLamp.intensity = 0.88 + Math.sin(performance.now() * 0.003) * 0.2;
  }
  if (MAP.fuseRing) {
    MAP.fuseRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0038) * 0.2;
  }
  if (MAP.fuseReel) {
    MAP.fuseReel.rotation.y += dt * 1.1;
  }
  if (MAP.skipMotes && MAP.skipMotePhase) {
    const spos = MAP.skipMotes.geometry.attributes.position;
    const sarr = spos.array;
    const sph = MAP.skipMotePhase;
    for (let i = 0; i < sph.length; i++) {
      sph[i] += dt * 1.05;
      sarr[i * 3 + 1] = 0.28 + ((Math.sin(sph[i]) + 1) * 0.5) * 2.3;
      if (sarr[i * 3] < -25.6) sarr[i * 3] = -18.8;
      if (sarr[i * 3] > -18.8) sarr[i * 3] = -25.5;
      if (sarr[i * 3 + 2] < 36.6) sarr[i * 3 + 2] = 42.3;
      if (sarr[i * 3 + 2] > 42.4) sarr[i * 3 + 2] = 36.7;
    }
    spos.needsUpdate = true;
  }
  if (MAP.skipLamp) {
    MAP.skipLamp.intensity = 0.9 + Math.sin(performance.now() * 0.0026) * 0.22;
  }
  if (MAP.skipRing) {
    MAP.skipRing.material.opacity = 0.44 + Math.sin(performance.now() * 0.0034) * 0.2;
  }
  if (MAP.skipBucket) {
    MAP.skipBucket.rotation.x = Math.sin(performance.now() * 0.0011) * 0.18;
    MAP.skipBucket.position.y = 1.35 + Math.sin(performance.now() * 0.0011) * 0.12;
  }

  if (MAP.tipWheel) MAP.tipWheel.rotation.x += dt * 1.4;
  if (MAP.tipLamp) MAP.tipLamp.intensity = 0.85 + Math.sin(performance.now() * 0.003) * 0.2;
  if (MAP.tipRing) MAP.tipRing.material.opacity = 0.4 + Math.sin(performance.now() * 0.004) * 0.18;
  if (MAP.tipMotes) {
    const arr = MAP.tipMotes.geometry.attributes.position.array;
    const ph = MAP.tipMotePhase;
    for (let i = 0; i < ph.length; i++) {
      arr[i * 3 + 1] += Math.sin(performance.now() * 0.001 + ph[i]) * 0.004;
      if (arr[i * 3 + 1] > 2.6) arr[i * 3 + 1] = 0.35;
    }
    MAP.tipMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.tramMesh && MAP.tramPath && MAP.tramCrate) {
    const path = MAP.tramPath;
    let seg = 0;
    let acc = 0;
    const lens = [];
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const L = path[i].distanceTo(path[i + 1]);
      lens.push(L);
      total += L;
    }
    MAP.tramT += dt * 3.1 * MAP.tramDir;
    if (MAP.tramT >= total) {
      MAP.tramT = total;
      MAP.tramDir = -1;
      MAP.tramBell = true;
    } else if (MAP.tramT <= 0) {
      MAP.tramT = 0;
      MAP.tramDir = 1;
      MAP.tramBell = true;
    }
    let remain = MAP.tramT;
    for (let i = 0; i < lens.length; i++) {
      if (remain <= lens[i] || i === lens.length - 1) {
        const t = lens[i] > 0 ? Math.min(1, remain / lens[i]) : 0;
        const nx = path[i].x + (path[i + 1].x - path[i].x) * t;
        const nz = path[i].z + (path[i + 1].z - path[i].z) * t;
        MAP.tramDx = nx - MAP.tramCrate.pos.x;
        MAP.tramDz = nz - MAP.tramCrate.pos.z;
        MAP.tramCrate.pos.x = nx;
        MAP.tramCrate.pos.z = nz;
        MAP.tramMesh.position.set(nx, 0, nz);
        const dx = path[i + 1].x - path[i].x;
        const dz = path[i + 1].z - path[i].z;
        MAP.tramMesh.rotation.y = Math.atan2(dx, dz);
        break;
      }
      remain -= lens[i];
    }
    MAP.tramClack = (MAP.tramClack || 0) - dt;
  }
  if (MAP.aditLamp) MAP.aditLamp.intensity = 0.7 + Math.sin(performance.now() * 0.004) * 0.18;
  if (MAP.aditRing) MAP.aditRing.material.opacity = 0.38 + Math.sin(performance.now() * 0.0035) * 0.16;
  if (MAP.aditMotes) {
    const arr = MAP.aditMotes.geometry.attributes.position.array;
    const ph = MAP.aditMotePhase;
    for (let i = 0; i < ph.length; i++) {
      arr[i * 3 + 1] += Math.sin(performance.now() * 0.0012 + ph[i]) * 0.0035;
      if (arr[i * 3 + 1] > 2.4) arr[i * 3 + 1] = 0.28;
    }
    MAP.aditMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.cage && MAP.cageMesh) {
    const prev = MAP.cage.y;
    MAP.cage.y += dt * 0.85 * MAP.cageDir;
    if (MAP.cage.y >= 4.35) {
      MAP.cage.y = 4.35;
      MAP.cageDir = -1;
      MAP.cageBell = true;
      MAP.dust = { x: -14, z: -29.2, r: 2.4, life: 3.6 };
    } else if (MAP.cage.y <= 0.15) {
      MAP.cage.y = 0.15;
      MAP.cageDir = 1;
      MAP.cageBell = true;
    }
    MAP.cageDy = MAP.cage.y - prev;
    MAP.cage.top = MAP.cage.y + 0.2;
    MAP.cageMesh.position.y = MAP.cage.y;
    if (MAP.cageSheave) MAP.cageSheave.rotation.x += dt * 1.6 * MAP.cageDir;
  }
  if (MAP.sluiceWash) {
    MAP.sluiceWash.position.z = MAP.sluice.z + Math.sin(performance.now() * 0.0018) * 0.15;
  }
  if (MAP.dust) {
    MAP.dust.life -= dt;
    if (MAP.dust.life <= 0) MAP.dust = null;
  }
  if (MAP.conveyorRolls) {
    for (const r of MAP.conveyorRolls) r.rotation.x += dt * 1.8;
  }
  if (MAP.drillBoom) {
    MAP.drillBoom.rotation.z = -0.35 + Math.sin(performance.now() * 0.0004) * 0.04;
  }
  if (MAP.radioLed) {
    MAP.radioLed.intensity = 0.18 + (Math.sin(performance.now() * 0.008) > 0.2 ? 0.28 : 0.05);
  }
  if (MAP.fan) MAP.fan.rotation.z += dt * 2.4;
  if (MAP.chains) {
    const t = performance.now() * 0.001;
    for (const ch of MAP.chains) {
      ch.mesh.rotation.z = Math.sin(t * 1.3 + ch.phase) * 0.12;
      ch.mesh.rotation.x = Math.cos(t * 0.9 + ch.phase) * 0.05;
    }
  }
  if (MAP.skyFlares) {
    for (const f of MAP.skyFlares) {
      f.t -= dt;
      if (f.t <= 0) {
        f.t = 14 + Math.random() * 18;
        f.lit = 1;
        f.mesh.position.set(-36 + Math.random() * 70, 24 + Math.random() * 10, -38 - Math.random() * 16);
      }
      f.lit = Math.max(0, f.lit - dt * 0.35);
      f.mesh.material.opacity = f.lit * 0.85;
      f.mesh.position.y += dt * 0.35;
    }
  }
  if (!MAP.drips) {
    MAP.drips = [];
  }
  if (Math.random() < dt * 1.6) {
    const drip = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.08, 0.03),
      new THREE.MeshBasicMaterial({ color: 0x6a7a68, transparent: true, opacity: 0.45 })
    );
    drip.position.set(22 + Math.random() * 8, 6.2, -26 - Math.random() * 5);
    MAP.fan.parent.add(drip);
    MAP.drips.push({ mesh: drip, vy: 0 });
  }
  for (const d of MAP.drips) {
    d.vy += dt * 9;
    d.mesh.position.y -= d.vy * dt;
    if (d.mesh.position.y < 0.05) {
      d.mesh.parent && d.mesh.parent.remove(d.mesh);
      d.dead = true;
    }
  }
  MAP.drips = MAP.drips.filter((d) => !d.dead);
  if (MAP.hangarLamp) {
    const flicker = Math.random() < 0.012 ? 0.35 + Math.random() * 0.4 : 1;
    MAP.hangarLamp.intensity = (1.15 + Math.sin(performance.now() * 0.002) * 0.12) * flicker;
  }
  if (MAP.genLamp) {
    MAP.genLamp.intensity = 0.35 + Math.sin(performance.now() * 0.008) * 0.22 + (Math.random() < 0.04 ? 0.4 : 0);
  }
  if (MAP.rimLights) {
    const t = performance.now() * 0.001;
    MAP.rimLights.forEach((l, i) => {
      l.intensity = 0.22 + Math.sin(t * 1.4 + i) * 0.12;
    });
  }
  if (MAP.mirage) {
    const t = performance.now() * 0.001;
    MAP.mirage.forEach((s, i) => {
      s.material.opacity = 0.05 + Math.sin(t * 1.6 + i) * 0.035;
      s.position.y = 0.28 + Math.sin(t * 2 + i * 0.8) * 0.08;
    });
  }
  if (MAP.rimFlashes) {
    for (const f of MAP.rimFlashes) {
      f.t -= dt;
      if (f.t <= 0) {
        f.t = 2.4 + Math.random() * 6;
        f.burst = 0.12 + Math.random() * 0.08;
      }
      if (f.burst > 0) {
        f.burst -= dt;
        f.light.intensity = f.burst > 0 ? 2.2 + Math.random() * 1.4 : 0;
      } else f.light.intensity = 0;
    }
  }
  if (MAP.tufts) {
    const t = performance.now() * 0.0018;
    MAP.tufts.forEach((g, i) => {
      g.rotation.z = Math.sin(t * 1.4 + i) * 0.12;
      g.rotation.x = Math.sin(t * 1.1 + i * 0.5) * 0.05;
    });
  }
  if (MAP.tarps) {
    const t = performance.now() * 0.002;
    MAP.tarps.forEach((p, i) => {
      p.rotation.x = -Math.PI / 2 + 0.08 + Math.sin(t * 1.6 + i) * 0.08;
      p.rotation.z = Math.sin(t * 1.1 + i * 0.7) * 0.06;
    });
  }
  if (MAP.mastBlink) {
    MAP.mastT = (MAP.mastT || 0) + dt;
    const on = (MAP.mastT % 1.6) < 0.18;
    MAP.mastBlink.intensity = on ? 2.4 : 0.12;
    if (MAP.mastCap) MAP.mastCap.material.color.setHex(on ? 0xffe0c0 : 0x801818);
  }
  if (MAP.hazeBands) {
    const t = performance.now() * 0.001;
    MAP.hazeBands.forEach((b, i) => {
      const pulse = 0.1 + (i % 4) * 0.04 + Math.sin(t * 0.35 + i) * 0.04;
      b.material.opacity = pulse;
      b.position.y += Math.sin(t * 0.4 + i * 0.7) * 0.002;
    });
  }
  if (MAP.ammoLid) {
    const target = MAP.ammoLidOpen > 0 ? MAP.ammoLidOpenY : MAP.ammoLidClosedY;
    MAP.ammoLid.position.y += (target - MAP.ammoLid.position.y) * Math.min(1, dt * 6);
    MAP.ammoLid.rotation.x = MAP.ammoLidOpen > 0 ? -0.55 : 0;
    if (MAP.ammoLidOpen > 0) MAP.ammoLidOpen = Math.max(0, MAP.ammoLidOpen - dt);
  }
  if (MAP.shimmer && MAP.shimmerDiscs) {
    const t = performance.now() * 0.001;
    MAP.shimmer.rotation.y = t * 0.15;
    MAP.shimmerDiscs.forEach((d, i) => {
      const pulse = 0.045 + Math.sin(t * 2.2 + i * 0.7) * 0.035;
      d.material.opacity = pulse;
      const s = 1 + Math.sin(t * 1.6 + i) * 0.08;
      d.scale.set(s, s, 1);
      d.position.y = 0.05 + i * 0.12 + Math.sin(t * 3 + i) * 0.04;
    });
    if (MAP.extractRing) {
      MAP.extractRing.material.opacity = 0.7 + Math.sin(t * 3.1) * 0.2;
      MAP.extractRing.scale.setScalar(1 + Math.sin(t * 1.8) * 0.04);
    }
    if (MAP.extractStrobes) {
      MAP.extractStrobes.forEach((sl, i) => {
        const pulse = Math.max(0, Math.sin(t * 8 + i * 1.57));
        sl.intensity = pulse * 1.6;
      });
    }
    if (MAP.extractChevs) {
      MAP.extractChevs.forEach((c, i) => {
        c.material.opacity = 0.28 + Math.sin(t * 3 + i) * 0.18;
        const pulse = 3.4 + Math.sin(t * 2 + i) * 0.2;
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        c.position.set(MAP.extract.x + Math.cos(a) * pulse, 0.04, MAP.extract.z + Math.sin(a) * pulse);
      });
    }
    if (MAP.windsock) {
      const wind = t * 0.7;
      MAP.windsock.rotation.y = Math.sin(wind) * 0.55 + 0.4;
      MAP.windsock.rotation.x = Math.sin(wind * 1.7) * 0.18;
      MAP.windsock.rotation.z = Math.PI / 2 + Math.sin(wind * 2.1) * 0.12;
    }
    if (MAP.search) {
      const a = t * 0.22;
      MAP.search.target.position.set(Math.cos(a) * 22, 0.4, Math.sin(a * 0.7) * 18 - 6);
      MAP.search.intensity = 0.55 + Math.sin(t * 0.9) * 0.35;
    }
  }
}

export function collideXZ(pos, radius = 0.45) {
  const h = MAP.half;
  pos.x = THREE.MathUtils.clamp(pos.x, -h + 1, h - 1);
  pos.z = THREE.MathUtils.clamp(pos.z, -h + 1, h - 1);
  for (const c of MAP.crates) {
    if (c.walkOn) continue;
    if (c.dead) continue;
    const dx = pos.x - c.pos.x;
    const dz = pos.z - c.pos.z;
    const hx = c.sx * 0.5 + radius;
    const hz = c.sz * 0.5 + radius;
    if (Math.abs(dx) < hx && Math.abs(dz) < hz) {
      if (hx - Math.abs(dx) < hz - Math.abs(dz)) pos.x = c.pos.x + Math.sign(dx || 1) * hx;
      else pos.z = c.pos.z + Math.sign(dz || 1) * hz;
    }
  }
}
