import { Block } from "@/shared/components/Block";
import { countryViewText } from "@/content/text/directory";
import type { CountryEntry } from "../types";
import { ecosystemOfCountry } from "../connections";
import { FunderList } from "../ecosystem/FunderList";

export function CountryFundingSection({ country }: { country: CountryEntry }) {
  return (
    <Block title={countryViewText.fundingBlock}>
      <FunderList funders={ecosystemOfCountry(country).funders} empty={countryViewText.fundingEmpty} />
      <p className="text-sm text-slate-400">{countryViewText.fundingHint}</p>
    </Block>
  );
}
