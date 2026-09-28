import * as THREE from "three";
import { buildMap, collideXZ, MAP } from "./map.js";
import { LOADOUT, makeViewmodel, updateViewmodel, hitscan } from "./weapons.js";
import { spawnBots, updateBots } from "./bots.js";

const canvasHud = document.getElementById("minimap");
const mctx = canvasHud.getContext("2d");

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.08, 220);
camera.rotation.order = "YXZ";
scene.add(camera);

buildMap(scene);
const vm = makeViewmodel(camera);
const bots = spawnBots(scene, 6);

let matchTime = 0;
const player = {
  pos: new THREE.Vector3(0, 1.7, 8),
  vel: new THREE.Vector3(),
  yaw: 0,
  pitch: -0.1,
  hp: 100,
  grounded: true,
  crouch: false,
  sprint: false,
  gun: 0,
  ammo: LOADOUT.map((w) => ({ mag: w.mag, res: w.reserve })),
  reloading: 0,
  shootCd: 0,
  locked: false,
  sens: 1,
  fov: 75,
  kills: 0,
  extract: 0,
  extracting: false,
  inspect: false,
};

const keys = new Set();
const tracers = [];
const decals = [];
const grenades = [];
const dust = [];

const listenerHint = document.getElementById("hint");
const banner = document.getElementById("banner");
const feedEl = document.getElementById("feed");
const feedLines = [];

function feed(msg) {
  feedLines.unshift(msg);
  if (feedLines.length > 6) feedLines.pop();
  feedEl.innerHTML = feedLines.join("<br/>");
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function beep(freq, dur, vol = 0.05, dist = 1) {
  const g = audioCtx.createGain();
  const o = audioCtx.createOscillator();
  o.frequency.value = freq;
  g.gain.value = vol / Math.max(1, dist * 0.15);
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  o.stop(audioCtx.currentTime + dur);
}

function lock() {
  renderer.domElement.requestPointerLock();
  audioCtx.resume();
}
renderer.domElement.addEventListener("click", lock);
document.addEventListener("pointerlockchange", () => {
  player.locked = document.pointerLockElement === renderer.domElement;
  listenerHint.style.opacity = player.locked ? "0" : "0.85";
  banner.textContent = player.locked ? "" : "RIDGE 47";
});

document.addEventListener("mousemove", (e) => {
  if (!player.locked) return;
  player.yaw -= e.movementX * 0.0022 * player.sens;
  player.pitch -= e.movementY * 0.0022 * player.sens;
  player.pitch = THREE.MathUtils.clamp(player.pitch, -1.35, 1.35);
});

document.addEventListener("keydown", (e) => {
  keys.add(e.code);
  if (e.code === "Digit1") player.gun = 0;
  if (e.code === "Digit2") player.gun = 1;
  if (e.code === "Digit3") player.gun = 2;
  if (e.code === "KeyI") player.inspect = !player.inspect;
  if (e.code === "BracketLeft") player.sens = Math.max(0.3, player.sens - 0.1);
  if (e.code === "BracketRight") player.sens = Math.min(2.5, player.sens + 0.1);
  if (e.code === "Minus") player.fov = Math.max(60, player.fov - 2);
  if (e.code === "Equal") player.fov = Math.min(95, player.fov + 2);
  document.getElementById("sensv").textContent = player.sens.toFixed(1);
  document.getElementById("fovv").textContent = String(player.fov);
});
document.addEventListener("keyup", (e) => keys.delete(e.code));

function lookDir() {
  const e = new THREE.Euler(player.pitch, player.yaw, 0, "YXZ");
  return new THREE.Vector3(0, 0, -1).applyEuler(e);
}

let mouseDown = false;
let ads = false;

function fire() {
  const w = LOADOUT[player.gun];
  const a = player.ammo[player.gun];
  if (player.reloading > 0 || a.mag <= 0 || player.shootCd > 0) return;
  a.mag--;
  player.shootCd = 60 / w.rpm;
  vm.kick = 1;
  beep(180 + player.gun * 40, 0.05, 0.06, 1);
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.15 : 1.62;
  const pellets = w.pellets || 1;
  for (let i = 0; i < pellets; i++) {
    const dir = lookDir();
    const spr = w.spread * (ads ? 0.35 : 1);
    dir.x += (Math.random() - 0.5) * spr;
    dir.y += (Math.random() - 0.5) * spr * 0.6;
    dir.z += (Math.random() - 0.5) * spr;
    dir.normalize();
    const hit = hitscan(origin, dir, bots);
    spawnTracer(origin, dir, hit ? hit.dist : 40);
    if (hit) {
      const dmg = w.dmg * (hit.head ? 1.8 : 1);
      hit.bot.hp -= dmg;
      splat(hit.bot.pos.clone().setY(1.2));
      if (hit.bot.hp <= 0) {
        player.kills++;
        feed(`DOWNED hostile · ${player.kills}`);
        beep(90, 0.2, 0.08);
      }
    }
  }
}

function spawnTracer(origin, dir, len) {
  const g = new THREE.BufferGeometry().setFromPoints([
    origin.clone(),
    origin.clone().add(dir.clone().multiplyScalar(Math.min(len, 50))),
  ]);
  const line = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xffe080 }));
  scene.add(line);
  tracers.push({ mesh: line, t: 0.08 });
}

