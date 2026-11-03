import React from "react";
import { Globe2 } from "lucide-react";
import { PhaseOfficialResource } from "@/data/roadmapPhasesData";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";
import { PhaseResourceCard } from "./PhaseResourceCard";

export interface PhaseResourcesSectionProps {
  resources: PhaseOfficialResource[];
}

export function PhaseResourcesSection({ resources }: PhaseResourcesSectionProps) {
  const { resources: resourcesData } = phaseDetailUiData;

  return (
    <section id="official-resources" className="scroll-mt-24 space-y-6">
      <div className="border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>{resourcesData.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
          {resourcesData.heading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {resourcesData.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((res, idx) => (
          <PhaseResourceCard key={idx} resource={res} />
        ))}
      </div>
    </section>
  );
}

export default PhaseResourcesSection;
