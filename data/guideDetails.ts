// Long-form content for each guide detail page.

export interface GuideSection {
  heading: string;
  /** Short intro line under the heading. */
  intro?: string;
  items: { title: string; detail: string }[];
}

export interface GuideDetail {
  id: string;
  summary: string;
  why: string;
  timeline: string;
  sections: GuideSection[];
  example?: { label: string; text: string };
  mistakes: string[];
  checklist: string[];
  links?: { label: string; href: string }[];
  related: string[];
}

export const guideDetails: GuideDetail[] = [
  {
    id: "research-area",
    summary: "Your research area decides which professors you email, which universities you shortlist and what your SOP says. Choose it early and narrow it down.",
    why: "Funded PhD positions are given to people who fit a specific lab. A clear area shows you know what you want and lets a professor see a match in seconds.",
    timeline: "Spend 3–4 weeks on this before anything else. You can refine it later, but you need a first draft before emailing anyone.",
    sections: [
      {
        heading: "Find your direction",
        items: [
          { title: "List what you enjoyed", detail: "Write down the 3–5 courses, projects or thesis parts you enjoyed most, and why. Look for the common thread: data, theory, systems, language, images, robots." },
          { title: "Read widely, then narrow", detail: "Skim 15–20 recent papers on arXiv or from top venues (NeurIPS, ICML, ICLR, CVPR, ACL). Mark the ones you could explain to a friend. Those point to your area." },
          { title: "Move from area to sub-topic", detail: "'Machine learning' is too broad. 'Efficient fine-tuning of language models' or 'uncertainty estimation for medical images' is a direction a professor can respond to." },
          { title: "Check the supply", detail: "Search 10 professors who work on it. If you find fewer than 10, widen slightly. If hundreds, narrow it." }
        ]
      },
      {
        heading: "Test your choice",
        items: [
          { title: "Two-sentence test", detail: "Write what you want to research and why in two sentences. If you cannot, you are not ready to email professors." },
          { title: "Reproduce one paper", detail: "Re-run code from one paper in your area. If you enjoy fighting with the details, it is a good sign." },
          { title: "Talk to a mentor", detail: "Ask a senior student or your thesis supervisor to challenge your choice. Fix weak points before applying." }
        ]
      }
    ],
    example: { label: "Good vs weak", text: "Weak: 'I am interested in AI.'\nBetter: 'I work on making vision models robust to distribution shift in medical imaging, and I want to study test-time adaptation.'" },
    mistakes: ["Choosing a trending topic with no background in it.", "Listing five unrelated interests.", "Copying a professor's abstract as your own interest.", "Changing area completely after emailing."],
    checklist: ["One area and one sub-topic written down", "Two-sentence summary ready", "10+ professors found", "3 key papers read in detail"],
    related: ["cv", "sop", "cold-email"]
  },
  {
    id: "cv",
    summary: "An academic CV is a short, factual proof of your research ability. It is read in under a minute, so structure and clarity matter more than design.",
    why: "Professors and committees skim dozens of CVs. A clean CV that puts research first gets you into the 'read more' pile.",
    timeline: "Draft in one week, then update after every project. Final polish 2 weeks before you start emailing.",
    sections: [
      {
        heading: "Structure (in this order)",
        items: [
          { title: "Header", detail: "Name, email, city/country, links to GitHub, Google Scholar or website. Skip photo, age, marital status and passport details." },
          { title: "Education", detail: "Degree, university, years, GPA with scale (for example 3.7/4.0, top 5%). Add thesis title and supervisor." },
          { title: "Research experience", detail: "Most important section. Title, lab, dates, one line of context, then 2–3 bullets with method and result." },
          { title: "Publications and preprints", detail: "List with authors, venue, year and link. Mark 'under review' honestly. Leave out if you have none and let projects speak." },
          { title: "Projects", detail: "2–4 strongest projects, each with a link and a measurable outcome." },
          { title: "Skills, awards, teaching", detail: "Short lists. Group skills: languages, frameworks, tools. Include awards and TA work." }
        ]
      },
      {
        heading: "Writing each bullet",
        items: [
          { title: "Action + method + result", detail: "'Fine-tuned ResNet-50 with focal loss, raising F1 on a 5-class dataset from 0.71 to 0.82.'" },
          { title: "Use numbers", detail: "Dataset size, accuracy gains, speedups, users, citations. Numbers make claims believable." },
          { title: "Be honest about your role", detail: "Say 'implemented' or 'led' accurately. Interviewers will ask about every line." }
        ]
      }
    ],
    example: { label: "Bullet example", text: "Research Assistant, Vision Lab, XYZ University (2024–2025)\n– Built a segmentation pipeline for retinal images (U-Net, 12k scans), improving Dice from 0.78 to 0.85.\n– Wrote evaluation scripts released on GitHub (140 stars)." },
    mistakes: ["Three or more pages for a master's applicant.", "Listing every course.", "Vague phrases like 'worked on AI'.", "Fancy multi-column templates that break text extraction."],
    checklist: ["1–2 pages, PDF", "Research section first after education", "All links work", "Numbers in bullets", "Spell-checked by someone else"],
    links: [{ label: "Overleaf CV templates", href: "https://www.overleaf.com/latex/templates/tagged/cv" }],
    related: ["sop", "cold-email", "reference-letter"]
  },
  {
    id: "sop",
    summary: "The Statement of Purpose explains who you are as a researcher, what you have done and why you want to work in this particular lab.",
    why: "It is the main place where a committee sees your thinking and fit. A specific, honest SOP often decides between similar candidates.",
    timeline: "Write a first draft 3 months before the deadline. Plan 4–6 revisions and one tailored version per university.",
    sections: [
      {
        heading: "Structure (about 1–2 pages)",
        items: [
          { title: "Opening: your question", detail: "Start with the research problem that drives you, not your childhood. One short paragraph." },
          { title: "Past work", detail: "Pick 2 projects. For each: the problem, what you did, what you learned. Link them to your future direction." },
          { title: "Why this lab", detail: "Name 1–2 professors and 1–2 papers. Say what you would add or extend. This paragraph changes for each university." },
          { title: "Plan and goals", detail: "What you plan to study in the first two years and what you want to do afterwards." },
          { title: "Closing", detail: "Short and confident. Mention funding or visa only if the application asks." }
        ]
      },
      {
        heading: "Quality checks",
        items: [
          { title: "Specificity", detail: "Every claim should be supported by a project, number or paper." },
          { title: "Tone", detail: "Plain, confident English. No flattery, no clichés about changing the world." },
          { title: "Fit", detail: "Replace the university name with another. If the SOP still works, it is too generic." },
          { title: "Length and format", detail: "Respect word limits and portal rules exactly." }
        ]
      }
    ],
    example: { label: "Strong paragraph", text: "Your 2024 paper on sparse attention for long documents raised a question I explored in my thesis: can the same idea cut memory for medical reports? I reproduced your results on two datasets and extended them to a clinical corpus, reaching 4x lower memory with a 1.2-point drop in ROUGE. I would like to study this trade-off systematically in your group." },
    mistakes: ["One generic SOP sent to every university.", "Retelling your CV as prose.", "Quoting famous people.", "Going over the word limit.", "Mentioning money as the main reason."],
    checklist: ["Tailored lab paragraph per application", "Two projects with results", "Read aloud once", "Checked by a professor or senior", "Within word limit"],
    related: ["research-proposal", "cv", "reference-letter"]
  },
  {
    id: "research-proposal",
    summary: "A research proposal outlines the problem you want to study and how. Many European PhD programs and some master's by research require one.",
    why: "It shows you can think independently, plan a project and judge what is feasible. It also lets a professor see if your idea matches their funding.",
    timeline: "Allow 4–6 weeks. Start with a 1-page version for emails, then expand to the full proposal.",
    sections: [
      {
        heading: "Sections to include",
        items: [
          { title: "Title and summary", detail: "A clear working title and a 150-word summary of the problem, approach and expected result." },
          { title: "Background and motivation", detail: "What is known, what is missing, why it matters. Cite 8–15 key papers." },
          { title: "Research questions", detail: "2–3 concrete, testable questions. Avoid broad aims." },
          { title: "Method", detail: "Data, models, experiments, evaluation metrics and baselines. Be realistic about compute." },
          { title: "Work plan", detail: "A timeline by semester or year with milestones and expected outputs such as papers." },
          { title: "Expected contribution and risks", detail: "What you will have shown at the end and your fallback if the main idea fails." },
          { title: "References", detail: "Consistent citation style." }
        ]
      },
      {
        heading: "Making it credible",
        items: [
          { title: "Fit the lab", detail: "Connect to the professor's work and available data or tools." },
          { title: "Show a pilot", detail: "A small experiment or prototype you already ran proves feasibility." },
          { title: "Stay flexible", detail: "State that you are open to adjusting the topic with your supervisor." }
        ]
      }
    ],
    example: { label: "Research question", text: "RQ1: Does test-time adaptation reduce accuracy loss of chest X-ray classifiers under hospital shift? RQ2: Which adaptation signal is most reliable without labels?" },
    mistakes: ["Topic too large for a PhD.", "No literature or outdated citations.", "No evaluation plan.", "Ignoring the lab's actual research."],
    checklist: ["Clear questions", "8–15 relevant references", "Timeline by semester", "Pilot result or plan", "Length matches the call"],
    related: ["research-area", "sop", "cold-email"]
  },
  {
    id: "reference-letter",
    summary: "Reference (recommendation) letters are written by people who know your work. Most programs ask for two or three.",
    why: "Letters give committees an outside view of your research ability. A strong letter from an active researcher often carries more weight than grades.",
    timeline: "Ask at least 6–8 weeks before the first deadline and send reminders one week before each one.",
    sections: [
      {
        heading: "Choosing referees",
        items: [
          { title: "Prefer research supervisors", detail: "Thesis supervisors, lab heads and internship mentors who saw your research are best." },
          { title: "Mix of voices", detail: "Two academics and, if useful, one industry or lab mentor. Avoid family friends or only a class teacher." },
          { title: "Ask directly", detail: "Ask: 'Can you write a strong letter for my PhD applications?' If they hesitate, choose someone else." }
        ]
      },
      {
        heading: "Making it easy for them",
        items: [
          { title: "Send a packet", detail: "CV, SOP draft, transcript, list of universities with deadlines and portal links, and a short note on what you worked on with them." },
          { title: "Register referees in portals", detail: "Enter correct names and institutional emails. Many portals email the referee a link." },
          { title: "Follow up politely", detail: "Remind one week before each deadline and thank them after." }
        ]
      }
    ],
    mistakes: ["Asking at the last minute.", "Using a personal email for the referee.", "Choosing a famous name who barely knows you.", "Forgetting to waive access rights when a portal asks."],
    checklist: ["2–3 referees confirmed", "Packet sent", "Deadlines in a shared sheet", "Reminders scheduled", "Thank-you notes sent"],
    related: ["cv", "sop", "application-fee"]
  },
  {
    id: "ielts",
    summary: "IELTS Academic is one of the main English tests accepted by universities worldwide. Many require an overall band of about 6.5–7.0.",
    why: "Without a valid score you cannot complete many applications or visas. Some universities waive it if your degree was taught in English, so check first.",
    timeline: "Book 2–3 months ahead. Study 6–8 weeks. Results arrive in about 3–13 days. Scores are valid for 2 years.",
    sections: [
      {
        heading: "Before you book",
        items: [
          { title: "Check requirements", detail: "Find the minimum overall and per-band score on each program page." },
          { title: "Check waivers", detail: "A medium-of-instruction letter or a degree taught in English can replace the test at some universities." },
          { title: "Choose Academic", detail: "IELTS Academic is the right version for university study." }
        ]
      },
      {
        heading: "Preparing",
        items: [
          { title: "Take a mock test", detail: "Use official practice material to see your weakest section." },
          { title: "Writing", detail: "Practise Task 1 (graph description) and Task 2 (essay) with feedback. Writing is where most applicants lose points." },
          { title: "Speaking", detail: "Record yourself, speak daily for 10–15 minutes and learn to extend answers." },
          { title: "Reading and Listening", detail: "Time yourself. Practise skimming and note-taking." }
        ]
      },
      {
        heading: "After the test",
        items: [
          { title: "Send scores", detail: "Order electronic score reports to your universities. Use correct institution names." },
          { title: "Retake if needed", detail: "Single-skill retakes may be available. Check current rules." }
        ]
      }
    ],
    mistakes: ["Booking too close to the deadline.", "Ignoring the per-band minimum.", "Practising only reading and listening.", "Memorised essay templates."],
    checklist: ["Required score confirmed", "Test date booked", "Mock test taken", "Score reports sent", "Validity covers the deadline"],
    links: [{ label: "IELTS official site", href: "https://ielts.org" }],
    related: ["toefl", "application-fee", "proof-letters"]
  },
  {
    id: "toefl",
    summary: "TOEFL iBT is an English test mostly used for the US and Canada, and accepted widely elsewhere. Typical targets are 90–100, with higher scores for top programs.",
    why: "If a program accepts only TOEFL, or you find it easier than IELTS, it is the right option. Always confirm acceptance first.",
    timeline: "Register 1–2 months ahead. Prepare for 4–8 weeks. Scores are valid for 2 years and are usually ready in about a week.",
    sections: [
      {
        heading: "Before you register",
        items: [
          { title: "Confirm acceptance", detail: "Check that the program accepts TOEFL and whether it asks for the Home Edition or test centre." },
          { title: "Find institution codes", detail: "You need each university's code to send score reports." },
          { title: "Register early", detail: "Create an ETS account and pick a date well before the first deadline." }
        ]
      },
      {
        heading: "Preparing",
        items: [
          { title: "Use official material", detail: "ETS practice tests match the real format." },
          { title: "Speaking and Writing", detail: "Practise integrated tasks that combine reading, listening and speaking or writing." },
          { title: "Timing", detail: "Practise the full length once to build stamina." }
        ]
      },
      {
        heading: "Sending scores",
        items: [
          { title: "Free score reports", detail: "Choose your first universities during registration for free reports." },
          { title: "Check delivery", detail: "Confirm each portal marks your score as received." }
        ]
      }
    ],
    mistakes: ["Not listing universities at registration and paying extra later.", "Using unofficial practice tests only.", "Waiting until the last month."],
    checklist: ["TOEFL accepted by each program", "Institution codes saved", "Date booked", "Official practice test done", "Scores received by portals"],
    links: [{ label: "ETS TOEFL", href: "https://www.ets.org/toefl" }],
    related: ["ielts", "application-fee", "proof-letters"]
  },
  {
    id: "proof-letters",
    summary: "Proof letters and certificates are the official documents that back up your application: transcripts, degree proof, language-medium letter and, when required, financial proof.",
    why: "Missing or wrongly formatted documents are the most common cause of rejected applications and delayed visas.",
    timeline: "Request official copies 2–3 months ahead because universities can take weeks to issue them.",
    sections: [
      {
        heading: "Academic documents",
        items: [
          { title: "Transcripts", detail: "Official transcripts for every degree, in English or with certified translation. Ask for sealed copies if required." },
          { title: "Degree certificate", detail: "Final certificate or a letter confirming expected graduation date." },
          { title: "Grading scale explanation", detail: "A short note on your grading system and class rank helps evaluators." }
        ]
      },
      {
        heading: "Letters",
        items: [
          { title: "Medium of instruction letter", detail: "Issued by your university to confirm your degree was taught in English. May replace a language test." },
          { title: "Enrollment or graduation proof", detail: "Needed if you are still studying when you apply." },
          { title: "Certificates and awards", detail: "Add only those that support your research story." }
        ]
      },
      {
        heading: "Financial and identity proof",
        items: [
          { title: "Proof of funds", detail: "Usually needed only for the visa, and not for fully funded positions that state the stipend." },
          { title: "Passport", detail: "Check validity: at least 6 months after your planned arrival, ideally 2+ years." },
          { title: "Translations and notarisation", detail: "Use certified translators and follow the exact rules of the receiving country." }
        ]
      }
    ],
    mistakes: ["Sending unofficial screenshots.", "Missing translations.", "Letting the passport expire soon.", "Not scanning in the required format."],
    checklist: ["Transcripts requested", "Degree proof ready", "Medium-of-instruction letter", "Passport valid", "All scans clear and named"],
    related: ["ielts", "visa-interview", "application-fee"]
  },
  {
    id: "application-fee",
    summary: "Application fees add up quickly. Plan a budget, hunt for waivers and apply to a focused list of programs.",
    why: "Fees, test costs and document services can reach hundreds of dollars. A plan avoids wasted money on weak-fit programs.",
    timeline: "Build the budget when you shortlist programs, 6–8 months before deadlines.",
    sections: [
      {
        heading: "Know the typical costs",
        items: [
          { title: "Application fees", detail: "Roughly $0 for many European PhD posts and about $75–$120 for many US applications. Check each program." },
          { title: "Test and score reports", detail: "IELTS/TOEFL fees plus extra score reports. GRE only where required." },
          { title: "Documents", detail: "Transcript issue, translation, courier and notarisation." }
        ]
      },
      {
        heading: "Reduce the cost",
        items: [
          { title: "Fee waivers", detail: "Many US departments offer waivers on request or for attending info sessions. Ask the graduate office." },
          { title: "Prioritise no-fee posts", detail: "Salaried PhD posts in Germany, Sweden, the Netherlands and Norway often have no application fee." },
          { title: "Limit the list", detail: "10–15 well-matched applications beat 40 generic ones." },
          { title: "Avoid agents", detail: "Never pay a middleman for admission or a scholarship." }
        ]
      }
    ],
    mistakes: ["Paying for scholarships.", "Applying everywhere without fit.", "Missing waiver deadlines.", "Not keeping receipts."],
    checklist: ["Budget sheet", "Waivers requested", "Receipts saved", "Payment confirmation emails kept"],
    related: ["scholarship-scams", "ielts", "deadlines-timeline"]
  },
  {
    id: "visa-interview",
    summary: "After an offer you apply for a student visa. Some countries require an interview. Preparation and honest, consistent answers are what matter.",
    why: "A visa refusal can cost you a year. Clear documents and a clear study plan make approval much more likely.",
    timeline: "Start as soon as you accept the offer. Appointment slots can take weeks. Allow 2–3 months in total.",
    sections: [
      {
        heading: "Documents to collect",
        items: [
          { title: "Offer and funding letter", detail: "Official admission letter plus a letter stating your stipend or scholarship." },
          { title: "Passport and photos", detail: "Valid passport and photos in the required format." },
          { title: "Academic and financial proof", detail: "Transcripts, degrees and, where asked, bank statements." },
          { title: "Forms and fees", detail: "Online visa form, fee receipt and any health or biometric requirements." }
        ]
      },
      {
        heading: "Interview preparation",
        items: [
          { title: "Know your study plan", detail: "Explain in simple words why this university, this professor and this program." },
          { title: "Funding", detail: "Be ready to state how your studies are funded." },
          { title: "Plans after the degree", detail: "Answer honestly. Be consistent with your documents." },
          { title: "Practise aloud", detail: "Short, direct answers. Do not memorise scripts." }
        ]
      },
      {
        heading: "On the day",
        items: [
          { title: "Arrive early", detail: "Bring originals and copies in the order requested." },
          { title: "Stay calm and honest", detail: "If you do not understand a question, ask politely for repetition." }
        ]
      }
    ],
    mistakes: ["Late booking.", "Inconsistent answers vs documents.", "Memorised speeches.", "Using unofficial agents."],
    checklist: ["Offer and funding letters", "Passport valid", "Forms submitted", "Appointment booked", "Mock interview done"],
    related: ["proof-letters", "offer-comparison", "scholarship-scams"]
  },
  {
    id: "cold-email",
    summary: "A cold email is a short, specific message to a professor to ask about a PhD or research position. It is often the first and most important step in many countries.",
    why: "Professors often decide on funded positions themselves. A good email gets you a reply, an interview or an internal recommendation.",
    timeline: "Start 6–10 months before the deadline. Send in batches of 5–10 and track replies.",
    sections: [
      {
        heading: "Before writing",
        items: [
          { title: "Check they are hiring", detail: "Look at the lab page for open positions, funding notes and recent student intake." },
          { title: "Read two recent papers", detail: "Be able to state one specific idea or question." },
          { title: "Find the official email", detail: "Copy it from the university page. Avoid guessed addresses." }
        ]
      },
      {
        heading: "Email structure (150–200 words)",
        items: [
          { title: "Subject", detail: "Specific: 'PhD application: sparse attention for medical text'." },
          { title: "Paragraph 1", detail: "Who you are and why you write, in one or two lines." },
          { title: "Paragraph 2", detail: "Your fit: a paper of theirs and your related work with one number." },
          { title: "Paragraph 3", detail: "What you ask: whether they have funded openings and if a short call is possible." },
          { title: "Attachments", detail: "CV as PDF. Optionally a 1-page research idea. Keep file size small." }
        ]
      },
      {
        heading: "After sending",
        items: [
          { title: "Follow up once", detail: "After 7–10 days reply on the same thread with two short lines." },
          { title: "Track everything", detail: "Date, reply, next step in a sheet. Use the tracker on the directory page." },
          { title: "Respond fast", detail: "If a professor replies, answer within a day." }
        ]
      }
    ],
    example: {
      label: "Short template",
      text: "Subject: PhD inquiry: efficient adaptation of vision models\n\nDear Professor [Name],\n\nI am [Name], a final-year BSc student at [University] working on [topic]. I read your paper \"[Title]\" and was interested in [specific point].\n\nIn my thesis I [one sentence with a result]. I believe this connects to your work on [topic].\n\nDo you expect funded PhD openings for [year]? If so, may I send more details or schedule a 15-minute call? My CV is attached.\n\nThank you for your time.\n[Name] | [Links]"
    },
    mistakes: ["Mass emails with 'Dear Sir/Madam'.", "Long autobiographies.", "Asking for a scholarship without any fit.", "Many follow-ups."],
    checklist: ["Lab hiring checked", "Two papers read", "Official email copied", "CV attached", "Tracker updated"],
    links: [{ label: "Email templates", href: "/professors" }],
    related: ["research-area", "cv", "interview-prep"]
  },
  {
    id: "interview-prep",
    summary: "Many funded positions include a research interview with the professor or a panel. It mostly tests how you think about your own work and the field.",
    why: "It is often the last step before an offer. Prepared candidates stand out clearly.",
    timeline: "Prepare for 2–3 weeks after you start getting replies. Interviews may be scheduled on short notice.",
    sections: [
      {
        heading: "What to prepare",
        items: [
          { title: "Your own projects", detail: "Be able to explain every project: problem, method, results, mistakes and next steps." },
          { title: "The professor's papers", detail: "Read 3–4 papers, note strengths and one possible extension." },
          { title: "Fundamentals", detail: "Review linear algebra, probability, optimisation and ML basics. Expect a few technical questions." },
          { title: "Questions for them", detail: "Ask about supervision style, funding length, teaching duties and lab culture." }
        ]
      },
      {
        heading: "Common questions",
        items: [
          { title: "Why this lab?", detail: "Link their work to your path with specifics." },
          { title: "Tell me about your project", detail: "Two-minute summary, then be ready for depth." },
          { title: "What would you do in year one?", detail: "Offer a concrete plan and show flexibility." },
          { title: "Weaknesses", detail: "Name a real one and how you work on it." }
        ]
      },
      {
        heading: "Practical",
        items: [
          { title: "Test the setup", detail: "Camera, mic, internet and a quiet room 15 minutes early." },
          { title: "Follow up", detail: "Send a short thank-you within 24 hours." }
        ]
      }
    ],
    mistakes: ["Not reading the professor's work.", "Claiming skills you cannot explain.", "Having no questions."],
    checklist: ["Projects summarised", "Papers read", "Fundamentals reviewed", "Questions prepared", "Setup tested"],
    related: ["cold-email", "sop", "offer-comparison"]
  },
  {
    id: "funding-types",
    summary: "Not every 'funded' offer is the same. Understand the main funding models so you can compare offers and avoid surprises.",
    why: "Funding decides your income, working rights, taxes and security. Knowing the types helps you choose realistic targets.",
    timeline: "Read this before shortlisting countries, around 8–12 months before applying.",
    sections: [
      {
        heading: "Main models",
        items: [
          { title: "Salaried PhD (employment)", detail: "Common in Germany, Switzerland, the Nordics and the Netherlands. You are an employee with salary, benefits and pension." },
          { title: "Stipend and tuition waiver", detail: "Common in the US and Canada through research or teaching assistantships. Often guaranteed for 4–5 years." },
          { title: "Government scholarships", detail: "MEXT, GKS, CSC, DAAD, Chevening and similar. Usually cover tuition, living allowance and sometimes travel." },
          { title: "Fellowships", detail: "University or external awards such as Vanier or Marie Curie. Prestigious and often more flexible." }
        ]
      },
      {
        heading: "Check these details",
        items: [
          { title: "Duration", detail: "How many years are guaranteed? What happens after?" },
          { title: "What is covered", detail: "Tuition, health insurance, housing, travel and visa costs." },
          { title: "Duties", detail: "Teaching or research assistant hours per week." },
          { title: "Cost of living", detail: "Compare the stipend to rent and food in the city." }
        ]
      }
    ],
    mistakes: ["Confusing 'partial scholarship' with full funding.", "Ignoring living costs.", "Accepting without written confirmation."],
    checklist: ["Funding model understood", "Duration confirmed in writing", "Insurance and fees checked", "Living costs estimated"],
    related: ["offer-comparison", "scholarship-scams", "visa-interview"]
  },
  {
    id: "deadlines-timeline",
    summary: "A simple 12-month plan that shows when to do each task. Dates vary, so always confirm on the official pages.",
    why: "Applications fail from lateness more than from weak profiles. A calendar prevents that.",
    timeline: "Build your personal calendar the day you decide to apply.",
    sections: [
      {
        heading: "12 to 9 months before",
        items: [
          { title: "Research area and shortlist", detail: "Decide your area and shortlist countries and programs." },
          { title: "Book tests", detail: "Take IELTS or TOEFL early so you can retake if needed." }
        ]
      },
      {
        heading: "9 to 6 months before",
        items: [
          { title: "Professors", detail: "Build your professor list and send first emails." },
          { title: "Documents", detail: "Start CV, SOP and proposal. Request transcripts." }
        ]
      },
      {
        heading: "6 to 3 months before",
        items: [
          { title: "Referees", detail: "Ask for letters and send your packet." },
          { title: "Apply to early deadlines", detail: "Rolling and early posts first, usually in Europe." }
        ]
      },
      {
        heading: "3 to 0 months before",
        items: [
          { title: "Submit early", detail: "Aim to submit one week before the deadline." },
          { title: "Prepare for interviews", detail: "Practise research and technical questions." }
        ]
      },
      {
        heading: "After deadlines",
        items: [
          { title: "Compare offers", detail: "Check funding, supervisor and location." },
          { title: "Visa and travel", detail: "Start the visa as soon as you accept." }
        ]
      }
    ],
    mistakes: ["Waiting for 'one more paper'.", "Forgetting time zones.", "Submitting at the last hour."],
    checklist: ["Shared calendar", "Deadline sheet with portal links", "Reminders at 4 weeks and 1 week"],
    related: ["application-fee", "reference-letter", "cold-email"]
  },
  {
    id: "offer-comparison",
    summary: "When offers arrive, compare them on facts, not on the university name alone.",
    why: "Your supervisor, funding and city shape your next 4–5 years. A structured comparison prevents regret.",
    timeline: "You usually have a few weeks to decide. Some regions have common reply dates.",
    sections: [
      {
        heading: "Compare",
        items: [
          { title: "Funding", detail: "Stipend or salary after tax versus local costs; length of guarantee." },
          { title: "Supervisor", detail: "Talk to current students about supervision style, authorship and time to graduation." },
          { title: "Research fit", detail: "Resources, compute, collaborators and publication record of the lab." },
          { title: "Location and life", detail: "Language, housing, family, safety and visa options." },
          { title: "Career outcomes", detail: "Where do graduates work after the PhD?" }
        ]
      },
      {
        heading: "Decide",
        items: [
          { title: "Ask questions in writing", detail: "Clarify any unclear funding or duties before accepting." },
          { title: "Reply on time", detail: "Decline other offers politely so others can use the slot." }
        ]
      }
    ],
    mistakes: ["Choosing only by ranking.", "Not speaking to current students.", "Accepting verbal promises."],
    checklist: ["Offer terms in writing", "Student contacts spoken to", "Pros and cons sheet", "Reply sent before deadline"],
    related: ["funding-types", "visa-interview", "interview-prep"]
  },
  {
    id: "scholarship-scams",
    summary: "Fake scholarships and agents target applicants. Learn the warning signs before paying anyone.",
    why: "Scams cost money, personal data and sometimes visa trouble.",
    timeline: "Keep these rules in mind from the first day.",
    sections: [
      {
        heading: "Warning signs",
        items: [
          { title: "Payment for admission or award", detail: "Real scholarships do not ask for fees to receive funding." },
          { title: "Guaranteed offers", detail: "No one can guarantee admission or a scholarship." },
          { title: "Free email domains", detail: "Offers from Gmail or similar instead of a university domain." },
          { title: "Pressure", detail: "Very short deadlines and requests for bank details." }
        ]
      },
      {
        heading: "How to verify",
        items: [
          { title: "Official sources", detail: "Find the program on the university's or government's own website." },
          { title: "Call or write independently", detail: "Use contact details from the official site, not from the message." },
          { title: "Ask the department", detail: "Confirm any professor or admissions email with the department office." }
        ]
      }
    ],
    mistakes: ["Paying an agent to 'secure' a seat.", "Sharing passport scans with unknown parties."],
    checklist: ["Official domain checked", "No payment for the award", "Offer confirmed by the department"],
    related: ["application-fee", "funding-types", "visa-interview"]
  },
  {
    id: "english-and-gre",
    summary: "Besides IELTS and TOEFL, some programs ask for GRE or accept Duolingo. Know which tests you actually need.",
    why: "Skipping an unneeded test saves money. Skipping a required one blocks your application.",
    timeline: "Check requirements 8–10 months ahead. Many programs have made the GRE optional.",
    sections: [
      {
        heading: "Which test, when",
        items: [
          { title: "GRE General", detail: "Needed by some US programs. Many computer science programs no longer require it. Check each page." },
          { title: "Duolingo English Test", detail: "Accepted by some universities as a cheaper option. Confirm before taking it." },
          { title: "Waivers", detail: "Degrees taught in English or studies in English-speaking countries can waive language tests." }
        ]
      },
      {
        heading: "Plan",
        items: [
          { title: "Make a table", detail: "List each program with required and optional tests." },
          { title: "Pick the fewest tests", detail: "Choose the test that satisfies most programs." }
        ]
      }
    ],
    mistakes: ["Taking the GRE for programs that do not need it.", "Assuming Duolingo is accepted everywhere."],
    checklist: ["Test requirement table", "One main test chosen", "Waiver rules checked"],
    related: ["ielts", "toefl", "application-fee"]
  }
];

export const getGuideDetail = (id: string) => guideDetails.find((g) => g.id === id);
