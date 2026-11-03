export interface DocumentGuideline {
  id: string;
  name: string;
  badge: string;
  degreeLevel: "Universal" | "Master's Heavy" | "PhD / Research Master's";
  what: string;
  why: string;
  structure: { section: string; guidance: string }[];
  commonMistakes: string[];
  officialChecks: string[];
  checklistItems: { id: string; label: string; tip?: string }[];
}

export const documentsData: DocumentGuideline[] = [
  {
    id: "academic-cv",
    name: "Academic Curriculum Vitae (CV)",
    badge: "Universal Requirement",
    degreeLevel: "Universal",
    what: "A 2-page document highlighting your academic history, degrees, research projects, technical skills, publications, and referee contacts.",
    why: "Committees use your CV to quickly evaluate your research background, technical skills, and academic qualifications before reading other documents.",
    structure: [
      {
        section: "1. Header & Contact Information",
        guidance: "Full legal name, professional email, phone number, LinkedIn, and links to your GitHub or Google Scholar. Do not include photos, age, marital status, or nationality unless requested."
      },
      {
        section: "2. Education & Credentials",
        guidance: "List degrees in reverse chronological order: degree name, institution, graduation year, GPA with scale, and thesis title with your supervisor's name."
      },
      {
        section: "3. Research & Projects",
        guidance: "Detail research assistantships, thesis projects, or independent research. Mention the problem investigated, methods used, and key results."
      },
      {
        section: "4. Publications & Preprints",
        guidance: "List peer-reviewed papers, conference proceedings, or preprints (with arXiv links/DOIs) using standard APA or IEEE citation style."
      },
      {
        section: "5. Technical Skills & Languages",
        guidance: "List programming languages, software, laboratory tools, statistical methods, and spoken language proficiencies."
      },
      {
        section: "6. Honors & Academic Referees",
        guidance: "Include academic honors, merit awards, and the names, titles, and institutional emails of 2–3 faculty referees."
      }
    ],
    commonMistakes: [
      "Using a 1-page business resume focused on corporate tasks instead of academic and research achievements.",
      "Including photos, age, or marital status (which violates anti-bias policies in the US, UK, and Canada).",
      "Listing generic buzzwords ('hard worker', 'quick learner') instead of specific technical tools and methodologies.",
      "Using complex multi-column design templates that scramble in university applicant tracking systems."
    ],
    officialChecks: [
      "Keep to 2 pages maximum for Master's and early-career PhD applicants.",
      "Save as a clean, text-searchable PDF titled 'CV_FirstName_LastName.pdf'.",
      "Verify that all links (GitHub, Google Scholar, publications) are active and clickable."
    ],
    checklistItems: [
      { id: "doc-cv-1", label: "Structured in reverse chronological order with complete degree details", tip: "Ensure graduation dates match your official transcripts." },
      { id: "doc-cv-2", label: "Research experience highlights specific methods, tools, and results", tip: "Mention exact software, equipment, or algorithms used." },
      { id: "doc-cv-3", label: "All publications or preprints have full citations and active links", tip: "Clearly designate working papers or preprints." },
      { id: "doc-cv-4", label: "Removed photos, age, marital status, and non-academic jobs", tip: "Keep the focus strictly on scholarly and technical merit." }
    ]
  },
  {
    id: "statement-of-purpose",
    name: "Statement of Purpose (SOP)",
    badge: "Core Deciding Factor",
    degreeLevel: "Universal",
    what: "A focused, 800–1,200 word academic essay explaining your research interests, academic preparation, motivation for choosing this specific program, and career goals.",
    why: "The SOP is the most influential qualitative document in your application. It proves you understand your field, have realistic research goals, and fit well with the department's faculty.",
    structure: [
      {
        section: "1. Introduction & Research Focus",
        guidance: "Open immediately with your core academic interest and proposed research area. Skip childhood anecdotes ('Ever since I was a child...'). State your intended graduate specialization clearly."
      },
      {
        section: "2. Academic & Research Background",
        guidance: "Describe 1–2 major research projects or your bachelor's/master's thesis. Highlight the research question, your methodology, and key findings."
      },
      {
        section: "3. Research Gap & Future Direction",
        guidance: "Identify an unresolved question in the literature that you want to explore during your graduate studies."
      },
      {
        section: "4. Why This Program & Faculty Fit",
        guidance: "Name 2–3 specific professors whose current research aligns with your interests, and mention specific labs, equipment, or specialized courses."
      },
      {
        section: "5. Long-Term Career Vision",
        guidance: "Conclude with your realistic post-graduation goals (e.g. university research, national lab scientist, or R&D industry leadership)."
      }
    ],
    commonMistakes: [
      "Writing a chronological autobiography rather than an academic research statement.",
      "Using generic praise ('Your prestigious world-class university...') without naming specific faculty or labs.",
      "Reusing the same SOP across universities and accidentally leaving another institution's name in the text.",
      "Using generic AI-generated text that lacks concrete project details and personal insight."
    ],
    officialChecks: [
      "Adhere strictly to departmental word limits (typically 800–1,200 words or 2 pages).",
      "Have at least two academic mentors or peers proofread your draft before submission."
    ],
    checklistItems: [
      { id: "doc-sop-1", label: "Opens directly with your research focus, avoiding childhood clichés", tip: "State your field and research direction in the first paragraph." },
      { id: "doc-sop-2", label: "At least 40% of the essay describes concrete past research and methods", tip: "Mention specific datasets, algorithms, or experimental setups." },
      { id: "doc-sop-3", label: "Names 2–3 target professors and explains why your interests match", tip: "Cite their recent research papers from the last 2–3 years." },
      { id: "doc-sop-4", label: "Proofread for zero spelling, grammar, or university name errors", tip: "Read aloud to catch awkward phrasing." }
    ]
  },
  {
    id: "motivation-letter",
    name: "Motivation Letter",
    badge: "European Standard",
    degreeLevel: "Master's Heavy",
    what: "A 1–2 page formal letter required by European universities, DAAD, and Erasmus Mundus programs explaining your academic motivation, career goals, and why you chose this degree.",
    why: "Unlike a research-heavy SOP, a Motivation Letter balances your academic qualifications with personal motivation, adaptability, and how the degree advances your long-term career.",
    structure: [
      {
        section: "1. Formal Header",
        guidance: "Include contact details, date, admissions committee address, and a clear subject line with the degree program name."
      },
      {
        section: "2. Academic Preparation",
        guidance: "Show how your undergraduate coursework and projects directly satisfy the program's prerequisite modules."
      },
      {
        section: "3. Program-Specific Attraction",
        guidance: "Explain why this university and curriculum (e.g. interdisciplinary setup, cohort structure, or internship semester) best suit your goals."
      },
      {
        section: "4. Career & Societal Impact",
        guidance: "For scholarship programs (like DAAD or Swedish Institute), explain how the degree enables you to address real-world challenges in your home country or field."
      }
    ],
    commonMistakes: [
      "Treating the Motivation Letter like a casual cover letter for a retail job.",
      "Failing to address the specific evaluation criteria published in the scholarship call.",
      "Focusing on tourism or cultural attraction rather than academic and career benefits."
    ],
    officialChecks: [
      "Keep to 1–2 pages maximum (typically 500–800 words).",
      "Conclude with a formal sign-off ('Yours sincerely, [Your Name]')."
    ],
    checklistItems: [
      { id: "doc-mot-1", label: "Follows formal business/academic letter formatting with full headers", tip: "Address the selection committee by their official title." },
      { id: "doc-mot-2", label: "Links specific program modules directly to your past coursework", tip: "Demonstrate that you meet all course prerequisites." },
      { id: "doc-mot-3", label: "Clearly explains post-graduation career and societal impact", tip: "Crucial for government scholarships like DAAD or Chevening." }
    ]
  },
  {
    id: "research-proposal",
    name: "Research Proposal",
    badge: "Mandatory for PhD & MPhil",
    degreeLevel: "PhD / Research Master's",
    what: "A structured, 3–6 page academic document outlining an original research project you plan to pursue during your doctorate.",
    why: "The proposal proves to prospective supervisors and funding panels that you can independently conceptualize a viable research project with clear questions and realistic methodology.",
    structure: [
      {
        section: "1. Title & Abstract",
        guidance: "A clear, descriptive title and a 150–250 word abstract summarizing the problem, research questions, methodology, and expected contributions."
      },
      {
        section: "2. Literature Review & Research Gap",
        guidance: "Synthesize current scholarly debates and pinpoint the specific gap in published literature that your research will address."
      },
      {
        section: "3. Research Questions & Hypotheses",
        guidance: "Formulate 1 primary research question and 2–3 sub-questions or testable scientific hypotheses."
      },
      {
        section: "4. Methodology & Research Design",
        guidance: "Detail data collection methods, experimental setups, analytical frameworks, software tools, and ethical considerations."
      },
      {
        section: "5. Significance & Expected Contributions",
        guidance: "Explain how your findings will advance theoretical knowledge, guide policy, or produce technological improvements."
      },
      {
        section: "6. Project Timeline & Bibliography",
        guidance: "Include a 3–4 year milestone timeline (Gantt chart) and 15–30 academic references formatted in APA or IEEE style."
      }
    ],
    commonMistakes: [
      "Proposing an overly broad project that cannot be completed within a 3–4 year doctoral timeline.",
      "Proposing a topic that has already been solved in recent literature.",
      "Devoting too much space to background and only a few sentences to actual research methodology.",
      "Choosing a topic that does not match the target professor's laboratory focus."
    ],
    officialChecks: [
      "Check whether your target university specifies a proposal template or strict word limit (e.g. 2,000–3,000 words).",
      "Confirm if your project involves human or animal subjects requiring ethical clearance (IRB)."
    ],
    checklistItems: [
      { id: "doc-prop-1", label: "Formulates clear, focused, and testable research questions", tip: "Ensure questions are answerable within 3–4 years." },
      { id: "doc-prop-2", label: "Dedicates at least 35% of the proposal to research methodology", tip: "Detail data sources, tools, and analytical models." },
      { id: "doc-prop-3", label: "Includes a realistic multi-year milestone schedule (Gantt chart)", tip: "Demonstrates practical feasibility to the committee." },
      { id: "doc-prop-4", label: "Contains 15–30 authoritative academic references in consistent citation style", tip: "Cite recent papers from top-tier journals in the field." }
    ]
  },
  {
    id: "academic-transcripts",
    name: "Academic Transcripts & Grading Scales",
    badge: "Official Legal Record",
    degreeLevel: "Universal",
    what: "Official university registrar records listing all courses taken, grades received, credit hours, cumulative GPA, and the institution's grading scale legend.",
    why: "Admissions committees use transcripts to verify your degree completion, examine your grade trajectory over time, and confirm that you meet prerequisite course requirements.",
    structure: [
      {
        section: "Official Registrar Seal & Legend",
        guidance: "Ensure each transcript page displays the official university seal and registrar signature. Include the reverse side explaining the grading scale (e.g. A = 80–100%, ECTS conversion)."
      },
      {
        section: "Certified English Translations",
        guidance: "If original transcripts are not in English, include both the original language document and an official certified translation."
      },
      {
        section: "Credential Evaluation (WES / ECE / Anabin)",
        guidance: "For universities requiring third-party credential evaluation (common in the US and Canada), request official WES Course-by-Course evaluation reports early."
      }
    ],
    commonMistakes: [
      "Uploading unofficial student portal screenshots instead of official registrar-stamped PDFs.",
      "Omitting the grading scale explanation printed on the reverse side of the transcript.",
      "Submitting an incomplete transcript missing final semester marks or degree confirmation."
    ],
    officialChecks: [
      "Scan documents in full color at 300 DPI resolution.",
      "Keep original sealed paper transcripts intact for universities that require physical verification after admission."
    ],
    checklistItems: [
      { id: "doc-trans-1", label: "Scanned all semester transcripts in high-resolution full color", tip: "Ensure seals, signatures, and grade legends are completely legible." },
      { id: "doc-trans-2", label: "Included official university grading scale conversion documentation", tip: "Needed for committees to convert your marks to 4.0 or ECTS." },
      { id: "doc-trans-3", label: "Secured certified English translations if originals are in another language", tip: "Must be issued by an accredited sworn translator." }
    ]
  },
  {
    id: "degree-certificates",
    name: "Degree Certificates & Graduation Letters",
    badge: "Official Legal Record",
    degreeLevel: "Universal",
    what: "The official diploma verifying your awarded degree, or an official Expected Graduation Letter from your registrar if you are currently in your final year.",
    why: "Universities cannot legally enroll you into a Master's or PhD program without verified proof that your qualifying degree has been or will be completed.",
    structure: [
      {
        section: "Degree Parchment",
        guidance: "Must display your full legal name, degree awarded (e.g. Bachelor of Science in Mechanical Engineering), conferral date, and university seal."
      },
      {
        section: "Expected Graduation Letter",
        guidance: "If you have not yet graduated, submit an official registrar letter confirming you are on track to complete all degree requirements before graduate enrollment begins."
      }
    ],
    commonMistakes: [
      "Waiting until after graduation to apply; final-year students should apply early using an Expected Graduation Letter.",
      "Submitting certificates where your name spelling differs from your international passport."
    ],
    officialChecks: [
      "Verify that your name matches your passport letter for letter.",
      "Check whether your target country requires Hague Apostille or consular legalization."
    ],
    checklistItems: [
      { id: "doc-deg-1", label: "Obtained official degree certificate or Expected Graduation Letter", tip: "Ensure university seal and registrar signature are clearly visible." },
      { id: "doc-deg-2", label: "Verified that legal name matches passport exactly", tip: "Resolve any name discrepancy affidavits in advance." }
    ]
  },
  {
    id: "recommendation-letters",
    name: "Letters of Recommendation (LORs)",
    badge: "Critical Qualitative Weight",
    degreeLevel: "Universal",
    what: "Confidential recommendation letters from academic professors or research supervisors who have directly taught or supervised your research.",
    why: "Admissions committees rely heavily on LORs to evaluate your technical independence, research potential, work ethic, and ability to overcome academic setbacks.",
    structure: [
      {
        section: "1. Institutional Letterhead & Context",
        guidance: "Must be printed on official university letterhead with the professor's institutional email. The opening states how long and in what capacity the referee has known you."
      },
      {
        section: "2. Concrete Evidence of Research Potential",
        guidance: "Highlights 1–2 specific examples: your thesis research, lab independence, technical skills, or co-authored manuscripts."
      },
      {
        section: "3. Comparative Ranking & Endorsement",
        guidance: "Provides a comparative ranking (e.g. 'In the top 5% of undergraduate students I have taught') and an endorsement for graduate funding."
      }
    ],
    commonMistakes: [
      "Choosing high-profile referees who do not know your research work and write generic letters.",
      "Providing personal email addresses (@gmail, @yahoo) instead of official institutional domains (@university.edu).",
      "Asking recommenders just days before the deadline, resulting in rushed submissions.",
      "Writing draft letters yourself that sound identical across all three recommenders."
    ],
    officialChecks: [
      "Always waive your right to inspect the recommendation letter; confidential letters carry far more credibility with selection panels.",
      "Provide recommenders with an LOR packet: your CV, draft SOP, and application deadline table at least 4–6 weeks early."
    ],
    checklistItems: [
      { id: "doc-lor-1", label: "Secured commitments from 2–3 faculty who know your academic and research work", tip: "Prefer tenure-track professors who taught upper-level courses or supervised your thesis." },
      { id: "doc-lor-2", label: "Provided recommenders with an LOR dossier packet at least 4–6 weeks early", tip: "Include your draft SOP, CV, and program deadline list." },
      { id: "doc-lor-3", label: "Waived right of inspection inside all application portals", tip: "Confidential letters carry significantly more weight with committees." },
      { id: "doc-lor-4", label: "Confirmed recommenders will use official institutional email addresses", tip: "Prevents automatic portal verification flags." }
    ]
  },
  {
    id: "language-proficiency",
    name: "Language Proficiency (IELTS / TOEFL / Duolingo / MOI)",
    badge: "Mandatory Eligibility Filter",
    degreeLevel: "Universal",
    what: "Official standardized test score reports (IELTS Academic, TOEFL iBT, Duolingo) or an official Medium of Instruction (MOI) certificate demonstrating English fluency.",
    why: "Universities and immigration embassies require proof that you can follow lectures, write academic papers, and communicate effectively in research labs.",
    structure: [
      {
        section: "IELTS Academic",
        guidance: "Accepted worldwide (UK, Europe, Australia, Canada, USA). Standard target: 6.5–7.5 overall with minimum 6.0 in each subscore."
      },
      {
        section: "TOEFL iBT",
        guidance: "Standard across US, Canadian, and global universities. Standard target: 90–105 overall. Aim for Speaking 26+ for US Teaching Assistantship eligibility."
      },
      {
        section: "Medium of Instruction (MOI) Certificate",
        guidance: "An official registrar letter stating your bachelor's degree was taught 100% in English. Accepted by select European universities, but rarely in the US, UK, or Canada."
      }
    ],
    commonMistakes: [
      "Overlooking subscore minimums (e.g. an overall 7.5 IELTS with a 5.5 in Writing when the program requires 6.0+ across all bands).",
      "Letting scores expire (IELTS and TOEFL scores are valid for exactly 2 years from test date).",
      "Assuming an MOI certificate is accepted everywhere without checking departmental requirements."
    ],
    officialChecks: [
      "Order official electronic score reports through ETS or IELTS to target university institution codes.",
      "Ensure test score validity extends through your intended university start date."
    ],
    checklistItems: [
      { id: "doc-lang-1", label: "Achieved overall and minimum sub-band scores across all sections", tip: "Pay special attention to Speaking and Writing minimums." },
      { id: "doc-lang-2", label: "Verified test scores are valid through your intended enrollment date", tip: "Scores must remain valid when classes begin." },
      { id: "doc-lang-3", label: "Sent official score reports to university codes via ETS or IELTS", tip: "Keep a digital copy of the test taker report for online application portals." }
    ]
  },
  {
    id: "standardized-tests-gre",
    name: "Standardized Tests (GRE General / Subject)",
    badge: "Selective Requirement",
    degreeLevel: "Universal",
    what: "Graduate Record Examination (GRE General) measuring Quantitative Reasoning, Verbal Reasoning, and Analytical Writing.",
    why: "While many programs are now 'GRE Optional', a strong Quantitative score (165–170) can help strengthen applications to competitive STEM and economics programs.",
    structure: [
      {
        section: "Quantitative Reasoning (130–170)",
        guidance: "Target: 164–170 for STEM, engineering, computer science, and economics."
      },
      {
        section: "Verbal Reasoning (130–170)",
        guidance: "Target: 155–162 for humanities and social sciences; 150+ for engineering."
      },
      {
        section: "Analytical Writing (0.0–6.0)",
        guidance: "Target: 4.0–5.0 demonstrating clear analytical structure and reasoning."
      }
    ],
    commonMistakes: [
      "Spending months studying for the GRE for European universities that do not require or accept it.",
      "Submitting a mediocre score to a test-optional program where omitting it would result in a stronger profile."
    ],
    officialChecks: [
      "Check department websites for: 'GRE Required' vs. 'GRE Optional' vs. 'GRE Not Accepted'.",
      "Do not take the GRE unless your target universities specifically value or require it."
    ],
    checklistItems: [
      { id: "doc-gre-1", label: "Confirmed whether target universities require or value the GRE", tip: "Do not sit for the exam if all your target programs are test-optional or European." },
      { id: "doc-gre-2", label: "Sent official ETS score reports using departmental institution codes", tip: "Ensure test name matches your passport exactly." }
    ]
  },
  {
    id: "writing-samples-portfolio",
    name: "Writing Samples, Publications & Portfolio",
    badge: "Technical Demonstrator",
    degreeLevel: "PhD / Research Master's",
    what: "A sample of your best academic writing (thesis excerpt, published paper, or seminar paper) or a technical portfolio (GitHub repositories, design projects).",
    why: "Writing samples provide direct evidence of your critical thinking, scientific writing ability, and research methodology.",
    structure: [
      {
        section: "Scholarly Article or Thesis Excerpt (10–25 pages)",
        guidance: "A clean PDF with title, abstract, introduction, methodology, results, discussion, and bibliography. Lead-author or single-author work is preferred."
      },
      {
        section: "Co-Authored Explanatory Note",
        guidance: "If submitting a co-authored paper, add a 1-page preface specifying your exact individual contribution (e.g. data collection, modeling, analysis)."
      }
    ],
    commonMistakes: [
      "Uploading an entire 90-page thesis when the department specified a 15–20 page excerpt.",
      "Submitting co-authored work without clarifying your specific technical contributions."
    ],
    officialChecks: [
      "Ensure writing samples are within requested page and word limits.",
      "Check that GitHub repositories are public, documented with clean READMEs, and reproducible."
    ],
    checklistItems: [
      { id: "doc-ws-1", label: "Selected your strongest piece of academic or technical writing", tip: "Choose work where you were primary or sole author." },
      { id: "doc-ws-2", label: "Formatted to respect department page and word count boundaries", tip: "Create an excerpt with a brief summary preface if necessary." },
      { id: "doc-ws-3", label: "Verified public access and clear READMEs on code repositories", tip: "Ensure code runs cleanly with clear setup instructions." }
    ]
  }
];

export const documentsGuideControlsData = {
  header: {
    badge: "Application Dossier Architecture",
    title: "Required Documents Guide",
    subtitle:
      "Clear blueprints for Academic CV, 5-part Statement of Purpose, Motivation Letter, Research Proposal, Transcripts, and Recommendation Letters."
  },
  sections: {
    overviewTitle: "Overview & Purpose",
    blueprintTitle: "Recommended Structure & Content",
    mistakesTitle: "Mistakes to Avoid",
    checksTitle: "Official Checks",
    checklistTitle: "Readiness Checklist",
    checklistProgress: "Document Readiness Progress"
  },
  labels: {
    what: "What it is",
    why: "Why it matters",
    selectPrompt: "Select a document from the navigation tabs above to review its full blueprint."
  }
};

export const getDocumentById = (id: string): DocumentGuideline | undefined => {
  return documentsData.find((doc) => doc.id.toLowerCase() === id.toLowerCase());
};
