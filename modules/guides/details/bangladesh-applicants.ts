import type { GuideDetail } from "../types";

export const bangladeshApplicantsGuide: GuideDetail = {
  id: "bangladesh-applicants",
  summary: "Grades, attestation, funders and visas as they usually apply to students applying from Bangladesh.",
  why: "Many steps, such as certified papers and embassy work, are slower from Bangladesh. Knowing them early prevents missed deadlines.",
  timeline: "Start 12 months ahead, because certification and visa steps take the longest.",
  sections: [
    {
      heading: "Grades and degrees",
      items: [
        { title: "Show the 4.00 scale", detail: "Most Bangladeshi universities use a 4.00 CGPA. State your scale, your CGPA and the university's grading key. Do not convert it yourself." },
        { title: "Rank and context", detail: "If your department gives class rank or a top-percent statement, ask for it in writing. It helps committees outside Bangladesh judge your grades." },
        { title: "HSC and SSC", detail: "Some funders ask for school results. Keep certified copies of SSC, HSC, honours or bachelor and master's papers." }
      ]
    },
    {
      heading: "Documents and attestation",
      items: [
        { title: "Order of work", detail: "Ask the target university which documents need certification, translation or an apostille. Requirements differ by country, so follow their list." },
        { title: "Start early", detail: "Transcripts, certificates and any government or embassy attestation can take weeks. Begin as soon as you shortlist programmes." },
        { title: "Keep scans", detail: "Scan every certified page at high quality and keep both paper and digital copies." }
      ]
    },
    {
      heading: "Where to look and what to avoid",
      items: [
        { title: "Check eligibility for Bangladesh", detail: "Large schemes such as government scholarships and EU programmes are often open to Bangladeshi citizens, but each call has its own country and age rules. Confirm on the official page." },
        { title: "Beware of agents", detail: "Never pay anyone for a guaranteed scholarship or admission. Real funders do not sell places. Verify any agent with the university itself." },
        { title: "Use supervisors", detail: "For PhD funding, a professor who wants you often matters most. Use the professor and lab directories and send a specific email." }
      ]
    },
    {
      heading: "Visa and money",
      items: [
        { title: "Embassy process", detail: "Follow the destination embassy's own website for forms, biometrics and fees. Do not rely on social media posts." },
        { title: "Funding proof", detail: "Keep bank documents and the offer letter ready. Rules differ by country, so read them on the official visa page." },
        { title: "Money transfer", detail: "Learn the bank and exchange rules for sending money abroad before you travel." }
      ]
    }
  ],
  mistakes: ["Converting CGPA to another scale on your own.", "Paying an agent for a promised scholarship.", "Starting certification only after the deadline is announced."],
  checklist: ["CGPA scale and grading key ready", "Certified documents requested", "Eligibility for Bangladesh checked", "No agent fee paid"],
  links: [{ label: "Check country rules", href: "/directory/countries" }, { label: "Avoid scams", href: "/guides/scholarship-scams" }],
  related: ["grade-conversion", "document-attestation", "scholarship-scams", "visa-interview"]
};
