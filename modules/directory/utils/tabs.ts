export interface TabSpec {
  /** Last part of the address, or null for the overview page. */
  view: string | null;
  label: string;
}

/** The previous and next small page of an entry, for the links at the bottom of a page. */
export function tabNeighbours(base: string, tabs: TabSpec[], current: string) {
  const i = tabs.findIndex((t) => t.view === current);
  const link = (t?: TabSpec) => (t ? { href: t.view ? `${base}/${t.view}` : base, label: t.label } : undefined);
  return { prev: link(tabs[i - 1]), next: link(tabs[i + 1]) };
}
