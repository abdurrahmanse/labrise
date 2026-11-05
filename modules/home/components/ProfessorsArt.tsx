import { Avatar } from "@/shared/components/Avatar";
import { ArtRow } from "./ArtRow";

const PEOPLE = ["Ada Lin", "Ben Okoye", "Carla Mendes", "Dev Rao", "Eli Novak", "Fay Tanaka"];

export function ProfessorsArt() {
  return (
    <ArtRow>
      {PEOPLE.map((n) => (
        <span key={n} className="rounded-full bg-canvas-card p-0.5 shadow-sm">
          <Avatar name={n} size={36} />
        </span>
      ))}
    </ArtRow>
  );
}
