import { roadmapSteps } from "../data/steps";
import { StepCard } from "./StepCard";

export function StepsGrid() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {roadmapSteps.map((step) => (
        <StepCard key={step.step} step={step} />
      ))}
    </ol>
  );
}
