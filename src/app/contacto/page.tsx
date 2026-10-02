import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos por cualquier duda con pedidos, el club de suscripción o para aparecer como fábrica local en la tienda.',
  alternates: { canonical: '/contacto' },
}

export default function ContactoPage() {
  return (
    <div className='flex max-w-2xl flex-col gap-5'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Contacto</h1>
      <p className='text-stout-800'>
        Dudas con pedidos, el club de suscripción, colaboraciones o eventos: escríbenos y respondemos en un
        plazo de 24-48h laborables.
      </p>
      <p className='text-stout-800'>
        <a href={`mailto:${SITE.email}`} className='font-semibold text-brand-700 hover:text-brand-800'>
          {SITE.email}
        </a>
      </p>
      <div className='rounded-xl border border-brand-200 bg-white p-6'>
        <h2 className='text-lg font-bold'>¿Fabricas cerveza local?</h2>
        <p className='mt-2 text-sm text-stout-700'>
          Buscamos fábricas y distribuidores de proximidad con producto en lata. Cuéntanos qué haces y dónde,
          y valoramos incluir tu cerveza en la tienda y en las cajas del club.
        </p>
      </div>
    </div>
  )
}
