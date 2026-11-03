import React from "react";
import { legacyText } from "@/content/text/legacy";

export interface StepObjectiveBannerProps {
  keyObjective: string;
}

/**
 * Admissions key objective banner sub-section.
 */
export function StepObjectiveBanner({ keyObjective }: StepObjectiveBannerProps) {
  return (
    <div className="p-4 rounded-xl bg-canvas-base border-l-4 border-l-indigo-500 border-r border-t border-b border-white/5 mb-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 mb-1">
        {legacyText.stepObjectiveBanner.t0}
      </div>
      <p className="font-sans text-slate-200">{keyObjective}</p>
    </div>
  );
}

export default StepObjectiveBanner;
