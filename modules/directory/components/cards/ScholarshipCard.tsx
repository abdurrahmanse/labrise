import { scholarshipSlug } from "../../lib/slugs";
import type { ScholarshipEntry } from "../../types";
import { CardFact, CardShell } from "./CardShell";

export function ScholarshipCard({ scholarship }: { scholarship: ScholarshipEntry }) {
  return (
    <CardShell href={`/directory/scholarships/${scholarshipSlug(scholarship)}`} eyebrow={`${scholarship.host} · ${scholarship.level}`} title={scholarship.name}>
      <p>{scholarship.covers}</p>
      <CardFact label="Deadline" value={scholarship.deadline} />
    </CardShell>
  );
}
