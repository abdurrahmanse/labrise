import Link from "next/link";
import { Building2, Landmark, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Tile {
  href: string;
  label: string;
  count: number;
  Icon: LucideIcon;
}

/** Three entry points under one country: its universities, professors and funders. */
export function EcosystemTiles({ slug, universities, professors, funders }: { slug: string; universities: number; professors: number; funders: number }) {
  const tiles: Tile[] = [
    { href: `/directory/countries/${slug}/universities`, label: "Universities", count: universities, Icon: Building2 },
    { href: `/directory/countries/${slug}/professors`, label: "Professors", count: professors, Icon: Users },
    { href: `/directory/countries/${slug}/funding`, label: "Funding organisations", count: funders, Icon: Landmark }
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {tiles.map(({ href, label, count, Icon }) => (
        <Link
          key={label}
          href={href}
          className="group bg-canvas-card/70 backdrop-blur-xl p-5 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(58,95,224,0.3)]"
        >
          <Icon className="mb-3 h-6 w-6 text-indigo-400" />
          <div className="text-3xl font-bold text-white">{count}</div>
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{label}</div>
        </Link>
      ))}
    </div>
  );
}
