import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";

const haystack = (s: Scholarship) => `${s.name} ${s.host} ${s.level} ${s.covers} ${s.eligibility}`.toLowerCase();

export function matchesFilters(s: Scholarship, { q, country, level, region }: ScholarshipSearchParams) {
  const text = q?.trim().toLowerCase();
  return (
    (!country || s.host === country) &&
    (!level || s.level === level) &&
    (!region || s.region === region) &&
    (!text || haystack(s).includes(text))
  );
}
