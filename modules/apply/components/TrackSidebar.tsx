"use client";

import Link from "next/link";
import { Award, CalendarCheck, FileText, Landmark, Lightbulb, PartyPopper, Users } from "lucide-react";
import { trackPageText as t } from "@/content/text/apply";
import { InfoCard } from "@/shared/components/InfoCard";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import type { ApplyTrack } from "../data/tracks";
import { stepKeys, useApplyProgress } from "../store/useApplyProgress";

const tool = "flex items-center gap-3 border-2 border-white/25 bg-white/[0.03] p-3 font-bold text-slate-100 hover:border-indigo-400";

export function TrackSidebar({ track, other }: { track: ApplyTrack; other?: ApplyTrack }) {
  const { done, total, percent, reset } = useProgress(useApplyProgress, stepKeys(track.id, track.steps.length));
  const first = track.id === "university" ? { href: "/professors", label: t.findProfessors, Icon: Users } : { href: "/scholarships", label: t.searchScholarships, Icon: Award };
  const tools = [first, { href: "/planner", label: t.planner, Icon: CalendarCheck }, { href: "/documents", label: t.documents, Icon: FileText }, { href: "/directory/providers", label: t.directory, Icon: Landmark }];

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <InfoCard label={t.progress}>
        <div className="space-y-3">
          <span className="text-4xl font-bold text-white">{t.percent(percent)}</span>
          <ProgressPanel bare label={t.progress} summary={t.done(done, total)} percent={percent} onReset={() => reset()} canReset={done > 0} note={t.saved} />
          {done === total && <p className="flex items-center gap-2 font-bold text-emerald-400"><PartyPopper className="h-5 w-5" aria-hidden /> {t.finished}</p>}
        </div>
      </InfoCard>

      <InfoCard label={t.tips}>
        <ul className="space-y-3">
          {track.tips.map((tip) => (
            <li key={tip} className="flex gap-3 font-sans font-normal text-slate-200"><Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden /> {tip}</li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard label={t.tools}>
        <div className="space-y-2">
          {tools.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={tool}><Icon className="h-5 w-5 text-indigo-400" aria-hidden /> {label}</Link>
          ))}
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

