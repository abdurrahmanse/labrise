import { BulletList } from "@/shared/components/BulletList";
import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import { choices } from "../data/choices";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function ChoiceSection() {
  return (
    <div className="space-y-6">
      <Subheading title="The criteria she used, with weights">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {choices.criteria.map((c) => (
            <Surface as="li" key={c.name} tone="quiet" depth="none" padding="md">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-bold text-white">{c.name}</p>
                <span className="font-mono text-sm font-bold text-indigo-300">{c.weight}</span>
              </div>
              <p className="font-sans text-sm text-slate-300">{c.why}</p>
            </Surface>
          ))}
        </ul>
      </Subheading>
      <Subheading title="From a long list to four supervisors">
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-4">
          {choices.funnel.map((f) => (
            <Surface as="li" key={f.stage} tone="glass" depth="sm" padding="md">
              <p className="text-3xl font-bold text-white">{f.count}</p>
              <Label>{f.stage}</Label>
              <p className="mt-1 font-sans text-sm text-slate-300">{f.rule}</p>
            </Surface>
          ))}
        </ol>
      </Subheading>
      <Subheading title="Scoring the shortlist"><DataTable table={choices.scoring} /></Subheading>
      <Subheading title="Why Germany"><BulletList items={choices.country} /></Subheading>
    </div>
  );
}
