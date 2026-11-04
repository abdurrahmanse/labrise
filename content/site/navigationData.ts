import { brand } from "@/content/site/brand";
export interface NavLinkItem {
  href: string;
  label: string;
  iconName: string;
  badge?: string;
  /** Other path prefixes that also mark this link as the current section. */
  matches?: string[];
}

export interface StatusTickerItem {
  id: string;
  badge: string;
  text: string;
  variant: "indigo" | "cyan" | "emerald" | "amber" | "purple";
}

export const liveStatusTickerData: StatusTickerItem[] = [
  {
    id: "funding-standard",
    badge: "Full-Ride Standard",
    text: "100% Tuition Remission + Livable Monthly Stipends ($1,200–$3,800/mo) Standard",
    variant: "emerald"
  },
  {
    id: "european-phd-contracts",
    badge: "European Employment",
    text: "Salaried Doctoral Positions (Sweden, Netherlands, Norway, Denmark, Switzerland)",
    variant: "cyan"
  },
  {
    id: "cgs-charter",
    badge: "CGS Resolution",
    text: "April 15 Binding Offer Acceptance Window Enforced Across 400+ North American Institutions",
    variant: "indigo"
  },
  {
    id: "verified-countries",
    badge: "Global Roadmap",
    text: "Country guides across Europe, North America, Asia & Oceania with official portals for AI/ML and CS research applicants",
    variant: "purple"
  },
  {
    id: "open-access",
    badge: "100% Free & Open",
    text: "No login, no account, no fees: a free roadmap for AI/ML and CS research scholars worldwide",
    variant: "amber"
  }
];

export const liveIndicatorData = {
  status: "ONLINE",
  label: "Fully Funded Guide",
  detail: "2026–2027 Admissions Open",
  activePillText: "Fully Funded Graduate Roadmap"
};

export const headerData = {
  brand: {
    primary: brand.first,
    secondary: brand.second,
    badge: "Open Access Guide",
    tagline: "Fully Funded AI/ML & CS Research"
  },
  actions: {
    statusBadge: "Fully Funded Guide",
    searchButton: {
      label: "Search scholarships...",
      shortLabel: "Search...",
      shortcut: "⌘K",
      href: "/scholarships"
    },
    ctaButton: {
      label: "Start Here",
      href: "/steps"
    },
    menuAriaLabel: "Toggle navigation menu"
  },
  mobileDrawer: {
    moreTitle: "More",
    title: brand.name,
    subtitle: "Fully funded AI/ML and CS research programs worldwide",
    ctaButton: {
      label: "Start 13-Phase Roadmap",
      href: "/roadmap"
    }
  }
};

/** The main navigation: the four places a visitor starts from. Everything else is in "more" and the footer. */
export const navLinksData: NavLinkItem[] = [
  { href: "/steps", label: "Roadmap", iconName: "Map", matches: ["/roadmap", "/profile", "/apply"] },
  { href: "/guides", label: "Guides", iconName: "BookOpen", matches: ["/documents", "/problems", "/glossary"] },
  { href: "/directory", label: "Directory", iconName: "Building2", matches: ["/countries", "/scholarships", "/professors"] },
  { href: "/planner", label: "Planner", iconName: "ClipboardCheck", matches: ["/saved"] }
];

/** The call to action beside the navigation. */
export const supportLinkData: NavLinkItem = { href: "/support", label: "Support", iconName: "HeartHandshake" };

/** Pages that are not in the main navigation but still need a way in on small screens. */
export const moreLinksData: NavLinkItem[] = [
  { href: "/apply", label: "How to apply", iconName: "" },
  { href: "/faqs", label: "FAQs", iconName: "" },
  { href: "/saved", label: "Saved", iconName: "" },
  { href: "/about", label: "About", iconName: "" },
  { href: "/contact", label: "Contact", iconName: "" }
];

/** Every page, used by the simple footer. */
export const footerLinksData: NavLinkItem[] = [
  { href: "/steps", label: "6 Steps", iconName: "" },
  { href: "/profile", label: "Profile", iconName: "" },
  { href: "/apply", label: "How to apply", iconName: "" },
  { href: "/guides", label: "Guides", iconName: "" },
  { href: "/directory", label: "Directory", iconName: "" },
  { href: "/countries", label: "Countries", iconName: "" },
  { href: "/scholarships", label: "Scholarships", iconName: "" },
  { href: "/professors", label: "Professors", iconName: "" },
  { href: "/documents", label: "Documents", iconName: "" },
  { href: "/faqs", label: "FAQs", iconName: "" },
  { href: "/problems", label: "Problems", iconName: "" },
  { href: "/planner", label: "Planner", iconName: "" },
  { href: "/saved", label: "Saved", iconName: "" },
  { href: "/glossary", label: "Glossary", iconName: "" },
  { href: "/about", label: "About", iconName: "" },
  { href: "/disclaimer", label: "Disclaimer", iconName: "" },
  { href: "/privacy", label: "Privacy", iconName: "" },
  { href: "/support", label: "Support", iconName: "" },
  { href: "/contact", label: "Contact", iconName: "" }
];

export const footerData = {
  brand: {
    name: brand.name,
    tagline: "A free, open-access roadmap that guides Computer Science students in AI/ML research and engineering to fully funded Master's and PhD programs worldwide.",
    badge: "100% Fully Funded Standard"
  },
  roadmapNavigation: [
    { href: "/roadmap", label: "Complete 13-Phase Roadmap" },
    { href: "/roadmap?degree=masters", label: "Master's Scholarship Pathway" },
    { href: "/roadmap?degree=phd", label: "PhD Funding Pathway" },
    { href: "/roadmap#phase-01", label: "Phase 01: Profile Audit" },
    { href: "/roadmap#phase-05", label: "Phase 05: Professor Outreach" },
    { href: "/roadmap#phase-11", label: "Phase 11: Funding Offer Audit" }
  ],
  directoryAndTools: [
    { href: "/directory/countries", label: "Country Funding Guides" },
    { href: "/scholarships", label: "11-Step Scholarship Finder" },
    { href: "/professors", label: "AI/ML Professor Outreach & Email Templates" },
    { href: "/documents", label: "Required Documents & SOP Blueprint" },
    { href: "/faqs", label: "Admissions & Funding FAQs" }
  ],
  keyDatabases: [
    { href: "https://euraxess.ec.europa.eu/jobs", label: "EURAXESS European Research Jobs", external: true },
    { href: "https://www.daad.de/en/", label: "DAAD German Exchange Service", external: true },
    { href: "https://www.campusfrance.org/en", label: "Campus France Bourses", external: true },
    { href: "https://foreign.fulbrightonline.org/", label: "Fulbright Foreign Student Program", external: true },
    { href: "https://www.chevening.org/", label: "UK Chevening Scholarships", external: true }
  ],
  sections: {
    roadmap: "Roadmap Pathways",
    tools: "Guides & Toolkits",
    databases: "Official Portals"
  },
  subtext: "Built for ambitious AI/ML and Computer Science research applicants",
  copyright: `© 2026 ${brand.name}. Free, open-access educational resource for AI/ML and Computer Science research applicants. Not affiliated with any commercial agency.`
};
