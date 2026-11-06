import { SubNav, type SubNavItem } from "@/shared/components/SubNav";
import type { TabSpec } from "../../utils/tabs";

/** Tabs between the small pages of one lab, university or country. */
export function EntryTabs({ label, base, tabs }: { label: string; base: string; tabs: TabSpec[] }) {
  const items: SubNavItem[] = tabs.map((t) => ({ href: t.view ? `${base}/${t.view}` : base, label: t.label }));
  return <SubNav label={label} items={items} />;
}
