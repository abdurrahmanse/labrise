import { countrySlug } from "../../lib/slugs";
import type { CountryEntry } from "../../types";
import { CardFact, CardShell } from "./CardShell";

export function CountryCard({ country }: { country: CountryEntry }) {
  return (
    <CardShell href={`/directory/countries/${countrySlug(country)}`} eyebrow={country.region} title={country.country}>
      <p>{country.routes}</p>
      <CardFact label="You get" value={country.funding} />
      <CardFact label="Professor first" value={country.supervisor} />
      <CardFact label="Fee" value={country.fee} />
    </CardShell>
  );
}
