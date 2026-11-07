export const applicationPackage = {
  sop: {
    label: "Statement of purpose, opening paragraph (sample)",
    text: "In my MSc thesis I trained a model to find signs of diabetic eye disease using only 400 labelled images. Contrastive pre-training lifted the score from 0.78 to 0.86, but the model failed on images from a second clinic. That gap is the question I want to spend my PhD on: how to make label-efficient models stay reliable across hospitals. Your group's work on robust pre-training is the best place I know to study it."
  },
  cv: [
    "Education first, with CGPA scale and rank stated.",
    "Research section before projects: thesis, preprint, poster, with one number each.",
    "Skills listed by evidence, not by adjectives.",
    "Links to Scholar, code and a short project page.",
    "Two pages, PDF, one font."
  ],
  proposal: [
    "Question: how can self-supervised models stay accurate across scanners and clinics?",
    "Background: three papers, one of the professor's, and the gap between them.",
    "Method: pre-train on pooled unlabelled images, test on held-out sites.",
    "Plan: year 1 baseline, year 2 robustness method, year 3 clinical study and thesis.",
    "Why this lab: the supervisor's data access and prior work on exactly this problem."
  ]
,
  revisions: [
    { before: "I am passionate about artificial intelligence and want to do a PhD.", after: "I want to make label-efficient medical image models stay reliable across clinics.", why: "Replaces a feeling with a specific question a supervisor can judge." },
    { before: "I have good programming skills.", after: "My open repository reproduces three published methods with tests and a single command.", why: "Evidence that can be checked beats a claim." },
    { before: "Your lab is world-famous.", after: "Your 2025 paper leaves scanner shift open, which my experiments point to.", why: "Shows she read the work, not the reputation." },
    { before: "I hope to get funding.", after: "I am applying for your funded post and for a national scholarship as a second layer.", why: "Clear and honest about funding without sounding needy." }
  ],
  refereeBrief: {
    subject: "Reference request: PhD applications, deadlines from 20 March",
    to: "Dr. A. Sample (fictional), thesis supervisor",
    sent: "8 weeks before the first deadline",
    body: [
      "Dear Dr. Sample,",
      "Thank you again for supervising my thesis. I am applying for funded PhD positions in medical image analysis, and I would be grateful if you could write a reference letter for me.",
      "To make it easy, I attach my CV, my statement of purpose draft, my transcript and a table of the programmes with their deadlines and how each wants the letter sent. The first deadline is 20 March, so I would need the letter by 6 March.",
      "I have listed the three things I hope you can mention if you agree: my thesis, the cross-site experiment and my teamwork with the juniors I tutored. Please say no if you do not feel able to write a strong letter.",
      "Thank you very much for your time. Tania Rahman"
    ],
    notes: [
      { part: "Time", why: "Eight weeks ahead gives the referee room and a polite way to say no." },
      { part: "Materials", why: "A CV, draft and deadline table save the referee hours." },
      { part: "Specific points", why: "Three things to mention make the letter concrete." },
      { part: "Exit", why: "Letting the referee decline protects the strength of the letter." }
    ]
  }
};
