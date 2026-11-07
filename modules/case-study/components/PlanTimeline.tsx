import Link from "next/link";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { journey } from "../data/journey";

/** Her plan, month by month, each step linked to the guide she followed. */
export function PlanTimeline() {
  return (
    <ol className="space-y-3">
      {journey.timeline.map((m, i) => (
        <li key={m.title} className="flex gap-4 border-2 border-white/20 bg-white/[0.03] p-4">
          <span className="font-mono text-xl text-indigo-400" aria-hidden>{i + 1}</span>
          <div className="min-w-0 space-y-1">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{m.when}</p>
            <h3 className="font-bold text-white">{m.title}</h3>
            <p className="font-sans text-sm text-slate-300">{m.detail}</p>
            <Link href={m.guide} className={`${inlineLinkClass} font-sans text-sm`}>{m.guideLabel} →</Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
