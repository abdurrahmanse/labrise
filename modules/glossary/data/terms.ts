export interface GlossaryTerm {
  term: string;
  /** Long form, when the term is an abbreviation. */
  full?: string;
  meaning: string;
  /** Guide that explains it in more detail. */
  guide?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Apostille", meaning: "A stamp that makes a public document, such as a degree, accepted in other countries that joined the Hague Convention. Check whether your target country needs it.", guide: "document-attestation" },
  { term: "Assistantship", meaning: "Paid work for the university, such as research or teaching, that comes with your place. It often includes a stipend and a tuition waiver." },
  { term: "Attestation", meaning: "Official confirmation by an authority that your certificate or transcript is genuine. Rules differ by country.", guide: "document-attestation" },
  { term: "CAS", full: "Confirmation of Acceptance for Studies", meaning: "The document a UK university issues so you can apply for a Student visa." },
  { term: "CGPA / GPA", full: "Cumulative Grade Point Average", meaning: "Your average grade over the whole degree. Universities may ask you to convert it to their own scale.", guide: "grade-conversion" },
  { term: "Cold email", meaning: "A first message to a professor you have not met, asking about a place in their group.", guide: "cold-email" },
  { term: "Cotutelle", meaning: "A joint PhD run by two universities in different countries, with a degree recognised by both." },
  { term: "CSC", full: "China Scholarship Council", meaning: "The Chinese government agency that runs the Chinese Government Scholarship." },
  { term: "CV", full: "Curriculum Vitae", meaning: "A short record of your education, research, projects and skills. Academic CVs list publications and research experience.", guide: "cv" },
  { term: "DAAD", full: "German Academic Exchange Service", meaning: "The main German organisation that funds international students and researchers.", guide: "funding-types" },
  { term: "Doctoral contract", meaning: "A paid PhD position under an employment contract, common in France and other European countries." },
  { term: "ECTS", full: "European Credit Transfer and Accumulation System", meaning: "Europe's credit system. 60 ECTS credits equal one full-time year of study." },
  { term: "ELLIS", full: "European Laboratory for Learning and Intelligent Systems", meaning: "A European network of AI research units that runs a joint PhD programme." },
  { term: "Erasmus Mundus", meaning: "European joint Master's programmes with scholarships, taught at two or more universities.", guide: "funding-types" },
  { term: "Fellowship", meaning: "Money awarded to a student for study or research. It does not always require work for the university.", guide: "funding-types" },
  { term: "Fulbright", meaning: "A United States government exchange programme that funds study and research.", guide: "funding-types" },
  { term: "GKS", full: "Global Korea Scholarship", meaning: "The Korean government scholarship for international students, run by NIIED." },
  { term: "GRE", full: "Graduate Record Examination", meaning: "A standard test some universities ask for in graduate admissions. Many programmes no longer require it.", guide: "english-and-gre" },
  { term: "I-20", meaning: "The form a US university gives you so you can apply for an F-1 student visa." },
  { term: "IELTS", full: "International English Language Testing System", meaning: "An English test accepted by most universities. Each programme sets its own minimum score.", guide: "ielts" },
  { term: "LoR", full: "Letter of Recommendation", meaning: "A letter from a teacher or supervisor who knows your work well. Also called a reference letter.", guide: "reference-letter" },
  { term: "MEXT", full: "Ministry of Education, Culture, Sports, Science and Technology", meaning: "The Japanese ministry behind the Japanese Government (MEXT) Scholarship." },
  { term: "MSCA", full: "Marie Skłodowska-Curie Actions", meaning: "European Union funding for doctoral networks and researchers, with paid contracts.", guide: "funding-types" },
  { term: "Offer letter", meaning: "The university's written offer of a place. Check what it says about funding before you accept.", guide: "offer-comparison" },
  { term: "Preprint", meaning: "A research paper shared publicly before peer review, for example on arXiv.", guide: "publications" },
  { term: "RA", full: "Research Assistantship", meaning: "A paid role where you do research for a professor's project while you study." },
  { term: "Referee", meaning: "The person who writes your recommendation letter.", guide: "reference-letter" },
  { term: "Research proposal", meaning: "A short plan of the research you want to do: question, method and why it matters. Required for many PhD applications.", guide: "research-proposal" },
  { term: "Rolling admission", meaning: "Applications are reviewed as they arrive, so earlier applications often have better chances." },
  { term: "Salaried PhD", meaning: "A PhD where you are paid a salary as an employee, instead of receiving a small grant." },
  { term: "SOP", full: "Statement of Purpose", meaning: "A short essay on your background, goals and why you fit the programme.", guide: "sop" },
  { term: "Stipend", meaning: "A regular payment to cover living costs while you study." },
  { term: "Studentship", meaning: "The UK word for a funded PhD place." },
  { term: "Supervisor", meaning: "The professor who guides your research. In some countries you must agree with one before you can apply.", guide: "cold-email" },
  { term: "TA", full: "Teaching Assistantship", meaning: "A paid role where you help teach courses, such as running labs or grading." },
  { term: "Thesis", meaning: "The long written report of your research at the end of a Master's or PhD." },
  { term: "TOEFL", full: "Test of English as a Foreign Language", meaning: "An English test accepted by many universities, especially in North America.", guide: "toefl" },
  { term: "Transcript", meaning: "The official record of your courses and grades.", guide: "document-attestation" },
  { term: "Tuition waiver", meaning: "The university covers your tuition fees. It is usually part of a funded place." },
  { term: "Viva", full: "Viva voce", meaning: "The oral exam where you defend your thesis in front of examiners." },
  { term: "Waitlist", meaning: "A reserve list. You may get an offer if someone ahead of you declines." }
];
