import Link from 'next/link'
import { NewsletterForm } from '@/components/NewsletterForm'
import { PostCard } from '@/components/PostCard'
import { ProductCard } from '@/components/ProductCard'
import { blogCategories, posts } from '@/lib/data/posts'
import { products } from '@/lib/data/products'
import { SITE } from '@/lib/site'

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)
  const latestPosts = posts.slice(0, 3)

  return (
    <div className='flex flex-col gap-16'>
      <section className='flex flex-col items-start gap-5 rounded-2xl bg-linear-to-br from-brand-100 to-brand-300 p-8 sm:p-12'>
        <h1 className='text-3xl font-bold leading-tight text-stout-900 sm:text-5xl'>
          Cerveza artesanal de proximidad, de la fábrica a tu casa
        </h1>
        <p className='max-w-2xl text-base text-stout-700 sm:text-lg'>
          Compra directo a fábricas locales, aprende con nuestro blog cervecero y únete a un club anual
          con cajas mensuales de cerveza de tu región.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link
            href='/tienda'
            className='rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700'
          >
            Ver la tienda
          </Link>
          <Link
            href='/suscripcion'
            className='rounded-lg border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-800 hover:bg-white'
          >
            Descubrir el club
          </Link>
        </div>
        <nav aria-label='categorías del blog' className='flex flex-wrap gap-2 pt-2 text-xs'>
          {blogCategories.map((category) => (
            <Link
              key={category}
              href={`/blog?categoria=${encodeURIComponent(category)}`}
              className='rounded-full bg-white px-3 py-1 font-medium text-brand-800 hover:bg-brand-100'
            >
              {category}
            </Link>
          ))}
        </nav>
      </section>

      <section aria-labelledby='destacados-tienda' className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h2 id='destacados-tienda' className='text-2xl font-bold'>
            Novedades de la tienda
          </h2>
          <Link href='/tienda' className='text-sm font-semibold text-brand-700 hover:text-brand-800'>
            Ver todo →
          </Link>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section aria-labelledby='ultimo-blog' className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h2 id='ultimo-blog' className='text-2xl font-bold'>
            Desde el blog
          </h2>
          <Link href='/blog' className='text-sm font-semibold text-brand-700 hover:text-brand-800'>
            Ver todo →
          </Link>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section aria-labelledby='cta-club' className='flex flex-col gap-4 rounded-2xl bg-stout-900 p-8 text-brand-50 sm:p-12'>
        <h2 id='cta-club' className='text-2xl font-bold sm:text-3xl'>
          El club de las cajas locales
        </h2>
        <p className='max-w-2xl text-sm text-brand-100 sm:text-base'>
          Una caja mensual con seis cervezas de fábricas de tu región, eventos con los cerveceros,
          newsletter de cata y 10% de descuento en la tienda. Todo por 149 € al año.
        </p>
        <Link
          href='/suscripcion'
          className='w-fit rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-stout-900 hover:bg-brand-400'
        >
          Ver la suscripción
        </Link>
      </section>

      <section aria-labelledby='newsletter' className='flex flex-col gap-2 rounded-2xl border border-brand-200 bg-white p-8'>
        <h2 id='newsletter' className='text-xl font-bold'>
          Newsletter cervecera
        </h2>
        <p className='text-sm text-stout-700'>
          Cada viernes enviamos un resumen con novedades de {SITE.name}: lanzamientos, guías y eventos locales.
        </p>
        <NewsletterForm />
      </section>
    </div>
  )
}
