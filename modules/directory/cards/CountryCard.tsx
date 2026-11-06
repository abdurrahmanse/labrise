import { countrySlug } from "../utils/slugs";
import type { CountryEntry } from "../types";
import { Flag } from "@/shared/components/Flag";
import { CardFact, CardShell } from "./CardShell";
import { cardText } from "@/content/text/directory";

export function CountryCard({ country }: { country: CountryEntry }) {
  return (
    <CardShell href={`/directory/countries/${countrySlug(country)}`} eyebrow={country.region} title={country.country} media={<Flag country={country.country} className="h-8 w-12" />}>
      <p>{country.routes}</p>
      <CardFact label={cardText.country.funding} value={country.funding} />
      <CardFact label={cardText.country.supervisor} value={country.supervisor} />
      <CardFact label={cardText.country.fee} value={country.fee} />
    </CardShell>
  );
}
