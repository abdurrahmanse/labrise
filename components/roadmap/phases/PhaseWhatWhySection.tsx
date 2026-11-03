import React from "react";
import { Sparkles } from "lucide-react";
import { PhaseMandateCard } from "./PhaseMandateCard";
import { PhaseRationaleCard } from "./PhaseRationaleCard";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseWhatWhySectionProps {
  what: string;
  why: string;
}

export function PhaseWhatWhySection({ what, why }: PhaseWhatWhySectionProps) {
  const { whatWhy } = phaseDetailUiData;

  return (
    <section id="what-why" className="scroll-mt-24 space-y-6">
      <div className="flex items-center gap-2.5 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-4 h-4" />
        <span>{whatWhy.badge}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhaseMandateCard what={what} />
        <PhaseRationaleCard why={why} />
      </div>
    </section>
  );
}

export default PhaseWhatWhySection;
