import type { ProfessorEntry } from "../types";
import { ProfessorCard } from "./ProfessorCard";
import { listText } from "@/content/text/directory";
import { EmptyState } from "@/shared/components/EmptyState";
import { emptyText } from "@/content/text/status";

export function ProfessorGrid({ professors }: { professors: ProfessorEntry[] }) {
  if (professors.length === 0) {
    return <EmptyState title={emptyText.noResults} hint={listText.noProfessors} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {professors.map((p) => (
        <ProfessorCard key={p.name} professor={p} />
      ))}
    </div>
  );
}
