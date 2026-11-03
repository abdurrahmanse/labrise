import { detailText } from "@/data/text/directory";
import { scholarships } from "../data/scholarships";
import type { ProviderEntry, ScholarshipEntry } from "../types";

const steps = detailText.scholarshipSteps;

const DEFAULT_CHECKLIST = [steps.official, steps.eligibility, steps.documents, steps.referees, steps.submit];

/** Other scholarships in the same host country. */
export const sameHostScholarships = (s: ScholarshipEntry) => scholarships.filter((x) => x.host === s.host && x.name !== s.name);

/** Scholarships at the same level in other countries, limited to a short list. */
export const sameLevelScholarships = (s: ScholarshipEntry, limit = 3) =>
  scholarships.filter((x) => x.level === s.level && x.host !== s.host).slice(0, limit);

/** Application steps: the provider's own documents when known, otherwise the generic five. */
export const applicationChecklist = (provider?: ProviderEntry) =>
  provider ? [steps.official, steps.eligibility, ...provider.documents, steps.submit] : DEFAULT_CHECKLIST;
