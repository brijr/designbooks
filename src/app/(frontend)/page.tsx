import { queryAllBooks } from "@/lib/data";
import { Book } from "@/payload-types";
import { cn } from "@/lib/cn";

import Image from "next/image";
import Link from "next/link";

export const revalidate = 600;

export default async function Home() {
  const books = await queryAllBooks();

  return (
    <section className="grid gap-12">
      <div>
        <h2 className="font-medium">
          A collection of books on the subject of design.
        </h2>
        <p className="text-zinc-400">
          Curated by{" "}
          <a className="link" href="https://bridger.to">
            Bridger Tower
          </a>{" "}
          at{" "}
          <a className="link" href="https://wipdes.com">
            WIP
          </a>
        </p>
      </div>

      {books.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}

const BookCard = ({ book }: { book: Book }) => {
  const cover: any = book?.image;

  return (
    <Link
      href={`/${book.slug}`}
      key={book.id}
      className={cn(
        "p-8 relative flex flex-col items-center justify-center",
        "aspect-square bg-zinc-100 rounded-xl",
        "hover:bg-zinc-200 transition-colors duration-300"
      )}
    >
      <Image
        src={cover.url}
        width={cover.width}
        height={cover.height}
        alt={cover.alt}
        className="max-w-36 w-auto h-auto max-h-36 sm:max-w-48 sm:max-h-48 -mt-8"
      />
      <div className="absolute bottom-4 text-sm left-4">
        <h3>{book.title}</h3>
        <h4 className="text-zinc-400">{book.author}</h4>
      </div>
    </Link>
  );
};
