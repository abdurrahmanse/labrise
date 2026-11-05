import type { RoadmapStep } from "@/modules/roadmap";

// Phase 1: create proof of research. Written for engineering research applicants in any department.
export const phase1Steps: RoadmapStep[] = [
  {
    id: "step-1-1",
    phaseId: "phase-1",
    stepNumber: "1.1",
    title: "Publication Strategy: Conference, Journal & Preprint",
    shortTitle: "Publication Strategy",
    subtitle: "Aim for at least one citable output before you apply",
    duration: "16 Weeks",
    priority: "Crucial",
    keyObjective: "Have one paper, extended abstract or public preprint that a professor can open and judge.",
    description:
      "A citable piece of research shows that you can finish a project and explain it. It does not need to be in a top venue. A solid conference paper, a short journal article, a poster abstract with a public report or a preprint with clear results all help, especially when your supervisor is a co-author who can vouch for your part.",
    checklist: [
      {
        id: "c-1-1-1",
        task: "Choose the Right Venue",
        detail: "Ask your supervisor which conferences or journals fit your result. Avoid venues you cannot check (see Think. Check. Submit.)."
      },
      {
        id: "c-1-1-2",
        task: "Write for Reviewers",
        detail: "State the problem, the method, the evidence and the limits in a short paper with clear figures and units."
      },
      {
        id: "c-1-1-3",
        task: "Release a Preprint",
        detail: "Where your field allows it, post the draft on a preprint server so the work has a date and a permanent link."
      },
      {
        id: "c-1-1-4",
        task: "Create an ORCID",
        detail: "Register an ORCID iD and link your outputs, so every paper and report is tied to you."
      }
    ],
    proTips: [
      "Put the link to your paper at the top of your CV and in every cold email.",
      "A thesis chapter or a technical report is a good start when a paper is not yet possible."
    ],
    commonPitfalls: [
      "Paying to publish in a journal or conference that does not do real peer review.",
      "Posting a rushed draft: a preprint stays public and professors will read it."
    ],
    deliverable: "One accepted paper, a public preprint or a posted technical report with clean figures and a clear result.",
    resources: [
      {
        title: "Think. Check. Submit.",
        url: "https://thinkchecksubmit.org/",
        type: "guide",
        description: "A checklist for choosing a trustworthy journal or conference."
      },
      {
        title: "ORCID",
        url: "https://orcid.org/",
        type: "tool",
        description: "A free persistent identifier for researchers, used by journals and funders."
      },
      {
        title: "arXiv",
        url: "https://arxiv.org/",
        type: "database",
        description: "Preprint server for physics, mathematics, computer science, electrical engineering and related fields."
      }
    ]
  },
  {
    id: "step-1-2",
    phaseId: "phase-1",
    stepNumber: "1.2",
    title: "Research Portfolio & Open Artifacts",
    shortTitle: "Research Portfolio",
    subtitle: "Make your projects, data and designs easy for a professor to open",
    duration: "4 Weeks",
    priority: "Crucial",
    keyObjective: "Show your work in one place: reports, code, designs and data with short explanations.",
    description:
      "Professors often look at your work before they answer your email. A small personal page with two or three well-documented projects, clear results and links to code, data or design files makes a strong first impression and proves that your work is repeatable.",
    checklist: [
      {
        id: "c-1-2-1",
        task: "Pick Two or Three Projects",
        detail: "Choose projects with a clear question, method and result, such as a thesis, a lab project or a design with test data."
      },
      {
        id: "c-1-2-2",
        task: "Document Each Project",
        detail: "Write a short page for each one: goal, method, key figure, what you did yourself and what you would do next."
      },
      {
        id: "c-1-2-3",
        task: "Share Files Properly",
        detail: "Publish code on GitHub, and put datasets or CAD files in a repository such as Zenodo that gives a permanent link."
      },
      {
        id: "c-1-2-4",
        task: "Build a Simple Personal Page",
        detail: "Collect your CV, outputs, ORCID and contact in one clean page you can link in emails."
      }
    ],
    proTips: [
      "State your own contribution clearly when a project was done in a team.",
      "Test your links from a private window to make sure strangers can open them."
    ],
    commonPitfalls: [
      "Links that need a login or have expired.",
      "A long list of projects with no explanation of results."
    ],
    deliverable: "A public page with two or three documented projects, open files where allowed and your CV.",
    resources: [
      {
        title: "Zenodo",
        url: "https://zenodo.org/",
        type: "tool",
        description: "Free repository that gives datasets, code and design files a permanent DOI."
      },
      {
        title: "GitHub Pages",
        url: "https://pages.github.com/",
        type: "tool",
        description: "Free hosting for a simple personal research page."
      }
    ]
  },
  {
    id: "step-1-3",
    phaseId: "phase-1",
    stepNumber: "1.3",
    title: "Standardized Testing Strategy (English Tests & GRE)",
    shortTitle: "Test Strategy",
    subtitle: "Decide which tests you really need and book them early",
    duration: "6 Weeks",
    priority: "Crucial",
    keyObjective: "Meet the language and test requirements of your target programmes without wasting money on tests you do not need.",
    description:
      "Most programmes ask for an English test unless your degree was taught in English or you qualify for a waiver. Many engineering programmes have made the GRE optional or dropped it. Check each programme and each funder, because a scholarship can ask for a higher score than the university does.",
    checklist: [
      {
        id: "c-1-3-1",
        task: "List the Requirements",
        detail: "For each programme and scholarship, note the accepted tests, the minimum scores and any waiver rules."
      },
      {
        id: "c-1-3-2",
        task: "Check for Waivers",
        detail: "Ask whether a medium-of-instruction certificate or a previous degree in English replaces the test."
      },
      {
        id: "c-1-3-3",
        task: "Book Early",
        detail: "Register at least three months before the first deadline, so you can retake the test if needed."
      },
      {
        id: "c-1-3-4",
        task: "Decide on the GRE",
        detail: "Take it only if a programme you want asks for it or says that it helps."
      }
    ],
    proTips: [
      "Scores are valid for about two years, so plan the date against the application season.",
      "Funders and teaching assistant roles can ask for a higher speaking score than admission does."
    ],
    commonPitfalls: [
      "Taking the GRE for programmes that no longer use it.",
      "Booking the English test too late to retake it before a deadline."
    ],
    deliverable: "A table of programmes with required tests, scores, waivers and test dates.",
    resources: [
      {
        title: "IELTS Official Site",
        url: "https://www.ielts.org/",
        type: "official",
        description: "Test dates, centres and preparation material from the test owner."
      },
      {
        title: "ETS TOEFL iBT",
        url: "https://www.ets.org/toefl.html",
        type: "official",
        description: "Official information and preparation for the TOEFL iBT."
      }
    ]
  }
];
