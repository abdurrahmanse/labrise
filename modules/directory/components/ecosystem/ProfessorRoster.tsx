import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Avatar } from "@/shared/components/Avatar";
import { CopyButton } from "@/shared/ui/CopyButton";
import { professorSlug } from "../../utils/slugs";
import type { ProfessorEntry } from "../../types";
import { rosterLabels } from "@/content/text/directory";
import { commonText } from "@/content/text/common";
import { surface } from "@/shared/components/Surface";
import { titleLinkClass } from "@/shared/components/ViewDetails";

/** Professors with their field and email, ready to open or copy. */
export function ProfessorRoster({ professors }: { professors: ProfessorEntry[] }) {
  if (professors.length === 0) return <p className="text-slate-400">{rosterLabels.noProfessors}</p>;

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {professors.map((p) => (
        <div key={p.name} className={surface({ tone: "glass", depth: "sm", padding: "md", className: "flex gap-3" })}>
          <Avatar name={p.name} size={44} />
          <div className="min-w-0 flex-1">
            <Link href={`/directory/professors/${professorSlug(p)}`} className={`font-bold text-white ${titleLinkClass}`}>
              {p.name}
            </Link>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{p.group}</div>
            {p.email ? (
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1 break-all text-indigo-400 hover:text-indigo-200">
                  <Mail className="h-4 w-4 shrink-0" /> {p.email}
                </a>
                <CopyButton textToCopy={p.email} label={commonText.actions.copy} />
              </div>
            ) : (
              <div className="mt-1 text-sm text-slate-400">{rosterLabels.emailSeeDetails}</div>
            )}
            <Link href={`/directory/professors/${professorSlug(p)}`} className="mt-2 inline-flex items-center gap-1.5 border-2 border-indigo-400/60 bg-indigo-400/10 px-3 py-1 text-sm font-bold text-indigo-200 hover:border-indigo-300 hover:bg-indigo-500 hover:text-white">
              {commonText.actions.details} <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
