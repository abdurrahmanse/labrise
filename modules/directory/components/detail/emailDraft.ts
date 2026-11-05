import type { ProfessorEntry } from "../../types";

/** A short starting draft with the professor's name and field filled in. */
export function buildEmailDraft(professor: ProfessorEntry) {
  const lastName = professor.name.split(" ").slice(-1)[0];
  return `Subject: PhD inquiry: ${professor.group.toLowerCase()}

Dear Professor ${lastName},

I am [Your name], a [final-year BSc / MSc] student at [University], working on [your topic]. I read your paper "[Paper title]" and was interested in [one specific point].

In my [thesis / project] I [one sentence with a measurable result]. I think this connects to your work on ${professor.group.toLowerCase()}.

Do you expect funded PhD openings for [year]? If so, may I send more details or arrange a 15-minute call? My CV is attached.

Thank you for your time.
[Your name] | [Portfolio / Google Scholar link]`;
}
