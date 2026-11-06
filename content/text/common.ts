import { brand } from "@/content/site/brand";
// Text used on many pages. Change wording here; components only read it.
export const commonText = {
  brand: { first: brand.first, second: brand.second, homeLabel: `${brand.name} home` },
  footer: { tagline: "Free and open", backToTop: "Back to top", backToTopLabel: "Back to top of page", status: "Live Open Access" },
  theme: { toggleLabel: "Toggle dark mode" },
  header: {
    mobileDrawerLabel: "Mobile Navigation Drawer",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation links",
    footerNav: "Footer",
    tagline: "Fully Funded",
    drawerTagline: "100% Fully Funded Standard"
  },
  actions: { details: "Details", copy: "Copy", copyDraft: "Copy draft", copied: "Copied!", home: "Home", reset: "Reset" },
  pagination: { previous: "Previous", next: "Next", page: (n: number, total: number) => `Page ${n} of ${total}` },
  states: { loading: "Loading…", errorTitle: "We could not load this", retry: "Try again", loadMore: "Load more", none: "None listed yet.", clearSearch: "Clear search", searchPlaceholder: "Search..." },
  count: { shown: (n: number) => `${n} shown` }
} as const;

export const noticeText = {
  reviewed: (month: string) => `Reviewed ${month}. Deadlines, funding and people change, so confirm on the official source before you act.`,
  officialSource: "Official source",
  report: "Report a correction",
  reportSubject: (subject: string) => `Correction: ${subject}`,
  professorCaution: "Affiliation was not re-checked on a live page; confirm it on the university site."
} as const;

export const searchText = {
  open: "Search the directory",
  shortcut: "Ctrl K",
  close: "Close search",
  placeholder: "Search countries, universities, professors, funders…",
  hint: "Type to search the whole directory.",
  empty: "No match. Try a country, university or professor name.",
  kinds: { Country: "Country", University: "University", Professor: "Professor", Funder: "Funder", Scholarship: "Scholarship", Lab: "Lab" }
} as const;
