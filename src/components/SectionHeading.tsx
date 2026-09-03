/**
 * A section heading in the CV's style: small uppercase navy label, then a rule
 * made of a short copper segment followed by light grey.
 */
export function SectionHeading({
  children,
  as: Tag = "h2",
  id,
}: {
  children: React.ReactNode;
  as?: "h2" | "h3";
  id?: string;
}) {
  return (
    <div className="mb-6">
      <Tag
        id={id}
        className="text-xs font-bold uppercase tracking-[0.14em] text-navy"
      >
        {children}
      </Tag>
      <div className="rule mt-2" aria-hidden="true" />
    </div>
  );
}
