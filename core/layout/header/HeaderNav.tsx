import Link from "next/link";
import { navLinksData } from "@/content/site/navigationData";
import { commonText } from "@/content/text/common";
import { cn } from "@/shared/utils/cn";
import { isActiveLink } from "./isActiveLink";

interface HeaderNavProps {
  pathname: string;
}

/** The four main links. Text only; the current section gets an underline that slides in. */
export function HeaderNav({ pathname }: HeaderNavProps) {
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label={commonText.header.mainNav}>
      {navLinksData.map((link) => {
        const active = isActiveLink(pathname, link);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative rounded-full px-4 py-2 text-[15px] font-semibold transition-colors",
              active ? "text-white" : "text-slate-400 hover:text-white"
            )}
          >
            {link.label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-4 -bottom-0.5 h-0.5 origin-center rounded-full bg-indigo-500 transition-transform duration-200",
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default HeaderNav;
