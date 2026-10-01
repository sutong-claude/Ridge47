import * as THREE from "three";
import { nearestCrate, collideXZ, hasLOS, peekCorners, inHangar, inWarehouse, inShed, inRadio, inShop, inHut, inMag, inCrush, inDock, inAssay, inWeigh, inGen, inComp, inLube, inWash, inTire, inPaint, inParts, inWeld, inBatt, inHoist, inMill, inKiln, inSort, inLab, inPow, inFuse, inSkip, inTip, inAdit, inWinze, inCross, inRaise, inVent, inBin, inTail, inSluice, onBelt, inInterior, MAP } from "./map.js";

export function spawnBots(scene, n = 6) {
  const bots = [];
  const bodyMat = new THREE.MeshLambertMaterial({ color: 0x4a3a28 });
  const helmMat = new THREE.MeshLambertMaterial({ color: 0x2a3228 });
  const spots = [
    [-16, 18], [10, -14], [20, 16], [-18, -18], [28, -8], [-8, 24], [6, 8], [-22, 26], [26, 20], [-26, 10], [34, -12],
  ];
  for (let i = 0; i < n; i++) {
    const g = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.9, 0.35), bodyMat);
    torso.position.y = 1.15;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), helmMat);
    head.position.y = 1.72;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), bodyMat);
    leg.position.set(0.12, 0.35, 0);
    const leg2 = leg.clone();
    leg2.position.x = -0.12;
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.55), helmMat);
    gun.position.set(0.28, 1.22, -0.28);
    gun.name = "rifle";
    const lamp = new THREE.PointLight(0xc8d8ff, 0, 7);
    lamp.position.set(0.1, 1.68, 0.18);
    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 4),
      new THREE.MeshBasicMaterial({ color: 0xe8f0c0, transparent: true, opacity: 0 })
    );
    glint.position.set(0.18, 1.68, -0.16);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xc9a227, transparent: true, opacity: 0 })
    );
    glow.position.set(0, 0.35, 0);
    const heat = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 1.55, 0.4),
      new THREE.MeshBasicMaterial({ color: 0xff6a28, transparent: true, opacity: 0, depthWrite: false })
    );
    heat.position.y = 1.05;
    heat.name = "heat";
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.55, 2.4, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xc8d8ff, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false })
    );
    cone.rotation.x = Math.PI / 2;
    cone.position.set(0.12, 1.62, -1.15);
    cone.visible = false;
    g.add(torso, head, leg, leg2, gun, lamp, glint, glow, cone, heat);
    const [x, z] = spots[i % spots.length];
    g.position.set(x + (i % 2), 0, z);
    scene.add(g);
    bots.push({
      mesh: g,
      pos: g.position,
      hp: 100,
      state: "cover",
      cooldown: 0.5 + Math.random(),
      crouch: false,
      flank: i % 2 === 1,
      peekHold: 0,
      suppress: 0,
      aim: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      lastState: "cover",
      calloutCd: 0.4 + Math.random(),
      nadeCd: 4 + Math.random() * 6,
      reloadT: 0,
      reloadCd: 3 + Math.random() * 5,
      mag: 12 + (i % 6),
      gun,
      lamp,
      glint,
      glow,
      heat,
      cone,
      stun: 0,
      attract: 0,
      unit: `R-${47 + i}`,
      settled: false,
      _spin: (Math.random() - 0.5) * 0.9,
    });
  }
  return bots;
}

function hardCoverPoint(crate, playerPos) {
  const away = crate.pos.clone().sub(playerPos);
  away.y = 0;
  if (away.lengthSq() < 0.01) away.set(1, 0, 0);
  away.normalize();
  return crate.pos.clone().add(away.multiplyScalar(crate.sx * 0.55 + 1.15));
}

