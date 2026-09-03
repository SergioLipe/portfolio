# Personal portfolio — Sérgio Gonçalves

Next.js (App Router) + TypeScript + Tailwind v4. No CMS: all content lives in
typed data files under `src/content/`. Every route is statically prerendered.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npm run typecheck
```

## Where the content lives

| File | What it holds |
| --- | --- |
| `src/content/site.ts` | Name, role, intro, contact links, skills, `siteUrl` |
| `src/content/projects.ts` | The four case studies |
| `src/content/about.ts` | Education, awards, publications, experience, languages |
| `src/types/content.ts` | The shapes the above must satisfy |

See [PLACEHOLDERS.md](./PLACEHOLDERS.md) for what is still to be written.

## Design system

Taken from the CV. Tokens are defined once, in the `@theme` block at the top of
`src/app/globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| `navy` | `#26323E` | Body text, section headings, structure |
| `navy-soft` | `#3D4B59` | Longer-form body copy |
| `copper` | `#C06C2C` | Project titles, rule segment, focus ring |
| `copper-ink` | `#A45A20` | Inline link text |
| `muted` | `#63707C` | Dates, secondary text |
| `rule` | `#DDDDD8` | Hairlines |

**On the two coppers.** The CV's copper is `rgb(192,108,44)`. Against white it
measures 3.86:1 — fine for large text and non-text accents, where the WCAG bar
is 3:1, but under the 4.5:1 required for body text. So the CV copper is used
verbatim for headings and accents, and `copper-ink` (5.2:1) for inline links.
They are indistinguishable side by side.

The section rule — a short copper segment then light grey, as on the CV — is the
`.rule` class in `globals.css`, one element and one gradient.

## Accessibility

- Semantic landmarks, one `h1` per page, no skipped heading levels.
- Skip link to `#main` as the first focusable element.
- A single visible focus ring in copper, never removed.
- Alt text on the portrait; all icons `aria-hidden` with text labels alongside.
- Links that open a new tab announce it via visually-hidden text.
- Interactive targets are at least 44px tall.
- All text meets WCAG AA contrast.
- `prefers-reduced-motion` disables the hover transitions.

## Performance

Every page is static HTML. Inter is self-hosted through `next/font` — no
external font request. The only client component is `SiteNav`, which exists
solely to mark the current page with `aria-current`. Open Graph cards are
generated at build time by `next/og`.

## Deploying to Vercel

1. Push to a Git repository and import it at [vercel.com/new](https://vercel.com/new).
   Framework preset, build command and output directory are all detected.
2. Add the custom domain in the project's Domains settings.
3. Set `siteUrl` in `src/content/site.ts` to that domain and redeploy.

No environment variables are needed.
