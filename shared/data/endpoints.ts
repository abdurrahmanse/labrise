/**
 * Every backend path in one file. To point a dataset at your real API, change its path here.
 *
 * Contract for a collection at `path`:
 *   GET {path}        -> Item[]
 *   GET {path}/{id}   -> Item          (404 when missing)
 * Scholarships add GET {search}?q&country&level&region&sort&page&pageSize -> PaginatedResponse<Item>
 * and GET {featured}?limit -> Item[]. Directory and search have their own shapes and are listed below.
 */
export const endpoints = {
  countryGuides: "/api/content/country-guides",
  documents: "/api/content/documents",
  faqs: "/api/content/faqs",
  scholarships: {
    search: "/api/scholarships",
    featured: "/api/scholarships/featured",
    item: (slug: string) => `/api/scholarships/${encodeURIComponent(slug)}`
  },
  directory: {
    list: (type: string) => `/api/directory/${type}`,
    entry: (type: string, slug: string) => `/api/directory/${type}/${encodeURIComponent(slug)}`
  },
  search: "/api/search"
} as const;
