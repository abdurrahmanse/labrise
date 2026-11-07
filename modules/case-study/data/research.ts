import type { Table } from "../types";

export const research = {
  interests: [
    "Label-efficient learning: training medical image models when only a few hundred expert labels exist.",
    "Robustness: models that stay reliable across hospitals, scanners and populations.",
    "Explanations a clinician can check, not only a score."
  ],
  matching: [
    "She listed her own evidence first: a thesis, a preprint, a poster and a public repository.",
    "She searched the directory by field and read each lab's last five papers, noting method, data and open questions.",
    "She wrote one sentence per lab: \"My thesis on X connects to your paper on Y because Z.\" If she could not write it honestly, she dropped the lab.",
    "She checked that each group was hiring and had funded posts before writing."
  ],
  fit: {
    head: ["What the lab needs", "Her evidence", "Match", "Action"],
    rows: [
      { cells: ["Self-supervised learning on images", "Thesis and preprint use it", "Strong", "Lead the email with this"] },
      { cells: ["Medical or clinical data", "Retina dataset, public benchmark", "Strong", "Link the repository"] },
      { cells: ["Strong Python and PyTorch", "Open code with tests", "Strong", "Mention in CV"] },
      { cells: ["Publications", "1 preprint, no journal paper yet", "Partial", "Say a submission is in progress"] },
      { cells: ["Teaching or supervision", "Tutored 2 juniors", "Partial", "One line in the CV"] },
      { cells: ["German language", "A1 only", "Gap", "Not required, plan a course"] }
    ],
    note: "A fit table like this tells you where to put effort. A gap is fine if you name it and have a plan."
  } satisfies Table
};
