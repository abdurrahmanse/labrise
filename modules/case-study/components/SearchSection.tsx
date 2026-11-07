import { BulletList } from "@/shared/components/BulletList";
import { search } from "../data/search";
import { DataTable } from "./DataTable";
import { Subheading } from "./Subheading";

export function SearchSection() {
  return (
    <div className="space-y-6">
      <Subheading title="Her method, in order"><BulletList items={search.steps} /></Subheading>
      <Subheading title="Searches she ran">
        <ul className="space-y-2">
          {search.queries.map((q) => <li key={q} className="border border-white/20 px-3 py-2 font-mono text-xs text-slate-200">{q}</li>)}
        </ul>
      </Subheading>
      <Subheading title="Her group log"><DataTable table={search.log} /></Subheading>
    </div>
  );
}
