import type { GuideDetail } from "../../types";

export const applicationPortalsGuide: GuideDetail = {
  id: "application-portals",
  summary: "Every country uses different application systems. Know which portal you need and what each one asks.",
  why: "Many rejected applications are incomplete rather than weak. Knowing the system prevents last-minute surprises.",
  timeline: "Create accounts when you shortlist, 4–6 months before deadlines.",
  sections: [
    {
      heading: "Common systems",
      items: [
        { title: "University portals", detail: "Most US, Canadian, Australian and Asian universities use their own portal. Create one account per university." },
        { title: "Direct to professor or department", detail: "Many European PhD posts are applied for by email or the university's job platform with a PDF bundle." },
        { title: "Central systems", detail: "Some countries use central platforms for master's admissions, such as UCAS-type or national portals. Read the program page." },
        { title: "Scholarship portals", detail: "DAAD, MEXT, GKS, CSC and others have separate portals and deadlines from admission." }
      ]
    },
    {
      heading: "Stay organised",
      items: [
        { title: "One tracker sheet", detail: "List portal link, username, deadline, documents uploaded, referee status and fee paid." },
        { title: "Use one email", detail: "A single professional address that you check daily." },
        { title: "Submit early", detail: "Portals slow down near deadlines. Submit at least 3 days before." }
      ]
    }
  ],
  mistakes: ["Forgetting passwords.", "Uploading wrong file formats.", "Submitting on the final day."],
  checklist: ["Account per portal", "Tracker sheet", "File format rules checked", "Confirmation emails saved"],
  related: ["deadlines-timeline", "reference-letter", "application-fee"]
};
