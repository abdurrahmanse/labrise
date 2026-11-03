import { InfoCard } from "@/shared/components/InfoCard";
import { ProfessorNote } from "./ProfessorNote";
import { SaveButton } from "./SaveButton";
import { StatusSelect } from "./StatusSelect";

/** Save, status and note for one professor. Stored only in this browser. */
export function ProfessorTracker({ slug }: { slug: string }) {
  return (
    <InfoCard label="Your tracker">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <SaveButton slug={slug} />
          <StatusSelect slug={slug} />
        </div>
        <ProfessorNote slug={slug} />
        <p className="text-sm text-slate-400">Saved on this device only. Export everything from the professors list.</p>
      </div>
    </InfoCard>
  );
}
