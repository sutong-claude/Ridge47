export type WeaponId = "rifle" | "pistol" | "shotgun";

export type HudSnapshot = {
  phase: "menu" | "playing" | "paused" | "dead" | "extracted";
  health: number;
  armor: number;
  mag: number;
  reserve: number;
  weapon: WeaponId;
  reloading: boolean;
  ads: boolean;
  kills: number;
  deaths: number;
  streak: number;
  botsAlive: number;
  matchTime: number;
  killFeed: string[];
  hitmarker: number;
  damageFlash: number;
  message: string;
  grenades: number;
  extract: number;
  extracted: boolean;
  yaw: number;
  playerX: number;
  playerZ: number;
  bots: { x: number; z: number; alive: boolean }[];
  extractX: number;
  extractZ: number;
  sensitivity: number;
  fov: number;
  locked: boolean;
  pickups: { x: number; z: number; kind: "ammo" | "armor"; ready: boolean }[];
};

export const EMPTY_HUD: HudSnapshot = {
  phase: "menu",
  health: 100,
  armor: 50,
  mag: 30,
  reserve: 90,
  weapon: "rifle",
  reloading: false,
  ads: false,
  kills: 0,
  deaths: 0,
  streak: 0,
  botsAlive: 0,
  matchTime: 0,
  killFeed: [],
  hitmarker: 0,
  damageFlash: 0,
  message: "",
  grenades: 3,
  extract: 0,
  extracted: false,
  yaw: 0,
  playerX: 0,
  playerZ: 36,
  bots: [],
  extractX: 0,
  extractZ: -32,
  sensitivity: 1,
  fov: 78,
  locked: false,
  pickups: [],
};

export type Aabb = {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
};