import { Flag } from "@/shared/components/Flag";
import { ArtRow } from "./ArtRow";

const FLAGS = ["Germany", "Japan", "Canada", "Australia", "Sweden", "Switzerland"];

export function CountriesArt() {
  return (
    <ArtRow>
      {FLAGS.map((c) => (
        <span key={c} className="rounded-full bg-canvas-card p-0.5 shadow-sm">
          <Flag country={c} className="h-7 w-10" />
        </span>
      ))}
    </ArtRow>
  );
}
