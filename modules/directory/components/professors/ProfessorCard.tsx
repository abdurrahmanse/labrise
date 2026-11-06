import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar } from "@/shared/components/Avatar";
import { Flag } from "@/shared/components/Flag";
import { fieldOf } from "../../data/fields";
import { professorSlug } from "../../utils/slugs";
import type { ProfessorEntry } from "../../types";
import { EmailLine } from "./EmailLine";
import { SaveButton } from "./SaveButton";
import { StatusSelect } from "./StatusSelect";
import { commonText } from "@/content/text/common";
import { surface } from "@/shared/components/Surface";
import { titleLinkClass } from "@/shared/components/ViewDetails";

export function ProfessorCard({ professor }: { professor: ProfessorEntry }) {
  const slug = professorSlug(professor);

  return (
    <article className={surface({ tone: "glass", depth: "soft", padding: "lg", className: "flex flex-col gap-4" })}>
      <div className="flex items-start justify-between gap-3">
        <Avatar name={professor.name} size={56} />
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-white">
            <Link href={`/directory/professors/${slug}`} className={titleLinkClass}>
              {professor.name}
            </Link>
          </h3>
          <p className="text-slate-300">{professor.university}</p>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400"><Flag country={professor.country} className="h-3.5 w-5" /> {professor.country}</p>
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
        <Link href={`/directory/professors/${slug}`} className="inline-flex items-center gap-1.5 border-2 border-indigo-400/60 bg-indigo-400/10 px-3 py-1.5 text-sm font-bold text-indigo-200 hover:border-indigo-300 hover:bg-indigo-500 hover:text-white">
          {commonText.actions.details} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
