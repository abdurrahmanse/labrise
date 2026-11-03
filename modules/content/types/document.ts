export interface DocumentGuideline {
  id: string;
  name: string;
  badge: string;
  degreeLevel: "Universal" | "Master's Heavy" | "PhD / Research Master's";
  what: string;
  why: string;
  structure: { section: string; guidance: string }[];
  commonMistakes: string[];
  officialChecks: string[];
  checklistItems: { id: string; label: string; tip?: string }[];
}
