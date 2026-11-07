import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import type { Fact } from "../types";

export function FactGrid({ facts }: { facts: Fact[] }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {facts.map((f) => (
        <Surface key={f.label} tone="glass" depth="sm" padding="md">
          <Label as="dt">{f.label}</Label>
          <dd className="font-bold text-white">{f.value}</dd>
        </Surface>
      ))}
    </dl>
  );
}
