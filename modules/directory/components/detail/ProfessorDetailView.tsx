import Link from "next/link";
import { Mail, Search } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { professors } from "../../data/professors";
import { fieldOf } from "../../data/fields";
import { universityOfProfessor } from "../../lib/lookups";
import { professorSlug, universitySlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { EMAIL_STEPS } from "./applySteps";
import { buildEmailDraft } from "./emailDraft";
import { EmailDraftBox } from "./EmailDraftBox";
import { ProfessorFieldInfo } from "./ProfessorFieldInfo";
import { ProfessorTracker } from "../professors/ProfessorTracker";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

function EmailCell({ professor }: { professor: ProfessorEntry }) {
  if (professor.email) {
    return (
      <a href={`mailto:${professor.email}`} className={`${linkClass} inline-flex items-center gap-1 break-all`}>
        <Mail className="w-4 h-4" /> {professor.email}
      </a>
    );
  }
  const query = encodeURIComponent(`${professor.name} ${professor.university} faculty page email`);
  return (
    <a href={`https://www.google.com/search?q=${query}`} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
      <Search className="w-4 h-4" /> Find on official page
    </a>
  );
}

export function ProfessorDetailView({ professor }: { professor: ProfessorEntry }) {
  const university = universityOfProfessor(professor);
  const field = fieldOf(professor.group);
  const peers = professors.filter((p) => p.group === professor.group && p.name !== professor.name).slice(0, 8);

  return (
    <PageShell
      eyebrow={`Professor · ${professor.group}`}
      title={professor.name}
      lead={`${professor.university}, ${professor.country}. Research group: ${professor.group}.`}
      back={{ href: "/directory/professors", label: "All professors" }}
    >
      <Facts
        rows={[
          ["University", university ? <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{professor.university}</Link> : professor.university],
          ["Country", professor.country],
          ["Group", professor.group],
          ["Email", <EmailCell key="e" professor={professor} />]
        ]}
      />
      {professor.note && <p className="text-sm font-bold text-amber-400">{professor.note}</p>}
      <p className="text-sm text-slate-400">
        Emails were taken from official university or institute pages. People move, so confirm on their page before writing.
      </p>

      <ProfessorTracker slug={professorSlug(professor)} />

      <ProfessorFieldInfo field={field} />

      <Block title="Before you email">
        <StepGrid steps={EMAIL_STEPS} />
      </Block>
      <Block title="Starter email draft">
        <EmailDraftBox draft={buildEmailDraft(professor)} />
      </Block>

      {peers.length > 0 && (
        <Block title={`More in ${professor.group}`}>
          <Chips items={peers.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name }))} />
        </Block>
      )}
    </PageShell>
  );
}
