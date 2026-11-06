import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { detailText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";
import { professors } from "../../data/professors";
import { universities } from "../../data/universities";
import { labs } from "../../data/labs";
import { countries } from "../../data/countries";
import type { LabEntry } from "../../types";
import { countrySlug, labSlug, professorSlug, universitySlug } from "../../utils/slugs";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function LabDetailView({ lab }: { lab: LabEntry }) {
  const country = countries.find((c) => c.country === lab.country);
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const people = professors.filter((p) => lab.professors.includes(p.name));
  const siblings = labs.filter((l) => l.name !== lab.name && (university ? l.university === lab.university : l.country === lab.country)).slice(0, 8);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.lab(lab.kind, lab.country)}
      title={lab.name}
      notice={{ subject: lab.name, source: lab.site }}
      actions={<EntryActions type="labs" slug={labSlug(lab)} />}
      lead={lab.focus}
      media={<Flag country={lab.country} className="h-10 w-14" />}
      back={{ href: "/directory/labs", label: detailText.back.labs }}
    >
      <Facts
        rows={[
          [detailText.facts.country, country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{lab.country}</Link> : lab.country],
          ...(university ? ([[detailText.facts.university, <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{university.name}</Link>]] as [string, React.ReactNode][]) : []),
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

      {people.length > 0 && (
        <Block title={detailText.blocks.labProfessors}>
          <Chips items={people.map((p) => ({ href: `/directory/professors/${professorSlug(p)}`, label: p.name, meta: p.group }))} />
        </Block>
      )}
      {siblings.length > 0 && (
        <Block title={detailText.blocks.moreLabs(university?.name ?? lab.country)}>
          <Chips items={siblings.map((l) => ({ href: `/directory/labs/${labSlug(l)}`, label: l.name, meta: l.kind }))} />
        </Block>
      )}
    </PageShell>
  );
}
