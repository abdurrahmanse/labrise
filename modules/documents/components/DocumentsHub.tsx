"use client";

import { useState } from "react";
import { documentsData, type DocumentGuideline } from "@/data/documentsData";
import { documentsHubText as t } from "@/data/text/documents";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/shared/components/EmptyState";
import { DocumentCard } from "./DocumentCard";

const LEVELS = ["All", ...Array.from(new Set(documentsData.map((d) => d.degreeLevel)))] as const;

export function DocumentsHub() {
  const [level, setLevel] = useState<string>("All");
  const docs: DocumentGuideline[] = documentsData.filter((d) => level === "All" || d.degreeLevel === level);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={level === l}
              onClick={() => setLevel(l)}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors",
                level === l ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"
              )}
            >
              {l === "All" ? t.filterAll : l}
            </button>
          ))}
        </div>
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
