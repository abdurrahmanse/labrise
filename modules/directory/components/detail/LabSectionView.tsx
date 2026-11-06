import Link from "next/link";
import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { detailText, labText, sectionText } from "@/content/text/directory";
import { countryDetails } from "../../data/countryDetails";
import { countries } from "../../data/countries";
import { fieldByKey, fieldKeyOf } from "../../data/fields";
import { professors } from "../../data/professors";
import { universities } from "../../data/universities";
import type { LabEntry } from "../../types";
import { fundersOfCountry, fundersOfUniversity } from "../../utils/connections";
import { professorsAtUniversity, scholarshipsInCountry } from "../../utils/lookups";
import { countrySlug, labSlug, scholarshipSlug, universitySlug } from "../../utils/slugs";
import { labTrail, withStep } from "../../utils/trails";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { FunderList } from "../ecosystem/FunderList";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { CountryFacts } from "./CountryFacts";
import { APPLY_STEPS } from "./applySteps";
import { StepGrid } from "@/shared/components/StepGrid";

export type LabView = "people" | "funding" | "join" | "context";
export const LAB_VIEWS: LabView[] = ["people", "funding", "join", "context"];

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";
const GUIDES = [
  { href: "/guides/cold-email", label: "Cold email to professors" },
  { href: "/guides/sop", label: "Statement of purpose" },
  { href: "/guides/cv", label: "Academic CV" },
  { href: "/guides/research-proposal", label: "Research proposal" },
  { href: "/guides/reference-letter", label: "Reference letters" }
];

/** One small page of a lab: people, funding, how to join, or the place behind it. */
export function LabSectionView({ lab, view }: { lab: LabEntry; view: LabView }) {
  const slug = labSlug(lab);
  const base = `/directory/labs/${slug}`;
  const s = sectionText.lab;
  const country = countries.find((c) => c.country === lab.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const university = lab.university ? universities.find((u) => u.name === lab.university) : undefined;
  const people = professors.filter((p) => lab.professors.includes(p.name));
  const colleagues = university ? professorsAtUniversity(university).filter((p) => !lab.professors.includes(p.name)).slice(0, 6) : [];
  const funders = university ? fundersOfUniversity(university) : fundersOfCountry(lab.country);
  const hosted = scholarshipsInCountry(lab.country).slice(0, 10);
  const fieldKeys = [...new Set(people.map((p) => fieldKeyOf(p.group)))];

  return (
    <PageShell
      eyebrow={detailText.eyebrow.lab(lab.kind, lab.country)}
      title={`${s.titles[view]}: ${lab.name}`}
      media={<Flag country={lab.country} className="h-10 w-14" />}
      lead={s.hints[view]}
      trail={withStep(labTrail(lab), s.titles[view], `${base}/${view}`)}
      notice={{ subject: lab.name, source: lab.site }}
    >
      <EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />

      {view === "people" && (
        <>
          <Block title={labText.blocks.people}>
            {people.length > 0 ? <ProfessorRoster professors={people} /> : <p className="text-slate-400">{labText.noPeople}</p>}
          </Block>
          {fieldKeys.length > 0 && (
            <Block title={labText.blocks.fields}>
              <Chips items={fieldKeys.map((k) => ({ href: `/directory/fields/${k}`, label: fieldByKey(k)?.title ?? k }))} />
            </Block>
          )}
          {colleagues.length > 0 && university && (
            <Block title={labText.blocks.colleagues(university.name)}>
              <ProfessorRoster professors={colleagues} />
            </Block>
          )}
        </>
      )}

      {view === "funding" && (
        <>
          <Block title={labText.blocks.funding}>
            <FunderList funders={funders.slice(0, 8)} />
            <p className="text-sm text-slate-400">{labText.blocks.fundingHint}</p>
          </Block>
          {hosted.length > 0 && (
            <Block title={labText.blocks.scholarships}>
              <Chips items={hosted.map((x) => ({ href: `/directory/scholarships/${scholarshipSlug(x)}`, label: x.name, meta: x.level }))} />
            </Block>
          )}
          {university && (
            <Block title={labText.blocks.university}>
              <Facts rows={[[labText.facts.funding, university.funding], [labText.facts.deadline, university.deadline]]} />
            </Block>
          )}
        </>
      )}

      {view === "join" && (
        <>
          <Block title={labText.blocks.approach}>
            <BulletList items={[...labText.approach]} />
          </Block>
          <Block title={labText.blocks.documents}>
            <BulletList items={[...labText.documents]} />
            <Chips items={GUIDES} />
          </Block>
          {detail && (
            <Block title={labText.blocks.countryTips(lab.country)}>
              <BulletList items={detail.tips} />
            </Block>
          )}
          <Block title={detailText.blocks.howToApply}>
            <StepGrid steps={APPLY_STEPS} />
          </Block>
        </>
      )}

      {view === "context" && (
        <>
          {university && (
            <Block title={labText.blocks.university}>
              <Facts
                rows={[
                  [labText.facts.affiliation, <Link key="u" href={`/directory/universities/${universitySlug(university)}`} className={linkClass}>{university.name}</Link>],
                  [labText.facts.funding, university.funding],
                  [labText.facts.deadline, university.deadline]
                ]}
              />
            </Block>
          )}
          {country && (
            <Block title={labText.blocks.country}>
              <Facts
                rows={[
                  [detailText.facts.fundedRoutes, country.routes],
                  [detailText.facts.whatYouGet, country.funding],
                  [detailText.facts.professorFirst, country.supervisor],
                  [detailText.facts.applicationFee, country.fee]
                ]}
              />
              {detail && <CountryFacts detail={detail} />}
              <Link href={`/directory/countries/${countrySlug(country)}`} className={linkClass}>{detailText.hints.dossier(country.country)}</Link>
            </Block>
          )}
        </>
      )}
    </PageShell>
  );
}
