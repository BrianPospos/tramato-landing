import { ImageResponse } from "next/og";

export const alt = "Tramato — Todas tus carreras en un solo lugar, y explicadas";
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
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#f4f4f5",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 56, fontWeight: 800, letterSpacing: -2 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#c6ff3d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b0b0c",
              fontSize: 48,
            }}
          >
            ↗
          </div>
          <span>
            tramato<span style={{ color: "#c6ff3d" }}>.</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 800, letterSpacing: -3, lineHeight: 1.04 }}>
          <span>Todas tus carreras</span>
          <span>en un solo lugar.</span>
          <span style={{ color: "#c6ff3d" }}>Y explicadas.</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#a1a1a8" }}>
          <span>Beta en TestFlight · Android en camino</span>
          <span style={{ color: "#f4f4f5" }}>tramato.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
