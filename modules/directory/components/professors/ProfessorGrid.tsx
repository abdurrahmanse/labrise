import type { ProfessorEntry } from "../../types";
import { ProfessorCard } from "./ProfessorCard";
import { listText } from "@/data/text/directory";

export function ProfessorGrid({ professors }: { professors: ProfessorEntry[] }) {
  if (professors.length === 0) {
    return <p className="py-12 text-center text-slate-400">{listText.noProfessors}</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {professors.map((p) => (
        <ProfessorCard key={p.name} professor={p} />
      ))}
    </div>
  );
}
