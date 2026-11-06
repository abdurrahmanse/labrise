import { universities } from "../data/universities";
import type { ProviderEntry, UniversityEntry } from "../types";
import { fundersOfUniversity } from "./fundersOfUniversity";

/** Where an organisation's programmes can be used: universities, derived from the rules above. */
export function universitiesOfProvider(provider: ProviderEntry): UniversityEntry[] {
  return universities.filter((u) => fundersOfUniversity(u).some((p) => p.name === provider.name));
}
