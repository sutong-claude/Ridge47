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
- [x] Distant ridge haze bands
- [x] Ammo crate lid lift on restock
- [x] Quarry floor mirage sheets
- [x] Crate rope ties
- [x] Idle bot cover sway
- [x] Compass degree tick marks
- [x] Extract pad chevrons
- [x] Hangar ceiling drip
- [x] Hit-direction pips + camera shake on incoming fire
- [x] Headshot blood mist
- [x] Nade concussion (tinnitus + punch)
- [x] Weapon swap toss
- [x] Low-HP heartbeat
- [x] Crate bullet holes
- [x] Distant ridge muzzle flashes
- [x] Landing grit burst
- [x] Bot flank footstep ticks
- [x] Kill confirm sting
- [x] Stance strip (stand/sprint/crouch/slide)
- [x] Wounded bot limp
- [x] Player footstep ticks by stance
- [x] Dynamic crosshair gap (move / sprint / burst / ADS)
- [x] Nade linger smoke cloud
- [x] Bot rifle drop on settle
- [x] Extract range + live count HUD
- [x] Shell bounce brass ping
- [x] ADS breath sway
- [x] Extract ring pulse while holding
- [x] Walk bob + crouch eye lerp
- [x] Hangar metal footsteps
- [x] Tactical lamp (T)
- [x] Near-miss whip
- [x] Interact prompt + reload bar
- [x] Extract beacon pillar
- [x] Last-round empty ping
- [x] Extract hold tick beeps
- [x] ADS veil
- [x] Stamina drain + HUD strip
- [x] Med crate pack (F)
- [x] Loot downed hostiles (ammo + nade)
- [x] SPOTTED flash when a bot opens fire
- [x] ADS range + vitals tag
- [x] Limited grenades (G × N)
- [x] World ping (C / middle mouse) + compass/minimap mark
- [x] Melee bash (X)
- [x] Fall damage on hard landings
- [x] Suppression vignette when incoming fire
- [x] Close-kill viewmodel smear
- [x] Sprint holster pose
- [x] Extract hold countdown seconds
- [x] Minimap look cone
- [x] Live hostile ticks on compass
- [x] Night sky stars + dusk fog
- [x] Player ground shadow disc
- [x] Corpse loot glow until looted
- [x] ADS in/out click
- [x] Hangar extra gun reverb
- [x] Cicada chirps on quarry
- [x] Bot death gasp
- [x] Stamina idle viewmodel sway
- [x] Cookable grenade (hold G)
- [x] Death-cam unit tag
- [x] Nade screen grit
- [x] Dust devil wisps
- [x] Unit IDs on downs
- [x] Auto-reload after empty
- [x] Weapon swap name plate
- [x] Kill streak HUD + feed beats
- [x] Ground impact dust + prints
- [x] Footprint decals on quarry walk
- [x] Distant flyover silhouette + rumble
- [x] Match dusk cycle (sun/stars/moon)
- [x] Loot / restock / pack float chips
- [x] Extract-open banner at 2 live
- [x] Heading-up rotating minimap
- [x] Viewmodel look lag (yaw/pitch inertia)
- [x] Blood stain on viewmodel after close kill / bash
- [x] Wind tarps on crate tops
- [x] Radio mast blink beacon
- [x] Hangar breath vapor
- [x] Barrel heat click on long burst
- [x] Wounded bot limp prints
- [x] Auto-loot when walking over a corpse
- [x] Extract-hold break beep
- [x] ADS crosshair hue when a hostile is under the pip
- [ ] Next: owner topics or more juice
