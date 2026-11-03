"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconFor } from "./IconFor";

export interface SubNavItem {
  href: string;
  label: string;
}

/** Tab-style links between the pages of one topic. The current page is highlighted. */
export function SubNav({ items, label }: { items: SubNavItem[]; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${active ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"}`}
          >
            <IconFor text={item.label} className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
