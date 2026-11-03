export interface RoadmapStepSummary {
  step: number;
  href: string;
  title: string;
  when: string;
  actions: string[];
}

export interface ProfileItem {
  title: string;
  detail: string;
  priority: "Must have" | "Strong plus" | "Bonus";
}

export interface Challenge {
  problem: string;
  fix: string;
}

