"use client";

import React, { useState } from "react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { RoadmapControls } from "../RoadmapControls";
import { RoadmapPhaseCard } from "../RoadmapPhaseCard";
import { RoadmapEmptyState } from "../RoadmapEmptyState";
import { RoadmapPhasesSectionHeader } from "./RoadmapPhasesSectionHeader";

export function RoadmapPhasesPipelineSection() {
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPhases = roadmapPhasesData.filter((phase) => {
    if (filterDegree === "masters" && phase.degreeScope === "phd") return false;
    if (filterDegree === "phd" && phase.degreeScope === "masters") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = phase.title.toLowerCase().includes(q);
      const inTagline = phase.tagline.toLowerCase().includes(q);
      const inWhat = phase.what.toLowerCase().includes(q);
      const inHow = phase.how.some(
        (h) =>
          h.step.toLowerCase().includes(q) || h.detail.toLowerCase().includes(q)
      );
      return inTitle || inTagline || inWhat || inHow;
    }
    return true;
  });

  return (
    <section id="phases-pipeline" className="space-y-6">
      <RoadmapPhasesSectionHeader />

      <RoadmapControls
        filterDegree={filterDegree}
        onFilterDegreeChange={setFilterDegree}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        totalCount={roadmapPhasesData.length}
        filteredCount={filteredPhases.length}
      />

      <div className="space-y-5">
        {filteredPhases.length === 0 ? (
          <RoadmapEmptyState
            onReset={() => {
              setSearchQuery("");
              setFilterDegree("all");
            }}
          />
        ) : (
          filteredPhases.map((phase) => (
            <RoadmapPhaseCard key={phase.id} phase={phase} />
          ))
        )}
      </div>
    </section>
  );
}

export default RoadmapPhasesPipelineSection;
