"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/shared/utils/cn";
import { useMounted } from "@/shared/hooks/useMounted";
import { commonText } from "@/content/text/common";

/** Two-state switch: click anywhere on the track to flip between light and dark. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // next-themes only knows the theme on the client; avoid a hydration mismatch.
  const mounted = useMounted();

  const isDark = !mounted || resolvedTheme !== "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={commonText.theme.toggleLabel}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full sm:w-[4.25rem] sm:justify-start border border-white/15 bg-white/[0.04] px-1 transition-colors hover:border-indigo-400"
    >
      <Sun className="absolute left-2 hidden h-4 w-4 text-slate-400 sm:block" />
      <Moon className="absolute right-2 hidden h-4 w-4 text-slate-400 sm:block" />
      <span
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white transition-transform duration-200",
          isDark ? "sm:translate-x-[1.9rem]" : "sm:translate-x-0"
        )}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
