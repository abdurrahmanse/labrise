import type { ReactNode } from "react";
import { IconFor } from "./IconFor";

export const infoCardClass =
  "border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]";

export function InfoCard({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className={infoCardClass}>
      {label && (
        <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
          <IconFor text={label} className="h-4 w-4" />
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
