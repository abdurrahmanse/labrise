import React from "react";
import { Compass, ShieldCheck } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";
import { roadmapUiData } from "@/data/roadmapUiData";

export function RoadmapRadarBadge() {
  const { badge } = roadmapControlsData.header;
  const { standardBadge } = roadmapUiData.header;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold shadow-sm">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <Compass className="w-3.5 h-3.5 text-teal-400" />
        <span>{badge}</span>
      </div>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>{standardBadge}</span>
      </span>
    </div>
  );
}

export default RoadmapRadarBadge;
