import type { Table } from "../types";

/** How she found groups and funding before she wrote a single email. */
export const search = {
  steps: [
    "Wrote her question in one line, then three keyword sets for it (method, data type, problem).",
    "Searched the Labrise directory by field, then filtered labs by country and read each lab page.",
    "Searched Google Scholar and arXiv for the last three years of papers on her keywords and noted which groups appeared repeatedly.",
    "Opened each group's page to check for a \"join us\" or open positions section, and the date it was last updated.",
    "Checked the university's PhD pages and funding rules, and the official scholarship pages, never a third-party summary.",
    "Logged everything in one sheet before judging any group."
  ],
  queries: [
    "\"self-supervised\" \"medical image\" \"domain shift\"",
    "\"label-efficient\" segmentation retina",
    "\"open PhD position\" computer vision medical Germany",
    "site:.de \"PhD position\" \"medical image analysis\""
  ],
  log: {
    head: ["Group", "Recent papers on her topic", "Hiring?", "Funding stated", "Decision"],
    rows: [
      { cells: ["Vision group A (RWTH Aachen)", "3 in 2 years", "Yes, post listed", "Salaried, 3 years", "Contact"] },
      { cells: ["Medical AI group B (Tübingen)", "4 in 2 years", "Yes", "Salaried, 3 years", "Contact"] },
      { cells: ["Imaging lab C (Heidelberg)", "2 in 2 years", "Unclear", "Project-based", "Contact once"] },
      { cells: ["Robust ML group D (ETH Zurich)", "5 in 2 years", "Page 2 years old", "Not stated", "Ask politely"] },
      { cells: ["Vision lab E", "1 in 2 years", "No", "None stated", "Dropped"] },
      { cells: ["Medical lab F", "0 on her topic", "Yes", "Stated", "Dropped: no fit"] }
    ],
    note: "Her rule: no email unless the group is hiring, funded and active on her topic. This kept her list short and her emails relevant."
  } satisfies Table
};
