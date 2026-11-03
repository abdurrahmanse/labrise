import { InfoCard } from "@/shared/components/InfoCard";
import { ProfessorNote } from "./ProfessorNote";
import { SaveButton } from "./SaveButton";
import { StatusSelect } from "./StatusSelect";
import { trackerText } from "@/content/text/directory";

/** Save, status and note for one professor. Stored only in this browser. */
export function ProfessorTracker({ slug }: { slug: string }) {
  return (
    <InfoCard label={trackerText.title}>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <SaveButton slug={slug} />
          <StatusSelect slug={slug} />
        </div>
        <ProfessorNote slug={slug} />
        <p className="text-sm text-slate-400">{trackerText.savedHint}</p>
      </div>
    </InfoCard>
  );
}
