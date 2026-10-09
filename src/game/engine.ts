import * as THREE from "three";
import { TacticalAudio } from "./audio";
import { closestWallHit, makeAabb, rayAabb, resolveCapsule } from "./collision";
import { buildCompound, COVER, EXTRACT, PICKUPS, PLAYER_SPAWN, SPAWNS } from "./map";
import { EMPTY_HUD, type Aabb, type HudSnapshot, type WeaponId } from "./types";

type Bot = {
  x: number;
  y: number;
  z: number;
  yaw: number;
  hp: number;
  alive: boolean;
  nextShot: number;
  spawn: number;
  group: THREE.Group;
  body: THREE.Mesh;
  name: string;
  mode: "push" | "cover" | "flank";
  coverX: number;
  coverZ: number;
  nadeCd: number;
};

type Nade = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  mesh: THREE.Mesh;
  fromBot: boolean;
};

type Pickup = {
  kind: "ammo" | "armor";
  x: number;
  z: number;
  ready: boolean;
  cd: number;
  mesh: THREE.Group;
};

const NAMES = ["Viper", "Hawk", "Ghost", "Nomad", "Sable", "Rook", "Quarry", "Ash"];

export class RidgeGame {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private gunCam: THREE.PerspectiveCamera;
  private walls: Aabb[] = [];
  private audio = new TacticalAudio();
  private keys = new Set<string>();
  private forced = new Set<string>();
  private running = false;
  private disposed = false;
  private raf = 0;
  private acc = 0;
  private last = 0;
  private yaw = 0;
  private pitch = 0;
  private x = PLAYER_SPAWN[0];
  private y = 0;
  private z = PLAYER_SPAWN[1];
  private vy = 0;
  private grounded = true;
  private crouch = false;
  private health = 100;
  private armor = 50;
  private mag = 30;
  private reserve = 90;
  private weapon: WeaponId = "rifle";
  private reloadT = 0;
  private shotCd = 0;
  private ads = false;
  private fireHeld = false;
  private recYaw = 0;
  private recPitch = 0;
  private spread = 0;
  private bob = 0;
  private dist = 0;
  private kills = 0;
  private deaths = 0;
  private streak = 0;
  private deadT = 0;
  private matchT = 0;
  private shake = 0;
  private hitmarker = 0;
  private dmgFlash = 0;
  private feed: string[] = [];
  private phase: HudSnapshot["phase"] = "menu";
  private lookX = 0;
  private lookY = 0;
  private touchLook = false;
  private joyX = 0;
  private joyY = 0;
  private bots: Bot[] = [];
  private tracers: { mesh: THREE.Mesh; t: number }[] = [];
  private flashes: { light: THREE.PointLight; t: number }[] = [];
  private nades: Nade[] = [];
  private pickups: Pickup[] = [];
  private decals: { mesh: THREE.Mesh; t: number }[] = [];
  private gun!: THREE.Group;
  private muzzle!: THREE.Object3D;
  private guns: Record<WeaponId, THREE.Group> = {
    rifle: new THREE.Group(),
    pistol: new THREE.Group(),
    shotgun: new THREE.Group(),
  };
  private muzzles: Record<WeaponId, THREE.Object3D> = {
    rifle: new THREE.Object3D(),
    pistol: new THREE.Object3D(),
    shotgun: new THREE.Object3D(),
  };
  private gunKick = 0;
  private canvas: HTMLCanvasElement;
  private onHud: (h: HudSnapshot) => void;
  private hudTick = 0;
  private lastFoot = 0;
  private message = "";
  private locked = false;
  private dragging = false;
  private lastSpeed = 0;
  private grenades = 3;
  private nadeCd = 0;
  private extractHold = 0;
  private extracted = false;
  private lastExtractBeep = 0;
  private ammo: Record<WeaponId, { mag: number; reserve: number }> = {
    rifle: { mag: 30, reserve: 90 },
    pistol: { mag: 12, reserve: 36 },
    shotgun: { mag: 8, reserve: 24 },
  };
  private sensitivity = 1;
  private baseFov = 78;
  private spawnProtect = 0;
  private lootNote = 0;

  constructor(canvas: HTMLCanvasElement, onHud: (h: HudSnapshot) => void) {
    this.canvas = canvas;
    this.onHud = onHud;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.autoClear = false;
    this.renderer.setClearColor(0x5a5348, 1);
    this.camera = new THREE.PerspectiveCamera(78, 1, 0.08, 220);
    this.gunCam = this.camera.clone();
    this.gunCam.layers.set(1);
    this.camera.layers.enable(0);
    this.resize();
    this.walls = buildCompound(this.scene);
    this.markExtract();
    this.buildGuns();
    this.spawnBots();
    this.spawnPickups();
    this.bind();
    this.emit();
    this.last = performance.now();
    this.loop = this.loop.bind(this);
    this.raf = requestAnimationFrame(this.loop);
    this.running = true;
  }

