import * as THREE from "three";

export const LOADOUT = [
  { id: "carbine", name: "CARBINE", mag: 30, reserve: 90, dmg: 24, rpm: 620, spread: 0.012, reload: 1.7, auto: true },
  { id: "scatter", name: "SCATTER", mag: 8, reserve: 32, dmg: 11, rpm: 90, spread: 0.08, pellets: 7, reload: 2.2, auto: false },
  { id: "sidearm", name: "SIDEARM", mag: 12, reserve: 36, dmg: 28, rpm: 280, spread: 0.018, reload: 1.2, auto: false },
];

export function makeViewmodel(camera) {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x2a2e28, metalness: 0.6, roughness: 0.4 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1c18, metalness: 0.3, roughness: 0.6 });
  const grip = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.9 });

  const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 0.28), metal);
  receiver.position.set(0.18, -0.16, -0.42);
  const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.34), dark);
  barrel.position.set(0.18, -0.14, -0.64);
  const stock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.16), grip);
  stock.position.set(0.18, -0.17, -0.26);
  const mag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.06), dark);
  mag.position.set(0.18, -0.24, -0.4);
  group.add(receiver, barrel, stock, mag);
  group.name = "viewmodel";
  camera.add(group);
  return { group, barrel, kick: 0, inspect: 0 };
}

export function updateViewmodel(vm, dt, moving, shooting, inspecting) {
  vm.kick = Math.max(0, vm.kick - dt * 8);
  if (inspecting) vm.inspect = Math.min(1, vm.inspect + dt * 2);
  else vm.inspect = Math.max(0, vm.inspect - dt * 3);
  const t = performance.now() * 0.008;
  const bob = moving ? Math.sin(t) * 0.012 : 0;
  vm.group.position.set(
    0.02 * vm.inspect,
    bob - vm.kick * 0.04,
    vm.kick * 0.05
  );
  vm.group.rotation.set(
    -vm.kick * 0.25 + vm.inspect * 0.6,
    vm.inspect * 1.1,
    vm.inspect * 0.3
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
