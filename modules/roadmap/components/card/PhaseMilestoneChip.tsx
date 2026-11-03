import React from "react";
import { PhaseHowToStep } from "@/data/roadmapPhasesData";

export interface PhaseMilestoneChipProps {
  step: PhaseHowToStep;
  index: number;
}

export function PhaseMilestoneChip({ step, index }: PhaseMilestoneChipProps) {
  return (
    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
      <div className="w-5 h-5 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
        {index + 1}
      </div>
      <span className="font-semibold text-white leading-tight">
        {step.step}
      </span>
    </div>
  );
}

export default PhaseMilestoneChip;
