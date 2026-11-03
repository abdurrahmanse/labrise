import type { ReactNode } from "react";

export type FactRow = [label: string, value: ReactNode];

export function Facts({ rows }: { rows: FactRow[] }) {
  return (
    <dl className="grid gap-px border-2 border-white/30 bg-white/20 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="bg-canvas-card/80 backdrop-blur-xl p-4">
          <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">{label}</dt>
          <dd className="mt-1 text-lg font-bold text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
