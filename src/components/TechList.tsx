/**
 * The CV's middot-separated tech line, in muted grey.
 * Rendered as a list so it is announced as one to screen readers.
 */
export function TechList({
  items,
  label = "Tech stack",
}: {
  items: string[];
  label?: string;
}) {
  return (
    <ul
      aria-label={label}
      className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-x-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-rule">
              &middot;
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  );
}
