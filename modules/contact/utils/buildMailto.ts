import { contactInfo, contactPageText, contactTopics } from "@/data/text/contact";
import type { ContactValues } from "./contactSchema";

/** The message as plain text, also shown so it can be copied if the email app does not open. */
export function buildMessage(values: ContactValues) {
  const topic = contactTopics.find((t) => t.value === values.topic)?.label ?? values.topic;
  const subject = contactPageText.mail.subject(topic, values.page);
  const lines = [
    contactPageText.mail.from(values.name, values.email),
    ...(values.page ? [contactPageText.mail.page(values.page)] : []),
    "",
    values.message
  ];
  return { subject, body: lines.join("\n") };
}

export function buildMailto(values: ContactValues) {
  const { subject, body } = buildMessage(values);
  return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
