import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { infoCardClass } from "@/shared/components/InfoCard";
import type { ApplyStep } from "../data/tracks";

export function TrackSteps({ steps }: { steps: ApplyStep[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={step.title} className={`${infoCardClass} flex gap-4`}>
          <span className="h-fit bg-indigo-600 px-2 py-0.5 font-mono font-bold text-white">{i + 1}</span>
          <div className="min-w-0 flex-1">
            <div className="text-lg font-bold text-white">{step.title}</div>
            <p className="text-slate-300 font-sans font-normal">{step.detail}</p>
            {step.href && (
              <Link href={step.href} className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200">
                {step.linkLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
