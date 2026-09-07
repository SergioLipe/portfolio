import type { LinkKind, ProjectLink } from "@/types/content";

const iconPaths: Record<LinkKind, React.ReactNode> = {
  // Globe
  live: (
    <>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M1.75 8h12.5M8 1.75c1.6 1.7 2.5 3.9 2.5 6.25S9.6 12.55 8 14.25c-1.6-1.7-2.5-3.9-2.5-6.25S6.4 3.45 8 1.75Z" />
    </>
  ),
  // Storefront
  store: (
    <>
      <path d="M2.25 6.25h11.5v7.5h-11.5z" />
      <path d="M1.75 6.25 3.25 2.25h9.5l1.5 4M6 13.75v-4h4v4" />
    </>
  ),
  // Code brackets
  code: (
    <>
      <path d="M5.5 4.75 1.75 8l3.75 3.25M10.5 4.75 14.25 8l-3.75 3.25M9.25 3 6.75 13" />
    </>
  ),
  // Download tray
  download: (
    <>
      <path d="M8 1.75v8.5M4.75 7 8 10.25 11.25 7M2.25 12.25v2h11.5v-2" />
    </>
  ),
  // Document
  article: (
    <>
      <path d="M3.75 1.75h6L12.25 4.25v10h-8.5z" />
      <path d="M9.25 1.75v3h3M6 8h4M6 10.75h4" />
    </>
  ),
};

function LinkIcon({ kind }: { kind: LinkKind }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {iconPaths[kind]}
    </svg>
  );
}

export function ProjectLinks({
  links,
  label = "Project links",
}: {
  links: ProjectLink[];
  label?: string;
}) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-x-6 gap-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium link"
          >
            <LinkIcon kind={link.kind} />
            <span>
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
