export function SwooshDivider() {
  return (
    <div className="swoosh-divider" aria-hidden="true">
      <svg viewBox="0 0 36 64" className="h-10 w-6 text-accent">
        <path
          d="M18 6 C 28 18, 8 30, 18 44"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M18 58 L 10 44 L 18 48 L 26 44 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
