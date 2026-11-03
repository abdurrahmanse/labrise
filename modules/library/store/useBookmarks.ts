"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DirectoryType } from "@/modules/directory";

export interface EntryRef {
  type: DirectoryType;
  slug: string;
}

export const refKey = ({ type, slug }: EntryRef) => `${type}/${slug}`;

interface BookmarksState {
  items: (EntryRef & { savedAt: number })[];
  toggle: (ref: EntryRef) => void;
  clear: () => void;
}

/** Saved entries of every type. Only the type and slug are stored; the details are fetched when needed. */
export const useBookmarks = create<BookmarksState>()(
  persist(
    (set) => ({
      items: [],
      toggle: (ref) =>
        set((s) =>
          s.items.some((i) => refKey(i) === refKey(ref))
            ? { items: s.items.filter((i) => refKey(i) !== refKey(ref)) }
            : { items: [{ ...ref, savedAt: Date.now() }, ...s.items] }
        ),
      clear: () => set({ items: [] })
    }),
    { name: "scholarship-roadmap-bookmarks", version: 1 }
  )
);

export const useIsBookmarked = (ref: EntryRef) => useBookmarks((s) => s.items.some((i) => refKey(i) === refKey(ref)));
