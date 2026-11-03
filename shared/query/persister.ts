import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import type { Query } from "@tanstack/react-query";
import { gcTimes } from "./staleTimes";

/** Bump this to drop every saved query after a data shape change. */
export const CACHE_VERSION = "v1";

/** Saves the query cache to localStorage so a returning visitor sees data instantly, even offline. */
export const createPersister = () =>
  createSyncStoragePersister({
    storage: typeof window === "undefined" ? undefined : window.localStorage,
    key: "scholarship-roadmap-query-cache",
    throttleTime: 1000
  });

export const persistOptions = {
  maxAge: gcTimes.default,
  buster: CACHE_VERSION,
  dehydrateOptions: {
    // The large lists are already bundled with the site, so only small entry and search results are stored.
    shouldDehydrateQuery: (query: Query) => query.state.status === "success" && query.queryKey[0] === "directory" && query.queryKey[1] === "entry"
  }
};
