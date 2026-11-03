import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { providerSlug } from "../../lib/slugs";
import type { ProviderEntry } from "../../types";
import { Flag } from "../Flag";
import { rosterLabels } from "@/data/text/directory";

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
          className="group flex items-start gap-3 bg-canvas-card/70 backdrop-blur-xl p-4 shadow-[3px_3px_0_0_rgba(15,23,42,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_rgba(58,95,224,0.3)]"
        >
          <Flag country={p.country} className="mt-1 h-5 w-8" />
          <div className="min-w-0 flex-1">
            <div className="font-bold text-white">{p.name}</div>
            <div className="text-sm text-slate-300">{p.programs.join(", ")}</div>
            <div className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-indigo-400">
              {rosterLabels.requirements} <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
