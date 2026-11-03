import React from "react";
import { Layers, Check } from "lucide-react";
import { legacyText } from "@/content/text/legacy";

export interface StepProgressBarProps {
  completedCount: number;
  totalCount: number;
  progressPercent: number;
}

/**
 * Step milestone completion progress bar sub-section.
 */
export function StepProgressBar({
  completedCount,
  totalCount,
  progressPercent,
}: StepProgressBarProps) {
  return (
    <div className="p-3.5 sm:p-4 rounded-xl bg-canvas-base border border-white/10 mb-5 space-y-2.5">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
            {legacyText.stepProgressBar.t0}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-slate-300">
            {completedCount} of {totalCount} Complete
          </span>
          {progressPercent === 100 ? (
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-none flex items-center gap-1 shadow-sm">
              <Check className="w-3 h-3 text-emerald-400" />
              {legacyText.stepProgressBar.t1}
            </span>
          ) : (
            <span className="font-mono text-[11px] font-bold text-cyan-400">
              {progressPercent}%
            </span>
          )}
        </div>
      </div>

      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-white/5 p-0.5">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 transition-all duration-500 ease-out rounded-full shadow-lg"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default StepProgressBar;
