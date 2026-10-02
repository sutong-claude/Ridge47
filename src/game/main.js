import * as THREE from "three";
import { buildMap, collideXZ, MAP, rayVsCrates, updateHangarFx, updateGrit, updateBirds, updateWildlife, inHangar, inWarehouse, inShed, inRadio, inShop, inHut, inCistern, inMag, inCrush, inDock, inAssay, inWeigh, inGen, inComp, inLube, inWash, inTire, inPaint, inParts, inWeld, inBatt, inHoist, inMill, inKiln, inSort, inLab, inPow, inFuse, inSkip, inTip, inAdit, inWinze, inCross, inRaise, inVent, inBin, inTail, inThick, inLaunder, inBall, inCyc, inSpiral, inOverflow, inReturn, inPress, inFloat, inFroth, inFloatLaunder, inStack, onStackBoom, onHaul, inSlake, inMilk, inRope, onBucket, inSinter, onStrand, inSample, onSampleBoom, inReject, inPellet, onDisc, inChute, inClar, onBridge, inUnder, inSilo, onScrew, inJig, onJigDeck, inHutch, inCool, onCoolCar, inQuench, inFall, inBag, onBagRack, inFines, inDry, onDryShell, inExhaust, inLoco, onLoco, inSteam, inAgit, onRake, inSlurry, inScrub, onScrubTray, inLiquor, inEw, onCathode, inAcid, inCone, onMantle, inDischarge, inClas, onClasRake, inSands, inMags, onMagDrum, inConc, inRod, onRodCharge, inRodDisch, inSx, onSxMixer, inWeir, inSluice, onBelt, inInterior, inLookout, nearestCrate, floorY, hasLOS } from "./map.js";
import { LOADOUT, makeViewmodel, updateViewmodel, hitscan, applyRecoil, setViewmodelGun, stainViewmodel } from "./weapons.js";
import { spawnBots, updateBots, reinforce } from "./bots.js";

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
  burst: 0,
  ads: false,
  sprintFov: 0,
  landKick: 0,
  wasGrounded: true,
  lean: 0,
  dead: 0,
  killer: null,
  slide: 0,
  deaths: 0,
  dmgDealt: 0,
  shots: 0,
  hits: 0,
  extracts: 0,
  scoreOpen: false,
  stam: 100,
  nades: 3,
  spotted: 0,
  healT: 0,
  meleeCd: 0,
  suppress: 0,
  smear: 0,
  streak: 0,
  prone: false,
  nvg: false,
  binos: false,
  vault: 0,
  jam: 0,
  sip: 0,
  nvgBatt: 100,
  laser: false,
  flashes: 2,
  blind: 0,
  inbound: false,
  finalCall: false,
  radioEcho: 0,
  smokes: 2,
  sips: 3,
  mapBig: false,
  wraps: 2,
  wrap: 0,
  illums: 2,
  stakes: 3,
  overwatch: 1,
  overwatchT: 0,
  wheels: false,
  _lastNet: false,
  shoulder: 1,
  zero: 0,
  dumpRel: false,
  chems: 4,
  brassBurn: 0,
  satch: 2,
  radios: 2,
  beacons: 2,
  lunge: 0,
  strobes: 3,
  checkT: 0,
  tapMag: 0,
  semi: false,
  twigT: 1.4,
  contactT: 0,
  moanT: 0,
  restockPing: 0,
  scratch: 0,
  wasSprint: false,
  hintOff: false,
  knives: 3,
  markT: 0,
  yawTick: 0,
  sloshT: 0,
  scanT: 16,
  visorFog: 0,
  navLock: false,
  gaspT: 0,
  nvgBeepT: 0,
  rainDripT: 0,
  leanWas: 0,
  scrapeT: 0,
  callsign: "RIDGE 47",
  resWarn: false,
  muteNet: false,
  pin: null,
  oilDripT: 1.4,
  aimBeatT: 0,
  dive: 0,
  clockChime: false,
  clock4: false,
  compactHud: false,
  liftCall: false,
  stillT: 0,
  ratT: 2.8,
  vTap: 0,
  heatHud: 0,
  cTap: 0,
  padStaticT: 1.8,
  heartT: 0.7,
  clock3: false,
  clock2: false,
  clock1: false,
  goCalled: false,
  tinT: 1.2,
  wxT: 0,
  nTap: 0,
  kitT: 0,
  lastMagSaid: false,
  bTap: 0,
  tTap: 0,
  glassFocus: false,
  lampStrobe: 0,
  steadyCall: false,
  clock030: false,
  gritMag: false,
  rustleT: 0,
  ammoTickT: 1.4,
  fogBreath: 0,
  pShift: false,
};

const keys = new Set();
const tracers = [];
const decals = [];
const grenades = [];
const dust = [];
const flares = [];
let extractFlareLit = false;
const nadePings = [];
const radioPings = [];
const worldPings = [];
const smokeClouds = [];
const dropPacks = [];
const illums = [];
const stakes = [];
const chems = [];
const satchels = [];
const radios = [];
const beacons = [];
const mortars = [];
const strobes = [];
const knives = [];
const casingPiles = [];
const corpseFlies = [];
let freightT = 28 + Math.random() * 18;
let lastStance = "STAND";
let coyoteT = 14 + Math.random() * 10;
let owlT = 18 + Math.random() * 16;
let dogT = 26 + Math.random() * 18;
let ravenT = 11 + Math.random() * 9;
let wolfT = 34 + Math.random() * 22;
let beetleT = 3.2;
let scorpT = 7 + Math.random() * 8;
let freightRumT = 22 + Math.random() * 16;
let tarpT = 2.4;
const bloodPools = [];
let staticT = 0;
let mortarT = 22 + Math.random() * 18;
let windShiftT = 0;
let fidgetT = 3 + Math.random() * 4;
let sirenT = 0;
let thunderT = 8 + Math.random() * 10;
const shells = [];
const mags = [];
const lastKnown = [];
let birdCallT = 6 + Math.random() * 8;
let windHowlT = 11 + Math.random() * 8;
let stepT = 0;
let botStepT = 0.3;
const dirHits = [];
let tinnitus = 0;
let heartT = 0;
let lastGun = 0;
let lastYaw = 0;
let lastYawTickAt = 0;
let lastPitch = 0;
let heatClickT = 0;
let breathT = 0;
let wasExtracting = false;
player.shake = 0;
player.bob = 0;
player.eye = 1.7;
player.flash = false;
let extractTick = 0;
let lastRoundPing = false;
let lastImpact = null;
let approachPad = false;
let closeShoutT = 0;
let slingT = 0;
let clockWarn = false;
player.mirrors = 3;
let cicadaT = 3 + Math.random() * 4;
let rainT = 0;
let chatterT = 8 + Math.random() * 6;
let artyT = 18 + Math.random() * 14;
let gustT = 12 + Math.random() * 8;
let bloodStepT = 0;
let WIND_DEG = 240;
const chatterLines = [
  "NET · contact ridge west",
  "NET · hold the cut",
  "NET · moving two",
  "NET · eyes on pad",
  "NET · check hangar wing",
  "NET · keep low",
];
let adsWas = false;
let cook = 0;
let cooking = false;
player.dirt = 0;
const shadow = new THREE.Mesh(
  new THREE.CircleGeometry(0.38, 12),
  new THREE.MeshBasicMaterial({ color: 0x1a140c, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false })
);
shadow.rotation.x = -Math.PI / 2;
shadow.position.y = 0.02;
scene.add(shadow);

const listenerHint = document.getElementById("hint");
const banner = document.getElementById("banner");
const feedEl = document.getElementById("feed");
const feedLines = [];

function feed(msg, kind = "note") {
  if (player.muteNet && typeof msg === "string" && msg.startsWith("NET ·") && msg !== "NET · muted" && msg !== "NET · open") {
    return;
  }
  const row = { msg, kind, t: performance.now() };
  feedLines.unshift(row);
  if (feedLines.length > 7) feedLines.pop();
  feedEl.innerHTML = feedLines
    .map((r) => {
      const cls = r.kind === "kill" ? "krow kill" : "krow";
      const glyph = r.kind === "kill" ? "X" : r.kind === "nade" ? "G" : r.kind === "ammo" ? "+" : "·";
      return `<div class="${cls}"><span class="ktick"></span><span class="kglyph">${glyph}</span>${r.msg}</div>`;
    })
    .join("");
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function beep(freq, dur, vol = 0.05, dist = 1, type = "square", pan = 0, occluded = false) {
  const g = audioCtx.createGain();
  const o = audioCtx.createOscillator();
  const p = audioCtx.createStereoPanner();
  const filter = audioCtx.createBiquadFilter();
  o.type = type;
  o.frequency.value = freq;
  const d = Math.max(0.35, dist);
  const atten = 1 / (1 + (d / 9) ** 2);
  const muff = occluded ? 0.42 : 1;
  g.gain.value = vol * atten * muff;
  filter.type = "lowpass";
  const farCut = Math.max(320, 4800 - d * 95);
  filter.frequency.value = occluded ? Math.min(780, farCut) : farCut;
  filter.Q.value = occluded ? 0.6 : 0.7;
  p.pan.value = Math.max(-0.9, Math.min(0.9, pan));
  o.connect(filter);
  filter.connect(g);
  g.connect(p);
  p.connect(audioCtx.destination);
  o.start();
  o.stop(audioCtx.currentTime + dur);
}

function sfxAt(world, freq, dur, vol = 0.05, type = "square") {
  if (!world) {
    beep(freq, dur, vol, 1, type);
    return;
  }
  const d = world.distanceTo(player.pos);
  const look = lookDir();
  const to = world.clone().sub(player.pos);
  const right = new THREE.Vector3().crossVectors(look, new THREE.Vector3(0, 1, 0));
  if (right.lengthSq() > 0.001) right.normalize();
  const pan = THREE.MathUtils.clamp(to.dot(right) / Math.max(5, d), -0.85, 0.85);
  const occluded = d > 5.5 && !hasLOS(player.pos, world, 1.45);
  beep(freq, dur, vol, Math.max(0.8, d), type, pan, occluded);
  if (occluded) {
    setTimeout(() => beep(freq * 0.46, dur * 1.5, vol * 0.22, Math.max(1.2, d), "sine", pan * 0.35, true), 42);
  } else if (inInterior(player.pos)) {
    setTimeout(() => beep(freq * 0.58, dur * 1.35, vol * 0.32, Math.max(1, d), "sine", pan * 0.55), 26);
  }
}

function calloutBeep(dist) {
  beep(420, 0.07, 0.05, dist, "triangle");
  setTimeout(() => beep(310, 0.09, 0.045, dist, "triangle"), 90);
}

function thud() {
  beep(70, 0.12, 0.07, 1, "sine");
  beep(42, 0.16, 0.05, 1, "sine");
}

function strikeLightning() {
  const flashEl = document.getElementById("flash");
  if (flashEl) {
    flashEl.style.opacity = "0.42";
    setTimeout(() => {
      flashEl.style.opacity = "0.08";
    }, 50);
    setTimeout(() => {
      flashEl.style.opacity = "0.28";
    }, 110);
    setTimeout(() => {
      flashEl.style.opacity = "0";
    }, 220);
  }
  const oldFog = scene.fog ? scene.fog.density : 0.012;
  const oldBg = scene.background ? scene.background.clone() : new THREE.Color(0x1c140c);
  scene.background = new THREE.Color(0xc8d4e8);
  if (scene.fog) scene.fog.density = oldFog * 0.35;
  if (MAP.hemi) MAP.hemi.intensity = 1.35;
  setTimeout(() => {
    scene.background = oldBg;
    if (scene.fog) scene.fog.density = oldFog;
    if (MAP.hemi) MAP.hemi.intensity = 0.55;
  }, 160);
  const bolt = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 18 + Math.random() * 10, 0.12),
    new THREE.MeshBasicMaterial({ color: 0xe8f0ff, transparent: true, opacity: 0.85 })
  );
  const ang = Math.random() * Math.PI * 2;
  const rad = 28 + Math.random() * 22;
  bolt.position.set(Math.cos(ang) * rad, 16, Math.sin(ang) * rad);
  bolt.rotation.z = (Math.random() - 0.5) * 0.35;
  scene.add(bolt);
  dust.push({ mesh: bolt, t: 0.18 });
  beep(38, 0.55, 0.035, 1, "sine");
  setTimeout(() => beep(28, 0.7, 0.028, 1, "sine"), 220);
  feed("STORM · ridge flash");
  rainT = Math.max(rainT, 9 + Math.random() * 6);
  cicadaT = 0.4;
  setTimeout(() => {
    beep(2100, 0.05, 0.012, 1, "triangle");
    beep(1800, 0.08, 0.01, 1, "sine");
  }, 400);
}

function gunEcho(from, freq) {
  const walls = [
    [40, 0],
    [-40, 0],
    [0, 40],
    [0, -40],
  ];
  let nearest = 18;
  for (const [wx, wz] of walls) {
    const d = Math.hypot(from.x - wx, from.z - wz);
    if (d < nearest) nearest = d;
  }
  const indoor = inInterior(from);
  const delay = indoor ? 22 + nearest * 3 : 40 + nearest * 6;
  const vol = indoor ? 0.034 : 0.018 + (1 - Math.min(1, nearest / 40)) * 0.02;
  setTimeout(() => sfxAt(from, freq * (indoor ? 0.48 : 0.55), indoor ? 0.14 : 0.09, vol, indoor ? "sine" : "triangle"), delay);
  setTimeout(() => sfxAt(from, freq * 0.38, 0.14, vol * 0.7, "sine"), delay + 55);
}

function showHitmark(kill) {
  const el = document.getElementById("hitmark");
  el.classList.toggle("kill", !!kill);
  el.style.opacity = "1";
  clearTimeout(showHitmark._t);
  showHitmark._t = setTimeout(() => (el.style.opacity = "0"), kill ? 220 : 90);
}

function floatDmg(amount, head) {
  const wrap = document.getElementById("floats");
  const n = document.createElement("div");
  n.className = "floatn" + (head ? " head" : "");
  n.textContent = (head ? "H " : "") + Math.round(amount);
  n.style.marginLeft = `${(Math.random() - 0.5) * 36}px`;
  wrap.appendChild(n);
  setTimeout(() => n.remove(), 750);
}

function floatLoot(msg) {
  const wrap = document.getElementById("floats");
  if (!wrap) return;
  const n = document.createElement("div");
  n.className = "floatn loot";
  n.textContent = msg;
  n.style.marginLeft = `${(Math.random() - 0.5) * 20}px`;
  wrap.appendChild(n);
  setTimeout(() => n.remove(), 850);
}

function showPlate(name) {
  const el = document.getElementById("plate");
  if (!el) return;
  el.textContent = name;
  el.classList.add("show");
  clearTimeout(showPlate._t);
  showPlate._t = setTimeout(() => el.classList.remove("show"), 900);
}

function groundHit(p) {
  const puff = new THREE.Mesh(
    new THREE.SphereGeometry(0.08 + Math.random() * 0.06, 5, 4),
    new THREE.MeshBasicMaterial({ color: 0x8a7048, transparent: true, opacity: 0.45 })
  );
  puff.position.set(p.x, 0.06, p.z);
  scene.add(puff);
  dust.push({ mesh: puff, t: 0.28, rise: 0.35, drift: (Math.random() - 0.5) * 0.4 });
  if (Math.random() < 0.35) {
    const print = new THREE.Mesh(
      new THREE.CircleGeometry(0.07, 6),
      new THREE.MeshBasicMaterial({ color: 0x4a3a22, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    print.rotation.x = -Math.PI / 2;
    print.position.set(p.x, 0.02, p.z);
    scene.add(print);
    decals.push({ mesh: print });
    if (decals.length > 40) {
      const old = decals.shift();
      scene.remove(old.mesh);
    }
  }
}

function lock() {
  renderer.domElement.requestPointerLock();
  audioCtx.resume();
}
renderer.domElement.addEventListener("click", () => {
  if (player.scoreOpen) {
    resetMatch();
    return;
  }
  lock();
});
document.getElementById("scorecard").addEventListener("click", (e) => {
  e.stopPropagation();
  resetMatch();
});
document.addEventListener("pointerlockchange", () => {
  player.locked = document.pointerLockElement === renderer.domElement;
  listenerHint.style.opacity = player.locked ? "0" : "0.85";
  banner.textContent = player.locked ? "" : "RIDGE 47";
  if (player.locked && !player.goCalled) {
    player.goCalled = true;
    showPlate("GO");
    feed(`NET · ${player.callsign} set`);
    beep(520, 0.06, 0.03, 1, "sine");
    setTimeout(() => beep(640, 0.08, 0.028, 1, "triangle"), 90);
  }
});

document.addEventListener("mousemove", (e) => {
  if (!player.locked) return;
  player.yaw -= e.movementX * 0.0022 * player.sens;
  player.pitch -= e.movementY * 0.0022 * player.sens;
  player.pitch = THREE.MathUtils.clamp(player.pitch, -1.35, 1.35);
});

document.addEventListener("keydown", (e) => {
  keys.add(e.code);
  if (e.code === "Digit1" || e.code === "Digit2" || e.code === "Digit3") {
    const next = e.code === "Digit1" ? 0 : e.code === "Digit2" ? 1 : 2;
    if (next !== player.gun) {
      player.gun = next;
      player.burst = 0;
      player.reloading = 0;
      setViewmodelGun(vm, next);
      beep(140 + next * 30, 0.05, 0.03, 1, "triangle");
      showPlate(LOADOUT[next].name);
      beep(110, 0.05, 0.022, 1, "triangle");
      if (player.sprint) {
        beep(70, 0.06, 0.02, 1, "triangle");
        setTimeout(() => beep(95, 0.04, 0.016, 1, "sine"), 50);
        feed("SLING");
      }
    }
  }
  if (e.code === "KeyI") {
    player.inspect = !player.inspect;
    const mag = player.ammo[player.gun].mag;
    if (player.inspect) {
      feed(`CHECK · ${LOADOUT[player.gun].name} ${mag}`);
      if (mag <= 0) beep(190, 0.06, 0.025, 1, "square");
      else beep(260, 0.04, 0.02, 1, "triangle");
    }
  }
  if (e.code === "Semicolon") {
    player.semi = !player.semi;
    beep(player.semi ? 280 : 420, 0.05, 0.02, 1, "square");
    feed(player.semi ? "FIRE · SEMI" : "FIRE · AUTO");
    showPlate(player.semi ? "SEMI" : "AUTO");
  }
  if (e.code === "KeyV") {
    const now = performance.now();
    if (now - (player.vTap || 0) < 280) {
      player.vTap = 0;
      sosRadio();
    } else {
      player.vTap = now;
      radioPings.push({ x: player.pos.x, z: player.pos.z, t: 1.8 });
      beep(640, 0.06, 0.04, 1, "sine");
      setTimeout(() => beep(480, 0.08, 0.035, 1, "sine"), 70);
      feed(`RADIO · ${bearingOf(player.pos)}`);
      player.radioEcho = 0.55;
    }
  }
  if (e.code === "F5") rangeCard();
  if (e.code === "F6") pinLastKnown();
  if (e.code === "F7") toggleNetMute();
  if (e.code === "F8") wipeBlade();
  if (e.code === "F9") {
    e.preventDefault();
    intelCard();
  }
  if (e.code === "F10") {
    e.preventDefault();
    toggleCompactHud();
  }
  if (e.code === "F11") {
    e.preventDefault();
    weatherCard();
  }
  if (e.code === "F12") {
    e.preventDefault();
    kitCard();
  }
  if (e.code === "Tab") {
    e.preventDefault();
    peekScore();
  }
  if (e.code === "AltLeft" || e.code === "AltRight") {
    player.shoulder *= -1;
    vm.shoulder = player.shoulder;
    beep(320, 0.04, 0.02, 1, "triangle");
    feed(player.shoulder < 0 ? "SHOULDER · left" : "SHOULDER · right");
  }
  if (e.code === "KeyC") {
    const now = performance.now();
    if (now - (player.cTap || 0) < 280) {
      player.cTap = 0;
      dropPing(true);
    } else {
      player.cTap = now;
      dropPing(false);
    }
  }
  if (e.code === "KeyX") {
    if (e.shiftKey) throwKnife();
    else meleeBash();
  }
  if (e.code === "F2") stickyMark();
  if (e.code === "F3") toggleNavLock();
  if (e.code === "F4") wipeVisor();
  if (e.code === "KeyH") {
    if (e.shiftKey) helmTap();
    else sipCanteen();
  }
  if (e.code === "KeyL") {
    player.laser = !player.laser;
    beep(player.laser ? 920 : 240, 0.04, 0.018, 1, "sine");
    feed(player.laser ? "IR LASER on" : "IR LASER off");
  }
  if (e.code === "KeyY") tossFlash();
  if (e.code === "KeyJ") tossSmoke();
  if (e.code === "KeyU") tossIllum();
  if (e.code === "KeyK") plantStake();
  if (e.code === "KeyO") callOverwatch();
  if (e.code === "Digit4") startWrap();
  if (e.code === "Digit5") tossChem();
  if (e.code === "Digit6") sitrep();
  if (e.code === "Digit7") plantSatchel();
  if (e.code === "Digit8") plantRadio();
  if (e.code === "Digit9") tossBeacon();
  if (e.code === "Digit0") flashMirror();
  if (e.code === "Comma") tossStrobe();
  if (e.code === "Period") tapMag();
  if (e.code === "Slash") pressCheck();
  if (e.code === "Backquote") tossPebble();
  if (e.code === "KeyM") {
    player.mapBig = !player.mapBig;
    document.getElementById("minimap").classList.toggle("big", player.mapBig);
    beep(player.mapBig ? 480 : 260, 0.04, 0.018, 1, "sine");
  }
  if (e.code === "KeyP") {
    if (e.shiftKey) handSignal();
    else whistle();
  }
  if (e.code === "F1") {
    player.hintOff = !player.hintOff;
    const h = document.getElementById("hint");
    if (h) h.style.display = player.hintOff ? "none" : "block";
    beep(240, 0.04, 0.016, 1, "sine");
  }
  if (e.code === "KeyZ") {
    const diving = !player.prone && (player.sprint || player.slide > 0 || keys.has("ShiftLeft") || keys.has("ShiftRight"));
    player.prone = !player.prone;
    if (player.prone) {
      player.sprint = false;
      player.slide = 0;
      if (diving) {
        player.dive = 0.55;
        player.shake = Math.max(player.shake || 0, 0.18);
        player.stam = Math.max(0, player.stam - 8);
        beep(70, 0.08, 0.03, 1, "sine");
        setTimeout(() => beep(50, 0.07, 0.022, 1, "triangle"), 70);
        feed("DIVE");
        showPlate("DIVE");
        const grit = new THREE.Mesh(
          new THREE.CircleGeometry(0.55, 8),
          new THREE.MeshBasicMaterial({ color: 0x6a5840, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
        );
        grit.rotation.x = -Math.PI / 2;
        grit.position.set(player.pos.x, 0.03, player.pos.z);
        scene.add(grit);
        dust.push({ mesh: grit, t: 1.4 });
      } else beep(90, 0.05, 0.02, 1, "sine");
    } else beep(140, 0.04, 0.018, 1, "triangle");
  }
  if (e.code === "KeyN") {
    const now = performance.now();
    if (player.nvg && now - (player.nTap || 0) < 280) {
      player.nTap = 0;
      nvgPulse();
    } else {
      player.nTap = now;
      if (!player.nvg && player.nvgBatt < 6) {
        beep(140, 0.06, 0.02, 1, "square");
        feed("NVG · dead cell");
      } else {
        player.nvg = !player.nvg;
        document.getElementById("hud").classList.toggle("nvg", player.nvg);
        if (MAP.hemi) MAP.hemi.intensity = player.nvg ? 0.95 : 0.55;
        beep(player.nvg ? 760 : 220, 0.05, 0.022, 1, "sine");
        feed(player.nvg ? "NVG on" : "NVG off");
      }
    }
  }
  if (e.code === "KeyB") {
    const now = performance.now();
    if (player.binos && now - (player.bTap || 0) < 280) {
      player.bTap = 0;
      binosFocus();
    } else {
      player.bTap = now;
      player.binos = !player.binos;
      if (!player.binos) player.glassFocus = false;
      document.getElementById("hud").classList.toggle("binos", player.binos);
      if (player.binos) {
        player.ads = true;
        beep(420, 0.05, 0.02, 1, "sine");
        feed("GLASS");
      } else beep(260, 0.04, 0.018, 1, "triangle");
    }
  }
  if (e.code === "KeyT") {
    const now = performance.now();
    if (player.flash && now - (player.tTap || 0) < 280) {
      player.tTap = 0;
      player.lampStrobe = 2.4;
      beep(980, 0.04, 0.024, 1, "square");
      setTimeout(() => beep(720, 0.05, 0.02, 1, "sine"), 60);
      feed("LAMP · strobe");
      showPlate("STROBE");
      return;
    }
    player.tTap = now;
    player.flash = !player.flash;
    if (player.flash) {
      if (!player.spot) {
        const spot = new THREE.SpotLight(0xd8e8ff, 2.2, 22, 0.32, 0.45, 1);
        camera.add(spot);
        camera.add(spot.target);
        spot.position.set(0.12, -0.08, -0.1);
        spot.target.position.set(0.2, -0.2, -6);
        player.spot = spot;
      }
      player.spot.intensity = 2.2;
      beep(880, 0.04, 0.02, 1, "sine");
      feed("LAMP on");
    } else if (player.spot) {
      player.spot.intensity = 0;
      beep(220, 0.04, 0.02, 1, "sine");
      feed("LAMP off");
    }
  }
  if (e.code === "BracketLeft") player.sens = Math.max(0.3, player.sens - 0.1);
  if (e.code === "BracketRight") player.sens = Math.min(2.5, player.sens + 0.1);
  if (e.code === "Minus") player.fov = Math.max(60, player.fov - 2);
  if (e.code === "Equal") player.fov = Math.min(95, player.fov + 2);
  document.getElementById("sensv").textContent = player.sens.toFixed(1);
  document.getElementById("fovv").textContent = String(player.fov);
});
document.addEventListener("keyup", (e) => keys.delete(e.code));
document.addEventListener("wheel", (e) => {
  if (!player.locked || !player.ads) return;
  player.zero = THREE.MathUtils.clamp((player.zero || 0) + (e.deltaY > 0 ? 50 : -50), 0, 300);
  feed(`ZERO · ${player.zero}m`);
  beep(400 + player.zero * 0.4, 0.03, 0.014, 1, "sine");
});

function lookDir() {
  const zeroPitch = ((player.zero || 0) / 300) * 0.035;
  const e = new THREE.Euler(player.pitch - zeroPitch, player.yaw + player.lean * 0.07, 0, "YXZ");
  return new THREE.Vector3(0, 0, -1).applyEuler(e);
}

function fire() {
  if (player.dead > 0 || player.scoreOpen) return;
  const w = LOADOUT[player.gun];
  const a = player.ammo[player.gun];
  if (player.shootCd > 0) return;
  if (player.reloading > 0) {
    player.reloading = 0;
    beep(210, 0.04, 0.022, 1, "square");
    feed("RELOAD · cancel");
    showPlate("CANCEL");
    return;
  }
  if (player.jam > 0) {
    beep(110, 0.05, 0.03, 1, "square");
    player.shootCd = 0.22;
    return;
  }
  if (a.mag <= 0) {
    beep(160, 0.04, 0.03, 1, "square");
    player.shootCd = 0.22;
    showPlate("CLICK");
    feed("DRY · empty");
    return;
  }
  a.mag--;
  if (a.mag > 0 && a.mag <= 5) {
    beep(210 + a.mag * 18, 0.03, 0.018, 1, "square");
  }
  if (a.mag === 1) {
    beep(90, 0.05, 0.022, 1, "triangle");
    setTimeout(() => beep(70, 0.06, 0.016, 1, "sine"), 60);
    showPlate("LAST");
  }
  if (a.mag === 0) {
    lastRoundPing = true;
    beep(140, 0.05, 0.04, 1, "square");
    setTimeout(() => beep(90, 0.08, 0.03, 1, "triangle"), 50);
  }
  player.shots++;
  player.shootCd = 60 / w.rpm;
  vm.kick = 1;
  vm.slide = 1;
  applyRecoil(player, player.gun, player.burst);
  player.burst++;
  beep(180 + player.gun * 40, 0.05, 0.06, 1);
  gunEcho(player.pos, 180 + player.gun * 40);
  if (inInterior(player.pos)) {
    setTimeout(() => beep(90 + player.gun * 20, 0.16, 0.034, 1, "sine"), 90);
    setTimeout(() => beep(55, 0.2, 0.02, 1, "triangle"), 160);
    if (Math.random() < 0.38) {
      setTimeout(() => {
        beep(210 + Math.random() * 90, 0.05, 0.018, 1, "triangle");
        setTimeout(() => beep(140 + Math.random() * 40, 0.08, 0.012, 1, "sine"), 70);
      }, 220);
    }
  }
  ejectShell();
  muzzleFlash();
  if (!inHangar(player.pos) && Math.random() < 0.55) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.06 + Math.random() * 0.05, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0x8a7048, transparent: true, opacity: 0.32 })
    );
    puff.position.copy(player.pos).add(new THREE.Vector3(0, 1.35, 0));
    scene.add(puff);
    dust.push({ mesh: puff, t: 0.22, rise: 0.35, drift: (Math.random() - 0.5) * 0.25 });
  }
  if ((vm.heat || 0) > 0.82 && Math.random() < 0.045) {
    player.jam = 1.1;
    vm.heat = 0.4;
    beep(90, 0.08, 0.04, 1, "square");
    setTimeout(() => beep(70, 0.1, 0.03, 1, "triangle"), 60);
    feed("JAM · tap R");
  }
  if (vm.heat > 0.55 && Math.random() < 0.35) heatPuff();
  const origin = player.pos.clone();
  origin.y = player.prone ? 0.42 : player.crouch ? 1.15 : 1.62;
  const pellets = w.pellets || 1;
  for (let i = 0; i < pellets; i++) {
    const dir = lookDir();
    const hold = player.ads && player.sprint;
    const bipod = player.ads && player.prone;
    const spr = w.spread * (player.ads ? (hold ? 0.18 : bipod ? 0.12 : 0.35) : player.prone ? 0.55 : 1);
    dir.x += (Math.random() - 0.5) * spr;
    dir.y += (Math.random() - 0.5) * spr * 0.6;
    dir.z += (Math.random() - 0.5) * spr;
    dir.normalize();
    const hit = hitscan(origin, dir, bots);
    const block = rayVsCrates(origin, dir, hit ? hit.dist : 50);
    spawnTracer(origin, dir, block ? block.dist : hit ? hit.dist : 40);
    if (block) {
      const p = origin.clone().add(dir.clone().multiplyScalar(block.dist));
      spark(p);
      crateHole(p, dir);
      if (p.y < 0.45) groundHit(p);
      lastImpact = { x: p.x, z: p.z, t: 2.4 };
      if (block.crate && block.crate.drum && !block.crate.dead) {
        block.crate.hp -= w.dmg;
        if (block.crate.hp <= 0) cookDrum(block.crate);
      }
    } else if (!hit) {
      const gDist = origin.y > 0.08 && dir.y < -0.04 ? origin.y / -dir.y : 0;
      if (gDist > 0.4 && gDist < 40) {
        const gp = origin.clone().add(dir.clone().multiplyScalar(gDist));
        groundHit(gp);
        lastImpact = { x: gp.x, z: gp.z, t: 1.8 };
      }
    }
    if (hit && !block) {
      const dmg = w.dmg * (hit.head ? 1.8 : 1);
      hit.bot.hp -= dmg;
      player.hits++;
      player.dmgDealt += dmg;
      splat(hit.bot.pos.clone().setY(1.2));
      if (hit.head && Math.random() < 0.22 && hit.bot.hp > 18) {
        hit.bot.hp += dmg * 0.55;
        player.dmgDealt -= dmg * 0.55;
        beep(1400, 0.03, 0.035, 1, "square");
        setTimeout(() => beep(900, 0.04, 0.02, 1, "triangle"), 40);
        feed(`RICOCHET · ${hit.bot.unit || "HELM"}`);
        spark(hit.bot.pos.clone().setY(1.68));
      } else if (hit.head) {
        bloodMist(hit.bot.pos.clone().setY(1.65));
        beep(980, 0.04, 0.03, 1, "sine");
      }
      showHitmark(hit.bot.hp <= 0);
      floatDmg(dmg, hit.head);
      if (hit.bot.hp <= 0) {
        player.kills++;
        player.streak = (player.streak || 0) + 1;
        feed(`DOWNED · ${hit.bot.unit || "HOSTILE"} · ${w.name} · ${player.kills}${player.streak > 1 ? " · x" + player.streak : ""}`, "kill");
        beep(90, 0.2, 0.08);
        beep(420, 0.06, 0.04, 1, "sine");
        setTimeout(() => beep(280, 0.08, 0.03, 1, "triangle"), 70);
        if (hit.dist < 4.5) {
          player.smear = 1.8;
          stainViewmodel(vm, 0.9);
          beep(70, 0.12, 0.04, 1, "sine");
        }
        if (player.streak === 2) feed("STREAK · 2");
        if (player.streak === 3) feed("STREAK · 3 · HOT");
        if (player.streak >= 4) feed(`STREAK · ${player.streak} · ON FIRE`, "kill");
        bloodPool(hit.bot.pos);
      }
    }
  }
}

function dropMag() {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(0.045, 0.12, 0.06),
    new THREE.MeshLambertMaterial({ color: 0x2a2c24, transparent: true })
  );
  const dir = lookDir();
  const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.05 : 1.35;
  origin.add(dir.clone().multiplyScalar(0.28)).add(right.multiplyScalar(0.08));
  m.position.copy(origin);
  scene.add(m);
  mags.push({
    mesh: m,
    vel: right.multiplyScalar(0.6 + Math.random() * 0.4)
      .add(new THREE.Vector3(0, 0.8 + Math.random() * 0.4, 0))
      .add(dir.clone().multiplyScalar(0.15)),
    life: 4.2,
    spin: 4 + Math.random() * 5,
  });
  beep(210, 0.05, 0.025, 1, "triangle");
}

function ejectShell() {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(0.012, 0.012, 0.028),
    new THREE.MeshBasicMaterial({ color: 0xc9a227 })
  );
  const dir = lookDir();
  const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.15 : 1.55;
  origin.add(dir.clone().multiplyScalar(0.35)).add(right.multiplyScalar(0.12));
  m.position.copy(origin);
  scene.add(m);
  shells.push({
    mesh: m,
    vel: right.multiplyScalar(2.4 + Math.random()).add(new THREE.Vector3(0, 2.2 + Math.random(), 0)).add(dir.clone().multiplyScalar(-0.4)),
    life: 1.45,
  });
}

function heatPuff() {
  const dir = lookDir();
  const puff = new THREE.Mesh(
    new THREE.SphereGeometry(0.04 + Math.random() * 0.03, 6, 5),
    new THREE.MeshBasicMaterial({ color: 0xc8a070, transparent: true, opacity: 0.35 })
  );
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.2 : 1.52;
  puff.position.copy(origin).add(dir.clone().multiplyScalar(0.62));
  scene.add(puff);
  dust.push({ mesh: puff, t: 0.35 + Math.random() * 0.2, rise: 0.55, drift: (Math.random() - 0.5) * 0.2 });
  if ((vm.heat || 0) > 0.7) {
    const steam = new THREE.Mesh(
      new THREE.SphereGeometry(0.05 + Math.random() * 0.04, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xc8d0d4, transparent: true, opacity: 0.28 })
    );
    steam.position.copy(puff.position).add(new THREE.Vector3(0, 0.04, 0));
    scene.add(steam);
    dust.push({ mesh: steam, t: 0.55, rise: 0.7, drift: (Math.random() - 0.5) * 0.15 });
  }
}

function muzzleFlash() {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 6, 4),
    new THREE.MeshBasicMaterial({ color: 0xffe8a0 })
  );
  const dir = lookDir();
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.2 : 1.55;
  origin.add(dir.clone().multiplyScalar(0.72));
  m.position.copy(origin);
  scene.add(m);
  dust.push({ mesh: m, t: 0.05 });
}

function spawnTracer(origin, dir, len, hostile = false) {
  const end = origin.clone().add(dir.clone().multiplyScalar(Math.min(len, 50)));
  const g = new THREE.BufferGeometry().setFromPoints([origin.clone(), end]);
  const line = new THREE.Line(
    g,
    new THREE.LineBasicMaterial({ color: hostile ? 0xff7040 : 0xffe080, transparent: true, opacity: 0.95 })
  );
  scene.add(line);
  tracers.push({ mesh: line, t: 0.16, origin: origin.clone(), end, dir: dir.clone() });
}

function settleBotFx() {
  for (const b of bots) {
    if (!b._thud) continue;
    b._thud = false;
    thud();
    beep(48, 0.14, 0.05, Math.max(1, b.pos.distanceTo(player.pos) * 0.2), "sine");
    if (b.pos.distanceTo(player.pos) < 28) {
      beep(90, 0.18, 0.03, Math.max(1, b.pos.distanceTo(player.pos) * 0.16), "sawtooth");
      feed(`NET CUT · ${b.unit || "HOSTILE"}`);
    }
    const puddle = new THREE.Mesh(
      new THREE.CircleGeometry(0.42 + Math.random() * 0.18, 8),
      new THREE.MeshBasicMaterial({ color: 0x4a1010, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
    );
    puddle.rotation.x = -Math.PI / 2;
    puddle.position.set(b.pos.x, 0.025, b.pos.z);
    scene.add(puddle);
    decals.push({ mesh: puddle });
    if (decals.length > 40) {
      const old = decals.shift();
      scene.remove(old.mesh);
    }
    for (let i = 0; i < 5; i++) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(0.12 + Math.random() * 0.1, 6, 5),
        new THREE.MeshBasicMaterial({ color: 0x6a5030, transparent: true, opacity: 0.4 })
      );
      puff.position.set(b.pos.x + (Math.random() - 0.5) * 0.5, 0.12, b.pos.z + (Math.random() - 0.5) * 0.5);
      scene.add(puff);
      dust.push({ mesh: puff, t: 0.55 + Math.random() * 0.3, rise: 0.4, drift: (Math.random() - 0.5) * 0.4 });
    }
  }
}

function spawnSlabDust(dy) {
  const door = MAP.hangarDoor;
  const puff = new THREE.Mesh(
    new THREE.SphereGeometry(0.16 + Math.random() * 0.22, 6, 5),
    new THREE.MeshBasicMaterial({ color: 0x8a7a58, transparent: true, opacity: 0.42 })
  );
  puff.position.set(
    door.x + (Math.random() - 0.5) * 4.2,
    0.08 + Math.random() * 0.2,
    door.z + 0.35 + (Math.random() - 0.5) * 0.5
  );
  scene.add(puff);
  dust.push({
    mesh: puff,
    t: 0.7 + Math.random() * 0.5,
    rise: 0.35 + dy * 8,
    drift: (Math.random() - 0.5) * 0.8,
  });
}

function bloodMist(pos) {
  for (let i = 0; i < 7; i++) {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(0.04 + Math.random() * 0.05, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0x6a1010, transparent: true, opacity: 0.55 })
    );
    m.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.25, Math.random() * 0.15, (Math.random() - 0.5) * 0.25));
    scene.add(m);
    dust.push({
      mesh: m,
      t: 0.35 + Math.random() * 0.25,
      rise: 0.15 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.7,
    });
  }
}

function crateHole(pos, dir) {
  const hole = new THREE.Mesh(
    new THREE.CircleGeometry(0.035 + Math.random() * 0.02, 6),
    new THREE.MeshBasicMaterial({ color: 0x1a120c, side: THREE.DoubleSide })
  );
  hole.position.copy(pos).add(dir.clone().multiplyScalar(-0.02));
  hole.lookAt(pos.clone().add(dir));
  scene.add(hole);
  decals.push({ mesh: hole });
  if (decals.length > 48) {
    const old = decals.shift();
    scene.remove(old.mesh);
  }
}

function punchDir(from) {
  const dx = from.x - player.pos.x;
  const dz = from.z - player.pos.z;
  let world = Math.atan2(dx, -dz);
  let rel = world - player.yaw;
  while (rel > Math.PI) rel -= Math.PI * 2;
  while (rel < -Math.PI) rel += Math.PI * 2;
  dirHits.push({ ang: rel, t: 0.85 });
  player.shake = Math.min(1, (player.shake || 0) + 0.35);
  player.suppress = Math.min(1.4, (player.suppress || 0) + 0.55);
}

function spark(pos) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.04, 6, 4),
    new THREE.MeshBasicMaterial({ color: 0xffe080 })
  );
  m.position.copy(pos);
  scene.add(m);
  dust.push({ mesh: m, t: 0.12 });
  for (let i = 0; i < 3; i++) {
    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.02, 0.04),
      new THREE.MeshBasicMaterial({ color: 0x6a4a28 })
    );
    chip.position.copy(pos);
    scene.add(chip);
    dust.push({
      mesh: chip,
      t: 0.28 + Math.random() * 0.15,
      rise: 0.6 + Math.random() * 0.8,
      drift: (Math.random() - 0.5) * 1.4,
    });
  }
}

function whistle() {
  if (player.dead > 0 || player.scoreOpen) return;
  beep(620, 0.09, 0.04, 1, "sine");
  setTimeout(() => beep(740, 0.12, 0.035, 1, "triangle"), 80);
  feed("WHISTLE · draw fire");
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(player.pos) < 28) b.attract = 4.2 + Math.random();
  }
}

function tossFlash() {
  if (player.dead > 0 || player.scoreOpen) return;
  if (player.flashes <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    return;
  }
  player.flashes--;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 8, 6),
    new THREE.MeshStandardMaterial({ color: 0xe8e0c0, emissive: 0x887744, metalness: 0.4, roughness: 0.4 })
  );
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.3, 0)).add(dir.clone().multiplyScalar(0.55));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(14).add(new THREE.Vector3(0, 4.2, 0)),
    life: 0.72,
    hostile: false,
    flash: true,
  });
  beep(280, 0.06, 0.03, 1, "triangle");
  feed(`FLASH · ${player.flashes} left`);
}

function popFlash(pos) {
  const burst = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 10, 8),
    new THREE.MeshBasicMaterial({ color: 0xf4f0d8, transparent: true, opacity: 0.85 })
  );
  burst.position.copy(pos);
  scene.add(burst);
  dust.push({ mesh: burst, t: 0.22, rise: 0.4 });
  const d = pos.distanceTo(player.pos);
  const look = lookDir();
  const to = pos.clone().sub(player.pos).normalize();
  const facing = look.dot(to) > 0.15;
  if (d < 16 && facing) {
    player.blind = Math.max(player.blind || 0, 1.8 - d * 0.06);
    tinnitus = Math.max(tinnitus, 0.7);
    player.shake = Math.max(player.shake || 0, 0.35);
  }
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const bd = b.pos.distanceTo(pos);
    if (bd < 14) b.stun = Math.max(b.stun || 0, 2.6 - bd * 0.12);
  }
  beep(1800, 0.08, 0.05, Math.max(1, d * 0.2), "sine");
  setTimeout(() => beep(900, 0.12, 0.03, 1, "triangle"), 40);
}

function plantStake() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.stakes || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("STAKE · dry");
    return;
  }
  player.stakes--;
  const mesh = new THREE.Group();
  const rod = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.72, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x3a3a28, metalness: 0.4, roughness: 0.6 })
  );
  rod.position.y = 0.36;
  const cap = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.06, 0.1),
    new THREE.MeshStandardMaterial({ color: 0xc07030, emissive: 0x401808, metalness: 0.2 })
  );
  cap.position.y = 0.74;
  mesh.add(rod, cap);
  const look = lookDir();
  mesh.position.set(player.pos.x + look.x * 1.1, 0, player.pos.z + look.z * 1.1);
  scene.add(mesh);
  const light = new THREE.PointLight(0xff6020, 0.35, 4);
  light.position.y = 0.76;
  mesh.add(light);
  stakes.push({ mesh, light, x: mesh.position.x, z: mesh.position.z, t: 90, ping: 0, hits: new Set() });
  beep(220, 0.06, 0.03, 1, "triangle");
  setTimeout(() => beep(180, 0.08, 0.022, 1, "sine"), 70);
  feed(`STAKE · ${player.stakes} left`);
}

function plantSatchel() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.satch || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("SATCHEL · dry");
    return;
  }
  player.satch--;
  const look = lookDir();
  const mesh = new THREE.Group();
  const pack = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.16, 0.22),
    new THREE.MeshStandardMaterial({ color: 0x3a3220, roughness: 0.7, metalness: 0.15 })
  );
  pack.position.y = 0.1;
  const strap = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.03, 0.06),
    new THREE.MeshLambertMaterial({ color: 0x6a4a20 })
  );
  strap.position.y = 0.2;
  const led = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.04, 0.04),
    new THREE.MeshBasicMaterial({ color: 0xff4020 })
  );
  led.position.set(0.1, 0.18, 0.08);
  mesh.add(pack, strap, led);
  mesh.position.set(player.pos.x + look.x * 1.15, 0, player.pos.z + look.z * 1.15);
  scene.add(mesh);
  satchels.push({ mesh, led, x: mesh.position.x, z: mesh.position.z, fuse: 6.2, tick: 0 });
  beep(160, 0.08, 0.03, 1, "square");
  setTimeout(() => beep(120, 0.1, 0.022, 1, "sine"), 90);
  feed(`SATCHEL · fuse 6s · ${player.satch} left`);
}

function plantRadio() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.radios || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("BEACON · dry");
    return;
  }
  player.radios--;
  const look = lookDir();
  const mesh = new THREE.Group();
  const boxm = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.18, 0.16),
    new THREE.MeshStandardMaterial({ color: 0x2a3a28, roughness: 0.55, metalness: 0.25 })
  );
  boxm.position.y = 0.12;
  const ant = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.55, 0.03),
    new THREE.MeshLambertMaterial({ color: 0x8a8a70 })
  );
  ant.position.set(0.06, 0.42, 0);
  mesh.add(boxm, ant);
  mesh.position.set(player.pos.x + look.x * 1.05, 0, player.pos.z + look.z * 1.05);
  scene.add(mesh);
  const light = new THREE.PointLight(0x50d070, 0.4, 5);
  light.position.y = 0.4;
  mesh.add(light);
  radios.push({ mesh, light, x: mesh.position.x, z: mesh.position.z, t: 28, ping: 0 });
  beep(520, 0.06, 0.025, 1, "sine");
  setTimeout(() => beep(380, 0.08, 0.02, 1, "triangle"), 70);
  feed(`BEACON · ${player.radios} left`);
  radioPings.push({ x: mesh.position.x, z: mesh.position.z, t: 1.6 });
}

function callOverwatch() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.overwatch || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("OVERWATCH · spent");
    return;
  }
  player.overwatch--;
  player.overwatchT = 8.5;
  beep(90, 0.2, 0.03, 1, "sine");
  setTimeout(() => beep(70, 0.28, 0.025, 1, "sine"), 160);
  beep(520, 0.06, 0.03, 1, "sine");
  setTimeout(() => beep(640, 0.08, 0.025, 1, "triangle"), 90);
  feed("NET · overwatch pass");
  const bird = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.18, 0.7),
    new THREE.MeshBasicMaterial({ color: 0x1a1c16, transparent: true, opacity: 0.55 })
  );
  bird.position.set(player.pos.x - 18, 16, player.pos.z - 10);
  scene.add(bird);
  dust.push({ mesh: bird, t: 4.2, rise: 0.15, drift: 7 });
  for (const b of bots) {
    if (b.hp <= 0) continue;
    lastKnown.push({ x: b.pos.x, z: b.pos.z, t: 9, bot: b });
    worldPings.push({ x: b.pos.x, z: b.pos.z, t: 6 });
  }
}

function sipCanteen() {
  if (player.dead > 0 || player.scoreOpen || player.sip > 0 || player.hp >= 100) {
    beep(140, 0.04, 0.018, 1, "square");
    return;
  }
  if ((player.sips || 0) <= 0) {
    beep(160, 0.05, 0.02, 1, "square");
    setTimeout(() => beep(110, 0.08, 0.016, 1, "triangle"), 80);
    feed("CANTEEN · dry");
    return;
  }
  player.sips--;
  player.sip = 2.8;
  player.hp = Math.min(100, player.hp + 14);
  beep(180, 0.08, 0.03, 1, "sine");
  setTimeout(() => beep(140, 0.1, 0.022, 1, "triangle"), 120);
  feed(`SIP · ${player.sips} left`);
  floatLoot("+14");
}

function inSmoke(pos) {
  for (const s of smokeClouds) {
    if (Math.hypot(pos.x - s.x, pos.z - s.z) < s.r) return true;
  }
  return false;
}

function startWrap() {
  if (player.dead > 0 || player.scoreOpen || player.wrap > 0 || player.hp >= 100) {
    beep(140, 0.04, 0.018, 1, "square");
    return;
  }
  if ((player.wraps || 0) <= 0) {
    beep(160, 0.05, 0.02, 1, "square");
    feed("WRAP · empty");
    return;
  }
  player.wraps--;
  player.wrap = 3.4;
  player.sprint = false;
  beep(210, 0.08, 0.028, 1, "sine");
  feed(`WRAP · packing ${player.wraps} left`);
}

function tossIllum() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.illums || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("ILLUM · dry");
    return;
  }
  player.illums--;
  const dir = lookDir();
  const mesh = makeNadeMesh(0xf0e080);
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.35, 0)).add(dir.clone().multiplyScalar(0.5));
  scene.add(mesh);
  const light = new THREE.PointLight(0xffe08a, 0.4, 8);
  mesh.add(light);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(11).add(new THREE.Vector3(0, 7.2, 0)),
    life: 1.15,
    hostile: false,
    illum: true,
    light,
  });
  beep(420, 0.07, 0.03, 1, "triangle");
  feed(`ILLUM · ${player.illums} left`);
}

function popIllum(pos) {
  const light = new THREE.PointLight(0xffd878, 4.2, 38);
  light.position.copy(pos).setY(Math.max(8.5, pos.y + 7));
  scene.add(light);
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xfff2b0 })
  );
  star.position.copy(light.position);
  scene.add(star);
  illums.push({ light, star, t: 12 });
  if (MAP.hemi) MAP.hemi.intensity = Math.max(MAP.hemi.intensity, 0.82);
  beep(180, 0.22, 0.05, 1, "sine");
  feed("ILLUM · ridge lit");
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(pos) < 28) b.stun = Math.max(b.stun || 0, 0.35);
  }
}

function flashMirror() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.mirrors || 0) <= 0) {
    beep(150, 0.05, 0.02, 1, "square");
    feed("MIRROR · cracked");
    return;
  }
  if (inHangar(player.pos)) {
    beep(180, 0.05, 0.018, 1, "square");
    feed("MIRROR · no sky");
    return;
  }
  player.mirrors--;
  const look = lookDir();
  const sunDir = new THREE.Vector3(-20, 28, 10).normalize();
  const aligned = look.dot(sunDir) > 0.25;
  const flash = new THREE.Mesh(
    new THREE.PlaneGeometry(0.35, 0.22),
    new THREE.MeshBasicMaterial({ color: 0xfff6c8, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
  );
  flash.position.copy(player.pos).add(new THREE.Vector3(0, 1.45, 0)).add(look.clone().multiplyScalar(0.55));
  flash.lookAt(player.pos.clone().add(look));
  scene.add(flash);
  dust.push({ mesh: flash, t: 0.28, rise: 0.05 });
  beep(1400, 0.05, 0.03, 1, "sine");
  setTimeout(() => beep(980, 0.06, 0.02, 1, "sine"), 40);
  feed(aligned ? "MIRROR · flash" : "MIRROR · off-sun");
  if (aligned) {
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const to = player.pos.clone().sub(b.pos);
      if (to.length() > 32) continue;
      to.normalize();
      const facing = new THREE.Vector3(Math.sin(b.mesh.rotation.y || 0), 0, Math.cos(b.mesh.rotation.y || 0));
      if (facing.dot(to) > 0.15) {
        b.stun = Math.max(b.stun || 0, 1.6);
        b.suppress = Math.max(b.suppress || 0, 1.4);
      }
    }
    player.blind = Math.max(player.blind || 0, 0.12);
  }
}

function spawnDeathPack(at) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.22, 0.28),
    new THREE.MeshLambertMaterial({ color: 0x3a4a28 })
  );
  mesh.position.set(at.x, 0.14, at.z);
  scene.add(mesh);
  const tag = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.02, 0.08),
    new THREE.MeshStandardMaterial({ color: 0xb8b090, metalness: 0.7, roughness: 0.35 })
  );
  tag.position.set(at.x + 0.18, 0.06, at.z + 0.1);
  tag.rotation.y = 0.4;
  scene.add(tag);
  dust.push({ mesh: tag, t: 40, rise: 0 });
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0x80d090, transparent: true, opacity: 0.32 })
  );
  glow.position.copy(mesh.position).setY(0.28);
  scene.add(glow);
  dropPacks.push({ mesh, glow, t: 45, looted: false });
}

function tossChem() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.chems || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("CHEM · dry");
    return;
  }
  player.chems--;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.035, 0.22, 8),
    new THREE.MeshStandardMaterial({ color: 0x3a8a40, emissive: 0x143018, metalness: 0.15, roughness: 0.55 })
  );
  mesh.rotation.z = 1.2;
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.25, 0)).add(dir.clone().multiplyScalar(0.5));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(9.5).add(new THREE.Vector3(0, 3.6, 0)),
    life: 0.72,
    hostile: false,
    chem: true,
  });
  beep(380, 0.05, 0.022, 1, "triangle");
  feed(`CHEM · ${player.chems} left`);
}

function plantChem(pos) {
  const stick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.2, 8),
    new THREE.MeshStandardMaterial({ color: 0x4cb85a, emissive: 0x1a6a28, metalness: 0.1, roughness: 0.5 })
  );
  stick.position.set(pos.x, 0.12, pos.z);
  stick.rotation.z = 1.15;
  scene.add(stick);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0x50e070, transparent: true, opacity: 0.35 })
  );
  glow.position.set(pos.x, 0.18, pos.z);
  scene.add(glow);
  const light = new THREE.PointLight(0x48d060, 1.15, 7.5);
  light.position.set(pos.x, 0.28, pos.z);
  scene.add(light);
  chems.push({ mesh: stick, glow, light, x: pos.x, z: pos.z, t: 28 });
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(pos) < 16) b.attract = Math.max(b.attract || 0, 2.2);
  }
  beep(520, 0.08, 0.02, 1, "sine");
  feed("CHEM · mark");
}

function tossPebble() {
  if (player.dead > 0 || player.scoreOpen) return;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 6, 5),
    new THREE.MeshLambertMaterial({ color: 0x6a5a40 })
  );
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.2, 0)).add(dir.clone().multiplyScalar(0.45));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(13).add(new THREE.Vector3(0, 3.2, 0)),
    life: 0.55,
    hostile: false,
    pebble: true,
  });
  beep(240, 0.04, 0.016, 1, "triangle");
}

function popPebble(pos) {
  beep(180, 0.05, 0.02, Math.max(1, pos.distanceTo(player.pos) * 0.12), "square");
  setTimeout(() => beep(110, 0.06, 0.014, 1, "sine"), 40);
  const puff = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 6, 5),
    new THREE.MeshBasicMaterial({ color: 0x8a7a58, transparent: true, opacity: 0.35 })
  );
  puff.position.copy(pos).setY(0.08);
  scene.add(puff);
  dust.push({ mesh: puff, t: 0.35, rise: 0.2 });
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(pos) < 12) b.attract = Math.max(b.attract || 0, 1.8);
  }
}

function tossStrobe() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.strobes || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    feed("STROBE · dry");
    return;
  }
  player.strobes--;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.16, 8),
    new THREE.MeshStandardMaterial({ color: 0xd8e0f0, emissive: 0x88a0c8, metalness: 0.4, roughness: 0.35 })
  );
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.22, 0)).add(dir.clone().multiplyScalar(0.5));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(10.5).add(new THREE.Vector3(0, 3.8, 0)),
    life: 0.68,
    hostile: false,
    strobe: true,
  });
  beep(880, 0.05, 0.022, 1, "sine");
  feed(`STROBE · ${player.strobes} left`);
}

function plantStrobe(pos) {
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.045, 0.12, 8),
    new THREE.MeshStandardMaterial({ color: 0xc8d0e0, emissive: 0x4060a0, metalness: 0.45, roughness: 0.3 })
  );
  body.position.set(pos.x, 0.08, pos.z);
  scene.add(body);
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xa8c8ff, transparent: true, opacity: 0.45 })
  );
  glow.position.set(pos.x, 0.22, pos.z);
  scene.add(glow);
  const light = new THREE.PointLight(0xb0d0ff, 1.6, 9);
  light.position.set(pos.x, 0.35, pos.z);
  scene.add(light);
  strobes.push({ mesh: body, glow, light, x: pos.x, z: pos.z, t: 16 });
  worldPings.push({ x: pos.x, z: pos.z, t: 16 });
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(pos) < 22) b.attract = Math.max(b.attract || 0, 3.4);
  }
  beep(720, 0.06, 0.02, 1, "sine");
  setTimeout(() => beep(920, 0.05, 0.018, 1, "sine"), 80);
  feed("STROBE · mark");
}

function tapMag() {
  if (player.dead > 0 || player.scoreOpen || player.reloading > 0) return;
  const a = player.ammo[player.gun];
  if (a.mag <= 0) {
    beep(160, 0.05, 0.02, 1, "square");
    feed("SEAT · empty");
    return;
  }
  player.tapMag = 0.28;
  vm.kick = Math.max(vm.kick, 0.35);
  beep(210, 0.04, 0.022, 1, "triangle");
  setTimeout(() => beep(340, 0.035, 0.016, 1, "sine"), 70);
  feed(`SEAT · ${a.mag}`);
}

function pressCheck() {
  if (player.dead > 0 || player.scoreOpen) return;
  player.checkT = 0.85;
  player.inspect = true;
  const a = player.ammo[player.gun];
  const live = a.mag > 0;
  beep(live ? 480 : 170, 0.05, 0.022, 1, live ? "sine" : "square");
  feed(live ? `CHAMBER · LIVE ${a.mag}` : "CHAMBER · EMPTY");
}

function sitrep() {
  if (player.dead > 0 || player.scoreOpen) return;
  let live = 0;
  let nearest = 99;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    live++;
    nearest = Math.min(nearest, b.pos.distanceTo(player.pos));
  }
  const ex = player.pos.distanceTo(MAP.extract);
  beep(480, 0.05, 0.025, 1, "sine");
  setTimeout(() => beep(360, 0.07, 0.02, 1, "triangle"), 80);
  feed(`SITREP · ${live} live · near ${nearest < 90 ? nearest.toFixed(0) + "m" : "--"} · pad ${ex.toFixed(0)}m`);
  radioPings.push({ x: player.pos.x, z: player.pos.z, t: 1.2 });
}

function tossSmoke() {
  if (player.dead > 0 || player.scoreOpen) return;
  if ((player.smokes || 0) <= 0) {
    beep(140, 0.05, 0.02, 1, "square");
    return;
  }
  player.smokes--;
  const dir = lookDir();
  const mesh = makeNadeMesh(0xc8c4b0);
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.3, 0)).add(dir.clone().multiplyScalar(0.55));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(12).add(new THREE.Vector3(0, 4.4, 0)),
    life: 0.95,
    hostile: false,
    smokePot: true,
  });
  beep(160, 0.07, 0.03, 1, "triangle");
  feed(`SMOKE · ${player.smokes} left`);
}

function popSmokePot(pos) {
  smokeClouds.push({ x: pos.x, z: pos.z, r: 3.4, t: 14 });
  for (let i = 0; i < 22; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.55 + Math.random() * 0.7, 7, 6),
      new THREE.MeshBasicMaterial({ color: 0xb8b4a8, transparent: true, opacity: 0.38 })
    );
    puff.position.copy(pos).add(new THREE.Vector3(
      (Math.random() - 0.5) * 3.2,
      0.3 + Math.random() * 1.4,
      (Math.random() - 0.5) * 3.2
    ));
    scene.add(puff);
    dust.push({
      mesh: puff,
      t: 8 + Math.random() * 5,
      rise: 0.18 + Math.random() * 0.2,
      drift: (Math.random() - 0.5) * 0.45,
    });
  }
  beep(90, 0.18, 0.04, 1, "sine");
  feed("SMOKE · screen");
}

function strikeArty() {
  const ang = Math.random() * Math.PI * 2;
  const rad = 34 + Math.random() * 16;
  const x = Math.cos(ang) * rad;
  const z = Math.sin(ang) * rad;
  const flash = new THREE.Mesh(
    new THREE.SphereGeometry(0.8 + Math.random() * 0.5, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffc070, transparent: true, opacity: 0.7 })
  );
  flash.position.set(x, 0.4, z);
  scene.add(flash);
  dust.push({ mesh: flash, t: 0.22, rise: 1.8, drift: 0.2 });
  for (let i = 0; i < 4; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.4 + Math.random() * 0.4, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0x8a7050, transparent: true, opacity: 0.32 })
    );
    puff.position.set(x + (Math.random() - 0.5) * 2, 0.3, z + (Math.random() - 0.5) * 2);
    scene.add(puff);
    dust.push({ mesh: puff, t: 1.1, rise: 1.4, drift: 0.8 });
  }
  beep(36, 0.45, 0.03, 1, "sine");
  setTimeout(() => beep(28, 0.55, 0.022, 1, "sine"), 200);
  feed("ARTY · far ridge");
}

function sandGust() {
  player.dirt = Math.min(1.2, (player.dirt || 0) + 0.35);
  for (let i = 0; i < 10; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.22 + Math.random() * 0.28, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0x9a7a48, transparent: true, opacity: 0.28 })
    );
    const a = ((WIND_DEG * Math.PI) / 180) + (Math.random() - 0.5) * 0.4;
    puff.position.set(
      player.pos.x + Math.cos(a) * (4 + Math.random() * 8),
      0.3 + Math.random() * 1.2,
      player.pos.z + Math.sin(a) * (4 + Math.random() * 8)
    );
    scene.add(puff);
    dust.push({ mesh: puff, t: 1.2 + Math.random() * 0.6, rise: 0.35, drift: 2.4 });
  }
  beep(48, 0.35, 0.02, 1, "sine");
  feed("GUST · quarry wind");
}

function bloodPool(pos) {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(0.22, 10),
    new THREE.MeshBasicMaterial({ color: 0x4a0c0c, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(pos.x, 0.025, pos.z);
  scene.add(m);
  bloodPools.push({ mesh: m, t: 8, grow: 0 });
  if (bloodPools.length > 12) {
    const old = bloodPools.shift();
    scene.remove(old.mesh);
  }
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

function makeNadeMesh(color) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 10, 8),
    new THREE.MeshLambertMaterial({ color })
  );
}

function tossGrenade(fuse = 1.35, extra = 0) {
  if (player.nades <= 0 || grenades.length > 6) {
    beep(140, 0.05, 0.02, 1, "square");
    return;
  }
  player.nades--;
  const dir = lookDir();
  const mesh = makeNadeMesh(0x3a4a28);
  mesh.position.copy(player.pos).add(new THREE.Vector3(0, 1.3, 0)).add(dir.clone().multiplyScalar(0.6));
  scene.add(mesh);
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(16 + extra * 5).add(new THREE.Vector3(0, 5 + extra * 2, 0)),
    life: Math.max(0.35, fuse),
    hostile: false,
  });
  beep(140, 0.08, 0.04);
}

function botTossNade(bot, target) {
  if (grenades.length > 8) return;
  const origin = bot.pos.clone().setY(1.45);
  const to = target.clone().sub(origin);
  const dist = Math.max(4, to.length());
  const dir = to.normalize();
  const mesh = makeNadeMesh(0x5a3020);
  mesh.position.copy(origin).add(dir.clone().multiplyScalar(0.5));
  scene.add(mesh);
  const speed = 9 + dist * 0.35;
  grenades.push({
    mesh,
    vel: dir.multiplyScalar(speed).add(new THREE.Vector3(0, 4.2 + dist * 0.12, 0)),
    life: 1.45,
    hostile: true,
  });
  sfxAt(bot.pos, 130, 0.09, 0.05, "square");
  feed(`NADE IN · ${bearingOf(bot.pos)}`);
  nadePings.push({ x: target.x, z: target.z, t: 1.6 });
}

function nadeSmoke(pos) {
  for (let i = 0; i < 14; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.22 + Math.random() * 0.28, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0x9a9488, transparent: true, opacity: 0.42 })
    );
    puff.position.copy(pos).add(new THREE.Vector3(
      (Math.random() - 0.5) * 1.6,
      0.2 + Math.random() * 0.6,
      (Math.random() - 0.5) * 1.6
    ));
    scene.add(puff);
    dust.push({
      mesh: puff,
      t: 1.6 + Math.random() * 0.9,
      rise: 0.55 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.55,
    });
  }
}

function cookDrum(crate) {
  if (!crate || crate.dead) return;
  crate.dead = true;
  crate.hp = 0;
  if (crate.mesh) crate.mesh.visible = false;
  if (crate.lid) crate.lid.visible = false;
  const p = crate.pos.clone().setY(0.6);
  feed("DRUM · cook");
  explode(p, 5.4, 72, "DRUM");
}

function igniteDrums(pos, radius = 5.2) {
  if (!MAP.drums) return;
  for (const d of MAP.drums) {
    if (d.dead) continue;
    if (d.pos.distanceTo(pos) < radius) cookDrum(d);
  }
}

function explode(pos, radius = 6.5, dmg = 90, tag = "GRENADE") {
  beep(60, 0.25, 0.1);
  nadeSmoke(pos);
  updateBirds(0, pos);
  updateWildlife(0, pos);
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const d = b.pos.distanceTo(pos);
    if (d < radius) {
      const hit = dmg * (1 - d / radius);
      b.hp -= hit;
      splat(b.pos.clone().setY(1));
      if (b.hp <= 0) {
        player.kills++;
        player.dmgDealt += hit;
        feed(`${tag} down`, "nade");
        showHitmark(true);
        floatDmg(hit, false);
      } else {
        showHitmark(false);
        floatDmg(hit, false);
      }
    }
  }
  const pR = Math.max(4.2, radius * 0.78);
  if (player.pos.distanceTo(pos) < pR) {
    player.hp -= 35 * (1 - player.pos.distanceTo(pos) / pR);
    flashDmg();
    punchDir(pos);
    tinnitus = Math.max(tinnitus, 1.4);
    player.shake = Math.min(1, (player.shake || 0) + 0.7);
    player.dirt = Math.min(1.4, (player.dirt || 0) + 0.85);
    beep(90, 0.35, 0.05, 1, "sine");
    if (player.hp <= 0 && player.dead <= 0) {
      player.dead = 2.4;
      player.deaths++;
      player.killer = null;
      spawnDeathPack(player.pos);
      feed("DROPPED · blast", "kill");
    }
  }
  igniteDrums(pos, radius * 0.85);
}

function spawnExtractFlare() {
  if (extractFlareLit) return;
  extractFlareLit = true;
  const origin = MAP.extract.clone();
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.05, 1.4, 8),
    new THREE.MeshLambertMaterial({ color: 0x3a2a18 })
  );
  pole.position.copy(origin).setY(0.7);
  scene.add(pole);
  const light = new THREE.PointLight(0xff6620, 2.4, 16);
  light.position.copy(origin).setY(1.6);
  scene.add(light);
  flares.push({ pole, light, smoke: [], t: 0 });
  beep(70, 0.35, 0.07);
  feed("FLARE up · extract marked");
}

function updateFlares(dt) {
  for (const f of flares) {
    f.t += dt;
    if (f.chopper) {
      f.pole.position.y = Math.max(3.2, 14 - f.t * 3.2);
      f.pole.position.z += dt * 1.4;
      if (f.rotor) f.rotor.rotation.y += dt * 18;
      continue;
    }
    if (f.fly) {
      const spd = 22;
      f.pole.position.x += dt * spd * (f.side || 1);
      f.pole.position.z += Math.sin(f.t * 0.6) * dt * 2;
      if (f.t > 6 && f.pole.parent) scene.remove(f.pole);
      continue;
    }
    f.light.intensity = 1.6 + Math.sin(f.t * 9) * 0.8;
    if (Math.random() < dt * 14) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(0.18 + Math.random() * 0.12, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xc8c0b0, transparent: true, opacity: 0.45 })
      );
      puff.position.copy(MAP.extract).add(new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        1.4 + Math.random() * 0.3,
        (Math.random() - 0.5) * 0.4
      ));
      scene.add(puff);
      f.smoke.push({ mesh: puff, life: 2.2 + Math.random() });
    }
    for (const s of f.smoke) {
      s.life -= dt;
      s.mesh.position.y += dt * 1.4;
      s.mesh.position.x += dt * 0.35;
      s.mesh.scale.addScalar(dt * 0.6);
      s.mesh.material.opacity = Math.max(0, s.life * 0.22);
      if (s.life <= 0) scene.remove(s.mesh);
    }
    f.smoke = f.smoke.filter((s) => s.life > 0);
  }
}

function spawnExtractSmoke(at) {
  const origin = (at || MAP.extract).clone();
  beep(48, 0.4, 0.07, 1, "sine");
  beep(90, 0.18, 0.04, 1, "triangle");
  for (let i = 0; i < 22; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.28 + Math.random() * 0.35, 7, 6),
      new THREE.MeshBasicMaterial({ color: 0xb8b0a0, transparent: true, opacity: 0.55 })
    );
    puff.position.copy(origin).add(new THREE.Vector3(
      (Math.random() - 0.5) * 1.4,
      0.4 + Math.random() * 0.8,
      (Math.random() - 0.5) * 1.4
    ));
    scene.add(puff);
    dust.push({
      mesh: puff,
      t: 2.4 + Math.random() * 1.2,
      rise: 1.1 + Math.random() * 0.8,
      drift: (Math.random() - 0.5) * 0.7,
    });
  }
  feed("SMOKE pop · bird inbound");
}

function showScoreCard() {
  const mm = String(Math.floor(matchTime / 60)).padStart(2, "0");
  const ss = String(Math.floor(matchTime % 60)).padStart(2, "0");
  document.getElementById("sc-time").textContent = `${mm}:${ss}`;
  document.getElementById("sc-kills").textContent = String(player.kills);
  document.getElementById("sc-deaths").textContent = String(player.deaths);
  document.getElementById("sc-dmg").textContent = String(Math.round(player.dmgDealt));
  document.getElementById("sc-acc").textContent = `${player.hits} / ${player.shots}`;
  document.getElementById("sc-ex").textContent = String(player.extracts);
  document.getElementById("scorecard").classList.add("show");
  player.scoreOpen = true;
  banner.textContent = "EXTRACT SECURE";
}

function hideScoreCard() {
  document.getElementById("scorecard").classList.remove("show");
  player.scoreOpen = false;
  banner.textContent = "";
}

function reviveBots() {
  const spots = [
    [-16, 18], [10, -14], [20, 16], [-18, -18], [28, -8], [-8, 24], [6, 8],
  ];
  bots.forEach((b, i) => {
    b.hp = 100;
    b.state = "cover";
    b.cooldown = 0.4 + Math.random();
    b.suppress = 0;
    b.reloadT = 0;
    b.mag = 12 + (i % 6);
    const [x, z] = spots[i % spots.length];
    b.pos.set(x + (i % 2), 0, z);
    b.mesh.position.y = 0;
    b.mesh.rotation.x = 0;
    b.mesh.rotation.z = 0;
    b.settled = false;
    b._thud = false;
    b._dropGun = false;
    b._spin = (Math.random() - 0.5) * 0.9;
    b._saw = false;
    b.looted = false;
    b.mesh.visible = true;
    if (b.gun) b.gun.visible = true;
    if (b.glow) b.glow.material.opacity = 0;
    b.stun = 0;
    b.attract = 0;
    if (b.cone) b.cone.visible = false;
  });
}

function resetMatch() {
  hideScoreCard();
  player.extract = 0;
  player.extracting = false;
  player.kills = 0;
  player.hp = 100;
  player.deaths = 0;
  player.dmgDealt = 0;
  player.shots = 0;
  player.hits = 0;
  player.pos.set(0, 1.7, 8);
  player.yaw = 0;
  player.pitch = -0.1;
  player.dead = 0;
  player.stam = 100;
  player.nades = 3;
  player.smokes = 2;
  player.sips = 3;
  player.mirrors = 3;
  player.strobes = 3;
  player.checkT = 0;
  player.tapMag = 0;
  approachPad = false;
  clockWarn = false;
  lastImpact = null;
  player.mapBig = false;
  document.getElementById("minimap")?.classList.remove("big");
  player.streak = 0;
  player.smear = 0;
  player.suppress = 0;
  player.spotted = 0;
  player.healT = 0;
  player.jam = 0;
  player.sip = 0;
  player.nvgBatt = 100;
  player.flashes = 2;
  player.wraps = 2;
  player.wrap = 0;
  player.illums = 2;
  player.stakes = 3;
  player.overwatch = 1;
  player.overwatchT = 0;
  player.wheels = false;
  player.finalCall = false;
  player.liftCall = false;
  player.clock4 = false;
  player.clock3 = false;
  player.clock2 = false;
  player.clock1 = false;
  player.clock030 = false;
  player.steadyCall = false;
  player.glassFocus = false;
  player.lampStrobe = 0;
  player.gritMag = false;
  player.lastMagSaid = false;
  player.radioEcho = 0;
  player.chems = 4;
  player.brassBurn = 0;
  player.satch = 2;
  player.radios = 2;
  player.beacons = 2;
  player.knives = 3;
  player.markT = 0;
  player.visorFog = 0;
  player.lunge = 0;
  player.pin = null;
  player.clockChime = false;
  player.dive = 0;
  player.aimBeatT = 0;
  for (const k of knives) scene.remove(k.mesh);
  knives.length = 0;
  for (const s of satchels) scene.remove(s.mesh);
  satchels.length = 0;
  for (const r of radios) scene.remove(r.mesh);
  radios.length = 0;
  for (const b of beacons) {
    scene.remove(b.mesh);
    scene.remove(b.light);
  }
  beacons.length = 0;
  mortars.length = 0;
  for (const c of chems) {
    scene.remove(c.mesh);
    scene.remove(c.glow);
    scene.remove(c.light);
  }
  chems.length = 0;
  player.blind = 0;
  player.inbound = false;
  player.laser = false;
  player._lastNet = false;
  for (const s of stakes) scene.remove(s.mesh);
  stakes.length = 0;
  extractFlareLit = false;
  matchTime = 0;
  liveWas = 6;
  flyT = 24 + Math.random() * 10;
  player._cardT = 0;
  reviveBots();
  feed("NEXT RIDGE · hostiles reset");
  player.navLock = false;
  player.resWarn = false;
  player.gaspT = 0;
  rollCallsign();
}

function completeExtract() {
  player.extracts++;
  const atDoor = player.pos.distanceTo(MAP.hangarDoor) < player.pos.distanceTo(MAP.extract);
  spawnExtractSmoke(atDoor ? MAP.hangarDoor : MAP.extract);
  spawnChopper();
  showScoreCard();
  player.extract = 0;
  player.extracting = false;
  feed("PAYLOAD out · card");
}

function spawnFlyover() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.35, 4.4),
    new THREE.MeshBasicMaterial({ color: 0x1a1c18 })
  );
  const wing = new THREE.Mesh(
    new THREE.BoxGeometry(5.4, 0.08, 0.7),
    new THREE.MeshBasicMaterial({ color: 0x22241e })
  );
  wing.position.y = 0.05;
  g.add(body, wing);
  const side = Math.random() < 0.5 ? 1 : -1;
  g.position.set(-48 * side, 22 + Math.random() * 6, (Math.random() - 0.5) * 30);
  g.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
  scene.add(g);
  flares.push({ pole: g, light: { intensity: 0 }, smoke: [], t: 0, fly: true, side });
  beep(48, 0.4, 0.03, 1, "sine");
  setTimeout(() => beep(36, 0.5, 0.022, 1, "sine"), 180);
  feed("OVERFLIGHT · ridge west");
}

function spawnChopper() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.7, 5.2),
    new THREE.MeshLambertMaterial({ color: 0x2a3228 })
  );
  const boom = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 3.2),
    new THREE.MeshLambertMaterial({ color: 0x1a2218 })
  );
  boom.position.set(0, 0.1, 3.6);
  const rotor = new THREE.Mesh(
    new THREE.BoxGeometry(7.2, 0.05, 0.18),
    new THREE.MeshLambertMaterial({ color: 0x3a3a32 })
  );
  rotor.position.y = 0.55;
  g.add(body, boom, rotor);
  g.position.set(MAP.extract.x, 14, MAP.extract.z - 6);
  scene.add(g);
  flares.push({ pole: g, light: { intensity: 0 }, smoke: [], t: 0, chopper: true, rotor });
}

function dropPing(urgent = false) {
  if (player.dead > 0 || player.scoreOpen) return;
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.15 : 1.62;
  const dir = lookDir();
  let tagged = null;
  let best = 0.985;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const to = b.pos.clone().setY(1.4).sub(origin);
    const d = to.length();
    to.normalize();
    const dot = dir.dot(to);
    if (dot > best && d < 42) {
      best = dot;
      tagged = b;
    }
  }
  if (tagged) {
    lastKnown.push({ x: tagged.pos.x, z: tagged.pos.z, t: urgent ? 10 : 6, bot: tagged });
    radioPings.push({ x: tagged.pos.x, z: tagged.pos.z, t: urgent ? 3.4 : 2.4 });
    worldPings.push({ mesh: null, ring: null, x: tagged.pos.x, z: tagged.pos.z, t: urgent ? 8 : 5 });
    beep(760, 0.05, 0.04, 1, "sine");
    setTimeout(() => beep(520, 0.07, 0.03, 1, "triangle"), 55);
    if (urgent) {
      setTimeout(() => beep(880, 0.05, 0.03, 1, "sine"), 120);
      showPlate("URGENT");
      feed(`TAG+ · ${tagged.unit} · ${bearingOf(tagged.pos)}`);
    } else feed(`TAG · ${tagged.unit} · ${bearingOf(tagged.pos)}`);
    return;
  }
  const tGround = origin.y > 0.05 ? origin.y / Math.max(0.08, -dir.y) : 12;
  const dist = dir.y < -0.05 ? Math.min(48, tGround) : 18;
  const at = origin.clone().add(dir.clone().multiplyScalar(dist));
  at.y = 0.04;
  const g = new THREE.Group();
  const pole = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.42, 5),
    new THREE.MeshBasicMaterial({ color: 0x70e090 })
  );
  pole.position.y = 0.55;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.18, 0.28, 12),
    new THREE.MeshBasicMaterial({ color: 0x70e090, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
  );
  ring.rotation.x = -Math.PI / 2;
  g.add(pole, ring);
  g.position.copy(at);
  scene.add(g);
  worldPings.push({ mesh: g, ring, x: at.x, z: at.z, t: urgent ? 12 : 8 });
  radioPings.push({ x: at.x, z: at.z, t: urgent ? 3.2 : 2.2 });
  beep(720, 0.05, 0.035, 1, "sine");
  setTimeout(() => beep(540, 0.07, 0.03, 1, "triangle"), 60);
  if (urgent) {
    setTimeout(() => beep(880, 0.05, 0.028, 1, "sine"), 130);
    showPlate("MARK+");
    feed(`MARK+ · ${bearingOf(at)}`);
  } else feed(`MARK · ${bearingOf(at)}`);
}

function tossBeacon() {
  if (player.dead > 0 || player.scoreOpen || player.beacons <= 0) {
    if (player.beacons <= 0) {
      beep(160, 0.05, 0.02, 1, "square");
      feed("BEACON · dry");
    }
    return;
  }
  player.beacons--;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.28, 0.16),
    new THREE.MeshStandardMaterial({ color: 0x2a4a38, metalness: 0.4, roughness: 0.5 })
  );
  const led = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.04, 0.06),
    new THREE.MeshBasicMaterial({ color: 0x40ff90 })
  );
  led.position.y = 0.18;
  mesh.add(led);
  const light = new THREE.PointLight(0x40ff80, 1.2, 10);
  mesh.position.copy(player.pos).add(dir.clone().multiplyScalar(0.6));
  mesh.position.y = 1.2;
  scene.add(mesh);
  scene.add(light);
  beacons.push({
    mesh,
    light,
    led,
    vx: dir.x * 9,
    vz: dir.z * 9,
    vy: 3.2 + dir.y * 4,
    x: mesh.position.x,
    y: mesh.position.y,
    z: mesh.position.z,
    grounded: false,
    t: 18,
    ping: 0.2,
  });
  beep(620, 0.06, 0.03, 1, "sine");
  feed(`BEACON · ${player.beacons} left`);
}

function stickyMark() {
  if (player.dead > 0 || player.scoreOpen) return;
  const origin = player.pos.clone();
  origin.y = player.prone ? 0.42 : player.crouch ? 1.15 : 1.62;
  const dir = lookDir();
  let tagged = null;
  let best = 0.96;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const to = b.pos.clone().setY(1.4).sub(origin);
    const d = to.length();
    to.normalize();
    const dot = dir.dot(to);
    if (dot > best && d < 52) {
      best = dot;
      tagged = b;
    }
  }
  if (!tagged) {
    beep(180, 0.05, 0.018, 1, "square");
    feed("MARK · no lock");
    return;
  }
  player.markT = 12;
  tagged.marked = 12;
  lastKnown.push({ x: tagged.pos.x, z: tagged.pos.z, t: 12, bot: tagged });
  radioPings.push({ x: tagged.pos.x, z: tagged.pos.z, t: 2.6 });
  if (tagged.glow && tagged.glow.material) tagged.glow.material.opacity = 0.55;
  beep(880, 0.05, 0.035, 1, "sine");
  setTimeout(() => beep(640, 0.07, 0.03, 1, "triangle"), 60);
  feed(`LOCK · ${tagged.unit} · ${bearingOf(tagged.pos)} · ${tagged.pos.distanceTo(player.pos).toFixed(0)}m`);
}

const RIDGE_SIGNS = ["CUT-19", "QUARRY WEST", "HANGAR WING", "PAD AMBER", "RIM-4", "NIGHT SLAB", "RADIO NORTH"];

function rollCallsign() {
  player.callsign = RIDGE_SIGNS[(Math.random() * RIDGE_SIGNS.length) | 0];
  banner.textContent = `RIDGE 47 · ${player.callsign}`;
  setTimeout(() => {
    if (banner.textContent.indexOf(player.callsign) >= 0) banner.textContent = "";
  }, 2400);
  feed(`NET · ${player.callsign}`);
}

function toggleNavLock() {
  player.navLock = !player.navLock;
  beep(player.navLock ? 720 : 220, 0.05, 0.022, 1, "sine");
  const pad = player.pos.distanceTo(MAP.extract);
  const door = player.pos.distanceTo(MAP.hangarDoor);
  const tag = pad <= door ? "PAD" : "DOOR";
  const d = Math.min(pad, door);
  feed(player.navLock ? `NAV LOCK · ${tag} ${d.toFixed(0)}m` : "NAV LOCK off");
  showPlate(player.navLock ? "NAV" : "NAV OFF");
}

function rangeCard() {
  if (player.dead > 0 || player.scoreOpen) return;
  const pad = player.pos.distanceTo(MAP.extract);
  const door = player.pos.distanceTo(MAP.hangarDoor);
  let near = null;
  let nearD = 1e9;
  let live = 0;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    live++;
    const d = b.pos.distanceTo(player.pos);
    if (d < nearD) {
      nearD = d;
      near = b;
    }
  }
  const tag = pad <= door ? "PAD" : "DOOR";
  const d = Math.min(pad, door);
  beep(540, 0.05, 0.03, 1, "sine");
  setTimeout(() => beep(720, 0.06, 0.028, 1, "triangle"), 70);
  const host = near ? `${near.unit} ${nearD.toFixed(0)}m ${bearingOf(near.pos)}` : "CLEAR";
  feed(`CARD · ${tag} ${d.toFixed(0)}m · ${live} live · ${host}`);
  showPlate(`${tag} ${d.toFixed(0)}`);
  radioPings.push({ x: player.pos.x, z: player.pos.z, t: 1.1 });
}

function pinLastKnown() {
  if (player.dead > 0 || player.scoreOpen) return;
  const origin = player.pos.clone();
  origin.y = player.prone ? 0.42 : player.crouch ? 1.15 : 1.62;
  const dir = lookDir();
  let tagged = null;
  let best = 0.92;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    const to = b.pos.clone().setY(1.4).sub(origin);
    const d = to.length();
    to.normalize();
    const dot = dir.dot(to);
    if (dot > best && d < 60) {
      best = dot;
      tagged = b;
    }
  }
  if (tagged) {
    player.pin = { x: tagged.pos.x, z: tagged.pos.z, t: 28, unit: tagged.unit };
    lastKnown.push({ x: tagged.pos.x, z: tagged.pos.z, t: 18, bot: tagged });
    radioPings.push({ x: tagged.pos.x, z: tagged.pos.z, t: 2.2 });
    beep(760, 0.05, 0.03, 1, "sine");
    setTimeout(() => beep(520, 0.06, 0.024, 1, "triangle"), 55);
    feed(`PIN · ${tagged.unit} · ${bearingOf(tagged.pos)} · ${tagged.pos.distanceTo(player.pos).toFixed(0)}m`);
    showPlate("PIN");
    return;
  }
  if (lastKnown.length) {
    const lk = lastKnown[lastKnown.length - 1];
    player.pin = { x: lk.x, z: lk.z, t: 22, unit: "LAST" };
    radioPings.push({ x: lk.x, z: lk.z, t: 1.6 });
    beep(640, 0.05, 0.026, 1, "sine");
    feed(`PIN · last known · ${bearingOf({ x: lk.x, z: lk.z, pos: player.pos })}`);
    showPlate("PIN");
    return;
  }
  beep(170, 0.05, 0.018, 1, "square");
  feed("PIN · empty");
}

function toggleNetMute() {
  player.muteNet = !player.muteNet;
  beep(player.muteNet ? 180 : 520, 0.05, 0.02, 1, "square");
  feed(player.muteNet ? "NET · muted" : "NET · open");
  showPlate(player.muteNet ? "MUTE" : "NET");
}

function wipeBlade() {
  if (player.dead > 0 || player.scoreOpen) return;
  vm.stain = Math.max(0, (vm.stain || 0) - 0.85);
  if (vm.blood && vm.blood.material) vm.blood.material.opacity = Math.min(0.55, vm.stain * 0.45);
  player.smear = Math.max(0, (player.smear || 0) - 0.5);
  beep(300, 0.04, 0.018, 1, "triangle");
  setTimeout(() => beep(210, 0.05, 0.016, 1, "sine"), 45);
  feed("BLADE · wipe");
  showPlate("WIPE");
}

function intelCard() {
  if (player.dead > 0 || player.scoreOpen) return;
  const live = bots.filter((b) => b.hp > 0).length;
  const pad = player.pos.distanceTo(MAP.extract);
  const door = player.pos.distanceTo(MAP.hangarDoor);
  const a = player.ammo[player.gun];
  const wind = Math.round(WIND_DEG);
  let last = "—";
  if (lastKnown.length) {
    const lk = lastKnown[lastKnown.length - 1];
    last = `${bearingOf({ x: lk.x, z: lk.z, pos: player.pos })} ${Math.hypot(lk.x - player.pos.x, lk.z - player.pos.z).toFixed(0)}m`;
  }
  beep(500, 0.05, 0.028, 1, "sine");
  setTimeout(() => beep(640, 0.06, 0.024, 1, "triangle"), 70);
  feed(`INTEL · ${live} live · pad ${pad.toFixed(0)} · door ${door.toFixed(0)} · wind ${wind} · last ${last} · ${a.mag}/${a.res}`);
  showPlate("INTEL");
  radioPings.push({ x: player.pos.x, z: player.pos.z, t: 1.0 });
}

function weatherCard() {
  if (player.dead > 0 || player.scoreOpen) return;
  const wind = Math.round(WIND_DEG);
  const rain = rainT > 1 ? `RAIN ${rainT.toFixed(0)}s` : "DRY";
  const dusk = matchTime >= 240 ? "DUSK" : matchTime >= 180 ? "LATE" : matchTime >= 120 ? "EVE" : "DAY";
  const loc = inLookout(player.pos)
    ? "LOOK"
    : inCistern(player.pos)
      ? "TANK"
      : inWarehouse(player.pos)
        ? "WARE"
        : inShed(player.pos)
          ? "SHED"
          : inRadio(player.pos)
            ? "RAD"
            : inShop(player.pos)
              ? "SHOP"
              : inHut(player.pos)
                ? "HUT"
                : inMag(player.pos)
                  ? "MAG"
                  : inCrush(player.pos)
                    ? "CRUSH"
                    : inDock(player.pos)
                      ? "DOCK"
                      : inAssay(player.pos)
                        ? "ASSAY"
                        : inWeigh(player.pos)
                          ? "WEIGH"
                          : inGen(player.pos)
                            ? "GEN"
                            : inComp(player.pos)
                              ? "COMP"
                              : inLube(player.pos)
                                ? "LUBE"
                                : inWash(player.pos)
                                  ? "WASH"
                                  : inTire(player.pos)
                                    ? "TIRE"
                                    : inPaint(player.pos)
                                      ? "PAINT"
                                      : inParts(player.pos)
                                        ? "PARTS"
                                        : inWeld(player.pos)
                                          ? "WELD"
                                          : inBatt(player.pos)
                                            ? "BATT"
                                            : inHoist(player.pos)
                                              ? "HOIST"
                                              : inMill(player.pos)
                                                ? "MILL"
                                                : inKiln(player.pos)
                                                  ? "KILN"
                                                  : inSort(player.pos)
                                                    ? "SORT"
                                                    : inLab(player.pos)
                                                      ? "LAB"
                                                      : inPow(player.pos)
                                                        ? "POW"
                                                        : inFuse(player.pos)
                                                          ? "FUSE"
                                                          : inTip(player.pos)
                                                            ? "TIP"
                                                            : inRaise(player.pos)
                                                              ? "RAISE"
                                                              : inVent(player.pos)
                                                                ? "VENT"
                                                            : inWinze(player.pos)
                                                              ? "WINZE"
                                                              : inCross(player.pos)
                                                                ? "XCUT"
                                                              : inAdit(player.pos)
                                                              ? "ADIT"
                                                            : inSkip(player.pos)
                                                            ? "SKIP"
                                                          : inHangar(player.pos)
                                                            ? "HANG"
                                                            : "QUARRY";
  beep(300, 0.05, 0.024, 1, "sine");
  setTimeout(() => beep(380, 0.06, 0.02, 1, "triangle"), 70);
  feed(`WX · ${loc} · wind ${wind} · ${rain} · ${dusk}`);
  showPlate("WX");
  const el = document.getElementById("wx");
  if (el) {
    el.textContent = `${loc}  W${wind}  ${rain}  ${dusk}`;
    el.style.opacity = "0.75";
    player.wxT = 4.5;
  }
}

function kitCard() {
  if (player.dead > 0 || player.scoreOpen) return;
  const a = player.ammo[player.gun];
  const w = LOADOUT[player.gun];
  beep(480, 0.05, 0.026, 1, "sine");
  setTimeout(() => beep(560, 0.05, 0.02, 1, "triangle"), 60);
  feed(
    `KIT · ${w.name} ${a.mag}/${a.res} · G${player.nades} J${player.smokes} H${player.sips} 4×${player.wraps} X${player.knives} K${player.stakes} 5×${player.chems} 7×${player.satch}`
  );
  showPlate("KIT");
  const el = document.getElementById("wx");
  if (el) {
    el.textContent = `KIT  ${a.mag}/${a.res}  G${player.nades}  J${player.smokes}  H${player.sips}`;
    el.style.opacity = "0.8";
    player.wxT = 5.2;
    player.kitT = 5.2;
  }
}

function binosFocus() {
  if (player.dead > 0 || player.scoreOpen || !player.binos) return;
  player.glassFocus = !player.glassFocus;
  player.ads = true;
  beep(player.glassFocus ? 540 : 320, 0.05, 0.022, 1, "sine");
  feed(player.glassFocus ? "GLASS · focus" : "GLASS · wide");
  showPlate(player.glassFocus ? "FOCUS" : "WIDE");
}

function handSignal() {
  if (player.dead > 0 || player.scoreOpen) return;
  beep(180, 0.05, 0.014, 1, "triangle");
  setTimeout(() => beep(160, 0.04, 0.01, 1, "sine"), 70);
  feed("SIGNAL · fist");
  showPlate("FIST");
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(player.pos) < 14) b.attract = Math.max(b.attract || 0, 1.6);
  }
}

function helmTap() {
  if (player.dead > 0 || player.scoreOpen) return;
  beep(520, 0.04, 0.02, 1, "triangle");
  setTimeout(() => beep(380, 0.05, 0.016, 1, "sine"), 50);
  player.scratch = Math.min(0.7, (player.scratch || 0) + 0.08);
  player.shake = Math.max(player.shake || 0, 0.06);
  feed("HELM · tap");
  showPlate("TAP");
}

function nvgPulse() {
  if (player.dead > 0 || player.scoreOpen) return;
  if (player.nvgBatt < 8) {
    beep(140, 0.05, 0.018, 1, "square");
    feed("NVG · weak cell");
    return;
  }
  player.nvgBatt = Math.max(4, player.nvgBatt - 8);
  player.blind = Math.max(player.blind || 0, 0.18);
  if (MAP.hemi) MAP.hemi.intensity = 1.25;
  setTimeout(() => {
    if (MAP.hemi) MAP.hemi.intensity = player.nvg ? 0.95 : 0.55;
  }, 220);
  beep(880, 0.05, 0.03, 1, "sine");
  setTimeout(() => beep(640, 0.06, 0.022, 1, "triangle"), 80);
  feed("NVG · pulse");
  showPlate("PULSE");
}

function toggleCompactHud() {
  player.compactHud = !player.compactHud;
  document.getElementById("hud")?.classList.toggle("compact", player.compactHud);
  beep(player.compactHud ? 220 : 480, 0.04, 0.018, 1, "sine");
  feed(player.compactHud ? "HUD · compact" : "HUD · full");
  showPlate(player.compactHud ? "HUD-" : "HUD");
}

function peekScore() {
  if (player.dead > 0 || player.scoreOpen) return;
  const live = bots.filter((b) => b.hp > 0).length;
  beep(360, 0.04, 0.02, 1, "triangle");
  feed(`PEEK · ${player.kills} downs · ${live} live · ${Math.floor(matchTime / 60)}:${String(Math.floor(matchTime % 60)).padStart(2, "0")}`);
  showPlate(`${player.kills}X`);
}

function sosRadio() {
  if (player.dead > 0 || player.scoreOpen) return;
  radioPings.push({ x: player.pos.x, z: player.pos.z, t: 3.2 });
  nadePings.push({ x: player.pos.x, z: player.pos.z, t: 2.4 });
  beep(880, 0.05, 0.035, 1, "sine");
  setTimeout(() => beep(880, 0.05, 0.03, 1, "sine"), 90);
  setTimeout(() => beep(220, 0.12, 0.03, 1, "triangle"), 180);
  feed(`SOS · ${bearingOf(player.pos)} · flare net`);
  showPlate("SOS");
  player.radioEcho = 0.9;
  for (const b of bots) {
    if (b.hp <= 0) continue;
    if (b.pos.distanceTo(player.pos) < 28) b.alert = Math.max(b.alert || 0, 1.6);
  }
}

function wipeVisor() {
  player.visorFog = Math.max(0, player.visorFog - 0.55);
  player.scratch = Math.max(0, (player.scratch || 0) - 0.35);
  player.dirt = Math.max(0, (player.dirt || 0) - 0.25);
  beep(380, 0.04, 0.018, 1, "triangle");
  setTimeout(() => beep(240, 0.05, 0.016, 1, "sine"), 50);
  feed("VISOR · wipe");
  showPlate("WIPE");
}

function throwKnife() {
  if (player.dead > 0 || player.scoreOpen || player.meleeCd > 0) return;
  if (player.knives <= 0) {
    beep(160, 0.05, 0.02, 1, "square");
    feed("KNIFE · dry");
    return;
  }
  player.knives--;
  player.meleeCd = 0.55;
  vm.melee = 0.85;
  const dir = lookDir();
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.08, 0.28),
    new THREE.MeshStandardMaterial({ color: 0x8a9098, metalness: 0.7, roughness: 0.28 })
  );
  const tang = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.03, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x2a2418, roughness: 0.7 })
  );
  tang.position.z = 0.16;
  mesh.add(tang);
  mesh.position.copy(player.pos).add(dir.clone().multiplyScalar(0.55));
  mesh.position.y = player.prone ? 0.45 : player.crouch ? 1.05 : 1.35;
  mesh.lookAt(mesh.position.clone().add(dir));
  scene.add(mesh);
  knives.push({
    mesh,
    vx: dir.x * 22,
    vy: dir.y * 18 + 0.6,
    vz: dir.z * 22,
    life: 1.8,
    stuck: false,
  });
  beep(420, 0.04, 0.028, 1, "triangle");
  feed(`KNIFE · ${player.knives} left`);
}

function meleeBash() {
  if (player.dead > 0 || player.scoreOpen || player.meleeCd > 0) return;
  const lunge = player.sprint || player.slide > 0;
  player.meleeCd = lunge ? 0.72 : 0.52;
  player.lunge = lunge ? 0.22 : 0;
  vm.melee = 1;
  beep(lunge ? 70 : 90, 0.06, 0.04, 1, "triangle");
  if (lunge) {
    const d = lookDir();
    player.vel.x += d.x * 7.5;
    player.vel.z += d.z * 7.5;
    feed("LUNGE");
  }
  const origin = player.pos.clone();
  origin.y = player.crouch ? 1.1 : 1.45;
  const dir = lookDir();
  const hit = hitscan(origin, dir, bots, lunge ? 3.8 : 2.6);
  if (hit && !rayVsCrates(origin, dir, hit.dist)) {
    const dmg = (hit.head ? 70 : 42) + (lunge ? 22 : 0);
    hit.bot.hp -= dmg;
    player.hits++;
    player.dmgDealt += dmg;
    splat(hit.bot.pos.clone().setY(1.2));
    showHitmark(hit.bot.hp <= 0);
    floatDmg(dmg, hit.head);
    player.shake = Math.min(1, player.shake + 0.2);
    if (hit.bot.hp <= 0) {
      player.kills++;
      player.streak = (player.streak || 0) + 1;
      player.smear = 2.2;
      stainViewmodel(vm, 1.0);
      feed(`BASH · ${player.kills}`, "kill");
      beep(70, 0.16, 0.07, 1, "sine");
      bloodPool(hit.bot.pos);
    } else {
      feed("BASH · hit");
    }
  }
}

function flashDmg() {
  const el = document.getElementById("dmg");
  el.style.opacity = "1";
  setTimeout(() => (el.style.opacity = "0"), 180);
  player.pitch += (Math.random() - 0.35) * 0.045;
  player.yaw += (Math.random() - 0.5) * 0.03;
  player.flinch = 1;
  player.drip = Math.min(1.4, (player.drip || 0) + 0.45);
  player.scratch = Math.min(1.2, (player.scratch || 0) + 0.55);
}

function bearingOf(pos) {
  const dx = pos.x - player.pos.x;
  const dz = pos.z - player.pos.z;
  let deg = (Math.atan2(dx, -dz) * 180) / Math.PI;
  if (deg < 0) deg += 360;
  return String(Math.round(deg)).padStart(3, "0");
}

function onCallout(bot) {
  const dist = bot.pos.distanceTo(player.pos);
  calloutBeep(dist);
  if (bot._breach) {
    bot._breach = false;
    feed(`BREACH · ${bearingOf(bot.pos)}`);
    beep(190, 0.08, 0.045, dist, "square");
  } else if (bot._overwatch) {
    bot._overwatch = false;
    feed(`OVERWATCH · ${bearingOf(bot.pos)}`);
    beep(240, 0.07, 0.04, dist, "triangle");
  } else {
    feed(`FLANK CALL · ${bearingOf(bot.pos)}`);
  }
}

function fireAtPlayer(bot, dir) {
  if (!bot._saw) {
    bot._saw = true;
    player.spotted = 1.6;
    beep(880, 0.07, 0.04, 1, "square");
    setTimeout(() => beep(620, 0.08, 0.03, 1, "triangle"), 80);
    feed(`SPOTTED · ${bearingOf(bot.pos)}`);
  }
  lastKnown.push({ x: bot.pos.x, z: bot.pos.z, t: 2.4, bot, fire: true });
  const cd = bot.pos.distanceTo(player.pos);
  if (cd < 14 && (player.contactT || 0) <= 0) {
    player.contactT = 1.8;
    const spot = document.getElementById("spot");
    if (spot) {
      spot.textContent = "CONTACT";
      spot.classList.add("show");
    }
    document.getElementById("hud").classList.add("contact");
    setTimeout(() => document.getElementById("hud").classList.remove("contact"), 900);
    beep(980, 0.05, 0.03, 1, "square");
    feed(`CONTACT · ${bearingOf(bot.pos)} · ${cd.toFixed(0)}m`);
  }
  const origin = bot.pos.clone().setY(1.5);
  spawnTracer(origin, dir, 30, true);
  const toP = player.pos.clone().setY(player.crouch ? 1.1 : 1.5).sub(origin);
  const aim = dir.dot(toP.clone().normalize());
  const dist = player.pos.distanceTo(bot.pos);
  beep(220, 0.04, 0.03, dist);
  if (dist > 10) gunEcho(bot.pos, 200);
  const miss = toP.length();
  const closest = Math.sqrt(Math.max(0, miss * miss * (1 - aim * aim)));
  if (aim > 0.82 && aim < 0.97 && closest < 1.15 && dist < 32) {
    beep(2100, 0.028, 0.022, 1, "square");
    setTimeout(() => beep(1600, 0.02, 0.012, 1, "sine"), 30);
    player.shake = Math.min(1, (player.shake || 0) + 0.06);
    feed("CRACK");
  }
  const flash = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 5, 4),
    new THREE.MeshBasicMaterial({ color: 0xff7040 })
  );
  flash.position.copy(origin).add(dir.clone().multiplyScalar(0.55));
  scene.add(flash);
  dust.push({ mesh: flash, t: 0.05 });
  if (Math.random() < 0.55) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.08 + Math.random() * 0.06, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0x8a7050, transparent: true, opacity: 0.28 })
    );
    puff.position.copy(flash.position);
    scene.add(puff);
    dust.push({ mesh: puff, t: 0.28, rise: 0.4, drift: (Math.random() - 0.5) * 0.3 });
  }
  const smog = inSmoke(player.pos) || inSmoke(bot.pos);
  if (smog && Math.random() < 0.55) {
    beep(1600, 0.025, 0.012, 1, "sine");
    return;
  }
  if (aim > 0.97 && dist < 28) {
    player.hp -= 9 + Math.random() * 6;
    flashDmg();
    punchDir(bot.pos);
    if (player.hp <= 0 && player.dead <= 0) {
      player.dead = 2.4;
      player.deaths++;
      player.killer = bot;
      spawnDeathPack(player.pos);
      feed("DROPPED · death cam", "kill");
      beep(55, 0.28, 0.08, 1, "sine");
    }
  } else if (aim > 0.9 && dist < 18) {
    player.shake = Math.min(1, (player.shake || 0) + 0.12);
    beep(1900, 0.03, 0.018, 1, "sine");
    punchDir(bot.pos);
  }
}

let mouseDown = false;
let ads = false;
document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    mouseDown = true;
    if (player.locked) fire();
  }
  if (e.button === 2) {
    ads = true;
    player.ads = true;
  }
  if (e.button === 1) {
    e.preventDefault();
    dropPing();
  }
});
document.addEventListener("mouseup", (e) => {
  if (e.button === 0) mouseDown = false;
  if (e.button === 2) {
    ads = false;
    if (!player.binos) player.ads = false;
  }
});
document.addEventListener("contextmenu", (e) => e.preventDefault());

let last = performance.now();
let flyT = 28 + Math.random() * 16;
let liveWas = 6;
let plateGun = 0;
function tick(now) {
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;
  thunderT -= dt;
  if (thunderT <= 0) {
    thunderT = 14 + Math.random() * 18;
    strikeLightning();
  }
  if (player.scoreOpen) {
    if (keys.has("Space") || keys.has("KeyF") || keys.has("Enter")) {
      keys.delete("Space");
      keys.delete("KeyF");
      keys.delete("Enter");
      resetMatch();
    }
    updateFlares(dt);
    updateHangarFx(dt, 0);
    updateGrit(dt);
    updateBirds(dt, null);
    updateWildlife(dt, null);
    for (const d of dust) {
      d.t -= dt;
      if (d.rise) {
        d.mesh.position.y += dt * d.rise;
        d.mesh.position.x += dt * (d.drift || 0);
        d.mesh.scale.addScalar(dt * 0.35);
        if (d.mesh.material) d.mesh.material.opacity = Math.max(0, Math.min(0.55, d.t * 0.28));
      }
      if (d.t <= 0) scene.remove(d.mesh);
    }
    for (let i = dust.length - 1; i >= 0; i--) if (dust[i].t <= 0) dust.splice(i, 1);
    player._cardT = (player._cardT || 0) + dt;
    const t = player._cardT;
    camera.position.copy(player.pos);
    camera.position.y = player.pos.y + 0.18 + Math.sin(t * 0.35) * 0.12;
    camera.position.x += Math.sin(t * 0.22) * 0.18;
    camera.position.z += Math.cos(t * 0.18) * 0.14;
    camera.rotation.set(
      player.pitch + Math.sin(t * 0.28) * 0.04,
      player.yaw + t * 0.035,
      Math.sin(t * 0.2) * 0.03
    );
    camera.fov += (72 - camera.fov) * Math.min(1, dt * 2);
    camera.updateProjectionMatrix();
    drawMini();
    drawCompass();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
    return;
  }

  matchTime += dt;
  const mm = String(Math.floor(matchTime / 60)).padStart(2, "0");
  const ss = String(Math.floor(matchTime % 60)).padStart(2, "0");
  const clock = document.getElementById("clock");
  const liveNow = bots.filter((b) => b.hp > 0).length;
  if (clock) clock.textContent = `${mm}:${ss} · ${player.kills} K · ${liveNow} LIVE`;
  if (liveWas > 2 && liveNow <= 2 && liveNow > 0) {
    banner.textContent = "CLEAR PATH · EXTRACT OPEN";
    setTimeout(() => {
      if (banner.textContent.indexOf("CLEAR") === 0) banner.textContent = "";
    }, 2200);
    beep(520, 0.08, 0.04, 1, "sine");
    setTimeout(() => beep(640, 0.1, 0.035, 1, "triangle"), 90);
    feed("EXTRACT OPEN · pad or hangar door");
  }
  liveWas = liveNow;
  const dusk = Math.min(1, matchTime / 240);
  if (MAP.sun) MAP.sun.intensity = 0.9 - dusk * 0.45;
  if (MAP.hemi) MAP.hemi.intensity = 0.55 - dusk * 0.22;
  if (scene.fog) scene.fog.density = 0.012 + dusk * 0.006;
  if (MAP.stars && MAP.stars.material) MAP.stars.material.opacity = 0.55 + dusk * 0.4;
  if (MAP.moon) MAP.moon.material.color.setHex(dusk > 0.4 ? 0xfff0c8 : 0xe8d8b0);
  flyT -= dt;
  if (flyT <= 0) {
    flyT = 38 + Math.random() * 22;
    spawnFlyover();
  }

  if (player.dead > 0) {
    player.dead -= dt;
    const killer = player.killer;
    if (killer && killer.hp !== undefined) {
      const look = killer.pos.clone().add(new THREE.Vector3(0, 1.35, 0)).sub(camera.position);
      const yawT = Math.atan2(-look.x, -look.z);
      const pitchT = Math.atan2(look.y, Math.hypot(look.x, look.z));
      player.yaw += (yawT - player.yaw) * Math.min(1, dt * 5);
      player.pitch += (THREE.MathUtils.clamp(-pitchT, -1.2, 0.4) - player.pitch) * Math.min(1, dt * 5);
    }
    camera.position.copy(player.pos);
    camera.position.y = player.pos.y + 0.35;
    camera.rotation.set(player.pitch, player.yaw, 0.08);
    camera.fov += (68 - camera.fov) * Math.min(1, dt * 4);
    camera.updateProjectionMatrix();
    document.getElementById("hud").classList.add("dead");
    document.getElementById("hud").style.opacity = String(0.45 + player.dead * 0.08);
    banner.textContent = player.dead > 0.15 ? `DOWN · ${player.dead.toFixed(1)}` : "";
    const kt = document.getElementById("killtag");
    if (kt) {
      if (killer && killer.unit) {
        kt.style.opacity = "0.9";
        kt.textContent = `${killer.unit}  ${killer.pos.distanceTo(player.pos).toFixed(0)}m`;
      } else {
        kt.style.opacity = "0";
      }
    }
    if (player.dead <= 0) {
      player.hp = 100;
      player.stam = 70;
      player.streak = 0;
      player.smear = 0;
      player.suppress = 0;
      player.nades = Math.max(player.nades, 1);
      player.pos.set(0, 1.7, 8);
      player.yaw = 0;
      player.pitch = -0.1;
      player.killer = null;
      player.extract = 0;
      player.extracting = false;
      document.getElementById("hud").style.opacity = "1";
      document.getElementById("hud").classList.remove("dead");
      banner.textContent = "";
      const kt2 = document.getElementById("killtag");
      if (kt2) kt2.style.opacity = "0";
      feed("BACK ON THE RIDGE");
    }
    updateBots(bots, player.pos, dt, () => {}, lookDir(), false, null, MAP.extract, null);
    settleBotFx();
    updateFlares(dt);
    updateHangarFx(dt, 0);
    updateGrit(dt);
    updateBirds(dt, null);
    updateWildlife(dt, null);
    drawMini();
    drawCompass();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
    return;
  }

  player.sprint = (keys.has("ShiftLeft") || keys.has("ShiftRight")) && player.stam > 4 && !player.prone;
  if (player.sprint && !player.wasSprint) {
    beep(130, 0.04, 0.016, 1, "triangle");
  }
  player.wasSprint = player.sprint;
  player.crouch = keys.has("ControlLeft") || keys.has("ControlRight") || player.prone;
  if (player.sprint && player.prone) player.prone = false;
  if (player.slide <= 0 && player.sprint && player.crouch && player.grounded) {
    player.slide = 0.55;
    thud();
    for (let i = 0; i < 4; i++) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(0.1 + Math.random() * 0.08, 5, 4),
        new THREE.MeshBasicMaterial({ color: 0x7a6038, transparent: true, opacity: 0.35 })
      );
      puff.position.set(player.pos.x + (Math.random() - 0.5) * 0.4, 0.08, player.pos.z + (Math.random() - 0.5) * 0.4);
      scene.add(puff);
      dust.push({ mesh: puff, t: 0.4 + Math.random() * 0.2, rise: 0.25, drift: (Math.random() - 0.5) * 0.8 });
    }
  }
  if (player.slide > 0) {
    player.slide -= dt;
    if (player.scrapeT <= 0) {
      const crate = nearestCrate(player.pos);
      if (crate && crate.pos.distanceTo(player.pos) < 1.35) {
        player.scrapeT = 0.28;
        beep(70 + Math.random() * 40, 0.05, 0.02, 1, "sawtooth");
      }
    }
  }
  player.scrapeT = Math.max(0, (player.scrapeT || 0) - dt);
  const fwd = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw));
  const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
  const wish = new THREE.Vector3();
  if (keys.has("KeyW")) wish.add(fwd);
  if (keys.has("KeyS")) wish.sub(fwd);
  if (keys.has("KeyD")) wish.add(right);
  if (keys.has("KeyA")) wish.sub(right);
  const moving = wish.lengthSq() > 0;
  if ((player.sprint && moving) || player.slide > 0) player.stam = Math.max(0, player.stam - dt * (player.slide > 0 ? 28 : 18));
  else player.stam = Math.min(100, player.stam + dt * (player.crouch ? 28 : 16));
  if (player.stam <= 0) player.sprint = false;
  if (player.stam < 26 && player.sprint && player.gaspT <= 0) {
    player.gaspT = 2.4;
    beep(90, 0.08, 0.03, 1, "sine");
    feed("BREATH");
  }
  player.gaspT = Math.max(0, player.gaspT - dt);
  const limp = player.hp < 35 ? 0.72 : 1;
  const mud = (inJig(player.pos) && MAP.jig && MAP.jig.on) ? 0.6 : inHutch(player.pos) ? 0.5 : (inCool(player.pos) && MAP.cool && MAP.cool.on) ? 0.64 : inQuench(player.pos) ? 0.48 : inFall(player.pos) ? 0.55 : (inBag(player.pos) && MAP.bag && MAP.bag.on) ? 0.66 : inFines(player.pos) ? 0.5 : (inDry(player.pos) && MAP.dry && MAP.dry.on) ? 0.6 : inExhaust(player.pos) ? 0.48 : (inLoco(player.pos) && MAP.loco && MAP.loco.on) ? 0.62 : inSteam(player.pos) ? 0.46 : (inAgit(player.pos) && MAP.agit && MAP.agit.on) ? 0.58 : inSlurry(player.pos) ? 0.44 : (inScrub(player.pos) && MAP.scrub && MAP.scrub.on) ? 0.6 : inLiquor(player.pos) ? 0.46 : (inEw(player.pos) && MAP.ew && MAP.ew.on) ? 0.58 : inAcid(player.pos) ? 0.44 : (inCone(player.pos) && MAP.cone && MAP.cone.on) ? 0.62 : inDischarge(player.pos) ? 0.46 : (inClas(player.pos) && MAP.clas && MAP.clas.on) ? 0.6 : inSands(player.pos) ? 0.45 : (inMags(player.pos) && MAP.mags && MAP.mags.on) ? 0.58 : inConc(player.pos) ? 0.44 : (inRod(player.pos) && MAP.rod && MAP.rod.on) ? 0.6 : inRodDisch(player.pos) ? 0.46 : (inSx(player.pos) && MAP.sx && MAP.sx.on) ? 0.58 : inWeir(player.pos) ? 0.44 : (inCross(player.pos) && MAP.sump && MAP.sump.on) ? 0.48 : inTail(player.pos) ? 0.52 : (inLaunder(player.pos) && MAP.thick && MAP.thick.on) ? 0.5 : (inBall(player.pos) && MAP.ball && MAP.ball.on) ? 0.62 : (inSpiral(player.pos) && MAP.cyc && MAP.cyc.on) ? 0.58 : (inOverflow(player.pos) && MAP.cyc && MAP.cyc.on) ? 0.46 : (inPress(player.pos) && MAP.press && MAP.press.on) ? 0.7 : (inMilk(player.pos)) ? 0.42 : (inSlake(player.pos) && MAP.slake && MAP.slake.on) ? 0.62 : (inSinter(player.pos) && MAP.sinter && MAP.sinter.on) ? 0.58 : inReject(player.pos) ? 0.5 : inSample(player.pos) ? 0.84 : (inPellet(player.pos) && MAP.pellet && MAP.pellet.on) ? 0.7 : inClar(player.pos) ? 0.78 : inUnder(player.pos) ? 0.5 : (inSilo(player.pos) && MAP.silo && MAP.silo.on) ? 0.72 : onScrew(player.pos) ? 0.64 : (inFloat(player.pos) && MAP.float && MAP.float.on) ? 0.55 : inFroth(player.pos) ? 0.48 : inCyc(player.pos) || inPress(player.pos) || inFloat(player.pos) || inStack(player.pos) ? 0.84 : (inVent(player.pos) && MAP.fan && MAP.fan.on) ? 0.7 : inAdit(player.pos) || inWinze(player.pos) || inRaise(player.pos) || inThick(player.pos) ? 0.82 : 1;
  const speed = (player.slide > 0 ? 11.2 : (player.prone ? 1.7 : player.crouch ? 3.2 : player.sprint ? 8.4 : 5.6)) * limp * mud;
  if (moving) wish.normalize().multiplyScalar(speed);
  player.pos.x += wish.x * dt;
  player.pos.z += wish.z * dt;
  collideXZ(player.pos, 0.4);
  if (MAP.tramCrate && player.grounded) {
    const c = MAP.tramCrate;
    const dx = player.pos.x - c.pos.x;
    const dz = player.pos.z - c.pos.z;
    const onCart = Math.abs(dx) < c.sx * 0.45 && Math.abs(dz) < c.sz * 0.45 && player.pos.y > 0.55;
    if (onCart) {
      player.pos.x += MAP.tramDx || 0;
      player.pos.z += MAP.tramDz || 0;
      if (!player._tramOn) {
        player._tramOn = true;
        feed("TRAM");
      }
    } else player._tramOn = false;
  }
  if (MAP.binSkipPlat && player.grounded) {
    const c = MAP.binSkipPlat;
    const dx = player.pos.x - c.x;
    const dz = player.pos.z - c.z;
    const onSkip = Math.abs(dx) < c.sx * 0.46 && Math.abs(dz) < c.sz * 0.46 && player.pos.y > c.top - 0.55;
    if (onSkip) {
      player.pos.x += MAP.binDx || 0;
      player.pos.y += MAP.binDy || 0;
      player.pos.z += MAP.binDz || 0;
      if (!player._binOn) {
        player._binOn = true;
        feed("INCLINE");
      }
    } else player._binOn = false;
  }
  if (MAP.binBell) {
    MAP.binBell = false;
    beep(200, 0.1, 0.035, 1, "triangle");
    feed(MAP.binDir < 0 ? "SKIP DUMP" : "SKIP LOAD");
  }
  if (MAP.binDumpT > 0.2 && MAP.binPocket && Math.abs(player.pos.x - MAP.binPocket.x) < MAP.binPocket.hx && Math.abs(player.pos.z - MAP.binPocket.z) < MAP.binPocket.hz) {
    player.pos.z += 1.4 * dt;
    if (Math.random() < dt * 4) beep(90, 0.04, 0.02, 1, "sawtooth");
  }
  if (MAP.thick && player.grounded && inThick(player.pos) && (MAP.thick.dAngle || 0) !== 0) {
    const dx = player.pos.x - 27.2;
    const dz = player.pos.z - -44.2;
    const r = Math.hypot(dx, dz);
    if (r > 0.35 && r < 2.05 && player.pos.y < 0.85) {
      const a = MAP.thick.dAngle;
      const c = Math.cos(a), s = Math.sin(a);
      player.pos.x = 27.2 + dx * c - dz * s;
      player.pos.z = -44.2 + dx * s + dz * c;
      collideXZ(player.pos, 0.35);
      if (!player._rakeOn) {
        player._rakeOn = true;
        feed(MAP.thick.on ? "RAKE · UNDERFLOW" : "RAKE");
      }
    } else player._rakeOn = false;
  } else player._rakeOn = false;
  if (inLaunder(player.pos) && MAP.thick && MAP.thick.on && player.grounded) {
    player.pos.z += MAP.launder.vz * dt;
    collideXZ(player.pos, 0.4);
    if (Math.random() < dt * 3) beep(150 + Math.random() * 30, 0.04, 0.014, 1, "sine");
  }
  if (inBall(player.pos) && MAP.ball && MAP.ball.on && player.grounded) {
    const dx = player.pos.x - -6.5;
    const dz = player.pos.z - 44.15;
    player.pos.x += -dz * 0.7 * dt;
    player.pos.z += dx * 0.7 * dt;
    collideXZ(player.pos, 0.35);
    if (!player._ballOn) {
      player._ballOn = true;
      feed("MILL TUMBLE");
    }
    if (Math.random() < dt * 2.2) beep(70 + Math.random() * 20, 0.05, 0.02, 1, "sawtooth");
  } else player._ballOn = false;
  if (inSpiral(player.pos) && MAP.cyc && MAP.cyc.on && player.grounded) {
    player.pos.z += (MAP.spiral ? MAP.spiral.vz : -2.2) * dt;
    collideXZ(player.pos, 0.4);
    if (!player._spiralOn) {
      player._spiralOn = true;
      feed("SPIRAL");
    }
    if (Math.random() < dt * 2.4) beep(120 + Math.random() * 30, 0.04, 0.016, 1, "square");
  } else player._spiralOn = false;
  if (inOverflow(player.pos) && MAP.cyc && MAP.cyc.on && player.grounded) {
    player.pos.z += (MAP.overflow ? MAP.overflow.vz : -1.4) * dt;
    collideXZ(player.pos, 0.4);
    if (Math.random() < dt * 3) beep(90 + Math.random() * 20, 0.04, 0.014, 1, "sine");
  }
  if (inReturn(player.pos) && MAP.cyc && MAP.cyc.on && player.grounded) {
    player.pos.x += (MAP.cycReturn ? MAP.cycReturn.vx : 2.1) * dt;
    collideXZ(player.pos, 0.4);
    if (!player._returnOn) {
      player._returnOn = true;
      feed("RETURN FLUME");
    }
    if (Math.random() < dt * 2.5) beep(140 + Math.random() * 20, 0.04, 0.014, 1, "sine");
  } else player._returnOn = false;
  if (inPress(player.pos) && MAP.press && MAP.press.on && MAP.press.gap < 0.55 && player.grounded) {
    player.pos.x -= 2.1 * dt;
    collideXZ(player.pos, 0.35);
    if (!player._pressOn) {
      player._pressOn = true;
      feed("PRESS SQUEEZE");
    }
    if (Math.random() < dt * 2) beep(70 + Math.random() * 20, 0.05, 0.02, 1, "sawtooth");
  } else player._pressOn = false;
  if (inFloatLaunder(player.pos) && player.grounded) {
    player.pos.z += (MAP.floatLaunder ? MAP.floatLaunder.vz : -2) * dt;
    if (!player._floatWash) {
      player._floatWash = true;
      feed("FROTH LAUNDER");
    }
  } else player._floatWash = false;
  if (onStackBoom(player.pos) && MAP.stack && MAP.stack.on && player.grounded) {
    player.pos.x += MAP.stackBoom.dx || 0;
    player.pos.z += MAP.stackBoom.dz || 0;
    if (!player._boomOn) {
      player._boomOn = true;
      feed("STACKER BOOM");
    }
  } else player._boomOn = false;
  if (onHaul(player.pos) && player.grounded) {
    player.pos.x += MAP.haulDx || 0;
    player.pos.z += MAP.haulDz || 0;
    if (!player._haulOn) {
      player._haulOn = true;
      feed("HAUL BED");
    }
  } else player._haulOn = false;
  if (onStrand(player.pos) && MAP.strand && MAP.strand.on && player.grounded) {
    player.pos.x += MAP.strand.dx || 0;
    if (!player._strandOn) {
      player._strandOn = true;
      feed("SINTER STRAND");
    }
  } else player._strandOn = false;



  if (onJigDeck(player.pos) && player.grounded) {
    player.pos.z += MAP.jigDeck.dz || 0;
    if (!player._jigOn) { player._jigOn = true; feed("JIG DECK"); }
    if (Math.random() < dt * 2) beep(84 + Math.random() * 16, 0.03, 0.012, 1, "square");
  } else player._jigOn = false;
  if (inHutch(player.pos) && player.grounded) {
    player.pos.x += (MAP.hutch ? MAP.hutch.vx : -2.2) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._hutchOn) { player._hutchOn = true; feed("JIG HUTCH"); }
  } else player._hutchOn = false;
  if (inJig(player.pos) && MAP.jig && MAP.jig.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.4 * dt);
  }
  if (onCoolCar(player.pos) && player.grounded) {
    player.pos.x += MAP.coolCar.dx || 0;
    if (!player._coolOn) { player._coolOn = true; feed("COOLER CAR"); }
  } else player._coolOn = false;
  if (inQuench(player.pos) && player.grounded) {
    player.pos.z += (MAP.quench ? MAP.quench.vz : -2.1) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._quenchOn) { player._quenchOn = true; feed("QUENCH MIST"); }
  } else player._quenchOn = false;
  if (inCool(player.pos) && MAP.cool && MAP.cool.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 3.4 * dt);
  }

  if (onBagRack(player.pos) && player.grounded) {
    player.pos.x += MAP.bagRack.dx || 0;
    if (!player._bagOn) { player._bagOn = true; feed("BAG RACK"); }
  } else player._bagOn = false;
  if (inFines(player.pos) && player.grounded) {
    player.pos.z += (MAP.fines ? MAP.fines.vz : 2.2) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._finesOn) { player._finesOn = true; feed("FINES FLUME"); }
  } else player._finesOn = false;
  if (inBag(player.pos) && MAP.bag && MAP.bag.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 1.8 * dt);
  }
  if (onDryShell(player.pos) && player.grounded) {
    player.pos.x += MAP.dryShell.dx || 0;
    if (!player._dryOn) { player._dryOn = true; feed("DRYER SHELL"); }
  } else player._dryOn = false;
  if (inExhaust(player.pos) && player.grounded) {
    player.pos.z += (MAP.exhaust ? MAP.exhaust.vz : -2.3) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._exhOn) { player._exhOn = true; feed("DRYER EXHAUST"); }
  } else player._exhOn = false;
  if (inDry(player.pos) && MAP.dry && MAP.dry.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 3.1 * dt);
  }

  if (onLoco(player.pos) && player.grounded && MAP.locoEngine) {
    player.pos.z += MAP.locoEngine.dz || 0;
    if (!player._locoOn) { player._locoOn = true; feed("LOCO BED"); }
  } else player._locoOn = false;
  if (inSteam(player.pos) && player.grounded) {
    player.pos.z += (MAP.steam ? MAP.steam.vz : -2.4) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._steamOn) { player._steamOn = true; feed("LOCO STEAM"); }
  } else player._steamOn = false;
  if (inLoco(player.pos) && MAP.loco && MAP.loco.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.4 * dt);
  }
  if (onRake(player.pos) && player.grounded && MAP.agitRake) {
    const w = (MAP.agit && MAP.agit.on ? 0.9 : 0.04) * dt;
    const dx = player.pos.x - MAP.agitRake.x;
    const dz = player.pos.z - MAP.agitRake.z;
    player.pos.x = MAP.agitRake.x + dx * Math.cos(w) - dz * Math.sin(w);
    player.pos.z = MAP.agitRake.z + dx * Math.sin(w) + dz * Math.cos(w);
    if (!player._rakeOn) { player._rakeOn = true; feed("AGIT RAKE"); }
  } else player._rakeOn = false;
  if (inSlurry(player.pos) && player.grounded) {
    player.pos.x += (MAP.slurry ? MAP.slurry.vx : 2.35) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._slurryOn) { player._slurryOn = true; feed("SLURRY LAUNDER"); }
  } else player._slurryOn = false;
  if (inAgit(player.pos) && MAP.agit && MAP.agit.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 1.6 * dt);
  }
  if (onScrubTray(player.pos) && player.grounded && MAP.scrubTray) {
    player.pos.x += MAP.scrubTray.dx || 0;
    if (!player._scrubOn) { player._scrubOn = true; feed("SCRUB TRAY"); }
  } else player._scrubOn = false;
  if (inLiquor(player.pos) && player.grounded) {
    player.pos.x += (MAP.liquor ? MAP.liquor.vx : -2.3) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._liqOn) { player._liqOn = true; feed("SCRUB LIQUOR"); }
  } else player._liqOn = false;
  if (inScrub(player.pos) && MAP.scrub && MAP.scrub.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.2 * dt);
  }

  if (onCathode(player.pos) && player.grounded && MAP.cathode) {
    player.pos.x += MAP.cathode.dx || 0;
    if (!player._ewOn) { player._ewOn = true; feed("CATHODE BAR"); }
  } else player._ewOn = false;
  if (inAcid(player.pos) && player.grounded) {
    player.pos.z += (MAP.acid ? MAP.acid.vz : -2.25) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._acidOn) { player._acidOn = true; feed("ACID LAUNDER"); }
  } else player._acidOn = false;
  if (inEw(player.pos) && MAP.ew && MAP.ew.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.0 * dt);
  }
  if (onMantle(player.pos) && player.grounded && MAP.mantle) {
    const w = (MAP.mantle._omega || 0.05) * dt;
    const dx = player.pos.x - MAP.mantle.x;
    const dz = player.pos.z - MAP.mantle.z;
    player.pos.x = MAP.mantle.x + dx * Math.cos(w) - dz * Math.sin(w);
    player.pos.z = MAP.mantle.z + dx * Math.sin(w) + dz * Math.cos(w);
    if (!player._coneOn) { player._coneOn = true; feed("CONE MANTLE"); }
  } else player._coneOn = false;
  if (inDischarge(player.pos) && player.grounded) {
    player.pos.x += (MAP.discharge ? MAP.discharge.vx : 2.4) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._disOn) { player._disOn = true; feed("CONE DISCHARGE"); }
  } else player._disOn = false;
  if (inCone(player.pos) && MAP.cone && MAP.cone.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.4 * dt);
  }
  if (onClasRake(player.pos) && player.grounded && MAP.clasRake) {
    player.pos.z += MAP.clasRake.dz || 0;
    if (!player._clasOn) { player._clasOn = true; feed("CLASSIFIER RAKE"); }
  } else player._clasOn = false;
  if (inSands(player.pos) && player.grounded) {
    player.pos.x += (MAP.sands ? MAP.sands.vx : -2.3) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._sandsOn) { player._sandsOn = true; feed("SANDS FLUME"); }
  } else player._sandsOn = false;
  if (inClas(player.pos) && MAP.clas && MAP.clas.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.1 * dt);
  }
  if (onMagDrum(player.pos) && player.grounded && MAP.magDrum) {
    const w = (MAP.magDrum._omega || 0.04) * dt;
    const dx = player.pos.x - MAP.magDrum.x;
    const dz = player.pos.z - MAP.magDrum.z;
    player.pos.x = MAP.magDrum.x + dx * Math.cos(w) - dz * Math.sin(w);
    player.pos.z = MAP.magDrum.z + dx * Math.sin(w) + dz * Math.cos(w);
    if (!player._magsOn) { player._magsOn = true; feed("MAG DRUM"); }
  } else player._magsOn = false;
  if (inConc(player.pos) && player.grounded) {
    player.pos.z += (MAP.conc ? MAP.conc.vz : -2.35) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._concOn) { player._concOn = true; feed("CONCENTRATE"); }
  } else player._concOn = false;
  if (inMags(player.pos) && MAP.mags && MAP.mags.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 1.8 * dt);
  }

  if (onRodCharge(player.pos) && MAP.rodCharge && player.grounded) {
    const w = (MAP.rodCharge._omega || 0.05) * dt;
    const dx = player.pos.x - MAP.rodCharge.x;
    const dz = player.pos.z - MAP.rodCharge.z;
    player.pos.x = MAP.rodCharge.x + dx * Math.cos(w) - dz * Math.sin(w);
    player.pos.z = MAP.rodCharge.z + dx * Math.sin(w) + dz * Math.cos(w);
    if (!player._rodOn) { player._rodOn = true; feed("ROD CHARGE"); }
  } else player._rodOn = false;
  if (inRodDisch(player.pos) && player.grounded) {
    player.pos.z += (MAP.rodDisch ? MAP.rodDisch.vz : -2.2) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._rodDischOn) { player._rodDischOn = true; feed("ROD DISCHARGE"); }
  } else player._rodDischOn = false;
  if (inRod(player.pos) && MAP.rod && MAP.rod.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 2.2 * dt);
  }
  if (onSxMixer(player.pos) && player.grounded) {
    player.pos.x += MAP.sxMixer ? MAP.sxMixer.dx || 0 : 0;
    collideXZ(player.pos, 0.35);
    if (!player._sxOn) { player._sxOn = true; feed("SX MIXER"); }
  } else player._sxOn = false;
  if (inWeir(player.pos) && player.grounded) {
    player.pos.x += (MAP.weir ? MAP.weir.vx : 2.25) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._weirOn) { player._weirOn = true; feed("SX WEIR"); }
  } else player._weirOn = false;
  if (inSx(player.pos) && MAP.sx && MAP.sx.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 1.7 * dt);
  }
  if (inFall(player.pos) && player.grounded) {
    player.pos.z += (MAP.fall ? MAP.fall.vz : -2.6) * dt;
    player.hp = Math.max(6, player.hp - 8 * dt);
    collideXZ(player.pos, 0.35);
    if (!player._fallOn) { player._fallOn = true; feed("ROCKFALL"); }
  } else player._fallOn = false;

  if (onScrew(player.pos) && player.grounded) {
    player.pos.x += (MAP.screw ? MAP.screw.vx : 2.15) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._screwOn) {
      player._screwOn = true;
      feed("SILO SCREW");
    }
    if (Math.random() < dt * 2) beep(96 + Math.random() * 18, 0.035, 0.012, 1, "square");
  } else player._screwOn = false;
  if (onDisc(player.pos) && MAP.disc && player.grounded) {
    const ang = (MAP.disc._omega || 0.85) * dt;
    const dx = player.pos.x - MAP.disc.x;
    const dz = player.pos.z - MAP.disc.z;
    const c = Math.cos(ang);
    const sn = Math.sin(ang);
    player.pos.x = MAP.disc.x + dx * c - dz * sn;
    player.pos.z = MAP.disc.z + dx * sn + dz * c;
    if (!player._discOn) {
      player._discOn = true;
      feed("PELLET DISC");
    }
    if (Math.random() < dt * 2) beep(70 + Math.random() * 20, 0.04, 0.014, 1, "sawtooth");
  } else player._discOn = false;
  if (inChute(player.pos) && player.grounded) {
    player.pos.z += (MAP.chute ? MAP.chute.vz : -2.4) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._chuteOn) {
      player._chuteOn = true;
      feed("PELLET CHUTE");
    }
  } else player._chuteOn = false;
  if (inPellet(player.pos) && MAP.pellet && MAP.pellet.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 3.2 * dt);
    if (!player._pelHeat) {
      player._pelHeat = true;
      feed("DISC HEAT");
    }
  } else player._pelHeat = false;
  if (onBridge(player.pos) && MAP.clar && MAP.clar.on && player.grounded) {
    player.pos.x += MAP.clarBridge.dx || 0;
    if (!player._bridgeOn) {
      player._bridgeOn = true;
      feed("CLARIFIER BRIDGE");
    }
  } else player._bridgeOn = false;
  if (inUnder(player.pos) && player.grounded) {
    player.pos.x += (MAP.under ? MAP.under.vx : 2.2) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._underOn) {
      player._underOn = true;
      feed("UNDERFLOW");
    }
    if (Math.random() < dt * 2.4) beep(120 + Math.random() * 24, 0.04, 0.012, 1, "sine");
  } else player._underOn = false;
  if (onSampleBoom(player.pos) && MAP.sample && MAP.sample.on && player.grounded) {
    player.pos.x += MAP.sampleBoom.dx || 0;
    player.pos.z += MAP.sampleBoom.dz || 0;
    if (!player._boomOn) {
      player._boomOn = true;
      feed("CUTTER BOOM");
    }
  } else player._boomOn = false;

  if (inMilk(player.pos) && player.grounded) {
    player.pos.z += (MAP.milk ? MAP.milk.vz : -2.2) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._milkOn) {
      player._milkOn = true;
      feed("MILK LAUNDER");
    }
    player.hp = Math.max(8, player.hp - 7 * dt);
    if (Math.random() < dt * 2) beep(220 + Math.random() * 30, 0.04, 0.012, 1, "sine");
  } else player._milkOn = false;
  if (inReject(player.pos) && player.grounded) {
    player.pos.x += (MAP.reject ? MAP.reject.vx : 2.3) * dt;
    collideXZ(player.pos, 0.35);
    if (!player._rejOn) {
      player._rejOn = true;
      feed("REJECT FLUME");
    }
  } else player._rejOn = false;
  if (inSinter(player.pos) && MAP.sinter && MAP.sinter.on && player.grounded) {
    player.hp = Math.max(8, player.hp - 5 * dt);
    if (!player._heatOn) {
      player._heatOn = true;
      feed("GRATE HEAT");
    }
  } else player._heatOn = false;
  if (onBucket(player.pos) && MAP.buckets && player.grounded) {
    for (const bk of MAP.buckets) {
      if (Math.abs(player.pos.x - bk.x) < 0.85 && Math.abs(player.pos.z - bk.z) < 0.9) {
        player.pos.x += bk.dx || 0;
        player.pos.z += bk.dz || 0;
      }
    }
    if (!player._bucketOn) {
      player._bucketOn = true;
      feed("ROPE BUCKET");
    }
  } else player._bucketOn = false;
  if (inSluice(player.pos) && MAP.sluice && player.grounded) {
    player.pos.x += MAP.sluice.vx * dt;
    player.pos.z += MAP.sluice.vz * dt;
    collideXZ(player.pos, 0.4);
    if (Math.random() < dt * 3) beep(180 + Math.random() * 40, 0.05, 0.012, 1, "sine");
  }
  if (onBelt(player.pos) && MAP.belt) {
    player.pos.x += MAP.belt.vx * dt;
    player.pos.z += MAP.belt.vz * dt;
    collideXZ(player.pos, 0.4);
    if (!player._beltOn) {
      player._beltOn = true;
      feed("BELT");
    }
  } else player._beltOn = false;
  if (MAP.cage && player.grounded) {
    const dx = player.pos.x - MAP.cage.x;
    const dz = player.pos.z - MAP.cage.z;
    const onCage = Math.abs(dx) < MAP.cage.sx * 0.42 && Math.abs(dz) < MAP.cage.sz * 0.42 && player.pos.y > MAP.cage.top - 0.4;
    if (onCage) {
      player.pos.y += MAP.cageDy || 0;
      if (!player._cageOn) {
        player._cageOn = true;
        feed("CAGE");
      }
    } else player._cageOn = false;
  }
  if (MAP.cageBell) {
    MAP.cageBell = false;
    beep(220, 0.12, 0.04, 1, "triangle");
    feed(MAP.cageDir < 0 ? "CAGE DOWN" : "CAGE UP");
  }
  if (MAP.winzeCage && player.grounded) {
    const dx = player.pos.x - MAP.winzeCage.x;
    const dz = player.pos.z - MAP.winzeCage.z;
    const onW = Math.abs(dx) < MAP.winzeCage.sx * 0.42 && Math.abs(dz) < MAP.winzeCage.sz * 0.42 && player.pos.y > MAP.winzeCage.top - 0.45;
    if (onW) {
      player.pos.y += MAP.winzeCageDy || 0;
      if (!player._winzeOn) {
        player._winzeOn = true;
        feed("WINZE CAGE");
      }
    } else player._winzeOn = false;
  }
  if (MAP.winzeBell) {
    MAP.winzeBell = false;
    beep(180, 0.1, 0.035, 1, "triangle");
    feed(MAP.winzeCageDir < 0 ? "WINZE DOWN" : "WINZE UP");
  }
  if (MAP.sump && MAP.sump.on && inCross(player.pos) && Math.random() < dt * 2.4) beep(70, 0.05, 0.02, 1, "sine");
  if (inCross(player.pos) && MAP.sump && MAP.sump.on) { player.pos.x += 0.85 * dt; collideXZ(player.pos, 0.4); }
  if (inVent(player.pos) && MAP.fan && MAP.fan.on && player.grounded) {
    player.pos.z += 2.4 * dt;
    collideXZ(player.pos, 0.4);
    if (Math.random() < dt * 4) beep(70 + Math.random() * 30, 0.06, 0.02, 1, "sawtooth");
  }
  if (MAP.carCrate && player.grounded) {
    const c = MAP.carCrate;
    const dx = player.pos.x - c.pos.x;
    const dz = player.pos.z - c.pos.z;
    const onCar = Math.abs(dx) < c.sx * 0.42 && Math.abs(dz) < c.sz * 0.42 && player.pos.y < 1.4;
    if (onCar) {
      player.pos.x += MAP.carDx || 0;
      player.pos.z += MAP.carDz || 0;
      if (!player._carOn) {
        player._carOn = true;
        feed("MAN-CAR");
      }
    } else player._carOn = false;
  }
  if (MAP.carBell) {
    MAP.carBell = false;
    beep(220, 0.07, 0.03, 1, "square");
    feed(MAP.carDir < 0 ? "CAR SOUTH" : "CAR NORTH");
  }
  if (MAP.carClack != null && MAP.carClack <= 0 && MAP.carCrate && player.pos.distanceTo(MAP.carCrate.pos) < 18) {
    MAP.carClack = 0.42;
    beep(160, 0.03, 0.012, 1, "square");
  }

  if ((keys.has("Space") || keys.has("KeyJ")) && player.grounded) {
    if (player.prone) {
      player.prone = false;
    } else {
      player.vel.y = 6.2;
      player.grounded = false;
    }
  }
  if (player.vault > 0) player.vault -= dt;
  if (!player.grounded && player.vault <= 0 && player.vel.y > -2) {
    for (const c of MAP.crates) {
      const dx = player.pos.x - c.pos.x;
      const dz = player.pos.z - c.pos.z;
      const hx = (c.sx || 1) * 0.5 + 0.55;
      const hz = (c.sz || 1) * 0.5 + 0.55;
      const top = c.sy || 1.1;
      const climbOk = top > 0.55 && (top < 1.65 || c.climb);
      if (Math.abs(dx) < hx && Math.abs(dz) < hz && climbOk && player.pos.y < top + 1.4) {
        player.vault = 0.38;
        player.vel.y = 3.4;
        player.pos.y = Math.max(player.pos.y, top + 0.55);
        player.pos.x += -Math.sin(player.yaw) * 0.35;
        player.pos.z += -Math.cos(player.yaw) * 0.35;
        if (c.climb) {
          const roost =
            MAP.lookout && player.pos.distanceTo(MAP.lookout) < 4
              ? MAP.lookout
              : MAP.cistern && player.pos.distanceTo(MAP.cistern) < 4
                ? MAP.cistern
                : c.climbTo;
          if (roost) {
            player.pos.x += (roost.x - player.pos.x) * 0.45;
            player.pos.z += (roost.z - player.pos.z) * 0.45;
            player.pos.y = Math.max(player.pos.y, floorY(roost.x, roost.z) + 1.2);
          }
        }
        thud();
        beep(160, 0.05, 0.02, 1, "triangle");
        setTimeout(() => beep(70, 0.07, 0.028, 1, "sine"), 40);
        feed("VAULT");
        break;
      }
    }
  }
  player.vel.y -= 18 * dt;
  player.pos.y += player.vel.y * dt;
  const standWish = player.slide > 0 ? 0.85 : player.prone ? 0.52 : player.crouch ? 1.15 : 1.7;
  player.eye += (standWish - player.eye) * Math.min(1, dt * 10);
  const stand = player.eye + floorY(player.pos.x, player.pos.z);
  if (player.pos.y <= stand + 0.02) {
    const impact = -player.vel.y;
    player.pos.y = stand;
    player.vel.y = 0;
    if (!player.wasGrounded && impact > 3.4) {
      player.landKick = Math.min(1, impact / 10);
      thud();
      if (impact > 8.2) {
        const fall = (impact - 8.2) * 9;
        player.hp -= fall;
        flashDmg();
        player.shake = Math.min(1, player.shake + 0.4);
        feed(`FALL · -${Math.round(fall)}`);
      }
      for (let i = 0; i < 3; i++) {
        const puff = new THREE.Mesh(
          new THREE.SphereGeometry(0.08 + Math.random() * 0.06, 5, 4),
          new THREE.MeshBasicMaterial({ color: 0x7a6038, transparent: true, opacity: 0.32 })
        );
        puff.position.set(player.pos.x + (Math.random() - 0.5) * 0.35, 0.06, player.pos.z + (Math.random() - 0.5) * 0.35);
        scene.add(puff);
        dust.push({ mesh: puff, t: 0.35, rise: 0.35, drift: (Math.random() - 0.5) * 0.4 });
      }
    }
    player.grounded = true;
  }
  player.wasGrounded = player.grounded;
  player.landKick = Math.max(0, player.landKick - dt * 4);
  const sprintWish = player.sprint && wish.lengthSq() > 0 && player.grounded && !player.ads;
  player.sprintFov += ((sprintWish ? 1 : 0) - player.sprintFov) * Math.min(1, dt * 6);

  const leanWish = (keys.has("KeyQ") ? 1 : 0) + (keys.has("KeyE") ? -1 : 0);
  const leanPrev = player.lean;
  player.lean += (leanWish - player.lean) * Math.min(1, dt * 8);
  if (Math.abs(player.lean) > 0.65 && Math.abs(leanPrev) < 0.65) {
    beep(210, 0.03, 0.012, 1, "triangle");
  }
  const rightLean = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw));
  const leanOff = player.lean * 0.42;
  camera.position.copy(player.pos).addScaledVector(rightLean, leanOff);
  collideXZ(camera.position, 0.22);
  camera.position.y = player.pos.y;
  {
    const hug = nearestCrate(player.pos);
    if (hug && !player.sprint && player.slide <= 0) {
      const dx = hug.pos.x - player.pos.x;
      const dz = hug.pos.z - player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.4 && d < hug.sx * 0.7 + 1.35) {
        player.pos.x += (dx / d) * dt * 0.55;
        player.pos.z += (dz / d) * dt * 0.55;
        collideXZ(player.pos, 0.35);
        if (wish.lengthSq() > 0.2) {
          player._scrape = (player._scrape || 0) - dt;
          if (player._scrape <= 0) {
            player._scrape = 0.38;
            beep(110 + Math.random() * 40, 0.04, 0.016, 1, "triangle");
            if (Math.random() < 0.28) {
              beep(80, 0.07, 0.014, 1, "sine");
              if (Math.random() < 0.35) feed("CRATE · creak");
            }
          }
        }
      }
    }
  }
  if (wish.lengthSq() > 0 && player.grounded && player.slide <= 0) {
    player.bob += dt * (player.sprint ? 11 : player.crouch ? 6 : 8);
    camera.position.y += Math.abs(Math.sin(player.bob)) * (player.sprint ? 0.055 : 0.032);
    camera.position.x += Math.sin(player.bob * 0.5) * 0.012;
  } else {
    player.bob *= Math.max(0, 1 - dt * 6);
  }
  const nearHeat = player.pos.distanceTo(MAP.extract) < 4.2;
  if (nearHeat) {
    const wob = Math.sin(performance.now() * 0.008) * 0.012;
    camera.position.x += wob;
    camera.position.y += Math.cos(performance.now() * 0.011) * 0.01;
    camera.rotation.z += wob * 0.15;
  }
  player.shake = Math.max(0, (player.shake || 0) - dt * 2.4);
  tinnitus = Math.max(0, tinnitus - dt * 0.55);
  const sh = player.shake || 0;
  const breath = player.ads ? Math.sin(now * 0.0024) * 0.012 : 0;
  camera.rotation.set(
    player.pitch + player.landKick * 0.08 + player.slide * 0.12 + (Math.random() - 0.5) * sh * 0.04 + breath,
    player.yaw + player.lean * 0.07 + (Math.random() - 0.5) * sh * 0.03,
    player.landKick * 0.02 - player.lean * 0.22 + (Math.random() - 0.5) * sh * 0.02
  );
  if (player.binos) player.ads = true;
  const targetFov = player.binos
    ? player.fov * (player.glassFocus ? 0.28 : 0.42)
    : ads
      ? player.fov * 0.78
      : player.fov + player.sprintFov * 8 + Math.abs(player.lean) * 3;
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 8);
  camera.updateProjectionMatrix();
  document.getElementById("hud").classList.toggle("ads", player.ads);
  if (player.ads !== adsWas) {
    adsWas = player.ads;
    beep(player.ads ? 540 : 280, 0.035, 0.018, 1, "triangle");
  }
  shadow.position.x = player.pos.x;
  shadow.position.z = player.pos.z;
  shadow.scale.setScalar(player.prone ? 1.15 : player.crouch || player.slide > 0 ? 0.72 : 1);

  if (keys.has("KeyR") && player.reloading <= 0) {
    if (player.jam > 0) {
      player.jam = 0;
      vm.kick = 0.6;
      beep(240, 0.05, 0.03, 1, "triangle");
      setTimeout(() => beep(180, 0.06, 0.022, 1, "square"), 80);
      feed("CLEAR · bolt");
      keys.delete("KeyR");
    } else {
      const w = LOADOUT[player.gun];
      const a = player.ammo[player.gun];
      if (a.mag < w.mag && a.res > 0) {
        const dump = keys.has("ShiftLeft") || keys.has("ShiftRight");
        if (dump && a.mag > 0) {
          a.mag = 0;
          player.reloading = Math.max(0.85, w.reload * 0.72);
          player.dumpRel = true;
          feed("DUMP · tac reload");
        } else {
          player.reloading = w.reload;
          player.dumpRel = false;
        }
        dropMag();
        if (player.gritMag) {
          player.gritMag = false;
          beep(160, 0.05, 0.016, 1, "square");
          feed("MAG · grit");
          showPlate("GRIT");
        }
      }
    }
  }
  if (player.reloading <= 0 && player.ammo[player.gun].mag <= 0 && player.ammo[player.gun].res > 0) {
    player._autoRel = (player._autoRel || 0) + dt;
    if (player._autoRel > 0.42) {
      player._autoRel = 0;
      player.reloading = LOADOUT[player.gun].reload;
      dropMag();
    }
  } else player._autoRel = 0;
  if (player.reloading > 0) {
    const prevRel = player.reloading;
    player.reloading -= dt;
    if (prevRel > 0.55 && player.reloading <= 0.55) beep(240, 0.04, 0.02, 1, "square");
    if (player.reloading <= 0) {
      const w = LOADOUT[player.gun];
      const a = player.ammo[player.gun];
      const need = w.mag - a.mag;
      const take = Math.min(need, a.res);
      a.mag += take;
      a.res -= take;
      beep(880, 0.04, 0.03, 1, "triangle");
      setTimeout(() => beep(620, 0.05, 0.025, 1, "sine"), 40);
    }
  }
  player.shootCd -= dt;
  if (!mouseDown) player.burst = Math.max(0, player.burst - dt * 8);
  if (mouseDown && LOADOUT[player.gun].auto && !player.semi && player.locked) fire();
  if (keys.has("KeyG") && player.nades > 0 && player.dead <= 0) {
    cooking = true;
    cook = Math.min(1.2, cook + dt);
    if (cook >= 1.18) {
      keys.delete("KeyG");
      cooking = false;
      cook = 0;
      tossGrenade(0.35, 0.2);
    }
  } else if (cooking) {
    cooking = false;
    tossGrenade(1.35 - cook * 0.7, cook);
    cook = 0;
  }
  const cookEl = document.getElementById("cook");
  if (cookEl) {
    const wrapping = player.wrap > 0;
    cookEl.style.display = cooking || wrapping ? "block" : "none";
    const cf = document.getElementById("cookfill");
    if (cf) cf.style.width = wrapping ? `${(1 - player.wrap / 3.4) * 100}%` : `${(cook / 1.2) * 100}%`;
  }

  player.meleeCd = Math.max(0, player.meleeCd - dt);
  player.suppress = Math.max(0, (player.suppress || 0) - dt * 0.85);
  player.smear = Math.max(0, (player.smear || 0) - dt * 0.35);
  const yawVel = player.yaw - lastYaw;
  const pitchVel = player.pitch - lastPitch;
  lastYaw = player.yaw;
  lastPitch = player.pitch;
  updateViewmodel(
    vm,
    dt,
    wish.lengthSq() > 0 && player.grounded,
    vm.kick > 0,
    player.inspect,
    player.ads,
    player.reloading > 0,
    player.sprint && wish.lengthSq() > 0,
    player.meleeCd > 0.38,
    yawVel,
    pitchVel,
    player.ammo[player.gun].mag <= 0,
    player.jam > 0,
    player.laser
  );
  player.jam = Math.max(0, player.jam - dt * 0.15);
  player.sip = Math.max(0, player.sip - dt);
  if (player.wrap > 0) {
    const before = player.wrap;
    player.wrap = Math.max(0, player.wrap - dt);
    player.vel.multiplyScalar(0.55);
    if (before > 0 && player.wrap <= 0) {
      player.hp = Math.min(100, player.hp + 22);
      beep(240, 0.08, 0.03, 1, "triangle");
      floatLoot("+22 WRAP");
      feed("WRAP · sealed");
    }
  }
  heatClickT -= dt;
  if ((vm.heat || 0) > 0.72 && heatClickT <= 0) {
    heatClickT = 0.55;
    beep(320, 0.03, 0.016, 1, "square");
  }
  if (inShed(player.pos)) {
    player._pumpT = (player._pumpT || 0.8) - dt;
    if (player._pumpT <= 0) {
      player._pumpT = 1.1 + Math.random() * 0.6;
      beep(55 + Math.random() * 18, 0.14, 0.016, 1, "sine");
    }
    if (!player._shedIn) {
      player._shedIn = true;
      feed("PUMP SHED");
      thud();
    }
  } else {
    player._shedIn = false;
  }
  if (MAP.lookout && player.pos.distanceTo(MAP.lookout) < 2.2 && floorY(player.pos.x, player.pos.z) > 2) {
    if (!player._lookIn) {
      player._lookIn = true;
      feed("LOOKOUT");
      thud();
      beep(180, 0.08, 0.03, 1, "triangle");
    }
  } else {
    player._lookIn = false;
  }
  if (inRadio(player.pos)) {
    player._radT = (player._radT || 0.9) - dt;
    if (player._radT <= 0) {
      player._radT = 1.4 + Math.random() * 1.1;
      beep(420 + Math.random() * 80, 0.05, 0.012, 1, "square");
      setTimeout(() => beep(180, 0.08, 0.01, 1, "sawtooth"), 40);
    }
    if (!player._radIn) {
      player._radIn = true;
      feed("RADIO");
      thud();
    }
  } else {
    player._radIn = false;
  }
  if (inShop(player.pos)) {
    player._shopT = (player._shopT || 0.7) - dt;
    if (player._shopT <= 0) {
      player._shopT = 0.7 + Math.random() * 0.5;
      beep(90 + Math.random() * 40, 0.07, 0.014, 1, "sawtooth");
    }
    if (!player._shopIn) {
      player._shopIn = true;
      feed("MACHINE SHOP");
      thud();
    }
  } else {
    player._shopIn = false;
  }
  if (inHut(player.pos)) {
    player._hutT = (player._hutT || 0.8) - dt;
    if (player._hutT <= 0) {
      player._hutT = 1.0 + Math.random() * 0.7;
      beep(70 + Math.random() * 22, 0.12, 0.015, 1, "sine");
    }
    if (!player._hutIn) {
      player._hutIn = true;
      feed("FILTER HUT");
      thud();
    }
  } else {
    player._hutIn = false;
  }
  if (inMag(player.pos)) {
    player._magT = (player._magT || 0.85) - dt;
    if (player._magT <= 0) {
      player._magT = 0.9 + Math.random() * 0.7;
      beep(55 + Math.random() * 18, 0.11, 0.016, 1, "sine");
    }
    if (!player._magIn) {
      player._magIn = true;
      feed("BLAST MAG");
      thud();
    }
  } else {
    player._magIn = false;
  }
  if (inCrush(player.pos)) {
    player._crushT = (player._crushT || 0.7) - dt;
    if (player._crushT <= 0) {
      player._crushT = 0.55 + Math.random() * 0.45;
      beep(48 + Math.random() * 16, 0.14, 0.02, 1, "sawtooth");
    }
    if (!player._crushIn) {
      player._crushIn = true;
      feed("CRUSHER");
      thud();
    }
  } else {
    player._crushIn = false;
  }
  if (inDock(player.pos)) {
    player._dockT = (player._dockT || 0.8) - dt;
    if (player._dockT <= 0) {
      player._dockT = 0.85 + Math.random() * 0.55;
      beep(62 + Math.random() * 20, 0.1, 0.016, 1, "square");
    }
    if (!player._dockIn) {
      player._dockIn = true;
      feed("LOADING DOCK");
      thud();
    }
  } else {
    player._dockIn = false;
  }
  if (inAssay(player.pos)) {
    player._assayT = (player._assayT || 0.8) - dt;
    if (player._assayT <= 0) {
      player._assayT = 0.9 + Math.random() * 0.55;
      beep(58 + Math.random() * 18, 0.11, 0.016, 1, "sine");
    }
    if (!player._assayIn) {
      player._assayIn = true;
      feed("ASSAY");
      thud();
    }
  } else {
    player._assayIn = false;
  }
  if (inWeigh(player.pos)) {
    player._weighT = (player._weighT || 0.8) - dt;
    if (player._weighT <= 0) {
      player._weighT = 0.85 + Math.random() * 0.55;
      beep(52 + Math.random() * 16, 0.1, 0.016, 1, "square");
    }
    if (!player._weighIn) {
      player._weighIn = true;
      feed("WEIGH");
      thud();
    }
  } else {
    player._weighIn = false;
  }
  if (inGen(player.pos)) {
    player._genT = (player._genT || 0.75) - dt;
    if (player._genT <= 0) {
      player._genT = 0.7 + Math.random() * 0.45;
      beep(70 + Math.random() * 22, 0.09, 0.018, 1, "sawtooth");
    }
    if (!player._genIn) {
      player._genIn = true;
      feed("GENERATOR");
      thud();
    }
  } else {
    player._genIn = false;
  }
  if (inComp(player.pos)) {
    player._compT = (player._compT || 0.75) - dt;
    if (player._compT <= 0) {
      player._compT = 0.62 + Math.random() * 0.4;
      beep(48 + Math.random() * 18, 0.1, 0.02, 1, "square");
    }
    if (!player._compIn) {
      player._compIn = true;
      feed("COMPRESSOR");
      thud();
    }
  } else {
    player._compIn = false;
  }
  if (inLube(player.pos)) {
    player._lubeT = (player._lubeT || 0.75) - dt;
    if (player._lubeT <= 0) {
      player._lubeT = 0.7 + Math.random() * 0.45;
      beep(42 + Math.random() * 16, 0.11, 0.018, 1, "sine");
    }
    if (!player._lubeIn) {
      player._lubeIn = true;
      feed("LUBE");
      thud();
    }
  } else {
    player._lubeIn = false;
  }
  if (inWash(player.pos)) {
    player._washT = (player._washT || 0.7) - dt;
    if (player._washT <= 0) {
      player._washT = 0.55 + Math.random() * 0.4;
      beep(220 + Math.random() * 80, 0.08, 0.016, 1, "sine");
    }
    if (!player._washIn) {
      player._washIn = true;
      feed("WASH");
      thud();
    }
  } else {
    player._washIn = false;
  }
  if (inTire(player.pos)) {
    player._tireT = (player._tireT || 0.7) - dt;
    if (player._tireT <= 0) {
      player._tireT = 0.6 + Math.random() * 0.4;
      beep(90 + Math.random() * 40, 0.09, 0.018, 1, "square");
    }
    if (!player._tireIn) {
      player._tireIn = true;
      feed("TIRE");
      thud();
    }
  } else {
    player._tireIn = false;
  }
  if (inPaint(player.pos)) {
    player._paintT = (player._paintT || 0.72) - dt;
    if (player._paintT <= 0) {
      player._paintT = 0.58 + Math.random() * 0.4;
      beep(160 + Math.random() * 50, 0.08, 0.016, 1, "sine");
    }
    if (!player._paintIn) {
      player._paintIn = true;
      feed("PAINT");
      thud();
    }
  } else {
    player._paintIn = false;
  }
  if (inParts(player.pos)) {
    player._partsT = (player._partsT || 0.7) - dt;
    if (player._partsT <= 0) {
      player._partsT = 0.6 + Math.random() * 0.4;
      beep(110 + Math.random() * 40, 0.08, 0.016, 1, "square");
    }
    if (!player._partsIn) {
      player._partsIn = true;
      feed("PARTS");
      thud();
    }
  } else {
    player._partsIn = false;
  }
  if (inWeld(player.pos)) {
    player._weldT = (player._weldT || 0.55) - dt;
    if (player._weldT <= 0) {
      player._weldT = 0.45 + Math.random() * 0.35;
      beep(220 + Math.random() * 80, 0.07, 0.018, 1, "sawtooth");
    }
    if (!player._weldIn) {
      player._weldIn = true;
      feed("WELD");
      thud();
    }
  } else {
    player._weldIn = false;
  }
  if (inBatt(player.pos)) {
    player._battT = (player._battT || 0.6) - dt;
    if (player._battT <= 0) {
      player._battT = 0.5 + Math.random() * 0.35;
      beep(180 + Math.random() * 60, 0.07, 0.016, 1, "square");
    }
    if (!player._battIn) {
      player._battIn = true;
      feed("BATT");
      thud();
    }
  } else {
    player._battIn = false;
  }
  if (inHoist(player.pos)) {
    player._hoistT = (player._hoistT || 0.65) - dt;
    if (player._hoistT <= 0) {
      player._hoistT = 0.55 + Math.random() * 0.4;
      beep(90 + Math.random() * 40, 0.09, 0.018, 1, "sawtooth");
    }
    if (!player._hoistIn) {
      player._hoistIn = true;
      feed("HOIST");
      thud();
    }
  } else {
    player._hoistIn = false;
  }
  if (inMill(player.pos)) {
    player._millT = (player._millT || 0.6) - dt;
    if (player._millT <= 0) {
      player._millT = 0.5 + Math.random() * 0.38;
      beep(110 + Math.random() * 50, 0.09, 0.02, 1, "sawtooth");
    }
    if (!player._millIn) {
      player._millIn = true;
      feed("MILL");
      thud();
    }
  } else {
    player._millIn = false;
  }
  if (inKiln(player.pos)) {
    player._kilnT = (player._kilnT || 0.55) - dt;
    if (player._kilnT <= 0) {
      player._kilnT = 0.45 + Math.random() * 0.35;
      beep(70 + Math.random() * 40, 0.1, 0.022, 1, "sawtooth");
    }
    if (!player._kilnIn) {
      player._kilnIn = true;
      feed("KILN");
      thud();
    }
  } else {
    player._kilnIn = false;
  }
  if (inSort(player.pos)) {
    player._sortT = (player._sortT || 0.5) - dt;
    if (player._sortT <= 0) {
      player._sortT = 0.38 + Math.random() * 0.28;
      beep(160 + Math.random() * 70, 0.07, 0.016, 1, "square");
    }
    if (!player._sortIn) {
      player._sortIn = true;
      feed("SORT");
      thud();
    }
  } else {
    player._sortIn = false;
  }
  if (inLab(player.pos)) {
    player._labT = (player._labT || 0.55) - dt;
    if (player._labT <= 0) {
      player._labT = 0.48 + Math.random() * 0.32;
      beep(420 + Math.random() * 80, 0.06, 0.014, 1, "sine");
    }
    if (!player._labIn) {
      player._labIn = true;
      feed("LAB");
      thud();
    }
  } else {
    player._labIn = false;
  }
  if (inPow(player.pos)) {
    player._powT = (player._powT || 0.5) - dt;
    if (player._powT <= 0) {
      player._powT = 0.4 + Math.random() * 0.3;
      beep(90 + Math.random() * 50, 0.09, 0.02, 1, "sawtooth");
    }
    if (!player._powIn) {
      player._powIn = true;
      feed("POW");
      thud();
    }
  } else {
    player._powIn = false;
  }
  if (inFuse(player.pos)) {
    player._fuseT = (player._fuseT || 0.55) - dt;
    if (player._fuseT <= 0) {
      player._fuseT = 0.46 + Math.random() * 0.3;
      beep(280 + Math.random() * 70, 0.07, 0.016, 1, "square");
    }
    if (!player._fuseIn) {
      player._fuseIn = true;
      feed("FUSE");
      thud();
    }
  } else {
    player._fuseIn = false;
  }
  if (inSkip(player.pos)) {
    player._skipT = (player._skipT || 0.6) - dt;
    if (player._skipT <= 0) {
      player._skipT = 0.5 + Math.random() * 0.35;
      beep(70 + Math.random() * 30, 0.1, 0.02, 1, "sawtooth");
    }
    if (!player._skipIn) {
      player._skipIn = true;
      feed("SKIP");
      thud();
    }
  } else {
    player._skipIn = false;
  }
  if (inTip(player.pos)) {
    player._tipT = (player._tipT || 0.7) - dt;
    if (player._tipT <= 0) {
      player._tipT = 0.55 + Math.random() * 0.4;
      beep(90 + Math.random() * 40, 0.08, 0.02, 1, "triangle");
    }
    if (!player._tipIn) {
      player._tipIn = true;
      feed("TIP");
      thud();
    }
  } else {
    player._tipIn = false;
  }
  if (inWinze(player.pos)) {
    if (!player._winzeIn) {
      player._winzeIn = true;
      feed("WINZE");
    }
  } else player._winzeIn = false;
  if (inRaise(player.pos)) {
    if (!player._raiseIn) {
      player._raiseIn = true;
      feed("RAISE");
    }
  } else player._raiseIn = false;
  if (inBin(player.pos)) {
    if (!player._binIn) {
      player._binIn = true;
      feed(MAP.binBrake && MAP.binBrake.on ? "BIN · BRAKE" : "BIN");
    }
  } else player._binIn = false;
  if (inTail(player.pos)) {
    if (!player._tailIn) {
      player._tailIn = true;
      feed("TAILINGS");
    }
  } else player._tailIn = false;
  if (inThick(player.pos)) {
    if (!player._thickIn) {
      player._thickIn = true;
      feed(MAP.thick && MAP.thick.on ? "THICKENER · OPEN" : "THICKENER");
    }
  } else player._thickIn = false;
  if (inBall(player.pos)) {
    if (!player._ballIn) {
      player._ballIn = true;
      feed(MAP.ball && MAP.ball.on ? "BALL MILL · RUN" : "BALL MILL");
    }
  } else player._ballIn = false;
  if (inCyc(player.pos)) {
    if (!player._cycIn) {
      player._cycIn = true;
      feed(MAP.cyc && MAP.cyc.on ? "CYCLONE · FEED" : "CYCLONE");
    }
  } else player._cycIn = false;
  if (inPress(player.pos)) {
    if (!player._pressIn) {
      player._pressIn = true;
      feed(MAP.press && MAP.press.on ? "PRESS · CLOSED" : "PRESS");
    }
  } else player._pressIn = false;
  if (inFloat(player.pos)) {
    if (!player._floatIn) {
      player._floatIn = true;
      feed(MAP.float && MAP.float.on ? "FLOAT · AIR" : "FLOAT");
    }
  } else player._floatIn = false;
  if (inStack(player.pos)) {
    if (!player._stackIn) {
      player._stackIn = true;
      feed(MAP.stack && MAP.stack.on ? "STACK · SWING" : "STACK");
    }
  } else player._stackIn = false;
  if (inVent(player.pos)) {
    if (!player._ventIn) {
      player._ventIn = true;
      feed(MAP.fan && MAP.fan.on ? "VENT · GALE" : "VENT");
    }
  } else player._ventIn = false;
  if (inCross(player.pos)) {
    if (!player._crossIn) {
      player._crossIn = true;
      feed(MAP.sump && MAP.sump.on ? "CROSSCUT · FLOODED" : "CROSSCUT");
    }
  } else player._crossIn = false;
  if (inAdit(player.pos)) {
    player._aditT = (player._aditT || 0.8) - dt;
    if (player._aditT <= 0) {
      player._aditT = 0.7 + Math.random() * 0.5;
      beep(60 + Math.random() * 25, 0.09, 0.018, 1, "triangle");
    }
    if (!player._aditIn) {
      player._aditIn = true;
      feed("ADIT");
      thud();
    }
  } else {
    player._aditIn = false;
  }
  if (inSluice(player.pos)) {
    if (!player._sluiceIn) {
      player._sluiceIn = true;
      feed("SLUICE");
    }
  } else player._sluiceIn = false;
  if (MAP.cistern && player.pos.distanceTo(MAP.cistern) < 2.2 && floorY(player.pos.x, player.pos.z) > 3) {
    if (!player._tankIn) {
      player._tankIn = true;
      feed("CISTERN");
      thud();
      beep(160, 0.08, 0.03, 1, "triangle");
    }
  } else {
    player._tankIn = false;
  }
  if (inHangar(player.pos)) {
    player._staticT = (player._staticT || 1.8) - dt;
    if (player._staticT <= 0) {
      player._staticT = 2.4 + Math.random() * 3.2;
      beep(90 + Math.random() * 40, 0.12, 0.012, 1, "sawtooth");
      setTimeout(() => beep(70, 0.08, 0.01, 1, "square"), 80);
    }
    breathT -= dt;
    if (breathT <= 0) {
      breathT = player.sprint ? 0.55 : 1.15;
      const dir = lookDir();
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(0.05 + Math.random() * 0.03, 5, 4),
        new THREE.MeshBasicMaterial({ color: 0xc8d0d8, transparent: true, opacity: 0.22 })
      );
      puff.position.copy(player.pos).add(new THREE.Vector3(0, player.crouch ? 1.05 : 1.45, 0)).add(dir.clone().multiplyScalar(0.28));
      scene.add(puff);
      dust.push({ mesh: puff, t: 0.45, rise: 0.25, drift: (Math.random() - 0.5) * 0.15 });
    }
  }
  vm.idle = player.stam < 40 ? 1.4 : player.ads ? 0.4 : 0.8;
  if (player.stam < 22 && player.dead <= 0) {
    const tr = (22 - player.stam) / 22;
    player.pitch += Math.sin(performance.now() * 0.021) * 0.0012 * tr;
    player.yaw += Math.cos(performance.now() * 0.017) * 0.0009 * tr;
  }
  updateBots(bots, player.pos, dt, fireAtPlayer, lookDir(), player.ads, onCallout, MAP.extract, botTossNade, player.extracting);
  if (!window.__ridgeReinforced) {
    const down = bots.filter((b) => b.hp <= 0).length;
    if (down >= 3 && bots.length < 9) {
      window.__ridgeReinforced = true;
      reinforce(scene, bots, 2);
      feed("REINFORCE · north ridge");
      beep(140, 0.18, 0.05, 1, "sawtooth");
      setTimeout(() => beep(90, 0.22, 0.04, 1, "triangle"), 180);
    }
  }
  if (MAP.tramBell) {
    MAP.tramBell = false;
    sfxAt(MAP.tramCrate.pos, 220, 0.16, 0.04, "triangle");
    feed("TRAM TURN");
  }
  if (MAP.binSkipCrate && (MAP.binClack || 0) <= 0 && !(MAP.binBrake && MAP.binBrake.on)) {
    const d = player.pos.distanceTo(MAP.binSkipCrate.pos);
    if (d < 22) {
      MAP.binClack = 0.48;
      sfxAt(MAP.binSkipCrate.pos, 140, 0.04, 0.028, "square");
    }
  }
  MAP.binClack = Math.max(0, (MAP.binClack || 0) - dt);
  if (MAP.cyc && MAP.cyc.on && MAP.cycDoor && (MAP.cycClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.cycDoor);
    if (d < 22) {
      MAP.cycClack = 0.55;
      sfxAt(MAP.cycDoor, 110 + (d < 6 ? 30 : 0), 0.05, 0.026, "sawtooth");
    }
  }
  MAP.cycClack = Math.max(0, (MAP.cycClack || 0) - dt);
  if (MAP.float && MAP.float.on && MAP.floatDoor && (MAP.floatClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.floatDoor);
    if (d < 22) {
      MAP.floatClack = 0.55;
      sfxAt(MAP.floatDoor, 90 + (d < 6 ? 30 : 0), 0.05, 0.022, "sawtooth");
    }
  }
  if (MAP.stack && MAP.stack.on && MAP.stackDoor && (MAP.stackClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.stackDoor);
    if (d < 24) {
      MAP.stackClack = 0.7;
      sfxAt(MAP.stackDoor, 64 + (d < 6 ? 16 : 0), 0.06, 0.02, "square");
    }
  }
  if (MAP.haulBell) {
    MAP.haulBell = false;
    if (MAP.haulCrate) sfxAt(MAP.haulCrate.pos, 180, 0.14, 0.035, "triangle");
  }
  if (MAP.haulCrate && (MAP.haulClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.haulCrate.pos);
    if (d < 18) {
      MAP.haulClack = 0.48;
      sfxAt(MAP.haulCrate.pos, 110 + (d < 6 ? 24 : 0), 0.04, 0.024, "square");
    }
  }
  if (MAP.press && MAP.press.on && MAP.pressDoor && (MAP.pressClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.pressDoor);
    if (d < 20) {
      MAP.pressClack = 0.7;
      sfxAt(MAP.pressDoor, 78 + (d < 6 ? 20 : 0), 0.06, 0.024, "square");
    }
  }
  MAP.pressClack = Math.max(0, (MAP.pressClack || 0) - dt);
  MAP.floatClack = Math.max(0, (MAP.floatClack || 0) - dt);
  MAP.stackClack = Math.max(0, (MAP.stackClack || 0) - dt);
  MAP.slakeClack = Math.max(0, (MAP.slakeClack || 0) - dt);
  MAP.ropeClack = Math.max(0, (MAP.ropeClack || 0) - dt);
  MAP.sinterClack = Math.max(0, (MAP.sinterClack || 0) - dt);
  MAP.sampleClack = Math.max(0, (MAP.sampleClack || 0) - dt);
  if (MAP.slake && MAP.slake.on && MAP.slakeDoor && (MAP.slakeClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.slakeDoor);
    if (d < 28) {
      MAP.slakeClack = 0.55;
      sfxAt(MAP.slakeDoor, 110 + (d < 6 ? 20 : 0), 0.05, 0.02, "sawtooth");
    }
  }
  if (MAP.rope && MAP.rope.on && MAP.ropeDoor && (MAP.ropeClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.ropeDoor);
    if (d < 32) {
      MAP.ropeClack = 0.8;
      sfxAt(MAP.ropeDoor, 58 + (d < 8 ? 12 : 0), 0.05, 0.018, "square");
    }
  }
  if (MAP.sinter && MAP.sinter.on && MAP.sinterDoor && (MAP.sinterClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.sinterDoor);
    if (d < 22) {
      MAP.sinterClack = 0.42;
      sfxAt(MAP.sinterDoor, 96 + (d < 7 ? 18 : 0), 0.05, 0.02, "sawtooth");
    }
  }
  if (MAP.strandBell) {
    MAP.strandBell = false;
    if (MAP.strand) sfxAt(new THREE.Vector3(MAP.strand.x, 1.2, MAP.strand.z), 160, 0.07, 0.03, "square");
  }
  MAP.pelletClack = Math.max(0, (MAP.pelletClack || 0) - dt);
  if (MAP.pellet && MAP.pellet.on && MAP.pelletDoor && (MAP.pelletClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.pelletDoor);
    if (d < 28) {
      MAP.pelletClack = 0.55;
      sfxAt(MAP.pelletDoor, 68 + (d < 8 ? 16 : 0), 0.045, 0.02, "sawtooth");
    }
  }
  MAP.clarClack = Math.max(0, (MAP.clarClack || 0) - dt);
  if (MAP.clar && MAP.clar.on && MAP.clarDoor && (MAP.clarClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.clarDoor);
    if (d < 28) {
      MAP.clarClack = 0.7;
      sfxAt(MAP.clarDoor, 84 + (d < 8 ? 12 : 0), 0.04, 0.018, "square");
    }
  }
  MAP.siloClack = Math.max(0, (MAP.siloClack || 0) - dt);
  if (MAP.jig && MAP.jig.on && MAP.jigDoor && (MAP.jigClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.jigDoor);
    if (d < 22) {
      MAP.jigClack = 0.55;
      sfxAt(MAP.jigDoor, 96 + (d < 8 ? 12 : 0), 0.03, 0.014, "square");
    }
  } else MAP.jigClack = Math.max(0, (MAP.jigClack || 0) - dt);

  if (MAP.bag && MAP.bag.on && MAP.bagDoor && (MAP.bagClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.bagDoor);
    if (d < 24) {
      MAP.bagClack = 0.42;
      sfxAt(MAP.bagDoor, 92 + (d < 8 ? 18 : 0), 0.04, 0.02, "square");
    }
  } else MAP.bagClack = Math.max(0, (MAP.bagClack || 0) - dt);
  if (MAP.dry && MAP.dry.on && MAP.dryDoor && (MAP.dryClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.dryDoor);
    if (d < 24) {
      MAP.dryClack = 0.62;
      sfxAt(MAP.dryDoor, 74 + (d < 8 ? 12 : 0), 0.05, 0.02, "sawtooth");
    }
  } else MAP.dryClack = Math.max(0, (MAP.dryClack || 0) - dt);

  if (MAP.loco && MAP.loco.on && MAP.locoDoor && (MAP.locoClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.locoDoor);
    if (d < 24) {
      MAP.locoClack = 0.55;
      sfxAt(MAP.locoDoor, 68 + (d < 8 ? 14 : 0), 0.05, 0.02, "sawtooth");
    }
  } else MAP.locoClack = Math.max(0, (MAP.locoClack || 0) - dt);
  if (MAP.locoBell) {
    MAP.locoBell = false;
    if (MAP.locoDoor && player.pos.distanceTo(MAP.locoDoor) < 26) sfxAt(MAP.locoDoor, 118, 0.04, 0.07, "square");
  }
  if (MAP.agit && MAP.agit.on && MAP.agitDoor && (MAP.agitClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.agitDoor);
    if (d < 22) {
      MAP.agitClack = 0.48;
      sfxAt(MAP.agitDoor, 96 + (d < 8 ? 10 : 0), 0.04, 0.018, "square");
    }
  } else MAP.agitClack = Math.max(0, (MAP.agitClack || 0) - dt);
  if (MAP.scrub && MAP.scrub.on && MAP.scrubDoor && (MAP.scrubClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.scrubDoor);
    if (d < 24) {
      MAP.scrubClack = 0.5;
      sfxAt(MAP.scrubDoor, 110 + (d < 8 ? 12 : 0), 0.04, 0.018, "square");
    }
  } else MAP.scrubClack = Math.max(0, (MAP.scrubClack || 0) - dt);
  if (MAP.scrubBell) {
    MAP.scrubBell = false;
    if (MAP.scrubDoor && player.pos.distanceTo(MAP.scrubDoor) < 26) sfxAt(MAP.scrubDoor, 160, 0.03, 0.06, "sine");
  }

  if (MAP.ew && MAP.ew.on && MAP.ewDoor && (MAP.ewClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.ewDoor);
    if (d < 28) {
      MAP.ewClack = 0.46;
      sfxAt(MAP.ewDoor, 96 + (d < 8 ? 10 : 0), 0.035, 0.016, "square");
    }
  } else MAP.ewClack = Math.max(0, (MAP.ewClack || 0) - dt);
  if (MAP.ewBell) {
    MAP.ewBell = false;
    if (MAP.ewDoor && player.pos.distanceTo(MAP.ewDoor) < 26) sfxAt(MAP.ewDoor, 148, 0.03, 0.05, "sine");
  }
  if (MAP.cone && MAP.cone.on && MAP.coneDoor && (MAP.coneClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.coneDoor);
    if (d < 28) {
      MAP.coneClack = 0.32;
      sfxAt(MAP.coneDoor, 72 + (d < 8 ? 8 : 0), 0.045, 0.02, "sawtooth");
    }
  } else MAP.coneClack = Math.max(0, (MAP.coneClack || 0) - dt);
  if (MAP.clas && MAP.clas.on && MAP.clasDoor && (MAP.clasClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.clasDoor);
    if (d < 26) {
      MAP.clasClack = 0.5;
      sfxAt(MAP.clasDoor, 98 + (d < 8 ? 12 : 0), 0.035, 0.016, "square");
    }
  } else MAP.clasClack = Math.max(0, (MAP.clasClack || 0) - dt);
  if (MAP.clasBell) {
    MAP.clasBell = false;
    if (MAP.clasDoor && player.pos.distanceTo(MAP.clasDoor) < 26) sfxAt(MAP.clasDoor, 132, 0.03, 0.05, "sine");
  }
  if (MAP.mags && MAP.mags.on && MAP.magsDoor && (MAP.magsClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.magsDoor);
    if (d < 26) {
      MAP.magsClack = 0.4;
      sfxAt(MAP.magsDoor, 84 + (d < 8 ? 10 : 0), 0.04, 0.018, "sawtooth");
    }
  } else MAP.magsClack = Math.max(0, (MAP.magsClack || 0) - dt);

  if (MAP.rod && MAP.rod.on && MAP.rodDoor && (MAP.rodClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.rodDoor);
    if (d < 26) {
      MAP.rodClack = 0.42;
      sfxAt(MAP.rodDoor, 70 + (d < 8 ? 14 : 0), 0.045, 0.02, "sawtooth");
    }
  } else MAP.rodClack = Math.max(0, (MAP.rodClack || 0) - dt);
  if (MAP.sx && MAP.sx.on && MAP.sxDoor && (MAP.sxClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.sxDoor);
    if (d < 26) {
      MAP.sxClack = 0.55;
      sfxAt(MAP.sxDoor, 118 + (d < 8 ? 8 : 0), 0.03, 0.016, "square");
    }
  } else MAP.sxClack = Math.max(0, (MAP.sxClack || 0) - dt);
  if (MAP.sxBell) {
    MAP.sxBell = false;
    if (MAP.sxDoor && player.pos.distanceTo(MAP.sxDoor) < 26) sfxAt(MAP.sxDoor, 146, 0.03, 0.045, "sine");
  }
  if (MAP.cool && MAP.cool.on && MAP.coolDoor && (MAP.coolClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.coolDoor);
    if (d < 22) {
      MAP.coolClack = 0.7;
      sfxAt(MAP.coolDoor, 62 + (d < 8 ? 10 : 0), 0.032, 0.015, "sawtooth");
    }
  } else MAP.coolClack = Math.max(0, (MAP.coolClack || 0) - dt);
  if (MAP.coolBell) {
    MAP.coolBell = false;
    if (MAP.coolDoor && player.pos.distanceTo(MAP.coolDoor) < 26) sfxAt(MAP.coolDoor, 140, 0.04, 0.08, "sine");
  }
  if (MAP.fallBell) {
    MAP.fallBell = false;
    if (MAP.face) sfxAt(new THREE.Vector3(MAP.face.x, 0, MAP.face.z), 48, 0.08, 0.2, "sawtooth");
  }
  if (MAP.silo && MAP.silo.on && MAP.siloDoor && (MAP.siloClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.siloDoor);
    if (d < 26) {
      MAP.siloClack = 0.48;
      sfxAt(MAP.siloDoor, 110 + (d < 8 ? 14 : 0), 0.035, 0.016, "square");
    }
  }
  if (MAP.sample && MAP.sample.on && MAP.sampleDoor && (MAP.sampleClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.sampleDoor);
    if (d < 22) {
      MAP.sampleClack = 0.5;
      sfxAt(MAP.sampleDoor, 140 + (d < 7 ? 20 : 0), 0.04, 0.016, "square");
    }
  }
  if (MAP.ropeBell) {
    MAP.ropeBell = false;
    if (MAP.ropeSpan) sfxAt(new THREE.Vector3(MAP.ropeSpan.x, 2, MAP.ropeSpan.zA), 180, 0.12, 0.04, "sine");
  }

  MAP.haulClack = Math.max(0, (MAP.haulClack || 0) - dt);
  if (MAP.tramCrate && (MAP.tramClack || 0) <= 0) {
    const d = player.pos.distanceTo(MAP.tramCrate.pos);
    if (d < 18) {
      MAP.tramClack = 0.42;
      sfxAt(MAP.tramCrate.pos, 160 + (d < 6 ? 40 : 0), 0.04, 0.03, "square");
    }
  }
  for (const b of bots) {
    if (b._revived) {
      b._revived = false;
      feed(`NET · ${b.unit} back up`);
      beep(360, 0.07, 0.03, Math.max(1, b.pos.distanceTo(player.pos) * 0.18), "triangle");
      lastKnown.push({ x: b.pos.x, z: b.pos.z, t: 2.8, bot: b });
    }
    if (b._radioClick) {
      b._radioClick = false;
      const d = Math.max(1, b.pos.distanceTo(player.pos) * 0.16);
      beep(190, 0.04, 0.02, d, "square");
      setTimeout(() => beep(140, 0.05, 0.014, d, "sine"), 40);
    }
  }
  settleBotFx();
  if (Math.random() < dt * 0.12) {
    const talker = bots.find((b) => b.hp > 0 && b.state === "flank");
    if (talker) feed(`NET · ${bearingOf(talker.pos)} moving`);
  }
  for (const b of bots) {
    if (b.hp > 0) {
      const los = b.pos.distanceTo(player.pos) < 34;
      if (los) {
        const rec = lastKnown.find((k) => k.bot === b);
        if (rec) {
          rec.x = b.pos.x;
          rec.z = b.pos.z;
          rec.t = 4.5;
        } else lastKnown.push({ bot: b, x: b.pos.x, z: b.pos.z, t: 4.5 });
      }
    }
    if (b._dropMag) {
      b._dropMag = false;
      const dRel = b.pos.distanceTo(player.pos);
      if (dRel < 18) {
        beep(140, 0.05, 0.016, Math.max(1, dRel * 0.2), "triangle");
        setTimeout(() => beep(110, 0.06, 0.012, Math.max(1, dRel * 0.22), "sine"), 80);
        if (dRel < 10) feed(`NET · ${b.unit} reload`);
      }
      const mag = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.1, 0.05),
        new THREE.MeshLambertMaterial({ color: 0x2a2c24, transparent: true })
      );
      mag.position.set(b.pos.x + 0.2, 1.05, b.pos.z);
      scene.add(mag);
      mags.push({
        mesh: mag,
        vel: new THREE.Vector3((Math.random() - 0.5) * 1.2, 1.1, (Math.random() - 0.5) * 1.2),
        life: 3.6,
        spin: 5,
      });
    }
    if (b._gasp) {
      b._gasp = false;
      beep(180 + Math.random() * 40, 0.09, 0.03, Math.max(1, b.pos.distanceTo(player.pos) * 0.18), "sine");
      const last = ["NET · man down", "NET · contact lost", "NET · need cover", "NET · falling back"];
      feed(`${last[Math.floor(Math.random() * last.length)]} · ${b.unit || "R"}`);
      beep(280, 0.05, 0.016, 1, "square");
    }
    if (b._dropGun) {
      b._dropGun = false;
      const rifle = new THREE.Mesh(
        new THREE.BoxGeometry(0.07, 0.07, 0.48),
        new THREE.MeshLambertMaterial({ color: 0x2a3228 })
      );
      rifle.position.set(b.pos.x + 0.35, 0.9, b.pos.z + 0.1);
      rifle.rotation.set(0.4, Math.random() * 2, 0.6);
      scene.add(rifle);
      mags.push({
        mesh: rifle,
        vel: new THREE.Vector3((Math.random() - 0.5) * 1.4, 1.6, (Math.random() - 0.5) * 1.4),
        life: 5.5,
        spin: 3 + Math.random() * 2,
      });
    }
    if (b.hp > 0 && b.hp < 40 && Math.random() < dt * 2.2) {
      const limp = new THREE.Mesh(
        new THREE.CircleGeometry(0.1, 5),
        new THREE.MeshBasicMaterial({ color: 0x5a3a20, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
      );
      limp.rotation.x = -Math.PI / 2;
      limp.position.set(b.pos.x, 0.02, b.pos.z);
      scene.add(limp);
      dust.push({ mesh: limp, t: 0.4 });
    }
    if (b._dust) {
      const dist = b.pos.distanceTo(player.pos);
      if (dist < 22) beep(90 + Math.random() * 30, 0.03, 0.012, dist * 0.4, "sine");
    }
    if (!b._dust) continue;
    b._dust = false;
    const d = new THREE.Mesh(
      new THREE.CircleGeometry(0.16, 6),
      new THREE.MeshBasicMaterial({ color: 0x7a6038, transparent: true, opacity: 0.32, side: THREE.DoubleSide })
    );
    d.rotation.x = -Math.PI / 2;
    d.position.set(b.pos.x, 0.02, b.pos.z);
    scene.add(d);
    dust.push({ mesh: d, t: 0.5 });
  }

  for (const t of tracers) {
    t.t -= dt;
    if (t.mesh.material) t.mesh.material.opacity = Math.max(0, t.t / 0.16);
    if (t.origin && t.end) {
      const fade = 1 - t.t / 0.16;
      const start = t.origin.clone().lerp(t.end, fade * 0.45);
      t.mesh.geometry.setFromPoints([start, t.end]);
    }
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
    if (g.hostile && g.life > 0.15) {
      const tick = Math.floor(g.life * 7);
      if (tick !== g._whistle) {
        g._whistle = tick;
        sfxAt(g.mesh.position, 620 + (1.45 - g.life) * 280, 0.045, 0.028, "sine");
      }
    }
    const step = g.vel.clone();
    if (step.lengthSq() > 1.2 && g.mesh.position.y > 0.35) {
      const hit = rayVsCrates(g.mesh.position, step.normalize(), Math.min(0.7, g.vel.length() * dt + 0.18));
      if (hit) {
        g.vel.x *= -0.4;
        g.vel.z *= -0.4;
        g.vel.y *= 0.72;
        sfxAt(g.mesh.position, 180, 0.04, 0.02, "square");
      }
    }
    const wa = (WIND_DEG * Math.PI) / 180;
    g.vel.x += Math.cos(wa) * 1.8 * dt;
    g.vel.z += Math.sin(wa) * 1.8 * dt;
    if (g.life <= 0) {
      if (g.flash) popFlash(g.mesh.position.clone());
      else if (g.smokePot) popSmokePot(g.mesh.position.clone());
      else if (g.illum) popIllum(g.mesh.position.clone());
      else if (g.chem) plantChem(g.mesh.position.clone());
      else if (g.strobe) plantStrobe(g.mesh.position.clone());
      else if (g.pebble) popPebble(g.mesh.position.clone());
      else explode(g.mesh.position.clone());
      scene.remove(g.mesh);
    }
  }
  for (let i = grenades.length - 1; i >= 0; i--) if (grenades[i].life <= 0) grenades.splice(i, 1);

  for (const kn of knives) {
    if (kn.stuck) {
      kn.life -= dt;
      if (!kn.taken && kn.mesh.position.distanceTo(player.pos) < 1.15 && player.knives < 6) {
        kn.taken = true;
        kn.life = 0;
        player.knives++;
        scene.remove(kn.mesh);
        beep(420, 0.04, 0.02, 1, "triangle");
        feed(`KNIFE · recover · ${player.knives}`);
        showPlate("KNIFE");
        continue;
      }
      if (kn.life <= 0) scene.remove(kn.mesh);
      continue;
    }
    kn.vy -= 16 * dt;
    kn.mesh.position.x += kn.vx * dt;
    kn.mesh.position.y += kn.vy * dt;
    kn.mesh.position.z += kn.vz * dt;
    kn.mesh.rotation.x += dt * 14;
    kn.life -= dt;
    if (kn.mesh.position.y < 0.08) {
      kn.mesh.position.y = 0.06;
      kn.stuck = true;
      kn.life = 8;
      beep(280, 0.04, 0.016, 1, "triangle");
      continue;
    }
    const block = rayVsCrates(kn.mesh.position, new THREE.Vector3(kn.vx, kn.vy, kn.vz).normalize(), 0.4);
    if (block) {
      kn.stuck = true;
      kn.life = 8;
      beep(200, 0.04, 0.018, 1, "square");
      continue;
    }
    for (const b of bots) {
      if (b.hp <= 0) continue;
      if (kn.mesh.position.distanceTo(b.pos.clone().setY(1.2)) < 0.55) {
        const dmg = 55 + Math.random() * 18;
        b.hp -= dmg;
        player.hits++;
        player.dmgDealt += dmg;
        splat(b.pos.clone().setY(1.2));
        showHitmark(b.hp <= 0);
        floatDmg(dmg, false);
        kn.stuck = true;
        kn.life = 0;
        scene.remove(kn.mesh);
        if (b.hp <= 0) {
          player.kills++;
          player.streak = (player.streak || 0) + 1;
          player.smear = 1.6;
          stainViewmodel(vm, 0.7);
          feed(`KNIFE · ${b.unit}`, "kill");
          bloodPool(b.pos);
        } else feed(`KNIFE · ${b.unit}`);
        beep(90, 0.1, 0.04, 1, "sine");
        break;
      }
    }
  }
  for (let i = knives.length - 1; i >= 0; i--) if (knives[i].life <= 0) knives.splice(i, 1);

  if (wish.lengthSq() > 1 && player.grounded) {
    stepT -= dt;
    const cadence = player.slide > 0 ? 0.18 : player.sprint ? 0.28 : player.crouch ? 0.52 : 0.4;
    if (stepT <= 0) {
      stepT = cadence;
      const metal = inInterior(player.pos);
      const vol = player.crouch ? 0.012 : player.sprint ? 0.028 : 0.02;
      if (metal) {
        beep(180 + Math.random() * 40, 0.035, vol * 1.15, 1, "triangle");
        setTimeout(() => beep(90, 0.04, vol * 0.5, 1, "sine"), 30);
      } else {
        beep(70 + Math.random() * 18, 0.04, vol, 1, "sine");
        if (player.sprint && Math.random() < 0.22) {
          beep(920 + Math.random() * 280, 0.03, 0.016, 1, "square");
          feed("SNAP · twig");
        }
      }
      if (!metal) {
        const print = new THREE.Mesh(
          new THREE.CircleGeometry(player.sprint ? 0.11 : 0.08, 5),
          new THREE.MeshBasicMaterial({ color: 0x3a2c18, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
        );
        print.rotation.x = -Math.PI / 2;
        print.rotation.z = player.yaw;
        print.position.set(player.pos.x, 0.018, player.pos.z);
        scene.add(print);
        decals.push({ mesh: print });
        if (decals.length > 40) {
          const old = decals.shift();
          scene.remove(old.mesh);
        }
        if (player.sprint || player.slide > 0 || player.prone) {
          const grit = new THREE.Mesh(
            new THREE.SphereGeometry(0.07 + Math.random() * 0.05, 5, 4),
            new THREE.MeshBasicMaterial({ color: 0x7a6040, transparent: true, opacity: 0.32 })
          );
          grit.position.set(player.pos.x + (Math.random() - 0.5) * 0.2, 0.06, player.pos.z + (Math.random() - 0.5) * 0.2);
          scene.add(grit);
          dust.push({ mesh: grit, t: 0.28, rise: 0.25, drift: (Math.random() - 0.5) * 0.3 });
        }
      }
    }
  } else {
    stepT = 0;
  }
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
    if (d.rise) {
      d.mesh.position.y += dt * d.rise;
      d.mesh.position.x += dt * (d.drift || 0);
      d.mesh.scale.addScalar(dt * 0.35);
      d.mesh.material.opacity = Math.max(0, Math.min(0.55, d.t * 0.28));
    } else if (d.mesh.material) {
      d.mesh.material.opacity = Math.max(0, d.t);
    }
    if (d.t <= 0) scene.remove(d.mesh);
  }
  for (let i = dust.length - 1; i >= 0; i--) if (dust[i].t <= 0) dust.splice(i, 1);

  const exDist = player.pos.distanceTo(MAP.extract);
  const doorDist = player.pos.distanceTo(MAP.hangarDoor);
  const live = bots.filter((b) => b.hp > 0).length;
  const nearEx = exDist < 3.2 || doorDist < 2.8;
  const canEx = nearEx && live <= 2;
  const nearSump = MAP.sump && player.pos.distanceTo(new THREE.Vector3(MAP.sump.x, 0, MAP.sump.z)) < 1.8;
  if (nearSump && keys.has("KeyF") && !canEx) {
    MAP.sump.on = !MAP.sump.on;
    MAP.sumpPing = MAP.sump.on ? "open" : "shut";
    keys.delete("KeyF");
    feed(MAP.sump.on ? "SUMP OPEN · crosscut flooded" : "SUMP SHUT");
    beep(MAP.sump.on ? 90 : 140, 0.12, 0.04, 1, "sawtooth");
  }
  const nearFan = MAP.fan && player.pos.distanceTo(new THREE.Vector3(MAP.fan.x, 0, MAP.fan.z)) < 1.8;
  if (nearFan && keys.has("KeyF") && !canEx && !nearSump) {
    MAP.fan.on = !MAP.fan.on;
    keys.delete("KeyF");
    feed(MAP.fan.on ? "FAN ON · vent gale" : "FAN OFF");
    beep(MAP.fan.on ? 80 : 150, 0.14, 0.045, 1, "sawtooth");
  }
  const nearGate = MAP.gate && player.pos.distanceTo(new THREE.Vector3(MAP.gate.x, 0, MAP.gate.z)) < 1.8;
  if (nearGate && keys.has("KeyF") && !canEx && !nearSump && !nearFan) {
    MAP.gate.on = !MAP.gate.on;
    keys.delete("KeyF");
    feed(MAP.gate.on ? "GATE DOWN" : "GATE UP");
    beep(MAP.gate.on ? 70 : 130, 0.1, 0.04, 1, "square");
  }
  const nearBrake = MAP.binBrake && player.pos.distanceTo(new THREE.Vector3(MAP.binBrake.x, 0, MAP.binBrake.z)) < 1.8;
  if (nearBrake && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate) {
    MAP.binBrake.on = !MAP.binBrake.on;
    keys.delete("KeyF");
    feed(MAP.binBrake.on ? "BRAKE SET" : "BRAKE OFF");
    beep(MAP.binBrake.on ? 75 : 140, 0.12, 0.04, 1, "square");
  }
  const nearThick = MAP.thick && player.pos.distanceTo(new THREE.Vector3(MAP.thick.x, 0, MAP.thick.z)) < 1.8;
  if (nearThick && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake) {
    MAP.thick.on = !MAP.thick.on;
    keys.delete("KeyF");
    feed(MAP.thick.on ? "UNDERFLOW OPEN" : "UNDERFLOW SHUT");
    beep(MAP.thick.on ? 90 : 160, 0.12, 0.04, 1, "square");
  }
  const nearBall = MAP.ball && player.pos.distanceTo(new THREE.Vector3(MAP.ball.x, 0, MAP.ball.z)) < 1.8;
  if (nearBall && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick) {
    MAP.ball.on = !MAP.ball.on;
    keys.delete("KeyF");
    feed(MAP.ball.on ? "MILL CLUTCH IN" : "MILL CLUTCH OUT");
    beep(MAP.ball.on ? 80 : 150, 0.14, 0.045, 1, "sawtooth");
  }
  const nearCyc = MAP.cyc && player.pos.distanceTo(new THREE.Vector3(MAP.cyc.x, 0, MAP.cyc.z)) < 1.8;
  if (nearCyc && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall) {
    MAP.cyc.on = !MAP.cyc.on;
    keys.delete("KeyF");
    feed(MAP.cyc.on ? "CYCLONE FEED ON" : "CYCLONE FEED OFF");
    beep(MAP.cyc.on ? 85 : 155, 0.14, 0.045, 1, "sawtooth");
  }
  const nearPress = MAP.press && player.pos.distanceTo(new THREE.Vector3(MAP.press.x, 0, MAP.press.z)) < 1.8;
  if (nearPress && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc) {
    MAP.press.on = !MAP.press.on;
    keys.delete("KeyF");
    feed(MAP.press.on ? "PRESS CLOSED" : "PRESS OPEN");
    beep(MAP.press.on ? 70 : 140, 0.12, 0.04, 1, "square");
  }
  const nearFloat = MAP.float && player.pos.distanceTo(new THREE.Vector3(MAP.float.x, 0, MAP.float.z)) < 1.8;
  if (nearFloat && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress) {
    MAP.float.on = !MAP.float.on;
    keys.delete("KeyF");
    feed(MAP.float.on ? "FLOAT AIR ON" : "FLOAT AIR OFF");
    beep(MAP.float.on ? 95 : 160, 0.14, 0.04, 1, "sawtooth");
  }
  const nearStack = MAP.stack && player.pos.distanceTo(new THREE.Vector3(MAP.stack.x, 0, MAP.stack.z)) < 1.8;
  if (nearStack && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat) {
    MAP.stack.on = !MAP.stack.on;
    keys.delete("KeyF");
    feed(MAP.stack.on ? "STACKER SWING" : "STACKER HOLD");
    beep(MAP.stack.on ? 72 : 140, 0.12, 0.04, 1, "square");
  }

  const nearSlake = MAP.slake && player.pos.distanceTo(new THREE.Vector3(MAP.slake.x, 0, MAP.slake.z)) < 1.8;
  if (nearSlake && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack) {
    MAP.slake.on = !MAP.slake.on;
    keys.delete("KeyF");
    feed(MAP.slake.on ? "SLAKER RUN" : "SLAKER HOLD");
    beep(MAP.slake.on ? 86 : 150, 0.12, 0.04, 1, "sawtooth");
  }
  const nearRope = MAP.rope && player.pos.distanceTo(new THREE.Vector3(MAP.rope.x, 0, MAP.rope.z)) < 1.8;
  if (nearRope && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake) {
    MAP.rope.on = !MAP.rope.on;
    keys.delete("KeyF");
    feed(MAP.rope.on ? "ROPEWAY RUN" : "ROPEWAY HOLD");
    beep(MAP.rope.on ? 64 : 130, 0.12, 0.04, 1, "square");
  }
  const nearSinter = MAP.sinter && player.pos.distanceTo(new THREE.Vector3(MAP.sinter.x, 0, MAP.sinter.z)) < 1.8;
  if (nearSinter && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope) {
    MAP.sinter.on = !MAP.sinter.on;
    keys.delete("KeyF");
    feed(MAP.sinter.on ? "STRAND RUN" : "STRAND HOLD");
    beep(MAP.sinter.on ? 78 : 140, 0.12, 0.04, 1, "sawtooth");
  }
  const nearSample = MAP.sample && player.pos.distanceTo(new THREE.Vector3(MAP.sample.x, 0, MAP.sample.z)) < 1.8;
  if (nearSample && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter) {
    MAP.sample.on = !MAP.sample.on;
    keys.delete("KeyF");
    feed(MAP.sample.on ? "SAMPLER CUT" : "SAMPLER HOLD");
    beep(MAP.sample.on ? 92 : 150, 0.12, 0.04, 1, "square");
  }

  const nearPellet = MAP.pellet && player.pos.distanceTo(new THREE.Vector3(MAP.pellet.x, 0, MAP.pellet.z)) < 1.8;
  if (nearPellet && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample) {
    MAP.pellet.on = !MAP.pellet.on;
    keys.delete("KeyF");
    feed(MAP.pellet.on ? "PELLET DISC RUN" : "PELLET DISC HOLD");
    beep(MAP.pellet.on ? 74 : 138, 0.12, 0.04, 1, "sawtooth");
  }
  const nearClar = MAP.clar && player.pos.distanceTo(new THREE.Vector3(MAP.clar.x, 0, MAP.clar.z)) < 1.8;
  if (nearClar && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet) {
    MAP.clar.on = !MAP.clar.on;
    keys.delete("KeyF");
    feed(MAP.clar.on ? "CLARIFIER RUN" : "CLARIFIER HOLD");
    beep(MAP.clar.on ? 88 : 146, 0.12, 0.04, 1, "square");
  }

  const nearSilo = MAP.silo && player.pos.distanceTo(new THREE.Vector3(MAP.silo.x, 0, MAP.silo.z)) < 1.8;
  if (nearSilo && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar) {
    MAP.silo.on = !MAP.silo.on;
    keys.delete("KeyF");
    feed(MAP.silo.on ? "SILO SCREW RUN" : "SILO SCREW HOLD");
    beep(MAP.silo.on ? 82 : 142, 0.12, 0.04, 1, "square");
  }
  const nearJig = MAP.jig && player.pos.distanceTo(new THREE.Vector3(MAP.jig.x, 0, MAP.jig.z)) < 1.8;
  if (nearJig && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo) {
    MAP.jig.on = !MAP.jig.on;
    keys.delete("KeyF");
    feed(MAP.jig.on ? "JIG RUN" : "JIG HOLD");
    beep(MAP.jig.on ? 88 : 146, 0.12, 0.04, 1, "square");
  }
  const nearCool = MAP.cool && player.pos.distanceTo(new THREE.Vector3(MAP.cool.x, 0, MAP.cool.z)) < 1.8;
  if (nearCool && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig) {
    MAP.cool.on = !MAP.cool.on;
    keys.delete("KeyF");
    feed(MAP.cool.on ? "COOLER RUN" : "COOLER HOLD");
    beep(MAP.cool.on ? 70 : 136, 0.12, 0.04, 1, "sawtooth");
  }

  const nearBag = MAP.bag && player.pos.distanceTo(new THREE.Vector3(MAP.bag.x, 0, MAP.bag.z)) < 1.8;
  if (nearBag && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool) {
    MAP.bag.on = !MAP.bag.on;
    feed(MAP.bag.on ? "BAGHOUSE RUN" : "BAGHOUSE HOLD");
    beep(MAP.bag.on ? 140 : 90, 0.06, 0.04);
    keys.delete("KeyF");
  }
  const nearDry = MAP.dry && player.pos.distanceTo(new THREE.Vector3(MAP.dry.x, 0, MAP.dry.z)) < 1.8;
  if (nearDry && keys.has("KeyF") && !canEx && !nearBag && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool) {
    MAP.dry.on = !MAP.dry.on;
    feed(MAP.dry.on ? "DRYER RUN" : "DRYER HOLD");
    beep(MAP.dry.on ? 120 : 80, 0.07, 0.04);
    keys.delete("KeyF");
  }

  const nearLoco = MAP.loco && player.pos.distanceTo(new THREE.Vector3(MAP.loco.x, 0, MAP.loco.z)) < 1.8;
  if (nearLoco && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry) {
    MAP.loco.on = !MAP.loco.on;
    keys.delete("KeyF");
    feed(MAP.loco.on ? "LOCO RUN" : "LOCO HOLD");
    beep(MAP.loco.on ? 64 : 128, 0.1, 0.04, 1, "sawtooth");
  }
  const nearAgit = MAP.agit && player.pos.distanceTo(new THREE.Vector3(MAP.agit.x, 0, MAP.agit.z)) < 1.8;
  if (nearAgit && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco) {
    MAP.agit.on = !MAP.agit.on;
    keys.delete("KeyF");
    feed(MAP.agit.on ? "AGITATOR RUN" : "AGITATOR HOLD");
    beep(MAP.agit.on ? 102 : 150, 0.08, 0.04, 1, "square");
  }
  const nearScrub = MAP.scrub && player.pos.distanceTo(new THREE.Vector3(MAP.scrub.x, 0, MAP.scrub.z)) < 1.8;
  if (nearScrub && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit) {
    MAP.scrub.on = !MAP.scrub.on;
    keys.delete("KeyF");
    feed(MAP.scrub.on ? "SCRUBBER RUN" : "SCRUBBER HOLD");
    beep(MAP.scrub.on ? 118 : 86, 0.08, 0.04, 1, "square");
  }
  const nearFace = MAP.face && player.pos.distanceTo(new THREE.Vector3(MAP.face.x, 0, MAP.face.z)) < 1.8;

  const nearEw = MAP.ew && player.pos.distanceTo(new THREE.Vector3(MAP.ew.x, 0, MAP.ew.z)) < 1.8;
  if (nearEw && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub) {
    MAP.ew.on = !MAP.ew.on;
    keys.delete("KeyF");
    feed(MAP.ew.on ? "EW CELLS RUN" : "EW CELLS HOLD");
    beep(MAP.ew.on ? 124 : 84, 0.08, 0.04, 1, "square");
  }
  const nearCone = MAP.cone && player.pos.distanceTo(new THREE.Vector3(MAP.cone.x, 0, MAP.cone.z)) < 1.8;
  if (nearCone && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw) {
    MAP.cone.on = !MAP.cone.on;
    keys.delete("KeyF");
    feed(MAP.cone.on ? "CONE RUN" : "CONE HOLD");
    beep(MAP.cone.on ? 78 : 62, 0.09, 0.05, 1, "sawtooth");
  }
  const nearClas = MAP.clas && player.pos.distanceTo(new THREE.Vector3(MAP.clas.x, 0, MAP.clas.z)) < 1.8;
  if (nearClas && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw && !nearCone) {
    MAP.clas.on = !MAP.clas.on;
    keys.delete("KeyF");
    feed(MAP.clas.on ? "CLASSIFIER RUN" : "CLASSIFIER HOLD");
    beep(MAP.clas.on ? 110 : 78, 0.08, 0.04, 1, "square");
  }
  const nearMags = MAP.mags && player.pos.distanceTo(new THREE.Vector3(MAP.mags.x, 0, MAP.mags.z)) < 1.8;
  if (nearMags && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw && !nearCone && !nearClas) {
    MAP.mags.on = !MAP.mags.on;
    keys.delete("KeyF");
    feed(MAP.mags.on ? "MAG DRUM RUN" : "MAG DRUM HOLD");
    beep(MAP.mags.on ? 92 : 64, 0.09, 0.04, 1, "sawtooth");
  }

  const nearRod = MAP.rod && player.pos.distanceTo(new THREE.Vector3(MAP.rod.x, 0, MAP.rod.z)) < 1.8;
  if (nearRod && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw && !nearCone && !nearClas && !nearMags) {
    MAP.rod.on = !MAP.rod.on;
    keys.delete("KeyF");
    feed(MAP.rod.on ? "ROD MILL RUN" : "ROD MILL HOLD");
    beep(MAP.rod.on ? 74 : 58, 0.1, 0.05, 1, "sawtooth");
  }
  const nearSx = MAP.sx && player.pos.distanceTo(new THREE.Vector3(MAP.sx.x, 0, MAP.sx.z)) < 1.8;
  if (nearSx && keys.has("KeyF") && !canEx && !nearSump && !nearFan && !nearGate && !nearBrake && !nearThick && !nearBall && !nearCyc && !nearPress && !nearFloat && !nearStack && !nearSlake && !nearRope && !nearSinter && !nearSample && !nearPellet && !nearClar && !nearSilo && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw && !nearCone && !nearClas && !nearMags && !nearRod) {
    MAP.sx.on = !MAP.sx.on;
    keys.delete("KeyF");
    feed(MAP.sx.on ? "SX SETTLER RUN" : "SX SETTLER HOLD");
    beep(MAP.sx.on ? 124 : 86, 0.08, 0.04, 1, "square");
  }
  if (nearFace && keys.has("KeyF") && !MAP.face.armed && !(MAP.fall && MAP.fall.live) && !canEx && !nearJig && !nearCool && !nearBag && !nearDry && !nearLoco && !nearAgit && !nearScrub && !nearEw && !nearCone && !nearClas && !nearMags && !nearRod && !nearSx) {
    MAP.face.armed = true;
    MAP.face.fuse = 4.2;
    keys.delete("KeyF");
    feed("FACE ARMED");
    beep(180, 0.16, 0.05, 1, "square");
  }
  player.extracting = canEx && (keys.has("KeyF") || (player.extracting && nearEx));
  if (!wasExtracting && player.extracting) {
    feed("NET · hostiles rushing pad");
    beep(90, 0.08, 0.03, 1, "square");
  }
  if (wasExtracting && !player.extracting && player.extract > 0.4 && player.extract < 19.5) {
    feed("HOLD BROKEN");
    beep(110, 0.08, 0.03, 1, "square");
  }
  wasExtracting = player.extracting;
  if (MAP.hangarDoorMesh) {
    const open = player.extracting && doorDist < 3.4 ? 1 : 0;
    const prevY = MAP.hangarDoorMesh.position.y;
    MAP.hangarDoorMesh.position.y += ((open ? 4.2 : 1.7) - MAP.hangarDoorMesh.position.y) * Math.min(1, dt * 2.2);
    const dy = MAP.hangarDoorMesh.position.y - prevY;
    if (dy > 0.004 && Math.random() < dt * 18) spawnSlabDust(dy);
    if (dy > 0.01 && Math.random() < dt * 3) beep(52, 0.08, 0.025, 1, "sine");
    if (dy > 0.008) {
      camera.position.y += (Math.random() - 0.5) * 0.018;
      camera.rotation.z += (Math.random() - 0.5) * 0.008;
    }
  }
  const exEl = document.getElementById("extract");
  if (player.extracting) {
    if (player.extract < 0.05) spawnExtractFlare();
    sirenT -= dt;
    if (sirenT <= 0) {
      sirenT = 1.15;
      beep(180, 0.18, 0.035, 1, "sine");
      setTimeout(() => beep(140, 0.22, 0.03, 1, "sine"), 160);
    }
    player.extract = Math.min(20, player.extract + dt);
    extractTick -= dt;
    if (extractTick <= 0) {
      extractTick = player.extract > 14 ? 0.45 : 0.9;
      beep(260 + player.extract * 8, 0.05, 0.03, 1, "sine");
    }
    exEl.style.display = "block";
    document.getElementById("exfill").style.width = `${(player.extract / 20) * 100}%`;
    if (player.extract >= 8 && !player.steadyCall) {
      player.steadyCall = true;
      beep(300, 0.06, 0.024, 1, "sine");
      setTimeout(() => beep(340, 0.07, 0.02, 1, "triangle"), 80);
      feed("NET · HOLD STEADY");
      showPlate("STEADY");
    }
    if (player.extract >= 10 && !player.inbound) {
      player.inbound = true;
      beep(70, 0.2, 0.03, 1, "sine");
      setTimeout(() => beep(55, 0.25, 0.025, 1, "sine"), 180);
      beep(520, 0.07, 0.03, 1, "sine");
      setTimeout(() => beep(640, 0.09, 0.028, 1, "triangle"), 90);
      feed("NET · bird inbound");
    }
    if (player.extract >= 15 && !player.wheels) {
      player.wheels = true;
      beep(80, 0.16, 0.035, 1, "sine");
      setTimeout(() => beep(120, 0.12, 0.03, 1, "triangle"), 110);
      setTimeout(() => beep(90, 0.18, 0.028, 1, "sine"), 240);
      feed("NET · wheels down");
    }
    if (player.extract >= 18 && !player.finalCall) {
      player.finalCall = true;
      beep(640, 0.07, 0.035, 1, "sine");
      setTimeout(() => beep(880, 0.09, 0.03, 1, "triangle"), 80);
      setTimeout(() => beep(70, 0.22, 0.03, 1, "sine"), 160);
      feed("NET · FINAL · flare the pad");
      showPlate("FINAL");
      if (MAP.extractBeacon) MAP.extractBeacon.material.opacity = 0.85;
    }
    if (player.extract >= 19.2 && !player.liftCall) {
      player.liftCall = true;
      beep(90, 0.18, 0.032, 1, "sine");
      setTimeout(() => beep(140, 0.12, 0.028, 1, "triangle"), 90);
      feed("NET · LIFT · hold the slab");
      showPlate("LIFT");
    }
    if (player.inbound && Math.random() < dt * 3.2) {
      beep(48, 0.08, 0.018, 1, "sine");
    }
    if (player.extract >= 20) {
      completeExtract();
    }
  } else {
    player.extract = Math.max(0, player.extract - dt * 0.5);
    exEl.style.display = player.extract > 0.1 ? "block" : "none";
    document.getElementById("exfill").style.width = `${(player.extract / 20) * 100}%`;
  }
  const exsec = document.getElementById("exsec");
  if (exsec) {
    if (player.extract > 0.1) {
      exsec.style.display = "block";
      exsec.textContent = player.extracting
        ? `HOLD · ${Math.max(0, 20 - player.extract).toFixed(1)}s`
        : "HOLD BROKEN";
    } else exsec.style.display = "none";
  }

  if (player.hp <= 0 && player.dead <= 0) {
    player.dead = 2.4;
    player.deaths++;
    spawnDeathPack(player.pos);
    feed("DROPPED · death cam");
  }

  // Ammo crate restock
  const ammoDist = player.pos.distanceTo(MAP.ammo);
  if (ammoDist < 2.2 && (keys.has("KeyF") || ammoDist < 1.35)) {
    let filled = false;
    for (let i = 0; i < LOADOUT.length; i++) {
      const wpn = LOADOUT[i];
      const pack = player.ammo[i];
      if (pack.res < wpn.reserve || pack.mag < wpn.mag) {
        pack.mag = wpn.mag;
        pack.res = wpn.reserve;
        filled = true;
      }
    }
    if (player.nades < 3) {
      player.nades = 3;
      filled = true;
    }
    if (player.knives < 3) {
      player.knives = 3;
      filled = true;
    }
    if (player.smokes < 2) {
      player.smokes = 2;
      filled = true;
    }
    if (filled) {
      beep(520, 0.08, 0.04, 1, "sine");
      beep(640, 0.1, 0.035, 1, "sine");
      setTimeout(() => beep(180, 0.06, 0.03, 1, "triangle"), 280);
      feed("RESTOCK · crate", "ammo");
      floatLoot("+AMMO");
      keys.delete("KeyF");
      if (MAP.ammoLid) MAP.ammoLidOpen = 1.15;
      for (let i = 0; i < 5; i++) {
        const puff = new THREE.Mesh(
          new THREE.SphereGeometry(0.08 + Math.random() * 0.07, 5, 4),
          new THREE.MeshBasicMaterial({ color: 0x6a8a50, transparent: true, opacity: 0.35 })
        );
        puff.position.set(
          MAP.ammo.x + (Math.random() - 0.5) * 0.8,
          1.2,
          MAP.ammo.z + (Math.random() - 0.5) * 0.8
        );
        scene.add(puff);
        dust.push({ mesh: puff, t: 0.45 + Math.random() * 0.2, rise: 0.5, drift: (Math.random() - 0.5) * 0.3 });
      }
    }
  }
  if (MAP.ammoRing) {
    MAP.ammoRing.material.opacity = 0.55 + Math.sin(now * 0.006) * 0.25;
    MAP.ammoRing.rotation.z += dt * 0.4;
  }

  // Med crate pack
  const medDist = player.pos.distanceTo(MAP.med);
  if (medDist < 2.1 && keys.has("KeyF") && player.hp < 100 && player.healT <= 0 && !player.extracting) {
    player.healT = 1.35;
    keys.delete("KeyF");
  }
  if (player.healT > 0) {
    player.healT -= dt;
    player.hp = Math.min(100, player.hp + dt * 38);
    if (player.healT <= 0) {
      beep(420, 0.08, 0.035, 1, "sine");
      if (player.sips < 3) player.sips = 3;
      if (player.wraps < 2) player.wraps = 2;
      feed("PACK · vitals", "ammo");
      floatLoot("+VITALS");
    }
  }
  if (MAP.medRing) {
    MAP.medRing.material.opacity = 0.4 + Math.sin(now * 0.007) * 0.2;
    MAP.medRing.rotation.z -= dt * 0.35;
  }

  // Loot downed hostiles
  let lootBot = null;
  for (const b of bots) {
    if (b.hp > 0 || b.looted) continue;
    if (b.pos.distanceTo(player.pos) < 1.7) {
      lootBot = b;
      break;
    }
  }
  if (lootBot && (keys.has("KeyF") || lootBot.pos.distanceTo(player.pos) < 1.05) && !player.extracting && medDist >= 2.1 && ammoDist >= 2.2) {
    lootBot.looted = true;
    if (lootBot.glow) lootBot.glow.material.opacity = 0;
    keys.delete("KeyF");
    const pack = player.ammo[player.gun];
    const wpn = LOADOUT[player.gun];
    pack.res = Math.min(wpn.reserve + 12, pack.res + 8);
    if (player.nades < 4) player.nades++;
    player.hp = Math.min(100, player.hp + 8);
    beep(300, 0.06, 0.03, 1, "triangle");
    feed("LOOT · pack + nade", "ammo");
    floatLoot("+PACK");
  }

  for (const pk of dropPacks) {
    if (pk.looted) continue;
    pk.t -= dt;
    if (pk.glow) pk.glow.material.opacity = 0.18 + Math.sin(now * 0.008) * 0.14;
    const dpk = Math.hypot(pk.mesh.position.x - player.pos.x, pk.mesh.position.z - player.pos.z);
    if (dpk < 1.4 && !player.extracting) {
      pk.looted = true;
      pk.mesh.visible = false;
      if (pk.glow) pk.glow.visible = false;
      const pack = player.ammo[player.gun];
      const wpn = LOADOUT[player.gun];
      pack.res = Math.min(wpn.reserve + 16, pack.res + 10);
      if (player.nades < 4) player.nades++;
      player.hp = Math.min(100, player.hp + 6);
      beep(280, 0.06, 0.03, 1, "triangle");
      feed("PACK · field drop");
      floatLoot("+DROP");
    }
    if (pk.t <= 0) {
      pk.looted = true;
      scene.remove(pk.mesh);
      if (pk.glow) scene.remove(pk.glow);
    }
  }

  for (const il of illums) {
    il.t -= dt;
    if (il.star) il.star.position.y -= dt * 0.12;
    if (il.light) {
      il.light.position.y = il.star ? il.star.position.y : il.light.position.y;
      il.light.intensity = 2.2 + Math.sin(now * 0.01) * 0.8 + il.t * 0.12;
    }
    if (il.t <= 0) {
      scene.remove(il.light);
      scene.remove(il.star);
    }
  }
  for (let i = illums.length - 1; i >= 0; i--) if (illums[i].t <= 0) illums.splice(i, 1);

  const w = LOADOUT[player.gun];
  const a = player.ammo[player.gun];
  const ammoEl = document.getElementById("ammo");
  ammoEl.innerHTML = `${a.mag} <small>/ ${a.res} · ${w.name}${player.jam > 0 ? " · JAM" : player.reloading > 0 ? " · REL" : a.mag <= 0 ? " · LOCK" : a.res <= 0 ? " · RES" : ""}${player.semi && w.auto ? " · SEMI" : w.auto ? " · AUTO" : ""}</small>`;
  ammoEl.classList.toggle("low", a.mag <= Math.max(2, Math.floor(w.mag * 0.2)));
  if (a.res <= 0 && a.mag <= w.mag * 0.35 && !player.resWarn) {
    player.resWarn = true;
    feed("RESERVE DRY");
    beep(200, 0.06, 0.02, 1, "square");
    showPlate("RES 0");
  }
  if (a.res > 0) player.resWarn = false;
  document.getElementById("hpfill").style.width = `${Math.max(0, player.hp)}%`;
  document.getElementById("hud").classList.toggle("hurt", player.hp < 35 && player.hp > 0);
  if (player.hp > 0 && player.hp < 22 && Math.random() < dt * 0.35) {
    const b = document.getElementById("banner");
    if (b && !player.extracting) {
      b.textContent = "LOW VITALS";
      setTimeout(() => {
        if (b.textContent === "LOW VITALS") b.textContent = "";
      }, 420);
    }
  }
  document.getElementById("hud").classList.toggle("supp", player.suppress > 0.25);
  const smearEl = document.getElementById("smear");
  if (smearEl) smearEl.style.opacity = String(Math.min(0.7, player.smear * 0.45));
  const stamEl = document.getElementById("stam");
  const stamFill = document.getElementById("stamfill");
  if (stamFill) stamFill.style.width = `${Math.max(0, player.stam)}%`;
  if (stamEl) {
    stamEl.classList.toggle("low", player.stam < 35 && player.stam > 8);
    stamEl.classList.toggle("empty", player.stam <= 8);
  }
  const nadeq = document.getElementById("nadeq");
  if (nadeq) nadeq.textContent = `G × ${player.nades}  J × ${player.smokes}  Y × ${player.flashes}  H × ${player.sips}  4 × ${player.wraps}  U × ${player.illums}  K × ${player.stakes}  O × ${player.overwatch}  5 × ${player.chems}  7 × ${player.satch}  8 × ${player.radios}  9 × ${player.beacons}  0 × ${player.mirrors}  , × ${player.strobes}  Xk × ${player.knives}`;
  const streakEl = document.getElementById("streak");
  if (streakEl) {
    if (player.streak >= 2 && player.hp > 0) {
      streakEl.textContent = `STREAK × ${player.streak}`;
      streakEl.classList.add("show");
    } else streakEl.classList.remove("show");
  }
  player.spotted = Math.max(0, player.spotted - dt);
  const spotEl = document.getElementById("spot");
  if (spotEl) {
    if ((player.contactT || 0) > 0.15) {
      spotEl.textContent = "CONTACT";
      spotEl.classList.add("show");
    } else {
      spotEl.textContent = "SPOTTED";
      spotEl.classList.toggle("show", player.spotted > 0.15);
    }
  }
  const aimtag = document.getElementById("aimtag");
  if (aimtag) {
    let best = null;
    let bestDot = 0.96;
    const look = lookDir();
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const to = b.pos.clone().setY(1.4).sub(player.pos);
      const dist = to.length();
      to.normalize();
      const d = look.dot(to);
      if (d > bestDot && dist < 40) {
        bestDot = d;
        best = { b, dist };
      }
    }
    if (best && player.ads) {
      aimtag.style.opacity = "0.85";
      aimtag.textContent = `${best.b.unit || "HOSTILE"}  ${best.dist.toFixed(0)}m  ${Math.max(0, Math.round(best.b.hp))}`;
      const crx = document.getElementById("cross");
      if (crx) crx.style.filter = "hue-rotate(-20deg) saturate(1.4)";
      if (best.b.hp < 42 && player.hp > 0) {
        player.aimBeatT -= dt;
        if (player.aimBeatT <= 0) {
          player.aimBeatT = 0.48 + (best.b.hp / 42) * 0.28;
          beep(54, 0.05, 0.02, 1, "sine");
          setTimeout(() => beep(42, 0.05, 0.016, 1, "sine"), 70);
        }
      }
    } else if (player.binos) {
      const origin = player.pos.clone();
      origin.y = player.prone ? 0.42 : player.crouch ? 1.15 : 1.62;
      const dir = look;
      const hit = hitscan(origin, dir, bots);
      const block = rayVsCrates(origin, dir, hit ? hit.dist : 80);
      const gDist = origin.y > 0.08 && dir.y < -0.04 ? origin.y / -dir.y : 80;
      const rng = block ? block.dist : hit ? hit.dist : Math.min(80, gDist);
      aimtag.style.opacity = "0.8";
      aimtag.textContent = `GLASS  ${rng.toFixed(0)}m`;
    } else {
      const crx = document.getElementById("cross");
      if (crx) crx.style.filter = "";
      aimtag.style.opacity = "0";
      aimtag.textContent = "";
    }
  }
  const modeEl = document.getElementById("mode");
  if (modeEl) modeEl.textContent = player.semi || !w.auto ? "SEMI" : "AUTO";
  const threatEl = document.getElementById("threat");
  if (threatEl) {
    let near = 99;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      near = Math.min(near, b.pos.distanceTo(player.pos));
    }
    threatEl.textContent = near < 90 ? `THREAT ${near.toFixed(0)}m` : "CLEAR";
    threatEl.style.opacity = near < 18 ? "0.85" : "0.45";
    threatEl.style.color = near < 12 ? "#e07040" : "#d8e0d0";
  }
  const stance = document.getElementById("stance");
  if (stance) {
    const st = player.dive > 0 ? "DIVE" : player.slide > 0 ? "SLIDE" : player.prone ? "PRONE" : player.vault > 0 ? "VAULT" : player.crouch ? "CROUCH" : player.sprint ? "SPRINT" : "STAND";
    stance.textContent = st;
    if (st !== lastStance) {
      if (st === "PRONE" || lastStance === "PRONE" || st === "CROUCH" || lastStance === "CROUCH") {
        beep(90, 0.04, 0.018, 1, "sine");
      }
      beep(130, 0.04, 0.012, 1, "triangle");
      if (st === "PRONE") player.gritMag = true;
      lastStance = st;
    }
  }
  const rangeEl = document.getElementById("range");
  if (rangeEl) {
    const nearest = exDist < doorDist ? exDist : doorDist;
    const tag = exDist < doorDist ? "PAD" : "DOOR";
    rangeEl.textContent = `${tag} ${nearest.toFixed(0)}m · ${live}H`;
  }
  const prompt = document.getElementById("prompt");
  if (prompt) {
    if (ammoDist < 2.2) prompt.textContent = "F · RESTOCK";
    else if (medDist < 2.1 && player.hp < 100) prompt.textContent = player.healT > 0 ? "PACKING…" : "F · PACK VITALS";
    else if (player.wrap > 0) prompt.textContent = "WRAP…";
    else if (player.jam > 0) prompt.textContent = "R · CLEAR JAM";
    else if (lootBot) prompt.textContent = "F · LOOT";
    else if (nearEx && live <= 2) prompt.textContent = "HOLD F · EXTRACT";
    else if (nearEx) prompt.textContent = `${live} HOSTILES · CLEAR FIRST`;
    else if (MAP.sump && player.pos.distanceTo(new THREE.Vector3(MAP.sump.x, 0, MAP.sump.z)) < 1.8) prompt.textContent = MAP.sump.on ? "F · DRAIN SUMP" : "F · FLOOD CROSSCUT";
    else if (MAP.fan && player.pos.distanceTo(new THREE.Vector3(MAP.fan.x, 0, MAP.fan.z)) < 1.8) prompt.textContent = MAP.fan.on ? "F · KILL FAN" : "F · START FAN";
    else if (MAP.gate && player.pos.distanceTo(new THREE.Vector3(MAP.gate.x, 0, MAP.gate.z)) < 1.8) prompt.textContent = MAP.gate.on ? "F · RAISE GATE" : "F · DROP GATE";
    else if (MAP.binBrake && player.pos.distanceTo(new THREE.Vector3(MAP.binBrake.x, 0, MAP.binBrake.z)) < 1.8) prompt.textContent = MAP.binBrake.on ? "F · RELEASE BRAKE" : "F · SET BRAKE";
    else if (MAP.thick && player.pos.distanceTo(new THREE.Vector3(MAP.thick.x, 0, MAP.thick.z)) < 1.8) prompt.textContent = MAP.thick.on ? "F · SHUT UNDERFLOW" : "F · OPEN UNDERFLOW";
    else if (MAP.ball && player.pos.distanceTo(new THREE.Vector3(MAP.ball.x, 0, MAP.ball.z)) < 1.8) prompt.textContent = MAP.ball.on ? "F · CLUTCH OUT" : "F · CLUTCH IN";
    else if (MAP.cyc && player.pos.distanceTo(new THREE.Vector3(MAP.cyc.x, 0, MAP.cyc.z)) < 1.8) prompt.textContent = MAP.cyc.on ? "F · STOP FEED" : "F · START FEED";
    else if (MAP.press && player.pos.distanceTo(new THREE.Vector3(MAP.press.x, 0, MAP.press.z)) < 1.8) prompt.textContent = MAP.press.on ? "F · OPEN PRESS" : "F · CLOSE PRESS";
    else if (MAP.float && player.pos.distanceTo(new THREE.Vector3(MAP.float.x, 0, MAP.float.z)) < 1.8) prompt.textContent = MAP.float.on ? "F · KILL AIR" : "F · FLOAT AIR";
    else if (MAP.stack && player.pos.distanceTo(new THREE.Vector3(MAP.stack.x, 0, MAP.stack.z)) < 1.8) prompt.textContent = MAP.stack.on ? "F · HOLD STACKER" : "F · SWING STACKER";
    else if (MAP.slake && player.pos.distanceTo(new THREE.Vector3(MAP.slake.x, 0, MAP.slake.z)) < 1.8) prompt.textContent = MAP.slake.on ? "F · HOLD SLAKER" : "F · RUN SLAKER";
    else if (MAP.rope && player.pos.distanceTo(new THREE.Vector3(MAP.rope.x, 0, MAP.rope.z)) < 1.8) prompt.textContent = MAP.rope.on ? "F · HOLD ROPEWAY" : "F · RUN ROPEWAY";
    else if (MAP.sinter && player.pos.distanceTo(new THREE.Vector3(MAP.sinter.x, 0, MAP.sinter.z)) < 1.8) prompt.textContent = MAP.sinter.on ? "F · HOLD STRAND" : "F · RUN STRAND";
    else if (MAP.sample && player.pos.distanceTo(new THREE.Vector3(MAP.sample.x, 0, MAP.sample.z)) < 1.8) prompt.textContent = MAP.sample.on ? "F · HOLD SAMPLER" : "F · CUT SAMPLE";
    else if (MAP.pellet && player.pos.distanceTo(new THREE.Vector3(MAP.pellet.x, 0, MAP.pellet.z)) < 1.8) prompt.textContent = MAP.pellet.on ? "F · HOLD DISC" : "F · RUN DISC";
    else if (MAP.clar && player.pos.distanceTo(new THREE.Vector3(MAP.clar.x, 0, MAP.clar.z)) < 1.8) prompt.textContent = MAP.clar.on ? "F · HOLD CLARIFIER" : "F · RUN CLARIFIER";
    else if (MAP.silo && player.pos.distanceTo(new THREE.Vector3(MAP.silo.x, 0, MAP.silo.z)) < 1.8) prompt.textContent = MAP.silo.on ? "F · HOLD SCREW" : "F · RUN SCREW";
    else if (MAP.jig && player.pos.distanceTo(new THREE.Vector3(MAP.jig.x, 0, MAP.jig.z)) < 1.8) prompt.textContent = MAP.jig.on ? "F · HOLD JIG" : "F · RUN JIG";
    else if (MAP.cool && player.pos.distanceTo(new THREE.Vector3(MAP.cool.x, 0, MAP.cool.z)) < 1.8) prompt.textContent = MAP.cool.on ? "F · HOLD COOLER" : "F · RUN COOLER";
    else if (MAP.bag && player.pos.distanceTo(new THREE.Vector3(MAP.bag.x, 0, MAP.bag.z)) < 1.8) prompt.textContent = MAP.bag.on ? "F · HOLD BAGHOUSE" : "F · RUN BAGHOUSE";
    else if (MAP.dry && player.pos.distanceTo(new THREE.Vector3(MAP.dry.x, 0, MAP.dry.z)) < 1.8) prompt.textContent = MAP.dry.on ? "F · HOLD DRYER" : "F · RUN DRYER";
    else if (MAP.loco && player.pos.distanceTo(new THREE.Vector3(MAP.loco.x, 0, MAP.loco.z)) < 1.8) prompt.textContent = MAP.loco.on ? "F · HOLD LOCO" : "F · RUN LOCO";
    else if (MAP.agit && player.pos.distanceTo(new THREE.Vector3(MAP.agit.x, 0, MAP.agit.z)) < 1.8) prompt.textContent = MAP.agit.on ? "F · HOLD AGITATOR" : "F · RUN AGITATOR";
    else if (MAP.scrub && player.pos.distanceTo(new THREE.Vector3(MAP.scrub.x, 0, MAP.scrub.z)) < 1.8) prompt.textContent = MAP.scrub.on ? "F · HOLD SCRUBBER" : "F · RUN SCRUBBER";
    else if (MAP.ew && player.pos.distanceTo(new THREE.Vector3(MAP.ew.x, 0, MAP.ew.z)) < 1.8) prompt.textContent = MAP.ew.on ? "F · HOLD EW CELLS" : "F · RUN EW CELLS";
    else if (MAP.cone && player.pos.distanceTo(new THREE.Vector3(MAP.cone.x, 0, MAP.cone.z)) < 1.8) prompt.textContent = MAP.cone.on ? "F · HOLD CONE" : "F · RUN CONE";
    else if (MAP.clas && player.pos.distanceTo(new THREE.Vector3(MAP.clas.x, 0, MAP.clas.z)) < 1.8) prompt.textContent = MAP.clas.on ? "F · HOLD CLASSIFIER" : "F · RUN CLASSIFIER";
    else if (MAP.mags && player.pos.distanceTo(new THREE.Vector3(MAP.mags.x, 0, MAP.mags.z)) < 1.8) prompt.textContent = MAP.mags.on ? "F · HOLD MAGNET" : "F · RUN MAGNET";
    else if (MAP.rod && player.pos.distanceTo(new THREE.Vector3(MAP.rod.x, 0, MAP.rod.z)) < 1.8) prompt.textContent = MAP.rod.on ? "F · HOLD ROD MILL" : "F · RUN ROD MILL";
    else if (MAP.sx && player.pos.distanceTo(new THREE.Vector3(MAP.sx.x, 0, MAP.sx.z)) < 1.8) prompt.textContent = MAP.sx.on ? "F · HOLD SX" : "F · RUN SX";
    else if (MAP.face && player.pos.distanceTo(new THREE.Vector3(MAP.face.x, 0, MAP.face.z)) < 1.8) prompt.textContent = MAP.face.armed ? "FUSE LIVE" : (MAP.fall && MAP.fall.live) ? "FACE DOWN" : "F · ARM FACE";
    else prompt.textContent = "";
  }
  const rel = document.getElementById("relbar");
  if (rel) {
    if (player.reloading > 0) {
      const wpn = LOADOUT[player.gun];
      rel.style.display = "block";
      rel.querySelector(".fill").style.width = `${(1 - player.reloading / wpn.reload) * 100}%`;
    } else rel.style.display = "none";
  }
  if (MAP.extractBeacon) {
    MAP.extractBeacon.material.opacity = 0.08 + Math.sin(now * 0.003) * 0.05 + (player.extracting ? 0.12 : 0);
    MAP.extractBeacon.rotation.y += dt * 0.4;
  }
  document.getElementById("hud").classList.toggle("ads", player.ads);
  const gap = 6 + (player.sprint ? 10 : 0) + (wish.lengthSq() > 0 ? 6 : 0) + player.burst * 1.4 - (player.ads ? 8 : 0);
  const gpx = Math.max(2, gap);
  const cr = document.getElementById("cross");
  if (cr) {
    const n = cr.querySelector(".n");
    const s = cr.querySelector(".s");
    const e = cr.querySelector(".e");
    const w = cr.querySelector(".w");
    if (n) n.style.top = `${-8 - gpx}px`;
    if (s) s.style.bottom = `${-8 - gpx}px`;
    if (e) e.style.right = `${-8 - gpx}px`;
    if (w) w.style.left = `${-8 - gpx}px`;
  }
  if (MAP.extractRing) {
    const pulse = player.extracting ? 0.7 + Math.sin(now * 0.012) * 0.3 : 0.45;
    MAP.extractRing.material.opacity = pulse;
    MAP.extractRing.scale.setScalar(1 + (player.extracting ? Math.sin(now * 0.008) * 0.06 : 0));
  }
  if (player.hp < 35 && player.hp > 0) {
    heartT -= dt;
    if (heartT <= 0) {
      heartT = 0.55 + (player.hp / 35) * 0.25;
      beep(62, 0.06, 0.035, 1, "sine");
      setTimeout(() => beep(48, 0.07, 0.028, 1, "sine"), 90);
      if (player.hp < 22) beep(180 + Math.random() * 40, 0.12, 0.012, 1, "sine");
    }
  }
  if (tinnitus > 0.4 && Math.random() < dt * 6) beep(2400 + Math.random() * 400, 0.04, 0.012 * tinnitus, 1, "sine");
  const pips = document.querySelectorAll("#dirs .pip");
  for (const p of pips) p.style.opacity = "0";
  for (let i = 0; i < dirHits.length; i++) {
    dirHits[i].t -= dt;
    const pip = pips[i % pips.length];
    if (!pip) continue;
    const ang = dirHits[i].ang;
    pip.style.transform = `rotate(${(ang * 180) / Math.PI}deg) translateY(-54px)`;
    pip.style.opacity = String(Math.max(0, dirHits[i].t));
  }
  for (let i = dirHits.length - 1; i >= 0; i--) if (dirHits[i].t <= 0) dirHits.splice(i, 1);

  for (const s of shells) {
    s.vel.y -= 14 * dt;
    s.mesh.position.addScaledVector(s.vel, dt);
    s.mesh.rotation.x += dt * 12;
    s.mesh.rotation.z += dt * 8;
    s.life -= dt;
    if (s.mesh.position.y < 0.03) {
      if (!s._ping && s.vel.y < -1) {
        s._ping = true;
        beep(980, 0.025, 0.012, 1, "triangle");
      }
      s.mesh.position.y = 0.03;
      s.vel.y *= -0.2;
      s.vel.x *= 0.5;
      s.vel.z *= 0.5;
    }
    if (s.life <= 0) {
      if (s.mesh.position.y < 0.08 && casingPiles.length < 48) {
        const pile = new THREE.Mesh(
          new THREE.BoxGeometry(0.018, 0.01, 0.03),
          new THREE.MeshBasicMaterial({ color: 0xb8922a, transparent: true, opacity: 0.55 })
        );
        pile.position.set(s.mesh.position.x, 0.012, s.mesh.position.z);
        pile.rotation.y = Math.random() * 6;
        scene.add(pile);
        casingPiles.push({ mesh: pile, t: 22 + Math.random() * 8 });
      }
      scene.remove(s.mesh);
    }
  }
  for (let i = shells.length - 1; i >= 0; i--) if (shells[i].life <= 0) shells.splice(i, 1);

  for (const mg of mags) {
    mg.vel.y -= 16 * dt;
    mg.mesh.position.addScaledVector(mg.vel, dt);
    mg.mesh.rotation.x += dt * mg.spin;
    mg.mesh.rotation.z += dt * (mg.spin * 0.6);
    mg.life -= dt;
    if (mg.mesh.position.y < 0.06) {
      mg.mesh.position.y = 0.06;
      mg.vel.y *= -0.18;
      mg.vel.x *= 0.45;
      mg.vel.z *= 0.45;
      mg.spin *= 0.7;
    }
    if (mg.mesh.material) mg.mesh.material.opacity = Math.min(1, mg.life);
    if (mg.life <= 0) scene.remove(mg.mesh);
  }
  for (let i = mags.length - 1; i >= 0; i--) if (mags[i].life <= 0) mags.splice(i, 1);

  for (const p of worldPings) {
    p.t -= dt;
    if (p.ring) {
      const s = 1 + Math.sin(performance.now() * 0.006) * 0.15;
      p.ring.scale.set(s, s, s);
      p.ring.material.opacity = Math.max(0.15, p.t / 8);
    }
    if (p.mesh) p.mesh.position.y = Math.sin(performance.now() * 0.004 + p.x) * 0.04;
    if (p.t <= 0 && p.mesh) scene.remove(p.mesh);
  }
  for (let i = worldPings.length - 1; i >= 0; i--) if (worldPings[i].t <= 0) worldPings.splice(i, 1);

  updateFlares(dt);
  const doorOpenAmt = MAP.hangarDoorMesh
    ? THREE.MathUtils.clamp((MAP.hangarDoorMesh.position.y - 1.7) / 2.5, 0, 1)
    : 0;
  if (doorOpenAmt > 0.2 && player.pos.distanceTo(MAP.hangarDoor) < 8 && Math.random() < dt * 0.8) {
    beep(90 + Math.random() * 30, 0.18, 0.012, 1, "sine");
  }
  updateHangarFx(dt, doorOpenAmt);
  updateGrit(dt);
  let spookPt = null;
  if (vm.kick > 0.4) spookPt = player.pos;
  updateBirds(dt, spookPt);
  updateWildlife(dt, spookPt);
  if (MAP.sparks && inHangar(player.pos)) {
    for (const s of MAP.sparks) {
      if (s.flash > 0.7) beep(1400 + Math.random() * 600, 0.03, 0.012, 1, "square");
    }
  }
  if (inHangar(player.pos) && Math.random() < dt * 0.35) {
    beep(90 + Math.random() * 50, 0.06, 0.012, 1, "triangle");
  }
  player.genHum = player.genHum ?? 0;
  player.genHum -= dt;
  if (inHangar(player.pos) && player.genHum <= 0) {
    player.genHum = 2.4;
    beep(48, 0.55, 0.01, 1, "sine");
    setTimeout(() => beep(42, 0.7, 0.008, 1, "sine"), 200);
  }
  if (player.radioEcho > 0) {
    player.radioEcho -= dt;
    if (player.radioEcho <= 0) {
      let replied = 0;
      for (const b of bots) {
        if (b.hp <= 0) continue;
        const d = b.pos.distanceTo(player.pos);
        if (d < 28) {
          b.attract = Math.max(b.attract || 0, 3.2);
          replied++;
        }
      }
      if (replied) {
        beep(380, 0.05, 0.02, 1, "square");
        setTimeout(() => beep(220, 0.08, 0.016, 1, "triangle"), 90);
        feed(`NET · ${replied} unit${replied > 1 ? "s" : ""} copy`);
      } else {
        beep(160, 0.06, 0.014, 1, "sine");
        feed("NET · no copy");
      }
    }
  }
  birdCallT -= dt;
  if (birdCallT <= 0) {
    birdCallT = 9 + Math.random() * 14;
    beep(720 + Math.random() * 180, 0.07, 0.018, 1, "triangle");
    setTimeout(() => beep(580, 0.09, 0.014, 1, "sine"), 90);
  }
  windHowlT -= dt;
  if (windHowlT <= 0) {
    windHowlT = 16 + Math.random() * 12;
    beep(55, 0.45, 0.02, 1, "sine");
    setTimeout(() => beep(42, 0.55, 0.016, 1, "sine"), 180);
  }
  freightT -= dt;
  if (freightT <= 0 && !inHangar(player.pos)) {
    freightT = 36 + Math.random() * 28;
    beep(78, 0.55, 0.028, 1, "sine");
    setTimeout(() => beep(62, 0.7, 0.024, 1, "sine"), 220);
    setTimeout(() => beep(54, 0.9, 0.02, 1, "sine"), 520);
    feed("FREIGHT · far ridge");
  }
  cicadaT -= dt;
  if (cicadaT <= 0 && !inHangar(player.pos)) {
    cicadaT = 4 + Math.random() * 7;
    beep(2400 + Math.random() * 800, 0.05, 0.01, 1, "triangle");
    setTimeout(() => beep(2100 + Math.random() * 500, 0.04, 0.008, 1, "sine"), 70);
  }
  coyoteT -= dt;
  if (coyoteT <= 0 && !inHangar(player.pos)) {
    coyoteT = 18 + Math.random() * 16;
    beep(620, 0.12, 0.016, 1, "triangle");
    setTimeout(() => beep(480, 0.16, 0.014, 1, "sine"), 140);
    setTimeout(() => beep(540, 0.1, 0.012, 1, "triangle"), 280);
  }
  owlT -= dt;
  if (owlT <= 0 && !inHangar(player.pos)) {
    owlT = 22 + Math.random() * 20;
    beep(280, 0.08, 0.014, 1, "sine");
    setTimeout(() => beep(220, 0.12, 0.012, 1, "triangle"), 160);
  }
  dogT -= dt;
  if (dogT <= 0 && !inHangar(player.pos)) {
    dogT = 28 + Math.random() * 22;
    beep(340, 0.05, 0.016, 1, "square");
    setTimeout(() => beep(260, 0.08, 0.014, 1, "triangle"), 90);
    setTimeout(() => beep(300, 0.05, 0.012, 1, "square"), 200);
  }
  for (let i = bloodPools.length - 1; i >= 0; i--) {
    const p = bloodPools[i];
    p.t -= dt;
    p.grow = Math.min(1, p.grow + dt * 0.18);
    const s = 1 + p.grow * 1.8;
    p.mesh.scale.set(s, s, 1);
    p.mesh.material.opacity = Math.max(0.12, 0.55 * (p.t / 8));
    if (p.t <= 0) {
      scene.remove(p.mesh);
      bloodPools.splice(i, 1);
    }
  }
  player.scratch = Math.max(0, (player.scratch || 0) - dt * 0.22);
  const scratchEl = document.getElementById("scratch");
  if (scratchEl) scratchEl.style.opacity = String(Math.min(0.55, player.scratch * 0.7));
  staticT -= dt;
  if (staticT <= 0) {
    staticT = 1.6;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const d = b.pos.distanceTo(player.pos);
      if (d < 8 && (b.state === "peek" || b.state === "aid")) {
        beep(90 + Math.random() * 40, 0.04, 0.01, d, "sawtooth");
        break;
      }
    }
  }
  player.dirt = Math.max(0, (player.dirt || 0) - dt * 0.22);
  const dirtEl = document.getElementById("dirt");
  if (dirtEl) dirtEl.style.opacity = String(Math.min(0.7, player.dirt * 0.55));
  player.drip = Math.max(0, (player.drip || 0) - dt * 0.18);
  const dripEl = document.getElementById("drip");
  if (dripEl) {
    const visor = inHangar(player.pos) ? 0.1 + Math.abs(Math.sin(performance.now() * 0.0012)) * 0.08 : 0;
    const wound = player.hp < 55 ? 0.15 + (1 - player.hp / 100) * 0.35 : 0;
    dripEl.style.opacity = String(Math.min(0.75, visor + wound + player.drip * 0.5));
  }
  const headEl = document.getElementById("heading");
  if (headEl) {
    const yawDeg = ((-player.yaw * 180) / Math.PI + 36000) % 360;
    let nearH = 99;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      nearH = Math.min(nearH, b.pos.distanceTo(player.pos));
    }
    const ztxt = player.ads && player.zero ? `  Z${player.zero}` : "";
    const card = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(yawDeg / 45) % 8];
    const bip = player.ads && player.prone ? "  BIPOD" : "";
    const padM = player.pos.distanceTo(MAP.extract);
    const locTag = inSlake(player.pos) ? "  SLAKE" : inMilk(player.pos) ? "  MILK" : inRope(player.pos) ? "  ROPE" : onBucket(player.pos) ? "  BUCKET" : inSinter(player.pos) ? "  SINT" : onStrand(player.pos) ? "  STRAND" : inJig(player.pos) ? "  JIG" : onJigDeck(player.pos) ? "  DECK" : inHutch(player.pos) ? "  HUTCH" : inCool(player.pos) ? "  COOL" : onCoolCar(player.pos) ? "  DRUM" : inQuench(player.pos) ? "  QUENCH" : inFall(player.pos) ? "  FALL" : inBag(player.pos) ? "  BAG" : onBagRack(player.pos) ? "  RACK" : inFines(player.pos) ? "  FINES" : inDry(player.pos) ? "  DRY" : onDryShell(player.pos) ? "  SHELL" : inExhaust(player.pos) ? "  EXH" : inLoco(player.pos) ? "  LOCO" : onLoco(player.pos) ? "  ENGINE" : inSteam(player.pos) ? "  STEAM" : inAgit(player.pos) ? "  AGIT" : onRake(player.pos) ? "  RAKE" : inSlurry(player.pos) ? "  SLURRY" : inEw(player.pos) ? "  EW" : onCathode(player.pos) ? "  BAR" : inAcid(player.pos) ? "  ACID" : inCone(player.pos) ? "  CONE" : onMantle(player.pos) ? "  MANTLE" : inDischarge(player.pos) ? "  CHUTE" : inClas(player.pos) ? "  CLAS" : onClasRake(player.pos) ? "  RAKE" : inSands(player.pos) ? "  SANDS" : inMags(player.pos) ? "  MAGS" : onMagDrum(player.pos) ? "  DRUM" : inConc(player.pos) ? "  CONC" : inRod(player.pos) ? "  ROD" : onRodCharge(player.pos) ? "  CHARGE" : inRodDisch(player.pos) ? "  DISCH" : inSx(player.pos) ? "  SX" : onSxMixer(player.pos) ? "  MIXER" : inWeir(player.pos) ? "  WEIR" : inScrub(player.pos) ? "  SCRUB" : onScrubTray(player.pos) ? "  TRAY" : inLiquor(player.pos) ? "  LIQUOR" : inSilo(player.pos) ? "  SILO" : onScrew(player.pos) ? "  SCREW" : inPellet(player.pos) ? "  PEL" : onDisc(player.pos) ? "  DISC" : inChute(player.pos) ? "  CHUTE" : inClar(player.pos) ? "  CLAR" : onBridge(player.pos) ? "  BRIDGE" : inUnder(player.pos) ? "  UNDER" : inSample(player.pos) ? "  SAMP" : onSampleBoom(player.pos) ? "  CUTTER" : inReject(player.pos) ? "  REJECT" : inFloat(player.pos) ? "  FLOAT" : inFroth(player.pos) ? "  FROTH" : inFloatLaunder(player.pos) ? "  LAUNDER" : inStack(player.pos) ? "  STACK" : onHaul(player.pos) ? "  HAUL" : inPress(player.pos) ? "  PRESS" : inCyc(player.pos) ? "  CYC" : inSpiral(player.pos) ? "  SPIRAL" : inOverflow(player.pos) ? "  OVER" : inReturn(player.pos) ? "  FLUME" : inBall(player.pos) ? "  BALL" : inThick(player.pos) ? "  THICK" : inLaunder(player.pos) ? "  LAUNDER" : inTail(player.pos) ? "  TAIL" : inBin(player.pos) ? "  BIN" : inRaise(player.pos) ? "  RAISE" : inVent(player.pos) ? "  VENT" : inWinze(player.pos) ? "  WINZE" : inCross(player.pos) ? "  XCUT" : inAdit(player.pos) ? "  ADIT" : inTip(player.pos) ? "  TIP" : inSkip(player.pos) ? "  SKIP" : inFuse(player.pos) ? "  FUSE" : inPow(player.pos) ? "  POW" : inLab(player.pos) ? "  LAB" : inSort(player.pos) ? "  SORT" : inKiln(player.pos) ? "  KILN" : inMill(player.pos) ? "  MILL" : inHoist(player.pos) ? "  HOIST" : inBatt(player.pos) ? "  BATT" : inWeld(player.pos) ? "  WELD" : inParts(player.pos) ? "  PARTS" : inPaint(player.pos) ? "  PAINT" : inTire(player.pos) ? "  TIRE" : inWash(player.pos) ? "  WASH" : inLube(player.pos) ? "  LUBE" : inComp(player.pos) ? "  COMP" : inGen(player.pos) ? "  GEN" : inWeigh(player.pos) ? "  WEIGH" : inAssay(player.pos) ? "  ASSAY" : inDock(player.pos) ? "  DOCK" : inCrush(player.pos) ? "  CRUSH" : inMag(player.pos) ? "  MAG" : inHut(player.pos) ? "  HUT" : inShop(player.pos) ? "  SHOP" : inWarehouse(player.pos) ? "  WARE" : inLookout(player.pos) ? "  LOOK" : inCistern(player.pos) ? "  TANK" : "";
    headEl.textContent = (nearH < 90 ? `${String(Math.round(yawDeg)).padStart(3, "0")} ${card}  ·  ${nearH.toFixed(0)}m` : `${String(Math.round(yawDeg)).padStart(3, "0")} ${card}`) + `  PAD ${padM.toFixed(0)}m` + locTag + ztxt + bip;
  }
  const breathEl = document.getElementById("breath");
  if (breathEl) {
    const holding = player.ads && player.sprint;
    breathEl.style.display = holding ? "block" : "none";
  }
  // Nearby hostile foot ticks
  botStepT = (botStepT || 0) - dt;
  if (botStepT <= 0) {
    botStepT = 0.34;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const d = b.pos.distanceTo(player.pos);
      if (d > 14 || d < 1.2) continue;
      if (b.state !== "flank" && b.state !== "peek") continue;
      beep(85 + Math.random() * 20, 0.03, 0.016 / Math.max(1, d * 0.18), d, "sine");
    }
  }
  if (player.slide > 0 && Math.random() < dt * 4) {
    beep(90, 0.03, 0.012, 1, "triangle");
  }
  slingT -= dt;
  if (player.sprint && player.stam > 8 && slingT <= 0) {
    slingT = 0.38;
    beep(70 + Math.random() * 30, 0.03, 0.012, 1, "triangle");
  }
  closeShoutT -= dt;
  if (closeShoutT <= 0) {
    closeShoutT = 2.4;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const d = b.pos.distanceTo(player.pos);
      if (d < 5.5 && d > 1.1) {
        feed(`NET · ${b.unit} close`);
        beep(420, 0.05, 0.03, 1, "square");
        setTimeout(() => beep(280, 0.07, 0.02, 1, "triangle"), 80);
        closeShoutT = 5.5;
        break;
      }
    }
  }
  const padD = Math.hypot(player.pos.x - MAP.extract.x, player.pos.z - MAP.extract.z);
  if (!approachPad && padD < 18 && player.hp > 0) {
    approachPad = true;
    feed("NET · pad in sight");
    beep(520, 0.06, 0.022, 1, "sine");
    setTimeout(() => beep(400, 0.08, 0.018, 1, "sine"), 90);
  }
  if (matchTime > 210 && !clockWarn) {
    clockWarn = true;
    feed("NET · light falling");
    beep(240, 0.08, 0.02, 1, "sine");
  }
  if (matchTime > 210 && Math.floor(matchTime) !== Math.floor(matchTime - dt) && matchTime % 15 < 1) {
    beep(190, 0.04, 0.014, 1, "square");
  }
  chatterT -= dt;
  if (chatterT <= 0) {
    chatterT = 11 + Math.random() * 10;
    const live = bots.filter((b) => b.hp > 0);
    if (live.length > 0) {
      const line = chatterLines[Math.floor(Math.random() * chatterLines.length)];
      feed(line);
      beep(310, 0.04, 0.016, 1, "square");
      setTimeout(() => beep(240, 0.05, 0.012, 1, "triangle"), 70);
    }
  }
  rainT = Math.max(0, rainT - dt);
  if (rainT > 2) {
    player.rainDripT = (player.rainDripT || 0) - dt;
    if (player.rainDripT <= 0) {
      player.rainDripT = 0.35 + Math.random() * 0.7;
      beep(520 + Math.random() * 280, 0.02, 0.01, 1, "sine");
    }
  }
  const rainEl = document.getElementById("rainfx");
  if (rainEl) rainEl.style.opacity = String(Math.min(0.45, rainT * 0.05));
  const fogWant = rainT > 1 && !inHangar(player.pos) ? Math.min(0.42, rainT * 0.04) : 0;
  player.visorFog += (fogWant - player.visorFog) * Math.min(1, dt * 1.6);
  const fogEl = document.getElementById("fogfx");
  if (fogEl) fogEl.style.opacity = String(player.visorFog);
  const dyaw = Math.abs(player.yaw - lastYawTickAt);
  lastYawTickAt = player.yaw;
  player.yawTick = Math.max(0, (player.yawTick || 0) - dt);
  if (dyaw > 0.18 && player.yawTick <= 0) {
    player.yawTick = 0.22;
    beep(880 + dyaw * 180, 0.018, 0.01, 1, "square");
  }
  if (player.sprint && player.sips > 0 && wish.lengthSq() > 0.4) {
    player.sloshT = (player.sloshT || 0) - dt;
    if (player.sloshT <= 0) {
      player.sloshT = 0.55 + Math.random() * 0.2;
      beep(140 + Math.random() * 40, 0.04, 0.012, 1, "sine");
    }
  }
  player.scanT = (player.scanT || 16) - dt;
  if (player.scanT <= 0 && player.hp > 0 && player.dead <= 0) {
    player.scanT = 18 + Math.random() * 14;
    beep(240, 0.12, 0.012, 1, "sawtooth");
    setTimeout(() => beep(190, 0.08, 0.01, 1, "sine"), 90);
    feed("NET · scan");
  }
  player.markT = Math.max(0, (player.markT || 0) - dt);
  for (const b of bots) {
    if (b.marked) {
      if (b.hp <= 0 && b.marked > 0.05) {
        b.marked = 0;
        player.markT = 0;
        beep(160, 0.07, 0.022, 1, "square");
        feed("LOCK LOST");
        showPlate("LOST");
      } else {
        b.marked = Math.max(0, b.marked - dt);
        if (b.glow && b.glow.material) b.glow.material.opacity = b.marked > 0 ? 0.35 + Math.sin(now * 0.012) * 0.2 : Math.max(0, b.glow.material.opacity);
      }
    }
  }
  if (player.pos.distanceTo(MAP.extract) < 3.4 && player.grounded && wish.lengthSq() > 0.5 && Math.random() < dt * 6) {
    const grit = new THREE.Mesh(
      new THREE.SphereGeometry(0.08 + Math.random() * 0.07, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0xb89850, transparent: true, opacity: 0.35 })
    );
    grit.position.set(player.pos.x + (Math.random() - 0.5) * 0.4, 0.08, player.pos.z + (Math.random() - 0.5) * 0.4);
    scene.add(grit);
    dust.push({ mesh: grit, t: 0.4, rise: 0.7, drift: (Math.random() - 0.5) * 0.5 });
  }
  player.contactT = Math.max(0, (player.contactT || 0) - dt);
  player.moanT = Math.max(0, (player.moanT || 0) - dt);
  if (player.moanT <= 0) {
    const hurtBot = bots.find((b) => b.hp > 0 && b.hp < 38 && b.pos.distanceTo(player.pos) < 22);
    if (hurtBot) {
      player.moanT = 4.5 + Math.random() * 3;
      beep(140, 0.09, 0.03, 1, "sine");
      setTimeout(() => beep(90, 0.12, 0.02, 1, "triangle"), 80);
      feed(`${hurtBot.unit || "HOSTILE"} · wounded`);
    }
  }
  const magNeed = player.ammo.reduce((s, a, i) => s + (LOADOUT[i].mag - a.mag) + (LOADOUT[i].reserve - a.res), 0);
  player.restockPing = Math.max(0, (player.restockPing || 0) - dt);
  if (magNeed > 40 && player.restockPing <= 0 && MAP.ammo) {
    player.restockPing = 9;
    lastKnown.push({ x: MAP.ammo.x, z: MAP.ammo.z, t: 2.2 });
  }
  if (rainT > 0 && Math.random() < dt * 8) {
    const drop = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.35 + Math.random() * 0.25, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x9ab0c0, transparent: true, opacity: 0.28 })
    );
    drop.position.set(
      player.pos.x + (Math.random() - 0.5) * 16,
      4 + Math.random() * 6,
      player.pos.z + (Math.random() - 0.5) * 16
    );
    scene.add(drop);
    dust.push({ mesh: drop, t: 0.55, rise: -8, drift: 1.2 });
    if (Math.random() < 0.2) beep(1800 + Math.random() * 400, 0.02, 0.008, 1, "sine");
    if (vm.group && Math.random() < 0.45) {
      const bead = new THREE.Mesh(
        new THREE.SphereGeometry(0.006 + Math.random() * 0.006, 4, 3),
        new THREE.MeshBasicMaterial({ color: 0xc8d8e4, transparent: true, opacity: 0.55 })
      );
      bead.position.set((Math.random() - 0.5) * 0.18, (Math.random() - 0.4) * 0.1, -0.22 - Math.random() * 0.2);
      vm.group.add(bead);
      dust.push({ mesh: bead, t: 0.7, rise: -0.08 });
    }
    if (Math.random() < 0.35) {
      const puddle = new THREE.Mesh(
        new THREE.CircleGeometry(0.12 + Math.random() * 0.16, 8),
        new THREE.MeshBasicMaterial({ color: 0x3a4a50, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
      );
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.set(drop.position.x, 0.02, drop.position.z);
      scene.add(puddle);
      dust.push({ mesh: puddle, t: 1.6, rise: 0 });
    }
  }
  for (const b of bots) {
    if (b.heat) b.heat.material.opacity = player.nvg && b.hp > 0 ? 0.32 + Math.sin(performance.now() * 0.01) * 0.08 : 0;
  }
  for (const s of smokeClouds) s.t -= dt;
  for (let i = smokeClouds.length - 1; i >= 0; i--) if (smokeClouds[i].t <= 0) smokeClouds.splice(i, 1);
  player._cough = (player._cough || 0) - dt;
  if (player._cough <= 0 && player.dead <= 0) {
    const inSmoke = smokeClouds.some((s) => Math.hypot(s.x - player.pos.x, s.z - player.pos.z) < s.r);
    if (inSmoke) {
      player._cough = 2.4 + Math.random() * 1.6;
      beep(90, 0.08, 0.03, 1, "sine");
      setTimeout(() => beep(70, 0.1, 0.022, 1, "sine"), 90);
      player.shake = Math.max(player.shake || 0, 0.08);
    }
  }
  if (inSmoke(player.pos)) {
    if (scene.fog) scene.fog.density = Math.min(0.05, (scene.fog.density || 0.012) + dt * 0.04);
    player.dirt = Math.min(1.1, (player.dirt || 0) + dt * 0.35);
  }
  if (player.nvg) {
    player.nvgBatt = Math.max(0, player.nvgBatt - dt * 1.15);
    if (player.nvgBatt < 22) {
      player.nvgBeepT = (player.nvgBeepT || 0) - dt;
      if (player.nvgBeepT <= 0) {
        player.nvgBeepT = player.nvgBatt < 8 ? 0.7 : 1.6;
        beep(140, 0.04, 0.014, 1, "square");
      }
    }
    if (player.nvgBatt < 18 && Math.random() < dt * 4) {
      document.getElementById("hud").classList.toggle("nvg");
      setTimeout(() => document.getElementById("hud").classList.toggle("nvg", player.nvg && player.nvgBatt > 0), 40 + Math.random() * 80);
      beep(90, 0.03, 0.012, 1, "square");
    }
    if (player.nvgBatt <= 0) {
      player.nvg = false;
      document.getElementById("hud").classList.remove("nvg");
      if (MAP.hemi) MAP.hemi.intensity = 0.55;
      feed("NVG · cell dead");
      beep(160, 0.08, 0.02, 1, "triangle");
    }
  } else {
    player.nvgBatt = Math.min(100, player.nvgBatt + dt * 4.2);
  }
  player.blind = Math.max(0, (player.blind || 0) - dt * 0.55);
  const flashEl = document.getElementById("flash");
  if (flashEl && player.blind > 0.05) {
    flashEl.style.opacity = String(Math.min(0.92, player.blind * 0.7));
  }
  const nvgBattEl = document.getElementById("nvgbatt");
  if (nvgBattEl) {
    nvgBattEl.style.display = player.nvg || player.nvgBatt < 99 ? "block" : "none";
    nvgBattEl.textContent = `NVG ${player.nvgBatt.toFixed(0)}%`;
    nvgBattEl.style.opacity = player.nvgBatt < 22 ? "0.95" : "0.55";
  }
  bloodStepT -= dt;
  if (player.hp < 40 && player.hp > 0 && wish.lengthSq() > 0 && player.grounded && bloodStepT <= 0) {
    bloodStepT = player.sprint ? 0.22 : 0.38;
    const drip = new THREE.Mesh(
      new THREE.CircleGeometry(0.07 + Math.random() * 0.04, 6),
      new THREE.MeshBasicMaterial({ color: 0x5a1010, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
    );
    drip.rotation.x = -Math.PI / 2;
    drip.position.set(player.pos.x + (Math.random() - 0.5) * 0.16, 0.025, player.pos.z + (Math.random() - 0.5) * 0.16);
    scene.add(drip);
    decals.push({ mesh: drip });
    if (decals.length > 48) {
      const old = decals.shift();
      scene.remove(old.mesh);
    }
  }
  artyT -= dt;
  if (artyT <= 0) {
    artyT = 22 + Math.random() * 18;
    if (!inHangar(player.pos)) strikeArty();
  }
  gustT -= dt;
  if (gustT <= 0) {
    gustT = 16 + Math.random() * 14;
    if (!inHangar(player.pos)) {
      sandGust();
      player.dirt = Math.min(1.2, (player.dirt || 0) + 0.35);
      if (vm.group) {
        for (let i = 0; i < 4; i++) {
          const grit = new THREE.Mesh(
            new THREE.BoxGeometry(0.01, 0.01, 0.01),
            new THREE.MeshBasicMaterial({ color: 0x8a7040, transparent: true, opacity: 0.5 })
          );
          grit.position.set((Math.random() - 0.5) * 0.2, (Math.random() - 0.3) * 0.12, -0.18);
          vm.group.add(grit);
          dust.push({ mesh: grit, t: 0.7, rise: -0.04 });
        }
      }
    }
  }
  player._jetT = (player._jetT || 18) - dt;
  if (player._jetT <= 0) {
    player._jetT = 28 + Math.random() * 22;
    const trail = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.08, 7.5),
      new THREE.MeshBasicMaterial({ color: 0xd8e0e8, transparent: true, opacity: 0.35 })
    );
    const side = Math.random() > 0.5 ? 1 : -1;
    trail.position.set(side * 18, 28 + Math.random() * 8, -40);
    trail.rotation.y = side * 0.35;
    scene.add(trail);
    dust.push({ mesh: trail, t: 4.2, rise: 0.05, drift: -side * 9 });
    beep(48, 0.4, 0.018, 1, "sine");
    feed("NET · high track");
  }
  if (extractFlareLit && Math.random() < dt * 5) {
    const wash = new THREE.Mesh(
      new THREE.SphereGeometry(0.18 + Math.random() * 0.2, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0x6a5840, transparent: true, opacity: 0.22 })
    );
    wash.position.set(
      MAP.extract.x + (Math.random() - 0.5) * 3.2,
      0.1,
      MAP.extract.z + (Math.random() - 0.5) * 3.2
    );
    scene.add(wash);
    dust.push({ mesh: wash, t: 0.5, rise: 1.4, drift: (Math.random() - 0.5) * 1.6 });
    if (Math.random() < 0.3) beep(70, 0.06, 0.012, 1, "sine");
  }
  if (player.extracting && Math.random() < dt * 3.2) {
    const moth = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0xe8d8a0, transparent: true, opacity: 0.7 })
    );
    moth.position.set(
      MAP.extract.x + (Math.random() - 0.5) * 2.4,
      0.6 + Math.random() * 1.8,
      MAP.extract.z + (Math.random() - 0.5) * 2.4
    );
    scene.add(moth);
    dust.push({ mesh: moth, t: 0.9, rise: 0.4, drift: (Math.random() - 0.5) * 0.8 });
  }
  if (Math.random() < dt * 0.35) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 + Math.random() * 0.2, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0x8a7048, transparent: true, opacity: 0.18 })
    );
    const a = Math.random() * Math.PI * 2;
    puff.position.set(Math.cos(a) * 22, 0.2, Math.sin(a) * 22);
    scene.add(puff);
    dust.push({ mesh: puff, t: 1.4, rise: 0.9, drift: 1.6 + Math.random() });
  }
  // Extra heat wisps over extract pad when nearby
  if (player.pos.distanceTo(MAP.extract) < 9 && Math.random() < dt * 4) {
    const wisp = new THREE.Mesh(
      new THREE.SphereGeometry(0.1 + Math.random() * 0.12, 6, 5),
      new THREE.MeshBasicMaterial({ color: 0xd8a050, transparent: true, opacity: 0.22 })
    );
    wisp.position.set(
      MAP.extract.x + (Math.random() - 0.5) * 2.4,
      0.15 + Math.random() * 0.2,
      MAP.extract.z + (Math.random() - 0.5) * 2.4
    );
    scene.add(wisp);
    dust.push({ mesh: wisp, t: 0.8 + Math.random() * 0.4, rise: 0.7 + Math.random() * 0.4, drift: (Math.random() - 0.5) * 0.3 });
  }
  // Trip stakes: ping when a live bot walks near
  for (const s of stakes) {
    s.t -= dt;
    s.ping = Math.max(0, (s.ping || 0) - dt);
    if (s.light) s.light.intensity = 0.2 + Math.sin(performance.now() * 0.012) * 0.18;
    if (s.mesh) s.mesh.rotation.y += dt * 0.4;
    for (const b of bots) {
      if (b.hp <= 0) continue;
      const d = Math.hypot(b.pos.x - s.x, b.pos.z - s.z);
      if (d < 4.2 && s.ping <= 0) {
        s.ping = 1.6;
        lastKnown.push({ x: b.pos.x, z: b.pos.z, t: 3.2, bot: b });
        nadePings.push({ x: s.x, z: s.z, t: 1.4 });
        beep(880, 0.05, 0.03, 1, "square");
        setTimeout(() => beep(640, 0.07, 0.024, 1, "triangle"), 70);
        feed(`STAKE · trip ${b.unit || "HOSTILE"}`);
      }
    }
    if (s.t <= 0 && s.mesh) scene.remove(s.mesh);
  }
  for (let i = stakes.length - 1; i >= 0; i--) if (stakes[i].t <= 0) stakes.splice(i, 1);

  for (const c of chems) {
    c.t -= dt;
    if (c.light) c.light.intensity = 0.85 + Math.sin(performance.now() * 0.008) * 0.35;
    if (c.glow) c.glow.material.opacity = 0.22 + Math.sin(performance.now() * 0.01) * 0.12;
    if (c.t <= 0) {
      scene.remove(c.mesh);
      scene.remove(c.glow);
      scene.remove(c.light);
    }
  }
  for (let i = chems.length - 1; i >= 0; i--) if (chems[i].t <= 0) chems.splice(i, 1);

  for (const st of strobes) {
    st.t -= dt;
    const pulse = Math.sin(performance.now() * 0.018) > 0.15;
    if (st.light) st.light.intensity = pulse ? 2.4 : 0.12;
    if (st.glow) st.glow.material.opacity = pulse ? 0.55 : 0.08;
    if (pulse && Math.random() < dt * 4) {
      for (const b of bots) {
        if (b.hp <= 0) continue;
        if (Math.hypot(b.pos.x - st.x, b.pos.z - st.z) < 20) b.attract = Math.max(b.attract || 0, 2.6);
      }
    }
    if (st.t <= 0) {
      scene.remove(st.mesh);
      scene.remove(st.glow);
      scene.remove(st.light);
    }
  }
  for (let i = strobes.length - 1; i >= 0; i--) if (strobes[i].t <= 0) strobes.splice(i, 1);

  for (const p of casingPiles) {
    p.t -= dt;
    if (p.t <= 0) scene.remove(p.mesh);
    else if (p.mesh.material) {
      p.mesh.material.opacity = 0.35 + Math.abs(Math.sin(performance.now() * 0.004 + p.t)) * 0.25;
    }
  }
  for (let i = casingPiles.length - 1; i >= 0; i--) if (casingPiles[i].t <= 0) casingPiles.splice(i, 1);

  for (const b of bots) {
    if (b.hp <= 0 && b.settled && !b._flies) {
      b._flies = true;
      for (let i = 0; i < 5; i++) {
        const f = new THREE.Mesh(
          new THREE.SphereGeometry(0.018, 5, 4),
          new THREE.MeshBasicMaterial({ color: 0x1a140c })
        );
        f.position.copy(b.pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.4, (Math.random() - 0.5) * 0.4));
        scene.add(f);
        corpseFlies.push({ mesh: f, host: b, off: Math.random() * 6, r: 0.22 + Math.random() * 0.18 });
      }
    }
  }
  for (const f of corpseFlies) {
    const live = f.host && f.host.hp <= 0 && f.host.settled;
    const t = performance.now() * 0.004 + f.off;
    if (live) {
      f.mesh.position.set(
        f.host.pos.x + Math.cos(t * 2.2) * f.r,
        0.28 + Math.abs(Math.sin(t * 3.1)) * 0.35,
        f.host.pos.z + Math.sin(t * 1.7) * f.r
      );
    } else f.mesh.visible = false;
  }
  if (Math.random() < dt * 0.35 && bots.some((b) => b.hp <= 0 && b.settled && b.pos.distanceTo(player.pos) < 6)) {
    beep(3100 + Math.random() * 400, 0.02, 0.008, 1, "square");
  }

  if (player.checkT > 0) {
    player.checkT -= dt;
    if (player.checkT <= 0) player.inspect = false;
  }
  if (player.tapMag > 0) player.tapMag -= dt;

  for (const s of satchels) {
    s.fuse -= dt;
    s.tick -= dt;
    if (s.led) s.led.material.color.setHex(s.fuse < 1.4 ? 0xffe060 : (Math.sin(performance.now() * 0.02) > 0 ? 0xff3010 : 0x401008));
    if (s.tick <= 0) {
      s.tick = s.fuse < 1.6 ? 0.16 : 0.48;
      beep(s.fuse < 1.6 ? 880 : 420, 0.03, 0.016, 1, "square");
    }
    if (s.fuse <= 0) {
      explode(new THREE.Vector3(s.x, 0.2, s.z), 8.4, 120, "SATCHEL");
      scene.remove(s.mesh);
    }
  }
  for (let i = satchels.length - 1; i >= 0; i--) if (satchels[i].fuse <= 0) satchels.splice(i, 1);

  for (const r of radios) {
    r.t -= dt;
    r.ping -= dt;
    if (r.light) r.light.intensity = 0.25 + Math.sin(performance.now() * 0.01) * 0.22;
    if (r.ping <= 0 && r.t > 0) {
      r.ping = 3.1;
      radioPings.push({ x: r.x, z: r.z, t: 1.4 });
      beep(510, 0.05, 0.018, 1, "sine");
      setTimeout(() => beep(390, 0.06, 0.014, 1, "triangle"), 60);
      for (const b of bots) {
        if (b.hp <= 0) continue;
        if (Math.hypot(b.pos.x - r.x, b.pos.z - r.z) < 18) b.attract = Math.max(b.attract || 0, 2.4);
      }
    }
    if (r.t <= 0) scene.remove(r.mesh);
  }
  for (let i = radios.length - 1; i >= 0; i--) if (radios[i].t <= 0) radios.splice(i, 1);

  for (const bcn of beacons) {
    bcn.t -= dt;
    if (!bcn.grounded) {
      bcn.vy -= 16 * dt;
      bcn.x += bcn.vx * dt;
      bcn.y += bcn.vy * dt;
      bcn.z += bcn.vz * dt;
      if (bcn.y <= 0.16) {
        bcn.y = 0.16;
        bcn.grounded = true;
        bcn.vx = 0;
        bcn.vz = 0;
        beep(480, 0.05, 0.02, 1, "triangle");
      }
    }
    bcn.mesh.position.set(bcn.x, bcn.y, bcn.z);
    bcn.light.position.set(bcn.x, bcn.y + 0.2, bcn.z);
    bcn.ping -= dt;
    const pulse = 0.4 + Math.abs(Math.sin(performance.now() * 0.012));
    bcn.light.intensity = pulse * 1.6;
    if (bcn.led) bcn.led.material.color.setHex(pulse > 0.9 ? 0xe8ffe0 : 0x208050);
    if (bcn.ping <= 0 && bcn.t > 0) {
      bcn.ping = 1.6;
      radioPings.push({ x: bcn.x, z: bcn.z, t: 1.2 });
      worldPings.push({ x: bcn.x, z: bcn.z, t: 1.2 });
      beep(760, 0.04, 0.02, 1, "sine");
      for (const bot of bots) {
        if (bot.hp <= 0) continue;
        if (Math.hypot(bot.pos.x - bcn.x, bot.pos.z - bcn.z) < 16) bot.attract = Math.max(bot.attract || 0, 2.8);
      }
    }
    if (bcn.t <= 0) {
      scene.remove(bcn.mesh);
      scene.remove(bcn.light);
    }
  }
  for (let i = beacons.length - 1; i >= 0; i--) if (beacons[i].t <= 0) beacons.splice(i, 1);

  player.lunge = Math.max(0, (player.lunge || 0) - dt);

  mortarT -= dt;
  if (mortarT <= 0 && !inHangar(player.pos) && player.dead <= 0 && !player.scoreOpen) {
    mortarT = 26 + Math.random() * 22;
    const mx = player.pos.x + (Math.random() - 0.5) * 22;
    const mz = player.pos.z + (Math.random() - 0.5) * 22;
    mortars.push({ x: mx, z: mz, t: 1.35 });
    beep(180, 0.35, 0.03, 1, "sine");
    setTimeout(() => beep(140, 0.4, 0.025, 1, "triangle"), 180);
    feed("INBOUND · mortar");
    nadePings.push({ x: mx, z: mz, t: 1.5 });
  }
  for (const m of mortars) {
    m.t -= dt;
    if (m.t <= 0 && !m.boom) {
      m.boom = true;
      explode(new THREE.Vector3(m.x, 0.15, m.z), 7.2, 70, "MORTAR");
      const crater = new THREE.Mesh(
        new THREE.CircleGeometry(0.7, 8),
        new THREE.MeshBasicMaterial({ color: 0x3a2a18, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
      );
      crater.rotation.x = -Math.PI / 2;
      crater.position.set(m.x, 0.02, m.z);
      scene.add(crater);
      dust.push({ mesh: crater, t: 8 });
    }
  }
  for (let i = mortars.length - 1; i >= 0; i--) if (mortars[i].boom) mortars.splice(i, 1);

  windShiftT += dt;
  if (windShiftT > 14) {
    windShiftT = 0;
    WIND_DEG = (WIND_DEG + (Math.random() - 0.5) * 28 + 360) % 360;
    beep(160, 0.05, 0.012, 1, "sine");
    if (player.dead <= 0 && !player.scoreOpen) {
      feed(`WIND · ${Math.round(WIND_DEG)}°`);
      showPlate(`W ${Math.round(WIND_DEG)}`);
    }
  }

  if (player.slide > 0 && (vm.heat || 0) > 0.62 && player.brassBurn <= 0) {
    player.brassBurn = 1.6;
    player.hp = Math.max(1, player.hp - 1);
    player.shake = Math.max(player.shake || 0, 0.12);
    beep(1400, 0.04, 0.018, 1, "square");
    feed("BRASS · burn");
  }
  player.brassBurn = Math.max(0, (player.brassBurn || 0) - dt);

  player.overwatchT = Math.max(0, player.overwatchT - dt);
  if (player.overwatchT > 0) {
    for (const b of bots) {
      if (b.hp <= 0) continue;
      if (b.heat) b.heat.material.opacity = Math.max(b.heat.material.opacity, 0.45);
      if (Math.random() < dt * 0.8) lastKnown.push({ x: b.pos.x, z: b.pos.z, t: 1.4, bot: b });
    }
  }

  const liveNow = bots.filter((b) => b.hp > 0).length;
  if (liveNow === 1 && !player._lastNet) {
    player._lastNet = true;
    beep(420, 0.07, 0.03, 1, "sine");
    setTimeout(() => beep(310, 0.09, 0.025, 1, "triangle"), 80);
    feed("NET · last contact");
  }

  const extractHud = document.getElementById("extract");
  if (extractHud && player.extracting && player.extract >= 15) {
    extractHud.style.filter = `hue-rotate(${Math.sin(performance.now() * 0.012) * 20}deg)`;
  } else if (extractHud) extractHud.style.filter = "";
  if (MAP.extractStrobes) {
    const on = player.extracting || extractFlareLit;
    MAP.extractStrobes.forEach((sl, i) => {
      if (!on) sl.intensity = Math.max(0, sl.intensity * 0.4);
      else sl.intensity = Math.max(sl.intensity, 0.4 + Math.abs(Math.sin(performance.now() * 0.008 + i)) * 1.8);
    });
  }
  if (MAP.extractFlood) {
    const want = player.extracting || extractFlareLit ? 2.4 + Math.sin(performance.now() * 0.004) * 0.4 : 0;
    MAP.extractFlood.intensity += (want - MAP.extractFlood.intensity) * Math.min(1, dt * 3);
  }

  player.dive = Math.max(0, (player.dive || 0) - dt);
  if (player.dive > 0) {
    camera.position.y += Math.sin(player.dive * 18) * 0.012;
  }

  if (player.pin) {
    player.pin.t -= dt;
    if (player.pin.t <= 0) player.pin = null;
  }

  if (inHangar(player.pos) && player.dead <= 0) {
    player.oilDripT -= dt;
    if (player.oilDripT <= 0) {
      player.oilDripT = 2.2 + Math.random() * 3.4;
      beep(180 + Math.random() * 80, 0.03, 0.012, 1, "sine");
      player.dirt = Math.min(0.55, (player.dirt || 0) + 0.04);
      player.visorFog = Math.min(0.5, (player.visorFog || 0) + 0.02);
    }
  }

  if (!player.clockChime && matchTime >= 300) {
    player.clockChime = true;
    beep(420, 0.08, 0.03, 1, "sine");
    setTimeout(() => beep(320, 0.1, 0.028, 1, "triangle"), 160);
    feed("CLOCK · 5:00 ridge");
    showPlate("5:00");
  }
  if (!player.clock4 && matchTime >= 240) {
    player.clock4 = true;
    beep(300, 0.06, 0.024, 1, "sine");
    setTimeout(() => beep(240, 0.08, 0.02, 1, "triangle"), 140);
    feed("CLOCK · 4:00 dusk");
    showPlate("4:00");
  }
  if (!player.clock3 && matchTime >= 180) {
    player.clock3 = true;
    beep(260, 0.05, 0.02, 1, "sine");
    setTimeout(() => beep(200, 0.07, 0.018, 1, "triangle"), 120);
    feed("CLOCK · 3:00 late");
    showPlate("3:00");
  }
  if (!player.clock2 && matchTime >= 120) {
    player.clock2 = true;
    beep(220, 0.05, 0.018, 1, "sine");
    setTimeout(() => beep(170, 0.06, 0.016, 1, "triangle"), 110);
    feed("CLOCK · 2:00 eve");
    showPlate("2:00");
  }
  if (!player.clock1 && matchTime >= 60) {
    player.clock1 = true;
    beep(200, 0.04, 0.016, 1, "sine");
    setTimeout(() => beep(150, 0.05, 0.014, 1, "triangle"), 100);
    feed("CLOCK · 1:00");
    showPlate("1:00");
  }

  const padDist = player.pos.distanceTo(MAP.extract);
  if (padDist < 12 && player.dead <= 0) {
    player.padStaticT -= dt;
    if (player.padStaticT <= 0) {
      player.padStaticT = 2.4 + Math.random() * 2.8;
      beep(90 + Math.random() * 40, 0.05, 0.01, 1, "square");
      if (padDist < 6 && Math.random() < 0.4) feed("PAD · static");
    }
  }

  if (player.hp < 28 && player.dead <= 0) {
    player.heartT -= dt;
    if (player.heartT <= 0) {
      player.heartT = 0.45 + player.hp / 80;
      beep(52, 0.05, 0.018 + (28 - player.hp) * 0.0006, 1, "sine");
      setTimeout(() => beep(40, 0.06, 0.012, 1, "sine"), 90);
    }
  }

  if (inHangar(player.pos) && rainT > 2 && player.dead <= 0) {
    player.tinT -= dt;
    if (player.tinT <= 0) {
      player.tinT = 0.18 + Math.random() * 0.45;
      beep(620 + Math.random() * 280, 0.02, 0.008, 1, "triangle");
    }
  }

  if (player.wxT > 0) {
    player.wxT -= dt;
    if (player.wxT <= 0) {
      const el = document.getElementById("wx");
      if (el) el.style.opacity = "0";
    }
  }

  if (matchTime >= 180 && !inHangar(player.pos) && player.dead <= 0 && Math.random() < dt * 0.08) {
    beep(1400 + Math.random() * 400, 0.03, 0.007, 1, "sine");
  }

  if (!inHangar(player.pos) && player.dead <= 0) {
    ravenT -= dt;
    if (ravenT <= 0) {
      ravenT = 16 + Math.random() * 18;
      beep(280 + Math.random() * 60, 0.07, 0.02, 1, "triangle");
      setTimeout(() => beep(240 + Math.random() * 40, 0.09, 0.016, 1, "sine"), 90);
      if (Math.random() < 0.45) feed("RIDGE · raven");
    }
    wolfT -= dt;
    if (wolfT <= 0) {
      wolfT = 38 + Math.random() * 26;
      beep(90, 0.16, 0.018, 1, "sine");
      setTimeout(() => beep(70, 0.2, 0.014, 1, "triangle"), 180);
      if (Math.random() < 0.55) feed("RIDGE · howl");
    }
  }

  const nearPad = player.pos.distanceTo(MAP.extract) < 16;
  if (nearPad && matchTime >= 120 && player.dead <= 0 && !inHangar(player.pos)) {
    beetleT -= dt;
    if (beetleT <= 0) {
      beetleT = 1.8 + Math.random() * 2.6;
      beep(1900 + Math.random() * 700, 0.02, 0.006, 1, "sine");
    }
  }

  const moving = keys.has("KeyW") || keys.has("KeyA") || keys.has("KeyS") || keys.has("KeyD") || player.sprint || player.slide > 0;
  if (!moving && player.grounded && player.dead <= 0) {
    player.stillT += dt;
    if (player.stillT > 1.2) player.stam = Math.min(100, player.stam + dt * 18);
  } else player.stillT = 0;

  if (inHangar(player.pos) && player.dead <= 0) {
    player.ratT -= dt;
    if (player.ratT <= 0) {
      player.ratT = 6 + Math.random() * 10;
      beep(90 + Math.random() * 40, 0.04, 0.014, 1, "triangle");
      setTimeout(() => beep(70 + Math.random() * 30, 0.05, 0.012, 1, "sine"), 80);
      if (Math.random() < 0.35) feed("HANGAR · scurry");
    }
  }

  const heatEl = document.getElementById("heatbar");
  if (heatEl) {
    const h = Math.min(1, vm.heat || 0);
    heatEl.style.width = `${h * 100}%`;
    heatEl.parentElement.style.opacity = h > 0.12 ? "0.7" : "0.2";
  }

  if (player.lampStrobe > 0 && player.spot) {
    player.lampStrobe -= dt;
    player.spot.intensity = (Math.sin(now * 0.028) > 0 ? 3.4 : 0.15) * (player.flash ? 1 : 0);
    if (player.lampStrobe <= 0 && player.flash) player.spot.intensity = 2.2;
  }

  const magNow = player.ammo[player.gun].mag;
  if (magNow > 0 && magNow <= 3 && player.dead <= 0 && player.reloading <= 0) {
    player.ammoTickT -= dt;
    if (player.ammoTickT <= 0) {
      player.ammoTickT = 1.15;
      beep(210 + magNow * 20, 0.03, 0.012, 1, "square");
    }
  }

  if (!inHangar(player.pos) && player.dead <= 0 && matchTime >= 90) {
    scorpT -= dt;
    if (scorpT <= 0) {
      scorpT = 9 + Math.random() * 12;
      beep(2100 + Math.random() * 600, 0.025, 0.007, 1, "sine");
      setTimeout(() => beep(1800 + Math.random() * 400, 0.02, 0.005, 1, "sine"), 40);
      if (Math.random() < 0.3) feed("RIDGE · click");
    }
  }

  freightRumT -= dt;
  if (freightRumT <= 0 && player.dead <= 0 && !inHangar(player.pos)) {
    freightRumT = 26 + Math.random() * 22;
    beep(42, 0.28, 0.016, 1, "sine");
    setTimeout(() => beep(36, 0.32, 0.012, 1, "triangle"), 220);
    if (Math.random() < 0.4) feed("RIDGE · freight");
  }

  if (!inHangar(player.pos) && player.dead <= 0) {
    tarpT -= dt;
    if (tarpT <= 0) {
      tarpT = 2.2 + Math.random() * 3.4;
      const hug = nearestCrate(player.pos);
      if (hug && hug.pos.distanceTo(player.pos) < 6) {
        beep(90 + Math.random() * 30, 0.06, 0.01, 1, "triangle");
      }
    }
  }

  if (player.dead <= 0 && !inHangar(player.pos) && matchTime >= 160 && player.stillT > 1.6) {
    player.fogBreath = Math.min(0.35, (player.fogBreath || 0) + dt * 0.08);
  } else {
    player.fogBreath = Math.max(0, (player.fogBreath || 0) - dt * 0.12);
  }
  if (player.fogBreath > 0.05) {
    const fog = document.getElementById("fogfx");
    if (fog) fog.style.opacity = String(Math.max(Number(fog.style.opacity) || 0, player.fogBreath * 0.45));
  }

  if (!player.clock030 && matchTime >= 30 && matchTime < 60) {
    player.clock030 = true;
    beep(180, 0.04, 0.014, 1, "sine");
    feed("CLOCK · 0:30");
    showPlate("0:30");
  }

  if (inHangar(player.pos) && player.burst > 4 && Math.random() < dt * 2.2) {
    beep(70 + Math.random() * 40, 0.04, 0.01, 1, "square");
    if (MAP.hemi) MAP.hemi.intensity = 0.35 + Math.random() * 0.4;
  }

  drawMini();
  drawCompass();
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
  const ca = Math.cos(player.yaw);
  const sa = Math.sin(player.yaw);
  const mx = (x, z) => {
    const dx = x - player.pos.x;
    const dz = z - player.pos.z;
    return cx + (dx * ca - dz * sa) * sc;
  };
  const mz = (x, z) => {
    const dx = x - player.pos.x;
    const dz = z - player.pos.z;
    return cz + (dx * sa + dz * ca) * sc;
  };
  mctx.fillStyle = "#6a4a2a";
  for (const c of MAP.crates) {
    mctx.fillRect(mx(c.pos.x, c.pos.z) - 3, mz(c.pos.x, c.pos.z) - 3, 6, 6);
  }
  mctx.fillStyle = extractFlareLit ? "#ff8030" : "#cdc04a";
  mctx.fillRect(mx(MAP.extract.x, MAP.extract.z) - 4, mz(MAP.extract.x, MAP.extract.z) - 4, 8, 8);
  mctx.fillStyle = "#88a0c8";
  mctx.fillRect(mx(MAP.hangarDoor.x, MAP.hangarDoor.z) - 3, mz(MAP.hangarDoor.x, MAP.hangarDoor.z) - 2, 6, 4);
  if (MAP.warehouseDoor) {
    mctx.fillStyle = "#6a5a30";
    mctx.fillRect(mx(-22, 26) - 5, mz(-22, 26) - 4, 10, 8);
    mctx.fillStyle = "#c9a227";
    mctx.fillRect(mx(MAP.warehouseDoor.x, MAP.warehouseDoor.z) - 3, mz(MAP.warehouseDoor.x, MAP.warehouseDoor.z) - 2, 6, 4);
  }
  if (MAP.shedDoor) {
    mctx.fillStyle = "#5a3a22";
    mctx.fillRect(mx(27, 21) - 4, mz(27, 21) - 4, 8, 8);
    mctx.fillStyle = "#c07030";
    mctx.fillRect(mx(MAP.shedDoor.x, MAP.shedDoor.z) - 3, mz(MAP.shedDoor.x, MAP.shedDoor.z) - 2, 6, 4);
  }
  if (MAP.lookout) {
    mctx.fillStyle = "#8a7040";
    mctx.fillRect(mx(MAP.lookout.x, MAP.lookout.z) - 3, mz(MAP.lookout.x, MAP.lookout.z) - 3, 6, 6);
  }
  if (MAP.radioDoor) {
    mctx.fillStyle = "#2a4a3a";
    mctx.fillRect(mx(2, 33) - 4, mz(2, 33) - 3, 8, 6);
    mctx.fillStyle = "#50b888";
    mctx.fillRect(mx(MAP.radioDoor.x, MAP.radioDoor.z) - 3, mz(MAP.radioDoor.x, MAP.radioDoor.z) - 2, 6, 4);
  }
  if (MAP.shopDoor) {
    mctx.fillStyle = "#4a3020";
    mctx.fillRect(mx(-6, -30) - 4, mz(-6, -30) - 4, 8, 8);
    mctx.fillStyle = "#d08030";
    mctx.fillRect(mx(MAP.shopDoor.x, MAP.shopDoor.z) - 3, mz(MAP.shopDoor.x, MAP.shopDoor.z) - 2, 6, 4);
  }
  if (MAP.hutDoor) {
    mctx.fillStyle = "#2a3a44";
    mctx.fillRect(mx(27.4, 33) - 4, mz(27.4, 33) - 3, 8, 6);
    mctx.fillStyle = "#60a8c8";
    mctx.fillRect(mx(MAP.hutDoor.x, MAP.hutDoor.z) - 3, mz(MAP.hutDoor.x, MAP.hutDoor.z) - 2, 6, 4);
  }
  if (MAP.magDoor) {
    mctx.fillStyle = "#4a3020";
    mctx.fillRect(mx(-32.2, 8.2) - 4, mz(-32.2, 8.2) - 3, 8, 6);
    mctx.fillStyle = "#d08030";
    mctx.fillRect(mx(MAP.magDoor.x, MAP.magDoor.z) - 3, mz(MAP.magDoor.x, MAP.magDoor.z) - 2, 6, 4);
  }
  if (MAP.crushDoor) {
    mctx.fillStyle = "#4a2818";
    mctx.fillRect(mx(37.2, -7) - 4, mz(37.2, -7) - 3, 8, 6);
    mctx.fillStyle = "#d06028";
    mctx.fillRect(mx(MAP.crushDoor.x, MAP.crushDoor.z) - 3, mz(MAP.crushDoor.x, MAP.crushDoor.z) - 2, 6, 4);
  }
  if (MAP.dockDoor) {
    mctx.fillStyle = "#4a3018";
    mctx.fillRect(mx(35.6, 8.2) - 4, mz(35.6, 8.2) - 3, 8, 6);
    mctx.fillStyle = "#c87828";
    mctx.fillRect(mx(MAP.dockDoor.x, MAP.dockDoor.z) - 3, mz(MAP.dockDoor.x, MAP.dockDoor.z) - 2, 6, 4);
  }
  if (MAP.assayDoor) {
    mctx.fillStyle = "#4a3018";
    mctx.fillRect(mx(-33.4, -8.8) - 4, mz(-33.4, -8.8) - 3, 8, 6);
    mctx.fillStyle = "#c89038";
    mctx.fillRect(mx(MAP.assayDoor.x, MAP.assayDoor.z) - 3, mz(MAP.assayDoor.x, MAP.assayDoor.z) - 2, 6, 4);
  }
  if (MAP.weighDoor) {
    mctx.fillStyle = "#4a3018";
    mctx.fillRect(mx(9.2, 21.8) - 4, mz(9.2, 21.8) - 3, 8, 6);
    mctx.fillStyle = "#c8a038";
    mctx.fillRect(mx(MAP.weighDoor.x, MAP.weighDoor.z) - 3, mz(MAP.weighDoor.x, MAP.weighDoor.z) - 2, 6, 4);
  }
  if (MAP.genDoor) {
    mctx.fillStyle = "#283848";
    mctx.fillRect(mx(-18.5, -7) - 4, mz(-18.5, -7) - 3, 8, 6);
    mctx.fillStyle = "#68a0c8";
    mctx.fillRect(mx(MAP.genDoor.x, MAP.genDoor.z) - 3, mz(MAP.genDoor.x, MAP.genDoor.z) - 2, 6, 4);
  }
  if (MAP.compDoor) {
    mctx.fillStyle = "#403020";
    mctx.fillRect(mx(16.8, 11.2) - 4, mz(16.8, 11.2) - 3, 8, 6);
    mctx.fillStyle = "#c88840";
    mctx.fillRect(mx(MAP.compDoor.x, MAP.compDoor.z) - 3, mz(MAP.compDoor.x, MAP.compDoor.z) - 2, 6, 4);
  }
  if (MAP.lubeDoor) {
    mctx.fillStyle = "#403018";
    mctx.fillRect(mx(-6.8, -16.2) - 4, mz(-6.8, -16.2) - 3, 8, 6);
    mctx.fillStyle = "#d0a038";
    mctx.fillRect(mx(MAP.lubeDoor.x, MAP.lubeDoor.z) - 3, mz(MAP.lubeDoor.x, MAP.lubeDoor.z) - 2, 6, 4);
  }
  if (MAP.washDoor) {
    mctx.fillStyle = "#203038";
    mctx.fillRect(mx(8.2, -27.4) - 4, mz(8.2, -27.4) - 3, 8, 6);
    mctx.fillStyle = "#70c0d8";
    mctx.fillRect(mx(MAP.washDoor.x, MAP.washDoor.z) - 3, mz(MAP.washDoor.x, MAP.washDoor.z) - 2, 6, 4);
  }
  if (MAP.washTanker) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.washTanker.x, MAP.washTanker.z) - 3, mz(MAP.washTanker.x, MAP.washTanker.z) - 2, 6, 4);
  }
  if (MAP.tireDoor) {
    mctx.fillStyle = "#302818";
    mctx.fillRect(mx(28.4, -1.2) - 4, mz(28.4, -1.2) - 3, 8, 6);
    mctx.fillStyle = "#d08830";
    mctx.fillRect(mx(MAP.tireDoor.x, MAP.tireDoor.z) - 3, mz(MAP.tireDoor.x, MAP.tireDoor.z) - 2, 6, 4);
  }
  if (MAP.tireTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.tireTruck.x, MAP.tireTruck.z) - 3, mz(MAP.tireTruck.x, MAP.tireTruck.z) - 2, 6, 4);
  }
  if (MAP.paintDoor) {
    mctx.fillStyle = "#402018";
    mctx.fillRect(mx(-16.8, 15.5) - 4, mz(-16.8, 15.5) - 3, 8, 6);
    mctx.fillStyle = "#d06030";
    mctx.fillRect(mx(MAP.paintDoor.x, MAP.paintDoor.z) - 3, mz(MAP.paintDoor.x, MAP.paintDoor.z) - 2, 6, 4);
  }
  if (MAP.paintTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.paintTruck.x, MAP.paintTruck.z) - 3, mz(MAP.paintTruck.x, MAP.paintTruck.z) - 2, 6, 4);
  }
  if (MAP.partsDoor) {
    mctx.fillStyle = "#302818";
    mctx.fillRect(mx(-5.6, 7.8) - 4, mz(-5.6, 7.8) - 3, 8, 6);
    mctx.fillStyle = "#c89038";
    mctx.fillRect(mx(MAP.partsDoor.x, MAP.partsDoor.z) - 3, mz(MAP.partsDoor.x, MAP.partsDoor.z) - 2, 6, 4);
  }
  if (MAP.partsTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.partsTruck.x, MAP.partsTruck.z) - 3, mz(MAP.partsTruck.x, MAP.partsTruck.z) - 2, 6, 4);
  }
  if (MAP.weldDoor) {
    mctx.fillStyle = "#301810";
    mctx.fillRect(mx(5.2, -17.6) - 4, mz(5.2, -17.6) - 3, 8, 6);
    mctx.fillStyle = "#d05028";
    mctx.fillRect(mx(MAP.weldDoor.x, MAP.weldDoor.z) - 3, mz(MAP.weldDoor.x, MAP.weldDoor.z) - 2, 6, 4);
  }
  if (MAP.weldTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.weldTruck.x, MAP.weldTruck.z) - 3, mz(MAP.weldTruck.x, MAP.weldTruck.z) - 2, 6, 4);
  }
  if (MAP.battDoor) {
    mctx.fillStyle = "#183018";
    mctx.fillRect(mx(16.4, 28.2) - 4, mz(16.4, 28.2) - 3, 8, 6);
    mctx.fillStyle = "#50c070";
    mctx.fillRect(mx(MAP.battDoor.x, MAP.battDoor.z) - 3, mz(MAP.battDoor.x, MAP.battDoor.z) - 2, 6, 4);
  }
  if (MAP.battTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.battTruck.x, MAP.battTruck.z) - 3, mz(MAP.battTruck.x, MAP.battTruck.z) - 2, 6, 4);
  }
  if (MAP.hoistDoor) {
    mctx.fillStyle = "#302818";
    mctx.fillRect(mx(-30.8, -28.2) - 4, mz(-30.8, -28.2) - 3, 8, 6);
    mctx.fillStyle = "#c8a038";
    mctx.fillRect(mx(MAP.hoistDoor.x, MAP.hoistDoor.z) - 3, mz(MAP.hoistDoor.x, MAP.hoistDoor.z) - 2, 6, 4);
  }
  if (MAP.hoistTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.hoistTruck.x, MAP.hoistTruck.z) - 3, mz(MAP.hoistTruck.x, MAP.hoistTruck.z) - 2, 6, 4);
  }
  if (MAP.millDoor) {
    mctx.fillStyle = "#301808";
    mctx.fillRect(mx(39.2, 18.4) - 4, mz(39.2, 18.4) - 3, 8, 6);
    mctx.fillStyle = "#c07028";
    mctx.fillRect(mx(MAP.millDoor.x, MAP.millDoor.z) - 3, mz(MAP.millDoor.x, MAP.millDoor.z) - 2, 6, 4);
  }
  if (MAP.millTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.millTruck.x, MAP.millTruck.z) - 3, mz(MAP.millTruck.x, MAP.millTruck.z) - 2, 6, 4);
  }
  if (MAP.kilnDoor) {
    mctx.fillStyle = "#301008";
    mctx.fillRect(mx(41.1, 34.3) - 4, mz(41.1, 34.3) - 3, 8, 6);
    mctx.fillStyle = "#e05020";
    mctx.fillRect(mx(MAP.kilnDoor.x, MAP.kilnDoor.z) - 3, mz(MAP.kilnDoor.x, MAP.kilnDoor.z) - 2, 6, 4);
  }
  if (MAP.kilnTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.kilnTruck.x, MAP.kilnTruck.z) - 3, mz(MAP.kilnTruck.x, MAP.kilnTruck.z) - 2, 6, 4);
  }
  if (MAP.sortDoor) {
    mctx.fillStyle = "#282810";
    mctx.fillRect(mx(21.1, -38.0) - 4, mz(21.1, -38.0) - 3, 8, 6);
    mctx.fillStyle = "#b0c040";
    mctx.fillRect(mx(MAP.sortDoor.x, MAP.sortDoor.z) - 3, mz(MAP.sortDoor.x, MAP.sortDoor.z) - 2, 6, 4);
  }
  if (MAP.sortTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.sortTruck.x, MAP.sortTruck.z) - 3, mz(MAP.sortTruck.x, MAP.sortTruck.z) - 2, 6, 4);
  }
  if (MAP.labDoor) {
    mctx.fillStyle = "#102028";
    mctx.fillRect(mx(-39.7, 17.8) - 4, mz(-39.7, 17.8) - 3, 8, 6);
    mctx.fillStyle = "#70c0d8";
    mctx.fillRect(mx(MAP.labDoor.x, MAP.labDoor.z) - 3, mz(MAP.labDoor.x, MAP.labDoor.z) - 2, 6, 4);
  }
  if (MAP.labTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.labTruck.x, MAP.labTruck.z) - 3, mz(MAP.labTruck.x, MAP.labTruck.z) - 2, 6, 4);
  }
  if (MAP.powDoor) {
    mctx.fillStyle = "#281008";
    mctx.fillRect(mx(41.45, -19.2) - 4, mz(41.45, -19.2) - 3, 8, 6);
    mctx.fillStyle = "#e07030";
    mctx.fillRect(mx(MAP.powDoor.x, MAP.powDoor.z) - 3, mz(MAP.powDoor.x, MAP.powDoor.z) - 2, 6, 4);
  }
  if (MAP.powTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.powTruck.x, MAP.powTruck.z) - 3, mz(MAP.powTruck.x, MAP.powTruck.z) - 2, 6, 4);
  }
  if (MAP.fuseDoor) {
    mctx.fillStyle = "#201808";
    mctx.fillRect(mx(-41.6, -1.8) - 4, mz(-41.6, -1.8) - 3, 8, 6);
    mctx.fillStyle = "#d8a030";
    mctx.fillRect(mx(MAP.fuseDoor.x, MAP.fuseDoor.z) - 3, mz(MAP.fuseDoor.x, MAP.fuseDoor.z) - 2, 6, 4);
  }
  if (MAP.fuseTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.fuseTruck.x, MAP.fuseTruck.z) - 3, mz(MAP.fuseTruck.x, MAP.fuseTruck.z) - 2, 6, 4);
  }
  if (MAP.skipDoor) {
    mctx.fillStyle = "#241808";
    mctx.fillRect(mx(-22.2, 39.5) - 4, mz(-22.2, 39.5) - 3, 8, 6);
    mctx.fillStyle = "#e0a040";
    mctx.fillRect(mx(MAP.skipDoor.x, MAP.skipDoor.z) - 3, mz(MAP.skipDoor.x, MAP.skipDoor.z) - 2, 6, 4);
  }
  if (MAP.tipDoor) {
    mctx.fillStyle = "#2a2010";
    mctx.fillRect(mx(8.6, 42.05) - 4, mz(8.6, 42.05) - 3, 8, 6);
    mctx.fillStyle = "#e8b040";
    mctx.fillRect(mx(MAP.tipDoor.x, MAP.tipDoor.z) - 3, mz(MAP.tipDoor.x, MAP.tipDoor.z) - 2, 6, 4);
  }
  if (MAP.aditDoor) {
    mctx.fillStyle = "#241808";
    mctx.fillRect(mx(-14, -36.2) - 4, mz(-14, -36.2) - 5, 8, 10);
    mctx.fillStyle = "#d8a040";
    mctx.fillRect(mx(MAP.aditDoor.x, MAP.aditDoor.z) - 3, mz(MAP.aditDoor.x, MAP.aditDoor.z) - 2, 6, 4);
  }
  if (MAP.winzeDoor) {
    mctx.fillStyle = "#2a2014";
    mctx.fillRect(mx(-34.6, -36.2) - 4, mz(-34.6, -36.2) - 4, 8, 8);
    mctx.fillStyle = MAP.sump && MAP.sump.on ? "#3a8878" : "#e0a060";
    mctx.fillRect(mx(MAP.winzeDoor.x, MAP.winzeDoor.z) - 3, mz(MAP.winzeDoor.x, MAP.winzeDoor.z) - 2, 6, 4);
    mctx.fillRect(mx(-24.3, -36.2) - 8, mz(-24.3, -36.2) - 1, 16, 2);
  }
  if (MAP.cage) {
    mctx.fillStyle = "#c8b060";
    mctx.fillRect(mx(MAP.cage.x, MAP.cage.z) - 2, mz(MAP.cage.x, MAP.cage.z) - 2, 4, 4);
  }
  if (MAP.sluice) {
    mctx.fillStyle = "#5a8870";
    mctx.fillRect(mx(MAP.sluice.x, MAP.sluice.z) - 2, mz(MAP.sluice.x, MAP.sluice.z) - 6, 3, 12);
  }
  if (MAP.tail) {
    mctx.fillStyle = "#6a5840";
    mctx.fillRect(mx(MAP.tail.x, MAP.tail.z) - 4, mz(MAP.tail.x, MAP.tail.z) - 3, 8, 6);
  }
  if (MAP.thickDoor) {
    mctx.fillStyle = MAP.thick && MAP.thick.on ? "#c09040" : "#e0b060";
    mctx.fillRect(mx(MAP.thickDoor.x, MAP.thickDoor.z) - 3, mz(MAP.thickDoor.x, MAP.thickDoor.z) - 2, 6, 4);
  }
  if (MAP.ballDoor) {
    mctx.fillStyle = MAP.ball && MAP.ball.on ? "#a08050" : "#d0b070";
    mctx.fillRect(mx(MAP.ballDoor.x, MAP.ballDoor.z) - 3, mz(MAP.ballDoor.x, MAP.ballDoor.z) - 2, 6, 4);
  }
  if (MAP.cycDoor) {
    mctx.fillStyle = MAP.cyc && MAP.cyc.on ? "#a08848" : "#d0a858";
    mctx.fillRect(mx(MAP.cycDoor.x, MAP.cycDoor.z) - 3, mz(MAP.cycDoor.x, MAP.cycDoor.z) - 2, 6, 4);
  }
  if (MAP.spiral && MAP.cyc && MAP.cyc.on) {
    mctx.fillStyle = "#b09050";
    mctx.fillRect(mx(MAP.spiral.x, MAP.spiral.z) - 1, mz(MAP.spiral.x, MAP.spiral.z) - 6, 2, 12);
  }
  if (MAP.pressDoor) {
    mctx.fillStyle = MAP.press && MAP.press.on ? "#a07848" : "#c8a060";
    mctx.fillRect(mx(MAP.pressDoor.x, MAP.pressDoor.z) - 3, mz(MAP.pressDoor.x, MAP.pressDoor.z) - 2, 6, 4);
  }
  if (MAP.floatDoor) {
    mctx.fillStyle = MAP.float && MAP.float.on ? "#88a858" : "#c8d888";
    mctx.fillRect(mx(MAP.floatDoor.x, MAP.floatDoor.z) - 3, mz(MAP.floatDoor.x, MAP.floatDoor.z) - 2, 6, 4);
  }
  if (MAP.stackDoor) {
    mctx.fillStyle = MAP.stack && MAP.stack.on ? "#a07040" : "#e0a060";
    mctx.fillRect(mx(MAP.stackDoor.x, MAP.stackDoor.z) - 3, mz(MAP.stackDoor.x, MAP.stackDoor.z) - 2, 6, 4);
  }
  if (MAP.slakeDoor) {
    mctx.fillStyle = MAP.slake && MAP.slake.on ? "#c8c090" : "#e8e0b0";
    mctx.fillRect(mx(MAP.slakeDoor.x, MAP.slakeDoor.z) - 3, mz(MAP.slakeDoor.x, MAP.slakeDoor.z) - 2, 6, 4);
  }
  if (MAP.ropeDoor) {
    mctx.fillStyle = MAP.rope && MAP.rope.on ? "#8090a0" : "#b0c0d0";
    mctx.fillRect(mx(MAP.ropeDoor.x, MAP.ropeDoor.z) - 3, mz(MAP.ropeDoor.x, MAP.ropeDoor.z) - 2, 6, 4);
  }
  if (MAP.sinterDoor) {
    mctx.fillStyle = MAP.sinter && MAP.sinter.on ? "#e07040" : "#c88860";
    mctx.fillRect(mx(MAP.sinterDoor.x, MAP.sinterDoor.z) - 3, mz(MAP.sinterDoor.x, MAP.sinterDoor.z) - 2, 6, 4);
  }
  if (MAP.strand) mctx.fillRect(mx(MAP.strand.x, MAP.strand.z) - 2, mz(MAP.strand.x, MAP.strand.z) - 1, 4, 2);
  if (MAP.sampleDoor) {
    mctx.fillStyle = MAP.sample && MAP.sample.on ? "#c8d080" : "#a0b070";
    mctx.fillRect(mx(MAP.sampleDoor.x, MAP.sampleDoor.z) - 3, mz(MAP.sampleDoor.x, MAP.sampleDoor.z) - 2, 6, 4);
  }
  if (MAP.pelletDoor) {
    mctx.fillStyle = MAP.pellet && MAP.pellet.on ? "#e0a050" : "#c8a060";
    mctx.fillRect(mx(MAP.pelletDoor.x, MAP.pelletDoor.z) - 3, mz(MAP.pelletDoor.x, MAP.pelletDoor.z) - 2, 6, 4);
  }
  if (MAP.disc) mctx.fillRect(mx(MAP.disc.x, MAP.disc.z) - 3, mz(MAP.disc.x, MAP.disc.z) - 3, 6, 6);
  if (MAP.clarDoor) {
    mctx.fillStyle = MAP.clar && MAP.clar.on ? "#70b0c0" : "#90c0c8";
    mctx.fillRect(mx(MAP.clarDoor.x, MAP.clarDoor.z) - 3, mz(MAP.clarDoor.x, MAP.clarDoor.z) - 2, 6, 4);
  }
  if (MAP.siloDoor) {
    mctx.fillStyle = MAP.silo && MAP.silo.on ? "#d0c070" : "#b0a060";
    mctx.fillRect(mx(MAP.siloDoor.x, MAP.siloDoor.z) - 3, mz(MAP.siloDoor.x, MAP.siloDoor.z) - 2, 6, 4);
  }
  if (MAP.jigDoor) {
    mctx.fillStyle = MAP.jig && MAP.jig.on ? "#e0c070" : "#a89060";
    mctx.fillRect(mx(MAP.jigDoor.x, MAP.jigDoor.z) - 3, mz(MAP.jigDoor.x, MAP.jigDoor.z) - 2, 6, 4);
  }
  if (MAP.coolDoor) {
    mctx.fillStyle = MAP.cool && MAP.cool.on ? "#e08050" : "#a07050";
    mctx.fillRect(mx(MAP.coolDoor.x, MAP.coolDoor.z) - 3, mz(MAP.coolDoor.x, MAP.coolDoor.z) - 2, 6, 4);
  }
  if (MAP.bagDoor) {
    mctx.fillStyle = MAP.bag && MAP.bag.on ? "#d0d0a0" : "#a0a080";
    mctx.fillRect(mx(MAP.bagDoor.x, MAP.bagDoor.z) - 3, mz(MAP.bagDoor.x, MAP.bagDoor.z) - 2, 6, 4);
  }
  if (MAP.dryDoor) {
    mctx.fillStyle = MAP.dry && MAP.dry.on ? "#e07040" : "#a06040";
    mctx.fillRect(mx(MAP.dryDoor.x, MAP.dryDoor.z) - 3, mz(MAP.dryDoor.x, MAP.dryDoor.z) - 2, 6, 4);
  }

  if (MAP.locoDoor) {
    mctx.fillStyle = MAP.loco && MAP.loco.on ? "#e0c060" : "#a08040";
    mctx.fillRect(mx(MAP.locoDoor.x, MAP.locoDoor.z) - 3, mz(MAP.locoDoor.x, MAP.locoDoor.z) - 2, 6, 4);
  }
  if (MAP.agitDoor) {
    mctx.fillStyle = MAP.agit && MAP.agit.on ? "#c0e080" : "#809060";
    mctx.fillRect(mx(MAP.agitDoor.x, MAP.agitDoor.z) - 3, mz(MAP.agitDoor.x, MAP.agitDoor.z) - 2, 6, 4);
  }
  if (MAP.scrubDoor) {
    mctx.fillStyle = MAP.scrub && MAP.scrub.on ? "#80e0c0" : "#508070";
    mctx.fillRect(mx(MAP.scrubDoor.x, MAP.scrubDoor.z) - 3, mz(MAP.scrubDoor.x, MAP.scrubDoor.z) - 2, 6, 4);
  }
  if (MAP.ewDoor) {
    mctx.fillStyle = MAP.ew && MAP.ew.on ? "#70d0e8" : "#407888";
    mctx.fillRect(mx(MAP.ewDoor.x, MAP.ewDoor.z) - 3, mz(MAP.ewDoor.x, MAP.ewDoor.z) - 2, 6, 4);
  }
  if (MAP.coneDoor) {
    mctx.fillStyle = MAP.cone && MAP.cone.on ? "#e0a060" : "#806040";
    mctx.fillRect(mx(MAP.coneDoor.x, MAP.coneDoor.z) - 3, mz(MAP.coneDoor.x, MAP.coneDoor.z) - 2, 6, 4);
  }
  if (MAP.clasDoor) {
    mctx.fillStyle = MAP.clas && MAP.clas.on ? "#d0c860" : "#807840";
    mctx.fillRect(mx(MAP.clasDoor.x, MAP.clasDoor.z) - 2, mz(MAP.clasDoor.x, MAP.clasDoor.z) - 3, 4, 6);
  }
  if (MAP.magsDoor) {
    mctx.fillStyle = MAP.mags && MAP.mags.on ? "#70b0e0" : "#406080";
    mctx.fillRect(mx(MAP.magsDoor.x, MAP.magsDoor.z) - 2, mz(MAP.magsDoor.x, MAP.magsDoor.z) - 3, 4, 6);
  }
  if (MAP.rodDoor) {
    mctx.fillStyle = MAP.rod && MAP.rod.on ? "#e0a060" : "#806040";
    mctx.fillRect(mx(MAP.rodDoor.x, MAP.rodDoor.z) - 3, mz(MAP.rodDoor.x, MAP.rodDoor.z) - 2, 6, 4);
  }
  if (MAP.sxDoor) {
    mctx.fillStyle = MAP.sx && MAP.sx.on ? "#70d090" : "#407050";
    mctx.fillRect(mx(MAP.sxDoor.x, MAP.sxDoor.z) - 3, mz(MAP.sxDoor.x, MAP.sxDoor.z) - 2, 6, 4);
  }
  if (MAP.face) {
    mctx.fillStyle = MAP.fall && MAP.fall.live ? "#e06030" : "#c09060";
    mctx.fillRect(mx(MAP.face.x, MAP.face.z) - 2, mz(MAP.face.x, MAP.face.z) - 2, 4, 4);
  }
  if (MAP.screw) mctx.fillRect(mx(MAP.screw.x, MAP.screw.z) - 6, mz(MAP.screw.x, MAP.screw.z) - 1, 12, 2);
  if (MAP.buckets) {
    mctx.fillStyle = "#c8b080";
    for (const bk of MAP.buckets) mctx.fillRect(mx(bk.x, bk.z) - 2, mz(bk.x, bk.z) - 2, 4, 3);
  }
  if (MAP.haulCrate) {
    mctx.fillStyle = "#c88848";
    mctx.fillRect(mx(MAP.haulCrate.pos.x, MAP.haulCrate.pos.z) - 3, mz(MAP.haulCrate.pos.x, MAP.haulCrate.pos.z) - 2, 6, 3);
  }
  if (MAP.launder && MAP.thick && MAP.thick.on) {
    mctx.fillStyle = "#8a7040";
    mctx.fillRect(mx(MAP.launder.x, MAP.launder.z) - 1, mz(MAP.launder.x, MAP.launder.z) - 4, 2, 8);
  }
  if (MAP.binDoor) {
    mctx.fillStyle = MAP.binBrake && MAP.binBrake.on ? "#a07040" : "#e0a050";
    mctx.fillRect(mx(MAP.binDoor.x, MAP.binDoor.z) - 3, mz(MAP.binDoor.x, MAP.binDoor.z) - 2, 6, 4);
  }
  if (MAP.binSkipCrate) {
    mctx.fillStyle = "#d0a050";
    mctx.fillRect(mx(MAP.binSkipCrate.pos.x, MAP.binSkipCrate.pos.z) - 2, mz(MAP.binSkipCrate.pos.x, MAP.binSkipCrate.pos.z) - 2, 4, 3);
  }
  if (MAP.raiseDoor) {
    mctx.fillStyle = MAP.fan && MAP.fan.on ? "#c8a060" : "#e09040";
    mctx.fillRect(mx(MAP.raiseDoor.x, MAP.raiseDoor.z) - 3, mz(MAP.raiseDoor.x, MAP.raiseDoor.z) - 2, 6, 4);
    mctx.fillRect(mx(32.2, -22.6) - 1, mz(32.2, -22.6) - 6, 2, 12);
  }
  if (MAP.carCrate) {
    mctx.fillStyle = "#d0b060";
    mctx.fillRect(mx(MAP.carCrate.pos.x, MAP.carCrate.pos.z) - 2, mz(MAP.carCrate.pos.x, MAP.carCrate.pos.z) - 2, 4, 3);
  }
  if (MAP.tramCrate) {
    mctx.fillStyle = "#c89040";
    mctx.fillRect(mx(MAP.tramCrate.pos.x, MAP.tramCrate.pos.z) - 2, mz(MAP.tramCrate.pos.x, MAP.tramCrate.pos.z) - 2, 4, 4);
  }
  if (MAP.skipTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.skipTruck.x, MAP.skipTruck.z) - 3, mz(MAP.skipTruck.x, MAP.skipTruck.z) - 2, 6, 4);
  }
  if (MAP.greaseTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.greaseTruck.x, MAP.greaseTruck.z) - 3, mz(MAP.greaseTruck.x, MAP.greaseTruck.z) - 2, 6, 4);
  }
  if (MAP.airTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.airTruck.x, MAP.airTruck.z) - 3, mz(MAP.airTruck.x, MAP.airTruck.z) - 2, 6, 4);
  }
  if (MAP.serviceVan) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.serviceVan.x, MAP.serviceVan.z) - 3, mz(MAP.serviceVan.x, MAP.serviceVan.z) - 2, 6, 4);
  }
  if (MAP.hopperTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.hopperTruck.x, MAP.hopperTruck.z) - 3, mz(MAP.hopperTruck.x, MAP.hopperTruck.z) - 2, 6, 4);
  }
  if (MAP.coreTruck) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.coreTruck.x, MAP.coreTruck.z) - 3, mz(MAP.coreTruck.x, MAP.coreTruck.z) - 2, 6, 4);
  }
  if (MAP.flatbed) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.flatbed.x, MAP.flatbed.z) - 3, mz(MAP.flatbed.x, MAP.flatbed.z) - 2, 6, 4);
  }
  if (MAP.drill) {
    mctx.fillStyle = "#6a5040";
    mctx.fillRect(mx(MAP.drill.x, MAP.drill.z) - 2, mz(MAP.drill.x, MAP.drill.z) - 2, 5, 5);
  }
  if (MAP.hopper) {
    mctx.fillStyle = "#6a4030";
    mctx.fillRect(mx(MAP.hopper.x, MAP.hopper.z) - 2, mz(MAP.hopper.x, MAP.hopper.z) - 2, 5, 5);
  }
  if (MAP.cistern) {
    mctx.fillStyle = "#4a7080";
    mctx.fillRect(mx(MAP.cistern.x, MAP.cistern.z) - 3, mz(MAP.cistern.x, MAP.cistern.z) - 3, 6, 6);
  }
  if (MAP.drums) {
    mctx.fillStyle = "#3a5a38";
    for (const d of MAP.drums) {
      if (d.dead) continue;
      mctx.fillRect(mx(d.pos.x, d.pos.z) - 1, mz(d.pos.x, d.pos.z) - 1, 3, 3);
    }
  }
  mctx.fillStyle = "#50c868";
  mctx.fillRect(mx(MAP.ammo.x, MAP.ammo.z) - 3, mz(MAP.ammo.x, MAP.ammo.z) - 3, 6, 6);
  mctx.fillStyle = "#c05060";
  mctx.fillRect(mx(MAP.med.x, MAP.med.z) - 3, mz(MAP.med.x, MAP.med.z) - 3, 6, 6);
  if (extractFlareLit) {
    mctx.strokeStyle = "rgba(255,120,40,0.7)";
    mctx.beginPath();
    mctx.arc(mx(MAP.extract.x, MAP.extract.z), mz(MAP.extract.x, MAP.extract.z), 8 + (performance.now() / 180) % 10, 0, Math.PI * 2);
    mctx.stroke();
  }
  mctx.fillStyle = "#e07030";
  for (const st of stakes) {
    mctx.fillRect(mx(st.x, st.z) - 2, mz(st.x, st.z) - 2, 4, 4);
    if (st.ping > 0) {
      mctx.strokeStyle = `rgba(255,120,40,${st.ping})`;
      mctx.beginPath();
      mctx.arc(mx(st.x, st.z), mz(st.x, st.z), 6 + (1.6 - st.ping) * 5, 0, Math.PI * 2);
      mctx.stroke();
    }
  }
  mctx.fillStyle = "#40d060";
  for (const c of chems) {
    mctx.fillRect(mx(c.x, c.z) - 2, mz(c.x, c.z) - 2, 3, 3);
  }
  mctx.fillStyle = "#a8c8ff";
  for (const st of strobes) {
    mctx.fillRect(mx(st.x, st.z) - 2, mz(st.x, st.z) - 2, 3, 3);
    mctx.strokeStyle = "rgba(170,200,255,0.7)";
    mctx.beginPath();
    mctx.arc(mx(st.x, st.z), mz(st.x, st.z), 5 + Math.sin(performance.now() * 0.012) * 2, 0, Math.PI * 2);
    mctx.stroke();
  }
  mctx.fillStyle = "#ff7030";
  for (const s of satchels) mctx.fillRect(mx(s.x, s.z) - 2, mz(s.x, s.z) - 2, 4, 4);
  mctx.fillStyle = "#50e080";
  for (const r of radios) mctx.fillRect(mx(r.x, r.z) - 2, mz(r.x, r.z) - 2, 4, 4);
  mctx.fillStyle = "#70ffb0";
  for (const bcn of beacons) mctx.fillRect(mx(bcn.x, bcn.z) - 2, mz(bcn.x, bcn.z) - 2, 4, 4);
  mctx.fillStyle = "#c03018";
  for (const mo of mortars) {
    mctx.beginPath();
    mctx.arc(mx(mo.x, mo.z), mz(mo.x, mo.z), 5 + (1.35 - mo.t) * 4, 0, Math.PI * 2);
    mctx.strokeStyle = "rgba(200,50,30,0.8)";
    mctx.stroke();
  }
  mctx.fillStyle = "#c44";
  for (const b of bots) {
    if (b.hp <= 0) continue;
    mctx.fillRect(mx(b.pos.x, b.pos.z) - 2, mz(b.pos.x, b.pos.z) - 2, 4, 4);
  }
  for (const p of nadePings) {
    p.t -= 0.016;
    mctx.strokeStyle = `rgba(220,80,40,${Math.max(0, p.t)})`;
    mctx.beginPath();
    mctx.arc(mx(p.x, p.z), mz(p.x, p.z), 5 + (1.6 - p.t) * 6, 0, Math.PI * 2);
    mctx.stroke();
  }
  for (let i = nadePings.length - 1; i >= 0; i--) if (nadePings[i].t <= 0) nadePings.splice(i, 1);
  for (const p of radioPings) {
    p.t -= 0.016;
    mctx.strokeStyle = `rgba(160,220,120,${Math.max(0, p.t)})`;
    mctx.beginPath();
    mctx.arc(mx(p.x, p.z), mz(p.x, p.z), 4 + (1.8 - p.t) * 8, 0, Math.PI * 2);
    mctx.stroke();
  }
  for (let i = radioPings.length - 1; i >= 0; i--) if (radioPings[i].t <= 0) radioPings.splice(i, 1);
  if (MAP.birds) {
    mctx.fillStyle = "rgba(30,24,16,0.7)";
    for (const b of MAP.birds) {
      mctx.fillRect(mx(b.mesh.position.x, b.mesh.position.z) - 1, mz(b.mesh.position.x, b.mesh.position.z) - 1, 2, 2);
    }
  }
  if (player.pin) {
    mctx.strokeStyle = `rgba(232,200,80,${Math.min(1, player.pin.t / 8)})`;
    mctx.beginPath();
    mctx.arc(mx(player.pin.x, player.pin.z), mz(player.pin.x, player.pin.z), 6, 0, Math.PI * 2);
    mctx.stroke();
    mctx.fillStyle = "#e8c050";
    mctx.fillRect(mx(player.pin.x, player.pin.z) - 2, mz(player.pin.x, player.pin.z) - 2, 4, 4);
  }
  for (const p of worldPings) {
    mctx.strokeStyle = `rgba(80,220,120,${Math.min(1, p.t / 8)})`;
    mctx.beginPath();
    mctx.arc(mx(p.x, p.z), mz(p.x, p.z), 5 + Math.sin(performance.now() * 0.008) * 2, 0, Math.PI * 2);
    mctx.stroke();
    mctx.fillStyle = "#70e090";
    mctx.fillRect(mx(p.x, p.z) - 2, mz(p.x, p.z) - 2, 4, 4);
  }
  mctx.fillStyle = "rgba(160,220,120,0.18)";
  mctx.beginPath();
  mctx.moveTo(cx, cz);
  mctx.lineTo(cx - 12, cz - 28);
  mctx.lineTo(cx + 12, cz - 28);
  mctx.closePath();
  mctx.fill();
  mctx.fillStyle = "#9e8";
  mctx.beginPath();
  mctx.arc(cx, cz, 3, 0, Math.PI * 2);
  mctx.fill();
  mctx.strokeStyle = "#cfe8a0";
  mctx.beginPath();
  mctx.moveTo(cx, cz);
  mctx.lineTo(cx, cz - 10);
  mctx.stroke();
}

function drawCompass() {
  const c = document.getElementById("compass");
  if (!c) return;
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);
  const yawDeg = ((-player.yaw * 180) / Math.PI + 36000) % 360;
  const labels = [
    [0, "N"],
    [45, "NE"],
    [90, "E"],
    [135, "SE"],
    [180, "S"],
    [225, "SW"],
    [270, "W"],
    [315, "NW"],
  ];
  ctx.fillStyle = "rgba(10,14,8,0.45)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(200,220,160,0.35)";
  for (let deg = -70; deg <= 70; deg += 10) {
    const x = w / 2 + deg * (w / 140);
    const tall = deg % 30 === 0;
    ctx.fillRect(x - 0.5, tall ? 16 : 20, 1, tall ? 8 : 4);
  }
  ctx.fillStyle = "#cfe8a0";
  ctx.font = "11px sans-serif";
  ctx.textAlign = "center";
  for (const [deg, lab] of labels) {
    let d = deg - yawDeg;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const x = w / 2 + d * (w / 140);
    if (x < 8 || x > w - 8) continue;
    if (lab === "N") {
      ctx.fillStyle = Math.abs(d) < 8 ? "#e8c040" : "#cfe8a0";
    } else ctx.fillStyle = "#cfe8a0";
    ctx.fillText(lab, x, 13);
  }
  ctx.fillStyle = "#e8f0c8";
  ctx.fillRect(w / 2 - 1, 0, 2, h);
  const mark = (pos, color) => {
    const dx = pos.x - player.pos.x;
    const dz = pos.z - player.pos.z;
    let deg = (Math.atan2(dx, -dz) * 180) / Math.PI;
    if (deg < 0) deg += 360;
    let d = deg - yawDeg;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const x = w / 2 + d * (w / 140);
    if (x < 4 || x > w - 4) return;
    ctx.fillStyle = color;
    ctx.fillRect(x - 2, h - 6, 4, 5);
  };
  {
    let d = WIND_DEG - yawDeg;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const x = w / 2 + d * (w / 140);
    if (x > 6 && x < w - 6) {
      ctx.fillStyle = "rgba(180,200,220,0.75)";
      ctx.beginPath();
      ctx.moveTo(x, 2);
      ctx.lineTo(x - 4, 8);
      ctx.lineTo(x + 4, 8);
      ctx.closePath();
      ctx.fill();
    }
  }
  const markLab = (pos, color, lab) => {
    const dx = pos.x - player.pos.x;
    const dz = pos.z - player.pos.z;
    let deg = (Math.atan2(dx, -dz) * 180) / Math.PI;
    if (deg < 0) deg += 360;
    let d = deg - yawDeg;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const x = w / 2 + d * (w / 140);
    if (x < 10 || x > w - 10) return;
    ctx.fillStyle = color;
    ctx.fillRect(x - 2, h - 6, 4, 5);
    ctx.font = "8px sans-serif";
    ctx.fillText(lab, x, h - 7);
  };
  markLab(MAP.extract, player.navLock ? "#fff070" : "#e8d050", "PAD");
  markLab(MAP.hangarDoor, player.navLock ? "#c0d8ff" : "#88a0c8", "HANG");
  if (MAP.warehouseDoor) markLab(MAP.warehouseDoor, "#d0b060", "WARE");
  if (MAP.shedDoor) markLab(MAP.shedDoor, "#c07030", "SHED");
  if (MAP.lookout) markLab(MAP.lookout, "#c8a050", "LOOK");
  if (MAP.radioDoor) markLab(MAP.radioDoor, "#50b888", "RAD");
  if (MAP.shopDoor) markLab(MAP.shopDoor, "#d08030", "SHOP");
  if (MAP.hutDoor) markLab(MAP.hutDoor, "#60a8c8", "HUT");
  if (MAP.cistern) markLab(MAP.cistern, "#70b8d0", "TANK");
  if (MAP.magDoor) markLab(MAP.magDoor, "#d08030", "MAG");
  if (MAP.crushDoor) markLab(MAP.crushDoor, "#d06028", "CRUSH");
  if (MAP.dockDoor) markLab(MAP.dockDoor, "#c87828", "DOCK");
  if (MAP.assayDoor) markLab(MAP.assayDoor, "#c89038", "ASSAY");
  if (MAP.weighDoor) markLab(MAP.weighDoor, "#c8a038", "WEIGH");
  if (MAP.genDoor) markLab(MAP.genDoor, "#68a0c8", "GEN");
  if (MAP.compDoor) markLab(MAP.compDoor, "#c88840", "COMP");
  if (MAP.lubeDoor) markLab(MAP.lubeDoor, "#d0a038", "LUBE");
  if (MAP.washDoor) markLab(MAP.washDoor, "#70c0d8", "WASH");
  if (MAP.tireDoor) markLab(MAP.tireDoor, "#d08830", "TIRE");
  if (MAP.paintDoor) markLab(MAP.paintDoor, "#d06030", "PAINT");
  if (MAP.partsDoor) markLab(MAP.partsDoor, "#c89038", "PARTS");
  if (MAP.weldDoor) markLab(MAP.weldDoor, "#d05028", "WELD");
  if (MAP.battDoor) markLab(MAP.battDoor, "#50c070", "BATT");
  if (MAP.hoistDoor) markLab(MAP.hoistDoor, "#c8a038", "HOIST");
  if (MAP.millDoor) markLab(MAP.millDoor, "#c07028", "MILL");
  if (MAP.kilnDoor) markLab(MAP.kilnDoor, "#e05020", "KILN");
  if (MAP.sortDoor) markLab(MAP.sortDoor, "#b0c040", "SORT");
  if (MAP.labDoor) markLab(MAP.labDoor, "#70c0d8", "LAB");
  if (MAP.powDoor) markLab(MAP.powDoor, "#e07030", "POW");
  if (MAP.fuseDoor) markLab(MAP.fuseDoor, "#d8a030", "FUSE");
  if (MAP.skipDoor) markLab(MAP.skipDoor, "#e0a040", "SKIP");
  if (MAP.tipDoor) markLab(MAP.tipDoor, "#e8b040", "TIP");
  if (MAP.aditDoor) markLab(MAP.aditDoor, "#d8a040", "ADIT");
  if (MAP.winzeDoor) markLab(MAP.winzeDoor, "#e0a060", "WINZE");
  if (MAP.raiseDoor) markLab(MAP.raiseDoor, "#e09040", "RAISE");
  if (MAP.binDoor) markLab(MAP.binDoor, "#e0a050", "BIN");
  if (MAP.thickDoor) markLab(MAP.thickDoor, "#e0b060", "THICK");
  if (MAP.ballDoor) markLab(MAP.ballDoor, "#d0b070", "BALL");
  if (MAP.cycDoor) markLab(MAP.cycDoor, "#d0a858", "CYC");
  if (MAP.pressDoor) markLab(MAP.pressDoor, "#c8a060", "PRESS");
  if (MAP.floatDoor) markLab(MAP.floatDoor, "#c8d888", "FLOAT");
  if (MAP.stackDoor) markLab(MAP.stackDoor, "#e0a060", "STACK");
  if (MAP.slakeDoor) markLab(MAP.slakeDoor, "#e8e0b0", "SLAKE");
  if (MAP.ropeDoor) markLab(MAP.ropeDoor, "#b0c0d0", "ROPE");
  if (MAP.sinterDoor) markLab(MAP.sinterDoor, "#e07040", "SINT");
  if (MAP.sampleDoor) markLab(MAP.sampleDoor, "#c8d080", "SAMP");
  if (MAP.pelletDoor) markLab(MAP.pelletDoor, "#e0a050", "PEL");
  if (MAP.disc) markLab(new THREE.Vector3(MAP.disc.x, 0, MAP.disc.z), "#c89040", "DISC");
  if (MAP.clarDoor) markLab(MAP.clarDoor, "#90c0c8", "CLAR");
  if (MAP.siloDoor) markLab(MAP.siloDoor, "#d0c070", "SILO");
  if (MAP.jigDoor) markLab(MAP.jigDoor, "#e0c070", "JIG");
  if (MAP.hutch) markLab(new THREE.Vector3(MAP.hutch.x, 0, MAP.hutch.z), "#c0a060", "HUTCH");
  if (MAP.coolDoor) markLab(MAP.coolDoor, "#e08050", "COOL");
  if (MAP.bagDoor) markLab(MAP.bagDoor, "#d0d0a0", "BAG");
  if (MAP.fines) markLab(new THREE.Vector3(MAP.fines.x, 0, MAP.fines.z), "#b0a880", "FINES");
  if (MAP.dryDoor) markLab(MAP.dryDoor, "#e07040", "DRY");
  if (MAP.exhaust) markLab(new THREE.Vector3(MAP.exhaust.x, 0, MAP.exhaust.z), "#c08060", "EXH");
  if (MAP.locoDoor) markLab(MAP.locoDoor, "#e0c060", "LOCO");
  if (MAP.steam) markLab(new THREE.Vector3(MAP.steam.x, 0, MAP.steam.z), "#d0c0a0", "STEAM");
  if (MAP.agitDoor) markLab(MAP.agitDoor, "#c0e080", "AGIT");
  if (MAP.slurry) markLab(new THREE.Vector3(MAP.slurry.x, 0, MAP.slurry.z), "#a0b060", "SLURRY");
  if (MAP.scrubDoor) markLab(MAP.scrubDoor, "#80e0c0", "SCRUB");
  if (MAP.liquor) markLab(new THREE.Vector3(MAP.liquor.x, 0, MAP.liquor.z), "#70b090", "LIQUOR");
  if (MAP.ewDoor) markLab(MAP.ewDoor, "#70d0e8", "EW");
  if (MAP.acid) markLab(new THREE.Vector3(MAP.acid.x, 0, MAP.acid.z), "#60c0a0", "ACID");
  if (MAP.coneDoor) markLab(MAP.coneDoor, "#e0a060", "CONE");
  if (MAP.discharge) markLab(new THREE.Vector3(MAP.discharge.x, 0, MAP.discharge.z), "#c09060", "CHUTE");
  if (MAP.clasDoor) markLab(MAP.clasDoor, "#d0c860", "CLAS");
  if (MAP.sands) markLab(new THREE.Vector3(MAP.sands.x, 0, MAP.sands.z), "#c0a060", "SANDS");
  if (MAP.magsDoor) markLab(MAP.magsDoor, "#70b0e0", "MAGS");
  if (MAP.rodDoor) markLab(MAP.rodDoor, "#e0a060", "ROD");
  if (MAP.rodDisch) markLab(new THREE.Vector3(MAP.rodDisch.x, 0, MAP.rodDisch.z), "#c08040", "DISCH");
  if (MAP.sxDoor) markLab(MAP.sxDoor, "#70d090", "SX");
  if (MAP.weir) markLab(new THREE.Vector3(MAP.weir.x, 0, MAP.weir.z), "#50b070", "WEIR");
  if (MAP.conc) markLab(new THREE.Vector3(MAP.conc.x, 0, MAP.conc.z), "#7090c0", "CONC");

  if (MAP.coolCar) markLab(new THREE.Vector3(MAP.coolCar.x, 0, MAP.coolCar.z), "#c07040", "DRUM");
  if (MAP.face) markLab(new THREE.Vector3(MAP.face.x, 0, MAP.face.z), "#e06030", "FACE");
  if (MAP.screw) markLab(new THREE.Vector3(MAP.screw.x, 0, MAP.screw.z), "#c0b060", "SCREW");
  if (MAP.under) markLab(new THREE.Vector3(MAP.under.x, 0, MAP.under.z), "#70a8b0", "UNDER");
  if (MAP.haulCrate) markLab(MAP.haulCrate.pos, "#c88848", "HAUL");
  if (MAP.overflow) markLab(new THREE.Vector3(MAP.overflow.x, 0, MAP.overflow.z), "#b09050", "OVER");
  if (MAP.cycReturn) markLab(new THREE.Vector3(MAP.cycReturn.x, 0, MAP.cycReturn.z), "#8a7848", "FLUME");
  if (MAP.launder) markLab(new THREE.Vector3(MAP.launder.x, 0, MAP.launder.z), "#8a7040", "LAUNDER");
  if (MAP.tail) markLab(new THREE.Vector3(MAP.tail.x, 0, MAP.tail.z), "#8a7050", "TAIL");
  if (MAP.binSkipCrate) markLab(MAP.binSkipCrate.pos, "#d0a050", "SKIP");
  if (MAP.cross) markLab(new THREE.Vector3(MAP.cross.x, 0, MAP.cross.z), "#6a9880", "XCUT");
  if (MAP.cage) markLab(new THREE.Vector3(MAP.cage.x, 0, MAP.cage.z), "#c8b060", "CAGE");
  if (MAP.sluice) markLab(new THREE.Vector3(MAP.sluice.x, 0, MAP.sluice.z), "#6a9a80", "SLUICE");
  if (MAP.tramCrate) markLab(MAP.tramCrate.pos, "#c89040", "TRAM");
  if (player.navLock) {
    const target = player.pos.distanceTo(MAP.extract) <= player.pos.distanceTo(MAP.hangarDoor) ? MAP.extract : MAP.hangarDoor;
    const dx = target.x - player.pos.x;
    const dz = target.z - player.pos.z;
    let deg = (Math.atan2(dx, -dz) * 180) / Math.PI;
    if (deg < 0) deg += 360;
    let d = deg - yawDeg;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const x = w / 2 + d * (w / 140);
    if (x > 8 && x < w - 8) {
      ctx.fillStyle = "#ffe060";
      ctx.beginPath();
      ctx.moveTo(x, 1);
      ctx.lineTo(x - 5, 9);
      ctx.lineTo(x + 5, 9);
      ctx.closePath();
      ctx.fill();
    }
  }
  for (const st of stakes) mark({ x: st.x, z: st.z }, st.ping > 0 ? "#ff8030" : "#c07030");
  for (const c of chems) mark({ x: c.x, z: c.z }, "#40d868");
  for (const st of strobes) mark({ x: st.x, z: st.z }, "#a8c8ff");
  for (const s of satchels) mark({ x: s.x, z: s.z }, s.fuse < 1.5 ? "#ffe060" : "#ff6030");
  for (const r of radios) mark({ x: r.x, z: r.z }, "#60e090");
  for (const bcn of beacons) mark({ x: bcn.x, z: bcn.z }, "#70ffb0");
  for (const m of mortars) mark({ x: m.x, z: m.z }, "#c04020");
  if (lastImpact) {
    lastImpact.t -= 0.016;
    if (lastImpact.t > 0) mark({ x: lastImpact.x, z: lastImpact.z }, "#e8d080");
    else lastImpact = null;
  }
  mark(MAP.ammo, "#50c868");
  mark(MAP.med, "#c05060");
  for (const p of worldPings) mark({ x: p.x, z: p.z }, "#70e090");
  if (player.pin) mark({ x: player.pin.x, z: player.pin.z }, "#e8c050");
  for (const b of bots) {
    if (b.hp <= 0) {
      if (b.reviveT > 0.2) mark(b.pos, "#80c8ff");
      continue;
    }
    if (b.pos.distanceTo(player.pos) > 36) continue;
    mark(b.pos, b.marked > 0 ? "#ffe060" : b.state === "aid" ? "#70b0e0" : "rgba(224,80,64,0.9)");
  }
  for (const k of lastKnown) {
    k.t -= 0.016;
    if (k.t <= 0 || (k.bot && k.bot.hp <= 0)) continue;
    mark({ x: k.x, z: k.z }, k.fire ? "#ffe060" : "rgba(200,70,50,0.85)");
  }
  for (let i = lastKnown.length - 1; i >= 0; i--) {
    if (lastKnown[i].t <= 0 || (lastKnown[i].bot && lastKnown[i].bot.hp <= 0)) lastKnown.splice(i, 1);
  }
}

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

requestAnimationFrame(tick);
feed("Quarry dusk · restock at green crate · extract after hostiles drop");
rollCallsign();
