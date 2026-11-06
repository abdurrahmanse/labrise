import type { LabEntry } from "../../types";
import { labSlug } from "../../utils/slugs";
import { Flag } from "@/shared/components/Flag";
import { CardFact, CardShell } from "./CardShell";
import { cardText } from "@/content/text/directory";

export function LabCard({ lab }: { lab: LabEntry }) {
  return (
    <CardShell
      href={`/directory/labs/${labSlug(lab)}`}
      eyebrow={`${lab.country} · ${lab.kind}`}
      title={lab.name}
      media={<Flag country={lab.country} className="h-8 w-12" />}
    >
      {lab.university && <CardFact label={cardText.lab.university} value={lab.university} />}
      <CardFact label={cardText.lab.focus} value={lab.focus} />
      <CardFact label={cardText.lab.offers} value={lab.offers} />
    </CardShell>
  );
}
