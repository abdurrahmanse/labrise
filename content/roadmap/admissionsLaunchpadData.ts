export interface AdmissionsLaunchpadItem {
  id: string;
  title: string;
  description: string;
  href: string;
  iconName: "Compass" | "Award" | "Mail" | "FileText";
  ctaLabel: string;
  accentColor: "teal" | "emerald" | "indigo" | "cyan";
}

export interface AdmissionsLaunchpadData {
  badge: string;
  title: string;
  sublabel: string;
  items: AdmissionsLaunchpadItem[];
}

export const admissionsLaunchpadData: AdmissionsLaunchpadData = {
  badge: "Integrated Scholarship Engine",
  title: "Accompanying Application Toolkits & Databases",
  sublabel: "100% Free & Open-Access",
  items: [
    {
      id: "countries",
      title: "Country Guides",
      description: "Funding models, supervisor requirements, and official portals for 20+ countries.",
      href: "/countries",
      iconName: "Compass",
      ctaLabel: "Explore Countries →",
      accentColor: "teal",
    },
    {
      id: "scholarships",
      title: "Scholarship Finder",
      description: "Verified government directories, Boolean formulas, and anti-fraud protocols.",
      href: "/scholarships",
      iconName: "Award",
      ctaLabel: "Search Portals →",
      accentColor: "emerald",
    },
    {
      id: "professors",
      title: "Professor Outreach",
      description: "Cold email blueprints, subject formulas, and research fit checklist.",
      href: "/professors",
      iconName: "Mail",
      ctaLabel: "Copy Templates →",
      accentColor: "indigo",
    },
    {
      id: "documents",
      title: "Document Guidelines",
      description: "Full architectures for Academic CV, SOP, Motivation Letter, and Proposals.",
      href: "/documents",
      iconName: "FileText",
      ctaLabel: "View Guidelines →",
      accentColor: "cyan",
    },
  ],
};
