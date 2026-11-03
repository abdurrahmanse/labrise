import type { SearchItem } from "./searchIndex";

export const MAX_RESULTS = 30;

/** Title matches rank above other matches; every word of the query must appear somewhere. */
export function searchEntries(index: SearchItem[], query: string): SearchItem[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const scored: { entry: SearchItem; score: number }[] = [];
  for (const entry of index) {
    if (!words.every((w) => entry.haystack.includes(w))) continue;
    const title = entry.title.toLowerCase();
    let score = 0;
    if (title === query.toLowerCase().trim()) score += 100;
    if (words.every((w) => title.includes(w))) score += 20;
    if (title.startsWith(words[0])) score += 10;
    scored.push({ entry, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, MAX_RESULTS)
    .map((s) => s.entry);
}
