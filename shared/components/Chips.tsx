import Link from "next/link";
import { commonText } from "@/content/text/common";

export interface ChipItem {
  href: string;
  label: string;
  meta?: string;
}

export function Chips({ items }: { items: ChipItem[] }) {
  if (items.length === 0) return <p className="text-slate-400">{commonText.states.none}</p>;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="border-2 border-white/30 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 text-sm font-bold text-slate-100 hover:bg-indigo-600 hover:text-white hover:border-transparent"
        >
          {item.label}
          {item.meta && <span className="ml-2 font-mono text-xs opacity-70">{item.meta}</span>}
        </Link>
      ))}
    </div>
  );
}
