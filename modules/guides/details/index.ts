import { researchAreaGuide } from "./research-area";
import { cvGuide } from "./cv";
import { sopGuide } from "./sop";
import { researchProposalGuide } from "./research-proposal";
import { referenceLetterGuide } from "./reference-letter";
import { ieltsGuide } from "./ielts";
import { toeflGuide } from "./toefl";
import { proofLettersGuide } from "./proof-letters";
import { applicationFeeGuide } from "./application-fee";
import { visaInterviewGuide } from "./visa-interview";
import { coldEmailGuide } from "./cold-email";
import { interviewPrepGuide } from "./interview-prep";
import { fundingTypesGuide } from "./funding-types";
import { deadlinesTimelineGuide } from "./deadlines-timeline";
import { offerComparisonGuide } from "./offer-comparison";
import { scholarshipScamsGuide } from "./scholarship-scams";
import { englishAndGreGuide } from "./english-and-gre";
import { masterVsPhdGuide } from "./master-vs-phd";
import { publicationsGuide } from "./publications";
import { githubPortfolioGuide } from "./github-portfolio";
import { gradeConversionGuide } from "./grade-conversion";
import { applicationPortalsGuide } from "./application-portals";
import { noResearchBackgroundGuide } from "./no-research-background";
import { arrivalChecklistGuide } from "./arrival-checklist";
import { negotiatingAndDecliningGuide } from "./negotiating-and-declining";
import { documentAttestationGuide } from "./document-attestation";
import { budgetPlanningGuide } from "./budget-planning";
import type { GuideDetail } from "../types";

export const guideDetails: GuideDetail[] = [
  researchAreaGuide,
  cvGuide,
  sopGuide,
  researchProposalGuide,
  referenceLetterGuide,
  ieltsGuide,
  toeflGuide,
  proofLettersGuide,
  applicationFeeGuide,
  visaInterviewGuide,
  coldEmailGuide,
  interviewPrepGuide,
  fundingTypesGuide,
  deadlinesTimelineGuide,
  offerComparisonGuide,
  scholarshipScamsGuide,
  englishAndGreGuide,
  masterVsPhdGuide,
  publicationsGuide,
  githubPortfolioGuide,
  gradeConversionGuide,
  applicationPortalsGuide,
  noResearchBackgroundGuide,
  arrivalChecklistGuide,
  negotiatingAndDecliningGuide,
  documentAttestationGuide,
  budgetPlanningGuide
];

export const getGuideDetail = (id: string) => guideDetails.find((g) => g.id === id);
