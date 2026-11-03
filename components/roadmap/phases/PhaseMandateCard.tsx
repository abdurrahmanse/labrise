import React from "react";
import { Sparkles } from "lucide-react";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseMandateCardProps {
  what: string;
}

export function PhaseMandateCard({ what }: PhaseMandateCardProps) {
  const { whatWhy } = phaseDetailUiData;

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card border border-white/10 shadow-xl relative overflow-hidden group hover:border-teal-500/40 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shadow-sm">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
            {whatWhy.mandateBadge}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {whatWhy.mandateHeading}
          </h3>
        </div>
      </div>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
        {what}
      </p>
    </div>
  );
}

export default PhaseMandateCard;
