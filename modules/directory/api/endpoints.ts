import { apiGet } from "@/shared/api/client";
import { endpoints } from "@/shared/data/endpoints";
import { entryResponseDtoSchema } from "../schemas/directorySchemas";
import { toEntryResult } from "../mappers/entryResponseMapper";
import type { DirectoryType, EntryOf, EntryResult } from "../types";
import { listResourceOf } from "./resources";

/** Typed calls to the site's own JSON API. Hooks use these; components never call fetch. Responses are DTOs, mapped to entities here. */
export const directoryApi = {
  list: async <T extends DirectoryType>(type: T, signal?: AbortSignal): Promise<EntryOf[T][]> => {
    const resource = listResourceOf(type);
    return (await apiGet(endpoints.directory.list(type), { schema: resource.schema, signal })).map(resource.fromDto);
  },

  entry: async (type: DirectoryType, slug: string, signal?: AbortSignal): Promise<EntryResult> =>
    toEntryResult(await apiGet(endpoints.directory.entry(type, slug), { schema: entryResponseDtoSchema, signal }))
};
