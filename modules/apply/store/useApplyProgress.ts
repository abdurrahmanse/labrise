"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApplyProgressState {
  /** "track:stepIndex" -> done. Stored only in this browser. */
  done: Record<string, boolean>;
  toggle: (track: string, index: number) => void;
  reset: (track: string) => void;
}

export const stepKey = (track: string, index: number) => `${track}:${index}`;

export const useApplyProgress = create<ApplyProgressState>()(
  persist(
    (set) => ({
      done: {},
      toggle: (track, index) => set((s) => ({ done: { ...s.done, [stepKey(track, index)]: !s.done[stepKey(track, index)] } })),
      reset: (track) => set((s) => ({ done: Object.fromEntries(Object.entries(s.done).filter(([k]) => !k.startsWith(`${track}:`))) }))
    }),
    { name: "scholarship-roadmap-apply", version: 1 }
  )
);

export function countDone(done: Record<string, boolean>, track: string, total: number) {
  let n = 0;
  for (let i = 0; i < total; i++) if (done[stepKey(track, i)]) n++;
  return { done: n, percent: total ? Math.round((n / total) * 100) : 0 };
}
