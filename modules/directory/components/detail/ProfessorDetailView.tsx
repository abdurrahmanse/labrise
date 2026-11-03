import Link from "next/link";
import { Mail, Search } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { professors } from "../../data/professors";
import { fieldOf } from "../../data/fields";
import { fundersOfUniversity } from "../../lib/connections";
import { universityOfProfessor } from "../../lib/lookups";
import { professorSlug, universitySlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { Avatar } from "@/shared/components/Avatar";
import { Flag } from "../Flag";
import { EMAIL_STEPS } from "./applySteps";
import { buildEmailDraft } from "./emailDraft";
import { EmailDraftBox } from "./EmailDraftBox";
import { FunderList } from "../ecosystem/FunderList";
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
  const funders = university ? fundersOfUniversity(university) : [];
  const peers = professors.filter((p) => p.group === professor.group && p.name !== professor.name).slice(0, 8);

  return (
    <PageShell
      eyebrow={`Professor · ${professor.group}`}
      title={professor.name}
      notice={{ subject: professor.name, caution: professor.email ? undefined : "Affiliation was not re-checked on a live page; confirm it on the university site." }}
      media={<Avatar name={professor.name} size={72} />}
      lead={`${professor.university}, ${professor.country}. Research group: ${professor.group}.`}
      back={{ href: "/directory/professors", label: "All professors" }}
    >
      <Facts
        rows={[
          ["University", university ? <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{professor.university}</Link> : professor.university],
          ["Country", <span key="c" className="inline-flex items-center gap-2"><Flag country={professor.country} className="h-4 w-6" /> {professor.country}</span>],
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

      {funders.length > 0 && (
        <Block title="Funding routes at this university">
          <FunderList funders={funders} />
        </Block>
      )}

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
