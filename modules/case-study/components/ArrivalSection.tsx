import Link from "next/link";
import { BulletList } from "@/shared/components/BulletList";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { journey } from "../data/journey";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

/** From the signed acceptance to the first week abroad: the embassy process, its interview, and arrival. */
export function ArrivalSection() {
  const { visa } = journey;
  return (
    <div className="space-y-6">
      <Subheading title="The embassy process, step by step">
        <ol className="space-y-3">
          {visa.steps.map((s, i) => (
            <li key={s.title} className="flex gap-3 border-2 border-white/20 bg-white/[0.03] p-3">
              <span className="font-mono text-lg text-indigo-400" aria-hidden>{i + 1}</span>
              <div>
                <p className="font-bold text-white">{s.title}</p>
                <p className="font-sans text-sm text-slate-300">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Subheading>
      <Subheading title="Her visa file"><DataTable table={visa.documents} /></Subheading>
      <Subheading title="The embassy interview: questions and her answers">
        <dl className="space-y-2">
          {visa.interview.map((i) => (
            <div key={i.q} className="border border-white/20 p-3 font-sans text-sm">
              <dt className="font-bold text-white">{i.q}</dt>
              <dd className="text-slate-300">{i.a}</dd>
            </div>
          ))}
        </dl>
        <p className="font-sans text-sm text-slate-400">More in the <Link href="/guides/visa-interview" className={inlineLinkClass}>visa interview guide</Link>.</p>
      </Subheading>
      <Subheading title="Tips she followed"><BulletList items={visa.tips} /></Subheading>
      <Subheading title="Money, housing and the first week"><BulletList items={journey.arrival} /></Subheading>
    </div>
  );
}
