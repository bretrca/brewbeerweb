import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { JsonLd } from '@/components/JsonLd'
import { PostCard, formatDate } from '@/components/PostCard'
import { posts } from '@/lib/data/posts'
import { SITE } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, description: post.excerpt },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((item) => item.slug === slug)
  if (!post) notFound()

  const relatedPosts = posts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  }

  return (
    <div className='flex flex-col gap-8'>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumb} />
      <nav aria-label='migas de pan' className='text-sm text-stout-600'>
        <Link href='/' className='hover:text-brand-700'>
          Inicio
        </Link>{' '}
        /{' '}
        <Link href='/blog' className='hover:text-brand-700'>
          Blog
        </Link>{' '}
        / <span className='text-stout-800'>{post.title}</span>
      </nav>

      {post.image && (
        <div className='relative aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-2xl'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes='(min-width: 768px) 672px, 100vw'
            className='object-cover'
          />
        </div>
      )}

      <article className='flex max-w-2xl flex-col gap-4'>
        <header className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 text-xs'>
            <span className='rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800'>{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>· {post.readingMinutes} min de lectura</span>
          </div>
          <h1 className='text-3xl font-bold leading-tight sm:text-4xl'>{post.title}</h1>
          <p className='text-lg text-stout-700'>{post.excerpt}</p>
        </header>
        <div className='flex flex-col gap-4'>
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className='leading-relaxed text-stout-800'>
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section aria-labelledby='relacionados' className='flex flex-col gap-4 border-t border-brand-200 pt-8'>
          <h2 id='relacionados' className='text-xl font-bold'>
            Seguir leyendo
          </h2>
          <div className='grid gap-6 sm:grid-cols-2'>
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
