"use client";

import { useState, type ReactNode } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createQueryClient } from "../../shared/query/createQueryClient";
import { createPersister, persistOptions } from "../../shared/query/persister";

export function QueryProvider({ children }: { children: ReactNode }) {
  // One client per browser session, created in state so it is never shared between server requests.
  const [client] = useState(createQueryClient);
  const [persister] = useState(createPersister);

  // The same tree renders on the server and in the browser. The saved cache is read after hydration.
  return (
    <PersistQueryClientProvider client={client} persistOptions={{ persister, ...persistOptions }}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />}
    </PersistQueryClientProvider>
  );
}
