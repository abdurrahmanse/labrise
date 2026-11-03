import { PriorityLevel } from "./common";

export interface ResourceItem {
  title: string;
  url: string;
  type: "tool" | "paper" | "guide" | "official" | "database";
  description?: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  detail: string;
  completedDefault?: boolean;
}

export interface RoadmapStep {
  id: string;
  phaseId: string;
  stepNumber: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  duration: string;
  priority: PriorityLevel;
  keyObjective: string;
  description: string;
  checklist: ChecklistItem[];
  proTips: string[];
  commonPitfalls: string[];
  deliverable: string;
  codeSnippet?: {
    language: string;
    caption: string;
    code: string;
  };
  resources: ResourceItem[];
}

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

export interface Phase {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  timeline: string;
  durationMonths: string;
  summary: string;
  iconName: string;
  badgeColor: string;
  accentColor: string;
  deliverables: string[];
  stepsCount: number;
}

export interface NavAnchorItem {
  id: string;
  label: string;
  count?: string;
  iconName?: string;
}
