import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Intro — the CV's masthead, restated at page scale. */}
      <section aria-labelledby="intro-heading">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            width={160}
            height={160}
            priority
            sizes="160px"
            className="size-32 shrink-0 rounded-full object-cover ring-1 ring-rule sm:size-40"
          />

          <div>
            <h1
              id="intro-heading"
              className="text-4xl font-bold tracking-tight text-navy sm:text-5xl"
            >
              {site.name}
            </h1>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-copper">
              {site.role}
            </p>
            <p className="mt-5 max-w-[62ch] text-navy-soft">{site.homeIntro}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="projects-heading" className="mt-16">
        <SectionHeading id="projects-heading">Projects</SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>

        <p className="mt-8 text-sm">
          <Link
            href="/about"
            className="text-copper-ink underline decoration-1 underline-offset-4 hover:decoration-2"
          >
            More about my background and research
          </Link>
        </p>
      </section>
    </div>
  );
}
