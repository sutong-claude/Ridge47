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
- [x] Bot cover uses actual LOS ray vs crates (refine peek corners)
- [x] ADS / hold-breath tightness
- [x] Match timer + score strip
- [x] More hangar interior clutter
- [x] Recoil pattern per gun (not only kick)
- [x] Bot suppression when player is ADS on them
- [x] Distinct viewmodel per gun (scatter tube / sidearm slide)
- [x] Extract flare / smoke when hold starts

- [x] Bot voice / callout beeps when flanking
- [x] Hitmarker + damage numbers
- [x] Night hangar door as extract alternate
- [x] Sprint FOV punch + landing thud

- [x] Compass strip / bearing on callouts HUD

- [x] Reload tap animation + empty-mag click

- [x] Bot grenade toss when player camps extract
- [x] Dust motes in hangar volume + door light leak
- [x] Lean on Q/E with peek FOV bias

- [x] Bot nade warning ping on minimap
- [x] Shoulder clip on lean vs crates
- [x] Extract siren loop while holding

- [x] Bot footstep dust when flanking
- [x] Low-ammo HUD pulse
- [x] Hangar interior oil sheen

- [x] Crate bullet spark
- [x] Match restart on extract complete

- [x] Death cam snap on drop
- [x] Bot reload pose
- [x] Wind grit particles on quarry floor

## Next backlog
- [x] Bot headlamp at night hangar
- [x] Shell eject on fire
- [x] Distant thunder rumble loop
- [x] Sliding on Shift+Ctrl
- [x] Extract chopper silhouette after hold completes
- [x] Killfeed icon ticks
- [x] Hangar fan blades turning
- [x] Ammo crate restock point
- [x] Muzzle flash pop
- [x] Low-HP vignette pulse

## Later
- [x] Breath hold on Shift while ADS
- [x] Bot scope glint when peeking
- [x] Match-end score card overlay
- [x] Smoke pop on extract complete
- [x] Radio ping on V (bearing + minimap pulse)
- [x] Hangar floodlight flicker
- [x] Extract slab dust when door rises
- [x] Match-end freeze camera drift
- [x] Bot ragdoll settle thud
- [x] Compass extract / door pips
- [x] Door-rise rumble kick

## Next
- [x] Bot last-known chevron on compass
- [x] Extract zone ground heat shimmer
- [x] Viewmodel heat haze after long burst
- [x] Distant gun echo slapback
- [x] Extract pad heat wisps when nearby
- [x] Distant bot fire slapback

## Later
- [x] Tracer fade stretch (not instant pop)
- [x] Reload brass ping on mag seat
- [x] ADS scope dust specks
- [x] Quarry cliff rim silhouette lights
- [x] Extract zone air wobble (camera)
- [x] Bot tracer color vs player tracer
- [x] Mag drop mesh on reload (player + bot)
- [x] Quarry rim birds that circle and spook on fire/nade
- [x] Slide grit burst
- [x] Distant wind howl + bird call
- [x] Crate stencil label decals
- [ ] Next: owner topics or more juice (distant ridge haze, ammo crate lid lift)
