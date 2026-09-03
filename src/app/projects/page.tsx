import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies on the Wheelchair Simulator, Montenova, TeamUP and Tournament Manager — the problems they solved, what was built, and the trade-offs behind them.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects",
    description:
      "Case studies on the Wheelchair Simulator, Montenova, TeamUP and Tournament Manager.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-navy">Projects</h1>
      <div className="rule mt-4 mb-8" aria-hidden="true" />

      <p className="max-w-[68ch] text-navy-soft">
        Four projects, spanning virtual reality, a SaaS product built in three
        weeks, a distributed microservices platform, and a database-driven web
        app. Each page covers the problem, what I built, the technical decisions
        and their trade-offs, and what I took away from it.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </div>
  );
}
