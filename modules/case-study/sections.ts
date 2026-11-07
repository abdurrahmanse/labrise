import type { ComponentType } from "react";
import { CallSection } from "./components/CallSection";
import { EffortSection } from "./components/EffortSection";
import { SearchSection } from "./components/SearchSection";
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
  { id: "search", label: "Finding opportunities", title: "How she found groups and funding", lead: "Her search method, the queries she ran and the log she kept before any email.", Body: SearchSection },
  { id: "choosing", label: "Choosing universities", title: "How she chose country and universities", lead: "Criteria, a shrinking shortlist and a scoring table.", Body: ChoiceSection },
  { id: "outreach", label: "Emailing professors", title: "How she contacted professors", lead: "The real emails, the follow-up, the reply and her tracker.", Body: OutreachSection },
  { id: "call", label: "The professor call", title: "The call with the professor", lead: "Preparation, the 30-minute agenda, her questions and what she did afterwards.", Body: CallSection },
  { id: "package", label: "Application package", title: "SOP, CV, proposal and referees", lead: "Sample extracts, how her drafts improved and the email that secured her references.", Body: PackageSection },
  { id: "funding", label: "Funding and scholarship", title: "Funding and the scholarship application", lead: "Where the 100% came from, and how she applied for a scholarship as a second layer.", Body: FundingSection },
  { id: "effort", label: "Cost and effort", title: "What it cost and how long it took", lead: "Indicative costs and hours. Fees change, so check each official page.", Body: EffortSection },
  { id: "plan", label: "Plan", title: "Her plan, month by month", lead: "Seven phases over 14 months. Each step shows what she finished and the guide she followed.", Body: PlanTimeline },
  { id: "results", label: "Results", title: "Interviews, results and the decision", lead: "Offers, silence and a rejection. Real journeys are mixed.", Body: ResultsSection },
  { id: "arrival", label: "Visa and arrival", title: "Visa, money and arrival", lead: "What she did between accepting and landing.", Body: ArrivalSection },
  { id: "lessons", label: "Lessons", title: "What to copy", lead: "The habits behind the result, and your next steps.", Body: LessonsSection }
];
