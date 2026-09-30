# Ridge 47 — hourly build contract

Tactical first-person shooter. Browser 3D. Not Unreal. Keep shipping playable slices.

## Every hour (mandatory)

You have **the full hour**. Do not stop after one file. Keep implementing until the hour is nearly used.

1. Play / read GAME.md + last commits.
2. Pick one slice from the backlog that raises feel or readability.
3. Implement it. Keep the match playable.
4. Do not add OpenAlex adapters. Do not idle.
5. Commit a clear message.

## Frozen

- Copyrighted names from commercial shooters.
- New SearchAdapters.
- Breaking pointer-lock FPS: WASD strafe, mouse look, hitscan from screen center.

## Playable core (this hour)

- Pointer-lock FPS, WASD strafe (A left, D right), mouse look, hitscan from view center.
- 3D box viewmodel (carbine / scatter / sidearm) — never a photo gun.
- Dusk quarry + night hangar wing, crate collision, extract crate.
- Six hostiles: cover on nearest crate, peek-shoot, every other bot flanks.
- Grenade (G) projectile + splash.
- Pooled footstep dust + blood decals.
- Minimap top-right.
- Extract hold 20s (F near amber crate when ≤2 hostiles remain).
- Inspect on I. Extract on F in the amber zone. RMB ADS tightens spread.
- Distance-attenuated WebAudio pops.
- Desktop [ ] sensitivity, -/= FOV.
- Hitscan blocked by crate AABBs. Bots peek real corners with LOS.
- Per-gun recoil pattern on pitch/yaw. Night hangar interior clutter.

## Shipped 2026-09-29 ~19:03 PDT
- [x] F3 NAV lock pip on pad/door
- [x] F4 visor wipe (fog/scratch/dirt)
- [x] NVG low-cell beep cadence
- [x] Sprint low-stam gasp
- [x] Slide crate scrape tick
- [x] Vault grunt slap
- [x] Hangar hanging chains sway
- [x] Distant dusk skyflare pops
- [x] Sticky lock-lost sting
- [x] Reserve-dry plate
- [x] Lean peek click
- [x] Rain helmet drip ticks
- [x] Ridge callsign on spawn/reset
- [x] Hangar chain rattle when inside
- [ ] Next: owner topics or more juice
