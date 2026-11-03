"use client";

import { useState, type KeyboardEvent } from "react";

/** Arrow-key selection through a list of `count` items; Enter picks the highlighted one. */
export function useListNavigation(count: number, onPick: (index: number) => void) {
  const [active, setActive] = useState(0);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, count - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && active < count) {
      e.preventDefault();
      onPick(active);
    }
  };

  return { active, setActive, resetActive: () => setActive(0), onKeyDown };
}
