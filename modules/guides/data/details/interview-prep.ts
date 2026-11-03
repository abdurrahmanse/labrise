import type { GuideDetail } from "../../types";

export const interviewPrepGuide: GuideDetail = {
  id: "interview-prep",
  summary: "Many funded positions include a research interview with the professor or a panel. It mostly tests how you think about your own work and the field.",
  why: "It is often the last step before an offer. Prepared candidates stand out clearly.",
  timeline: "Prepare for 2–3 weeks after you start getting replies. Interviews may be scheduled on short notice.",
  sections: [
    {
      heading: "What to prepare",
      items: [
        { title: "Your own projects", detail: "Be able to explain every project: problem, method, results, mistakes and next steps." },
        { title: "The professor's papers", detail: "Read 3–4 papers, note strengths and one possible extension." },
        { title: "Fundamentals", detail: "Review linear algebra, probability, optimisation and ML basics. Expect a few technical questions." },
        { title: "Questions for them", detail: "Ask about supervision style, funding length, teaching duties and lab culture." }
      ]
    },
    {
      heading: "Common questions",
      items: [
        { title: "Why this lab?", detail: "Link their work to your path with specifics." },
        { title: "Tell me about your project", detail: "Two-minute summary, then be ready for depth." },
        { title: "What would you do in year one?", detail: "Offer a concrete plan and show flexibility." },
        { title: "Weaknesses", detail: "Name a real one and how you work on it." }
      ]
    },
    {
      heading: "Practical",
      items: [
        { title: "Test the setup", detail: "Camera, mic, internet and a quiet room 15 minutes early." },
        { title: "Follow up", detail: "Send a short thank-you within 24 hours." }
      ]
    }
  ],
  mistakes: ["Not reading the professor's work.", "Claiming skills you cannot explain.", "Having no questions."],
  checklist: ["Projects summarised", "Papers read", "Fundamentals reviewed", "Questions prepared", "Setup tested"],
  related: ["cold-email", "sop", "offer-comparison"]
};
