"use client";

import { useMounted } from "../hooks/useMounted";
import { percentOf } from "../utils/percent";
import type { ProgressStore } from "./createProgressStore";

/**
 * Progress for a list of item ids from a saved store. Before the page is running in the browser,
 * nothing counts as done, so the server and the first client render match.
 */
export function useProgress(store: ProgressStore, ids: readonly (string | number)[]) {
  const mounted = useMounted();
  const saved = store((s) => s.done);
  const toggle = store((s) => s.toggle);
  const reset = store((s) => s.reset);

  const state = mounted ? saved : {};
  const keys = ids.map(String);
  const done = keys.filter((k) => state[k]).length;
  const total = keys.length;

  return {
    isDone: (id: string | number) => !!state[String(id)],
    toggle,
    /** Clears these ids only, or everything in the store when called with no ids and `all` is true. */
    reset: (all = false) => reset(all ? undefined : keys),
    done,
    total,
    percent: percentOf(done, total)
  };
}
