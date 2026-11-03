export interface ApplyStep {
  title: string;
  detail: string;
  /** Guide or page that explains this step in more depth. */
  href?: string;
  linkLabel?: string;
}

export interface ApplyTrack {
  id: "university" | "scholarship";
  title: string;
  summary: string;
  steps: ApplyStep[];
  tips: string[];
}

export const applyTracks: ApplyTrack[] = [
  {
    id: "university",
    title: "Apply to a university",
    summary: "For a master's or PhD place. The same steps work for almost every university.",
    steps: [
      { title: "Shortlist programmes", detail: "Match your research area, check that funding is stated, and note each deadline.", href: "/directory/universities", linkLabel: "University directory" },
      { title: "Read the admission page", detail: "List the required documents, language level, fee and the exact deadline. Write them in one sheet.", href: "/guides/application-portals", linkLabel: "Application portals" },
      { title: "Contact a professor if needed", detail: "In many countries a professor must agree first. Send a short, specific email.", href: "/guides/cold-email", linkLabel: "Cold email guide" },
      { title: "Prepare your documents", detail: "CV, statement of purpose, transcripts, references and test scores.", href: "/guides/cv", linkLabel: "CV guide" },
      { title: "Ask your referees", detail: "Ask 6–8 weeks ahead and send them your CV and deadlines.", href: "/guides/reference-letter", linkLabel: "Reference letters" },
      { title: "Create the portal account and fill the form", detail: "Use one professional email. Upload files in the requested format and save the confirmation.", href: "/guides/application-portals", linkLabel: "Application portals" },
      { title: "Pay the fee or request a waiver", detail: "Look for a waiver first. Keep the receipt.", href: "/guides/application-fee", linkLabel: "Application fees" },
      { title: "Submit early and check receipt", detail: "Submit at least three days before the deadline and confirm that referees have uploaded their letters." },
      { title: "Prepare for an interview", detail: "Be ready to explain your projects and the professor's papers.", href: "/guides/interview-prep", linkLabel: "Interview prep" },
      { title: "Compare offers and accept in writing", detail: "Confirm funding, duration and duties in writing before you accept.", href: "/guides/offer-comparison", linkLabel: "Compare offers" },
      { title: "Apply for the visa", detail: "Start as soon as you accept.", href: "/guides/visa-interview", linkLabel: "Visa guide" }
    ],
    tips: [
      "Apply to a focused list of programmes rather than many weak matches.",
      "Deadlines are often in December to January in the US and Canada, and rolling in much of Europe.",
      "Never pay anyone to secure admission."
    ]
  },
  {
    id: "scholarship",
    title: "Apply to a scholarship organisation",
    summary: "For awards such as Commonwealth, DAAD, Chevening or Fulbright. Rules differ for each provider.",
    steps: [
      { title: "Check eligibility first", detail: "Nationality, age, degree, work experience and any return obligation. If you do not meet one rule, move on.", href: "/directory/providers", linkLabel: "Provider requirements" },
      { title: "Find your application route", detail: "Some awards are direct, some go through a national body or embassy, and some need a university to nominate you." },
      { title: "Check if admission comes first", detail: "Some providers need a university offer or admission before you apply, others select you first." },
      { title: "Read the official call", detail: "Note the exact documents, essay questions, language level and dates. Scholarship deadlines are often earlier than university deadlines." },
      { title: "Prepare scholarship-specific documents", detail: "Essays on goals and impact, a study or research plan, references and transcripts.", href: "/guides/sop", linkLabel: "Statement of purpose" },
      { title: "Prepare references", detail: "Choose referees who know your work and give them the provider's instructions.", href: "/guides/reference-letter", linkLabel: "Reference letters" },
      { title: "Submit through the correct channel", detail: "Use the official portal or the named body. Keep proof of submission." },
      { title: "Prepare for selection", detail: "Expect shortlisting and often an interview about goals, plans and return.", href: "/guides/interview-prep", linkLabel: "Interview prep" },
      { title: "Read the award terms", detail: "Check what is covered, the length, and obligations such as returning home." },
      { title: "Accept and coordinate admission and visa", detail: "Confirm the award in writing, then follow the provider's steps for enrolment and the visa.", href: "/guides/visa-interview", linkLabel: "Visa guide" }
    ],
    tips: [
      "Apply to several awards. They have different rules and different deadlines.",
      "Do not pay a fee to receive a scholarship. Real providers do not charge it.",
      "Always use the provider's own website, not a copy on another site."
    ]
  }
];

export const findTrack = (id: string) => applyTracks.find((t) => t.id === id);
