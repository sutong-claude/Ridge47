import * as THREE from "three";
import { MAP, nearestCrate, collideXZ } from "./map.js";

export function spawnBots(scene, n = 6) {
  const bots = [];
  const bodyMat = new THREE.MeshLambertMaterial({ color: 0x4a3a28 });
  const helmMat = new THREE.MeshLambertMaterial({ color: 0x2a3228 });
  const spots = [
    [-16, 18], [10, -14], [20, 16], [-18, -18], [28, -8], [-8, 24], [6, 8],
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
    g.add(torso, head, leg, leg2);
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
      aim: new THREE.Vector3(),
      vel: new THREE.Vector3(),
    });
  }
  return bots;
}

function coverPoint(crate, playerPos) {
  const away = crate.pos.clone().sub(playerPos);
  away.y = 0;
  if (away.lengthSq() < 0.01) away.set(1, 0, 0);
  away.normalize();
  return crate.pos.clone().add(away.multiplyScalar(2.2));
}

export function updateBots(bots, playerPos, dt, fireAtPlayer) {
  for (const b of bots) {
    if (b.hp <= 0) {
      b.mesh.rotation.x = Math.min(1.4, b.mesh.rotation.x + dt * 3);
      b.mesh.position.y = Math.max(-0.2, b.mesh.position.y - dt);
      continue;
    }
    b.cooldown -= dt;
    const crate = nearestCrate(b.pos);
    const toP = playerPos.clone().sub(b.pos);
    toP.y = 0;
    const dist = toP.length();
    const cover = crate ? coverPoint(crate, playerPos) : b.pos.clone();

    if (b.flank && dist > 8 && dist < 28) {
      const side = new THREE.Vector3(-toP.z, 0, toP.x).normalize().multiplyScalar(10);
      cover.add(side);
      b.state = "flank";
    } else if (dist < 9) {
      b.state = "peek";
    } else {
      b.state = "cover";
    }

    const target = b.state === "peek" ? playerPos.clone() : cover;
    target.y = 0;
    const wish = target.clone().sub(b.pos);
    wish.y = 0;
    if (wish.length() > 0.4) {
      wish.normalize().multiplyScalar(b.state === "flank" ? 5.2 : 3.6);
      b.pos.x += wish.x * dt;
      b.pos.z += wish.z * dt;
      collideXZ(b.pos, 0.4);
    }
    b.mesh.lookAt(playerPos.x, 1.2, playerPos.z);

    const los = dist < 32;
    if (los && b.cooldown <= 0 && (b.state === "peek" || dist < 16)) {
      b.cooldown = 0.45 + Math.random() * 0.5;
      const miss = 0.08;
      const dir = playerPos.clone().add(new THREE.Vector3(0, 1.4, 0)).sub(b.pos.clone().setY(1.5));
      dir.x += (Math.random() - 0.5) * miss * dist;
      dir.y += (Math.random() - 0.5) * miss * 4;
      dir.z += (Math.random() - 0.5) * miss * dist;
      dir.normalize();
      fireAtPlayer(b, dir);
    }
  }
}
