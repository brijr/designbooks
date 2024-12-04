import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {
  const payload = await getPayload({ config })

  const books = await payload.find({
    collection: 'books',
  })

  return (
    <div className="p-12">
      <h2>Hello World</h2>

      <ul>
        {books.docs.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
