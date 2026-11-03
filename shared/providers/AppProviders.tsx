import type { ReactNode } from "react";
import { ThemeProvider } from "@/modules/theme/ThemeProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryProvider } from "./QueryProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </QueryProvider>
    </ThemeProvider>
  );
}
