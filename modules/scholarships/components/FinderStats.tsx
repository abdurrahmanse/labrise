import { Award, Globe2, Landmark, Layers } from "lucide-react";
import { finderText as t } from "@/data/text/scholarships";
import { providers, scholarships } from "@/modules/directory/data";

export function FinderStats() {
  const tiles = [
    { Icon: Award, label: t.stats.scholarships, value: scholarships.length },
    { Icon: Landmark, label: t.stats.providers, value: providers.length },
    { Icon: Globe2, label: t.stats.hosts, value: new Set(scholarships.map((s) => s.host)).size },
    { Icon: Layers, label: t.stats.levels, value: new Set(scholarships.map((s) => s.level)).size }
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
