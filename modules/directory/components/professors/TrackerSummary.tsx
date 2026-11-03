"use client";

import { getTracked, STATUSES, useProfessorTracker } from "../../store/useProfessorTracker";
import { professorSlug } from "../../lib/slugs";
import type { ProfessorEntry } from "../../types";
import { trackerText } from "@/data/text/directory";

/** Counts of saved professors by outreach status. */
export function TrackerSummary({ professors }: { professors: ProfessorEntry[] }) {
  const entries = useProfessorTracker((s) => s.entries);
  const saved = professors.filter((p) => getTracked(entries, professorSlug(p)).saved);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      <div className="bg-indigo-600 p-4 text-white shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
        <div className="text-3xl font-bold">{saved.length}</div>
        <div className="font-mono text-xs uppercase tracking-wider opacity-80">{trackerText.saved}</div>
      </div>
      {STATUSES.map((status) => (
        <div key={status} className="bg-canvas-card/70 p-4 shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
          <div className="text-3xl font-bold text-white">{saved.filter((p) => getTracked(entries, professorSlug(p)).status === status).length}</div>
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{status}</div>
        </div>
      ))}
    </div>
  );
}
