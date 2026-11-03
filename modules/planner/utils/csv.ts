import { plannerText } from "@/content/text/planner";
import type { PlannedApplication } from "../store/usePlanner";

const cell = (value: string) => `"${value.replace(/"/g, '""')}"`;

export function applicationsToCsv(items: PlannedApplication[]) {
  const rows = items.map((a) => [a.name, plannerText.form.kinds[a.kind], a.deadline, plannerText.statuses[a.status], a.note]);
  return [plannerText.list.csvHeader as readonly string[], ...rows].map((r) => r.map(cell).join(",")).join("\n");
}