/** Player is ADS and aiming near this bot. */
function isAimedAt(playerLook, playerPos, botPos, ads) {
  if (!ads) return false;
  const to = botPos.clone().add(new THREE.Vector3(0, 1.4, 0)).sub(playerPos);
  const dist = to.length();
  if (dist > 36) return false;
  to.normalize();
  return playerLook.dot(to) > 0.94;
}

export function updateBots(bots, playerPos, dt, fireAtPlayer, playerLook, playerAds, onCallout, extractPos, onNade, extractRush) {
  for (const b of bots) {
    if (b.stun > 0) b.stun = Math.max(0, b.stun - dt);
    if (b.attract > 0) b.attract = Math.max(0, b.attract - dt);
    if (b.hp <= 0) {
      const wasUp = (b.mesh.rotation.x || 0) < 1.32;
      b.mesh.rotation.x = Math.min(1.42, b.mesh.rotation.x + dt * 3.2);
      b.mesh.rotation.z += dt * (b._spin || 0.4);
      b.mesh.position.y = Math.max(-0.22, b.mesh.position.y - dt * 1.15);
      if (wasUp && b.mesh.rotation.x >= 1.32 && !b.settled) {
        b.settled = true;
        b._thud = true;
        b._dropGun = true;
        b._gasp = true;
        b.mesh.position.y = -0.18;
        if (b.gun) b.gun.visible = false;
      }
      if (b.glow) {
        b.glow.material.opacity = b.looted ? 0 : 0.28 + Math.sin(performance.now() * 0.008) * 0.18;
        b.glow.position.y = 0.55;
      }
      if (b.lamp) b.lamp.intensity = b.settled ? 0 : 0.4 + Math.sin(performance.now() * 0.04) * 0.4;
      if (b.cone) b.cone.visible = false;
      // Buddy revive: a live unit within 4.4m channels the downed bot back up
      if (b.settled && !b.looted && !b._reviving) {
        const medic = bots.find((o) => o !== b && o.hp > 0 && o.pos.distanceTo(b.pos) < 4.4);
        if (medic) {
          b.reviveT = (b.reviveT || 0) + dt;
          medic.cooldown = Math.max(medic.cooldown, 0.4);
          medic.crouch = true;
          if (b.reviveT >= 2.35) {
            b.hp = 42;
            b.settled = false;
            b.reviveT = 0;
            b.mesh.rotation.x = 0;
            b.mesh.rotation.z = 0;
            b.mesh.position.y = 0;
            if (b.gun) b.gun.visible = true;
            b.mag = 8;
            b.state = "cover";
            b._revived = true;
            b._gasp = false;
          }
        } else b.reviveT = Math.max(0, (b.reviveT || 0) - dt * 0.6);
      }
      continue;
    }
    b.settled = false;
    b._preClick = false;
    if (b.glow) b.glow.material.opacity = 0;
    b.cooldown -= dt;
    b.peekHold = Math.max(0, b.peekHold - dt);
    b.calloutCd = Math.max(0, b.calloutCd - dt);
    b.nadeCd = Math.max(0, b.nadeCd - dt);
    b.reloadCd = Math.max(0, (b.reloadCd || 0) - dt);
    if (b.reloadT > 0) b.reloadT = Math.max(0, b.reloadT - dt);
    else if (b.reloadCd <= 0 && b.mag <= 0) {
      b.reloadT = 1.55;
      b.reloadCd = 6 + Math.random() * 4;
      b.mag = 10 + Math.floor(Math.random() * 6);
      b._dropMag = true;
    }

    if (isAimedAt(playerLook, playerPos, b.pos, playerAds)) {
      b.suppress = Math.min(1.6, b.suppress + dt * 2.4);
    } else {
      b.suppress = Math.max(0, b.suppress - dt * 0.7);
    }
    const pinned = b.suppress > 0.35 || (b.stun || 0) > 0;

    const crate = (MAP.tramCrate && b.pos.distanceTo(MAP.tramCrate.pos) < 14 && !inInterior(playerPos))
      ? MAP.tramCrate
      : nearestCrate(b.pos);
    const toP = playerPos.clone().sub(b.pos);
    toP.y = 0;
    const dist = toP.length();
    const los = hasLOS(b.pos, playerPos);

    let cover = crate ? hardCoverPoint(crate, playerPos) : b.pos.clone();
    const peek = crate ? peekCorners(crate, playerPos) : cover;

    if (pinned) {
      b.state = "cover";
      b.crouch = true;
    } else if (extractRush && dist > 4 && dist < 42) {
      const chase = playerPos.clone();
      chase.y = 0;
      cover.copy(chase);
      b.state = "flank";
      b.crouch = false;
    } else if ((b.attract || 0) > 0 && dist > 3.2) {
      const chase = playerPos.clone();
      chase.y = 0;
      cover.copy(chase);
      b.state = "flank";
      b.crouch = false;
    } else if (!pinned && b.flank && dist > 14 && dist < 40 && !inInterior(playerPos)) {
      const roost = (() => {
        const a = MAP.lookout;
        const c = MAP.cistern;
        if (a && c) return playerPos.distanceTo(a) < playerPos.distanceTo(c) ? a : c;
        return a || c;
      })();
      if (roost) {
        cover.copy(roost);
        cover.y = 0;
        b.state = "overwatch";
        b.crouch = false;
      }
    } else if (!pinned && inInterior(playerPos) && !inInterior(b.pos) && dist < 36) {
      const door =
        inWarehouse(playerPos) && MAP.warehouseDoor
          ? MAP.warehouseDoor
          : inShed(playerPos) && MAP.shedDoor
            ? MAP.shedDoor
            : inRadio(playerPos) && MAP.radioDoor
              ? MAP.radioDoor
              : inShop(playerPos) && MAP.shopDoor
                ? MAP.shopDoor
                : inHut(playerPos) && MAP.hutDoor
                  ? MAP.hutDoor
                  : inMag(playerPos) && MAP.magDoor
                    ? MAP.magDoor
                    : inCrush(playerPos) && MAP.crushDoor
                      ? MAP.crushDoor
                      : inDock(playerPos) && MAP.dockDoor
                        ? MAP.dockDoor
                        : inAssay(playerPos) && MAP.assayDoor
                          ? MAP.assayDoor
                          : inWeigh(playerPos) && MAP.weighDoor
                            ? MAP.weighDoor
                            : inGen(playerPos) && MAP.genDoor
                              ? MAP.genDoor
                              : inComp(playerPos) && MAP.compDoor
                                ? MAP.compDoor
                                : inLube(playerPos) && MAP.lubeDoor
                                  ? MAP.lubeDoor
                                  : inWash(playerPos) && MAP.washDoor
                                    ? MAP.washDoor
                                    : inTire(playerPos) && MAP.tireDoor
                                      ? MAP.tireDoor
                                      : inPaint(playerPos) && MAP.paintDoor
                                        ? MAP.paintDoor
                                        : inParts(playerPos) && MAP.partsDoor
                                          ? MAP.partsDoor
                                          : inWeld(playerPos) && MAP.weldDoor
                                            ? MAP.weldDoor
                                            : inBatt(playerPos) && MAP.battDoor
                                              ? MAP.battDoor
                                              : inHoist(playerPos) && MAP.hoistDoor
                                                ? MAP.hoistDoor
                                                : inMill(playerPos) && MAP.millDoor
                                                  ? MAP.millDoor
                                                  : inKiln(playerPos) && MAP.kilnDoor
                                                    ? MAP.kilnDoor
                                                    : inSort(playerPos) && MAP.sortDoor
                                                      ? MAP.sortDoor
                                                      : inLab(playerPos) && MAP.labDoor
                                                        ? MAP.labDoor
                                                        : inPow(playerPos) && MAP.powDoor
                                                          ? MAP.powDoor
                                                          : inFuse(playerPos) && MAP.fuseDoor
                                                            ? MAP.fuseDoor
                                                            : inSkip(playerPos) && MAP.skipDoor
                                                              ? MAP.skipDoor
                                                              : inTip(playerPos) && MAP.tipDoor
                                                                ? MAP.tipDoor
                                                                : inAdit(playerPos) && MAP.aditDoor
                                                                  ? MAP.aditDoor
                                                                  : inWinze(playerPos) && MAP.winzeDoor
                                                                    ? MAP.winzeDoor
                                                                    : inCross(playerPos) && MAP.winzeDoor
                                                                      ? MAP.winzeDoor
                                                                      : inRaise(playerPos) && MAP.raiseDoor
                                                                        ? MAP.raiseDoor
                                                                        : inVent(playerPos) && MAP.raiseDoor
                                                                          ? MAP.raiseDoor
                                                                          : inBin(playerPos) && MAP.binDoor
                                                                            ? MAP.binDoor
                                                                  : MAP.hangarDoor;
      cover.copy(door);
      cover.y = 0;
      if (b.pos.distanceTo(door) < 2.4) cover.copy(playerPos).setY(0);
      b.state = "breach";
      b.crouch = false;
    } else if (!pinned) {
      const downed = bots.find((o) => o !== b && o.hp <= 0 && o.settled && !o.looted && o.pos.distanceTo(b.pos) < 16);
      if (downed) {
        cover.copy(downed.pos);
        b.state = "aid";
        b.crouch = false;
      }
    }
    if (b.state === "aid") {
      // keep cover on downed teammate
    } else if (b.flank && dist > 8 && dist < 28 && !los) {
      const side = new THREE.Vector3(-toP.z, 0, toP.x).normalize().multiplyScalar(9);
      cover.add(side);
      b.state = "flank";
      b.crouch = false;
    } else if (los && dist < 14) {
      b.state = "peek";
      b.peekHold = 0.9;
      b.crouch = false;
    } else if (b.peekHold > 0) {
      b.state = "peek";
    } else if (crate && hasLOS(peek, playerPos) && dist < 22) {
      b.state = "peek";
      b.crouch = false;
    } else {
      b.state = "cover";
      b.crouch = dist < 10;
    }

    const target = b.state === "peek" && !pinned ? peek.clone() : cover;
    target.y = 0;
    const wish = target.clone().sub(b.pos);
    wish.y = 0;
    if (wish.length() > 0.35) {
      const hurt = b.hp < 40 ? 0.62 : 1;
      const spd = (pinned ? 2.1 : extractRush && b.state === "flank" ? 6.4 : b.state === "breach" ? 6.0 : b.state === "overwatch" ? 4.6 : b.state === "flank" ? 5.2 : 3.6) * hurt;
      wish.normalize().multiplyScalar(spd);
      b.pos.x += wish.x * dt;
      b.pos.z += wish.z * dt;
      collideXZ(b.pos, 0.4);
      if (inSluice(b.pos) && MAP.sluice) {
        b.pos.x += MAP.sluice.vx * dt;
        b.pos.z += MAP.sluice.vz * dt;
        collideXZ(b.pos, 0.4);
      }
      if (inCross(b.pos) && MAP.sump && MAP.sump.on) {
        b.pos.x += 1.4 * dt;
        collideXZ(b.pos, 0.4);
      }
      if (inVent(b.pos) && MAP.fan && MAP.fan.on) {
        b.pos.z += 2.6 * dt;
        collideXZ(b.pos, 0.4);
      }
      if (MAP.carCrate) {
        const c = MAP.carCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        if (Math.abs(dx) < c.sx * 0.42 && Math.abs(dz) < c.sz * 0.42) {
          b.pos.x += MAP.carDx || 0;
          b.pos.z += MAP.carDz || 0;
        }
      }
      if (onBelt(b.pos) && MAP.belt) {
        b.pos.x += MAP.belt.vx * dt;
        b.pos.z += MAP.belt.vz * dt;
        collideXZ(b.pos, 0.4);
      }
      if (MAP.tramCrate) {
        const c = MAP.tramCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        if (Math.abs(dx) < c.sx * 0.4 && Math.abs(dz) < c.sz * 0.4) {
          b.pos.x += MAP.tramDx || 0;
          b.pos.z += MAP.tramDz || 0;
        }
      }
      if (MAP.binSkipCrate) {
        const c = MAP.binSkipCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        if (Math.abs(dx) < c.sx * 0.42 && Math.abs(dz) < c.sz * 0.42) {
          b.pos.x += MAP.binDx || 0;
          b.pos.z += MAP.binDz || 0;
        }
      }
      if (MAP.binDumpT > 0.2 && MAP.binPocket && Math.abs(b.pos.x - MAP.binPocket.x) < MAP.binPocket.hx && Math.abs(b.pos.z - MAP.binPocket.z) < MAP.binPocket.hz) {
        b.pos.z += 1.1 * dt;
      }
      if (inTail(b.pos)) b.pos.z += 0.35 * dt;
      if (b.state === "flank" && onCallout && Math.random() < dt * 3.2) {
        b._dust = true;
      }
    }
    if ((b.state === "flank" || b.state === "breach" || b.state === "overwatch") && b.lastState !== b.state && b.calloutCd <= 0 && onCallout) {
      b.calloutCd = 3.2 + Math.random() * 1.6;
      b._breach = b.state === "breach";
      b._overwatch = b.state === "overwatch";
      onCallout(b);
    }
    b.lastState = b.state;

    b.mesh.lookAt(playerPos.x, 1.2, playerPos.z);
    const deckY = MAP.lookout && b.pos.distanceTo(MAP.lookout) < 1.85 ? 2.95 : 0;
    b.mesh.position.y = deckY + (pinned || b.crouch ? -0.28 : 0);
    if (b.state === "peek" && !pinned) {
      b.leanT = (b.leanT || 0) + dt;
      b.mesh.rotation.z = Math.sin(b.leanT * 2.2) * 0.12;
      b.mesh.position.x += Math.sin(b.leanT * 2.2) * 0.002;
    }
    if (b.state === "cover" && wish.length() <= 0.35 && !pinned) {
      b.idleT = (b.idleT || 0) + dt;
      b.mesh.position.y += Math.sin(b.idleT * 1.4) * 0.03;
      b.mesh.rotation.z = Math.sin(b.idleT * 0.7) * 0.04;
    } else {
      b.idleT = 0;
      b.mesh.rotation.z *= Math.max(0, 1 - dt * 6);
    }
    if (b.lamp) {
      const indoor = inInterior(b.pos);
      b.lamp.intensity = indoor && b.stun <= 0 ? 1.1 : 0;
    }
    if (b.cone) {
      const indoor = inInterior(b.pos);
      b.cone.visible = indoor && b.stun <= 0;
      b.cone.material.opacity = 0.07 + Math.sin(performance.now() * 0.006 + (b.unit || "").length) * 0.03;
    }
    if (b.glint) {
      const peeking = b.state === "peek" && los;
      b.glint.material.opacity = peeking ? 0.55 + Math.sin(performance.now() * 0.012) * 0.35 : 0;
    }
    if (b.gun) {
      const reloading = b.reloadT > 0;
      b.gun.rotation.x = reloading ? -0.85 : 0;
      b.gun.rotation.z = reloading ? 0.55 : 0;
      b.gun.position.set(reloading ? 0.18 : 0.28, reloading ? 1.05 : 1.22, reloading ? -0.05 : -0.28);
    }

    const campingExtract =
      extractPos &&
      playerPos.distanceTo(extractPos) < 4.2 &&
      dist > 8 &&
      dist < 32;
    const campingInterior = inInterior(playerPos);
    const flushCover = dist > 7 && dist < 22 && !los;
    if ((campingExtract || campingInterior || flushCover) && b.nadeCd <= 0 && onNade && !pinned) {
      b.nadeCd = 7 + Math.random() * 5;
      const lead = playerPos.clone();
      lead.y = 1.2;
      lead.x += (Math.random() - 0.5) * 1.6;
      lead.z += (Math.random() - 0.5) * 1.6;
      onNade(b, lead);
    }

    const canShoot = hasLOS(b.pos, playerPos) && dist < 34 && !pinned && b.reloadT <= 0;
    if (canShoot && b.cooldown <= 0 && (b.state === "peek" || dist < 12)) {
      if (!b._preClick) {
        b._preClick = true;
        b._radioClick = true;
      }
      b.cooldown = 0.42 + Math.random() * 0.55 + b.suppress * 0.4;
      b.mag = Math.max(0, (b.mag ?? 8) - 1);
      const miss = 0.07 + b.suppress * 0.08;
      const dir = playerPos.clone().add(new THREE.Vector3(0, 1.4, 0)).sub(b.pos.clone().setY(1.5));
      dir.x += (Math.random() - 0.5) * miss * dist;
      dir.y += (Math.random() - 0.5) * miss * 4;
      dir.z += (Math.random() - 0.5) * miss * dist;
      dir.normalize();
      fireAtPlayer(b, dir);
    }
  }
}

