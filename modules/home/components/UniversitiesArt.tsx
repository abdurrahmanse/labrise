import { Avatar } from "@/shared/components/Avatar";
import { ArtRow } from "./ArtRow";

const SCHOOLS = ["North", "South", "East", "West", "Central", "Coast"];

export function UniversitiesArt() {
  return (
    <ArtRow>
      {SCHOOLS.map((n) => (
        <span key={n} className="bg-canvas-card p-0.5 shadow-sm">
          <Avatar name={n} size={36} square />
        </span>
      ))}
    </ArtRow>
  );
}
