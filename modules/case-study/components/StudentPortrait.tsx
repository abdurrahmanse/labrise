/**
 * A drawn, studio-style portrait of the made-up student. It is an illustration, not a photograph of anyone.
 * The same drawing is used on the profile card, the passport specimen and the sample PDFs.
 */
export function StudentPortrait({ size = 96, className }: { size?: number; className?: string }) {
  return (
    <svg role="img" aria-label="Illustrated portrait of the sample student" viewBox="0 0 200 240" width={size} height={(size * 240) / 200} className={className}>
      <defs>
        <linearGradient id="portrait-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe6ee" />
          <stop offset="1" stopColor="#c3ced9" />
        </linearGradient>
        <linearGradient id="portrait-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a1d17" />
          <stop offset="1" stopColor="#120c09" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#portrait-bg)" />
      {/* hair behind the shoulders */}
      <path d="M52 112c-6-52 28-78 62-76 40 2 64 34 54 88-4 24-8 52-10 70H62c-6-24-8-52-10-82z" fill="url(#portrait-hair)" />
      {/* blazer */}
      <path d="M14 240c2-44 30-62 66-70h40c36 8 64 26 66 70z" fill="#27323f" />
      <path d="M80 170l20 38 20-38z" fill="#f2f4f7" />
      <path d="M80 170l-14 70h22zM120 170l14 70h-22z" fill="#1d2630" />
      {/* neck */}
      <path d="M86 140h28v34c-8 10-20 10-28 0z" fill="#c98f66" />
      {/* face */}
      <ellipse cx="100" cy="106" rx="40" ry="48" fill="#dba579" />
      <ellipse cx="60" cy="112" rx="6" ry="10" fill="#d09a6e" />
      <ellipse cx="140" cy="112" rx="6" ry="10" fill="#d09a6e" />
      {/* fringe */}
      <path d="M58 100c2-34 24-52 50-50 24 2 38 22 34 50-8-20-22-30-40-30-16 0-34 8-44 30z" fill="url(#portrait-hair)" />
      {/* brows, eyes */}
      <path d="M72 96q9-6 18-1M110 95q9-5 18 1" stroke="#2a1d17" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="82" cy="108" rx="6" ry="3.6" fill="#fff" />
      <ellipse cx="118" cy="108" rx="6" ry="3.6" fill="#fff" />
      <circle cx="82" cy="108" r="2.8" fill="#2a1d17" />
      <circle cx="118" cy="108" r="2.8" fill="#2a1d17" />
      {/* nose, smile */}
      <path d="M100 112c-3 8-5 14 0 16 3 0 4-1 4-2" stroke="#b97c55" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M86 138q14 12 28 0" stroke="#8c4a3a" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
