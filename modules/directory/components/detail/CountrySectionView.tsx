import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { Flag } from "@/shared/components/Flag";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { countryViewText, detailText, labText, rosterText } from "@/content/text/directory";
import { countryDetails } from "../../data/countryDetails";
import { universities } from "../../data/universities";
import type { CountryEntry } from "../../types";
import { ecosystemOfCountry } from "../../utils/connections";
import { labsInCountry, scholarshipsInCountry } from "../../utils/lookups";
import { countrySlug, scholarshipSlug, universitySlug } from "../../utils/slugs";
import { countryTrail, withStep } from "../../utils/trails";
import { CountryViewTabs } from "../ecosystem/CountryViewTabs";
import { FunderList } from "../ecosystem/FunderList";
import { LabRoster } from "../ecosystem/LabRoster";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { UniversityRoster } from "../ecosystem/UniversityRoster";
import { CountryFacts } from "./CountryFacts";
import { APPLY_STEPS } from "./applySteps";

export const COUNTRY_VIEWS = ["universities", "professors", "labs", "scholarships", "study", "funding"] as const;
export type CountryView = (typeof COUNTRY_VIEWS)[number];
export const COUNTRY_VIEW_TITLES: Record<CountryView, string> = countryViewText.titles;

/** One small page of a country: its universities, professors, labs, scholarships, study facts or funders. */
export function CountrySectionView({ country, view }: { country: CountryEntry; view: CountryView }) {
  const slug = countrySlug(country);
  const { summaries, professors, funders } = ecosystemOfCountry(country);
  const labs = view === "labs" ? labsInCountry(country.country) : [];

  return (
    <PageShell
      eyebrow={countryViewText.eyebrow(country.country, country.region)}
      title={COUNTRY_VIEW_TITLES[view]}
      media={<Flag country={country.country} className="h-10 w-14" />}
      trail={withStep(countryTrail(country), COUNTRY_VIEW_TITLES[view], `/directory/countries/${slug}/${view}`)}
    >
      <CountryViewTabs slug={slug} />

      {view === "universities" && <UniversityRoster summaries={summaries} />}

      {view === "professors" &&
        (summaries.some((s) => s.professors.length > 0) ? (
          summaries
            .filter((s) => s.professors.length > 0)
            .map(({ university, professors: list }) => (
              <Block key={university.name} title={university.name}>
                <ProfessorRoster professors={list} />
                <a href={`/directory/universities/${universitySlug(university)}`} className="text-sm font-bold text-indigo-400 hover:text-indigo-200">
                  {rosterText.universityDetails}
                </a>
              </Block>
            ))
        ) : (
          <ProfessorRoster professors={professors} />
        ))}

      {view === "labs" && (
        <>
          <p className="text-slate-300">{labText.countryIntro(country.country, labs.length)}</p>
          {universities
            .filter((u) => labs.some((l) => l.university === u.name))
            .map((u) => (
              <Block key={u.name} title={u.name}>
                <LabRoster labs={labs.filter((l) => l.university === u.name)} showUniversity={false} />
                <a href={`/directory/universities/${universitySlug(u)}`} className="text-sm font-bold text-indigo-400 hover:text-indigo-200">
                  {rosterText.universityDetails}
                </a>
              </Block>
            ))}
          {labs.some((l) => !l.university) && (
            <Block title={labText.nationalGroup}>
              <LabRoster labs={labs.filter((l) => !l.university)} />
            </Block>
          )}
          {labs.length === 0 && <p className="text-slate-400">{labText.none}</p>}
        </>
      )}

      {view === "scholarships" && (
        <>
          <Block title={detailText.blocks.scholarshipsPrograms}>
            {scholarshipsInCountry(country.country).length > 0 ? (
              <Chips items={scholarshipsInCountry(country.country).map((x) => ({ href: `/directory/scholarships/${scholarshipSlug(x)}`, label: x.name, meta: x.level }))} />
            ) : (
              <p className="text-slate-400">{countryViewText.noScholarships}</p>
            )}
            {countryDetails[slug] && <BulletList items={countryDetails[slug].scholarships} />}
          </Block>
          <Block title={countryViewText.fundingBlock}>
            <FunderList funders={funders} empty={countryViewText.fundingEmpty} />
          </Block>
        </>
      )}

      {view === "study" && countryDetails[slug] && (
        <>
          <Block title={detailText.blocks.studyAndLife}>
            <CountryFacts detail={countryDetails[slug]} />
            <p className="text-sm text-slate-400">{detailText.hints.figures}</p>
          </Block>
          <Block title={detailText.blocks.findPositions}>
            <ExternalLinks items={countryDetails[slug].find} />
          </Block>
          <Block title={detailText.blocks.tips}>
            <BulletList items={countryDetails[slug].tips} />
          </Block>
          <Block title={detailText.blocks.howToApply}>
            <StepGrid steps={APPLY_STEPS} />
          </Block>
        </>
      )}

      {view === "funding" && (
        <Block title={countryViewText.fundingBlock}>
          <FunderList funders={funders} empty={countryViewText.fundingEmpty} />
          <p className="text-sm text-slate-400">{countryViewText.fundingHint}</p>
        </Block>
      )}
    </PageShell>
  );
}
