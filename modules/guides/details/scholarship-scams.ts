import type { GuideDetail } from "../types";

export const scholarshipScamsGuide: GuideDetail = {
  id: "scholarship-scams",
  summary: "Fake scholarships and agents target applicants. Learn the warning signs before paying anyone.",
  why: "Scams cost money, personal data and sometimes visa trouble.",
  timeline: "Keep these rules in mind from the first day.",
  sections: [
    {
      heading: "Warning signs",
      items: [
        { title: "Payment for admission or award", detail: "Real scholarships do not ask for fees to receive funding." },
        { title: "Guaranteed offers", detail: "No one can guarantee admission or a scholarship." },
        { title: "Free email domains", detail: "Offers from Gmail or similar instead of a university domain." },
        { title: "Pressure", detail: "Very short deadlines and requests for bank details." }
      ]
    },
    {
      heading: "How to verify",
      items: [
        { title: "Official sources", detail: "Find the program on the university's or government's own website." },
        { title: "Call or write independently", detail: "Use contact details from the official site, not from the message." },
        { title: "Ask the department", detail: "Confirm any professor or admissions email with the department office." }
      ]
    }
  ],
  mistakes: ["Paying an agent to 'secure' a seat.", "Sharing passport scans with unknown parties."],
  checklist: ["Official domain checked", "No payment for the award", "Offer confirmed by the department"],
  related: ["application-fee", "funding-types", "visa-interview"]
};
