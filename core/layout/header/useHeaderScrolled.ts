"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled past `offset` pixels, so the header can gain a shadow. */
export function useHeaderScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [offset]);

  return scrolled;
}
