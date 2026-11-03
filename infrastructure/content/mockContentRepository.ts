import { collectionOf } from "@/modules/content/registry";
import type { ContentRepository } from "@/modules/content/repositories/ContentRepository";

/** Reads the bundled files in /data. Used when no backend is configured, and by the built-in /api routes. */
export const mockContentRepository: ContentRepository = {
  list: (name) => collectionOf(name).local(),
  async get(name, id) {
    const collection = collectionOf(name);
    const wanted = id.toLowerCase();
    return (await collection.local()).find((item) => collection.idOf(item).toLowerCase() === wanted) ?? null;
  }
};
