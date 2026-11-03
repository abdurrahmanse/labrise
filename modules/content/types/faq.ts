export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | "Eligibility & Tests"
    | "Outreach & Supervisors"
    | "Funding & Finance"
    | "Strategy & Preparation"
    | "Funding & Money"
    | "Admissions & Strategy"
    | "Research & Code"
    | "Testing & Requirements"
    | "Visa & Relocation";
  tags: string[];
}
