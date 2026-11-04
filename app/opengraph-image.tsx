import { ImageResponse } from "next/og";
import { brand } from "@/content/site/brand";
import { ogText } from "@/content/text/hubs";

export const alt = `${brand.name}: ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { blue, gold, ink, paper } = brand.colors;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: paper, color: ink, border: `12px solid ${blue}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="120" height="120" viewBox="0 0 64 64">
            <rect width="64" height="64" fill={blue} />
            <path d="M16 12h30v9H27v8h14v9H27v14h-11Z" fill="#fff" />
            <path d="M38 43l9 7-9 7" fill="none" stroke={gold} strokeWidth="5" />
          </svg>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{ogText.title}</div>
        </div>
        <div style={{ fontSize: 30, color: blue, letterSpacing: 5, marginTop: 40 }}>{ogText.eyebrow}</div>
        <div style={{ fontSize: 36, marginTop: 20, color: "#4a5878" }}>{ogText.subtitle}</div>
      </div>
    ),
    size
  );
}
