export interface CountryOfficialPortal {
  name: string;
  url: string;
  description: string;
}

export interface GovernmentScholarship {
  name: string;
  url: string;
  description: string;
  coverage: string;
  degreeLevel: "Master's & PhD" | "Master's Only" | "PhD Only";
}

export interface CountryGuide {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: "Europe" | "North America" | "Asia" | "Oceania";
  headline: string;
  summary: string;
  fundingPhilosophy: string;
  commonFundingRoutes: string[];
  governmentScholarships: GovernmentScholarship[];
  universityScholarships: string;
  phdFundingModel: string;
  mastersFundingModel: string;
  assistantshipsAvailable: boolean;
  assistantshipsDetail: string;
  supervisorContactRequirement: "Strictly Required Before Application" | "Recommended" | "Centralized / Not Required";
  supervisorContactNotes: string;
  languageRequirements: string;
  typicalApplicationDeadlines: string;
  importantLimitations: string[];
  officialPortals: CountryOfficialPortal[];
  applicationSequence: string[];
}

export const countryGuidesData: CountryGuide[] = [
  // ================= EUROPE =================
  {
    id: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    region: "Europe",
    headline: "Zero Public Tuition + Salaried TV-L E13 PhD Contracts & DAAD Awards",
    summary:
      "Most public universities charge zero tuition for international students. Doctoral candidates are predominantly hired on public-sector TV-L E13 research contracts with full benefits.",
    fundingPhilosophy:
      "Higher education is treated as a public good: free tuition at public universities paired with salaried doctoral employment.",
    commonFundingRoutes: [
      "Tuition-Free Public Master's (€150–€350/semester fee with transit pass)",
      "TV-L E13 Doctoral Employment Contract (€2,200–€3,200 net/month)",
      "DAAD Government Scholarships (EPOS, All-Discipline Awards)",
      "Deutschlandstipendium (€300/month university merit award)",
      "Max Planck, Helmholtz, and Fraunhofer Institute Fellowships"
    ],
    governmentScholarships: [
      {
        name: "DAAD Postgraduate Scholarships (EPOS)",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-scholarships/",
        description: "Fully funded awards for students from developing countries in selected master's and PhD programs.",
        coverage: "€934/mo (Master's) or €1,300/mo (PhD), travel allowance, health insurance, and study grant.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Deutschlandstipendium",
        url: "https://www.deutschlandstipendium.de",
        description: "National merit scholarship awarded directly by universities, co-funded by government and private donors.",
        coverage: "€300/month stipend for at least two semesters.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Direct university scholarships for Master's are limited because tuition is already free. Students fund living costs through research jobs (HiWi) or external foundations.",
    phdFundingModel:
      "PhDs are formal employment positions (TV-L E13/E14). Candidates earn a monthly salary with statutory pension, unemployment, and healthcare coverage.",
    mastersFundingModel:
      "Zero tuition at almost all public universities. Living costs (~€992/month) are covered via scholarships, student jobs, or a blocked bank account (Sperrkonto).",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Student assistant jobs (HiWi) in university labs pay €13–€16/hour up to 20 hours/week, helping cover living expenses.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "Individual PhDs require securing a professor (Doktorvater) first. Structured PhD programs and Master's programs use centralized online applications.",
    languageRequirements:
      "English-taught programs require IELTS 6.5–7.0 or TOEFL 90–100. German is not required for academic admission in English programs.",
    typicalApplicationDeadlines:
      "Winter Semester (October start): April–July 15. Summer Semester (April start): November–January 15.",
    importantLimitations: [
      "German student visas require proof of funds via a Blocked Account (Sperrkonto) of ~€11,904/year if not on scholarship.",
      "Baden-Württemberg and select Bavarian universities charge non-EU tuition (€1,500/semester).",
      "Strict subject-prerequisite matching: your Bachelor's degree must closely align with the Master's field."
    ],
    officialPortals: [
      { name: "DAAD Official Portal", url: "https://www.daad.de/en/", description: "Central German Academic Exchange Service database for programs and scholarships." },
      { name: "Uni-Assist e.V.", url: "https://www.uni-assist.de/en/", description: "Central credential evaluation and application portal used by 180+ German universities." },
      { name: "Research in Germany", url: "https://www.research-in-germany.org/en.html", description: "Federal research portal for international doctoral candidates and postdocs." }
    ],
    applicationSequence: [
      "Check undergraduate degree recognition on the official Anabin database (H+ status).",
      "Find English-taught programs on the DAAD International Programs portal.",
      "Verify that your completed credits match the department's ECTS requirements.",
      "For individual PhDs: email professors with a tailored research proposal and CV.",
      "Submit application through Uni-Assist or the university portal before July 15."
    ]
  },
  {
    id: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    region: "Europe",
    headline: "Eiffel Excellence Scholarships + Fully Funded Contrats Doctoraux",
    summary:
      "France offers prestigious national Eiffel scholarships and heavily subsidized tuition at public universities. PhD researchers are hired under legal 3-year Contrats Doctoraux with mandatory minimum salaries.",
    fundingPhilosophy:
      "State-supported education with competitive excellence grants and salaried doctoral research employment.",
    commonFundingRoutes: [
      "Eiffel Excellence Scholarship (French Foreign Ministry - Master's & PhD)",
      "Contrat Doctoral (3-year statutory doctoral research employment contract at ~€2,100 gross/mo)",
      "ANR and CIFRE Industrial PhD Contracts with partner companies",
      "University Foundation Excellence Waivers (reducing fees to domestic rates)",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "Eiffel Excellence Scholarship Program",
        url: "https://www.campusfrance.org/en/the-eiffel-scholarship-program",
        description: "France's flagship award for top international Master's and PhD candidates across STEM, economics, and law.",
        coverage: "€1,181/mo (Master's) or €1,800/mo (PhD), international round-trip flights, and national health insurance.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Make Our Planet Great Again (MOPGA)",
        url: "https://www.campusfrance.org/en",
        description: "Doctoral and research grants in climate change, earth systems, and energy transition.",
        coverage: "Monthly research allowance, travel grant, and laboratory support.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "Many public universities grant fee waivers that reduce non-EU Master's tuition to the standard domestic rate (~€243/year).",
    phdFundingModel:
      "Doctoral students in STEM must legally have secured funding before enrolling, typically via a 3-year Contrat Doctoral (~€2,100 gross/month).",
    mastersFundingModel:
      "Official non-EU tuition is €3,770/year, but many universities waive this to the domestic fee (€243/year). Living costs require scholarship or personal funds.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "PhD researchers can teach up to 64 hours per year (Mission d'enseignement) for extra compensation.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For a PhD, finding a thesis director (Directeur de Thèse) at an accredited Doctoral School is an absolute requirement before registration.",
    languageRequirements:
      "Most STEM Master's and nearly all PhDs are taught in English (IELTS 6.5+ or TOEFL 90+). Humanities programs often require French B2/C1.",
    typicalApplicationDeadlines:
      "Eiffel Scholarship nominations: September–December. General Master's via Campus France: October–January.",
    importantLimitations: [
      "Eiffel applications cannot be submitted directly; your French host university must nominate you.",
      "STEM doctoral registration without guaranteed 3-year funding is prohibited by French law.",
      "Student housing in Paris is extremely competitive; apply early through CROUS."
    ],
    officialPortals: [
      { name: "Campus France", url: "https://www.campusfrance.org/en", description: "Official national agency promoting French higher education." },
      { name: "CampusBourses", url: "https://campusbourses.campusfrance.org/", description: "Complete grant and scholarship search directory for France." },
      { name: "ABG (Association Bernard Gregory)", url: "https://www.abg.asso.fr/en/", description: "French portal for academic research positions and doctoral jobs." }
    ],
    applicationSequence: [
      "Browse English-taught programs on the Campus France online catalog.",
      "For Master's: apply to target universities between September and November to request Eiffel nomination.",
      "For PhD: browse thesis project offers on Campus France Doctoral Portal or contact lab directors.",
      "Submit your official dossier via the 'Études en France' portal.",
      "Apply for the Long-Stay Student Visa (VLS-TS) once accepted."
    ]
  },
  {
    id: "sweden",
    name: "Sweden",
    code: "SE",
    flag: "🇸🇪",
    region: "Europe",
    headline: "Salaried Unionized PhDs (SEK 31k–35k/mo) + Swedish Institute Scholarships",
    summary:
      "PhD candidates are full university employees with union-negotiated salaries (~SEK 31,000–35,000/month), pension, and paid leave. For Master's students, the Swedish Institute offers full scholarships.",
    fundingPhilosophy:
      "Nordic welfare model: PhD researchers are fully recognized employees with guaranteed labor rights and zero tuition fees.",
    commonFundingRoutes: [
      "Salaried Doctoral Employment (Doktorandanställning: SEK 31,000–35,000/month before tax)",
      "Swedish Institute (SI) Scholarship for Global Professionals (Master's level)",
      "University Merit Scholarships (KTH, Lund, Uppsala 75%–100% tuition waivers)",
      "Wallenberg Foundation and Vinnova-funded Research Grants"
    ],
    governmentScholarships: [
      {
        name: "Swedish Institute Scholarship (SISGP)",
        url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        description: "Full scholarship for future leaders pursuing master's degrees aligned with the UN Sustainable Development Goals.",
        coverage: "100% tuition, monthly allowance of SEK 12,000, travel grant of SEK 15,000, and health insurance.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships:
      "Every major university offers academic merit scholarships covering 75% to 100% of tuition fees for non-EU Master's students.",
    phdFundingModel:
      "PhDs are always fully funded salaried jobs. Tuition is zero, and salaries rise annually under collective agreements by SULF.",
    mastersFundingModel:
      "Non-EU students pay tuition (SEK 90,000–160,000/year) unless awarded a Swedish Institute scholarship or university fee waiver.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "PhD candidates can dedicate up to 20% of their time to departmental teaching, extending their contract from 4 to 5 paid years.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes:
      "PhD vacancies are advertised publicly as job openings on university career websites. You apply directly to the posting like an employment position.",
    languageRequirements:
      "IELTS 6.5 (minimum 5.5 in each section) or TOEFL 90 (minimum 20 in writing) satisfies English proficiency nationwide.",
    typicalApplicationDeadlines:
      "National Master's portal (UniversityAdmissions.se): mid-October to January 15. SI scholarship: February. PhDs: posted year-round.",
    importantLimitations: [
      "Non-EU applicants must pay a SEK 900 application fee through UniversityAdmissions.se.",
      "The Swedish Institute scholarship requires 3,000+ hours of documented work or leadership experience.",
      "Doctoral vacancy competition is high because every position is a globally advertised paid job."
    ],
    officialPortals: [
      { name: "UniversityAdmissions.se", url: "https://www.universityadmissions.se/intl/start", description: "Centralized national application portal for all Swedish universities." },
      { name: "Study in Sweden", url: "https://studyinsweden.se/", description: "Official Swedish Institute resource guide for international degree studies." },
      { name: "Swedish Institute (SI)", url: "https://si.se/en/", description: "Official portal for Swedish government scholarships and leadership networks." }
    ],
    applicationSequence: [
      "Select up to 4 Master's programs in priority order on UniversityAdmissions.se before January 15.",
      "Pay the SEK 900 application fee and upload verified academic documents.",
      "Apply for the Swedish Institute Scholarship in early February if eligible.",
      "For PhD: monitor university vacancy pages (KTH, Lund, Uppsala, Chalmers) and apply directly to job postings.",
      "Apply for a Swedish Residence Permit for Higher Education through the Swedish Migration Agency."
    ]
  },
  {
    id: "finland",
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    region: "Europe",
    headline: "Finland Scholarships (100% Tuition + €5,000 Grant) + Salaried Doctoral Roles",
    summary:
      "Finland offers high-quality research institutions. Admitted non-EU Master's students can win national Finland Scholarships, while doctoral researchers earn salaried university contracts (~€2,400–€2,800/month).",
    fundingPhilosophy:
      "Nordic innovation model: merit-based tuition waivers with relocation grants for Master's, and salaried positions for doctoral researchers.",
    commonFundingRoutes: [
      "Finland Scholarships (Ministry of Education: 100% tuition + €5,000 relocation grant)",
      "University 100% Tuition Waiver Scholarships (Aalto, Helsinki, Tampere, Oulu)",
      "Salaried Doctoral Researcher Positions (~€2,400–€2,800/month employment)",
      "Finnish Foundation Grants (Kone Foundation, Finnish Cultural Foundation)",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "Finland Scholarship (Master's)",
        url: "https://www.studyinfinland.fi/scholarships/finland-scholarships",
        description: "Funded by the Ministry of Education to attract exceptional international master's students.",
        coverage: "100% tuition fee waiver for year 1 plus a €5,000 relocation allowance.",
        degreeLevel: "Master's Only"
      },
      {
        name: "EDUFI Fellowships",
        url: "https://www.oph.fi/en/development/edufi-fellowship",
        description: "National Agency for Education grants for visiting and full doctoral researchers.",
        coverage: "€1,500–€1,900/month living stipend for research stays.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "When applying via the national portal, you can check a single box to be considered for a full university tuition waiver.",
    phdFundingModel:
      "PhDs are funded through university payroll employment (~€2,400–€2,800/month) or multi-year personal grants from Finnish foundations.",
    mastersFundingModel:
      "Non-EU students pay tuition (€10,000–€18,000/year) unless awarded a Finland Scholarship or institutional waiver. Living costs average €800–€1,000/month.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Research assistantships in university labs provide hourly wages or monthly stipends for master's thesis work.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "For a PhD, securing a prospective supervisor who endorses your research plan is required before formal admission to the doctoral school.",
    languageRequirements:
      "Standard requirements: IELTS Academic 6.5 (minimum 6.0 in writing) or TOEFL iBT 92.",
    typicalApplicationDeadlines:
      "Joint Master's application on Studyinfo.fi: early to mid-January (two-week window). PhD calls open 2–4 times annually.",
    importantLimitations: [
      "The primary joint Master's application window is very short (typically just two weeks in January).",
      "Living costs in Helsinki and Espoo require personal funds or a relocation grant.",
      "Proof of €6,720/year living funds is required for the Finnish residence permit."
    ],
    officialPortals: [
      { name: "Studyinfo.fi (Opintopolku)", url: "https://opintopolku.fi/konfo/en/", description: "Centralized national application portal for all Finnish universities." },
      { name: "Study in Finland", url: "https://www.studyinfinland.fi/", description: "Official national portal for international students by the Finnish National Agency for Education." },
      { name: "Research.fi", url: "https://research.fi/en/", description: "The national science portal of the Academy of Finland for research projects." }
    ],
    applicationSequence: [
      "Search English-taught programs on Studyinfo.fi during autumn.",
      "Prepare transcripts, language test scores, CV, and motivation letter.",
      "Submit application on Studyinfo.fi during the January joint application window.",
      "Tick the scholarship box on the application form to apply for fee waivers.",
      "Accept offer and apply for the Finnish Residence Permit through Enter Finland."
    ]
  },
  {
    id: "norway",
    name: "Norway",
    code: "NO",
    flag: "🇳🇴",
    region: "Europe",
    headline: "High-Paying Salaried PhD Positions (NOK 532,000+/year) + Full Employee Rights",
    summary:
      "Norway is a premier destination for doctoral research. All PhD candidates are hired as salaried research fellows (Stipendiat) earning over NOK 532,000/year (~$50,000) with complete employee benefits.",
    fundingPhilosophy:
      "Fair employment model: PhD researchers are academic staff members with living wages, union backing, and zero tuition.",
    commonFundingRoutes: [
      "Doctoral Research Fellowship (Stipendiat - fully salaried position at NOK 532,000+/year)",
      "Research Council of Norway (Forskningsrådet) Project Grants",
      "EEA and Norway Grants Scholarships",
      "University Research Assistantships"
    ],
    governmentScholarships: [
      {
        name: "EEA and Norway Grants",
        url: "https://eeagrants.org/",
        description: "Bilateral study and research grants for students from eligible European partner countries.",
        coverage: "Full study grants and project research stipends.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Master's scholarships are very limited following the 2023 introduction of non-EU tuition, making self-funding or PhD positions the main routes.",
    phdFundingModel:
      "100% funded as employment. You apply to an advertised 'PhD Fellow' job vacancy. The starting salary is approximately NOK 532,700/year with pension.",
    mastersFundingModel:
      "Non-EU students pay tuition (approx. NOK 130,000–250,000/year) at public universities. Living costs require proof of ~NOK 151,690/year.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "PhD appointments are 3 years of pure research, or 4 years including 25% teaching/departmental duties.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes:
      "Apply directly to advertised PhD vacancy announcements on Jobbnorge or Webcruiter. Prior supervisor contact is only needed for external self-funded proposals.",
    languageRequirements:
      "IELTS 6.5 or TOEFL 90 is required for academic admissions.",
    typicalApplicationDeadlines:
      "PhD positions are posted year-round on Jobbnorge.no. Master's applications close December 1 to January 15.",
    importantLimitations: [
      "Master's degrees are no longer tuition-free for non-EU students.",
      "Norway has a high cost of living; living without a salary or scholarship is difficult.",
      "Proof of funds for student residence permits is approximately NOK 151,690/year."
    ],
    officialPortals: [
      { name: "Study in Norway", url: "https://studyinnorway.no/", description: "Official Norwegian government guide for international students." },
      { name: "Jobbnorge", url: "https://www.jobbnorge.no", description: "Primary national portal for all Norwegian university PhD Fellow vacancies." },
      { name: "UDI (Directorate of Immigration)", url: "https://www.udi.no/en/", description: "Official immigration authority for Norwegian residence and work permits." }
    ],
    applicationSequence: [
      "For PhD: set up alerts on Jobbnorge.no for 'PhD Fellow' vacancies in your field.",
      "Prepare an academic CV, publication list, and tailored project cover letter.",
      "Submit application through the university's online job portal.",
      "Complete the interview and presentation with the departmental committee.",
      "Upon hire, sign the employment contract and apply for a Norwegian Residence Permit for Skilled Workers."
    ]
  },
  {
    id: "denmark",
    name: "Denmark",
    code: "DK",
    flag: "🇩🇰",
    region: "Europe",
    headline: "Collective Agreement PhD Salaries (DKK 33k/mo) + Government Scholarships",
    summary:
      "At top institutions like Copenhagen, DTU, and Aarhus, PhD researchers earn ~DKK 33,000/month under collective labor agreements. Master's applicants can compete for Danish Government Scholarships.",
    fundingPhilosophy:
      "Nordic innovation economy: strong industry-academic partnerships, industrial PhD options, and union-backed doctoral salaries.",
    commonFundingRoutes: [
      "PhD Fellow Employment Contract (Overenskomst: DKK 32,000–35,000/month + 17.1% pension)",
      "Danish Government Scholarships (Cultural Agreements for Master's)",
      "University Tuition Waiver + Monthly Living Grants (DTU, KU, AU)",
      "Industrial PhD (ErhvervsPhD) co-funded by companies and Innovation Fund Denmark"
    ],
    governmentScholarships: [
      {
        name: "Danish Government Scholarships",
        url: "https://ufm.dk",
        description: "Targeted scholarships for high-achieving non-EU students from selected partner nations.",
        coverage: "Full or partial tuition fee waivers and monthly living contributions.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Industrial PhD (Innovation Fund Denmark)",
        url: "https://innovationsfonden.dk/en/p/industrial-phd",
        description: "3-year research project where you are employed by a company while enrolled at a Danish university.",
        coverage: "Full private company salary + university tuition coverage.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "Universities receive government funding pools to award full tuition waivers and monthly stipends (~DKK 6,000–8,000/month) to top Master's applicants.",
    phdFundingModel:
      "PhDs are fully funded employment contracts. Tuition is zero, and candidates receive a formal salary under the AC collective agreement.",
    mastersFundingModel:
      "Non-EU students pay tuition (€6,000–€16,000/year) unless awarded a Danish Government Scholarship or university waiver.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "PhD contracts include 840 hours of teaching and knowledge dissemination across the 3-year appointment.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "Apply through the portal for advertised vacancies. For independent projects or Industrial PhDs, securing a university supervisor first is essential.",
    languageRequirements:
      "IELTS 6.5 overall or TOEFL iBT 88–90 meets admissions requirements.",
    typicalApplicationDeadlines:
      "Master's applications close January 15. PhD vacancies are advertised throughout the year.",
    importantLimitations: [
      "High living expenses; Copenhagen rent requires early searching.",
      "Master's government scholarships are distributed internally by universities—no separate government portal.",
      "Your Bachelor's degree must directly match the prerequisites of the target Master's program."
    ],
    officialPortals: [
      { name: "Study in Denmark", url: "https://studyindenmark.dk/", description: "Official Danish Ministry of Higher Education and Science portal." },
      { name: "UFM Ministry Portal", url: "https://ufm.dk/en", description: "Official government portal for education policies and international agreements." },
      { name: "SIRI Immigration Agency", url: "https://www.nyidanmark.dk/en-GB", description: "Official immigration authority for Danish student and researcher permits." }
    ],
    applicationSequence: [
      "Apply through the national digital application portal (DANS) before January 15 for Master's programs.",
      "Check the box requesting consideration for the Danish Government Scholarship.",
      "For PhD: browse vacancy postings on DTU, KU, and Aarhus University job portals.",
      "Upon acceptance, your university initiates the ST1 student/researcher permit application."
    ]
  },
  {
    id: "netherlands",
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    region: "Europe",
    headline: "Salaried Promovendus PhD Positions (€2,770–€3,539/mo) + NL Scholarships",
    summary:
      "In the Netherlands, doctoral candidates are 'Promovendi' (university employees) hired under the CAO Universiteiten collective agreement with salaries, holiday bonuses, and full employee rights.",
    fundingPhilosophy:
      "Employee-first doctoral system: PhD candidates are salaried staff with full union protections and research autonomy.",
    commonFundingRoutes: [
      "Promovendus Doctoral Employment (€2,770/mo Year 1 rising to €3,539/mo Year 4 + bonuses)",
      "NL Scholarship (Dutch Ministry of Education grant for non-EEA master's students)",
      "NWO (Dutch Research Council) Project Grants",
      "Institutional Excellence Awards (TU Delft Justus & Louise, Leiden Excellence)",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "NL Scholarship",
        url: "https://www.studyinnl.org/finances/nl-scholarship",
        description: "Funded by the Dutch Ministry of Education for international students outside the EEA.",
        coverage: "€5,000–€15,000 financial contribution toward tuition and living costs during year one.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Orange Knowledge Programme (OKP)",
        url: "https://www.nuffic.nl/en/subjects/orange-knowledge-programme",
        description: "Global development initiative offering full scholarships for professionals in partner countries.",
        coverage: "Full tuition, living costs, visa, and insurance for selected programs.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Leading universities offer competitive excellence awards (such as TU Delft's Justus & Louise van Effen) covering 100% of tuition and living costs.",
    phdFundingModel:
      "PhDs are fully funded jobs. You receive a monthly salary governed by the CAO agreement, an 8% holiday allowance, and an 8.3% end-of-year bonus.",
    mastersFundingModel:
      "Non-EU tuition is €12,000–€22,000/year. Funding requires winning an NL Scholarship, institutional excellence award, or Erasmus Mundus grant.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "PhD researchers spend up to 10–15% of their time assisting with undergraduate teaching and lab supervision.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes:
      "Most Dutch PhDs are advertised as open vacancies on AcademicTransfer.com. Apply directly to the posting; cold emails are rarely necessary.",
    languageRequirements:
      "English proficiency is extremely high. Required scores: IELTS 6.5–7.0 or TOEFL iBT 90–100.",
    typicalApplicationDeadlines:
      "Master's scholarship priority deadlines: December 1 to February 1. PhD vacancies: posted year-round.",
    importantLimitations: [
      "Severe national student housing shortage; secure verified accommodation before arriving.",
      "High non-EU tuition for Master's programs if no scholarship is secured.",
      "Research universities typically charge a €75–€100 application evaluation fee."
    ],
    officialPortals: [
      { name: "AcademicTransfer", url: "https://www.academictransfer.com/en/", description: "The official academic job portal for all 14 Dutch universities and research institutes." },
      { name: "Study in NL (Nuffic)", url: "https://www.studyinnl.org/", description: "Official national portal for international education in the Netherlands." },
      { name: "NWO (Research Council)", url: "https://www.nwo.nl/en", description: "Official national funding council investing in major scientific research projects." }
    ],
    applicationSequence: [
      "For Master's: apply via Studielink.nl and the university portal before December 1/February 1.",
      "Submit the institutional excellence scholarship application at the same time.",
      "For PhD: monitor AcademicTransfer.com for vacancies matching your specialization.",
      "Submit CV, publication list, and tailored cover letter through the university job system.",
      "Upon hire, the university directly handles your IND visa and residence permit application."
    ]
  },
  {
    id: "belgium",
    name: "Belgium",
    code: "BE",
    flag: "🇧🇪",
    region: "Europe",
    headline: "FWO / FNRS Doctoral Fellowships (€2,400+ net/mo) + Master Mind Awards",
    summary:
      "Home to KU Leuven, Ghent University, and UCLouvain. Doctoral researchers receive tax-exempt fellowships of €2,400+ net/month via FWO or FNRS, while Master's candidates can secure Master Mind scholarships.",
    fundingPhilosophy:
      "Subsidized European hub: low standard tuition at Flemish and Walloon universities paired with generous tax-exempt research fellowship salaries.",
    commonFundingRoutes: [
      "FWO / FNRS Doctoral Fellowships (tax-exempt salary of €2,400–€2,700 net/month with full social security)",
      "Master Mind Scholarship (Flemish Government: €10,000 grant + tuition waiver)",
      "VLIR-UOS Sustainable Development Master's Scholarships",
      "University Special Research Fund (BOF) Doctoral Grants",
      "Erasmus Mundus Joint Master Degrees"
    ],
    governmentScholarships: [
      {
        name: "Master Mind Scholarship",
        url: "https://www.studyinflanders.be/scholarships/master-mind-scholarships",
        description: "Awarded by the Flemish Ministry of Education to outstanding international master's students.",
        coverage: "Full tuition fee waiver plus €10,000 living allowance per academic year.",
        degreeLevel: "Master's Only"
      },
      {
        name: "VLIR-UOS Scholarships",
        url: "https://www.vliruos.be",
        description: "Full awards for students from developing nations pursuing selected international master's programs.",
        coverage: "100% tuition, monthly allowance, housing, travel, and comprehensive insurance.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships:
      "KU Leuven and Ghent University provide Special Research Fund (BOF) doctoral positions and targeted developing-country master's grants.",
    phdFundingModel:
      "PhDs are funded via 4-year tax-exempt fellowships (FWO in Flanders, FNRS in Wallonia) or BOF university research grants, providing €2,400+ net monthly pay.",
    mastersFundingModel:
      "Public tuition is low at ~€1,116/year for many programs, though specialized Master's charge ~€3,500–€6,000/year. Scholarships cover tuition and living costs.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Doctoral researchers can serve as teaching assistants (AAP), which includes university employment and structured teaching hours.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For a PhD, you MUST secure a university faculty promoter (professor) who co-submits your research proposal to FWO, FNRS, or the BOF fund.",
    languageRequirements:
      "English-taught programs require IELTS 6.5–7.0 or TOEFL 90+.",
    typicalApplicationDeadlines:
      "Master Mind nominations: February–March. FWO PhD fellowships: March 1. Master's admissions: February 1 (non-EEA).",
    importantLimitations: [
      "Master Mind requires institutional nomination by a Flemish university before you can apply.",
      "Proof of financial solvency (~€789–€1,000/month) is required for the Belgian student visa.",
      "FWO/FNRS competition is intense; academic rankings and clear research design are critical."
    ],
    officialPortals: [
      { name: "Study in Flanders", url: "https://www.studyinflanders.be/", description: "Official website for higher education in the Flemish region of Belgium." },
      { name: "FWO Research Foundation", url: "https://www.fwo.be/en/", description: "The premier funding body for fundamental scientific research in Flanders." },
      { name: "FNRS Research Fund", url: "https://www.frs-fnrs.be/en/", description: "Scientific research funding agency for French-speaking universities in Belgium." }
    ],
    applicationSequence: [
      "Find a research promoter at a Belgian university (KU Leuven, Ghent, VUB, UCLouvain).",
      "For Master's: apply to the university and request nomination for the Master Mind Scholarship.",
      "For PhD: write and co-submit an FWO/FNRS/BOF doctoral proposal with your promoter.",
      "Once approved, register at the university doctoral school.",
      "Apply for the Belgian Long-Stay Visa (Type D) through the embassy or VFS Global."
    ]
  },
  {
    id: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    region: "Europe",
    headline: "World-Leading PhD Salaries (CHF 47k–85k/yr) + Swiss Excellence Scholarships",
    summary:
      "At world top-10 universities like ETH Zurich and EPFL, PhD researchers earn CHF 47,000 to CHF 85,000+ per year under Swiss National Science Foundation (SNSF) standards. The Swiss Government also awards prestigious Excellence Scholarships.",
    fundingPhilosophy:
      "Top-tier research investment: national salary scales that guarantee complete financial independence during doctoral studies.",
    commonFundingRoutes: [
      "SNSF-Funded Doctoral Positions (CHF 47,040–CHF 55,000+ base salary)",
      "ETH Zurich / EPFL Internal Assistantships (up to CHF 70,000–CHF 85,000/year)",
      "Swiss Government Excellence Scholarships (ESKAS / FCS)",
      "ETH Zurich ESOP Excellence Scholarships (Master's level)",
      "EPFL Master Excellence Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Swiss Government Excellence Scholarships (ESKAS)",
        url: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        description: "Federal awards granted by the Swiss Confederation to international postgraduates and researchers.",
        coverage: "CHF 1,920/month living allowance, tuition fee waiver, health insurance, and flight grant.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "ETH Zurich's ESOP and EPFL's Excellence Fellowships cover full living costs (CHF 12,000/semester) and tuition waivers for top Master's students.",
    phdFundingModel:
      "All PhD students at Swiss public universities are employed as research assistants. Tuition is negligible (~CHF 150/semester), and salaries are world-leading.",
    mastersFundingModel:
      "Public tuition at ETH Zurich and EPFL is modest (~CHF 730/semester), but living expenses (CHF 20,000–24,000/year) require personal savings or an ESOP scholarship.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Assistantship duties (teaching exercises, lab supervision) are integrated directly into the salaried doctoral contract.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For individual doctorates, you must contact professors directly and secure a commitment letter. Structured doctoral programs (e.g. EPFL EDIC) use centralized admissions.",
    languageRequirements:
      "Master's and PhD programs in STEM are taught in English: IELTS 7.0+ or TOEFL iBT 100+.",
    typicalApplicationDeadlines:
      "ETH Zurich & EPFL Master's: December 15. Swiss Government Excellence Scholarships: September–December. PhD vacancies: posted year-round.",
    importantLimitations: [
      "Cost of living in Zurich and Geneva is high (monthly expenses exceed CHF 1,800–2,200).",
      "Cantonal immigration requires proof of CHF 21,000 in a Swiss bank for Master's study visas without a scholarship.",
      "Admissions at ETH Zurich and EPFL are among the most competitive worldwide."
    ],
    officialPortals: [
      { name: "Swiss Government Excellence (SERI)", url: "https://www.sbfi.admin.ch/sbfi/en/home.html", description: "State Secretariat for Education, Research and Innovation official portal." },
      { name: "SNSF (Science Foundation)", url: "https://www.snf.ch/en", description: "Switzerland's central scientific research funding agency." },
      { name: "ETH Zurich Jobs Portal", url: "https://jobs.ethz.ch/", description: "Direct portal for scientific and doctoral research vacancies at ETH Zurich." }
    ],
    applicationSequence: [
      "For Master's: apply to ETH Zurich or EPFL before December 15 and select the ESOP fellowship option.",
      "For PhD: browse lab vacancy pages or email professors with a tailored research inquiry and CV.",
      "For Swiss Government Excellence: contact the local Swiss embassy in August/September for application materials.",
      "Upon securing an employment contract or scholarship, submit the visa application to the cantonal migration office."
    ]
  },
  {
    id: "italy",
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    region: "Europe",
    headline: "Regional DSU Need-Based Full Waivers + MAECI Grants & National PhD Stipends",
    summary:
      "Italy provides generous DSU (Diritto allo Studio Universitario) regional funding, giving qualifying students full tuition waivers, free cafeteria meals, and cash living stipends. National PhD programs are funded at ~€1,200–€1,400 net/month.",
    fundingPhilosophy:
      "Constitutional right to education: socio-economic need-based funding (DSU) guarantees tuition-free access and living stipends for qualifying students worldwide.",
    commonFundingRoutes: [
      "DSU Regional Scholarship (100% tuition waiver + free dorm + free meals + ~€5,000–€7,000 cash stipend)",
      "MAECI Italian Government Scholarships for Foreign Citizens",
      "Invest Your Talent in Italy (IYT) Programme (scholarship + corporate internship)",
      "National PNRR-Funded PhD Scholarships (~€1,200–€1,400 net/month)",
      "University Merit Scholarships (PoliMi, PoliTo, Sapienza, Bologna)"
    ],
    governmentScholarships: [
      {
        name: "MAECI Grants for Foreign Citizens",
        url: "https://studyinitaly.esteri.it",
        description: "Italian Ministry of Foreign Affairs scholarships to foster international cultural and scientific cooperation.",
        coverage: "€900/month living stipend + university tuition exemption + health insurance.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Invest Your Talent in Italy",
        url: "https://postgradinitaly.esteri.it/postgradinitaly/en/how-to-apply",
        description: "Master's program combining engineering/business studies with paid corporate internships.",
        coverage: "Full tuition waiver + €900/month allowance + Italian language courses.",
        degreeLevel: "Master's Only"
      }
    ],
    universityScholarships:
      "Merit awards (such as Politecnico di Milano Platinum scholarships) provide €10,000/year living allowance plus complete tuition waivers.",
    phdFundingModel:
      "All accredited PhD seats in Italy with scholarship receive a national stipend (~€1,200–€1,400 net/month), which increases by 50% during research visits abroad.",
    mastersFundingModel:
      "Public university tuition is indexed to family income via the 'ISEE Parificato' document (€156–€3,000/year). Qualifying DSU students pay €0 tuition and receive living stipends.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Universities offer '150 Ore' (150 hours) paid student campus jobs in libraries and labs paying €8–€10/hour.",
    supervisorContactRequirement: "Centralized / Not Required",
    supervisorContactNotes:
      "PhD admissions are governed by public competitive calls (Bando di Concorso). You submit a project and CV to a centralized department committee.",
    languageRequirements:
      "English-taught Master's and PhD programs require IELTS 6.0–6.5 or TOEFL 78–90.",
    typicalApplicationDeadlines:
      "University pre-admissions: November–February. Universitaly pre-enrollment: March–June. DSU regional applications: July–September.",
    importantLimitations: [
      "The ISEE Parificato document requires official translation and legalization of family income certificates.",
      "Administrative procedures can take several months; prepare paperwork early.",
      "DSU cash stipends are typically disbursed in two installments (December and June)."
    ],
    officialPortals: [
      { name: "Universitaly Portal", url: "https://www.universitaly.it/", description: "Official Italian Ministry portal for international university pre-enrollments." },
      { name: "Study in Italy (MAECI)", url: "https://studyinitaly.esteri.it/", description: "Official Foreign Ministry portal for international students and government grants." }
    ],
    applicationSequence: [
      "Apply to Italian university portals (UniBo, PoliMi, Sapienza, PoliTo) between November and February.",
      "Receive conditional admission letter and submit pre-enrollment via Universitaly.",
      "Obtain translated and legalized family income documents for the ISEE Parificato.",
      "Apply for the regional DSU scholarship (e.g. ER.GO, DSU Toscana, Disco Lazio) in July.",
      "Book your study visa appointment at the Italian Embassy or Consulate."
    ]
  },
  {
    id: "austria",
    name: "Austria",
    code: "AT",
    flag: "🇦🇹",
    region: "Europe",
    headline: "Low Public Tuition (€726/sem) + FWF Salaried PhDs & Ernst Mach Grants",
    summary:
      "Public university tuition for non-EU students is legally capped at €726.72 per semester. PhD researchers are hired under collective bargaining agreements on FWF grants earning ~€2,460 gross/month.",
    fundingPhilosophy:
      "Subsidized Central European excellence: legally capped low tuition fees and competitive national research positions.",
    commonFundingRoutes: [
      "Statutory Low Tuition at Public Universities (€726.72 per semester for non-EU students)",
      "FWF (Austrian Science Fund) Salaried Doctoral Positions (~€2,460 gross/month)",
      "Ernst Mach Grant (OeAD - Ministry of Education, Science and Research)",
      "Marietta Blau Grant (for doctoral candidates conducting research abroad)",
      "ISTA (Institute of Science and Technology Austria) Fully Funded PhD Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Ernst Mach Grant (OeAD)",
        url: "https://oead.at/en/to-austria/grants-and-scholarships/ernst-mach-grant",
        description: "Funded by the Federal Ministry of Education for international postgraduates and young researchers.",
        coverage: "Monthly grant of €1,150–€1,250, health insurance, housing assistance, and tuition fee waiver.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "ISTA PhD Fellowships",
        url: "https://ista.ac.at",
        description: "Fully funded international PhD program in computer science, biology, physics, math, and neuroscience.",
        coverage: "Full international researcher salary, health insurance, and subsidized campus housing.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "Merit-based tuition waiver grants (Leistungsstipendium) are awarded after completing successful academic semesters.",
    phdFundingModel:
      "PhD researchers on FWF projects sign employment contracts under the collective agreement for university staff (Kollektivvertrag B1).",
    mastersFundingModel:
      "Tuition is universally capped at €726.72/semester for non-EU students. Living costs (~€950–€1,200/month) are funded via part-time work or scholarships.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Student assistant (Studienassistent) roles in university departments pay hourly wages for up to 20 hours/week.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "For individual doctorates, finding a supervising professor is required. Structured programs like ISTA use centralized admissions.",
    languageRequirements:
      "English-taught programs require IELTS 6.5–7.0 or TOEFL 90+.",
    typicalApplicationDeadlines:
      "Winter Semester: apply by September 5 (Austrian universities allow extended enrollment). ISTA PhD: January 8. OeAD grants: February 1.",
    importantLimitations: [
      "Austrian universities mandate Apostille or full consular legalization for all foreign degree documents.",
      "Proof of funds for the Austrian residence permit is ~€1,100–€1,250/month depending on age.",
      "Student housing in Vienna should be reserved months in advance through OeAD housing."
    ],
    officialPortals: [
      { name: "Grants.at Database", url: "https://grants.at/en/", description: "Austria's official and largest online database for scholarships and research grants." },
      { name: "OeAD Agency", url: "https://oead.at/en/", description: "Central Austrian service agency for international academic mobility." },
      { name: "ISTA PhD Portal", url: "https://ista.ac.at", description: "Direct portal for Austria's premier science and technology institute." }
    ],
    applicationSequence: [
      "Search for programs and funding opportunities on Grants.at and university websites.",
      "Obtain official Apostille or consular legalization on all academic certificates.",
      "Apply directly through the university portal (e.g. u:space for Uni Vienna, TISS for TU Wien).",
      "Apply for the Ernst Mach Grant or ISTA Fellowship if eligible.",
      "Apply for the Austrian Residence Permit (Aufenthaltsbewilligung Student) at the embassy."
    ]
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    region: "Europe",
    headline: "Chevening & Commonwealth Awards + UKRI Fully Funded PhD Studentships",
    summary:
      "The UK hosts world-leading universities (Oxford, Cambridge, Imperial, UCL, Edinburgh). International students can win full awards like Chevening, Commonwealth, and UKRI doctoral studentships covering full fees and tax-free stipends.",
    fundingPhilosophy:
      "Prestigious merit fellowships and Research Council studentships providing full funding packages.",
    commonFundingRoutes: [
      "Chevening Scholarships (Foreign, Commonwealth & Development Office - Master's)",
      "Commonwealth Scholarships (for citizens of Commonwealth developing nations)",
      "UKRI Doctoral Training Partnerships (DTPs/CDTs - PhD studentships)",
      "Gates Cambridge & Rhodes Scholarships (Oxford / Cambridge)",
      "University Departmental Studentships & President's Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Chevening Scholarships",
        url: "https://www.chevening.org/scholarships/",
        description: "The UK government's flagship global scholarship program for 1-year master's degrees.",
        coverage: "100% university tuition fees, monthly living allowance, economy flights, and arrival grants.",
        degreeLevel: "Master's Only"
      },
      {
        name: "Commonwealth Scholarships",
        url: "https://cscuk.fcdo.gov.uk/apply/",
        description: "Funded by the UK FCDO for individuals from developing Commonwealth countries.",
        coverage: "Full tuition, monthly stipend of £1,347 (£1,652 in London), return flights, and thesis grant.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Institutional awards include Clarendon Fund (Oxford), Gates Cambridge, Imperial President's PhD Scholarships, and Edinburgh Doctoral College Awards.",
    phdFundingModel:
      "Funded PhDs are called 'Studentships'. UKRI awards provide full international tuition coverage plus a minimum tax-free stipend of £19,237/year (£21,237 in London).",
    mastersFundingModel:
      "Master's tuition is high (£18,000–£45,000/year). Full funding requires securing a Chevening, Commonwealth, or university-wide scholarship.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Graduate Teaching Assistant (GTA) work pays £18–£25/hour for lab demonstrating and grading, typically capped at 6–8 hours/week.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For a PhD, approaching prospective supervisors with a 3–5 page research proposal is standard practice before formal application.",
    languageRequirements:
      "IELTS Academic (typically 6.5–7.5 overall with 6.0–7.0 minimum subscores) or TOEFL iBT 92–100.",
    typicalApplicationDeadlines:
      "Chevening: August to early November. Commonwealth: September–December. Oxford/Cambridge funding deadlines: December 1 or early January.",
    importantLimitations: [
      "Chevening recipients must return to their home country for at least two years post-graduation.",
      "The Immigration Health Surcharge (IHS) costs £776/year unless covered by your award.",
      "UKRI studentships have a statutory 30% cap on international candidates, making competition high."
    ],
    officialPortals: [
      { name: "Jobs.ac.uk PhD Directory", url: "https://www.jobs.ac.uk", description: "The premier UK academic job board listing active university PhD studentships." },
      { name: "Chevening Portal", url: "https://www.chevening.org/", description: "Official application and information portal for Chevening scholarships." },
      { name: "FindAPhD.com", url: "https://www.findaphd.com/", description: "Searchable directory of funded doctoral projects across the UK." }
    ],
    applicationSequence: [
      "For Master's: submit Chevening or Commonwealth application in autumn (August–November).",
      "Apply to 3 eligible UK master's programs in parallel before January.",
      "For PhD: find advertised studentships on Jobs.ac.uk or email supervisors with a proposal.",
      "Submit university application before the institutional funding deadline (December/January).",
      "Receive CAS letter and apply for the UK Student Visa."
    ]
  },

  // ================= NORTH AMERICA =================
  {
    id: "united-states",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    region: "North America",
    headline: "100% Tuition Remission + Graduate Assistantships (RA/TA) & Fulbright Grants",
    summary:
      "Virtually all STEM and quantitative PhD programs offer full tuition remission, health insurance, and guaranteed living stipends ($28,000–$45,000/year) through Research (GRA) or Teaching (GTA) Assistantships. Master's students can access Fulbright awards.",
    fundingPhilosophy:
      "Departmental assistantship model: PhD students are funded through teaching and sponsored research grants (NSF, NIH, DOE).",
    commonFundingRoutes: [
      "Graduate Research Assistantship (GRA: full tuition waiver + $28k–$45k/year stipend)",
      "Graduate Teaching Assistantship (GTA: full tuition waiver + living stipend)",
      "University Fellowships (Dean's Fellowship, Presidential Fellowship)",
      "Fulbright Foreign Student Program (US Department of State bilateral grant)",
      "External Fellowships (HHMI, Google, Microsoft PhD Fellowships for enrolled scholars)"
    ],
    governmentScholarships: [
      {
        name: "Fulbright Foreign Student Program",
        url: "https://foreign.fulbrightonline.org/",
        description: "Flagship international educational exchange program sponsored by the U.S. government.",
        coverage: "Full tuition, monthly living stipend, health insurance (ASPE), airfare, and J-1 visa sponsorship.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Most R1 research universities (MIT, Stanford, Michigan, UIUC, Texas, Georgia Tech) guarantee 4–5 years of full funding to all admitted PhD students.",
    phdFundingModel:
      "Full-Ride Package: 100% tuition remission + health insurance subsidy + monthly living stipend ($2,400–$3,800/month) for 9 to 12 months per year.",
    mastersFundingModel:
      "Most coursework Master's degrees are self-funded ($40,000–$70,000/year). However, STEM thesis Master's programs frequently offer partial or full Teaching Assistantships.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Assistantships require 20 hours/week of teaching or research service during academic terms.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "Admissions are decided by departmental graduate committees. Prior supervisor agreement is rarely binding; students often complete first-year lab rotations before selecting a PI.",
    languageRequirements:
      "TOEFL iBT 90–105 (Speaking subscore of 26+ is required by many universities for GTA teaching) or IELTS 7.0–7.5.",
    typicalApplicationDeadlines:
      "Fall Intake: Priority PhD deadlines are December 1, December 15, or January 1. CGS April 15 Resolution governs final offer acceptance.",
    importantLimitations: [
      "Application fees ($75–$150 per university) add up; request department fee waivers early.",
      "Fulbright scholars travel on J-1 visas with a 2-year home-country presence rule (Section 212(e)).",
      "9-month stipends require securing summer research funding or internship income for June–August."
    ],
    officialPortals: [
      { name: "EducationUSA", url: "https://educationusa.state.gov/", description: "U.S. Department of State network of 430+ international advising centers." },
      { name: "Fulbright Foreign Student Portal", url: "https://foreign.fulbrightonline.org/", description: "Official application guidelines and participating country commissions." },
      { name: "CGS April 15 Resolution", url: "https://cgsnet.org", description: "Council of Graduate Schools resolution protecting student funding decision rights." }
    ],
    applicationSequence: [
      "Select 8–10 target universities balanced across Reach, Match, and Safety tiers.",
      "Take IELTS/TOEFL and GRE (if required by your target departments) by October.",
      "Request 3 recommendation letters and draft a focused Statement of Purpose.",
      "Submit online applications via university portals before December 1/15 deadlines.",
      "Complete virtual faculty interviews and compare funding offers by April 15."
    ]
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    region: "North America",
    headline: "Guaranteed Minimum Funding Packages + Vanier CGS ($50,000/year)",
    summary:
      "Canada's top universities (Toronto, UBC, McGill, Waterloo, Alberta) offer guaranteed multi-year minimum funding packages for research Master's and PhD students. Top doctoral candidates can compete for the federal Vanier CGS ($50,000/year).",
    fundingPhilosophy:
      "Departmental minimum funding guarantees: binding baseline funding covering tuition and basic living costs for research students.",
    commonFundingRoutes: [
      "Departmental Minimum Funding Package (GRA + GTA + awards: CAD $24,000–$35,000/year)",
      "Vanier Canada Graduate Scholarships (Vanier CGS: CAD $50,000/year for 3 years)",
      "Provincial Graduate Fellowships (e.g. Ontario Graduate Scholarship - OGS, CAD $15,000/year)",
      "Graduate Research Assistantships (GRA) from supervisor tri-agency grants (NSERC, CIHR, SSHRC)",
      "University President's and International Tuition Offset Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Vanier Canada Graduate Scholarships (Vanier CGS)",
        url: "https://vanier.gc.ca/en/home-accueil.html",
        description: "Canada's premier doctoral scholarship, awarded for academic excellence, research potential, and leadership.",
        coverage: "CAD $50,000 annually for three years of doctoral study.",
        degreeLevel: "PhD Only"
      },
      {
        name: "Banting Research Fellowships",
        url: "https://banting.fellowships-bourses.gc.ca/en/home-accueil.html",
        description: "Premier awards for postdoctoral and senior advanced research talent.",
        coverage: "CAD $70,000/year for two years.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "U15 universities maintain published minimum funding guarantees. For example, Toronto guarantees CAD $28,000–$34,000/year plus tuition coverage for PhDs.",
    phdFundingModel:
      "PhDs are funded for 4–5 years through packages combining Graduate Research Assistantships (lab grants) and Graduate Teaching Assistantships (GTA union contract).",
    mastersFundingModel:
      "Thesis-based Master's (MSc/MA with thesis) frequently include guaranteed funding packages (CAD $18,000–$25,000/year). Course-based Master's are self-funded.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "GTA positions are unionized (e.g. CUPE) and pay high hourly rates (CAD $45–$52/hour) for 100–140 hours per term.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "At most Canadian universities, you MUST find a professor who agrees in writing to supervise and fund you before the department reviews your application.",
    languageRequirements:
      "IELTS Academic 6.5–7.0 (no band below 6.0) or TOEFL iBT 90–100.",
    typicalApplicationDeadlines:
      "Vanier CGS institutional nominations: September–October. University admissions: December 1 to January 15 for Fall intake.",
    importantLimitations: [
      "Recent Canadian student visa caps do not apply to Master's and PhD programs.",
      "High living and housing costs in Vancouver and Toronto; verify your stipend covers local rent.",
      "Course-based (non-thesis) Master's programs do not offer guaranteed funding."
    ],
    officialPortals: [
      { name: "EduCanada", url: "https://www.educanada.ca/", description: "Government of Canada official portal for international scholarships and study permits." },
      { name: "Vanier CGS Portal", url: "https://vanier.gc.ca/en/home-accueil.html", description: "Official application and eligibility portal for Vanier Canada Graduate Scholarships." },
      { name: "IRCC Immigration Portal", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html", description: "Official federal portal for Canadian Study Permits and work regulations." }
    ],
    applicationSequence: [
      "Identify prospective faculty supervisors across Canadian universities in July/August.",
      "Email professors with a concise research pitch and your academic CV.",
      "Once a professor agrees to supervise you, submit the formal university application.",
      "If nominated for Vanier CGS or OGS, prepare supporting statements with your supervisor.",
      "Receive official Letter of Acceptance (LOA) and apply for the Canadian Study Permit via IRCC."
    ]
  },

  // ================= ASIA =================
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    region: "Asia",
    headline: "MEXT Government Scholarships + JSPS Research Fellowships",
    summary:
      "The Japanese Government (MEXT) awards one of the world's most generous full-ride scholarships, covering 100% tuition, monthly stipends, and round-trip airfare. JSPS fellowships support advanced doctoral research.",
    fundingPhilosophy:
      "Government bilateral scholarship diplomacy: MEXT fully funds international graduate researchers to integrate into Japanese university labs.",
    commonFundingRoutes: [
      "MEXT Embassy Recommendation Scholarship (full ride: tuition + flights + ¥144k–¥145k/month)",
      "MEXT University Recommendation Scholarship (direct university nomination track)",
      "JSPS Research Fellowships (DC1/DC2 for doctoral researchers)",
      "University Presidential Waivers (Tokyo, Kyoto, Tokyo Tech)",
      "JASSO Honors Scholarships"
    ],
    governmentScholarships: [
      {
        name: "MEXT Monbukagakusho Scholarship",
        url: "https://www.studyinjapan.go.jp/en",
        description: "Flagship Japanese government award for international graduate research students.",
        coverage: "100% tuition waiver, monthly stipend of ¥144,000 (Master's) or ¥145,000 (PhD), and round-trip airfare.",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "JSPS Doctoral Fellowships",
        url: "https://www.jsps.go.jp/english/e-fellow/index.html",
        description: "Competitive fellowships for young researchers conducting collaborative research in Japanese laboratories.",
        coverage: "Monthly research grant of ¥200,000 plus domestic travel and research grants-in-aid.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "National universities offer 50% or 100% tuition fee exemptions for self-funded students who maintain strong academic records.",
    phdFundingModel:
      "PhDs are funded through MEXT scholarships, JSPS research fellowships, or professor-funded research assistant (RA) appointments.",
    mastersFundingModel:
      "Fully funded Master's positions are widely available through MEXT (Embassy and University tracks). Self-funded national university tuition is standardized (~¥535,800/year).",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "TA and RA positions in university labs pay supplementary hourly wages (~¥1,200–¥1,800/hour).",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For both MEXT and direct admissions, obtaining an informal Letter of Acceptance (Naidaku) from a Japanese professor is an essential requirement.",
    languageRequirements:
      "English-medium graduate programs (Global 30 network) require IELTS 6.5+ or TOEFL 85–90. Japanese language is not required for English tracks.",
    typicalApplicationDeadlines:
      "MEXT Embassy Track: opens April/May at local Japanese embassies. MEXT University Track: opens October–December.",
    importantLimitations: [
      "The MEXT Embassy application takes nearly a full year from initial screening to arrival.",
      "Laboratory culture involves formal hierarchies (Kōza system) that require respectful communication.",
      "MEXT recipients often spend their first 6 months as non-degree 'Research Students' before passing the entrance exam."
    ],
    officialPortals: [
      { name: "Study in Japan (JASSO)", url: "https://www.studyinjapan.go.jp/en/", description: "Comprehensive official information portal for studying in Japan." },
      { name: "MEXT Ministry Portal", url: "https://www.mext.go.jp/en/", description: "Official Japanese Ministry of Education, Culture, Sports, Science and Technology." },
      { name: "JSPS Agency", url: "https://www.jsps.go.jp/english/", description: "Japan's core agency for scientific research funding and fellowships." }
    ],
    applicationSequence: [
      "Choose route: Embassy Recommendation (apply via local Japanese Embassy in April) OR University Track (apply to university in autumn).",
      "Pass document screening and preliminary interview at the Japanese embassy (Embassy track).",
      "Contact Japanese university professors with your embassy certificate to secure a Letter of Acceptance.",
      "Submit final university preferences to MEXT; receive formal award notice in January/February.",
      "Receive visa and plane tickets from the embassy for April or October departure."
    ]
  },
  {
    id: "south-korea",
    name: "South Korea",
    code: "KR",
    flag: "🇰🇷",
    region: "Asia",
    headline: "Global Korea Scholarship (GKS Full-Ride) + BK21 Lab Research Stipends",
    summary:
      "Home to KAIST, Seoul National University, and POSTECH. The Korean government's Global Korea Scholarship (GKS) covers full tuition, living stipends, and flights. In STEM fields, the national Brain Korea 21 (BK21) fund supports graduate researchers directly in labs.",
    fundingPhilosophy:
      "National R&D drive: government GKS awards recruit global talent, while the multi-billion-dollar BK21 fund subsidizes lab personnel.",
    commonFundingRoutes: [
      "Global Korea Scholarship (GKS: full tuition + ₩1,000,000–₩1,300,000/mo + flights)",
      "BK21 Four Lab Research Stipends (minimum ₩1,000,000/mo for Master's, ₩1,600,000/mo for PhD)",
      "KAIST, UNIST, DGIST, and GIST Institutional Fellowships (full tuition waiver + lab stipend for all admitted)",
      "Seoul National University Global Scholarships",
      "POSCO TJ Park Asian Fellowships"
    ],
    governmentScholarships: [
      {
        name: "Global Korea Scholarship (GKS Graduate)",
        url: "https://www.studyinkorea.go.kr",
        description: "National Institute for International Education (NIIED) flagship full-ride scholarship.",
        coverage: "Full tuition, ₩1,000,000–₩1,300,000/mo living stipend, flights, settlement allowance, and 1-year Korean language training.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "STEM institutes (KAIST, GIST, UNIST) automatically waive tuition and provide living stipends for all accepted international students.",
    phdFundingModel:
      "PhD students in science and engineering are funded through BK21 project grants managed by their laboratory professor (Professor-funded RA).",
    mastersFundingModel:
      "GKS provides full funding for Master's students. In STEM labs, professors routinely provide full tuition waivers and monthly stipends from research grants.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Lab Research Assistantships (RA) are the standard working mechanism for STEM graduate students.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "For STEM admissions (especially KAIST, SNU, POSTECH), securing an agreement from a lab professor to cover your tuition and stipend is essential before applying.",
    languageRequirements:
      "English-track programs require IELTS 6.0–6.5 or TOEFL iBT 80–90. GKS includes one year of funded Korean language training.",
    typicalApplicationDeadlines:
      "GKS Embassy Track: February–March. GKS University Track: February–April. Fall university intake: February–April.",
    importantLimitations: [
      "GKS requires a 1-year Korean language training program in Korea unless you hold TOPIK Level 5 or 6.",
      "STEM lab culture involves long working hours and high publication expectations.",
      "Apostille or Korean consular legalization is mandatory for all degree certificates."
    ],
    officialPortals: [
      { name: "Study in Korea (NIIED)", url: "https://www.studyinkorea.go.kr/", description: "Official Korean government portal for international students and GKS notices." },
      { name: "National Research Foundation (NRF)", url: "https://www.nrf.re.kr", description: "Korea's leading agency for academic research grants and BK21 funding." }
    ],
    applicationSequence: [
      "Choose GKS route: Embassy Track (via local embassy) or University Track (directly to university) in February.",
      "Submit legalized transcripts, recommendation letters, personal statement, and medical report.",
      "For STEM: contact prospective lab professors at KAIST, SNU, or POSTECH to secure supervisor support.",
      "Pass NIIED review and receive official GKS selection certificate in June.",
      "Arrive in Korea in late August for language training or direct degree matriculation."
    ]
  },
  {
    id: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    region: "Asia",
    headline: "Chinese Government Scholarship (CSC Full-Ride) + ANSO / CAS Fellowships",
    summary:
      "China has elevated institutions like Tsinghua, Peking, Fudan, and Zhejiang under Project Double First-Class. The Chinese Government Scholarship (CSC) provides full tuition, free university housing, medical insurance, and living stipends up to 3,500 RMB/month.",
    fundingPhilosophy:
      "Massive state investment: national CSC and presidential scholarships provide comprehensive full-ride coverage to attract international talent.",
    commonFundingRoutes: [
      "Chinese Government Scholarship (CSC Type A Embassy & Type B University Programs)",
      "ANSO Scholarship for International Students (Chinese Academy of Sciences / USTC / UCAS)",
      "Provincial & Municipal Government Scholarships (Shanghai, Beijing Government Awards)",
      "University Presidential Excellence Scholarships (Tsinghua, Peking, Zhejiang)",
      "Belt and Road / Silk Road Scholarships"
    ],
    governmentScholarships: [
      {
        name: "Chinese Government Scholarship (CSC)",
        url: "https://www.campuschina.org/",
        description: "Administered by the China Scholarship Council under the Ministry of Education for international postgraduates.",
        coverage: "100% tuition waiver, free university accommodation, medical insurance, and monthly stipend (Master's: 3,000 RMB; PhD: 3,500 RMB/mo).",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "ANSO Scholarship for Young Talents",
        url: "http://www.anso.org.cn/",
        description: "Joint scholarship by CAS and international science academies for graduate training at USTC and UCAS.",
        coverage: "Full tuition waiver, health insurance, travel subsidy, and monthly living allowance up to 7,000 RMB/mo for PhD.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Top universities award independent scholarships (such as the Tsinghua Tuition Scholarship) that match or exceed national CSC rates.",
    phdFundingModel:
      "PhDs are routinely fully funded through CSC Type B (University Program), ANSO fellowships, or professor research project funds.",
    mastersFundingModel:
      "Extensive fully funded opportunities exist for Master's candidates through the CSC University Program and provincial government awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Campus assistantships (San-Zhu: Teaching, Research, and Admin) provide supplemental monthly earnings (500–1,500 RMB/month).",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "Securing an official 'Provisional Acceptance Letter' signed by a professor from a Chinese university greatly increases your CSC selection probability.",
    languageRequirements:
      "English-taught programs require IELTS 6.0–6.5 or TOEFL 80–90. HSK (Chinese test) is only needed for Chinese-taught programs.",
    typicalApplicationDeadlines:
      "CSC Type A (Embassy): January–March. CSC Type B (University): December–March. ANSO: November–February.",
    importantLimitations: [
      "A completed Foreigner Physical Examination Form (blood tests, ECG, chest X-ray) is mandatory for applying.",
      "A legalized police non-criminal record certificate is required.",
      "Admissions to top-tier universities (Tsinghua, Peking) are extremely selective."
    ],
    officialPortals: [
      { name: "Campus China (CSC)", url: "https://www.campuschina.org/", description: "Official application and information portal of the China Scholarship Council." },
      { name: "ANSO Official Portal", url: "http://www.anso.org.cn/", description: "Alliance of National and International Science Organizations scholarship page." }
    ],
    applicationSequence: [
      "Explore Double First-Class universities and English programs on CampusChina.org.",
      "Contact faculty members to secure a signed Provisional Acceptance Letter.",
      "Register on the CSC Online Application System with the target Agency Number.",
      "Submit a parallel application on the target university's international student portal.",
      "Receive JW201/JW202 visa form and admission notice to apply for the X1 student visa."
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    region: "Asia",
    headline: "SINGA Full Awards + NUS & NTU Research Scholarships (SGD 2,700–3,200/mo)",
    summary:
      "Singapore is home to world top-20 universities NUS and NTU. Doctoral research is funded through the Singapore International Graduate Award (SINGA) and university research scholarships, covering 100% tuition plus SGD 2,700 to SGD 3,200/month stipends.",
    fundingPhilosophy:
      "Technocratic research investment: high-stipend packages to recruit top scientific researchers into world-leading laboratories.",
    commonFundingRoutes: [
      "SINGA (Singapore International Graduate Award: A*STAR, NUS, NTU, SUTD)",
      "NUS Research Scholarship (100% tuition waiver + SGD 2,700–3,200/month stipend)",
      "NTU Research Scholarship (100% tuition waiver + SGD 2,700–3,200/month stipend)",
      "A*STAR Graduate Scholarship (AGS)",
      "President's Graduate Fellowship (SGD 3,500/month top-tier award)"
    ],
    governmentScholarships: [
      {
        name: "Singapore International Graduate Award (SINGA)",
        url: "https://www.a-star.edu.sg/Scholarships",
        description: "Partnership between A*STAR, NUS, NTU, and SUTD for international PhD candidates in science and engineering.",
        coverage: "Full tuition coverage, monthly stipend of SGD 2,700 (increasing to SGD 3,200 after qualifying exam), airfare grant, and settling-in allowance.",
        degreeLevel: "PhD Only"
      }
    ],
    universityScholarships:
      "NUS and NTU award internal Research Scholarships automatically to top-ranked PhD applicants based on academic merit.",
    phdFundingModel:
      "Virtually all admitted PhD students in STEM and computing receive full funding packages covering tuition and monthly stipends.",
    mastersFundingModel:
      "Research Master's offer limited scholarships. Coursework Master's degrees are predominantly self-funded (SGD 35,000–55,000/year).",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Graduate Teaching Assistant (GAP) hours are integrated into doctoral training to build academic teaching experience.",
    supervisorContactRequirement: "Recommended",
    supervisorContactNotes:
      "For SINGA, reviewing A*STAR and university researcher profiles and listing prospective supervisors in your application is critical.",
    languageRequirements:
      "Instruction is 100% in English. Required scores: IELTS 6.5–7.0 or TOEFL 85–100. GRE is recommended or required by some departments.",
    typicalApplicationDeadlines:
      "SINGA August Intake: closes December 1. SINGA January Intake: closes June 1. Direct university PhD: November–January.",
    importantLimitations: [
      "High rental accommodation costs in Singapore; graduate student housing on campus is priority for Year 1.",
      "Admissions to NUS and NTU are highly competitive, typically requiring high GPA or first-class honors.",
      "Ministry of Education (MOE) tuition grants for certain Master's programs carry a 3-year service obligation in Singapore."
    ],
    officialPortals: [
      { name: "A*STAR SINGA Portal", url: "https://www.a-star.edu.sg/Scholarships", description: "Official application page for the Singapore International Graduate Award." },
      { name: "NUS Graduate School", url: "https://nusgs.nus.edu.sg/", description: "Graduate admissions and research scholarship portal of NUS." },
      { name: "NTU Graduate College", url: "https://www.ntu.edu.sg/graduate-college", description: "Official portal for Nanyang Technological University research scholarships." }
    ],
    applicationSequence: [
      "Browse research project areas across A*STAR institutes, NUS, NTU, and SUTD.",
      "Submit application on the official A*STAR SINGA portal before December 1 (for August intake).",
      "Ensure two academic recommendation letters are uploaded by your referees.",
      "Attend the virtual interview with an A*STAR and university faculty panel.",
      "Accept award and complete the Student's Pass (STP) application with the Singapore ICA."
    ]
  },

  // ================= OCEANIA =================
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    region: "Oceania",
    headline: "Research Training Program (RTP Full-Ride) + Australia Awards (AUD $32k–$40k/yr)",
    summary:
      "Australia's Group of Eight (Go8) universities (Melbourne, ANU, Sydney, UNSW, Queensland, Monash) provide world-class research facilities. International researchers are funded via the Australian Government Research Training Program (RTP), which covers 100% tuition and pays tax-free stipends of AUD $32,000–$40,000/year.",
    fundingPhilosophy:
      "Federal Research Training Program (RTP): block grants provide domestic and international research candidates with tuition offsets and tax-free living stipends.",
    commonFundingRoutes: [
      "Australian Government Research Training Program (RTP: full tuition offset + AUD $32k–$40k/year stipend)",
      "University Postgraduate Research Scholarships (e.g. Melbourne Research Scholarship)",
      "Australia Awards Scholarships (DFAT government bilateral development program)",
      "CSIRO Postgraduate Research Scholarships",
      "Faculty Project-Specific Research Grants (ARC / NHMRC grants)"
    ],
    governmentScholarships: [
      {
        name: "Australian Government Research Training Program (RTP)",
        url: "https://www.education.gov.au/research-block-grants/research-training-program",
        description: "Administered directly by Australian universities on behalf of the Department of Education.",
        coverage: "100% International Tuition Offset + tax-free living stipend (AUD $32,000–$40,000/year) + Overseas Student Health Cover (OSHC).",
        degreeLevel: "Master's & PhD"
      },
      {
        name: "Australia Awards Scholarships",
        url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships",
        description: "DFAT bilateral awards for emerging leaders from partner developing countries.",
        coverage: "Full tuition, return flights, establishment allowance, contribution to living expenses, and health cover.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "Go8 universities maintain internal scholarship schemes (e.g. Melbourne Graduate Research Scholarships) that match RTP terms.",
    phdFundingModel:
      "PhDs (by research) are systematically funded through RTP or university research scholarships covering international fees and providing a tax-free stipend.",
    mastersFundingModel:
      "Master's by Research degrees are eligible for RTP fee offsets and stipends. Master's by Coursework degrees are predominantly self-funded (AUD $38,000–$55,000/year) unless on Australia Awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "Casual academic tutoring and lab demonstrating pay high hourly rates (AUD $50–$65/hour) for up to 20 hours/week.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "Australian universities mandate obtaining written support from an accredited supervisor before submitting your formal admission application.",
    languageRequirements:
      "IELTS Academic 6.5–7.0 (no band below 6.0) or TOEFL iBT 85–96.",
    typicalApplicationDeadlines:
      "Major international scholarship rounds close August 31 (for start early next year) and February/March. Australia Awards close April 30.",
    importantLimitations: [
      "Australian student visa (Subclass 500) Genuine Student (GS) criteria are strictly enforced.",
      "High rental accommodation costs in Sydney and Melbourne; confirm your stipend covers living costs.",
      "Applications submitted without prior supervisor agreement are rejected administratively."
    ],
    officialPortals: [
      { name: "Study Australia", url: "https://www.studyaustralia.gov.au/", description: "Australian Government's official website for international students." },
      { name: "Department of Education RTP Guidelines", url: "https://www.education.gov.au/research-block-grants/research-training-program", description: "Official federal guidelines governing the Research Training Program." },
      { name: "Australia Awards (DFAT)", url: "https://www.dfat.gov.au/people-to-people/australia-awards", description: "Official portal for Australian government international development scholarships." }
    ],
    applicationSequence: [
      "Identify prospective academic supervisors at Go8 and leading universities in May/June.",
      "Submit an Expression of Interest (EOI) with your CV and a 2–3 page research proposal.",
      "Once a supervisor agrees in writing, submit the formal university application.",
      "Tick the box applying for 'RTP and University Research Scholarships' on the application.",
      "Receive Confirmation of Enrolment (CoE) and apply for the Australian Student Visa (Subclass 500)."
    ]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    region: "Oceania",
    headline: "Domestic Tuition Policy for All PhDs (NZD ~7k/yr) + Full Scholarships",
    summary:
      "In New Zealand, all international PhD students pay the exact same low domestic tuition as New Zealand citizens (~NZD $7,000–$9,000/year). All 8 universities offer University Doctoral Scholarships providing full tuition plus living stipends of NZD $30,000–$35,000/year.",
    fundingPhilosophy:
      "Equal doctoral treatment: international PhD candidates pay domestic tuition rates, hold unlimited work rights, and can access spousal work visas.",
    commonFundingRoutes: [
      "University Doctoral Scholarships (full tuition + NZD $30,000–$35,000/year tax-free stipend)",
      "Domestic Tuition Fee Rate Guarantee for ALL International PhD Candidates",
      "Manaaki New Zealand Scholarships (Foreign Affairs and Trade - MFAT)",
      "Crown Research Institute (CRI) Project Grants",
      "Faculty Project Grants (Marsden Fund / MBIE Endeavour Fund)"
    ],
    governmentScholarships: [
      {
        name: "Manaaki New Zealand Scholarships",
        url: "https://www.manaakinzscholarships.govt.nz/",
        description: "Funded by the New Zealand Government for postgraduates from eligible developing partner countries.",
        coverage: "Full tuition, living allowance of NZD $531/week, establishment allowance, medical insurance, and return flights.",
        degreeLevel: "Master's & PhD"
      }
    ],
    universityScholarships:
      "All 8 universities (Auckland, Otago, Victoria Wellington, Canterbury, etc.) award guaranteed doctoral scholarships to candidates with top GPA equivalents.",
    phdFundingModel:
      "With a University Doctoral Scholarship: 100% tuition coverage + NZD $30,000–$35,000 tax-free stipend. Even if self-funding, PhD tuition is only ~NZD $7,500/year (domestic rate).",
    mastersFundingModel:
      "Master's degrees charge international tuition (NZD $32,000–$45,000/year) unless funded via Manaaki NZ Scholarships or university master's awards.",
    assistantshipsAvailable: true,
    assistantshipsDetail:
      "International PhD students hold unlimited work rights on their student visa, allowing flexible paid teaching and research assistant work.",
    supervisorContactRequirement: "Strictly Required Before Application",
    supervisorContactNotes:
      "You MUST contact a prospective supervisor and obtain preliminary approval of your research proposal before the university will consider your doctoral application.",
    languageRequirements:
      "IELTS Academic 6.5 (no sub-band below 6.0) or TOEFL iBT 90.",
    typicalApplicationDeadlines:
      "University Doctoral Scholarship rounds close: March 1, July 15, and November 1. Manaaki NZ Scholarships close in February.",
    importantLimitations: [
      "Master's degrees do not benefit from the domestic fee policy and require full international tuition.",
      "Living costs in Auckland and Wellington are high.",
      "Preliminary supervisor review takes 4–8 weeks; contact faculty well in advance of scholarship rounds."
    ],
    officialPortals: [
      { name: "Study with New Zealand", url: "https://www.studywithnewzealand.govt.nz/", description: "The official government website for international students in New Zealand." },
      { name: "Manaaki New Zealand Scholarships", url: "https://www.manaakinzscholarships.govt.nz/", description: "Official MFAT portal for New Zealand Government international scholarships." },
      { name: "Immigration New Zealand", url: "https://www.immigration.govt.nz", description: "Official visa information for doctoral and master's students." }
    ],
    applicationSequence: [
      "Review faculty research directories at New Zealand universities (Auckland, Otago, VUW, Canterbury).",
      "Contact a prospective supervisor with your CV, transcripts, and 2-page research proposal.",
      "Upon securing supervisor support, submit your application through the university admissions portal.",
      "Select consideration for the University Doctoral Scholarship on the application form.",
      "Receive Offer of Place and Scholarship Award; apply for the New Zealand Student Visa."
    ]
  }
];

export const countryGuidesControlsData = {
  header: {
    badge: "20 Country Dossiers",
    title: "Country Funding Guides",
    subtitle:
      "Explore tuition policies, statutory PhD salaries, government awards, and supervisor rules across 20 global destinations."
  },
  regions: ["All", "Europe", "North America", "Asia", "Oceania"],
  supervisorFilters: [
    { label: "All Supervisor Rules", value: "All" },
    { label: "Mandatory Before Applying", value: "Strictly Required Before Application" },
    { label: "Recommended", value: "Recommended" },
    { label: "Centralized / Not Required", value: "Centralized / Not Required" }
  ],
  searchPlaceholder: "Search by country or scholarship (e.g. DAAD, MEXT, Fulbright)...",
  actions: {
    expandAll: "Expand All",
    collapseAll: "Collapse All"
  },
  cardLabels: {
    routes: "Common Funding Routes",
    govScholarships: "Government Scholarships",
    phdModel: "PhD Funding Model",
    mastersModel: "Master's Funding Model",
    supervisor: "Supervisor Requirement",
    language: "Language Requirements",
    deadlines: "Typical Application Deadlines",
    limitations: "Important Warnings & Limitations",
    sequence: "Application Sequence",
    officialPortals: "Official Portals & Resources"
  }
};

export const getCountryById = (id: string): CountryGuide | undefined => {
  return countryGuidesData.find((country) => country.id.toLowerCase() === id.toLowerCase());
};

export const getCountriesByRegion = (region: "Europe" | "North America" | "Asia" | "Oceania"): CountryGuide[] => {
  return countryGuidesData.filter((country) => country.region === region);
};
