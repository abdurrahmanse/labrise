import { BulletList } from "@/shared/components/BulletList";
import { research } from "../data/research";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function ResearchSection() {
  return (
    <div className="space-y-6">
      <Subheading title="Her research interests"><BulletList items={research.interests} /></Subheading>
      <Subheading title="How she matched research"><BulletList items={research.matching} /></Subheading>
      <Subheading title="Profile fit check: what the lab needs against what she has"><DataTable table={research.fit} /></Subheading>
    </div>
  );
}
