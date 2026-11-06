"use client";

import { Star } from "lucide-react";
import { getTracked, useProfessorTracker } from "../store/useProfessorTracker";
import { trackerText } from "@/content/text/directory";

export function SaveButton({ slug }: { slug: string }) {
  const saved = useProfessorTracker((s) => getTracked(s.entries, slug).saved);
  const toggle = useProfessorTracker((s) => s.toggleSaved);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={saved}
      aria-label={saved ? trackerText.unsave : trackerText.save}
      className={`flex h-9 w-9 shrink-0 items-center justify-center cursor-pointer transition-colors ${saved ? "bg-cyan-400/20 text-cyan-400" : "bg-white/[0.05] text-slate-400 hover:text-slate-100"}`}
    >
      <Star className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
    </button>
  );
}
