import React from "react";
import { AlertTriangle } from "lucide-react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseMistakesCardProps {
  mistakes: string[];
}

export function PhaseMistakesCard({ mistakes }: PhaseMistakesCardProps) {
  const { pitfallsAndExample } = phaseDetailUiData;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4 shadow-xl">
      <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
        <AlertTriangle className="w-4 h-4" />
        <span>{pitfallsAndExample.mistakesBadge}</span>
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight font-heading">
        {pitfallsAndExample.mistakesHeading}
      </h3>
      <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
        {mistakes.map((m, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
              ✕
            </span>
            <span className="leading-relaxed">{m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhaseMistakesCard;
