## TypeScript live slice 2026-10-05 ~11:08 UTC (map+critic)

Critic: 进入战区 stayed enabled until click. Overlay click started the match (HP 100, 敌对 6, 雷 2, button left the overlay). No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill. __controlsTest.setKeys KeyW z 8→7.785, KeyA x 0→-0.215 (left), KeyD x -0.215→0 (right). Did not disable the button.

Map: northeast kiln house (x 30.4-38.2, z 32.4-39.6, south door). West leaf stop x 33.18-34.38, z 31.58-32.38, h 1.2, minimap 窑挡. East lane x=35.15 open through z 32.655. KeyS stuck at x 33.78 z 31.15 on the west leaf. Stack 窑台 + flue lamp 窑灯. Tin 36.55,35.2 walk-up half mag (feed 窑棚弹匣, cool 12s, observed 5.6s remaining). Closer visual 窑闭.

Live preview is the TypeScript match (artifacts/src/game/*.ts, RidgeApp.tsx), not the JS mill. Bundle: artifacts/dist/main.js.

- [x] 进入战区 / overlay click starts
- [x] Kiln house door stop blocks the west leaf; east lane stays open
- [x] Kiln stack chest cover and flue lamp
- [x] Walk-up tin grants half a mag, 12s cool
- [x] Closer plate visual only
- [x] Minimap 窑挡 / 窑闭 / 窑台 / 窑匣 / 窑灯
- [x] __controlsTest.setKeys / getPos. A left, D right, W forward
- [x] No F-key juice, NVG, visor fog, strobes, SearchAdapters, or JS mill
- [ ] Owner topic or another map loop

Prior slices remain in local artifacts/ridge47/GAME.md. This commit keeps the latest map note on the remote file so the blob stays reviewable.
