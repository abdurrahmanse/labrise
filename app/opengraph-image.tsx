import { ImageResponse } from "next/og";
import { ogText } from "@/content/text/hubs";

export const alt = `${ogText.title}: fully funded Master's and PhD`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f5f6fa",
          color: "#0f1b3d",
          border: "12px solid #3a5fe0"
        }}
      >
        <div style={{ fontSize: 28, color: "#3a5fe0", letterSpacing: 6 }}>{ogText.eyebrow}</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>{ogText.title}</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#4a5878" }}>{ogText.subtitle}</div>
      </div>
    ),
    size
  );
}
