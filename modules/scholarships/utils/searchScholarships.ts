import type { PaginatedResponse } from "@/shared/api/types";
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants";
import type { Scholarship } from "../types/scholarship";
import type { ScholarshipSearchParams, ScholarshipSort } from "../types/search";

const haystack = (s: Scholarship) => `${s.name} ${s.host} ${s.level} ${s.covers} ${s.eligibility}`.toLowerCase();

const sortKey: Record<ScholarshipSort, (s: Scholarship) => string> = {
  name: (s) => s.name,
  country: (s) => s.host,
  level: (s) => s.level
};

export function matchesFilters(s: Scholarship, { q, country, level, region }: ScholarshipSearchParams) {
  const text = q?.trim().toLowerCase();
  return (
    (!country || s.host === country) &&
    (!level || s.level === level) &&
    (!region || s.region === region) &&
    (!text || haystack(s).includes(text))
  );
}

export const filterScholarships = (all: Scholarship[], params: ScholarshipSearchParams) => all.filter((s) => matchesFilters(s, params));

/** Returns a sorted copy; without a sort the order is kept. */
export function sortScholarships(list: Scholarship[], sort?: ScholarshipSort) {
  if (!sort) return list;
  return [...list].sort((a, b) => sortKey[sort](a).localeCompare(sortKey[sort](b)));
}

/** One page of a list, with the page number clamped into range. */
export function pageOf(list: Scholarship[], page = 1, requestedSize = DEFAULT_PAGE_SIZE): PaginatedResponse<Scholarship> {
  const pageSize = Math.min(Math.max(requestedSize, 1), MAX_PAGE_SIZE);
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize));
  const current = Math.min(Math.max(page, 1), pageCount);
  return { items: list.slice((current - 1) * pageSize, current * pageSize), total: list.length, page: current, pageSize, pageCount };
}

/** Filter, then sort, then page. The mock repository uses it; a database does the same work in SQL. */
export const searchScholarships = (all: Scholarship[], params: ScholarshipSearchParams) =>
  pageOf(sortScholarships(filterScholarships(all, params), params.sort), params.page, params.pageSize);
