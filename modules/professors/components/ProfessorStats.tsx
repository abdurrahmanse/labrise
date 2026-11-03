import { Globe2, GraduationCap, Mail, Users } from "lucide-react";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { fieldOf } from "@/modules/directory/data/fields";
import { professors } from "@/modules/directory/data";

export function ProfessorStats() {
  const tiles = [
    { Icon: Users, label: t.stats.professors, value: professors.length },
    { Icon: Mail, label: t.stats.emails, value: professors.filter((p) => p.email).length },
    { Icon: Globe2, label: t.stats.countries, value: new Set(professors.map((p) => p.country)).size },
    { Icon: GraduationCap, label: t.stats.fields, value: new Set(professors.map((p) => fieldOf(p.group).title)).size }
  ];
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {tiles.map(({ Icon, label, value }) => (
        <div key={label} className="flex items-center gap-4 bg-canvas-card/70 p-4 backdrop-blur-xl shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-indigo-600 text-white"><Icon className="h-5 w-5" aria-hidden /></span>
          <div>
            <dd className="text-2xl font-bold text-white">{value}</dd>
            <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">{label}</dt>
          </div>
        </div>
      ))}
    </dl>
  );
}
