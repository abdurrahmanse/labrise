import { universitySlug } from "../../utils/slugs";
import type { UniversityEntry } from "../../types";
import { Avatar } from "@/shared/components/Avatar";
import { Flag } from "@/shared/components/Flag";
import { CardFact, CardShell } from "./CardShell";
import { cardText } from "@/content/text/directory";

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
      <CardFact label={cardText.university.funding} value={university.funding} />
      <CardFact label={cardText.university.deadline} value={university.deadline} />
    </CardShell>
  );
}
