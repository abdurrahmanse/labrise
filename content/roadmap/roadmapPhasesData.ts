import type { RoadmapPhase } from "@/modules/roadmap";

export const roadmapPhasesData: RoadmapPhase[] = [
  {
    id: "phase-01",
    number: 1,
    slug: "understand-academic-profile",
    title: "Assess Your Academic Profile",
    tagline: "Calculate your true GPA, audit your research, and confirm language test requirements.",
    estimatedDuration: "1–2 Months",
    degreeScope: "both",
    what: "Review your degree transcripts, calculate your GPA on international scales, and list all research or practical projects.",
    why: "Knowing your exact qualifications helps you target universities where you meet admission cutoffs, saving time and money.",
    how: [
      {
        step: "Convert Your GPA Correctly",
        detail: "Calculate your GPA on the US 4.0 or German 1.0–4.0 scale using official formulas (like WES or Bavarian formula) rather than simple percentages."
      },
      {
        step: "List Your Research & Projects",
        detail: "Document your bachelor's or master's thesis, publications, code repositories, capstones, and relevant lab or industry experience."
      },
      {
        step: "Check English Language Rules",
        detail: "Verify whether target universities accept an official Medium of Instruction (MOI) certificate or strictly require IELTS or TOEFL."
      },
      {
        step: "Identify Your Compensatory Strengths",
        detail: "Balance a moderate GPA (3.0–3.3/4.0) with strong research outputs, relevant work experience, or high GRE/test scores."
      }
    ],
    where: [
      {
        name: "WES iGPA Calculator",
        url: "https://www.wes.org/calculator/",
        description: "Free credential conversion tool for US and Canadian 4.0 GPA equivalency."
      },
      {
        name: "DAAD Bavarian Formula Calculator",
        url: "https://www.daad.de/en",
        description: "Official German formula to convert international grades into the 1.0–4.0 scale."
      },
      {
        name: "ENIC-NARIC Qualification Portal",
        url: "https://www.enic-naric.net/",
        description: "Official European network for international diploma recognition and degree verification."
      }
    ],
    commonMistakes: [
      "Assuming a 3.0 GPA automatically rules you out of fully funded opportunities.",
      "Self-converting grades incorrectly instead of using official conversion tools.",
      "Waiting until the application deadline to book language tests.",
      "Forgetting to request an official Medium of Instruction (MOI) certificate early from your registrar."
    ],
    practicalExample:
      "A student with a 3.1 GPA focused on European salaried PhD vacancies where their undergraduate thesis and GitHub project outweighed coursework grades.",
    checklist: [
      { id: "p1-c1", label: "Collected official English transcripts with grading scales from all attended universities." },
      { id: "p1-c2", label: "Calculated native GPA and equivalent US 4.0 or German grade scale." },
      { id: "p1-c3", label: "Cataloged all research projects, conference papers, code repos, and capstones." },
      { id: "p1-c4", label: "Confirmed valid English test results or obtained an official registrar MOI certificate." },
      { id: "p1-c5", label: "Identified 3 professors or supervisors who can provide strong reference letters." }
    ],
    mastersNuance: "Master's admissions prioritize prerequisite course credits (ECTS match) and cumulative GPA.",
    phdNuance: "PhD admissions prioritize research potential, lab techniques, and supervisor alignment over undergraduate coursework.",
    nextStep: {
      slug: "choose-countries",
      title: "Phase 02: Pick Your Target Countries"
    }
  },
  {
    id: "phase-02",
    number: 2,
    slug: "choose-countries",
    title: "Pick Your Target Countries",
    tagline: "Select countries based on funding models, language rules, and stay-back work rights.",
    estimatedDuration: "1 Month",
    degreeScope: "both",
    what: "Match your goals with destinations that offer government scholarships, tuition-free universities, or salaried doctoral jobs.",
    why: "Funding models differ drastically: Northern Europe offers employment contracts; North America uses assistantships; Asia provides bilateral awards.",
    how: [
      {
        step: "Group Countries by Funding Model",
        detail: "Separate employee PhD systems (Nordics, Netherlands) from government awards (DAAD, Eiffel, MEXT) and assistantships (USA, Canada)."
      },
      {
        step: "Check Supervisor Requirements",
        detail: "Learn where contacting a professor is mandatory before applying (UK, Canada, Australia) versus centralized portals (USA, Nordics)."
      },
      {
        step: "Map Intake Deadlines",
        detail: "Track deadlines: US programs (Dec–Jan), European scholarships (Oct–Dec), and European job vacancies (rolling year-round)."
      },
      {
        step: "Verify Visa & Post-Study Work Rights",
        detail: "Check work permits, spouse work rights, and permanent residency pathways on official government immigration sites."
      }
    ],
    where: [
      {
        name: "Study in Europe Portal",
        url: "https://studyineurope.eu/",
        description: "Official European Commission gateway to programs, tuition rules, and scholarships across 33 nations."
      },
      {
        name: "EduCanada Portal",
        url: "https://www.educanada.ca/",
        description: "Government of Canada portal for international study permits, provincial funding, and Vanier awards."
      },
      {
        name: "Study in Japan Portal",
        url: "https://www.studyinjapan.go.jp/en/",
        description: "Official JASSO government directory for MEXT awards and English-taught university programs."
      }
    ],
    commonMistakes: [
      "Applying exclusively to one country without a backup plan across different funding systems.",
      "Ignoring cost of living in countries that offer free tuition but require high living savings.",
      "Confusing employee-status PhD vacancies with student-status scholarships.",
      "Missing early government scholarship deadlines that close 10–12 months before intake."
    ],
    practicalExample:
      "A student applied to 3 US universities (with RA assistantships), 2 German universities (DAAD & TV-L E13), and 2 Swedish universities (salaried jobs), securing funding in Germany.",
    checklist: [
      { id: "p2-c1", label: "Selected 2–3 target countries matching your funding preference and career goals." },
      { id: "p2-c2", label: "Confirmed language of instruction and English score requirements for each country." },
      { id: "p2-c3", label: "Verified whether target countries treat PhD candidates as salaried employees or students." },
      { id: "p2-c4", label: "Noted application open and deadline dates in a centralized tracking sheet." },
      { id: "p2-c5", label: "Checked post-study work visa rights and living cost requirements on government immigration portals." }
    ],
    mastersNuance: "Look for tuition-free public universities (Germany, Norway) or national bilateral scholarships (Eiffel, DAAD, Chevening).",
    phdNuance: "Prioritize countries offering salaried doctoral positions (Sweden, Denmark, Netherlands, Switzerland, Germany).",
    nextStep: {
      slug: "find-scholarships",
      title: "Phase 03: Find Legitimate Scholarships"
    }
  },
  {
    id: "phase-03",
    number: 3,
    slug: "find-scholarships",
    title: "Find Legitimate Scholarships",
    tagline: "Discover full-ride government scholarships, university fellowships, and funded vacancies.",
    estimatedDuration: "1–2 Months",
    degreeScope: "both",
    what: "Search verified scholarship databases and university portals for awards offering full tuition waivers and livable monthly stipends.",
    why: "Legitimate scholarships provide sustainable funding. Knowing where to search protects you from fee-charging scams and partial discounts.",
    how: [
      {
        step: "Search National Government Portals",
        detail: "Explore DAAD (Germany), Campus France, Swedish Institute, Fulbright (USA), MEXT (Japan), and Australia Awards for full scholarships."
      },
      {
        step: "Inspect University Department Pages",
        detail: "Navigate directly to departmental graduate funding pages to find fellowships, research assistantships, and tuition waivers."
      },
      {
        step: "Check Academic Job Boards",
        detail: "Use EURAXESS and AcademicPositions to search open, salaried PhD and research vacancies in Europe."
      },
      {
        step: "Filter Out Partial Discounts",
        detail: "Distinguish 100% full-ride funding packages from 10%–20% tuition discounts that still leave you with heavy living expenses."
      }
    ],
    where: [
      {
        name: "EURAXESS European Research Jobs",
        url: "https://euraxess.ec.europa.eu/jobs",
        description: "Official EU job portal listing thousands of funded doctoral and post-doctoral research positions."
      },
      {
        name: "DAAD Scholarship Database",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-scholarships/",
        description: "Official searchable database of all scholarships and research grants available in Germany."
      },
      {
        name: "Campus France Bourses Directory",
        url: "https://www.campusfrance.org/en",
        description: "Complete catalog of French government, regional, and institutional scholarships."
      }
    ],
    commonMistakes: [
      "Paying third-party agencies for scholarship lists that are freely available on official portals.",
      "Accepting a partial tuition waiver without a guaranteed living stipend or permission to work.",
      "Missing bilateral government deadlines that close a full year before university admission deadlines.",
      "Applying for scholarships without meeting the exact citizenship, degree, or experience criteria."
    ],
    practicalExample:
      "A student searching for funded Master's programs used the DAAD database to filter specifically by 'English-taught' and 'Full Funding', identifying 8 programs with no tuition fees.",
    checklist: [
      { id: "p3-c1", label: "Searched national government exchange portals for bilateral scholarships." },
      { id: "p3-c2", label: "Checked departmental financial aid pages for research assistantships (RA/TA)." },
      { id: "p3-c3", label: "Set up email alerts on EURAXESS and AcademicPositions for salaried PhD jobs." },
      { id: "p3-c4", label: "Confirmed that target awards provide full tuition remission plus a monthly stipend." },
      { id: "p3-c5", label: "Recorded opening dates, submission deadlines, and eligibility criteria in a spreadsheet." }
    ],
    mastersNuance: "Focus on flagship bilateral awards (Fulbright, Chevening, DAAD EPOS, Eiffel, Swedish Institute).",
    phdNuance: "Look for funded project vacancies with advertised grant numbers on university job boards and EURAXESS.",
    nextStep: {
      slug: "shortlist-universities",
      title: "Phase 04: Shortlist Universities & Labs"
    }
  },
  {
    id: "phase-04",
    number: 4,
    slug: "shortlist-universities",
    title: "Shortlist Universities & Labs",
    tagline: "Build a balanced list of dream, match, and safe universities with active funding lines.",
    estimatedDuration: "1 Month",
    degreeScope: "both",
    what: "Select 8–12 institutions across safety tiers where your qualifications match faculty research and departmental admissions requirements.",
    why: "Applying to a balanced portfolio across different institutions dramatically increases your probability of securing at least one fully funded offer.",
    how: [
      {
        step: "Build a 3-Tier Portfolio",
        detail: "Select 2–3 dream programs (reach), 4–5 competitive matches (target), and 2–3 high-probability choices (safety)."
      },
      {
        step: "Verify Faculty Research Output",
        detail: "Confirm professors in your field are actively publishing papers and winning grants, not nearing retirement or inactive."
      },
      {
        step: "Inspect Department Minimums",
        detail: "Check prerequisite courses, GPA minimums, and GRE/language requirements to ensure you are fully eligible."
      },
      {
        step: "Compare Cost vs. Stipend Ratios",
        detail: "Calculate local living costs against the offered stipend to ensure the funding package is genuinely livable."
      }
    ],
    where: [
      {
        name: "CSRankings (Computer Science Focus)",
        url: "https://csrankings.org/",
        description: "Metrics-based ranking tracking top conference publications by university faculty."
      },
      {
        name: "Nature Index",
        url: "https://www.nature.com/nature-index/",
        description: "Tracks high-quality research output across top natural and physical science institutions."
      },
      {
        name: "Mastersportal & PhDportal",
        url: "https://www.mastersportal.com/",
        description: "Comprehensive global search engine for international graduate degree programs."
      }
    ],
    commonMistakes: [
      "Applying only to top-10 global universities and getting rejected across the board.",
      "Picking universities based on overall brand name rather than the specific department's research funding.",
      "Ignoring local cost of living (a $25k stipend in small-town Ohio goes much further than in Boston or London).",
      "Failing to check specific course prerequisites before paying application fees."
    ],
    practicalExample:
      "A student applied to 2 Ivy League schools, 4 strong R1 state universities with guaranteed RA funding, and 2 European universities, receiving funding from two state universities.",
    checklist: [
      { id: "p4-c1", label: "Shortlisted 8–12 target universities categorized into dream, match, and safety." },
      { id: "p4-c2", label: "Confirmed you meet all department prerequisite course and GPA minimums." },
      { id: "p4-c3", label: "Identified at least 2 potential faculty supervisors per university." },
      { id: "p4-c4", label: "Calculated estimated net monthly living expenses for each campus city." },
      { id: "p4-c5", label: "Verified whether institutional application fee waivers are available." }
    ],
    mastersNuance: "Check if the curriculum has course alignment with your undergraduate major (ECTS credit match).",
    phdNuance: "Check lab funding pages and recent grant announcements to ensure professors have open funded seats.",
    nextStep: {
      slug: "contact-supervisors",
      title: "Phase 05: Contact Potential Supervisors"
    }
  },
  {
    id: "phase-05",
    number: 5,
    slug: "contact-supervisors",
    title: "Contact Potential Supervisors",
    tagline: "Send concise, personalized cold emails to professors who have funding for graduate researchers.",
    estimatedDuration: "1–2 Months",
    degreeScope: "both",
    what: "Reach out to prospective academic advisors with a tailored, 150–200 word email and academic CV to explore funded supervision.",
    why: "In many countries (Canada, UK, Germany, Australia), securing a professor's agreement is required before you can submit an application.",
    how: [
      {
        step: "Check if Outreach is Necessary",
        detail: "Confirm whether the university requires a supervisor agreement before applying or uses centralized admissions committees (common in the US)."
      },
      {
        step: "Read Their Recent Publications",
        detail: "Read 1–2 recent papers published by the professor to understand their current research focus and lab methodology."
      },
      {
        step: "Write a 4-Paragraph Cold Email",
        detail: "Keep it under 200 words: (1) Who you are, (2) Why their lab, (3) Your concrete skills and deliverables, (4) Call to action."
      },
      {
        step: "Follow Up Professionally",
        detail: "If no reply after 10–14 days, send one polite follow-up email. If still no response, move on to other faculty."
      }
    ],
    where: [
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/",
        description: "Search professors by research topic, view recent publications, and inspect citation metrics."
      },
      {
        name: "OpenReview",
        url: "https://openreview.net/",
        description: "Review current conference submissions and active research papers in computer science and AI."
      },
      {
        name: "ResearchGate",
        url: "https://www.researchgate.net/",
        description: "Connect with researchers, request full-text papers, and inspect lab updates."
      }
    ],
    commonMistakes: [
      "Sending generic mass-copy-pasted emails starting with 'Dear Respected Professor'.",
      "Writing a 500-word life story instead of a concise 150-word research summary.",
      "Attaching heavy 10MB zip files containing certificates instead of a clean 2-page PDF CV.",
      "Following up after only 24–48 hours instead of waiting 10–14 business days."
    ],
    practicalExample:
      "A student sent 15 tailored cold emails citing specific papers and lab projects, received 4 positive responses, and scheduled 2 Zoom interviews that led to funded offers.",
    checklist: [
      { id: "p5-c1", label: "Confirmed supervisor outreach rules for each target university." },
      { id: "p5-c2", label: "Read at least one recent paper and lab grant summary for every target professor." },
      { id: "p5-c3", label: "Drafted a concise 150–200 word cold email referencing their specific work." },
      { id: "p5-c4", label: "Attached a clean, professional 2-page academic CV as a PDF." },
      { id: "p5-c5", label: "Tracked sent dates and planned follow-ups 10–14 days later." }
    ],
    mastersNuance: "Usually only needed for research/thesis Master's programs (especially in Canada). Rarely required for taught degrees.",
    phdNuance: "Essential in the UK, Germany, Canada, and Australia. Focus on Assistant and Associate Professors with fresh grant funding.",
    nextStep: {
      slug: "prepare-documents",
      title: "Phase 06: Prepare Your Core Documents"
    }
  },
  {
    id: "phase-06",
    number: 6,
    slug: "prepare-documents",
    title: "Prepare Your Core Documents",
    tagline: "Create an academic CV, Statement of Purpose (SOP), and get official transcripts in order.",
    estimatedDuration: "1–2 Months",
    degreeScope: "both",
    what: "Draft, format, and polish your academic CV, Statement of Purpose, transcripts, and proof of degree completion.",
    why: "Your documents represent you directly to admissions committees. Clear, persuasive writing is often the deciding factor between two similar applicants.",
    how: [
      {
        step: "Format a 2-Page Academic CV",
        detail: "Focus on education, research experience, publications, technical skills, and awards using a clean, single-column LaTeX or Word layout."
      },
      {
        step: "Structure a 5-Part Statement of Purpose",
        detail: "Write a compelling narrative: hook & research focus, background & key achievements, why this program, specific professors, and future goals."
      },
      {
        step: "Order Official Transcripts Early",
        detail: "Request sealed or certified digital transcripts with clear English translations and official grading scale explanations from your university."
      },
      {
        step: "Have Peers & Mentors Review Your Drafts",
        detail: "Get feedback on clarity, structure, and tone from professors, current graduate students, or professional editors."
      }
    ],
    where: [
      {
        name: "Overleaf LaTeX CV Templates",
        url: "https://www.overleaf.com/gallery/tagged/cv",
        description: "Free, professionally formatted academic CV templates using clean typography."
      },
      {
        name: "Purdue Online Writing Lab (OWL)",
        url: "https://owl.purdue.edu/",
        description: "Authoritative guides for academic writing, Statements of Purpose, and citation formats."
      },
      {
        name: "Grammarly Writing Assistant",
        url: "https://www.grammarly.com/",
        description: "Grammar, tone, and conciseness checker to eliminate typos and awkward phrasing."
      }
    ],
    commonMistakes: [
      "Using a 1-page corporate resume that leaves out research projects, publications, and methodologies.",
      "Writing a generic SOP that mentions childhood dreams instead of concrete academic accomplishments and future goals.",
      "Neglecting to mention specific professors or lab facilities at the target university.",
      "Submitting documents with typos, grammatical errors, or incorrect university names."
    ],
    practicalExample:
      "A student revised their SOP to focus on 2 concrete undergraduate research projects and how they connected to a professor's active lab, winning a full departmental fellowship.",
    checklist: [
      { id: "p6-c1", label: "Completed a clean, 2-page academic CV with publications, projects, and skills." },
      { id: "p6-c2", label: "Drafted a customized 5-part SOP tailored to each target university." },
      { id: "p6-c3", label: "Requested official English transcripts with grading criteria from your registrar." },
      { id: "p6-c4", label: "Proofread all documents with spelling/grammar tools and received peer feedback." },
      { id: "p6-c5", label: "Saved all files in standard PDF format with clear file names (e.g., JaneDoe_Academic_CV.pdf)." }
    ],
    mastersNuance: "Focus on your academic background, course preparation, motivation, and professional career goals.",
    phdNuance: "Focus on research methodology, analytical skills, publications, and exact alignment with faculty research.",
    nextStep: {
      slug: "draft-research-proposal",
      title: "Phase 07: Draft Your Research Proposal"
    }
  },
  {
    id: "phase-07",
    number: 7,
    slug: "draft-research-proposal",
    title: "Draft Your Research Proposal",
    tagline: "Formulate a clear research question, methodology, literature review, and realistic timeline.",
    estimatedDuration: "1–2 Months",
    degreeScope: "phd",
    what: "Write a 3–5 page structured research proposal outlining your proposed investigation, methodology, and scientific contributions.",
    why: "A well-formulated proposal demonstrates that you understand the field, can think independently, and are ready for doctoral research.",
    how: [
      {
        step: "Identify a Precise Research Gap",
        detail: "Formulate a focused research question based on open problems identified in recent top-tier journal or conference papers."
      },
      {
        step: "Synthesize the Key Literature",
        detail: "Summarize the 10–15 most relevant papers, showing where current solutions fall short and how your approach helps."
      },
      {
        step: "Detail Your Proposed Methodology",
        detail: "Describe your experimental design, datasets, algorithms, baselines, ablation studies, or statistical models clearly."
      },
      {
        step: "Provide a Feasible 3-Year Timeline",
        detail: "Include a Gantt chart or semester-by-semester plan detailing milestones, expected conference papers, and thesis completion."
      }
    ],
    where: [
      {
        name: "Connected Papers",
        url: "https://www.connectedpapers.com/",
        description: "Visual tool to explore connected academic papers, find seminal works, and identify research trends."
      },
      {
        name: "Semantic Scholar",
        url: "https://www.semanticscholar.org/",
        description: "AI-powered scientific literature search engine with citation graphs and key result summaries."
      },
      {
        name: "UKRI Research Proposal Guidelines",
        url: "https://www.ukri.org",
        description: "Official UK Research and Innovation standards for postgraduate research proposals."
      }
    ],
    commonMistakes: [
      "Proposing a topic that is far too broad (e.g., 'Solving Cancer with Machine Learning' in 3 years).",
      "Failing to cite the target professor's recent publications on the topic.",
      "Writing a literature review without proposing a concrete methodology or experimental plan.",
      "Proposing methods that require equipment, datasets, or lab facilities that the target department does not have."
    ],
    practicalExample:
      "A doctoral applicant drafted a focused proposal on low-resource fine-tuning for biomedical NLP, aligning directly with a professor's funded grant and securing immediate support.",
    checklist: [
      { id: "p7-c1", label: "Defined a focused research question addressing a concrete gap in the literature." },
      { id: "p7-c2", label: "Conducted a literature review with at least 15 peer-reviewed citations." },
      { id: "p7-c3", label: "Outlined methodology, required datasets, tools, and anticipated challenges." },
      { id: "p7-c4", label: "Added a semester-by-semester Gantt chart or 3-year timeline." },
      { id: "p7-c5", label: "Shared the proposal draft with a mentor or prospective advisor for initial feedback." }
    ],
    mastersNuance: "Usually not required for Master's programs, unless applying for a research thesis degree or specific scholarships (e.g., DAAD EPOS).",
    phdNuance: "Required for virtually all European, UK, and Commonwealth PhD applications. Keep it focused and feasible.",
    nextStep: {
      slug: "secure-recommendation-letters",
      title: "Phase 08: Secure Recommendation Letters"
    }
  },
  {
    id: "phase-08",
    number: 8,
    slug: "secure-recommendation-letters",
    title: "Secure Recommendation Letters",
    tagline: "Brief 3 academic referees early with your CV, statement of purpose, and submission deadlines.",
    estimatedDuration: "1 Month",
    degreeScope: "both",
    what: "Ask 2–3 former professors or research mentors to write strong, detailed recommendation letters that highlight your abilities.",
    why: "Admissions committees rely heavily on trusted faculty assessments to confirm your technical abilities, work ethic, and intellectual independence.",
    how: [
      {
        step: "Choose Mentors Who Know You Well",
        detail: "Pick professors who taught you in small classes, advised your thesis, or supervised your research over famous professors who barely know you."
      },
      {
        step: "Ask 6–8 Weeks Before Deadlines",
        detail: "Send a polite email well ahead of time asking if they can provide a 'strong letter of recommendation' for your target programs."
      },
      {
        step: "Provide a Comprehensive Brag Sheet",
        detail: "Give each referee your CV, draft SOP, list of target universities with deadlines, course grades, and reminders of your achievements in their class."
      },
      {
        step: "Send Courteous Reminders",
        detail: "Send polite reminder emails 14 days and 3 days before deadlines with direct links to the submission portals."
      }
    ],
    where: [
      {
        name: "MIT Graduate Admissions Letter Guidelines",
        url: "https://mitadmissions.org",
        description: "Official guide on what top admissions committees look for in strong recommendation letters."
      },
      {
        name: "Interfolio Dossier Service",
        url: "https://www.interfolio.com/",
        description: "Platform to collect, manage, and deliver confidential letters of recommendation securely."
      }
    ],
    commonMistakes: [
      "Asking professors at the last minute (giving them less than 3 weeks to write and submit).",
      "Choosing a famous department chair who can only write 3 generic sentences about you.",
      "Failing to provide recommenders with your SOP, CV, and university deadlines.",
      "Forgetting to thank recommenders and update them on your admission outcomes."
    ],
    practicalExample:
      "A student provided their thesis advisor with a 1-page summary of their thesis contributions and target program details, resulting in a rich, specific letter that committee reviewers praised.",
    checklist: [
      { id: "p8-c1", label: "Confirmed 3 academic referees who agreed to write strong, supportive letters." },
      { id: "p8-c2", label: "Prepared a recommender package: CV, draft SOP, transcripts, and deadline list." },
      { id: "p8-c3", label: "Provided clear instructions on how portals will email them the submission link." },
      { id: "p8-c4", label: "Logged into portals to confirm recommendations were submitted before deadlines." },
      { id: "p8-c5", label: "Sent a thank-you note to all referees with admissions status updates." }
    ],
    mastersNuance: "Academic course instructors and thesis advisors are ideal. Professional managers can serve as a 3rd referee if relevant.",
    phdNuance: "Referees must be active researchers who can speak in detail about your research potential and problem-solving skills.",
    nextStep: {
      slug: "submit-applications",
      title: "Phase 09: Submit University Applications"
    }
  },
  {
    id: "phase-09",
    number: 9,
    slug: "submit-applications",
    title: "Submit University Applications",
    tagline: "Upload verified documents, request fee waivers, and submit portals before early deadlines.",
    estimatedDuration: "1 Month",
    degreeScope: "both",
    what: "Complete application portal forms, upload required PDFs, pay fees or use waivers, and verify submission receipts.",
    why: "Submitting error-free applications ahead of early deadlines ensures your file is reviewed before funding allocations are exhausted.",
    how: [
      {
        step: "Request Application Fee Waivers",
        detail: "Attend university virtual open days, check financial need criteria, or email admissions to request fee waiver codes ($75–$150 savings each)."
      },
      {
        step: "Complete Portal Questions Carefully",
        detail: "Fill in biographical, academic, and prerequisite details accurately, ensuring information matches your transcripts exactly."
      },
      {
        step: "Upload Verified PDF Documents",
        detail: "Upload clean, high-resolution PDFs of your CV, SOP, writing samples, and unofficial transcripts with standard file names."
      },
      {
        step: "Track Application Confirmation",
        detail: "Confirm receipt emails, record your application ID, and monitor student portals to ensure all referee letters and scores arrive."
      }
    ],
    where: [
      {
        name: "Uni-Assist Application Portal",
        url: "https://www.uni-assist.de/en/",
        description: "Centralized application portal used by over 180 German universities for international applicants."
      },
      {
        name: "GradApp Central Portals",
        url: "https://www.applyweb.com/",
        description: "Common application portal system utilized across numerous North American graduate schools."
      },
      {
        name: "UCAS Postgraduate (UK)",
        url: "https://www.ucas.com/postgraduate",
        description: "Centralized application system for postgraduate programs across the United Kingdom."
      }
    ],
    commonMistakes: [
      "Submitting within hours of the deadline and running into server crashes or time-zone mix-ups.",
      "Uploading the wrong Statement of Purpose that names a competitor university.",
      "Assuming the application is complete before referees have submitted their letters.",
      "Not checking university portals for follow-up requests regarding missing credentials."
    ],
    practicalExample:
      "A student applied two weeks before the priority funding deadline, caught an unlinked TOEFL score in the portal tracker, and corrected it before committee review.",
    checklist: [
      { id: "p9-c1", label: "Requested and applied official application fee waivers where available." },
      { id: "p9-c2", label: "Double-checked that uploaded SOP files correspond to the correct university." },
      { id: "p9-c3", label: "Confirmed official test scores (IELTS/TOEFL/GRE) were sent and matched." },
      { id: "p9-c4", label: "Submitted applications prior to priority consideration deadlines." },
      { id: "p9-c5", label: "Logged into portal applicant status checkers to confirm all documents show 'Complete'." }
    ],
    mastersNuance: "Check if separate scholarship applications or supplemental essays are required in addition to admission.",
    phdNuance: "Note the professor or lab name on the application form if you secured prior supervisor support.",
    nextStep: {
      slug: "prepare-interviews",
      title: "Phase 10: Ace Academic Interviews"
    }
  },
  {
    id: "phase-10",
    number: 10,
    slug: "prepare-interviews",
    title: "Ace Academic Interviews",
    tagline: "Prepare for technical walkthroughs, defend your research proposal, and interview prospective advisors.",
    estimatedDuration: "1 Month",
    degreeScope: "both",
    what: "Practice presenting your past research, explaining your proposal, answering technical questions, and asking smart questions about the lab.",
    why: "Interviews determine whether you receive the final funding offer. Committees use them to evaluate communication, enthusiasm, and lab culture fit.",
    how: [
      {
        step: "Prepare a 5-Slide Research Deck",
        detail: "Create a 5-minute summary: (1) Problem statement, (2) Methodology, (3) Key results, (4) Challenges overcome, (5) Future directions."
      },
      {
        step: "Practice Answering Technical Deep-Dives",
        detail: "Be ready to explain every equation, dataset, and algorithm on your CV, especially why you picked one methodology over another."
      },
      {
        step: "Prepare Thoughtful Questions for the PI",
        detail: "Ask about mentoring style, graduation timelines, lab funding stability, conference travel support, and post-doc placement."
      },
      {
        step: "Talk to Current Lab Members Privately",
        detail: "Reach out to current PhD students in the lab to ask about work-life balance, advisor responsiveness, and lab culture."
      }
    ],
    where: [
      
      {
        name: "STAR Method Guide",
        url: "https://www.themuse.com/advice/star-interview-method",
        description: "Structured technique (Situation, Task, Action, Result) for answering behavioral questions clearly."
      }
    ],
    commonMistakes: [
      "Not being able to explain in detail a project or paper listed on your own CV.",
      "Failing to read the interviewing professor's latest papers right before the call.",
      "Having zero questions prepared when the interviewer asks 'What questions do you have for me?'.",
      "Poor audio or lighting setup during remote Zoom/Teams video interviews."
    ],
    practicalExample:
      "A candidate used a concise 5-minute slide deck to walk an admissions committee through their thesis, clearly answering a methodological question that secured them a Research Assistantship.",
    checklist: [
      { id: "p10-c1", label: "Prepared a concise 5-slide deck summarizing past research and future plans." },
      { id: "p10-c2", label: "Reviewed foundational theory and methods behind every project on your CV." },
      { id: "p10-c3", label: "Prepared 3–5 insightful questions about the advisor's lab and mentoring style." },
      { id: "p10-c4", label: "Conducted mock interviews with peers using a webcam and quiet mic setup." },
      { id: "p10-c5", label: "Sent a polite thank-you email within 24 hours of completing the interview." }
    ],
    mastersNuance: "Interviews focus on your motivation, academic strengths, teamwork, and program fit.",
    phdNuance: "Interviews are in-depth technical discussions exploring your problem-solving process, independence, and research vision.",
    nextStep: {
      slug: "evaluate-offers",
      title: "Phase 11: Review Offers & Funding Contracts"
    }
  },
  {
    id: "phase-11",
    number: 11,
    slug: "evaluate-offers",
    title: "Review Offers & Funding Contracts",
    tagline: "Compare stipends against local living costs, check contract terms, and accept your best offer.",
    estimatedDuration: "2–4 Weeks",
    degreeScope: "both",
    what: "Examine admission and funding letters, verify net take-home stipends and health insurance, and formally accept your top offer.",
    why: "Not all offers are equal. A $30,000 stipend in an expensive city may leave you struggling, while €2,400 net in Europe provides a comfortable living.",
    how: [
      {
        step: "Calculate Real Net Take-Home Pay",
        detail: "Deduct mandatory student fees, taxes, and health insurance from the gross stipend to determine true monthly living cash flow."
      },
      {
        step: "Verify Funding Duration & Conditions",
        detail: "Confirm funding duration (e.g., guaranteed 4–5 years vs. renewed annually) and duties required (e.g., 20 hrs/week teaching)."
      },
      {
        step: "Respect the April 15 Resolution",
        detail: "In North America, CGS member universities give you until April 15 to decide. Do not let departments pressure you early."
      },
      {
        step: "Decline Other Offers Promptly",
        detail: "Once you accept your top offer, decline other universities politely so funded spots can be offered to waitlisted candidates."
      }
    ],
    where: [
      {
        name: "Council of Graduate Schools (CGS) April 15 Resolution",
        url: "https://cgsnet.org",
        description: "Official agreement protecting graduate student acceptance rights across 400+ North American institutions."
      },
      {
        name: "MIT Living Wage Calculator",
        url: "https://livingwage.mit.edu/",
        description: "Official county-by-county baseline cost of living across the United States."
      },
      {
        name: "Numbeo Cost of Living Index",
        url: "https://www.numbeo.com/cost-of-living/",
        description: "Global comparative database of rent, groceries, and transportation costs across cities."
      }
    ],
    commonMistakes: [
      "Accepting an offer without checking if tuition remission is 100% or only partial.",
      "Overlooking mandatory university fees ($1,000–$2,500/year) not covered by stipends.",
      "Prematurely accepting an offer before hearing back from other target universities before April 15.",
      "Holding multiple offers past official decision deadlines and blocking spots for other students."
    ],
    practicalExample:
      "A student compared two offers: a $32k stipend in high-rent New York City vs a €2,400/month salaried contract in Germany, choosing Germany for higher net savings and full healthcare.",
    checklist: [
      { id: "p11-c1", label: "Confirmed 100% tuition remission in writing from the graduate school." },
      { id: "p11-c2", label: "Calculated net monthly stipend after mandatory fees, taxes, and rent." },
      { id: "p11-c3", label: "Verified health insurance coverage details and spouse benefits if applicable." },
      { id: "p11-c4", label: "Formally submitted acceptance letter before the official deadline (e.g., April 15)." },
      { id: "p11-c5", label: "Politely declined remaining offers to free up seats for waitlisted peers." }
    ],
    mastersNuance: "Check if scholarship funding is renewed automatically in Year 2 based on GPA thresholds.",
    phdNuance: "Confirm whether funding is guaranteed for 4–5 years and whether Summer stipends are included.",
    nextStep: {
      slug: "visa-pre-departure",
      title: "Phase 12: Visa & Pre-Departure"
    }
  },
  {
    id: "phase-12",
    number: 12,
    slug: "visa-pre-departure",
    title: "Visa & Pre-Departure",
    tagline: "Obtain your student visa or residence permit, arrange housing, and prepare health insurance.",
    estimatedDuration: "2–3 Months",
    degreeScope: "both",
    what: "Submit your student visa or residence permit application with official funding documents, secure housing, and book travel.",
    why: "Visa processing times can take 4–12 weeks. Starting immediately upon receiving your acceptance prevents missing the start of classes.",
    how: [
      {
        step: "Gather Official Visa Documents",
        detail: "Request your I-20 (USA), PAL/Study Permit (Canada), CAS (UK), or official university admission letter (Europe)."
      },
      {
        step: "Present Proof of Full Funding",
        detail: "Use your official scholarship letter or university funding contract to prove financial support without needing personal bank loans."
      },
      {
        step: "Book Visa Appointments Early",
        detail: "Schedule your embassy or consulate interview as soon as your acceptance paperwork is issued."
      },
      {
        step: "Secure Student Housing Early",
        detail: "Apply for on-campus graduate housing or university dormitories (e.g., Studentenwerk in Germany) as spots fill quickly."
      }
    ],
    where: [
      {
        name: "US Department of State Student Visa (F-1)",
        url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
        description: "Official guide to DS-160 forms, SEVIS fee payments, and F-1 student visa interviews."
      },
      {
        name: "Immigration, Refugees and Citizenship Canada (IRCC)",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
        description: "Official portal for Canadian study permits and provincial attestation letters."
      },
      {
        name: "German Federal Foreign Office Visa Navigator",
        url: "https://visa.diplo.de/en/",
        description: "Official visa tool for national study visas and researcher residence permits."
      }
    ],
    commonMistakes: [
      "Delaying visa appointments until mid-summer when embassy slots are fully booked.",
      "Booking non-refundable flight tickets before your student visa is officially stamped in your passport.",
      "Leaving housing search until arrival in university towns facing severe housing shortages.",
      "Not carrying hard copies of funding letters, admission letters, and vaccination records in your carry-on luggage."
    ],
    practicalExample:
      "A student scheduled their visa appointment the day their I-20 arrived, presented their full research assistantship letter as financial proof, and received their visa in 10 business days.",
    checklist: [
      { id: "p12-c1", label: "Received official immigration document (I-20, CAS, PAL, or contract)." },
      { id: "p12-c2", label: "Paid required government visa fees (e.g., SEVIS I-901 fee for the US)." },
      { id: "p12-c3", label: "Booked and attended the embassy or visa application center appointment." },
      { id: "p12-c4", label: "Applied for university dorms or verified off-campus rental housing." },
      { id: "p12-c5", label: "Prepared a travel folder with certified copies of transcripts, letters, and passport." }
    ],
    mastersNuance: "If on partial funding, prepare a blocked account or certified bank statements to prove living expense coverage.",
    phdNuance: "In Europe, apply for a researcher/hosting agreement visa rather than a standard study visa to receive full employee rights.",
    nextStep: {
      slug: "arrival-registration",
      title: "Phase 13: Arrive, Register & Enroll"
    }
  },
  {
    id: "phase-13",
    number: 13,
    slug: "arrival-registration",
    title: "Arrive, Register & Enroll",
    tagline: "Register your address, open a local bank account, activate health insurance, and start classes.",
    estimatedDuration: "First 2–4 Weeks",
    degreeScope: "both",
    what: "Complete mandatory city registration, open a local student bank account, set up direct deposit for your stipend, and begin orientation.",
    why: "Finishing administrative setup during your first week ensures your stipend is deposited without delays and your health insurance is fully active.",
    how: [
      {
        step: "Complete City / Residence Registration",
        detail: "Register your local address at the city hall or immigration office (e.g., Bürgeramt in Germany or Skatteverket in Sweden)."
      },
      {
        step: "Open a Local Bank Account",
        detail: "Set up a fee-free student bank account and provide routing and account numbers to the university payroll office."
      },
      {
        step: "Activate Mandatory Health Insurance",
        detail: "Finalize your university or public health insurance policy to obtain your final enrollment clearance certificate."
      },
      {
        step: "Meet Your Advisor & Lab Members",
        detail: "Visit your department, collect building and lab keys, set up your desk, and attend graduate orientation sessions."
      }
    ],
    where: [
      {
        name: "EURAXESS Services Centers",
        url: "https://euraxess.ec.europa.eu/information/centres/search",
        description: "Official on-the-ground support centers for international researchers across European universities."
      },
      {
        name: "International Student Orientation Guides",
        url: "https://www.studyinaustralia.gov.au/english/live-in-australia/support-services",
        description: "Official orientation and arrival support resources for international students."
      }
    ],
    commonMistakes: [
      "Missing municipal address registration deadlines, which can result in city fines.",
      "Delaying bank account setup, causing a delay in receiving your first monthly stipend check.",
      "Skipping department orientation sessions where key degree requirements and lab safety are explained.",
      "Not checking in with the university International Student Office (ISO) to report arrival."
    ],
    practicalExample:
      "A newly arrived doctoral student completed city registration on day 2, set up their local bank account on day 3, and received their first monthly stipend on time at the end of the month.",
    checklist: [
      { id: "p13-c1", label: "Completed mandatory city hall/police address registration." },
      { id: "p13-c2", label: "Opened a local bank account and submitted direct deposit forms to university payroll." },
      { id: "p13-c3", label: "Obtained student ID card and local public transit pass." },
      { id: "p13-c4", label: "Reported arrival to the International Student Office to validate immigration status." },
      { id: "p13-c5", label: "Met your academic supervisor, collected lab keys, and attended orientation events." }
    ],
    mastersNuance: "Register for your first-semester coursework credits early before lecture and lab sections fill up.",
    phdNuance: "Sign your employment contract (in Europe) or assistantship appointment letter (in North America) with HR.",
    nextStep: {
      slug: "understand-academic-profile",
      title: "Roadmap Complete: Revisit Phase 01"
    }
  }
];

export function getPhaseBySlug(slug: string): RoadmapPhase | undefined {
  return roadmapPhasesData.find((phase) => phase.slug === slug);
}

export function getPhaseByNumber(num: number): RoadmapPhase | undefined {
  return roadmapPhasesData.find((phase) => phase.number === num);
}

export const roadmapControlsData = {
  header: {
    badge: "13-Phase Pipeline",
    title: "The Scholarship Application Pipeline",
    subtitle: "A structured, 13-phase roadmap from profile audit to funding offer."
  },
  filters: {
    all: "All Phases",
    masters: "Master's Only",
    phd: "PhD Only"
  },
  searchPlaceholder: "Search phases by keyword (e.g., IELTS, SOP, professor, visa)...",
  actions: {
    expandAll: "Expand All",
    collapseAll: "Collapse All"
  }
};
