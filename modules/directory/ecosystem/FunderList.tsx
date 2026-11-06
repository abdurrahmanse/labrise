import Link from "next/link";
import { providerSlug } from "../utils/slugs";
import type { ProviderEntry } from "../types";
import { Flag } from "@/shared/components/Flag";
import { rosterLabels } from "@/content/text/directory";
import { liftCard } from "@/shared/components/liftCard";
import { ViewDetails } from "@/shared/components/ViewDetails";

/** Funding organisations as small cards, each linking to its requirements. */
export function FunderList({ funders, empty }: { funders: ProviderEntry[]; empty?: string }) {
  if (funders.length === 0) {
    return <p className="text-slate-400">{empty ?? rosterLabels.noFunders}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {funders.map((p) => (
        <Link
          key={p.name}
          href={`/directory/providers/${providerSlug(p)}`}
          className={liftCard("flex items-start gap-3", "md")}
        >
          <Flag country={p.country} className="mt-1 h-5 w-8" />
          <div className="min-w-0 flex-1">
            <div className="font-bold text-white underline decoration-indigo-400/70 decoration-2 underline-offset-4 group-hover:text-indigo-300">{p.name}</div>
            <div className="text-sm text-slate-300">{p.programs.join(", ")}</div>
            <div className="mt-2"><ViewDetails label={rosterLabels.requirements} /></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
