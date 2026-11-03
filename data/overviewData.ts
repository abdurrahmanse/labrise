// Single-page overview data: what a fully funded applicant needs, where to apply, whom to contact.
// Facts are deliberately high level. Deadlines, funding terms and faculty rosters change every
// cycle, so every entry links to a search for the official page instead of storing an email.

export type OverviewRegion = "Europe" | "North America" | "Asia" | "Oceania" | "Middle East";

export interface RoadmapStepSummary {
  step: number;
  href: string;
  title: string;
  when: string;
  actions: string[];
}

export interface ProfileItem {
  title: string;
  detail: string;
  priority: "Must have" | "Strong plus" | "Bonus";
}

export interface Challenge {
  problem: string;
  fix: string;
}

export interface UniversityEntry {
  name: string;
  country: string;
  region: OverviewRegion;
  funding: string;
  deadline: string;
  site: string;
}

export interface ProfessorEntry {
  name: string;
  university: string;
  country: string;
  group: string;
  /** Add only addresses copied from the professor's official university page. */
  email?: string;
}

export interface CountryEntry {
  country: string;
  region: OverviewRegion;
  routes: string;
  funding: string;
  supervisor: "Required first" | "Recommended" | "Not needed";
  fee: string;
}

export interface GuideTopic {
  id: string;
  title: string;
  tag: string;
  steps: string[];
}

export const overviewStats = [
  { label: "Countries", value: "27" },
  { label: "Universities", value: "60" },
  { label: "Professors", value: "50" },
  { label: "Guides", value: "10" }
];

export const roadmapSteps: RoadmapStepSummary[] = [
  {
    step: 1,
    href: "/guides/research-area",
    title: "Build your base",
    when: "12–24 months before",
    actions: ["Strong math + core CS/ML courses", "Pick one research area", "Keep your GPA up"]
  },
  {
    step: 2,
    href: "/guides/cv",
    title: "Create proof of research",
    when: "9–18 months before",
    actions: ["1–2 projects on GitHub", "Reproduce one paper", "Aim for a workshop paper or preprint"]
  },
  {
    step: 3,
    href: "/directory/countries",
    title: "Shortlist countries and universities",
    when: "8–12 months before",
    actions: ["Choose 15–20 programs", "Check funding type and deadline", "Note language tests required"]
  },
  {
    step: 4,
    href: "/directory/professors",
    title: "Find and email professors",
    when: "6–10 months before",
    actions: ["Read 2–3 recent papers per professor", "Send a short personal email", "One follow-up after 7–10 days"]
  },
  {
    step: 5,
    href: "/guides/sop",
    title: "Prepare documents",
    when: "4–8 months before",
    actions: ["CV, SOP, 2–3 recommenders", "IELTS/TOEFL, GRE if asked", "Transcripts and certificates"]
  },
  {
    step: 6,
    href: "/guides/visa-interview",
    title: "Apply, interview, decide",
    when: "Deadline season",
    actions: ["Submit early", "Prepare for a research interview", "Compare offers by funding"]
  }
];

export const profileChecklist: ProfileItem[] = [
  { title: "Strong grades", detail: "Top of your class helps; a clear upward trend also works.", priority: "Must have" },
  { title: "Math and CS foundation", detail: "Linear algebra, probability, algorithms, ML basics.", priority: "Must have" },
  { title: "Research experience", detail: "A thesis, project or internship with real results.", priority: "Must have" },
  { title: "Clear research direction", detail: "One topic you can explain in two sentences.", priority: "Must have" },
  { title: "Publication or preprint", detail: "Workshop paper or arXiv; not required, but it stands out.", priority: "Strong plus" },
  { title: "Public code", detail: "GitHub with clean READMEs and reproducible results.", priority: "Strong plus" },
  { title: "Academic recommenders", detail: "2–3 people who know your research work.", priority: "Must have" },
  { title: "English test", detail: "IELTS or TOEFL; some universities waive it.", priority: "Must have" },
  { title: "Statement of purpose", detail: "Specific to each lab, never a generic copy.", priority: "Must have" },
  { title: "Awards, TA or teaching", detail: "Supports your story, never replaces research.", priority: "Bonus" }
];

