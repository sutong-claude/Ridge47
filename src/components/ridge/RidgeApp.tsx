import { useEffect, useRef, useState } from "react";
import { Crosshair, Pause, Play, RotateCcw, Target } from "lucide-react";
import { EMPTY_HUD, type HudSnapshot, type WeaponId } from "@/game/types";
import { cn } from "@/lib/utils";

const WEAPON_LABEL: Record<HudSnapshot["weapon"], string> = {
  rifle: "7.62 突击步枪",
  pistol: "9mm 手枪",
  shotgun: "12号 霰弹",
};

const LOADOUT: { id: WeaponId; key: string; name: string }[] = [
  { id: "rifle", key: "1", name: "步枪" },
  { id: "pistol", key: "2", name: "手枪" },
  { id: "shotgun", key: "3", name: "霰弹" },
];

function MiniMap({ hud }: { hud: HudSnapshot }) {
  const scale = 1.15;
  const to = (x: number, z: number) => ({ left: 56 + x * scale, top: 56 + z * scale });
  const p = to(hud.playerX, hud.playerZ);
  const e = to(hud.extractX, hud.extractZ);
  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-sm border border-ridge-line bg-ridge-raised/80">
      <div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ridge-sand/80"
        style={{ left: e.left, top: e.top }}
      />
      {hud.bots.map((b, i) => {
        if (!b.alive) return null;
        const pt = to(b.x, b.z);
        return (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-ridge-blood"
            style={{ left: pt.left, top: pt.top }}
          />
        );
      })}
      {hud.pickups.map((pk, i) => {
        if (!pk.ready) return null;
        const pt = to(pk.x, pk.z);
        return (
          <div
            key={`p${i}`}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2"
            style={{ left: pt.left, top: pt.top, background: pk.kind === "armor" ? "#7d9a6a" : "#c4a574" }}
          />
        );
      })}
      <div
        className="absolute h-2 w-2 bg-ridge-fg"
        style={{ left: p.left, top: p.top, transform: `translate(-50%, -50%) rotate(${-hud.yaw}rad)` }}
      />
    </div>
  );
}

function Compass({ yaw }: { yaw: number }) {
  const deg = ((-yaw * 180) / Math.PI + 3600) % 360;
  const labels = [
    { t: "N", a: 0 },
    { t: "E", a: 90 },
    { t: "S", a: 180 },
    { t: "W", a: 270 },
  ];
  return (
    <div className="relative h-6 w-44 overflow-hidden border-b border-ridge-line/80">
      {labels.map((l) => {
        let d = l.a - deg;
        while (d > 180) d -= 360;
        while (d < -180) d += 360;
        const x = 88 + d * 0.7;
        if (x < 8 || x > 168) return null;
        return (
          <span
            key={l.t}
            className="absolute top-0 -translate-x-1/2 font-mono text-[10px] tracking-widest text-ridge-sand"
            style={{ left: x }}
          >
            {l.t}
          </span>
        );
      })}
    </div>
  );
}

