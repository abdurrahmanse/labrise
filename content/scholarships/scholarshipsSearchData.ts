import type { SearchQueryFormula, SearchWorkflowStep, VerifiedScholarshipPortal } from "@/modules/scholarships";

export const searchWorkflowSteps: SearchWorkflowStep[] = [
  {
    number: 1,
    title: "Search Official University Websites Directly",
    category: "Discovery",
    summary: "Bypass third-party ad sites by checking official university domains (.edu, .ac.uk, .ca, .edu.au).",
    actionableInstructions: [
      "Navigate to the target university's Graduate School or Postgraduate Admissions page.",
      "Check your specific subject department under 'Prospective Graduate Students' or 'Financial Aid'.",
      "Bookmark direct links to departmental degree handbooks and funding policies."
    ],
    keyToolsOrKeywords: ["Graduate Admissions", "Department Financial Support", "Prospective Students"]
  },
  {
    number: 2,
    title: "Identify Government Scholarship Programs",
    category: "Discovery",
    summary: "Target official national exchange agencies offering full-ride bilateral awards.",
    actionableInstructions: [
      "Check official national portals: DAAD (Germany), Campus France, Swedish Institute, Fulbright (USA), Chevening (UK), MEXT (Japan), GKS (Korea), and Australia Awards.",
      "Review eligibility by citizenship: many bilateral awards are reserved for students from specific partner nations.",
      "Check return-to-home-country requirements (e.g. Fulbright J-1 2-year rule, Chevening rule) before applying."
    ],
    keyToolsOrKeywords: ["Government Scholarships", "National Exchange Agency", "Bilateral Grants"]
  },
  {
    number: 3,
    title: "Inspect Department Funding & Fellowship Pages",
    category: "Discovery",
    summary: "Look for departmental fellowships, Dean's awards, and tuition remission buried on faculty sub-sites.",
    actionableInstructions: [
      "Search the department website for 'Graduate Fellowships', 'Teaching Assistantships', or 'Tuition Waivers'.",
      "Verify whether international students are eligible for internal institutional awards.",
      "Confirm whether scholarship consideration is automatic with admission or requires a separate application."
    ],
    keyToolsOrKeywords: ["Graduate Fellowships", "Dean's Merit Award", "Tuition Remission"]
  },
  {
    number: 4,
    title: "Locate European Salaried PhD Vacancies",
    category: "Discovery",
    summary: "Search university job boards in Sweden, the Netherlands, Denmark, and Norway where PhDs are paid positions.",
    actionableInstructions: [
      "Check university 'Jobs' or 'Vacancies' pages for 'PhD Candidate' or 'Doctoral Researcher' openings.",
      "Use centralized academic job portals: EURAXESS, AcademicTransfer (Netherlands), and Jobbnorge (Norway).",
      "Treat these applications like formal job applications with a CV, cover letter, and references."
    ],
    keyToolsOrKeywords: ["EURAXESS", "AcademicTransfer", "PhD Vacancies", "Jobbnorge"]
  },
  {
    number: 5,
    title: "Search Active Lab Research Grants",
    category: "Discovery",
    summary: "Find professors who hold multi-year research grants capable of hiring graduate research assistants.",
    actionableInstructions: [
      "Check grant databases: NSF Awards Search (USA), NIH RePORTER (USA), ERC Grants (Europe), and DFG (Germany).",
      "Search for grants awarded in your field in the last 12–24 months; newly funded labs frequently recruit researchers.",
      "Review author affiliations in recent papers published in top open-access journals in your area."
    ],
    keyToolsOrKeywords: ["NSF Awards", "ERC Grants", "NIH RePORTER", "DFG GEPRIS"]
  },
  {
    number: 6,
    title: "Use Boolean Search Formulas",
    category: "Discovery",
    summary: "Use search operators to filter out agency ads and pinpoint primary university funding pages.",
    actionableInstructions: [
      "Use site: filters to restrict results to university domains: site:.edu, site:.ac.uk, site:.edu.au.",
      "Enclose exact phrases in quotes: \"fully funded\" \"master's\" OR \"full tuition waiver\" \"monthly stipend\".",
      "Combine subject keywords with intake year: site:.ac.uk \"PhD studentship\" \"Computer Science\" 2026."
    ],
    keyToolsOrKeywords: ["site:.edu", "filetype:pdf", "\"fully funded\"", "\"tuition waiver\""]
  },
  {
    number: 7,
    title: "Verify Exact Eligibility Criteria",
    category: "Validation",
    summary: "Confirm that your degree, GPA, and prerequisite coursework satisfy departmental thresholds.",
    actionableInstructions: [
      "Check minimum GPA requirements and whether the cutoff is an absolute filter or a recommended average.",
      "Verify degree length requirements: confirm whether the department accepts a 3-year bachelor's degree.",
      "Check prerequisite course requirements to ensure your transcript covers required foundational subjects."
    ],
    keyToolsOrKeywords: ["Minimum GPA", "Degree Equivalency", "Course Prerequisites"]
  },
  {
    number: 8,
    title: "Audit Deadlines & Server Time Zones",
    category: "Validation",
    summary: "Distinguish between priority funding deadlines and general admission closing dates.",
    actionableInstructions: [
      "Check for 'Priority Funding Deadlines' (often December 1 or 15) that occur before final admission deadlines.",
      "Note the time zone of the online application portal (e.g. 11:59 PM EST or CET) to prevent unexpected lockouts.",
      "Aim to submit your dossier at least 72 hours before the deadline to avoid server overload."
    ],
    keyToolsOrKeywords: ["Priority Deadline", "Server Time Zone", "Submission Target"]
  },
  {
    number: 9,
    title: "Verify Real Net Funding Coverage",
    category: "Validation",
    summary: "Confirm that an offer covers 100% of costs without leaving unpaid fees or living cost deficits.",
    actionableInstructions: [
      "Verify whether the waiver covers international out-of-state tuition or only domestic rates.",
      "Confirm whether the living stipend is paid for 9 months or 12 months, and check net monthly take-home amounts.",
      "Check whether mandatory student campus fees and health insurance are covered by the department."
    ],
    keyToolsOrKeywords: ["Net Monthly Stipend", "Mandatory Student Fees", "Health Insurance Subsidy"]
  },
  {
    number: 10,
    title: "Confirm Supervisor Outreach Requirements",
    category: "Validation",
    summary: "Determine if reaching out to a professor is mandatory, optional, or not required.",
    actionableInstructions: [
      "Check the admissions page: mandatory in Canada/Australia/UK; centralized committee admissions in the US.",
      "If supervisor agreement is required, begin personalized outreach 3–4 months before the application deadline.",
      "Secure written confirmation of supervision from the professor before submitting your application."
    ],
    keyToolsOrKeywords: ["Supervisor Agreement", "Centralized Admissions", "Expression of Interest"]
  },
  {
    number: 11,
    title: "Spot and Avoid Fraudulent Offers",
    category: "Safety",
    summary: "Protect yourself from scholarship scams, fake agents, and deceptive commercial sites.",
    actionableInstructions: [
      "Legitimate scholarships NEVER charge 'award processing' or 'claim' fees to release money.",
      "Always verify that email messages originate from university (.edu, .ac.uk) or government domains, not Gmail or Yahoo.",
      "No agency can guarantee admission or scholarships; decisions rest entirely with university faculty panels."
    ],
    keyToolsOrKeywords: ["Zero Upfront Fees", "Official Email Domains", "Scam Protection"]
  }
];

