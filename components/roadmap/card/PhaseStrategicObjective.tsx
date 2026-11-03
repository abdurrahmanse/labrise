"use client";

import React from "react";
import { roadmapUiData } from "@/data/roadmapUiData";

export interface PhaseStrategicObjectiveProps {
  what: string;
}

export function PhaseStrategicObjective({ what }: PhaseStrategicObjectiveProps) {
  const { card } = roadmapUiData;

  return (
    <div className="p-3.5 sm:p-4 rounded-xl bg-canvas-base border border-white/5 space-y-1.5">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
        {card.strategicMandateLabel}
      </span>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        {what}
      </p>
    </div>
  );
}

export default PhaseStrategicObjective;
