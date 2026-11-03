"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Native <dialog> control for the search dialog. The dialog component only exists while search is open,
 * so it opens itself on mount; `onClosed` fires when it closes (button, backdrop or Escape).
 */
export function useSearchDialog(onClosed: () => void) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    inputRef.current?.focus();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);
  return { dialogRef, inputRef, close, handleClosed: onClosed };
}
