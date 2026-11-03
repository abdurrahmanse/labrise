import type { DirectoryType } from "@/modules/directory/types";

/** One place for every query key, so invalidating or prefetching never relies on a typed-by-hand array. */
export const queryKeys = {
  directory: {
    all: ["directory"] as const,
    list: (type: DirectoryType) => ["directory", "list", type] as const,
    entry: (type: DirectoryType, slug: string) => ["directory", "entry", type, slug] as const
  },
  search: {
    all: ["search"] as const,
    results: (q: string) => ["search", "results", q] as const
  }
};
