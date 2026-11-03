"use client";

import { getTracked, useProfessorTracker } from "../../store/useProfessorTracker";

export function ProfessorNote({ slug }: { slug: string }) {
  const note = useProfessorTracker((s) => getTracked(s.entries, slug).note);
  const setNote = useProfessorTracker((s) => s.setNote);

  return (
    <textarea
      aria-label="Private note"
      value={note}
      onChange={(e) => setNote(slug, e.target.value)}
      placeholder="Private note: paper to mention, date emailed…"
      rows={3}
      className="w-full resize-y bg-white/[0.05] p-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/50"
    />
  );
}
