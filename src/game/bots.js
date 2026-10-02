import * as THREE from "three";
import { nearestCrate, collideXZ, hasLOS, peekCorners, inHangar, inWarehouse, inShed, inRadio, inShop, inHut, inMag, inCrush, inDock, inAssay, inWeigh, inGen, inComp, inLube, inWash, inTire, inPaint, inParts, inWeld, inBatt, inHoist, inMill, inKiln, inSort, inLab, inPow, inFuse, inSkip, inTip, inAdit, inWinze, inCross, inRaise, inVent, inBin, inTail, inThick, inLaunder, inBall, inCyc, inSpiral, inOverflow, inReturn, inPress, inFloat, inFroth, inFloatLaunder, inStack, onStackBoom, onHaul, onTech, inSlake, inMilk, inRope, onBucket, inSinter, onStrand, inSample, onSampleBoom, inReject, inPellet, onDisc, inChute, inClar, onBridge, inUnder, inSilo, onScrew, inJig, onJigDeck, inHutch, inCool, onCoolCar, inQuench, inFall, inBag, onBagRack, inFines, inDry, onDryShell, inExhaust, inLoco, onLoco, inSteam, inAgit, onRake, inSlurry, inScrub, onScrubTray, inLiquor, inEw, onCathode, inAcid, inCone, onMantle, inDischarge, inClas, onClasRake, inSands, inMags, onMagDrum, inConc, inRod, onRodCharge, inRodDisch, inSx, onSxMixer, inWeir, inCil, onCilBasket, inPulp, onCarbonScrew, inElu, onEluCage, inStrip, inMc, onMcLeaf, inBarren, inCcd, onCcdRake, inCcdUnder, inPox, onPoxShell, inPoxVent, inRet, onRetDrum, inFlue, inRev, onHearth, inSlag, inStamp, onMortar, inStampFines, inJaw, onApron, inJawRock, inSag, onSagShell, inSagDisch, inHeap, onHeapBoom, inPreg, inGall, onOreCar, inDump, inSluice, onBelt, inInterior, onMezz, onCable, onYard, onHighDeck, inAnnex, onAnnexBelt, onCrane, inDispatch, onCage, onDispatchLoft, inShip, onShipCart, inPack, onPackSled, inPackPress, MAP } from "./map.js";

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
    if (i === 0) g.position.set(-21.4, 3.26, 28.55);
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
      if (b.settled && !b.looted && MAP.medCrate && MAP.med && MAP.med.medic > 0 && !MAP.med.stalled) {
        const c = MAP.medCrate;
        if (b.pos.distanceTo(c.pos) < 7.5) {
          MAP.med.hold = 1.2;
          b.medT = (b.medT || 0) + dt;
          if (b.medT >= 3.4) {
            b.hp = 40;
            b.settled = false;
            b.medT = 0;
            b.mesh.rotation.x = 0;
            b.mesh.rotation.z = 0;
            b.mesh.position.y = 0;
            if (b.gun) b.gun.visible = true;
            b.mag = 8;
            b.state = "cover";
            b._revived = true;
            b._medevac = true;
          }
        } else b.medT = Math.max(0, (b.medT || 0) - dt);
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
        inJig(playerPos) || onJigDeck(playerPos) || inHutch(playerPos) ? MAP.jigDoor
          : inCool(playerPos) || onCoolCar(playerPos) || inQuench(playerPos) ? MAP.coolDoor
          : inBag(playerPos) || onBagRack(playerPos) || inFines(playerPos) ? MAP.bagDoor
          : inDry(playerPos) || onDryShell(playerPos) || inExhaust(playerPos) ? MAP.dryDoor
          : inLoco(playerPos) || onLoco(playerPos) || inSteam(playerPos) ? MAP.locoDoor
          : inAgit(playerPos) || onRake(playerPos) || inSlurry(playerPos) ? MAP.agitDoor
          : inScrub(playerPos) || onScrubTray(playerPos) || inLiquor(playerPos) ? MAP.scrubDoor
          : inEw(playerPos) || onCathode(playerPos) || inAcid(playerPos) ? MAP.ewDoor
          : inCone(playerPos) || onMantle(playerPos) || inDischarge(playerPos) ? MAP.coneDoor
          : inClas(playerPos) || onClasRake(playerPos) || inSands(playerPos) ? MAP.clasDoor
          : inMags(playerPos) || onMagDrum(playerPos) || inConc(playerPos) ? MAP.magsDoor
          : inRod(playerPos) || onRodCharge(playerPos) || inRodDisch(playerPos) ? MAP.rodDoor
          : inSx(playerPos) || onSxMixer(playerPos) || inWeir(playerPos) ? MAP.sxDoor
          : inCil(playerPos) || onCilBasket(playerPos) || inPulp(playerPos) || onCarbonScrew(playerPos) ? MAP.cilDoor
          : inMc(playerPos) || onMcLeaf(playerPos) || inBarren(playerPos) ? MAP.mcDoor
          : inCcd(playerPos) || onCcdRake(playerPos) || inCcdUnder(playerPos) ? MAP.ccdDoor
          : inPox(playerPos) || onPoxShell(playerPos) || inPoxVent(playerPos) ? MAP.poxDoor
          : inRet(playerPos) || onRetDrum(playerPos) || inFlue(playerPos) ? MAP.retDoor
          : inRev(playerPos) || onHearth(playerPos) || inSlag(playerPos) ? MAP.revDoor
          : inStamp(playerPos) || onMortar(playerPos) || inStampFines(playerPos) ? MAP.stampDoor
          : inGall(playerPos) || onOreCar(playerPos) || inDump(playerPos) ? MAP.gallDoor
          : inHeap(playerPos) || onHeapBoom(playerPos) || inPreg(playerPos) ? MAP.heapDoor
          : inSag(playerPos) || onSagShell(playerPos) || inSagDisch(playerPos) ? MAP.sagDoor
          : inJaw(playerPos) || onApron(playerPos) || inJawRock(playerPos) ? MAP.jawDoor
          : inElu(playerPos) || onEluCage(playerPos) || inStrip(playerPos) ? MAP.eluDoor
          : inPack(playerPos) || onPackSled(playerPos) ? MAP.packDoor
          : inShip(playerPos) || onShipCart(playerPos) ? MAP.shipDoor
          : inDispatch(playerPos) || onCage(playerPos) ? MAP.dispatchDoor
          : inAnnex(playerPos) && MAP.annexDoor
          ? MAP.annexDoor
          : (inWarehouse(playerPos) || onMezz(playerPos) || onCrane(playerPos)) && MAP.warehouseDoor
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
                                                                            : inThick(playerPos) && MAP.thickDoor
                                                                              ? MAP.thickDoor
                                                                              : inLaunder(playerPos) && MAP.thickDoor
                                                                                ? MAP.thickDoor
                                                                                : inBall(playerPos) && MAP.ballDoor
                                                                                  ? MAP.ballDoor
                                                                                  : inCyc(playerPos) && MAP.cycDoor
                                                                                    ? MAP.cycDoor
                                                                                    : inSpiral(playerPos) && MAP.cycDoor
                                                                                      ? MAP.cycDoor
                                                                                      : inOverflow(playerPos) && MAP.cycDoor
                                                                                        ? MAP.cycDoor
                                                                                        : inFloat(playerPos) && MAP.floatDoor
                                                                                          ? MAP.floatDoor
                                                                                          : inFroth(playerPos) && MAP.floatDoor
                                                                                            ? MAP.floatDoor
                                                                                            : inFloatLaunder(playerPos) && MAP.floatDoor
                                                                                              ? MAP.floatDoor
                                                                                              : inStack(playerPos) && MAP.stackDoor
                                                                                                ? MAP.stackDoor
                                                                                                : inSlake(playerPos) && MAP.slakeDoor
                                                                                                  ? MAP.slakeDoor
                                                                                                  : inMilk(playerPos) && MAP.slakeDoor
                                                                                                    ? MAP.slakeDoor
                                                                                                    : inRope(playerPos) && MAP.ropeDoor
                                                                                                      ? MAP.ropeDoor
                                                                                                      : inSinter(playerPos) && MAP.sinterDoor
                                                                                                        ? MAP.sinterDoor
                                                                                                        : onStrand(playerPos) && MAP.sinterDoor
                                                                                                          ? MAP.sinterDoor
                                                                                                          : inSilo(playerPos) && MAP.siloDoor
                                                                                                            ? MAP.siloDoor
                                                                                                            : onScrew(playerPos) && MAP.siloDoor
                                                                                                            ? MAP.siloDoor
                                                                                                            : inPellet(playerPos) && MAP.pelletDoor
                                                                                                            ? MAP.pelletDoor
                                                                                                            : onDisc(playerPos) && MAP.pelletDoor
                                                                                                            ? MAP.pelletDoor
                                                                                                            : inChute(playerPos) && MAP.pelletDoor
                                                                                                            ? MAP.pelletDoor
                                                                                                            : inClar(playerPos) && MAP.clarDoor
                                                                                                            ? MAP.clarDoor
                                                                                                            : onBridge(playerPos) && MAP.clarDoor
                                                                                                            ? MAP.clarDoor
                                                                                                            : inUnder(playerPos) && MAP.clarDoor
                                                                                                            ? MAP.clarDoor
                                                                                                            : inSample(playerPos) && MAP.sampleDoor
                                                                                                            ? MAP.sampleDoor
                                                                                                            : inReject(playerPos) && MAP.sampleDoor
                                                                                                              ? MAP.sampleDoor
                                                                                                              : inPress(playerPos) && MAP.pressDoor
                                                                                                  ? MAP.pressDoor
                                                                  : MAP.hangarDoor;
      cover.copy(door);
      cover.y = 0;
      if (b.pos.distanceTo(door) < 2.4) cover.copy(playerPos).setY(0);
      if (onMezz(playerPos) && MAP.mezzLadders && b.pos.y < 2.2) {
        let best = MAP.mezzLadders[0];
        let bd = Infinity;
        for (const L of MAP.mezzLadders) {
          const dd = Math.hypot(b.pos.x - L.x, b.pos.z - L.z);
          if (dd < bd) {
            bd = dd;
            best = L;
          }
        }
        if (b.pos.z > 22.35 || !MAP.bayDoor || MAP.bayDoor.open > 0.45) cover.set(best.x, 0, best.z);
        else if (MAP.cable) cover.set(-30.2, 0, 28.65);
      }
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
      if (MAP.techCrate && b.hp > 0) {
        const c = MAP.techCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.2 && Math.abs(dz) < 0.85;
        if (onBed && (b.pos.y > 0.4 || b._techRide)) {
          b.pos.x += MAP.techDx || 0;
          b.pos.z += MAP.techDz || 0;
          b.mesh.position.y = 1.05;
          b._techRide = true;
        } else if (onBed && MAP.tech && !MAP.tech.stalled) {
          b.pos.x += Math.sign(dx || 1) * 1.4 * dt;
          b.pos.z += Math.sign(dz || 1) * 1.4 * dt;
        }
        const wantBed = extractPos && playerPos.distanceTo(extractPos) < 8 && b.pos.distanceTo(c.pos) < 16 && !onBed && b.pos.y < 2;
        if (wantBed && b.state !== "down") {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.2 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.2 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.3) {
            b.mesh.position.y = 1.05;
            b._techRide = true;
          }
        } else if (!onBed && b._techRide) {
          b.mesh.position.y = 0;
          b._techRide = false;
        }
      }
      if (MAP.bowserCrate && b.hp > 0 && b.state !== "down") {
        const c = MAP.bowserCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.15 && Math.abs(dz) < 0.8;
        if (onBed && (b.pos.y > 0.4 || b._bowseRide)) {
          b.pos.x += MAP.bowserDx || 0;
          b.pos.z += MAP.bowserDz || 0;
          b.mesh.position.y = 1.2;
          b._bowseRide = true;
        }
        const want = playerPos && playerPos.z > 0 && playerPos.x > 8 && b.pos.distanceTo(c.pos) < 18 && !onBed && b.pos.y < 2;
        if (want) {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.1 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.1 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.25) b._bowseRide = true;
        } else if (!onBed && b._bowseRide) {
          b.mesh.position.y = 0;
          b._bowseRide = false;
        }
      }
      if (MAP.gunCrate && b.hp > 0 && b.state !== "down") {
        const c = MAP.gunCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.2 && Math.abs(dz) < 0.9;
        if (onBed && (b.pos.y > 0.4 || b._gunRide)) {
          b.pos.x += MAP.gunDx || 0;
          b.pos.z += MAP.gunDz || 0;
          b.mesh.position.y = 1.15;
          b._gunRide = true;
        }
        const want = playerPos && playerPos.z < -18 && b.pos.distanceTo(c.pos) < 16 && !onBed && b.pos.y < 2 && !(MAP.gun && MAP.gun.stalled);
        if (want) {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.2 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.2 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.3) b._gunRide = true;
        } else if (!onBed && b._gunRide) {
          b.mesh.position.y = 0;
          b._gunRide = false;
        }
      }
      if (MAP.dozerCrate && b.hp > 0 && b.state !== "down") {
        const c = MAP.dozerCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.15 && Math.abs(dz) < 0.9;
        if (onBed && (b.pos.y > 0.4 || b._dozerRide)) {
          b.pos.x += MAP.dozerDx || 0;
          b.pos.z += MAP.dozerDz || 0;
          b.mesh.position.y = 1.05;
          b._dozerRide = true;
        }
        const want = playerPos && playerPos.z > 16 && playerPos.x < 8 && b.pos.distanceTo(c.pos) < 16 && !onBed && b.pos.y < 2 && !(MAP.dozer && MAP.dozer.stalled);
        if (want) {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.0 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.0 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.25) b._dozerRide = true;
        } else if (!onBed && b._dozerRide) {
          b.mesh.position.y = 0;
          b._dozerRide = false;
        }
        if (MAP.dozer && MAP.dozer.ram && !onBed && b.pos.y < 1.5) {
          const yaw = MAP.dozer.yaw || 0;
          const fwd = Math.cos(yaw) * dx - Math.sin(yaw) * dz;
          if (fwd > 0.5 && Math.hypot(dx, dz) < 2.3) {
            b.pos.x += Math.cos(yaw) * 3.4 * dt;
            b.pos.z -= Math.sin(yaw) * 3.4 * dt;
            b.hp -= 8 * dt;
          }
        }
      }
      if (MAP.medCrate && b.hp > 0 && b.state !== "down") {
        const c = MAP.medCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.15 && Math.abs(dz) < 0.85;
        if (onBed && (b.pos.y > 0.4 || b._medRide)) {
          b.pos.x += MAP.medDx || 0;
          b.pos.z += MAP.medDz || 0;
          b.mesh.position.y = 1.1;
          b._medRide = true;
        }
        const want = playerPos && playerPos.x > 20 && playerPos.z < -2 && b.pos.distanceTo(c.pos) < 16 && !onBed && b.pos.y < 2 && !(MAP.med && MAP.med.stalled);
        if (want) {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.1 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.1 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.25) b._medRide = true;
        } else if (!onBed && b._medRide) {
          b.mesh.position.y = 0;
          b._medRide = false;
        }
      }
      if (MAP.fuelCrate && b.hp > 0 && b.state !== "down" && !(MAP.fuel && MAP.fuel.cooked)) {
        const c = MAP.fuelCrate;
        const dx = b.pos.x - c.pos.x;
        const dz = b.pos.z - c.pos.z;
        const onBed = Math.abs(dx) < 1.25 && Math.abs(dz) < 0.9;
        if (onBed && (b.pos.y > 0.4 || b._fuelRide)) {
          b.pos.x += MAP.fuelDx || 0;
          b.pos.z += MAP.fuelDz || 0;
          b.mesh.position.y = 1.35;
          b._fuelRide = true;
        }
        const want = playerPos && playerPos.x < -12 && playerPos.z > 2 && playerPos.z < 28 && b.pos.distanceTo(c.pos) < 16 && !onBed && b.pos.y < 2 && !(MAP.fuel && MAP.fuel.stalled);
        if (want) {
          b.pos.x += Math.sign(c.pos.x - b.pos.x) * Math.min(2.1 * dt, Math.abs(c.pos.x - b.pos.x));
          b.pos.z += Math.sign(c.pos.z - b.pos.z) * Math.min(2.1 * dt, Math.abs(c.pos.z - b.pos.z));
          if (b.pos.distanceTo(c.pos) < 1.3) b._fuelRide = true;
        } else if (!onBed && b._fuelRide) {
          b.mesh.position.y = 0;
          b._fuelRide = false;
        }
      }
      if (MAP.fuelGate && MAP.fuelGate.open < 0.4 && MAP.fuelGatePost && b.hp > 0 && playerPos && playerPos.distanceTo(MAP.fuelGatePost) < 7 && b.pos.distanceTo(MAP.fuelGatePost) < 2.2) {
        b._fuelKick = (b._fuelKick || 0) + dt;
        if (b._fuelKick > 0.8) {
          MAP.fuelGate.target = 1;
          b._fuelKick = 0;
        }
      }
      if (MAP.padGate && MAP.padGate.open < 0.4 && MAP.padGatePost && b.hp > 0 && playerPos && playerPos.distanceTo(MAP.padGatePost) < 7 && b.pos.distanceTo(MAP.padGatePost) < 2.2) {
        b._gateKick = (b._gateKick || 0) + dt;
        if (b._gateKick > 0.7) {
          MAP.padGate.target = 1;
          b._gateKick = 0;
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
      if (inLaunder(b.pos) && MAP.thick && MAP.thick.on) b.pos.z += 1.6 * dt;
      if (inThick(b.pos) && MAP.thick && MAP.thick.dAngle) {
        const dx = b.pos.x - 27.2;
        const dz = b.pos.z - -44.2;
        const r = Math.hypot(dx, dz);
        if (r > 0.4 && r < 2.1) {
          const a = MAP.thick.dAngle;
          b.pos.x = 27.2 + dx * Math.cos(a) - dz * Math.sin(a);
          b.pos.z = -44.2 + dx * Math.sin(a) + dz * Math.cos(a);
        }
      }
      if (inBall(b.pos) && MAP.ball && MAP.ball.on) {
        const dx = b.pos.x - -6.5;
        const dz = b.pos.z - 44.15;
        b.pos.x += -dz * 0.55 * dt;
        b.pos.z += dx * 0.55 * dt;
      }
      if (inSpiral(b.pos) && MAP.cyc && MAP.cyc.on) b.pos.z += (MAP.spiral ? MAP.spiral.vz : -2.2) * dt;
      if (inOverflow(b.pos) && MAP.cyc && MAP.cyc.on) b.pos.z += (MAP.overflow ? MAP.overflow.vz : -1.4) * dt;
      if (inReturn(b.pos) && MAP.cyc && MAP.cyc.on) b.pos.x += (MAP.cycReturn ? MAP.cycReturn.vx : 2.1) * dt;
      if (inPress(b.pos) && MAP.press && MAP.press.on && MAP.press.gap < 0.55) b.pos.x -= 1.8 * dt;
      if (inFloatLaunder(b.pos)) b.pos.z += (MAP.floatLaunder ? MAP.floatLaunder.vz : -2) * dt;
      if (onStackBoom(b.pos) && MAP.stack && MAP.stack.on) {
        b.pos.x += MAP.stackBoom.dx || 0;
        b.pos.z += MAP.stackBoom.dz || 0;
      }
      if (onHaul(b.pos)) b.pos.x += MAP.haulDx || 0;
      if (b.state === "flank" && onCallout && Math.random() < dt * 3.2) {
        b._dust = true;
      }
    }
    if (inLaunder(b.pos) && MAP.thick && MAP.thick.on) {
      b.pos.z += 1.6 * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inBall(b.pos) && MAP.ball && MAP.ball.on) {
      const dx = b.pos.x + 6.5;
      const dz = b.pos.z - 44.15;
      b.pos.x += -dz * 0.55 * dt;
      b.pos.z += dx * 0.55 * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inSpiral(b.pos) && MAP.cyc && MAP.cyc.on) {
      b.pos.z += (MAP.spiral ? MAP.spiral.vz : -2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inOverflow(b.pos) && MAP.cyc && MAP.cyc.on) {
      b.pos.z += (MAP.overflow ? MAP.overflow.vz : -1.4) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inReturn(b.pos) && MAP.cyc && MAP.cyc.on) {
      b.pos.x += (MAP.cycReturn ? MAP.cycReturn.vx : 2.1) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inPress(b.pos) && MAP.press && MAP.press.on && MAP.press.gap < 0.55) {
      b.pos.x -= 1.8 * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inFloatLaunder(b.pos)) {
      b.pos.z += (MAP.floatLaunder ? MAP.floatLaunder.vz : -2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onStackBoom(b.pos) && MAP.stack && MAP.stack.on) {
      b.pos.x += MAP.stackBoom.dx || 0;
      b.pos.z += MAP.stackBoom.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (onHaul(b.pos)) {
      b.pos.x += MAP.haulDx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inMilk(b.pos)) {
      b.pos.z += (MAP.milk ? MAP.milk.vz : -2.2) * dt;
      collideXZ(b.pos, 0.4);
      if (MAP.slake && MAP.slake.on) b.hp -= 3.5 * dt;
    }
    if (onStrand(b.pos) && MAP.strand && MAP.strand.on) {
      b.pos.x += MAP.strand.dx || 0;
      collideXZ(b.pos, 0.4);
    }

    if (onJigDeck(b.pos) && MAP.jigDeck) {
      b.pos.z += MAP.jigDeck.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inHutch(b.pos)) {
      b.pos.x += (MAP.hutch ? MAP.hutch.vx : -2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inJig(b.pos) && MAP.jig && MAP.jig.on) b.hp -= 2.4 * dt;
    if (onCoolCar(b.pos) && MAP.coolCar) {
      b.pos.x += MAP.coolCar.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inQuench(b.pos)) {
      b.pos.z += (MAP.quench ? MAP.quench.vz : -2.1) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inCool(b.pos) && MAP.cool && MAP.cool.on) b.hp -= 3.4 * dt;
    if (inFall(b.pos)) {
      b.pos.z += (MAP.fall ? MAP.fall.vz : -2.6) * dt;
      b.hp -= 8 * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onBagRack(b.pos) && MAP.bagRack) {
      b.pos.x += MAP.bagRack.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inFines(b.pos)) {
      b.pos.z += (MAP.fines ? MAP.fines.vz : 2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inBag(b.pos) && MAP.bag && MAP.bag.on) b.hp -= 1.8 * dt;
    if (onDryShell(b.pos) && MAP.dryShell) {
      b.pos.x += MAP.dryShell.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inExhaust(b.pos)) {
      b.pos.z += (MAP.exhaust ? MAP.exhaust.vz : -2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inDry(b.pos) && MAP.dry && MAP.dry.on) b.hp -= 3.1 * dt;

    if (onLoco(b.pos) && MAP.locoEngine) {
      b.pos.z += MAP.locoEngine.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inSteam(b.pos)) {
      b.pos.z += (MAP.steam ? MAP.steam.vz : -2.4) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inLoco(b.pos) && MAP.loco && MAP.loco.on) b.hp -= 2.4 * dt;
    if (onRake(b.pos) && MAP.agitRake) {
      const w = (MAP.agit && MAP.agit.on ? 0.9 : 0.04) * dt;
      const dx = b.pos.x - MAP.agitRake.x;
      const dz = b.pos.z - MAP.agitRake.z;
      b.pos.x = MAP.agitRake.x + dx * Math.cos(w) - dz * Math.sin(w);
      b.pos.z = MAP.agitRake.z + dx * Math.sin(w) + dz * Math.cos(w);
      collideXZ(b.pos, 0.4);
    }
    if (inSlurry(b.pos)) {
      b.pos.x += (MAP.slurry ? MAP.slurry.vx : 2.35) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inAgit(b.pos) && MAP.agit && MAP.agit.on) b.hp -= 1.6 * dt;
    if (onScrubTray(b.pos) && MAP.scrubTray) {
      b.pos.x += MAP.scrubTray.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inLiquor(b.pos)) {
      b.pos.x += (MAP.liquor ? MAP.liquor.vx : -2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inScrub(b.pos) && MAP.scrub && MAP.scrub.on) b.hp -= 2.2 * dt;
    if (onCathode(b.pos) && MAP.cathode) {
      b.pos.x += MAP.cathode.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inAcid(b.pos)) {
      b.pos.z += (MAP.acid ? MAP.acid.vz : -2.25) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inEw(b.pos) && MAP.ew && MAP.ew.on) b.hp -= 2.0 * dt;
    if (onMantle(b.pos) && MAP.mantle) {
      const w = (MAP.mantle._omega || 0.05) * dt;
      const dx = b.pos.x - MAP.mantle.x;
      const dz = b.pos.z - MAP.mantle.z;
      b.pos.x = MAP.mantle.x + dx * Math.cos(w) - dz * Math.sin(w);
      b.pos.z = MAP.mantle.z + dx * Math.sin(w) + dz * Math.cos(w);
      collideXZ(b.pos, 0.4);
    }
    if (inDischarge(b.pos)) {
      b.pos.x += (MAP.discharge ? MAP.discharge.vx : 2.4) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inCone(b.pos) && MAP.cone && MAP.cone.on) b.hp -= 2.4 * dt;
    if (onClasRake(b.pos) && MAP.clasRake) {
      b.pos.z += MAP.clasRake.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inSands(b.pos)) {
      b.pos.x += (MAP.sands ? MAP.sands.vx : -2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inClas(b.pos) && MAP.clas && MAP.clas.on) b.hp -= 2.1 * dt;
    if (onMagDrum(b.pos) && MAP.magDrum) {
      const w = (MAP.magDrum._omega || 0.04) * dt;
      const dx = b.pos.x - MAP.magDrum.x;
      const dz = b.pos.z - MAP.magDrum.z;
      b.pos.x = MAP.magDrum.x + dx * Math.cos(w) - dz * Math.sin(w);
      b.pos.z = MAP.magDrum.z + dx * Math.sin(w) + dz * Math.cos(w);
      collideXZ(b.pos, 0.4);
    }
    if (inConc(b.pos)) {
      b.pos.z += (MAP.conc ? MAP.conc.vz : -2.35) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inMags(b.pos) && MAP.mags && MAP.mags.on) b.hp -= 1.8 * dt;

    if (onRodCharge(b.pos) && MAP.rodCharge) {
      const w = (MAP.rodCharge._omega || 0.05) * dt;
      const dx = b.pos.x - MAP.rodCharge.x;
      const dz = b.pos.z - MAP.rodCharge.z;
      b.pos.x = MAP.rodCharge.x + dx * Math.cos(w) - dz * Math.sin(w);
      b.pos.z = MAP.rodCharge.z + dx * Math.sin(w) + dz * Math.cos(w);
      collideXZ(b.pos, 0.4);
    }
    if (inRodDisch(b.pos)) {
      b.pos.z += (MAP.rodDisch ? MAP.rodDisch.vz : -2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inRod(b.pos) && MAP.rod && MAP.rod.on) b.hp -= 2.2 * dt;
    if (onSxMixer(b.pos) && MAP.sxMixer) {
      b.pos.x += MAP.sxMixer.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inWeir(b.pos)) {
      b.pos.x += (MAP.weir ? MAP.weir.vx : 2.25) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inSx(b.pos) && MAP.sx && MAP.sx.on) b.hp -= 1.7 * dt;

    if (onCilBasket(b.pos) && MAP.cilBasket) {
      b.pos.z += MAP.cilBasket.dz || 0;
      b.pos.y += MAP.cilBasket.dy || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inPulp(b.pos)) {
      b.pos.x += (MAP.pulp ? MAP.pulp.vx : -2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onCarbonScrew(b.pos)) {
      b.pos.x += (MAP.carbonScrew ? MAP.carbonScrew.vx : -2.6) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inCil(b.pos) && MAP.cil && MAP.cil.on) b.hp -= 1.8 * dt;
    if (onEluCage(b.pos) && MAP.eluCage) {
      b.pos.y += MAP.eluCage.dy || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inStrip(b.pos)) {
      b.pos.z += (MAP.strip ? MAP.strip.vz : -2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inElu(b.pos) && MAP.elu && MAP.elu.on) b.hp -= 2.0 * dt;
    if (onMcLeaf(b.pos) && MAP.mcLeaf) {
      b.pos.z += MAP.mcLeaf.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inBarren(b.pos)) {
      b.pos.z += (MAP.barren ? MAP.barren.vz : -2.15) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inMc(b.pos) && MAP.mc && MAP.mc.on) b.hp -= 1.6 * dt;
    if (onCcdRake(b.pos) && MAP.ccdRake) {
      b.pos.x += MAP.ccdRake.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inCcdUnder(b.pos)) {
      b.pos.z += (MAP.ccdUnder ? MAP.ccdUnder.vz : 2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inCcd(b.pos) && MAP.ccd && MAP.ccd.on) b.hp -= 1.7 * dt;
    if (onPoxShell(b.pos) && MAP.poxShell && MAP.pox && MAP.pox.on) {
      const ang = (MAP.poxShell.omega || 0) * dt;
      const dx = b.pos.x - MAP.poxShell.x;
      const dz = b.pos.z - MAP.poxShell.z;
      const c = Math.cos(ang);
      const sn = Math.sin(ang);
      b.pos.x = MAP.poxShell.x + dx * c - dz * sn;
      b.pos.z = MAP.poxShell.z + dx * sn + dz * c;
      collideXZ(b.pos, 0.4);
    }
    if (inPoxVent(b.pos)) {
      b.pos.x += (MAP.poxVent ? MAP.poxVent.vx : 2.35) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inPox(b.pos) && MAP.pox && MAP.pox.on) b.hp -= 2.2 * dt;
    if (onRetDrum(b.pos) && MAP.retDrum) {
      b.pos.x += MAP.retDrum.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inFlue(b.pos)) {
      b.pos.x += (MAP.flue ? MAP.flue.vx : 2.25) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inRet(b.pos) && MAP.ret && MAP.ret.on) b.hp -= 1.9 * dt;
    if (onHearth(b.pos) && MAP.hearth) {
      b.pos.x += MAP.hearth.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inSlag(b.pos)) {
      b.pos.x += (MAP.slag ? MAP.slag.vx : -2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inRev(b.pos) && MAP.rev && MAP.rev.on) b.hp -= 2.0 * dt;
    if (onMortar(b.pos) && MAP.stampHead && MAP.stampHead.wasDown) {
      b.pos.z += -1.6 * dt;
      b.hp -= 6 * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inStampFines(b.pos)) {
      b.pos.z += (MAP.stampFines ? MAP.stampFines.vz : -2.15) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inStamp(b.pos) && MAP.stamp && MAP.stamp.on) b.hp -= 1.4 * dt;

    if (onApron(b.pos)) {
      b.pos.z += (MAP.apron ? MAP.apron.vz : 1.85) * dt;
      collideXZ(b.pos, 0.4);
    }
    

    if (inPreg(b.pos)) {
      b.pos.z += (MAP.preg ? MAP.preg.vz : -2.15) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onHeapBoom(b.pos) && MAP.heapBoom) {
      const dx = b.pos.x - MAP.heapBoom.x;
      const dz = b.pos.z - MAP.heapBoom.z;
      const c = Math.cos(0.85 * dt);
      const sn = Math.sin(0.85 * dt);
      b.pos.x = MAP.heapBoom.x + dx * c - dz * sn;
      b.pos.z = MAP.heapBoom.z + dx * sn + dz * c;
      collideXZ(b.pos, 0.4);
    }
    if (inHeap(b.pos) && MAP.heap && MAP.heap.on) b.hp -= 1.5 * dt;
    if (onOreCar(b.pos) && MAP.oreCar) {
      b.pos.x += MAP.oreCar.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inDump(b.pos)) {
      b.pos.x += (MAP.gallDump ? MAP.gallDump.vx : 2.4) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inGall(b.pos) && MAP.gall && MAP.gall.on) b.hp -= 1.2 * dt;

    if (inSagDisch(b.pos)) {
      b.pos.x += (MAP.sagDisch ? MAP.sagDisch.vx : 2.3) * dt;
    }
    if (onSagShell(b.pos)) {
      b.pos.x += Math.sin((MAP.sagShell && MAP.sagShell.phase) || 0) * 1.4 * dt;
    }
    if (inSag(b.pos) && MAP.sag && MAP.sag.on) b.hp -= 1.6 * dt;

    if (inJawRock(b.pos)) {
      b.pos.z += (MAP.jawRock ? MAP.jawRock.vz : -2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inJaw(b.pos) && MAP.jaw && MAP.jaw.on && MAP.jawHead && MAP.jawHead.closed) b.hp -= 2.2 * dt;
    if (onScrew(b.pos)) {
      b.pos.x += (MAP.screw ? MAP.screw.vx : 2.15) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onDisc(b.pos) && MAP.disc && MAP.pellet && MAP.pellet.on) {
      const ang = (MAP.disc._omega || 0.85) * dt;
      const dx = b.pos.x - MAP.disc.x;
      const dz = b.pos.z - MAP.disc.z;
      const c = Math.cos(ang);
      const sn = Math.sin(ang);
      b.pos.x = MAP.disc.x + dx * c - dz * sn;
      b.pos.z = MAP.disc.z + dx * sn + dz * c;
      collideXZ(b.pos, 0.4);
    }
    if (inChute(b.pos)) {
      b.pos.z += (MAP.chute ? MAP.chute.vz : -2.4) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onBridge(b.pos) && MAP.clar && MAP.clar.on && MAP.clarBridge) {
      b.pos.x += MAP.clarBridge.dx || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inUnder(b.pos)) {
      b.pos.x += (MAP.under ? MAP.under.vx : 2.2) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inPellet(b.pos) && MAP.pellet && MAP.pellet.on) b.hp -= 3.2 * dt;
    if (onSampleBoom(b.pos) && MAP.sample && MAP.sample.on && MAP.sampleBoom) {
      b.pos.x += MAP.sampleBoom.dx || 0;
      b.pos.z += MAP.sampleBoom.dz || 0;
      collideXZ(b.pos, 0.4);
    }
    if (inReject(b.pos)) {
      b.pos.x += (MAP.reject ? MAP.reject.vx : 2.3) * dt;
      collideXZ(b.pos, 0.4);
    }
    if (inSinter(b.pos) && MAP.sinter && MAP.sinter.on) b.hp -= 4 * dt;
    if (onBucket(b.pos) && MAP.buckets) {
      for (const bk of MAP.buckets) {
        if (Math.abs(b.pos.x - bk.x) < 0.85 && Math.abs(b.pos.z - bk.z) < 0.95) {
          b.pos.x += bk.dx || 0;
          b.pos.z += bk.dz || 0;
        }
      }
      collideXZ(b.pos, 0.4);
    }
    if ((b.state === "flank" || b.state === "breach" || b.state === "overwatch") && b.lastState !== b.state && b.calloutCd <= 0 && onCallout) {
      b.calloutCd = 3.2 + Math.random() * 1.6;
      b._breach = b.state === "breach";
      b._overwatch = b.state === "overwatch";
      onCallout(b);
    }
    b.lastState = b.state;

    // Mezz fight: climb the nearer warehouse ladder, drop when the player leaves.
    if (b.hp > 0 && MAP.mezzLadders && (onMezz(playerPos) || onYard(playerPos) || onCable(playerPos) || onCrane(playerPos)) && b.pos.y < 2.2) {
      let best = MAP.mezzLadders[0];
      let bd = Infinity;
      for (const L of MAP.mezzLadders) {
        const dd = Math.hypot(b.pos.x - L.x, b.pos.z - L.z);
        if (dd < bd) {
          bd = dd;
          best = L;
        }
      }
      if (bd < 1.15 && (!MAP.bayDoor || MAP.bayDoor.open > 0.45 || b.pos.z > 22.4)) {
        b.pos.x = best.to.x;
        b.pos.z = best.to.z;
        b.pos.y = 3.26;
        b.climbed = true;
      }
    }
    if (onCable(b.pos) && MAP.cable) b.pos.x += MAP.cable.dx || 0;
    if (MAP.hatch && MAP.hatch.open && b.pos.y > 2.2 && Math.abs(b.pos.x + 22) < 0.7 && Math.abs(b.pos.z - 28.65) < 0.75) {
      b.pos.y = 0;
      b.hp -= 8;
      b.climbed = false;
    }
    const wantYard = onYard(playerPos) || (onCable(playerPos) && MAP.cable && MAP.cable.x < -31);
    const wantMezz = onMezz(playerPos);
    if (b.hp > 0 && MAP.cable && b.pos.y > 2.2 && wantYard && !onYard(b.pos)) {
      MAP.cable.on = true;
      if (!onCable(b.pos)) {
        b.pos.x += Math.sign(MAP.cable.x - b.pos.x) * Math.min(1.8 * dt, Math.abs(MAP.cable.x - b.pos.x));
        b.pos.z += Math.sign(MAP.cable.z - b.pos.z) * Math.min(1.8 * dt, Math.abs(MAP.cable.z - b.pos.z));
      }
    }
    if (b.hp > 0 && MAP.cable && onYard(b.pos) && wantMezz) {
      MAP.cable.on = true;
      b.pos.x += Math.sign(MAP.cable.x - b.pos.x) * Math.min(1.8 * dt, Math.abs(MAP.cable.x - b.pos.x));
    }
    if (onCage(b.pos) && MAP.cage) b.pos.z += MAP.cage.dz || 0;
    if (b.hp > 0 && MAP.dispatchLadder && onDispatchLoft(playerPos) && !onDispatchLoft(b.pos) && b.pos.y < 2) {
      const L = MAP.dispatchLadder;
      if (Math.hypot(b.pos.x - L.x, b.pos.z - L.z) < 1.15) {
        b.pos.x = L.to.x;
        b.pos.z = L.to.z;
        b.pos.y = 3.13;
      } else {
        b.pos.x += Math.sign(L.x - b.pos.x) * Math.min(1.6 * dt, Math.abs(L.x - b.pos.x));
        b.pos.z += Math.sign(L.z - b.pos.z) * Math.min(1.6 * dt, Math.abs(L.z - b.pos.z));
      }
    }
    if (b.hp > 0 && onDispatchLoft(b.pos) && !onDispatchLoft(playerPos) && !inDispatch(playerPos)) {
      const L = MAP.dispatchLadder;
      b.pos.x = L.x;
      b.pos.z = L.z + 0.4;
      b.pos.y = 0;
    }
    if (b.hp > 0 && MAP.cage && (inDispatch(playerPos) || onCage(playerPos)) && !onCage(b.pos) && b.pos.y < 2) {
      MAP.cage.on = true;
      b.pos.x += Math.sign(MAP.cage.x - b.pos.x) * Math.min(1.7 * dt, Math.abs(MAP.cage.x - b.pos.x));
      b.pos.z += Math.sign(MAP.cage.z - b.pos.z) * Math.min(1.7 * dt, Math.abs(MAP.cage.z - b.pos.z));
    }
    if (onShipCart(b.pos) && MAP.shipCart) b.pos.z += MAP.shipCart.dz || 0;
    if (b.hp > 0 && MAP.shipCart && (inShip(playerPos) || onShipCart(playerPos)) && !onShipCart(b.pos) && b.pos.y < 2) {
      MAP.shipCart.on = true;
      b.pos.x += Math.sign(MAP.shipCart.x - b.pos.x) * Math.min(1.7 * dt, Math.abs(MAP.shipCart.x - b.pos.x));
      b.pos.z += Math.sign(MAP.shipCart.z - b.pos.z) * Math.min(1.7 * dt, Math.abs(MAP.shipCart.z - b.pos.z));
    }
    if (onPackSled(b.pos) && MAP.packSled) b.pos.x += MAP.packSled.dx || 0;
    if (b.hp > 0 && MAP.packSled && (inPack(playerPos) || onPackSled(playerPos)) && !onPackSled(b.pos) && b.pos.y < 2) {
      MAP.packSled.on = true;
      b.pos.x += Math.sign(MAP.packSled.x - b.pos.x) * Math.min(1.7 * dt, Math.abs(MAP.packSled.x - b.pos.x));
      b.pos.z += Math.sign(MAP.packSled.z - b.pos.z) * Math.min(1.7 * dt, Math.abs(MAP.packSled.z - b.pos.z));
    }
    if (b.hp > 0 && MAP.packPress && MAP.packPress.down && inPackPress(b.pos)) {
      b.hp = Math.max(0, b.hp - 14 * dt);
      b.pos.x -= 1.4 * dt;
    }
    if (onAnnexBelt(b.pos) && MAP.annexBelt && MAP.annexBelt.on) {
      b.pos.x += MAP.annexBelt.speed * dt;
      collideXZ(b.pos, 0.4);
    }
    if (onCrane(b.pos) && MAP.crane) b.pos.x += MAP.crane.dx || 0;
    const wantCrane = onCrane(playerPos);
    if (b.hp > 0 && MAP.crane && wantCrane && b.pos.y > 2.2 && !onCrane(b.pos)) {
      MAP.crane.on = true;
      b.pos.x += Math.sign(MAP.crane.x - b.pos.x) * Math.min(1.7 * dt, Math.abs(MAP.crane.x - b.pos.x));
      b.pos.z += Math.sign(MAP.crane.z - b.pos.z) * Math.min(1.7 * dt, Math.abs(MAP.crane.z - b.pos.z));
    }
    if (b.hp > 0 && b.climbed && b.pos.y > 2.2 && MAP.mezzLadders && !onMezz(playerPos) && !onYard(playerPos) && !onCable(playerPos) && !onCrane(playerPos) && !inWarehouse(playerPos)) {
      const L = MAP.mezzLadders[0];
      if (Math.hypot(b.pos.x - L.to.x, b.pos.z - L.to.z) < 1.1) {
        b.pos.x = L.x;
        b.pos.z = L.z + 0.55;
        b.pos.y = 0;
      } else {
        b.pos.x += Math.sign(L.to.x - b.pos.x) * Math.min(1.6 * dt, Math.abs(L.to.x - b.pos.x));
        b.pos.z += Math.sign(L.to.z - b.pos.z) * Math.min(1.6 * dt, Math.abs(L.to.z - b.pos.z));
      }
    }
    if (b.pos.y > 2.2 && !onHighDeck(b.pos) && !onDispatchLoft(b.pos) && !(MAP.lookout && b.pos.distanceTo(MAP.lookout) < 2)) b.pos.y = 0;
    if (MAP.bayDoor && MAP.bayDoor.open < 0.4 && MAP.cable && b.hp > 0 && b.state === "flank") {
      const cut = Math.hypot(b.pos.x + 30.2, b.pos.z - 28.65);
      if (cut > 1.3 && cut < 14 && b.pos.y < 2) {
        b.pos.x += Math.sign(-30.2 - b.pos.x) * Math.min(1.4 * dt, Math.abs(-30.2 - b.pos.x));
        b.pos.z += Math.sign(28.65 - b.pos.z) * Math.min(1.4 * dt, Math.abs(28.65 - b.pos.z));
      }
    }
    if (MAP.bayDoor && MAP.bayDoor.open < 0.4 && MAP.warehouseDoor && b.hp > 0 && b.pos.distanceTo(MAP.warehouseDoor) < 1.85) {
      b.bayKick = (b.bayKick || 0) + dt;
      if (b.bayKick > 1.25) {
        MAP.bayDoor.target = 1;
        MAP.bayDoor.kicked = true;
        b.bayKick = -2.5;
      }
    } else if (b.bayKick > 0) b.bayKick = 0;

    b.mesh.lookAt(playerPos.x, b.pos.y + 1.2, playerPos.z);
    const deckY = b.pos.y > 2.2 ? b.pos.y : MAP.lookout && b.pos.distanceTo(MAP.lookout) < 1.85 ? 2.95 : 0;
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
      lead.y = Math.max(1.15, playerPos.y + 0.35);
      lead.x += (Math.random() - 0.5) * (playerPos.y > 2.4 ? 0.7 : 1.6);
      lead.z += (Math.random() - 0.5) * (playerPos.y > 2.4 ? 0.7 : 1.6);
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
