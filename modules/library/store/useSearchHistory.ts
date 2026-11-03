"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const LIMIT = 6;

interface SearchHistoryState {
  terms: string[];
  remember: (term: string) => void;
  clear: () => void;
}

export const useSearchHistory = create<SearchHistoryState>()(
  persist(
    (set) => ({
      terms: [],
      remember: (term) => {
        const clean = term.trim();
        if (clean.length < 2) return;
        set((s) => ({ terms: [clean, ...s.terms.filter((t) => t.toLowerCase() !== clean.toLowerCase())].slice(0, LIMIT) }));
      },
      clear: () => set({ terms: [] })
    }),
    { name: "scholarship-roadmap-searches", version: 1 }
  )
);
