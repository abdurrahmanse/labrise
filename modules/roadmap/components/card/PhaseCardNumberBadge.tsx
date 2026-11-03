import React from "react";

export interface PhaseCardNumberBadgeProps {
  phaseNumber: number;
}

export function PhaseCardNumberBadge({ phaseNumber }: PhaseCardNumberBadgeProps) {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500/20 via-indigo-500/20 to-teal-500/10 border border-teal-500/30 flex items-center justify-center text-base font-mono font-black text-teal-300 shrink-0 shadow-sm">
      {String(phaseNumber).padStart(2, "0")}
    </div>
  );
}

export default PhaseCardNumberBadge;
