"use client";

import { useEffect } from "react";
import { OPEN_SEARCH_EVENT } from "@/shared/components/OpenSearchButton";

/** Calls `onOpen` for Ctrl/Cmd+K and for the open event other buttons on the page dispatch. */
export function useSearchShortcut(onOpen: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_SEARCH_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_SEARCH_EVENT, onOpen);
    };
  }, [onOpen]);
}
