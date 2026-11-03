"use client";

import { useState, type FormEvent } from "react";
import { buildMailto } from "../utils/buildMailto";
import type { ContactErrors, ContactValues } from "../utils/contactSchema";
import { validateContact } from "../utils/validateContact";

const EMPTY: ContactValues = { topic: "correction", name: "", email: "", page: "", message: "" };

/** Form state for the contact page: field values, field errors, and the message once it has been sent. */
export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState<ContactValues | null>(null);

  /** Editing a field clears that field's error. */
  const setField = <K extends keyof ContactValues>(key: K, value: ContactValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const result = validateContact(values);
    if (!result.success) return setErrors(result.errors);
    setSent(result.data);
    window.location.href = buildMailto(result.data);
  };

  const reset = () => {
    setSent(null);
    setValues(EMPTY);
  };

  return { values, errors, sent, setField, submit, reset };
}
