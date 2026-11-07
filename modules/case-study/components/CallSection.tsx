import { BulletList } from "@/shared/components/BulletList";
import { call } from "../data/call";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function CallSection() {
  return (
    <div className="space-y-6">
      <Subheading title="How she prepared"><BulletList items={call.prepare} /></Subheading>
      <Subheading title="The 30-minute call"><DataTable table={call.agenda} /></Subheading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Subheading title="Questions she asked"><BulletList items={call.questions} /></Subheading>
        <Subheading title="Afterwards"><BulletList items={call.afterwards} /></Subheading>
      </div>
    </div>
  );
}
