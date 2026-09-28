import * as THREE from "three";

export const MAP = {
  half: 48,
  crates: [],
  walls: [],
  extract: new THREE.Vector3(18, 0, -16),
};

function box(scene, mats, x, y, z, sx, sy, sz, mat) {
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

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), sand);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  scene.add(new THREE.HemisphereLight(0xffc080, 0x203010, 0.55));
  const sun = new THREE.DirectionalLight(0xffd0a0, 0.9);
  sun.position.set(-20, 28, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = sun.shadow.camera.bottom = -50;
  sun.shadow.camera.right = sun.shadow.camera.top = 50;
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0x304050, 0.25));

  const wallH = 4.2;
  const placements = [
    [-40, 0, 0, 2, wallH, 80],
    [40, 0, 0, 2, wallH, 80],
    [0, 0, -40, 80, wallH, 2],
    [0, 0, 40, 80, wallH, 2],
  ];
  for (const p of placements) {
    const m = box(scene, null, p[0], p[1] + p[4] / 2, p[2], p[3], p[4], p[5], rock);
    MAP.walls.push({ mesh: m, sx: p[3], sy: p[4], sz: p[5] });
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
  for (const c of crateSpecs) {
    const m = box(scene, null, c[0], c[1], c[2], c[3], c[4], c[5], rust);
    MAP.crates.push({ pos: new THREE.Vector3(c[0], 0, c[2]), mesh: m, sx: c[3], sy: c[4], sz: c[5] });
  }

  box(scene, null, -22, 3.5, 22, 16, 7, 1.2, steel);
  box(scene, null, -22, 3.5, 30, 16, 7, 1.2, steel);
  box(scene, null, -30, 3.5, 26, 1.2, 7, 9, steel);
  box(scene, null, -14, 3.5, 26, 1.2, 7, 9, steel);
  box(scene, null, -22, 7.2, 26, 16, 0.5, 9, steel);

  box(scene, null, 26, 3.2, -24, 14, 6.4, 1, night);
  box(scene, null, 26, 3.2, -32, 14, 6.4, 1, night);
  box(scene, null, 19, 3.2, -28, 1, 6.4, 9, night);
  box(scene, null, 33, 3.2, -28, 1, 6.4, 9, night);
  box(scene, null, 26, 6.5, -28, 14, 0.4, 9, night);
  const lamp = new THREE.PointLight(0x6688ff, 1.4, 18);
  lamp.position.set(26, 5.4, -28);
  scene.add(lamp);
  box(scene, null, 26, 0.15, -28, 3, 0.3, 3, steel);

  const ex = box(scene, null, MAP.extract.x, 0.7, MAP.extract.z, 2.4, 1.4, 2.4, amber);
  ex.userData.extract = true;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(2.6, 3.1, 24),
    new THREE.MeshBasicMaterial({ color: 0xe8d050, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.copy(MAP.extract).setY(0.05);
  scene.add(ring);

  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const r = 34 + (i % 3) * 2;
    box(scene, null, Math.cos(a) * r, 1.4, Math.sin(a) * r, 3 + (i % 3), 2.8, 3, rock);
  }

  scene.fog = new THREE.FogExp2(0x2a2014, 0.018);
  scene.background = new THREE.Color(0x24180e);
  return MAP;
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

export function collideXZ(pos, radius = 0.45) {
  const h = MAP.half;
  pos.x = THREE.MathUtils.clamp(pos.x, -h + 1, h - 1);
  pos.z = THREE.MathUtils.clamp(pos.z, -h + 1, h - 1);
  for (const c of MAP.crates) {
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