function splat(pos) {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(0.28, 8),
    new THREE.MeshBasicMaterial({ color: 0x5a1010, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
  );
  m.rotation.x = -Math.PI / 2;
  m.position.copy(pos);
  m.position.y = 0.03;
  scene.add(m);
  decals.push({ mesh: m });
  if (decals.length > 40) {
    const old = decals.shift();
    scene.remove(old.mesh);
  }
}

function tossGrenade() {
  if (grenades.length > 3) return;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 10, 8),
    new THREE.MeshLambertMaterial({ color: 0x3a4a28 })
  );
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.3, 0)).add(dir.clone().multiplyScalar(0.6));
  scene.add(mesh);
  grenades.push({ mesh, vel: dir.multiplyScalar(16).add(new THREE.Vector3(0, 5, 0)), life: 1.35 });
  beep(140, 0.08, 0.04);
}

function explode(pos) {
  beep(60, 0.25, 0.1);
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const d = b.pos.distanceTo(pos);
    if (d < 6.5) {
      b.hp -= 90 * (1 - d / 6.5);
      splat(b.pos.clone().setY(1));
      if (b.hp <= 0) {
        player.kills++;
        feed("GRENADE down");
      }
    }
  }
  if (player.pos.distanceTo(pos) < 5) {
    player.hp -= 35 * (1 - player.pos.distanceTo(pos) / 5);
    flashDmg();
  }
}

function flashDmg() {
  const el = document.getElementById("dmg");
  el.style.opacity = "1";
  setTimeout(() => (el.style.opacity = "0"), 180);
}

function fireAtPlayer(bot, dir) {
  const origin = bot.pos.clone().setY(1.5);
  spawnTracer(origin, dir, 30);
  const toP = player.pos.clone().setY(player.crouch ? 1.1 : 1.5).sub(origin);
  const aim = dir.dot(toP.clone().normalize());
  const dist = player.pos.distanceTo(bot.pos);
  beep(220, 0.04, 0.03, dist);
  if (aim > 0.97 && dist < 28) {
    player.hp -= 9 + Math.random() * 6;
    flashDmg();
  }
}

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    mouseDown = true;
    if (player.locked) fire();
  }
  if (e.button === 2) ads = true;
});
document.addEventListener("mouseup", (e) => {
  if (e.button === 0) mouseDown = false;
  if (e.button === 2) ads = false;
});
document.addEventListener("contextmenu", (e) => e.preventDefault());

