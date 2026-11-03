import { contactInfo } from "@/content/text/contact";
import { supportPageText as t } from "@/content/text/support";

/** A mailto link with the subject and a short form to fill in. `plan` names the help being asked for. */
export function buildSupportMailto(plan?: string) {
  const subject = plan ? t.mail.subject(plan) : t.mail.subjectGeneral;
  const body = t.mail.body(plan ?? "not sure yet");
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
