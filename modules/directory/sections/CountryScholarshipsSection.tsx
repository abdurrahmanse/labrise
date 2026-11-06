import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { countryViewText, detailText } from "@/content/text/directory";
import { countryDetails } from "../data/countryDetails";
import type { CountryEntry } from "../types";
import { ecosystemOfCountry } from "../connections";
import { scholarshipsInCountry } from "../lookups";
import { countrySlug, scholarshipSlug } from "../utils/slugs";
import { FunderList } from "../ecosystem/FunderList";

export function CountryScholarshipsSection({ country }: { country: CountryEntry }) {
  const scholarships = scholarshipsInCountry(country.country);
  const detail = countryDetails[countrySlug(country)];

  return (
    <>
      <Block title={detailText.blocks.scholarshipsPrograms}>
        {scholarships.length > 0 ? (
          <Chips items={scholarships.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        ) : (
          <p className="text-slate-400">{countryViewText.noScholarships}</p>
        )}
        {detail && <BulletList items={detail.scholarships} />}
      </Block>
      <Block title={countryViewText.fundingBlock}>
        <FunderList funders={ecosystemOfCountry(country).funders} empty={countryViewText.fundingEmpty} />
      </Block>
    </>
  );
}
