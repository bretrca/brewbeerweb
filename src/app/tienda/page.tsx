import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/data/products'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Comprar cerveza artesanal online',
  description:
    'IPA, Lager, Stout, Weiss y packs variados de fábricas locales. Cerveza artesanal online con envío en península y precio directo de fábrica.',
  alternates: { canonical: '/tienda' },
}

export default function TiendaPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: `${SITE.url}/tienda/${product.slug}`,
    })),
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Tienda', item: `${SITE.url}/tienda` },
    ],
  }

  return (
    <div className='flex flex-col gap-8'>
      <JsonLd data={itemList} />
      <JsonLd data={breadcrumb} />
      <header className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Cerveza artesanal online</h1>
        <p className='max-w-2xl text-stout-700'>
          Selección de fábricas locales en formato lata y pack. Envío en península en 48-72h y precios
          directos de fábrica.
        </p>
      </header>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
