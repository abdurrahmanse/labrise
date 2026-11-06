import Link from "next/link";
import { BookOpen, Compass, ExternalLink, Landmark, Users } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Facts } from "@/shared/components/Facts";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { detailText, labText, sectionText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";
import { countries } from "../data/countries";
import { labs } from "../data/labs";
import { professors } from "../data/professors";
import { universities } from "../data/universities";
import type { LabEntry } from "../types";
import { labTrail } from "../utils/trails";
import { countrySlug, labSlug, universitySlug } from "../utils/slugs";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { LabRoster } from "../ecosystem/LabRoster";
import { SectionTiles } from "../ecosystem/SectionTiles";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

/** The short overview of one lab. People, funding, how to join and the place each have their own page. */
export function LabDetailView({ lab }: { lab: LabEntry }) {
  const slug = labSlug(lab);
  const base = `/directory/labs/${slug}`;
  const country = countries.find((c) => c.country === lab.country);
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const people = professors.filter((p) => lab.professors.includes(p.name));
  const siblings = labs.filter((l) => l.name !== lab.name && (university ? l.university === lab.university : l.country === lab.country)).slice(0, 2);
  const s = sectionText.lab;

  return (
    <PageShell
      eyebrow={detailText.eyebrow.lab(lab.kind, lab.country)}
      title={lab.name}
      notice={{ subject: lab.name, source: lab.site }}
      actions={<EntryActions type="labs" slug={slug} />}
      lead={lab.focus}
      media={<Flag country={lab.country} className="h-10 w-14" />}
      trail={labTrail(lab)}
      next={{ href: `${base}/people`, label: s.titles.people }}
    >
      <EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />

      <Facts
        rows={[
          [detailText.facts.country, country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{lab.country}</Link> : lab.country],
          [labText.facts.affiliation, university ? <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{university.name}</Link> : labText.facts.independent],
          [detailText.facts.kind, lab.kind],
          [detailText.facts.whatItOffers, lab.offers],
          [
            detailText.facts.officialPage,
            <a key="s" href={lab.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {lab.site.replace(/^https?:\/\//, "")} <ExternalLink className="h-4 w-4" />
            </a>
          ]
        ]}
      />
      <p className="text-sm text-slate-400">{detailText.hints.labs}</p>

      <Block title={labText.blocks.explore}>
        <SectionTiles
          tiles={[
            { href: `${base}/people`, label: s.titles.people, hint: s.hints.people, count: people.length, Icon: Users },
            { href: `${base}/funding`, label: s.titles.funding, hint: s.hints.funding, Icon: Landmark },
            { href: `${base}/join`, label: s.titles.join, hint: s.hints.join, Icon: Compass },
            { href: `${base}/context`, label: s.titles.context, hint: s.hints.context, Icon: BookOpen }
          ]}
        />
      </Block>

      {siblings.length > 0 && (
        <Block title={labText.blocks.related(university?.name ?? lab.country)}>
          <LabRoster labs={siblings} showUniversity={!university} />
        </Block>
      )}
    </PageShell>
  );
}
