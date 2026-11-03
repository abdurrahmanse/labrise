export interface PhaseChecklistItem {
  id: string;
  label: string;
  tip?: string;
}

export interface PhaseOfficialResource {
  name: string;
  url: string;
  description: string;
  isExternal?: boolean;
}

export interface PhaseHowToStep {
  step: string;
  detail: string;
}

export interface RoadmapPhase {
  id: string;
  number: number;
  slug: string;
  title: string;
  tagline: string;
  estimatedDuration: string;
  degreeScope: "both" | "masters" | "phd";
  what: string;
  why: string;
  how: PhaseHowToStep[];
  where: PhaseOfficialResource[];
  commonMistakes: string[];
  practicalExample: string;
  checklist: PhaseChecklistItem[];
  mastersNuance: string;
  phdNuance: string;
  nextStep: {
    slug: string;
    title: string;
  };
}
