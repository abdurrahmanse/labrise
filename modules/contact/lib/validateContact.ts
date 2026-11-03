import { contactSchema, type ContactErrors, type ContactValues } from "./contactSchema";

export type ContactValidation = { success: true; data: ContactValues } | { success: false; errors: ContactErrors };

/** Checks the form values only. It neither sends anything nor touches React state. */
export function validateContact(values: ContactValues): ContactValidation {
  const result = contactSchema.safeParse(values);
  if (result.success) return { success: true, data: result.data };

  const errors: ContactErrors = {};
  for (const issue of result.error.issues) errors[issue.path[0] as keyof ContactValues] = true;
  return { success: false, errors };
}
