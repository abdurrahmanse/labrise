"use client";

import React from "react";
import { PhaseHowToStep } from "@/data/roadmapPhasesData";

export interface PhaseStepCardProps {
  step: PhaseHowToStep;
  index: number;
}

export function PhaseStepCard({ step, index }: PhaseStepCardProps) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4 shadow-lg group">
      <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 text-white font-mono text-sm font-black flex items-center justify-center shrink-0 shadow-md">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="space-y-1.5 flex-1 min-w-0">
        <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors font-heading">
          {step.step}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {step.detail}
        </p>
      </div>
    </div>
  );
}

export default PhaseStepCard;
