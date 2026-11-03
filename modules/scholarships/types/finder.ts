export interface SearchWorkflowStep {
  number: number;
  title: string;
  category: "Discovery" | "Validation" | "Safety";
  summary: string;
  actionableInstructions: string[];
  keyToolsOrKeywords: string[];
}

export interface SearchQueryFormula {
  id: string;
  title: string;
  purpose: string;
  query: string;
  exampleFilled: string;
  targetEngines: string[];
}

export interface VerifiedScholarshipPortal {
  id: string;
  name: string;
  countryOrRegion: string;
  governingBody: string;
  url: string;
  coverageType: "Full Tuition + Living Stipend" | "Salaried Employment" | "Tuition Offset + Living Grant";
  notes: string;
}
