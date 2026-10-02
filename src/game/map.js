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

export function inWinze(pos) {
  return pos.x > -38.0 && pos.x < -31.2 && pos.z > -39.6 && pos.z < -32.8;
}

export function inCross(pos) {
  return pos.x > -31.2 && pos.x < -17.7 && pos.z > -37.35 && pos.z < -35.05;
}

export function inRaise(pos) {
  return pos.x > 28.7 && pos.x < 35.7 && pos.z > -36.0 && pos.z < -29.1;
}

export function inVent(pos) {
  return pos.x > 31.05 && pos.x < 33.35 && pos.z > -29.2 && pos.z < -16.4;
}

export function inBin(pos) {
  return pos.x > -2.9 && pos.x < 4.1 && pos.z > -46.6 && pos.z < -40.05;
}

export function inTail(pos) {
  return pos.x > 9.4 && pos.x < 19.2 && pos.z > -46.4 && pos.z < -38.6;
}

export function inThick(pos) {
  return pos.x > 24.15 && pos.x < 30.25 && pos.z > -46.55 && pos.z < -41.85;
}

export function inLaunder(pos) {
  const s = MAP.launder;
  if (!s) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inBall(pos) {
  return pos.x > -9.7 && pos.x < -3.3 && pos.z > 41.75 && pos.z < 46.7;
}

export function inCyc(pos) {
  return pos.x > -47.45 && pos.x < -41.35 && pos.z > -26.65 && pos.z < -21.75;
}

export function inSpiral(pos) {
  return pos.x > -42.85 && pos.x < -40.35 && pos.z > -36.4 && pos.z < -21.7;
}

export function inOverflow(pos) {
  const s = MAP.overflow;
  if (!s) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inReturn(pos) {
  const s = MAP.cycReturn;
  if (!s) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inPress(pos) {
  return pos.x > 41.55 && pos.x < 47.45 && pos.z > 3.35 && pos.z < 9.05;
}

export function inFloat(pos) {
  return pos.x > -14.55 && pos.x < -7.85 && pos.z > 15.85 && pos.z < 21.35;
}

export function inFroth(pos) {
  const s = MAP.froth;
  if (!s || !MAP.float || !MAP.float.on) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inFloatLaunder(pos) {
  const s = MAP.floatLaunder;
  if (!s || !MAP.float || !MAP.float.on) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inStack(pos) {
  return pos.x > 20.55 && pos.x < 26.65 && pos.z > -28.85 && pos.z < -23.55;
}

export function onStackBoom(pos) {
  const b = MAP.stackBoom;
  if (!b) return false;
  return Math.hypot(pos.x - b.x, pos.z - b.z) < 1.35 && pos.y < 1.6;
}

export function onHaul(pos) {
  const h = MAP.haulCrate;
  if (!h) return false;
  return Math.abs(pos.x - h.pos.x) < 1.15 && Math.abs(pos.z - h.pos.z) < 1.55 && pos.y < 1.7;
}


export function inSlake(pos) {
  return pos.x > -0.95 && pos.x < 5.75 && pos.z > 27.15 && pos.z < 33.05;
}

export function inMilk(pos) {
  const s = MAP.milk;
  if (!s || !MAP.slake || !MAP.slake.on) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inRope(pos) {
  return pos.x > -36.35 && pos.x < -30.45 && pos.z > 1.45 && pos.z < 6.95;
}

export function onBucket(pos) {
  const bs = MAP.buckets;
  if (!bs) return false;
  for (const b of bs) {
    if (Math.abs(pos.x - b.x) < 0.85 && Math.abs(pos.z - b.z) < 0.85 && pos.y < 2.4) return true;
  }
  return false;
}

export function inSinter(pos) {
  return pos.x > 42.15 && pos.x < 47.55 && pos.z > -14.55 && pos.z < -9.75;
}

export function onStrand(pos) {
  const c = MAP.strandCrate;
  if (!c) return false;
  return Math.abs(pos.x - c.pos.x) < 1.2 && Math.abs(pos.z - c.pos.z) < 0.85 && pos.y < 2.3;
}

export function inSample(pos) {
  return pos.x > -47.7 && pos.x < -42.15 && pos.z > 13.55 && pos.z < 18.15;
}

export function onSampleBoom(pos) {
  const b = MAP.sampleBoom;
  if (!b) return false;
  return Math.abs(pos.x - b.x) < 0.75 && Math.abs(pos.z - b.z) < 1.15 && pos.y < 2.5;
}

export function inReject(pos) {
  const r = MAP.reject;
  if (!r || !MAP.sample || !MAP.sample.on) return false;
  return Math.abs(pos.x - r.x) < r.hx && Math.abs(pos.z - r.z) < r.hz;
}

export function inPellet(pos) {
  return pos.x > 29.55 && pos.x < 34.85 && pos.z > 38.35 && pos.z < 42.55;
}

export function onDisc(pos) {
  const d = MAP.disc;
  if (!d || !MAP.pellet || !MAP.pellet.on) return false;
  const dx = pos.x - d.x;
  const dz = pos.z - d.z;
  return dx * dx + dz * dz < 2.15 * 2.15 && pos.y < 2.3;
}

export function inChute(pos) {
  const c = MAP.chute;
  if (!c || !MAP.pellet || !MAP.pellet.on) return false;
  return Math.abs(pos.x - c.x) < c.hx && Math.abs(pos.z - c.z) < c.hz;
}

export function inClar(pos) {
  return pos.x > -39.15 && pos.x < -33.85 && pos.z > -42.35 && pos.z < -38.05;
}

export function onBridge(pos) {
  const b = MAP.clarBridge;
  if (!b || !MAP.clar || !MAP.clar.on) return false;
  return Math.abs(pos.x - b.x) < 0.7 && Math.abs(pos.z - b.z) < 1.35 && pos.y < 2.5;
}

export function inUnder(pos) {
  const u = MAP.under;
  if (!u || !MAP.clar || !MAP.clar.on) return false;
  return Math.abs(pos.x - u.x) < u.hx && Math.abs(pos.z - u.z) < u.hz;
}

export function inSilo(pos) {
  return pos.x > 2.55 && pos.x < 7.85 && pos.z > 38.55 && pos.z < 42.65;
}

export function onScrew(pos) {
  const sc = MAP.screw;
  if (!sc || !MAP.silo || !MAP.silo.on) return false;
  return Math.abs(pos.x - sc.x) < sc.hx && Math.abs(pos.z - sc.z) < sc.hz && pos.y < 1.8;
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


export function inJig(pos) {
  return pos.x > -20.55 && pos.x < -15.15 && pos.z > -45.35 && pos.z < -40.55;
}

export function onJigDeck(pos) {
  const d = MAP.jigDeck;
  if (!d || !MAP.jig || !MAP.jig.on) return false;
  return Math.abs(pos.x - d.x) < 1.15 && Math.abs(pos.z - d.z) < 0.85 && pos.y < 1.7;
}

export function inHutch(pos) {
  const h = MAP.hutch;
  if (!h || !MAP.jig || !MAP.jig.on) return false;
  return Math.abs(pos.x - h.x) < h.hx && Math.abs(pos.z - h.z) < h.hz;
}

export function inCool(pos) {
  return pos.x > 16.15 && pos.x < 21.55 && pos.z > 40.35 && pos.z < 44.85;
}

export function onCoolCar(pos) {
  const c = MAP.coolCar;
  if (!c || !MAP.cool || !MAP.cool.on) return false;
  return Math.abs(pos.x - c.x) < 0.9 && Math.abs(pos.z - c.z) < 0.7 && pos.y < 1.8;
}

export function inQuench(pos) {
  const q = MAP.quench;
  if (!q || !MAP.cool || !MAP.cool.on) return false;
  return Math.abs(pos.x - q.x) < q.hx && Math.abs(pos.z - q.z) < q.hz;
}

export function inFall(pos) {
  const f = MAP.fall;
  if (!f || !f.live) return false;
  return Math.abs(pos.x - f.x) < f.hx && Math.abs(pos.z - f.z) < f.hz;
}

export function inBag(pos) {
  return pos.x > -10.7 && pos.x < -6.5 && pos.z > -47.95 && pos.z < -44.45;
}

export function onBagRack(pos) {
  const r = MAP.bagRack;
  if (!r || !MAP.bag || !MAP.bag.on) return false;
  return Math.abs(pos.x - r.x) < 0.95 && Math.abs(pos.z - r.z) < 0.75 && pos.y < 1.8;
}

export function inFines(pos) {
  const f = MAP.fines;
  if (!f || !MAP.bag || !MAP.bag.on) return false;
  return Math.abs(pos.x - f.x) < f.hx && Math.abs(pos.z - f.z) < f.hz;
}

export function inDry(pos) {
  return pos.x > -26.35 && pos.x < -22.05 && pos.z > 26.5 && pos.z < 30.3;
}

export function onDryShell(pos) {
  const s = MAP.dryShell;
  if (!s || !MAP.dry || !MAP.dry.on) return false;
  return Math.abs(pos.x - s.x) < 1.05 && Math.abs(pos.z - s.z) < 0.7 && pos.y < 1.8;
}

export function inExhaust(pos) {
  const e = MAP.exhaust;
  if (!e || !MAP.dry || !MAP.dry.on) return false;
  return Math.abs(pos.x - e.x) < e.hx && Math.abs(pos.z - e.z) < e.hz;
}

export function inLoco(pos) {
  return pos.x > 42.55 && pos.x < 46.85 && pos.z > -34.35 && pos.z < -30.05;
}

export function onLoco(pos) {
  const e = MAP.locoEngine;
  if (!e || !MAP.loco || !MAP.loco.on) return false;
  return Math.abs(pos.x - e.x) < 1.15 && Math.abs(pos.z - e.z) < 1.35 && pos.y < 2.0;
}

export function inSteam(pos) {
  const st = MAP.steam;
  if (!st || !MAP.loco || !MAP.loco.on) return false;
  return Math.abs(pos.x - st.x) < st.hx && Math.abs(pos.z - st.z) < st.hz;
}

export function inAgit(pos) {
  return pos.x > -24.55 && pos.x < -20.15 && pos.z > -47.35 && pos.z < -43.05;
}

export function onRake(pos) {
  const r = MAP.agitRake;
  if (!r || !MAP.agit || !MAP.agit.on) return false;
  return Math.hypot(pos.x - r.x, pos.z - r.z) < 1.35 && pos.y < 1.9;
}

export function inSlurry(pos) {
  const sl = MAP.slurry;
  if (!sl || !MAP.agit || !MAP.agit.on) return false;
  return Math.abs(pos.x - sl.x) < sl.hx && Math.abs(pos.z - sl.z) < sl.hz;
}


export function inScrub(pos) {
  return pos.x > 34.25 && pos.x < 38.55 && pos.z > -19.75 && pos.z < -15.85;
}

export function onScrubTray(pos) {
  const t = MAP.scrubTray;
  if (!t || !MAP.scrub || !MAP.scrub.on) return false;
  return Math.abs(pos.x - t.x) < 1.15 && Math.abs(pos.z - t.z) < 0.7 && pos.y < 1.8;
}

export function inLiquor(pos) {
  const l = MAP.liquor;
  if (!l || !MAP.scrub || !MAP.scrub.on) return false;
  return Math.abs(pos.x - l.x) < l.hx && Math.abs(pos.z - l.z) < l.hz;
}


export function inEw(pos) {
  return pos.x > -42.75 && pos.x < -38.45 && pos.z > 34.45 && pos.z < 38.35;
}

export function onCathode(pos) {
  const c = MAP.cathode;
  if (!c || !MAP.ew || !MAP.ew.on) return false;
  return Math.abs(pos.x - c.x) < 1.2 && Math.abs(pos.z - c.z) < 0.62 && pos.y < 1.8;
}

export function inAcid(pos) {
  const a = MAP.acid;
  if (!a || !MAP.ew || !MAP.ew.on) return false;
  return Math.abs(pos.x - a.x) < a.hx && Math.abs(pos.z - a.z) < a.hz;
}

export function inCone(pos) {
  return pos.x > 25.05 && pos.x < 29.35 && pos.z > -40.75 && pos.z < -36.85;
}

export function onMantle(pos) {
  const m = MAP.mantle;
  if (!m || !MAP.cone || !MAP.cone.on) return false;
  return Math.hypot(pos.x - m.x, pos.z - m.z) < 1.25 && pos.y < 1.9;
}

export function inDischarge(pos) {
  const d = MAP.discharge;
  if (!d || !MAP.cone || !MAP.cone.on) return false;
  return Math.abs(pos.x - d.x) < d.hx && Math.abs(pos.z - d.z) < d.hz;
}

export function inClas(pos) {
  return pos.x > 39.45 && pos.x < 43.75 && pos.z > 24.45 && pos.z < 28.35;
}

export function onClasRake(pos) {
  const r = MAP.clasRake;
  if (!r || !MAP.clas || !MAP.clas.on) return false;
  return Math.abs(pos.x - r.x) < 0.75 && Math.abs(pos.z - r.z) < 1.2 && pos.y < 1.8;
}

export function inSands(pos) {
  const s = MAP.sands;
  if (!s || !MAP.clas || !MAP.clas.on) return false;
  return Math.abs(pos.x - s.x) < s.hx && Math.abs(pos.z - s.z) < s.hz;
}

export function inMags(pos) {
  return pos.x > -44.75 && pos.x < -40.45 && pos.z > 6.45 && pos.z < 10.35;
}

export function onMagDrum(pos) {
  const d = MAP.magDrum;
  if (!d || !MAP.mags || !MAP.mags.on) return false;
  return Math.hypot(pos.x - d.x, pos.z - d.z) < 1.2 && pos.y < 1.9;
}

export function inConc(pos) {
  const c = MAP.conc;
  if (!c || !MAP.mags || !MAP.mags.on) return false;
  return Math.abs(pos.x - c.x) < c.hx && Math.abs(pos.z - c.z) < c.hz;
}

export function inInterior(pos) {
  return inHangar(pos) || inWarehouse(pos) || inShed(pos) || inRadio(pos) || inShop(pos) || inHut(pos) || inMag(pos) || inCrush(pos) || inDock(pos) || inAssay(pos) || inWeigh(pos) || inGen(pos) || inComp(pos) || inLube(pos) || inWash(pos) || inTire(pos) || inPaint(pos) || inParts(pos) || inWeld(pos) || inBatt(pos) || inHoist(pos) || inMill(pos) || inKiln(pos) || inSort(pos) || inLab(pos) || inPow(pos) || inFuse(pos) || inSkip(pos) || inTip(pos) || inAdit(pos) || inWinze(pos) || inCross(pos) || inRaise(pos) || inVent(pos) || inBin(pos) || inThick(pos) || inBall(pos) || inCyc(pos) || inSpiral(pos) || inPress(pos) || inFloat(pos) || inStack(pos) || inSlake(pos) || inRope(pos) || inSinter(pos) || inSample(pos) || inPellet(pos) || inClar(pos) || inSilo(pos) || inJig(pos) || inCool(pos) || inBag(pos) || inDry(pos) || inLoco(pos) || inAgit(pos) || inScrub(pos) || inEw(pos) || inCone(pos) || inClas(pos) || inMags(pos);
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
    [-40, 0, -13, 2, wallH, 54],
    [-40, 0, 28.75, 2, wallH, 22.5],
    [40, 0, -27, 2, wallH, 26],
    [40, 0, 15, 2, wallH, 50],
    [0, 0, -40, 80, wallH, 2],
    [0, 0, 40, 80, wallH, 2],
  ];
  // west notch z 14..17.5 sampler mouth; east notch z -14..-10 sinter strand
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
  const crushHopX = 36.6;
  const crushHopZ = -13.2;
  box(scene, crushHopX, 1.4, crushHopZ, 2.4, 2.2, 2.0, rust);
  box(scene, crushHopX, 0.45, crushHopZ - 1.4, 0.7, 0.9, 0.7, steel);
  box(scene, crushHopX, 0.45, crushHopZ + 1.4, 0.7, 0.9, 0.7, steel);
  const hopLip = box(scene, crushHopX, 2.55, crushHopZ, 2.6, 0.16, 2.2, steel);
  hopLip.rotation.z = 0.08;
  MAP.hopper = new THREE.Vector3(crushHopX, 0, crushHopZ);
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
  const boom22 = box(scene, wgX - 0.2, 1.35, wgZ, 2.4, 0.08, 0.12, rust);
  MAP.weighBoom = boom22;
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
  MAP.crates.push({ pos: MAP.hopperTruck.clone(), mesh: boom22, sx: 3.5, sy: 1.6, sz: 1.5 });

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
  const racks2 = [
    [14.2, 0.48, 29.8, 1.2, 0.96, 1.15],
    [18.5, 0.42, 29.9, 1.1, 0.84, 1.1],
    [18.4, 0.4, 26.6, 1.15, 0.8, 1.1],
  ];
  for (const r of racks2) {
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

  const svX2 = 21.2;
  const svZ2 = -43.4;
  box(scene, svX2, 0.72, svZ2, 3.6, 0.54, 1.48, rust);
  box(scene, svX2 + 0.15, 1.22, svZ2, 2.4, 0.98, 1.32, sortMat);
  box(scene, svX2 - 1.55, 0.9, svZ2, 0.82, 0.92, 1.28, steel);
  box(scene, svX2 - 1.65, 0.34, svZ2 + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2 - 1.65, 0.34, svZ2 - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2 + 1.45, 0.34, svZ2 + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2 + 1.45, 0.34, svZ2 - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.sortTruck = new THREE.Vector3(svX2, 0, svZ2);
  MAP.crates.push({ pos: MAP.sortTruck.clone(), mesh: sortDeck, sx: 3.6, sy: 1.5, sz: 1.48 });

  // West sample lab — door gap on east wall facing the quarry
  const lbX2 = -39.7;
  const lbZ2 = 17.8;
  const labMat = new THREE.MeshLambertMaterial({ color: 0x3a4450 });
  const lbWall2 = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  lbWall2(lbX2, 14.55, 6.8, 0.5);
  lbWall2(lbX2, 21.05, 6.8, 0.5);
  lbWall2(-43.05, lbZ2, 0.5, 6.4);
  lbWall2(-36.35, 15.7, 0.5, 2.3);
  lbWall2(-36.35, 19.9, 0.5, 2.3);
  box(scene, -36.35, 2.8, lbZ2, 0.5, 0.5, 2.4, steel);
  box(scene, lbX2, 3.1, lbZ2, 6.9, 0.18, 6.6, steel);
  MAP.labDoor = new THREE.Vector3(-36.15, 0, lbZ2);
  MAP.lab = new THREE.Vector3(lbX2, 0, lbZ2);
  const lbFloorB = box(scene, lbX2, 0.04, lbZ2, 6.2, 0.08, 5.8, concrete);
  lbFloorB.receiveShadow = true;
  const lbLampB = new THREE.PointLight(0x80c8e0, 1.0, 11);
  lbLampB.position.set(lbX2, 2.8, lbZ2);
  scene.add(lbLampB);
  MAP.labLamp = lbLampB;
  const lbRingB = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x70c0d8, side: THREE.DoubleSide, transparent: true, opacity: 0.56 })
  );
  lbRingB.rotation.x = -Math.PI / 2;
  lbRingB.position.copy(MAP.labDoor).setY(0.05);
  scene.add(lbRingB);
  MAP.labRing = lbRingB;
  const labBins = [
    [-42.2, 0.48, 15.5, 1.15, 0.96, 1.1],
    [-37.4, 0.42, 15.45, 1.1, 0.84, 1.05],
    [-42.15, 0.4, 20.1, 1.12, 0.8, 1.05],
  ];
  for (const r of labBins) {
    const m = box(scene, r[0], r[1], r[2], r[3], r[4], r[5], labMat);
    MAP.crates.push({ pos: new THREE.Vector3(r[0], 0, r[2]), mesh: m, sx: r[3], sy: r[4], sz: r[5] });
  }
  const labBench = box(scene, lbX2, 0.72, lbZ2, 2.4, 0.9, 0.85, steel);
  MAP.labBench = labBench;
  const labScope = box(scene, lbX2 + 0.2, 1.28, lbZ2, 0.55, 0.28, 0.4, oil);
  MAP.labScope = labScope;
  const lbMoteNB = 32;
  const lbGeoB = new THREE.BufferGeometry();
  const lbPosB = new Float32Array(lbMoteNB * 3);
  const lbPhaseB = new Float32Array(lbMoteNB);
  for (let i = 0; i < lbMoteNB; i++) {
    lbPosB[i * 3] = -43.0 + Math.random() * 6.6;
    lbPosB[i * 3 + 1] = 0.26 + Math.random() * 2.5;
    lbPosB[i * 3 + 2] = 14.5 + Math.random() * 6.4;
    lbPhaseB[i] = Math.random() * Math.PI * 2;
  }
  lbGeoB.setAttribute("position", new THREE.BufferAttribute(lbPosB, 3));
  const lbMotesB = new THREE.Points(
    lbGeoB,
    new THREE.PointsMaterial({
      color: 0x80d0e8,
      size: 0.04,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })
  );
  scene.add(lbMotesB);
  MAP.labMotes = lbMotesB;
  MAP.labMotePhase = lbPhaseB;

  const lbBagB = box(scene, -34.7, 0.28, 19.2, 1.65, 0.56, 0.82, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-34.7, 0, 19.2), mesh: lbBagB, sx: 1.65, sy: 0.56, sz: 0.82, climb: true });
  const lbBag2B = box(scene, -34.6, 0.26, 16.4, 1.5, 0.52, 0.76, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-34.6, 0, 16.4), mesh: lbBag2B, sx: 1.5, sy: 0.52, sz: 0.76, climb: true });
  const lbCookB = box(scene, -34.1, 0.55, 17.8, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-34.1, 0, 17.8), mesh: lbCookB, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const lbCook2B = box(scene, -33.8, 0.55, 16.9, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-33.8, 0, 16.9), mesh: lbCook2B, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });

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

  const pvXB = 41.4;
  const pvZB = -14.6;
  box(scene, pvXB, 0.72, pvZB, 3.6, 0.54, 1.48, rust);
  box(scene, pvXB + 0.15, 1.22, pvZB, 2.4, 0.98, 1.32, powMat);
  box(scene, pvXB - 1.55, 0.9, pvZB, 0.82, 0.92, 1.28, steel);
  box(scene, pvXB - 1.65, 0.34, pvZB + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvXB - 1.65, 0.34, pvZB - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvXB + 1.45, 0.34, pvZB + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, pvXB + 1.45, 0.34, pvZB - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.powTruck = new THREE.Vector3(pvXB, 0, pvZB);
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
  const svX2B = -22.2;
  const svZ2B = 33.4;
  box(scene, svX2B, 0.72, svZ2B, 3.6, 0.54, 1.48, rust);
  box(scene, svX2B + 0.15, 1.22, svZ2B, 2.4, 0.98, 1.32, skipMat);
  box(scene, svX2B - 1.55, 0.9, svZ2B, 0.82, 0.92, 1.28, steel);
  box(scene, svX2B - 1.65, 0.34, svZ2B + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2B - 1.65, 0.34, svZ2B - 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2B + 1.45, 0.34, svZ2B + 0.62, 0.4, 0.68, 0.22, oil);
  box(scene, svX2B + 1.45, 0.34, svZ2B - 0.62, 0.4, 0.68, 0.22, oil);
  MAP.skipTruck = new THREE.Vector3(svX2B, 0, svZ2B);
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
  // West wall split so the winze crosscut can join the drift
  adWall(-17.55, -40.2, 0.42, 5.6);
  adWall(-17.55, -32.22, 0.42, 5.65);
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
  const deckB = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.12, 1.85), steel);
  deckB.position.y = 0.12;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.05, 1.85), rust);
  railL.position.set(-1.02, 0.62, 0);
  const railR = railL.clone();
  railR.position.x = 1.02;
  cage.add(deckB, railL, railR);
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

  // West winze collar — door gap north, crosscut east into the adit
  const wnX = -34.6;
  const wnZ = -36.2;
  const wnWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.45, z, sx, 2.9, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 2.9, sz });
    return m;
  };
  wnWall(wnX, -39.75, 7.3, 0.42);
  wnWall(-38.15, wnZ, 0.42, 6.7);
  wnWall(-36.55, -32.65, 2.7, 0.42);
  wnWall(-32.65, -32.65, 2.7, 0.42);
  wnWall(-31.05, -38.35, 0.42, 2.4);
  wnWall(-31.05, -34.05, 0.42, 2.4);
  box(scene, wnX, 2.75, -32.65, 2.15, 0.38, 0.42, timber);
  box(scene, -31.05, 2.75, wnZ, 0.42, 0.38, 2.2, timber);
  box(scene, wnX, 3.05, wnZ, 7.5, 0.18, 7.3, rock);
  MAP.winzeDoor = new THREE.Vector3(wnX, 0, -32.4);
  MAP.winze = new THREE.Vector3(wnX, 0, wnZ);
  const wnFloor = box(scene, wnX, 0.04, wnZ, 6.5, 0.08, 6.5, concrete);
  wnFloor.receiveShadow = true;
  const wnLamp = new THREE.PointLight(0xffb060, 0.7, 10);
  wnLamp.position.set(wnX, 2.35, wnZ);
  scene.add(wnLamp);
  MAP.winzeLamp = wnLamp;
  const wnRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.28, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0a060, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
  );
  wnRing.rotation.x = -Math.PI / 2;
  wnRing.position.copy(MAP.winzeDoor).setY(0.05);
  scene.add(wnRing);
  MAP.winzeRing = wnRing;
  // Crosscut timber: winze east gap to adit west gap
  const xcX = -24.3;
  const xcZ = -36.2;
  const xcN = box(scene, xcX, 1.35, -37.5, 13.5, 2.7, 0.32, timber);
  MAP.crates.push({ pos: new THREE.Vector3(xcX, 0, -37.5), mesh: xcN, sx: 13.5, sy: 2.7, sz: 0.32 });
  const xcS = box(scene, xcX, 1.35, -34.9, 13.5, 2.7, 0.32, timber);
  MAP.crates.push({ pos: new THREE.Vector3(xcX, 0, -34.9), mesh: xcS, sx: 13.5, sy: 2.7, sz: 0.32 });
  box(scene, xcX, 2.72, xcZ, 13.6, 0.16, 2.7, rock);
  for (let i = 0; i < 5; i++) {
    const x = -30.2 + i * 2.4;
    box(scene, x, 1.2, -37.15, 0.18, 2.2, 0.18, timber);
    box(scene, x, 1.2, -35.25, 0.18, 2.2, 0.18, timber);
    box(scene, x, 2.5, xcZ, 0.16, 0.14, 2.2, timber);
  }
  const xcFloor = box(scene, xcX, 0.03, xcZ, 13.2, 0.06, 2.15, concrete);
  xcFloor.receiveShadow = true;
  MAP.cross = { x: xcX, z: xcZ, hx: 6.7, hz: 1.05 };
  const floodMesh = box(scene, xcX, 0.08, xcZ, 12.6, 0.12, 1.85, new THREE.MeshLambertMaterial({ color: 0x2a4038, transparent: true, opacity: 0.45 }));
  floodMesh.castShadow = false;
  MAP.sumpWater = floodMesh;
  const floodCrate = { pos: new THREE.Vector3(xcX, 0, xcZ), mesh: floodMesh, sx: 12.6, sy: 1.55, sz: 1.85, walkOn: true, dead: true, sump: true };
  MAP.crates.push(floodCrate);
  MAP.sumpCrate = floodCrate;
  MAP.sump = { on: false, x: wnX + 1.5, z: wnZ + 1.6, t: 0 };
  const lever = box(scene, MAP.sump.x, 1.05, MAP.sump.z, 0.12, 0.7, 0.12, steel);
  MAP.sumpLever = lever;
  box(scene, MAP.sump.x, 0.55, MAP.sump.z, 0.35, 0.7, 0.35, rust);
  // Rideable cage inside the collar — climbs to a deckB
  const wCage = new THREE.Group();
  const wDeck = box(scene, 0, 0.08, 0, 1.5, 0.12, 1.4, steel);
  const wRail = box(scene, 0, 0.55, -0.62, 1.5, 0.08, 0.08, steel);
  wCage.add(wDeck, wRail);
  wCage.position.set(wnX - 1.7, 0.15, wnZ - 1.35);
  scene.add(wCage);
  MAP.winzeCageMesh = wCage;
  MAP.winzeCage = { x: wnX - 1.7, z: wnZ - 1.35, y: 0.15, sx: 1.5, sz: 1.4, top: 0.32 };
  MAP.platforms.push(MAP.winzeCage);
  MAP.winzeCageDir = 1;
  const wSheave = box(scene, wnX - 1.7, 2.85, wnZ - 1.35, 0.55, 0.55, 0.18, steel);
  MAP.winzeSheave = wSheave;
  box(scene, wnX - 1.7, 1.6, wnZ - 2.15, 0.12, 3.0, 0.12, steel);
  box(scene, wnX - 1.7, 1.6, wnZ - 0.55, 0.12, 3.0, 0.12, steel);
  const wnMoteN = 22;
  const wnGeo = new THREE.BufferGeometry();
  const wnPos = new Float32Array(wnMoteN * 3);
  const wnPhase = new Float32Array(wnMoteN);
  for (let i = 0; i < wnMoteN; i++) {
    wnPos[i * 3] = wnX + (Math.random() - 0.5) * 5.2;
    wnPos[i * 3 + 1] = 0.3 + Math.random() * 1.8;
    wnPos[i * 3 + 2] = wnZ + (Math.random() - 0.5) * 5.2;
    wnPhase[i] = Math.random() * Math.PI * 2;
  }
  wnGeo.setAttribute("position", new THREE.BufferAttribute(wnPos, 3));
  const wnMotes = new THREE.Points(wnGeo, new THREE.PointsMaterial({ color: 0xc8a070, size: 0.045, transparent: true, opacity: 0.45 }));
  scene.add(wnMotes);
  MAP.winzeMotes = wnMotes;
  MAP.winzeMotePhase = wnPhase;
  // Door berms + cook-off drums + wrecked truck north of the collar
  const wnBerm = box(scene, wnX - 2.4, 0.38, -31.2, 1.5, 0.7, 0.7, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(wnX - 2.4, 0, -31.2), mesh: wnBerm, sx: 1.5, sy: 0.7, sz: 0.7, climb: true });
  const wnBerm2 = box(scene, wnX + 2.4, 0.36, -31.15, 1.4, 0.66, 0.68, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(wnX + 2.4, 0, -31.15), mesh: wnBerm2, sx: 1.4, sy: 0.66, sz: 0.68, climb: true });
  const wnDrum = box(scene, wnX - 3.3, 0.55, -31.0, 0.62, 1.1, 0.62, drumMat);
  MAP.crates.push({ pos: new THREE.Vector3(wnX - 3.3, 0, -31.0), mesh: wnDrum, sx: 0.62, sy: 1.1, sz: 0.62, drum: true });
  MAP.drums.push(MAP.crates[MAP.crates.length - 1]);
  const wnDrum2 = box(scene, wnX + 3.3, 0.55, -30.9, 0.58, 1.08, 0.58, drumMat);
  MAP.crates.push({ pos: new THREE.Vector3(wnX + 3.3, 0, -30.9), mesh: wnDrum2, sx: 0.58, sy: 1.08, sz: 0.58, drum: true });
  MAP.drums.push(MAP.crates[MAP.crates.length - 1]);
  const wvXB = -34.6;
  const wvZB = -28.6;
  const wnCab = box(scene, wvXB, 0.7, wvZB, 1.5, 1.15, 1.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(wvXB, 0, wvZB), mesh: wnCab, sx: 1.5, sy: 1.3, sz: 1.7 });
  const wnBed = box(scene, wvXB, 0.55, wvZB + 2.05, 1.7, 0.7, 2.1, steel);
  MAP.crates.push({ pos: new THREE.Vector3(wvXB, 0, wvZB + 2.05), mesh: wnBed, sx: 1.7, sy: 0.9, sz: 2.1 });
  MAP.winzeTruck = new THREE.Vector3(wvXB, 0, wvZB);

  // South-east vent raise — door gap north into a timber drift toward the crusher
  const rsX = 32.2;
  const rsZ = -32.5;
  const rsWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.45, z, sx, 2.9, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 2.9, sz });
    return m;
  };
  rsWall(rsX, -35.85, 7.2, 0.42);
  rsWall(28.75, rsZ, 0.42, 6.5);
  rsWall(35.65, rsZ, 0.42, 6.5);
  rsWall(30.35, -29.15, 2.6, 0.42);
  rsWall(34.05, -29.15, 2.6, 0.42);
  box(scene, rsX, 2.75, -29.15, 2.2, 0.38, 0.42, timber);
  box(scene, rsX, 3.05, rsZ, 7.4, 0.18, 7.1, rock);
  MAP.raiseDoor = new THREE.Vector3(rsX, 0, -29.05);
  MAP.raise = new THREE.Vector3(rsX, 0, rsZ);
  const rsFloor = box(scene, rsX, 0.04, rsZ, 6.4, 0.08, 6.4, concrete);
  rsFloor.receiveShadow = true;
  const rsLamp = new THREE.PointLight(0xffc070, 0.75, 11);
  rsLamp.position.set(rsX, 2.4, rsZ);
  scene.add(rsLamp);
  MAP.raiseLamp = rsLamp;
  const rsRing = new THREE.Mesh(
    new THREE.RingGeometry(1.05, 1.28, 16),
    new THREE.MeshBasicMaterial({ color: 0xe8a040, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
  );
  rsRing.rotation.x = -Math.PI / 2;
  rsRing.position.copy(MAP.raiseDoor).setY(0.05);
  scene.add(rsRing);
  MAP.raiseRing = rsRing;
  // Timber vent drift: raise north gap toward the crusher approach
  const vdZ = -22.6;
  box(scene, 31.15, 1.35, vdZ, 0.28, 2.7, 12.4, timber);
  MAP.crates.push({ pos: new THREE.Vector3(31.15, 0, vdZ), mesh: scene.children[scene.children.length - 1], sx: 0.28, sy: 2.7, sz: 12.4 });
  box(scene, 33.25, 1.35, vdZ, 0.28, 2.7, 12.4, timber);
  MAP.crates.push({ pos: new THREE.Vector3(33.25, 0, vdZ), mesh: scene.children[scene.children.length - 1], sx: 0.28, sy: 2.7, sz: 12.4 });
  box(scene, rsX, 2.72, vdZ, 2.4, 0.16, 12.4, timber);
  for (const oz of [-27.4, -23.6, -19.8, -17.2]) {
    box(scene, rsX, 2.55, oz, 2.35, 0.12, 0.16, steel);
  }
  // Axial fan + lever. Dust curtain blocks hitscan only while the fan is running.
  const fanHub = box(scene, rsX, 1.55, -31.15, 0.28, 0.28, 0.28, steel);
  const fanBlades = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.08, 0.22), rust);
    blade.position.x = 0.55;
    blade.rotation.z = (i / 4) * Math.PI * 2;
    const wrap = new THREE.Group();
    wrap.rotation.z = (i / 4) * Math.PI * 2;
    wrap.add(blade);
    blade.position.set(0.62, 0, 0);
    fanBlades.add(wrap);
  }
  fanBlades.position.set(rsX, 1.55, -31.15);
  scene.add(fanBlades);
  MAP.fanBlades = fanBlades;
  MAP.fanHub = fanHub;
  const dustMat = new THREE.MeshLambertMaterial({ color: 0xc4a070, transparent: true, opacity: 0.08 });
  const dustMesh = box(scene, rsX, 1.15, -22.8, 1.7, 2.1, 8.6, dustMat);
  dustMesh.castShadow = false;
  const fanCrate = { pos: new THREE.Vector3(rsX, 0, -22.8), mesh: dustMesh, sx: 1.7, sy: 2.1, sz: 8.6, walkOn: true, dead: true, fan: true };
  MAP.crates.push(fanCrate);
  MAP.fanCrate = fanCrate;
  MAP.fanDust = dustMesh;
  MAP.fan = { on: false, x: 30.15, z: -31.6, t: 0, spin: 0 };
  const fanLever = box(scene, MAP.fan.x, 1.05, MAP.fan.z, 0.12, 0.7, 0.12, steel);
  MAP.fanLever = fanLever;
  box(scene, MAP.fan.x, 0.55, MAP.fan.z, 0.35, 0.7, 0.35, rust);
  // Rails + rideable man-car along the drift
  for (const ox of [-0.55, 0.55]) {
    box(scene, rsX + ox, 0.08, vdZ, 0.08, 0.08, 12.2, steel);
  }
  const carPath = [new THREE.Vector3(rsX, 0, -28.4), new THREE.Vector3(rsX, 0, -17.6)];
  MAP.carPath = carPath;
  MAP.carT = 0;
  MAP.carDir = 1;
  const car = new THREE.Group();
  const carBed = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.16, 1.7), steel);
  carBed.position.y = 0.28;
  const carLip = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.42, 0.08), rust);
  carLip.position.set(0, 0.48, 0.8);
  const carLip2 = carLip.clone();
  carLip2.position.z = -0.8;
  car.add(carBed, carLip, carLip2);
  car.position.copy(carPath[0]);
  scene.add(car);
  MAP.carMesh = car;
  const carCrate = { pos: carPath[0].clone(), mesh: car, sx: 1.4, sy: 1.05, sz: 1.75, walkOn: true, car: true };
  MAP.crates.push(carCrate);
  MAP.carCrate = carCrate;
  MAP.carDx = 0;
  MAP.carDz = 0;
  const rsMoteN = 28;
  const rsGeo = new THREE.BufferGeometry();
  const rsPos = new Float32Array(rsMoteN * 3);
  const rsPhase = new Float32Array(rsMoteN);
  for (let i = 0; i < rsMoteN; i++) {
    rsPos[i * 3] = rsX + (Math.random() - 0.5) * 5.0;
    rsPos[i * 3 + 1] = 0.3 + Math.random() * 1.8;
    rsPos[i * 3 + 2] = rsZ + (Math.random() - 0.5) * 5.0;
    rsPhase[i] = Math.random() * Math.PI * 2;
  }
  rsGeo.setAttribute("position", new THREE.BufferAttribute(rsPos, 3));
  const rsMotes = new THREE.Points(rsGeo, new THREE.PointsMaterial({ color: 0xd0a868, size: 0.05, transparent: true, opacity: 0.48 }));
  scene.add(rsMotes);
  MAP.raiseMotes = rsMotes;
  MAP.raiseMotePhase = rsPhase;
  const rsBerm = box(scene, rsX - 2.35, 0.36, -28.2, 1.45, 0.68, 0.68, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(rsX - 2.35, 0, -28.2), mesh: rsBerm, sx: 1.45, sy: 0.68, sz: 0.68, climb: true });
  const rsBerm2 = box(scene, rsX + 2.35, 0.34, -28.15, 1.4, 0.64, 0.66, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(rsX + 2.35, 0, -28.15), mesh: rsBerm2, sx: 1.4, sy: 0.64, sz: 0.66, climb: true });
  const rsDrum = box(scene, rsX - 3.25, 0.55, -28.05, 0.6, 1.1, 0.6, drumMat);
  MAP.crates.push({ pos: new THREE.Vector3(rsX - 3.25, 0, -28.05), mesh: rsDrum, sx: 0.6, sy: 1.1, sz: 0.6, drum: true });
  MAP.drums.push(MAP.crates[MAP.crates.length - 1]);
  const rsDrum2 = box(scene, rsX + 3.25, 0.55, -27.95, 0.58, 1.06, 0.58, drumMat);
  MAP.crates.push({ pos: new THREE.Vector3(rsX + 3.25, 0, -27.95), mesh: rsDrum2, sx: 0.58, sy: 1.06, sz: 0.58, drum: true });
  MAP.drums.push(MAP.crates[MAP.crates.length - 1]);
  const rvX = 36.4;
  const rvZ = -36.2;
  const rsCab = box(scene, rvX, 0.7, rvZ, 1.5, 1.15, 1.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(rvX, 0, rvZ), mesh: rsCab, sx: 1.5, sy: 1.3, sz: 1.7 });
  const rsBed = box(scene, rvX, 0.55, rvZ + 2.05, 1.7, 0.7, 2.1, steel);
  MAP.crates.push({ pos: new THREE.Vector3(rvX, 0, rvZ + 2.05), mesh: rsBed, sx: 1.7, sy: 0.9, sz: 2.1 });
  MAP.raiseTruck = new THREE.Vector3(rvX, 0, rvZ);
  // Drop gate at the north mouth of the vent. Solid when down, blocks shots and bodies.
  const gate = box(scene, rsX, 2.55, -16.55, 1.85, 2.15, 0.22, steel);
  const gateCrate = { pos: new THREE.Vector3(rsX, 0, -16.55), mesh: gate, sx: 1.85, sy: 2.15, sz: 0.28, dead: true, gate: true };
  MAP.crates.push(gateCrate);
  MAP.gateCrate = gateCrate;
  MAP.gateMesh = gate;
  MAP.gate = { on: false, x: 34.55, z: -16.7 };
  const gateLever = box(scene, MAP.gate.x, 1.05, MAP.gate.z, 0.12, 0.68, 0.12, steel);
  MAP.gateLever = gateLever;
  box(scene, MAP.gate.x, 0.52, MAP.gate.z, 0.32, 0.62, 0.32, rust);
  box(scene, rsX - 1.15, 1.35, -16.55, 0.16, 2.7, 0.28, rust);
  box(scene, rsX + 1.15, 1.35, -16.55, 0.16, 2.7, 0.28, rust);







  // South grizzly bin — door gap north, incline skip climbs toward the pad
  const bnX = 0.6;
  const bnZ = -43.4;
  const binMatB = new THREE.MeshLambertMaterial({ color: 0x3a342c });
  const timberB = new THREE.MeshLambertMaterial({ color: 0x5a4630 });
  const bnWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.45, z, sx, 2.9, sz, binMatB);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 2.9, sz });
    return m;
  };
  bnWall(bnX, -46.55, 6.6, 0.42);
  bnWall(-2.75, bnZ, 0.42, 6.2);
  bnWall(3.95, bnZ, 0.42, 6.2);
  bnWall(-1.35, -40.25, 2.2, 0.42);
  bnWall(2.55, -40.25, 2.2, 0.42);
  box(scene, bnX, 2.75, -40.25, 2.1, 0.38, 0.42, timberB);
  box(scene, bnX, 3.02, bnZ, 6.8, 0.16, 6.4, rock);
  MAP.binDoor = new THREE.Vector3(bnX, 0, -40.05);
  MAP.bin = new THREE.Vector3(bnX, 0, bnZ);
  const bnFloor = box(scene, bnX, 0.04, bnZ, 5.8, 0.08, 5.8, concrete);
  bnFloor.receiveShadow = true;
  const bnLamp = new THREE.PointLight(0xffb060, 0.8, 11);
  bnLamp.position.set(bnX, 2.35, bnZ);
  scene.add(bnLamp);
  MAP.binLamp = bnLamp;
  const bnRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0a040, transparent: true, opacity: 0.46, side: THREE.DoubleSide })
  );
  bnRing.rotation.x = -Math.PI / 2;
  bnRing.position.copy(MAP.binDoor).setY(0.05);
  scene.add(bnRing);
  MAP.binRing = bnRing;
  // Grizzly bars over the bin throat
  for (let i = 0; i < 5; i++) {
    box(scene, bnX - 1.2 + i * 0.55, 0.42, bnZ + 0.4, 0.08, 0.08, 2.4, steel);
  }
  box(scene, bnX, 0.22, bnZ + 0.4, 2.6, 0.16, 2.2, rust);
  const bnGeo = new THREE.BufferGeometry();
  const bnN = 28;
  const bnPos = new Float32Array(bnN * 3);
  const bnPhase = [];
  for (let i = 0; i < bnN; i++) {
    bnPos[i * 3] = bnX + (Math.random() - 0.5) * 5.2;
    bnPos[i * 3 + 1] = 0.3 + Math.random() * 2.1;
    bnPos[i * 3 + 2] = bnZ + (Math.random() - 0.5) * 5.2;
    bnPhase.push(Math.random() * 6);
  }
  bnGeo.setAttribute("position", new THREE.BufferAttribute(bnPos, 3));
  const bnMotes = new THREE.Points(
    bnGeo,
    new THREE.PointsMaterial({ color: 0xe8c090, size: 0.05, transparent: true, opacity: 0.42 })
  );
  scene.add(bnMotes);
  MAP.binMotes = bnMotes;
  MAP.binMotePhase = bnPhase;
  const bnBag = box(scene, -1.7, 0.28, -39.55, 1.45, 0.54, 0.72, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(-1.7, 0, -39.55), mesh: bnBag, sx: 1.45, sy: 0.54, sz: 0.72, climb: true });
  const bnBag2 = box(scene, 2.9, 0.26, -39.5, 1.35, 0.5, 0.7, bagMat);
  MAP.crates.push({ pos: new THREE.Vector3(2.9, 0, -39.5), mesh: bnBag2, sx: 1.35, sy: 0.5, sz: 0.7, climb: true });
  const bnCook = box(scene, -2.15, 0.55, -39.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-2.15, 0, -39.15), mesh: bnCook, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const bnCook2 = box(scene, 3.25, 0.55, -39.2, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(3.25, 0, -39.2), mesh: bnCook2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const bvXB = 5.4;
  const bvZB = -43.6;
  box(scene, bvXB, 0.7, bvZB, 3.3, 0.5, 1.35, rust);
  box(scene, bvXB + 0.1, 1.15, bvZB, 2.1, 0.85, 1.15, binMatB);
  box(scene, bvXB - 1.4, 0.32, bvZB + 0.5, 0.36, 0.62, 0.18, oil);
  box(scene, bvXB - 1.4, 0.32, bvZB - 0.5, 0.36, 0.62, 0.18, oil);
  box(scene, bvXB + 1.3, 0.32, bvZB + 0.5, 0.36, 0.62, 0.18, oil);
  box(scene, bvXB + 1.3, 0.32, bvZB - 0.5, 0.36, 0.62, 0.18, oil);
  MAP.binTruck = new THREE.Vector3(bvXB, 0, bvZB);
  MAP.crates.push({ pos: MAP.binTruck.clone(), mesh: bnFloor, sx: 3.3, sy: 1.3, sz: 1.35 });

  // Incline skip: solid cover that climbs from the bin throat toward the pad
  const incA = new THREE.Vector3(bnX, 0.28, -37.4);
  const incB = new THREE.Vector3(bnX, 3.35, -27.1);
  MAP.binPath = [incA, incB];
  MAP.binT = 0;
  MAP.binDir = 1;
  MAP.binLen = incA.distanceTo(incB);
  const mid = incA.clone().add(incB).multiplyScalar(0.5);
  const railLen = MAP.binLen;
  const railA = box(scene, mid.x - 0.62, mid.y, mid.z, 0.1, 0.08, railLen, steel);
  const railB = box(scene, mid.x + 0.62, mid.y, mid.z, 0.1, 0.08, railLen, steel);
  railA.rotation.x = Math.atan2(incB.y - incA.y, incB.z - incA.z);
  railB.rotation.x = railA.rotation.x;
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const px = incA.x;
    const py = incA.y + (incB.y - incA.y) * t;
    const pz = incA.z + (incB.z - incA.z) * t;
    const post = box(scene, px - 1.15, py * 0.5, pz, 0.16, Math.max(0.4, py), 0.16, timberB);
    MAP.crates.push({ pos: new THREE.Vector3(px - 1.15, 0, pz), mesh: post, sx: 0.16, sy: Math.max(0.4, py), sz: 0.16 });
    if (i > 0 && i < 4) {
      const step = box(scene, px - 1.55, 0.28 + i * 0.55, pz, 0.7, 0.16, 0.7, timberB);
      MAP.crates.push({ pos: new THREE.Vector3(px - 1.55, 0, pz), mesh: step, sx: 0.7, sy: 0.16 + i * 0.55, sz: 0.7, climb: true, climbTo: 0.4 + i * 0.7 });
    }
  }
  const skip = new THREE.Group();
  const bedB = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.4, 1.7), rust);
  bedB.position.y = 0.42;
  const lipB = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.48, 0.08), steel);
  lipB.position.set(0, 0.72, 0.8);
  const lip2B = lipB.clone();
  lip2B.position.z = -0.8;
  const oreB = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.32, 1.15), new THREE.MeshLambertMaterial({ color: 0x6a5434 }));
  oreB.position.y = 0.7;
  skip.add(bedB, lipB, lip2B, oreB);
  skip.position.copy(incA);
  scene.add(skip);
  MAP.binSkipMesh = skip;
  MAP.binOre = oreB;
  const skipCrate = { pos: incA.clone(), mesh: skip, sx: 1.5, sy: 1.15, sz: 1.75, skip: true };
  MAP.crates.push(skipCrate);
  MAP.binSkipCrate = skipCrate;
  MAP.binDx = 0;
  MAP.binDz = 0;
  MAP.binDy = 0;
  MAP.binSkipPlat = { x: incA.x, z: incA.z, y: incA.y + 0.35, sx: 1.45, sz: 1.55, top: incA.y + 0.62 };
  MAP.platforms.push(MAP.binSkipPlat);
  const sheaveB = box(scene, incB.x, incB.y + 1.15, incB.z, 0.18, 0.7, 0.7, steel);
  MAP.binSheave = sheaveB;
  const dumpMesh = box(scene, incB.x, 1.6, incB.z + 1.15, 2.4, 2.2, 1.6, new THREE.MeshLambertMaterial({ color: 0x8a7048, transparent: true, opacity: 0.08 }));
  const dumpCrate = { pos: new THREE.Vector3(incB.x, 0, incB.z + 1.15), mesh: dumpMesh, sx: 2.4, sy: 2.4, sz: 1.8, walkOn: true, dead: true, dump: true };
  MAP.crates.push(dumpCrate);
  MAP.binDumpCrate = dumpCrate;
  MAP.binDumpMesh = dumpMesh;
  MAP.binDumpT = 0;
  MAP.binBrake = { on: false, x: bnX + 1.55, z: -40.35 };
  const brakeLever = box(scene, MAP.binBrake.x, 1.05, MAP.binBrake.z, 0.12, 0.7, 0.12, steel);
  MAP.binBrakeLever = brakeLever;
  box(scene, MAP.binBrake.x, 0.5, MAP.binBrake.z, 0.32, 0.6, 0.32, rust);
  MAP.binPocket = { x: incB.x, z: incB.z + 0.8, hx: 1.6, hz: 1.4 };

    // South tailings basin — berm walls, sludge slow, scraper wreck
  const tlX = 14.2;
  const tlZ = -42.6;
  const sludge = new THREE.MeshLambertMaterial({ color: 0x4a4030 });
  const pond = box(scene, tlX, 0.06, tlZ, 8.4, 0.1, 6.2, sludge);
  pond.receiveShadow = true;
  MAP.tail = { x: tlX, z: tlZ };
  const berm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.55, z, sx, 1.1, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.1, sz, climb: true });
  };
  berm(tlX, -45.9, 8.6, 0.7);
  berm(9.85, tlZ, 0.7, 6.4);
  berm(18.55, tlZ, 0.7, 6.4);
  berm(12.2, -39.2, 3.2, 0.65);
  berm(16.6, -39.2, 3.2, 0.65);
  box(scene, tlX, 0.18, tlZ, 7.2, 0.08, 5.2, new THREE.MeshLambertMaterial({ color: 0x3a3428 }));
  const scX = 18.8;
  const scZ = -40.4;
  box(scene, scX, 0.7, scZ, 3.2, 0.48, 1.4, rust);
  box(scene, scX, 1.2, scZ, 1.6, 0.7, 1.1, steel);
  box(scene, scX - 1.2, 0.32, scZ + 0.5, 0.36, 0.6, 0.18, oil);
  box(scene, scX + 1.2, 0.32, scZ - 0.5, 0.36, 0.6, 0.18, oil);
  MAP.tailTruck = new THREE.Vector3(scX, 0, scZ);
  MAP.crates.push({ pos: MAP.tailTruck.clone(), mesh: pond, sx: 3.2, sy: 1.2, sz: 1.4 });
  const tlLamp = new THREE.PointLight(0xc8a060, 0.45, 10);
  tlLamp.position.set(tlX, 2.2, tlZ);
  scene.add(tlLamp);
  MAP.tailLamp = tlLamp;

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

  const truckB = new THREE.Group();
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 1.4), rust);
  cab.position.y = 1.15;
  const bedBB = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 1.35), steel);
  bedBB.position.set(-1.7, 0.85, 0);
  const wheelA = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.55, 1.5), night);
  wheelA.position.set(0.4, 0.28, 0);
  const wheelB = wheelA.clone();
  wheelB.position.x = -2.1;
  const lampL = new THREE.PointLight(0xffe8b0, 1.4, 18);
  lampL.position.set(0.95, 1.05, 0.45);
  const lampR = lampL.clone();
  lampR.position.z = -0.45;
  truckB.add(cab, bedBB, wheelA, wheelB, lampL, lampR);
  truckB.position.set(-40, 0, -8);
  scene.add(truckB);
  MAP.truckB = truckB;
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


  // East thickener — door gap north, walkable rim, sweeping rake, underflow launder
  const thX = 27.2;
  const thZ = -44.2;
  const thMat = new THREE.MeshLambertMaterial({ color: 0x3c4036 });
  const slurry = new THREE.MeshLambertMaterial({ color: 0x6a5a32 });
  const thWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, thMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  thWall(thX, -46.7, 6.2, 0.4);
  thWall(24.05, thZ, 0.4, 4.7);
  thWall(30.35, thZ, 0.4, 4.7);
  thWall(25.35, -41.85, 2.15, 0.4);
  thWall(29.05, -41.85, 2.15, 0.4);
  box(scene, thX, 2.85, -41.85, 1.7, 0.36, 0.4, crateWood);
  box(scene, thX, 3.05, thZ, 6.5, 0.16, 5.1, rock);
  MAP.thickDoor = new THREE.Vector3(thX, 0, -41.65);
  MAP.thick = { on: false, x: thX - 1.7, z: -42.15, angle: 0, dAngle: 0 };
  const thFloor = box(scene, thX, 0.04, thZ, 5.7, 0.08, 4.5, concrete);
  thFloor.receiveShadow = true;
  const thLamp = new THREE.PointLight(0xffc070, 0.75, 12);
  thLamp.position.set(thX, 2.4, thZ);
  scene.add(thLamp);
  MAP.thickLamp = thLamp;
  const thRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0b050, transparent: true, opacity: 0.46, side: THREE.DoubleSide })
  );
  thRing.rotation.x = -Math.PI / 2;
  thRing.position.copy(MAP.thickDoor).setY(0.05);
  scene.add(thRing);
  MAP.thickRing = thRing;
  const tankB = box(scene, thX, 0.16, thZ, 3.6, 0.22, 3.6, slurry);
  tankB.receiveShadow = true;
  // Walkable rim — high enough that the rake passes under
  const rim = (x, z, sx, sz) => {
    const m = box(scene, x, 0.72, z, sx, 0.22, sz, steel);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 0.22, sz, climb: true, climbTo: 0.95 });
    MAP.platforms = MAP.platforms || [];
    MAP.platforms.push({ x, z, sx, sz, top: 0.95 });
  };
  rim(thX, thZ - 1.85, 3.8, 0.28);
  rim(thX, thZ + 1.85, 3.8, 0.28);
  rim(thX - 1.85, thZ, 0.28, 3.4);
  rim(thX + 1.85, thZ, 0.28, 3.4);
  const rake = new THREE.Group();
  const hubB = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.55, 8), steel);
  hubB.position.y = 0.55;
  rake.add(hubB);
  const armMat = new THREE.MeshLambertMaterial({ color: 0x5a5044 });
  for (let i = 0; i < 4; i++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.16), armMat);
    arm.position.set(0.95, 0.42, 0);
    arm.rotation.y = (i * Math.PI) / 2;
    const holder = new THREE.Group();
    holder.rotation.y = (i * Math.PI) / 2;
    arm.rotation.y = 0;
    arm.position.set(0.95, 0.42, 0);
    holder.add(arm);
    rake.add(holder);
  }
  rake.position.set(thX, 0, thZ);
  scene.add(rake);
  MAP.rakeMesh = rake;
  MAP.rakeArms = [];
  for (let i = 0; i < 4; i++) {
    const crate = { pos: new THREE.Vector3(thX, 0, thZ), mesh: rake, sx: 0.7, sy: 0.55, sz: 0.7, rake: true };
    MAP.crates.push(crate);
    MAP.rakeArms.push(crate);
  }
  const thLever = box(scene, MAP.thick.x, 1.05, MAP.thick.z, 0.12, 0.7, 0.12, steel);
  MAP.thickLever = thLever;
  box(scene, MAP.thick.x, 0.5, MAP.thick.z, 0.32, 0.6, 0.32, rust);
  const thGeo = new THREE.BufferGeometry();
  const thN = 24;
  const thPos = new Float32Array(thN * 3);
  const thPhase = [];
  for (let i = 0; i < thN; i++) {
    thPos[i * 3] = thX + (Math.random() - 0.5) * 5.2;
    thPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    thPos[i * 3 + 2] = thZ + (Math.random() - 0.5) * 4.2;
    thPhase.push(Math.random() * 6);
  }
  thGeo.setAttribute("position", new THREE.BufferAttribute(thPos, 3));
  const thMotes = new THREE.Points(thGeo, new THREE.PointsMaterial({ color: 0xe8c898, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(thMotes);
  MAP.thickMotes = thMotes;
  MAP.thickMotePhase = thPhase;
  const thBag = box(scene, 24.7, 0.28, -42.2, 1.2, 0.5, 0.6, new THREE.MeshLambertMaterial({ color: 0x6a5a38 }));
  MAP.crates.push({ pos: new THREE.Vector3(24.7, 0, -42.2), mesh: thBag, sx: 1.2, sy: 0.5, sz: 0.6, climb: true });
  const thBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  thBerm(25.2, -40.85, 1.6, 0.55);
  thBerm(29.2, -40.85, 1.6, 0.55);
  const thDrum = box(scene, 24.55, 0.55, -40.7, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(24.55, 0, -40.7), mesh: thDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const thDrum2 = box(scene, 29.7, 0.55, -40.65, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(29.7, 0, -40.65), mesh: thDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const thTruckX = 31.4;
  const thTruckZ = -43.2;
  const thCab = box(scene, thTruckX, 0.7, thTruckZ, 1.5, 1.3, 1.3, rust);
  const thBed = box(scene, thTruckX, 0.45, thTruckZ - 1.5, 1.4, 0.7, 1.6, steel);
  MAP.thickTruck = new THREE.Vector3(thTruckX, 0, thTruckZ);
  MAP.crates.push({ pos: MAP.thickTruck.clone(), mesh: thCab, sx: 1.5, sy: 1.3, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(thTruckX, 0, thTruckZ - 1.5), mesh: thBed, sx: 1.4, sy: 0.7, sz: 1.6 });
  // Underflow launder runs north toward the pad. Water rises when the valve is open.
  const lnX = 26.4;
  const lnZ = -38.4;
  const lnMesh = box(scene, lnX, 0.18, lnZ, 1.35, 0.7, 6.2, new THREE.MeshLambertMaterial({ color: 0x8a7040, transparent: true, opacity: 0.12 }));
  const lnCrate = { pos: new THREE.Vector3(lnX, 0, lnZ), mesh: lnMesh, sx: 1.35, sy: 1.3, sz: 6.2, walkOn: true, dead: true, launder: true };
  MAP.crates.push(lnCrate);
  MAP.launderMesh = lnMesh;
  MAP.launderCrate = lnCrate;
  MAP.launder = { x: lnX, z: lnZ, hx: 0.85, hz: 3.2, vx: 0, vz: 2.4 };
  box(scene, lnX - 0.85, 0.22, lnZ, 0.16, 0.4, 6.3, steel);
  box(scene, lnX + 0.85, 0.22, lnZ, 0.16, 0.4, 6.3, steel);

  // North ball mill — door gap south, tumbling drum, clutch dust curtain
  const blX = -6.5;
  const blZ = 44.15;
  const blMat = new THREE.MeshLambertMaterial({ color: 0x3a3834 });
  const blWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, blMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  blWall(blX, 46.65, 6.2, 0.4);
  blWall(-9.65, blZ, 0.4, 4.6);
  blWall(-3.35, blZ, 0.4, 4.6);
  blWall(-8.15, 41.75, 2.2, 0.4);
  blWall(-4.85, 41.75, 2.2, 0.4);
  box(scene, blX, 2.9, 41.75, 1.8, 0.36, 0.4, crateWood);
  box(scene, blX, 3.1, blZ, 6.4, 0.16, 5.0, rock);
  MAP.ballDoor = new THREE.Vector3(blX, 0, 41.95);
  MAP.ball = { on: false, x: blX + 1.85, z: 42.15 };
  const blFloor = box(scene, blX, 0.04, blZ, 5.6, 0.08, 4.4, concrete);
  blFloor.receiveShadow = true;
  const blLamp = new THREE.PointLight(0xffb060, 0.7, 11);
  blLamp.position.set(blX, 2.35, blZ);
  scene.add(blLamp);
  MAP.ballLamp = blLamp;
  const blRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xd0a060, transparent: true, opacity: 0.44, side: THREE.DoubleSide })
  );
  blRing.rotation.x = -Math.PI / 2;
  blRing.position.copy(MAP.ballDoor).setY(0.05);
  scene.add(blRing);
  MAP.ballRing = blRing;
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 2.6, 12), new THREE.MeshLambertMaterial({ color: 0x6a5840 }));
  drum.rotation.z = Math.PI / 2;
  drum.position.set(blX, 1.25, blZ);
  scene.add(drum);
  MAP.ballDrum = drum;
  const tire = new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.08, 6, 14), steel);
  tire.rotation.y = Math.PI / 2;
  tire.position.set(blX - 1.15, 1.25, blZ);
  scene.add(tire);
  const tire2 = tire.clone();
  tire2.position.x = blX + 1.15;
  scene.add(tire2);
  const charge = box(scene, blX, 0.35, blZ + 1.35, 1.4, 0.4, 0.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(blX, 0, blZ + 1.35), mesh: charge, sx: 1.4, sy: 0.4, sz: 0.7, climb: true });
  const blLever = box(scene, MAP.ball.x, 1.05, MAP.ball.z, 0.12, 0.7, 0.12, steel);
  MAP.ballLever = blLever;
  box(scene, MAP.ball.x, 0.5, MAP.ball.z, 0.32, 0.6, 0.32, rust);
  const blDust = box(scene, blX, 1.35, 42.05, 1.6, 2.1, 0.55, new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.05 }));
  const blDustCrate = { pos: new THREE.Vector3(blX, 0, 42.05), mesh: blDust, sx: 1.6, sy: 2.2, sz: 0.55, walkOn: true, dead: true, ball: true };
  MAP.crates.push(blDustCrate);
  MAP.ballDust = blDust;
  MAP.ballDustCrate = blDustCrate;
  const blGeo = new THREE.BufferGeometry();
  const blN = 22;
  const blPos = new Float32Array(blN * 3);
  const blPhase = [];
  for (let i = 0; i < blN; i++) {
    blPos[i * 3] = blX + (Math.random() - 0.5) * 5.0;
    blPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    blPos[i * 3 + 2] = blZ + (Math.random() - 0.5) * 4.0;
    blPhase.push(Math.random() * 6);
  }
  blGeo.setAttribute("position", new THREE.BufferAttribute(blPos, 3));
  const blMotes = new THREE.Points(blGeo, new THREE.PointsMaterial({ color: 0xd8c0a0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(blMotes);
  MAP.ballMotes = blMotes;
  MAP.ballMotePhase = blPhase;
  const blBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  blBerm(-8.4, 40.85, 1.5, 0.55);
  blBerm(-4.6, 40.85, 1.5, 0.55);
  const blDrum = box(scene, -8.7, 0.55, 40.55, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-8.7, 0, 40.55), mesh: blDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const blDrum2 = box(scene, -4.3, 0.55, 40.5, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-4.3, 0, 40.5), mesh: blDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const blTruck = box(scene, -2.3, 0.65, 43.4, 1.5, 1.2, 1.4, rust);
  const blBed = box(scene, -2.3, 0.42, 44.9, 1.35, 0.65, 1.5, steel);
  MAP.ballTruck = new THREE.Vector3(-2.3, 0, 43.4);
  MAP.crates.push({ pos: MAP.ballTruck.clone(), mesh: blTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(-2.3, 0, 44.9), mesh: blBed, sx: 1.35, sy: 0.65, sz: 1.5 });


  // Southwest cyclone house — door gap east, spinning cone, spiral feed, overflow curtain
  const cyX = -44.4;
  const cyZ = -24.2;
  const cyMat = new THREE.MeshLambertMaterial({ color: 0x3a4038 });
  const cyWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, cyMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  cyWall(cyX, -26.55, 6.2, 0.4);
  cyWall(-47.45, cyZ, 0.4, 4.6);
  cyWall(-41.35, -25.55, 0.4, 1.6);
  cyWall(-41.35, -22.85, 0.4, 1.6);
  cyWall(cyX, -21.85, 6.2, 0.4);
  box(scene, -41.35, 2.9, cyZ, 0.4, 0.36, 1.7, crateWood);
  box(scene, cyX, 3.1, cyZ, 6.4, 0.16, 5.0, rock);
  MAP.cycDoor = new THREE.Vector3(-41.05, 0, cyZ);
  MAP.cyc = { on: false, x: -42.35, z: -22.35 };
  const cyFloor = box(scene, cyX, 0.04, cyZ, 5.6, 0.08, 4.4, concrete);
  cyFloor.receiveShadow = true;
  const cyLamp = new THREE.PointLight(0xffc070, 0.7, 11);
  cyLamp.position.set(cyX, 2.35, cyZ);
  scene.add(cyLamp);
  MAP.cycLamp = cyLamp;
  const cyRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xc8a060, transparent: true, opacity: 0.44, side: THREE.DoubleSide })
  );
  cyRing.rotation.x = -Math.PI / 2;
  cyRing.position.copy(MAP.cycDoor).setY(0.05);
  scene.add(cyRing);
  MAP.cycRing = cyRing;
  const cone = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 1.15, 2.2, 12), new THREE.MeshLambertMaterial({ color: 0x6a5840 }));
  cone.position.set(cyX, 1.25, cyZ);
  scene.add(cone);
  MAP.cycCone = cone;
  const cyBand = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.06, 6, 14), steel);
  cyBand.rotation.x = Math.PI / 2;
  cyBand.position.set(cyX, 1.55, cyZ);
  scene.add(cyBand);
  MAP.cycBand = cyBand;
  const feedBox = box(scene, cyX + 0.2, 0.4, cyZ + 1.15, 1.3, 0.45, 0.6, rust);
  MAP.crates.push({ pos: new THREE.Vector3(cyX + 0.2, 0, cyZ + 1.15), mesh: feedBox, sx: 1.3, sy: 0.45, sz: 0.6, climb: true });
  const cyLever = box(scene, MAP.cyc.x, 1.05, MAP.cyc.z, 0.12, 0.7, 0.12, steel);
  MAP.cycLever = cyLever;
  box(scene, MAP.cyc.x, 0.5, MAP.cyc.z, 0.32, 0.6, 0.32, rust);
  // Spiral classifier trough outside the east door, running south to an overflow pocket
  const spX = -41.6;
  const trough = box(scene, spX, 0.16, -29.0, 1.7, 0.18, 14.2, new THREE.MeshLambertMaterial({ color: 0x5a5040 }));
  trough.receiveShadow = true;
  const screw = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const flight = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.08, 0.55), steel);
    flight.position.set(0, 0.42, -6.2 + i * 1.7);
    flight.rotation.y = i * 0.45;
    screw.add(flight);
  }
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 13.4), rust);
  shaft.position.set(0, 0.48, -29.0 + 24.2);
  screw.add(shaft);
  screw.position.set(spX, 0, 0);
  scene.add(screw);
  MAP.cycScrew = screw;
  MAP.spiral = { x: spX, z: -29.0, hx: 0.85, hz: 7.1, vz: -2.2 };
  const ovX = -41.7;
  const ovZ = -36.15;
  const ovMesh = box(scene, ovX, 0.7, ovZ, 2.2, 1.5, 1.6, new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.06 }));
  const ovCrate = { pos: new THREE.Vector3(ovX, 0, ovZ), mesh: ovMesh, sx: 2.2, sy: 1.6, sz: 1.6, walkOn: true, dead: true, cyc: true };
  MAP.crates.push(ovCrate);
  MAP.cycDust = ovMesh;
  MAP.cycDustCrate = ovCrate;
  MAP.overflow = { x: ovX, z: ovZ, hx: 1.35, hz: 1.15, vz: -1.4 };
  const retMesh = box(scene, -36.5, 0.08, -42.4, 12.4, 0.12, 1.5, new THREE.MeshLambertMaterial({ color: 0x6a5a38 }));
  retMesh.receiveShadow = true;
  MAP.cycReturn = { x: -36.5, z: -42.4, hx: 6.2, hz: 0.85, vx: 2.1, vz: 0 };
  const retBerm = box(scene, -36.5, 0.4, -43.3, 12.2, 0.7, 0.4, rock);
  MAP.crates.push({ pos: new THREE.Vector3(-36.5, 0, -43.3), mesh: retBerm, sx: 12.2, sy: 0.7, sz: 0.4, climb: true });
  const cyGeo = new THREE.BufferGeometry();
  const cyN = 22;
  const cyPos = new Float32Array(cyN * 3);
  const cyPhase = [];
  for (let i = 0; i < cyN; i++) {
    cyPos[i * 3] = cyX + (Math.random() - 0.5) * 5.0;
    cyPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    cyPos[i * 3 + 2] = cyZ + (Math.random() - 0.5) * 4.0;
    cyPhase.push(Math.random() * 6);
  }
  cyGeo.setAttribute("position", new THREE.BufferAttribute(cyPos, 3));
  const cyMotes = new THREE.Points(cyGeo, new THREE.PointsMaterial({ color: 0xd8c8a0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(cyMotes);
  MAP.cycMotes = cyMotes;
  MAP.cycMotePhase = cyPhase;
  const cyBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  cyBerm(-42.5, -22.15, 1.5, 0.55);
  cyBerm(-42.5, -26.25, 1.5, 0.55);
  const cyDrum = box(scene, -42.85, 0.55, -21.55, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-42.85, 0, -21.55), mesh: cyDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const cyDrum2 = box(scene, -42.8, 0.55, -26.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-42.8, 0, -26.7), mesh: cyDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const cyTruck = box(scene, -44.6, 0.65, -19.4, 1.5, 1.2, 1.4, rust);
  const cyBed = box(scene, -44.6, 0.42, -17.9, 1.35, 0.65, 1.5, steel);
  MAP.cycTruck = new THREE.Vector3(-44.6, 0, -19.4);
  MAP.crates.push({ pos: MAP.cycTruck.clone(), mesh: cyTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(-44.6, 0, -17.9), mesh: cyBed, sx: 1.35, sy: 0.65, sz: 1.5 });
  const cyWalk = box(scene, -43.15, 0.85, -29.0, 0.55, 0.16, 13.6, steel);
  MAP.crates.push({ pos: new THREE.Vector3(-43.15, 0, -29.0), mesh: cyWalk, sx: 0.55, sy: 0.16, sz: 13.6, climb: true, climbTo: 1.05 });
  MAP.platforms = MAP.platforms || [];
  MAP.platforms.push({ x: -43.15, z: -29.0, sx: 0.55, sz: 13.6, top: 1.05 });
  const cyRail = box(scene, -43.4, 1.35, -29.0, 0.08, 0.7, 13.4, steel);
  MAP.crates.push({ pos: new THREE.Vector3(-43.4, 0, -29.0), mesh: cyRail, sx: 0.08, sy: 0.7, sz: 13.4 });

  // East filter press — door gap west, clamping plates, cake curtain
  const fpX = 44.5;
  const fpZ = 6.2;
  const fpMat = new THREE.MeshLambertMaterial({ color: 0x383c40 });
  const fpWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, fpMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  fpWall(fpX, 8.65, 6.2, 0.4);
  fpWall(47.45, fpZ, 0.4, 4.6);
  fpWall(41.55, 7.55, 0.4, 1.6);
  fpWall(41.55, 4.85, 0.4, 1.6);
  fpWall(fpX, 3.75, 6.2, 0.4);
  box(scene, 41.55, 2.9, fpZ, 0.4, 0.36, 1.7, crateWood);
  box(scene, fpX, 3.1, fpZ, 6.4, 0.16, 5.0, rock);
  MAP.pressDoor = new THREE.Vector3(41.85, 0, fpZ);
  MAP.press = { on: false, x: 43.15, z: 4.35, gap: 1.15 };
  const fpFloor = box(scene, fpX, 0.04, fpZ, 5.6, 0.08, 4.4, concrete);
  fpFloor.receiveShadow = true;
  const fpLamp = new THREE.PointLight(0xffb070, 0.7, 11);
  fpLamp.position.set(fpX, 2.35, fpZ);
  scene.add(fpLamp);
  MAP.pressLamp = fpLamp;
  const fpRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xd0a070, transparent: true, opacity: 0.44, side: THREE.DoubleSide })
  );
  fpRing.rotation.x = -Math.PI / 2;
  fpRing.position.copy(MAP.pressDoor).setY(0.05);
  scene.add(fpRing);
  MAP.pressRing = fpRing;
  const plateMat = new THREE.MeshLambertMaterial({ color: 0x6a6058 });
  const plateA = box(scene, fpX - 0.55, 1.15, fpZ, 0.16, 1.7, 1.5, plateMat);
  const plateB = box(scene, fpX + 0.55, 1.15, fpZ, 0.16, 1.7, 1.5, plateMat);
  MAP.pressPlates = [plateA, plateB];
  const ram = box(scene, fpX, 1.15, fpZ + 1.15, 0.35, 0.35, 0.8, rust);
  MAP.pressRam = ram;
  const fpLever = box(scene, MAP.press.x, 1.05, MAP.press.z, 0.12, 0.7, 0.12, steel);
  MAP.pressLever = fpLever;
  box(scene, MAP.press.x, 0.5, MAP.press.z, 0.32, 0.6, 0.32, rust);
  const cake = box(scene, 41.7, 1.2, fpZ, 0.55, 2.0, 1.6, new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.05 }));
  const cakeCrate = { pos: new THREE.Vector3(41.7, 0, fpZ), mesh: cake, sx: 0.55, sy: 2.1, sz: 1.6, walkOn: true, dead: true, press: true };
  MAP.crates.push(cakeCrate);
  MAP.pressCake = cake;
  MAP.pressCakeCrate = cakeCrate;
  const fpGeo = new THREE.BufferGeometry();
  const fpN = 20;
  const fpPos = new Float32Array(fpN * 3);
  const fpPhase = [];
  for (let i = 0; i < fpN; i++) {
    fpPos[i * 3] = fpX + (Math.random() - 0.5) * 5.0;
    fpPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    fpPos[i * 3 + 2] = fpZ + (Math.random() - 0.5) * 4.0;
    fpPhase.push(Math.random() * 6);
  }
  fpGeo.setAttribute("position", new THREE.BufferAttribute(fpPos, 3));
  const fpMotes = new THREE.Points(fpGeo, new THREE.PointsMaterial({ color: 0xe0c8a8, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(fpMotes);
  MAP.pressMotes = fpMotes;
  MAP.pressMotePhase = fpPhase;
  const fpBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  fpBerm(42.55, 4.55, 1.5, 0.55);
  fpBerm(42.55, 7.85, 1.5, 0.55);
  const fpDrum = box(scene, 42.9, 0.55, 4.15, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(42.9, 0, 4.15), mesh: fpDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const fpDrum2 = box(scene, 42.85, 0.55, 8.25, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(42.85, 0, 8.25), mesh: fpDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const fpTruck = box(scene, 44.4, 0.65, 10.6, 1.5, 1.2, 1.4, rust);
  const fpBed = box(scene, 44.4, 0.42, 12.1, 1.35, 0.65, 1.5, steel);
  MAP.pressTruck = new THREE.Vector3(44.4, 0, 10.6);
  MAP.crates.push({ pos: MAP.pressTruck.clone(), mesh: fpTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(44.4, 0, 12.1), mesh: fpBed, sx: 1.35, sy: 0.65, sz: 1.5 });

  // Northwest flotation bank — door gap south, twin cells, air froth, launder shove
  const flX = -11.2;
  const flZ = 18.6;
  const flMat = new THREE.MeshLambertMaterial({ color: 0x3a4240 });
  const flWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, flMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  flWall(flX, 21.15, 6.4, 0.4);
  flWall(-14.25, flZ, 0.4, 4.7);
  flWall(-8.15, flZ, 0.4, 4.7);
  flWall(-13.15, 16.05, 2.1, 0.4);
  flWall(-9.25, 16.05, 2.1, 0.4);
  box(scene, flX, 2.9, 16.05, 1.7, 0.36, 0.4, crateWood);
  box(scene, flX, 3.1, flZ, 6.2, 0.16, 5.0, rock);
  MAP.floatDoor = new THREE.Vector3(flX, 0, 16.2);
  MAP.float = { on: false, x: flX + 1.55, z: flZ - 0.4, spin: 0 };
  const flFloor = box(scene, flX, 0.04, flZ, 5.6, 0.08, 4.4, concrete);
  flFloor.receiveShadow = true;
  const flLamp = new THREE.PointLight(0xc8e0a0, 0.65, 11);
  flLamp.position.set(flX, 2.35, flZ);
  scene.add(flLamp);
  MAP.floatLamp = flLamp;
  const flRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xb0c878, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  flRing.rotation.x = -Math.PI / 2;
  flRing.position.copy(MAP.floatDoor).setY(0.05);
  scene.add(flRing);
  MAP.floatRing = flRing;
  const cellMatB = new THREE.MeshLambertMaterial({ color: 0x2a3830 });
  const impMat = new THREE.MeshLambertMaterial({ color: 0x8a9080 });
  MAP.floatCells = [];
  MAP.floatImps = [];
  for (const ox of [-1.35, 1.35]) {
    const cell = box(scene, flX + ox, 0.55, flZ + 0.35, 1.55, 1.05, 1.55, cellMatB);
    MAP.crates.push({ pos: new THREE.Vector3(flX + ox, 0, flZ + 0.35), mesh: cell, sx: 1.55, sy: 0.7, sz: 1.55, walkOn: true });
    const imp = box(scene, flX + ox, 1.15, flZ + 0.35, 1.15, 0.08, 0.16, impMat);
    const imp2 = box(scene, flX + ox, 1.15, flZ + 0.35, 0.16, 0.08, 1.15, impMat);
    MAP.floatCells.push(cell);
    MAP.floatImps.push(imp, imp2);
  }
  const flLever = box(scene, MAP.float.x, 1.05, MAP.float.z, 0.12, 0.7, 0.12, steel);
  MAP.floatLever = flLever;
  box(scene, MAP.float.x, 0.5, MAP.float.z, 0.32, 0.6, 0.32, rust);
  const froth = box(scene, flX, 1.2, 15.15, 1.7, 2.0, 0.7, new THREE.MeshLambertMaterial({ color: 0xd8e8c0, transparent: true, opacity: 0.05 }));
  const frothCrate = { pos: new THREE.Vector3(flX, 0, 15.15), mesh: froth, sx: 1.7, sy: 2.1, sz: 0.7, walkOn: true, dead: true, froth: true };
  MAP.crates.push(frothCrate);
  MAP.frothMesh = froth;
  MAP.frothCrate = frothCrate;
  MAP.froth = { x: flX, z: 15.15, hx: 1.05, hz: 0.7 };
  MAP.floatLaunder = { x: flX, z: 13.35, hx: 0.7, hz: 1.7, vz: -2.0 };
  const laun = box(scene, flX, 0.08, 13.35, 1.2, 0.1, 3.2, new THREE.MeshLambertMaterial({ color: 0x6a7a58 }));
  laun.receiveShadow = true;
  const flGeo = new THREE.BufferGeometry();
  const flN = 18;
  const flPos = new Float32Array(flN * 3);
  const flPhase = [];
  for (let i = 0; i < flN; i++) {
    flPos[i * 3] = flX + (Math.random() - 0.5) * 5.2;
    flPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    flPos[i * 3 + 2] = flZ + (Math.random() - 0.5) * 4.2;
    flPhase.push(Math.random() * 6);
  }
  flGeo.setAttribute("position", new THREE.BufferAttribute(flPos, 3));
  const flMotes = new THREE.Points(flGeo, new THREE.PointsMaterial({ color: 0xd0e8a8, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(flMotes);
  MAP.floatMotes = flMotes;
  MAP.floatMotePhase = flPhase;
  const flBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  flBerm(-13.4, 15.35, 0.55, 1.2);
  flBerm(-9.0, 15.35, 0.55, 1.2);
  const flDrum = box(scene, -13.7, 0.55, 16.55, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-13.7, 0, 16.55), mesh: flDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const flDrum2 = box(scene, -8.55, 0.55, 16.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-8.55, 0, 16.7), mesh: flDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const flTruck = box(scene, -11.2, 0.65, 12.4, 1.5, 1.2, 1.4, rust);
  const flBed = box(scene, -11.2, 0.42, 10.7, 1.35, 0.65, 1.5, steel);
  MAP.floatTruck = new THREE.Vector3(-11.2, 0, 12.4);
  MAP.crates.push({ pos: MAP.floatTruck.clone(), mesh: flTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(-11.2, 0, 10.7), mesh: flBed, sx: 1.35, sy: 0.65, sz: 1.5 });

  // Southeast radial stacker — door gap north, swinging boom22 cover, discharge dust
  const stX = 23.6;
  const stZ = -26.2;
  const stMat = new THREE.MeshLambertMaterial({ color: 0x4a4034 });
  const stWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, stMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  stWall(stX, -28.65, 6.2, 0.4);
  stWall(20.65, stZ, 0.4, 4.5);
  stWall(26.55, stZ, 0.4, 4.5);
  stWall(22.15, -23.75, 1.7, 0.4);
  stWall(25.05, -23.75, 1.7, 0.4);
  box(scene, stX, 2.9, -23.75, 1.6, 0.36, 0.4, crateWood);
  box(scene, stX, 3.1, stZ, 6.0, 0.16, 4.8, rock);
  MAP.stackDoor = new THREE.Vector3(stX, 0, -23.9);
  MAP.stack = { on: false, x: stX - 1.6, z: stZ + 0.3, angle: 0.4 };
  const stFloor = box(scene, stX, 0.04, stZ, 5.4, 0.08, 4.2, concrete);
  stFloor.receiveShadow = true;
  const stLamp = new THREE.PointLight(0xffc080, 0.6, 11);
  stLamp.position.set(stX, 2.35, stZ);
  scene.add(stLamp);
  MAP.stackLamp = stLamp;
  const stRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0a060, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  stRing.rotation.x = -Math.PI / 2;
  stRing.position.copy(MAP.stackDoor).setY(0.05);
  scene.add(stRing);
  MAP.stackRing = stRing;
  const mastB = box(scene, stX, 1.7, stZ + 0.2, 0.45, 3.2, 0.45, steel);
  MAP.crates.push({ pos: new THREE.Vector3(stX, 0, stZ + 0.2), mesh: mastB, sx: 0.45, sy: 3.2, sz: 0.45 });
  const boom22B = new THREE.Group();
  const arm = box(scene, 1.6, 0, 0, 3.2, 0.22, 0.38, rust);
  const tip = box(scene, 3.15, -0.15, 0, 0.4, 0.55, 0.4, steel);
  boom22B.add(arm, tip);
  boom22B.position.set(stX, 1.55, stZ + 0.2);
  scene.add(boom22B);
  MAP.stackBoomMesh = boom22B;
  const boomCrate = { pos: new THREE.Vector3(stX + 1.6, 0, stZ + 0.2), mesh: boom22B, sx: 1.3, sy: 1.6, sz: 1.1, stack: true };
  MAP.crates.push(boomCrate);
  MAP.stackBoomCrate = boomCrate;
  MAP.stackBoom = { x: stX + 1.6, z: stZ + 0.2, dx: 0, dz: 0 };
  const stLever = box(scene, MAP.stack.x, 1.05, MAP.stack.z, 0.12, 0.7, 0.12, steel);
  MAP.stackLever = stLever;
  box(scene, MAP.stack.x, 0.5, MAP.stack.z, 0.32, 0.6, 0.32, rust);
  const discharge = box(scene, stX + 2.4, 1.15, stZ - 1.6, 1.3, 2.0, 1.1, new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.05 }));
  const dischargeCrate = { pos: new THREE.Vector3(stX + 2.4, 0, stZ - 1.6), mesh: discharge, sx: 1.3, sy: 2.1, sz: 1.1, walkOn: true, dead: true, stackDust: true };
  MAP.crates.push(dischargeCrate);
  MAP.stackDust = discharge;
  MAP.stackDustCrate = dischargeCrate;
  const stGeo = new THREE.BufferGeometry();
  const stN = 16;
  const stPos = new Float32Array(stN * 3);
  const stPhase = [];
  for (let i = 0; i < stN; i++) {
    stPos[i * 3] = stX + (Math.random() - 0.5) * 5.0;
    stPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    stPos[i * 3 + 2] = stZ + (Math.random() - 0.5) * 4.0;
    stPhase.push(Math.random() * 6);
  }
  stGeo.setAttribute("position", new THREE.BufferAttribute(stPos, 3));
  const stMotes = new THREE.Points(stGeo, new THREE.PointsMaterial({ color: 0xe0c090, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(stMotes);
  MAP.stackMotes = stMotes;
  MAP.stackMotePhase = stPhase;
  const stBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  stBerm(22.15, -23.15, 1.3, 0.5);
  stBerm(25.05, -23.15, 1.3, 0.5);
  const stDrum = box(scene, 21.7, 0.55, -24.35, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(21.7, 0, -24.35), mesh: stDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const stDrum2 = box(scene, 25.55, 0.55, -24.2, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(25.55, 0, -24.2), mesh: stDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const stTruck = box(scene, 28.6, 0.65, -26.4, 1.5, 1.2, 1.4, rust);
  const stBed = box(scene, 30.3, 0.42, -26.4, 1.5, 0.65, 1.35, steel);
  MAP.stackTruck = new THREE.Vector3(28.6, 0, -26.4);
  MAP.crates.push({ pos: MAP.stackTruck.clone(), mesh: stTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(30.3, 0, -26.4), mesh: stBed, sx: 1.5, sy: 0.65, sz: 1.35 });

  // Haul truckB — shuttle solid cover on the south road between pad and stacker
  const haulPath = [new THREE.Vector3(16.4, 0, -21.2), new THREE.Vector3(30.4, 0, -21.2)];
  MAP.haulPath = haulPath;
  MAP.haulT = 0;
  MAP.haulDir = 1;
  const haul = new THREE.Group();
  const haulCab = box(scene, -0.85, 0.7, 0, 1.1, 1.15, 1.35, rust);
  const haulBed = box(scene, 0.7, 0.48, 0, 1.7, 0.55, 1.45, steel);
  const haulOre = box(scene, 0.7, 0.9, 0, 1.3, 0.35, 1.1, rock);
  haul.add(haulCab, haulBed, haulOre);
  haul.position.copy(haulPath[0]);
  scene.add(haul);
  MAP.haulMesh = haul;
  const haulCrate = { pos: haulPath[0].clone(), mesh: haul, sx: 3.2, sy: 1.35, sz: 1.6, haul: true };
  MAP.crates.push(haulCrate);
  MAP.haulCrate = haulCrate;
  MAP.haulDx = 0;
  MAP.haulDz = 0;


  // North lime slaker — door gap south, paddle, milk launder shove + steam curtain
  const slXB = 2.4;
  const slZB = 30.1;
  const slMat = new THREE.MeshLambertMaterial({ color: 0x4a4638 });
  const slWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, slMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  slWall(slXB, 32.85, 6.3, 0.4);
  slWall(-0.7, slZB, 0.4, 5.1);
  slWall(5.5, slZB, 0.4, 5.1);
  slWall(0.55, 27.35, 2.05, 0.4);
  slWall(4.25, 27.35, 2.05, 0.4);
  box(scene, slXB, 2.9, 27.35, 1.7, 0.36, 0.4, crateWood);
  box(scene, slXB, 3.1, slZB, 6.2, 0.16, 5.4, rock);
  MAP.slakeDoor = new THREE.Vector3(slXB, 0, 27.5);
  MAP.slake = { on: false, x: slXB + 1.7, z: slZB - 0.35, spin: 0 };
  const slFloor = box(scene, slXB, 0.04, slZB, 5.6, 0.08, 4.8, concrete);
  slFloor.receiveShadow = true;
  const slLamp = new THREE.PointLight(0xe8d0a0, 0.7, 11);
  slLamp.position.set(slXB, 2.35, slZB);
  scene.add(slLamp);
  MAP.slakeLamp = slLamp;
  const slRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xe0d090, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  slRing.rotation.x = -Math.PI / 2;
  slRing.position.copy(MAP.slakeDoor).setY(0.05);
  scene.add(slRing);
  const slTank = box(scene, slXB - 0.4, 0.7, slZB + 0.3, 2.2, 1.25, 2.0, steel);
  MAP.crates.push({ pos: new THREE.Vector3(slXB - 0.4, 0, slZB + 0.3), mesh: slTank, sx: 2.2, sy: 0.85, sz: 2.0, walkOn: true });
  const slPaddle = box(scene, slXB - 0.4, 1.4, slZB + 0.3, 1.6, 0.08, 0.16, rust);
  MAP.slakePaddle = slPaddle;
  const slLever = box(scene, MAP.slake.x, 1.05, MAP.slake.z, 0.12, 0.7, 0.12, steel);
  MAP.slakeLever = slLever;
  box(scene, MAP.slake.x, 0.5, MAP.slake.z, 0.32, 0.6, 0.32, rust);
  const steam = box(scene, slXB, 1.25, 27.15, 1.7, 2.1, 0.55, new THREE.MeshBasicMaterial({ color: 0xe8e4d8, transparent: true, opacity: 0.04 }));
  const steamCrate = { pos: new THREE.Vector3(slXB, 0, 27.15), mesh: steam, sx: 1.7, sy: 2.1, sz: 0.7, walkOn: true, dead: true, slake: true };
  MAP.crates.push(steamCrate);
  MAP.slakeSteam = steam;
  MAP.slakeSteamCrate = steamCrate;
  const milkX = slXB;
  const milkZ = 24.6;
  MAP.milk = { x: milkX, z: milkZ, hx: 0.85, hz: 2.6, vz: -2.2 };
  const milkMesh = box(scene, milkX, 0.16, milkZ, 1.4, 0.22, 5.0, new THREE.MeshLambertMaterial({ color: 0xd8d2c0, transparent: true, opacity: 0.16 }));
  const milkCrate = { pos: new THREE.Vector3(milkX, 0, milkZ), mesh: milkMesh, sx: 1.4, sy: 1.2, sz: 5.0, walkOn: true, dead: true, milk: true };
  MAP.crates.push(milkCrate);
  MAP.milkMesh = milkMesh;
  MAP.milkCrate = milkCrate;
  const slGeo = new THREE.BufferGeometry();
  const slN = 14;
  const slPos = new Float32Array(slN * 3);
  const slPhase = [];
  for (let i = 0; i < slN; i++) {
    slPos[i * 3] = slXB + (Math.random() - 0.5) * 4.6;
    slPos[i * 3 + 1] = 0.3 + Math.random() * 2.0;
    slPos[i * 3 + 2] = slZB + (Math.random() - 0.5) * 4.2;
    slPhase.push(Math.random() * 6);
  }
  slGeo.setAttribute("position", new THREE.BufferAttribute(slPos, 3));
  const slMotes = new THREE.Points(slGeo, new THREE.PointsMaterial({ color: 0xf0e8d0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(slMotes);
  MAP.slakeMotes = slMotes;
  MAP.slakeMotePhase = slPhase;
  const slBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  slBerm(0.2, 26.7, 1.2, 0.5);
  slBerm(4.6, 26.7, 1.2, 0.5);
  const slDrum = box(scene, -0.2, 0.55, 26.15, 0.55, 1.1, 0.55, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-0.2, 0, 26.15), mesh: slDrum, sx: 0.55, sy: 1.1, sz: 0.55, drum: true });
  const slDrum2 = box(scene, 5.1, 0.55, 26.2, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(5.1, 0, 26.2), mesh: slDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const slTruck = box(scene, 6.6, 0.65, 25.2, 1.5, 1.2, 1.4, rust);
  const slBed = box(scene, 8.2, 0.42, 25.2, 1.45, 0.65, 1.3, steel);
  MAP.slakeTruck = new THREE.Vector3(6.6, 0, 25.2);
  MAP.crates.push({ pos: MAP.slakeTruck.clone(), mesh: slTruck, sx: 1.5, sy: 1.2, sz: 1.4 });
  MAP.crates.push({ pos: new THREE.Vector3(8.2, 0, 25.2), mesh: slBed, sx: 1.45, sy: 0.65, sz: 1.3 });

  // West aerial ropeway — door gap east, twin buckets as moving cover
  const rpX = -33.4;
  const rpZ = 4.2;
  const rpMat = new THREE.MeshLambertMaterial({ color: 0x3c4038 });
  const rpWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, rpMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  rpWall(rpX, 6.75, 5.5, 0.4);
  rpWall(rpX, 1.65, 5.5, 0.4);
  rpWall(-36.1, rpZ, 0.4, 4.7);
  rpWall(-31.85, 5.55, 0.4, 2.0);
  rpWall(-31.85, 2.85, 0.4, 2.0);
  box(scene, -31.85, 2.9, rpZ, 0.4, 0.36, 1.6, crateWood);
  box(scene, rpX, 3.1, rpZ, 5.4, 0.16, 5.0, rock);
  MAP.ropeDoor = new THREE.Vector3(-31.6, 0, rpZ);
  MAP.rope = { on: false, x: rpX + 1.3, z: rpZ + 1.15, t: 0, dir: 1 };
  const rpFloor = box(scene, rpX, 0.04, rpZ, 4.8, 0.08, 4.4, concrete);
  rpFloor.receiveShadow = true;
  const rpLamp = new THREE.PointLight(0xc8d0e0, 0.65, 10);
  rpLamp.position.set(rpX, 2.35, rpZ);
  scene.add(rpLamp);
  MAP.ropeLamp = rpLamp;
  const rpRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xb0c0d0, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  rpRing.rotation.x = -Math.PI / 2;
  rpRing.position.copy(MAP.ropeDoor).setY(0.05);
  scene.add(rpRing);
  const rpLever = box(scene, MAP.rope.x, 1.05, MAP.rope.z, 0.12, 0.7, 0.12, steel);
  MAP.ropeLever = rpLever;
  box(scene, MAP.rope.x, 0.5, MAP.rope.z, 0.32, 0.6, 0.32, rust);
  const towerX = -37.6;
  const zA = -5.4;
  const zB = 13.8;
  MAP.ropeSpan = { x: towerX, zA, zB };
  const towerMat = new THREE.MeshLambertMaterial({ color: 0x5a5648 });
  for (const tz of [zA, zB]) {
    const tw = box(scene, towerX, 2.4, tz, 0.45, 4.8, 0.45, towerMat);
    MAP.crates.push({ pos: new THREE.Vector3(towerX, 0, tz), mesh: tw, sx: 0.7, sy: 4.8, sz: 0.7 });
    box(scene, towerX, 4.7, tz, 1.1, 0.18, 1.1, steel);
  }
  const cableB = box(scene, towerX, 4.55, (zA + zB) * 0.5, 0.08, 0.08, zB - zA, steel);
  MAP.ropeCable = cableB;
  MAP.buckets = [];
  MAP.bucketMeshes = [];
  for (let i = 0; i < 2; i++) {
    const g = new THREE.Group();
    const tub = box(scene, 0, 1.15, 0, 1.15, 0.7, 1.15, rust);
    const bail = box(scene, 0, 2.3, 0, 0.08, 2.2, 0.08, steel);
    g.add(tub, bail);
    scene.add(g);
    const crate = { pos: new THREE.Vector3(towerX, 0, i === 0 ? zA : zB), mesh: g, sx: 1.2, sy: 1.7, sz: 1.2, bucket: true };
    MAP.crates.push(crate);
    MAP.buckets.push({ x: towerX, z: crate.pos.z, dx: 0, dz: 0, crate });
    MAP.bucketMeshes.push(g);
  }
  const dump = box(scene, towerX, 1.2, zA - 1.3, 1.4, 2.0, 0.7, new THREE.MeshBasicMaterial({ color: 0xc8b898, transparent: true, opacity: 0.04 }));
  const dumpCrateB = { pos: new THREE.Vector3(towerX, 0, zA - 1.3), mesh: dump, sx: 1.4, sy: 2.0, sz: 0.8, walkOn: true, dead: true, ropeDust: true };
  MAP.crates.push(dumpCrateB);
  MAP.ropeDust = dump;
  MAP.ropeDustCrate = dumpCrateB;
  MAP.ropeDustT = 0;
  const rpGeo = new THREE.BufferGeometry();
  const rpN = 12;
  const rpPos = new Float32Array(rpN * 3);
  const rpPhase = [];
  for (let i = 0; i < rpN; i++) {
    rpPos[i * 3] = rpX + (Math.random() - 0.5) * 4.2;
    rpPos[i * 3 + 1] = 0.3 + Math.random() * 1.8;
    rpPos[i * 3 + 2] = rpZ + (Math.random() - 0.5) * 3.6;
    rpPhase.push(Math.random() * 6);
  }
  rpGeo.setAttribute("position", new THREE.BufferAttribute(rpPos, 3));
  const rpMotes = new THREE.Points(rpGeo, new THREE.PointsMaterial({ color: 0xd0d4c8, size: 0.045, transparent: true, opacity: 0.38 }));
  scene.add(rpMotes);
  MAP.ropeMotes = rpMotes;
  MAP.ropeMotePhase = rpPhase;
  const rpBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  rpBerm(-31.2, 5.7, 0.5, 1.15);
  rpBerm(-31.2, 2.7, 0.5, 1.15);
  const rpDrum = box(scene, -30.7, 0.55, 5.9, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-30.7, 0, 5.9), mesh: rpDrum, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const rpDrum2 = box(scene, -30.75, 0.55, 2.5, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-30.75, 0, 2.5), mesh: rpDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const rpTruck = box(scene, -29.2, 0.65, 4.2, 1.45, 1.2, 1.35, rust);
  const rpBed = box(scene, -27.5, 0.42, 4.2, 1.4, 0.62, 1.25, steel);
  MAP.ropeTruck = new THREE.Vector3(-29.2, 0, 4.2);
  MAP.crates.push({ pos: MAP.ropeTruck.clone(), mesh: rpTruck, sx: 1.45, sy: 1.2, sz: 1.35 });
  MAP.crates.push({ pos: new THREE.Vector3(-27.5, 0, 4.2), mesh: rpBed, sx: 1.4, sy: 0.62, sz: 1.25 });


  // East sinter strand — door gap west through the east-wall notch, rideable grate car
  const siX = 44.6;
  const siZ = -12.15;
  const siMat = new THREE.MeshLambertMaterial({ color: 0x4a3428 });
  const siWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, siMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  siWall(siX, -14.45, 4.8, 0.4);
  siWall(siX, -9.85, 4.8, 0.4);
  siWall(46.85, siZ, 0.4, 4.2);
  siWall(43.55, -13.55, 0.4, 1.4);
  siWall(43.55, -10.75, 0.4, 1.4);
  box(scene, 43.55, 2.9, siZ, 0.4, 0.36, 1.5, crateWood);
  box(scene, siX, 3.05, siZ, 4.6, 0.16, 4.4, rock);
  MAP.sinterDoor = new THREE.Vector3(43.35, 0, siZ);
  MAP.sinter = { on: false, x: siX - 1.2, z: siZ + 0.85 };
  const siFloor = box(scene, siX, 0.04, siZ, 4.2, 0.08, 3.8, concrete);
  siFloor.receiveShadow = true;
  const siLamp = new THREE.PointLight(0xff8040, 0.7, 11);
  siLamp.position.set(siX, 2.3, siZ);
  scene.add(siLamp);
  MAP.sinterLamp = siLamp;
  const siRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xe07040, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
  );
  siRing.rotation.x = -Math.PI / 2;
  siRing.position.copy(MAP.sinterDoor).setY(0.05);
  scene.add(siRing);
  const grate = box(scene, siX + 0.2, 0.35, siZ, 2.4, 0.16, 1.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(siX + 0.2, 0, siZ), mesh: grate, sx: 2.4, sy: 0.7, sz: 1.5, walkOn: true });
  const siLever = box(scene, MAP.sinter.x, 1.05, MAP.sinter.z, 0.12, 0.55, 0.12, amber);
  MAP.sinterLever = siLever;
  const strand = new THREE.Group();
  const bedBBB = box(scene, 0, 0.42, 0, 2.1, 0.28, 1.35, steel);
  const cakeMesh = box(scene, 0, 0.68, 0, 1.5, 0.28, 1.0, new THREE.MeshLambertMaterial({ color: 0xc06030 }));
  strand.add(bedBBB, cakeMesh);
  strand.position.set(44.4, 0, siZ);
  scene.add(strand);
  MAP.strandMesh = strand;
  const strandCrate = { pos: new THREE.Vector3(44.4, 0, siZ), mesh: strand, sx: 2.2, sy: 1.15, sz: 1.45, walkOn: true, strand: true };
  MAP.crates.push(strandCrate);
  MAP.strandCrate = strandCrate;
  MAP.strand = { on: false, t: 0, dir: 1, x: 44.4, z: siZ, dx: 0 };
  MAP.sinter.on = false;
  const gateB = box(scene, 40.0, 1.15, siZ, 0.42, 2.3, 3.7, steel);
  const gateCrateB = { pos: new THREE.Vector3(40.0, 0, siZ), mesh: gateB, sx: 0.42, sy: 2.3, sz: 3.7, gateB: true };
  MAP.crates.push(gateCrateB);
  MAP.sinterGate = gateB;
  MAP.sinterGateCrate = gateCrateB;
  const quench = box(scene, 32.2, 1.25, siZ, 1.5, 2.2, 1.6, new THREE.MeshBasicMaterial({ color: 0xc8d8e0, transparent: true, opacity: 0.04 }));
  const quenchCrate = { pos: new THREE.Vector3(32.2, 0, siZ), mesh: quench, sx: 1.6, sy: 2.2, sz: 1.7, walkOn: true, dead: true, quench: true };
  MAP.crates.push(quenchCrate);
  MAP.quench = quench;
  MAP.quenchCrate = quenchCrate;
  MAP.strandDustT = 0;
  const rails = box(scene, 38.2, 0.08, siZ, 12.4, 0.08, 0.35, rust);
  MAP.crates.push({ pos: new THREE.Vector3(38.2, 0, siZ), mesh: rails, sx: 12.4, sy: 0.2, sz: 0.35, walkOn: true });
  const siMotesGeo = new THREE.BufferGeometry();
  const siN = 12;
  const siPos = new Float32Array(siN * 3);
  const siPhase = [];
  for (let i = 0; i < siN; i++) {
    siPos[i * 3] = siX + (Math.random() - 0.5) * 3.6;
    siPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    siPos[i * 3 + 2] = siZ + (Math.random() - 0.5) * 3.2;
    siPhase.push(Math.random() * 6);
  }
  siMotesGeo.setAttribute("position", new THREE.BufferAttribute(siPos, 3));
  const siMotes = new THREE.Points(siMotesGeo, new THREE.PointsMaterial({ color: 0xffb070, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(siMotes);
  MAP.sinterMotes = siMotes;
  MAP.sinterMotePhase = siPhase;
  const siBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  siBerm(42.7, -14.7, 1.2, 0.5);
  siBerm(42.7, -9.6, 1.2, 0.5);
  const siDrum = box(scene, 43.0, 0.55, -14.55, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(43.0, 0, -14.55), mesh: siDrum, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const siDrum2 = box(scene, 43.05, 0.55, -9.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(43.05, 0, -9.7), mesh: siDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const siTruck = box(scene, 45.4, 0.65, -16.2, 1.45, 1.2, 1.35, rust);
  const siBed = box(scene, 45.4, 0.42, -17.6, 1.4, 0.62, 1.2, steel);
  MAP.sinterTruck = new THREE.Vector3(45.4, 0, -16.2);
  MAP.crates.push({ pos: MAP.sinterTruck.clone(), mesh: siTruck, sx: 1.45, sy: 1.2, sz: 1.35 });
  MAP.crates.push({ pos: new THREE.Vector3(45.4, 0, -17.6), mesh: siBed, sx: 1.4, sy: 0.62, sz: 1.2 });

  // West sampler house — door gap east through the west-wall notch, swinging cutter boom22B
  const saX = -44.5;
  const saZ = 15.75;
  const saMat = new THREE.MeshLambertMaterial({ color: 0x3a4038 });
  const saWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, saMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  saWall(saX, 13.65, 4.6, 0.4);
  saWall(saX, 17.85, 4.6, 0.4);
  saWall(-46.7, saZ, 0.4, 3.8);
  saWall(-42.35, 14.45, 0.4, 1.2);
  saWall(-42.35, 17.05, 0.4, 1.2);
  box(scene, -42.35, 2.9, saZ, 0.4, 0.36, 1.5, crateWood);
  box(scene, saX, 3.05, saZ, 4.4, 0.16, 4.0, rock);
  MAP.sampleDoor = new THREE.Vector3(-42.15, 0, saZ);
  MAP.sample = { on: false, x: saX + 1.15, z: saZ - 1.15, ang: 0.2 };
  const saFloor = box(scene, saX, 0.04, saZ, 4.0, 0.08, 3.6, concrete);
  saFloor.receiveShadow = true;
  const saLamp = new THREE.PointLight(0xc8d0a0, 0.6, 11);
  saLamp.position.set(saX, 2.3, saZ);
  scene.add(saLamp);
  MAP.sampleLamp = saLamp;
  const saRing = new THREE.Mesh(
    new THREE.RingGeometry(1.02, 1.26, 16),
    new THREE.MeshBasicMaterial({ color: 0xc8d080, transparent: true, opacity: 0.42, side: THREE.DoubleSide })
  );
  saRing.rotation.x = -Math.PI / 2;
  saRing.position.copy(MAP.sampleDoor).setY(0.05);
  scene.add(saRing);
  const saLever = box(scene, MAP.sample.x, 1.05, MAP.sample.z, 0.12, 0.55, 0.12, amber);
  MAP.sampleLever = saLever;
  const pivot = new THREE.Group();
  pivot.position.set(-41.2, 1.15, saZ);
  const armB = box(scene, 1.5, 0, 0, 3.0, 0.22, 0.36, rust);
  const head = box(scene, 3.05, 0, 0, 0.55, 0.55, 0.7, steel);
  pivot.add(armB, head);
  scene.add(pivot);
  MAP.samplePivot = pivot;
  const tipCrate = { pos: new THREE.Vector3(-38.1, 0, saZ), mesh: head, sx: 0.7, sy: 1.5, sz: 0.8, walkOn: true, sample: true };
  MAP.crates.push(tipCrate);
  MAP.sampleTip = tipCrate;
  MAP.sampleBoom = { x: -38.1, z: saZ, dx: 0, dz: 0 };
  MAP.reject = { x: -36.4, z: saZ, hx: 2.4, hz: 0.7, vx: 2.3 };
  const rejectMesh = box(scene, MAP.reject.x, 0.2, saZ, 4.6, 0.16, 1.15, new THREE.MeshLambertMaterial({ color: 0x6a6048 }));
  MAP.rejectMesh = rejectMesh;
  const cutDust = box(scene, -39.1, 1.2, saZ, 0.7, 2.1, 2.4, new THREE.MeshBasicMaterial({ color: 0xd0c8a8, transparent: true, opacity: 0.04 }));
  const cutCrate = { pos: new THREE.Vector3(-39.1, 0, saZ), mesh: cutDust, sx: 0.7, sy: 2.1, sz: 2.4, walkOn: true, dead: true, sampleDust: true };
  MAP.crates.push(cutCrate);
  MAP.sampleDust = cutDust;
  MAP.sampleDustCrate = cutCrate;
  const saMotesGeo = new THREE.BufferGeometry();
  const saN = 12;
  const saPos = new Float32Array(saN * 3);
  const saPhase = [];
  for (let i = 0; i < saN; i++) {
    saPos[i * 3] = saX + (Math.random() - 0.5) * 3.4;
    saPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    saPos[i * 3 + 2] = saZ + (Math.random() - 0.5) * 3.0;
    saPhase.push(Math.random() * 6);
  }
  saMotesGeo.setAttribute("position", new THREE.BufferAttribute(saPos, 3));
  const saMotes = new THREE.Points(saMotesGeo, new THREE.PointsMaterial({ color: 0xe0d8b0, size: 0.045, transparent: true, opacity: 0.38 }));
  scene.add(saMotes);
  MAP.sampleMotes = saMotes;
  MAP.sampleMotePhase = saPhase;
  const saBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  saBerm(-42.6, 13.4, 0.5, 1.15);
  saBerm(-42.6, 18.1, 0.5, 1.15);
  const saDrum = box(scene, -42.9, 0.55, 13.55, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-42.9, 0, 13.55), mesh: saDrum, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const saDrum2 = box(scene, -42.85, 0.55, 18.0, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-42.85, 0, 18.0), mesh: saDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const saTruck = box(scene, -45.2, 0.65, 11.4, 1.45, 1.2, 1.35, rust);
  const saBed = box(scene, -45.2, 0.42, 9.9, 1.4, 0.62, 1.2, steel);
  MAP.sampleTruck = new THREE.Vector3(-45.2, 0, 11.4);
  MAP.crates.push({ pos: MAP.sampleTruck.clone(), mesh: saTruck, sx: 1.45, sy: 1.2, sz: 1.35 });
  MAP.crates.push({ pos: new THREE.Vector3(-45.2, 0, 9.9), mesh: saBed, sx: 1.4, sy: 0.62, sz: 1.2 });

  return MAP;
}


  // Northeast pellet disc — door gap south, spinning pan as moving cover, chute shove
  const peX = 32.2;
  const peZ = 40.45;
  const peMat = new THREE.MeshLambertMaterial({ color: 0x4a4034 });
  const peWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, peMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  peWall(peX, 42.45, 4.8, 0.4);
  peWall(29.7, peZ, 0.4, 3.6);
  peWall(34.7, peZ, 0.4, 3.6);
  peWall(30.7, 38.45, 1.5, 0.4);
  peWall(33.7, 38.45, 1.5, 0.4);
  box(scene, peX, 2.9, 38.45, 1.6, 0.4, 0.4, peMat);
  MAP.pelletDoor = new THREE.Vector3(peX, 0, 38.45);
  MAP.pellet = { on: false, x: peX - 1.4, z: peZ - 0.4 };
  const peLamp = new THREE.PointLight(0xffb060, 0.45, 9, 2);
  peLamp.position.set(peX, 2.6, peZ);
  scene.add(peLamp);
  MAP.pelletLamp = peLamp;
  const peRing = box(scene, peX, 0.05, 38.45, 1.5, 0.04, 0.35, amber);
  MAP.pelletRing = peRing;
  const peLever = box(scene, MAP.pellet.x, 1.05, MAP.pellet.z, 0.12, 0.55, 0.12, amber);
  MAP.pelletLever = peLever;
  const pePan = box(scene, peX, 0.42, 36.15, 3.6, 0.18, 3.6, steel);
  MAP.crates.push({ pos: new THREE.Vector3(peX, 0, 36.15), mesh: pePan, sx: 3.6, sy: 0.28, sz: 3.6, walkOn: true });
  const peHub = box(scene, peX, 0.72, 36.15, 0.45, 0.55, 0.45, rust);
  MAP.discMesh = peHub;
  MAP.disc = { x: peX, z: 36.15, ang: 0, dx: 0, dz: 0 };
  const peArm = box(scene, peX + 1.1, 0.78, 36.15, 1.8, 0.16, 0.28, rust);
  MAP.discArm = peArm;
  const peDust = box(scene, peX, 1.35, 38.45, 1.45, 2.2, 0.28, new THREE.MeshLambertMaterial({ color: 0xc8a070, transparent: true, opacity: 0.05 }));
  MAP.pelletDust = peDust;
  MAP.pelletDustCrate = { pos: new THREE.Vector3(peX, 0, 38.45), mesh: peDust, sx: 1.45, sy: 2.2, sz: 0.28, dead: true };
  MAP.crates.push(MAP.pelletDustCrate);
  MAP.chute = { x: peX, z: 33.4, hx: 0.7, hz: 2.4, vz: -2.4 };
  const peChute = box(scene, peX, 0.12, 33.4, 1.15, 0.12, 4.6, new THREE.MeshLambertMaterial({ color: 0x8a6840, transparent: true, opacity: 0.45 }));
  MAP.chuteMesh = peChute;
  const peMotesGeo = new THREE.BufferGeometry();
  const peN = 12;
  const pePos = new Float32Array(peN * 3);
  const pePhase = [];
  for (let i = 0; i < peN; i++) {
    pePos[i * 3] = peX + (Math.random() - 0.5) * 3.4;
    pePos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    pePos[i * 3 + 2] = peZ + (Math.random() - 0.5) * 3.0;
    pePhase.push(Math.random() * 6);
  }
  peMotesGeo.setAttribute("position", new THREE.BufferAttribute(pePos, 3));
  const peMotes = new THREE.Points(peMotesGeo, new THREE.PointsMaterial({ color: 0xe0b070, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(peMotes);
  MAP.pelletMotes = peMotes;
  MAP.pelletMotePhase = pePhase;
  const peBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  peBerm(30.35, 38.15, 1.15, 0.5);
  peBerm(34.05, 38.15, 1.15, 0.5);
  const peDrum = box(scene, 30.2, 0.55, 38.05, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(30.2, 0, 38.05), mesh: peDrum, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const peDrum2 = box(scene, 34.2, 0.55, 38.05, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(34.2, 0, 38.05), mesh: peDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const peTruck = box(scene, 35.6, 0.65, 41.6, 1.45, 1.2, 1.35, rust);
  const peBed = box(scene, 37.1, 0.42, 41.6, 1.4, 0.62, 1.2, steel);
  MAP.pelletTruck = new THREE.Vector3(35.6, 0, 41.6);
  MAP.crates.push({ pos: MAP.pelletTruck.clone(), mesh: peTruck, sx: 1.45, sy: 1.2, sz: 1.35 });
  MAP.crates.push({ pos: new THREE.Vector3(37.1, 0, 41.6), mesh: peBed, sx: 1.4, sy: 0.62, sz: 1.2 });

  // Southwest clarifier — door gap north, sweeping bridge cover, underflow shove + dust curtain
  const clX = -36.5;
  const clZ = -40.2;
  const clMat = new THREE.MeshLambertMaterial({ color: 0x3a4448 });
  const clWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, clMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  clWall(clX, -42.25, 4.8, 0.4);
  clWall(-38.95, clZ, 0.4, 3.6);
  clWall(-34.05, clZ, 0.4, 3.6);
  clWall(-37.7, -38.15, 1.5, 0.4);
  clWall(-35.3, -38.15, 1.5, 0.4);
  box(scene, clX, 2.9, -38.15, 1.6, 0.4, 0.4, clMat);
  MAP.clarDoor = new THREE.Vector3(clX, 0, -38.15);
  MAP.clar = { on: false, x: clX + 1.35, z: clZ + 0.35 };
  const clLamp = new THREE.PointLight(0x80c0d0, 0.4, 9, 2);
  clLamp.position.set(clX, 2.6, clZ);
  scene.add(clLamp);
  MAP.clarLamp = clLamp;
  const clRing = box(scene, clX, 0.05, -38.15, 1.5, 0.04, 0.35, amber);
  MAP.clarRing = clRing;
  const clLever = box(scene, MAP.clar.x, 1.05, MAP.clar.z, 0.12, 0.55, 0.12, amber);
  MAP.clarLever = clLever;
  const clTank = box(scene, clX, 0.22, clZ, 3.4, 0.28, 2.6, new THREE.MeshLambertMaterial({ color: 0x4a6870, transparent: true, opacity: 0.55 }));
  MAP.clarTank = clTank;
  const clBridge = box(scene, clX, 1.15, clZ, 0.55, 0.22, 2.4, steel);
  MAP.clarBridgeMesh = clBridge;
  MAP.clarBridge = { x: clX, z: clZ, dx: 0, dz: 0, phase: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(clX, 0, clZ), mesh: clBridge, sx: 0.55, sy: 1.4, sz: 2.4 });
  const clDust = box(scene, clX, 1.35, -38.15, 1.45, 2.2, 0.28, new THREE.MeshLambertMaterial({ color: 0xa0c8d0, transparent: true, opacity: 0.05 }));
  MAP.clarDust = clDust;
  MAP.clarDustCrate = { pos: new THREE.Vector3(clX, 0, -38.15), mesh: clDust, sx: 1.45, sy: 2.2, sz: 0.28, dead: true };
  MAP.crates.push(MAP.clarDustCrate);
  MAP.under = { x: -30.4, z: -36.4, hx: 5.6, hz: 0.7, vx: 2.2 };
  const clUnder = box(scene, -30.4, 0.1, -36.4, 11.2, 0.1, 1.15, new THREE.MeshLambertMaterial({ color: 0x6a9098, transparent: true, opacity: 0.4 }));
  MAP.underMesh = clUnder;
  const clMotesGeo = new THREE.BufferGeometry();
  const clN = 12;
  const clPos = new Float32Array(clN * 3);
  const clPhase = [];
  for (let i = 0; i < clN; i++) {
    clPos[i * 3] = clX + (Math.random() - 0.5) * 3.2;
    clPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    clPos[i * 3 + 2] = clZ + (Math.random() - 0.5) * 2.6;
    clPhase.push(Math.random() * 6);
  }
  clMotesGeo.setAttribute("position", new THREE.BufferAttribute(clPos, 3));
  const clMotes = new THREE.Points(clMotesGeo, new THREE.PointsMaterial({ color: 0x90d0d8, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(clMotes);
  MAP.clarMotes = clMotes;
  MAP.clarMotePhase = clPhase;
  const clBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  clBerm(-38.2, -37.9, 1.15, 0.5);
  clBerm(-34.8, -37.9, 1.15, 0.5);
  const clDrum = box(scene, -38.35, 0.55, -37.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-38.35, 0, -37.7), mesh: clDrum, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const clDrum2 = box(scene, -34.65, 0.55, -37.7, 0.52, 1.08, 0.52, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-34.65, 0, -37.7), mesh: clDrum2, sx: 0.52, sy: 1.08, sz: 0.52, drum: true });
  const clTruck = box(scene, -40.4, 0.65, -41.2, 1.45, 1.2, 1.35, rust);
  const clBed = box(scene, -40.4, 0.42, -42.6, 1.4, 0.62, 1.2, steel);
  MAP.clarTruck = new THREE.Vector3(-40.4, 0, -41.2);
  MAP.crates.push({ pos: MAP.clarTruck.clone(), mesh: clTruck, sx: 1.45, sy: 1.2, sz: 1.35 });
  MAP.crates.push({ pos: new THREE.Vector3(-40.4, 0, -42.6), mesh: clBed, sx: 1.4, sy: 0.62, sz: 1.2 });


  // North reagent silo — door gap south, screw conveyor shove, dust curtain
  const siX = 5.2;
  const siZ = 40.6;
  const siloMat = new THREE.MeshLambertMaterial({ color: 0x4a4638 });
  const siloWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, siloMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  siloWall(siX, 42.55, 4.6, 0.4);
  siloWall(2.7, siZ, 0.4, 3.5);
  siloWall(7.7, siZ, 0.4, 3.5);
  siloWall(3.7, 38.65, 1.4, 0.4);
  siloWall(6.7, 38.65, 1.4, 0.4);
  box(scene, siX, 2.9, 38.65, 1.5, 0.4, 0.4, siloMat);
  const siloBin = box(scene, siX, 1.7, 41.15, 1.6, 2.4, 1.6, rust);
  MAP.crates.push({ pos: new THREE.Vector3(siX, 0, 41.15), mesh: siloBin, sx: 1.6, sy: 3.2, sz: 1.6 });
  MAP.siloDoor = new THREE.Vector3(siX, 0, 38.65);
  MAP.silo = { on: false, x: siX + 1.35, z: siZ - 0.2 };
  const siloLamp = new THREE.PointLight(0xe0c070, 0.4, 8, 2);
  siloLamp.position.set(siX, 2.55, siZ);
  scene.add(siloLamp);
  MAP.siloLamp = siloLamp;
  const siloRing = box(scene, siX, 0.05, 38.65, 1.4, 0.04, 0.32, amber);
  MAP.siloRing = siloRing;
  const siloLever = box(scene, MAP.silo.x, 1.05, MAP.silo.z, 0.12, 0.55, 0.12, amber);
  MAP.siloLever = siloLever;
  MAP.screw = { x: 11.2, z: 37.35, hx: 3.6, hz: 0.55, vx: 2.15 };
  const screwBed = box(scene, 11.2, 0.28, 37.35, 7.2, 0.16, 0.7, steel);
  MAP.crates.push({ pos: new THREE.Vector3(11.2, 0, 37.35), mesh: screwBed, sx: 7.2, sy: 0.2, sz: 0.7, walkOn: true });
  const screwFlight = box(scene, 11.2, 0.52, 37.35, 6.4, 0.18, 0.28, rust);
  MAP.screwMesh = screwFlight;
  const siloDust = box(scene, siX, 1.35, 38.65, 1.35, 2.1, 0.26, new THREE.MeshLambertMaterial({ color: 0xd0c090, transparent: true, opacity: 0.05 }));
  MAP.siloDust = siloDust;
  MAP.siloDustCrate = { pos: new THREE.Vector3(siX, 0, 38.65), mesh: siloDust, sx: 1.35, sy: 2.1, sz: 0.26, dead: true };
  MAP.crates.push(MAP.siloDustCrate);
  const siloMotesGeo = new THREE.BufferGeometry();
  const siloN = 10;
  const siloPos = new Float32Array(siloN * 3);
  const siloPhase = [];
  for (let i = 0; i < siloN; i++) {
    siloPos[i * 3] = siX + (Math.random() - 0.5) * 3.2;
    siloPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    siloPos[i * 3 + 2] = siZ + (Math.random() - 0.5) * 2.8;
    siloPhase.push(Math.random() * 6);
  }
  siloMotesGeo.setAttribute("position", new THREE.BufferAttribute(siloPos, 3));
  const siloMotes = new THREE.Points(siloMotesGeo, new THREE.PointsMaterial({ color: 0xe0d090, size: 0.05, transparent: true, opacity: 0.38 }));
  scene.add(siloMotes);
  MAP.siloMotes = siloMotes;
  MAP.siloMotePhase = siloPhase;
  const siloBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  siloBerm(3.35, 38.35, 1.1, 0.48);
  siloBerm(7.05, 38.35, 1.1, 0.48);
  const siloDrum = box(scene, 3.2, 0.55, 38.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(3.2, 0, 38.15), mesh: siloDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const siloDrum2 = box(scene, 7.15, 0.55, 38.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(7.15, 0, 38.15), mesh: siloDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const siloTruck = box(scene, 2.2, 0.65, 42.4, 1.4, 1.15, 1.3, rust);
  const siloBed = box(scene, 2.2, 0.4, 43.7, 1.3, 0.55, 1.1, steel);
  MAP.siloTruck = new THREE.Vector3(2.2, 0, 42.4);
  MAP.crates.push({ pos: MAP.siloTruck.clone(), mesh: siloTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(2.2, 0, 43.7), mesh: siloBed, sx: 1.3, sy: 0.55, sz: 1.1 });


  // South jig house — door gap north, oscillating deckB cover, hutch shove west, dust curtain
  const jgX = -17.85;
  const jgZ = -42.95;
  const jigMat = new THREE.MeshLambertMaterial({ color: 0x3e3a32 });
  const jigWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.5, z, sx, 3.0, sz, jigMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.0, sz });
    return m;
  };
  jigWall(jgX, -45.35, 4.7, 0.4);
  jigWall(-20.25, jgZ, 0.4, 3.6);
  jigWall(-15.45, jgZ, 0.4, 3.6);
  jigWall(-19.05, -40.55, 1.45, 0.4);
  jigWall(-16.65, -40.55, 1.45, 0.4);
  box(scene, jgX, 2.85, -40.55, 1.5, 0.38, 0.4, jigMat);
  const jigDeckMesh = box(scene, jgX, 0.42, jgZ + 0.15, 2.1, 0.28, 1.35, steel);
  MAP.jigDeckMesh = jigDeckMesh;
  MAP.jigDeck = { x: jgX, z: jgZ + 0.15, phase: 0, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(jgX, 0, jgZ + 0.15), mesh: jigDeckMesh, sx: 2.1, sy: 0.85, sz: 1.35, walkOn: true });
  MAP.jigDeckCrate = MAP.crates[MAP.crates.length - 1];
  MAP.jigDoor = new THREE.Vector3(jgX, 0, -40.55);
  MAP.jig = { on: false, x: jgX + 1.35, z: jgZ + 0.2 };
  const jigLamp = new THREE.PointLight(0xe0b060, 0.4, 8, 2);
  jigLamp.position.set(jgX, 2.5, jgZ);
  scene.add(jigLamp);
  MAP.jigLamp = jigLamp;
  const jigRing = box(scene, jgX, 0.05, -40.55, 1.4, 0.04, 0.32, amber);
  MAP.jigRing = jigRing;
  const jigLever = box(scene, MAP.jig.x, 1.05, MAP.jig.z, 0.12, 0.55, 0.12, amber);
  MAP.jigLever = jigLever;
  const jigDust = box(scene, jgX, 1.15, -40.55, 1.4, 2.1, 0.22, sand);
  jigDust.material = new THREE.MeshLambertMaterial({ color: 0xc8b080, transparent: true, opacity: 0.04 });
  MAP.jigDust = jigDust;
  MAP.jigDustCrate = { pos: new THREE.Vector3(jgX, 0, -40.55), mesh: jigDust, sx: 1.4, sy: 2.1, sz: 0.26, dead: true };
  MAP.crates.push(MAP.jigDustCrate);
  const hutchMesh = box(scene, -21.55, 0.18, jgZ, 1.6, 0.12, 1.3, oil);
  hutchMesh.material = new THREE.MeshLambertMaterial({ color: 0x6a5830, transparent: true, opacity: 0.4 });
  MAP.hutchMesh = hutchMesh;
  MAP.hutch = { x: -21.55, z: jgZ, hx: 0.85, hz: 0.7, vx: -2.2 };
  const jigMotesGeo = new THREE.BufferGeometry();
  const jigN = 10;
  const jigPos = new Float32Array(jigN * 3);
  const jigPhase = [];
  for (let i = 0; i < jigN; i++) {
    jigPos[i * 3] = jgX + (Math.random() - 0.5) * 3.2;
    jigPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    jigPos[i * 3 + 2] = jgZ + (Math.random() - 0.5) * 2.6;
    jigPhase.push(Math.random() * 6);
  }
  jigMotesGeo.setAttribute("position", new THREE.BufferAttribute(jigPos, 3));
  const jigMotes = new THREE.Points(jigMotesGeo, new THREE.PointsMaterial({ color: 0xe0c890, size: 0.05, transparent: true, opacity: 0.38 }));
  scene.add(jigMotes);
  MAP.jigMotes = jigMotes;
  MAP.jigMotePhase = jigPhase;
  const jigBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  jigBerm(-19.35, -40.15, 1.05, 0.46);
  jigBerm(-16.35, -40.15, 1.05, 0.46);
  const jigDrum = box(scene, -19.5, 0.55, -39.85, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-19.5, 0, -39.85), mesh: jigDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const jigDrum2 = box(scene, -16.2, 0.55, -39.85, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-16.2, 0, -39.85), mesh: jigDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const jigTruck = box(scene, -17.8, 0.65, -46.6, 1.4, 1.15, 1.3, rust);
  const jigBed = box(scene, -17.8, 0.4, -45.4, 1.3, 0.55, 1.05, steel);
  MAP.jigTruck = new THREE.Vector3(-17.8, 0, -46.6);
  MAP.crates.push({ pos: MAP.jigTruck.clone(), mesh: jigTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(-17.8, 0, -45.4), mesh: jigBed, sx: 1.3, sy: 0.55, sz: 1.05 });

  // North rotary cooler — door gap south, rideable kiln car, quench mist blocks hitscan
  const coX = 18.85;
  const coZ = 42.55;
  const coolMat = new THREE.MeshLambertMaterial({ color: 0x4a3830 });
  const coolWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, coolMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  coolWall(coX, 44.85, 4.7, 0.4);
  coolWall(16.45, coZ, 0.4, 3.5);
  coolWall(21.25, coZ, 0.4, 3.5);
  coolWall(17.65, 40.35, 1.4, 0.4);
  coolWall(20.05, 40.35, 1.4, 0.4);
  box(scene, coX, 2.9, 40.35, 1.5, 0.4, 0.4, coolMat);
  const coolShell = box(scene, coX, 1.15, coZ + 0.2, 2.4, 1.15, 1.15, rust);
  MAP.coolShell = coolShell;
  const coolCarMesh = box(scene, coX, 0.48, coZ + 0.15, 1.35, 0.32, 1.05, steel);
  MAP.coolCarMesh = coolCarMesh;
  MAP.coolCar = { x: coX, z: coZ + 0.15, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(coX, 0, coZ + 0.15), mesh: coolCarMesh, sx: 1.35, sy: 0.9, sz: 1.05, walkOn: true });
  MAP.coolCarCrate = MAP.crates[MAP.crates.length - 1];
  MAP.coolDoor = new THREE.Vector3(coX, 0, 40.35);
  MAP.cool = { on: false, x: coX - 1.35, z: coZ - 0.15 };
  const coolLamp = new THREE.PointLight(0xff7040, 0.45, 8, 2);
  coolLamp.position.set(coX, 2.55, coZ);
  scene.add(coolLamp);
  MAP.coolLamp = coolLamp;
  const coolRing = box(scene, coX, 0.05, 40.35, 1.4, 0.04, 0.32, amber);
  MAP.coolRing = coolRing;
  const coolLever = box(scene, MAP.cool.x, 1.05, MAP.cool.z, 0.12, 0.55, 0.12, amber);
  MAP.coolLever = coolLever;
  const coolDust = box(scene, coX, 1.15, 40.35, 1.4, 2.1, 0.22, sand);
  coolDust.material = new THREE.MeshLambertMaterial({ color: 0xd0c0a0, transparent: true, opacity: 0.04 });
  MAP.coolDust = coolDust;
  MAP.coolDustCrate = { pos: new THREE.Vector3(coX, 0, 40.35), mesh: coolDust, sx: 1.4, sy: 2.1, sz: 0.26, dead: true };
  MAP.crates.push(MAP.coolDustCrate);
  const quenchMesh = box(scene, coX, 0.16, 39.35, 1.5, 0.1, 1.15, oil);
  quenchMesh.material = new THREE.MeshLambertMaterial({ color: 0x88a0a8, transparent: true, opacity: 0.35 });
  MAP.quenchMesh = quenchMesh;
  MAP.quench = { x: coX, z: 39.35, hx: 0.8, hz: 0.6, vz: -2.15 };
  const coolMotesGeo = new THREE.BufferGeometry();
  const coolN = 10;
  const coolPos = new Float32Array(coolN * 3);
  const coolPhase = [];
  for (let i = 0; i < coolN; i++) {
    coolPos[i * 3] = coX + (Math.random() - 0.5) * 3.0;
    coolPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    coolPos[i * 3 + 2] = coZ + (Math.random() - 0.5) * 2.6;
    coolPhase.push(Math.random() * 6);
  }
  coolMotesGeo.setAttribute("position", new THREE.BufferAttribute(coolPos, 3));
  const coolMotes = new THREE.Points(coolMotesGeo, new THREE.PointsMaterial({ color: 0xf0c0a0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(coolMotes);
  MAP.coolMotes = coolMotes;
  MAP.coolMotePhase = coolPhase;
  const coolBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  coolBerm(17.35, 40.05, 1.05, 0.46);
  coolBerm(20.35, 40.05, 1.05, 0.46);
  const coolDrum = box(scene, 17.2, 0.55, 39.75, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(17.2, 0, 39.75), mesh: coolDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const coolDrum2 = box(scene, 20.5, 0.55, 39.75, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(20.5, 0, 39.75), mesh: coolDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const coolTruck = box(scene, 22.8, 0.65, 43.4, 1.4, 1.15, 1.3, rust);
  const coolBed = box(scene, 24.1, 0.4, 43.4, 1.15, 0.55, 1.2, steel);
  MAP.coolTruck = new THREE.Vector3(22.8, 0, 43.4);
  MAP.crates.push({ pos: MAP.coolTruck.clone(), mesh: coolTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(24.1, 0, 43.4), mesh: coolBed, sx: 1.15, sy: 0.55, sz: 1.2 });


  // Southwest baghouse — door gap north, shaking bag rack cover, fines flume shove, dust curtain
  const bgX = -8.6;
  const bgZ = -46.2;
  const bagMat = new THREE.MeshLambertMaterial({ color: 0x3e4038 });
  const bagWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, bagMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  bagWall(bgX, -47.95, 4.6, 0.35);
  bagWall(-10.85, bgZ, 0.35, 3.5);
  bagWall(-6.35, bgZ, 0.35, 3.5);
  bagWall(-9.7, -44.45, 1.45, 0.35);
  bagWall(-7.5, -44.45, 1.45, 0.35);
  box(scene, bgX, 2.9, -44.45, 1.5, 0.38, 0.35, bagMat);
  const bagRackMesh = box(scene, bgX, 1.15, bgZ, 1.7, 1.35, 1.15, steel);
  MAP.bagRackMesh = bagRackMesh;
  MAP.bagRack = { x: bgX, z: bgZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(bgX, 0, bgZ), mesh: bagRackMesh, sx: 1.7, sy: 1.9, sz: 1.15, walkOn: true });
  MAP.bagRackCrate = MAP.crates[MAP.crates.length - 1];
  MAP.bagDoor = new THREE.Vector3(bgX, 0, -44.45);
  MAP.bag = { on: false, x: bgX - 1.45, z: bgZ + 0.15 };
  const bagLamp = new THREE.PointLight(0xd0d0a0, 0.4, 8, 2);
  bagLamp.position.set(bgX, 2.5, bgZ);
  scene.add(bagLamp);
  MAP.bagLamp = bagLamp;
  const bagRing = box(scene, bgX, 0.05, -44.45, 1.4, 0.04, 0.3, amber);
  MAP.bagRing = bagRing;
  const bagLever = box(scene, MAP.bag.x, 1.05, MAP.bag.z, 0.12, 0.55, 0.12, amber);
  MAP.bagLever = bagLever;
  const bagDust = box(scene, bgX, 1.2, -44.45, 1.4, 2.15, 0.22, sand);
  bagDust.material = new THREE.MeshLambertMaterial({ color: 0xc8c0a8, transparent: true, opacity: 0.04 });
  MAP.bagDust = bagDust;
  MAP.bagDustCrate = { pos: new THREE.Vector3(bgX, 0, -44.45), mesh: bagDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.bagDustCrate);
  const finesMesh = box(scene, bgX, 0.1, -42.9, 1.2, 0.1, 2.4, oil);
  finesMesh.material = new THREE.MeshLambertMaterial({ color: 0x8a8070, transparent: true, opacity: 0.3 });
  MAP.finesMesh = finesMesh;
  MAP.fines = { x: bgX, z: -42.9, hx: 0.65, hz: 1.25, vz: 2.25 };
  const bagMotesGeo = new THREE.BufferGeometry();
  const bagN = 10;
  const bagPos = new Float32Array(bagN * 3);
  const bagPhase = [];
  for (let i = 0; i < bagN; i++) {
    bagPos[i * 3] = bgX + (Math.random() - 0.5) * 3.0;
    bagPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    bagPos[i * 3 + 2] = bgZ + (Math.random() - 0.5) * 2.4;
    bagPhase.push(Math.random() * 6);
  }
  bagMotesGeo.setAttribute("position", new THREE.BufferAttribute(bagPos, 3));
  const bagMotes = new THREE.Points(bagMotesGeo, new THREE.PointsMaterial({ color: 0xe0d8c0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(bagMotes);
  MAP.bagMotes = bagMotes;
  MAP.bagMotePhase = bagPhase;
  const bagBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  bagBerm(-10.1, -44.15, 1.0, 0.45);
  bagBerm(-7.1, -44.15, 1.0, 0.45);
  const bagDrum = box(scene, -10.2, 0.55, -43.7, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-10.2, 0, -43.7), mesh: bagDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const bagDrum2 = box(scene, -7.0, 0.55, -43.7, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-7.0, 0, -43.7), mesh: bagDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const bagTruck = box(scene, -5.4, 0.65, -46.4, 1.4, 1.15, 1.3, rust);
  const bagBed = box(scene, -4.1, 0.4, -46.4, 1.15, 0.55, 1.15, steel);
  MAP.bagTruck = new THREE.Vector3(-5.4, 0, -46.4);
  MAP.crates.push({ pos: MAP.bagTruck.clone(), mesh: bagTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(-4.1, 0, -46.4), mesh: bagBed, sx: 1.15, sy: 0.55, sz: 1.15 });

  // Northwest dryer house — door gap south, rideable shell, exhaust shove, door dust
  const dyX = -24.2;
  const dyZ = 28.4;
  const dryMat = new THREE.MeshLambertMaterial({ color: 0x4a342c });
  const dryWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, dryMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  dryWall(dyX, 30.3, 4.5, 0.35);
  dryWall(-26.35, dyZ, 0.35, 3.4);
  dryWall(-22.05, dyZ, 0.35, 3.4);
  dryWall(-25.35, 26.5, 1.4, 0.35);
  dryWall(-23.05, 26.5, 1.4, 0.35);
  box(scene, dyX, 2.9, 26.5, 1.5, 0.38, 0.35, dryMat);
  const dryShellMesh = box(scene, dyX, 0.72, dyZ, 2.2, 0.85, 1.05, rust);
  MAP.dryShellMesh = dryShellMesh;
  MAP.dryShell = { x: dyX, z: dyZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(dyX, 0, dyZ), mesh: dryShellMesh, sx: 2.2, sy: 1.2, sz: 1.05, walkOn: true });
  MAP.dryShellCrate = MAP.crates[MAP.crates.length - 1];
  MAP.dryDoor = new THREE.Vector3(dyX, 0, 26.5);
  MAP.dry = { on: false, x: dyX + 1.4, z: dyZ - 0.2 };
  const dryLamp = new THREE.PointLight(0xff7840, 0.42, 8, 2);
  dryLamp.position.set(dyX, 2.5, dyZ);
  scene.add(dryLamp);
  MAP.dryLamp = dryLamp;
  const dryRing = box(scene, dyX, 0.05, 26.5, 1.4, 0.04, 0.3, amber);
  MAP.dryRing = dryRing;
  const dryLever = box(scene, MAP.dry.x, 1.05, MAP.dry.z, 0.12, 0.55, 0.12, amber);
  MAP.dryLever = dryLever;
  const dryDust = box(scene, dyX, 1.2, 26.5, 1.4, 2.15, 0.22, sand);
  dryDust.material = new THREE.MeshLambertMaterial({ color: 0xd0b090, transparent: true, opacity: 0.04 });
  MAP.dryDust = dryDust;
  MAP.dryDustCrate = { pos: new THREE.Vector3(dyX, 0, 26.5), mesh: dryDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.dryDustCrate);
  const exhMesh = box(scene, dyX, 0.12, 24.95, 1.35, 0.1, 1.4, oil);
  exhMesh.material = new THREE.MeshLambertMaterial({ color: 0xc09070, transparent: true, opacity: 0.28 });
  MAP.exhaustMesh = exhMesh;
  MAP.exhaust = { x: dyX, z: 24.95, hx: 0.7, hz: 0.75, vz: -2.3 };
  const dryMotesGeo = new THREE.BufferGeometry();
  const dryN = 10;
  const dryPos = new Float32Array(dryN * 3);
  const dryPhase = [];
  for (let i = 0; i < dryN; i++) {
    dryPos[i * 3] = dyX + (Math.random() - 0.5) * 2.8;
    dryPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    dryPos[i * 3 + 2] = dyZ + (Math.random() - 0.5) * 2.2;
    dryPhase.push(Math.random() * 6);
  }
  dryMotesGeo.setAttribute("position", new THREE.BufferAttribute(dryPos, 3));
  const dryMotes = new THREE.Points(dryMotesGeo, new THREE.PointsMaterial({ color: 0xf0c0a0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(dryMotes);
  MAP.dryMotes = dryMotes;
  MAP.dryMotePhase = dryPhase;
  const dryBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  dryBerm(-25.4, 26.15, 1.0, 0.45);
  dryBerm(-23.0, 26.15, 1.0, 0.45);
  const dryDrum = box(scene, -25.5, 0.55, 25.7, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-25.5, 0, 25.7), mesh: dryDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const dryDrum2 = box(scene, -22.9, 0.55, 25.7, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-22.9, 0, 25.7), mesh: dryDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const dryTruck = box(scene, -20.8, 0.65, 29.2, 1.4, 1.15, 1.3, rust);
  const dryBed = box(scene, -19.5, 0.4, 29.2, 1.15, 0.55, 1.15, steel);
  MAP.dryTruck = new THREE.Vector3(-20.8, 0, 29.2);
  MAP.crates.push({ pos: MAP.dryTruck.clone(), mesh: dryTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(-19.5, 0, 29.2), mesh: dryBed, sx: 1.15, sy: 0.55, sz: 1.15 });


  // Southeast loco shed — door gap west, rideable engine + tender, steam shove, door dust
  const lcX = 44.7;
  const lcZ = -32.2;
  const locoMat = new THREE.MeshLambertMaterial({ color: 0x3a4038 });
  const locoWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.6, z, sx, 3.2, sz, locoMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.2, sz });
    return m;
  };
  locoWall(lcX, -34.35, 4.5, 0.35);
  locoWall(lcX, -30.05, 4.5, 0.35);
  locoWall(46.85, lcZ, 0.35, 3.9);
  locoWall(43.55, -33.35, 0.35, 1.55);
  locoWall(43.55, -31.05, 0.35, 1.55);
  box(scene, 43.55, 2.95, lcZ, 0.35, 0.4, 1.5, locoMat);
  const locoMesh = box(scene, lcX, 0.78, lcZ, 1.35, 1.15, 2.15, rust);
  box(scene, lcX, 1.45, lcZ - 0.35, 0.55, 0.55, 0.7, steel);
  MAP.locoMesh = locoMesh;
  MAP.locoEngine = { x: lcX, z: lcZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(lcX, 0, lcZ), mesh: locoMesh, sx: 1.35, sy: 1.3, sz: 2.15, walkOn: true });
  MAP.locoCrate = MAP.crates[MAP.crates.length - 1];
  const tenderMesh = box(scene, lcX, 0.62, lcZ + 1.7, 1.2, 0.85, 1.15, oil);
  MAP.tenderMesh = tenderMesh;
  MAP.tender = { x: lcX, z: lcZ + 1.7 };
  MAP.crates.push({ pos: new THREE.Vector3(lcX, 0, lcZ + 1.7), mesh: tenderMesh, sx: 1.2, sy: 1.0, sz: 1.15, walkOn: true });
  MAP.tenderCrate = MAP.crates[MAP.crates.length - 1];
  MAP.locoDoor = new THREE.Vector3(43.55, 0, lcZ);
  MAP.loco = { on: false, x: lcX - 1.15, z: lcZ + 1.15 };
  const locoLamp = new THREE.PointLight(0xffc060, 0.4, 8, 2);
  locoLamp.position.set(lcX, 2.45, lcZ);
  scene.add(locoLamp);
  MAP.locoLamp = locoLamp;
  const locoHead = new THREE.PointLight(0xffe0a0, 0.15, 7, 2);
  locoHead.position.set(lcX - 0.7, 1.1, lcZ);
  scene.add(locoHead);
  MAP.locoHead = locoHead;
  MAP.locoRing = box(scene, 43.55, 0.05, lcZ, 0.3, 0.04, 1.4, amber);
  MAP.locoLever = box(scene, MAP.loco.x, 1.05, MAP.loco.z, 0.12, 0.55, 0.12, amber);
  const locoDust = box(scene, 43.55, 1.2, lcZ, 0.22, 2.15, 1.4, sand);
  locoDust.material = new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.04 });
  MAP.locoDust = locoDust;
  MAP.locoDustCrate = { pos: new THREE.Vector3(43.55, 0, lcZ), mesh: locoDust, sx: 0.26, sy: 2.15, sz: 1.4, dead: true };
  MAP.crates.push(MAP.locoDustCrate);
  const steamMesh = box(scene, lcX, 0.1, -35.55, 1.5, 0.1, 1.5, oil);
  steamMesh.material = new THREE.MeshLambertMaterial({ color: 0xd0d8e0, transparent: true, opacity: 0.22 });
  MAP.steamMesh = steamMesh;
  MAP.steam = { x: lcX, z: -35.55, hx: 0.8, hz: 0.8, vz: -2.4 };
  const locoMotesGeo = new THREE.BufferGeometry();
  const locoN = 10;
  const locoPos = new Float32Array(locoN * 3);
  const locoPhase = [];
  for (let i = 0; i < locoN; i++) {
    locoPos[i * 3] = lcX + (Math.random() - 0.5) * 2.6;
    locoPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    locoPos[i * 3 + 2] = lcZ + (Math.random() - 0.5) * 2.4;
    locoPhase.push(Math.random() * 6);
  }
  locoMotesGeo.setAttribute("position", new THREE.BufferAttribute(locoPos, 3));
  MAP.locoMotes = new THREE.Points(locoMotesGeo, new THREE.PointsMaterial({ color: 0xe0d0b0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.locoMotes);
  MAP.locoMotePhase = locoPhase;
  const locoBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  locoBerm(43.2, -33.4, 0.45, 1.0);
  locoBerm(43.2, -31.0, 0.45, 1.0);
  const locoDrum = box(scene, 43.15, 0.55, -33.55, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(43.15, 0, -33.55), mesh: locoDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const locoDrum2 = box(scene, 43.15, 0.55, -30.85, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(43.15, 0, -30.85), mesh: locoDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const locoTruck = box(scene, 46.4, 0.65, -28.6, 1.4, 1.15, 1.3, rust);
  const locoBed = box(scene, 46.4, 0.4, -27.3, 1.2, 0.55, 1.15, steel);
  MAP.locoTruck = new THREE.Vector3(46.4, 0, -28.6);
  MAP.crates.push({ pos: MAP.locoTruck.clone(), mesh: locoTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(46.4, 0, -27.3), mesh: locoBed, sx: 1.2, sy: 0.55, sz: 1.15 });

  // Southwest agitator — door gap north, spinning rake, slurry shove east, door dust
  const agX = -22.35;
  const agZ = -45.2;
  const agitMat = new THREE.MeshLambertMaterial({ color: 0x3e4638 });
  const agitWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, agitMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  agitWall(agX, -47.35, 4.6, 0.35);
  agitWall(-24.55, agZ, 0.35, 3.9);
  agitWall(-20.15, agZ, 0.35, 3.9);
  agitWall(-23.5, -43.05, 1.5, 0.35);
  agitWall(-21.2, -43.05, 1.5, 0.35);
  box(scene, agX, 2.9, -43.05, 1.5, 0.38, 0.35, agitMat);
  const rakeMesh = box(scene, agX, 0.55, agZ, 2.4, 0.16, 0.28, steel);
  const rakeArm = box(scene, agX, 0.55, agZ, 0.28, 0.16, 2.4, steel);
  MAP.agitRakeMesh = rakeMesh;
  MAP.agitRakeArm = rakeArm;
  MAP.agitRake = { x: agX, z: agZ, ang: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(agX, 0, agZ), mesh: rakeMesh, sx: 2.4, sy: 0.5, sz: 0.4, walkOn: true });
  MAP.agitRakeCrate = MAP.crates[MAP.crates.length - 1];
  MAP.agitDoor = new THREE.Vector3(agX, 0, -43.05);
  MAP.agit = { on: false, x: agX + 1.35, z: agZ + 0.2 };
  const agitLamp = new THREE.PointLight(0xc0e080, 0.38, 8, 2);
  agitLamp.position.set(agX, 2.45, agZ);
  scene.add(agitLamp);
  MAP.agitLamp = agitLamp;
  MAP.agitRing = box(scene, agX, 0.05, -43.05, 1.4, 0.04, 0.3, amber);
  MAP.agitLever = box(scene, MAP.agit.x, 1.05, MAP.agit.z, 0.12, 0.55, 0.12, amber);
  const agitDust = box(scene, agX, 1.2, -43.05, 1.4, 2.15, 0.22, sand);
  agitDust.material = new THREE.MeshLambertMaterial({ color: 0xc8c090, transparent: true, opacity: 0.04 });
  MAP.agitDust = agitDust;
  MAP.agitDustCrate = { pos: new THREE.Vector3(agX, 0, -43.05), mesh: agitDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.agitDustCrate);
  const slurryMesh = box(scene, -18.55, 0.1, agZ, 1.5, 0.1, 1.35, oil);
  slurryMesh.material = new THREE.MeshLambertMaterial({ color: 0x8a9040, transparent: true, opacity: 0.24 });
  MAP.slurryMesh = slurryMesh;
  MAP.slurry = { x: -18.55, z: agZ, hx: 0.8, hz: 0.7, vx: 2.35 };
  const agitMotesGeo = new THREE.BufferGeometry();
  const agitN = 10;
  const agitPos = new Float32Array(agitN * 3);
  const agitPhase = [];
  for (let i = 0; i < agitN; i++) {
    agitPos[i * 3] = agX + (Math.random() - 0.5) * 2.6;
    agitPos[i * 3 + 1] = 0.3 + Math.random() * 1.4;
    agitPos[i * 3 + 2] = agZ + (Math.random() - 0.5) * 2.2;
    agitPhase.push(Math.random() * 6);
  }
  agitMotesGeo.setAttribute("position", new THREE.BufferAttribute(agitPos, 3));
  MAP.agitMotes = new THREE.Points(agitMotesGeo, new THREE.PointsMaterial({ color: 0xd0e090, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.agitMotes);
  MAP.agitMotePhase = agitPhase;
  const agitBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz, climb: true });
  };
  agitBerm(-23.55, -42.7, 1.0, 0.45);
  agitBerm(-21.15, -42.7, 1.0, 0.45);
  const agitDrum = box(scene, -23.6, 0.55, -42.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-23.6, 0, -42.15), mesh: agitDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const agitDrum2 = box(scene, -21.1, 0.55, -42.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-21.1, 0, -42.15), mesh: agitDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const agitTruck = box(scene, -18.2, 0.65, -46.4, 1.4, 1.15, 1.3, rust);
  const agitBed = box(scene, -16.9, 0.4, -46.4, 1.15, 0.55, 1.15, steel);
  MAP.agitTruck = new THREE.Vector3(-18.2, 0, -46.4);
  MAP.crates.push({ pos: MAP.agitTruck.clone(), mesh: agitTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(-16.9, 0, -46.4), mesh: agitBed, sx: 1.15, sy: 0.55, sz: 1.15 });


  // East scrubber house — door gap south, rideable tray, liquor shove west, door dust
  const scX = 36.4;
  const scZ = -17.8;
  const scrubMat = new THREE.MeshLambertMaterial({ color: 0x3a4440 });
  const scrubWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, scrubMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  scrubWall(scX, -15.85, 4.5, 0.35);
  scrubWall(34.25, scZ, 0.35, 3.5);
  scrubWall(38.55, scZ, 0.35, 3.5);
  scrubWall(35.15, -19.75, 1.45, 0.35);
  scrubWall(37.65, -19.75, 1.45, 0.35);
  box(scene, scX, 2.9, -19.75, 1.5, 0.38, 0.35, scrubMat);
  const trayMesh = box(scene, scX, 0.62, scZ, 2.1, 0.28, 1.15, steel);
  MAP.scrubTrayMesh = trayMesh;
  MAP.scrubTray = { x: scX, z: scZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(scX, 0, scZ), mesh: trayMesh, sx: 2.1, sy: 0.7, sz: 1.15, walkOn: true });
  MAP.scrubTrayCrate = MAP.crates[MAP.crates.length - 1];
  const stackMesh = box(scene, scX, 2.35, scZ + 0.2, 0.7, 2.4, 0.7, rust);
  MAP.crates.push({ pos: new THREE.Vector3(scX, 0, scZ + 0.2), mesh: stackMesh, sx: 0.7, sy: 2.4, sz: 0.7 });
  MAP.scrubDoor = new THREE.Vector3(scX, 0, -19.75);
  MAP.scrub = { on: false, x: scX + 1.35, z: scZ - 0.15 };
  const scrubLamp = new THREE.PointLight(0x80e0c0, 0.38, 8, 2);
  scrubLamp.position.set(scX, 2.45, scZ);
  scene.add(scrubLamp);
  MAP.scrubLamp = scrubLamp;
  MAP.scrubRing = box(scene, scX, 0.05, -19.75, 1.4, 0.04, 0.3, amber);
  MAP.scrubLever = box(scene, MAP.scrub.x, 1.05, MAP.scrub.z, 0.12, 0.55, 0.12, amber);
  const scrubDust = box(scene, scX, 1.2, -19.75, 1.4, 2.15, 0.22, sand);
  scrubDust.material = new THREE.MeshLambertMaterial({ color: 0xb0c8b8, transparent: true, opacity: 0.04 });
  MAP.scrubDust = scrubDust;
  MAP.scrubDustCrate = { pos: new THREE.Vector3(scX, 0, -19.75), mesh: scrubDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.scrubDustCrate);
  const liquorMesh = box(scene, 32.7, 0.1, -19.75, 1.6, 0.1, 1.3, oil);
  liquorMesh.material = new THREE.MeshLambertMaterial({ color: 0x6a9878, transparent: true, opacity: 0.22 });
  MAP.liquorMesh = liquorMesh;
  MAP.liquor = { x: 32.7, z: -19.75, hx: 0.85, hz: 0.7, vx: -2.3 };
  const scrubMotesGeo = new THREE.BufferGeometry();
  const scrubN = 10;
  const scrubPos = new Float32Array(scrubN * 3);
  const scrubPhase = [];
  for (let i = 0; i < scrubN; i++) {
    scrubPos[i * 3] = scX + (Math.random() - 0.5) * 2.4;
    scrubPos[i * 3 + 1] = 0.3 + Math.random() * 1.5;
    scrubPos[i * 3 + 2] = scZ + (Math.random() - 0.5) * 2.2;
    scrubPhase.push(Math.random() * 6);
  }
  scrubMotesGeo.setAttribute("position", new THREE.BufferAttribute(scrubPos, 3));
  MAP.scrubMotes = new THREE.Points(scrubMotesGeo, new THREE.PointsMaterial({ color: 0xc0e8d0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.scrubMotes);
  MAP.scrubMotePhase = scrubPhase;
  const scrubBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz });
  };
  scrubBerm(35.1, -20.55, 1.0, 0.45);
  scrubBerm(37.7, -20.55, 1.0, 0.45);
  const scrubDrum = box(scene, 34.7, 0.55, -20.55, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(34.7, 0, -20.55), mesh: scrubDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const scrubDrum2 = box(scene, 38.1, 0.55, -20.55, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(38.1, 0, -20.55), mesh: scrubDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const scrubTruck = box(scene, 36.4, 0.65, -22.2, 1.4, 1.15, 1.3, rust);
  const scrubBed = box(scene, 36.4, 0.4, -23.4, 1.15, 0.55, 1.15, steel);
  MAP.scrubTruck = new THREE.Vector3(36.4, 0, -22.2);
  MAP.crates.push({ pos: MAP.scrubTruck.clone(), mesh: scrubTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(36.4, 0, -23.4), mesh: scrubBed, sx: 1.15, sy: 0.55, sz: 1.15 });


  // Northwest electrowin house — door gap south, rideable cathode bar, acid launder, door mist
  const ewX = -40.6;
  const ewZ = 36.4;
  const ewMat = new THREE.MeshLambertMaterial({ color: 0x3a403c });
  const ewWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, ewMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  ewWall(ewX, 38.35, 4.5, 0.35);
  ewWall(-42.75, ewZ, 0.35, 3.5);
  ewWall(-38.45, ewZ, 0.35, 3.5);
  ewWall(-41.85, 34.45, 1.45, 0.35);
  ewWall(-39.35, 34.45, 1.45, 0.35);
  box(scene, ewX, 2.9, 34.45, 1.5, 0.38, 0.35, ewMat);
  box(scene, ewX, 3.05, ewZ, 4.2, 0.14, 3.6, rock);
  const ewFloor = box(scene, ewX, 0.04, ewZ, 3.8, 0.08, 3.4, concrete);
  ewFloor.receiveShadow = true;
  const cathMesh = box(scene, ewX, 0.7, ewZ, 2.2, 0.22, 1.05, steel);
  MAP.cathodeMesh = cathMesh;
  MAP.cathode = { x: ewX, z: ewZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(ewX, 0, ewZ), mesh: cathMesh, sx: 2.2, sy: 0.7, sz: 1.05, walkOn: true });
  MAP.cathodeCrate = MAP.crates[MAP.crates.length - 1];
  const busMesh = box(scene, ewX, 2.4, ewZ, 0.28, 2.2, 2.4, rust);
  MAP.crates.push({ pos: new THREE.Vector3(ewX, 0, ewZ), mesh: busMesh, sx: 0.28, sy: 2.2, sz: 2.4 });
  MAP.ewDoor = new THREE.Vector3(ewX, 0, 34.45);
  MAP.ew = { on: false, x: ewX + 1.35, z: ewZ - 0.2 };
  const ewLamp = new THREE.PointLight(0x70d0e8, 0.42, 8, 2);
  ewLamp.position.set(ewX, 2.45, ewZ);
  scene.add(ewLamp);
  MAP.ewLamp = ewLamp;
  MAP.ewRing = box(scene, ewX, 0.05, 34.45, 1.4, 0.04, 0.3, amber);
  MAP.ewLever = box(scene, MAP.ew.x, 1.05, MAP.ew.z, 0.12, 0.55, 0.12, amber);
  const ewDust = box(scene, ewX, 1.2, 34.45, 1.4, 2.15, 0.22, sand);
  ewDust.material = new THREE.MeshLambertMaterial({ color: 0xb0d0c8, transparent: true, opacity: 0.04 });
  MAP.ewDust = ewDust;
  MAP.ewDustCrate = { pos: new THREE.Vector3(ewX, 0, 34.45), mesh: ewDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.ewDustCrate);
  const acidMesh = box(scene, ewX, 0.1, 33.15, 1.5, 0.1, 1.2, oil);
  acidMesh.material = new THREE.MeshLambertMaterial({ color: 0x68c0a8, transparent: true, opacity: 0.22 });
  MAP.acidMesh = acidMesh;
  MAP.acid = { x: ewX, z: 33.15, hx: 0.8, hz: 0.65, vz: -2.25 };
  const ewMotesGeo = new THREE.BufferGeometry();
  const ewN = 10;
  const ewPos = new Float32Array(ewN * 3);
  const ewPhase = [];
  for (let i = 0; i < ewN; i++) {
    ewPos[i * 3] = ewX + (Math.random() - 0.5) * 3.2;
    ewPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    ewPos[i * 3 + 2] = ewZ + (Math.random() - 0.5) * 2.6;
    ewPhase.push(Math.random() * 6);
  }
  ewMotesGeo.setAttribute("position", new THREE.BufferAttribute(ewPos, 3));
  MAP.ewMotes = new THREE.Points(ewMotesGeo, new THREE.PointsMaterial({ color: 0xb0e8e0, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.ewMotes);
  MAP.ewMotePhase = ewPhase;
  const ewBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz });
  };
  ewBerm(-41.9, 33.55, 1.0, 0.45);
  ewBerm(-39.3, 33.55, 1.0, 0.45);
  const ewDrum = box(scene, -42.3, 0.55, 33.55, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-42.3, 0, 33.55), mesh: ewDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const ewDrum2 = box(scene, -38.9, 0.55, 33.55, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-38.9, 0, 33.55), mesh: ewDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const ewTruck = box(scene, ewX, 0.65, 31.7, 1.4, 1.15, 1.3, rust);
  const ewBed = box(scene, ewX, 0.4, 30.5, 1.15, 0.55, 1.15, steel);
  MAP.ewTruck = new THREE.Vector3(ewX, 0, 31.7);
  MAP.crates.push({ pos: MAP.ewTruck.clone(), mesh: ewTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(ewX, 0, 30.5), mesh: ewBed, sx: 1.15, sy: 0.55, sz: 1.15 });

  // Southeast cone crusher — door gap north, spinning mantle, discharge shove east, door dust
  const cnX = 27.2;
  const cnZ = -38.8;
  const cnMat = new THREE.MeshLambertMaterial({ color: 0x403830 });
  const cnWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, cnMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  cnWall(cnX, -40.75, 4.5, 0.35);
  cnWall(25.05, cnZ, 0.35, 3.5);
  cnWall(29.35, cnZ, 0.35, 3.5);
  cnWall(26.0, -36.85, 1.45, 0.35);
  cnWall(28.4, -36.85, 1.45, 0.35);
  box(scene, cnX, 2.9, -36.85, 1.5, 0.38, 0.35, cnMat);
  box(scene, cnX, 3.05, cnZ, 4.2, 0.14, 3.6, rock);
  const cnFloor = box(scene, cnX, 0.04, cnZ, 3.8, 0.08, 3.4, concrete);
  cnFloor.receiveShadow = true;
  const mantleMesh = box(scene, cnX, 0.85, cnZ, 1.35, 1.5, 1.35, rust);
  MAP.mantleMesh = mantleMesh;
  MAP.mantle = { x: cnX, z: cnZ, ang: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(cnX, 0, cnZ), mesh: mantleMesh, sx: 1.35, sy: 1.5, sz: 1.35, walkOn: true });
  MAP.mantleCrate = MAP.crates[MAP.crates.length - 1];
  const bowlMesh = box(scene, cnX, 0.35, cnZ, 2.3, 0.28, 2.3, steel);
  MAP.crates.push({ pos: new THREE.Vector3(cnX, 0, cnZ), mesh: bowlMesh, sx: 2.3, sy: 0.4, sz: 2.3, walkOn: true });
  MAP.coneDoor = new THREE.Vector3(cnX, 0, -36.85);
  MAP.cone = { on: false, x: cnX - 1.35, z: cnZ + 0.15 };
  const cnLamp = new THREE.PointLight(0xe0a060, 0.45, 8, 2);
  cnLamp.position.set(cnX, 2.45, cnZ);
  scene.add(cnLamp);
  MAP.coneLamp = cnLamp;
  MAP.coneRing = box(scene, cnX, 0.05, -36.85, 1.4, 0.04, 0.3, amber);
  MAP.coneLever = box(scene, MAP.cone.x, 1.05, MAP.cone.z, 0.12, 0.55, 0.12, amber);
  const cnDust = box(scene, cnX, 1.2, -36.85, 1.4, 2.15, 0.22, sand);
  cnDust.material = new THREE.MeshLambertMaterial({ color: 0xc8b090, transparent: true, opacity: 0.04 });
  MAP.coneDust = cnDust;
  MAP.coneDustCrate = { pos: new THREE.Vector3(cnX, 0, -36.85), mesh: cnDust, sx: 1.4, sy: 2.15, sz: 0.26, dead: true };
  MAP.crates.push(MAP.coneDustCrate);
  const disMesh = box(scene, 30.15, 0.1, cnZ, 1.5, 0.1, 1.15, oil);
  disMesh.material = new THREE.MeshLambertMaterial({ color: 0xc09060, transparent: true, opacity: 0.22 });
  MAP.dischargeMesh = disMesh;
  MAP.discharge = { x: 30.15, z: cnZ, hx: 0.8, hz: 0.6, vx: 2.4 };
  const cnMotesGeo = new THREE.BufferGeometry();
  const cnN = 10;
  const cnPos = new Float32Array(cnN * 3);
  const cnPhase = [];
  for (let i = 0; i < cnN; i++) {
    cnPos[i * 3] = cnX + (Math.random() - 0.5) * 3.0;
    cnPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    cnPos[i * 3 + 2] = cnZ + (Math.random() - 0.5) * 2.6;
    cnPhase.push(Math.random() * 6);
  }
  cnMotesGeo.setAttribute("position", new THREE.BufferAttribute(cnPos, 3));
  MAP.coneMotes = new THREE.Points(cnMotesGeo, new THREE.PointsMaterial({ color: 0xe0c090, size: 0.05, transparent: true, opacity: 0.42 }));
  scene.add(MAP.coneMotes);
  MAP.coneMotePhase = cnPhase;
  const cnBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz });
  };
  cnBerm(25.9, -36.05, 1.0, 0.45);
  cnBerm(28.5, -36.05, 1.0, 0.45);
  const cnDrum = box(scene, 25.4, 0.55, -36.05, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(25.4, 0, -36.05), mesh: cnDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const cnDrum2 = box(scene, 29.0, 0.55, -36.05, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(29.0, 0, -36.05), mesh: cnDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const cnTruck = box(scene, cnX, 0.65, -34.6, 1.4, 1.15, 1.3, rust);
  const cnBed = box(scene, cnX, 0.4, -33.4, 1.15, 0.55, 1.15, steel);
  MAP.coneTruck = new THREE.Vector3(cnX, 0, -34.6);
  MAP.crates.push({ pos: MAP.coneTruck.clone(), mesh: cnTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(cnX, 0, -33.4), mesh: cnBed, sx: 1.15, sy: 0.55, sz: 1.15 });

  // East spiral classifier — door gap west, stroking rake, sands flume shove west, door dust
  const clX = 41.6;
  const clZ = 26.4;
  const clMat = new THREE.MeshLambertMaterial({ color: 0x3c4438 });
  const clWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, clMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  clWall(clX, 28.35, 4.5, 0.35);
  clWall(clX, 24.45, 4.5, 0.35);
  clWall(43.75, clZ, 0.35, 3.5);
  clWall(39.45, 27.55, 0.35, 1.2);
  clWall(39.45, 25.25, 0.35, 1.2);
  box(scene, 39.45, 2.9, clZ, 0.35, 0.38, 1.5, clMat);
  box(scene, clX, 3.05, clZ, 4.2, 0.14, 3.6, rock);
  const clFloor = box(scene, clX, 0.04, clZ, 3.8, 0.08, 3.4, concrete);
  clFloor.receiveShadow = true;
  const rakeMesh = box(scene, clX, 0.62, clZ, 0.85, 0.28, 2.05, steel);
  MAP.clasRakeMesh = rakeMesh;
  MAP.clasRake = { x: clX, z: clZ, t: 0, dir: 1, dx: 0, dz: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(clX, 0, clZ), mesh: rakeMesh, sx: 0.85, sy: 0.7, sz: 2.05, walkOn: true });
  MAP.clasRakeCrate = MAP.crates[MAP.crates.length - 1];
  const tankMesh = box(scene, clX, 0.28, clZ, 2.4, 0.22, 2.6, rust);
  MAP.crates.push({ pos: new THREE.Vector3(clX, 0, clZ), mesh: tankMesh, sx: 2.4, sy: 0.35, sz: 2.6, walkOn: true });
  MAP.clasDoor = new THREE.Vector3(39.45, 0, clZ);
  MAP.clas = { on: false, x: clX - 0.4, z: clZ + 1.15 };
  const clLamp = new THREE.PointLight(0xc8d080, 0.42, 8, 2);
  clLamp.position.set(clX, 2.45, clZ);
  scene.add(clLamp);
  MAP.clasLamp = clLamp;
  MAP.clasRing = box(scene, 39.45, 0.05, clZ, 0.3, 0.04, 1.4, amber);
  MAP.clasLever = box(scene, MAP.clas.x, 1.05, MAP.clas.z, 0.12, 0.55, 0.12, amber);
  const clDust = box(scene, 39.45, 1.2, clZ, 0.22, 2.15, 1.4, sand);
  clDust.material = new THREE.MeshLambertMaterial({ color: 0xc8c090, transparent: true, opacity: 0.04 });
  MAP.clasDust = clDust;
  MAP.clasDustCrate = { pos: new THREE.Vector3(39.45, 0, clZ), mesh: clDust, sx: 0.26, sy: 2.15, sz: 1.4, dead: true };
  MAP.crates.push(MAP.clasDustCrate);
  const sandsMesh = box(scene, 37.7, 0.1, clZ, 1.7, 0.1, 1.2, oil);
  sandsMesh.material = new THREE.MeshLambertMaterial({ color: 0xc0a060, transparent: true, opacity: 0.2 });
  MAP.sandsMesh = sandsMesh;
  MAP.sands = { x: 37.7, z: clZ, hx: 0.9, hz: 0.65, vx: -2.3 };
  const clMotesGeo = new THREE.BufferGeometry();
  const clN = 10;
  const clPos = new Float32Array(clN * 3);
  const clPhase = [];
  for (let i = 0; i < clN; i++) {
    clPos[i * 3] = clX + (Math.random() - 0.5) * 3.0;
    clPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    clPos[i * 3 + 2] = clZ + (Math.random() - 0.5) * 2.6;
    clPhase.push(Math.random() * 6);
  }
  clMotesGeo.setAttribute("position", new THREE.BufferAttribute(clPos, 3));
  MAP.clasMotes = new THREE.Points(clMotesGeo, new THREE.PointsMaterial({ color: 0xe0d090, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.clasMotes);
  MAP.clasMotePhase = clPhase;
  const clBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz });
  };
  clBerm(38.7, 27.55, 0.45, 1.0);
  clBerm(38.7, 25.25, 0.45, 1.0);
  const clDrum = box(scene, 38.7, 0.55, 28.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(38.7, 0, 28.15), mesh: clDrum, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const clDrum2 = box(scene, 38.7, 0.55, 24.65, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(38.7, 0, 24.65), mesh: clDrum2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const clTruck = box(scene, 36.4, 0.65, clZ, 1.4, 1.15, 1.3, rust);
  const clBed = box(scene, 35.2, 0.4, clZ, 1.15, 0.55, 1.15, steel);
  MAP.clasTruck = new THREE.Vector3(36.4, 0, clZ);
  MAP.crates.push({ pos: MAP.clasTruck.clone(), mesh: clTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(35.2, 0, clZ), mesh: clBed, sx: 1.15, sy: 0.55, sz: 1.15 });

  // West magnet house — door gap east, spinning drum, concentrate shove south, door dust
  const mgX = -42.6;
  const mgZ = 8.4;
  const mgMat = new THREE.MeshLambertMaterial({ color: 0x3a3c44 });
  const mgWall = (x, z, sx, sz) => {
    const m = box(scene, x, 1.55, z, sx, 3.1, sz, mgMat);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 3.1, sz });
    return m;
  };
  mgWall(mgX, 10.35, 4.5, 0.35);
  mgWall(mgX, 6.45, 4.5, 0.35);
  mgWall(-44.75, mgZ, 0.35, 3.5);
  mgWall(-40.45, 9.55, 0.35, 1.2);
  mgWall(-40.45, 7.25, 0.35, 1.2);
  box(scene, -40.45, 2.9, mgZ, 0.35, 0.38, 1.5, mgMat);
  box(scene, mgX, 3.05, mgZ, 4.2, 0.14, 3.6, rock);
  const mgFloor = box(scene, mgX, 0.04, mgZ, 3.8, 0.08, 3.4, concrete);
  mgFloor.receiveShadow = true;
  const drumMesh = box(scene, mgX, 0.85, mgZ, 1.4, 1.45, 1.4, rust);
  MAP.magDrumMesh = drumMesh;
  MAP.magDrum = { x: mgX, z: mgZ, ang: 0 };
  MAP.crates.push({ pos: new THREE.Vector3(mgX, 0, mgZ), mesh: drumMesh, sx: 1.4, sy: 1.45, sz: 1.4, walkOn: true });
  MAP.magDrumCrate = MAP.crates[MAP.crates.length - 1];
  const yokeMesh = box(scene, mgX, 1.7, mgZ, 0.28, 0.35, 2.2, steel);
  MAP.crates.push({ pos: new THREE.Vector3(mgX, 0, mgZ), mesh: yokeMesh, sx: 0.28, sy: 1.9, sz: 2.2 });
  MAP.magsDoor = new THREE.Vector3(-40.45, 0, mgZ);
  MAP.mags = { on: false, x: mgX + 1.15, z: mgZ - 0.2 };
  const mgLamp = new THREE.PointLight(0x80c0e8, 0.42, 8, 2);
  mgLamp.position.set(mgX, 2.45, mgZ);
  scene.add(mgLamp);
  MAP.magsLamp = mgLamp;
  MAP.magsRing = box(scene, -40.45, 0.05, mgZ, 0.3, 0.04, 1.4, amber);
  MAP.magsLever = box(scene, MAP.mags.x, 1.05, MAP.mags.z, 0.12, 0.55, 0.12, amber);
  const mgDust = box(scene, -40.45, 1.2, mgZ, 0.22, 2.15, 1.4, sand);
  mgDust.material = new THREE.MeshLambertMaterial({ color: 0xb0c0d0, transparent: true, opacity: 0.04 });
  MAP.magsDust = mgDust;
  MAP.magsDustCrate = { pos: new THREE.Vector3(-40.45, 0, mgZ), mesh: mgDust, sx: 0.26, sy: 2.15, sz: 1.4, dead: true };
  MAP.crates.push(MAP.magsDustCrate);
  const concMesh = box(scene, mgX, 0.1, 5.15, 1.2, 0.1, 1.5, oil);
  concMesh.material = new THREE.MeshLambertMaterial({ color: 0x7090c0, transparent: true, opacity: 0.2 });
  MAP.concMesh = concMesh;
  MAP.conc = { x: mgX, z: 5.15, hx: 0.65, hz: 0.8, vz: -2.35 };
  const mgMotesGeo = new THREE.BufferGeometry();
  const mgN = 10;
  const mgPos = new Float32Array(mgN * 3);
  const mgPhase = [];
  for (let i = 0; i < mgN; i++) {
    mgPos[i * 3] = mgX + (Math.random() - 0.5) * 3.0;
    mgPos[i * 3 + 1] = 0.3 + Math.random() * 1.6;
    mgPos[i * 3 + 2] = mgZ + (Math.random() - 0.5) * 2.6;
    mgPhase.push(Math.random() * 6);
  }
  mgMotesGeo.setAttribute("position", new THREE.BufferAttribute(mgPos, 3));
  MAP.magsMotes = new THREE.Points(mgMotesGeo, new THREE.PointsMaterial({ color: 0xb0d0e8, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(MAP.magsMotes);
  MAP.magsMotePhase = mgPhase;
  const mgBerm = (x, z, sx, sz) => {
    const m = box(scene, x, 0.5, z, sx, 1.0, sz, rock);
    MAP.crates.push({ pos: new THREE.Vector3(x, 0, z), mesh: m, sx, sy: 1.0, sz });
  };
  mgBerm(-39.65, 9.55, 0.45, 1.0);
  mgBerm(-39.65, 7.25, 0.45, 1.0);
  const mgDrumCan = box(scene, -39.65, 0.55, 10.15, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-39.65, 0, 10.15), mesh: mgDrumCan, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const mgDrumCan2 = box(scene, -39.65, 0.55, 6.65, 0.5, 1.05, 0.5, rust);
  MAP.crates.push({ pos: new THREE.Vector3(-39.65, 0, 6.65), mesh: mgDrumCan2, sx: 0.5, sy: 1.05, sz: 0.5, drum: true });
  const mgTruck = box(scene, -38.4, 0.65, mgZ, 1.4, 1.15, 1.3, rust);
  const mgBed = box(scene, -37.2, 0.4, mgZ, 1.15, 0.55, 1.15, steel);
  MAP.magsTruck = new THREE.Vector3(-38.4, 0, mgZ);
  MAP.crates.push({ pos: MAP.magsTruck.clone(), mesh: mgTruck, sx: 1.4, sy: 1.15, sz: 1.3 });
  MAP.crates.push({ pos: new THREE.Vector3(-37.2, 0, mgZ), mesh: mgBed, sx: 1.15, sy: 0.55, sz: 1.15 });

  // North blast face — plunger arms a fuse, then a rock curtain blocks the lane and shoves south
  const faceX = -15.4;
  const faceZ = 44.6;
  const facePost = box(scene, faceX, 0.85, faceZ, 0.35, 1.7, 0.35, rock);
  MAP.crates.push({ pos: new THREE.Vector3(faceX, 0, faceZ), mesh: facePost, sx: 0.35, sy: 1.7, sz: 0.35 });
  const faceLever = box(scene, faceX + 0.55, 1.05, faceZ, 0.12, 0.5, 0.12, amber);
  MAP.faceLever = faceLever;
  MAP.face = { x: faceX + 0.55, z: faceZ, armed: false, fuse: 0 };
  MAP.fall = { x: faceX, z: 42.4, hx: 1.35, hz: 1.55, live: false, vz: -2.6 };
  const fallDust = box(scene, faceX, 1.4, 42.4, 2.4, 2.6, 0.28, sand);
  fallDust.material = new THREE.MeshLambertMaterial({ color: 0xb09870, transparent: true, opacity: 0.04 });
  MAP.fallDust = fallDust;
  MAP.fallDustCrate = { pos: new THREE.Vector3(faceX, 0, 42.4), mesh: fallDust, sx: 2.4, sy: 2.6, sz: 0.32, dead: true };
  MAP.crates.push(MAP.fallDustCrate);
  const rubA = box(scene, faceX - 0.7, 0.35, 41.7, 0.9, 0.7, 0.7, rock);
  const rubB = box(scene, faceX + 0.75, 0.28, 42.9, 0.8, 0.55, 0.8, rock);
  rubA.visible = false;
  rubB.visible = false;
  MAP.rubble = [
    { mesh: rubA, crate: { pos: new THREE.Vector3(faceX - 0.7, 0, 41.7), mesh: rubA, sx: 0.9, sy: 0.7, sz: 0.7, climb: true, dead: true } },
    { mesh: rubB, crate: { pos: new THREE.Vector3(faceX + 0.75, 0, 42.9), mesh: rubB, sx: 0.8, sy: 0.55, sz: 0.8, climb: true, dead: true } },
  ];
  for (const r of MAP.rubble) MAP.crates.push(r.crate);
  const faceLamp = new THREE.PointLight(0xff6030, 0.15, 6, 2);
  faceLamp.position.set(faceX, 2.2, faceZ);
  scene.add(faceLamp);
  MAP.faceLamp = faceLamp;

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
  if (MAP.winzeCage && MAP.winzeCageMesh) {
    const prev = MAP.winzeCage.y;
    MAP.winzeCage.y += dt * 0.7 * MAP.winzeCageDir;
    if (MAP.winzeCage.y >= 2.45) {
      MAP.winzeCage.y = 2.45;
      MAP.winzeCageDir = -1;
      MAP.winzeBell = true;
    } else if (MAP.winzeCage.y <= 0.15) {
      MAP.winzeCage.y = 0.15;
      MAP.winzeCageDir = 1;
      MAP.winzeBell = true;
    }
    MAP.winzeCageDy = MAP.winzeCage.y - prev;
    MAP.winzeCage.top = MAP.winzeCage.y + 0.18;
    MAP.winzeCageMesh.position.y = MAP.winzeCage.y;
    if (MAP.winzeSheave) MAP.winzeSheave.rotation.z += dt * 1.4 * MAP.winzeCageDir;
  }
  if (MAP.sump && MAP.sumpWater) {
    const target = MAP.sump.on ? 0.62 : 0.06;
    MAP.sumpWater.position.y += (target - MAP.sumpWater.position.y) * Math.min(1, dt * 1.6);
    MAP.sumpWater.material.opacity = MAP.sump.on ? 0.62 : 0.22;
    if (MAP.sumpLever) MAP.sumpLever.rotation.z = MAP.sump.on ? -0.8 : 0.35;
    if (MAP.sumpCrate) MAP.sumpCrate.dead = !MAP.sump.on;
  }
  if (MAP.winzeMotes) {
    const arr = MAP.winzeMotes.geometry.attributes.position.array;
    const ph = MAP.winzeMotePhase;
    for (let i = 0; i < ph.length; i++) {
      arr[i * 3 + 1] += Math.sin(performance.now() * 0.0011 + ph[i]) * 0.003;
      if (arr[i * 3 + 1] > 2.2) arr[i * 3 + 1] = 0.25;
    }
    MAP.winzeMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.fan) {
    const spin = MAP.fan.on ? 9.5 : 0.35;
    MAP.fan.spin += dt * spin;
    if (MAP.fanBlades) MAP.fanBlades.rotation.z = MAP.fan.spin;
    if (MAP.fanLever) MAP.fanLever.rotation.z = MAP.fan.on ? -0.85 : 0.4;
    if (MAP.fanDust) {
      MAP.fanDust.material.opacity = MAP.fan.on ? 0.34 : 0.05;
      MAP.fanDust.position.z = -22.8 + Math.sin(performance.now() * 0.004) * (MAP.fan.on ? 0.35 : 0.05);
    }
    if (MAP.fanCrate) MAP.fanCrate.dead = !MAP.fan.on;
    if (MAP.raiseLamp) MAP.raiseLamp.intensity = MAP.fan.on ? 1.15 : 0.7;
  }
  if (MAP.binMotes && MAP.binMotePhase) {
    const arr = MAP.binMotes.geometry.attributes.position.array;
    const ph = MAP.binMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * 1.1;
      arr[i * 3 + 1] = 0.28 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.2;
    }
    MAP.binMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.binLamp) MAP.binLamp.intensity = 0.75 + Math.sin(performance.now() * 0.0033) * 0.18;
  if (MAP.binRing) MAP.binRing.material.opacity = 0.4 + Math.sin(performance.now() * 0.0034) * 0.16;
  if (MAP.binPath && MAP.binSkipMesh && MAP.binSkipCrate) {
    const a = MAP.binPath[0];
    const b = MAP.binPath[1];
    const prev = MAP.binSkipCrate.pos.clone();
    if (!MAP.binBrake || !MAP.binBrake.on) {
      MAP.binT += dt * 1.55 * MAP.binDir;
      if (MAP.binT >= 1) {
        MAP.binT = 1;
        MAP.binDir = -1;
        MAP.binBell = true;
        MAP.binDumpT = 2.7;
      } else if (MAP.binT <= 0) {
        MAP.binT = 0;
        MAP.binDir = 1;
        MAP.binBell = true;
      }
    }
    const p = a.clone().lerp(b, MAP.binT);
    MAP.binSkipMesh.position.copy(p);
    const tip = MAP.binDumpT > 1.6 && MAP.binT > 0.92 ? -0.55 : 0;
    MAP.binSkipMesh.rotation.x += (tip - MAP.binSkipMesh.rotation.x) * Math.min(1, dt * 3);
    if (MAP.binOre) MAP.binOre.visible = MAP.binDumpT < 1.4 || MAP.binT < 0.85;
    MAP.binSkipCrate.pos.copy(p);
    MAP.binDx = p.x - prev.x;
    MAP.binDz = p.z - prev.z;
    MAP.binDy = p.y - prev.y;
    if (MAP.binSkipPlat) {
      MAP.binSkipPlat.x = p.x;
      MAP.binSkipPlat.z = p.z;
      MAP.binSkipPlat.y = p.y + 0.35;
      MAP.binSkipPlat.top = p.y + 0.62;
    }
    if (MAP.binSheave) MAP.binSheave.rotation.x += dt * (MAP.binBrake && MAP.binBrake.on ? 0.2 : 2.2) * MAP.binDir;
    if (MAP.binBrakeLever) MAP.binBrakeLever.rotation.z = MAP.binBrake && MAP.binBrake.on ? -0.8 : 0.4;
    MAP.binDumpT = Math.max(0, (MAP.binDumpT || 0) - dt);
    if (MAP.binDumpMesh) MAP.binDumpMesh.material.opacity = MAP.binDumpT > 0 ? 0.28 : 0.04;
    if (MAP.binDumpCrate) MAP.binDumpCrate.dead = MAP.binDumpT <= 0.15;
  }
    if (MAP.gateMesh && MAP.gate) {
    const target = MAP.gate.on ? 1.15 : 2.7;
    MAP.gateMesh.position.y += (target - MAP.gateMesh.position.y) * Math.min(1, dt * 2.4);
    if (MAP.gateLever) MAP.gateLever.rotation.z = MAP.gate.on ? -0.8 : 0.35;
    if (MAP.gateCrate) MAP.gateCrate.dead = MAP.gateMesh.position.y > 2.05;
  }
  if (MAP.carMesh && MAP.carPath && MAP.carCrate) {
    const path = MAP.carPath;
    const lens = [];
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const L = path[i].distanceTo(path[i + 1]);
      lens.push(L);
      total += L;
    }
    MAP.carT += dt * 2.4 * MAP.carDir;
    if (MAP.carT >= total) {
      MAP.carT = total;
      MAP.carDir = -1;
      MAP.carBell = true;
    } else if (MAP.carT <= 0) {
      MAP.carT = 0;
      MAP.carDir = 1;
      MAP.carBell = true;
    }
    let remain = MAP.carT;
    for (let i = 0; i < lens.length; i++) {
      if (remain <= lens[i] || i === lens.length - 1) {
        const t = lens[i] > 0 ? Math.min(1, remain / lens[i]) : 0;
        const nx = path[i].x + (path[i + 1].x - path[i].x) * t;
        const nz = path[i].z + (path[i + 1].z - path[i].z) * t;
        MAP.carDx = nx - MAP.carCrate.pos.x;
        MAP.carDz = nz - MAP.carCrate.pos.z;
        MAP.carCrate.pos.x = nx;
        MAP.carCrate.pos.z = nz;
        MAP.carMesh.position.set(nx, 0.02, nz);
        break;
      }
      remain -= lens[i];
    }
    MAP.carClack = (MAP.carClack || 0) - dt;
  }
  if (MAP.raiseMotes) {
    const arr = MAP.raiseMotes.geometry.attributes.position.array;
    const ph = MAP.raiseMotePhase;
    const push = MAP.fan && MAP.fan.on ? 0.02 : 0;
    for (let i = 0; i < ph.length; i++) {
      arr[i * 3 + 1] += Math.sin(performance.now() * 0.0013 + ph[i]) * 0.003;
      arr[i * 3 + 2] += push;
      if (arr[i * 3 + 1] > 2.3) arr[i * 3 + 1] = 0.25;
      if (arr[i * 3 + 2] > -16) arr[i * 3 + 2] = -35.5;
    }
    MAP.raiseMotes.geometry.attributes.position.needsUpdate = true;
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


  if (MAP.thick && MAP.rakeMesh) {
    const spd = MAP.thick.on ? 1.35 : 0.28;
    const prev = MAP.thick.angle;
    MAP.thick.angle += dt * spd;
    MAP.thick.dAngle = MAP.thick.angle - prev;
    MAP.rakeMesh.rotation.y = MAP.thick.angle;
    if (MAP.rakeArms) {
      for (let i = 0; i < MAP.rakeArms.length; i++) {
        const a = MAP.thick.angle + (i * Math.PI) / 2;
        MAP.rakeArms[i].pos.set(MAP.thickDoor.x + Math.cos(a) * 1.05, 0, -44.2 + Math.sin(a) * 1.05);
      }
    }
    if (MAP.thickLever) MAP.thickLever.rotation.z = MAP.thick.on ? -0.8 : 0.4;
    if (MAP.thickLamp) MAP.thickLamp.intensity = MAP.thick.on ? 1.15 : 0.7;
    if (MAP.launderMesh) {
      const target = MAP.thick.on ? 0.42 : 0.08;
      MAP.launderMesh.position.y += (target - MAP.launderMesh.position.y) * Math.min(1, dt * 1.8);
      MAP.launderMesh.material.opacity = MAP.thick.on ? 0.42 : 0.1;
    }
    if (MAP.launderCrate) MAP.launderCrate.dead = !MAP.thick.on;
  }
  if (MAP.thickMotes && MAP.thickMotePhase) {
    const arr = MAP.thickMotes.geometry.attributes.position.array;
    const ph = MAP.thickMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.thick && MAP.thick.on ? 1.8 : 0.7);
      arr[i * 3 + 1] = 0.28 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.thickMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.ball && MAP.ballDrum) {
    const spd = MAP.ball.on ? 1.6 : 0.05;
    MAP.ballDrum.rotation.x += dt * spd;
    if (MAP.ballLever) MAP.ballLever.rotation.z = MAP.ball.on ? -0.75 : 0.35;
    if (MAP.ballLamp) MAP.ballLamp.intensity = MAP.ball.on ? 1.05 : 0.65;
    if (MAP.ballDust) MAP.ballDust.material.opacity = MAP.ball.on ? 0.32 : 0.04;
    if (MAP.ballDustCrate) MAP.ballDustCrate.dead = !MAP.ball.on;
  }
  if (MAP.ballMotes && MAP.ballMotePhase) {
    const arr = MAP.ballMotes.geometry.attributes.position.array;
    const ph = MAP.ballMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.ball && MAP.ball.on ? 2.1 : 0.6);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.1;
    }
    MAP.ballMotes.geometry.attributes.position.needsUpdate = true;
  }



  if (MAP.cyc && MAP.cycCone) {
    const spd = MAP.cyc.on ? 1.8 : 0.08;
    MAP.cycCone.rotation.y += dt * spd;
    if (MAP.cycBand) MAP.cycBand.rotation.z += dt * spd;
    if (MAP.cycScrew) MAP.cycScrew.rotation.y += dt * (MAP.cyc.on ? 2.4 : 0.05);
    if (MAP.cycLever) MAP.cycLever.rotation.z = MAP.cyc.on ? -0.8 : 0.35;
    if (MAP.cycLamp) MAP.cycLamp.intensity = MAP.cyc.on ? 1.1 : 0.65;
    if (MAP.cycDust) MAP.cycDust.material.opacity = MAP.cyc.on ? 0.34 : 0.04;
    if (MAP.cycDustCrate) MAP.cycDustCrate.dead = !MAP.cyc.on;
  }
  if (MAP.cycMotes && MAP.cycMotePhase) {
    const arr = MAP.cycMotes.geometry.attributes.position.array;
    const ph = MAP.cycMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.cyc && MAP.cyc.on ? 2.0 : 0.55);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.cycMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.press && MAP.pressPlates) {
    const target = MAP.press.on ? 0.22 : 1.15;
    MAP.press.gap += (target - MAP.press.gap) * Math.min(1, dt * 2.4);
    MAP.pressPlates[0].position.x = 44.5 - MAP.press.gap * 0.5;
    MAP.pressPlates[1].position.x = 44.5 + MAP.press.gap * 0.5;
    if (MAP.pressLever) MAP.pressLever.rotation.z = MAP.press.on ? -0.75 : 0.35;
    if (MAP.pressLamp) MAP.pressLamp.intensity = MAP.press.on ? 1.15 : 0.6;
    if (MAP.pressCake) MAP.pressCake.material.opacity = MAP.press.on ? 0.36 : 0.04;
    if (MAP.pressCakeCrate) MAP.pressCakeCrate.dead = !MAP.press.on;
    if (MAP.pressRam) MAP.pressRam.position.z = 6.2 + 1.15 + (MAP.press.on ? 0.25 : 0);
  }
  if (MAP.pressMotes && MAP.pressMotePhase) {
    const arr = MAP.pressMotes.geometry.attributes.position.array;
    const ph = MAP.pressMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.press && MAP.press.on ? 2.2 : 0.5);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.pressMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.float && MAP.floatImps) {
    MAP.float.spin += dt * (MAP.float.on ? 2.4 : 0.35);
    for (const imp of MAP.floatImps) imp.rotation.y = MAP.float.spin;
    if (MAP.floatLever) MAP.floatLever.rotation.z = MAP.float.on ? -0.7 : 0.4;
    if (MAP.floatLamp) MAP.floatLamp.intensity = MAP.float.on ? 1.15 : 0.5;
    if (MAP.frothMesh) MAP.frothMesh.material.opacity = MAP.float.on ? 0.42 : 0.04;
    if (MAP.frothCrate) MAP.frothCrate.dead = !MAP.float.on;
  }
  if (MAP.floatMotes && MAP.floatMotePhase) {
    const arr = MAP.floatMotes.geometry.attributes.position.array;
    const ph = MAP.floatMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.float && MAP.float.on ? 2.4 : 0.45);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.floatMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.stack && MAP.stackBoomMesh) {
    if (MAP.stack.on) MAP.stack.angle += dt * 0.55;
    const a = MAP.stack.angle;
    const ox = Math.cos(a) * 1.7;
    const oz = Math.sin(a) * 1.7;
    const px = 23.6 + ox;
    const pz = -26.0 + oz;
    MAP.stackBoom.dx = px - MAP.stackBoom.x;
    MAP.stackBoom.dz = pz - MAP.stackBoom.z;
    MAP.stackBoom.x = px;
    MAP.stackBoom.z = pz;
    MAP.stackBoomMesh.rotation.y = -a;
    if (MAP.stackBoomCrate) MAP.stackBoomCrate.pos.set(px, 0, pz);
    if (MAP.stackLever) MAP.stackLever.rotation.z = MAP.stack.on ? -0.7 : 0.35;
    if (MAP.stackLamp) MAP.stackLamp.intensity = MAP.stack.on ? 1.1 : 0.5;
    const dumping = MAP.stack.on && Math.sin(a) < -0.45;
    if (MAP.stackDust) MAP.stackDust.material.opacity = dumping ? 0.4 : 0.04;
    if (MAP.stackDustCrate) MAP.stackDustCrate.dead = !dumping;
  }
  if (MAP.stackMotes && MAP.stackMotePhase) {
    const arr = MAP.stackMotes.geometry.attributes.position.array;
    const ph = MAP.stackMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.stack && MAP.stack.on ? 1.8 : 0.4);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.stackMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.haulMesh && MAP.haulPath && MAP.haulCrate) {
    const a = MAP.haulPath[0];
    const b = MAP.haulPath[1];
    const span = b.x - a.x;
    MAP.haulT += dt * 2.4 * MAP.haulDir;
    if (MAP.haulT >= span) {
      MAP.haulT = span;
      MAP.haulDir = -1;
      MAP.haulBell = true;
    } else if (MAP.haulT <= 0) {
      MAP.haulT = 0;
      MAP.haulDir = 1;
      MAP.haulBell = true;
    }
    const nx = a.x + MAP.haulT;
    MAP.haulDx = nx - MAP.haulCrate.pos.x;
    MAP.haulDz = 0;
    MAP.haulCrate.pos.set(nx, 0, a.z);
    MAP.haulMesh.position.set(nx, 0, a.z);
    MAP.haulMesh.rotation.y = MAP.haulDir > 0 ? 0 : Math.PI;
  }

  if (MAP.slake && MAP.slakePaddle) {
    if (MAP.slake.on) MAP.slake.spin += dt * 2.4;
    MAP.slakePaddle.rotation.y = MAP.slake.spin;
    if (MAP.slakeLever) MAP.slakeLever.rotation.z = MAP.slake.on ? -0.7 : 0.35;
    if (MAP.slakeLamp) MAP.slakeLamp.intensity = MAP.slake.on ? 1.15 : 0.45;
    if (MAP.slakeSteam) MAP.slakeSteam.material.opacity = MAP.slake.on ? 0.38 : 0.04;
    if (MAP.slakeSteamCrate) MAP.slakeSteamCrate.dead = !MAP.slake.on;
    if (MAP.milkMesh) MAP.milkMesh.material.opacity = MAP.slake.on ? 0.42 : 0.08;
    if (MAP.milkCrate) MAP.milkCrate.dead = !MAP.slake.on;
  }
  if (MAP.slakeMotes && MAP.slakeMotePhase) {
    const arr = MAP.slakeMotes.geometry.attributes.position.array;
    const ph = MAP.slakeMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.slake && MAP.slake.on ? 1.7 : 0.35);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 2.0;
    }
    MAP.slakeMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.rope && MAP.buckets && MAP.ropeSpan) {
    const span = MAP.ropeSpan.zB - MAP.ropeSpan.zA;
    if (MAP.rope.on) {
      MAP.rope.t += dt * 0.22 * MAP.rope.dir;
      if (MAP.rope.t >= 1) {
        MAP.rope.t = 1;
        MAP.rope.dir = -1;
        MAP.ropeBell = true;
        MAP.ropeDustT = 1.3;
      } else if (MAP.rope.t <= 0) {
        MAP.rope.t = 0;
        MAP.rope.dir = 1;
        MAP.ropeBell = true;
      }
    }
    MAP.ropeDustT = Math.max(0, (MAP.ropeDustT || 0) - dt);
    const zs = [
      MAP.ropeSpan.zA + span * MAP.rope.t,
      MAP.ropeSpan.zB - span * MAP.rope.t,
    ];
    for (let i = 0; i < MAP.buckets.length; i++) {
      const b = MAP.buckets[i];
      const nz = zs[i];
      b.dx = 0;
      b.dz = nz - b.z;
      b.z = nz;
      b.x = MAP.ropeSpan.x;
      b.crate.pos.set(b.x, 0, b.z);
      if (MAP.bucketMeshes[i]) MAP.bucketMeshes[i].position.set(b.x, 0, b.z);
    }
    if (MAP.ropeLever) MAP.ropeLever.rotation.z = MAP.rope.on ? -0.65 : 0.3;
    if (MAP.ropeLamp) MAP.ropeLamp.intensity = MAP.rope.on ? 1.05 : 0.4;
    if (MAP.ropeDust) MAP.ropeDust.material.opacity = MAP.ropeDustT > 0 ? 0.4 : 0.04;
    if (MAP.ropeDustCrate) MAP.ropeDustCrate.dead = MAP.ropeDustT <= 0;
  }
  if (MAP.ropeMotes && MAP.ropeMotePhase) {
    const arr = MAP.ropeMotes.geometry.attributes.position.array;
    const ph = MAP.ropeMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.rope && MAP.rope.on ? 1.5 : 0.3);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.8;
    }
    MAP.ropeMotes.geometry.attributes.position.needsUpdate = true;
  }



  if (MAP.strand && MAP.strandCrate && MAP.strandMesh) {
    const run = MAP.sinter && MAP.sinter.on;
    MAP.strand.on = !!run;
    if (run) {
      MAP.strand.t += dt * 0.16 * MAP.strand.dir;
      if (MAP.strand.t >= 1) {
        MAP.strand.t = 1;
        MAP.strand.dir = -1;
        MAP.strandBell = true;
        MAP.strandDustT = 1.5;
      } else if (MAP.strand.t <= 0) {
        MAP.strand.t = 0;
        MAP.strand.dir = 1;
        MAP.strandBell = true;
      }
    }
    MAP.strandDustT = Math.max(0, (MAP.strandDustT || 0) - dt);
    const x0 = 44.4;
    const x1 = 32.4;
    const nx = x0 + (x1 - x0) * MAP.strand.t;
    MAP.strand.dx = nx - MAP.strand.x;
    MAP.strand.x = nx;
    MAP.strand.z = -12.15;
    MAP.strandCrate.pos.set(nx, 0, MAP.strand.z);
    MAP.strandMesh.position.set(nx, 0, MAP.strand.z);
    if (MAP.sinterGate) {
      const up = run ? 3.35 : 1.15;
      MAP.sinterGate.position.y += (up - MAP.sinterGate.position.y) * Math.min(1, dt * 3);
      if (MAP.sinterGateCrate) MAP.sinterGateCrate.dead = MAP.sinterGate.position.y > 2.4;
    }
    if (MAP.sinterLever) MAP.sinterLever.rotation.z = run ? -0.7 : 0.35;
    if (MAP.sinterLamp) MAP.sinterLamp.intensity = run ? 1.25 : 0.4;
    if (MAP.quench) MAP.quench.material.opacity = MAP.strandDustT > 0 ? 0.42 : 0.04;
    if (MAP.quenchCrate) MAP.quenchCrate.dead = MAP.strandDustT <= 0;
  }
  if (MAP.sinterMotes && MAP.sinterMotePhase) {
    const arr = MAP.sinterMotes.geometry.attributes.position.array;
    const ph = MAP.sinterMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.sinter && MAP.sinter.on ? 1.8 : 0.3);
      arr[i * 3 + 1] = 0.3 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.8;
    }
    MAP.sinterMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.sample && MAP.samplePivot && MAP.sampleBoom) {
    const prevX = MAP.sampleBoom.x;
    const prevZ = MAP.sampleBoom.z;
    if (MAP.sample.on) MAP.sample.ang += dt * 0.55;
    const ang = Math.sin(MAP.sample.ang) * 0.65;
    MAP.samplePivot.rotation.y = ang;
    const tipx = -41.2 + Math.cos(ang) * 3.05;
    const tipz = 15.75 + Math.sin(ang) * 3.05;
    MAP.sampleBoom.dx = tipx - prevX;
    MAP.sampleBoom.dz = tipz - prevZ;
    MAP.sampleBoom.x = tipx;
    MAP.sampleBoom.z = tipz;
    if (MAP.sampleTip) MAP.sampleTip.pos.set(tipx, 0, tipz);
    if (MAP.sampleLever) MAP.sampleLever.rotation.z = MAP.sample.on ? -0.65 : 0.3;
    if (MAP.sampleLamp) MAP.sampleLamp.intensity = MAP.sample.on ? 1.1 : 0.4;
    if (MAP.sampleDust) MAP.sampleDust.material.opacity = MAP.sample.on ? 0.4 : 0.04;
    if (MAP.sampleDustCrate) MAP.sampleDustCrate.dead = !MAP.sample.on;
    if (MAP.rejectMesh) MAP.rejectMesh.material.opacity = MAP.sample.on ? 1 : 0.45;
  }
  if (MAP.sampleMotes && MAP.sampleMotePhase) {
    const arr = MAP.sampleMotes.geometry.attributes.position.array;
    const ph = MAP.sampleMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.sample && MAP.sample.on ? 1.4 : 0.28);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.7;
    }
    MAP.sampleMotes.geometry.attributes.position.needsUpdate = true;
  }


  if (MAP.disc && MAP.pellet) {
    const omega = MAP.pellet.on ? 0.85 : 0.05;
    const prev = MAP.disc.ang;
    MAP.disc.ang += dt * omega;
    MAP.disc.dx = 0;
    MAP.disc.dz = 0;
    if (MAP.discArm) {
      MAP.discArm.position.set(MAP.disc.x + Math.cos(MAP.disc.ang) * 1.05, 0.78, MAP.disc.z + Math.sin(MAP.disc.ang) * 1.05);
      MAP.discArm.rotation.y = -MAP.disc.ang;
    }
    if (MAP.discMesh) MAP.discMesh.rotation.y = MAP.disc.ang;
    if (MAP.pelletLever) MAP.pelletLever.rotation.z = MAP.pellet.on ? -0.65 : 0.3;
    if (MAP.pelletLamp) MAP.pelletLamp.intensity = MAP.pellet.on ? 1.15 : 0.35;
    if (MAP.pelletDust) MAP.pelletDust.material.opacity = MAP.pellet.on ? 0.42 : 0.04;
    if (MAP.pelletDustCrate) MAP.pelletDustCrate.dead = !MAP.pellet.on;
    if (MAP.chuteMesh) MAP.chuteMesh.material.opacity = MAP.pellet.on ? 1 : 0.4;
    MAP.disc._omega = omega;
    MAP.disc._prev = prev;
  }
  if (MAP.pelletMotes && MAP.pelletMotePhase) {
    const arr = MAP.pelletMotes.geometry.attributes.position.array;
    const ph = MAP.pelletMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.pellet && MAP.pellet.on ? 1.6 : 0.25);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.6;
    }
    MAP.pelletMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.clarBridge && MAP.clar) {
    const prevX = MAP.clarBridge.x;
    MAP.clarBridge.phase += dt * (MAP.clar.on ? 0.7 : 0.04);
    MAP.clarBridge.x = -36.5 + Math.sin(MAP.clarBridge.phase) * 1.55;
    MAP.clarBridge.dx = MAP.clarBridge.x - prevX;
    MAP.clarBridge.dz = 0;
    if (MAP.clarBridgeMesh) MAP.clarBridgeMesh.position.x = MAP.clarBridge.x;
    const bc = MAP.crates.find((c) => c.mesh === MAP.clarBridgeMesh);
    if (bc) bc.pos.x = MAP.clarBridge.x;
    if (MAP.clarLever) MAP.clarLever.rotation.z = MAP.clar.on ? -0.65 : 0.3;
    if (MAP.clarLamp) MAP.clarLamp.intensity = MAP.clar.on ? 1.05 : 0.32;
    if (MAP.clarDust) MAP.clarDust.material.opacity = MAP.clar.on ? 0.4 : 0.04;
    if (MAP.clarDustCrate) MAP.clarDustCrate.dead = !MAP.clar.on;
    if (MAP.underMesh) MAP.underMesh.material.opacity = MAP.clar.on ? 0.85 : 0.35;
    if (MAP.clarTank) MAP.clarTank.material.opacity = MAP.clar.on ? 0.72 : 0.4;
  }
  if (MAP.clarMotes && MAP.clarMotePhase) {
    const arr = MAP.clarMotes.geometry.attributes.position.array;
    const ph = MAP.clarMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.clar && MAP.clar.on ? 1.3 : 0.22);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.clarMotes.geometry.attributes.position.needsUpdate = true;
  }


  if (MAP.screwMesh && MAP.silo) {
    MAP.screwMesh.rotation.x += dt * (MAP.silo.on ? 3.4 : 0.15);
    if (MAP.siloLever) MAP.siloLever.rotation.z = MAP.silo.on ? -0.6 : 0.28;
    if (MAP.siloLamp) MAP.siloLamp.intensity = MAP.silo.on ? 1.05 : 0.3;
    if (MAP.siloDust) MAP.siloDust.material.opacity = MAP.silo.on ? 0.4 : 0.04;
    if (MAP.siloDustCrate) MAP.siloDustCrate.dead = !MAP.silo.on;
  }
  if (MAP.siloMotes && MAP.siloMotePhase) {
    const arr = MAP.siloMotes.geometry.attributes.position.array;
    const ph = MAP.siloMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.silo && MAP.silo.on ? 1.2 : 0.2);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.siloMotes.geometry.attributes.position.needsUpdate = true;
  }


  if (MAP.jigDeck && MAP.jig) {
    const prevZ = MAP.jigDeck.z;
    MAP.jigDeck.phase += dt * (MAP.jig.on ? 4.6 : 0.2);
    MAP.jigDeck.z = -42.8 + Math.sin(MAP.jigDeck.phase) * (MAP.jig.on ? 0.55 : 0.04);
    MAP.jigDeck.dz = MAP.jigDeck.z - prevZ;
    MAP.jigDeck.dx = 0;
    if (MAP.jigDeckMesh) MAP.jigDeckMesh.position.z = MAP.jigDeck.z;
    if (MAP.jigDeckCrate) MAP.jigDeckCrate.pos.z = MAP.jigDeck.z;
    if (MAP.jigLever) MAP.jigLever.rotation.z = MAP.jig.on ? -0.62 : 0.28;
    if (MAP.jigLamp) MAP.jigLamp.intensity = MAP.jig.on ? 1.1 : 0.32;
    if (MAP.jigDust) MAP.jigDust.material.opacity = MAP.jig.on ? 0.42 : 0.04;
    if (MAP.jigDustCrate) MAP.jigDustCrate.dead = !MAP.jig.on;
    if (MAP.hutchMesh) MAP.hutchMesh.material.opacity = MAP.jig.on ? 0.72 : 0.28;
  }
  if (MAP.jigMotes && MAP.jigMotePhase) {
    const arr = MAP.jigMotes.geometry.attributes.position.array;
    const ph = MAP.jigMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.jig && MAP.jig.on ? 1.8 : 0.22);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.jigMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.coolCar && MAP.cool) {
    const prevX = MAP.coolCar.x;
    const spd = MAP.cool.on ? 1.7 : 0;
    MAP.coolCar.t += dt * spd * MAP.coolCar.dir;
    if (MAP.coolCar.t > 1.15) { MAP.coolCar.t = 1.15; MAP.coolCar.dir = -1; MAP.coolBell = true; }
    else if (MAP.coolCar.t < -1.15) { MAP.coolCar.t = -1.15; MAP.coolCar.dir = 1; MAP.coolBell = true; }
    MAP.coolCar.x = 18.85 + MAP.coolCar.t;
    MAP.coolCar.dx = MAP.coolCar.x - prevX;
    MAP.coolCar.dz = 0;
    if (MAP.coolCarMesh) MAP.coolCarMesh.position.x = MAP.coolCar.x;
    if (MAP.coolCarCrate) MAP.coolCarCrate.pos.x = MAP.coolCar.x;
    if (MAP.coolShell) MAP.coolShell.rotation.x += dt * (MAP.cool.on ? 1.8 : 0.08);
    if (MAP.coolLever) MAP.coolLever.rotation.z = MAP.cool.on ? -0.62 : 0.28;
    if (MAP.coolLamp) MAP.coolLamp.intensity = MAP.cool.on ? 1.25 : 0.3;
    if (MAP.coolDust) MAP.coolDust.material.opacity = MAP.cool.on ? 0.4 : 0.04;
    if (MAP.coolDustCrate) MAP.coolDustCrate.dead = !MAP.cool.on;
    if (MAP.quenchMesh) MAP.quenchMesh.material.opacity = MAP.cool.on ? 0.7 : 0.22;
  }
  if (MAP.coolMotes && MAP.coolMotePhase) {
    const arr = MAP.coolMotes.geometry.attributes.position.array;
    const ph = MAP.coolMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.cool && MAP.cool.on ? 1.4 : 0.2);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.6;
    }
    MAP.coolMotes.geometry.attributes.position.needsUpdate = true;
  }

  if (MAP.bagRack && MAP.bag) {
    const prevX = MAP.bagRack.x;
    const spd = MAP.bag.on ? 2.4 : 0;
    MAP.bagRack.t += dt * spd * MAP.bagRack.dir;
    if (MAP.bagRack.t > 0.62) { MAP.bagRack.t = 0.62; MAP.bagRack.dir = -1; MAP.bagBell = true; }
    else if (MAP.bagRack.t < -0.62) { MAP.bagRack.t = -0.62; MAP.bagRack.dir = 1; MAP.bagBell = true; }
    MAP.bagRack.x = -8.6 + MAP.bagRack.t;
    MAP.bagRack.dx = MAP.bagRack.x - prevX;
    MAP.bagRack.dz = 0;
    if (MAP.bagRackMesh) MAP.bagRackMesh.position.x = MAP.bagRack.x;
    if (MAP.bagRackCrate) MAP.bagRackCrate.pos.x = MAP.bagRack.x;
    if (MAP.bagLever) MAP.bagLever.rotation.z = MAP.bag.on ? -0.6 : 0.28;
    if (MAP.bagLamp) MAP.bagLamp.intensity = MAP.bag.on ? 1.15 : 0.28;
    if (MAP.bagDust) MAP.bagDust.material.opacity = MAP.bag.on ? 0.42 : 0.04;
    if (MAP.bagDustCrate) MAP.bagDustCrate.dead = !MAP.bag.on;
    if (MAP.finesMesh) MAP.finesMesh.material.opacity = MAP.bag.on ? 0.62 : 0.22;
  }
  if (MAP.bagMotes && MAP.bagMotePhase) {
    const arr = MAP.bagMotes.geometry.attributes.position.array;
    const ph = MAP.bagMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.bag && MAP.bag.on ? 1.6 : 0.18);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.bagMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.dryShell && MAP.dry) {
    const prevX = MAP.dryShell.x;
    const spd = MAP.dry.on ? 1.55 : 0;
    MAP.dryShell.t += dt * spd * MAP.dryShell.dir;
    if (MAP.dryShell.t > 0.85) { MAP.dryShell.t = 0.85; MAP.dryShell.dir = -1; MAP.dryBell = true; }
    else if (MAP.dryShell.t < -0.85) { MAP.dryShell.t = -0.85; MAP.dryShell.dir = 1; MAP.dryBell = true; }
    MAP.dryShell.x = -24.2 + MAP.dryShell.t;
    MAP.dryShell.dx = MAP.dryShell.x - prevX;
    MAP.dryShell.dz = 0;
    if (MAP.dryShellMesh) {
      MAP.dryShellMesh.position.x = MAP.dryShell.x;
      MAP.dryShellMesh.rotation.z += dt * (MAP.dry.on ? 1.6 : 0.05);
    }
    if (MAP.dryShellCrate) MAP.dryShellCrate.pos.x = MAP.dryShell.x;
    if (MAP.dryLever) MAP.dryLever.rotation.z = MAP.dry.on ? -0.62 : 0.28;
    if (MAP.dryLamp) MAP.dryLamp.intensity = MAP.dry.on ? 1.3 : 0.26;
    if (MAP.dryDust) MAP.dryDust.material.opacity = MAP.dry.on ? 0.44 : 0.04;
    if (MAP.dryDustCrate) MAP.dryDustCrate.dead = !MAP.dry.on;
    if (MAP.exhaustMesh) MAP.exhaustMesh.material.opacity = MAP.dry.on ? 0.68 : 0.2;
  }
  if (MAP.dryMotes && MAP.dryMotePhase) {
    const arr = MAP.dryMotes.geometry.attributes.position.array;
    const ph = MAP.dryMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.dry && MAP.dry.on ? 1.5 : 0.16);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.6;
    }
    MAP.dryMotes.geometry.attributes.position.needsUpdate = true;
  }

  if (MAP.locoEngine && MAP.loco) {
    const prevZ = MAP.locoEngine.z;
    const spd = MAP.loco.on ? 1.35 : 0;
    MAP.locoEngine.t += dt * spd * MAP.locoEngine.dir;
    if (MAP.locoEngine.t > 0.85) { MAP.locoEngine.t = 0.85; MAP.locoEngine.dir = -1; MAP.locoBell = true; }
    else if (MAP.locoEngine.t < -0.85) { MAP.locoEngine.t = -0.85; MAP.locoEngine.dir = 1; MAP.locoBell = true; }
    MAP.locoEngine.z = -32.2 + MAP.locoEngine.t;
    MAP.locoEngine.dz = MAP.locoEngine.z - prevZ;
    MAP.locoEngine.dx = 0;
    if (MAP.locoMesh) MAP.locoMesh.position.z = MAP.locoEngine.z;
    if (MAP.locoCrate) MAP.locoCrate.pos.z = MAP.locoEngine.z;
    if (MAP.tender) {
      MAP.tender.z = MAP.locoEngine.z + 1.7;
      if (MAP.tenderMesh) MAP.tenderMesh.position.z = MAP.tender.z;
      if (MAP.tenderCrate) MAP.tenderCrate.pos.z = MAP.tender.z;
    }
    if (MAP.locoHead) MAP.locoHead.position.z = MAP.locoEngine.z;
    if (MAP.locoLever) MAP.locoLever.rotation.z = MAP.loco.on ? -0.7 : 0.28;
    if (MAP.locoLamp) MAP.locoLamp.intensity = MAP.loco.on ? 1.25 : 0.22;
    if (MAP.locoHead) MAP.locoHead.intensity = MAP.loco.on ? 1.4 : 0.12;
    if (MAP.locoDust) MAP.locoDust.material.opacity = MAP.loco.on ? 0.46 : 0.04;
    if (MAP.locoDustCrate) MAP.locoDustCrate.dead = !MAP.loco.on;
    if (MAP.steamMesh) MAP.steamMesh.material.opacity = MAP.loco.on ? 0.62 : 0.18;
  }
  if (MAP.locoMotes && MAP.locoMotePhase) {
    const arr = MAP.locoMotes.geometry.attributes.position.array;
    const ph = MAP.locoMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.loco && MAP.loco.on ? 1.7 : 0.14);
      arr[i * 3 + 1] = 0.25 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.6;
    }
    MAP.locoMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.agitRake && MAP.agit) {
    const w = MAP.agit.on ? 0.9 : 0.04;
    MAP.agitRake.ang += dt * w;
    if (MAP.agitRakeMesh) MAP.agitRakeMesh.rotation.y = MAP.agitRake.ang;
    if (MAP.agitRakeArm) MAP.agitRakeArm.rotation.y = MAP.agitRake.ang;
    if (MAP.agitLever) MAP.agitLever.rotation.z = MAP.agit.on ? -0.62 : 0.28;
    if (MAP.agitLamp) MAP.agitLamp.intensity = MAP.agit.on ? 1.2 : 0.22;
    if (MAP.agitDust) MAP.agitDust.material.opacity = MAP.agit.on ? 0.42 : 0.04;
    if (MAP.agitDustCrate) MAP.agitDustCrate.dead = !MAP.agit.on;
    if (MAP.slurryMesh) MAP.slurryMesh.material.opacity = MAP.agit.on ? 0.6 : 0.2;
  }
  if (MAP.agitMotes && MAP.agitMotePhase) {
    const arr = MAP.agitMotes.geometry.attributes.position.array;
    const ph = MAP.agitMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.agit && MAP.agit.on ? 1.4 : 0.15);
      arr[i * 3 + 1] = 0.22 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.4;
    }
    MAP.agitMotes.geometry.attributes.position.needsUpdate = true;
  }

  if (MAP.scrubTray && MAP.scrub) {
    const prevX = MAP.scrubTray.x;
    const spd = MAP.scrub.on ? 1.15 : 0;
    MAP.scrubTray.t += dt * spd * MAP.scrubTray.dir;
    if (MAP.scrubTray.t > 0.7) { MAP.scrubTray.t = 0.7; MAP.scrubTray.dir = -1; MAP.scrubBell = true; }
    else if (MAP.scrubTray.t < -0.7) { MAP.scrubTray.t = -0.7; MAP.scrubTray.dir = 1; MAP.scrubBell = true; }
    MAP.scrubTray.x = 36.4 + MAP.scrubTray.t;
    MAP.scrubTray.dx = MAP.scrubTray.x - prevX;
    MAP.scrubTray.dz = 0;
    if (MAP.scrubTrayMesh) MAP.scrubTrayMesh.position.x = MAP.scrubTray.x;
    if (MAP.scrubTrayCrate) MAP.scrubTrayCrate.pos.x = MAP.scrubTray.x;
    if (MAP.scrubLever) MAP.scrubLever.rotation.z = MAP.scrub.on ? -0.65 : 0.28;
    if (MAP.scrubLamp) MAP.scrubLamp.intensity = MAP.scrub.on ? 1.2 : 0.2;
    if (MAP.scrubDust) MAP.scrubDust.material.opacity = MAP.scrub.on ? 0.44 : 0.04;
    if (MAP.scrubDustCrate) MAP.scrubDustCrate.dead = !MAP.scrub.on;
    if (MAP.liquorMesh) MAP.liquorMesh.material.opacity = MAP.scrub.on ? 0.58 : 0.18;
  }
  if (MAP.scrubMotes && MAP.scrubMotePhase) {
    const arr = MAP.scrubMotes.geometry.attributes.position.array;
    const ph = MAP.scrubMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.scrub && MAP.scrub.on ? 1.5 : 0.12);
      arr[i * 3 + 1] = 0.24 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.scrubMotes.geometry.attributes.position.needsUpdate = true;
  }

  if (MAP.cathode && MAP.ew) {
    const prevX = MAP.cathode.x;
    const spd = MAP.ew.on ? 0.85 : 0;
    MAP.cathode.t += dt * spd * MAP.cathode.dir;
    if (MAP.cathode.t > 0.65) { MAP.cathode.t = 0.65; MAP.cathode.dir = -1; MAP.ewBell = true; }
    else if (MAP.cathode.t < -0.65) { MAP.cathode.t = -0.65; MAP.cathode.dir = 1; MAP.ewBell = true; }
    MAP.cathode.x = -40.6 + MAP.cathode.t;
    MAP.cathode.dx = MAP.cathode.x - prevX;
    MAP.cathode.dz = 0;
    if (MAP.cathodeMesh) MAP.cathodeMesh.position.x = MAP.cathode.x;
    if (MAP.cathodeCrate) MAP.cathodeCrate.pos.x = MAP.cathode.x;
    if (MAP.ewLever) MAP.ewLever.rotation.z = MAP.ew.on ? -0.65 : 0.28;
    if (MAP.ewLamp) MAP.ewLamp.intensity = MAP.ew.on ? 1.25 : 0.18;
    if (MAP.ewDust) MAP.ewDust.material.opacity = MAP.ew.on ? 0.46 : 0.04;
    if (MAP.ewDustCrate) MAP.ewDustCrate.dead = !MAP.ew.on;
    if (MAP.acidMesh) MAP.acidMesh.material.opacity = MAP.ew.on ? 0.6 : 0.16;
  }
  if (MAP.ewMotes && MAP.ewMotePhase) {
    const arr = MAP.ewMotes.geometry.attributes.position.array;
    const ph = MAP.ewMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.ew && MAP.ew.on ? 1.6 : 0.12);
      arr[i * 3 + 1] = 0.24 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.5;
    }
    MAP.ewMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.mantle && MAP.cone) {
    const w = MAP.cone.on ? 1.15 : 0.05;
    MAP.mantle.ang += dt * w;
    MAP.mantle._omega = w;
    if (MAP.mantleMesh) MAP.mantleMesh.rotation.y = MAP.mantle.ang;
    if (MAP.coneLever) MAP.coneLever.rotation.z = MAP.cone.on ? -0.7 : 0.26;
    if (MAP.coneLamp) MAP.coneLamp.intensity = MAP.cone.on ? 1.3 : 0.16;
    if (MAP.coneDust) MAP.coneDust.material.opacity = MAP.cone.on ? 0.48 : 0.04;
    if (MAP.coneDustCrate) MAP.coneDustCrate.dead = !MAP.cone.on;
    if (MAP.dischargeMesh) MAP.dischargeMesh.material.opacity = MAP.cone.on ? 0.55 : 0.16;
  }
  if (MAP.coneMotes && MAP.coneMotePhase) {
    const arr = MAP.coneMotes.geometry.attributes.position.array;
    const ph = MAP.coneMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.cone && MAP.cone.on ? 1.7 : 0.1);
      arr[i * 3 + 1] = 0.22 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.4;
    }
    MAP.coneMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.clasRake && MAP.clas) {
    const prevZ = MAP.clasRake.z;
    const spd = MAP.clas.on ? 0.9 : 0;
    MAP.clasRake.t += dt * spd * MAP.clasRake.dir;
    if (MAP.clasRake.t > 0.7) { MAP.clasRake.t = 0.7; MAP.clasRake.dir = -1; MAP.clasBell = true; }
    else if (MAP.clasRake.t < -0.7) { MAP.clasRake.t = -0.7; MAP.clasRake.dir = 1; MAP.clasBell = true; }
    MAP.clasRake.z = 26.4 + MAP.clasRake.t;
    MAP.clasRake.dz = MAP.clasRake.z - prevZ;
    MAP.clasRake.dx = 0;
    if (MAP.clasRakeMesh) MAP.clasRakeMesh.position.z = MAP.clasRake.z;
    if (MAP.clasRakeCrate) MAP.clasRakeCrate.pos.z = MAP.clasRake.z;
    if (MAP.clasLever) MAP.clasLever.rotation.z = MAP.clas.on ? -0.68 : 0.26;
    if (MAP.clasLamp) MAP.clasLamp.intensity = MAP.clas.on ? 1.25 : 0.16;
    if (MAP.clasDust) MAP.clasDust.material.opacity = MAP.clas.on ? 0.48 : 0.04;
    if (MAP.clasDustCrate) MAP.clasDustCrate.dead = !MAP.clas.on;
    if (MAP.sandsMesh) MAP.sandsMesh.material.opacity = MAP.clas.on ? 0.55 : 0.16;
  }
  if (MAP.clasMotes && MAP.clasMotePhase) {
    const arr = MAP.clasMotes.geometry.attributes.position.array;
    const ph = MAP.clasMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.clas && MAP.clas.on ? 1.55 : 0.1);
      arr[i * 3 + 1] = 0.22 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.4;
    }
    MAP.clasMotes.geometry.attributes.position.needsUpdate = true;
  }
  if (MAP.magDrum && MAP.mags) {
    const w = MAP.mags.on ? 1.05 : 0.04;
    MAP.magDrum.ang += dt * w;
    MAP.magDrum._omega = w;
    if (MAP.magDrumMesh) MAP.magDrumMesh.rotation.y = MAP.magDrum.ang;
    if (MAP.magsLever) MAP.magsLever.rotation.z = MAP.mags.on ? -0.7 : 0.24;
    if (MAP.magsLamp) MAP.magsLamp.intensity = MAP.mags.on ? 1.28 : 0.16;
    if (MAP.magsDust) MAP.magsDust.material.opacity = MAP.mags.on ? 0.46 : 0.04;
    if (MAP.magsDustCrate) MAP.magsDustCrate.dead = !MAP.mags.on;
    if (MAP.concMesh) MAP.concMesh.material.opacity = MAP.mags.on ? 0.55 : 0.16;
  }
  if (MAP.magsMotes && MAP.magsMotePhase) {
    const arr = MAP.magsMotes.geometry.attributes.position.array;
    const ph = MAP.magsMotePhase;
    for (let i = 0; i < ph.length; i++) {
      ph[i] += dt * (MAP.mags && MAP.mags.on ? 1.6 : 0.1);
      arr[i * 3 + 1] = 0.22 + ((Math.sin(ph[i]) + 1) * 0.5) * 1.4;
    }
    MAP.magsMotes.geometry.attributes.position.needsUpdate = true;
  }

  if (MAP.face) {
    if (MAP.face.armed) {
      MAP.face.fuse -= dt;
      if (MAP.faceLamp) MAP.faceLamp.intensity = 0.4 + Math.sin(MAP.face.fuse * 18) * 0.35;
      if (MAP.face.fuse <= 0) {
        MAP.face.armed = false;
        MAP.face.fuse = 0;
        MAP.fall.live = true;
        MAP.fall.left = 3.4;
        MAP.fallBell = true;
      }
    }
    if (MAP.fall && MAP.fall.live) {
      MAP.fall.left -= dt;
      if (MAP.fall.left <= 0) {
        MAP.fall.live = false;
        MAP.rubbleT = 9;
      }
    }
    if (MAP.rubbleT > 0) MAP.rubbleT -= dt;
    if (MAP.rubble) {
      const up = (MAP.rubbleT || 0) > 0;
      for (const r of MAP.rubble) {
        r.mesh.visible = up;
        r.crate.dead = !up;
      }
    }
    const live = MAP.fall && MAP.fall.live;
    if (MAP.fallDust) MAP.fallDust.material.opacity = live ? 0.5 : 0.04;
    if (MAP.fallDustCrate) MAP.fallDustCrate.dead = !live;
    if (MAP.faceLever) MAP.faceLever.rotation.z = MAP.face.armed ? -0.8 : 0.25;
    if (!MAP.face.armed && MAP.faceLamp) MAP.faceLamp.intensity = live ? 0.9 : 0.12;
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
