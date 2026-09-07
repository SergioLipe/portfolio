import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact, site, siteUrl } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.intro,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.intro,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** Schema.org Person, so link previews and search results resolve correctly. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  description: site.intro,
  url: siteUrl,
  image: `${siteUrl}${site.photo.src}`,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Braga", addressCountry: "PT" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Instituto Politécnico do Cávado e do Ave (IPCA)",
  },
  sameAs: [contact.github.href, contact.linkedin.href],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only rounded-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-page"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main" className="grow">
          {children}
        </main>

        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
