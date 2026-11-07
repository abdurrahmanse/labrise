import { plannerText as t } from "@/content/text/planner";

/** "12 days left", "Due today" or "3 days overdue". */
export function dueLabel(days: number) {
  if (days === 0) return t.list.today;
  return days < 0 ? t.list.overdue(-days) : t.list.left(days);
}
