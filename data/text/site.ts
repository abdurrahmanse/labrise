export const navLabels = {
  home: "Home",
  directory: "Directory",
  guides: "Guides",
  profile: "Profile",
  roadmap: "Roadmap",
  apply: "Apply",
  howToApply: "How to apply",
  allGuides: "All guides",
  profileChecklist: "Profile checklist",
  allFaqs: "All FAQs",
  fiveLevels: "5 levels",
  outreach: "Professor outreach",
  professorDirectory: "Professor directory",
  workflow: "Scholarship finder"
} as const;

export const notFoundTitles = {
  generic: "Not found",
  directory: "Directory not found",
  guide: "Guide not found",
  country: "Country Not Found",
  level: "Curriculum Level Not Found",
  phase: "Phase Not Found"
} as const;

export const pageText = {
  apply: {
    title: "How to apply: universities and scholarship organisations",
    description: "The steps to apply to any university or scholarship provider, with links to the guide for each step.",
    eyebrow: "Apply",
    heading: "How to apply",
    lead: "Two routes. Most students use both.",
    steps: (n: number) => `${n} steps`,
    keepInMind: "Keep in mind",
    stepByStep: (title: string) => `${title}: step by step`,
    breadcrumb: "Apply"
  },
  guides: {
    title: "Guides: CV, SOP, IELTS, visa and more",
    description: "Step-by-step guides for every part of a fully funded scholarship application.",
    eyebrow: "Guides",
    heading: "Pick a topic",
    breadcrumb: "Guides",
    stepByStep: (title: string) => `${title}: step-by-step guide`
  },
  problems: {
    title: "Common scholarship application problems and fixes",
    description: "No replies, low GPA, no publications, fees and scams: what to do about each.",
    eyebrow: "Problems",
    heading: "Common problems and fixes"
  },
  profile: {
    title: "Profile checklist for funded PhD and master's applicants",
    description: "What your academic profile needs: grades, research, recommenders, tests and more.",
    eyebrow: "Profile",
    heading: "What your profile needs"
  },
  steps: {
    title: "6-step roadmap to a fully funded scholarship",
    description: "What to do and when, from building your base to applying and deciding.",
    eyebrow: "Roadmap",
    heading: "6 steps, in order",
    lead: "Start about 2 years before."
  },
  phases: {
    title: "The 13 roadmap phases",
    description: "Every phase of the fully funded scholarship roadmap, with its goals, milestones and portals.",
    eyebrow: "Roadmap",
    heading: "13 phases"
  },
  checklist: {
    title: "Pre-flight readiness checklist",
    description: "Check that you are ready before you send applications.",
    eyebrow: "FAQs",
    heading: "Pre-flight checklist"
  },
  professorRules: {
    title: "Professor outreach: rules by country and fit checklist",
    description: "When a supervisor must agree first, what strong outreach looks like, and a research-fit checklist.",
    eyebrow: "Professor outreach",
    heading: "Rules and fit"
  },
  scholarshipFinder: {
    eyebrow: "Scholarship finder",
    partDescription: "Part of the scholarship finder guide.",
    parts: { formulas: "Scholarship search formulas", portals: "Official portals and fraud warnings" }
  },
  directoryType: {
    eyebrow: "Directory",
    metaTitle: (title: string) => `${title} directory for fully funded study`
  }
} as const;

export const guideSidebarText = {
  links: "Links",
  readNext: "Read next",
  why: "Why it matters",
  when: "When to do it",
  mistakes: "Common mistakes"
} as const;

export const homeText = {
  explore: { title: "Explore where to apply", linkLabel: "All guides", countries: (n: number) => `${n} funded destinations`, universities: (n: number) => `${n} with details and funders`, professors: (n: number) => `${n} with contact route` },
  journey: { title: "Your path in 6 steps", linkLabel: "See all steps" },
  stats: { countries: "Countries", universities: "Universities", scholarships: "Scholarships", professors: "Professors" }
} as const;
