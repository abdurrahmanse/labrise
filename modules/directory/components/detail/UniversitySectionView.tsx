import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { Avatar } from "@/shared/components/Avatar";
import { PageShell } from "@/shared/components/PageShell";
import { StepGrid } from "@/shared/components/StepGrid";
import { detailText, sectionText } from "@/content/text/directory";
import { countries } from "../../data/countries";
import { countryDetails } from "../../data/countryDetails";
import type { UniversityEntry } from "../../types";
import { fundersOfUniversity } from "../../utils/connections";
import { labsAtUniversity, professorsAtUniversity, scholarshipsInCountry } from "../../utils/lookups";
import { countrySlug, scholarshipSlug, universitySlug } from "../../utils/slugs";
import { universityTrail, withStep } from "../../utils/trails";
import { EntryTabs } from "../ecosystem/EntryTabs";
import { FunderList } from "../ecosystem/FunderList";
import { LabRoster } from "../ecosystem/LabRoster";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import { CountryFacts } from "./CountryFacts";
import { APPLY_STEPS } from "./applySteps";

export type UniversityView = "labs" | "professors" | "funding" | "study";
export const UNIVERSITY_VIEWS: UniversityView[] = ["labs", "professors", "funding", "study"];

/** One small page of a university: its labs, professors, funding, or what to know before studying there. */
export function UniversitySectionView({ university, view }: { university: UniversityEntry; view: UniversityView }) {
  const base = `/directory/universities/${universitySlug(university)}`;
  const s = sectionText.university;
  const country = countries.find((c) => c.country === university.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;
  const labs = labsAtUniversity(university);
  const profs = professorsAtUniversity(university);
  const funders = fundersOfUniversity(university);
  const hosted = scholarshipsInCountry(university.country).slice(0, 10);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.university(university.country)}
      title={`${s.titles[view]}: ${university.name}`}
      media={<Avatar name={university.name.replace(/^(University of|The) /, "")} size={64} square />}
      lead={s.hints[view]}
      trail={withStep(universityTrail(university), s.titles[view], `${base}/${view}`)}
      notice={{ subject: university.name, source: university.site }}
    >
      <EntryTabs label={s.tabsLabel} base={base} tabs={[...s.tabs]} />

      {view === "labs" && (
        <Block title={detailText.blocks.labsHere(labs.length)}>
          <LabRoster labs={labs} showUniversity={false} />
        </Block>
      )}

      {view === "professors" && (
        <Block title={detailText.blocks.professors(profs.length)}>
          <ProfessorRoster professors={profs} />
        </Block>
      )}

      {view === "funding" && (
        <>
          <Block title={detailText.blocks.fundersHere}>
            <FunderList funders={funders} />
            <p className="text-sm text-slate-400">{detailText.hints.openOrg}</p>
          </Block>
          {hosted.length > 0 && (
            <Block title={detailText.blocks.scholarshipsPrograms}>
              <Chips items={hosted.map((x) => ({ href: `/directory/scholarships/${scholarshipSlug(x)}`, label: x.name, meta: x.level }))} />
            </Block>
          )}
        </>
      )}

      {view === "study" && (
        <>
          {detail && (
            <>
              <Block title={detailText.blocks.studyingIn(university.country)}>
                <CountryFacts detail={detail} />
              </Block>
              <Block title={detailText.blocks.fundingToCheck}>
                <BulletList items={detail.scholarships} />
              </Block>
              <Block title={detailText.blocks.openPositions}>
                <ExternalLinks items={[{ label: detailText.hints.website(university.name), href: university.site }, ...detail.find]} />
              </Block>
              <Block title={detailText.blocks.tipsShort}>
                <BulletList items={detail.tips} />
              </Block>
            </>
          )}
          <Block title={detailText.blocks.howToApply}>
            <StepGrid steps={APPLY_STEPS} />
          </Block>
        </>
      )}
    </PageShell>
  );
}
