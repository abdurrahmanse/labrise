/**
 * Public API of the search module. Other code imports from "@/modules/search", never from inner files.
 * Stays small on purpose: the header loads it on every page. The results hook is in "@/modules/search/client".
 */
export { GlobalSearch } from "./components/GlobalSearch";
export { SEARCH_KINDS } from "./types";
export type { SearchKind } from "./types";
