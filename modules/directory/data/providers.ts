import type { ProviderEntry } from "../types";
import { expansionProviders } from "./providersExpansion";
import { moreProviders } from "./providersMore";

// Organisations that award scholarships. Requirements are the usual ones, listed briefly.
// Each programme sets its own rules and changes them every cycle, so every entry links to the official page.
const baseProviders: ProviderEntry[] = [
  {
    name: "Commonwealth Scholarship Commission",
    supports: "Students from eligible Commonwealth countries who cannot afford UK study",
    country: "United Kingdom", region: "Europe", kind: "Government body",
    programs: ["Commonwealth Scholarships"],
    route: "Through a nominating body in your country, or directly for some programmes.",
    requirements: [
      "Citizen or refugee of an eligible Commonwealth country, living there",
      "Strong first degree (usually upper second class or equivalent)",
      "Cannot afford to study in the UK without this award",
      "Plan to return home and contribute to development"
    ],
    documents: ["Transcripts and degree", "Study or research proposal", "Two or three references", "Development impact statement"],
    selection: "Nomination or online application, shortlisting by the Commission, then panel decision.",
    site: "https://cscuk.fcdo.gov.uk"
  },
  {
    name: "DAAD (German Academic Exchange Service)",
    supports: "International graduates, by programme",
    country: "Germany", region: "Europe", kind: "Government-funded agency",
    programs: ["DAAD Scholarships"],
    route: "Direct online application on the DAAD portal. Some programmes need admission to a German university first.",
    requirements: [
      "Strong degree in a relevant field, with recent graduation limits for some programmes",
      "Proof of language ability (English or German, by programme)",
      "Clear study or research plan",
      "Some development-related master's programmes ask for around two years of work experience"
    ],
    documents: ["CV", "Motivation letter", "Transcripts and degree", "Reference letters", "Language certificate"],
    selection: "Written review, then a selection committee. Some programmes include an interview.",
    site: "https://www.daad.de/en"
  },
  {
    name: "Chevening (UK Foreign, Commonwealth & Development Office)",
    supports: "Future leaders from eligible countries",
    country: "United Kingdom", region: "Europe", kind: "Government programme",
    programs: ["Chevening Scholarships"],
    route: "Direct online application to Chevening, plus applications to three UK universities.",
    requirements: [
      "Citizen of a Chevening-eligible country, not a British or dual British citizen",
      "An undergraduate degree that lets you start a UK master's",
      "At least two years (2,800 hours) of work experience",
      "Receive an offer from an eligible UK university by the stated date",
      "Return to your home country for at least two years after the award"
    ],
    documents: ["Application essays", "Two references", "University offer", "Proof of English ability"],
    selection: "Application review, interview, then university offers must be confirmed.",
    site: "https://www.chevening.org"
  },
  {
    name: "Fulbright Commissions and the U.S. Department of State",
    supports: "Graduates from participating countries",
    country: "United States", region: "North America", kind: "Government programme",
    programs: ["Fulbright Foreign Student Program"],
    route: "Apply through the Fulbright Commission or US embassy in your own country.",
    requirements: [
      "Citizen of a participating country, not a US citizen or permanent resident",
      "Bachelor's degree or equivalent",
      "Strong English ability",
      "Plan to return home after the award"
    ],
    documents: ["Application essays", "Transcripts", "References", "Test scores if asked by the commission"],
    selection: "Commission review and interview, then placement at a US university.",
    site: "https://foreign.fulbrightonline.org"
  },
  {
    name: "MEXT (Ministry of Education, Japan)",
    supports: "International students at graduate level",
    country: "Japan", region: "Asia", kind: "Government ministry",
    programs: ["MEXT Scholarship"],
    route: "Embassy route in your country, or university recommendation route through a Japanese university.",
    requirements: [
      "Citizen of a country with diplomatic relations with Japan",
      "Age limit set by the programme (often under 35)",
      "Degree and grades that meet the programme's level",
      "Good health and willingness to study in Japan"
    ],
    documents: ["Application form and study plan", "Transcripts and degree", "Recommendation letters", "Health certificate"],
    selection: "Document screening, written tests and interview at the embassy, then university placement.",
    site: "https://www.studyinjapan.go.jp/en"
  },
  {
    name: "NIIED (Global Korea Scholarship)",
    supports: "International graduate students",
    country: "South Korea", region: "Asia", kind: "Government agency",
    programs: ["Global Korea Scholarship (GKS)"],
    route: "Through the Korean embassy in your country or through selected Korean universities.",
    requirements: [
      "Citizen of an eligible country; not a Korean citizen, and neither parent a Korean citizen",
      "Age limit set by the programme (often under 40 for graduate study)",
      "Minimum grade average set by the programme",
      "Good health"
    ],
    documents: ["Application and study plan", "Transcripts and degree", "Recommendation letters", "Proof of nationality"],
    selection: "Embassy or university screening, then final selection by NIIED.",
    site: "https://www.studyinkorea.go.kr"
  },
  {
    name: "China Scholarship Council (CSC)",
    supports: "International students at master's and PhD level",
    country: "China", region: "Asia", kind: "Government agency",
    programs: ["Chinese Government Scholarship (CSC)"],
    route: "Type A: apply through the Chinese embassy in your country. Type B: apply to a Chinese university that has CSC places, and the university nominates you to CSC.",
    requirements: [
      "Non-Chinese citizen in good health",
      "Master's applicants hold a bachelor's degree; PhD applicants hold a master's degree",
      "Age limits (usually under 35 for master's and under 40 for PhD)",
      "Admission or pre-admission at a Chinese university"
    ],
    documents: ["Study or research plan", "Transcripts and degree", "Two recommendation letters", "Language certificate"],
    selection: "University review, then CSC final approval.",
    site: "https://www.csc.edu.cn"
  },
  {
    name: "Campus France (Eiffel Programme)",
    supports: "Top international master's and PhD students",
    country: "France", region: "Europe", kind: "Government agency",
    programs: ["Eiffel Excellence Scholarship"],
    route: "A French institution nominates you. You cannot apply directly.",
    requirements: [
      "Apply to a French institution that participates in the programme",
      "Master's candidates usually under 30 and PhD candidates under 35",
      "Excellent academic record",
      "Not a French resident"
    ],
    documents: ["Application to the institution", "CV and transcripts", "Motivation letter", "References"],
    selection: "The French institution nominates, then a national committee selects.",
    site: "https://www.campusfrance.org/en"
  },
  {
    name: "Swiss Federal Commission for Scholarships for Foreign Students",
    supports: "Foreign researchers with a Swiss host",
    country: "Switzerland", region: "Europe", kind: "Government body",
    programs: ["Swiss Government Excellence Scholarships"],
    route: "Through the Swiss embassy or the national authority of your country, with a Swiss host professor.",
    requirements: [
      "Master's degree for doctoral research, within the age limit set by the call",
      "Support letter from a Swiss professor who will host you",
      "Research proposal",
      "Nationality listed in the call"
    ],
    documents: ["Research proposal", "Host professor letter", "Transcripts and degree", "References"],
    selection: "National and Swiss federal review.",
    site: "https://www.sbfi.admin.ch/scholarships_eng"
  },
  {
    name: "Swedish Institute",
    supports: "Professionals from eligible countries",
    country: "Sweden", region: "Europe", kind: "Government agency",
    programs: ["Swedish Institute Scholarships"],
    route: "First apply for a master's programme through the Swedish admissions portal, then apply to SI.",
    requirements: [
      "Citizen of an eligible country",
      "Admission to a master's programme at a Swedish university",
      "About 3,000 hours of work experience, with leadership",
      "Clear plan to contribute to your community"
    ],
    documents: ["Admission proof", "Motivation essays", "Reference", "CV"],
    selection: "SI review and ranking among all eligible applicants.",
    site: "https://si.se"
  },
  {
    name: "European Education and Culture Executive Agency (Erasmus+)",
    supports: "Students of any nationality in joint master's programmes",
    country: "Europe", region: "Europe", kind: "Intergovernmental body",
    programs: ["Erasmus Mundus Joint Masters"],
    route: "Apply directly to the joint master's consortium you choose.",
    requirements: [
      "Bachelor's degree or equivalent",
      "Language requirements of the consortium",
      "Programme-specific selection criteria",
      "Check the consortium page for scholarship conditions"
    ],
    documents: ["CV", "Motivation letter", "Transcripts", "References", "Language certificate"],
    selection: "Each consortium ranks applications and awards the scholarships.",
    site: "https://erasmus-plus.ec.europa.eu"
  },
  {
    name: "Australian Government (DFAT)",
    supports: "Students from developing countries who will return home",
    country: "Australia", region: "Oceania", kind: "Government department",
    programs: ["Australia Awards"],
    route: "Apply online or through the Australia Awards office in your country.",
    requirements: [
      "Citizen of an eligible country",
      "Minimum work experience set by the call",
      "Plan to return home and contribute to development",
      "Meet the university's admission and English requirements"
    ],
    documents: ["Application form", "Transcripts and degree", "Referees", "English test result"],
    selection: "Shortlisting, interview, then university admission.",
    site: "https://www.dfat.gov.au/people-to-people/australia-awards"
  },
  {
    name: "Presidency for Turks Abroad and Related Communities",
    supports: "International students at all levels",
    country: "Turkey", region: "Middle East", kind: "Government agency",
    programs: ["Türkiye Scholarships"],
    route: "Online application on the national portal, choosing programmes and universities.",
    requirements: [
      "International student not a Turkish citizen",
      "Age and grade requirements set each year for each level",
      "Degree that meets the level of study",
      "Apply within the call period"
    ],
    documents: ["Application form", "Transcripts and degree", "Passport", "Reference or portfolio if requested"],
    selection: "Document review, then interview for shortlisted candidates.",
    site: "https://turkiyeburslari.gov.tr"
  },
  {
    name: "Tempus Public Foundation",
    supports: "Students from partner countries",
    country: "Hungary", region: "Europe", kind: "Government foundation",
    programs: ["Stipendium Hungaricum"],
    route: "Through your national sending authority and the Tempus application system.",
    requirements: [
      "Citizen of a partner country",
      "Degree that meets the level of study",
      "Language ability required by the programme",
      "Apply within the call period"
    ],
    documents: ["Application form", "Motivation letter", "Transcripts and degree", "Language certificate"],
    selection: "National selection, then Hungarian university admission.",
    site: "https://stipendiumhungaricum.hu"
  },
  {
    name: "Canadian Tri-agency (Vanier CGS)",
    supports: "Doctoral students with research and leadership strengths",
    country: "Canada", region: "North America", kind: "Government programme",
    programs: ["Vanier Canada Graduate Scholarships"],
    route: "A Canadian university nominates you. You cannot apply directly.",
    requirements: [
      "Doctoral candidate at, or applying to, a nominating Canadian university",
      "Excellent academic results, research potential and leadership",
      "International students are eligible",
      "Meet the university's internal deadline"
    ],
    documents: ["Research proposal", "Transcripts", "Referee assessments", "Leadership statement"],
    selection: "University nomination, then national review.",
    site: "https://vanier.gc.ca"
  },
  {
    name: "Gates Cambridge Trust",
    supports: "Non-UK students admitted to Cambridge",
    country: "United Kingdom", region: "Europe", kind: "Foundation",
    programs: ["Gates Cambridge Scholarship"],
    route: "Apply to the University of Cambridge and indicate Gates Cambridge on the form.",
    requirements: [
      "Citizen of any country outside the UK",
      "Admission to a full-time Cambridge programme at master's or PhD level",
      "Academic excellence and leadership potential",
      "Commitment to improving the lives of others"
    ],
    documents: ["Cambridge application", "Transcripts", "References", "Personal statement"],
    selection: "Cambridge review, then a Gates Cambridge shortlist and interviews.",
    site: "https://www.gatescambridge.org"
  },
  {
    name: "Rhodes Trust",
    supports: "Students from eligible constituencies",
    country: "United Kingdom", region: "Europe", kind: "Foundation",
    programs: ["Rhodes Scholarship"],
    route: "Apply through your constituency (country or region) to the Rhodes Trust.",
    requirements: [
      "Eligible constituency and citizenship rules",
      "Age and degree rules set per constituency",
      "Academic excellence, character and service",
      "Admission to Oxford"
    ],
    documents: ["Application and essay", "Transcripts", "Several referees", "Interview"],
    selection: "Constituency selection committee and interview.",
    site: "https://www.rhodeshouse.ox.ac.uk"
  },
  {
    name: "European Commission (Marie Skłodowska-Curie Actions)",
    supports: "Early-career researchers moving to a new country",
    country: "Europe", region: "Europe", kind: "Intergovernmental body",
    programs: ["Marie Skłodowska-Curie Doctoral Networks"],
    route: "Apply to individual doctoral positions advertised by the network on EURAXESS.",
    requirements: [
      "Not yet hold a doctorate",
      "Mobility rule: no more than 12 months in the host country in the 3 years before recruitment",
      "Meet each position's own requirements",
      "Be enrolled in a doctoral programme"
    ],
    documents: ["CV", "Motivation letter", "References", "Transcripts"],
    selection: "Each network recruits through its own interviews.",
    site: "https://euraxess.ec.europa.eu/jobs"
  },
  {
    name: "ELLIS (European Laboratory for Learning and Intelligent Systems)",
    supports: "Machine learning doctoral candidates",
    country: "Europe", region: "Europe", kind: "Research network",
    programs: ["ELLIS PhD Program"],
    route: "Apply once on the ELLIS portal, choosing supervisors.",
    requirements: [
      "Master's or equivalent in a relevant field",
      "Strong machine learning background and research record",
      "Two supervisors in different ELLIS locations",
      "Meet the call deadline"
    ],
    documents: ["CV", "Research statement", "Transcripts", "Reference letters"],
    selection: "Supervisors review applications, then interviews.",
    site: "https://ellis.eu"
  },
  {
    name: "Agency for Science, Technology and Research (A*STAR)",
    supports: "Research-focused graduate students",
    country: "Singapore", region: "Asia", kind: "Government agency",
    programs: ["A*STAR Graduate Scholarships"],
    route: "Online application on the A*STAR scholarships portal.",
    requirements: [
      "Strong academic and research record",
      "Admission to, or intention to apply to, a partner programme",
      "Meet the call for your level of study",
      "Check bond or service terms for the scheme"
    ],
    documents: ["CV", "Transcripts", "Research interest statement", "References"],
    selection: "Shortlisting and interview.",
    site: "https://www.a-star.edu.sg/Scholarships"
  },
  {
    name: "Research Grants Council (Hong Kong)",
    supports: "Excellent doctoral applicants worldwide",
    country: "Hong Kong", region: "Asia", kind: "Government body",
    programs: ["Hong Kong PhD Fellowship Scheme (HKPFS)"],
    route: "Apply through the HKPFS application of a participating Hong Kong university.",
    requirements: [
      "Excellent academic results",
      "Research ability and leadership",
      "Apply to a participating university",
      "Meet the December 1 call deadline"
    ],
    documents: ["Transcripts", "Research proposal", "Referee reports", "CV"],
    selection: "University review, then a selection panel.",
    site: "https://cerg1.ugc.edu.hk/hkpfs"
  },
  {
    name: "Ministry of Education (Taiwan)",
    supports: "International students admitted to Taiwanese universities",
    country: "Taiwan", region: "Asia", kind: "Government ministry",
    programs: ["Taiwan Scholarship (MOE)"],
    route: "Apply through the university or the programme's online system.",
    requirements: [
      "Non-Taiwanese applicant",
      "Admission or application to a Taiwanese university",
      "Degree for the level of study",
      "Meet the call period"
    ],
    documents: ["Application form", "Study plan", "Transcripts", "Recommendations"],
    selection: "University and ministry review.",
    site: "https://www.studyintaiwan.org"
  },
  {
    name: "King Abdullah University of Science and Technology (KAUST)",
    supports: "Admitted graduate students",
    country: "Saudi Arabia", region: "Middle East", kind: "University",
    programs: ["KAUST Fellowship"],
    route: "Apply to KAUST. Fellowship is part of admission.",
    requirements: [
      "Strong academic record",
      "Research potential in your field",
      "English ability",
      "Meet the programme's own prerequisites"
    ],
    documents: ["CV", "Transcripts", "Recommendation letters", "Statement of purpose"],
    selection: "Admissions review and interviews.",
    site: "https://www.kaust.edu.sa"
  },
  {
    name: "Knight-Hennessy Scholars (Stanford University)",
    supports: "Graduate students with leadership potential",
    country: "United States", region: "North America", kind: "University programme",
    programs: ["Knight-Hennessy Scholars"],
    route: "Apply to the programme and to a Stanford graduate programme.",
    requirements: [
      "Admission to a Stanford graduate programme",
      "Leadership, independence of thought and civic mindset",
      "Complete both applications by the deadline",
      "Eligible within three years of finishing your degree"
    ],
    documents: ["Essays", "Transcripts", "Three references", "Video questions"],
    selection: "Multi-stage review and interviews.",
    site: "https://knight-hennessy.stanford.edu"
  },  {
    name: "Mastercard Foundation Scholars Program",
    supports: "Academically talented students from low-income backgrounds, mainly from Africa",
    country: "Canada", region: "North America", kind: "Foundation (need-based)",
    programs: ["Mastercard Foundation Scholars Program"],
    route: "Apply to a partner university. Each partner runs its own selection.",
    requirements: [
      "Strong academic results",
      "Financial need",
      "Leadership and a commitment to give back to your community",
      "Meet the partner university's admission rules"
    ],
    documents: ["Partner university application", "Evidence of financial need", "References", "Personal statement"],
    selection: "Selection by the partner university, using the programme's criteria.",
    site: "https://mastercardfdn.org"
  },
  {
    name: "Aga Khan Foundation (International Scholarship Programme)",
    supports: "Postgraduate students with strong results and little other funding",
    country: "Switzerland", region: "Europe", kind: "Foundation (need-based)",
    programs: ["AKF International Scholarship Programme"],
    route: "Apply through the Aga Khan Foundation office or the online form for your country, if your country is listed.",
    requirements: [
      "National of one of the programme's eligible countries",
      "Excellent academic record and admission to a postgraduate programme abroad (priority to master's; PhD considered)",
      "No other means of paying for the study",
      "Awards are partly a grant and partly a loan"
    ],
    documents: ["Application form", "Admission letter or application proof", "Financial need statement", "Transcripts and references"],
    selection: "Review by the Foundation, then interviews for shortlisted candidates.",
    site: "https://www.akdn.org"
  },
  {
    name: "Islamic Development Bank (Scholarship Programme)",
    supports: "Students from member countries, in selected fields",
    country: "Saudi Arabia", region: "Middle East", kind: "Development bank",
    programs: ["IsDB Scholarship Programme"],
    route: "Apply online on the IsDB scholarship portal when a call is open.",
    requirements: [
      "National of an IsDB member country",
      "Academic record that meets the call",
      "Study in the fields named in the call",
      "Meet the age and language rules of the call"
    ],
    documents: ["Application form", "Transcripts and degree", "Admission proof where required", "References"],
    selection: "Screening by IsDB, then final selection.",
    site: "https://www.isdb.org"
  },

];

export const providers: ProviderEntry[] = [...baseProviders, ...moreProviders, ...expansionProviders];
