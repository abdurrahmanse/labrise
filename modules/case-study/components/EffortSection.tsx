import { effort } from "../data/effort";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function EffortSection() {
  return (
    <div className="space-y-6">
      <Subheading title="What it cost"><DataTable table={effort.costs} /></Subheading>
      <Subheading title="How long it took"><DataTable table={effort.hours} /></Subheading>
    </div>
  );
}
