import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: `Aviso legal de ${SITE.name}.`,
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false },
}

export default function AvisoLegalPage() {
  return (
    <div className='flex max-w-2xl flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Aviso legal</h1>
      <p className='text-sm text-stout-700'>
        Contenido provisional pendiente de los datos fiscales de la marca definitiva. Incluirá titular,
        NIF, domicilio, datos registrales y condiciones de uso del sitio.
      </p>
    </div>
  )
}
