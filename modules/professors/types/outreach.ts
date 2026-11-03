export interface OutreachStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedProtocol: string;
}

export interface OutreachEmailBlueprint {
  id: string;
  type: "phd-cold-inquiry" | "masters-research-inquiry" | "polite-follow-up";
  name: string;
  targetAudience: string;
  subjectLines: string[];
  body: string;
  wordCount: string;
  recommendedAttachments: string[];
  tips: string[];
}

export interface SupervisorNecessityRule {
  country: string;
  degreeLevel: string;
  necessity: "Strictly Required Before Application" | "Recommended" | "Centralized / Not Required";
  rationale: string;
}
