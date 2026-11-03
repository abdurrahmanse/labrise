"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { applyHubText as t, trackIcons } from "@/data/text/apply";
import { useMounted } from "@/shared/hooks/useMounted";
import { ProgressBar } from "@/modules/documents/components/ProgressBar";
import { applyTracks } from "../data/tracks";
import { countDone, useApplyProgress } from "../store/useApplyProgress";

/** The two routes as large cards, each showing how far the student has got. */
export function RouteCards() {
  const mounted = useMounted();
  const doneMap = useApplyProgress((s) => s.done);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {applyTracks.map((track) => {
        const Icon = trackIcons[track.id];
        const info = t.routes[track.id];
        const { done, percent } = countDone(mounted ? doneMap : {}, track.id, track.steps.length);
        return (
          <article key={track.id} className="relative flex flex-col gap-4 border-2 border-white/30 bg-canvas-card/60 p-6 pt-8 backdrop-blur-xl shadow-[6px_6px_0_0_rgba(58,95,224,0.25)]">
            <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-400" />
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center bg-indigo-600 text-white shadow-[3px_3px_0_0_rgba(15,23,42,0.2)]">
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.steps(track.steps.length)}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{track.title}</h2>
            <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{info.who}</p>
            <ul className="space-y-2">
              {info.highlights.map((h) => (
                <li key={h} className="flex gap-2 font-sans font-normal text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {h}
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-2 pt-2">
              <div className="flex justify-between font-mono text-xs text-slate-400">
                <span>{t.done(done, track.steps.length)}</span>
                <span>{percent}%</span>
              </div>
              <ProgressBar percent={percent} label={track.title} />
              <Link href={`/apply/${track.id}`} className="mt-3 inline-flex items-center gap-2 border-2 border-transparent bg-indigo-600 px-5 py-3 font-bold uppercase tracking-wider text-sm text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5">
                {done > 0 ? t.continue : t.start} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
