export class TacticalAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfx: GainNode | null = null;

  unlock() {
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    try {
      this.ctx = new Ctor({ latencyHint: "interactive" });
    } catch {
      this.ctx = new Ctor();
    }
    this.master = this.ctx.createGain();
    this.sfx = this.ctx.createGain();
    this.master.gain.value = 0.22;
    this.sfx.gain.value = 1;
    this.sfx.connect(this.master);
    this.master.connect(this.ctx.destination);
  }

  setListener(x: number, y: number, z: number, yaw: number) {
    const ctx = this.ctx;
    if (!ctx) return;
    const l = ctx.listener;
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    if (l.positionX) {
      l.positionX.value = x;
      l.positionY.value = y;
      l.positionZ.value = z;
      l.forwardX.value = fx;
      l.forwardY.value = 0;
      l.forwardZ.value = fz;
      l.upX.value = 0;
      l.upY.value = 1;
      l.upZ.value = 0;
    } else {
      const legacy = l as AudioListener & {
        setPosition?: (x: number, y: number, z: number) => void;
        setOrientation?: (fx: number, fy: number, fz: number, ux: number, uy: number, uz: number) => void;
      };
      legacy.setPosition?.(x, y, z);
      legacy.setOrientation?.(fx, 0, fz, 0, 1, 0);
    }
  }

  private volAt(dist: number, near = 6, far = 58) {
    if (dist <= near) return 1;
    if (dist >= far) return 0.04;
    return Math.max(0.04, near / dist);
  }

  private noise(duration: number, volume: number, freq = 0, dist = 0) {
    const ctx = this.ctx;
    const sfx = this.sfx;
    if (!ctx || !sfx) return;
    const n = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    const data = n.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = ctx.createBufferSource();
    src.buffer = n;
    src.playbackRate.value = 0.94 + Math.random() * 0.12;
    const g = ctx.createGain();
    const v = volume * this.volAt(dist);
    g.gain.setValueAtTime(v, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    if (freq > 0) {
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = freq;
      src.connect(f);
      f.connect(g);
    } else {
      src.connect(g);
    }
    g.connect(sfx);
    src.start();
  }

  private tone(freq: number, duration: number, volume: number, type: OscillatorType = "square", dist = 0) {
    const ctx = this.ctx;
    const sfx = this.sfx;
    if (!ctx || !sfx) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq * (0.97 + Math.random() * 0.06);
    const v = Math.max(0.001, volume * this.volAt(dist));
    g.gain.setValueAtTime(v, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    o.connect(g);
    g.connect(sfx);
    o.start();
    o.stop(ctx.currentTime + duration);
  }

  fire(rifle: boolean, dist = 0) {
    this.noise(rifle ? 0.08 : 0.05, rifle ? 0.55 : 0.4, rifle ? 900 : 1400, dist);
    this.tone(rifle ? 90 : 140, 0.06, 0.18, "sawtooth", dist);
  }

  hit() {
    this.tone(880, 0.04, 0.12, "square");
  }

  hurt() {
    this.noise(0.12, 0.35, 400);
    this.tone(70, 0.15, 0.2, "sine");
  }

  reload() {
    this.tone(220, 0.08, 0.08, "triangle");
    this.tone(160, 0.12, 0.06, "triangle");
  }

  empty() {
    this.tone(90, 0.05, 0.08, "square");
  }

  foot() {
    this.noise(0.04, 0.08, 300);
  }

  explode(dist = 0) {
    this.noise(0.28, 0.7, 500, dist);
    this.tone(55, 0.22, 0.28, "sawtooth", dist);
  }

  extract(progress: number) {
    this.tone(220 + progress * 440, 0.06, 0.07, "square");
  }

  nade(dist = 0) {
    this.tone(180, 0.08, 0.1, "triangle", dist);
  }

  win() {
    this.tone(440, 0.12, 0.12, "square");
    this.tone(660, 0.18, 0.1, "square");
  }

  click() {
    this.tone(310, 0.05, 0.06, "square");
    this.tone(190, 0.07, 0.05, "triangle");
  }

  pickup(armor: boolean) {
    this.tone(armor ? 520 : 360, 0.08, 0.08, "square");
    this.tone(armor ? 780 : 540, 0.12, 0.06, "triangle");
  }
}
