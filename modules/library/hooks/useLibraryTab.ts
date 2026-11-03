"use client";

import { useState } from "react";
import { useBookmarks, type EntryRef } from "../store/useBookmarks";
import { useRecentlyViewed } from "../store/useRecentlyViewed";

export type LibraryTab = "saved" | "recent";

/** Which list is shown (saved or recently viewed), its entries, and how to clear it. */
export function useLibraryTab() {
  const [tab, setTab] = useState<LibraryTab>("saved");
  const saved = useBookmarks((s) => s.items);
  const clearSaved = useBookmarks((s) => s.clear);
  const recent = useRecentlyViewed((s) => s.items);
  const clearRecent = useRecentlyViewed((s) => s.clear);

  const refs: EntryRef[] = tab === "saved" ? saved.map(({ type, slug }) => ({ type, slug })) : recent;
  return { tab, setTab, refs, clear: tab === "saved" ? clearSaved : clearRecent };
}
