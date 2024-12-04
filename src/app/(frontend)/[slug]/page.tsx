import { queryBookBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

import Image from 'next/image'

export const revalidate = 600

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const book = await queryBookBySlug({ slug })

  if (!book) {
    return notFound()
  }

  return (
    <main className="p-12 text-zinc-900">
      <h2 className="mb-12 font-medium">{book.title}</h2>
      <p>by {book.author}</p>
      <p>{book.description}</p>

      <Image
        src={book.image.url || './placeholder.jpg'}
        alt={book.image.alt}
        width={book.image.width || 600}
        height={book.image.height || 800}
      />

      {book.summary && (
        <div className="mt-12 prose">
          <RichText data={book.summary} />
        </div>
      )}
    </main>
  )
}
