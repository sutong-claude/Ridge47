export const REPO_URL = "https://github.com/sutong-claude/EternalForge";
export const OWNER = "sutong-claude";
export const REPO = "EternalForge";

export type PhaseId = 0 | 1 | 2 | 3 | 4;

export type Priority = {
  id: string;
  title: string;
  status: "done" | "active" | "queued";
};

export type TimelineEvent = {
  at: string;
  title: string;
  detail: string;
};

export type RepoFile = {
  path: string;
  kind: "code" | "doc" | "config";
  summary: string;
  preview: string;
};

export const forge = {
  name: "EternalForge",
  tagline: "持续自我进化的开源研发熔炉",
  progress: 18,
  phase: "Core Agent",
  phaseId: 1 as PhaseId,
  nextRunIso: "2026-09-14T14:00:00.000Z",
  cadence: "每小时一次",
  email: "hinsbesjan115@gmail.com",
  goal: "打造可无限演进的个人 AI 研究与研发平台：有记忆、能规划、能落地代码、能发进展。",
};

export const priorities: Priority[] = [
  {
    id: "arch",
    title: "固化架构与目录约定",
    status: "done",
  },
  {
    id: "loop",
    title: "实现 plan → act → reflect 循环",
    status: "done",
  },
  {
    id: "memory",
    title: "持久记忆（STATE.md + JSONL journal）",
    status: "done",
  },
  {
    id: "cli",
    title: "可运行的 CLI：status / next / cycle",
    status: "active",
  },
  {
    id: "research",
    title: "研究工具：检索 + 摘要骨架",
    status: "queued",
  },
  {
    id: "capture",
    title: "首个真实功能：每日知识捕获",
    status: "queued",
  },
];

export const roadmap = [
  {
    id: 0,
    name: "Bootstrap",
    detail: "仓库、愿景、STATE 协议、骨架",
    done: true,
  },
  {
    id: 1,
    name: "Core Agent",
    detail: "规划器、记忆、CLI、测试",
    done: false,
  },
  {
    id: 2,
    name: "Research",
    detail: "检索管线、知识库、引用与报告",
    done: false,
  },
  {
    id: 3,
    name: "Productivity",
    detail: "任务、复盘、Gmail / Drive 联动",
    done: false,
  },
  {
    id: 4,
    name: "Self-Improve",
    detail: "质量门禁、架构演进、公开发布",
    done: false,
  },
];

export const timeline: TimelineEvent[] = [
  {
    at: "2026-09-14 06:35 PDT",
    title: "点火",
    detail: "创建公开仓库 EternalForge，写入愿景、STATE、ROADMAP 与骨架。",
  },
  {
    at: "2026-09-14 06:36 PDT",
    title: "小时心跳",
    detail: "注册 eternalforge-hourly：每小时读 STATE、选一件最高杠杆工作、提交、必要时发邮件。",
  },
  {
    at: "2026-09-14 06:50 PDT",
    title: "第一炉钢",
    detail: "落地 STATE 解析器、JSONL 记忆、Agent 循环、CLI 与测试，进度 5% → 18%。",
  },
];

export const metrics = [
  { label: "文件", value: "22" },
  { label: "测试", value: "8" },
  { label: "功能", value: "3" },
  { label: "文档", value: "核心" },
  { label: "心跳", value: "60m" },
  { label: "阶段", value: "1/4" },
];

export const protocol = [
  {
    step: "01",
    name: "Read",
    body: "读取 STATE.md、ROADMAP 与最近提交，重建上下文。",
  },
  {
    step: "02",
    name: "Plan",
    body: "只选一件最高杠杆任务。宁完成一件，不半成品一堆。",
  },
  {
    step: "03",
    name: "Act",
    body: "写代码、测试、文档。保持仓库随时可运行。",
  },
  {
    step: "04",
    name: "Reflect",
    body: "回写 STATE、journal，提交，重大进展发邮件。",
  },
];

export const files: RepoFile[] = [
  {
    path: "eternalforge/core/state.py",
    kind: "code",
    summary: "STATE.md 双向解析：进度、优先级、动作日志。",
    preview: `class ForgeState:
    last_updated: str
    phase: str
    progress: float
    current_goal: str
    priorities: list[str]
    recent_actions: list[str]

    def next_task(self) -> str | None:
        return self.priorities[0] if self.priorities else None`,
  },
  {
    path: "eternalforge/core/memory.py",
    kind: "code",
    summary: "追加式 JSONL 记忆，跨小时运行不断档。",
    preview: `class Journal:
    def append(self, entry: MemoryEntry) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self.path.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(asdict(entry)) + "\\n")`,
  },
  {
    path: "eternalforge/core/agent.py",
    kind: "code",
    summary: "plan → act → reflect 单循环，写回 STATE。",
    preview: `def run_once(self, dry_run: bool = False) -> str:
    state = self.load_state()
    task = self.planner.select(state)
    result = self.act(task)
    if not dry_run:
        self.reflect(state, task, result)
    return result`,
  },
  {
    path: "eternalforge/interfaces/cli.py",
    kind: "code",
    summary: "eternalforge status | next | cycle [--dry-run]",
    preview: `eternalforge status
eternalforge next
eternalforge cycle --dry-run`,
  },
  {
    path: "STATE.md",
    kind: "doc",
    summary: "活上下文。每次运行必读必写。",
    preview: `# EternalForge Live State
**Current phase:** Core Agent
**Overall progress:** 18%`,
  },
  {
    path: "AGENTS.md",
    kind: "doc",
    summary: "给下一小时代理的操作手册。",
    preview: `Always: read STATE.md → one task → implement → update STATE → commit.`,
  },
];

export const architectureNodes = [
  {
    id: "state",
    title: "STATE.md",
    role: "活记忆",
    body: "唯一权威上下文。进度、优先级、阻塞、给下一任的笔记。",
  },
  {
    id: "planner",
    title: "Planner",
    role: "取舍",
    body: "从优先级队列取出一件最高杠杆任务，拒绝并行半成品。",
  },
  {
    id: "agent",
    title: "Agent Core",
    role: "循环",
    body: "plan → act → reflect。本地 CLI 与小时自动化共用同一协议。",
  },
  {
    id: "journal",
    title: "Journal",
    role: "轨迹",
    body: "JSONL 追加日志，补 STATE 的结构化历史。",
  },
  {
    id: "github",
    title: "GitHub",
    role: "本体",
    body: "代码、文档、提交即真相。小时代理直接读写仓库。",
  },
  {
    id: "mail",
    title: "Gmail",
    role: "信号",
    body: "重大进展才发信，避免噪音。",
  },
];
