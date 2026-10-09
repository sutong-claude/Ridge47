export function ForgeMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" className="fill-raised" />
      <path
        d="M10 32h28M14 32v-6c0-6 4.5-10 10-10s10 4 10 10v6"
        className="stroke-primary"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="24" cy="18" r="3.2" className="fill-ember" />
      <path
        d="M18 36h12"
        className="stroke-muted"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
