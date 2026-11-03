export type PriorityLevel = "Crucial" | "Recommended" | "Optional";

export type DegreeLevel = "PhD" | "MS Thesis" | "Both";

export type FundingType =
  | "Graduate Research Assistantship (GRA)"
  | "Graduate Teaching Assistantship (GTA)"
  | "Salaried Researcher Contract"
  | "Institutional Fellowship"
  | "Government Fellowship";

export interface FaqCategoryCard {
  name: string;
  desc: string;
  tag: string;
  iconName: string;
  variant: "purple" | "cyan" | "emerald" | "amber";
}

export interface LaunchpadCard {
  title: string;
  desc: string;
  href: string;
  iconName: string;
}
