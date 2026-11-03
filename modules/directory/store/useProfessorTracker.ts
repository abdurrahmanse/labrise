"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const STATUSES = ["To contact", "Emailed", "Replied", "Not a fit"] as const;
export type ProfessorStatus = (typeof STATUSES)[number];

export interface TrackedProfessor {
  saved: boolean;
  status: ProfessorStatus;
  note: string;
}

const EMPTY: TrackedProfessor = { saved: false, status: "To contact", note: "" };

interface ProfessorTrackerState {
  /** Keyed by professor slug. Stored only in this browser. */
  entries: Record<string, TrackedProfessor>;
  toggleSaved: (slug: string) => void;
  setStatus: (slug: string, status: ProfessorStatus) => void;
  setNote: (slug: string, note: string) => void;
}

export const getTracked = (entries: Record<string, TrackedProfessor>, slug: string) => entries[slug] ?? EMPTY;

export const useProfessorTracker = create<ProfessorTrackerState>()(
  persist(
    (set) => {
      const update = (slug: string, patch: Partial<TrackedProfessor>) =>
        set((state) => ({ entries: { ...state.entries, [slug]: { ...getTracked(state.entries, slug), ...patch } } }));

      return {
        entries: {},
        toggleSaved: (slug) =>
          set((state) => {
            const current = getTracked(state.entries, slug);
            return { entries: { ...state.entries, [slug]: { ...current, saved: !current.saved } } };
          }),
        setStatus: (slug, status) => update(slug, { status, saved: true }),
        setNote: (slug, note) => update(slug, { note, saved: true })
      };
    },
    { name: "professor-tracker" }
  )
);
