import type { Fact, Table } from "../types";

/** The student. Not a real person: name, documents, scores and results are all invented for learning. */
export const student = {
  name: "Tania Rahman",
  headline: "MSc applicant turned funded PhD researcher in computer vision for medical imaging",
  location: "Dhaka, Bangladesh",
  goal: "Fully funded PhD in Germany",
  intake: "September 2027",
  outcome: "Fully funded PhD position and a scholarship, 100% of tuition and living costs covered",
  stats: [
    { label: "CGPA", value: "3.72 / 4.00" },
    { label: "IELTS", value: "7.5" },
    { label: "Papers", value: "1 preprint, 1 poster" },
    { label: "Funding", value: "100%" }
  ] satisfies Fact[],
  facts: [
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Age", value: "25" },
    { label: "Current role", value: "Research assistant, 18 months" },
    { label: "Research area", value: "Computer vision for medical images" },
    { label: "Methods", value: "Self-supervised learning, segmentation, small-data training" },
    { label: "Languages", value: "Bangla, English (IELTS 7.5), German A1" },
    { label: "Target", value: "PhD, Germany (backup: Netherlands, Switzerland)" },
    { label: "Applied to", value: "6 programmes, 4 supervisors engaged" }
  ] satisfies Fact[],
  passport: {
    surname: "RAHMAN", given: "TANIA", nationality: "BANGLADESHI", number: "SAMPLE0000",
    born: "01 JAN 2002", issued: "01 JAN 2024", expires: "31 DEC 2033",
    note: "Specimen only. Real passports are never shown or uploaded on this site. Keep a clear scan of your own, with at least 18 months of validity left."
  },
  education: {
    head: ["Level", "Institution", "Years", "Result"],
    rows: [
      { cells: ["MSc, Computer Science", "Sample University (fictional)", "2023 – 2025", "CGPA 3.72 / 4.00, thesis distinction"] },
      { cells: ["BSc, CSE", "Sample Institute of Technology (fictional)", "2018 – 2022", "CGPA 3.58 / 4.00, top 8% of 140"] },
      { cells: ["HSC", "Sample College (fictional)", "2016 – 2018", "GPA 5.00 / 5.00"] }
    ]
  } satisfies Table,
  tests: {
    head: ["Test", "Score", "Detail", "Used for"],
    rows: [
      { cells: ["IELTS Academic", "7.5", "L 8.0 · R 8.0 · W 7.0 · S 7.0", "All programmes"], href: "/guides/ielts" },
      { cells: ["GRE General", "Skipped", "Not required by her programmes", "Saved the fee"], href: "/guides/english-and-gre" },
      { cells: ["German A1", "In progress", "Self-study, not required", "Daily life"], href: "/guides/arrival-checklist" }
    ]
  } satisfies Table,
  documents: {
    head: ["Document", "Status", "Notes"],
    rows: [
      { cells: ["Academic CV (2 pages)", "Ready", "Research first, numbers in every bullet"], href: "/guides/cv" },
      { cells: ["Statement of purpose", "Ready", "One page, rewritten for each lab"], href: "/guides/sop" },
      { cells: ["Research proposal (3 pages)", "Ready", "Question, method, plan and why this lab"], href: "/guides/research-proposal" },
      { cells: ["Transcripts and degrees", "Certified", "With the grading key and class rank"], href: "/guides/document-attestation" },
      { cells: ["Grade context letter", "Certified", "States the 4.00 scale"], href: "/guides/grade-conversion" },
      { cells: ["Three reference letters", "Sent", "Asked 8 weeks ahead with her CV and deadlines"], href: "/guides/reference-letter" },
      { cells: ["IELTS report", "Sent", "Electronic score report to each university"], href: "/guides/ielts" },
      { cells: ["Publication and code links", "Ready", "Preprint, repository and a short project page"], href: "/guides/github-portfolio" }
    ]
  } satisfies Table
};
