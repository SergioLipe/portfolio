import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The site-wide link-preview card, drawn in the CV palette. */
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
          backgroundColor: "#ffffff",
          padding: "96px",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 82,
            fontWeight: 700,
            color: "#26323E",
            letterSpacing: "-0.025em",
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 30,
            fontWeight: 700,
            color: "#C06C2C",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {site.role}
        </div>

        {/* The CV rule: short copper segment, then light grey. */}
        <div style={{ display: "flex", marginTop: 40, height: 5 }}>
          <div style={{ width: 130, backgroundColor: "#C06C2C" }} />
          <div style={{ flexGrow: 1, backgroundColor: "#DDDDD8" }} />
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            lineHeight: 1.45,
            color: "#3D4B59",
            maxWidth: 900,
          }}
        >
          Full-stack, mobile and virtual reality. Master&apos;s in Software
          Engineering at IPCA, Braga.
        </div>
      </div>
    ),
    size,
  );
}
