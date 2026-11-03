import { LiveDirectory } from "../LiveDirectory";
import type { ProfessorEntry } from "../../types";
import { ProfessorsBrowser } from "./ProfessorsBrowser";

export function ProfessorsExplorer({ initialData }: { initialData: ProfessorEntry[] }) {
  return (
    <LiveDirectory type="professors" initialData={initialData}>
      {(data) => <ProfessorsBrowser data={data} />}
    </LiveDirectory>
  );
}
