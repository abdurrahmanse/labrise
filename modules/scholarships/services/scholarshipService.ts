import { DEFAULT_PAGE_SIZE } from "../constants";
import type { ScholarshipRepository } from "../repositories/ScholarshipRepository";
import type { ScholarshipSearchParams } from "../types/search";

/** Scholarship use cases. Pure: it only knows the repository contract, so tests can pass a fake. */
export function createScholarshipService(repository: ScholarshipRepository) {
  return {
    all: () => repository.getAll(),
    bySlug: (slug: string) => repository.getBySlug(slug),
    featured: (limit = 6) => repository.getFeatured(limit),
    /** Applies the default page size so every caller pages the same way. */
    search: (params: ScholarshipSearchParams = {}) =>
      repository.search({ ...params, page: params.page ?? 1, pageSize: params.pageSize ?? DEFAULT_PAGE_SIZE })
  };
}
