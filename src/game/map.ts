import * as THREE from "three";
import { makeAabb } from "./collision";
import type { Aabb } from "./types";

const COL = {
  dirt: 0x5a4a36,
  sand: 0x8a7352,
  concrete: 0x6d675c,
  wall: 0x4a463c,
  rust: 0x6b3a28,
  olive: 0x3f4634,
  metal: 0x3a3d40,
  crate: 0x6e5434,
  dark: 0x2a2924,
  roof: 0x3b332c,
};

function box(
  scene: THREE.Scene,
  walls: Aabb[],
  mats: Record<string, THREE.MeshStandardMaterial>,
  mat: string,
  x: number,
  y: number,
  z: number,
  w: number,
  h: number,
  d: number,
  collide = true,
  receive = true,
) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats[mat]);
  mesh.position.set(x, y + h * 0.5, z);
  mesh.castShadow = h < 14;
  mesh.receiveShadow = receive;
  scene.add(mesh);
  if (collide) walls.push(makeAabb(x, y, z, w, h, d));
  return mesh;
}

export function buildCompound(scene: THREE.Scene): Aabb[] {
  const walls: Aabb[] = [];
  const mats: Record<string, THREE.MeshStandardMaterial> = {};
  for (const [k, c] of Object.entries(COL)) {
    mats[k] = new THREE.MeshStandardMaterial({
      color: c,
      roughness: k === "metal" ? 0.35 : 0.86,
      metalness: k === "metal" ? 0.55 : 0.04,
    });
  }

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), mats.dirt);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const dust = new THREE.Mesh(
    new THREE.CircleGeometry(38, 24),
    new THREE.MeshStandardMaterial({ color: 0x7a6548, roughness: 1 }),
  );
  dust.rotation.x = -Math.PI / 2;
  dust.position.y = 0.02;
  dust.receiveShadow = true;
  scene.add(dust);

  const T = 1.1;
  const H = 4.4;
  const S = 42;
  box(scene, walls, mats, "wall", 0, 0, -S, 86, H, T);
  box(scene, walls, mats, "wall", 0, 0, S, 86, H, T);
  box(scene, walls, mats, "wall", -S, 0, 0, T, H, 86);
  box(scene, walls, mats, "wall", S, 0, 0, T, H, 86);
  box(scene, walls, mats, "wall", 0, 0, -S, 8, 1.1, T + 0.4);
  box(scene, walls, mats, "olive", -8, H, -S, 18, 0.9, 1.4);
  box(scene, walls, mats, "olive", 8, H, S, 18, 0.9, 1.4);

  // West warehouse — hollow, door on the east wall facing the compound.
  box(scene, walls, mats, "wall", -30.6, 0, -8, 1.1, 7.2, 14);
  box(scene, walls, mats, "wall", -22, 0, -14.7, 18, 7.2, 1.1);
  box(scene, walls, mats, "wall", -22, 0, -1.3, 18, 7.2, 1.1);
  box(scene, walls, mats, "wall", -13.4, 0, -12.15, 1.1, 7.2, 6.1);
  box(scene, walls, mats, "wall", -13.4, 0, -3.85, 1.1, 7.2, 6.1);
  box(scene, walls, mats, "wall", -13.4, 2.55, -8, 1.1, 4.65, 3.4);
  box(scene, walls, mats, "roof", -22, 7.2, -8, 19, 0.45, 15);
  box(scene, walls, mats, "dark", -22, 0, -8, 16.6, 0.08, 12.4, false);
  box(scene, walls, mats, "crate", -27, 0, -11.4, 1.8, 1.5, 1.8);
  box(scene, walls, mats, "crate", -24.6, 0, -11.8, 1.4, 1.1, 1.4);
  box(scene, walls, mats, "crate", -18.4, 0, -4.6, 2, 1.7, 1.6);
  box(scene, walls, mats, "metal", -28.8, 0, -5.2, 1.2, 2.4, 3.2);
  box(scene, walls, mats, "dark", -22, 6.4, -8, 8, 0.12, 0.4, false);
  {
    const lamp = new THREE.PointLight(0xffc48a, 1.8, 16);
    lamp.position.set(-22, 5.6, -8);
    scene.add(lamp);
    const bulb = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.12, 0.35),
      new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffb060, emissiveIntensity: 1.4 }),
    );
    bulb.position.set(-22, 6.55, -8);
    scene.add(bulb);
  }

  box(scene, walls, mats, "concrete", 20, 0, 10, 12, 3.2, 12);
  box(scene, walls, mats, "concrete", 20, 3.2, 6, 12, 3.4, 6);
  box(scene, walls, mats, "roof", 20, 6.6, 8, 13, 0.4, 13);
  box(scene, walls, mats, "metal", 14.4, 0, 10, 1.6, 3.2, 4.2);
  box(scene, walls, mats, "metal", 20, 3.2, 12.6, 3.2, 0.28, 6.2);

  box(scene, walls, mats, "rust", 28, 0, -22, 6.4, 2.8, 2.6);
  box(scene, walls, mats, "metal", 28, 0, -18.8, 6.4, 2.8, 2.6);
  box(scene, walls, mats, "rust", 21.2, 0, -22, 6.4, 2.8, 2.6);
  box(scene, walls, mats, "crate", -6, 0, 18, 2.2, 2.2, 2.2);
  box(scene, walls, mats, "crate", -3.4, 0, 18.4, 1.8, 1.6, 1.8);
  box(scene, walls, mats, "crate", -4.6, 2.2, 18.1, 1.6, 1.4, 1.6);
  box(scene, walls, mats, "crate", 6, 0, -14, 2, 1.8, 2);
  box(scene, walls, mats, "crate", 8.2, 0, -14.4, 1.6, 1.2, 1.6);
  box(scene, walls, mats, "olive", 0, 0, 0, 1.8, 1.15, 4.6);
  box(scene, walls, mats, "olive", 3.4, 0, -2, 4.6, 1.15, 1.8);
  box(scene, walls, mats, "olive", -3.4, 0, 2.2, 4.6, 1.15, 1.8);

  box(scene, walls, mats, "metal", -32, 0, 22, 3.2, 11, 3.2);
  box(scene, walls, mats, "olive", -32, 11, 22, 3.8, 1.2, 3.8);
  box(scene, walls, mats, "dark", -32, 9.4, 23.7, 1.6, 1.1, 0.2, false);

  box(scene, walls, mats, "concrete", 8, 0, 28, 10, 3.6, 6);
  box(scene, walls, mats, "sand", -12, 0, -26, 8, 1.4, 8);
  box(scene, walls, mats, "wall", 32, 0, 6, 4, 4.8, 10);

  box(scene, walls, mats, "metal", -12, 0, -32, 1.2, 6.5, 18);
  box(scene, walls, mats, "metal", 12, 0, -32, 1.2, 6.5, 18);
  box(scene, walls, mats, "metal", 0, 0, -40.5, 24, 6.5, 1.2);
  box(scene, walls, mats, "roof", 0, 6.5, -32, 26, 0.45, 20);
  box(scene, walls, mats, "dark", 0, 5.4, -32, 8, 0.2, 8, false);
  box(scene, walls, mats, "crate", -7, 0, -34, 2.2, 1.6, 2.2);
  box(scene, walls, mats, "crate", 7.4, 0, -30, 2, 1.8, 2);
  box(scene, walls, mats, "olive", 0, 0, -32, 5.4, 0.18, 5.4, false);
  box(scene, walls, mats, "sand", 0, 0.18, -32, 4.2, 0.08, 4.2, false);
  {
    const hangarLights: [number, number][] = [
      [0, -28],
      [-6, -34],
      [6, -34],
      [0, -36],
    ];
    for (const [lx, lz] of hangarLights) {
      const lamp = new THREE.PointLight(0xffd9a0, 1.15, 11);
      lamp.position.set(lx, 5.7, lz);
      scene.add(lamp);
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 0.1, 0.28),
        new THREE.MeshStandardMaterial({ color: 0xe8d2a0, emissive: 0xffc070, emissiveIntensity: 1.2 }),
      );
      strip.position.set(lx, 6.28, lz);
      scene.add(strip);
    }
  }

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    box(scene, walls, mats, "crate", Math.cos(a) * 11, 0, Math.sin(a) * 11, 1.4, 1.1, 1.4);
  }

  const sun = new THREE.DirectionalLight(0xffd4a0, 2.1);
  sun.position.set(22, 48, 28);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 4;
  sun.shadow.camera.far = 120;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(0xc8d4e4, 0x4a3a28, 0.95));
  scene.add(new THREE.AmbientLight(0x6a5c48, 0.62));

  scene.fog = new THREE.Fog(0x3a342c, 48, 150);
  scene.background = new THREE.Color(0x5a5348);

  return walls;
}

export const PLAYER_SPAWN: [number, number] = [0, 36];

export const PICKUPS: { kind: "ammo" | "armor"; x: number; z: number }[] = [
  { kind: "ammo", x: -22, z: -8 },
  { kind: "armor", x: -24, z: -4 },
  { kind: "ammo", x: -5, z: -28 },
  { kind: "armor", x: 5, z: -36 },
];

export const SPAWNS: [number, number][] = [
  [16, -6],
  [-18, 8],
  [22, 12],
  [-20, -16],
  [8, -22],
  [-26, -4],
  [26, -10],
  [-8, -18],
];

export const COVER: [number, number][] = [
  [-6, 18],
  [6, -14],
  [0, 0],
  [3.4, -2],
  [-3.4, 2.2],
  [11, 0],
  [-11, 0],
  [0, 11],
  [0, -11],
  [-7, -34],
  [7.4, -30],
  [28, -22],
  [8, 28],
  [-12, -26],
  [-27, -11.4],
  [-18.4, -4.6],
  [-24, -8],
];

export const EXTRACT = { x: 0, z: -32, r: 3.6 };
