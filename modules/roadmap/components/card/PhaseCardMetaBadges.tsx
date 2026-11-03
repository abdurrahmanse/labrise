import React from "react";
import { Clock, GraduationCap, Award, Compass } from "lucide-react";
import { roadmapUiData } from "@/content/roadmap/roadmapUiData";

export interface PhaseCardMetaBadgesProps {
  phaseNumber: number;
  estimatedDuration: string;
  degreeScope: "both" | "masters" | "phd";
}

export function PhaseCardMetaBadges({
  phaseNumber,
  estimatedDuration,
  degreeScope,
}: PhaseCardMetaBadgesProps) {
  const isMastersOnly = degreeScope === "masters";
  const isPhdOnly = degreeScope === "phd";
  const { card } = roadmapUiData;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-1.5">
      <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider">
        {card.phasePrefix} {String(phaseNumber).padStart(2, "0")} {card.totalPhasesSuffix}
      </span>
      <span className="text-slate-600">•</span>
      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
        <Clock className="w-3 h-3 text-teal-400" />
        <span>{estimatedDuration}</span>
      </span>
      {isMastersOnly && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
          <GraduationCap className="w-3 h-3" />
          <span>{card.mastersBadge}</span>
        </span>
      )}
      {isPhdOnly && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          <Award className="w-3 h-3" />
          <span>{card.phdBadge}</span>
        </span>
      )}
      {!isMastersOnly && !isPhdOnly && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-white/5">
          <Compass className="w-3 h-3 text-teal-400" />
          <span>{card.bothBadge}</span>
        </span>
      )}
    </div>
  );
}

export default PhaseCardMetaBadges;
