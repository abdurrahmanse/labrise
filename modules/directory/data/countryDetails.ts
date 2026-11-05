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
    pay: "Salaried posts on the TV-L E13 scale, often 50–100% positions. Gross pay is roughly €2,000–€4,300 per month depending on the percentage. DAAD scholarships use fixed monthly rates.",
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
    phd: "Typically 3 years after a master's degree.",
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
    pay: "Roughly €2,500–3,000 per month.",
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
    visa: "Residence permit for students or researchers, arranged with the university.",
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
    find: [{ label: "CS Rankings (find faculty)", href: "https://csrankings.org" }],
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
    overview: "The Chinese Government Scholarship (CSC) and the CAS-ANSO Scholarship fund international Master's and PhD students, and many universities add their own awards.",
    phd: "3–4 years.",
    pay: "CSC and ANSO awards cover tuition, accommodation or an allowance, insurance and a monthly stipend. Amounts change with each call, so check the current one.",
    language: "English-taught programs exist.",
    intake: "Applications usually open from winter to spring.",
    visa: "X1 student visa.",
    find: [{ label: "CSC", href: "https://www.csc.edu.cn" }, { label: "CAS-ANSO Scholarship", href: "https://www.anso.org.cn" }, { label: "Study in China", href: "https://www.campuschina.org" }],
    scholarships: ["Chinese Government Scholarship (CSC)", "CAS-ANSO Scholarship"],
    tips: ["Type B (through a university) needs admission or pre-admission, so contact a supervisor early.", "Read the age limit and the nationality rule of each call."]
  },
  singapore: {
    overview: "NUS, NTU and A*STAR run research scholarships.",
    phd: "4 years.",
    pay: "Roughly SGD 2,700–3,500 per month plus tuition waiver.",
    language: "English.",
    intake: "Two application rounds a year. Check each university's graduate admissions page.",
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
    pay: "Monthly allowance, roughly NT$15,000 (master's) to NT$20,000 (PhD). Check the current rate.",
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
    pay: "Monthly stipend (set each year), plus housing, tuition and health insurance.",
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
    pay: "Monthly stipend (about HUF 140,000 for doctoral students), plus accommodation support.",
    language: "English programs.",
    intake: "Applications January–February.",
    visa: "Student residence permit.",
    find: [{ label: "Stipendium Hungaricum", href: "https://stipendiumhungaricum.hu" }],
    scholarships: ["Stipendium Hungaricum"],
    tips: ["Eligible only for partner countries: check your country list."]
  },
  scotland: {
    overview: "Scotland's universities (Edinburgh, Glasgow, St Andrews, Heriot-Watt and others) are part of the UK system but run their own funding and degree structure. UK-wide awards such as Chevening and Commonwealth can be used here.",
    phd: "3–4 years, often with a 4-year first degree structure behind it. Edinburgh and Glasgow have strong AI and data groups.",
    pay: "Funded studentships come with a tax-free stipend plus fees. Some awards, such as the Edinburgh Global Research Scholarships, cover only the fee difference, so check what each one pays.",
    language: "English test usually required (IELTS or equivalent).",
    intake: "Main deadlines are December–January for autumn entry; some awards have their own dates.",
    visa: "Student visa, with the Graduate route after studies.",
    find: [{ label: "Edinburgh funding", href: "https://www.ed.ac.uk/student-funding/postgraduate" }, { label: "FindAPhD", href: "https://www.findaphd.com" }],
    scholarships: ["Chevening (master's)", "Commonwealth Scholarships", "Edinburgh Global Research Scholarships", "James Watt Scholarships (Heriot-Watt)", "St Leonard's Scholarships (St Andrews)"],
    tips: ["Check whether an award pays only fees or fees plus stipend.", "Several UK awards limit places for international applicants: read the eligibility."]
  },
  "czech-republic": {
    overview: "Public universities in Prague, Brno and Olomouc offer doctoral programmes with a stipend. Programmes taught in Czech are tuition free; English programmes usually charge fees.",
    phd: "3–4 years in a doctoral programme under a supervisor.",
    pay: "Doctoral stipend set by the university and faculty; the level varies, so ask the department. The Czech Government offers scholarships for students from developing countries.",
    language: "English for English-taught programmes; Czech helps in daily life.",
    intake: "Entrance exams or interviews, usually in spring; check each faculty.",
    visa: "Long-term visa for studies and a residence permit.",
    find: [{ label: "Study in the Czech Republic", href: "https://www.studyin.cz" }, { label: "DZS scholarships", href: "https://www.dzs.cz/en" }],
    scholarships: ["Czech Government Scholarships for Developing Countries"],
    tips: ["Contact a supervisor before you apply.", "Check whether your programme is taught in English and whether tuition applies."]
  },
  poland: {
    overview: "Doctoral schools at Warsaw, Kraków, Poznań and Wrocław give a monthly stipend to doctoral candidates. NAWA runs scholarships for international students and researchers.",
    phd: "4 years in a doctoral school with a main supervisor.",
    pay: "Monthly doctoral stipend or scholarship; amounts depend on the school and funding, so confirm in the recruitment call.",
    language: "English for most international doctoral schools.",
    intake: "Recruitment usually in spring and summer for an October start.",
    visa: "National visa for studies, then a residence permit.",
    find: [{ label: "Study in Poland", href: "https://studyinpoland.pl" }, { label: "NAWA programmes", href: "https://nawa.gov.pl/en" }],
    scholarships: ["Banach Scholarship Programme", "Ulam NAWA Programme", "NCN Preludium grants"],
    tips: ["Read each doctoral school's recruitment rules.", "Contact a possible supervisor early."]
  },
  portugal: {
    overview: "Portugal has strong research at Lisbon, Porto, Coimbra, NOVA and Minho. FCT funds doctoral fellowships through an annual call.",
    phd: "3–4 years, often in a doctoral programme with a thesis supervisor.",
    pay: "FCT doctoral fellowships pay a monthly amount and cover tuition. Details change each call.",
    language: "English in research groups; Portuguese helps in daily life.",
    intake: "The FCT call runs once a year; many programmes have their own admission rounds.",
    visa: "Student or research visa, then a residence permit.",
    find: [{ label: "FCT", href: "https://www.fct.pt/en" }, { label: "EURAXESS Portugal", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["FCT Doctoral Fellowships"],
    tips: ["Find a supervisor who will back your FCT application.", "Check whether your degree is recognised for the doctoral programme."]
  },
  estonia: {
    overview: "Estonia is a small digital-first country with active research at Tartu and TalTech. Doctoral students are paid a stipend or employed through projects.",
    phd: "4 years in a doctoral school.",
    pay: "Doctoral stipend or employment; levels vary, so check the position. Dora Plus supports doctoral mobility.",
    language: "English for research programmes.",
    intake: "Tartu and TalTech announce positions through the year; many intakes are autumn.",
    visa: "Student residence permit or work permit if employed.",
    find: [{ label: "Study in Estonia", href: "https://studyinestonia.ee" }, { label: "Archimedes Foundation", href: "https://www.archimedes.ee/en" }],
    scholarships: ["Estonian Research Council funding", "Dora Plus mobility scholarships"],
    tips: ["Contact the research group before applying.", "Look at project-funded positions as well as doctoral schools."]
  },
  luxembourg: {
    overview: "The University of Luxembourg hires doctoral candidates on employment contracts, many through FNR AFR grants. It is small and well funded, with strong computer science and security groups.",
    phd: "3–4 years on a salaried contract.",
    pay: "Among the higher doctoral salaries in Europe because it is a contract, not a stipend.",
    language: "English in research; French or German help in daily life.",
    intake: "Rolling per advertised post.",
    visa: "Authorisation of stay for a researcher or salaried worker.",
    find: [{ label: "University of Luxembourg PhD", href: "https://www.uni.lu/en" }, { label: "FNR", href: "https://www.fnr.lu" }],
    scholarships: ["FNR AFR PhD grants"],
    tips: ["Posts are tied to a project: read the project description carefully.", "Contact the professor with a short, specific email."]
  },
  iceland: {
    overview: "Iceland's universities (Iceland and Reykjavik) hire doctoral candidates mainly through funded projects. Research groups are small and international.",
    phd: "3–4 years.",
    pay: "Salary or grant tied to the project. The cost of living is high.",
    language: "English in research groups.",
    intake: "Per advertised post.",
    visa: "Residence permit based on study or employment; Nordic and EEA rules differ.",
    find: [{ label: "University of Iceland", href: "https://english.hi.is" }, { label: "Reykjavik University", href: "https://en.ru.is" }],
    scholarships: ["Icelandic Research Fund doctoral student grants"],
    tips: ["Contact a professor about project funding.", "Plan for living costs before you accept."]
  },
  slovenia: {
    overview: "Slovenia is small but research-active: the Universities of Ljubljana, Maribor, Primorska and Nova Gorica, and the Jožef Stefan Institute. Doctoral candidates are often funded through ARIS young researcher posts or project funding.",
    phd: "3–4 years in a doctoral programme under a mentor.",
    pay: "Funded doctoral posts pay a salary or stipend and cover study costs. The level depends on the call and the project, so check the call.",
    language: "English-taught doctoral and master's programmes exist at several institutions. Slovenian helps in daily life.",
    intake: "Doctoral enrolment is usually in autumn. ARIS calls and project posts have their own dates.",
    visa: "Student or researcher residence permit, arranged with the host institution.",
    find: [{ label: "ARIS (research agency)", href: "https://www.aris-rs.si/en" }, { label: "CMEPIUS scholarships", href: "https://www.cmepius.si" }, { label: "EURAXESS jobs", href: "https://euraxess.ec.europa.eu/jobs" }],
    scholarships: ["ARIS Young Researcher Programme", "Slovenian Government Scholarships (CMEPIUS)"],
    tips: ["Find a mentor first: funded posts are tied to a mentor and a project.", "Read the current call for who may apply before you spend time on an application."]
  },
  qatar: {
    overview: "Hamad Bin Khalifa University (HBKU) and Qatar University offer funded graduate programmes. Qatar's funding model is generous but tied to the university and programme.",
    phd: "3–5 years.",
    pay: "HBKU offers fully funded places with tuition, stipend and housing in many programmes. QNRF funds some graduate assistant roles.",
    language: "English.",
    intake: "Per programme; many close in winter or spring.",
    visa: "Arranged by the university once you are admitted.",
    find: [{ label: "HBKU admissions", href: "https://www.hbku.edu.qa" }, { label: "QNRF", href: "https://www.qnrf.org" }],
    scholarships: ["HBKU Graduate Scholarship", "Graduate Sponsorship Research Award (GSRA)"],
    tips: ["Check which programmes are fully funded.", "Research fit with the faculty is important."]
  },
  "united-arab-emirates": {
    overview: "MBZUAI, Khalifa University and NYU Abu Dhabi offer fully funded graduate places with strong research resources, especially in AI and engineering.",
    phd: "3–5 years.",
    pay: "Tuition waiver plus a monthly stipend; some include housing.",
    language: "English.",
    intake: "MBZUAI and Khalifa usually close in winter; check each programme.",
    visa: "Arranged by the university once you are admitted.",
    find: [{ label: "MBZUAI admissions", href: "https://mbzuai.ac.ae" }, { label: "Khalifa University", href: "https://www.ku.ac.ae" }],
    scholarships: ["MBZUAI Scholarships", "Khalifa University Graduate Scholarships"],
    tips: ["Apply early and show research or project work.", "Match your interests to a named faculty member."]
  },
  malaysia: {
    overview: "Malaysian public universities give international research students scholarships and fellowships at lower living costs than many countries.",
    phd: "3–4 years for a PhD.",
    pay: "Allowances differ by scholarship; MIS and university fellowships often cover tuition plus a monthly amount.",
    language: "English for research programmes; Malay helps in daily life.",
    intake: "Intakes in several months; scholarship calls have their own dates.",
    visa: "Student pass issued through the university.",
    find: [{ label: "Study Malaysia", href: "https://www.studymalaysia.com" }, { label: "MOHE", href: "https://www.mohe.gov.my" }],
    scholarships: ["Malaysia International Scholarship (MIS)", "MTCP Scholarships"],
    tips: ["Contact a supervisor first.", "Check which scholarships apply to your nationality."]
  },
  israel: {
    overview: "Technion, the Weizmann Institute, Tel Aviv University and the Hebrew University are research-intensive and strong in engineering and computing. Research students are usually funded through school scholarships and the supervisor's grants.",
    phd: "About 3–5 years. Research tracks end with a thesis.",
    pay: "The Technion Graduate School offers scholarships to research Master's and PhD students on merit. The Weizmann Institute's Feinberg Graduate School waives tuition and pays stipends to full-time students without outside support. Amounts change, so check each school.",
    language: "Graduate research programmes are often taught in English. Check each department.",
    intake: "Annual cycles, many in winter or spring. Check each school.",
    visa: "A student visa is arranged with the university once you are admitted.",
    find: [{ label: "Technion Graduate School", href: "https://graduate.technion.ac.il/en/" }, { label: "Weizmann Feinberg Graduate School", href: "https://www.weizmann.ac.il/feinberg/" }],
    scholarships: ["Technion Graduate School Scholarships", "Weizmann Feinberg Graduate School Stipends"],
    tips: ["Contact a supervisor before you apply and ask about funding.", "Read the school's current scholarship rules, since amounts and eligibility change."]
  },
  egypt: {
    overview: "Cairo University, the American University in Cairo, Alexandria University and the Egypt-Japan University of Science and Technology (E-JUST) offer graduate research programmes in engineering and sciences.",
    phd: "About 3–5 years.",
    pay: "E-JUST runs fully funded postgraduate scholarships, including a programme for African students with tuition, travel, accommodation, insurance and a stipend. Funding at other universities varies by programme.",
    language: "E-JUST teaches in English. Other universities mix English and Arabic.",
    intake: "E-JUST calls often close in winter. Check each university.",
    visa: "A student visa is arranged through the university and the Egyptian embassy.",
    find: [{ label: "E-JUST international scholarships", href: "https://ejust.edu.eg/international-scholarships" }],
    scholarships: ["E-JUST TICAD8 Postgraduate Scholarship"],
    tips: ["Read the nationality rules of each scholarship carefully.", "Ask a professor whether funding is attached to the project."]
  },
  jordan: {
    overview: "The University of Jordan, Jordan University of Science and Technology, Princess Sumaya University for Technology and the German Jordanian University offer graduate engineering programmes.",
    phd: "About 3–4 years.",
    pay: "Funding for international students varies by university, usually through research or teaching assistantships. Confirm the terms in writing before you accept.",
    language: "Engineering programmes are often taught in English. Check each department.",
    intake: "Usually autumn and spring intakes.",
    visa: "A student residency permit is arranged with the university.",
    find: [{ label: "Jordan University of Science and Technology", href: "https://www.just.edu.jo/" }],
    scholarships: [],
    tips: ["Ask about funding directly with the department.", "Check whether the degree is recognised in the country where you plan to work."]
  },
  lebanon: {
    overview: "The American University of Beirut (AUB) and the Lebanese American University have research-active engineering faculties.",
    phd: "About 3–5 years.",
    pay: "AUB's engineering faculty funds some PhD students through the dean's office programmes. Terms change, so confirm the current rules with the faculty.",
    language: "English.",
    intake: "Usually autumn and spring.",
    visa: "A student residency is arranged with the university.",
    find: [{ label: "AUB graduate admissions", href: "https://www.aub.edu.lb/" }],
    scholarships: ["AUB Engineering PhD Funding"],
    tips: ["Ask the faculty which funding applies to international PhD students.", "Check current travel advice for Lebanon before you plan."]
  },
  kuwait: {
    overview: "Kuwait University and the Gulf University for Science and Technology offer graduate programmes in engineering and sciences.",
    phd: "About 3–4 years.",
    pay: "Funding for international students is limited and many scholarships are for Kuwaiti nationals. Check each university.",
    language: "Engineering programmes are mostly taught in English.",
    intake: "Usually autumn and spring.",
    visa: "A student residency is arranged with the university.",
    find: [{ label: "Kuwait University", href: "https://www.ku.edu.kw/" }],
    scholarships: [],
    tips: ["Confirm funding before you apply.", "Ask whether the programme accepts international research students."]
  },
  oman: {
    overview: "Sultan Qaboos University is the main research university, with engineering and science graduate programmes.",
    phd: "About 3–4 years.",
    pay: "Government scholarships mainly serve Omani and Gulf nationals and students from partner countries. Confirm what applies to you.",
    language: "Engineering programmes are mostly taught in English.",
    intake: "Usually autumn and spring.",
    visa: "A student residency is arranged with the university.",
    find: [{ label: "Sultan Qaboos University", href: "https://www.squ.edu.om/" }],
    scholarships: [],
    tips: ["Check eligibility by nationality.", "Ask the department whether research funding exists for international students."]
  },
  bahrain: {
    overview: "The University of Bahrain and the Arabian Gulf University offer graduate programmes, mostly in the Gulf region.",
    phd: "About 3–4 years.",
    pay: "Funding for international research students varies by programme. Confirm the terms with the university.",
    language: "English in most engineering programmes.",
    intake: "Usually autumn and spring.",
    visa: "A student residency is arranged with the university.",
    find: [{ label: "University of Bahrain", href: "https://www.uob.edu.bh/" }],
    scholarships: [],
    tips: ["Ask about research assistantships directly.", "Compare with funded routes in neighbouring countries."]
  }

};
