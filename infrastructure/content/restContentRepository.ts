import { collectionOf } from "@/modules/content/registry";
import type { ContentRepository } from "@/modules/content/repositories/ContentRepository";
import { isApiError } from "@/shared/api/errors";
import { remoteRepository } from "@/shared/data/repository";

interface RestOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

/** Reads the collections from a REST backend that follows the contract in shared/data/endpoints.ts. */
export function createRestContentRepository(options: RestOptions = {}): ContentRepository {
  return {
    list: (name, signal) => remoteRepository(collectionOf(name), options).list(signal),
    async get(name, id, signal) {
      try {
        return await remoteRepository(collectionOf(name), options).get(id, signal);
      } catch (error) {
        if (isApiError(error) && error.isNotFound) return null;
        throw error;
      }
    }
  };
}
