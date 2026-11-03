"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DocumentChecklistState {
  /** Checklist item id -> checked. Stored only in this browser. */
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  reset: () => void;
}

export const useDocumentChecklist = create<DocumentChecklistState>()(
  persist(
    (set) => ({
      checked: {},
      toggle: (id) => set((s) => ({ checked: { ...s.checked, [id]: !s.checked[id] } })),
      reset: () => set({ checked: {} })
    }),
    { name: "scholarship-roadmap-documents" }
  )
);
