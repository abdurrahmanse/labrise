import type { DocumentGuideline } from "@/data/documentsData";

export interface Progress {
  done: number;
  total: number;
  percent: number;
}

export function progressOf(docs: DocumentGuideline[], checked: Record<string, boolean>): Progress {
  const ids = docs.flatMap((d) => d.checklistItems.map((i) => i.id));
  const done = ids.filter((id) => checked[id]).length;
  return { done, total: ids.length, percent: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}
