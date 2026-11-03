import type { ReactNode } from "react";

export const infoCardClass =
  "border-2 border-white/30 bg-canvas-card/60 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]";

export function InfoCard({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className={infoCardClass}>
      {label && <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-2">{label}</div>}
      {children}
    </div>
  );
}
