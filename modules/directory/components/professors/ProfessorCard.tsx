import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fieldOf } from "../../data/fields";
import { professorSlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { EmailLine } from "./EmailLine";
import { SaveButton } from "./SaveButton";
import { StatusSelect } from "./StatusSelect";

export function ProfessorCard({ professor }: { professor: ProfessorEntry }) {
  const slug = professorSlug(professor);

  return (
    <article className="flex flex-col gap-4 bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-white">
            <Link href={`/directory/professors/${slug}`} className="hover:text-indigo-300">
              {professor.name}
            </Link>
          </h3>
          <p className="text-slate-300">{professor.university}</p>
          <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{professor.country}</p>
        </div>
        <SaveButton slug={slug} />
      </div>

      <span className="w-fit bg-indigo-400/10 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-indigo-300">
        {fieldOf(professor.group).title}
      </span>

      <EmailLine professor={professor} />
      {professor.note && <p className="text-sm font-bold text-amber-400">{professor.note}</p>}

      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <StatusSelect slug={slug} />
        <Link href={`/directory/professors/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200">
          Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
