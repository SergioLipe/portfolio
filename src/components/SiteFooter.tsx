import { contact, site } from "@/content/site";

const icons = {
  email: (
    <>
      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1" />
      <path d="m2.25 4 5.75 4.5L13.75 4" />
    </>
  ),
  github: (
    <path d="M8 1.5a6.5 6.5 0 0 0-2.06 12.67c.33.06.45-.14.45-.31v-1.2c-1.81.39-2.19-.87-2.19-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.52.71 1.89.54.06-.42.23-.71.41-.87-1.44-.16-2.96-.72-2.96-3.21 0-.71.25-1.29.67-1.75-.07-.16-.29-.82.06-1.71 0 0 .55-.17 1.79.67a6.2 6.2 0 0 1 3.26 0c1.24-.84 1.79-.67 1.79-.67.35.89.13 1.55.06 1.71.42.46.67 1.04.67 1.75 0 2.5-1.53 3.05-2.98 3.21.24.2.44.6.44 1.21v1.79c0 .17.12.38.45.31A6.5 6.5 0 0 0 8 1.5Z" />
  ),
  linkedin: (
    <>
      <rect x="1.75" y="1.75" width="12.5" height="12.5" rx="1.5" />
      <path d="M5 6.75v4.5M5 4.4v.1M8 11.25v-4.5M8 8.4c0-1 .6-1.65 1.5-1.65s1.5.65 1.5 1.65v2.85" />
    </>
  ),
};

function ContactIcon({ name }: { name: keyof typeof icons }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      {icons[name]}
    </svg>
  );
}

/**
 * Present on every page — this is how contact details stay reachable from
 * anywhere on the site.
 */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-rule bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-navy">
          Contact
        </h2>
        <div className="rule mt-2 mb-6" aria-hidden="true" />

        <ul className="flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-11 items-center gap-2 text-sm link"
            >
              <ContactIcon name="email" />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm link"
            >
              <ContactIcon name="github" />
              {contact.github.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm link"
            >
              <ContactIcon name="linkedin" />
              {contact.linkedin.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <p className="mt-8 text-sm text-muted">
          {site.location} &middot; &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
