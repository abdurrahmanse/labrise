"use client";

import React from "react";
import { GraduationCap, Award, Compass } from "lucide-react";
import { roadmapControlsData } from "@/content/roadmap/roadmapPhasesData";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface RoadmapPathwayChipsProps {
  filterDegree: "all" | "masters" | "phd";
  onFilterDegreeChange: (degree: "all" | "masters" | "phd") => void;
}

export function RoadmapPathwayChips({
  filterDegree,
  onFilterDegreeChange,
}: RoadmapPathwayChipsProps) {
  const { filters } = roadmapControlsData;
  const { scopeLabel } = roadmapUiData.controls;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
        {scopeLabel}
      </span>

      <button
        onClick={() => onFilterDegreeChange("all")}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
          filterDegree === "all"
            ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
            : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
        }`}
      >
        <Compass className="w-3.5 h-3.5" />
        <span>{filters.all}</span>
      </button>

      <button
        onClick={() => onFilterDegreeChange("masters")}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
          filterDegree === "masters"
            ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
            : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
        }`}
      >
        <GraduationCap className="w-3.5 h-3.5" />
        <span>{filters.masters}</span>
      </button>

      <button
        onClick={() => onFilterDegreeChange("phd")}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
          filterDegree === "phd"
            ? "bg-indigo-600 text-white border-transparent shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] font-bold"
            : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
        }`}
      >
        <Award className="w-3.5 h-3.5" />
        <span>{filters.phd}</span>
      </button>
    </div>
  );
}

export default RoadmapPathwayChips;