export function RidgeApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<import("@/game/engine").RidgeGame | null>(null);
  const queued = useRef(false);
  const [hud, setHud] = useState<HudSnapshot>(EMPTY_HUD);
  const [ready, setReady] = useState(false);
  const [bootErr, setBootErr] = useState("");
  const [deployed, setDeployed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let disposed = false;
    let game: import("@/game/engine").RidgeGame | null = null;
    void import("@/game/engine")
      .then(({ RidgeGame }) => {
        if (disposed || !canvasRef.current) return;
        game = new RidgeGame(canvasRef.current, setHud);
        game.attachProbe();
        gameRef.current = game;
        setReady(true);
        if (queued.current) {
          queued.current = false;
          setDeployed(true);
          game.startMatch();
        }
      })
      .catch((err: unknown) => {
        setBootErr(err instanceof Error ? err.message : "引擎加载失败");
      });
    return () => {
      disposed = true;
      game?.dispose();
      gameRef.current = null;
    };
  }, []);

  const play = () => {
    setDeployed(true);
    const game = gameRef.current;
    if (!game) {
      queued.current = true;
      return;
    }
    if (hud.phase === "paused") game.resume();
    else game.startMatch();
  };

  const playing = hud.phase === "playing" || hud.phase === "dead" || (deployed && hud.phase === "menu");
  const showGate = hud.phase === "paused" || hud.phase === "extracted" || (hud.phase === "menu" && !deployed);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-ridge-bg text-ridge-fg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none"
        onContextMenu={(e) => e.preventDefault()}
      />

      {hud.damageFlash > 0 && <div className="pointer-events-none absolute inset-0 bg-ridge-blood/35" />}

      {playing && (
        <div className="pointer-events-none absolute inset-0">
          <div
            className={cn(
              "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2",
              hud.hitmarker > 0 ? "text-ridge-sand" : "text-ridge-fg/80",
            )}
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-current" />
            <span className="absolute bottom-0 left-1/2 h-1.5 w-px -translate-x-1/2 bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-1.5 -translate-y-1/2 bg-current" />
            <span className="absolute right-0 top-1/2 h-px w-1.5 -translate-y-1/2 bg-current" />
            {hud.hitmarker > 0 && (
              <span className="absolute inset-0 m-auto h-2 w-2 rotate-45 border border-ridge-sand" />
            )}
          </div>

          <header className="absolute left-4 top-4 flex flex-col gap-1">
            <p className="font-display text-xs tracking-widest text-ridge-sand">RIDGE 47</p>
            <p className="font-mono text-xs text-ridge-muted">
              {Math.floor(hud.matchTime / 60)}:{String(Math.floor(hud.matchTime % 60)).padStart(2, "0")} · 敌 {hud.botsAlive} · 雷 {hud.grenades}
            </p>
            <Compass yaw={hud.yaw} />
            <div className="mt-2 w-40">
              <div className="h-1.5 overflow-hidden rounded-sm bg-ridge-raised">
                <div className="h-full bg-ridge-blood" style={{ width: `${hud.health}%` }} />
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-sm bg-ridge-raised">
                <div className="h-full bg-ridge-sand" style={{ width: `${hud.armor}%` }} />
              </div>
              {hud.extract > 0 && (
                <div className="mt-1 h-1 overflow-hidden rounded-sm bg-ridge-raised">
                  <div className="h-full bg-ridge-sand" style={{ width: `${hud.extract * 100}%` }} />
                </div>
              )}
            </div>
            {!hud.locked && (
              <p className="mt-2 font-mono text-[10px] tracking-wide text-ridge-sand">拖拽画面瞄准 · 点击锁定鼠标</p>
            )}
          </header>

          <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
            <MiniMap hud={hud} />
            <div className="space-y-1 text-right font-mono text-xs text-ridge-muted">
              {hud.killFeed.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <footer className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
            <p className="font-display text-sm tracking-wide text-ridge-sand">{hud.message}</p>
            <p className="font-mono text-2xl text-ridge-fg">
              {hud.reloading ? "装填" : `${hud.mag}`}
              <span className="text-sm text-ridge-muted"> / {hud.reserve}</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-ridge-muted">
              {WEAPON_LABEL[hud.weapon]} · K {hud.kills} / D {hud.deaths}
            </p>
            <div className="mt-1 flex gap-1">
              {LOADOUT.map((w) => (
                <span
                  key={w.id}
                  className={cn(
                    "border px-2 py-0.5 font-mono text-[10px] tracking-widest",
                    hud.weapon === w.id
                      ? "border-ridge-sand text-ridge-sand"
                      : "border-ridge-line text-ridge-muted",
                  )}
                >
                  {w.key} {w.name}
                </span>
              ))}
            </div>
          </footer>
        </div>
      )}

      {playing && (
        <div className="absolute inset-x-0 bottom-4 flex items-end justify-between px-4 md:hidden">
          <div className="relative h-28 w-28 rounded-full border border-ridge-line bg-ridge-raised/60">
            <p className="absolute inset-x-0 top-2 text-center font-mono text-xs text-ridge-muted">MOVE</p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="h-14 w-14 rounded-full bg-ridge-rust font-display text-sm text-ridge-fg"
              onPointerDown={() => gameRef.current?.setFire(true)}
              onPointerUp={() => gameRef.current?.setFire(false)}
            >
              开火
            </button>
            <div className="flex gap-2">
              <button type="button" className="h-11 w-11 rounded-full bg-ridge-raised text-xs" onClick={() => gameRef.current?.jump()}>
                跳
              </button>
              <button type="button" className="h-11 w-11 rounded-full bg-ridge-raised text-xs" onClick={() => gameRef.current?.reload()}>
                弹
              </button>
              <button type="button" className="h-11 w-11 rounded-full bg-ridge-raised text-xs" onClick={() => gameRef.current?.tossNade()}>
                雷
              </button>
            </div>
          </div>
        </div>
      )}

      {showGate && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-ridge-bg/70 backdrop-blur-sm"
          onClick={(e) => {
            const t = e.target as HTMLElement;
            if (t.closest("button,input,label")) return;
            play();
          }}
        >
          <div className="mx-4 w-full max-w-md border border-ridge-line bg-ridge-surface/90 p-8">
            <p className="font-mono text-xs tracking-widest text-ridge-sand">TACTICAL FPS · HOURLY FORGE</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight text-ridge-fg">RIDGE 47</h1>
            <p className="mt-3 text-sm leading-relaxed text-ridge-muted">
              {hud.phase === "extracted"
                ? "机库信标锁定。这局撤出来了。"
                : "黄昏采石场。南侧出生有 6 秒保护。西仓库、北机库有弹药箱和护甲箱，走过去就捡。北机库金盘站 20 秒撤离。"}
            </p>
            <ul className="mt-4 space-y-1 font-mono text-xs text-ridge-muted">
              <li>点击任意处进入 · WASD 移动 · 拖拽或锁定鼠标瞄准</li>
              <li>左键射击 · 右键机瞄 · R 换弹 · 1/2/3 切枪 · G 手雷</li>
              <li>西仓库可进 · 金色圆盘 = 北机库撤离</li>
            </ul>
            {hud.phase === "paused" && (
              <div className="mt-4 space-y-3 font-mono text-xs text-ridge-muted">
                <label className="flex items-center justify-between gap-3">
                  灵敏度 {hud.sensitivity.toFixed(1)}
                  <input
                    type="range"
                    min={0.4}
                    max={2.2}
                    step={0.1}
                    value={hud.sensitivity}
                    onChange={(e) => gameRef.current?.setSensitivity(Number(e.target.value))}
                    className="w-36 accent-ridge-sand"
                  />
                </label>
                <label className="flex items-center justify-between gap-3">
                  视野 {Math.round(hud.fov)}
                  <input
                    type="range"
                    min={60}
                    max={100}
                    step={1}
                    value={hud.fov}
                    onChange={(e) => gameRef.current?.setFov(Number(e.target.value))}
                    className="w-36 accent-ridge-sand"
                  />
                </label>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-ridge-rust px-5 py-3 font-display text-sm tracking-wide text-ridge-fg"
                onClick={play}
              >
                {hud.phase === "paused" ? <Play className="h-4 w-4" /> : <Target className="h-4 w-4" />}
                {!ready
                  ? "正在装弹…"
                  : hud.phase === "paused"
                    ? "继续部署"
                    : "进入战区"}
              </button>
              {(hud.phase === "paused" || hud.phase === "extracted") && (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border border-ridge-line px-5 py-3 font-display text-sm"
                  onClick={() => gameRef.current?.startMatch()}
                >
                  <RotateCcw className="h-4 w-4" /> 重开
                </button>
              )}
            </div>
            {bootErr && <p className="mt-3 font-mono text-xs text-ridge-blood">{bootErr}</p>}
            {hud.phase === "paused" && (
              <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-ridge-muted">
                <Pause className="h-3 w-3" /> 已暂停
              </p>
            )}
            {(hud.phase === "dead" || hud.phase === "extracted") && (
              <p className="mt-4 font-mono text-xs text-ridge-sand">{hud.message}</p>
            )}
            <p className="mt-5 font-mono text-[10px] tracking-widest text-ridge-muted">CLICK ANYWHERE TO DEPLOY</p>
          </div>
        </div>
      )}

      {hud.phase === "menu" && !deployed && (
        <Crosshair className="pointer-events-none absolute right-6 top-6 h-5 w-5 text-ridge-muted" />
      )}
    </div>
  );
}
