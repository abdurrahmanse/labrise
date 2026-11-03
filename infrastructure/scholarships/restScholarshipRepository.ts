import { z } from "zod";
import { apiClient } from "@/shared/api/client";
import { isApiError } from "@/shared/api/errors";
import { endpoints } from "@/shared/data/endpoints";
import { scholarshipPageSchema, scholarshipSchema } from "@/modules/scholarships/schemas/scholarshipSchemas";
import type { ScholarshipRepository } from "@/modules/scholarships/repositories/ScholarshipRepository";

interface RestOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

/** Reads scholarships from a REST backend that follows the contract in shared/data/endpoints.ts. */
export function createRestScholarshipRepository(options: RestOptions = {}): ScholarshipRepository {
  const { scholarships: paths } = endpoints;
  return {
    getAll: async (signal) => (await apiClient.get(paths.search, { schema: scholarshipPageSchema, params: { pageSize: 50 }, signal, ...options })).items,
    async getBySlug(slug, signal) {
      try {
        return await apiClient.get(paths.item(slug), { schema: scholarshipSchema, signal, ...options });
      } catch (error) {
        if (isApiError(error) && error.isNotFound) return null;
        throw error;
      }
    },
    search: (params, signal) => apiClient.get(paths.search, { schema: scholarshipPageSchema, params: { ...params }, signal, ...options }),
    getFeatured: (limit, signal) => apiClient.get(paths.featured, { schema: z.array(scholarshipSchema), params: { limit }, signal, ...options })
  };
}
