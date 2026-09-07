import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { EntryHeader } from "@/components/EntryHeader";
import {
  aboutIntro,
  activities,
  awards,
  education,
  experience,
  languages,
  pathIntoSoftware,
  publications,
} from "@/content/about";
import { site, skillGroups } from "@/content/site";
import type { TimelineEntry } from "@/types/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer finishing a Master's at IPCA in Braga. Recipient of the OERN Master's Award, and author of published work on a VR wheelchair driving simulator.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About",
    description:
      "Software Engineer finishing a Master's at IPCA in Braga. Recipient of the OERN Master's Award, and author of published work on a VR wheelchair driving simulator.",
    url: "/about",
  },
};

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="space-y-8">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`}>
          <EntryHeader
            title={entry.title}
            organisation={entry.organisation}
            period={entry.period}
            href={entry.href}
          />
          <p className="mt-2 max-w-[68ch] text-navy-soft">{entry.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        About
      </h1>
      <div className="rule mt-4 mb-8" aria-hidden="true" />

      <div className="prose-cv text-lg leading-relaxed text-navy-soft">
        {aboutIntro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* How I got into software */}
      <section aria-labelledby="path-heading" className="mt-14">
        <SectionHeading id="path-heading">My path into software</SectionHeading>
        <div className="prose-cv text-navy-soft">
          {pathIntoSoftware.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Education, with the academic average in context */}
      <section aria-labelledby="education-heading" className="mt-14">
        <SectionHeading id="education-heading">Education</SectionHeading>
        <Timeline entries={education} />
      </section>

      {/* Awards */}
      <section aria-labelledby="awards-heading" className="mt-14">
        <SectionHeading id="awards-heading">Awards</SectionHeading>
        <Timeline entries={awards} />
      </section>

      {/* Publications and conferences */}
      <section aria-labelledby="publications-heading" className="mt-14">
        <SectionHeading id="publications-heading">
          Publications &amp; conferences
        </SectionHeading>
        <ul className="space-y-6">
          {publications.map((publication) => (
            <li key={`${publication.venue}-${publication.type}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-base font-bold text-navy">
                  {publication.title}
                </h3>
                <time
                  dateTime={publication.year}
                  className="shrink-0 text-sm tabular-nums text-muted"
                >
                  {publication.year}
                </time>
              </div>
              <p className="text-sm text-muted">
                <span className="italic">{publication.venue}</span>
                <span aria-hidden="true"> &middot; </span>
                {publication.type}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-heading" className="mt-14">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <Timeline entries={experience} />
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mt-14">
        <SectionHeading id="skills-heading">Skills</SectionHeading>
        <dl className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="text-base font-bold text-navy">{group.label}</dt>
              <dd className="mt-1 text-navy-soft">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Languages */}
      <section aria-labelledby="languages-heading" className="mt-14">
        <SectionHeading id="languages-heading">Languages</SectionHeading>
        <dl className="space-y-2">
          {languages.map((language) => (
            <div
              key={language.language}
              className="flex max-w-sm items-baseline justify-between gap-4 border-b border-rule pb-2"
            >
              <dt className="font-bold text-navy">{language.language}</dt>
              <dd className="text-sm text-muted">{language.level}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Outside work */}
      <section aria-labelledby="activities-heading" className="mt-14">
        <SectionHeading id="activities-heading">Outside work</SectionHeading>
        <Timeline entries={activities} />
      </section>

      <p className="mt-14 text-sm">
        <a
          href={site.cv.href}
          className="text-copper-ink underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          {site.cv.label}
        </a>
      </p>
    </div>
  );
}
