import { FloatingCard } from "./FloatingCard";

const STATUSES = ["To contact", "Emailed", "Replied"];

/** Shows the outreach tracker feature, not a real person or message. */
export function ProfessorStageCard() {
  return (
    <FloatingCard className="bottom-0 right-0 w-[34%] animate-float-reverse">
      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-indigo-300">Outreach tracker</div>
      <ul className="space-y-1.5">
        {STATUSES.map((s) => (
          <li key={s} className="flex items-center justify-between text-sm font-bold text-slate-200">
            {s}
            <span className="h-2 w-8 bg-indigo-400/40" />
          </li>
        ))}
      </ul>
    </FloatingCard>
  );
}
