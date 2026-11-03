"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useMounted } from "@/shared/hooks/useMounted";

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
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-[4.25rem] shrink-0 cursor-pointer items-center border-2 border-white/40 bg-white/[0.04] px-1 transition-colors hover:border-indigo-400"
    >
      <Sun className="absolute left-2 h-4 w-4 text-slate-400" />
      <Moon className="absolute right-2 h-4 w-4 text-slate-400" />
      <span
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center border-2 border-transparent bg-indigo-600 text-white transition-transform duration-200",
          isDark ? "translate-x-[1.9rem]" : "translate-x-0"
        )}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
