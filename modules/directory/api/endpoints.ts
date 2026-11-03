import { z } from "zod";
import { apiGet } from "@/shared/api/client";
import { directorySchemas } from "./schemas";
import { entryResponseSchema, searchResponseSchema, type EntryResponse, type SearchResponse } from "./entry";
import type { DirectoryType } from "../types";
import type { DirectoryEntries } from "../hooks/directoryTypes";

/** Typed calls to the site's own JSON API. Hooks use these; components never call fetch. */
export const directoryApi = {
  list: <T extends DirectoryType>(type: T, signal?: AbortSignal) =>
    apiGet(`/api/directory/${type}`, { schema: directorySchemas[type] as unknown as z.ZodType<DirectoryEntries[T]>, signal }),

  entry: (type: DirectoryType, slug: string, signal?: AbortSignal): Promise<EntryResponse> =>
    apiGet(`/api/directory/${type}/${encodeURIComponent(slug)}`, { schema: entryResponseSchema, signal }),

  search: (q: string, page: number, signal?: AbortSignal): Promise<SearchResponse> =>
    apiGet("/api/search", { schema: searchResponseSchema, params: { q, page }, signal })
};
