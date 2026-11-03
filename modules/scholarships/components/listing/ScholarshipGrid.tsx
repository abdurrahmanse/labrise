import { ScholarshipCard } from "@/modules/directory/cards";
import type { Scholarship } from "../../types/scholarship";

/** Responsive grid of scholarship cards. */
export function ScholarshipGrid({ items }: { items: Scholarship[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((s) => (
        <ScholarshipCard key={s.name} scholarship={s} />
      ))}
    </div>
  );
}
