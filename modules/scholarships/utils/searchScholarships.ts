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

/** Filters, sorts and pages a list. The mock repository uses it; a database does the same work in SQL. */
export function searchScholarships(all: Scholarship[], params: ScholarshipSearchParams): PaginatedResponse<Scholarship> {
  const pageSize = Math.min(Math.max(params.pageSize ?? DEFAULT_PAGE_SIZE, 1), MAX_PAGE_SIZE);
  const matches = all.filter((s) => matchesFilters(s, params));
  if (params.sort) matches.sort((a, b) => sortKey[params.sort!](a).localeCompare(sortKey[params.sort!](b)));

  const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
  const page = Math.min(Math.max(params.page ?? 1, 1), pageCount);
  return { items: matches.slice((page - 1) * pageSize, page * pageSize), total: matches.length, page, pageSize, pageCount };
}
