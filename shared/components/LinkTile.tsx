import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { IconBadge } from "./IconBadge";
import { IconFor } from "./IconFor";
import { Label } from "./Text";
import { Surface } from "./Surface";

interface LinkTileProps {
  href: string;
  title: string;
  meta?: string;
  /** Explicit icon. Without one, the icon is chosen from the title. */
  icon?: LucideIcon;
  /** Replaces the icon, for example a country flag. */
  leading?: ReactNode;
  arrow?: boolean;
}

/** A link shown as a tile with an icon, title and caption. The one link-card used on hubs, tools and 404 pages. */
export function LinkTile({ href, title, meta, icon: Icon, leading, arrow = true }: LinkTileProps) {
  return (
    <Link href={href} className="group block">
      <Surface tone="quiet" depth="none" padding="sm" interactive className="flex items-center gap-3">
        {leading ?? (Icon ? <IconBadge icon={Icon} /> : <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-indigo-600 text-white"><IconFor text={title} className="h-5 w-5" /></span>)}
        <span className="min-w-0 flex-1">
          <span className="block truncate font-bold text-white">{title}</span>
          {meta && <Label className="block truncate">{meta}</Label>}
        </span>
        {arrow && <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-indigo-400" aria-hidden />}
      </Surface>
    </Link>
  );
}

/** Responsive grid for LinkTile. */
export function LinkTileGrid({ children, columns = "sm:grid-cols-2 lg:grid-cols-3" }: { children: ReactNode; columns?: string }) {
  return <div className={`grid grid-cols-1 gap-3 ${columns}`}>{children}</div>;
}
