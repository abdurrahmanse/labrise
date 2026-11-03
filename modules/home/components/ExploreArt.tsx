import { Avatar } from "@/shared/components/Avatar";
import { Flag } from "@/modules/directory/components/Flag";

const FLAGS = ["Germany", "Japan", "Canada", "Australia", "Sweden", "Switzerland"];
const SCHOOLS = ["ETH Zurich", "KTH", "TU Delft", "Toronto", "Tokyo", "Oxford"];
const PEOPLE = ["Andreas Geiger", "Fei-Fei Li", "Yoshua Bengio", "Cordelia Schmid", "Tom Mitchell", "Mirella Lapata"];

/** Overlapping row of small images that hints at what a card contains. */
function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex -space-x-2">{children}</div>;
}

export function CountriesArt() {
  return (
    <Row>
      {FLAGS.map((c) => (
        <span key={c} className="rounded-full bg-canvas-card p-0.5 shadow-sm">
          <Flag country={c} className="h-7 w-10" />
        </span>
      ))}
    </Row>
  );
}

export function UniversitiesArt() {
  return (
    <Row>
      {SCHOOLS.map((n) => (
        <span key={n} className="bg-canvas-card p-0.5 shadow-sm">
          <Avatar name={n} size={36} square />
        </span>
      ))}
    </Row>
  );
}

export function ProfessorsArt() {
  return (
    <Row>
      {PEOPLE.map((n) => (
        <span key={n} className="rounded-full bg-canvas-card p-0.5 shadow-sm">
          <Avatar name={n} size={36} />
        </span>
      ))}
    </Row>
  );
}
