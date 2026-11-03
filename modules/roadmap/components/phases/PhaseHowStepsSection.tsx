import React from "react";
import { ListOrdered } from "lucide-react";
import type { PhaseHowToStep } from "../../types/phase";
import { phaseDetailUiData } from "@/content/roadmap/phaseDetailUiData";
import { PhaseStepCard } from "./PhaseStepCard";

export interface PhaseHowStepsSectionProps {
  steps: PhaseHowToStep[];
}

export function PhaseHowStepsSection({ steps }: PhaseHowStepsSectionProps) {
  const { howSteps } = phaseDetailUiData;

  return (
    <section id="how-to-execute" className="scroll-mt-24 space-y-6">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div>
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <ListOrdered className="w-4 h-4" />
            <span>{howSteps.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            {howSteps.heading}
          </h2>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-none bg-white/5 border border-white/10 text-slate-400">
          {steps.length} {howSteps.milestonesSuffix}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {steps.map((item, idx) => (
          <PhaseStepCard key={idx} step={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default PhaseHowStepsSection;
