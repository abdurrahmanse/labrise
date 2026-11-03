import type { RoadmapStepSummary } from "../types";
import { surface } from "@/shared/components/Surface";

export function StepCard({ step }: { step: RoadmapStepSummary }) {
  return (
    <li className={surface({ tone: "panel", depth: "md", padding: "lg" })}>
      <div className="flex items-center justify-between mb-3">
        <span className="bg-indigo-600 text-white font-mono font-bold px-2 py-0.5">{String(step.step).padStart(2, "0")}</span>
        <span className="font-mono text-xs text-slate-400">{step.when}</span>
      </div>
      <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
      <ul className="space-y-1 text-slate-300 font-sans font-normal text-sm">
        {step.actions.map((action) => (
          <li key={action}>– {action}</li>
        ))}
      </ul>
    </li>
  );
}
