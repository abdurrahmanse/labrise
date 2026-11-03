import { FAQItem } from "./types";

export const faqsHeaderData = {
  badge: "Admissions & Funding FAQs",
  title: "Frequently Asked Questions",
  subtitle:
    "Clear, realistic answers to the 12 most critical scholarship and postgraduate admissions questions.",
  searchPlaceholder: "Search questions by topic (e.g., IELTS, GPA, cold email, supervisor)...",
  categories: ["All", "Eligibility & Tests", "Outreach & Supervisors", "Funding & Finance", "Strategy & Preparation"]
};

export const faqsData: FAQItem[] = [
  {
    id: "faq-without-ielts",
    question: "Can I obtain a fully funded Master's scholarship without IELTS?",
    answer:
      "Yes, in three common situations: (1) Medium of Instruction (MOI) waivers: If your undergraduate degree was taught entirely in English, many European universities accept an official MOI certificate. (2) Alternative tests: Many programs accept TOEFL iBT, Duolingo English Test (DET), or Cambridge English. (3) Bilateral language prep: Government awards like Chinese CSC, Korean GKS, and Turkish Burslari include a funded preparatory language year. Note: US, UK, and Australian programs strictly mandate standardized test scores.",
    category: "Eligibility & Tests",
    tags: ["IELTS", "TOEFL", "MOI Certificate", "Language Waiver", "Duolingo"]
  },
  {
    id: "faq-high-gpa-necessary",
    question: "Is a high GPA always necessary to secure a fully funded scholarship?",
    answer:
      "No. While a 3.7+ GPA helps, admissions committees evaluate candidates holistically. You can offset an average GPA (3.0–3.3) with: (1) Strong research deliverables (thesis, preprints, code); (2) An upward grade trend in your final two years; (3) High quantitative GRE scores if accepted; (4) Strong faculty recommendation letters; and (5) European salaried PhD roles where practical lab experience carries heavy weight.",
    category: "Eligibility & Tests",
    tags: ["GPA", "Holistic Admissions", "Profile Compensation", "Low GPA"]
  },
  {
    id: "faq-phd-contact-professor",
    question: "Do all PhD applications require contacting a professor beforehand?",
    answer:
      "No, this depends on the country: (1) Mandatory: In Canada, Australia, New Zealand, and traditional German individual doctorates, you must secure a supervisor before applying. (2) Centralized Admissions: In the US, most PhDs use departmental committee admissions with first-year lab rotations. (3) Direct Job Vacancies: In Sweden, Denmark, the Netherlands, and Norway, PhDs are salaried jobs advertised on university job boards.",
    category: "Outreach & Supervisors",
    tags: ["Supervisor Outreach", "PhD Admissions", "Canada vs US", "European Models"]
  },
  {
    id: "faq-apply-without-publications",
    question: "Can I apply for a fully funded graduate position without any publications?",
    answer:
      "Yes. For Master's scholarships (DAAD, Eiffel, Chevening, Swedish Institute), peer-reviewed papers are rarely expected—committees look at grades, course prerequisites, and motivation. For PhDs, top universities regularly admit students without publications if they have a rigorous undergraduate thesis, strong coding/lab skills, and strong faculty recommendation letters.",
    category: "Eligibility & Tests",
    tags: ["Publications", "Undergraduate Research", "Thesis", "First-Time Applicant"]
  },
  {
    id: "faq-multiple-countries",
    question: "Can I apply to multiple countries simultaneously?",
    answer:
      "Yes, and you should. A balanced portfolio protects you against single-country visa delays and funding quotas. A strong strategy targets 8–12 programs across 2–3 regions (e.g. 4 North American universities with assistantships, 3 European salaried roles or tuition-free universities, and 2 Asian government scholarships like MEXT or SINGA).",
    category: "Strategy & Preparation",
    tags: ["Strategy", "Portfolio Approach", "Deadlines", "Multiple Countries"]
  },
  {
    id: "faq-timeline-preparation",
    question: "When should I start preparing my scholarship applications?",
    answer:
      "Start 12 to 18 months before enrollment. For a Fall intake: (1) June–August: Audit your profile, take language tests, research countries; (2) September–November: Email professors, draft your SOP and proposal, brief recommenders; (3) December–January: Submit applications; (4) March–May: Complete interviews and evaluate offers; (5) June–August: Secure your visa and housing.",
    category: "Strategy & Preparation",
    tags: ["Timeline", "Application Calendar", "Preparation", "Deadlines"]
  },
  {
    id: "faq-fresh-graduate",
    question: "Can a fresh graduate apply directly without full-time work experience?",
    answer:
      "Yes. For research-based Master's and PhD programs, fresh graduates are strong candidates because their academic foundation is fresh. In North America, students routinely enter direct-entry PhDs straight from a Bachelor's. However, specific leadership programs require experience: UK Chevening requires 2 years of work, and the Swedish SISGP requires 3,000 hours of documented experience.",
    category: "Eligibility & Tests",
    tags: ["Fresh Graduate", "Work Experience", "Direct Entry", "Bilateral Rules"]
  },
  {
    id: "faq-tuition-waiver-vs-fully-funded",
    question: "What is the difference between a tuition waiver and a fully funded scholarship?",
    answer:
      "A tuition waiver only discounts tuition fees—it does NOT pay for rent, food, health insurance, or travel, leaving you with $12,000–$25,000/year in living costs. A fully funded scholarship covers 100% of tuition AND provides a livable monthly stipend ($1,200–$3,500/month) plus health insurance, eliminating out-of-pocket expenses.",
    category: "Funding & Finance",
    tags: ["Tuition Waiver", "Fully Funded", "Living Stipend", "Financial Audit"]
  },
  {
    id: "faq-supervisor-necessity",
    question: "Is it necessary to have an agreed supervisor before applying?",
    answer:
      "It depends on the system: (1) Required: Canada (thesis Master's/PhD), Australia/New Zealand (research degrees), and traditional German individual doctorates require an agreed supervisor. (2) Not Required: US PhDs (which use committee admissions and first-year lab rotations), European taught Master's, and UK Doctoral Training Centres do not require prior supervisor agreement.",
    category: "Outreach & Supervisors",
    tags: ["Supervisor", "Admissions Rules", "Rotations", "Direct Application"]
  },
  {
    id: "faq-identify-fraud",
    question: "How can I identify and protect myself from fraudulent scholarship offers?",
    answer:
      "Follow 4 rules: (1) Real scholarships NEVER charge fees to award money—any 'claim fee' or 'file release fee' is a scam. (2) Check email domains: Official emails always come from institutional domains (.edu, .ac.uk, .de, .fr), never free webmail like Gmail. (3) No agency can guarantee scholarship selection. (4) Always verify opportunities directly on official university or embassy portals.",
    category: "Funding & Finance",
    tags: ["Scam Prevention", "Safety", "Official Portals", "Fraud Detection"]
  },
  {
    id: "faq-professor-no-reply",
    question: "What should I do if a professor does not reply to my email?",
    answer:
      "Professors receive hundreds of emails daily. Follow this process: (1) Wait 7 to 10 working days; (2) Send a single, polite 2-sentence follow-up on the same email thread; (3) If there is still no reply after another week, move on to other faculty members. Never call personal numbers, message on WhatsApp, or send multiple follow-ups.",
    category: "Outreach & Supervisors",
    tags: ["Cold Emailing", "Follow-up", "Professor Etiquette", "Email Protocol"]
  },
  {
    id: "faq-rejection-recovery",
    question: "How should I prepare and recover if all my applications are rejected?",
    answer:
      "Rejection is common and often reflects cohort quotas or grant timing. Recover systematically: (1) Audit your dossier for weak research fit, low test scores, or generic SOPs; (2) Spend 6–12 months adding qualifications (lab research assistantship, a workshop paper, or higher test scores); (3) Broaden your target universities across different countries; (4) Rewrite your SOP with updated achievements and apply early in the next cycle.",
    category: "Strategy & Preparation",
    tags: ["Rejection", "Reapplication", "Profile Improvement", "Bridge Year"]
  }
];

export const getFaqsByCategory = (category: FAQItem["category"]): FAQItem[] => {
  return faqsData.filter((faq) => faq.category === category);
};
