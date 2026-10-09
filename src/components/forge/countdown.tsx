import { useEffect, useState } from "react";
import { forge } from "@/lib/forge-data";

function formatRemain(ms: number) {
  if (ms <= 0) return "即将点火";
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
  return `${pad(m)}:${pad(s)}`;
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) {
    return <span className="font-mono tabular-nums text-primary">--:--</span>;
  }

  const target = new Date(forge.nextRunIso).getTime();
  return (
    <span className="font-mono tabular-nums text-primary">
      {formatRemain(target - now)}
    </span>
  );
}
