import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { Main } from '@/components/craft'

export default async function Home({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config })

  const book = await payload.find({
    collection: 'books',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })

  return (
    <Main className="p-12 text-zinc-900">
      <h2 className="mb-12 font-medium">{book.docs[0].title}</h2>
      <p>by {book.docs[0].author}</p>
      <p>{book.docs[0].description}</p>

      {book.docs[0].summary && (
        <div className="mt-12">
          <h3 className="mb-4 font-medium">Summary</h3>

          <RichText data={book.docs[0].summary} />
        </div>
      )}
    </Main>
  )
}
