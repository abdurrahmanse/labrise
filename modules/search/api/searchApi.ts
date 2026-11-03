import { apiClient } from "@/shared/api/client";
import { endpoints } from "@/shared/data/endpoints";
import { toSearchPage } from "../mappers/searchMapper";
import { searchResponseDtoSchema } from "../schemas/searchSchema";
import type { SearchPage } from "../types";

/** The one call the search dialog makes. The response is a DTO, mapped to a SearchPage here. */
export const searchApi = {
  search: async (q: string, page: number, signal?: AbortSignal): Promise<SearchPage> =>
    toSearchPage(await apiClient.get(endpoints.search, { schema: searchResponseDtoSchema, params: { q, page }, signal }))
};
