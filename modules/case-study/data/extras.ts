import type { Fact } from "../types";

/** The result in six numbers, shown above everything else. */
export const glance = [
  { label: "Months of work", value: "14" },
  { label: "Groups reviewed", value: "30" },
  { label: "Professors emailed", value: "4" },
  { label: "Offers", value: "2" },
  { label: "Hours in total", value: "≈ 230" },
  { label: "Fees paid for a place", value: "0" }
] satisfies Fact[];

export const setbacks = [
  { what: "Heidelberg never replied", did: "She followed up once after 12 days, then closed it in her tracker and spent the time on the replies she had." },
  { what: "ETH Zurich had no open post", did: "She thanked the professor, asked to be kept in mind and noted the contact for later." },
  { what: "The UK award rejected her", did: "She asked for feedback, reused the essay for another call and did not take it personally." },
  { what: "Her first SOP draft was generic", did: "Two reviewers marked every sentence that could apply to anyone. She rewrote them with evidence, as in the before and after list." },
  { what: "A reference letter was late", did: "She had asked eight weeks ahead and sent one polite reminder a week before the deadline, so nothing was missed." },
  { what: "She worried her CGPA was not the highest", did: "She stated the 4.00 scale and class rank, and led with research evidence instead." }
];

export const faq = [
  { q: "Do I need a publication to get a funded PhD?", a: "No. She had a preprint and a poster, but strong projects, open code and honest results also work. Read the first publication and no research background guides.", href: "/guides/no-research-background" },
  { q: "What if a professor does not reply?", a: "Follow up once after 10 to 14 days with something new. If there is still no answer, move on and do not send a third email.", href: "/guides/cold-email" },
  { q: "Can I apply without emailing professors first?", a: "For many Master's programmes yes. For most PhD posts, contact is how you learn whether a funded place exists.", href: "/guides/master-vs-phd" },
  { q: "Is a scholarship needed if the post is salaried?", a: "Not always. She used it as insurance and to compare offers. Check what each source covers in writing.", href: "/guides/funding-types" },
  { q: "How early should I start?", a: "She started 14 months ahead. Certified documents and references take the longest, so begin them first.", href: "/guides/deadlines-timeline" },
  { q: "Can I trust agents who promise a scholarship?", a: "No. Real funders and universities do not sell places. Read the scams guide before paying anyone.", href: "/guides/scholarship-scams" }
];
