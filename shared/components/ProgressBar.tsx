export function ProgressBar({ percent, label }: { percent: number; label: string }) {
  return (
    <div role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label} className="h-2.5 w-full bg-white/10">
      <div className="h-full bg-gradient-to-r from-indigo-600 to-cyan-400 transition-all duration-300" style={{ width: `${percent}%` }} />
    </div>
  );
}
