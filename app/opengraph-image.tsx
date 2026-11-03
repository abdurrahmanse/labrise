import { ImageResponse } from "next/og";

export const alt = "Scholarship Roadmap: fully funded Master's and PhD";
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
        <div style={{ fontSize: 28, color: "#3a5fe0", letterSpacing: 6 }}>FULLY FUNDED MASTER&apos;S &amp; PHD</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>Scholarship Roadmap</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#4a5878" }}>Steps, guides, countries, universities, professors</div>
      </div>
    ),
    size
  );
}
