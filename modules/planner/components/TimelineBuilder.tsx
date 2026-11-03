"use client";

import Link from "next/link";
import { CalendarRange } from "lucide-react";
import { plannerText as t, timelineSteps } from "@/data/text/planner";
import { formatMonth, monthsBefore } from "../lib/dates";
import { usePlanner } from "../store/usePlanner";

const field =
  "border-2 border-white/30 bg-white/[0.05] px-4 py-3 font-sans text-base text-slate-100 outline-none transition-colors focus:border-indigo-400";

export function TimelineBuilder() {
  const intake = usePlanner((s) => s.intake);
  const setIntake = usePlanner((s) => s.setIntake);

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="intake" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
          {t.timeline.intakeLabel}
        </label>
        <input id="intake" type="month" value={intake} onChange={(e) => setIntake(e.target.value)} className={field} />
        <p className="mt-2 font-sans text-sm font-normal text-slate-400">{t.timeline.hint}</p>
      </div>

      {intake ? (
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {timelineSteps.map((step, i) => (
            <li key={step.title} className="border-2 border-white/25 bg-canvas-card/60 p-4 backdrop-blur-xl shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
              <div className="mb-2 flex items-center justify-between">
                <span className="bg-indigo-600 px-2 py-0.5 font-mono text-sm font-bold text-white">{i + 1}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-indigo-300">
                  <CalendarRange className="h-4 w-4" aria-hidden />
                  {t.timeline.range(formatMonth(monthsBefore(intake, step.monthsBeforeStart)), formatMonth(monthsBefore(intake, step.monthsBeforeEnd)))}
                </span>
              </div>
              <Link href={step.href} className="text-lg font-bold text-white hover:text-indigo-300">
                {step.title}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="font-sans font-normal text-slate-400">{t.timeline.empty}</p>
      )}
    </div>
  );
}
