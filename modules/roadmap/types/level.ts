export interface RoadmapLevelMilestone {
  title: string;
  desc: string;
  deliverable: string;
}

export interface RoadmapLevel {
  id: string;
  levelNumber: number;
  slug: string;
  badge: string;
  title: string;
  shortTitle: string;
  tagline: string;
  timeline: string;
  difficulty: "Fundamental" | "Intensive" | "Strategic" | "Critical" | "Elite";
  accentColor: "indigo" | "cyan" | "emerald" | "amber" | "purple";
  iconName: string;
  phasesIncluded: string[];
  stepIds: string[];
  totalSteps: number;
  estimatedHours: string;
  objective: string;
  milestones: RoadmapLevelMilestone[];
  coreCompetencies: string[];
  keyDeliverable: string;
  recommendedVenuesOrTools: string[];
  facultyInsightQuote: {
    quote: string;
    author: string;
    affiliation: string;
  };
}
