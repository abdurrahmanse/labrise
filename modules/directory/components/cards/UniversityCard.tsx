import { universitySlug } from "../../lib/slugs";
import type { UniversityEntry } from "../../types";
import { Avatar } from "@/shared/components/Avatar";
import { Flag } from "../Flag";
import { CardFact, CardShell } from "./CardShell";

export function UniversityCard({ university }: { university: UniversityEntry }) {
  return (
    <CardShell href={`/directory/universities/${universitySlug(university)}`} eyebrow={`${university.country} · ${university.region}`} title={university.name}
      media={
        <span className="flex items-center gap-2">
          <Avatar name={university.name.replace(/^(University of|The) /, "")} size={36} square />
          <Flag country={university.country} />
        </span>
      }
    >
      <CardFact label="Funding" value={university.funding} />
      <CardFact label="Deadline" value={university.deadline} />
    </CardShell>
  );
}
