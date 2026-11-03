/** One place for every query key, so invalidating or prefetching never relies on a typed-by-hand array. */
export const queryKeys = {
  directory: {
    all: ["directory"] as const,
    list: (type: string) => ["directory", "list", type] as const,
    entry: (type: string, slug: string) => ["directory", "entry", type, slug] as const
  },
  /** Keys for the content collections in modules/content, one family per collection name. */
  collection: (name: string) => ({
    all: ["collection", name] as const,
    list: () => ["collection", name, "list"] as const,
    item: (id: string) => ["collection", name, "item", id] as const
  }),
  scholarships: {
    all: ["scholarships"] as const,
    list: (params: object) => ["scholarships", "list", params] as const,
    infinite: (params: object) => ["scholarships", "infinite", params] as const,
    detail: (slug: string) => ["scholarships", "detail", slug] as const,
    featured: (limit: number) => ["scholarships", "featured", limit] as const
  },
  search: {
    all: ["search"] as const,
    results: (q: string) => ["search", "results", q] as const
  }
};
