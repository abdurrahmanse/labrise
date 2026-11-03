import type { GuideDetail } from "../../types";

export const documentAttestationGuide: GuideDetail = {
  id: "document-attestation",
  summary: "Some universities and visa offices ask for certified copies, translations or legalised documents. Learn the terms and ask early.",
  why: "These steps take weeks and cost money. Missing them can delay an offer or a visa.",
  timeline: "Ask each university what it requires when you shortlist. Start certification at least 2–3 months before the deadline.",
  sections: [
    {
      heading: "Know the terms",
      items: [
        { title: "Certified copy", detail: "A copy stamped by your university or an authorised official as a true copy of the original." },
        { title: "Certified translation", detail: "A translation by a sworn or recognised translator, attached to a copy of the original." },
        { title: "Apostille or legalisation", detail: "An official confirmation that a document is genuine. Which one applies depends on the countries involved." }
      ]
    },
    {
      heading: "Do it in order",
      items: [
        { title: "Ask what is required", detail: "Read the program page or write to the admissions office. Do not guess, because rules differ by university and country." },
        { title: "Request originals", detail: "Ask your university for official transcripts and degree certificates." },
        { title: "Translate and certify", detail: "Use only recognised translators and offices named by the receiving university or embassy." },
        { title: "Keep scans and copies", detail: "Store high-quality scans of every document, and a paper set for interviews." }
      ]
    }
  ],
  mistakes: ["Paying for legalisation that was not required.", "Using an unofficial translator.", "Starting after the offer arrives."],
  checklist: ["Requirements confirmed in writing", "Originals requested", "Translations certified", "Scans saved"],
  related: ["proof-letters", "grade-conversion", "visa-interview"]
};
