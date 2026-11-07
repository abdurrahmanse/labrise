"use client";

import { getTracked, useProfessorTracker } from "../store/useProfessorTracker";
import { trackerText } from "@/content/text/directory";

import { fieldClass } from "@/shared/ui/fieldStyles";

export function ProfessorNote({ slug }: { slug: string }) {
  const note = useProfessorTracker((s) => getTracked(s.entries, slug).note);
  const setNote = useProfessorTracker((s) => s.setNote);

  return (
    <textarea
      aria-label={trackerText.noteLabel}
      value={note}
      onChange={(e) => setNote(slug, e.target.value)}
      placeholder={trackerText.notePlaceholder}
      rows={3}
      className={`${fieldClass} resize-y`}
    />
  );
}
