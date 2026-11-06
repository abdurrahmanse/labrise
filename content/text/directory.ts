// Text for directory cards, lists, toolbars and detail pages.
export const cardText = {
  country: { funding: "You get", supervisor: "Professor first", fee: "Fee" },
  university: { funding: "Funding", deadline: "Deadline" },
  scholarship: { deadline: "Deadline" },
  provider: { supports: "Supports", programmes: "Programmes", route: "How to apply" },
  lab: { university: "University", focus: "Focus", offers: "What it offers" }
} as const;

export const listText = {
  countries: "Search country, route, funding…",
  universities: "Search university, country, funding…",
  scholarships: "Search scholarship, host, level…",
  providers: "Search organisation, programme, country, or try: need-based, government…",
  labs: "Search lab, university, country, topic…",
  noMatch: "No matches. Clear the search or region filter.",
  noProfessors: "No professors match. Clear the search or filters."
} as const;

export const toolbarText = {
  search: "Search name, university, country, field…",
  region: "Region",
  allRegions: "All regions",
  field: "Field",
  allFields: "All fields",
  sort: "Sort",
  sortOption: (s: string) => `Sort: ${s}`,
  hasEmail: "Has email",
  savedOnly: "Saved only"
} as const;

export const trackerText = {
  title: "Your tracker",
  saved: "Saved",
  savedHint: "Saved on this device only. Export everything from the professors list.",
  statusLabel: "Outreach status",
  noteLabel: "Private note",
  notePlaceholder: "Private note: paper to mention, date emailed…",
  save: "Save professor",
  unsave: "Remove from saved"
} as const;

export const emailText = {
  findOfficial: "Find official email",
  findOnPage: "Find on official page",
  searchQuery: (name: string, university: string) => `${name} ${university} faculty page email`
} as const;

export const ecosystemText = {
  sections: "Country sections",
  universities: "Universities",
  professors: "Professors",
  funding: "Funding organisations",
  labs: "Labs"
} as const;

export const detailText = {
  back: {
    countries: "All countries",
    universities: "All universities",
    professors: "All professors",
    providers: "All providers",
    scholarships: "All scholarships",
    labs: "All labs and groups",
    labsShort: "labs and groups"
  },
  eyebrow: {
    country: (region: string) => `Country · ${region}`,
    university: (country: string) => `University · ${country}`,
    provider: (kind: string) => `Provider · ${kind}`,
    scholarship: (level: string) => `Scholarship · ${level}`,
    professor: (group: string) => `Professor · ${group}`,
    lab: (kind: string, country: string) => `${kind} · ${country}`
  },
  lead: {
    university: (funding: string, deadline: string) => `${funding}. Typical application window: ${deadline}.`,
    scholarship: (host: string, covers: string) => `Hosted in ${host}. Covers: ${covers}.`,
    professor: (university: string, country: string, group: string) => `${university}, ${country}. Research group: ${group}.`
  },
  facts: {
    fundedRoutes: "Funded routes",
    whatYouGet: "What you get",
    professorFirst: "Contact a professor first?",
    professorFirstShort: "Professor first?",
    applicationFee: "Application fee",
    country: "Country",
    region: "Region",
    funding: "Funding",
    typicalDeadline: "Typical deadline",
    officialSite: "Official site",
    officialPage: "Official page",
    whoItSupports: "Who it supports",
    basedIn: "Based in",
    selection: "Selection",
    level: "Level",
    host: "Host",
    awardedBy: "Awarded by",
    covers: "Covers",
    whoCanApply: "Who can apply",
    university: "University",
    kind: "Type",
    whatItOffers: "What it offers"
  },
  blocks: {
    studyAndLife: "Study and life",
    scholarshipsPrograms: "Scholarships and funding programs",
    findPositions: "Where to find positions",
    tips: "Tips for applicants",
    tipsShort: "Tips",
    universities: "Universities",
    whoFunds: "Who funds study here",
    howToApply: "How to apply",
    studyingIn: (country: string) => `Studying in ${country}`,
    fundingToCheck: "Funding programs to check",
    openPositions: "Where to find open positions",
    professors: (n: number) => `Professors (${n})`,
    fundersHere: "Funding organisations connected here",
    moreIn: (country: string) => `More in ${country}`,
    requirements: "Requirements",
    documents: "Documents usually asked",
    programmes: "Programmes",
    universitiesApply: "Universities where this applies",
    next: "Next",
    readNext: "Read next",
    moreHostedIn: (host: string) => `More hosted in ${host}`,
    fundingRoutes: "Funding routes at this university",
    beforeEmail: "Before you email",
    starterEmail: "Starter email draft",
    commonTopics: "Common topics",
    skills: "Skills to show",
    reading: "What to read",
    explore: (name: string) => `Explore ${name}`,
    labsHere: (n: number) => `Labs and groups (${n})`,
    labProfessors: "Professors in this lab",
    moreLabs: (place: string) => `More labs and groups in ${place}`
  },
  hints: {
    moreDetail: "Scholarships, study and life, visas and how to apply each have their own tab above.",
    allLabs: (n: number) => `See all ${n} labs and groups`,
    labs: "Labs change their pages, openings and funding often. Open the official page and write to the group or its professors before you apply.",
    figures: "Figures are typical ranges. Confirm on the official pages below.",
    deadlines: "Deadlines and funding change every cycle. Confirm on the official site.",
    openOrg: "Open an organisation to see its requirements and how to apply.",
    amounts: "Amounts, eligibility and deadlines change every cycle. Confirm on the official page.",
    worldwide: "This organisation funds students at many universities in many countries, so it is not tied to one country or university. Check the official page for the universities that can take part.",
    usualRules: "These are the usual rules. Each programme sets its own, so read the official call before you apply.",
    noFunders: "No national organisation is listed. See the funding organisations tab for details.",
    universityRoute: "Want a university route instead?",
    universityRouteLink: "See how to apply to a university",
    dossier: (country: string) => `Open the full ${country} dossier →`,
    website: (name: string) => `${name} website`
  },
  scholarshipSteps: {
    official: "Read the official page",
    eligibility: "Check eligibility",
    documents: "Prepare CV and SOP",
    referees: "Arrange referees",
    submit: "Submit before the deadline"
  },
  readNext: {
    fundingTypes: "Types of funding",
    scams: "Avoid scams",
    timeline: "12-month timeline",
    applyScholarship: "How to apply to a scholarship",
    referenceLetters: "Reference letters",
    sop: "Statement of purpose"
  }
} as const;

