import Link from "next/link";
import { CircleCheck, CircleHelp, CircleSlash } from "lucide-react";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { countries } from "@/modules/directory/catalog";
import { countrySlug } from "@/modules/directory/contracts";
import { surface } from "@/shared/components/Surface";

const GROUPS = [
  { key: "Required first", Icon: CircleCheck, tone: "text-amber-400" },
  { key: "Recommended", Icon: CircleHelp, tone: "text-indigo-400" },
  { key: "Not needed", Icon: CircleSlash, tone: "text-emerald-400" }
] as const;

/** Which countries want a supervisor before you apply, from the country data. */
export function SupervisorNeed() {
  return (
    <div className="space-y-4">
      <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.need.lead}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {GROUPS.map(({ key, Icon, tone }) => (
          <section key={key} className={surface({ tone: "quiet", depth: "none", padding: "md" })}>
            <h3 className={`mb-3 flex items-center gap-2 text-lg font-bold ${tone}`}><Icon className="h-5 w-5" aria-hidden /> {t.need.groups[key]}</h3>
            <ul className="flex flex-wrap gap-2">
              {countries.filter((c) => c.supervisor === key).map((c) => (
                <li key={c.country}>
                  <Link href={`/directory/countries/${countrySlug(c)}`} className="border border-white/25 bg-white/[0.04] px-2.5 py-1 text-sm font-bold text-slate-100 hover:border-indigo-400 hover:text-indigo-300">{c.country}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Link href="/professors/rules" className="inline-flex text-sm font-bold text-indigo-400 hover:text-indigo-200">{t.need.rules} →</Link>
    </div>
  );
}
