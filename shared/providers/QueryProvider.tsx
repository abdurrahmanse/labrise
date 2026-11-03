"use client";

import { useState, type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createQueryClient } from "../query/createQueryClient";
import { createPersister, persistOptions } from "../query/persister";

export function QueryProvider({ children }: { children: ReactNode }) {
  // One client per browser session, created in state so it is never shared between server requests.
  const [client] = useState(createQueryClient);
  const [persister] = useState(createPersister);
  const isBrowser = typeof window !== "undefined";

  const devtools = process.env.NODE_ENV === "development" ? <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" /> : null;

  if (!isBrowser) return <QueryClientProvider client={client}>{children}</QueryClientProvider>;

  return (
    <PersistQueryClientProvider client={client} persistOptions={{ persister, ...persistOptions }}>
      {children}
      {devtools}
    </PersistQueryClientProvider>
  );
}
