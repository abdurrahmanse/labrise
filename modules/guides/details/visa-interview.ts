import type { GuideDetail } from "../types";

export const visaInterviewGuide: GuideDetail = {
  id: "visa-interview",
  summary: "After an offer you apply for a student visa. Some countries require an interview. Preparation and honest, consistent answers are what matter.",
  why: "A visa refusal can cost you a year. Clear documents and a clear study plan make approval much more likely.",
  timeline: "Start as soon as you accept the offer. Appointment slots can take weeks. Allow 2–3 months in total.",
  sections: [
    {
      heading: "Documents to collect",
      items: [
        { title: "Offer and funding letter", detail: "Official admission letter plus a letter stating your stipend or scholarship." },
        { title: "Passport and photos", detail: "Valid passport and photos in the required format." },
        { title: "Academic and financial proof", detail: "Transcripts, degrees and, where asked, bank statements." },
        { title: "Forms and fees", detail: "Online visa form, fee receipt and any health or biometric requirements." }
      ]
    },
    {
      heading: "Interview preparation",
      items: [
        { title: "Know your study plan", detail: "Explain in simple words why this university, this professor and this program." },
        { title: "Funding", detail: "Be ready to state how your studies are funded." },
        { title: "Plans after the degree", detail: "Answer honestly. Be consistent with your documents." },
        { title: "Practise aloud", detail: "Short, direct answers. Do not memorise scripts." }
      ]
    },
    {
      heading: "On the day",
      items: [
        { title: "Arrive early", detail: "Bring originals and copies in the order requested." },
        { title: "Stay calm and honest", detail: "If you do not understand a question, ask politely for repetition." }
      ]
    }
  ],
  mistakes: ["Late booking.", "Inconsistent answers vs documents.", "Memorised speeches.", "Using unofficial agents."],
  checklist: ["Offer and funding letters", "Passport valid", "Forms submitted", "Appointment booked", "Mock interview done"],
  related: ["proof-letters", "offer-comparison", "scholarship-scams"]
};
