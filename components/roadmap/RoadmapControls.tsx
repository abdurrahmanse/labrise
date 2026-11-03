"use client";

import React from "react";
import {
  RoadmapSearchField,
  RoadmapPathwayChips,
  RoadmapResultsCount,
} from "./controls";

export interface RoadmapControlsProps {
  filterDegree: "all" | "masters" | "phd";
  onFilterDegreeChange: (degree: "all" | "masters" | "phd") => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function RoadmapControls({
  filterDegree,
  onFilterDegreeChange,
  searchQuery,
  onSearchQueryChange,
  totalCount,
  filteredCount,
}: RoadmapControlsProps) {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#121214]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <RoadmapSearchField
          value={searchQuery}
          onChange={onSearchQueryChange}
        />

        <div className="flex items-center gap-2 flex-wrap">
          <RoadmapPathwayChips
            filterDegree={filterDegree}
            onFilterDegreeChange={onFilterDegreeChange}
          />

          <RoadmapResultsCount
            totalCount={totalCount}
            filteredCount={filteredCount}
          />
        </div>
      </div>
    </div>
  );
}

export default RoadmapControls;
