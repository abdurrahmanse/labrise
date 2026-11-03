const DAY = 24 * 60 * 60 * 1000;

const parseDay = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** Whole days from today to the deadline. Negative when the deadline has passed. */
export function daysUntil(iso: string, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((parseDay(iso).getTime() - today.getTime()) / DAY);
}

const monthFormat = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

/** The first day of the month `months` before an intake given as YYYY-MM. */
export function monthsBefore(intake: string, months: number) {
  const [y, m] = intake.split("-").map(Number);
  return new Date(y, m - 1 - months, 1);
}

export const formatMonth = (date: Date) => monthFormat.format(date);
