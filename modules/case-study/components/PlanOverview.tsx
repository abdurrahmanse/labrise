import { journey } from "../data/journey";

const MONTHS = Array.from({ length: 14 }, (_, i) => 14 - i);

/** All phases on one 14-month axis, so the whole plan can be read at a glance. It scrolls sideways on narrow screens. */
export function PlanOverview() {
  return (
    <div className="overflow-x-auto border-2 border-white/25 p-3">
      <div className="min-w-[40rem] space-y-1" role="img" aria-label="Phases of her plan across 14 months before the start date">
        <div className="grid grid-cols-[7rem_repeat(14,minmax(0,1fr))] gap-px font-mono text-[10px] text-slate-400">
          <span />
          {MONTHS.map((m) => <span key={m} className="text-center">{m}</span>)}
        </div>
        {journey.phases.map((phase) => (
          <div key={phase.id} className="grid grid-cols-[7rem_repeat(14,minmax(0,1fr))] items-center gap-px">
            <span className="truncate pr-2 font-sans text-xs font-bold text-white">{phase.name}</span>
            <span
              style={{ gridColumn: `${15 - phase.from + 1} / ${15 - phase.to + 2}` }}
              className="block h-5 bg-[var(--pure-fg)]"
              title={`${phase.name}: month ${phase.from} to ${phase.to} before the start`}
            />
          </div>
        ))}
        <p className="pt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">Months before the start date</p>
      </div>
    </div>
  );
}
