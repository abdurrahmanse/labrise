import Link from "next/link";
import { Avatar } from "@/shared/components/Avatar";
import type { UniversitySummary } from "../connections";
import { universitySlug } from "../utils/slugs";
import { rosterLabels } from "@/content/text/directory";
import { liftCard } from "@/shared/components/liftCard";
import { ViewDetails } from "@/shared/components/ViewDetails";
import { titleGroupClass } from "@/shared/components/linkStyles";
import { commonText } from "@/content/text/common";

/** Universities in a country with how many professors and funders are connected to each. */
export function UniversityRoster({ summaries }: { summaries: UniversitySummary[] }) {
  if (summaries.length === 0) return <p className="text-slate-400">{rosterLabels.noUniversities}</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {summaries.map(({ university, professors, funders }) => (
        <Link
          key={university.name}
          href={`/directory/universities/${universitySlug(university)}`}
          className={liftCard("flex gap-4")}
        >
          <Avatar name={university.name.replace(/^(University of|The) /, "")} size={48} square />
          <div className="min-w-0 flex-1">
            <div className={`text-xl font-bold text-white ${titleGroupClass}`}>{university.name}</div>
            <div className="text-slate-300">{university.funding}</div>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
              <span className="bg-indigo-400/10 px-2 py-1 text-indigo-300">{rosterLabels.professorCount(professors.length)}</span>
              <span className="bg-cyan-400/10 px-2 py-1 text-cyan-300">{rosterLabels.funderCount(funders.length)}</span>
            </div>
            <div className="mt-3"><ViewDetails label={commonText.actions.details} /></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
