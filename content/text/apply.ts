import type { LucideIcon } from "lucide-react";
import { Compass, FileText, GraduationCap, Landmark, Send, Trophy, Users, CalendarClock, Wallet, MessageSquare, Building2, ScrollText } from "lucide-react";

// Text for the apply hub and the two track pages. The steps themselves live in modules/apply/data/tracks.ts.
export type TrackId = "university" | "scholarship";

export const applyHubText = {
  title: "How to apply: universities and scholarship organisations",
  description: "The steps to apply to any university or scholarship provider, with a progress tracker and links to the guide for each step.",
  eyebrow: "Apply",
  heading: "How to apply",
  lead: "Two routes. Most students use both. Pick one, follow the steps and tick them off as you go.",
  routes: {
    title: "Choose your route",
    university: { who: "For a Master's or PhD place at a university", highlights: ["Same steps for almost every university", "A professor may need to agree first", "Funding is stated in the offer"] },
    scholarship: { who: "For awards such as Commonwealth, DAAD, Chevening or Fulbright", highlights: ["Check eligibility before anything else", "Rules and routes differ for each provider", "Deadlines are often earlier"] }
  },
  overall: { title: "Your progress across both routes", saved: "Saved in this browser only.", resume: (route: string) => `Continue: ${route}` },
  before: {
    title: "Before you start",
    lead: "Ten minutes here saves weeks later.",
    items: [
      { title: "Choose Master's or PhD", meta: "Pick the right route", href: "/guides/master-vs-phd" },
      { title: "Fix your research area", meta: "Used in every email", href: "/guides/research-area" },
      { title: "Check language and tests", meta: "IELTS, GRE, waivers", href: "/guides/english-and-gre" },
      { title: "Plan your budget", meta: "Costs before arrival", href: "/guides/budget-planning" },
      { title: "Applying from Bangladesh", meta: "Grades and attestation", href: "/guides/bangladesh-applicants" },
      { title: "Learn the scam signs", meta: "Never pay for awards", href: "/guides/scholarship-scams" }
    ]
  },
  find: {
    title: "Find what to apply to",
    lead: "Build your shortlist from the directory, then add each deadline to the planner.",
    items: [
      { title: "Scholarships", meta: "Funded awards", href: "/directory/scholarships" },
      { title: "Universities", meta: "Programmes by country", href: "/directory/universities" },
      { title: "Professors", meta: "Supervisors by area", href: "/directory/professors" },
      { title: "Labs and groups", meta: "Research groups", href: "/directory/labs" }
    ]
  },
  steps: (n: number) => `${n} steps`,
  start: "Start this route",
  continue: "Continue",
  done: (done: number, total: number) => `${done} of ${total} done`,
  compare: {
    title: "University or scholarship: what changes",
    university: "University",
    scholarship: "Scholarship"
  },
  together: {
    title: "Use both routes together",
    body: "Apply to universities for your place, and to scholarship organisations for extra funding. Track every deadline in one planner.",
    planner: "Open the planner",
    documents: "Prepare your documents"
  },
  phases: {
    title: "The journey in four stages",
    items: [
      { title: "Plan", body: "Check rules, shortlist and contact people." },
      { title: "Prepare", body: "Write documents and brief your referees." },
      { title: "Submit", body: "Complete the form, pay or waive the fee, send early." },
      { title: "Decide", body: "Interview, compare offers, accept and get your visa." }
    ]
  }
} as const;

export const compareRows: { Icon: LucideIcon; label: string; university: string; scholarship: string }[] = [
  { Icon: Users, label: "Who decides", university: "The department and often a professor", scholarship: "The provider's selection committee" },
  { Icon: Building2, label: "Where you apply", university: "The university's application portal", scholarship: "The provider's official portal or named body" },
  { Icon: ScrollText, label: "Admission first?", university: "Admission is the application itself", scholarship: "Some need an offer first, others select you first" },
  { Icon: CalendarClock, label: "Deadlines", university: "Set by each programme; rolling in much of Europe", scholarship: "Often earlier than university deadlines" },
  { Icon: Wallet, label: "Fee", university: "May charge one; ask for a waiver", scholarship: "Never pay a fee to receive an award" },
  { Icon: FileText, label: "Main documents", university: "CV, statement of purpose, transcripts, references, test scores", scholarship: "Essays on goals and impact, study plan, references, transcripts" },
  { Icon: MessageSquare, label: "Interview", university: "Possible; about your projects and the professor's papers", scholarship: "Common; about goals, plans and return" }
];

export const phaseIcons: LucideIcon[] = [Compass, FileText, Send, Trophy];

export const trackIcons: Record<TrackId, LucideIcon> = { university: GraduationCap, scholarship: Landmark };

/** Which steps belong to which stage. `to` is exclusive. */
export const trackPhases: Record<TrackId, { title: string; from: number; to: number; Icon: LucideIcon }[]> = {
  university: [
    { title: "Plan", from: 0, to: 3, Icon: Compass },
    { title: "Prepare", from: 3, to: 5, Icon: FileText },
    { title: "Submit", from: 5, to: 8, Icon: Send },
    { title: "Decide", from: 8, to: 11, Icon: Trophy }
  ],
  scholarship: [
    { title: "Check", from: 0, to: 3, Icon: Compass },
    { title: "Prepare", from: 3, to: 6, Icon: FileText },
    { title: "Submit", from: 6, to: 7, Icon: Send },
    { title: "Select and accept", from: 7, to: 10, Icon: Trophy }
  ]
};

export const trackPageText = {
  eyebrow: (n: number) => `${n} steps`,
  back: "How to apply",
  metaTitle: (title: string) => `${title}: step by step`,
  progress: "Your progress",
  done: (done: number, total: number) => `${done} of ${total} steps done`,
  percent: (n: number) => `${n}%`,
  markDone: "Mark step as done",
  markUndone: "Mark step as not done",
  reset: "Reset progress",
  saved: "Saved in this browser only.",
  tips: "Keep in mind",
  tools: "Helpful tools",
  findProfessors: "Find professors",
  searchScholarships: "Search for scholarships",
  planner: "Plan your deadlines",
  documents: "Prepare your documents",
  directory: "Browse the directory",
  other: "Switch route",
  stage: (n: number, title: string) => `Stage ${n} · ${title}`,
  stepNumber: (n: number) => `Step ${n}`,
  finished: "All steps done. Good luck with your applications."
} as const;
