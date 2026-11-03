import { infoCardClass } from "./InfoCard";

export interface StepItem {
  title?: string;
  detail: string;
}

/** Numbered cards: a title line (optional) and a sentence of detail. */
export function StepList({ items }: { items: StepItem[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={`${item.title}-${item.detail}`} className={`${infoCardClass} flex gap-4`}>
          <span className="bg-indigo-600 text-white font-mono font-bold px-2 py-0.5 h-fit">{i + 1}</span>
          <div>
            {item.title && <div className="text-lg font-bold text-white">{item.title}</div>}
            <p className="text-slate-300 font-sans font-normal">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
