import { GraduationCap, Landmark } from "lucide-react";
import { applyHubText as t, compareRows } from "@/data/text/apply";
import { surface } from "@/shared/components/Surface";

/** What changes between the two routes, one card per question. */
export function CompareRoutes() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {compareRows.map(({ Icon, label, university, scholarship }) => (
        <section key={label} className={surface({ tone: "quiet", depth: "none", padding: "md" })}>
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center bg-indigo-600 text-white"><Icon className="h-4 w-4" aria-hidden /></span>
            {label}
          </h3>
          <dl className="space-y-2 font-sans text-[length:var(--text-body)] font-normal">
            <div className="flex gap-2">
              <dt className="flex w-28 shrink-0 items-start gap-1.5 font-mono text-xs uppercase tracking-wider text-indigo-300">
                <GraduationCap className="h-4 w-4" aria-hidden /> {t.compare.university}
              </dt>
              <dd className="text-slate-200">{university}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="flex w-28 shrink-0 items-start gap-1.5 font-mono text-xs uppercase tracking-wider text-cyan-300">
                <Landmark className="h-4 w-4" aria-hidden /> {t.compare.scholarship}
              </dt>
              <dd className="text-slate-200">{scholarship}</dd>
            </div>
          </dl>
        </section>
      ))}
    </div>
  );
}
