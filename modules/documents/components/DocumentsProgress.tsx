"use client";

import { Trophy } from "lucide-react";
import { documentsData } from "@/data/documentsData";
import { documentsHubText as t } from "@/data/text/documents";
import { IconBadge } from "@/shared/components/IconBadge";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";
import { surface } from "@/shared/components/Surface";

export const ALL_CHECK_IDS = documentsData.flatMap((d) => d.checklistItems.map((i) => i.id));

/** Overall readiness across every document. */
export function DocumentsProgress() {
  const { done, total, percent, reset } = useProgress(useDocumentChecklist, ALL_CHECK_IDS);

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
