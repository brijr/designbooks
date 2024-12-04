import { queryBookBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'

import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 600

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const book = await queryBookBySlug({ slug })

  if (!book) {
    return notFound()
  }

  return (
    <main className="p-12 text-zinc-900 grid gap-12">
      <h2 className="font-medium">
        <Link href="/">A Collection of Books on Design</Link>
      </h2>

      <div>
        <h2 className="font-medium">{book.title}</h2>
        <p>by {book.author}</p>
        <p>{book.description}</p>
      </div>

      <Image
        className="w-36 h-fit"
        src={book.image.url}
        alt={book.image.alt}
        width={book.image.width}
        height={book.image.height}
      />

      {book.summary && (
        <div className="prose">
          <RichText data={book.summary} />
        </div>
      )}
    </main>
  )
}
