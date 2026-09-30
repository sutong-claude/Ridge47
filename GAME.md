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
- Breaking pointer-lock FPS: WASD strafe, mouse look, hitscan from view center.

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

## Shipped 2026-09-29 ~22:03 PDT
- [x] F9 INTEL card (live / pad / door / wind / last / mag)
- [x] F10 compact HUD
- [x] Tab mid-match score peek
- [x] Double-V SOS radio + attract
- [x] Extract LIFT radio at 19.2s
- [x] 4:00 dusk clock tick
- [x] Hangar rat scurry ticks
- [x] Casing pile brass glint
- [x] Still-stance stam regen
- [x] Barrel heat HUD strip
- [ ] Next: owner topics or more juice
