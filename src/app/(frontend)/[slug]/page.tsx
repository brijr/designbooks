import { queryBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";

import Image from "next/image";
import Link from "next/link";

export const revalidate = 600;

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await queryBookBySlug({ slug });
  const cover: any = book?.image;

  if (!book) {
    return notFound();
  }

  return (
    <article className="grid gap-12">
      <div>
        <h2 className="font-medium">{book.title}</h2>
        <p>by {book.author}</p>
        <p>{book.description}</p>
      </div>

      <Image
        className="w-36 h-fit"
        src={cover.url}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
      />

      {book.summary && (
        <div className="prose">
          <RichText data={book.summary} />
        </div>
      )}
    </article>
  );
}
