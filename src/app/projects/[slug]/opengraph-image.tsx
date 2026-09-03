import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** A per-project link-preview card, in the same CV palette. */
export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

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
            fontSize: 26,
            fontWeight: 700,
            color: "#63707C",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 76,
            fontWeight: 700,
            color: "#C06C2C",
            letterSpacing: "-0.02em",
          }}
        >
          {project?.title ?? "Project"}
        </div>

        <div style={{ display: "flex", marginTop: 36, height: 5 }}>
          <div style={{ width: 130, backgroundColor: "#C06C2C" }} />
          <div style={{ flexGrow: 1, backgroundColor: "#DDDDD8" }} />
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            lineHeight: 1.45,
            color: "#3D4B59",
            maxWidth: 940,
          }}
        >
          {project?.tagline ?? ""}
        </div>
      </div>
    ),
    size,
  );
}
