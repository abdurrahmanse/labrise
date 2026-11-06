import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { StepGrid } from "@/shared/components/StepGrid";
import { detailText, labText } from "@/content/text/directory";
import { countries } from "../../../data/countries";
import { countryDetails } from "../../../data/countryDetails";
import type { LabEntry } from "../../../types";
import { countrySlug } from "../../../utils/slugs";
import { APPLY_STEPS } from "../../detail/applySteps";

const GUIDES = [
  { href: "/guides/cold-email", label: "Cold email to professors" },
  { href: "/guides/sop", label: "Statement of purpose" },
  { href: "/guides/cv", label: "Academic CV" },
  { href: "/guides/research-proposal", label: "Research proposal" },
  { href: "/guides/reference-letter", label: "Reference letters" }
];

export function LabJoinSection({ lab }: { lab: LabEntry }) {
  const country = countries.find((c) => c.country === lab.country);
  const detail = country ? countryDetails[countrySlug(country)] : undefined;

  return (
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
  );
}
