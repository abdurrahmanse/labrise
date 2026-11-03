"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { trackPageText as t, trackPhases, type TrackId } from "@/data/text/apply";
import { cn } from "@/lib/utils";
import { CheckBox } from "@/shared/components/CheckRow";
import { IconBadge } from "@/shared/components/IconBadge";
import { Body, Label } from "@/shared/components/Text";
import { useProgress } from "@/shared/progress/useProgress";
import type { ApplyTrack } from "../data/tracks";
import { stepKey, stepKeys, useApplyProgress } from "../store/useApplyProgress";

/** Steps grouped into stages, each with a done toggle that is saved in the browser. */
export function TrackStepper({ track }: { track: ApplyTrack }) {
  const { isDone, toggle } = useProgress(useApplyProgress, stepKeys(track.id, track.steps.length));

  return (
    <div className="space-y-10">
      {trackPhases[track.id as TrackId].map((phase, p) => (
        <section key={phase.title} aria-label={phase.title} className="space-y-4">
          <h2 className="flex items-center gap-3 border-b-2 border-white/80 pb-2 text-2xl font-bold text-white">
            <IconBadge icon={phase.Icon} />
            {t.stage(p + 1, phase.title)}
          </h2>
          <ol className="relative space-y-3 border-l-2 border-white/20 pl-6">
            {track.steps.slice(phase.from, phase.to).map((step, offset) => {
              const index = phase.from + offset;
              const key = stepKey(track.id, index);
              const done = isDone(key);
              return (
                <li key={step.title} className="relative">
                  <span className={cn("absolute -left-[2.15rem] top-4 flex h-5 w-5 items-center justify-center border-2 bg-canvas-base", done ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>
                    {done && <Check className="h-3 w-3" aria-hidden />}
                  </span>
                  <div className={cn("flex gap-4 border-2 p-4 backdrop-blur-xl transition-colors", done ? "border-indigo-400/60 bg-indigo-600/10" : "border-white/25 bg-canvas-card/60")}>
                    <div className="min-w-0 flex-1">
                      <Label as="p" tone="accent">{t.stepNumber(index + 1)}</Label>
                      <h3 className={cn("text-lg font-bold", done ? "text-slate-400 line-through" : "text-white")}>{step.title}</h3>
                      <Body className="mt-1">{step.detail}</Body>
                      {step.href && (
                        <Link href={step.href} className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200">
                          {step.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                      )}
                    </div>
                    <CheckBox checked={done} onChange={() => toggle(key)} label={done ? t.markUndone : t.markDone} />
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
