import type { ReactNode } from "react";
import { iconFor } from "../lib/iconFor";

export const infoCardClass =
  "border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]";

export function InfoCard({ label, children }: { label?: string; children: ReactNode }) {
  const Icon = label ? iconFor(label) : null;
  return (
    <div className={infoCardClass}>
      {label && Icon && (
        <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
          <Icon className="h-4 w-4" aria-hidden />
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
