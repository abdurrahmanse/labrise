"use client";

import { useState } from "react";
import { documentsData } from "@/data/documentsData";
import { documentsHubText as t } from "@/data/text/documents";
import { EmptyState } from "@/shared/components/EmptyState";
import { FilterTabs } from "@/shared/components/FilterTabs";
import { DocumentCard } from "./DocumentCard";

const LEVELS = ["All", ...Array.from(new Set(documentsData.map((d) => d.degreeLevel)))];
const OPTIONS = LEVELS.map((l) => ({ value: l, label: l === "All" ? t.filterAll : l }));

export function DocumentsHub() {
  const [level, setLevel] = useState("All");
  const docs = documentsData.filter((d) => level === "All" || d.degreeLevel === level);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FilterTabs options={OPTIONS} value={level} onChange={setLevel} label={t.filterLabel} />
        <span className="font-mono text-xs text-slate-400">{t.count(docs.length)}</span>
      </div>
      {docs.length === 0 ? (
        <EmptyState title={t.empty} />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
