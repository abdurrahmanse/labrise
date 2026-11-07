import { daysUntil } from "./dates";
import type { PlannedApplication } from "../store/usePlanner";

export const SOON_DAYS = 14;

export type Urgency = "closed" | "overdue" | "soon" | "later";

/** Applications that are no longer waiting on the student. */
export const isClosed = (a: Pick<PlannedApplication, "status">) => a.status === "submitted" || a.status === "offer" || a.status === "rejected";

export function urgencyOf(a: Pick<PlannedApplication, "status" | "deadline">, now = new Date()): Urgency {
  if (isClosed(a)) return "closed";
  const days = daysUntil(a.deadline, now);
  if (days < 0) return "overdue";
  return days <= SOON_DAYS ? "soon" : "later";
}

export interface PlannerNumbers {
  total: number;
  overdue: number;
  soon: number;
  submitted: number;
  offers: number;
  next?: PlannedApplication;
}

/** The numbers shown at the top of the planner. */
export function plannerNumbers(items: PlannedApplication[], now = new Date()): PlannerNumbers {
  const upcoming = items
    .filter((a) => !isClosed(a) && daysUntil(a.deadline, now) >= 0)
    .sort((a, b) => a.deadline.localeCompare(b.deadline));
  const count = (u: Urgency) => items.filter((a) => urgencyOf(a, now) === u).length;
  return {
    total: items.length,
    overdue: count("overdue"),
    soon: count("soon"),
    submitted: items.filter((a) => a.status === "submitted").length,
    offers: items.filter((a) => a.status === "offer").length,
    next: upcoming[0]
  };
}

export type PlannerFilter = "all" | "open" | "submitted" | "offer" | "rejected";

export const matchesFilter = (a: Pick<PlannedApplication, "status">, filter: PlannerFilter) => {
  if (filter === "all") return true;
  if (filter === "open") return !isClosed(a);
  return a.status === filter;
};
