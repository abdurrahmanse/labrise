import type { PaginatedResponse } from "@/shared/api/types";
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants";
import type { Scholarship } from "../types/scholarship";

/** One page of a list, with the page number clamped into range. */
export function pageOf(list: Scholarship[], page = 1, requestedSize = DEFAULT_PAGE_SIZE): PaginatedResponse<Scholarship> {
  const pageSize = Math.min(Math.max(requestedSize, 1), MAX_PAGE_SIZE);
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize));
  const current = Math.min(Math.max(page, 1), pageCount);
  return { items: list.slice((current - 1) * pageSize, current * pageSize), total: list.length, page: current, pageSize, pageCount };
}
