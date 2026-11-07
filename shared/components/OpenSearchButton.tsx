"use client";

import { Search } from "lucide-react";
import { Button } from "@/shared/ui/Button";

export const OPEN_SEARCH_EVENT = "open-directory-search";

/** Opens the global search dialog from anywhere on the page. */
export function OpenSearchButton({ label }: { label: string }) {
  return (
    <Button variant="secondary" leftIcon={<Search className="h-4 w-4" aria-hidden />} onClick={() => window.dispatchEvent(new Event(OPEN_SEARCH_EVENT))}>
      {label}
    </Button>
  );
}
