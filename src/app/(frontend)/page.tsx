import { queryAllBooks } from '@/lib/data'

import Link from 'next/link'

export default async function Home() {
  const books = await queryAllBooks()

  return (
    <main className="p-12 text-zinc-900 grid gap-12">
      <h2 className="font-medium">
        <Link href="/">A Collection of Books on Design</Link>
      </h2>

      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <Link
              href={`/${book.slug}`}
              key={book.id}
              className="block transition-all hover:pl-1 hover:-pr-1"
            >
              <h3>
                {book.title} <span className="text-zinc-400 ml-1">{book.author}</span>
              </h3>
            </Link>
          ))}
        </ul>
      )}
    </main>
  )
}
