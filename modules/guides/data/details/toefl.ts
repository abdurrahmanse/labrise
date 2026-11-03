import type { GuideDetail } from "../../types";

export const toeflGuide: GuideDetail = {
  id: "toefl",
  summary: "TOEFL iBT is an English test mostly used for the US and Canada, and accepted widely elsewhere. Typical targets are 90–100, with higher scores for top programs.",
  why: "If a program accepts only TOEFL, or you find it easier than IELTS, it is the right option. Always confirm acceptance first.",
  timeline: "Register 1–2 months ahead. Prepare for 4–8 weeks. Scores are valid for 2 years and are usually ready in about a week.",
  sections: [
    {
      heading: "Before you register",
      items: [
        { title: "Confirm acceptance", detail: "Check that the program accepts TOEFL and whether it asks for the Home Edition or test centre." },
        { title: "Find institution codes", detail: "You need each university's code to send score reports." },
        { title: "Register early", detail: "Create an ETS account and pick a date well before the first deadline." }
      ]
    },
    {
      heading: "Preparing",
      items: [
        { title: "Use official material", detail: "ETS practice tests match the real format." },
        { title: "Speaking and Writing", detail: "Practise integrated tasks that combine reading, listening and speaking or writing." },
        { title: "Timing", detail: "Practise the full length once to build stamina." }
      ]
    },
    {
      heading: "Sending scores",
      items: [
        { title: "Free score reports", detail: "Choose your first universities during registration for free reports." },
        { title: "Check delivery", detail: "Confirm each portal marks your score as received." }
      ]
    }
  ],
  mistakes: ["Not listing universities at registration and paying extra later.", "Using unofficial practice tests only.", "Waiting until the last month."],
  checklist: ["TOEFL accepted by each program", "Institution codes saved", "Date booked", "Official practice test done", "Scores received by portals"],
  links: [{ label: "ETS TOEFL", href: "https://www.ets.org/toefl" }],
  related: ["ielts", "application-fee", "proof-letters"]
};
