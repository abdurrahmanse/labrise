import type { Table } from "../types";

export const call = {
  prepare: [
    "Reread the professor's three newest papers and wrote one question about each.",
    "Wrote a two-minute summary of her thesis with one number and one open problem.",
    "Prepared three questions about the position: funding length, supervision style, who else she would work with.",
    "Tested the video link, camera and a quiet room 15 minutes early."
  ],
  agenda: {
    head: ["Minute", "What happened"],
    rows: [
      { cells: ["0–3", "Short introductions; she thanked him for the time."] },
      { cells: ["3–8", "Her two-minute thesis summary, then his questions about the cross-site failure."] },
      { cells: ["8–20", "Technical discussion of his scanner-shift paper and how her proposal extends it."] },
      { cells: ["20–27", "Her questions: contract, supervision, team, expected output per year."] },
      { cells: ["27–30", "Next steps: send the two-page proposal and references; formal application to follow."] }
    ]
  } satisfies Table,
  questions: [
    "Is the position fully funded for the whole contract, and what does the salary cover?",
    "How often do students meet you, and who else would I work with day to day?",
    "What did your last PhD students publish, and where did they go next?",
    "Which part of my proposal would you change first?"
  ],
  afterwards: [
    "Sent a thank-you email within a day, with the proposal attached and one line on what she had learned.",
    "Wrote down every commitment from the call and its date.",
    "Updated her tracker and moved the group to \"formal application\"."
  ]
};
