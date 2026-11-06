import { countryWideEuropeanProviders, europeanProgrammeCountries, parentCountry, universityOnlyProviders, worldwideProviders } from "../data/connections";
import { providers } from "../data/providers";
import { universities } from "../data/universities";
import type { ProviderEntry } from "../types";
import { dedupe, named, tiedUniversities } from "./providerHelpers";

const universityCountry = new Map(universities.map((u) => [u.name, u.country]));
const cache = new Map<string, ProviderEntry[]>();

/** Organisations that fund or run programmes in a country. Computed once per country. */
export function fundersOfCountry(country: string): ProviderEntry[] {
  const hit = cache.get(country);
  if (hit) return hit;
  const result = computeFunders(country);
  cache.set(country, result);
  return result;
}

function computeFunders(country: string): ProviderEntry[] {
  const nations = [country, parentCountry[country]];
  const national = providers.filter((p) => nations.includes(p.country) && !universityOnlyProviders[p.name] && !worldwideProviders.includes(p.name));
  const european = europeanProgrammeCountries.includes(country) ? named(countryWideEuropeanProviders) : [];
  const universityBased = named(
    Object.keys(universityOnlyProviders).filter((name) => tiedUniversities(name).some((uni) => universityCountry.get(uni) === country))
  );
  return dedupe([...national, ...european, ...universityBased]);
}
