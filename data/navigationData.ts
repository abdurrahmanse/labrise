export interface NavLinkItem {
  href: string;
  label: string;
  iconName: string;
  badge?: string;
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
    text: "20 Country Guides Across Europe, North America, Asia & Oceania with Official Portals",
    variant: "purple"
  },
  {
    id: "open-access",
    badge: "100% Free & Open",
    text: "No Login, No Account, No Fees: A Pure Educational Roadmap for Scholars Worldwide",
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
    primary: "Scholarship",
    secondary: "Roadmap",
    badge: "Open Access Guide",
    tagline: "Fully Funded Master's & PhD"
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
    title: "Scholarship Roadmap",
    subtitle: "Navigate fully funded graduate programs worldwide",
    ctaButton: {
      label: "Start 13-Phase Roadmap",
      href: "/roadmap"
    }
  }
};

export const navLinksData: NavLinkItem[] = [
  { href: "/steps", label: "Roadmap", iconName: "Map" },
  { href: "/apply", label: "Apply", iconName: "ClipboardCheck" },
  { href: "/guides", label: "Guides", iconName: "BookOpen" },
  { href: "/directory", label: "Directory", iconName: "Building2" },
  { href: "/faqs", label: "FAQs", iconName: "HelpCircle" }
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
  { href: "/about", label: "About", iconName: "" },
  { href: "/disclaimer", label: "Disclaimer", iconName: "" },
  { href: "/privacy", label: "Privacy", iconName: "" },
  { href: "/contact", label: "Contact", iconName: "" }
];

export const footerData = {
  brand: {
    name: "Scholarship Roadmap",
    tagline: "The comprehensive, open-access educational roadmap guiding international students to fully funded Master's and PhD scholarships worldwide.",
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
    { href: "/countries", label: "20 Country Funding Guides" },
    { href: "/scholarships", label: "11-Step Scholarship Finder" },
    { href: "/professors", label: "Professor Cold Email Generator" },
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
  subtext: "Crafted for ambitious Master's & PhD scholars worldwide",
  copyright: "© 2026 Scholarship Roadmap. Free, open-access educational resource. Not affiliated with any commercial agency."
};
