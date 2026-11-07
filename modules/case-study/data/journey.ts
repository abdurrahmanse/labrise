import type { Step, Table } from "../types";

export const journey = {
  funding: {
    head: ["Source", "What it covers", "Status"],
    rows: [
      { cells: ["Salaried PhD post (RWTH Aachen)", "Monthly salary with social insurance, no tuition", "Offer, accepted"], href: "/directory/universities/rwth-aachen", file: "offer-letter" },
      { cells: ["DAAD scholarship", "Stipend, insurance and travel allowance", "Selected as backup"], href: "/directory/scholarships/daad-scholarships" },
      { cells: ["Tübingen salaried post", "Salary, no tuition", "Offer, declined"], href: "/directory/universities/university-of-tubingen" }
    ],
    note: "She secured funding in writing before accepting anything. A verbal promise is not funding."
  } satisfies Table,
  timeline: [
    { when: "14 months before", title: "Chose the area and the route", detail: "Picked computer vision for medical images and a PhD over a second Master's.", guide: "/guides/master-vs-phd", guideLabel: "Master's or PhD?" },
    { when: "13 months before", title: "Built proof of skill", detail: "Published code and a preprint, so claims could be checked.", guide: "/guides/publications", guideLabel: "First publication" },
    { when: "12 months before", title: "Planned the budget and booked IELTS", detail: "Listed every cost before arrival.", guide: "/guides/budget-planning", guideLabel: "Budget and costs" },
    { when: "11 months before", title: "Built the long list", detail: "Thirty groups from the directory, then funding and fit checks.", guide: "/guides/research-area", guideLabel: "Research area" },
    { when: "10 months before", title: "Read each call", detail: "Ticked eligibility and dates for every programme.", guide: "/guides/read-a-call", guideLabel: "Read a call" },
    { when: "9 months before", title: "Emailed professors", detail: "Four first emails, one follow-up each.", guide: "/guides/cold-email", guideLabel: "Cold email" },
    { when: "7 months before", title: "Started certified documents", detail: "Transcripts, attestation and grade context letter.", guide: "/guides/bangladesh-applicants", guideLabel: "Applying from Bangladesh" },
    { when: "6 months before", title: "Wrote and revised", detail: "SOP and proposal, three drafts each.", guide: "/guides/sop", guideLabel: "SOP guide" },
    { when: "5 months before", title: "Submitted early", detail: "A week before each deadline, with receipts saved.", guide: "/guides/application-portals", guideLabel: "Application portals" },
    { when: "4 months before", title: "Interviews", detail: "A call with two professors and a panel interview.", guide: "/guides/interview-prep", guideLabel: "Interview prep" },
    { when: "3 months before", title: "Compared offers and accepted", detail: "Used a written comparison and replied before the date.", guide: "/guides/offer-comparison", guideLabel: "Compare offers" },
    { when: "2 months before", title: "Visa and housing", detail: "Booked the visa slot the week she accepted.", guide: "/guides/visa-interview", guideLabel: "Visa guide" }
  ] satisfies Step[],
  interview: [
    { q: "Explain your thesis in two minutes.", a: "Problem, method, one result with a number, and the open question." },
    { q: "Why this lab and not another?", a: "Named two papers and the data access only this group has." },
    { q: "What would you do in year one?", a: "Reproduce the baseline, then run the cross-site experiment from her proposal." },
    { q: "What is your weakest area?", a: "Writing speed for journals; she described a weekly writing habit." }
  ],
  results: {
    head: ["Application", "Result", "What she learned"],
    rows: [
      { cells: ["RWTH Aachen, PhD post", "Offer, accepted", "Best match and funded post"], href: "/directory/universities/rwth-aachen" },
      { cells: ["University of Tübingen, PhD post", "Offer, declined", "Good group, weaker topic fit"], href: "/directory/universities/university-of-tubingen" },
      { cells: ["Heidelberg University", "No reply", "One follow-up, then moved on"], href: "/directory/universities/heidelberg-university" },
      { cells: ["ETH Zurich", "No open post", "Kept the contact for later"], href: "/directory/universities/eth-zurich" },
      { cells: ["A UK government award", "Not selected", "Reused the essay, learned from feedback"] }
    ]
  } satisfies Table,
  decision: {
    head: ["", "RWTH Aachen", "University of Tübingen"],
    rows: [
      { cells: ["Research fit", "Excellent: same method and data", "Good: related topic"] },
      { cells: ["Funding", "Salaried post, 3 years, in writing", "Salaried post, 3 years, in writing"] },
      { cells: ["Supervisor", "Replied fast, clear plan", "Supportive, larger group"] },
      { cells: ["Location and cost", "Mid-cost city, housing available", "Small city, lower rent"] },
      { cells: ["Decision", "Accepted", "Declined politely"] }
    ]
  } satisfies Table,
  arrival: [
    "Visa slot booked the week she accepted; documents kept in one folder.",
    "First-month budget set aside before the first salary.",
    "University housing requested, with a short temporary stay booked.",
    "Health insurance and registration done in the first week."
  ],
  lessons: [
    "Started 14 months ahead, so nothing was rushed.",
    "Checked funding and fit before writing a single email.",
    "Led every email with evidence a stranger could check.",
    "Followed up once, then moved on instead of waiting.",
    "Got funding in writing before accepting.",
    "Never paid anyone for a place or a promise."
  ],
  avoided: [
    "Mass-emailing one template to dozens of professors.",
    "Applying only to the most famous universities.",
    "Converting her CGPA herself.",
    "Accepting before comparing offers in writing."
  ]
};

