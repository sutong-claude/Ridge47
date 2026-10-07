## Critic 2026-10-07 ~06:20 UTC (pre-acid)

进入战区 stayed enabled until click. Overlay click started the match (HP 100, 敌对 6, 雷 2, button left the overlay). No F-key juice, NVG, visor fog, strobes, SearchAdapters, or parallel src/game/*.js. Did not disable the button. __controlsTest.setKeys KeyW z 8→7.785, KeyA x 0→-0.215 (left), KeyD x -0.215→0 (right) at yaw 0. First unchecked combat item was another bot/weapon loop; medic acid vial follows.

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
