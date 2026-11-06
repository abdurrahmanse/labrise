import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { detailText, labText } from "@/content/text/directory";
import { EntryActions } from "@/modules/library";
import { countryDetails } from "../../data/countryDetails";
import { countries } from "../../data/countries";
import { labs } from "../../data/labs";
import { professors } from "../../data/professors";
import { universities } from "../../data/universities";
import type { LabEntry } from "../../types";
import { fundersOfCountry, fundersOfUniversity } from "../../utils/connections";
import { scholarshipsInCountry } from "../../utils/lookups";
import { countrySlug, labSlug, scholarshipSlug, universitySlug } from "../../utils/slugs";
import { FunderList } from "../ecosystem/FunderList";
import { LabRoster } from "../ecosystem/LabRoster";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { CountryFacts } from "./CountryFacts";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function LabDetailView({ lab }: { lab: LabEntry }) {
  const country = countries.find((c) => c.country === lab.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const people = professors.filter((p) => lab.professors.includes(p.name));
  const funders = university ? fundersOfUniversity(university) : fundersOfCountry(lab.country);
  const hosted = scholarshipsInCountry(lab.country).slice(0, 8);
  const place = university?.name ?? lab.country;
  const siblings = labs.filter((l) => l.name !== lab.name && (university ? l.university === lab.university : l.country === lab.country)).slice(0, 4);
  const isNetwork = lab.kind === "Community / network";
  const isInstitute = lab.kind === "Institute" || lab.kind === "Research centre";

  return (
    <PageShell
      eyebrow={detailText.eyebrow.lab(lab.kind, lab.country)}
      title={lab.name}
      notice={{ subject: lab.name, source: lab.site }}
      actions={<EntryActions type="labs" slug={labSlug(lab)} />}
      lead={lab.focus}
      media={<Flag country={lab.country} className="h-10 w-14" />}
      back={{ href: country ? `/directory/countries/${countrySlug(country)}/labs` : "/directory/labs", label: country ? `${lab.country}: ${detailText.back.labsShort}` : detailText.back.labs }}
    >
      <Facts
        rows={[
          [detailText.facts.country, country ? <Link key="c" href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{lab.country}</Link> : lab.country],
          [labText.facts.affiliation, university ? <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{university.name}</Link> : labText.facts.independent],
          [detailText.facts.kind, lab.kind],
          [labText.facts.region, lab.region],
          [detailText.facts.whatItOffers, lab.offers],
          [labText.facts.people, people.length > 0 ? people.map((p) => p.name).join(", ") : "None listed yet"],
          ...(university ? ([[labText.facts.deadline, university.deadline], [labText.facts.funding, university.funding]] as [string, React.ReactNode][]) : []),
          ...(country ? ([[labText.facts.supervisorFirst, country.supervisor]] as [string, React.ReactNode][]) : []),
          [
            detailText.facts.officialPage,
            <a key="s" href={lab.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {lab.site.replace(/^https?:\/\//, "")} <ExternalLink className="h-4 w-4" />
            </a>
          ]
        ]}
      />
      <p className="text-sm text-slate-400">{detailText.hints.labs}</p>

      <Block title={labText.blocks.overview}>
        <p className="font-sans text-base font-normal text-slate-200">{lab.focus}.</p>
        <p className="font-sans text-base font-normal text-slate-300">{lab.offers}</p>
        <p className="text-sm text-slate-400">{isNetwork ? labText.communityNote : isInstitute ? labText.instituteNote : labText.approach[4]}</p>
      </Block>

      {people.length > 0 && (
        <Block title={labText.blocks.people}>
          <ProfessorRoster professors={people} />
        </Block>
      )}

      <Block title={labText.blocks.approach}>
        <BulletList items={[...labText.approach]} />
        {detail && <BulletList items={detail.tips} />}
      </Block>

      <Block title={labText.blocks.funding}>
        <FunderList funders={funders.slice(0, 6)} />
        <p className="text-sm text-slate-400">{labText.blocks.fundingHint}</p>
      </Block>

      {hosted.length > 0 && (
        <Block title={labText.blocks.scholarships}>
          <Chips items={hosted.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}

      {detail && (
        <Block title={labText.blocks.country}>
          <CountryFacts detail={detail} />
        </Block>
      )}

      {siblings.length > 0 && (
        <Block title={labText.blocks.related(place)}>
          <LabRoster labs={siblings} showUniversity={!university} />
        </Block>
      )}
    </PageShell>
  );
}
