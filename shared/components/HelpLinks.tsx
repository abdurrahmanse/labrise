import Link from "next/link";
import { IconFor } from "./IconFor";
import { InfoCard } from "./InfoCard";

export interface HelpLink {
  href: string;
  label: string;
}

/** A small card of links to related pages, shown in the side column. */
export function HelpLinks({ title, links }: { title: string; links: readonly HelpLink[] }) {
  return (
    <InfoCard label={title}>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="flex items-center gap-3 border-2 border-white/20 bg-white/[0.03] p-2.5 font-bold text-slate-100 hover:border-indigo-400">
              <IconFor text={l.label} className="h-5 w-5 shrink-0 text-indigo-400" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </InfoCard>
  );
}
