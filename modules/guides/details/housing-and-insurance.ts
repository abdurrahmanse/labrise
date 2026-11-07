import type { GuideDetail } from "../types";

export const housingAndInsuranceGuide: GuideDetail = {
  id: "housing-and-insurance",
  summary: "Housing and insurance are the first real problems after an offer. Arranging them early protects your money and your visa.",
  why: "Housing is scarce in many student cities, and some visas or enrolments require proof of insurance. Delays create cost and stress.",
  timeline: "Start as soon as you accept the offer and before you book flights.",
  sections: [
    {
      heading: "Housing",
      items: [
        { title: "University first", detail: "Check international office pages for halls, partner housing and deadlines. These are usually safer and cheaper." },
        { title: "Private rent", detail: "Use well-known platforms, ask for a written contract and never pay a deposit before seeing a verified contract." },
        { title: "Temporary stay", detail: "Book a short stay for the first days so you are not forced to rent in a hurry." }
      ]
    },
    {
      heading: "Health insurance",
      items: [
        { title: "Find the rule", detail: "The offer letter or university page states whether insurance is included, public or private." },
        { title: "Get proof", detail: "Keep the policy document in English or the local language, because visa and enrolment offices may ask for it." }
      ]
    },
    {
      heading: "Protect yourself",
      items: [
        { title: "Scam signs", detail: "Pressure to pay quickly, prices far below the market or a landlord who cannot meet are warning signs." },
        { title: "Records", detail: "Keep contracts, receipts and messages together in one folder." }
      ]
    }
  ],
  mistakes: ["Paying a deposit to a stranger online.", "Booking flights before housing is clear.", "Assuming insurance is included without checking."],
  checklist: ["Housing option confirmed", "Contract read", "Insurance rule checked", "Temporary stay booked"],
  related: ["arrival-checklist", "budget-planning", "scholarship-scams"]
};
