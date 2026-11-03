export interface GuideGroup {
  title: string;
  ids: string[];
}

export const guideGroups: GuideGroup[] = [
  { title: "Plan", ids: ["research-area", "master-vs-phd", "no-research-background", "funding-types", "budget-planning", "deadlines-timeline"] },
  { title: "Documents", ids: ["cv", "sop", "research-proposal", "reference-letter", "proof-letters", "document-attestation", "grade-conversion"] },
  { title: "Tests, fees and portals", ids: ["ielts", "toefl", "english-and-gre", "application-fee", "application-portals"] },
  { title: "Reach professors", ids: ["cold-email", "publications", "github-portfolio", "interview-prep"] },
  { title: "After the offer", ids: ["offer-comparison", "negotiating-and-declining", "visa-interview", "arrival-checklist", "scholarship-scams"] }
];