export const rosterText = {
  universityDetails: "University details and funding →"
} as const;

export const rosterLabels = {
  noProfessors: "No professors are listed here yet.",
  emailSeeDetails: "Email: see the details page",
  noUniversities: "No universities are listed for this country yet.",
  noFunders: "No organisation is listed for this place yet. Check the university's own funding page.",
  professorCount: (n: number) => `${n} professors`,
  funderCount: (n: number) => `${n} funders`,
  requirements: "Requirements"
} as const;

export const countryViewText = {
  overview: "Overview",
  titles: { universities: "Universities", professors: "Professors", labs: "Labs and groups", scholarships: "Scholarships", study: "Study and life", funding: "Funding organisations" },
  noScholarships: "No scholarship programme is listed for this country yet. See the funding organisations below.",
  notFound: "Not found",
  eyebrow: (country: string, region: string) => `${country} · ${region}`,
  metaTitle: (view: string, country: string) => `${view} in ${country}`,
  metaDescription: (view: string, country: string) => `${view} connected to fully funded study in ${country}.`,
  fundingBlock: "Who funds study here",
  fundingHint: "Many PhD posts in this country are paid directly by the university or a professor's grant. See the country overview for the usual routes.",
  fundingEmpty: "No national organisation is listed. Look at the university's own funding pages and the funding types guide."
} as const;

export const professorDetailText = {
  facts: { university: "University", country: "Country", group: "Group", email: "Email" },
  emailHint: "Emails were taken from official university or institute pages. People move, so confirm on their page before writing.",
  fieldAbout: (field: string) => `About the field: ${field}`,
  moreIn: (group: string) => `More in ${group}`
} as const;

