import React from "react";
import { roadmapLevelsData } from "@/data/levelsData";
import { LevelCard } from "../LevelCard";
import { LevelsComparisonMatrix } from "../LevelsComparisonMatrix";
import { RoadmapLevelsSectionHeader } from "./RoadmapLevelsSectionHeader";

export function RoadmapLevelsLadderSection() {
  return (
    <section id="levels-ladder" className="space-y-8 pt-8 border-t border-white/10">
      <RoadmapLevelsSectionHeader />

      <div className="space-y-6">
        {roadmapLevelsData.map((lvl) => (
          <LevelCard key={lvl.id} level={lvl} />
        ))}
      </div>

      <LevelsComparisonMatrix />
    </section>
  );
}

export default RoadmapLevelsLadderSection;
