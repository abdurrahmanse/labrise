"use client";

import { useSyncExternalStore } from "react";

/** False during server render and hydration, true once the page is running in the browser. */
export function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
