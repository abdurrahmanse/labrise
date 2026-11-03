"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, Rows3 } from "lucide-react";
import type { DocumentGuideline } from "@/modules/content";
import { documentMeta, documentsHubText as t } from "@/content/text/documents";
import { IconBadge } from "@/shared/components/IconBadge";
import { ProgressBar } from "@/shared/components/ProgressBar";
import { Label, Body } from "@/shared/components/Text";
import { Surface } from "@/shared/components/Surface";
import { useProgress } from "@/shared/progress/useProgress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";

export function DocumentCard({ doc }: { doc: DocumentGuideline }) {
  const { percent } = useProgress(useDocumentChecklist, doc.checklistItems.map((i) => i.id));
  const Icon = documentMeta[doc.id]?.Icon ?? ListChecks;
  const href = `/documents/${doc.id}`;

  return (
    <Surface as="article" tone="glass" depth="sm" padding="xl" interactive className="relative flex flex-col gap-3 pt-6">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 to-cyan-400" />
      <div className="flex items-center justify-between gap-3">
        <IconBadge icon={Icon} size="lg" />
        <Label tone="accent">{doc.degreeLevel}</Label>
      </div>
      <h3 className="text-xl font-bold text-white"><Link href={href} className="hover:text-indigo-300">{doc.name}</Link></h3>
      <Body className="line-clamp-3">{doc.what}</Body>
      <div className="flex flex-wrap gap-4 font-mono text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5"><Rows3 className="h-4 w-4 text-indigo-400" aria-hidden />{t.sections(doc.structure.length)}</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-indigo-400" aria-hidden />{t.checks(doc.checklistItems.length)}</span>
      </div>
      <ProgressBar percent={percent} label={doc.name} />
      <Link href={href} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-bold text-indigo-400 hover:text-indigo-200">
        {t.open} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Surface>
  );
}
