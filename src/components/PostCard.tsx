import Link from 'next/link'
import { type Post } from '@/lib/types'

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className='flex flex-col gap-2 rounded-xl border border-brand-200 bg-white p-5 transition hover:shadow-md'>
      <div className='flex items-center gap-2 text-xs'>
        <span className='rounded-full bg-brand-100 px-2 py-1 font-semibold text-brand-800'>{post.category}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <h3 className='text-lg font-semibold leading-snug'>
        <Link href={`/blog/${post.slug}`} className='hover:text-brand-700'>
          {post.title}
        </Link>
      </h3>
      <p className='text-sm text-stout-700'>{post.excerpt}</p>
      <p className='mt-auto pt-2 text-xs text-stout-600'>{post.readingMinutes} min de lectura</p>
    </article>
  )
}
