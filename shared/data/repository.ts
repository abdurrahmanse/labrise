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
export function remoteRepository<Item>(collection: Collection<Item>, options: RemoteOptions = {}): Repository<Item> {
  return {
    list: (signal) => apiGet(collection.path, { schema: z.array(collection.schema), signal, ...options }),
    get: (id, signal) => apiGet(`${collection.path}/${encodeURIComponent(id)}`, { schema: collection.schema, signal, ...options })
  };
}
