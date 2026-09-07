import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectGallery } from "@/components/ProjectGallery";
import { TechList } from "@/components/TechList";
import { getProject, projects } from "@/content/projects";
import type { Decision } from "@/types/content";

type PageProps = { params: Promise<{ slug: string }> };

/** Every case study is rendered at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.tagline,
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
    },
  };
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="prose-cv text-navy-soft">
      {items.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function Decisions({ items }: { items: Decision[] }) {
  return (
    <ul className="space-y-7">
      {items.map((decision) => (
        <li key={decision.title}>
          <h3 className="text-base font-bold text-navy">{decision.title}</h3>
          <p className="mt-1.5 max-w-[68ch] text-navy-soft">{decision.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Title block */}
      <header>
        <p className="text-sm">
          <Link
            href="/projects"
            className="link"
          >
            Projects
          </Link>
        </p>

        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          {/* Copper, matching the CV's project entries and the cards it was
              reached from. The person's name stays navy; projects are copper. */}
          <h1 className="text-4xl font-bold tracking-tight text-copper sm:text-5xl">
            {project.title}
          </h1>
          <time
            dateTime={project.year}
            className="text-base tabular-nums text-muted"
          >
            {project.year}
          </time>
        </div>

        <div className="rule mt-4" aria-hidden="true" />

        <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-navy-soft">
          {project.summary}
        </p>

        {project.context || project.role ? (
          <dl className="mt-6 space-y-3 border-l-2 border-copper/40 pl-5">
            {project.context ? (
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Context
                </dt>
                <dd className="mt-1 max-w-[62ch] text-sm text-navy-soft">
                  {project.context}
                </dd>
              </div>
            ) : null}
            {project.role ? (
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  Role
                </dt>
                <dd className="mt-1 max-w-[62ch] text-sm text-navy-soft">
                  {project.role}
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}
      </header>

      {/* The problem it solved */}
      <section aria-labelledby="problem-heading" className="mt-14">
        <SectionHeading id="problem-heading">The problem</SectionHeading>
        <Paragraphs items={project.body.problem} />
      </section>

      {/* What I built */}
      <section aria-labelledby="built-heading" className="mt-14">
        <SectionHeading id="built-heading">What I built</SectionHeading>
        <Paragraphs items={project.body.built} />

        {project.images?.length ? (
          <ProjectGallery images={project.images} />
        ) : null}

        {project.highlights?.length ? (
          <ul className="mt-8 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative max-w-[68ch] pl-6 text-navy-soft before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-copper before:content-['']"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* Technical decisions and trade-offs */}
      <section aria-labelledby="decisions-heading" className="mt-14">
        <SectionHeading id="decisions-heading">
          Decisions &amp; trade-offs
        </SectionHeading>
        <Decisions items={project.body.decisions} />
      </section>

      {/* What I learned */}
      <section aria-labelledby="learned-heading" className="mt-14">
        <SectionHeading id="learned-heading">What I learned</SectionHeading>
        <Paragraphs items={project.body.learned} />
      </section>

      {/* Recognition, where there is any */}
      {project.recognition?.length ? (
        <section aria-labelledby="recognition-heading" className="mt-14">
          <SectionHeading id="recognition-heading">Recognition</SectionHeading>
          <ul className="space-y-2">
            {project.recognition.map((item) => (
              <li
                key={item}
                className="relative pl-6 text-navy-soft before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-copper before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Tech stack */}
      <section aria-labelledby="stack-heading" className="mt-14">
        <SectionHeading id="stack-heading">Tech stack</SectionHeading>
        <TechList items={project.stack} label={`${project.title} tech stack`} />
      </section>

      {/* Links */}
      <section aria-labelledby="links-heading" className="mt-14">
        <SectionHeading id="links-heading">Links</SectionHeading>
        <ProjectLinks
          links={project.links}
          label={`${project.title} links`}
        />
      </section>
    </article>
  );
}
