## Map+critic 2026-10-07 ~07:15 UTC (alkali feed + blower)

Critic: 进入战区 stayed enabled (disabled false) until click. Overlay click started the match (HP 100, 敌对 6, 雷 2, button left the overlay). No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill. __controlsTest.setKeys KeyW z 8→6.71, KeyA x 0→-0.215 (left), KeyD x -0.215→0.645 (right) at yaw 0. Did not disable the button.

Map: first unchecked map item was another interior loop (combat backlog already checked). Northwest caustic feed, south door, west leaf stop (minimap 碱挡, east lane x=-17.15 open, KeyW yaw PI stuck on the west leaf). Vat 碱台, stack lamp 碱灯, tin walk-up half mag (feed 碱棚弹匣, cool 11.3, 碱匣), closer 碱闭. East blower house, west door, south leaf stop (鼓挡, north lane z=-18.15 open, KeyD stuck on the south leaf). Housing 鼓台, stack lamp 鼓灯, tin (鼓棚弹匣, 鼓匣), closer 鼓闭. Bundle artifacts/dist/main.js.

- [x] 进入战区 / overlay click starts; button stays enabled
- [x] Caustic feed west-leaf stop, east lane open, vat cover, tin, closer, lamp
- [x] Blower house south-leaf stop, north lane open, fan cover, tin, closer, lamp
- [x] __controlsTest.setKeys / getPos. A left, D right, W forward
- [x] No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill
- [ ] Owner topic or another map loop

## Combat 2026-10-07 ~06:40 UTC (acid)

Critic: 进入战区 stayed enabled until click. Overlay click starts the match. No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill in the live TypeScript match. __controlsTest.setKeys / getPos. A left, D right, W forward. Did not disable the button.

Combat: medic bots (id % 3 === 2) carry one acid vial after smoke, stim, burn, tear, toxin, and dart are spent. LOS between 3.6m and 10.4m starts a 0.58s pull (duck, no fire, feed 捏酸). Finish lobs a vial (投酸) that blooms a 4.0s field (酸蚀). Inside it the player is slowed (move ×0.78), sprint and slide are off, ADS stays, spread ×1.55, chip 3.1/s. A hit, stab, or blast during the windup cuts it (打断捏酸) and drops a live vial (漏酸); a second cut retreats. Shooting a live vial blooms it early (截酸). Pickup 拾酸, 0 throws. Browser: forceAcid+shoot cuts 1 wind 0 leaks 1; releaseAcid pulls 1; plantLiveAcid+shoot snips 1 blooms 1 field 0.34; spawnAcid walk-up cans 1; Digit0 cans 1→0. HUD 人机带酸. Bundle artifacts/dist/main.js.

Live preview is the TypeScript match (`artifacts/src/game/*.ts`, `RidgeApp.tsx`), not the JS mill. Bundle: `artifacts/dist/main.js`.

- [x] 进入战区 / overlay click starts; drag-aim + tap-fire if pointer lock fails
- [x] Medic acid pull and throw after dart is spent
- [x] Pull interrupt drops a live leak; second cut retreats
- [x] Shoot blooms a live acid vial early
- [x] Field: move ×0.78, sprint/slide off, ADS stays, spread ×1.55, chip 3.1/s
- [x] Pickup and 0 throw
- [x] Score card 捏酸 / 投酸 / 酸蚀 / 打断捏酸 / 漏酸 / 截酸
- [x] __controlsTest.setKeys / getPos. A left, D right, W forward
- [x] No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill
- [x] Owner topic or another bot/weapon loop
