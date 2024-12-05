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
        <p className="text-zinc-400">by {book.author}</p>
      </div>

      <div className="grid gap-4 max-w-prose">
        <p>{book.description}</p>
        {book.link && (
          <a className="link" target="_blank" href={book.link}>
            Purchase this book
          </a>
        )}
      </div>
      <div
        className={cn(
          "p-8 relative flex flex-col items-center justify-center",
          "aspect-video bg-zinc-100 rounded-xl",
        )}
      >
        <Image
          className="max-h-36 max-w-36 w-auto h-auto sm:max-w-64 sm:max-h-64 lg:max-w-96 lg:max-h-96"
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
