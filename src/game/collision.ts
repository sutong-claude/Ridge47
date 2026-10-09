import type { Aabb } from "./types";

export function makeAabb(cx: number, bottom: number, cz: number, w: number, h: number, d: number): Aabb {
  const hw = w * 0.5;
  const hd = d * 0.5;
  return {
    minX: cx - hw,
    minY: bottom,
    minZ: cz - hd,
    maxX: cx + hw,
    maxY: bottom + h,
    maxZ: cz + hd,
  };
}

export function rayAabb(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  box: Aabb,
  maxT: number,
): number {
  const invX = dx !== 0 ? 1 / dx : 1e15;
  const invY = dy !== 0 ? 1 / dy : 1e15;
  const invZ = dz !== 0 ? 1 / dz : 1e15;
  let tmin = ((invX >= 0 ? box.minX : box.maxX) - ox) * invX;
  let tmax = ((invX >= 0 ? box.maxX : box.minX) - ox) * invX;
  const tymin = ((invY >= 0 ? box.minY : box.maxY) - oy) * invY;
  const tymax = ((invY >= 0 ? box.maxY : box.minY) - oy) * invY;
  if (tmin > tymax || tymin > tmax) return -1;
  if (tymin > tmin) tmin = tymin;
  if (tymax < tmax) tmax = tymax;
  const tzmin = ((invZ >= 0 ? box.minZ : box.maxZ) - oz) * invZ;
  const tzmax = ((invZ >= 0 ? box.maxZ : box.minZ) - oz) * invZ;
  if (tmin > tzmax || tzmin > tmax) return -1;
  if (tzmin > tmin) tmin = tzmin;
  if (tzmax < tmax) tmax = tzmax;
  if (tmax < 0 || tmin > maxT) return -1;
  const t = tmin >= 0 ? tmin : tmax;
  return t >= 0 && t <= maxT ? t : -1;
}

export function resolveCapsule(x: number, y: number, z: number, radius: number, height: number, walls: Aabb[]) {
  let px = x;
  let py = y;
  let pz = z;
  let grounded = py <= 0.02;
  if (py < 0) py = 0;

  const top = py + height;
  for (const w of walls) {
    if (top < w.minY + 0.02 || py > w.maxY - 0.02) continue;
    const minX = w.minX - radius;
    const maxX = w.maxX + radius;
    const minZ = w.minZ - radius;
    const maxZ = w.maxZ + radius;
    if (px <= minX || px >= maxX || pz <= minZ || pz >= maxZ) continue;

    const left = px - minX;
    const right = maxX - px;
    const near = pz - minZ;
    const far = maxZ - pz;
    const smallest = Math.min(left, right, near, far);
    if (smallest === left) px = minX;
    else if (smallest === right) px = maxX;
    else if (smallest === near) pz = minZ;
    else pz = maxZ;
  }

  const head = py + height;
  for (const w of walls) {
    const insideX = px > w.minX - radius && px < w.maxX + radius;
    const insideZ = pz > w.minZ - radius && pz < w.maxZ + radius;
    if (!insideX || !insideZ) continue;
    if (py + 0.2 < w.maxY && head > w.minY && py < w.maxY && w.maxY - py < 0.55) {
      py = w.maxY;
      grounded = true;
    }
    if (head > w.minY && py < w.minY && head - w.minY < 0.4) {
      py = w.minY - height;
    }
  }
  if (py <= 0.02) {
    py = 0;
    grounded = true;
  }
  return { x: px, y: py, z: pz, grounded };
}

export function closestWallHit(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  walls: Aabb[],
  maxT: number,
): number {
  let best = maxT;
  let hit = -1;
  for (const w of walls) {
    const t = rayAabb(ox, oy, oz, dx, dy, dz, w, best);
    if (t >= 0 && t < best) {
      best = t;
      hit = t;
    }
  }
  return hit;
}
