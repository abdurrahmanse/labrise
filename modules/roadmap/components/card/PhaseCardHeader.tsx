import React from "react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { PhaseCardNumberBadge } from "./PhaseCardNumberBadge";
import { PhaseCardMetaBadges } from "./PhaseCardMetaBadges";
import { PhaseCardTitle } from "./PhaseCardTitle";
import { PhaseCardExploreButton } from "./PhaseCardExploreButton";

export interface PhaseCardHeaderProps {
  phase: RoadmapPhase;
}

export function PhaseCardHeader({ phase }: PhaseCardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <PhaseCardNumberBadge phaseNumber={phase.number} />
        <div>
          <PhaseCardMetaBadges
            phaseNumber={phase.number}
            estimatedDuration={phase.estimatedDuration}
            degreeScope={phase.degreeScope}
          />
          <PhaseCardTitle
            slug={phase.slug}
            title={phase.title}
            tagline={phase.tagline}
          />
        </div>
      </div>

      <PhaseCardExploreButton slug={phase.slug} />
    </div>
  );
}

export default PhaseCardHeader;
