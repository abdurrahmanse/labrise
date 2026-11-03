import { z } from "zod";
import { apiClient } from "@/shared/api/client";
import { isApiError } from "@/shared/api/errors";
import { endpoints } from "@/shared/data/endpoints";
import { scholarshipDtoSchema, scholarshipPageDtoSchema, toScholarship, toScholarshipPage } from "@/modules/scholarships/contracts";
import type { ScholarshipRepository } from "@/modules/scholarships/repositories/ScholarshipRepository";

interface RestOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

/** Reads scholarships from a REST backend that follows the contract in shared/data/endpoints.ts. Responses are DTOs, mapped to entities here. */
export function createRestScholarshipRepository(options: RestOptions = {}): ScholarshipRepository {
  const { scholarships: paths } = endpoints;
  return {
    getAll: async (signal) =>
      toScholarshipPage(await apiClient.get(paths.search, { schema: scholarshipPageDtoSchema, params: { pageSize: 50 }, signal, ...options })).items,
    async getBySlug(slug, signal) {
      try {
        return toScholarship(await apiClient.get(paths.item(slug), { schema: scholarshipDtoSchema, signal, ...options }));
      } catch (error) {
        if (isApiError(error) && error.isNotFound) return null;
        throw error;
      }
    },
    search: async (params, signal) =>
      toScholarshipPage(await apiClient.get(paths.search, { schema: scholarshipPageDtoSchema, params: { ...params }, signal, ...options })),
    getFeatured: async (limit, signal) =>
      (await apiClient.get(paths.featured, { schema: z.array(scholarshipDtoSchema), params: { limit }, signal, ...options })).map(toScholarship)
  };
}
