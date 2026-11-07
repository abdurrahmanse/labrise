import { monthsBefore } from "./dates";

export type StepState = "past" | "now" | "upcoming";

/** Where a roadmap step sits against today, for an intake given as YYYY-MM. */
export function stepState(intake: string, step: { monthsBeforeStart: number; monthsBeforeEnd: number }, now = new Date()): StepState {
  const start = monthsBefore(intake, step.monthsBeforeStart);
  const end = monthsBefore(intake, step.monthsBeforeEnd);
  const endOfEndMonth = new Date(end.getFullYear(), end.getMonth() + 1, 1);
  if (now >= endOfEndMonth) return "past";
  return now >= start ? "now" : "upcoming";
}
