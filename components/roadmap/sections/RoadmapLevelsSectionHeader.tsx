"use client";

import React from "react";
import { Layers } from "lucide-react";
import { roadmapUiData } from "@/data/roadmapUiData";

export function RoadmapLevelsSectionHeader() {
  const { levelsSection } = roadmapUiData;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold mb-2">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>{levelsSection.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {levelsSection.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
          {levelsSection.subtitle}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold text-indigo-300 px-3 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40">
          {levelsSection.countBadge}
        </span>
      </div>
    </div>
  );
}

export default RoadmapLevelsSectionHeader;
