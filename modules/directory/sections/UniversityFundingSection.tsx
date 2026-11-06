import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { detailText } from "@/content/text/directory";
import type { UniversityEntry } from "../types";
import { fundersOfUniversity } from "../connections";
import { scholarshipsInCountry } from "../lookups";
import { scholarshipSlug } from "../utils/slugs";
import { FunderList } from "../ecosystem/FunderList";

export function UniversityFundingSection({ university }: { university: UniversityEntry }) {
  const hosted = scholarshipsInCountry(university.country).slice(0, 10);
  return (
    <>
      <Block title={detailText.blocks.fundersHere}>
        <FunderList funders={fundersOfUniversity(university)} />
        <p className="text-sm text-slate-400">{detailText.hints.openOrg}</p>
      </Block>
      {hosted.length > 0 && (
        <Block title={detailText.blocks.scholarshipsPrograms}>
          <Chips items={hosted.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}
    </>
  );
}
