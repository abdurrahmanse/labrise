"use client";

import { useMemo } from "react";
import { Trophy } from "lucide-react";
import { useDocuments, type DocumentGuideline } from "@/modules/content";
import { documentsHubText as t } from "@/data/text/documents";
import { IconBadge } from "@/shared/components/IconBadge";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";
import { surface } from "@/shared/components/Surface";

/** Overall readiness across every document. */
export function DocumentsProgress({ initialDocuments }: { initialDocuments: DocumentGuideline[] }) {
  const { data: documents } = useDocuments(initialDocuments);
  const checkIds = useMemo(() => documents.flatMap((d) => d.checklistItems.map((i) => i.id)), [documents]);
  const { done, total, percent, reset } = useProgress(useDocumentChecklist, checkIds);

  return (
    <section aria-label={t.progress.title} className={surface({ tone: "panel", depth: "md", padding: "lg", className: "space-y-3" })}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBadge icon={Trophy} size="lg" />
          <h2 className="text-xl font-bold text-white">{t.progress.title}</h2>
        </div>
        <span className="text-3xl font-bold text-white">{t.progress.percent(percent)}</span>
      </div>
      <ProgressPanel bare label={t.progress.title} summary={t.progress.done(done, total)} percent={percent} onReset={() => reset()} canReset={done > 0} note={t.progress.note} />
    </section>
  );
}
