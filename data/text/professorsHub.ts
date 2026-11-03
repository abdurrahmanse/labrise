// Text for the professors hub (/professors) and the redesigned professor detail page.
export const professorsHubText = {
  title: "Find and contact professors: workflow, emails and supervisor rules",
  description: "Find professors by field and country, follow a step-by-step outreach workflow, copy tested email templates and check whether you need a supervisor first.",
  eyebrow: "Professor outreach",
  heading: "Find and contact professors",
  lead: "Pick the right people, write a short specific email and keep track of every reply.",
  stats: { professors: "Professors", emails: "With official email", countries: "Countries", fields: "Research fields" },
  find: {
    title: "Find professors",
    byField: "By research field",
    byCountry: "By country",
    all: "Open the full professor directory",
    saved: "Your saved professors",
    count: (n: number) => `${n} professors`
  },
  need: {
    title: "Do you need a supervisor first?",
    lead: "Many countries ask you to find a professor before you apply. Others admit you through a committee.",
    groups: { "Required first": "Required first", Recommended: "Recommended", "Not needed": "Not needed" },
    rules: "Read the rules by country"
  },
  workflow: {
    title: "Outreach workflow",
    lead: "Seven steps from checking the rules to the follow-up. Tick each one as you finish.",
    progress: (done: number, total: number) => `${done} of ${total} steps done`,
    saved: "Saved in this browser only.",
    reset: "Reset progress",
    markDone: "Mark step as done",
    markUndone: "Mark step as not done"
  },
  templates: {
    title: "Email templates",
    lead: "Replace every [bracket] with your own details before you send.",
    subjects: "Subject line ideas",
    attachments: "Attach",
    tips: "Tips",
    words: "Length",
    copy: "Copy email",
    for: "Best for"
  },
  tools: {
    title: "More help",
    items: [
      { href: "/professors/rules", title: "Rules and fit checklist", meta: "Supervisor rules by country" },
      { href: "/guides/cold-email", title: "Cold email guide", meta: "How to write the first message" },
      { href: "/guides/interview-prep", title: "Research interview", meta: "If a professor replies" },
      { href: "/planner", title: "Application planner", meta: "Track deadlines" }
    ]
  }
} as const;

export const professorProfileText = {
  highlights: { university: "University", country: "Country", field: "Research field", email: "Contact", supervisor: "Supervisor first?" },
  emailListed: "Official email listed",
  emailMissing: "No official email listed",
  contact: {
    title: "How to contact",
    listed: "This address was taken from an official page. People move, so confirm on their page before you write.",
    missing: "No address is listed here. Search the university page for the current official email instead.",
    find: "Find on the official page",
    copy: "Copy"
  },
  outreach: { title: "Your outreach", steps: "Before you email", draft: "Starter email draft" },
  field: { title: "About the field" },
  funding: "Funding routes at this university",
  peers: { title: (group: string) => `More in ${group}`, university: (name: string) => `More at ${name}` },
  readFirst: "Read first",
  help: {
    title: "Outreach help",
    links: [
      { href: "/professors/templates", label: "Email templates" },
      { href: "/professors/workflow", label: "Outreach workflow" },
      { href: "/professors/supervisor", label: "Supervisor rules by country" },
      { href: "/apply/university", label: "Apply to a university" }
    ]
  }
} as const;
