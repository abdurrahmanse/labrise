import { Award, Globe2, Landmark, Layers } from "lucide-react";
import { finderText as t } from "@/data/text/scholarships";
import { providers, scholarships } from "@/modules/directory/catalog";
import { StatTiles } from "@/shared/components/StatTiles";

export function FinderStats() {
  return (
    <StatTiles
      items={[
        { Icon: Award, label: t.stats.scholarships, value: scholarships.length },
        { Icon: Landmark, label: t.stats.providers, value: providers.length },
        { Icon: Globe2, label: t.stats.hosts, value: new Set(scholarships.map((s) => s.host)).size },
        { Icon: Layers, label: t.stats.levels, value: new Set(scholarships.map((s) => s.level)).size }
      ]}
    />
  );
}
