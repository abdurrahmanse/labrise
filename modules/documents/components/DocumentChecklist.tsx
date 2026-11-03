"use client";

import type { DocumentGuideline } from "@/data/documentsData";
import { documentDetailText as t } from "@/data/text/documents";
import { CheckRow } from "@/shared/components/CheckRow";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { useDocumentChecklist } from "../store/useDocumentChecklist";

/** The checklist for one document. Ticks are saved in this browser. */
export function DocumentChecklist({ doc }: { doc: DocumentGuideline }) {
  const ids = doc.checklistItems.map((i) => i.id);
  const { isDone, toggle, done, total, percent, reset } = useProgress(useDocumentChecklist, ids);

  return (
    <div className="space-y-4">
      <ProgressPanel bare label={doc.name} summary={t.progress(done, total)} percent={percent} onReset={() => reset()} canReset={done > 0} />
      <ul className="space-y-2">
        {doc.checklistItems.map((item) => (
          <li key={item.id}>
            <CheckRow checked={isDone(item.id)} onChange={() => toggle(item.id)} label={item.label} hint={item.tip}>{item.label}</CheckRow>
          </li>
        ))}
      </ul>
    </div>
  );
}
