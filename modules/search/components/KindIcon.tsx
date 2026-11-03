import { Award, GraduationCap, Landmark, MapPin, Users, type LucideIcon } from "lucide-react";
import type { SearchKind } from "../types";

const ICONS: Record<SearchKind, LucideIcon> = {
  Country: MapPin,
  University: GraduationCap,
  Professor: Users,
  Funder: Landmark,
  Scholarship: Award
};

export function KindIcon({ kind }: { kind: SearchKind }) {
  const Icon = ICONS[kind];
  return <Icon className="h-4 w-4" aria-hidden />;
}
