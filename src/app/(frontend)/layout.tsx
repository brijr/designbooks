import "../globals.css";

import { Manrope as Font } from "next/font/google";
import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Books | A Collection of Books on Design by Bridger Tower",
  description:
    "A collection of books on design by Bridger Tower. Discover your next favorite book on design.",
  metadataBase: new URL("https://designbooks.org"),
};

const font = Font({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen text-zinc-950 bg-zinc-50 selection:bg-orange-200">
        <main className="p-6 sm:p-12 grid gap-12 max-w-7xl">
          <h2 className="font-medium">
            <Link href="/" className="group">
              Design Books{" "}
              <span className="hidden group-hover:inline-block">*</span>
            </Link>
          </h2>
          {children}
        </main>
      </body>
    </html>
  );
}
