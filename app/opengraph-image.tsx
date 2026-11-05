import { ImageResponse } from "next/og";
import { brand } from "@/content/site/brand";
import { ogText } from "@/content/text/hubs";
import { Logo } from "@/shared/ui/Logo";

export const alt = `${brand.name}: ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { blue, ink, paper } = brand.colors;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: paper, color: ink, border: `12px solid ${blue}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Logo size={120} />
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>{ogText.title}</div>
        </div>
        <div style={{ fontSize: 30, color: blue, letterSpacing: 5, marginTop: 40 }}>{ogText.eyebrow}</div>
        <div style={{ fontSize: 36, marginTop: 20, color: "#000000" }}>{ogText.subtitle}</div>
      </div>
    ),
    size
  );
}
