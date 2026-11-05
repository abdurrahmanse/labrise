const MILESTONES = [
  { x: 60, y: 330, label: "1" },
  { x: 150, y: 250, label: "2" },
  { x: 120, y: 160, label: "3" },
  { x: 230, y: 120, label: "4" },
  { x: 330, y: 170, label: "5" },
  { x: 400, y: 80, label: "6" }
];

/** Illustration of the journey: a winding path with six milestones, a globe and a graduation cap. */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 380" fill="none" role="img" aria-label="A path with six milestones leading to a graduation cap" className={className}>
      <defs>
        <linearGradient id="hero-path" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#000000" />
          <stop offset="1" stopColor="#a3a3a3" />
        </linearGradient>
      </defs>

      <circle cx="360" cy="110" r="92" className="fill-indigo-400/15" />
      <circle cx="360" cy="110" r="92" className="stroke-indigo-400/40" strokeWidth="1.5" />
      <ellipse cx="360" cy="110" rx="40" ry="92" className="stroke-indigo-400/30" strokeWidth="1.2" />
      <path d="M268 110h184M280 70h160M280 150h160" className="stroke-indigo-400/30" strokeWidth="1.2" />

      <path
        d="M60 330 C 90 300, 150 290, 150 250 S 80 200, 120 160 S 200 150, 230 120 S 300 190, 330 170 S 380 120, 400 80"
        stroke="url(#hero-path)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 12"
      />

      {MILESTONES.map((m) => (
        <g key={m.label}>
          <circle cx={m.x} cy={m.y} r="18" className="fill-indigo-600" />
          <text x={m.x} y={m.y + 5} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">
            {m.label}
          </text>
        </g>
      ))}

      <g transform="translate(372 24)">
        <path d="M28 0 L56 14 L28 28 L0 14 Z" className="fill-cyan-400" />
        <path d="M12 22 V36 C12 42 44 42 44 36 V22 L28 30 Z" className="fill-cyan-600" />
        <path d="M56 14 V34" className="stroke-cyan-400" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
