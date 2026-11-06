import { scholarshipSlug } from "../utils/slugs";
import type { ScholarshipEntry } from "../types";
import { Flag } from "@/shared/components/Flag";
import { CardFact, CardShell } from "./CardShell";
import { cardText } from "@/content/text/directory";

export function ScholarshipCard({ scholarship }: { scholarship: ScholarshipEntry }) {
  return (
    <CardShell href={`/directory/scholarships/${scholarshipSlug(scholarship)}`} eyebrow={`${scholarship.host} · ${scholarship.level}`} title={scholarship.name} media={<Flag country={scholarship.host} className="h-8 w-12" />}>
      <p>{scholarship.covers}</p>
      <CardFact label={cardText.scholarship.deadline} value={scholarship.deadline} />
    </CardShell>
  );
}
