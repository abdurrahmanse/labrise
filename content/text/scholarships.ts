// Text for the scholarship finder hub and the scholarship detail page.
export const finderText = {
  title: "Scholarship finder: browse awards and a safe search workflow",
  description: "Browse fully funded scholarships by level, follow an 11-step search workflow and avoid scams. Progress is saved in your browser.",
  eyebrow: "Scholarship finder",
  heading: "Find your scholarship",
  lead: "Browse real awards, then follow a safe, step-by-step search so you only apply through official channels.",
  stats: { scholarships: "Scholarships", providers: "Providers", hosts: "Host countries", levels: "Levels" },
  browse: {
    title: "Browse scholarships",
    levelLabel: "Filter by level",
    all: "All levels",
    shown: (n: number) => `${n} shown`,
    more: "See all scholarships",
    empty: "No scholarship matches this level."
  },
  workflow: {
    title: "11-step search workflow",
    lead: "From official university pages to scam checks. Tick each step as you finish it.",
    progress: (done: number, total: number) => `${done} of ${total} steps done`,
    saved: "Saved in this browser only.",
    reset: "Reset progress",
    markDone: "Mark step as done",
    markUndone: "Mark step as not done",
    instructions: "What to do",
    keywords: "Keywords and tools",
    stage: { Discovery: "Discovery", Validation: "Validation", Safety: "Safety" }
  },
  tools: {
    title: "More tools",
    items: [
      { href: "/scholarships/formulas", title: "Search formulas", meta: "Copyable search queries" },
      { href: "/scholarships/portals", title: "Official portals and safety", meta: "Verified portals and fraud rules" },
      { href: "/directory/providers", title: "Scholarship providers", meta: "Requirements and how each one awards" },
      { href: "/guides/scholarship-scams", title: "Avoid scams", meta: "What real providers never ask" },
      { href: "/planner", title: "Application planner", meta: "Track every deadline" }
    ]
  }
} as const;

export const scholarshipDetailText = {
  metaTitle: (name: string) => `${name}: eligibility, coverage and how to apply`,
  highlights: { level: "Level", deadline: "Typical deadline", host: "Host country", provider: "Awarded by" },
  covers: "What it covers",
  eligibility: "Who can apply",
  official: "Open the official page",
  officialNote: "Amounts, eligibility and deadlines change every cycle. Confirm on the official page.",
  provider: {
    title: "About the provider",
    route: "How to apply",
    selection: "How it is selected",
    requirements: "Usual requirements",
    documents: "Documents usually asked",
    view: "See the full provider page"
  },
  checklist: {
    title: "Your application checklist",
    progress: (done: number, total: number) => `${done} of ${total} done`,
    markDone: "Mark as done",
    markUndone: "Mark as not done",
    reset: "Reset",
    saved: "Saved in this browser only."
  },
  similar: { title: (host: string) => `More scholarships in ${host}`, level: "Other awards at this level" },
  planner: "Add the deadline to your planner",
  help: {
    title: "Search safely",
    links: [
      { href: "/scholarships/workflow", label: "Scholarship search workflow" },
      { href: "/scholarships/portals", label: "Official portals and safety" },
      { href: "/scholarships/formulas", label: "Search formulas" },
      { href: "/apply/scholarship", label: "Apply to a scholarship" }
    ]
  },
  readNext: "Read next"
} as const;
