import { student } from "../data/profile";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function AcademicsSection() {
  return (
    <div className="space-y-6">
      <Subheading title="Education"><DataTable table={student.education} /></Subheading>
      <Subheading title="Test results"><DataTable table={student.tests} /></Subheading>
    </div>
  );
}
