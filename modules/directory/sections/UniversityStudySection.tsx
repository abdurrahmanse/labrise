import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { StepGrid } from "@/shared/components/StepGrid";
import { detailText } from "@/content/text/directory";
import { countries } from "../data/countries";
import { countryDetails } from "../data/countryDetails";
import type { UniversityEntry } from "../types";
import { countrySlug } from "../utils/slugs";
import { APPLY_STEPS } from "../detail/applySteps";
import { CountryFacts } from "../detail/CountryFacts";

export function UniversityStudySection({ university }: { university: UniversityEntry }) {
  const country = countries.find((c) => c.country === university.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;

  return (
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
  );
}
