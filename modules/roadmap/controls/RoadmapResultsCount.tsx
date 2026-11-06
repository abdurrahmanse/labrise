import React from "react";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface RoadmapResultsCountProps {
  totalCount: number;
  filteredCount: number;
}

export function RoadmapResultsCount({
  totalCount,
  filteredCount,
}: RoadmapResultsCountProps) {
  const { ofSeparator, countSuffix } = roadmapUiData.controls;

  return (
    <div className="ml-auto lg:ml-2 pl-3 lg:border-l border-white/10">
      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5">
        {filteredCount} {ofSeparator} {totalCount} {countSuffix}
      </span>
    </div>
  );
}

export default RoadmapResultsCount;