export const searchQueryFormulas: SearchQueryFormula[] = [
  {
    id: "formula-us-phd",
    title: "North American Fully Funded PhD Search",
    purpose: "Find US and Canadian university department pages offering full tuition remission and guaranteed graduate assistantships.",
    query: "site:.edu \"fully funded\" OR \"full tuition waiver\" \"monthly stipend\" PhD [Your Field]",
    exampleFilled: "site:.edu \"fully funded\" OR \"full tuition waiver\" \"monthly stipend\" PhD \"Computer Science\"",
    targetEngines: ["Google", "Bing", "DuckDuckGo"]
  },
  {
    id: "formula-uk-studentships",
    title: "UK / Commonwealth Funded PhD Studentship Search",
    purpose: "Locate active UKRI and university doctoral training partnerships that fund international fees and UKVI stipends.",
    query: "site:.ac.uk \"PhD studentship\" OR \"fully funded studentship\" [Your Field] \"tuition and stipend\" 2026",
    exampleFilled: "site:.ac.uk \"PhD studentship\" OR \"fully funded studentship\" \"Biomedical Engineering\" \"tuition and stipend\" 2026",
    targetEngines: ["Google", "Jobs.ac.uk"]
  },
  {
    id: "formula-europe-salaried",
    title: "European Salaried Doctoral Vacancy Search",
    purpose: "Pinpoint university job postings in Sweden, Denmark, Netherlands, and Norway where PhD candidates are paid full employee salaries.",
    query: "site:academicpositions.com OR site:euraxess.ec.europa.eu \"PhD candidate\" OR \"doctoral researcher\" [Your Field] \"salary\"",
    exampleFilled: "site:academicpositions.com OR site:euraxess.ec.europa.eu \"PhD candidate\" \"Renewable Energy\" \"salary\"",
    targetEngines: ["Google", "EURAXESS", "AcademicTransfer"]
  },
  {
    id: "formula-masters-scholarship",
    title: "Fully Funded Master's Bilateral Scholarship Search",
    purpose: "Discover accredited government and university master's scholarships covering 100% tuition and living allowances.",
    query: "site:.edu OR site:.org \"full scholarship\" OR \"tuition waiver\" \"master's\" [Your Subject] \"international students\" 2026",
    exampleFilled: "site:.edu OR site:.org \"full scholarship\" \"master's\" \"Data Science\" \"international students\" 2026",
    targetEngines: ["Google"]
  },
  {
    id: "formula-australia-rtp",
    title: "Australian Research Training Program (RTP) Search",
    purpose: "Find Go8 and Australian university departments offering international RTP fee offsets and living stipends.",
    query: "site:.edu.au \"Research Training Program\" OR \"RTP stipend\" [Your Field] \"international\"",
    exampleFilled: "site:.edu.au \"Research Training Program\" \"Mechanical Engineering\" \"international\"",
    targetEngines: ["Google"]
  }
];

