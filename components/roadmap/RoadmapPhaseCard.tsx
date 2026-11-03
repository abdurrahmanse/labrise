"use client";

import React from "react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import {
  PhaseCardHeader,
  PhaseStrategicObjective,
  PhaseMilestonesPreview,
  PhaseCardFooter,
} from "./card";

export interface RoadmapPhaseCardProps {
  phase: RoadmapPhase;
}

export function RoadmapPhaseCard({ phase }: RoadmapPhaseCardProps) {
  return (
    <article
      id={phase.id}
      className="scroll-mt-24 p-5 sm:p-7 rounded-2xl bg-canvas-card border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-950/20 flex flex-col justify-between group space-y-6"
    >
      <PhaseCardHeader phase={phase} />
      <PhaseStrategicObjective what={phase.what} />
      <PhaseMilestonesPreview how={phase.how} />
      <PhaseCardFooter
        slug={phase.slug}
        resources={phase.where}
        checklistCount={phase.checklist.length}
      />
    </article>
  );
}

export default RoadmapPhaseCard;
