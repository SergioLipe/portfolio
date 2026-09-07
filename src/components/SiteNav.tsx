"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

/**
 * The only client component on the site. It exists solely so the current page
 * can be marked with `aria-current`; there is no interactive state. With three
 * items the list fits on the narrowest phone, so there is no menu to toggle.
 *
 * Every item is the link colour, so the current page is marked by an underline
 * rather than by a colour of its own.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-x-6 sm:gap-x-8">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center text-sm font-medium text-link transition-colors duration-150 hover:text-link-ink ${
                  isActive
                    ? "underline decoration-2 underline-offset-[6px]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
