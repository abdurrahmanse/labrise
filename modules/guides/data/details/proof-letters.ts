import type { GuideDetail } from "../../types";

export const proofLettersGuide: GuideDetail = {
  id: "proof-letters",
  summary: "Proof letters and certificates are the official documents that back up your application: transcripts, degree proof, language-medium letter and, when required, financial proof.",
  why: "Missing or wrongly formatted documents are the most common cause of rejected applications and delayed visas.",
  timeline: "Request official copies 2–3 months ahead because universities can take weeks to issue them.",
  sections: [
    {
      heading: "Academic documents",
      items: [
        { title: "Transcripts", detail: "Official transcripts for every degree, in English or with certified translation. Ask for sealed copies if required." },
        { title: "Degree certificate", detail: "Final certificate or a letter confirming expected graduation date." },
        { title: "Grading scale explanation", detail: "A short note on your grading system and class rank helps evaluators." }
      ]
    },
    {
      heading: "Letters",
      items: [
        { title: "Medium of instruction letter", detail: "Issued by your university to confirm your degree was taught in English. May replace a language test." },
        { title: "Enrollment or graduation proof", detail: "Needed if you are still studying when you apply." },
        { title: "Certificates and awards", detail: "Add only those that support your research story." }
      ]
    },
    {
      heading: "Financial and identity proof",
      items: [
        { title: "Proof of funds", detail: "Usually needed only for the visa, and not for fully funded positions that state the stipend." },
        { title: "Passport", detail: "Check validity: at least 6 months after your planned arrival, ideally 2+ years." },
        { title: "Translations and notarisation", detail: "Use certified translators and follow the exact rules of the receiving country." }
      ]
    }
  ],
  mistakes: ["Sending unofficial screenshots.", "Missing translations.", "Letting the passport expire soon.", "Not scanning in the required format."],
  checklist: ["Transcripts requested", "Degree proof ready", "Medium-of-instruction letter", "Passport valid", "All scans clear and named"],
  related: ["ielts", "visa-interview", "application-fee"]
};
