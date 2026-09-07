# Content status

Every placeholder is written. All four case studies have their full `body`
(problem, built, decisions, learned), and `pathIntoSoftware` on the About page
is filled in.

The `<Placeholder>` component has been deleted and the `| null` unions are gone
from `src/types/content.ts`, so TypeScript now requires every body field on any
project added from here on.

## Notes on the content

Prose on this site avoids em dashes by choice. When adding copy, use a comma,
colon or parentheses instead.


`highlights` is an optional list of verified facts that renders under "What I
built". It existed to make a page read as substantial before the prose was
written, so now that the prose exists it should only carry facts the prose does
not. Wheelchair Simulator has none left for that reason; Tournament Manager
keeps two.
