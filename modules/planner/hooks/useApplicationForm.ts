"use client";

import { useEffect, useState, type FormEvent } from "react";
import { readPrefill } from "../utils/prefill";
import { findSuggestion, kindOfSuggestion } from "../utils/suggestions";
import { validateApplication, type ApplicationFormErrors } from "../utils/validateApplication";
import { usePlanner, type ApplicationKind } from "../store/usePlanner";
import { useNameSuggestions } from "./useNameSuggestions";

/** Form state for adding an application: fields, field errors, name suggestions and the submit that saves to the planner. */
export function useApplicationForm() {
  const add = usePlanner((s) => s.add);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [kind, setKind] = useState<ApplicationKind>("university");
  const [errors, setErrors] = useState<ApplicationFormErrors>({});
  const [href, setHref] = useState<string | undefined>();
  const [prefilled, setPrefilled] = useState(false);
  const suggestions = useNameSuggestions(name);

  // A link from a scholarship or university page can pass the name, type and page; the URL exists only in the browser.
  useEffect(() => {
    const prefill = readPrefill(window.location.search);
    if (!prefill) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the URL once after mount
    setName(prefill.name);
    setKind(prefill.kind);
    setHref(prefill.href);
    setPrefilled(true);
  }, []);

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
    add({ name: name.trim(), kind, deadline, href: findSuggestion(suggestions, name)?.href ?? href });
    setName("");
    setDeadline("");
    setHref(undefined);
    setPrefilled(false);
  };

  return { name, deadline, kind, errors, suggestions, prefilled, changeName, changeDeadline, setKind, submit };
}
