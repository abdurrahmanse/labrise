import Link from "next/link";
import { Avatar } from "@/shared/components/Avatar";
import type { UniversitySummary } from "../../lib/connections";
import { universitySlug } from "../../lib/slugs";
import { rosterLabels } from "@/data/text/directory";

/** Universities in a country with how many professors and funders are connected to each. */
export function UniversityRoster({ summaries }: { summaries: UniversitySummary[] }) {
  if (summaries.length === 0) return <p className="text-slate-400">{rosterLabels.noUniversities}</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {summaries.map(({ university, professors, funders }) => (
        <Link
          key={university.name}
          href={`/directory/universities/${universitySlug(university)}`}
          className="group flex gap-4 bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(58,95,224,0.3)]"
        >
          <Avatar name={university.name.replace(/^(University of|The) /, "")} size={48} square />
          <div className="min-w-0 flex-1">
            <div className="text-xl font-bold text-white">{university.name}</div>
            <div className="text-slate-300">{university.funding}</div>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
              <span className="bg-indigo-400/10 px-2 py-1 text-indigo-300">{rosterLabels.professorCount(professors.length)}</span>
              <span className="bg-cyan-400/10 px-2 py-1 text-cyan-300">{rosterLabels.funderCount(funders.length)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
