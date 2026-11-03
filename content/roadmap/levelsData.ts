import { RoadmapLevel } from "./types";

export const roadmapLevelsData: RoadmapLevel[] = [
  {
    id: "level-1",
    levelNumber: 1,
    slug: "level-1",
    badge: "LEVEL 01 • FOUNDATIONAL RIGOR",
    title: "Academic Foundations & Profile Preparation",
    shortTitle: "Foundations & Profile Audit",
    tagline: "Build a strong theoretical foundation, calculate your true GPA, and audit your academic strengths.",
    timeline: "Months 1–6 (24-Month Journey)",
    difficulty: "Fundamental",
    accentColor: "indigo",
    iconName: "Cpu",
    phasesIncluded: ["phase-01"],
    stepIds: ["step-0-1", "step-0-2", "step-0-3", "step-0-4", "step-0-5"],
    totalSteps: 5,
    estimatedHours: "15–20 hrs/week",
    objective: "Establish academic rigor in core coursework, calculate your true GPA on international scales, and build foundational technical or quantitative project skills.",
    milestones: [
      {
        title: "Academic Transcript Audit",
        desc: "Convert your GPA to international scales (US 4.0 and German 1.0–4.0) and identify missing course prerequisites.",
        deliverable: "Standardized GPA calculation sheet"
      },
      {
        title: "Core Project Portfolio",
        desc: "Complete independent capstone or laboratory projects with clear methodology and reproducible results.",
        deliverable: "Documented project portfolio or code repository"
      },
      {
        title: "Standardized Test Planning",
        desc: "Evaluate whether your target countries require IELTS/TOEFL or GRE, and begin diagnostic test prep.",
        deliverable: "Diagnostic test scores and study calendar"
      }
    ],
    coreCompetencies: [
      "International GPA Conversion",
      "Prerequisite Course Matching (ECTS)",
      "Technical & Quantitative Foundations",
      "Academic Project Documentation",
      "Language Test Diagnostic Prep"
    ],
    keyDeliverable: "Standardized Academic Profile Audit & Project Portfolio",
    recommendedVenuesOrTools: [
      "WES GPA Calculator",
      "DAAD Admission Database",
      "Official University Handbooks",
      "Cambridge / ETS Prep Materials"
    ],
    facultyInsightQuote: {
      quote: "We look for applicants who have solid academic foundations and understand the core principles of their field.",
      author: "Admissions Committee Member",
      affiliation: "Graduate School of Engineering"
    }
  },
  {
    id: "level-2",
    levelNumber: 2,
    slug: "level-2",
    badge: "LEVEL 02 • RESEARCH CURRENCY",
    title: "Research Deliverables, Preprints & Language Tests",
    shortTitle: "Research & Language Tests",
    tagline: "Transform course projects into citable research deliverables, complete language exams, and build proof-of-work.",
    timeline: "Months 6–12 (24-Month Journey)",
    difficulty: "Intensive",
    accentColor: "cyan",
    iconName: "Sparkles",
    phasesIncluded: ["phase-02"],
    stepIds: ["step-1-1", "step-1-2", "step-1-3"],
    totalSteps: 3,
    estimatedHours: "20–25 hrs/week",
    objective: "Build tangible research credentials through a solid thesis, workshop papers, preprints, and official test score reports.",
    milestones: [
      {
        title: "Undergraduate / Master's Thesis Completion",
        desc: "Complete a rigorous thesis with clear experimental or analytical methodology and structured findings.",
        deliverable: "Complete thesis draft or conference paper"
      },
      {
        title: "Language Test Completion",
        desc: "Achieve target scores (IELTS 7.0+ or TOEFL 100+) with strong Speaking and Writing subscores.",
        deliverable: "Official test report form"
      },
      {
        title: "Target Country & Program Shortlist",
        desc: "Filter 15–20 prospective universities balanced across Reach, Match, and Safety tiers.",
        deliverable: "Ranked university and funding shortlist"
      }
    ],
    coreCompetencies: [
      "Scientific Writing & Methodology",
      "Academic Conference Submissions",
      "Standardized Test Mastery (IELTS/TOEFL)",
      "Target University Benchmarking",
      "Research Proof-of-Work Assembly"
    ],
    keyDeliverable: "Completed Thesis / Preprint & Verified Language Test Scores",
    recommendedVenuesOrTools: [
      "Google Scholar & Scopus",
      "Overleaf LaTeX Editor",
      "IELTS / TOEFL Official Prep",
      "Notion University Tracker"
    ],
    facultyInsightQuote: {
      quote: "A well-written undergraduate thesis or clean project repository tells us much more about your research ability than grades alone.",
      author: "Faculty Research Director",
      affiliation: "European Research Institute"
    }
  },
  {
    id: "level-3",
    levelNumber: 3,
    slug: "level-3",
    badge: "LEVEL 03 • FACULTY OUTREACH",
    title: "Faculty Mapping, Supervisor Outreach & Fit",
    shortTitle: "Faculty Mapping & Outreach",
    tagline: "Identify active researchers, analyze their recent papers, and send tailored cold inquiry emails.",
    timeline: "Months 12–16 (24-Month Journey)",
    difficulty: "Strategic",
    accentColor: "emerald",
    iconName: "Send",
    phasesIncluded: ["phase-03"],
    stepIds: ["step-2-1", "step-2-2", "step-2-3", "step-2-4"],
    totalSteps: 4,
    estimatedHours: "12–15 hrs/week",
    objective: "Identify professors with active funding, send customized 4-paragraph cold emails, and secure supervisory support before applying.",
    milestones: [
      {
        title: "Target Faculty Database",
        desc: "Identify 25–30 professors actively publishing in your research niche within the last 18–24 months.",
        deliverable: "Targeted faculty research tracking sheet"
      },
      {
        title: "Personalized Outreach Campaign",
        desc: "Send personalized 180-word inquiry emails citing specific recent papers and connecting them to your background.",
        deliverable: "Sent outreach log with response tracking"
      },
      {
        title: "Introductory Video Meetings",
        desc: "Prepare an elevator pitch of your research and discuss prospective openings with interested professors.",
        deliverable: "Confirmed supervisor support letters or verbal agreements"
      }
    ],
    coreCompetencies: [
      "Literature-Based Faculty Discovery",
      "Concise Academic Cold Emailing",
      "Laboratory Grant Identification",
      "Virtual Video Interview Etiquette",
      "Follow-Up Cadence & Record Keeping"
    ],
    keyDeliverable: "30-PI Outreach Tracker & 2–4 Confirmed Supervisor Backings",
    recommendedVenuesOrTools: [
      "Google Scholar Alerts",
      "Grant Databases (NSF, ERC, DFG)",
      "University Faculty Directories",
      "Calendly & Google Meet"
    ],
    facultyInsightQuote: {
      quote: "When an applicant writes a concise, personalized email referencing a specific finding in my recent paper, I always reply and schedule a chat.",
      author: "Assistant Professor",
      affiliation: "North American Research University"
    }
  },
  {
    id: "level-4",
    levelNumber: 4,
    slug: "level-4",
    badge: "LEVEL 04 • APPLICATION DOSSIER",
    title: "Application Dossier Architecture & Submissions",
    shortTitle: "SOP, LORs & Submissions",
    tagline: "Assemble a tailored Statement of Purpose, 2-page academic CV, strong LORs, and submit before deadlines.",
    timeline: "Months 16–20 (24-Month Journey)",
    difficulty: "Critical",
    accentColor: "amber",
    iconName: "FileCheck",
    phasesIncluded: ["phase-04", "phase-05"],
    stepIds: [
      "step-3-1",
      "step-3-2",
      "step-3-3",
      "step-3-4",
      "step-4-1",
      "step-4-2",
      "step-4-3"
    ],
    totalSteps: 7,
    estimatedHours: "15–18 hrs/week",
    objective: "Assemble an airtight application dossier, secure recommendation letters, request fee waivers, and submit all packages before priority deadlines.",
    milestones: [
      {
        title: "Tailored Statement of Purpose",
        desc: "Draft a focused, 1,000-word SOP detailing your research problem, background, methodology, and faculty fit.",
        deliverable: "Polished SOPs customized for each target university"
      },
      {
        title: "2-Page Academic CV",
        desc: "Format a clean, 2-page CV highlighting degrees, research projects, publications, and skills.",
        deliverable: "Text-searchable PDF CV"
      },
      {
        title: "Confidential Recommendation Letters",
        desc: "Provide 3 referees with an LOR briefing packet at least 6 weeks before deadlines.",
        deliverable: "3 confirmed confidential letters submitted"
      },
      {
        title: "Priority Deadline Submission",
        desc: "Submit all applications before December 1–15 priority funding deadlines to maximize scholarship consideration.",
        deliverable: "Portal submission confirmations across target universities"
      }
    ],
    coreCompetencies: [
      "Academic Narrative Writing (SOP)",
      "Academic CV Formatting",
      "Recommender Management & Briefing",
      "Application Fee Waiver Requests",
      "Application Portal Management"
    ],
    keyDeliverable: "Completed Application Submissions Ahead of Priority Funding Deadlines",
    recommendedVenuesOrTools: [
      "Overleaf LaTeX Templates",
      "Grammarly / Language Tool",
      "University Admissions Portals",
      "WES Credential Evaluation"
    ],
    facultyInsightQuote: {
      quote: "A compelling SOP focuses on the research problem you want to solve and why our department provides the exact faculty and tools to solve it.",
      author: "Admissions Committee Chair",
      affiliation: "Graduate Admissions Panel"
    }
  },
  {
    id: "level-5",
    levelNumber: 5,
    slug: "level-5",
    badge: "LEVEL 05 • FINAL CONVERSION",
    title: "Interviews, Offer Evaluation & Visa Relocation",
    shortTitle: "Defense, Offers & Visa",
    tagline: "Defend your research in interviews, evaluate funding offers, and complete visa and relocation logistics.",
    timeline: "Months 20–24 (24-Month Journey)",
    difficulty: "Elite",
    accentColor: "purple",
    iconName: "ShieldCheck",
    phasesIncluded: ["phase-06", "phase-07"],
    stepIds: [
      "step-5-1",
      "step-5-2",
      "step-5-3",
      "step-5-4",
      "step-6-1",
      "step-6-2",
      "step-6-3"
    ],
    totalSteps: 7,
    estimatedHours: "10–12 hrs/week",
    objective: "Pass committee interviews, evaluate net funding packages (tuition waiver + stipend), accept your best offer, and secure your student visa.",
    milestones: [
      {
        title: "Faculty Interview Preparation",
        desc: "Prepare a concise 10-minute presentation of your past thesis research and future research interests.",
        deliverable: "Defended interview presentation"
      },
      {
        title: "Funding Package Audit",
        desc: "Verify that your offer covers 100% tuition, monthly living expenses, health insurance, and fees.",
        deliverable: "Signed funding offer letter"
      },
      {
        title: "Student Visa & Relocation",
        desc: "Gather financial documents, attend your embassy visa interview, and secure university housing.",
        deliverable: "Approved student visa and housing reservation"
      }
    ],
    coreCompetencies: [
      "Research Defense Presentation",
      "Funding Letter & Contract Analysis",
      "Embassy Visa Interview Preparation",
      "International Housing & Banking Logistics"
    ],
    keyDeliverable: "Signed Full-Ride Funding Package & Approved Student Visa",
    recommendedVenuesOrTools: [
      "Embassy Visa Portals",
      "Living Wage Calculator",
      "University Housing Services",
      "International Student Office"
    ],
    facultyInsightQuote: {
      quote: "In the interview, we want to see how you think through problems and whether you are genuinely excited about doing research with us.",
      author: "Professor & Lab Director",
      affiliation: "International Graduate School"
    }
  }
];

