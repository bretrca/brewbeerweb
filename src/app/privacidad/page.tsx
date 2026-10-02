import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: `Política de privacidad y protección de datos de ${SITE.name}.`,
  alternates: { canonical: '/privacidad' },
  robots: { index: false },
}

export default function PrivacidadPage() {
  return (
    <div className='flex max-w-2xl flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Política de privacidad</h1>
      <p className='text-sm text-stout-700'>
        Contenido provisional pendiente de la marca definitiva. Detallará responsable, finalidades
        (gestión de pedidos, suscripción y newsletter), base legal, derechos RGPD y plazos de conservación.
      </p>
    </div>
  )
}
