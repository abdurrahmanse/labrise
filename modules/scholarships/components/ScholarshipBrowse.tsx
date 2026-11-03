"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { commonText } from "@/data/text/common";
import { finderText as t } from "@/data/text/scholarships";
import { ScholarshipCard } from "@/modules/directory";
import { DataRenderer } from "@/shared/components/DataRenderer";
import { FilterTabs } from "@/shared/components/FilterTabs";
import type { PaginatedResponse } from "@/shared/api/types";
import { scholarshipSchema } from "../schemas/scholarshipSchemas";
import { useInfiniteScholarships } from "../hooks/useInfiniteScholarships";
import type { Scholarship, ScholarshipLevel } from "../types/scholarship";

const OPTIONS = ["All", ...scholarshipSchema.shape.level.options].map((l) => ({ value: l, label: l === "All" ? t.browse.all : l }));

interface ScholarshipBrowseProps {
  /** First page rendered on the server, so search engines and first paint see real cards. */
  initialPage?: PaginatedResponse<Scholarship>;
}

/** Level tabs over a paged list. Each page comes from the scholarships API; "Load more" fetches the next one. */
export function ScholarshipBrowse({ initialPage }: ScholarshipBrowseProps = {}) {
  const [level, setLevel] = useState("All");
  const filter = level === "All" ? undefined : (level as ScholarshipLevel);
  const list = useInfiniteScholarships({ level: filter }, level === "All" ? initialPage : undefined);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FilterTabs options={OPTIONS} value={level} onChange={setLevel} label={t.browse.levelLabel} />
        <span className="font-mono text-xs text-slate-400">{t.browse.shown(list.items?.length ?? 0)}</span>
      </div>

      <DataRenderer data={list.items} isPending={list.isPending} error={list.error} onRetry={() => void list.refetch()} emptyTitle={t.browse.empty}>
        {(items) => (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((s) => (
              <ScholarshipCard key={s.name} scholarship={s} />
            ))}
          </div>
        )}
      </DataRenderer>

      {list.hasNextPage && (
        <button type="button" disabled={list.isFetchingNextPage} onClick={() => void list.fetchNextPage()} className="cursor-pointer border-2 border-white/40 px-5 py-3 text-sm font-bold uppercase tracking-wider text-slate-100 hover:border-indigo-400 hover:text-indigo-300 disabled:opacity-50">
          {commonText.states.loadMore}
        </button>
      )}

      <Link href="/directory/scholarships" className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
        {t.browse.more} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
