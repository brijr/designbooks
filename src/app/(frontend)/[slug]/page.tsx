import { queryBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { cn } from "@/lib/cn";

import Image from "next/image";

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

      <div
        className={cn(
          "p-8 relative flex flex-col items-center justify-center",
          "aspect-video bg-zinc-100 rounded-xl",
        )}
      >
        <Image
          className="max-h-36 max-w-36 sm:max-w-64 sm:max-h-64"
          src={cover.url}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
        />
      </div>

      {book.summary && (
        <div className="prose">
          <RichText data={book.summary} />
        </div>
      )}
    </article>
  );
}
