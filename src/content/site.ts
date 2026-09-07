import type { SkillGroup } from "@/types/content";

/**
 * The base for canonical URLs, Open Graph images and the sitemap. No trailing
 * slash: paths are appended to it directly.
 */
export const siteUrl = "https://www.sergiogoncalves.dev";

export const site = {
  name: "Sérgio Gonçalves",
  /** Full legal name, used in structured data only. */
  fullName: "Sérgio Filipe Azevedo Gonçalves",
  role: "Software Engineer",
  location: "Braga, Portugal",
  /** The CV's summary line, verbatim. */
  intro:
    "Software Engineering Master's student with experience in full-stack, mobile and game development. Recipient of an academic merit award and author of scientific papers on my VR simulator.",
  /** A slightly longer opening for the home page. */
  homeIntro:
    "I build software across the stack: web platforms, mobile apps, and virtual reality. I am finishing a Master's in Software Engineering at IPCA, where my final project is a VR wheelchair driving simulator now being tested in real rehabilitation settings.",
  photo: {
    src: "/sergio-goncalves.jpg",
    alt: "Sérgio Gonçalves, a portrait photograph.",
  },
  /** Both language versions, generated from the LaTeX in the CV folder. */
  cv: [
    { href: "/CV_Sergio_Goncalves_ENG.pdf", label: "Download CV (English)" },
    { href: "/CV_Sergio_Goncalves_PT.pdf", label: "Download CV (Português)" },
  ],
} as const;

export const contact = {
  email: "Lipe.Sergio@outlook.com",
  github: {
    label: "github.com/SergioLipe",
    href: "https://github.com/SergioLipe",
  },
  linkedin: {
    label: "linkedin.com/in/sérgio-gonçalves-343334291",
    /**
     * Percent-encoded: the slug's accented characters must be escaped because
     * this URL is also emitted into the JSON-LD `sameAs` array in layout.tsx,
     * where a raw non-ASCII URL is not reliably parsed by crawlers.
     */
    href: "https://www.linkedin.com/in/s%C3%A9rgio-gon%C3%A7alves-343334291/",
  },
} as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C#", "JavaScript", "TypeScript", "Java", "Python", "PHP", "Kotlin", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Laravel", "React", "Next.js", "Unity", "Virtual Reality", "Jetpack Compose", "Bootstrap"],
  },
  {
    label: "Architecture & APIs",
    items: ["REST APIs", "Microservices", "Third-party API integration", "RabbitMQ"],
  },
  {
    label: "Infrastructure & Data",
    items: ["Docker", "Kubernetes", "Vercel", "PostgreSQL", "MySQL", "NoSQL", "Supabase", "Git", "Linux"],
  },
  {
    label: "AI-Assisted Development",
    items: ["Claude Code", "Claude API"],
  },
];
