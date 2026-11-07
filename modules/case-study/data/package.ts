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
};
