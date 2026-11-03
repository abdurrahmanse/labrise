"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { OPEN_SEARCH_EVENT } from "@/shared/components/OpenSearchButton";

/** Open/close state of the search dialog, plus the Ctrl/Cmd+K shortcut and the header button's open event. */
export function useSearchDialog(onClosed: () => void) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    inputRef.current?.focus();
    setOpen(true);
  }, []);
  const close = useCallback(() => dialogRef.current?.close(), []);

  /** Wire to the dialog's onClose, which also fires for Escape. */
  const handleClosed = useCallback(() => {
    setOpen(false);
    onClosed();
  }, [onClosed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_SEARCH_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_SEARCH_EVENT, open);
    };
  }, [open]);

  return { dialogRef, inputRef, isOpen, open, close, handleClosed };
}
