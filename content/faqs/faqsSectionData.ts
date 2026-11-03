import { FaqCategoryCard, LaunchpadCard } from "./types";

export const faqsNavAnchors = [
  { id: "readiness-checklist", label: "Pre-Flight Readiness", count: "5 Checks" },
  { id: "faq-list", label: "Master FAQ Directory", count: "12 Inquiries" },
  { id: "community-help", label: "Roadmap Hubs", count: "4 Guides" }
];

export const faqsHeroHighlightsData = [
  { label: "IELTS / MOI Waiver Clarifications", iconName: "CheckCircle2", variant: "emerald" },
  { label: "Average GPA Mitigation Strategies", iconName: "CheckCircle2", variant: "cyan" },
  { label: "Supervisor Outreach Rules by Country", iconName: "CheckCircle2", variant: "indigo" }
];

export const faqCategoryCardsData: FaqCategoryCard[] = [
  {
    name: "Eligibility & Tests",
    desc: "English test waivers (IELTS/TOEFL/MOI), GPA cutoffs and mitigation, and publications requirements.",
    tag: "Eligibility",
    iconName: "Compass",
    variant: "purple"
  },
  {
    name: "Outreach & Supervisors",
    desc: "When contacting professors is mandatory, cold email etiquette, follow-ups, and handling non-replies.",
    tag: "Supervisors",
    iconName: "Users",
    variant: "cyan"
  },
  {
    name: "Funding & Finance",
    desc: "Tuition waiver vs fully funded packages, living stipends, salaried contracts, and fraud detection.",
    tag: "Funding",
    iconName: "DollarSign",
    variant: "emerald"
  },
  {
    name: "Strategy & Preparation",
    desc: "Optimal preparation timelines, applying to multiple countries, fresh graduates, and reapplication.",
    tag: "Strategy",
    iconName: "ShieldCheck",
    variant: "amber"
  }
];

export const preflightChecklistData: string[] = [
  "Confirmed that target programs offer 100% full tuition remission and guaranteed living stipends",
  "Verified language minimums: checked whether English Medium of Instruction (MOI) or IELTS/TOEFL is mandated",
  "Ensured all 3 academic recommendation letters have been formally requested with 6 weeks notice",
  "Audited prerequisite coursework matching between your undergraduate transcript and the target curriculum",
  "Verified whether supervisor agreement is required before application submission for each target country"
];

export const communityLaunchpadData: LaunchpadCard[] = [
  {
    title: "13-Phase Execution Roadmap",
    desc: "Step-by-step pipeline from profile audit to funding offer evaluation.",
    href: "/roadmap",
    iconName: "Compass"
  },
  {
    title: "20 Country Funding Guides",
    desc: "Comprehensive funding rules across Europe, North America, Asia & Oceania.",
    href: "/countries",
    iconName: "Globe2"
  },
  {
    title: "Professor Cold Email Generator",
    desc: "Concise 180-word cold email blueprints and follow-up templates.",
    href: "/professors",
    iconName: "Users"
  },
  {
    title: "Required Documents Guide",
    desc: "Academic CV format, 5-part SOP blueprint, and proposal checklists.",
    href: "/documents",
    iconName: "FileCheck"
  }
];
