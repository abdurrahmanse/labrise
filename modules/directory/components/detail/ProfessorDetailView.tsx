import Link from "next/link";
import { Building2, CircleHelp, Globe2, GraduationCap, Mail, MailQuestion, Search } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { detailText, emailText } from "@/data/text/directory";
import { noticeText } from "@/data/text/common";
import { professorProfileText as t } from "@/data/text/professorsHub";
import { EntryActions } from "@/modules/library";
import { HighlightTiles } from "@/shared/components/StatTiles";
import { Avatar } from "@/shared/components/Avatar";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { InfoCard } from "@/shared/components/InfoCard";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { countries } from "../../data/countries";
import { fieldOf } from "../../data/fields";
import { professors } from "../../data/professors";
import { fundersOfUniversity } from "../../lib/connections";
import { professorsAtUniversity, universityOfProfessor } from "../../lib/lookups";
import { professorSlug, universitySlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { FunderList } from "../ecosystem/FunderList";
import { Flag } from "../Flag";
import { ProfessorTracker } from "../professors/ProfessorTracker";
import { EMAIL_STEPS } from "./applySteps";
import { buildEmailDraft } from "./emailDraft";
import { EmailDraftBox } from "./EmailDraftBox";
import { ProfessorFieldInfo } from "./ProfessorFieldInfo";
import { HelpLinks } from "@/shared/components/HelpLinks";
import { surface } from "@/shared/components/Surface";

const link = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function ProfessorDetailView({ professor }: { professor: ProfessorEntry }) {
  const slug = professorSlug(professor);
  const university = universityOfProfessor(professor);
  const field = fieldOf(professor.group);
  const country = countries.find((c) => c.country === professor.country);
  const funders = university ? fundersOfUniversity(university) : [];
  const peers = professors.filter((p) => p.group === professor.group && p.name !== professor.name).slice(0, 8);
  const colleagues = university ? professorsAtUniversity(university).filter((p) => p.name !== professor.name).slice(0, 8) : [];
  const searchHref = `https://www.google.com/search?q=${encodeURIComponent(emailText.searchQuery(professor.name, professor.university))}`;

  return (
    <PageShell
      eyebrow={detailText.eyebrow.professor(professor.group)}
      title={professor.name}
      notice={{ subject: professor.name, caution: professor.email ? undefined : noticeText.professorCaution }}
      media={<Avatar name={professor.name} size={80} />}
      actions={<EntryActions type="professors" slug={slug} />}
      lead={detailText.lead.professor(professor.university, professor.country, professor.group)}
      back={{ href: "/directory/professors", label: detailText.back.professors }}
    >
      <HighlightTiles
        items={[
          { Icon: Building2, label: t.highlights.university, children: university ? <Link href={`/directory/universities/${universitySlug(university)}`} className="hover:text-indigo-300">{university.name}</Link> : professor.university },
          { Icon: Globe2, label: t.highlights.country, children: <span className="flex items-center gap-2"><Flag country={professor.country} className="h-4 w-6" /> {professor.country}</span> },
          { Icon: GraduationCap, label: t.highlights.field, children: field.title },
          { Icon: professor.email ? Mail : MailQuestion, label: t.highlights.email, children: professor.email ? t.emailListed : t.emailMissing }
        ]}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          <Block title={t.contact.title} icon={Mail}>
            <div className={surface({ tone: "quiet", depth: "none", padding: "lg", className: "space-y-4" })}>
              {professor.email ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a href={`mailto:${professor.email}`} className={`break-all text-lg font-bold ${link}`}>{professor.email}</a>
                  <CopyButton textToCopy={professor.email} />
                </div>
              ) : (
                <a href={searchHref} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-lg font-bold ${link}`}>
                  <Search className="h-5 w-5" aria-hidden /> {t.contact.find}
                </a>
              )}
              <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{professor.email ? t.contact.listed : t.contact.missing}</p>
              {professor.note && <p className="font-bold text-amber-400">{professor.note}</p>}
              {country && (
                <p className="flex items-center gap-2 font-sans text-sm text-slate-300">
                  <CircleHelp className="h-4 w-4 text-indigo-400" aria-hidden /> {detailText.facts.professorFirst} <strong className="text-white">{country.supervisor}</strong>
                </p>
              )}
            </div>
          </Block>

          <Block title={t.outreach.steps}><StepGrid steps={EMAIL_STEPS} /></Block>
          <Block title={t.outreach.draft}><EmailDraftBox draft={buildEmailDraft(professor)} /></Block>

          <ProfessorFieldInfo field={field} />

          {funders.length > 0 && <Block title={t.funding}><FunderList funders={funders} /></Block>}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <ProfessorTracker slug={slug} />
          <HelpLinks title={t.help.title} links={t.help.links} />
          {colleagues.length > 0 && (
            <InfoCard label={t.peers.university(university?.name ?? professor.university)}>
              <Chips items={colleagues.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name }))} />
            </InfoCard>
          )}
          {peers.length > 0 && (
            <InfoCard label={t.peers.title(professor.group)}>
              <Chips items={peers.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.country }))} />
            </InfoCard>
          )}
        </aside>
      </div>
    </PageShell>
  );
}
