import Link from "next/link";
import type { Project } from "@/types/content";
import { TechList } from "@/components/TechList";

/**
 * A project entry in the CV's layout: copper title, muted year right-aligned,
 * tagline beneath, tech line last. The whole card is one link.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-sm border border-rule bg-page p-6 transition-[border-color,transform,box-shadow] duration-150 hover:-translate-y-px hover:border-copper/60 hover:shadow-[0_1px_12px_rgba(38,50,62,0.06)]"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-bold text-copper group-hover:text-copper-ink">
            {project.title}
          </h3>
          <time
            dateTime={project.year}
            className="shrink-0 text-sm tabular-nums text-muted"
          >
            {project.year}
          </time>
        </div>

        <p className="mt-3 grow text-[0.95rem] leading-relaxed text-navy-soft">
          {project.tagline}
        </p>

        <div className="mt-5">
          <TechList
            items={project.stack.slice(0, 4)}
            label={`${project.title} tech stack`}
          />
        </div>
      </Link>
    </li>
  );
}
