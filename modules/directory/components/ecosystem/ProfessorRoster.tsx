import Link from "next/link";
import { Mail } from "lucide-react";
import { Avatar } from "@/shared/components/Avatar";
import { CopyButton } from "@/components/ui/CopyButton";
import { professorSlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { rosterLabels } from "@/data/text/directory";
import { commonText } from "@/data/text/common";

/** Professors with their field and email, ready to open or copy. */
export function ProfessorRoster({ professors }: { professors: ProfessorEntry[] }) {
  if (professors.length === 0) return <p className="text-slate-400">{rosterLabels.noProfessors}</p>;

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {professors.map((p) => (
        <div key={p.name} className="flex gap-3 bg-canvas-card/70 backdrop-blur-xl p-4 shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
          <Avatar name={p.name} size={44} />
          <div className="min-w-0 flex-1">
            <Link href={`/directory/professors/${professorSlug(p)}`} className="font-bold text-white hover:text-indigo-300">
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
          </div>
        </div>
      ))}
    </div>
  );
}
