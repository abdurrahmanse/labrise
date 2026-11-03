export type PriorityLevel = "Crucial" | "Recommended" | "Optional";

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
