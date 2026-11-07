import type { Table } from "../types";

/** The scholarship she applied for as a second layer, step by step. */
export const scholarship = {
  why: "The salaried post already paid her costs, so the scholarship was insurance: if a post fell through, the stipend would still let her start. She also learned that two funding sources give her a better position when she negotiates.",
  steps: [
    { title: "Read the official call", detail: "Ticked eligibility (nationality, degree, years since graduation), the research field and the exact deadline with its time zone." },
    { title: "Checked what admission was needed", detail: "Confirmed whether a university offer or a supervisor's agreement was needed before applying, and asked the professor for a short supporting letter." },
    { title: "Built the document list", detail: "CV, motivation letter, research proposal, transcripts, two references and a language certificate, each with its issuer and lead time." },
    { title: "Wrote the scholarship essay", detail: "One story with results and a plan: how her work would help health systems with little labelled data, and what she would do after the award." },
    { title: "Submitted through the official portal", detail: "Uploaded in the stated format, paid no fee, saved the confirmation and printed the checklist page." },
    { title: "Prepared for selection", detail: "Practised a five-minute talk and answers about goals, plans and her return to contribute." }
  ],
  essay: "My thesis showed that a hospital can train a useful eye-screening model with only a few hundred labelled images. In Bangladesh, where specialists are few and clinics are far apart, that matters. During my PhD I will make such models stay reliable across clinics, and I will release open benchmarks so that other small groups can test their own. After the award I plan to build a lab-to-clinic partnership at home, using what I learn, and to train students in careful, reproducible methods.",
  checks: {
    head: ["Rule in the call", "Her answer", "Evidence"],
    rows: [
      { cells: ["Citizenship", "Eligible", "Passport"] },
      { cells: ["Degree and year", "MSc, 2025", "Degree certificate"] },
      { cells: ["Field", "Computer science", "Transcript"] },
      { cells: ["Language", "English", "IELTS 7.5"] },
      { cells: ["Supervisor agreement", "Letter requested", "Professor's email"] }
    ]
  } satisfies Table
};
