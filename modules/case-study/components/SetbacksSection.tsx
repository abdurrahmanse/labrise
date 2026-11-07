import { Surface } from "@/shared/components/Surface";
import { setbacks } from "../data/extras";

export function SetbacksSection() {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {setbacks.map((s) => (
        <Surface as="li" key={s.what} tone="quiet" depth="none" padding="md" className="space-y-1">
          <p className="font-bold text-white">{s.what}</p>
          <p className="font-sans text-sm text-slate-300">{s.did}</p>
        </Surface>
      ))}
    </ul>
  );
}
