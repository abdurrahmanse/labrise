import { journey } from "../data/journey";
import { outreach } from "../data/outreach";
import { EmailCard } from "./EmailCard";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function ResultsSection() {
  return (
    <div className="space-y-6">
      <Subheading title="University interview: questions she prepared">
        <dl className="space-y-2">
          {journey.interview.map((i) => (
            <div key={i.q} className="border border-white/20 p-3 font-sans text-sm">
              <dt className="font-bold text-white">{i.q}</dt>
              <dd className="text-slate-300">{i.a}</dd>
            </div>
          ))}
        </dl>
      </Subheading>
      <Subheading title="Every application and its result"><DataTable table={journey.results} /></Subheading>
      <Subheading title="How she decided"><DataTable table={journey.decision} /></Subheading>
      <Subheading title="Accepting in writing"><EmailCard email={outreach.accept} /></Subheading>
      <Subheading title="Declining politely"><EmailCard email={outreach.decline} /></Subheading>
    </div>
  );
}
