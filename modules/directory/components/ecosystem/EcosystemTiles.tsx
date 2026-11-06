import Link from "next/link";
import { Building2, FlaskConical, Landmark, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ecosystemText } from "@/content/text/directory";
import { surface } from "@/shared/components/Surface";

interface Tile {
  href: string;
  label: string;
  count: number;
  Icon: LucideIcon;
}

/** Entry points under one country: its universities, professors, labs and funders. */
export function EcosystemTiles({ slug, universities, professors, labs, funders }: { slug: string; universities: number; professors: number; labs: number; funders: number }) {
  const tiles: Tile[] = [
    { href: `/directory/countries/${slug}/universities`, label: ecosystemText.universities, count: universities, Icon: Building2 },
    { href: `/directory/countries/${slug}/professors`, label: ecosystemText.professors, count: professors, Icon: Users },
    { href: `/directory/countries/${slug}/labs`, label: ecosystemText.labs, count: labs, Icon: FlaskConical },
    { href: `/directory/countries/${slug}/funding`, label: ecosystemText.funding, count: funders, Icon: Landmark }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map(({ href, label, count, Icon }) => (
        <Link
          key={label}
          href={href}
          className={surface({ tone: "glass", depth: "soft", padding: "lg", className: "group transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]" })}
        >
          <Icon className="mb-3 h-6 w-6 text-indigo-400" />
          <div className="text-3xl font-bold text-white">{count}</div>
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{label}</div>
        </Link>
      ))}
    </div>
  );
}
