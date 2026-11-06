import { countries } from "@/modules/directory/catalog";
import { Flag } from "@/shared/components/Flag";

/** Endless strip of destination flags. The list is doubled so the loop has no gap. */
export function FlagMarquee() {
  const items = [...countries, ...countries];

  return (
    <div className="relative overflow-hidden bg-white/[0.04] py-4 backdrop-blur-md" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10">
        {items.map((c, i) => (
          <span key={`${c.country}-${i}`} className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-slate-300">
            <Flag country={c.country} className="h-5 w-8" />
            {c.country}
          </span>
        ))}
      </div>
    </div>
  );
}