export const roadmapLevelsComparisonData = [
  {
    level: "Level 1",
    title: "Foundations & Profile Audit",
    duration: "Months 1–6",
    primaryGatekeeper: "Transcript & Coursework Audit",
    keyDeliverable: "Standardized GPA & project portfolio",
    riskFactor: "Unrecognized degree or missing prerequisites",
    statusBadge: "Phase 1 Covered"
  },
  {
    level: "Level 2",
    title: "Research & Language Tests",
    duration: "Months 6–12",
    primaryGatekeeper: "Testing Bodies & Research Reviewers",
    keyDeliverable: "Thesis draft, preprints & test scores",
    riskFactor: "Low language subscores or expired tests",
    statusBadge: "Phase 2 Covered"
  },
  {
    level: "Level 3",
    title: "Faculty Mapping & Outreach",
    duration: "Months 12–16",
    primaryGatekeeper: "Prospective Faculty (PIs)",
    keyDeliverable: "Confirmed supervisor support",
    riskFactor: "Generic, untargeted mass emails",
    statusBadge: "Phase 3 Covered"
  },
  {
    level: "Level 4",
    title: "SOP, LORs & Submissions",
    duration: "Months 16–20",
    primaryGatekeeper: "Graduate Admissions Committee",
    keyDeliverable: "Complete application submissions",
    riskFactor: "Missing priority funding deadlines",
    statusBadge: "Phases 4 & 5 Covered"
  },
  {
    level: "Level 5",
    title: "Defense, Offers & Visa",
    duration: "Months 20–24",
    primaryGatekeeper: "Department Chair & Consular Officer",
    keyDeliverable: "Signed full funding offer & visa",
    riskFactor: "Visa processing delays or housing shortages",
    statusBadge: "Phases 6 & 7 Covered"
  }
];

export function getLevelBySlug(slug: string): RoadmapLevel | undefined {
  return roadmapLevelsData.find((l) => l.slug === slug || l.id === slug);
}

export function getLevelById(id: string): RoadmapLevel | undefined {
  return roadmapLevelsData.find((l) => l.id === id);
}
