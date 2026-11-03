"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProgressState {
  /** Item id -> done. Saved only in this browser. */
  done: Record<string, boolean>;
  toggle: (id: string | number) => void;
  /** Clears everything, the ids that start with a prefix, or an exact list of ids. */
  reset: (scope?: string | readonly string[]) => void;
}

/** One saved-checklist store per feature. All of them share this behaviour. */
export function createProgressStore(name: string) {
  return create<ProgressState>()(
    persist(
      (set) => ({
        done: {},
        toggle: (id) => set((s) => ({ done: { ...s.done, [String(id)]: !s.done[String(id)] } })),
        reset: (scope) =>
          set((s) => {
            if (!scope) return { done: {} };
            const drop = (key: string) => (typeof scope === "string" ? key.startsWith(scope) : scope.includes(key));
            return { done: Object.fromEntries(Object.entries(s.done).filter(([k]) => !drop(k))) };
          })
      }),
      { name, version: 1 }
    )
  );
}

export type ProgressStore = ReturnType<typeof createProgressStore>;
