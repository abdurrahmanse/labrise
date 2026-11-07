"use client";

import { scholarshipDetailText as t } from "@/content/text/scholarships";
import { stepKey, stepKeys, useApplyProgress } from "@/modules/apply";
import Link from "next/link";
import { CheckRow } from "@/shared/components/CheckRow";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { useProgress } from "@/shared/progress/useProgress";
import { guideForStep } from "../utils/documentGuides";

/** A checklist for one scholarship. It reuses the apply-progress store with a key per scholarship. */
export function ScholarshipChecklist({ slug, items }: { slug: string; items: string[] }) {
  const track = `scholarship-${slug}`;
  const { isDone, toggle, done, total, percent, reset } = useProgress(useApplyProgress, stepKeys(track, items.length));

  return (
    <div className="space-y-4">
      <ProgressPanel bare label={t.checklist.title} summary={t.checklist.progress(done, total)} percent={percent} onReset={() => reset()} canReset={done > 0} note={t.checklist.saved} />
      <ul className="space-y-2">
        {items.map((text, i) => {
          const guide = guideForStep(text);
          return (
            <li key={text}>
              <CheckRow checked={isDone(stepKey(track, i))} onChange={() => toggle(stepKey(track, i))} label={text}>{text}</CheckRow>
              {guide && <Link href={guide} className={`${inlineLinkClass} ml-3 inline-block py-1 font-sans text-sm`}>{t.checklist.howTo}</Link>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
