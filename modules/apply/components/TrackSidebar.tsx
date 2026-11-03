"use client";

import Link from "next/link";
import { Award, CalendarCheck, FileText, Landmark, Lightbulb, PartyPopper, RotateCcw, Users } from "lucide-react";
import { trackPageText as t } from "@/data/text/apply";
import { ProgressBar } from "@/modules/documents/components/ProgressBar";
import { InfoCard } from "@/shared/components/InfoCard";
import { useMounted } from "@/shared/hooks/useMounted";
import type { ApplyTrack } from "../data/tracks";
import { countDone, useApplyProgress } from "../store/useApplyProgress";

const tool = "flex items-center gap-3 border-2 border-white/25 bg-white/[0.03] p-3 font-bold text-slate-100 hover:border-indigo-400";

export function TrackSidebar({ track, other }: { track: ApplyTrack; other?: ApplyTrack }) {
  const mounted = useMounted();
  const doneMap = useApplyProgress((s) => s.done);
  const reset = useApplyProgress((s) => s.reset);
  const { done, percent } = countDone(mounted ? doneMap : {}, track.id, track.steps.length);
  const finished = done === track.steps.length;

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <InfoCard label={t.progress}>
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <span className="text-4xl font-bold text-white">{t.percent(percent)}</span>
            <span className="font-mono text-xs text-slate-400">{t.done(done, track.steps.length)}</span>
          </div>
          <ProgressBar percent={percent} label={t.progress} />
          {finished && (
            <p className="flex items-center gap-2 font-bold text-emerald-400"><PartyPopper className="h-5 w-5" aria-hidden /> {t.finished}</p>
          )}
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-slate-500">{t.saved}</span>
            {done > 0 && (
              <button type="button" onClick={() => reset(track.id)} className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-rose-400">
                <RotateCcw className="h-4 w-4" aria-hidden /> {t.reset}
              </button>
            )}
          </div>
        </div>
      </InfoCard>

      <InfoCard label={t.tips}>
        <ul className="space-y-3">
          {track.tips.map((tip) => (
            <li key={tip} className="flex gap-3 font-sans font-normal text-slate-200">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden /> {tip}
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard label={t.tools}>
        <div className="space-y-2">
          {track.id === "university" ? (
            <Link href="/professors" className={tool}><Users className="h-5 w-5 text-indigo-400" aria-hidden /> {t.findProfessors}</Link>
          ) : (
            <Link href="/scholarships" className={tool}><Award className="h-5 w-5 text-indigo-400" aria-hidden /> {t.searchScholarships}</Link>
          )}
          <Link href="/planner" className={tool}><CalendarCheck className="h-5 w-5 text-indigo-400" aria-hidden /> {t.planner}</Link>
          <Link href="/documents" className={tool}><FileText className="h-5 w-5 text-indigo-400" aria-hidden /> {t.documents}</Link>
          <Link href="/directory/providers" className={tool}><Landmark className="h-5 w-5 text-indigo-400" aria-hidden /> {t.directory}</Link>
        </div>
      </InfoCard>

      {other && (
        <Link href={`/apply/${other.id}`} className="block border-2 border-dashed border-white/30 p-4 text-center font-bold text-indigo-400 hover:border-indigo-400">
          {t.other}: {other.title} →
        </Link>
      )}
    </aside>
  );
}
