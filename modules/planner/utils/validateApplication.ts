export interface ApplicationFormValues {
  name: string;
  deadline: string;
}

/** True for each field that is not valid. */
export type ApplicationFormErrors = { name?: boolean; deadline?: boolean };

/** Checks the form values only: a name and a deadline are required. It does not save anything. */
export function validateApplication({ name, deadline }: ApplicationFormValues) {
  const errors: ApplicationFormErrors = { name: !name.trim(), deadline: !deadline };
  return { errors, valid: !errors.name && !errors.deadline };
}
