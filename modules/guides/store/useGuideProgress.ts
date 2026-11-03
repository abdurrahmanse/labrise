"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GuideProgressState {
  /** Checked checklist items, grouped by guide id. */
  checked: Record<string, string[]>;
  toggle: (guideId: string, item: string) => void;
}

export const useGuideProgress = create<GuideProgressState>()(
  persist(
    (set) => ({
      checked: {},
      toggle: (guideId, item) =>
        set((state) => {
          const current = state.checked[guideId] ?? [];
          const next = current.includes(item) ? current.filter((i) => i !== item) : [...current, item];
          return { checked: { ...state.checked, [guideId]: next } };
        })
    }),
    { name: "guide-progress" }
  )
);