  private markExtract() {
    const mat = new THREE.MeshStandardMaterial({
      color: 0xc4a574,
      emissive: 0x6b3a18,
      emissiveIntensity: 0.7,
      roughness: 0.4,
    });
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(EXTRACT.r, EXTRACT.r, 0.12, 20), mat);
    pad.position.set(EXTRACT.x, 0.24, EXTRACT.z);
    pad.receiveShadow = true;
    this.scene.add(pad);
    const beacon = new THREE.PointLight(0xffb060, 1.5, 16);
    beacon.position.set(EXTRACT.x, 3.2, EXTRACT.z);
    this.scene.add(beacon);
  }

  private mat(color: number, extra?: Partial<THREE.MeshStandardMaterialParameters>) {
    return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.35, ...extra });
  }

  private part(g: THREE.Group, geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    g.add(m);
    return m;
  }

  private finishGun(id: WeaponId, muzzleZ: number) {
    const g = this.guns[id];
    g.traverse((o) => {
      o.castShadow = false;
    });
    const muzzle = this.muzzles[id];
    muzzle.position.set(0, 0.02, muzzleZ);
    g.add(muzzle);
    g.position.set(0.28, -0.24, -0.42);
    this.camera.add(g);
  }

  private buildGuns() {
    const dark = this.mat(0x1c1d1b, { metalness: 0.4 });
    const tan = this.mat(0x6b5a40, { roughness: 0.7, metalness: 0.1 });
    const steel = this.mat(0x3a3d40, { metalness: 0.55, roughness: 0.3 });

    const rifle = this.guns.rifle;
    this.part(rifle, new THREE.BoxGeometry(0.08, 0.1, 0.55), dark, 0, 0, -0.15);
    const barrel = this.part(rifle, new THREE.CylinderGeometry(0.018, 0.018, 0.42, 8), dark, 0, 0.02, -0.52);
    barrel.rotation.x = Math.PI / 2;
    this.part(rifle, new THREE.BoxGeometry(0.06, 0.1, 0.22), tan, 0, -0.02, 0.18);
    this.part(rifle, new THREE.BoxGeometry(0.05, 0.16, 0.08), dark, 0, -0.12, -0.08);
    const grip = this.part(rifle, new THREE.BoxGeometry(0.05, 0.14, 0.07), tan, 0, -0.14, 0.04);
    grip.rotation.x = 0.25;
    this.part(rifle, new THREE.BoxGeometry(0.02, 0.05, 0.08), dark, 0, 0.08, -0.2);
    this.finishGun("rifle", -0.74);

    const pistol = this.guns.pistol;
    this.part(pistol, new THREE.BoxGeometry(0.055, 0.085, 0.22), steel, 0, 0.01, -0.08);
    const pBarrel = this.part(pistol, new THREE.CylinderGeometry(0.012, 0.012, 0.18, 8), steel, 0, 0.02, -0.24);
    pBarrel.rotation.x = Math.PI / 2;
    const pGrip = this.part(pistol, new THREE.BoxGeometry(0.045, 0.13, 0.06), tan, 0, -0.1, 0.02);
    pGrip.rotation.x = 0.35;
    this.part(pistol, new THREE.BoxGeometry(0.03, 0.04, 0.05), dark, 0, -0.04, -0.02);
    this.part(pistol, new THREE.BoxGeometry(0.012, 0.03, 0.04), dark, 0, 0.06, -0.1);
    this.finishGun("pistol", -0.34);

    const shotgun = this.guns.shotgun;
    this.part(shotgun, new THREE.BoxGeometry(0.09, 0.11, 0.48), tan, 0, -0.01, -0.1);
    const tube = this.part(shotgun, new THREE.CylinderGeometry(0.028, 0.028, 0.55, 8), dark, 0, 0.03, -0.48);
    tube.rotation.x = Math.PI / 2;
    const pump = this.part(shotgun, new THREE.CylinderGeometry(0.032, 0.032, 0.16, 8), tan, 0, -0.02, -0.32);
    pump.rotation.x = Math.PI / 2;
    this.part(shotgun, new THREE.BoxGeometry(0.07, 0.12, 0.26), tan, 0, -0.02, 0.2);
    const sGrip = this.part(shotgun, new THREE.BoxGeometry(0.055, 0.14, 0.07), dark, 0, -0.14, 0.05);
    sGrip.rotation.x = 0.28;
    this.finishGun("shotgun", -0.78);

    this.scene.add(this.camera);
    this.gun = this.guns.rifle;
    this.muzzle = this.muzzles.rifle;
    this.showWeapon();
  }

  private showWeapon() {
    for (const id of ["rifle", "pistol", "shotgun"] as WeaponId[]) {
      this.guns[id].visible = id === this.weapon;
    }
    this.gun = this.guns[this.weapon];
    this.muzzle = this.muzzles[this.weapon];
  }

  private spawnBots() {
    for (let i = 0; i < 8; i++) {
      const [sx, sz] = SPAWNS[i % SPAWNS.length];
      const group = new THREE.Group();
      const olive = new THREE.MeshStandardMaterial({ color: 0x4a523c, roughness: 0.8 });
      const tan = new THREE.MeshStandardMaterial({ color: 0x8a7352, roughness: 0.85 });
      const dark = new THREE.MeshStandardMaterial({ color: 0x22221e, roughness: 0.5 });
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.7, 0.32), olive);
      torso.position.y = 1.15;
      const legs = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.7, 0.28), dark);
      legs.position.y = 0.45;
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), tan);
      head.position.y = 1.64;
      const helm = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), dark);
      helm.position.y = 1.78;
      group.add(torso, legs, head, helm);
      group.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      group.position.set(sx, 0, sz);
      this.scene.add(group);
      this.bots.push({
        x: sx,
        y: 0,
        z: sz,
        yaw: Math.random() * Math.PI * 2,
        hp: 100,
        alive: true,
        nextShot: 2.8 + Math.random() * 1.5,
        spawn: 0,
        group,
        body: torso,
        name: NAMES[i],
        mode: i % 3 === 0 ? "flank" : i % 3 === 1 ? "cover" : "push",
        coverX: sx,
        coverZ: sz,
        nadeCd: 4 + i * 1.6,
      });
    }
  }

  private resetBots() {
    for (let i = 0; i < this.bots.length; i++) {
      const b = this.bots[i];
      const [sx, sz] = SPAWNS[i % SPAWNS.length];
      b.x = sx;
      b.z = sz;
      b.y = 0;
      b.hp = 100;
      b.alive = true;
      b.nextShot = 3 + Math.random() * 2;
      b.nadeCd = 10 + i * 2;
      b.mode = i % 3 === 0 ? "flank" : i % 3 === 1 ? "cover" : "push";
      b.group.visible = true;
      b.group.position.set(sx, 0, sz);
      this.pickCover(b);
    }
  }

  private spawnPickups() {
    for (const spec of PICKUPS) {
      const group = new THREE.Group();
      const color = spec.kind === "armor" ? 0x6f8f62 : 0xc4a574;
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.42, 0.7),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.55, roughness: 0.45 }),
      );
      box.position.y = 0.28;
      const lid = new THREE.Mesh(
        new THREE.BoxGeometry(0.74, 0.08, 0.74),
        new THREE.MeshStandardMaterial({ color: 0x1c1a16, roughness: 0.6 }),
      );
      lid.position.y = 0.52;
      group.add(box, lid);
      const light = new THREE.PointLight(color, 0.7, 4.5);
      light.position.y = 0.8;
      group.add(light);
      group.position.set(spec.x, 0, spec.z);
      this.scene.add(group);
      this.pickups.push({ kind: spec.kind, x: spec.x, z: spec.z, ready: true, cd: 0, mesh: group });
    }
  }

  private resetPickups() {
    for (const p of this.pickups) {
      p.ready = true;
      p.cd = 0;
      p.mesh.visible = true;
    }
  }

  private bind() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.clearKeys);
    document.addEventListener("pointerlockchange", this.onLock);
    window.addEventListener("mousemove", this.onMouse);
    this.canvas.addEventListener("mousedown", this.onDown);
    window.addEventListener("mouseup", this.onUp);
    this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    this.canvas.addEventListener("touchstart", this.onTouch, { passive: false });
    this.canvas.addEventListener("touchmove", this.onTouch, { passive: false });
    this.canvas.addEventListener("touchend", this.onTouchEnd);
  }

  private resize = () => {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
    this.gunCam.aspect = this.camera.aspect;
    this.gunCam.updateProjectionMatrix();
  };

  private onKey = (e: KeyboardEvent) => {
    if (e.code === "Tab") e.preventDefault();
    this.keys.add(e.code);
    if (e.code === "Digit1") this.switchWeapon("rifle");
    if (e.code === "Digit2") this.switchWeapon("pistol");
    if (e.code === "Digit3") this.switchWeapon("shotgun");
    if (e.code === "KeyR") this.startReload();
    if (e.code === "KeyG") this.throwNade();
    if (e.code === "Escape" && this.phase === "playing") this.pause();
  };
  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };
  private clearKeys = () => {
    this.keys.clear();
    this.fireHeld = false;
  };

  private onLock = () => {
    this.locked = document.pointerLockElement === this.canvas;
    this.emit();
  };

  private onMouse = (e: MouseEvent) => {
    if (this.phase !== "playing") return;
    if (!this.locked && !this.dragging) return;
    const sens = (this.ads ? 0.0009 : 0.0022) * this.sensitivity * (this.locked ? 1 : 1.35);
    this.yaw -= e.movementX * sens;
    this.pitch -= e.movementY * sens;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
  };

  private onDown = (e: MouseEvent) => {
    if (this.phase !== "playing") return;
    this.dragging = true;
    if (!this.locked) this.requestLock();
    if (e.button === 0) this.fireHeld = true;
    if (e.button === 2) this.ads = true;
  };
  private onUp = (e: MouseEvent) => {
    this.dragging = false;
    if (e.button === 0) this.fireHeld = false;
    if (e.button === 2) this.ads = false;
  };

  private onTouch = (e: TouchEvent) => {
    e.preventDefault();
    const r = this.canvas.getBoundingClientRect();
    this.joyX = 0;
    this.joyY = 0;
    this.fireHeld = false;
    for (const t of Array.from(e.touches)) {
      const x = t.clientX - r.left;
      const y = t.clientY - r.top;
      const nx = x / r.width;
      const ny = y / r.height;
      if (nx < 0.42) {
        this.joyX = Math.max(-1, Math.min(1, (nx - 0.2) * 6));
        this.joyY = Math.max(-1, Math.min(1, (0.72 - ny) * 4));
      } else if (ny > 0.78 && nx > 0.7) {
        this.fireHeld = true;
      } else {
        if (this.touchLook) {
          this.yaw -= this.lookX * 0.003;
          this.pitch -= this.lookY * 0.003;
          this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
        }
        this.lookX = 0;
        this.lookY = 0;
        this.touchLook = true;
      }
    }
  };
  private onTouchEnd = () => {
    this.joyX = 0;
    this.joyY = 0;
    this.touchLook = false;
    this.fireHeld = false;
  };

  startMatch() {
    this.audio.unlock();
    this.audio.setListener(this.x, this.y + 1.6, this.z, this.yaw);
    this.phase = "playing";
    this.health = 100;
    this.armor = 50;
    this.ammo = {
      rifle: { mag: 30, reserve: 90 },
      pistol: { mag: 12, reserve: 36 },
      shotgun: { mag: 8, reserve: 24 },
    };
    this.weapon = "rifle";
    this.mag = 30;
    this.reserve = 90;
    this.showWeapon();
    this.grenades = 3;
    this.extractHold = 0;
    this.extracted = false;
    this.kills = 0;
    this.deaths = 0;
    this.streak = 0;
    this.matchT = 0;
    this.x = PLAYER_SPAWN[0];
    this.y = 0;
    this.z = PLAYER_SPAWN[1];
    this.yaw = 0;
    this.pitch = 0;
    this.deadT = 0;
    this.spawnProtect = 6;
    this.feed = [];
    this.message = "安全部署 6 秒 · 仓库与机库有补给箱";
    this.resetBots();
    this.resetPickups();
    this.resize();
    this.emit();
  }

  resume() {
    if (this.phase === "paused") {
      this.phase = "playing";
      this.requestLock();
      this.emit();
    }
  }

  pause() {
    this.phase = "paused";
    document.exitPointerLock();
    this.emit();
  }

  setFire(v: boolean) {
    this.fireHeld = v;
  }
  setAds(v: boolean) {
    this.ads = v;
  }
  jump() {
    this.keys.add("Space");
    setTimeout(() => this.keys.delete("Space"), 180);
  }
  reload() {
    this.startReload();
  }
  tossNade() {
    this.throwNade();
  }
  setSensitivity(v: number) {
    this.sensitivity = Math.max(0.4, Math.min(2.2, v));
  }
  setFov(v: number) {
    this.baseFov = Math.max(60, Math.min(100, v));
  }

  private requestLock() {
    const el = this.canvas as HTMLCanvasElement & {
      requestPointerLock: (opts?: { unadjustedMovement?: boolean }) => Promise<void> | void;
    };
    try {
      const p = el.requestPointerLock({ unadjustedMovement: true });
      if (p && typeof (p as Promise<void>).catch === "function") {
        void (p as Promise<void>).catch(() => el.requestPointerLock());
      }
    } catch {
      el.requestPointerLock();
    }
  }

  private held(code: string) {
    return this.keys.has(code) || this.forced.has(code);
  }

  private cap(w: WeaponId) {
    return w === "rifle" ? 30 : w === "shotgun" ? 8 : 12;
  }

  private switchWeapon(w: WeaponId) {
    if (this.weapon === w) return;
    this.ammo[this.weapon] = { mag: this.mag, reserve: this.reserve };
    this.weapon = w;
    this.mag = this.ammo[w].mag;
    this.reserve = this.ammo[w].reserve;
    this.reloadT = 0;
    this.showWeapon();
    this.audio.click();
    this.gunKick = 0.4;
  }

  private startReload() {
    if (this.reloadT > 0 || this.reserve <= 0) return;
    if (this.mag >= this.cap(this.weapon)) return;
    this.reloadT = this.weapon === "rifle" ? 1.85 : this.weapon === "shotgun" ? 2.2 : 1.25;
    this.audio.reload();
  }

  private throwNade() {
    if (this.phase !== "playing" || this.deadT > 0 || this.grenades <= 0 || this.nadeCd > 0) return;
    this.grenades -= 1;
    this.nadeCd = 1.1;
    this.audio.nade();
    const eye = this.eye();
    const cy = Math.cos(this.pitch);
    const dx = -Math.sin(this.yaw) * cy;
    const dy = Math.sin(this.pitch) + 0.28;
    const dz = -Math.cos(this.yaw) * cy;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a3d32, roughness: 0.5, metalness: 0.4 }),
    );
    mesh.position.set(eye.x + dx * 0.6, eye.y, eye.z + dz * 0.6);
    this.scene.add(mesh);
    const speed = 18;
    this.nades.push({
      x: mesh.position.x,
      y: mesh.position.y,
      z: mesh.position.z,
      vx: dx * speed,
      vy: dy * speed,
      vz: dz * speed,
      life: 1.35,
      mesh,
      fromBot: false,
    });
  }

  private loop(now: number) {
    if (this.disposed) return;
    const raw = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.acc += raw;
    const step = 1 / 60;
    while (this.acc >= step) {
      this.tick(step);
      this.acc -= step;
    }
    this.draw();
    this.hudTick += raw;
    if (this.hudTick > 0.05) {
      this.hudTick = 0;
      this.emit();
    }
    this.raf = requestAnimationFrame(this.loop);
  }

  private tick(dt: number) {
    if (this.phase !== "playing") return;
    this.matchT += dt;
    this.shotCd = Math.max(0, this.shotCd - dt);
    this.nadeCd = Math.max(0, this.nadeCd - dt);
    this.hitmarker = Math.max(0, this.hitmarker - dt);
    this.dmgFlash = Math.max(0, this.dmgFlash - dt);
    this.shake = Math.max(0, this.shake - dt * 4);
    this.gunKick = Math.max(0, this.gunKick - dt * 8);
    this.recPitch *= Math.pow(0.08, dt);
    this.recYaw *= Math.pow(0.08, dt);
    this.spread = Math.max(0, this.spread - dt * 1.6);
    this.spawnProtect = Math.max(0, this.spawnProtect - dt);
    this.lootNote = Math.max(0, this.lootNote - dt);
    if (this.lootNote <= 0 && this.spawnProtect > 0 && this.deadT <= 0) {
      this.message = `安全部署 ${Math.ceil(this.spawnProtect)} 秒`;
    } else if (this.lootNote <= 0 && this.deadT <= 0 && this.message.startsWith("安全部署")) {
      this.message = "北机库撤离，或清场";
    }
    this.audio.setListener(this.x, this.y + 1.5, this.z, this.yaw);

    if (this.deadT > 0) {
      this.deadT -= dt;
      if (this.deadT <= 0) {
        this.health = 100;
        this.armor = 40;
        this.grenades = Math.max(this.grenades, 1);
        this.phase = "playing";
        this.x = PLAYER_SPAWN[0];
        this.z = PLAYER_SPAWN[1];
        this.y = 0;
        this.yaw = 0;
        this.pitch = 0;
        this.spawnProtect = 5;
        this.message = "已重生 · 保护 5 秒";
      }
      this.updateBots(dt);
      this.updateNades(dt);
      return;
    }

    if (this.reloadT > 0) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        const need = this.cap(this.weapon) - this.mag;
        const take = Math.min(need, this.reserve);
        this.mag += take;
        this.reserve -= take;
        this.ammo[this.weapon] = { mag: this.mag, reserve: this.reserve };
      }
    }

    this.movePlayer(dt);
    if (this.fireHeld) this.tryFire();
    this.updateBots(dt);
    this.updateNades(dt);
    this.updatePickups(dt);
    this.updateExtract(dt);
    this.updateFx(dt);

    const alive = this.bots.filter((b) => b.alive).length;
    if (alive === 0 && this.matchT > 2 && !this.extracted) {
      this.message = "区域肃清 · 去北机库撤离";
    }
  }

  private movePlayer(dt: number) {
    const sprint = this.held("ShiftLeft") || this.held("ShiftRight");
    this.crouch = this.held("KeyC") || this.held("ControlLeft");
    const speed = (this.crouch ? 2.3 : sprint ? 8.4 : 4.9) * (this.ads ? 0.72 : 1);
    let ix = 0;
    let iz = 0;
    if (this.held("KeyW") || this.held("ArrowUp")) iz += 1;
    if (this.held("KeyS") || this.held("ArrowDown")) iz -= 1;
    if (this.held("KeyD") || this.held("ArrowRight")) ix += 1;
    if (this.held("KeyA") || this.held("ArrowLeft")) ix -= 1;
    ix += this.joyX;
    iz += this.joyY;
    const mag = Math.hypot(ix, iz);
    if (mag > 1) {
      ix /= mag;
      iz /= mag;
    }
    const fx = -Math.sin(this.yaw);
    const fz = -Math.cos(this.yaw);
    const rx = Math.cos(this.yaw);
    const rz = -Math.sin(this.yaw);
    const vx = (fx * iz + rx * ix) * speed;
    const vz = (fz * iz + rz * ix) * speed;
    const nx = this.x + vx * dt;
    const nz = this.z + vz * dt;
    this.vy -= 26 * dt;
    if (this.held("Space") && this.grounded) this.vy = 7.2;
    const ny = this.y + this.vy * dt;
    const height = this.crouch ? 1.15 : 1.7;
    const res = resolveCapsule(nx, ny, nz, 0.34, height, this.walls);
    this.x = res.x;
    this.y = res.y;
    this.z = res.z;
    this.grounded = res.grounded;
    if (this.grounded && this.vy < 0) this.vy = 0;
    const spd = Math.hypot(vx, vz);
    this.lastSpeed = spd;
    if (spd > 0.4 && this.grounded) {
      this.dist += spd * dt;
      this.bob += dt * (sprint ? 14 : 10);
      if (this.matchT - this.lastFoot > (sprint ? 0.32 : 0.46)) {
        this.audio.foot();
        this.lastFoot = this.matchT;
        this.spawnDecal(this.x, 0.03, this.z, 0x6b5a40, 0.28, 0.6);
      }
    } else {
      this.bob *= 1 - dt * 8;
    }
  }

  private eye() {
    const h = (this.crouch ? 1.05 : 1.62) + Math.sin(this.bob) * 0.035;
    return { x: this.x, y: this.y + h, z: this.z };
  }

  private tryFire() {
    if (this.reloadT > 0 || this.shotCd > 0) return;
    if (this.mag <= 0) {
      this.audio.empty();
      this.shotCd = 0.18;
      this.startReload();
      return;
    }
    const pellets = this.weapon === "shotgun" ? 7 : 1;
    this.shotCd = this.weapon === "rifle" ? 0.095 : this.weapon === "shotgun" ? 0.72 : 0.22;
    this.mag -= 1;
    this.audio.fire(this.weapon !== "pistol", 0);
    this.gunKick = this.weapon === "shotgun" ? 1 : 0.55;
    this.recPitch += this.weapon === "shotgun" ? 0.05 : this.weapon === "rifle" ? 0.018 : 0.03;
    this.recYaw += (Math.random() - 0.5) * 0.012;
    this.spread = Math.min(0.05, this.spread + (this.weapon === "shotgun" ? 0.02 : 0.006));
    this.shake = this.weapon === "shotgun" ? 0.14 : 0.08;
    this.pitch = Math.min(1.45, this.pitch + this.recPitch * 0.35);

    const eye = this.eye();
    for (let p = 0; p < pellets; p++) {
      const cone = this.spread + (this.ads ? 0 : 0.012) + (this.weapon === "shotgun" ? 0.045 : 0);
      const yaw = this.yaw + this.recYaw + (Math.random() - 0.5) * cone;
      const pitch = this.pitch + (Math.random() - 0.5) * cone * 0.7;
      const cy = Math.cos(pitch);
      const dx = -Math.sin(yaw) * cy;
      const dy = Math.sin(pitch);
      const dz = -Math.cos(yaw) * cy;
      const maxT = this.weapon === "shotgun" ? 28 : 90;
      const wallT = closestWallHit(eye.x, eye.y, eye.z, dx, dy, dz, this.walls, maxT);
      let best = wallT > 0 ? wallT : maxT;
      let hitBot: Bot | null = null;
      for (const b of this.bots) {
        if (!b.alive) continue;
        const box = makeAabb(b.x, b.y, b.z, 0.62, 1.85, 0.5);
        const t = rayAabb(eye.x, eye.y, eye.z, dx, dy, dz, box, best);
        if (t >= 0 && t < best) {
          best = t;
          hitBot = b;
        }
      }
      if (p === 0) this.spawnTracer(eye.x, eye.y, eye.z, dx, dy, dz, best);
      if (hitBot) {
        const dmg = this.weapon === "rifle" ? 24 : this.weapon === "shotgun" ? 14 : 34;
        hitBot.hp -= dmg;
        hitBot.mode = "cover";
        this.pickCover(hitBot);
        this.hitmarker = 0.12;
        this.audio.hit();
        (hitBot.body.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x661818);
        this.spawnDecal(hitBot.x, 0.04, hitBot.z, 0x5a1818, 0.5, 1.8);
        if (hitBot.hp <= 0) this.killBot(hitBot);
      }
    }
  }

  private spawnTracer(x: number, y: number, z: number, dx: number, dy: number, dz: number, t: number) {
    const len = Math.min(14, t);
    const g = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.02, len),
      new THREE.MeshBasicMaterial({ color: 0xffd39a }),
    );
    g.position.set(x + dx * len * 0.5, y + dy * len * 0.5, z + dz * len * 0.5);
    g.lookAt(x + dx * 20, y + dy * 20, z + dz * 20);
    this.scene.add(g);
    this.tracers.push({ mesh: g, t: 0.05 });
    const light = new THREE.PointLight(0xffc070, 2.2, 8);
    this.muzzle.getWorldPosition(light.position);
    this.scene.add(light);
    this.flashes.push({ light, t: 0.04 });
  }

  private spawnDecal(x: number, y: number, z: number, color: number, size: number, life: number) {
    if (this.decals.length > 40) {
      const old = this.decals.shift();
      if (old) {
        this.scene.remove(old.mesh);
        old.mesh.geometry.dispose();
        (old.mesh.material as THREE.Material).dispose();
      }
    }
    const mesh = new THREE.Mesh(
      new THREE.CircleGeometry(size, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, y, z);
    this.scene.add(mesh);
    this.decals.push({ mesh, t: life });
  }

  private killBot(b: Bot) {
    b.alive = false;
    b.hp = 0;
    b.spawn = 5.2;
    b.group.visible = false;
    this.kills += 1;
    this.streak += 1;
    this.feed = [`你击倒了 ${b.name}`, ...this.feed].slice(0, 5);
    this.message = this.streak >= 3 ? `${this.streak} 连杀` : `击倒 ${b.name}`;
    if (this.kills % 3 === 0) {
      this.reserve += this.cap(this.weapon);
      this.armor = Math.min(100, this.armor + 15);
      this.grenades = Math.min(4, this.grenades + 1);
    }
  }

  private reviveBot(b: Bot) {
    const s = SPAWNS[Math.floor(Math.random() * SPAWNS.length)];
    b.x = s[0];
    b.z = s[1];
    b.y = 0;
    b.hp = 100;
    b.alive = true;
    b.mode = b.mode;
    b.group.visible = true;
    b.group.position.set(b.x, 0, b.z);
    (b.body.material as THREE.MeshStandardMaterial).emissive = new THREE.Color(0x000000);
    this.pickCover(b);
  }

  private pickCover(b: Bot) {
    let best = COVER[0];
    let score = -1e9;
    for (const c of COVER) {
      const toBot = Math.hypot(c[0] - b.x, c[1] - b.z);
      const toP = Math.hypot(c[0] - this.x, c[1] - this.z) || 0.001;
      const dx = this.x - c[0];
      const dz = this.z - c[1];
      const los = closestWallHit(c[0], 1.2, c[1], dx / toP, 0, dz / toP, this.walls, toP);
      const hidden = los > 0 && los < toP - 0.4;
      const s = (hidden ? 24 : 0) - toBot * 0.4 + Math.min(12, toP);
      if (s > score) {
        score = s;
        best = c;
      }
    }
    b.coverX = best[0];
    b.coverZ = best[1];
  }

  private updateBots(dt: number) {
    for (const b of this.bots) {
      if (!b.alive) {
        b.spawn -= dt;
        if (b.spawn <= 0) this.reviveBot(b);
        continue;
      }
      const mat = b.body.material as THREE.MeshStandardMaterial;
      mat.emissive.multiplyScalar(1 - dt * 8);

      const dx = this.x - b.x;
      const dz = this.z - b.z;
      const dist = Math.hypot(dx, dz) || 0.001;
      if (b.hp < 55) b.mode = "cover";
      let tx = this.x;
      let tz = this.z;
      if (b.mode === "cover") {
        if (Math.hypot(b.coverX - b.x, b.coverZ - b.z) < 1.2) this.pickCover(b);
        tx = b.coverX;
        tz = b.coverZ;
      } else if (b.mode === "flank") {
        const side = Math.sign(Math.sin(this.matchT * 0.3 + b.spawn) || 1);
        tx = this.x + (-dz / dist) * 12 * side;
        tz = this.z + (dx / dist) * 12 * side;
      }
      const tdx = tx - b.x;
      const tdz = tz - b.z;
      const wantYaw = Math.atan2(-tdx, -tdz);
      let dyaw = wantYaw - b.yaw;
      while (dyaw > Math.PI) dyaw -= Math.PI * 2;
      while (dyaw < -Math.PI) dyaw += Math.PI * 2;
      b.yaw += Math.max(-2.6, Math.min(2.6, dyaw)) * dt;
      const spd = b.mode === "cover" ? 4.1 : b.mode === "flank" ? 3.6 : dist > 18 ? 3.5 : 2.4;
      const fx = -Math.sin(b.yaw);
      const fz = -Math.cos(b.yaw);
      const res = resolveCapsule(b.x + fx * spd * dt, b.y, b.z + fz * spd * dt, 0.32, 1.7, this.walls);
      b.x = res.x;
      b.y = res.y;
      b.z = res.z;
      b.group.position.set(b.x, b.y, b.z);
      b.group.rotation.y = Math.atan2(-dx, -dz);

      b.nextShot -= dt;
      b.nadeCd = Math.max(0, b.nadeCd - dt);
      const los = closestWallHit(b.x, b.y + 1.4, b.z, dx / dist, 0.02, dz / dist, this.walls, dist);
      const sees = dist < 38 && (los < 0 || los > dist - 0.4);
      if (this.spawnProtect > 0) {
        b.nextShot = Math.max(b.nextShot, 0.4);
        continue;
      }
      if (sees && b.nadeCd <= 0 && dist > 10 && dist < 20 && (b.mode === "flank" || b.name === "Rook" || b.name === "Ash") && this.matchT > 12) {
        b.nadeCd = 11 + Math.random() * 7;
        this.botThrow(b);
      }
      if (sees && b.nextShot <= 0 && this.deadT <= 0 && this.phase === "playing") {
        b.nextShot = b.mode === "cover" ? 0.7 : 0.9 + Math.random() * 0.5;
        this.audio.fire(true, dist);
        this.spawnBotFlash(b, dx / dist, dz / dist);
        const acc = Math.max(0.22, (b.mode === "flank" ? 0.55 : 0.42) * (1 - dist / 50));
        if (Math.random() < acc) {
          const dmg = 6 + Math.random() * 7;
          if (this.armor > 0) this.armor = Math.max(0, this.armor - dmg);
          else this.health -= dmg;
          this.dmgFlash = 0.18;
          this.shake = 0.12;
          this.audio.hurt();
          if (this.health <= 0) this.die(b.name);
        }
      }
    }
  }

  private spawnBotFlash(b: Bot, dx: number, dz: number) {
    const hx = b.x + dx * 0.7;
    const hz = b.z + dz * 0.7;
    const light = new THREE.PointLight(0xffc070, 1.6, 6);
    light.position.set(hx, b.y + 1.45, hz);
    this.scene.add(light);
    this.flashes.push({ light, t: 0.05 });
    const g = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.03, 6),
      new THREE.MeshBasicMaterial({ color: 0xffd39a }),
    );
    g.position.set(hx + dx * 3, b.y + 1.45, hz + dz * 3);
    g.lookAt(hx + dx * 20, b.y + 1.45, hz + dz * 20);
    this.scene.add(g);
    this.tracers.push({ mesh: g, t: 0.04 });
  }

  private botThrow(b: Bot) {
    const dx = this.x - b.x;
    const dz = this.z - b.z;
    const dist = Math.hypot(dx, dz) || 1;
    const yaw = Math.atan2(-dx, -dz);
    const loft = 0.22 + dist * 0.012;
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a3d32, roughness: 0.5, metalness: 0.4 }),
    );
    mesh.position.set(b.x + fx * 0.7, b.y + 1.5, b.z + fz * 0.7);
    this.scene.add(mesh);
    const speed = 13 + dist * 0.18;
    this.audio.nade(dist);
    this.nades.push({
      x: mesh.position.x,
      y: mesh.position.y,
      z: mesh.position.z,
      vx: fx * speed,
      vy: loft * speed,
      vz: fz * speed,
      life: 1.45,
      mesh,
      fromBot: true,
    });
    this.feed = [`${b.name} 投出了手雷`, ...this.feed].slice(0, 5);
  }

  private updateNades(dt: number) {
    for (let i = this.nades.length - 1; i >= 0; i--) {
      const n = this.nades[i];
      n.vy -= 18 * dt;
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      n.z += n.vz * dt;
      n.life -= dt;
      if (n.y < 0.12) {
        n.y = 0.12;
        n.vy *= -0.28;
        n.vx *= 0.6;
        n.vz *= 0.6;
      }
      n.mesh.position.set(n.x, n.y, n.z);
      const wall = closestWallHit(n.x, n.y, n.z, n.vx, n.vy, n.vz, this.walls, 0.25);
      if (n.life <= 0 || wall >= 0) this.detonate(i);
    }
  }

  private detonate(i: number) {
    const n = this.nades[i];
    const pd = Math.hypot(this.x - n.x, this.z - n.z);
    this.audio.explode(pd);
    this.shake = Math.max(this.shake, 0.28 * Math.max(0.2, 1 - pd / 28));
    this.spawnDecal(n.x, 0.05, n.z, 0x3a2a18, 1.6, 3);
    const light = new THREE.PointLight(0xffaa55, 6, 14);
    light.position.set(n.x, n.y + 0.4, n.z);
    this.scene.add(light);
    this.flashes.push({ light, t: 0.12 });
    for (const b of this.bots) {
      if (!b.alive) continue;
      const d = Math.hypot(b.x - n.x, b.z - n.z);
      if (d < 6.5) {
        b.hp -= Math.max(20, 110 * (1 - d / 6.5));
        b.mode = "cover";
        this.pickCover(b);
        if (b.hp <= 0) this.killBot(b);
      }
    }
    if (pd < 5.5 && this.deadT <= 0) {
      const dmg = 55 * (1 - pd / 5.5);
      if (this.armor > 0) this.armor = Math.max(0, this.armor - dmg);
      else this.health -= dmg;
      this.dmgFlash = 0.25;
      if (this.health <= 0) this.die("手雷");
    }
    this.scene.remove(n.mesh);
    n.mesh.geometry.dispose();
    (n.mesh.material as THREE.Material).dispose();
    this.nades.splice(i, 1);
  }

  private updatePickups(dt: number) {
    const nearMsg = this.spawnProtect <= 0 && this.deadT <= 0;
    for (const p of this.pickups) {
      if (!p.ready) {
        p.cd -= dt;
        if (p.cd <= 0) {
          p.ready = true;
          p.mesh.visible = true;
        }
        continue;
      }
      p.mesh.position.y = Math.sin(this.matchT * 2.2 + p.x) * 0.04;
      const d = Math.hypot(this.x - p.x, this.z - p.z);
      if (d > 1.45 || this.deadT > 0 || this.phase !== "playing") continue;
      if (p.kind === "ammo") {
        const add = this.cap(this.weapon) * 1.5;
        const cap = this.cap(this.weapon) * 6;
        this.reserve = Math.min(cap, this.reserve + add);
        this.ammo[this.weapon] = { mag: this.mag, reserve: this.reserve };
        this.grenades = Math.min(4, this.grenades + 1);
        this.message = `弹药 +${Math.floor(add)} · 手雷 ${this.grenades}`;
      } else {
        const before = this.armor;
        this.armor = Math.min(80, this.armor + 35);
        this.health = Math.min(100, this.health + 20);
        this.message = `护甲 ${Math.floor(before)} → ${Math.floor(this.armor)}`;
      }
      p.ready = false;
      p.cd = 22;
      p.mesh.visible = false;
      this.lootNote = 2.2;
      this.audio.pickup(p.kind === "armor");
    }
    const quiet =
      this.message === "" ||
      this.message === "北机库撤离，或清场" ||
      this.message.startsWith("走近") ||
      this.message.startsWith("区域肃清");
    if (nearMsg && quiet) {
      const hint = this.pickups.find((p) => p.ready && Math.hypot(this.x - p.x, this.z - p.z) < 4.2);
      this.message = hint ? (hint.kind === "ammo" ? "走近弹药箱" : "走近护甲箱") : this.message.startsWith("走近") ? "北机库撤离，或清场" : this.message;
    }
  }

  private updateExtract(dt: number) {
    const d = Math.hypot(this.x - EXTRACT.x, this.z - EXTRACT.z);
    const still = this.lastSpeed < 2.4;
    if (d < EXTRACT.r && still && this.deadT <= 0) {
      this.extractHold = Math.min(1, this.extractHold + dt / 20);
      if (this.matchT - this.lastExtractBeep > 0.9) {
        this.audio.extract(this.extractHold);
        this.lastExtractBeep = this.matchT;
      }
      this.message = `撤离 ${Math.floor(this.extractHold * 20)} / 20`;
      if (this.extractHold >= 1 && !this.extracted) {
        this.extracted = true;
        this.phase = "extracted";
        this.message = "撤离成功";
        this.audio.win();
        document.exitPointerLock();
      }
    } else if (this.extractHold > 0 && !this.extracted) {
      this.extractHold = Math.max(0, this.extractHold - dt * 0.12);
    }
  }

  private die(by: string) {
    if (this.spawnProtect > 0) {
      this.health = 100;
      return;
    }
    this.health = 0;
    this.deadT = 2.2;
    this.deaths += 1;
    this.streak = 0;
    this.extractHold = Math.max(0, this.extractHold * 0.4);
    this.phase = "dead";
    this.feed = [`${by} 击倒了你`, ...this.feed].slice(0, 5);
    this.message = `被 ${by} 击倒 · 即将重生`;
  }

  private updateFx(dt: number) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      this.tracers[i].t -= dt;
      if (this.tracers[i].t <= 0) {
        this.scene.remove(this.tracers[i].mesh);
        this.tracers[i].mesh.geometry.dispose();
        (this.tracers[i].mesh.material as THREE.Material).dispose();
        this.tracers.splice(i, 1);
      }
    }
    for (let i = this.flashes.length - 1; i >= 0; i--) {
      this.flashes[i].t -= dt;
      this.flashes[i].light.intensity = Math.max(0, this.flashes[i].t * 40);
      if (this.flashes[i].t <= 0) {
        this.scene.remove(this.flashes[i].light);
        this.flashes.splice(i, 1);
      }
    }
    for (let i = this.decals.length - 1; i >= 0; i--) {
      this.decals[i].t -= dt;
      const mat = this.decals[i].mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, this.decals[i].t * 0.25);
      if (this.decals[i].t <= 0) {
        this.scene.remove(this.decals[i].mesh);
        this.decals[i].mesh.geometry.dispose();
        mat.dispose();
        this.decals.splice(i, 1);
      }
    }
  }

  private draw() {
    const eye = this.eye();
    const shx = (Math.random() - 0.5) * this.shake;
    const shy = (Math.random() - 0.5) * this.shake;
    this.camera.position.set(eye.x + shx, eye.y + shy, eye.z);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.fov = this.ads ? this.baseFov * 0.66 : this.baseFov;
    this.camera.updateProjectionMatrix();
    const hip =
      this.weapon === "pistol"
        ? { x: 0.26, y: -0.2, z: -0.36 }
        : this.weapon === "shotgun"
          ? { x: 0.3, y: -0.26, z: -0.46 }
          : { x: 0.28, y: -0.24, z: -0.42 };
    const ads =
      this.weapon === "pistol"
        ? { x: 0.02, y: -0.12, z: -0.28 }
        : this.weapon === "shotgun"
          ? { x: 0.06, y: -0.17, z: -0.34 }
          : { x: 0.07, y: -0.16, z: -0.32 };
    const pose = this.ads ? ads : hip;
    this.gun.position.set(pose.x, pose.y - this.gunKick * 0.03, pose.z + this.gunKick * 0.05);
    this.gun.rotation.x = Math.sin(this.bob) * 0.03 + this.gunKick * 0.08;
    this.gun.rotation.y = this.recYaw * 2;
    this.gun.rotation.z = this.recPitch * 1.4;
    this.gunCam.position.copy(this.camera.position);
    this.gunCam.rotation.copy(this.camera.rotation);
    this.gunCam.fov = this.camera.fov;
    this.gunCam.updateProjectionMatrix();
    this.renderer.clear();
    this.camera.layers.enable(0);
    this.camera.layers.enable(1);
    this.renderer.render(this.scene, this.camera);
  }

  private emit() {
    this.onHud({
      phase: this.phase,
      health: Math.max(0, this.health),
      armor: Math.max(0, this.armor),
      mag: this.mag,
      reserve: this.reserve,
      weapon: this.weapon,
      reloading: this.reloadT > 0,
      ads: this.ads,
      kills: this.kills,
      deaths: this.deaths,
      streak: this.streak,
      botsAlive: this.bots.filter((b) => b.alive).length,
      matchTime: this.matchT,
      killFeed: this.feed,
      hitmarker: this.hitmarker,
      damageFlash: this.dmgFlash,
      message: this.message,
      grenades: this.grenades,
      extract: this.extractHold,
      extracted: this.extracted,
      yaw: this.yaw,
      playerX: this.x,
      playerZ: this.z,
      bots: this.bots.map((b) => ({ x: b.x, z: b.z, alive: b.alive })),
      extractX: EXTRACT.x,
      extractZ: EXTRACT.z,
      sensitivity: this.sensitivity,
      fov: this.baseFov,
      locked: this.locked,
      pickups: this.pickups.map((p) => ({ x: p.x, z: p.z, kind: p.kind, ready: p.ready })),
    });
    window.__ridgePhase = this.phase;
  }

  getHud(): HudSnapshot {
    return { ...EMPTY_HUD, phase: this.phase, health: this.health };
  }

  attachProbe() {
    window.__controlsTest = {
      getYaw: () => this.yaw,
      getSpeed: () => this.lastSpeed,
      setKeys: (codes: string[]) => {
        this.forced = new Set(codes);
        if (this.phase === "menu" || this.phase === "extracted") this.startMatch();
      },
      setPos: (x: number, z: number) => {
        this.x = x;
        this.z = z;
        this.y = 0;
      },
    };
  }

  dispose() {
    this.disposed = true;
    this.running = false;
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("blur", this.clearKeys);
    window.removeEventListener("mousemove", this.onMouse);
    window.removeEventListener("mouseup", this.onUp);
    document.removeEventListener("pointerlockchange", this.onLock);
    this.canvas.removeEventListener("mousedown", this.onDown);
    this.renderer.dispose();
    delete window.__controlsTest;
  }
}

declare global {
  interface Window {
    __ridgePhase?: HudSnapshot["phase"];
    __controlsTest?: {
      getYaw: () => number;
      getSpeed: () => number;
      setKeys?: (codes: string[]) => void;
      setPos?: (x: number, z: number) => void;
    };
  }
}
