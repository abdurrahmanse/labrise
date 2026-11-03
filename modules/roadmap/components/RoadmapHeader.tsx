import React from "react";
import { roadmapControlsData } from "@/content/roadmap/roadmapPhasesData";
import {
  RoadmapHeaderGlow,
  RoadmapRadarBadge,
  RoadmapIntelligenceChips,
} from "./header";

export function RoadmapHeader() {
  const { title, subtitle } = roadmapControlsData.header;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-canvas-card to-canvas-base border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
      <RoadmapHeaderGlow />

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3.5">
          <RoadmapRadarBadge />

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
            {title}
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            {subtitle}
          </p>
        </div>

        <RoadmapIntelligenceChips />
      </div>
    </div>
  );
}

export default RoadmapHeader;
