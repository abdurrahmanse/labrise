import { ExternalLink } from "lucide-react";

export interface ExternalLinkItem {
  label: string;
  href: string;
}

export function ExternalLinks({ items }: { items: ExternalLinkItem[] }) {
  // The same page can arrive from two sources, so repeat links are dropped.
  const unique = items.filter((item, i) => items.findIndex((x) => x.href === item.href) === i);
  return (
    <ul className="flex flex-wrap gap-3">
      {unique.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-2 border-white/30 px-3 py-1.5 text-sm font-bold text-slate-100 hover:border-indigo-400 hover:text-indigo-300"
          >
            {item.label} <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
