import type { EntryResult } from "@/modules/directory/contracts";
import type { EntryView } from "../types";

/** Title, one line of context and the page link for any entry type. */
export function describeEntry(r: EntryResult): EntryView {
  const href = `/directory/${r.type}/${r.slug}`;
  switch (r.type) {
    case "countries":
      return { title: r.entry.country, subtitle: r.entry.region, href };
    case "universities":
      return { title: r.entry.name, subtitle: r.entry.country, href };
    case "professors":
      return { title: r.entry.name, subtitle: `${r.entry.university}, ${r.entry.country}`, href };
    case "scholarships":
      return { title: r.entry.name, subtitle: `${r.entry.host} · ${r.entry.level}`, href };
    case "providers":
      return { title: r.entry.name, subtitle: `${r.entry.country} · ${r.entry.kind}`, href };
  }
}
