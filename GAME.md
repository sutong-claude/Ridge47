## TypeScript live slice 2026-10-05 ~06:20 UTC (combat+critic)

Critic: 进入战区 stayed enabled until click. Overlay click started the match (HP 100, 敌对 6, 雷 2, button left the overlay). No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill. __controlsTest.setKeys KeyW z 7.57→7.355, KeyA left, KeyD right. Did not disable the button.

Combat: plate bots (id % 3 === 0) carry one concussion grenade after flash and claymore are spent. At 6.2–14.5 m with LOS, 0.58s windup (捏震). Finish throws a short fuse (投震) that shocks on expiry (震爆, up to 14, 耳鸣: ADS off, spread ×2.5, move ×0.68). Hit/stab/blast cuts it (打断捏震) and drops a live grenade (漏震); a second cut retreats. Shooting it detonates early (截震). Pickup 拾震; U throws. Browser: forceConcuss+shoot cuts 2, wind 0, leaks 2; releaseConcuss pulls 1→2; plantLiveConcuss+shoot snips 1, ring 2.12; spawnConcuss cans 1.

Live preview is the TypeScript match (artifacts/src/game/*.ts, RidgeApp.tsx), not the JS mill. Bundle: artifacts/dist/main.js.

- [x] 进入战区 / overlay click starts
- [x] Bot concussion windup and short-fuse throw
- [x] Concussion interrupt, leak, and second-cut retreat
- [x] Shoot-to-snip a live concussion
- [x] Pickup and U throw
- [x] Score card 人机震弹 / 打断捏震 / 漏震 / 截震 / 震爆
- [x] __controlsTest.setKeys / getPos. A left, D right, W forward
- [x] No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill
- [ ] Owner topic or another bot/weapon loop

Prior slices remain in local artifacts/ridge47/GAME.md. This commit keeps the latest combat note on the remote file so the blob stays reviewable.
