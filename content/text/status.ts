import type { LucideIcon } from "lucide-react";
import { BookOpen, Compass, GraduationCap, Landmark, Map, Send, Users } from "lucide-react";

// Text and links for the 404, error, loading and empty-result screens.
export interface StatusLink {
  href: string;
  label: string;
  hint: string;
  Icon: LucideIcon;
}

export const quickLinks: StatusLink[] = [
  { href: "/steps", label: "6-step roadmap", hint: "What to do, in order", Icon: Map },
  { href: "/directory", label: "Directory", hint: "Countries, universities, funders", Icon: Landmark },
  { href: "/guides", label: "Guides", hint: "CV, SOP, IELTS, visa", Icon: BookOpen },
  { href: "/apply", label: "How to apply", hint: "University and scholarship routes", Icon: Send },
  { href: "/directory/universities", label: "Universities", hint: "Browse by country", Icon: GraduationCap },
  { href: "/directory/professors", label: "Professors", hint: "Find and track supervisors", Icon: Users }
];

export const notFoundText = {
  code: "404",
  eyebrow: "Page not found",
  title: "This page took a different route",
  body: "The link may be old, mistyped, or the entry may have been renamed. Search the directory or pick a path below.",
  home: "Back to home",
  search: "Search the directory",
  suggestions: "Where to next",
  Icon: Compass
} as const;

export const errorText = {
  code: "500",
  eyebrow: "Something went wrong",
  title: "We hit a snag loading this page",
  body: "It is not you. Try again, or go back home and open the page from there. If it keeps happening, report it.",
  retry: "Try again",
  home: "Back to home",
  report: "Report the problem",
  reference: (digest: string) => `Reference: ${digest}`,
  suggestions: "Meanwhile, explore"
} as const;

export const globalErrorText = {
  title: "The site could not load",
  body: "A serious error stopped the page from loading. Reload to try again.",
  reload: "Reload the page"
} as const;

export const loadingText = {
  label: "Loading the page",
  hint: "Getting the latest entries ready…"
} as const;

export const emptyText = {
  noResults: "No results",
  adjust: "Try a shorter search or clear the filters.",
  clear: "Clear search"
} as const;
