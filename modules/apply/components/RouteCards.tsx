"use client";

import { ArrowRight, Check } from "lucide-react";
import { applyHubText as t, trackIcons } from "@/content/text/apply";
import { Button } from "@/shared/ui/Button";
import { IconBadge } from "@/shared/components/IconBadge";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { Body, Label } from "@/shared/components/Text";
import { useProgress } from "@/shared/progress/useProgress";
import { applyTracks, type ApplyTrack } from "../data/tracks";
import { stepKeys, useApplyProgress } from "../store/useApplyProgress";
import { surface } from "@/shared/components/Surface";

function RouteCard({ track }: { track: ApplyTrack }) {
  const Icon = trackIcons[track.id];
  const info = t.routes[track.id];
  const { done, total, percent } = useProgress(useApplyProgress, stepKeys(track.id, track.steps.length));

  return (
    <article className={surface({ tone: "panel", depth: "none", padding: "xl", className: "relative flex flex-col gap-4 pt-8 shadow-[6px_6px_0_0_rgba(58,95,224,0.25)]" })}>
      <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-400" />
      <div className="flex items-center justify-between gap-3">
        <IconBadge icon={Icon} size="xl" shadow />
        <Label tone="accent">{t.steps(total)}</Label>
      </div>
      <h2 className="text-2xl font-bold text-white">{track.title}</h2>
      <Body>{info.who}</Body>
      <ul className="space-y-2">
        {info.highlights.map((h) => (
          <li key={h} className="flex gap-2 font-sans font-normal text-slate-200"><Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {h}</li>
        ))}
      </ul>
      <div className="mt-auto space-y-4 pt-2">
        <ProgressPanel bare label={track.title} summary={t.done(done, total)} percent={percent} />
        <Button href={`/apply/${track.id}`} size="lg" rightIcon={<ArrowRight className="h-4 w-4" aria-hidden />}>
          {done > 0 ? t.continue : t.start}
        </Button>
      </div>
    </article>
  );
}

/** The two routes as large cards, each showing how far the student has got. */
export function RouteCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {applyTracks.map((track) => (
        <RouteCard key={track.id} track={track} />
      ))}
    </div>
  );
}

