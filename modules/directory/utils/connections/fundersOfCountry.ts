import { countryWideEuropeanProviders, europeanProgrammeCountries, parentCountry, universityOnlyProviders, worldwideProviders } from "../../data/connections";
import { providers } from "../../data/providers";
import { universities } from "../../data/universities";
import type { ProviderEntry } from "../../types";
import { dedupe, named, tiedUniversities } from "./providerHelpers";

/** Organisations that fund or run programmes in a country. */
export function fundersOfCountry(country: string): ProviderEntry[] {
  const nations = [country, parentCountry[country]];
  const national = providers.filter((p) => nations.includes(p.country) && !universityOnlyProviders[p.name] && !worldwideProviders.includes(p.name));
  const european = europeanProgrammeCountries.includes(country) ? named(countryWideEuropeanProviders) : [];
  const universityBased = named(
    Object.keys(universityOnlyProviders).filter((name) => tiedUniversities(name).some((uni) => universities.find((u) => u.name === uni)?.country === country))
  );
  return dedupe([...national, ...european, ...universityBased]);
}
