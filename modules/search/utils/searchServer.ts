import "server-only";
import { searchEntries } from "./searchEntries";
import type { SearchKind, SearchPage } from "../types";
import { buildSearchIndex, type SearchItem } from "./searchIndex";

export const PAGE_SIZE = 10;
const MAX_TOTAL = 200;

// The index is built once per server instance, not per request.
let index: SearchItem[] | null = null;
const getIndex = () => (index ??= buildSearchIndex());

export function runSearch(query: string, page: number, kinds?: SearchKind[]): SearchPage {
  const all = searchEntries(getIndex(), query, MAX_TOTAL).filter((i) => !kinds || kinds.includes(i.kind));
  const start = (page - 1) * PAGE_SIZE;
  const items = all.slice(start, start + PAGE_SIZE).map(({ kind, title, subtitle, href }) => ({ kind, title, subtitle, href }));
  return { query, total: all.length, items, nextPage: start + PAGE_SIZE < all.length ? page + 1 : null };
}
