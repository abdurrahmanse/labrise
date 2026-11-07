import Link from "next/link";
import { Block } from "@/shared/components/Block";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { scholarshipDetailText as t } from "@/content/text/scholarships";
import { scholarshipJourney } from "./journeyStages";
import type { ScholarshipEntry } from "../types";

/** The whole path from this scholarship to an offer, one numbered stage at a time, each with the guide that helps. */
export function ScholarshipJourney({ scholarship }: { scholarship: ScholarshipEntry }) {
  return (
    <Block title={t.journey.title}>
      <p className="font-sans text-sm text-slate-400">{t.journey.lead}</p>
      <ol className="space-y-3">
        {scholarshipJourney(scholarship).map((stage, i) => (
          <li key={stage.title} className="flex gap-4 border-2 border-white/20 bg-white/[0.03] p-4">
            <span className="font-mono text-xl text-indigo-400" aria-hidden>{i + 1}</span>
            <div className="min-w-0 space-y-2">
              <h3 className="font-bold text-slate-100">{stage.title}</h3>
              <p className="font-sans text-sm text-slate-300">{stage.detail}</p>
              <p className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
                {stage.links.map((l) => <Link key={l.href} href={l.href} className={inlineLinkClass}>{l.label}</Link>)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Block>
  );
}
