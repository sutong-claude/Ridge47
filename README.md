# Ridge 47

Playable tactical FPS. The live game is TypeScript + Three.js:

- `src/game/*.ts` — map, collision, bots, guns, pickups
- `src/components/ridge/RidgeApp.tsx` — HUD and click-to-play
- `GAME.md` — what is actually in the match

South spawn has 6 seconds of protection. West warehouse and north hangar have ammo and armor crates. Hold the gold pad in the north hangar for 20 seconds to extract.

```bash
npm install
npm run dev
```

Click 进入战区. WASD to move. Drag to aim if pointer lock fails.
