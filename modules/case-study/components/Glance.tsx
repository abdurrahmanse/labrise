import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import { glance } from "../data/extras";

/** The whole result in six numbers, above everything else. */
export function Glance() {
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
      {glance.map((g) => (
        <Surface key={g.label} tone="glass" depth="sm" padding="md">
          <dd className="text-2xl font-bold text-white">{g.value}</dd>
          <Label as="dt">{g.label}</Label>
        </Surface>
      ))}
    </dl>
  );
}
