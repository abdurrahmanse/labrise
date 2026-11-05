"use client";

import { globalErrorText as t } from "@/content/text/status";

// Replaces the whole layout when the root layout itself fails, so it styles itself without the site CSS.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#ffffff", color: "#000000", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ maxWidth: 480, padding: 24, border: "2px solid #000000", background: "#fff", boxShadow: "8px 8px 0 #000000" }}>
          <h1 style={{ margin: "0 0 12px", fontSize: 28 }}>{t.title}</h1>
          <p style={{ margin: "0 0 20px", lineHeight: 1.6 }}>{t.body}</p>
          <button type="button" onClick={reset} style={{ cursor: "pointer", border: 0, background: "#000000", color: "#fff", padding: "12px 20px", fontWeight: 700 }}>
            {t.reload}
          </button>
        </main>
      </body>
    </html>
  );
}
