import * as THREE from "three";

export const LOADOUT = [
  { id: "carbine", name: "CARBINE", mag: 30, reserve: 90, dmg: 24, rpm: 620, spread: 0.012, reload: 1.7, auto: true },
  { id: "scatter", name: "SCATTER", mag: 8, reserve: 32, dmg: 11, rpm: 90, spread: 0.08, pellets: 7, reload: 2.2, auto: false },
  { id: "sidearm", name: "SIDEARM", mag: 12, reserve: 36, dmg: 28, rpm: 280, spread: 0.018, reload: 1.2, auto: false },
];

const RECOIL = [
  [{ p: 0.012, y: 0.001 }, { p: 0.014, y: -0.002 }, { p: 0.011, y: 0.003 }, { p: 0.013, y: -0.004 }],
  [{ p: 0.042, y: 0.006 }, { p: 0.036, y: -0.008 }],
  [{ p: 0.018, y: 0.004 }, { p: 0.016, y: -0.003 }],
];

function mat(color, metal = 0.45, rough = 0.5) {
  return new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough });
}

function box(parent, w, h, d, x, y, z, material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function buildCarbine() {
  const g = new THREE.Group();
  const steel = mat(0x2c312c, 0.62, 0.38);
  const dark = mat(0x161814, 0.35, 0.62);
  const grip = mat(0x3c2c1c, 0.05, 0.9);
  box(g, 0.07, 0.08, 0.32, 0.16, -0.16, -0.42, steel);
  box(g, 0.028, 0.028, 0.42, 0.16, -0.145, -0.72, dark);
  box(g, 0.05, 0.06, 0.18, 0.16, -0.17, -0.22, grip);
  const mag = box(g, 0.035, 0.13, 0.05, 0.16, -0.25, -0.4, dark);
  const handle = box(g, 0.02, 0.035, 0.06, 0.2, -0.12, -0.34, steel);
  const sight = box(g, 0.018, 0.03, 0.04, 0.16, -0.1, -0.5, dark);
  g.userData = { mag, handle, sight };
  return g;
}

function buildScatter() {
  const g = new THREE.Group();
  const steel = mat(0x3a342c, 0.5, 0.45);
  const dark = mat(0x1a1814, 0.3, 0.6);
  const wood = mat(0x5a3a22, 0.04, 0.88);
  box(g, 0.08, 0.07, 0.22, 0.18, -0.15, -0.36, steel);
  const tubeL = box(g, 0.028, 0.028, 0.46, 0.155, -0.13, -0.62, dark);
  const tubeR = box(g, 0.028, 0.028, 0.46, 0.205, -0.13, -0.62, dark);
  const pump = box(g, 0.07, 0.04, 0.12, 0.18, -0.16, -0.5, wood);
  box(g, 0.05, 0.07, 0.14, 0.18, -0.16, -0.22, wood);
  g.userData = { tubeL, tubeR, pump };
  return g;
}

function buildSidearm() {
  const g = new THREE.Group();
  const steel = mat(0x2a2e32, 0.7, 0.32);
  const dark = mat(0x121416, 0.4, 0.55);
  const grip = mat(0x2a241c, 0.08, 0.85);
  box(g, 0.05, 0.06, 0.14, 0.2, -0.15, -0.34, steel);
  const slide = box(g, 0.042, 0.032, 0.16, 0.2, -0.125, -0.36, steel);
  box(g, 0.016, 0.016, 0.12, 0.2, -0.14, -0.46, dark);
  box(g, 0.04, 0.09, 0.05, 0.2, -0.21, -0.3, grip);
  g.userData = { slide };
  return g;
}

export function makeViewmodel(camera) {
  const group = new THREE.Group();
  group.name = "viewmodel";
  const guns = [buildCarbine(), buildScatter(), buildSidearm()];
  guns.forEach((g, i) => {
    g.visible = i === 0;
    group.add(g);
  });
  const stain = new THREE.Mesh(
    new THREE.PlaneGeometry(0.22, 0.12),
    new THREE.MeshBasicMaterial({ color: 0x6a1a14, transparent: true, opacity: 0, depthWrite: false })
  );
  stain.position.set(0.17, -0.18, -0.36);
  group.add(stain);
  camera.add(group);
  const vm = { group, guns, stain, gun: 0, kick: 0, inspect: 0, stainAmt: 0, pump: 0, slide: 0, handle: 0 };
  return vm;
}

export function setViewmodelGun(vm, index) {
  const i = Math.max(0, Math.min(2, index | 0));
  vm.gun = i;
  vm.guns.forEach((g, n) => {
    g.visible = n === i;
  });
  vm.kick = Math.max(vm.kick, 0.25);
}

export function stainViewmodel(vm, amt = 0.6) {
  vm.stainAmt = Math.min(1, (vm.stainAmt || 0) + amt * 0.35);
}

export function applyRecoil(player, gun, burst = 0) {
  const pat = RECOIL[gun] || RECOIL[0];
  const step = pat[Math.abs(burst | 0) % pat.length];
  player.pitch += step.p;
  player.yaw += step.y * (burst % 2 === 0 ? 1 : -1);
  player.pitch = Math.max(-1.35, Math.min(1.35, player.pitch));
}

export function updateViewmodel(vm, dt, moving, shooting, inspecting, ads = false, reloading = false, sprint = false, melee = false, yawVel = 0, pitchVel = 0, empty = false, jam = false, laser = false) {
  vm.kick = Math.max(0, vm.kick - dt * (ads ? 7 : 9));
  if (inspecting) vm.inspect = Math.min(1, vm.inspect + dt * 2);
  else vm.inspect = Math.max(0, vm.inspect - dt * 3);
  vm.stainAmt = Math.max(0, (vm.stainAmt || 0) - dt * 0.08);
  if (vm.stain && vm.stain.material) vm.stain.material.opacity = vm.stainAmt * 0.55;
  if (shooting) {
    vm.handle = 1;
    vm.slide = 1;
    vm.pump = 1;
  }
  vm.handle = Math.max(0, vm.handle - dt * 6);
  vm.slide = Math.max(0, vm.slide - dt * 8);
  vm.pump = Math.max(0, vm.pump - dt * 3.2);
  const carb = vm.guns[0];
  const scat = vm.guns[1];
  const side = vm.guns[2];
  if (carb && carb.userData.handle) carb.userData.handle.position.z = -0.34 + vm.handle * 0.045;
  if (scat && scat.userData.pump) scat.userData.pump.position.z = -0.5 + (reloading ? 0.06 : vm.pump * 0.07);
  if (side && side.userData.slide) side.userData.slide.position.z = -0.36 + vm.slide * 0.04 + (empty ? 0.035 : 0);
  const t = performance.now() * 0.008;
  const bob = moving && !ads ? Math.sin(t) * (sprint ? 0.02 : 0.012) : 0;
  const adsDrop = ads ? -0.04 : 0;
  const sprintDrop = sprint ? -0.06 : 0;
  const restX = vm.gun === 2 ? 0.05 : vm.gun === 1 ? -0.02 : 0.01;
  const restY = vm.gun === 2 ? -0.02 : vm.gun === 1 ? -0.035 : 0;
  const restZ = vm.gun === 2 ? 0.04 : vm.gun === 1 ? 0.02 : 0;
  vm.group.position.set(
    restX + 0.02 * vm.inspect + yawVel * 0.015,
    bob - vm.kick * 0.04 + adsDrop + sprintDrop + restY + (melee ? 0.04 : 0),
    vm.kick * 0.05 + (ads ? 0.06 : 0) + restZ + (jam ? 0.02 : 0)
  );
  vm.group.rotation.set(
    -vm.kick * (vm.gun === 1 ? 0.4 : 0.25) + vm.inspect * 0.6 + pitchVel * 0.02,
    vm.inspect * 1.1 + yawVel * 0.03 + (laser ? 0.01 : 0),
    vm.inspect * 0.3 + (melee ? 0.5 : 0) + (reloading ? 0.12 : 0)
  );
}

export function hitscan(origin, dir, bots, range = 90) {
  const hits = [];
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const to = b.pos.clone().add(new THREE.Vector3(0, b.crouch ? 0.9 : 1.4, 0)).sub(origin);
    const dist = to.length();
    if (dist > range) continue;
    const nd = to.normalize();
    const aim = dir.dot(nd);
    const thresh = 0.992 - Math.min(0.03, dist * 0.0002);
    if (aim > thresh) hits.push({ bot: b, dist, head: aim > 0.998 && to.y > 1.15 });
  }
  hits.sort((a, c) => a.dist - c.dist);
  return hits[0] || null;
}
