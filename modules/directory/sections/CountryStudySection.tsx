import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { ExternalLinks } from "@/shared/components/ExternalLinks";
import { StepGrid } from "@/shared/components/StepGrid";
import { detailText } from "@/content/text/directory";
import { countryDetails } from "../data/countryDetails";
import type { CountryEntry } from "../types";
import { countrySlug } from "../utils/slugs";
import { APPLY_STEPS } from "../detail/applySteps";
import { CountryFacts } from "../detail/CountryFacts";

export function CountryStudySection({ country }: { country: CountryEntry }) {
  const detail = countryDetails[countrySlug(country)];
  if (!detail) return null;

  return (
    <>
      <Block title={detailText.blocks.studyAndLife}>
        <CountryFacts detail={detail} />
        <p className="text-sm text-slate-400">{detailText.hints.figures}</p>
      </Block>
      <Block title={detailText.blocks.findPositions}>
        <ExternalLinks items={detail.find} />
      </Block>
      <Block title={detailText.blocks.tips}>
        <BulletList items={detail.tips} />
      </Block>
      <Block title={detailText.blocks.howToApply}>
        <StepGrid steps={APPLY_STEPS} />
      </Block>
    </>
  );
}
