import React from "react";
import type { PhaseHowToStep } from "../../types/phase";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";
import { PhaseMilestoneChip } from "./PhaseMilestoneChip";

export interface PhaseMilestonesPreviewProps {
  how: PhaseHowToStep[];
}

export function PhaseMilestonesPreview({ how }: PhaseMilestonesPreviewProps) {
  const { card } = roadmapUiData;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
          {card.keyMilestonesLabel}
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          {how.length} {card.sequencedMilestonesSuffix}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {how.map((step, idx) => (
          <PhaseMilestoneChip key={idx} step={step} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default PhaseMilestonesPreview;
