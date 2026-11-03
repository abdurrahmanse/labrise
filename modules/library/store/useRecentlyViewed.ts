"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { refKey, type EntryRef } from "./useBookmarks";

const LIMIT = 12;

interface RecentState {
  items: EntryRef[];
  push: (ref: EntryRef) => void;
  clear: () => void;
}

/** The last pages opened, newest first, without repeats. */
export const useRecentlyViewed = create<RecentState>()(
  persist(
    (set) => ({
      items: [],
      push: (ref) => set((s) => ({ items: [ref, ...s.items.filter((i) => refKey(i) !== refKey(ref))].slice(0, LIMIT) })),
      clear: () => set({ items: [] })
    }),
    { name: "scholarship-roadmap-recent", version: 1 }
  )
);
