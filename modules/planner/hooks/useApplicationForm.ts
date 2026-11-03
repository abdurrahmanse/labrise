"use client";

import { useState, type FormEvent } from "react";
import { findSuggestion, kindOfSuggestion } from "../lib/suggestions";
import { validateApplication, type ApplicationFormErrors } from "../lib/validateApplication";
import { usePlanner, type ApplicationKind } from "../store/usePlanner";
import { useNameSuggestions } from "./useNameSuggestions";

/** Form state for adding an application: fields, field errors, name suggestions and the submit that saves to the planner. */
export function useApplicationForm() {
  const add = usePlanner((s) => s.add);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [kind, setKind] = useState<ApplicationKind>("university");
  const [errors, setErrors] = useState<ApplicationFormErrors>({});
  const suggestions = useNameSuggestions(name);

  /** Typing a name that matches a suggestion also picks its kind. */
  const changeName = (value: string) => {
    setName(value);
    setErrors((e) => ({ ...e, name: false }));
    const match = findSuggestion(suggestions, value);
    const matchedKind = match && kindOfSuggestion(match);
    if (matchedKind) setKind(matchedKind);
  };

  const changeDeadline = (value: string) => {
    setDeadline(value);
    setErrors((e) => ({ ...e, deadline: false }));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const result = validateApplication({ name, deadline });
    setErrors(result.errors);
    if (!result.valid) return;
    add({ name: name.trim(), kind, deadline, href: findSuggestion(suggestions, name)?.href });
    setName("");
    setDeadline("");
  };

  return { name, deadline, kind, errors, suggestions, changeName, changeDeadline, setKind, submit };
}
