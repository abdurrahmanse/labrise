import { scholarships } from "../../data/scholarships";
import type { ProviderEntry, ScholarshipEntry } from "../../types";

export function scholarshipsOfProvider(provider: ProviderEntry): ScholarshipEntry[] {
  return scholarships.filter((s) => provider.programs.includes(s.name));
}
