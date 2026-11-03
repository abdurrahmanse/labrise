import type { NavLinkItem } from "@/content/site/navigationData";

const isUnder = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);

/** True when the page is the link's own page, anything below it, or a page the link lists in `matches`. */
export function isActiveLink(pathname: string, link: Pick<NavLinkItem, "href" | "matches">) {
  return [link.href, ...(link.matches ?? [])].some((prefix) => isUnder(pathname, prefix));
}
