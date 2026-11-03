import React from "react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseIndexBadgeProps {
  phaseNumber: number;
}

export function PhaseIndexBadge({ phaseNumber }: PhaseIndexBadgeProps) {
  const { badges } = phaseDetailUiData;

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold">
      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
      <span>
        {badges.phasePrefix} {String(phaseNumber).padStart(2, "0")} {badges.totalPhasesSuffix}
      </span>
    </span>
  );
}

export default PhaseIndexBadge;
