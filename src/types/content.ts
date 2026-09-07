/**
 * Content model for the site.
 *
 * All page copy lives in `src/content/*.ts` as typed data — there is no CMS.
 */

export type LinkKind = "live" | "store" | "code" | "download" | "article";

export type ProjectLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

/** A screenshot of the project, served from `public/`. */
export type ProjectImage = {
  src: string;
  /** What the shot actually shows, for anyone who cannot see it. */
  alt: string;
  /** Intrinsic size, so the layout reserves the right space before it loads. */
  width: number;
  height: number;
  caption?: string;
};

/** A technical decision and the trade-off it carried. */
export type Decision = {
  title: string;
  /** The reasoning: what was chosen, what was given up, and why. */
  body: string;
};

export type Project = {
  slug: string;
  /** Display title, as it appears on the CV. */
  title: string;
  year: string;
  /** One line, used on cards and as the page's meta description. */
  tagline: string;
  /** Two or three sentences of factual framing, drawn from the CV and repo. */
  summary: string;
  /** Who it was built with or for, when that matters. */
  context?: string;
  /** Sérgio's role, when it was a defined one. */
  role?: string;
  stack: string[];
  links: ProjectLink[];
  /** Conference presentations, publications, awards. */
  recognition?: string[];
  /** Verified facts about the build, safe to show before the prose is written. */
  highlights?: string[];
  /** Screenshots, shown under "What I built". */
  images?: ProjectImage[];
  body: {
    /** The problem it solved. */
    problem: string[];
    /** What was actually built. */
    built: string[];
    /** Key technical decisions and trade-offs. */
    decisions: Decision[];
    /** What was learned. */
    learned: string[];
  };
};

export type TimelineEntry = {
  title: string;
  organisation?: string;
  period: string;
  description: string;
  href?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  type: "Journal article" | "Short paper" | "Conference presentation";
  href?: string;
};

export type LanguageSkill = {
  language: string;
  level: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};
