"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OutreachProgressState {
  /** Workflow step number -> done. Stored only in this browser. */
  done: Record<number, boolean>;
  toggle: (step: number) => void;
  reset: () => void;
}

export const useOutreachProgress = create<OutreachProgressState>()(
  persist(
    (set) => ({
      done: {},
      toggle: (step) => set((s) => ({ done: { ...s.done, [step]: !s.done[step] } })),
      reset: () => set({ done: {} })
    }),
    { name: "scholarship-roadmap-outreach", version: 1 }
  )
);
