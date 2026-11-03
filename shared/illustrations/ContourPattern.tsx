/** Decorative topographic lines for page headers and sections. */
export function ContourPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" aria-hidden="true" className={`pointer-events-none text-indigo-400 ${className}`}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M-20 ${190 - i * 6} C 70 ${120 - i * 14}, 150 ${240 - i * 12}, 230 ${130 - i * 10} S 360 ${60 + i * 6}, 430 ${110 - i * 8}`}
          stroke="currentColor"
          strokeOpacity={0.5 - i * 0.05}
          strokeWidth="1.2"
        />
      ))}
      {[[70, 150], [230, 126], [330, 84]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4" fill="currentColor" fillOpacity="0.7" />
      ))}
    </svg>
  );
}