let last = performance.now();
function tick(now) {
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;
  matchTime += dt;
  const mm = String(Math.floor(matchTime / 60)).padStart(2, "0");
  const ss = String(Math.floor(matchTime % 60)).padStart(2, "0");
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = `${mm}:${ss} · ${player.kills} K`;

  player.sprint = keys.has("ShiftLeft") || keys.has("ShiftRight");
  player.crouch = keys.has("ControlLeft") || keys.has("ControlRight");
  const speed = (player.crouch ? 3.2 : player.sprint ? 8.4 : 5.6);
  const fwd = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
  const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
  const wish = new THREE.Vector3();
  if (keys.has("KeyW")) wish.add(fwd);
  if (keys.has("KeyS")) wish.sub(fwd);
  if (keys.has("KeyD")) wish.add(right);
  if (keys.has("KeyA")) wish.sub(right);
  if (wish.lengthSq() > 0) wish.normalize().multiplyScalar(speed);
  player.pos.x += wish.x * dt;
  player.pos.z += wish.z * dt;
  collideXZ(player.pos, 0.4);

  if ((keys.has("Space") || keys.has("KeyJ")) && player.grounded) {
    player.vel.y = 6.2;
    player.grounded = false;
  }
  player.vel.y -= 18 * dt;
  player.pos.y += player.vel.y * dt;
  const stand = player.crouch ? 1.15 : 1.7;
  if (player.pos.y <= stand) {
    player.pos.y = stand;
    player.vel.y = 0;
    player.grounded = true;
  }

  camera.position.copy(player.pos);
  camera.rotation.set(player.pitch, player.yaw, 0);
  const targetFov = ads ? player.fov * 0.78 : player.fov;
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 8);
  camera.updateProjectionMatrix();

  if (keys.has("KeyR") && player.reloading <= 0) {
    const w = LOADOUT[player.gun];
    const a = player.ammo[player.gun];
    if (a.mag < w.mag && a.res > 0) player.reloading = w.reload;
  }
  if (player.reloading > 0) {
    player.reloading -= dt;
    if (player.reloading <= 0) {
      const w = LOADOUT[player.gun];
      const a = player.ammo[player.gun];
      const need = w.mag - a.mag;
      const take = Math.min(need, a.res);
      a.mag += take;
      a.res -= take;
    }
  }
  player.shootCd -= dt;
  if (mouseDown && LOADOUT[player.gun].auto && player.locked) fire();
  if (keys.has("KeyG")) {
    keys.delete("KeyG");
    tossGrenade();
  }

  updateViewmodel(vm, dt, wish.lengthSq() > 0 && player.grounded, vm.kick > 0, player.inspect);
  updateBots(bots, player.pos, dt, fireAtPlayer);

  for (const t of tracers) {
    t.t -= dt;
    if (t.t <= 0) scene.remove(t.mesh);
  }
  for (let i = tracers.length - 1; i >= 0; i--) if (tracers[i].t <= 0) tracers.splice(i, 1);

  for (const g of grenades) {
    g.vel.y -= 18 * dt;
    g.mesh.position.addScaledVector(g.vel, dt);
    if (g.mesh.position.y < 0.12) {
      g.mesh.position.y = 0.12;
      g.vel.y *= -0.3;
      g.vel.x *= 0.6;
      g.vel.z *= 0.6;
    }
    g.life -= dt;
    if (g.life <= 0) {
      explode(g.mesh.position.clone());
      scene.remove(g.mesh);
    }
  }
  for (let i = grenades.length - 1; i >= 0; i--) if (grenades[i].life <= 0) grenades.splice(i, 1);

  if (wish.lengthSq() > 1 && player.grounded && Math.random() < dt * 8) {
    const d = new THREE.Mesh(
      new THREE.CircleGeometry(0.18, 6),
      new THREE.MeshBasicMaterial({ color: 0x8a7040, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    d.rotation.x = -Math.PI / 2;
    d.position.set(player.pos.x, 0.02, player.pos.z);
    scene.add(d);
    dust.push({ mesh: d, t: 0.6 });
  }
  for (const d of dust) {
    d.t -= dt;
    d.mesh.material.opacity = d.t;
    if (d.t <= 0) scene.remove(d.mesh);
  }
  for (let i = dust.length - 1; i >= 0; i--) if (dust[i].t <= 0) dust.splice(i, 1);

  const exDist = player.pos.distanceTo(MAP.extract);
  const live = bots.filter((b) => b.hp > 0).length;
  const canEx = exDist < 3.2 && live <= 2;
  player.extracting = canEx && (keys.has("KeyF") || (player.extracting && exDist < 3.2));
  const exEl = document.getElementById("extract");
  if (player.extracting) {
    player.extract = Math.min(20, player.extract + dt);
    exEl.style.display = "block";
    document.getElementById("exfill").style.width = `${(player.extract / 20) * 100}%`;
    if (player.extract >= 20) {
      banner.textContent = "EXTRACT SECURE · RIDGE 47";
      feed("PAYLOAD out");
    }
  } else {
    player.extract = Math.max(0, player.extract - dt * 0.5);
    exEl.style.display = player.extract > 0.1 ? "block" : "none";
    document.getElementById("exfill").style.width = `${(player.extract / 20) * 100}%`;
  }

  if (player.hp <= 0) {
    player.hp = 100;
    player.pos.set(0, 1.7, 8);
    feed("YOU WERE DROPPED · reset");
  }

  const w = LOADOUT[player.gun];
  const a = player.ammo[player.gun];
  document.getElementById("ammo").innerHTML = `${a.mag} <small>/ ${a.res} · ${w.name}${player.reloading > 0 ? " · REL" : ""}</small>`;
  document.getElementById("hpfill").style.width = `${Math.max(0, player.hp)}%`;

  drawMini();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

function drawMini() {
  const s = 148;
  mctx.fillStyle = "rgba(10,14,8,0.85)";
  mctx.fillRect(0, 0, s, s);
  const sc = 1.4;
  const cx = s / 2;
  const cz = s / 2;
  const px = (x) => cx + (x - player.pos.x) * sc;
  const pz = (z) => cz + (z - player.pos.z) * sc;
  mctx.fillStyle = "#6a4a2a";
  for (const c of MAP.crates) {
    mctx.fillRect(px(c.pos.x) - 3, pz(c.pos.z) - 3, 6, 6);
  }
  mctx.fillStyle = "#cdc04a";
  mctx.fillRect(px(MAP.extract.x) - 4, pz(MAP.extract.z) - 4, 8, 8);
  mctx.fillStyle = "#c44";
  for (const b of bots) {
    if (b.hp <= 0) continue;
    mctx.fillRect(px(b.pos.x) - 2, pz(b.pos.z) - 2, 4, 4);
  }
  mctx.fillStyle = "#9e8";
  mctx.beginPath();
  mctx.arc(cx, cz, 3, 0, Math.PI * 2);
  mctx.fill();
  mctx.strokeStyle = "#cfe8a0";
  mctx.beginPath();
  mctx.moveTo(cx, cz);
  mctx.lineTo(cx - Math.sin(player.yaw) * 10, cz - Math.cos(player.yaw) * 10);
  mctx.stroke();
}

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

requestAnimationFrame(tick);
feed("Quarry dusk · hold extract after hostiles drop");
