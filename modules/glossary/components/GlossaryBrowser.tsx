"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen } from "lucide-react";
import { SearchInput } from "@/shared/ui/SearchInput";
import { glossaryText as t } from "@/content/text/glossary";
import { emptyText } from "@/content/text/status";
import { EmptyState } from "@/shared/components/EmptyState";
import { glossaryTerms } from "../data/terms";
import { surface } from "@/shared/components/Surface";
import { actionLinkClass } from "@/shared/components/linkStyles";

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryTerms.filter((g) => !q || `${g.term} ${g.full ?? ""} ${g.meaning}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SearchInput value={query} onChange={setQuery} placeholder={t.search} className="w-full lg:max-w-md" />
        <span className="font-mono text-xs text-slate-400">{t.count(matches.length)}</span>
      </div>

      {matches.length === 0 ? (
        <EmptyState title={emptyText.noResults} hint={t.empty} />
      ) : (
        <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {matches.map((g) => (
            <div key={g.term} className={surface({ tone: "glass", depth: "soft", padding: "lg", className: "flex flex-col gap-2" })}>
              <dt className="flex items-center gap-2 text-xl font-bold text-white">
                <BookOpen className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden />
                {g.term}
              </dt>
              {g.full && <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{g.full}</p>}
              <dd className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{g.meaning}</dd>
              {g.guide && (
                <Link href={`/guides/${g.guide}`} className={`mt-auto w-fit text-sm ${actionLinkClass}`}>
                  {t.guide} →
                </Link>
              )}
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
