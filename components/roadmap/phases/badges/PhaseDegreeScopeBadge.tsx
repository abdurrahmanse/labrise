"use client";

import React from "react";
import { GraduationCap, Award, Compass } from "lucide-react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseDegreeScopeBadgeProps {
  degreeScope: "both" | "masters" | "phd";
}

export function PhaseDegreeScopeBadge({ degreeScope }: PhaseDegreeScopeBadgeProps) {
  const isMastersOnly = degreeScope === "masters";
  const isPhdOnly = degreeScope === "phd";
  const { badges } = phaseDetailUiData;

  if (isMastersOnly) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold">
        <GraduationCap className="w-3.5 h-3.5" />
        <span>{badges.mastersSpecific}</span>
      </span>
    );
  }

  if (isPhdOnly) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-mono font-semibold">
        <Award className="w-3.5 h-3.5" />
        <span>{badges.phdSpecific}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono">
      <Compass className="w-3.5 h-3.5 text-teal-400" />
      <span>{badges.bothScope}</span>
    </span>
  );
}

export default PhaseDegreeScopeBadge;
