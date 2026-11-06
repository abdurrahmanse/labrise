import Link from "next/link";
import { ExternalLink, FlaskConical, GraduationCap, Landmark, Users } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { countries } from "../../data/countries";
import { universities } from "../../data/universities";
import { fundersOfUniversity } from "../../utils/connections";
import { labsAtUniversity, professorsAtUniversity } from "../../utils/lookups";
import { countrySlug, universitySlug } from "../../utils/slugs";
import { universityTrail } from "../../utils/trails";
import type { UniversityEntry } from "../../types";
import { Avatar } from "@/shared/components/Avatar";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { SectionTiles } from "../ecosystem/SectionTiles";
import { detailText, sectionText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

/** The short overview of one university. Labs, professors, funding and study each have their own page. */
export function UniversityDetailView({ university }: { university: UniversityEntry }) {
  const slug = universitySlug(university);
  const base = `/directory/universities/${slug}`;
  const country = countries.find((c) => c.country === university.country);
  const profs = professorsAtUniversity(university);
  const funders = fundersOfUniversity(university);
  const labs = labsAtUniversity(university);
  const others = universities.filter((u) => u.country === university.country && u.name !== university.name).slice(0, 12);
  const s = sectionText.university;

  return (
    <PageShell
      eyebrow={detailText.eyebrow.university(university.country)}
      title={university.name}
      notice={{ subject: university.name, source: university.site }}
      actions={<EntryActions type="universities" slug={slug} />}
      media={<Avatar name={university.name.replace(/^(University of|The) /, "")} size={64} square />}
      lead={detailText.lead.university(university.funding, university.deadline)}
      trail={universityTrail(university)}
      next={{ href: `${base}/labs`, label: s.titles.labs }}
    >
      <EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />

      <Facts
        rows={[
          [detailText.facts.country, country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{university.country}</Link> : university.country],
          [detailText.facts.region, university.region],
          [detailText.facts.funding, university.funding],
          [detailText.facts.typicalDeadline, university.deadline],
          [
            detailText.facts.officialSite,
            <a key="s" href={university.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {university.site.replace("https://", "")} <ExternalLink className="w-4 h-4" />
            </a>
          ],
          ...(country ? ([[detailText.facts.professorFirstShort, country.supervisor], [detailText.facts.applicationFee, country.fee]] as [string, React.ReactNode][]) : [])
        ]}
      />
      <p className="text-sm text-slate-400">{detailText.hints.deadlines}</p>

      <Block title={detailText.blocks.explore(university.name)}>
        <SectionTiles
          tiles={[
            { href: `${base}/labs`, label: s.titles.labs, hint: s.hints.labs, count: labs.length, Icon: FlaskConical },
            { href: `${base}/professors`, label: s.titles.professors, hint: s.hints.professors, count: profs.length, Icon: Users },
            { href: `${base}/funding`, label: s.titles.funding, hint: s.hints.funding, count: funders.length, Icon: Landmark },
            { href: `${base}/study`, label: s.titles.study, hint: s.hints.study, Icon: GraduationCap }
          ]}
        />
      </Block>

      {others.length > 0 && (
        <Block title={detailText.blocks.moreIn(university.country)}>
          <Chips items={others.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name }))} />
        </Block>
      )}
    </PageShell>
  );
}
