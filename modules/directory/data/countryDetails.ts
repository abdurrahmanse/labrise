export interface CountryDetail {
  overview: string;
  phd: string;
  pay: string;
  language: string;
  intake: string;
  visa: string;
  find: { label: string; href: string }[];
  scholarships: string[];
  tips: string[];
}

export const countryDetails: Record<string, CountryDetail> = {
  germany: {
    overview: "Public universities and research institutes such as Max Planck hire PhD candidates as employees. There is no tuition at most public universities.",
    phd: "Typically 3–4 years, usually in a research group under one professor. Either a structured program or an individual doctorate.",
    pay: "Salaried posts (often 50–100% positions) with salary in the range of roughly €2,000–€3,500 per month before tax. DAAD scholarships use fixed monthly rates.",
    language: "English is enough for most research groups. German helps in daily life.",
    intake: "Rolling. Positions are advertised year-round, often with start dates in spring or autumn.",
    visa: "National visa for research or a job-seeker visa, then a residence permit. EU Blue Card does not apply to doctoral posts, check the university's international office.",
    find: [{ label: "DAAD PhD database", href: "https://www.daad.de" }, { label: "EURAXESS jobs", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["DAAD", "Max Planck / IMPRS schools", "Helmholtz graduate schools"],
    tips: ["Contact the professor first; they decide most hires.", "Apply to advertised posts and also send spontaneous inquiries.", "Check whether the post is full or part time."]
  },
  switzerland: {
    overview: "ETH Zurich, EPFL and Zurich are known for strong AI groups. PhD students are employed with high salaries.",
    phd: "Typically 4 years, employment contract.",
    pay: "Among the highest in the world; roughly CHF 4,500–6,000 per month before deductions.",
    language: "English in research. Local language useful in daily life.",
    intake: "Rolling with larger rounds in winter and spring; some programs have fixed deadlines (for example EPFL doctoral programs).",
    visa: "Work and residence permit arranged with the university after the contract.",
    find: [{ label: "ETH Zurich jobs", href: "https://ethz.ch" }, { label: "EPFL doctoral programs", href: "https://epfl.ch" }],
    scholarships: ["ETH Excellence scholarships (master's)", "Swiss Government Excellence Scholarships"],
    tips: ["Very competitive: strong publications and referees help.", "Cost of living is high; check the net salary.", "Email professors before applying."]
  },
  sweden: {
    overview: "PhD students are employed for four years by the university. Posts are advertised publicly.",
    phd: "4 years of full-time employment (sometimes 5 with teaching).",
    pay: "Roughly SEK 30,000–38,000 per month before tax, rising each year.",
    language: "English is widely accepted.",
    intake: "Rolling; each post has its own deadline.",
    visa: "Residence permit for doctoral students after you receive the offer.",
    find: [{ label: "Swedish university job portals", href: "https://www.academicpositions.com" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Swedish Institute (master's)", "WASP program for AI"],
    tips: ["No application fee for PhD posts.", "You need the master's level in the field.", "Follow the exact ad requirements."]
  },
  netherlands: {
    overview: "PhD candidates are employees with a standard contract. Many research groups in AI are in Amsterdam, Delft, Eindhoven and Utrecht.",
    phd: "4 years with a fixed salary scale.",
    pay: "Salary scale rising from about €2,900 to €3,700 per month before tax.",
    language: "English for research. Dutch not required.",
    intake: "Rolling.",
    visa: "Highly skilled migrant or research permit arranged by the university.",
    find: [{ label: "AcademicTransfer", href: "https://www.academictransfer.com" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Holland Scholarship (master's)", "ELLIS PhD program partners"],
    tips: ["Applications are made to a specific advertised project.", "Direct, concise cover letters work well."]
  },
  denmark: {
    overview: "PhD fellows are paid employees at universities such as Copenhagen, DTU and Aarhus.",
    phd: "3 years after a 5+3 or 3+2 structure; some start with a 2-year master's integrated path.",
    pay: "Roughly DKK 30,000–38,000 per month before tax.",
    language: "English accepted.",
    intake: "Posts advertised with fixed deadlines, many in spring and autumn.",
    visa: "Researcher or employment permit.",
    find: [{ label: "Danish university job pages", href: "https://www.academicpositions.com" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Danish government scholarships for non-EU master's programs"],
    tips: ["Fit with the project description matters a lot.", "Read the ad's required documents carefully."]
  },
  norway: {
    overview: "Doctoral research fellows are state-employed with full benefits.",
    phd: "3–4 years.",
    pay: "Roughly NOK 530,000–600,000 per year before tax.",
    language: "English accepted.",
    intake: "Posts have their own deadlines.",
    visa: "Residence permit for skilled workers or researchers.",
    find: [{ label: "Jobbnorge", href: "https://www.jobbnorge.no" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Quota scheme (limited)"],
    tips: ["Follow the ad's formal rules exactly.", "A master's degree is required."]
  },
  finland: {
    overview: "Doctoral researcher positions at Aalto, Helsinki and others are employment contracts.",
    phd: "4 years.",
    pay: "Roughly €2,700–3,300 per month.",
    language: "English accepted.",
    intake: "Rolling or in calls.",
    visa: "Residence permit for work or research.",
    find: [{ label: "University job pages", href: "https://www.academicpositions.com" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Finnish Government scholarships (limited)"],
    tips: ["Check doctoral program calls in winter.", "Contact the professor with your research idea."]
  },
  belgium: {
    overview: "KU Leuven and Ghent offer salaried PhD positions and scholarships.",
    phd: "4 years.",
    pay: "Roughly €2,500–3,000 per month net-equivalent.",
    language: "English in research groups.",
    intake: "Rolling plus fellowship calls.",
    visa: "Researcher permit.",
    find: [{ label: "KU Leuven jobs", href: "https://www.kuleuven.be" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["FWO fellowships", "VLIR-UOS (for specific countries)"],
    tips: ["Fellowships need a professor to support your application."]
  },
  austria: {
    overview: "TU Wien and ISTA offer employed PhD positions.",
    phd: "3–4 years.",
    pay: "Roughly €2,000–3,000 per month depending on institution.",
    language: "English for research.",
    intake: "Rolling; ISTA has fixed deadlines (around the turn of the year).",
    visa: "Red-White-Red Card or researcher permit.",
    find: [{ label: "ISTA graduate school", href: "https://ista.ac.at" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["OeAD scholarships"],
    tips: ["ISTA is highly selective: strong research profile needed."]
  },
  france: {
    overview: "Doctoral contracts fund PhD students at universities and Inria.",
    phd: "3 years.",
    pay: "Roughly €2,100 gross monthly minimum, with possible additions.",
    language: "English accepted in many labs. French helps daily life.",
    intake: "Doctoral school calls in spring and early summer, plus advertised positions.",
    visa: "Talent passport or researcher visa.",
    find: [{ label: "Campus France", href: "https://www.campusfrance.org/en" }, { label: "ABG jobs", href: "https://www.abg.asso.fr" }],
    scholarships: ["Eiffel Excellence Scholarship (master's / PhD)", "ENS and Paris-Saclay programs"],
    tips: ["Find a supervisor first; the doctoral school needs their agreement."]
  },
  italy: {
    overview: "Universities fund PhD students with scholarships through yearly competitive calls.",
    phd: "3 years.",
    pay: "Roughly €1,200–1,500 per month net.",
    language: "English accepted in many programs.",
    intake: "Annual calls, often summer for autumn start.",
    visa: "Student or research visa.",
    find: [{ label: "University call pages", href: "https://www.universitaly.it" }],
    scholarships: ["Government PhD scholarships", "Specific project grants"],
    tips: ["Read each call: some have fixed language and document rules."]
  },
  spain: {
    overview: "National contracts and university programs fund PhD candidates.",
    phd: "3–4 years.",
    pay: "Contracts around €1,200–1,800 net per month.",
    language: "English accepted in some programs.",
    intake: "Annual calls with deadlines at different times.",
    visa: "Student or researcher authorisation.",
    find: [{ label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["FPI", "FPU", "regional programs"],
    tips: ["Many calls favour candidates with a supervisor already in place."]
  },
  "united-kingdom": {
    overview: "PhD funding comes via studentships, centres for doctoral training and scholarships. Competition is high.",
    phd: "3–4 years.",
    pay: "Tax-free stipend roughly £18,000–22,000 per year plus fees.",
    language: "English test often required.",
    intake: "Main deadlines in December–January for autumn entry.",
    visa: "Student visa (Graduate route after studies).",
    find: [{ label: "FindAPhD", href: "https://www.findaphd.com" }, { label: "jobs.ac.uk", href: "https://www.jobs.ac.uk" }],
    scholarships: ["Chevening (master's)", "Commonwealth Scholarships", "CDT studentships"],
    tips: ["International applicants may be limited in some UK studentships. Read eligibility."]
  },
  ireland: {
    overview: "Funded PhD posts at Trinity, UCD and others, often via research centres.",
    phd: "4 years.",
    pay: "Stipend around €20,000–25,000 per year plus fees.",
    language: "English.",
    intake: "Rolling and project-based.",
    visa: "Study visa.",
    find: [{ label: "Research.ie / IRC", href: "https://research.ie" }, { label: "EURAXESS", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["Research Ireland programs", "Centre-funded posts"],
    tips: ["Check whether the post covers international fee level."]
  },
  "united-states": {
    overview: "Most CS PhD students are funded through research or teaching assistantships with a tuition waiver.",
    phd: "5–6 years, including coursework and qualifying exams.",
    pay: "Roughly $30,000–$50,000 per year plus tuition and often health insurance.",
    language: "TOEFL or IELTS usually required. GRE optional or dropped at many places.",
    intake: "Applications in autumn, deadlines mostly December for autumn start.",
    visa: "F-1 student visa with I-20.",
    find: [{ label: "CS Rankings (find faculty)", href: "https://csrankings.org" }, { label: "Department admissions pages", href: "https://www.usnews.com" }],
    scholarships: ["Fulbright (foreign student program)", "University fellowships"],
    tips: ["Admission is by committee; contacting professors helps but is not always required.", "Apply to 8–12 programs across tiers.", "Ask for application fee waivers."]
  },
  canada: {
    overview: "PhD students receive funding packages from the department and supervisor.",
    phd: "4–5 years.",
    pay: "Roughly CAD 20,000–35,000 per year, combined from several sources.",
    language: "English tests; French for some Quebec programs.",
    intake: "Deadlines typically December–January for autumn.",
    visa: "Study permit.",
    find: [{ label: "Department pages", href: "https://www.universitystudy.ca" }],
    scholarships: ["Vanier CGS", "Provincial scholarships"],
    tips: ["Master's by research with a supervisor is common and often funded.", "Email supervisors early: they often must agree before admission."]
  },
  japan: {
    overview: "MEXT scholarships fund study at national universities. Graduate labs also fund students directly.",
    phd: "3 years doctorate after master's.",
    pay: "MEXT allowance around ¥145,000–¥148,000 per month plus fees waived.",
    language: "English programs exist; Japanese helps.",
    intake: "Two main routes: embassy and university recommendation, with deadlines in spring.",
    visa: "Student visa through Certificate of Eligibility.",
    find: [{ label: "MEXT", href: "https://www.mext.go.jp/en" }, { label: "JASSO study in Japan", href: "https://www.studyinjapan.go.jp/en" }],
    scholarships: ["MEXT Embassy and University Recommendation", "JASSO programs"],
    tips: ["Contact a professor before applying for the university route.", "Prepare a research plan."]
  },
  "south-korea": {
    overview: "GKS and university scholarships fund graduate study; KAIST and SNU also support students via labs.",
    phd: "3–4 years after master's.",
    pay: "Allowance roughly KRW 900,000–1,000,000 per month plus tuition for GKS.",
    language: "English programs available; Korean language year may apply for GKS.",
    intake: "GKS call in early year; KAIST spring and autumn rounds.",
    visa: "D-2 student visa.",
    find: [{ label: "Study in Korea", href: "https://www.studyinkorea.go.kr" }, { label: "KAIST admissions", href: "https://www.kaist.ac.kr" }],
    scholarships: ["GKS", "KAIST scholarships"],
    tips: ["Check the professor's lab openings for direct funding."]
  },
  china: {
    overview: "CSC and university scholarships cover tuition and living for international graduate students.",
    phd: "3–4 years.",
    pay: "Roughly CNY 3,000–3,500 per month plus accommodation or allowance (type A/B vary).",
    language: "English-taught programs exist.",
    intake: "Applications usually winter to spring.",
    visa: "X1 student visa.",
    find: [{ label: "CSC", href: "https://www.csc.edu.cn" }, { label: "Study in China", href: "https://www.campuschina.org" }],
    scholarships: ["CSC", "Tsinghua / Peking scholarships"],
    tips: ["A pre-admission letter from a supervisor strengthens CSC applications."]
  },
  singapore: {
    overview: "NUS, NTU and A*STAR run research scholarships.",
    phd: "4 years.",
    pay: "Roughly SGD 2,700–3,500 per month plus tuition waiver.",
    language: "English.",
    intake: "Two rounds, around November and May.",
    visa: "Student pass.",
    find: [{ label: "NUS Graduate", href: "https://nus.edu.sg" }, { label: "NTU Graduate", href: "https://ntu.edu.sg" }],
    scholarships: ["NUS Research Scholarship", "NTU Research Scholarship", "A*STAR ARAP/SINGA"],
    tips: ["Strong research record and a clear proposal matter."]
  },
  "hong-kong": {
    overview: "HKPFS and university studentships fund research postgraduate students.",
    phd: "3–4 years.",
    pay: "Roughly HKD 20,000+ per month under HKPFS plus conference and travel allowance.",
    language: "English.",
    intake: "HKPFS deadline around December 1.",
    visa: "Student visa.",
    find: [{ label: "HKPFS", href: "https://cerg1.ugc.edu.hk/hkpfs" }],
    scholarships: ["Hong Kong PhD Fellowship Scheme"],
    tips: ["Choose a supervisor first; you apply to a university and name your supervisor."]
  },
  taiwan: {
    overview: "Government scholarships and university programs fund international students.",
    phd: "3–4 years.",
    pay: "Monthly allowance around NT$30,000 for PhD scholarships.",
    language: "English programs exist.",
    intake: "Applications usually February–March.",
    visa: "Resident visa.",
    find: [{ label: "Study in Taiwan", href: "https://www.studyintaiwan.org" }],
    scholarships: ["Taiwan Scholarship", "MOE Taiwan Scholarship"],
    tips: ["Check the university's English-taught programs."]
  },
  australia: {
    overview: "Research Training Program places and Australia Awards fund research degrees.",
    phd: "3.5–4 years.",
    pay: "Tax-free stipend roughly AUD 32,000–38,000 per year plus fees waiver.",
    language: "IELTS or TOEFL.",
    intake: "Rounds across the year; major rounds around the mid and end of year.",
    visa: "Student visa (subclass 500).",
    find: [{ label: "Study Australia", href: "https://www.studyaustralia.gov.au" }],
    scholarships: ["RTP", "Australia Awards"],
    tips: ["Obtain supervisor agreement before applying.", "Include a short research proposal."]
  },
  "new-zealand": {
    overview: "Universities offer doctoral scholarships, and New Zealand Scholarships support students from selected countries.",
    phd: "3–4 years.",
    pay: "Roughly NZD 30,000+ per year plus fees.",
    language: "English tests.",
    intake: "Rolling; scholarship rounds vary.",
    visa: "Student visa.",
    find: [{ label: "Study with NZ", href: "https://www.studywithnewzealand.govt.nz" }],
    scholarships: ["University of Auckland Doctoral Scholarship", "NZ Scholarships"],
    tips: ["Apply to scholarship and admission together."]
  },
  turkey: {
    overview: "Türkiye Scholarships cover tuition, housing and a stipend.",
    phd: "3–4 years.",
    pay: "Monthly stipend roughly TRY 8,000+ (changes often) plus housing, insurance.",
    language: "English or Turkish programs.",
    intake: "Applications January–February.",
    visa: "Student visa arranged through the program.",
    find: [{ label: "Türkiye Scholarships", href: "https://turkiyeburslari.gov.tr" }],
    scholarships: ["Türkiye Scholarships"],
    tips: ["Choose up to the allowed number of programs carefully."]
  },
  "saudi-arabia": {
    overview: "KAUST provides full fellowships for MS and PhD students.",
    phd: "4–5 years.",
    pay: "Stipend, tuition, housing and medical covered.",
    language: "English.",
    intake: "Application deadline around December–January.",
    visa: "Arranged by KAUST.",
    find: [{ label: "KAUST admissions", href: "https://www.kaust.edu.sa" }],
    scholarships: ["KAUST Fellowship"],
    tips: ["Research alignment with KAUST faculty is important."]
  },
  hungary: {
    overview: "Stipendium Hungaricum covers tuition and living costs for selected countries.",
    phd: "3–4 years.",
    pay: "Monthly stipend roughly HUF 140,000+ plus accommodation allowance.",
    language: "English programs.",
    intake: "Applications January–February.",
    visa: "Student residence permit.",
    find: [{ label: "Stipendium Hungaricum", href: "https://stipendiumhungaricum.hu" }],
    scholarships: ["Stipendium Hungaricum"],
    tips: ["Eligible only for partner countries: check your country list."]
  }
};
