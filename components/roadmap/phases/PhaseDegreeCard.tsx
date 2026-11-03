"use client";

import React from "react";
import { GraduationCap, Award } from "lucide-react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseDegreeCardProps {
  type: "masters" | "phd";
  nuance: string;
}

export function PhaseDegreeCard({ type, nuance }: PhaseDegreeCardProps) {
  const isMasters = type === "masters";
  const Icon = isMasters ? GraduationCap : Award;
  const borderColor = isMasters ? "border-teal-500/30" : "border-indigo-500/30";
  const badgeColor = isMasters ? "text-teal-400 bg-teal-500/20 border-teal-500/40" : "text-indigo-400 bg-indigo-500/20 border-indigo-500/40";
  const iconColor = isMasters ? "text-teal-300" : "text-indigo-300";
  const { degreeNuances } = phaseDetailUiData;
  const subtitle = isMasters ? degreeNuances.mastersSubheading : degreeNuances.phdSubheading;
  const title = isMasters ? degreeNuances.mastersHeading : degreeNuances.phdHeading;

  return (
    <div className={`p-6 sm:p-7 rounded-2xl bg-[#121214] ${borderColor} border shadow-xl space-y-3`}>
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-lg ${badgeColor} border flex items-center justify-center ${iconColor}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isMasters ? "text-teal-400" : "text-indigo-400"}`}>
            {subtitle}
          </span>
          <h3 className="text-lg font-bold text-white font-heading">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
        {nuance}
      </p>
    </div>
  );
}

export default PhaseDegreeCard;
