/** Which guide explains a document or step named in a checklist. First match wins. */
const RULES: [pattern: RegExp, href: string][] = [
  [/research proposal|study (or research )?proposal|project proposal/i, "/guides/research-proposal"],
  [/statement of purpose|\bsop\b|motivation|personal statement/i, "/guides/sop"],
  [/essay/i, "/guides/scholarship-essay"],
  [/\bcv\b|curriculum|résumé|resume/i, "/guides/cv"],
  [/referee|reference|recommendation/i, "/guides/reference-letter"],
  [/ielts|toefl|language|english/i, "/guides/ielts"],
  [/gre\b|gmat/i, "/guides/english-and-gre"],
  [/transcript|degree|certificate|attest/i, "/guides/document-attestation"],
  [/official page|eligibility/i, "/guides/read-a-call"],
  [/deadline|submit/i, "/guides/application-portals"],
  [/supervisor|professor/i, "/guides/cold-email"],
  [/visa/i, "/guides/visa-interview"]
];

export const guideForStep = (text: string): string | undefined => RULES.find(([pattern]) => pattern.test(text))?.[1];