export const challenges: Challenge[] = [
  { problem: "No reply from professors", fix: "Shorter, more specific emails. Cite their paper. Contact 5–10 per university." },
  { problem: "No publications", fix: "Show reproducible projects and a strong recommender instead." },
  { problem: "Low GPA", fix: "Offset with research output, a strong SOP and a good recommender." },
  { problem: "Application fees and tests", fix: "Prioritise no-fee and fee-waiver programs; limit to 10–15 applications." },
  { problem: "Funding not guaranteed", fix: "Apply to salaried PhD posts and programs that state funding in the ad." },
  { problem: "Scams", fix: "Never pay a middleman. Real offers come from the university domain." }
];

export const professorSteps: string[] = [
  "Search the university's department page for faculty in your area.",
  "Check the lab page: are they hiring and taking international students?",
  "Read two recent papers and write one specific question or idea.",
  "Email their official university address (found on their own page).",
  "Track every email in a sheet: date, reply, next step."
];

export const universities: UniversityEntry[] = [
  { name: "ETH Zurich", country: "Switzerland", region: "Europe", funding: "Salaried PhD contract", deadline: "Rolling per post", site: "https://ethz.ch" },
  { name: "EPFL", country: "Switzerland", region: "Europe", funding: "Salaried PhD contract", deadline: "Dec–Apr (EDIC/others vary)", site: "https://epfl.ch" },
  { name: "TU Munich", country: "Germany", region: "Europe", funding: "Salaried position or fellowship", deadline: "Rolling per post", site: "https://tum.de" },
  { name: "University of Tübingen", country: "Germany", region: "Europe", funding: "Salaried position / IMPRS-IS", deadline: "Autumn–winter", site: "https://uni-tuebingen.de" },
  { name: "RWTH Aachen", country: "Germany", region: "Europe", funding: "Salaried position", deadline: "Rolling per post", site: "https://rwth-aachen.de" },
  { name: "Heidelberg University", country: "Germany", region: "Europe", funding: "Salaried position / fellowship", deadline: "Rolling per post", site: "https://uni-heidelberg.de" },
  { name: "KTH Royal Institute of Technology", country: "Sweden", region: "Europe", funding: "Salaried PhD employment", deadline: "Per advertised post", site: "https://kth.se" },
  { name: "Chalmers University", country: "Sweden", region: "Europe", funding: "Salaried PhD employment", deadline: "Per advertised post", site: "https://chalmers.se" },
  { name: "Lund University", country: "Sweden", region: "Europe", funding: "Salaried PhD employment", deadline: "Per advertised post", site: "https://lu.se" },
  { name: "TU Delft", country: "Netherlands", region: "Europe", funding: "Salaried PhD contract", deadline: "Per advertised post", site: "https://tudelft.nl" },
  { name: "University of Amsterdam", country: "Netherlands", region: "Europe", funding: "Salaried PhD contract", deadline: "Per advertised post", site: "https://uva.nl" },
  { name: "Eindhoven University of Technology", country: "Netherlands", region: "Europe", funding: "Salaried PhD contract", deadline: "Per advertised post", site: "https://tue.nl" },
  { name: "KU Leuven", country: "Belgium", region: "Europe", funding: "Salaried or scholarship PhD", deadline: "Per advertised post", site: "https://kuleuven.be" },
  { name: "University of Copenhagen", country: "Denmark", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://ku.dk" },
  { name: "Technical University of Denmark", country: "Denmark", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://dtu.dk" },
  { name: "Aalto University", country: "Finland", region: "Europe", funding: "Salaried doctoral researcher", deadline: "Per advertised post", site: "https://aalto.fi" },
  { name: "NTNU", country: "Norway", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://ntnu.edu" },
  { name: "University of Oslo", country: "Norway", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://uio.no" },
  { name: "University of Oxford", country: "United Kingdom", region: "Europe", funding: "Competitive scholarships", deadline: "Early Dec–Jan", site: "https://ox.ac.uk" },
  { name: "University of Edinburgh", country: "United Kingdom", region: "Europe", funding: "Scholarships / CDT studentships", deadline: "Dec–Jan (priority)", site: "https://ed.ac.uk" },
  { name: "University of Toronto", country: "Canada", region: "North America", funding: "Funding package for research PhD", deadline: "Dec–Jan", site: "https://utoronto.ca" },
  { name: "University of British Columbia", country: "Canada", region: "North America", funding: "Funding package for research PhD", deadline: "Dec–Jan", site: "https://ubc.ca" },
  { name: "University of Waterloo", country: "Canada", region: "North America", funding: "Research assistantship", deadline: "Varies by program", site: "https://uwaterloo.ca" },
  { name: "McGill University / Mila", country: "Canada", region: "North America", funding: "Research assistantship", deadline: "Dec–Jan", site: "https://mcgill.ca" },
  { name: "Carnegie Mellon University", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Early–mid Dec", site: "https://cmu.edu" },
  { name: "MIT", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Early–mid Dec", site: "https://mit.edu" },
  { name: "Stanford University", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Early–mid Dec", site: "https://stanford.edu" },
  { name: "UIUC", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec", site: "https://illinois.edu" },
  { name: "Georgia Tech", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec", site: "https://gatech.edu" },
  { name: "University of Tokyo", country: "Japan", region: "Asia", funding: "MEXT and other scholarships", deadline: "Varies by program", site: "https://u-tokyo.ac.jp" },
  { name: "National University of Singapore", country: "Singapore", region: "Asia", funding: "Research scholarship (stipend + fees)", deadline: "Rounds in Nov and May", site: "https://nus.edu.sg" },
  { name: "KAIST", country: "South Korea", region: "Asia", funding: "Full scholarship + stipend", deadline: "Rounds in spring and autumn", site: "https://kaist.ac.kr" },
  { name: "Australian National University", country: "Australia", region: "Oceania", funding: "RTP-type scholarship", deadline: "Varies by round", site: "https://anu.edu.au" },
  { name: "University of Melbourne", country: "Australia", region: "Oceania", funding: "RTP-type scholarship", deadline: "Varies by round", site: "https://unimelb.edu.au" },
  { name: "University of Cambridge", country: "United Kingdom", region: "Europe", funding: "Competitive scholarships", deadline: "Early Dec–Jan", site: "https://cam.ac.uk" },
  { name: "Imperial College London", country: "United Kingdom", region: "Europe", funding: "Scholarships / studentships", deadline: "Dec–Jan", site: "https://imperial.ac.uk" },
  { name: "UCL", country: "United Kingdom", region: "Europe", funding: "Scholarships / studentships", deadline: "Dec–Jan", site: "https://ucl.ac.uk" },
  { name: "Trinity College Dublin", country: "Ireland", region: "Europe", funding: "Funded PhD posts", deadline: "Per advertised post", site: "https://tcd.ie" },
  { name: "University College Dublin", country: "Ireland", region: "Europe", funding: "Funded PhD posts", deadline: "Per advertised post", site: "https://ucd.ie" },
  { name: "Sorbonne Université", country: "France", region: "Europe", funding: "Doctoral contract", deadline: "Per advertised post", site: "https://sorbonne-universite.fr" },
  { name: "École Polytechnique", country: "France", region: "Europe", funding: "Doctoral contract / fellowship", deadline: "Spring–summer", site: "https://polytechnique.edu" },
  { name: "Sapienza University of Rome", country: "Italy", region: "Europe", funding: "Funded doctoral scholarship", deadline: "Summer call", site: "https://uniroma1.it" },
  { name: "Politecnico di Milano", country: "Italy", region: "Europe", funding: "Funded doctoral scholarship", deadline: "Spring call", site: "https://polimi.it" },
  { name: "Universitat Politècnica de Catalunya", country: "Spain", region: "Europe", funding: "Funded PhD contract", deadline: "Per advertised post", site: "https://upc.edu" },
  { name: "TU Wien", country: "Austria", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://tuwien.at" },
  { name: "Institute of Science and Technology Austria", country: "Austria", region: "Europe", funding: "Funded PhD program", deadline: "Dec–Jan", site: "https://ista.ac.at" },
  { name: "Ghent University", country: "Belgium", region: "Europe", funding: "Salaried / scholarship PhD", deadline: "Per advertised post", site: "https://ugent.be" },
  { name: "Uppsala University", country: "Sweden", region: "Europe", funding: "Salaried PhD employment", deadline: "Per advertised post", site: "https://uu.se" },
  { name: "Aarhus University", country: "Denmark", region: "Europe", funding: "Salaried PhD", deadline: "Per advertised post", site: "https://au.dk" },
  { name: "University of Helsinki", country: "Finland", region: "Europe", funding: "Salaried doctoral researcher", deadline: "Per advertised post", site: "https://helsinki.fi" },
  { name: "Saarland University / CISPA", country: "Germany", region: "Europe", funding: "Salaried position", deadline: "Rolling per post", site: "https://uni-saarland.de" },
  { name: "Technical University of Berlin", country: "Germany", region: "Europe", funding: "Salaried position", deadline: "Rolling per post", site: "https://tu-berlin.de" },
  { name: "Karlsruhe Institute of Technology", country: "Germany", region: "Europe", funding: "Salaried position", deadline: "Rolling per post", site: "https://kit.edu" },
  { name: "University of Michigan", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec", site: "https://umich.edu" },
  { name: "UC Berkeley", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Early–mid Dec", site: "https://berkeley.edu" },
  { name: "University of Washington", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec", site: "https://washington.edu" },
  { name: "UT Austin", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec", site: "https://utexas.edu" },
  { name: "Purdue University", country: "United States", region: "North America", funding: "RA/TA stipend + tuition", deadline: "Dec–Jan", site: "https://purdue.edu" },
  { name: "University of Alberta", country: "Canada", region: "North America", funding: "Research assistantship", deadline: "Varies by program", site: "https://ualberta.ca" },
  { name: "Simon Fraser University", country: "Canada", region: "North America", funding: "Research assistantship", deadline: "Varies by program", site: "https://sfu.ca" },
  { name: "Tokyo Institute of Science", country: "Japan", region: "Asia", funding: "MEXT and other scholarships", deadline: "Varies by program", site: "https://isct.ac.jp" },
  { name: "Kyoto University", country: "Japan", region: "Asia", funding: "MEXT and other scholarships", deadline: "Varies by program", site: "https://kyoto-u.ac.jp" },
  { name: "Seoul National University", country: "South Korea", region: "Asia", funding: "GKS / lab-funded", deadline: "Spring and autumn rounds", site: "https://snu.ac.kr" },
  { name: "Nanyang Technological University", country: "Singapore", region: "Asia", funding: "Research scholarship (stipend + fees)", deadline: "Rounds in Nov and May", site: "https://ntu.edu.sg" },
  { name: "HKUST", country: "Hong Kong", region: "Asia", funding: "HKPFS / RPg studentship", deadline: "Dec 1 (HKPFS)", site: "https://hkust.edu.hk" },
  { name: "University of Hong Kong", country: "Hong Kong", region: "Asia", funding: "HKPFS / RPg studentship", deadline: "Dec 1 (HKPFS)", site: "https://hku.hk" },
  { name: "Tsinghua University", country: "China", region: "Asia", funding: "CSC / university scholarship", deadline: "Winter–spring", site: "https://tsinghua.edu.cn" },
  { name: "KAUST", country: "Saudi Arabia", region: "Middle East", funding: "Full fellowship + stipend", deadline: "Dec–Jan", site: "https://kaust.edu.sa" },
  { name: "University of Sydney", country: "Australia", region: "Oceania", funding: "RTP-type scholarship", deadline: "Varies by round", site: "https://sydney.edu.au" },
  { name: "Monash University", country: "Australia", region: "Oceania", funding: "RTP-type scholarship", deadline: "Varies by round", site: "https://monash.edu" },
  { name: "University of Auckland", country: "New Zealand", region: "Oceania", funding: "Doctoral scholarship", deadline: "Rolling", site: "https://auckland.ac.nz" }
];

export const professors: ProfessorEntry[] = [
  { name: "Bernhard Schölkopf", university: "MPI for Intelligent Systems / ELLIS Tübingen", country: "Germany", group: "Machine Learning" },
  { name: "Andreas Geiger", university: "University of Tübingen", country: "Germany", group: "Computer Vision" },
  { name: "Matthias Bethge", university: "University of Tübingen", country: "Germany", group: "Machine Learning" },
  { name: "Ulrike von Luxburg", university: "University of Tübingen", country: "Germany", group: "ML Theory" },
  { name: "Daniel Cremers", university: "TU Munich", country: "Germany", group: "Computer Vision" },
  { name: "Stephan Günnemann", university: "TU Munich", country: "Germany", group: "Machine Learning" },
  { name: "Marc Pollefeys", university: "ETH Zurich", country: "Switzerland", group: "Computer Vision" },
  { name: "Andreas Krause", university: "ETH Zurich", country: "Switzerland", group: "Machine Learning" },
  { name: "Thomas Hofmann", university: "ETH Zurich", country: "Switzerland", group: "NLP / Machine Learning" },
  { name: "Ryan Cotterell", university: "ETH Zurich", country: "Switzerland", group: "NLP" },
  { name: "Roland Siegwart", university: "ETH Zurich", country: "Switzerland", group: "Robotics" },
  { name: "Pascal Fua", university: "EPFL", country: "Switzerland", group: "Computer Vision" },
  { name: "Martin Jaggi", university: "EPFL", country: "Switzerland", group: "Machine Learning" },
  { name: "Volkan Cevher", university: "EPFL", country: "Switzerland", group: "Optimization / ML Theory" },
  { name: "Davide Scaramuzza", university: "University of Zurich", country: "Switzerland", group: "Robotics" },
  { name: "Max Welling", university: "University of Amsterdam", country: "Netherlands", group: "Machine Learning" },
  { name: "Cees Snoek", university: "University of Amsterdam", country: "Netherlands", group: "Computer Vision" },
  { name: "Maarten de Rijke", university: "University of Amsterdam", country: "Netherlands", group: "Information Retrieval / NLP" },
  { name: "Michael Bronstein", university: "University of Oxford", country: "United Kingdom", group: "Geometric Deep Learning" },
  { name: "Yee Whye Teh", university: "University of Oxford", country: "United Kingdom", group: "Machine Learning" },
  { name: "Andrew Zisserman", university: "University of Oxford", country: "United Kingdom", group: "Computer Vision" },
  { name: "Mirella Lapata", university: "University of Edinburgh", country: "United Kingdom", group: "NLP" },
  { name: "Mihaela van der Schaar", university: "University of Cambridge", country: "United Kingdom", group: "ML for Healthcare" },
  { name: "Francis Bach", university: "Inria / ENS Paris", country: "France", group: "Optimization / ML Theory" },
  { name: "Cordelia Schmid", university: "Inria / ENS Paris", country: "France", group: "Computer Vision" },
  { name: "Yoshua Bengio", university: "Université de Montréal / Mila", country: "Canada", group: "Deep Learning" },
  { name: "Geoffrey Hinton", university: "University of Toronto", country: "Canada", group: "Deep Learning" },
  { name: "Raquel Urtasun", university: "University of Toronto", country: "Canada", group: "Computer Vision / Autonomy" },
  { name: "Joelle Pineau", university: "McGill University / Mila", country: "Canada", group: "Reinforcement Learning" },
  { name: "Yann LeCun", university: "New York University", country: "United States", group: "Deep Learning" },
  { name: "Fei-Fei Li", university: "Stanford University", country: "United States", group: "Computer Vision" },
  { name: "Christopher Manning", university: "Stanford University", country: "United States", group: "NLP" },
  { name: "Tom Mitchell", university: "Carnegie Mellon University", country: "United States", group: "Machine Learning" },
  { name: "Antonio Torralba", university: "MIT", country: "United States", group: "Computer Vision" },
  { name: "Tommi Jaakkola", university: "MIT", country: "United States", group: "Machine Learning" },
  { name: "Masashi Sugiyama", university: "University of Tokyo / RIKEN AIP", country: "Japan", group: "Machine Learning" },
  { name: "Sergey Levine", university: "UC Berkeley", country: "United States", group: "Robotics / RL" },
  { name: "Pieter Abbeel", university: "UC Berkeley", country: "United States", group: "Robotics / RL" },
  { name: "Dan Klein", university: "UC Berkeley", country: "United States", group: "NLP" },
  { name: "Percy Liang", university: "Stanford University", country: "United States", group: "NLP / ML" },
  { name: "Chelsea Finn", university: "Stanford University", country: "United States", group: "Robotics / ML" },
  { name: "Graham Neubig", university: "Carnegie Mellon University", country: "United States", group: "NLP" },
  { name: "Jitendra Malik", university: "UC Berkeley", country: "United States", group: "Computer Vision" },
  { name: "Joshua Tenenbaum", university: "MIT", country: "United States", group: "Cognitive AI" },
  { name: "Jacob Andreas", university: "MIT", country: "United States", group: "NLP" },
  { name: "Yejin Choi", university: "Stanford University", country: "United States", group: "NLP" },
  { name: "Sanja Fidler", university: "University of Toronto", country: "Canada", group: "Computer Vision" },
  { name: "Richard Zemel", university: "University of Toronto", country: "Canada", group: "Machine Learning" }
];

export const countries: CountryEntry[] = [
  { country: "Germany", region: "Europe", routes: "Salaried PhD, DAAD, Max Planck / IMPRS", funding: "Salary or stipend, no tuition at most public universities", supervisor: "Required first", fee: "Often none; uni-assist for some" },
  { country: "Switzerland", region: "Europe", routes: "Salaried PhD at ETH, EPFL, UZH", funding: "Employment contract, high salary", supervisor: "Required first", fee: "Small or none" },
  { country: "Sweden", region: "Europe", routes: "Salaried PhD, Swedish Institute (master's)", funding: "Employment with salary", supervisor: "Not needed", fee: "None for PhD posts" },
  { country: "Netherlands", region: "Europe", routes: "Salaried PhD, Orange Knowledge-type grants", funding: "Employment contract", supervisor: "Not needed", fee: "None for PhD posts" },
  { country: "Denmark", region: "Europe", routes: "Salaried PhD, Danish government grants", funding: "Employment with salary", supervisor: "Not needed", fee: "None for PhD posts" },
  { country: "Norway", region: "Europe", routes: "Salaried PhD", funding: "Employment with salary", supervisor: "Not needed", fee: "None" },
  { country: "Finland", region: "Europe", routes: "Salaried doctoral researcher", funding: "Employment with salary", supervisor: "Recommended", fee: "None for PhD posts" },
  { country: "Belgium", region: "Europe", routes: "KU Leuven / Ghent PhD, VLIR-UOS", funding: "Salary or scholarship", supervisor: "Required first", fee: "Small or none" },
  { country: "Austria", region: "Europe", routes: "Salaried PhD, ISTA", funding: "Employment or stipend", supervisor: "Required first", fee: "None to small" },
  { country: "France", region: "Europe", routes: "Doctoral contract, Eiffel scholarship", funding: "Salary-level contract", supervisor: "Required first", fee: "Small or none" },
  { country: "Italy", region: "Europe", routes: "Funded PhD scholarship calls", funding: "Stipend + tuition waiver", supervisor: "Recommended", fee: "Small or none" },
  { country: "Spain", region: "Europe", routes: "FPI / FPU contracts, university calls", funding: "PhD contract", supervisor: "Required first", fee: "Small or none" },
  { country: "United Kingdom", region: "Europe", routes: "Chevening, Commonwealth, CDT studentships", funding: "Stipend + fees", supervisor: "Recommended", fee: "Often £0–£75" },
  { country: "Ireland", region: "Europe", routes: "Funded PhD posts (SFI, Irish Research Council)", funding: "Stipend + fees", supervisor: "Required first", fee: "Small or none" },
  { country: "United States", region: "North America", routes: "RA / TA, Fulbright", funding: "Stipend + tuition waiver", supervisor: "Recommended", fee: "Often $75–$120; waivers exist" },
  { country: "Canada", region: "North America", routes: "Research assistantship, Vanier", funding: "Funding package", supervisor: "Required first", fee: "Often CAD 100–150" },
  { country: "Japan", region: "Asia", routes: "MEXT scholarship, university programs", funding: "Monthly allowance + fees", supervisor: "Recommended", fee: "Often under ¥30,000" },
  { country: "South Korea", region: "Asia", routes: "GKS, KAIST / SNU programs", funding: "Stipend + tuition", supervisor: "Recommended", fee: "Small" },
  { country: "China", region: "Asia", routes: "CSC, university scholarships", funding: "Stipend + tuition + housing", supervisor: "Required first", fee: "Small or none" },
  { country: "Singapore", region: "Asia", routes: "NUS / NTU research scholarship, A*STAR", funding: "Stipend + fees", supervisor: "Recommended", fee: "Small" },
  { country: "Hong Kong", region: "Asia", routes: "HKPFS and university studentships", funding: "Monthly stipend + travel", supervisor: "Recommended", fee: "Small" },
  { country: "Taiwan", region: "Asia", routes: "Taiwan Scholarship, MOE programs", funding: "Monthly allowance + fees", supervisor: "Recommended", fee: "Small" },
  { country: "Australia", region: "Oceania", routes: "RTP, Australia Awards", funding: "Stipend + tuition waiver", supervisor: "Required first", fee: "Often none" },
  { country: "New Zealand", region: "Oceania", routes: "University doctoral scholarships, NZ Scholarships", funding: "Stipend + fees", supervisor: "Required first", fee: "Often none" },
  { country: "Turkey", region: "Middle East", routes: "Türkiye Scholarships", funding: "Stipend + tuition + housing", supervisor: "Not needed", fee: "None" },
  { country: "Saudi Arabia", region: "Middle East", routes: "KAUST fellowship", funding: "Stipend + tuition + housing", supervisor: "Recommended", fee: "None" },
  { country: "Hungary", region: "Europe", routes: "Stipendium Hungaricum", funding: "Stipend + tuition + housing", supervisor: "Recommended", fee: "None" }
];

export const guideTopics: GuideTopic[] = [
  {
    id: "research-area",
    title: "Research area",
    tag: "Do first",
    steps: [
      "List 3 courses or projects you enjoyed most.",
      "Read 10 recent papers on arXiv in those topics.",
      "Pick one area and one sub-topic.",
      "Write your interest in two sentences.",
      "Check that 10+ professors work on it."
    ]
  },
  {
    id: "cv",
    title: "CV",
    tag: "1–2 pages",
    steps: [
      "Use a clean one-column LaTeX or Word template.",
      "Order: education, research, projects, publications, skills.",
      "Write each item as action + method + result.",
      "Add links: GitHub, Google Scholar, website.",
      "Keep it 2 pages max and save as PDF."
    ]
  },
  {
    id: "sop",
    title: "SOP (Statement of Purpose)",
    tag: "1–2 pages",
    steps: [
      "Hook: the research question that drives you.",
      "Your past work and what you learned.",
      "Why this lab and this professor, naming 1–2 papers.",
      "Your plan for the first years.",
      "Edit for each university, never send a copy."
    ]
  },
  {
    id: "research-proposal",
    title: "Research proposal",
    tag: "2–5 pages",
    steps: [
      "Title and one-paragraph summary.",
      "Problem and why it matters.",
      "Related work in 5–10 references.",
      "Method and planned experiments.",
      "Timeline by semester and expected outcome."
    ]
  },
  {
    id: "reference-letter",
    title: "Reference letter",
    tag: "2–3 letters",
    steps: [
      "Choose professors who supervised your research.",
      "Ask 6–8 weeks before the deadline.",
      "Send your CV, SOP draft and deadline list.",
      "Share the portal link and the submission method.",
      "Remind them 1 week before each deadline."
    ]
  },
  {
    id: "ielts",
    title: "IELTS",
    tag: "Academic, 6.5–7.0",
    steps: [
      "Check the minimum score on each program page.",
      "Book the test 2–3 months ahead.",
      "Take one full mock test to find weak sections.",
      "Practise Writing task 2 and Speaking daily.",
      "Send scores directly to universities."
    ]
  },
  {
    id: "toefl",
    title: "TOEFL iBT",
    tag: "Usually 90–100",
    steps: [
      "Confirm TOEFL is accepted, and the institution code.",
      "Register at ets.org and pick a date.",
      "Practise with official TOEFL tests.",
      "Use the free score reports for chosen universities.",
      "Scores stay valid for 2 years."
    ]
  },
  {
    id: "proof-letters",
    title: "Proof letters",
    tag: "As requested",
    steps: [
      "Medium of instruction letter from your university.",
      "Official transcripts and degree certificate.",
      "Enrollment or graduation proof.",
      "Proof of funds only if the offer is not fully funded.",
      "Get translations notarised when required."
    ]
  },
  {
    id: "application-fee",
    title: "Application fee",
    tag: "Plan a budget",
    steps: [
      "List the fee for each program.",
      "Search for fee waivers for your country.",
      "Prefer no-fee PhD posts in Europe first.",
      "Apply to 10–15 programs, not 40.",
      "Keep receipts and confirmation emails."
    ]
  },
  {
    id: "visa-interview",
    title: "Visa interview",
    tag: "After the offer",
    steps: [
      "Collect offer letter, funding proof and passport.",
      "Fill the online visa form and pay the fee.",
      "Book the earliest interview slot.",
      "Prepare: study plan, funding, plan to return.",
      "Answer short, honest and in your own words."
    ]
  },
  { id: "cold-email", title: "Cold email to professors", tag: "150–200 words", steps: ["Check the lab is hiring.", "Read two recent papers.", "Write a short specific email.", "Attach your CV.", "Follow up once."] },
  { id: "interview-prep", title: "Research interview", tag: "Before offers", steps: ["Summarise your projects.", "Read the professor's papers.", "Review fundamentals.", "Prepare questions.", "Test your setup."] },
  { id: "funding-types", title: "Types of funding", tag: "Know the model", steps: ["Salaried PhD.", "Stipend and tuition waiver.", "Government scholarship.", "Fellowship.", "Check what is covered."] },
  { id: "deadlines-timeline", title: "12-month timeline", tag: "Plan", steps: ["12–9 months: area and tests.", "9–6 months: professors and documents.", "6–3 months: referees and early deadlines.", "3–0 months: submit.", "After: compare offers."] },
  { id: "offer-comparison", title: "Compare offers", tag: "After results", steps: ["Funding.", "Supervisor.", "Research fit.", "Location.", "Career outcomes."] },
  { id: "scholarship-scams", title: "Avoid scams", tag: "Stay safe", steps: ["Never pay for an award.", "Check official domains.", "Verify with the department.", "Ignore guarantees.", "Protect your documents."] },
  { id: "english-and-gre", title: "GRE and other tests", tag: "Only if needed", steps: ["List requirements.", "Check GRE necessity.", "Check Duolingo acceptance.", "Look for waivers.", "Pick the fewest tests."] }
];

// ── Lookup helpers for directory detail pages ──

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const countrySlug = (c: CountryEntry) => slugify(c.country);
export const universitySlug = (u: UniversityEntry) => slugify(u.name);
export const professorSlug = (p: ProfessorEntry) => slugify(p.name);

/** Professors list their university as free text, e.g. "MPI … / ELLIS Tübingen". */
export const universityOfProfessor = (p: ProfessorEntry) =>
  universities.find(
    (u) => p.university.includes(u.name) || p.university.includes(u.name.split(" / ")[0])
  );

export const professorsAtUniversity = (u: UniversityEntry) =>
  professors.filter((p) => universityOfProfessor(p)?.name === u.name);
