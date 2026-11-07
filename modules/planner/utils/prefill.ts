import type { ApplicationKind } from "../store/usePlanner";

export interface PlannerPrefill {
  name: string;
  kind: ApplicationKind;
  href?: string;
}

const KINDS: ApplicationKind[] = ["university", "scholarship", "other"];

/** Reads ?name=&kind=&href= from a query string. The page address must stay on this site. */
export function readPrefill(search: string): PlannerPrefill | undefined {
  const params = new URLSearchParams(search);
  const name = params.get("name")?.trim().slice(0, 200);
  if (!name) return undefined;
  const kind = params.get("kind") as ApplicationKind | null;
  const href = params.get("href") ?? undefined;
  return {
    name,
    kind: kind && KINDS.includes(kind) ? kind : "other",
    href: href && href.startsWith("/") && !href.startsWith("//") ? href : undefined
  };
}

/** The planner address that opens the form already filled in. */
export function plannerAddress({ name, kind, href }: PlannerPrefill) {
  const params = new URLSearchParams({ name, kind });
  if (href) params.set("href", href);
  return `/planner?${params.toString()}#add-application`;
}
