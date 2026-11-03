import { z } from "zod";
import { apiGet } from "@/shared/api/client";
import { directorySchemas } from "./schemas";
import { endpoints } from "@/shared/data/endpoints";
import { entryResponseSchema, type EntryResponse } from "./entry";
import type { DirectoryType } from "../types";
import type { DirectoryEntries } from "../hooks/directoryTypes";

/** Typed calls to the site's own JSON API. Hooks use these; components never call fetch. */
export const directoryApi = {
  list: <T extends DirectoryType>(type: T, signal?: AbortSignal) =>
    apiGet(endpoints.directory.list(type), { schema: directorySchemas[type] as unknown as z.ZodType<DirectoryEntries[T]>, signal }),

  entry: (type: DirectoryType, slug: string, signal?: AbortSignal): Promise<EntryResponse> =>
    apiGet(endpoints.directory.entry(type, slug), { schema: entryResponseSchema, signal })
};
