import { Chips } from "@/shared/components/Chips";
import type { LabEntry } from "../../types";
import { labSlug } from "../../utils/slugs";

/** Labs, groups and communities as links to their own pages. Renders nothing for an empty list. */
export function LabList({ labs }: { labs: LabEntry[] }) {
  if (labs.length === 0) return null;
  return <Chips items={labs.map((l) => ({ href: `/directory/labs/${labSlug(l)}`, label: l.name, meta: l.kind }))} />;
}
