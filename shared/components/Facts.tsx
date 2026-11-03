import type { ReactNode } from "react";
import { IconFor } from "./IconFor";

export type FactRow = [label: string, value: ReactNode];

export function Facts({ rows }: { rows: FactRow[] }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="bg-canvas-card/70 backdrop-blur-xl p-4 shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
            <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
              <IconFor text={label} className="h-4 w-4 text-indigo-400" />
              {label}
            </dt>
            <dd className="mt-1 text-base font-bold text-white">{value}</dd>
          </div>
      ))}
    </dl>
  );
}
