"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, Rows3 } from "lucide-react";
import type { DocumentGuideline } from "@/data/documentsData";
import { documentMeta, documentsHubText as t } from "@/data/text/documents";
import { useMounted } from "@/shared/hooks/useMounted";
import { progressOf } from "../lib/progress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";
import { ProgressBar } from "./ProgressBar";

export function DocumentCard({ doc }: { doc: DocumentGuideline }) {
  const mounted = useMounted();
  const checked = useDocumentChecklist((s) => s.checked);
  const { percent } = progressOf([doc], mounted ? checked : {});
  const Icon = documentMeta[doc.id]?.Icon ?? ListChecks;

  return (
    <article className="group relative flex flex-col gap-3 bg-canvas-card/70 p-5 pt-6 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.12)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(58,95,224,0.3)]">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400" />
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center bg-indigo-600 text-white">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">{doc.degreeLevel}</span>
      </div>
      <h3 className="text-xl font-bold text-white">
        <Link href={`/documents/${doc.id}`} className="hover:text-indigo-300">{doc.name}</Link>
      </h3>
      <p className="line-clamp-3 font-sans text-[length:var(--text-body)] font-normal text-slate-300">{doc.what}</p>
      <div className="flex flex-wrap gap-4 font-mono text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5"><Rows3 className="h-4 w-4 text-indigo-400" aria-hidden />{t.sections(doc.structure.length)}</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-indigo-400" aria-hidden />{t.checks(doc.checklistItems.length)}</span>
      </div>
      <ProgressBar percent={percent} label={doc.name} />
      <Link href={`/documents/${doc.id}`} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-bold text-indigo-400 hover:text-indigo-200">
        {t.open} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
