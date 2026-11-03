import type { PaginatedResponse } from "@/shared/api/types";
import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams } from "../types/search";

/**
 * What the scholarships feature needs from a data source. Implementations live in infrastructure/scholarships
 * (bundled data, REST backend). A database implementation only has to satisfy this contract.
 */
export interface ScholarshipRepository {
  getAll(signal?: AbortSignal): Promise<Scholarship[]>;
  /** Resolves to null when no scholarship has this slug. */
  getBySlug(slug: string, signal?: AbortSignal): Promise<Scholarship | null>;
  search(params: ScholarshipSearchParams, signal?: AbortSignal): Promise<PaginatedResponse<Scholarship>>;
  getFeatured(limit?: number, signal?: AbortSignal): Promise<Scholarship[]>;
}
