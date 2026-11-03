import { z } from "zod";
import { apiGet } from "@/shared/api/client";
import type { Collection } from "./collection";

export interface Repository<Item> {
  list(signal?: AbortSignal): Promise<Item[]>;
  get(id: string, signal?: AbortSignal): Promise<Item>;
}

interface RemoteOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

/** Reads a collection over HTTP: the site's own /api routes, or the real backend when a base URL is set. */
export function remoteRepository<Item, Dto>(collection: Collection<Item, Dto>, options: RemoteOptions = {}): Repository<Item> {
  return {
    list: async (signal) => (await apiGet(collection.path, { schema: z.array(collection.schema), signal, ...options })).map(collection.fromDto),
    get: async (id, signal) => collection.fromDto(await apiGet(`${collection.path}/${encodeURIComponent(id)}`, { schema: collection.schema, signal, ...options }))
  };
}
