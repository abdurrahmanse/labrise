import React from "react";
import { Lightbulb, CheckCircle2 } from "lucide-react";
import { phaseDetailUiData } from "@/content/roadmap/phaseDetailUiData";

export interface PhaseExampleCardProps {
  example: string;
}

export function PhaseExampleCard({ example }: PhaseExampleCardProps) {
  const { pitfallsAndExample, badges } = phaseDetailUiData;

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4 shadow-xl flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>{pitfallsAndExample.exampleBadge}</span>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight font-heading">
          {pitfallsAndExample.exampleHeading}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
          {example}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
        <CheckCircle2 className="w-4 h-4 shrink-0" />
        <span>{badges.freeStandard}</span>
      </div>
    </div>
  );
}

export default PhaseExampleCard;
