import type { GuideDetail } from "../../types";

export const negotiatingAndDecliningGuide: GuideDetail = {
  id: "negotiating-and-declining",
  summary: "How to ask questions about an offer, request a short extension and decline politely.",
  why: "Clear communication protects your options and your reputation with professors.",
  timeline: "Do this in the days after you receive each offer.",
  sections: [
    {
      heading: "Before accepting",
      items: [
        { title: "Ask for clarity in writing", detail: "Confirm salary or stipend, length, duties, start date and visa support." },
        { title: "Request a short extension", detail: "If you await another result, politely ask for a few days. Give the date you will decide." },
        { title: "Be realistic about negotiation", detail: "Salaries are often fixed by scale. You can ask about travel support, start dates or conference funds." }
      ]
    },
    {
      heading: "Declining well",
      items: [
        { title: "Reply promptly", detail: "Free the position for others as soon as you decide." },
        { title: "Keep it short and kind", detail: "Thank them, say you accepted another offer, and say you hope to stay in touch." }
      ]
    }
  ],
  example: { label: "Short decline", text: "Dear Professor [Name],\n\nThank you very much for the offer. After careful thought I have accepted another position and must decline. I appreciate your time and hope our paths cross again.\n\nBest regards,\n[Name]" },
  mistakes: ["Ghosting a professor.", "Accepting two offers.", "Demanding terms that are fixed."],
  checklist: ["Terms confirmed in writing", "Decision date set", "Polite replies sent"],
  related: ["offer-comparison", "funding-types", "visa-interview"]
};
