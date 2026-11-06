import type { GuideDetail } from "../types";

export const cvGuide: GuideDetail = {
  id: "cv",
  summary: "An academic CV is a short, factual proof of your research ability. It is read in under a minute, so structure and clarity matter more than design.",
  why: "Professors and committees skim dozens of CVs. A clean CV that puts research first gets you into the 'read more' pile.",
  timeline: "Draft in one week, then update after every project. Final polish 2 weeks before you start emailing.",
  sections: [
    {
      heading: "Structure (in this order)",
      items: [
        { title: "Header", detail: "Name, email, city/country, links to Google Scholar, ORCID or your website. Skip photo, age, marital status and passport details." },
        { title: "Education", detail: "Degree, university, years, GPA with scale (for example 3.7/4.0, top 5%). Add thesis title and supervisor." },
        { title: "Research experience", detail: "Most important section. Title, lab, dates, one line of context, then 2–3 bullets with method and result." },
        { title: "Publications and preprints", detail: "List with authors, venue, year and link. Mark 'under review' honestly. Leave out if you have none and let projects speak." },
        { title: "Projects", detail: "2–4 strongest projects, each with a link and a measurable outcome." },
        { title: "Skills, awards, teaching", detail: "Short lists. Group skills: languages, frameworks, tools. Include awards and TA work." }
      ]
    },
    {
      heading: "Writing each bullet",
      items: [
        { title: "Action + method + result", detail: "'Fine-tuned ResNet-50 with focal loss, raising F1 on a 5-class dataset from 0.71 to 0.82.'" },
        { title: "Use numbers", detail: "Dataset size, accuracy gains, speedups, users, citations. Numbers make claims believable." },
        { title: "Be honest about your role", detail: "Say 'implemented' or 'led' accurately. Interviewers will ask about every line." }
      ]
    }
  ],
  example: { label: "Bullet example", text: "Research Assistant, Materials Lab, XYZ University (2024–2025)\n– Designed and ran fatigue tests on 3D-printed titanium specimens (60 samples), reducing scatter in results by 30%.\n– Wrote the analysis scripts and a methods note, released with the data in a public repository." },
  mistakes: ["Three or more pages for a master's applicant.", "Listing every course.", "Vague phrases like 'worked on a project'.", "Fancy multi-column templates that break text extraction."],
  checklist: ["1–2 pages, PDF", "Research section first after education", "All links work", "Numbers in bullets", "Spell-checked by someone else"],
  links: [{ label: "Overleaf CV templates", href: "https://www.overleaf.com/latex/templates/tagged/cv" }],
  related: ["sop", "cold-email", "reference-letter"]
};
