import { universitySlug } from "../../lib/slugs";
import type { UniversityEntry } from "../../types";
import { CardFact, CardShell } from "./CardShell";

export function UniversityCard({ university }: { university: UniversityEntry }) {
  return (
    <CardShell href={`/directory/universities/${universitySlug(university)}`} eyebrow={`${university.country} · ${university.region}`} title={university.name}>
      <CardFact label="Funding" value={university.funding} />
      <CardFact label="Deadline" value={university.deadline} />
    </CardShell>
  );
}
