import type { MetadataRoute } from "next";
import { queryAllBooks } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = await queryAllBooks();

  const bookUrls = books.map((book) => ({
    url: `https://designbooks.org/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://designbooks.org",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...bookUrls,
  ];
}