export const verifiedScholarshipPortals: VerifiedScholarshipPortal[] = [
  {
    id: "portal-euraxess",
    name: "EURAXESS European Research Jobs",
    countryOrRegion: "European Union / 40+ European Nations",
    governingBody: "European Commission",
    url: "https://euraxess.ec.europa.eu/jobs",
    coverageType: "Salaried Employment",
    notes: "Official EU portal listing thousands of salaried doctoral positions across Europe with statutory employee benefits."
  },
  {
    id: "portal-daad",
    name: "DAAD International Scholarship Database",
    countryOrRegion: "Germany",
    governingBody: "German Academic Exchange Service (Federal Foreign Office)",
    url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Comprehensive official database of all government and foundation scholarships for studying in Germany."
  },
  {
    id: "portal-campus-france",
    name: "CampusBourses French Grant Directory",
    countryOrRegion: "France",
    governingBody: "Campus France / French Ministry of Foreign Affairs",
    url: "https://campusbourses.campusfrance.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Complete official directory of French government (Eiffel), regional, and institutional doctoral grants."
  },
  {
    id: "portal-academictransfer",
    name: "AcademicTransfer Netherlands",
    countryOrRegion: "Netherlands",
    governingBody: "Universiteiten van Nederland (UNL)",
    url: "https://www.academictransfer.com/en/",
    coverageType: "Salaried Employment",
    notes: "The centralized official portal listing all PhD researcher vacancies across all 14 Dutch research universities."
  },
  {
    id: "portal-chevening",
    name: "Chevening Scholarships Portal",
    countryOrRegion: "United Kingdom",
    governingBody: "UK Foreign, Commonwealth & Development Office (FCDO)",
    url: "https://www.chevening.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "UK government's global scholarship programme offering 100% full tuition, flights, and living stipends."
  },
  {
    id: "portal-fulbright",
    name: "Fulbright Foreign Student Program",
    countryOrRegion: "United States",
    governingBody: "U.S. Department of State (Bureau of Educational and Cultural Affairs)",
    url: "https://foreign.fulbrightonline.org/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Flagship U.S. bilateral exchange program covering tuition, living expenses, health insurance, and airfare."
  },
  {
    id: "portal-vanier",
    name: "Vanier Canada Graduate Scholarships",
    countryOrRegion: "Canada",
    governingBody: "Government of Canada (Tri-Agencies: NSERC, CIHR, SSHRC)",
    url: "https://vanier.gc.ca/en/home-accueil.html",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Canada's top doctoral award providing CAD $50,000/year for 3 years across Canadian universities."
  },
  {
    id: "portal-mext",
    name: "MEXT Japanese Government Scholarships",
    countryOrRegion: "Japan",
    governingBody: "Ministry of Education, Culture, Sports, Science and Technology (MEXT)",
    url: "https://www.studyinjapan.go.jp/en",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Japanese full-ride scholarship covering 100% university tuition, monthly living allowance, and round-trip flights."
  },
  {
    id: "portal-gks",
    name: "Global Korea Scholarship (GKS)",
    countryOrRegion: "South Korea",
    governingBody: "National Institute for International Education (NIIED)",
    url: "https://www.studyinkorea.go.kr",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Full-ride Korean government program covering tuition, living stipend, airfare, settlement grant, and language training."
  },
  {
    id: "portal-singa",
    name: "Singapore International Graduate Award (SINGA)",
    countryOrRegion: "Singapore",
    governingBody: "Agency for Science, Technology and Research (A*STAR) & NUS / NTU",
    url: "https://www.a-star.edu.sg/Scholarships",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Premier biomedical and physical sciences PhD award in Singapore providing full tuition and SGD 2,700–3,200/month."
  },
  {
    id: "portal-study-australia",
    name: "Study Australia & Research Training Program (RTP)",
    countryOrRegion: "Australia",
    governingBody: "Australian Department of Education & Austrade",
    url: "https://www.studyaustralia.gov.au/",
    coverageType: "Full Tuition + Living Stipend",
    notes: "Official Australian government portal for degree search and Research Training Program (RTP) scholarship rules."
  }
];

