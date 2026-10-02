import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { PostCard } from '@/components/PostCard'
import { blogCategories, posts } from '@/lib/data/posts'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog de cerveza artesanal',
  description:
    'Guías para empezar, estilos de cerveza, maridajes, homebrew y cultura cervecera local. Aprende y descubre fábricas de proximidad.',
  alternates: { canonical: '/blog' },
}

interface PageProps {
  searchParams: Promise<{ categoria?: string }>
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { categoria } = await searchParams
  const visiblePosts = categoria ? posts.filter((post) => post.category === categoria) : posts

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de La Chona Brew',
    url: `${SITE.url}/blog`,
  }

  return (
    <div className='flex flex-col gap-8'>
      <JsonLd data={blogJsonLd} />
      <header className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Blog cervecero</h1>
        <p className='max-w-2xl text-stout-700'>
          Guías, estilos, maridajes y cultura de la cerveza artesanal local. Sin humo y sin palabras raras.
        </p>
      </header>

      <nav aria-label='categorías' className='flex flex-wrap gap-2 text-sm'>
        <Link
          href='/blog'
          className={`rounded-full px-3 py-1 font-medium ${categoria ? 'border border-brand-300 text-stout-700' : 'bg-brand-600 text-white'}`}
        >
          Todas
        </Link>
        {blogCategories.map((category) => (
          <Link
            key={category}
            href={`/blog?categoria=${encodeURIComponent(category)}`}
            className={`rounded-full px-3 py-1 font-medium ${categoria === category ? 'bg-brand-600 text-white' : 'border border-brand-300 text-stout-700 hover:bg-brand-100'}`}
          >
            {category}
          </Link>
        ))}
      </nav>

      {visiblePosts.length === 0 ? (
        <p className='text-stout-700'>Todavía no hay entradas en esta categoría.</p>
      ) : (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {visiblePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
