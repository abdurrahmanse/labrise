import { Surface } from "@/shared/components/Surface";
import { journey } from "../data/journey";
import { scholarship } from "../data/scholarship";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

/** The funding she secured and, as a second layer, the scholarship application step by step. */
export function FundingSection() {
  return (
    <div className="space-y-6">
      <Subheading title="Where the 100% came from"><DataTable table={journey.funding} /></Subheading>
      <Subheading title="Why she also applied for a scholarship"><p className="font-sans text-slate-200">{scholarship.why}</p></Subheading>
      <Subheading title="The scholarship application, step by step">
        <ol className="space-y-3">
          {scholarship.steps.map((s, i) => (
            <Surface as="li" key={s.title} tone="quiet" depth="none" padding="md" className="flex gap-3">
              <span className="font-mono text-lg text-indigo-400" aria-hidden>{i + 1}</span>
              <div>
                <p className="font-bold text-white">{s.title}</p>
                <p className="font-sans text-sm text-slate-300">{s.detail}</p>
              </div>
            </Surface>
          ))}
        </ol>
      </Subheading>
      <Subheading title="Eligibility check against the call"><DataTable table={scholarship.checks} /></Subheading>
      <Subheading title="Scholarship essay, extract (sample)">
        <Surface as="blockquote" tone="panel" depth="none" padding="lg" className="font-sans text-slate-200">{scholarship.essay}</Surface>
      </Subheading>
    </div>
  );
}
