import type { SearchResponseDto, SearchResultDto } from "../dto/searchDto";
import type { SearchPage, SearchResult } from "../types";

const toSearchResult = (dto: SearchResultDto): SearchResult => ({ kind: dto.kind, title: dto.title, subtitle: dto.subtitle, href: dto.href });
const toSearchResultDto = (result: SearchResult): SearchResultDto => ({ kind: result.kind, title: result.title, subtitle: result.subtitle, href: result.href });

export const toSearchPage = (dto: SearchResponseDto): SearchPage => ({
  query: dto.query,
  total: dto.total,
  items: dto.items.map(toSearchResult),
  nextPage: dto.nextPage
});

/** Used by the built-in /api/search route so it sends what a real backend would. */
export const toSearchResponseDto = (page: SearchPage): SearchResponseDto => ({
  query: page.query,
  total: page.total,
  items: page.items.map(toSearchResultDto),
  nextPage: page.nextPage
});
