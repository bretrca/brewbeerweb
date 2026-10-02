import Image from 'next/image'
import Link from 'next/link'
import { type Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className='group flex flex-col overflow-hidden rounded-xl border border-brand-200 bg-white transition hover:shadow-md'>
      <div className='relative aspect-[4/3] w-full overflow-hidden'>
        {product.image ? (
          <Image
            src={product.image}
            alt={`Cerveza ${product.name} — ${product.style}`}
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className='object-cover transition duration-300 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full items-center justify-center bg-linear-to-br from-brand-200 to-brand-400'>
            <span className='text-lg font-bold text-stout-900'>{product.style}</span>
          </div>
        )}
      </div>
      <div className='flex flex-1 flex-col gap-2 p-4'>
        <h3 className='text-lg font-semibold'>
          <Link href={`/tienda/${product.slug}`} className='hover:text-brand-700'>
            {product.name}
          </Link>
        </h3>
        <p className='text-sm text-stout-700'>{product.shortDescription}</p>
        <div className='mt-auto flex items-center justify-between pt-2 text-sm'>
          <span className='font-semibold text-brand-700'>{product.price.toFixed(2).replace('.', ',')} €</span>
          <span className='text-stout-600'>
            {String(product.abv).replace('.', ',')}% ABV · {product.ibu} IBU
          </span>
        </div>
      </div>
    </article>
  )
}
