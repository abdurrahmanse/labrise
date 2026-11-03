import { apiClient } from "@/shared/api/client";
import { endpoints } from "@/shared/data/endpoints";
import { searchResponseSchema, type SearchResponse } from "./searchSchemas";

/** The one call the search dialog makes. */
export const searchApi = {
  search: (q: string, page: number, signal?: AbortSignal): Promise<SearchResponse> =>
    apiClient.get(endpoints.search, { schema: searchResponseSchema, params: { q, page }, signal })
};