export function reinforce(scene, bots, n = 2) {
  const bodyMat = new THREE.MeshLambertMaterial({ color: 0x3e3424 });
  const helmMat = new THREE.MeshLambertMaterial({ color: 0x243028 });
  const spots = [[-6.5, 45.2], [4.2, 45.4], [12.5, 44.6]];
  for (let i = 0; i < n; i++) {
    const g = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.9, 0.35), bodyMat);
    torso.position.y = 1.15;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), helmMat);
    head.position.y = 1.72;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), bodyMat);
    leg.position.set(0.12, 0.35, 0);
    const leg2 = leg.clone();
    leg2.position.x = -0.12;
    const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.55), helmMat);
    gun.position.set(0.28, 1.22, -0.28);
    gun.name = "rifle";
    const lamp = new THREE.PointLight(0xc8d8ff, 0, 7);
    lamp.position.set(0.1, 1.68, 0.18);
    const glint = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 4),
      new THREE.MeshBasicMaterial({ color: 0xe8f0c0, transparent: true, opacity: 0 })
    );
    glint.position.set(0.18, 1.68, -0.16);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0xc9a227, transparent: true, opacity: 0 })
    );
    glow.position.set(0, 0.35, 0);
    const heat = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 1.55, 0.4),
      new THREE.MeshBasicMaterial({ color: 0xff6a28, transparent: true, opacity: 0, depthWrite: false })
    );
    heat.position.y = 1.05;
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.55, 2.4, 8, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xc8d8ff, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false })
    );
    cone.rotation.x = Math.PI / 2;
    cone.position.set(0.12, 1.62, -1.15);
    cone.visible = false;
    g.add(torso, head, leg, leg2, gun, lamp, glint, glow, cone, heat);
    const [x, z] = spots[i % spots.length];
    g.position.set(x, 0, z);
    scene.add(g);
    bots.push({
      mesh: g,
      pos: g.position,
      hp: 90,
      state: "flank",
      cooldown: 0.3,
      crouch: false,
      flank: true,
      peekHold: 0,
      suppress: 0,
      aim: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      lastState: "flank",
      calloutCd: 0.2,
      nadeCd: 2 + Math.random() * 3,
      reloadT: 0,
      reloadCd: 2.5,
      mag: 14,
      gun,
      lamp,
      glint,
      glow,
      heat,
      cone,
      stun: 0,
      attract: 0,
      unit: `R-Q${i + 1}`,
      settled: false,
      reinforce: true,
      _spin: (Math.random() - 0.5) * 0.9,
    });
  }
}
