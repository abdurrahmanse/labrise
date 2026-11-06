import { universityOnlyProviders } from "../data/connections";
import { providers } from "../data/providers";
import type { ProviderEntry } from "../types";

export const named = (names: string[]) => providers.filter((p) => names.includes(p.name));

/** The universities a university-only provider is tied to, or none if it is open across the country. */
export const tiedUniversities = (providerName: string): string[] => [universityOnlyProviders[providerName] ?? []].flat();

export function dedupe(list: ProviderEntry[]) {
  return list.filter((p, i) => list.findIndex((x) => x.name === p.name) === i);
}
