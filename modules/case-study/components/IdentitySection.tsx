import { PassportSpecimen } from "./PassportSpecimen";
import { Subheading } from "./Subheading";
import { DataTable } from "./DataTable";
import { student } from "../data/profile";

export function IdentitySection() {
  return (
    <div className="space-y-6">
      <PassportSpecimen />
      <Subheading title="Documents"><DataTable table={student.documents} /></Subheading>
    </div>
  );
}
