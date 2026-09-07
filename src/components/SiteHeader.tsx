import Link from "next/link";
import { site } from "@/content/site";
import { SiteNav } from "@/components/SiteNav";

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-base font-bold tracking-tight text-navy transition-colors duration-150 hover:text-link-ink"
        >
          {site.name}
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
