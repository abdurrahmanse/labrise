export interface PageSection {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  badge?: string;
  content: string;
  highlights?: string[];
  dataPoints?: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  cards?: {
    title: string;
    description: string;
    tag?: string;
    icon?: string;
    bulletPoints?: string[];
    actionUrl?: string;
    actionLabel?: string;
  }[];
}

export interface MultiPageData {
  pageId: string;
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    tertiaryCta?: { label: string; href: string };
  };
  sections: PageSection[];
}

export const faqsPageData: MultiPageData = {
  pageId: "faqs",
  slug: "/faqs",
  title: "Research Admissions FAQs for Engineering Applicants",
  metaDescription:
    "Straight answers for engineering research applicants: IELTS requirements, GPA importance, supervisor outreach, tuition waivers and reapplication.",
  hero: {
    badge: "Research Admissions Answers",
    title: "Research Master's & PhD FAQs for",
    highlightWord: "Engineering Applicants",
    subtitle:
      "Clear answers to the questions research applicants ask most: applying without IELTS, an average GPA, contacting professors, tuition waivers, funding and what to do after a rejection.",
    primaryCta: { label: "Pre-Flight Checklist", href: "#readiness-checklist" },
    secondaryCta: { label: "Search Questions", href: "#faq-list" }
  },
  sections: [
    {
      id: "faq-categories",
      sectionNumber: 1,
      badge: "Topic Breakdown",
      title: "Explore FAQs by Core Category",
      subtitle: "Filter questions across eligibility and tests, supervisor outreach, funding and strategy",
      content: "The questions are grouped into four areas so you can go straight to the one that worries you.",
      cards: [
        {
          title: "Eligibility & Tests",
          description: "English test waivers (IELTS/TOEFL/MOI), GPA cutoffs and how to offset them, and what research output is expected.",
          tag: "Eligibility",
          icon: "Compass",
          bulletPoints: ["IELTS exemptions & MOI", "Low GPA compensation", "Applying without papers", "Direct PhD eligibility"]
        },
        {
          title: "Outreach & Supervisors",
          description: "When contacting professors is required, cold email etiquette, follow-ups and what to do when nobody replies.",
          tag: "Supervisors",
          icon: "Users",
          bulletPoints: ["Supervisor necessity rules", "Email response protocols", "Canadian/Australian rules", "US rotation systems"]
        },
        {
          title: "Funding & Finance",
          description: "Tuition waiver versus fully funded packages, living stipends, salaried contracts and how to spot fraud.",
          tag: "Funding",
          icon: "DollarSign",
          bulletPoints: ["Full-ride vs partial waiver", "Stipend sufficiency", "Anti-fraud verification", "Doctoral salaries"]
        },
        {
          title: "Strategy & Preparation",
          description: "A sensible preparation timeline, applying to several countries and learning from a rejection.",
          tag: "Strategy",
          icon: "ShieldCheck",
          bulletPoints: ["12-18 month timeline", "Multiple country portfolio", "Fresh graduate rules", "Reapplication post-mortem"]
        }
      ]
    },
    {
      id: "faq-list",
      sectionNumber: 2,
      badge: "Knowledge Base",
      title: "Answers to Common Applicant Questions",
      subtitle: "Short explanations that point you to the official rules",
      content: "These are the questions engineering research applicants ask us most. Always confirm details on the official page of your programme.",
      cards: [
        {
          title: "Can I apply directly for a fully funded PhD after a 4-year Bachelor's degree?",
          description: "Often yes. In the US and Canada many engineering PhD programmes admit students directly after a Bachelor's degree, and Europe often asks for a Master's. Check the entry rules of each programme.",
          tag: "Admissions Strategy"
        },
        {
          title: "Do I need a published paper to get a funded research place?",
          description: "A paper is a strong signal but rarely a rule. Committees look for research maturity: a thesis, a conference or journal paper, a well-documented project or a research internship.",
          tag: "Research & Publications"
        },
        {
          title: "Is the GRE still required for engineering research programmes?",
          description: "Many programmes have dropped it or made it optional, and the rule changes by department and year. Read the admissions page of each programme before you register for the test.",
          tag: "Testing Requirements"
        },
        {
          title: "My GPA is average. Can I still win a funded research place?",
          description: "Yes, if the rest of your profile is strong. Show an upward trend, research output, strong letters and a focused statement of purpose that matches the professor's work.",
          tag: "Admissions Strategy"
        },
        {
          title: "Who pays for lab equipment, software and computing in a funded research degree?",
          description: "Funded students do not pay for research equipment. The lab and its grants provide instruments, software licences and computing resources. Ask the professor what you will be able to use.",
          tag: "Funding & Resources"
        },
        {
          title: "Do research Master's and PhD students earn money in the summer?",
          description: "Many funded programmes pay for twelve months through research assistantships or salaried contracts, and some students add paid industry internships. The terms are written in your offer letter.",
          tag: "Funding & Money"
        },
        {
          title: "When should I start emailing professors?",
          description: "Start six to ten months before the deadline. In many countries the autumn before a winter deadline is the best moment, because professors know their budgets for the next year.",
          tag: "Admissions Strategy"
        }
      ]
    },
    {
      id: "readiness-checklist",
      sectionNumber: 3,
      badge: "Final Sanity Check",
      title: "Pre-Flight Application Readiness Checklist",
      subtitle: "Check that your application satisfies the five pillars before you submit",
      content: "Make sure every important item is in place before you press submit on the deadline.",
      highlights: [
        "Verified that each target programme is fully funded through a tuition waiver plus a monthly stipend or salary",
        "Confirmed the English test score the programme or the funder asks for",
        "Requested all recommendation letters and sent each referee your CV and deadlines",
        "Checked the waiver option on every application portal that asks about recommendation access",
        "Made your research outputs (papers, code, reports) easy to open and read"
      ]
    }
  ]
};
