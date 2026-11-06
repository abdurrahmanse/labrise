import React from "react";
import { PhaseMistakesCard } from "./PhaseMistakesCard";
import { PhaseExampleCard } from "./PhaseExampleCard";

export interface PhasePitfallsAndExampleSectionProps {
  mistakes: string[];
  example: string;
}

export function PhasePitfallsAndExampleSection({ mistakes, example }: PhasePitfallsAndExampleSectionProps) {
  return (
    <section id="mistakes-example" className="scroll-mt-24 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhaseMistakesCard mistakes={mistakes} />
        <PhaseExampleCard example={example} />
      </div>
    </section>
  );
}

export default PhasePitfallsAndExampleSection;
