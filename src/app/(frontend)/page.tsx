import Link from 'next/link'
import { queryAllBooks } from '@/lib/data'

export default async function Home() {
  const books = await queryAllBooks()

  return (
    <main className="p-12 text-zinc-900">
      <h2 className="mb-12 font-medium">Hello World</h2>

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
    </main>
  )
}
