"use client";

import Link from "next/link";
import { CalendarRange } from "lucide-react";
import { plannerText as t, timelineSteps } from "@/content/text/planner";
import { useMounted } from "@/shared/hooks/useMounted";
import { cn } from "@/shared/utils/cn";
import { formatMonth, monthsBefore } from "../utils/dates";
import { stepState } from "../utils/timeline";
import { usePlanner } from "../store/usePlanner";
import { titleLinkClass } from "@/shared/components/linkStyles";
import { inlineFieldClass as field } from "@/shared/ui/fieldStyles";
import { surface } from "@/shared/components/Surface";


export function TimelineBuilder() {
  const intake = usePlanner((s) => s.intake);
  const setIntake = usePlanner((s) => s.setIntake);
  const mounted = useMounted();

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="intake" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
          {t.timeline.intakeLabel}
        </label>
        <input id="intake" type="month" value={intake} onChange={(e) => setIntake(e.target.value)} className={field} />
        <p className="mt-2 font-sans text-sm font-normal text-slate-400">{t.timeline.hint} {t.timeline.todayNote}</p>
      </div>

      {intake ? (
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {timelineSteps.map((step, i) => {
            const state = mounted ? stepState(intake, step) : "upcoming";
            return (
            <li key={step.title} aria-current={state === "now" ? "step" : undefined} className={cn(surface({ tone: "panel", depth: "sm", padding: "md" }), state === "past" && "opacity-60", state === "now" && "border-indigo-400")}>
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="bg-indigo-600 px-2 py-0.5 font-mono text-sm font-bold text-white">{i + 1}</span>
                  {state === "now" && <span className="border border-indigo-400 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-indigo-300">{t.stepNow}</span>}
                  {state === "past" && <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{t.stepDone}</span>}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-indigo-300">
                  <CalendarRange className="h-4 w-4" aria-hidden />
                  {t.timeline.range(formatMonth(monthsBefore(intake, step.monthsBeforeStart)), formatMonth(monthsBefore(intake, step.monthsBeforeEnd)))}
                </span>
              </div>
              <Link href={step.href} className={`text-lg font-bold text-white ${titleLinkClass}`}>
                {step.title}
              </Link>
            </li>
            );
          })}
        </ol>
      ) : (
        <p className="font-sans font-normal text-slate-400">{t.timeline.empty}</p>
      )}
    </div>
  );
}
