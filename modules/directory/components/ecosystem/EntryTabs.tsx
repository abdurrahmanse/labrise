import { SubNav, type SubNavItem } from "@/shared/components/SubNav";

/** Tabs between the small pages of one lab, university or country. */
export function EntryTabs({ label, base, tabs }: { label: string; base: string; tabs: { view: string | null; label: string }[] }) {
  const items: SubNavItem[] = tabs.map((t) => ({ href: t.view ? `${base}/${t.view}` : base, label: t.label }));
  return <SubNav label={label} items={items} />;
}

/** The previous and next small page of an entry, for the links at the bottom of a page. */
export function tabNeighbours(base: string, tabs: { view: string | null; label: string }[], current: string) {
  const i = tabs.findIndex((t) => t.view === current);
  const link = (t?: { view: string | null; label: string }) => (t ? { href: t.view ? `${base}/${t.view}` : base, label: t.label } : undefined);
  return { prev: link(tabs[i - 1]), next: link(tabs[i + 1]) };
}
