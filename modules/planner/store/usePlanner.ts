"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const STATUS_KEYS = ["planning", "preparing", "submitted", "offer", "rejected"] as const;
export type ApplicationStatus = (typeof STATUS_KEYS)[number];
export type ApplicationKind = "university" | "scholarship" | "other";

export interface PlannedApplication {
  id: string;
  name: string;
  kind: ApplicationKind;
  /** YYYY-MM-DD */
  deadline: string;
  status: ApplicationStatus;
  note: string;
  /** Directory page, when the name matched an entry. */
  href?: string;
}

interface PlannerState {
  /** YYYY-MM, the month the student wants to start. */
  intake: string;
  applications: PlannedApplication[];
  setIntake: (intake: string) => void;
  add: (item: Omit<PlannedApplication, "id" | "status" | "note">) => void;
  update: (id: string, patch: Partial<Pick<PlannedApplication, "status" | "note">>) => void;
  remove: (id: string) => void;
}

/** Stored only in this browser. */
export const usePlanner = create<PlannerState>()(
  persist(
    (set) => ({
      intake: "",
      applications: [],
      setIntake: (intake) => set({ intake }),
      add: (item) =>
        set((s) => ({ applications: [...s.applications, { ...item, id: crypto.randomUUID(), status: "planning", note: "" }] })),
      update: (id, patch) => set((s) => ({ applications: s.applications.map((a) => (a.id === id ? { ...a, ...patch } : a)) })),
      remove: (id) => set((s) => ({ applications: s.applications.filter((a) => a.id !== id) }))
    }),
    { name: "scholarship-roadmap-planner" }
  )
);
