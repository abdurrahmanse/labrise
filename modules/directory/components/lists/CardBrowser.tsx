"use client";

import { useMemo, type ReactNode } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { Pagination } from "@/shared/components/Pagination";
import { useListFilters } from "../../hooks/useListFilters";
import { filterEntries } from "../../lib/filter";
import { paginate } from "../../lib/paginate";
import type { Region } from "../../types";
import { RegionChips } from "./RegionChips";
import { commonText } from "@/data/text/common";
import { listText } from "@/data/text/directory";

interface CardBrowserProps<T> {
  data: T[];
  placeholder: string;
  keyOf: (item: T) => string;
  regionOf: (item: T) => Region | undefined;
  searchText: (item: T) => string;
  renderCard: (item: T) => ReactNode;
}

/** Search, region filter, card grid and pagination for any directory list. */
export function CardBrowser<T>({ data, placeholder, keyOf, regionOf, searchText, renderCard }: CardBrowserProps<T>) {
  const [filters, setFilters] = useListFilters();

  const matches = useMemo(
    () => filterEntries({ entries: data, region: filters.region as never, query: filters.q, regionOf, searchText }),
    [data, filters.region, filters.q, regionOf, searchText]
  );
  const { items, pages, current } = paginate(matches, filters.page);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <SearchInput value={filters.q} onChange={(q) => setFilters({ q, page: 1 })} placeholder={placeholder} className="w-full lg:max-w-md" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <RegionChips value={filters.region} onChange={(region) => setFilters({ region, page: 1 })} />
          <span className="font-mono text-xs text-slate-400">{commonText.count.shown(matches.length)}</span>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="py-12 text-center text-slate-400">{listText.noMatch}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={keyOf(item)} className="contents">
              {renderCard(item)}
            </div>
          ))}
        </div>
      )}

      <Pagination page={current} pages={pages} onChange={(page) => setFilters({ page })} />
    </div>
  );
}
