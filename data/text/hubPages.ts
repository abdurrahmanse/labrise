import type { LucideIcon } from "lucide-react";
import {
  BookOpen, CalendarCheck, FileText, FlaskConical, Globe2, GraduationCap, Landmark, Mail, MapPin, Route, Search, ShieldAlert,
  ShieldCheck, Sparkles, Terminal, UserCheck, Users, Bookmark, Send, Award, ListChecks
} from "lucide-react";

// Structure and text for the two hubs (/professors and /scholarships) and the pages split out of them.
export interface JourneyItem {
  href: string;
  title: string;
  body: string;
  points: string[];
  Icon: LucideIcon;
  /** Which saved-progress badge to show on the card. */
  progress?: "outreach" | "finder";
}

export interface RelatedItem {
  href: string;
  title: string;
  meta: string;
  Icon: LucideIcon;
}

export const hubChrome = {
  start: "Start here",
  open: "Open",
  journey: "Your path",
  related: "Connected pages",
  next: "Up next",
  doneOf: (done: number, total: number) => `${done}/${total} done`
} as const;

// ---------- Professors ----------
export const professorTabs = [
  { href: "/professors", label: "Overview" },
  { href: "/professors/find", label: "Find" },
  { href: "/professors/supervisor", label: "Supervisor rules" },
  { href: "/professors/workflow", label: "Workflow" },
  { href: "/professors/templates", label: "Email templates" },
  { href: "/professors/rules", label: "Rules and fit" }
];

export const professorHub = {
  title: "Find and contact professors: a clear path from search to reply",
  description: "Find professors, check whether you need a supervisor, follow the outreach workflow and copy tested email templates. Each step has its own page.",
  eyebrow: "Professor outreach",
  heading: "Reach the right professor",
  lead: "Five short pages that take you from searching to a reply. Start at the first and move on when you are ready.",
  journey: [
    { href: "/professors/find", title: "Find professors", body: "Browse by research field or country and save the ones that fit.", points: ["By field", "By country", "Saved list"], Icon: Search },
    { href: "/professors/supervisor", title: "Check the supervisor rule", body: "See which countries want a professor on board before you apply.", points: ["Required first", "Recommended", "Not needed"], Icon: UserCheck },
    { href: "/professors/workflow", title: "Follow the workflow", body: "Seven steps from reading papers to the follow-up, with progress saved.", points: ["7 steps", "Saved progress"], Icon: Route, progress: "outreach" },
    { href: "/professors/templates", title: "Write the email", body: "Copy a tested template, pick a subject line and fill in the brackets.", points: ["3 templates", "Subject lines", "Copy button"], Icon: Mail },
    { href: "/professors/rules", title: "Rules and fit checklist", body: "Country rules in detail and a checklist to test your research fit.", points: ["By country", "Fit checklist"], Icon: ListChecks }
  ] satisfies JourneyItem[],
  related: [
    { href: "/directory/professors", title: "Professor directory", meta: "Search, filter and track", Icon: Users },
    { href: "/saved", title: "Saved", meta: "Your shortlist", Icon: Bookmark },
    { href: "/guides/cold-email", title: "Cold email guide", meta: "Write the first message", Icon: FileText },
    { href: "/guides/interview-prep", title: "Research interview", meta: "If a professor replies", Icon: FlaskConical },
    { href: "/planner", title: "Planner", meta: "Track deadlines", Icon: CalendarCheck },
    { href: "/apply/university", title: "Apply to a university", meta: "The full route", Icon: GraduationCap }
  ] satisfies RelatedItem[]
};

export const professorSubPages = {
  find: { title: "Find professors by field and country", description: "Browse professors by research field or country and save the ones that fit your work.", eyebrow: "Step 1", heading: "Find professors", lead: "Pick a field or a country to see who works there." },
  supervisor: { title: "Do you need a supervisor first? Rules by country", description: "See which countries ask for a professor's agreement before you apply.", eyebrow: "Step 2", heading: "Do you need a supervisor first?", lead: "Check the rule for your target country before you write to anyone." },
  workflow: { title: "Professor outreach workflow: seven steps", description: "A seven-step workflow from checking the rules to the follow-up email, with saved progress.", eyebrow: "Step 3", heading: "The outreach workflow", lead: "Work through the steps in order and tick each one." },
  templates: { title: "Cold email templates for professors", description: "Copy tested email templates for PhD and Master's inquiries, with subject lines and tips.", eyebrow: "Step 4", heading: "Email templates", lead: "Replace every [bracket] with your own details before you send." }
} as const;

// ---------- Scholarships ----------
export const scholarshipTabs = [
  { href: "/scholarships", label: "Overview" },
  { href: "/scholarships/browse", label: "Browse" },
  { href: "/scholarships/workflow", label: "Search workflow" },
  { href: "/scholarships/formulas", label: "Search formulas" },
  { href: "/scholarships/portals", label: "Portals and safety" }
];

export const scholarshipHub = {
  title: "Scholarship finder: browse awards and search safely",
  description: "Browse fully funded scholarships, follow an 11-step search workflow, copy search formulas and check official portals. Each part has its own page.",
  eyebrow: "Scholarship finder",
  heading: "Find a scholarship you can trust",
  lead: "Four short pages: see the awards, learn the safe search, copy the formulas and check the portals.",
  journey: [
    { href: "/scholarships/browse", title: "Browse scholarships", body: "See real awards by level, with what they cover and when to apply.", points: ["By level", "Cards with deadlines"], Icon: Award },
    { href: "/scholarships/workflow", title: "Search workflow", body: "Eleven steps from official pages to scam checks, with progress saved.", points: ["Discovery", "Validation", "Safety"], Icon: Route, progress: "finder" },
    { href: "/scholarships/formulas", title: "Search formulas", body: "Copy ready-made queries that find real programmes faster.", points: ["Copy and paste", "Engines listed"], Icon: Terminal },
    { href: "/scholarships/portals", title: "Portals and safety", body: "Verified government portals and the rules that expose fraud.", points: ["Official portals", "Fraud rules"], Icon: ShieldCheck }
  ] satisfies JourneyItem[],
  related: [
    { href: "/directory/scholarships", title: "Scholarship directory", meta: "Every award with its page", Icon: Award },
    { href: "/directory/providers", title: "Providers", meta: "Requirements and routes", Icon: Landmark },
    { href: "/guides/scholarship-scams", title: "Avoid scams", meta: "What real providers never ask", Icon: ShieldAlert },
    { href: "/apply/scholarship", title: "Apply to a scholarship", meta: "The full route", Icon: Send },
    { href: "/planner", title: "Planner", meta: "Track deadlines", Icon: CalendarCheck },
    { href: "/directory/countries", title: "Countries", meta: "Funding by destination", Icon: Globe2 }
  ] satisfies RelatedItem[]
};

export const scholarshipSubPages = {
  browse: { title: "Browse fully funded scholarships by level", description: "Filter fully funded scholarships by level and open each one for coverage, eligibility and the official page.", eyebrow: "Step 1", heading: "Browse scholarships", lead: "Pick a level, then open an award to see what it covers." },
  workflow: { title: "Scholarship search workflow: 11 safe steps", description: "An 11-step workflow to find real scholarships and avoid scams, with saved progress.", eyebrow: "Step 2", heading: "The search workflow", lead: "Follow the steps in order. Open a step to see exactly what to do." }
} as const;

export const hubIcons = { Sparkles, BookOpen, MapPin };
