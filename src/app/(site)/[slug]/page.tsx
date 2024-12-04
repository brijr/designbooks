import config from '@payload-config'
import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'

import Image from 'next/image'

export default async function Home({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config })
  const { slug } = await params

  const book = await payload.find({
    collection: 'books',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const image = await payload.find({
    collection: 'media',
    where: {
      id: {
        equals: book.docs[0].image.id,
      },
    },
  })

  console.log(image)

  return (
    <main className="p-12 text-zinc-900">
      <h2 className="mb-12 font-medium">{book.docs[0].title}</h2>
      <p>by {book.docs[0].author}</p>
      <p>{book.docs[0].description}</p>

      {image.docs[0] && (
        // @ts-ignore
        <Image src={image.docs[0].url} alt={image.docs[0].alt} width={500} height={500} />
      )}

      {book.docs[0].summary && (
        <div className="mt-12 prose">
          <RichText data={book.docs[0].summary} />
        </div>
      )}
    </main>
  )
}
