import type { ComponentType } from "react";
import { AcademicsSection } from "./components/AcademicsSection";
import { ArrivalSection } from "./components/ArrivalSection";
import { ChoiceSection } from "./components/ChoiceSection";
import { FundingSection } from "./components/FundingSection";
import { IdentitySection } from "./components/IdentitySection";
import { LessonsSection } from "./components/LessonsSection";
import { OutreachSection } from "./components/OutreachSection";
import { PackageSection } from "./components/PackageSection";
import { PlanTimeline } from "./components/PlanTimeline";
import { ProfileSection } from "./components/ProfileSection";
import { ResearchSection } from "./components/ResearchSection";
import { ResultsSection } from "./components/ResultsSection";

export interface CaseSection { id: string; label: string; title: string; lead: string; Body: ComponentType }

/** The parts of the case study in the order a student meets them. The page and the side links both read this list. */
export const SECTIONS: CaseSection[] = [
  { id: "profile", label: "Profile", title: "Student profile", lead: "The facts a supervisor or committee sees first.", Body: ProfileSection },
  { id: "identity", label: "Identity and documents", title: "Passport and documents", lead: "A specimen passport page and every file she prepared, each linked to its guide.", Body: IdentitySection },
  { id: "academics", label: "Academic record", title: "Education and test results", lead: "Grades with their scale, and only the tests her programmes needed.", Body: AcademicsSection },
  { id: "research", label: "Research match", title: "Research profile and matching", lead: "What she works on, and how she checked that a lab was a real fit.", Body: ResearchSection },
  { id: "choosing", label: "Choosing universities", title: "How she chose country and universities", lead: "Criteria, a shrinking shortlist and a scoring table.", Body: ChoiceSection },
  { id: "outreach", label: "Emailing professors", title: "How she contacted professors", lead: "The real emails, the follow-up, the reply and her tracker.", Body: OutreachSection },
  { id: "package", label: "Application package", title: "SOP, CV and research proposal", lead: "Sample extracts and the choices behind them.", Body: PackageSection },
  { id: "funding", label: "Funding", title: "Funding in writing", lead: "Where the 100% came from, and the backup.", Body: FundingSection },
  { id: "plan", label: "Plan", title: "Her plan, month by month", lead: "Seven phases over 14 months. Each step shows what she finished and the guide she followed.", Body: PlanTimeline },
  { id: "results", label: "Results", title: "Interviews, results and the decision", lead: "Offers, silence and a rejection. Real journeys are mixed.", Body: ResultsSection },
  { id: "arrival", label: "Visa and arrival", title: "Visa, money and arrival", lead: "What she did between accepting and landing.", Body: ArrivalSection },
  { id: "lessons", label: "Lessons", title: "What to copy", lead: "The habits behind the result, and your next steps.", Body: LessonsSection }
];
