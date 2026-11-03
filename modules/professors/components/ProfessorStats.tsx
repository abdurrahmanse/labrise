import { Globe2, GraduationCap, Mail, Users } from "lucide-react";
import { professorsHubText as t } from "@/content/text/professorsHub";
import { professors, fieldOf } from "@/modules/directory/catalog";
import { StatTiles } from "@/shared/components/StatTiles";

export function ProfessorStats() {
  return (
    <StatTiles
      items={[
        { Icon: Users, label: t.stats.professors, value: professors.length },
        { Icon: Mail, label: t.stats.emails, value: professors.filter((p) => p.email).length },
        { Icon: Globe2, label: t.stats.countries, value: new Set(professors.map((p) => p.country)).size },
        { Icon: GraduationCap, label: t.stats.fields, value: new Set(professors.map((p) => fieldOf(p.group).title)).size }
      ]}
    />
  );
}
