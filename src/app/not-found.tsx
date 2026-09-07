import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-copper">
        404
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy">
        Page not found
      </h1>
      <div className="rule mt-4 mb-6" aria-hidden="true" />
      <p className="max-w-[62ch] text-navy-soft">
        That page does not exist. Try the{" "}
        <Link
          href="/projects"
          className="link"
        >
          projects
        </Link>{" "}
        or head back{" "}
        <Link
          href="/"
          className="link"
        >
          home
        </Link>
        .
      </p>
    </div>
  );
}
