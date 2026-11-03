import Link from "next/link";

export interface StepGridItem {
  label: string;
  href?: string;
}

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

/** A row of small numbered steps; a step with an href becomes a link. */
export function StepGrid({ steps }: { steps: StepGridItem[] }) {
  return (
    <ol className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.label} className="border border-white/25 bg-white/[0.03] p-3 text-sm text-slate-200">
          <div className="font-mono text-indigo-400 mb-1">{i + 1}</div>
          {step.href ? <Link href={step.href} className={linkClass}>{step.label}</Link> : step.label}
        </li>
      ))}
    </ol>
  );
}
