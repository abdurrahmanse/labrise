import type { HubText } from "@/data/text/hubs";

/** Intro block at the top of the long guide pages. */
export function HubHeader({ hub }: { hub: HubText }) {
  const { Icon, phase, tagline, title, intro, points } = hub;
  return (
    <div className="mb-12 max-w-3xl space-y-4">
      <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-slate-900 px-3.5 py-1 font-mono text-xs font-medium text-indigo-300">
        <Icon className="h-3.5 w-3.5" aria-hidden />
        <span>{phase}</span>
        <span className="text-slate-600">|</span>
        <span className="text-teal-400">{tagline}</span>
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="font-sans text-base leading-relaxed text-slate-300 sm:text-lg">{intro}</p>
      <ul className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-slate-400">
        {points.map(({ Icon: PointIcon, label }) => (
          <li key={label} className="flex items-center gap-1.5">
            <PointIcon className="h-3.5 w-3.5 text-teal-400" aria-hidden />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
