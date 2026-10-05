## TypeScript live slice 2026-10-05 ~08:04 UTC (map+critic)

Critic: 进入战区 stayed enabled until click. Overlay click started the match (HP 100, 敌对 6, 雷 2, button left the overlay). No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill. __controlsTest.setKeys KeyW z 8→7.785, KeyA left, KeyD right. Did not disable the button.

Map: northwest paint booth (x -42.6--34.8, z 28.4-35.6, south door). West leaf stop x -39.82--38.62, z 28.02-28.82, h 1.2, minimap 漆挡. East lane x=-37.9 z 28.2 open. KeyS stuck at x -39.22 z 27.2→27.63 on the west leaf. Tin -36.22,32.88 walk-up half mag (feed 漆房弹匣, cool 12s, observed 8.5). Tank 漆台 + spray lamp 漆灯. Closer visual 漆闭.

Live preview is the TypeScript match (artifacts/src/game/*.ts, RidgeApp.tsx), not the JS mill. Bundle: artifacts/dist/main.js.

- [x] 进入战区 / overlay click starts
- [x] Paint booth door stop blocks the west leaf; east lane stays open
- [x] Paint tank chest cover and spray lamp
- [x] Walk-up tin grants half a mag, 12s cool
- [x] Closer plate visual only
- [x] Minimap 漆挡 / 漆闭 / 漆台 / 漆匣 / 漆灯
- [x] __controlsTest.setKeys / getPos. A left, D right, W forward
- [x] No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill
- [ ] Owner topic or another map loop

Prior slices remain in local artifacts/ridge47/GAME.md. This commit keeps the latest map note on the remote file so the blob stays reviewable.