export const scholarshipFinderControlsData = {
  header: {
    badge: "Opportunity Discovery Engine",
    title: "How to Find Fully Funded Scholarships",
    subtitle:
      "A systematic 11-step methodology, verified Boolean search queries, and accredited directory of official government and university portals."
  },
  sections: {
    workflowTitle: "11-Step Scholarship Discovery Workflow",
    workflowSubtitle: "Follow this systematic sequence to locate and verify legitimate graduate funding opportunities.",
    booleanTitle: "Copyable Boolean Search Formulas",
    booleanSubtitle: "Paste these exact query strings into Google, Google Scholar, or university search bars.",
    portalsTitle: "Accredited Official Portals Directory",
    portalsSubtitle: "Official government and university gateways for verified international graduate funding.",
    fraudTitle: "Anti-Fraud Verification Guide",
    fraudBadge: "Zero Tolerance for Scams",
    copiedFeedback: "Query Copied to Clipboard!"
  },
  fraudRules: [
    {
      title: "Legitimate scholarships NEVER charge fees",
      detail: "Any agency asking for a 'claim fee', 'file release fee', or 'processing commission' is fraudulent."
    },
    {
      title: "Verify official email domains",
      detail: "Official communications come from university (.edu, .ac.uk) or government domains, never free webmail like Gmail or Yahoo."
    },
    {
      title: "No agency can guarantee admission",
      detail: "Scholarship decisions are made solely by academic faculty committees based on your merit and documents."
    },
    {
      title: "Always cross-verify on official portals",
      detail: "Before submitting personal documents, verify the scholarship URL on the university's accredited website."
    }
  ]
};

