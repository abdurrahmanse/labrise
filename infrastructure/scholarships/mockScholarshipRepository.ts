import { scholarshipSlug } from "@/modules/directory/contracts";
import { scholarships } from "@/modules/directory/data";
import { FEATURED_SCHOLARSHIPS } from "@/modules/scholarships/constants";
import type { ScholarshipRepository } from "@/modules/scholarships/repositories/ScholarshipRepository";
import { searchScholarships } from "@/modules/scholarships/utils/searchScholarships";

/** Serves the bundled scholarships. This is also what the built-in /api/scholarships routes return. */
export const mockScholarshipRepository: ScholarshipRepository = {
  getAll: async () => scholarships,
  getBySlug: async (slug) => scholarships.find((s) => scholarshipSlug(s) === slug) ?? null,
  search: async (params) => searchScholarships(scholarships, params),
  getFeatured: async (limit = FEATURED_SCHOLARSHIPS.length) =>
    FEATURED_SCHOLARSHIPS.flatMap((name) => scholarships.filter((s) => s.name === name)).slice(0, limit)
};
