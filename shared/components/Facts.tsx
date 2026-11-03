import type { ReactNode } from "react";
import { IconFor } from "./IconFor";
import { surface } from "@/shared/components/Surface";

export type FactRow = [label: string, value: ReactNode];

export function Facts({ rows }: { rows: FactRow[] }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className={surface({ tone: "glass", depth: "sm", padding: "md" })}>
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
