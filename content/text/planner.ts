// Text for the planner page: timeline builder and application tracker.
export const plannerText = {
  title: "Application planner: deadlines and timeline",
  description: "Track your applications and deadlines, and build a month-by-month timeline from your intake date. Saved only in your browser.",
  eyebrow: "Planner",
  heading: "Plan your applications",
  lead: "Pick your intake, see what to do and when, and keep every deadline in one place.",
  privacy: "Saved in this browser only. Nothing is sent anywhere.",
  timeline: {
    title: "Your timeline",
    intakeLabel: "When do you want to start?",
    hint: "Choose the month your studies begin. Dates are approximate and follow the 6-step roadmap.",
    empty: "Choose an intake month to see your timeline.",
    range: (from: string, to: string) => `${from} – ${to}`,
    stepFallbackNow: "Start now"
  },
  form: {
    title: "Add an application",
    name: "University or scholarship",
    namePlaceholder: "Start typing a name",
    deadline: "Deadline",
    kind: "Type",
    kinds: { university: "University", scholarship: "Scholarship", other: "Other" },
    add: "Add to planner",
    nameRequired: "Enter a name.",
    deadlineRequired: "Pick a deadline date.",
    deadlineHint: "Copy the date from the official page."
  },
  list: {
    title: "Your applications",
    empty: "No applications yet. Add the first one above.",
    notePlaceholder: "Note: documents needed, referee, login…",
    noteLabel: "Note",
    statusLabel: "Status",
    remove: "Remove",
    openEntry: "Open in directory",
    today: "Due today",
    overdue: (n: number) => `${n} day${n === 1 ? "" : "s"} overdue`,
    left: (n: number) => `${n} day${n === 1 ? "" : "s"} left`,
    export: "Export CSV",
    csvHeader: ["Name", "Type", "Deadline", "Status", "Note"]
  },
  summary: {
    total: "Applications",
    submitted: "Submitted",
    offers: "Offers",
    next: "Next deadline",
    none: "None"
  },
  statuses: { planning: "Planning", preparing: "Preparing", submitted: "Submitted", offer: "Offer", rejected: "Not selected" }
} as const;

export const timelineSteps = [
  { title: "Build your base", href: "/guides/research-area", monthsBeforeStart: 24, monthsBeforeEnd: 12 },
  { title: "Create proof of research", href: "/guides/cv", monthsBeforeStart: 18, monthsBeforeEnd: 9 },
  { title: "Shortlist countries and universities", href: "/directory/countries", monthsBeforeStart: 12, monthsBeforeEnd: 8 },
  { title: "Find and email professors", href: "/guides/cold-email", monthsBeforeStart: 10, monthsBeforeEnd: 6 },
  { title: "Prepare documents", href: "/guides/sop", monthsBeforeStart: 8, monthsBeforeEnd: 4 },
  { title: "Apply, interview, decide", href: "/apply", monthsBeforeStart: 6, monthsBeforeEnd: 0 }
] as const;
