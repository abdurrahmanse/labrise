import React from "react";
import { ListOrdered } from "lucide-react";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export function RoadmapPhasesSectionHeader() {
  const { phasesSection } = roadmapUiData;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-2">
          <ListOrdered className="w-3.5 h-3.5 text-teal-400" />
          <span>{phasesSection.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {phasesSection.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
          {phasesSection.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold text-teal-300 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30">
          {phasesSection.countBadge}
        </span>
      </div>
    </div>
  );
}

export default RoadmapPhasesSectionHeader;
