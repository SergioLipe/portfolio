/**
 * A CV-style entry: bold title on the left, muted period right-aligned, with
 * the organisation in italic muted grey underneath.
 */
export function EntryHeader({
  title,
  organisation,
  period,
  href,
  titleTone = "navy",
}: {
  title: string;
  organisation?: string;
  period: string;
  href?: string;
  titleTone?: "navy" | "copper";
}) {
  const heading = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-1 underline-offset-4 hover:decoration-2"
    >
      {title}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    title
  );

  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3
          className={`text-base font-bold ${
            titleTone === "copper" ? "text-copper" : "text-navy"
          }`}
        >
          {heading}
        </h3>
        <p className="shrink-0 text-sm tabular-nums text-muted">{period}</p>
      </div>
      {organisation ? (
        <p className="text-sm italic text-muted">{organisation}</p>
      ) : null}
    </>
  );
}
