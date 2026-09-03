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
                className={`inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-copper-ink"
                    : "text-navy-soft hover:text-copper-ink"
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
