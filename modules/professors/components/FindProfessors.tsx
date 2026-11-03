import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { Flag } from "@/modules/directory/components/Flag";
import { countries, professors } from "@/modules/directory/data";
import { fieldOf } from "@/modules/directory/data/fields";
import { countrySlug } from "@/modules/directory/lib/slugs";
import { IconFor } from "@/shared/components/IconFor";

const tile = "group flex items-center gap-3 border-2 border-white/25 bg-canvas-card/60 p-3 backdrop-blur-xl transition-colors hover:border-indigo-400";

function countBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, number>();
  for (const item of items) map.set(key(item), (map.get(key(item)) ?? 0) + 1);
  return [...map].sort((a, b) => b[1] - a[1]);
}

export function FindProfessors() {
  const fields = countBy(professors, (p) => fieldOf(p.group).title);
  const byCountry = countBy(professors, (p) => p.country).slice(0, 9);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo-300">{t.find.byField}</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map(([title, n]) => (
            <Link key={title} href={`/directory/professors?field=${encodeURIComponent(title)}`} className={tile}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-indigo-600 text-white"><IconFor text={title} className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-bold text-white">{title}</span>
                <span className="block font-mono text-xs text-slate-400">{t.find.count(n)}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-indigo-300">{t.find.byCountry}</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {byCountry.map(([name, n]) => {
            const country = countries.find((c) => c.country === name);
            if (!country) return null;
            return (
              <Link key={name} href={`/directory/countries/${countrySlug(country)}/professors`} className={tile}>
                <Flag country={name} className="h-6 w-9" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-bold text-white">{name}</span>
                  <span className="block font-mono text-xs text-slate-400">{t.find.count(n)}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/directory/professors" className="inline-flex items-center gap-2 border-2 border-transparent bg-indigo-600 px-5 py-3 font-bold uppercase tracking-wider text-sm text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5">
          {t.find.all} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/directory/professors?savedOnly=true" className="inline-flex items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-5 py-3 font-bold uppercase tracking-wider text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
          <Bookmark className="h-4 w-4" aria-hidden /> {t.find.saved}
        </Link>
      </div>
    </div>
  );
}
