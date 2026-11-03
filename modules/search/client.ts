/**
 * Search results for client components that need them outside the header dialog (for example a name autocomplete).
 * Kept apart from index.ts: index.ts is loaded by the header on every page, and this pulls in the API schema.
 */
export { useSearch } from "./hooks/useSearch";
export type { SearchResult } from "./api/searchSchemas";
