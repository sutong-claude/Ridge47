# Ridge 47 — hourly build contract

Tactical first-person shooter in **this workspace** (`src/game/*.ts`). That is the live preview. Not the GitHub `src/game/*.js` F-key mill.

## Every hour (mandatory)

You have **the full hour**. Implement a playable slice in `/workspace/src/game` and overlays.

1. Read this file and `src/game/engine.ts`.
2. Take the first unchecked backlog item.
3. Keep WASD strafe, pointer lock, hitscan from screen center, 3D viewmodel.
4. Do **not** add F-key cards, NVG pulses, visor fog, or OpenAlex adapters.
5. Do **not** idle. Do **not** leave the start overlay unclickable.
6. Click-to-play gate: overlay click OR the 进入战区 button must start a match even if pointer lock fails. Never `disabled` the deploy button.

## Frozen

- Copyrighted names from commercial shooters.
- Parallel JS rewrite on GitHub that the preview does not run.
- HUD theater (strobe, NVG, visor fog, juice cards).

## Playable gate (critic enforces)

A run that ships a match you cannot enter is a failed run. Revert it.

## Critic log

- 2026-10-07 04:30 PDT — Owner could not play: enter → black frame → Hawk kill in ~2s → death overlay ate the world. Causes: bot spawn 2m behind player, no i-frames, death gate full-screen, fog near 18 + dark ambient. Fixed: south spawn (0,36), 6s protect, bots reset north of mid-yard, no full-screen death, brighter light/fog. GitHub mill (acid/frost/oil) is still NOT the live game.
- 2026-10-03 02:20 PDT — Overlay was covering a live match after 进入战区 (React phase stuck on menu). Fixed with local `deployed` flag; button never disabled; overlay click starts. W walk 4.90 verified. GitHub GAME.md mill of fake-checked F-keys is NOT the live contract; this file is.

## Backlog

- [x] Better bot cover (seek COVER that blocks LOS; wounded → cover)
- [x] Second map wing (north hangar + extract pad)
- [x] Grenade (G, projectile + splash)
- [x] Footstep dust + blood decals (pooled)
- [x] Minimap top-right
- [x] Extraction crate mode (hold 20s on hangar pad)
- [x] 3-gun loadout (1 rifle / 2 pistol / 3 shotgun)
- [x] Desktop settings: sensitivity, FOV on pause
- [x] Sound mix (distance attenuation on bot fire / nades)
- [x] Harder bots that throw nades
- [x] Interior hangar lighting + enterable warehouse
- [x] ADS viewmodel swap per weapon (shotgun/pistol meshes)
- [x] Click-anywhere overlay + never-disable deploy
- [x] Ammo / armor crate pickups in warehouse + hangar
- [ ] East shack hollow interior (door on west face)
- [ ] Death cam 1.4s then click-to-respawn (keep auto-respawn as fallback)
- [ ] Sliding (sprint + C) with cooldown
- [ ] Match scoreboard after extract / wipe
- [ ] ADS sway inertia on mouse
- [ ] Footstep / bot bark spatial (already mixed; add bark variants)
