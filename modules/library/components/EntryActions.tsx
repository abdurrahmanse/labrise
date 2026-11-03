"use client";

import { useEffect } from "react";
import { useRecentlyViewed } from "../store/useRecentlyViewed";
import type { EntryRef } from "../store/useBookmarks";
import { BookmarkButton } from "./BookmarkButton";

/** Save button for a detail page. Opening the page also adds it to the recently viewed list. */
export function EntryActions({ type, slug }: EntryRef) {
  const push = useRecentlyViewed((s) => s.push);
  useEffect(() => push({ type, slug }), [push, type, slug]);
  return <BookmarkButton type={type} slug={slug} />;
}
