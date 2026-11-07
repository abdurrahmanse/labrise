"use client";

import { inlineFieldClass } from "@/shared/ui/fieldStyles";
import { getTracked, STATUSES, useProfessorTracker, type ProfessorStatus } from "../store/useProfessorTracker";
import { trackerText } from "@/content/text/directory";

const STATUS_STYLE: Record<ProfessorStatus, string> = {
  "To contact": "text-slate-300",
  Emailed: "text-indigo-400",
  Replied: "text-emerald-400",
  "Not a fit": "text-rose-400"
};

export function StatusSelect({ slug }: { slug: string }) {
  const status = useProfessorTracker((s) => getTracked(s.entries, slug).status);
  const setStatus = useProfessorTracker((s) => s.setStatus);

  return (
    <select
      aria-label={trackerText.statusLabel}
      value={status}
      onChange={(e) => setStatus(slug, e.target.value as ProfessorStatus)}
      className={`${inlineFieldClass} cursor-pointer font-bold ${STATUS_STYLE[status]}`}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
