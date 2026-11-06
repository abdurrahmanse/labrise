"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { finderText as t } from "@/content/text/scholarships";
import type { PaginatedResponse } from "@/shared/api/types";
import { DataRenderer } from "@/shared/components/DataRenderer";
import { LoadMoreButton } from "@/shared/components/LoadMoreButton";
import { useInfiniteScholarships } from "../hooks/useInfiniteScholarships";
import type { Scholarship } from "../types/scholarship";
import { ALL_LEVELS, LevelFilter, type LevelSelection } from "../filters/LevelFilter";
import { ScholarshipGrid } from "./ScholarshipGrid";

interface ScholarshipBrowseProps {
  /** First page rendered on the server, so search engines and first paint see real cards. */
  initialPage?: PaginatedResponse<Scholarship>;
}

/** Level tabs over a paged list. Each page comes from the scholarships API; "Load more" fetches the next one. */
export function ScholarshipBrowse({ initialPage }: ScholarshipBrowseProps = {}) {
  const [level, setLevel] = useState<LevelSelection>(ALL_LEVELS);
  const isAll = level === ALL_LEVELS;
  const list = useInfiniteScholarships({ level: isAll ? undefined : level }, isAll ? initialPage : undefined);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <LevelFilter value={level} onChange={setLevel} />
        <span className="font-mono text-xs text-slate-400">{t.browse.shown(list.items?.length ?? 0)}</span>
      </div>

      <DataRenderer data={list.items} isPending={list.isPending} error={list.error} onRetry={() => void list.refetch()} emptyTitle={t.browse.empty}>
        {(items) => <ScholarshipGrid items={items} />}
      </DataRenderer>

      {list.hasNextPage && <LoadMoreButton disabled={list.isFetchingNextPage} onClick={() => void list.fetchNextPage()} />}

      <Link href="/directory/scholarships" className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
        {t.browse.more} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