export const labText = {
  none: "No labs or groups are listed here yet.",
  offers: "What it offers",
  people: (n: number) => `${n} ${n === 1 ? "professor" : "professors"}`,
  nationalGroup: "National institutes and networks",
  countryIntro: (country: string, n: number) => `${n} labs, institutes and communities in ${country}, grouped by university. Open one to see who leads it, how it is funded and how to approach it.`,
  blocks: {
    overview: "What this place works on",
    people: "People and contacts",
    funding: "How study here can be funded",
    fundingHint: "These organisations and programmes fund study in this country or at this university. Funding for a specific lab post comes from the lab's own openings, so check the official page.",
    scholarships: "Scholarships hosted in this country",
    university: "The university behind it",
    country: "Studying in this country",
    approach: "How to approach this lab",
    related: (place: string) => `More labs and groups in ${place}`,
    community: "About joining a community or network",
    explore: "Explore this lab",
    fields: "Research fields",
    colleagues: (u: string) => `Other professors at ${u}`,
    documents: "Documents to prepare",
    countryTips: (c: string) => `Tips for ${c}`
  },
  noPeople: "No professors are listed for this lab yet. Open the official page for its team, or see the professors at the same university.",
  documents: ["Academic CV with publications and projects", "Transcripts and degree certificates", "Statement of purpose or research statement", "Two or three reference letters", "English test result if the programme asks for one"],
  facts: { affiliation: "Affiliation", independent: "Independent institute or network", people: "Listed people", region: "Region", deadline: "Typical university deadline", funding: "University funding route", supervisorFirst: "Contact a professor first?" },
  approach: [
    "Read the lab's official page and its latest papers or projects, so you can name something specific.",
    "Check for open posts, fellowships or a doctoral school call on the official page before you write.",
    "Write a short email to the listed professor or the contact person: who you are, what you read, why it fits, and what you attach.",
    "Prepare a CV, transcripts and a research statement. Match the statement to the lab's topics.",
    "Apply through the university or doctoral school as well: the lab alone usually cannot admit you.",
    "Apply for the scholarships listed below in parallel, because deadlines differ."
  ],
  communityNote: "A community or network usually has no single admissions office. Use it to find groups, events, supervisors and funded calls, and then apply to the member university or lab that fits.",
  instituteNote: "Institutes often run their own doctoral school or work with partner universities. Open the official page to see which one admits you."
} as const;

export const sectionText = {
  lab: {
    tabsLabel: "Lab sections",
    tabs: [
      { view: null, label: "Overview" },
      { view: "people", label: "People" },
      { view: "funding", label: "Funding" },
      { view: "join", label: "How to join" },
      { view: "context", label: "Place" }
    ],
    titles: { people: "People and contacts", funding: "Funding", join: "How to join", context: "The place behind it" },
    hints: { people: "Who leads it and how to reach them", funding: "Funders and scholarships that can pay for study here", join: "Steps, documents and guides", context: "University, country and visa facts" }
  },
  university: {
    tabsLabel: "University sections",
    tabs: [
      { view: null, label: "Overview" },
      { view: "labs", label: "Labs" },
      { view: "professors", label: "Professors" },
      { view: "funding", label: "Funding" },
      { view: "study", label: "Study here" }
    ],
    titles: { labs: "Labs and groups", professors: "Professors", funding: "Funding", study: "Study here" },
    hints: { labs: "Labs, institutes and communities", professors: "Who to write to", funding: "Funders and scholarships", study: "Life, visa, positions and how to apply" }
  },
  country: {
    extraTabs: { scholarships: "Scholarships", study: "Study and life" },
    titles: { scholarships: "Scholarships", study: "Study and life" }
  },
  fields: {
    title: "Research fields",
    lead: "Every professor and lab grouped by what they work on. Pick a field to see its topics, the skills to show, what to read, and who works in it.",
    meta: { title: "Research fields: professors, labs and what to read", description: "Browse fully funded research by field: topics, skills, reading and the professors and labs in each." },
    people: (n: number) => `Professors in this field (${n})`,
    labs: (n: number) => `Labs and groups (${n})`,
    countries: "Where this field is strongest in the directory",
    topics: "Common topics",
    skills: "Skills to show",
    reading: "What to read",
    showing: (shown: number, total: number) => `Showing ${shown} of ${total}. Open a university or country to see everyone.`,
    all: "All fields",
    counts: (p: number, l: number) => `${p} professors · ${l} labs`
  },
  regions: {
    title: "Regions",
    meta: (region: string) => ({ title: `Fully funded study in ${region}: countries, universities and labs`, description: `Every country in ${region} with its universities, professors, labs and scholarships.` }),
    lead: (region: string, n: number) => `${n} countries in ${region}. Open a country for its universities, professors, labs and funders.`,
    stats: { countries: "Countries", universities: "Universities", professors: "Professors", labs: "Labs", scholarships: "Scholarships" },
    countries: "Countries in this region",
    scholarships: "Scholarships hosted here",
    topUniversities: "Universities with the most listed professors"
  }
} as const;
