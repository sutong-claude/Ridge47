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
- Distinct 3D viewmodels: carbine, dual-tube scatter (pump), sidearm (slide) — never a photo gun.
- Dusk quarry + night hangar wing with door gap, crate collision, extract crate + hangar door extract.
- Six hostiles: cover, peek-shoot, flank; suppress and duck when ADS'd; flank callout beeps + bearing.
- Grenade (G) projectile + splash.
- Pooled footstep dust + blood decals.
- Minimap top-right (flare ping when extract starts; hangar door mark).
- Extract hold 20s (F near amber crate OR hangar door when ≤2 hostiles remain); flare + smoke on start.
- Inspect on I. RMB ADS tightens spread + shrinks cross.
- Hitmarker + floating damage numbers. Empty-mag click. Reload pose.
- Compass strip. Sprint FOV punch. Landing thud + pitch kick.
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

## Next backlog
- [ ] Bot grenade toss when player camps extract
- [ ] Dust motes in hangar volume + door light leak
- [ ] Lean on Q/E with peek FOV bias
