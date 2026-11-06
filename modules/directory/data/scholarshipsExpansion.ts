import type { ScholarshipEntry } from "../types";

// A second wave of fully or largely funded programmes, with extra weight on Europe and on China, Japan and Korea.
// Amounts and deadlines change every cycle. Each entry links to the official page.
type Level = ScholarshipEntry["level"];
type Region = ScholarshipEntry["region"];

const s = (name: string, host: string, region: Region, level: Level, covers: string, eligibility: string, deadline: string, site: string): ScholarshipEntry =>
  ({ name, host, region, level, covers, eligibility, deadline, site });

const E: Region = "Europe";
const A: Region = "Asia";

export const expansionScholarships: ScholarshipEntry[] = [
  // Germany
  s("Heinrich Böll Foundation Scholarships", "Germany", E, "Master's & PhD", "Monthly stipend, health insurance and allowances", "International students from eligible countries admitted to a German university. Social engagement counts.", "Around March and September", "https://www.boell.de/en/scholarships"),
  s("Friedrich Ebert Foundation Scholarships", "Germany", E, "Master's & PhD", "Monthly stipend and allowances", "International students enrolled in Germany, as set by the programme. Social and political commitment counts.", "Per programme call", "https://www.fes.de/"),
  s("Konrad Adenauer Foundation Scholarships", "Germany", E, "Master's & PhD", "Monthly stipend and allowances", "Graduate students and doctoral candidates in Germany; international programmes have their own rules.", "Per programme call", "https://www.kas.de/en/web/begabtenfoerderung-und-kultur"),
  s("Hanns Seidel Foundation Scholarships", "Germany", E, "Master's & PhD", "Monthly stipend and allowances", "International graduate and doctoral students at German universities, per programme rules.", "Per programme call", "https://www.hss.de/"),
  s("DFG Research Training Groups", "Germany", E, "PhD", "Salaried doctoral post in a funded research training group", "Apply to the advertised post of the group. Master's degree in the field.", "Per advertised post", "https://www.dfg.de/en"),
  s("International Max Planck Research Schools", "Germany", E, "PhD", "Funded doctoral position at a Max Planck institute with a university partner", "Master's degree in the field. Apply to the school's own call.", "Around the autumn and winter", "https://www.mpg.de/en"),

  // France
  s("Paris-Saclay Master's Scholarships", "France", E, "Master's", "Monthly allowance for the master's period", "International students admitted to a Paris-Saclay master's programme.", "Around January to March", "https://www.universite-paris-saclay.fr/en"),
  s("École Polytechnique Excellence Scholarships", "France", E, "Master's & PhD", "Tuition waiver or allowance, depending on the programme", "International applicants admitted to the programme.", "Around winter to spring", "https://www.polytechnique.edu/en"),
  s("Émile Boutmy Scholarship", "France", E, "Master's", "Partial or full tuition and a living allowance", "Non-EU students admitted to Sciences Po.", "With the admission deadline", "https://www.sciencespo.fr/en"),
  s("Inria doctoral contracts", "France", E, "PhD", "Salaried doctoral contract at an Inria research team", "Master's degree in computing or mathematics. Apply to advertised posts.", "Per advertised post", "https://www.inria.fr/en"),

  // Italy
  s("Invest Your Talent in Italy (IYT)", "Italy", E, "Master's & PhD", "Monthly allowance, health insurance and support for study", "Citizens of partner countries admitted to a participating Italian university.", "Around spring", "https://studyinitaly.esteri.it"),
  s("IIT PhD scholarships", "Italy", E, "PhD", "Funded PhD scholarship with an allowance", "Master's degree in the field. Apply to advertised calls.", "Around spring and autumn", "https://iit.it"),
  s("Unibo Action 2 Scholarships", "Italy", E, "Master's & PhD", "Partial or full support for tuition and living costs", "International students admitted to a Bologna degree programme.", "Around winter to spring", "https://www.unibo.it/en"),
  s("Politecnico di Milano Scholarships", "Italy", E, "Master's", "Tuition waiver or support for living costs", "International master's applicants admitted to Politecnico di Milano.", "Around winter", "https://www.polimi.it/en"),
  s("Scuola Normale Superiore PhD scholarships", "Italy", E, "PhD", "Funded PhD scholarship with an allowance and housing support", "Degree in the field. Admission by examination and interview.", "Around spring and summer", "https://www.sns.it/en"),

  // Spain
  s("FPI predoctoral contracts", "Spain", E, "PhD", "Predoctoral contract with salary", "Master's degree. You apply with a research group that holds an AEI project.", "Per call", "https://www.aei.gob.es/en"),
  s("INPhINIT doctoral fellowships", "Spain", E, "PhD", "Employment contract for three years with research and mobility support", "Master's degree or equivalent. Open to all nationalities.", "Around January to February", "https://fundacionlacaixa.org/en"),

  // United Kingdom
  s("Cambridge Trust Scholarships", "United Kingdom", E, "Master's & PhD", "Fees and maintenance, full or partial", "International students admitted to Cambridge. Apply by the application deadline.", "Around December to January", "https://www.cambridgetrust.org"),
  s("GREAT Scholarships", "United Kingdom", E, "Master's", "Tuition support, typically £10,000 or more, set by the university", "Citizens of listed countries with an offer from a participating UK university.", "Per university, often spring", "https://study-uk.britishcouncil.org/scholarships-funding"),
  s("Imperial President's PhD Scholarships", "United Kingdom", E, "PhD", "Fees, stipend and research costs", "Outstanding applicants to an Imperial PhD, nominated by the department.", "Around December to January", "https://www.imperial.ac.uk"),
  s("Warwick Chancellor's International Scholarships", "United Kingdom", E, "PhD", "Fees and stipend for the PhD", "International applicants to a Warwick PhD, nominated by the department.", "Around December to January", "https://warwick.ac.uk"),
  s("Manchester Equity and Merit Scholarship", "United Kingdom", E, "Master's & PhD", "Fees and stipend for the full programme", "International applicants to Manchester, considered during the application.", "Around January to February", "https://www.manchester.ac.uk"),

  // Netherlands
  s("Holland Scholarship", "Netherlands", E, "Master's", "A one-time grant of €5,000 in the first year", "Non-EEA students admitted to a participating Dutch programme. A partial award.", "Around February to May, by university", "https://www.nuffic.nl"),
  s("Utrecht Excellence Scholarships", "Netherlands", E, "Master's", "Tuition and a contribution to living costs", "Non-EEA students with top results, admitted to Utrecht.", "Around January to February", "https://www.uu.nl/en"),
  s("Amsterdam Excellence Scholarship (AES)", "Netherlands", E, "Master's", "€25,000 towards tuition and living costs", "Non-EEA students with top results, admitted to the University of Amsterdam.", "Around February", "https://www.uva.nl/en"),
  s("Leiden University Excellence Scholarship (LExS)", "Netherlands", E, "Master's", "Part of tuition or a fixed amount towards study costs", "Non-EU students with top results, admitted to Leiden.", "Around January to March", "https://www.universiteitleiden.nl/en"),
  s("TU Delft Excellence Scholarship", "Netherlands", E, "Master's", "Tuition and a contribution to living costs", "Non-EU students with top results, admitted to a TU Delft master's.", "Around December to January", "https://www.tudelft.nl/en"),
  s("Wageningen University Fellowship Programme (WUFP)", "Netherlands", E, "Master's", "Tuition, travel and living costs", "Mid-career applicants from eligible countries admitted to a master's at Wageningen.", "Around February", "https://www.wur.nl/en"),

  // Nordics
  s("Novo Nordisk Foundation PhD fellowships", "Denmark", E, "PhD", "Salaried doctoral post in life science or health research", "Apply to the hosting university's advertised post.", "Per advertised post", "https://novonordiskfonden.dk/en"),
  s("Norwegian Quota Scheme", "Norway", E, "Master's & PhD", "Tuition-free study and a stipend for selected students from developing countries", "Citizens of eligible countries admitted to a participating Norwegian university.", "Around December to January", "https://www.hkdir.no/en"),
  s("Finnish Government Scholarship Pool", "Finland", E, "PhD & research", "A monthly grant for a research stay of up to 12 months", "Researchers and doctoral candidates with an invitation from a Finnish host.", "Around spring and autumn", "https://www.oph.fi/en"),
  s("Aalto University Scholarships", "Finland", E, "Master's", "Tuition support and a living allowance", "Non-EU master's applicants admitted to Aalto.", "Around January", "https://www.aalto.fi/en"),
  s("Lund University Global Scholarship", "Sweden", E, "Master's", "Partial or full tuition", "Non-EU students admitted to a Lund master's programme.", "Around January", "https://www.lunduniversity.lu.se"),
  s("Chalmers IPOET Scholarship", "Sweden", E, "Master's", "Tuition support", "Non-EU students admitted to a Chalmers master's.", "Around January", "https://www.chalmers.se/en"),

  // Belgium, Austria, Switzerland, Ireland
  s("VLIR-UOS Training and Master Scholarships", "Belgium", E, "Master's & PhD", "Tuition, travel, living costs and insurance", "Citizens of eligible developing countries admitted to participating Flemish programmes.", "Around November to February", "https://www.vliruos.be/"),
  s("ARES scholarships", "Belgium", E, "Master's & PhD", "Allowance, travel and tuition support", "Citizens of eligible partner countries, in French-speaking Belgium.", "Per call", "https://www.ares-ac.be/en"),
  s("FWO PhD Fellowships", "Belgium", E, "PhD", "Fellowship with salary and research budget for four years", "Master's degree and a Flemish supervisor. Open to international applicants.", "Around spring", "https://www.fwo.be/en"),
  s("Ernst Mach Grant", "Austria", E, "PhD & research", "Monthly grant, insurance and support", "Foreign students, graduates and researchers with a place at an Austrian institution.", "Around spring and autumn", "https://oead.at/en"),
  s("ISTA Graduate School", "Austria", E, "PhD", "Salary-level stipend and research support for 5–6 years", "Strong academic record. Apply in the yearly call.", "Around December to January", "https://ista.ac.at/en"),
  s("EPFL Excellence Fellowships", "Switzerland", E, "Master's", "A monthly grant and a tuition contribution", "International master's applicants with top results.", "Around December", "https://www.epfl.ch/education"),
  s("Government of Ireland International Education Scholarship", "Ireland", E, "Master's & PhD", "€10,000 stipend and a fee waiver for one year", "Non-EU students with admission to an Irish institution.", "Around spring", "https://hea.ie"),
  s("Hardiman PhD Scholarship", "Ireland", E, "PhD", "Fees and stipend for the PhD", "Applicants to the University of Galway. Open to international applicants.", "Around winter", "https://www.universityofgalway.ie"),

  // Central and Eastern Europe
  s("Charles University doctoral stipends", "Czech Republic", E, "PhD", "Doctoral stipend", "Doctoral applicants admitted to a Charles University programme.", "Around spring", "https://cuni.cz/UKEN-1.html"),
  s("Poland My First Choice", "Poland", E, "Master's", "Monthly stipend, tuition support and health insurance", "Non-Polish master's students admitted to a participating Polish university.", "Around spring", "https://nawa.gov.pl/en"),
  s("Gulbenkian Foundation scholarships and grants", "Portugal", E, "PhD & research", "Grants for research and study, by programme", "Eligibility depends on the call.", "Per call", "https://gulbenkian.pt/en"),
  s("Camões scholarships", "Portugal", E, "Master's & PhD", "Monthly allowance and support", "Students from eligible Portuguese-speaking countries.", "Per call", "https://www.instituto-camoes.pt/en"),
  s("CEU Doctoral Scholarships", "Hungary", E, "PhD", "Stipend, tuition and research support", "Admitted doctoral applicants to CEU.", "Around winter", "https://www.ceu.edu"),
  s("University of Luxembourg Doctoral Training Units", "Luxembourg", E, "PhD", "Salaried doctoral contract", "Master's degree in the field. Apply to advertised posts.", "Per advertised post", "https://www.uni.lu/en"),
  s("HFRI PhD Fellowships", "Greece", E, "PhD", "Doctoral fellowship for the PhD", "Master's degree and a supervisor at a Greek institution, as the call states.", "Per call", "https://www.elidek.gr/en"),
  s("IKY scholarships", "Greece", E, "Master's & PhD", "Scholarship support for study", "Eligibility depends on the call.", "Per call", "https://www.iky.gr/en"),
  s("Romanian Government Scholarships", "Romania", E, "Master's & PhD", "Tuition waiver, monthly stipend and housing support", "Non-EU citizens admitted to a Romanian university.", "Around spring", "https://www.studyinromania.gov.ro"),
  s("Bulgarian Government Scholarships", "Bulgaria", E, "Master's & PhD", "Tuition support and a monthly stipend", "Eligible foreign students, as set in the call.", "Per call", "https://www.mon.bg/en"),
  s("Croatian Government Scholarships", "Croatia", E, "Master's & PhD", "Stipend and tuition support", "Eligible students from partner countries.", "Per call", "https://www.mobilnost.hr/en"),
  s("National Scholarship Programme of the Slovak Republic", "Slovakia", E, "Master's & PhD", "Monthly stipend and support for study or research", "Foreign students and researchers with an invitation from a Slovak institution.", "Around early in the year", "https://www.scholarships.sk"),
  s("Visegrad Scholarship Programme", "Slovakia", E, "Master's & PhD", "Monthly stipend and travel support for study in a Visegrad country", "Citizens of eligible countries with an invitation from a Visegrad host.", "Around spring and autumn", "https://www.visegradfund.org"),
  s("Lithuanian State Scholarships for foreign students", "Lithuania", E, "Master's & PhD", "Monthly stipend and tuition support", "Eligible foreign students admitted to a Lithuanian institution.", "Per call", "https://smpf.lt/en"),
  s("Latvian Government Scholarships", "Latvia", E, "Master's & PhD", "Stipend and tuition support", "Eligible foreign students admitted to a Latvian institution.", "Per call", "https://www.viaa.gov.lv/en"),
  s("Serbian Government Scholarships", "Serbia", E, "Master's & PhD", "Tuition, monthly allowance and housing support", "Eligible foreign students admitted to a Serbian university.", "Around spring", "https://www.mpn.gov.rs/en"),

  // China
  s("Schwarzman Scholars", "China", A, "Master's", "Full tuition, housing, stipend, travel and insurance", "Bachelor's degree with leadership potential. One-year master's at Tsinghua.", "Around September to October", "https://www.schwarzmanscholars.org"),
  s("Yenching Academy Scholarship", "China", A, "Master's", "Tuition, accommodation and stipend", "Bachelor's degree with a strong record. Two-year master's at Peking University.", "Around December", "https://yenchingacademy.pku.edu.cn/"),
  s("Shanghai Government Scholarship", "China", A, "Master's & PhD", "Tuition, accommodation and a monthly allowance", "Non-Chinese students at participating Shanghai universities.", "Around spring", "https://www.shanghai.gov.cn/"),
  s("Zhejiang Provincial Government Scholarship", "China", A, "Master's & PhD", "Tuition, accommodation and a monthly allowance", "Non-Chinese students at participating Zhejiang universities.", "Around spring", "https://www.zjedu.gov.cn"),
  s("Jiangsu Government Scholarship (Jasmine Scholarship)", "China", A, "Master's & PhD", "Tuition, accommodation and a monthly allowance", "Non-Chinese students at participating Jiangsu universities.", "Around spring", "https://jyt.jiangsu.gov.cn"),
  s("UNESCO Great Wall Fellowships", "China", A, "PhD & research", "Stipend and research costs during a stay in China", "Researchers and teachers from UNESCO member states, nominated by their national commission.", "Around spring", "https://www.unesco.org/en/fellowships"),

  // Japan
  s("JICA Development Studies Program", "Japan", A, "Master's & PhD", "Tuition, travel, monthly allowance and insurance", "Public-sector or related professionals from partner countries.", "Per country call", "https://www.jica.go.jp/english"),
  s("Honjo Scholarship", "Japan", A, "PhD", "Monthly allowance", "International graduate students in Japan, recommended by their university.", "Around spring", "https://www.hisf.or.jp/english"),
  s("OIST Graduate School PhD Programme", "Japan", A, "PhD", "Tuition, stipend and housing support for 5 years", "Strong academic record. Apply in the yearly call.", "Around winter", "https://www.oist.jp"),
  s("Nagoya University Scholarships for International Students", "Japan", A, "Master's & PhD", "Allowance and fee support, by programme", "International students admitted to Nagoya University.", "Per programme", "https://www.nagoya-u.ac.jp/"),

  // South Korea
  s("KAIST International Student Scholarship", "South Korea", A, "Master's & PhD", "Full tuition and a monthly stipend", "International students admitted to KAIST.", "Around spring and autumn", "https://www.kaist.ac.kr/en"),
  s("UST Scholarship", "South Korea", A, "Master's & PhD", "Tuition and monthly allowance", "International students admitted to a UST programme in a research institute.", "Around spring and autumn", "https://www.ust.ac.kr/"),
  s("NRF Brain Pool Program", "South Korea", A, "PhD & research", "Research stipend during a stay in Korea", "Overseas researchers invited by a Korean host.", "Per call", "https://www.nrf.re.kr/"),

  // Taiwan, Singapore, Hong Kong, Malaysia
  s("Taiwan International Graduate Program", "Taiwan", A, "PhD", "Monthly stipend and tuition support", "International PhD applicants to TIGP programmes.", "Around winter to spring", "https://tigp.sinica.edu.tw"),
  s("Taiwan Fellowship", "Taiwan", A, "PhD & research", "Monthly stipend and research support during a stay in Taiwan", "Researchers and doctoral candidates with a host institution in Taiwan.", "Around spring", "https://www.mofa.gov.tw/en"),
  s("NTU Elite Doctoral Scholarship", "Taiwan", A, "PhD", "Monthly stipend", "International PhD applicants to NTU, nominated by their department.", "Around winter", "https://www.ntu.edu.tw/english"),
  s("Singapore International Graduate Award (SINGA)", "Singapore", A, "PhD", "Monthly stipend, tuition, airfare and a settling-in allowance", "International PhD applicants to NUS, NTU, SUTD or A*STAR institutes.", "Around winter", "https://www.a-star.edu.sg/"),
  s("SUTD President's Graduate Fellowship", "Singapore", A, "PhD", "Stipend and tuition", "Strong applicants to a SUTD PhD.", "Per intake", "https://www.sutd.edu.sg"),
  s("HKUST Postgraduate Studentship", "Hong Kong", A, "PhD", "Monthly stipend and tuition", "Admitted research postgraduate students at HKUST.", "Around winter", "https://hkust.edu.hk"),
  s("PolyU Postgraduate Scholarships", "Hong Kong", A, "PhD", "Monthly stipend and tuition", "Research postgraduate students at PolyU.", "Around winter", "https://www.polyu.edu.hk"),
  s("UTP Graduate Assistantship", "Malaysia", A, "Master's & PhD", "Allowance and tuition support", "Postgraduate research students admitted to UTP.", "Per intake", "https://www.utp.edu.my"),

  // India, Thailand, Indonesia, Kazakhstan
  s("ICCR Scholarships", "India", A, "Master's & PhD", "Tuition, monthly stipend and accommodation", "Citizens of partner countries applying through the embassy or ICCR portal.", "Around spring", "https://iccr.gov.in"),
  s("Study in India scholarships", "India", A, "Master's & PhD", "Fee waiver and stipend, by institution", "Non-Indian students admitted to participating Indian institutions.", "Per institution", "https://www.studyinindia.gov.in"),
  s("Thailand International Postgraduate Programme (TICA)", "Thailand", A, "Master's & PhD", "Tuition, stipend and travel", "Citizens of partner developing countries.", "Per country call", "https://tica.thaigov.net"),
  s("AIT Scholarships", "Thailand", A, "Master's & PhD", "Tuition and stipend, depending on the award", "International students admitted to AIT.", "Per intake", "https://ait.ac.th"),
  s("VISTEC Scholarships", "Thailand", A, "PhD", "Tuition and monthly stipend", "Admitted PhD students at VISTEC.", "Around winter", "https://www.vistec.ac.th"),
  s("Developing Countries Partnership Scholarship (KNB)", "Indonesia", A, "Master's & PhD", "Tuition, monthly allowance, research and settling-in support", "Citizens of eligible developing countries.", "Around spring", "https://www.kemdiktisaintek.go.id"),
  s("Nazarbayev University Graduate Scholarship", "Kazakhstan", A, "Master's & PhD", "Tuition, stipend and housing", "International students admitted to Nazarbayev University.", "Around winter and spring", "https://nu.edu.kz"),
  s("Kazakhstan Government Scholarship for foreign citizens", "Kazakhstan", A, "Master's & PhD", "Tuition and a monthly stipend", "Eligible foreign citizens admitted to a Kazakh university.", "Around spring", "https://www.gov.kz/memleket/entities/sci"),

  // Programmes of organisations already listed
  s("Fundación Carolina Scholarships", "Spain", E, "Master's & PhD", "Tuition support, monthly allowance, travel and insurance, by programme", "Citizens of Ibero-American countries admitted to a Spanish university.", "Around January to March", "https://www.fundacioncarolina.es/en"),
  s("AECID scholarships", "Spain", E, "Master's & PhD", "Monthly allowance, tuition support and insurance", "Students from eligible countries, as the AECID call states.", "Per call", "https://www.aecid.es/en"),
  s("OeAD scholarships and grants", "Austria", E, "Master's & PhD", "Monthly grants for study and research in Austria", "Foreign students and researchers, by programme.", "Per programme", "https://oead.at/en"),
  s("FWF doctoral programmes", "Austria", E, "PhD", "Salaried doctoral post in a funded doctoral programme", "Master's degree in the field. Apply to the programme's advertised post.", "Per advertised post", "https://www.fwf.ac.at/en"),
  s("Research Ireland doctoral and postgraduate funding", "Ireland", E, "PhD", "Stipend, fees and research costs", "Doctoral applicants with a supervisor at an Irish institution, as the call states.", "Per call", "https://www.researchireland.ie"),
  s("JSPS fellowships for research in Japan", "Japan", A, "PhD & research", "Monthly stipend, travel and research support", "Doctoral graduates and researchers with a Japanese host.", "Per programme call", "https://www.jsps.go.jp/english"),
  s("Rotary Yoneyama scholarship", "Japan", A, "Master's & PhD", "Monthly allowance for a year of study", "International students in Japan, recommended by a Rotary club.", "Around autumn", "https://www.rotary-yoneyama.or.jp/"),
  s("KOICA Scholarship Programme", "South Korea", A, "Master's", "Tuition, airfare, monthly allowance and insurance", "Public-sector professionals from partner countries.", "Per country call", "https://www.koica.go.kr/koica_en"),
  s("Taiwan ICDF Scholarship", "Taiwan", A, "Master's & PhD", "Tuition, monthly allowance, airfare and insurance", "Students from partner countries admitted to a participating Taiwanese university.", "Around winter to spring", "https://www.icdf.org.tw/wSite/mp?mp=2"),

  // Worldwide
  s("ADB-Japan Scholarship Program", "Worldwide", "North America", "Master's", "Tuition, monthly stipend, travel and insurance", "Citizens of ADB developing member countries admitted to a partner institution.", "Per partner institution", "https://www.adb.org/work-with-us/careers/japan-scholarship-program"),
  s("Joint Japan/World Bank Graduate Scholarship Program", "Worldwide", "North America", "Master's", "Tuition, travel, monthly stipend and insurance", "Citizens of eligible countries admitted to a participating programme.", "Per partner programme", "https://www.worldbank.org/en/programs/scholarships"),
  s("Rotary Peace Fellowships", "Worldwide", "North America", "Master's", "Tuition, housing, travel and living costs", "Peace and development professionals applying through Rotary.", "Around May", "https://www.rotary.org/en/our-programs/peace-fellowships")
];
