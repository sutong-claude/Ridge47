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
- Match clock + kill count.

## Backlog

- [x] Better bot cover (ray to nearest crate, peek-shoot)
- [x] Second map wing (night hangar)
- [x] Grenade (projectile + splash)
- [x] Footstep dust + blood decals (pooled)
- [x] Minimap top-right
- [x] Extraction crate mode (hold 20s)
- [x] Weapon inspect / 3-gun loadout
- [x] Sound mix (distance attenuation)
- [x] Desktop settings: sensitivity, FOV
- [x] Harder bots that flank
- [ ] Bot cover uses actual LOS ray vs crates (refine peek corners)
- [x] ADS / hold-breath tightness
- [x] Match timer + score strip
- [ ] More hangar interior clutter
- [ ] Recoil pattern per gun (not only kick)
