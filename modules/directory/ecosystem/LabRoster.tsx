import Link from "next/link";
import { FlaskConical, Users } from "lucide-react";
import { liftCard } from "@/shared/components/liftCard";
import { ViewDetails } from "@/shared/components/ViewDetails";
import { titleGroupClass } from "@/shared/components/linkStyles";
import { commonText } from "@/content/text/common";
import { labText } from "@/content/text/directory";
import type { LabEntry } from "../types";
import { labSlug, universitySlug } from "../utils/slugs";
import { universities } from "../data/universities";

/** Labs, groups and communities as cards: what each one works on and offers, with its university and people. */
export function LabRoster({ labs, showUniversity = true }: { labs: LabEntry[]; showUniversity?: boolean }) {
  if (labs.length === 0) return <p className="text-slate-400">{labText.none}</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {labs.map((l) => {
        const university = l.university ? universities.find((u) => u.name === l.university) : undefined;
        return (
          <div key={l.name} className={liftCard("flex flex-col gap-3")}>
            <div className="flex items-start gap-3">
              <FlaskConical className="mt-1 h-6 w-6 shrink-0 text-indigo-400" />
              <div className="min-w-0 flex-1">
                <Link href={`/directory/labs/${labSlug(l)}`} className={`text-lg font-bold text-white ${titleGroupClass} after:absolute after:inset-0 after:content-['']`}>{l.name}</Link>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{l.kind}</div>
              </div>
            </div>
            <p className="font-sans text-sm font-normal text-slate-200">{l.focus}</p>
            <p className="font-sans text-sm font-normal text-slate-300"><span className="font-bold text-white">{labText.offers}: </span>{l.offers}</p>
            <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider">
              {showUniversity && university && (
                <Link href={`/directory/universities/${universitySlug(university)}`} className="bg-cyan-400/10 px-2 py-1 text-cyan-300 hover:text-cyan-100">{university.name}</Link>
              )}
              {l.professors.length > 0 && (
                <span className="inline-flex items-center gap-1 bg-indigo-400/10 px-2 py-1 text-indigo-300"><Users className="h-3 w-3" /> {labText.people(l.professors.length)}</span>
              )}
            </div>
            <ViewDetails label={commonText.actions.details} />
          </div>
        );
      })}
    </div>
  );
}
