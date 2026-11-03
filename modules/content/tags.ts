import type { CollectionName } from "./registry";

/** Cache tag for a collection. Revalidating this tag refreshes every page that read it. */
export const contentTag = (name: CollectionName) => `content:${name}`;
