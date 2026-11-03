import React from "react";
import { Award, FileCheck } from "lucide-react";

export interface StepDeliverableBannerProps {
  deliverable: string;
}

/**
 * Proof-of-work deliverable requirement banner sub-section.
 */
export function StepDeliverableBanner({ deliverable }: StepDeliverableBannerProps) {
  return (
    <div className="p-4 rounded-xl bg-gradient-to-r from-[#0b0b0c] via-[#121214] to-[#0b0b0c] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Tangible Proof-of-Work Requirement
          </span>
          <span className="text-xs sm:text-sm font-semibold text-white">
            {deliverable}
          </span>
        </div>
      </div>

      <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-700/40 shrink-0 self-start sm:self-center flex items-center gap-1.5">
        <FileCheck className="w-3.5 h-3.5" />
        Required for Level Advance
      </span>
    </div>
  );
}

export default StepDeliverableBanner;
