import { countries } from "../data/countries";
import { countrySlug } from "../utils/slugs";
import type { ScholarshipEntry } from "../types";

export interface JourneyStage {
  title: string;
  detail: string;
  links: { label: string; href: string }[];
}

const needsSupervisor = (s: ScholarshipEntry) => s.level.includes("PhD");

/** The path from this page to an offer, in order. A PhD adds the professor and proposal steps; a Master's skips them. */
export function scholarshipJourney(s: ScholarshipEntry): JourneyStage[] {
  const phd = needsSupervisor(s);
  const hostCountry = countries.find((c) => c.country === s.host);
  const stages: JourneyStage[] = [
    {
      title: "Read the call and check you qualify",
      detail: "Open the official page, tick every eligibility rule and note the deadline with its time zone.",
      links: [{ label: "How to read a call", href: "/guides/read-a-call" }, { label: "Weak profile?", href: "/guides/weak-profile" }]
    },
    {
      title: "Sort out language tests and grades",
      detail: "Check which English score is accepted, whether a waiver exists, and how your grades are shown.",
      links: [{ label: "IELTS", href: "/guides/ielts" }, { label: "Grades", href: "/guides/grade-conversion" }, { label: "GRE and others", href: "/guides/english-and-gre" }]
    }
  ];
  if (phd) {
    stages.push({
      title: "Find and contact a supervisor",
      detail: "Pick two or three professors at host universities and write a short, specific email.",
      links: [{ label: "Professors", href: "/directory/professors" }, { label: "Cold email", href: "/guides/cold-email" }, { label: "Labs", href: "/directory/labs" }]
    });
  }
  stages.push({
    title: phd ? "Write CV, SOP and research proposal" : "Write CV, SOP and essay",
    detail: "Draft early, get feedback and keep each document short and specific to this scholarship.",
    links: phd
      ? [{ label: "CV", href: "/guides/cv" }, { label: "SOP", href: "/guides/sop" }, { label: "Proposal", href: "/guides/research-proposal" }]
      : [{ label: "CV", href: "/guides/cv" }, { label: "SOP", href: "/guides/sop" }, { label: "Scholarship essay", href: "/guides/scholarship-essay" }]
  });
  stages.push(
    {
      title: "Arrange referees and certified documents",
      detail: "Ask referees at least a month ahead and request transcripts, certificates and translations early.",
      links: [{ label: "Reference letters", href: "/guides/reference-letter" }, { label: "Attestation", href: "/guides/document-attestation" }]
    },
    {
      title: "Submit and keep proof",
      detail: "Use the right portal, pay any fee, submit before the deadline and save the confirmation.",
      links: [{ label: "Portals", href: "/guides/application-portals" }, { label: "Fees", href: "/guides/application-fee" }, { label: "Timeline", href: "/guides/deadlines-timeline" }]
    },
    {
      title: "Prepare for interview and results",
      detail: "Practise explaining your work, then compare offers and answer within the deadline.",
      links: [{ label: "Interview", href: "/guides/interview-prep" }, { label: "After acceptance", href: "/guides/after-acceptance" }, { label: "Compare offers", href: "/guides/offer-comparison" }]
    },
    {
      title: "Visa, housing and arrival",
      detail: `Plan the visa, first-month money and a safe place to live in ${s.host}.`,
      links: [{ label: "Visa", href: "/guides/visa-interview" }, { label: "Housing", href: "/guides/housing-and-insurance" }, { label: "Budget", href: "/guides/budget-planning" }]
    }
  );
  const last = stages[stages.length - 1];
  if (hostCountry) last.links.push({ label: `About ${s.host}`, href: `/directory/countries/${countrySlug(hostCountry)}` });
  return stages;
}
