import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import { products } from '@/lib/data/products'
import { SITE } from '@/lib/site'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/tienda/${product.slug}` },
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((item) => item.slug === slug)
  if (!product) notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: product.style,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/tienda/${product.slug}`,
    },
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Tienda', item: `${SITE.url}/tienda` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE.url}/tienda/${product.slug}` },
    ],
  }

  return (
    <div className='flex flex-col gap-8'>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumb} />
      <nav aria-label='migas de pan' className='text-sm text-stout-600'>
        <Link href='/' className='hover:text-brand-700'>
          Inicio
        </Link>{' '}
        /{' '}
        <Link href='/tienda' className='hover:text-brand-700'>
          Tienda
        </Link>{' '}
        / <span className='text-stout-800'>{product.name}</span>
      </nav>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='flex h-64 items-center justify-center rounded-2xl bg-linear-to-br from-brand-200 to-brand-400'>
          <span className='text-2xl font-bold text-stout-900'>{product.style}</span>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold sm:text-4xl'>{product.name}</h1>
          <div className='flex flex-wrap gap-2 text-xs'>
            <span className='rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800'>{product.style}</span>
            {product.tags.map((tag) => (
              <span key={tag} className='rounded-full border border-brand-300 px-3 py-1 text-stout-700'>
                {tag}
              </span>
            ))}
          </div>
          <dl className='grid grid-cols-3 gap-3 rounded-xl border border-brand-200 bg-white p-4 text-center text-sm'>
            <div>
              <dt className='text-stout-600'>ABV</dt>
              <dd className='font-semibold'>{String(product.abv).replace('.', ',')}%</dd>
            </div>
            <div>
              <dt className='text-stout-600'>IBU</dt>
              <dd className='font-semibold'>{product.ibu}</dd>
            </div>
            <div>
              <dt className='text-stout-600'>Precio</dt>
              <dd className='font-semibold text-brand-700'>{product.price.toFixed(2).replace('.', ',')} €</dd>
            </div>
          </dl>
          <button
            type='button'
            disabled
            className='w-fit cursor-not-allowed rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white opacity-60'
            title='Los pagos se activarán próximamente'
          >
            Añadir al carrito (próximamente)
          </button>
        </div>
      </div>

      <section aria-labelledby='descripcion-producto' className='flex max-w-2xl flex-col gap-3'>
        <h2 id='descripcion-producto' className='text-xl font-bold'>
          Sobre esta cerveza
        </h2>
        {product.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className='text-stout-700'>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  )
}
