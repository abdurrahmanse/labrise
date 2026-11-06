import React from "react";
import type { RoadmapPhase } from "../types/phase";
import {
  PhaseIndexBadge,
  PhaseDurationBadge,
  PhaseDegreeScopeBadge,
  PhaseVerificationBadge,
} from ".";

export interface PhaseDetailBadgesProps {
  phase: RoadmapPhase;
}

export function PhaseDetailBadges({ phase }: PhaseDetailBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-5">
      <PhaseIndexBadge phaseNumber={phase.number} />
      <PhaseDurationBadge estimatedDuration={phase.estimatedDuration} />
      <PhaseDegreeScopeBadge degreeScope={phase.degreeScope} />
      <PhaseVerificationBadge />
    </div>
  );
}

export default PhaseDetailBadges;
