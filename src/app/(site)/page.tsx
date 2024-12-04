import config from '@payload-config'
import { getPayload } from 'payload'

import Link from 'next/link'

export default async function Home() {
  const payload = await getPayload({ config })

  const books = await payload.find({
    collection: 'books',
  })

  return (
    <main className="p-12 text-zinc-900">
      <h2 className="mb-12 font-medium">Hello World</h2>

      <ul>
        {books.docs.map((book) => (
          <Link href={`/${book.slug}`} key={book.id}>
            <h3>
              {book.title} <span className="text-zinc-400 ml-2">{book.author}</span>
            </h3>
          </Link>
        ))}
      </ul>
    </main>
  )
}
