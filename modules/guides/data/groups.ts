export interface GuideGroup {
  title: string;
  ids: string[];
}

export const guideGroups: GuideGroup[] = [
  { title: "Plan", ids: ["research-area", "master-vs-phd", "no-research-background", "weak-profile", "funding-types", "read-a-call", "budget-planning", "deadlines-timeline"] },
  { title: "Documents", ids: ["cv", "sop", "scholarship-essay", "research-proposal", "reference-letter", "proof-letters", "document-attestation", "grade-conversion"] },
  { title: "Tests, fees and portals", ids: ["ielts", "toefl", "english-and-gre", "application-fee", "application-portals"] },
  { title: "Reach professors", ids: ["cold-email", "publications", "github-portfolio", "interview-prep"] },
  { title: "After the offer", ids: ["after-acceptance", "offer-comparison", "negotiating-and-declining", "visa-interview", "housing-and-insurance", "arrival-checklist", "scholarship-scams"] }
];
