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
import { detailText } from "@/data/text/directory";
import { noticeText } from "@/data/text/common";
import { emailText, professorDetailText } from "@/data/text/directory";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

function EmailCell({ professor }: { professor: ProfessorEntry }) {
  if (professor.email) {
    return (
      <a href={`mailto:${professor.email}`} className={`${linkClass} inline-flex items-center gap-1 break-all`}>
        <Mail className="w-4 h-4" /> {professor.email}
      </a>
    );
  }
  const query = encodeURIComponent(emailText.searchQuery(professor.name, professor.university));
  return (
    <a href={`https://www.google.com/search?q=${query}`} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
      <Search className="w-4 h-4" /> {emailText.findOnPage}
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
      eyebrow={detailText.eyebrow.professor(professor.group)}
      title={professor.name}
      notice={{ subject: professor.name, caution: professor.email ? undefined : noticeText.professorCaution }}
      media={<Avatar name={professor.name} size={72} />}
      lead={detailText.lead.professor(professor.university, professor.country, professor.group)}
      back={{ href: "/directory/professors", label: detailText.back.professors }}
    >
      <Facts
        rows={[
          [professorDetailText.facts.university, university ? <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{professor.university}</Link> : professor.university],
          [professorDetailText.facts.country, <span key="c" className="inline-flex items-center gap-2"><Flag country={professor.country} className="h-4 w-6" /> {professor.country}</span>],
          [professorDetailText.facts.group, professor.group],
          [professorDetailText.facts.email, <EmailCell key="e" professor={professor} />]
        ]}
      />
      {professor.note && <p className="text-sm font-bold text-amber-400">{professor.note}</p>}
      <p className="text-sm text-slate-400">
        {professorDetailText.emailHint}
      </p>

      <ProfessorTracker slug={professorSlug(professor)} />

      <ProfessorFieldInfo field={field} />

      {funders.length > 0 && (
        <Block title={detailText.blocks.fundingRoutes}>
          <FunderList funders={funders} />
        </Block>
      )}

      <Block title={detailText.blocks.beforeEmail}>
        <StepGrid steps={EMAIL_STEPS} />
      </Block>
      <Block title={detailText.blocks.starterEmail}>
        <EmailDraftBox draft={buildEmailDraft(professor)} />
      </Block>

      {peers.length > 0 && (
        <Block title={professorDetailText.moreIn(professor.group)}>
          <Chips items={peers.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name }))} />
        </Block>
      )}
    </PageShell>
  );
}
