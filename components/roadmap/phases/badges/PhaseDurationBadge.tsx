import React from "react";
import { Clock } from "lucide-react";

export interface PhaseDurationBadgeProps {
  estimatedDuration: string;
}

export function PhaseDurationBadge({ estimatedDuration }: PhaseDurationBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
      <Clock className="w-3.5 h-3.5 text-teal-400" />
      <span>{estimatedDuration}</span>
    </span>
  );
}

export default PhaseDurationBadge;
