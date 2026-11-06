import type { CountryEntry } from "../types";
import { ecosystemOfCountry } from "../connections";
import { UniversityRoster } from "../ecosystem/UniversityRoster";

export function CountryUniversitiesSection({ country }: { country: CountryEntry }) {
  return <UniversityRoster summaries={ecosystemOfCountry(country).summaries} />;
}
