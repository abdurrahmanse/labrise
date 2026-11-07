import Link from "next/link";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { Label } from "@/shared/components/Text";
import { journey } from "../data/journey";
import type { Phase, Step } from "../types";
import { PlanOverview } from "./PlanOverview";

const stepsOf = (phase: Phase): Step[] => journey.timeline.filter((s) => s.monthsBefore <= phase.from && s.monthsBefore >= phase.to);

function PlanStep({ step }: { step: Step }) {
  return (
    <li className="relative pl-12">
      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center border-2 border-white/60 bg-canvas-base font-mono text-xs font-bold text-white" aria-hidden>
        M-{step.monthsBefore}
      </span>
      <div className="space-y-2 border-2 border-white/20 bg-white/[0.03] p-4">
        <h4 className="font-bold text-white">
          <span className="sr-only">{step.monthsBefore} months before the start: </span>
          {step.title}
        </h4>
        <p className="font-sans text-sm text-slate-300">{step.detail}</p>
        <p className="font-sans text-sm text-slate-200"><span className="font-mono text-xs uppercase tracking-wider text-slate-400">Result · </span>{step.output}</p>
        <Link href={step.guide} className={`${inlineLinkClass} font-sans text-sm`}>{step.guideLabel} →</Link>
      </div>
    </li>
  );
}

/** Her plan: all phases on one axis, then each phase with its steps, results and the guide behind each. */
export function PlanTimeline() {
  return (
    <div className="space-y-8">
      <PlanOverview />
      {journey.phases.map((phase, i) => (
        <section key={phase.id} aria-labelledby={`phase-${phase.id}`} className="space-y-3">
          <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/20 pb-2">
            <h3 id={`phase-${phase.id}`} className="text-lg font-bold text-white">
              <span className="mr-2 font-mono text-sm text-slate-400">{String(i + 1).padStart(2, "0")}</span>
              {phase.name}
            </h3>
            <Label>{phase.from === phase.to ? `Month ${phase.from}` : `Months ${phase.from} to ${phase.to}`} · {phase.summary}</Label>
          </header>
          <ol className="relative space-y-3 before:absolute before:bottom-0 before:left-[17px] before:top-0 before:w-0.5 before:bg-white/25">
            {stepsOf(phase).map((step) => <PlanStep key={step.title} step={step} />)}
          </ol>
        </section>
      ))}
    </div>
  );
}
