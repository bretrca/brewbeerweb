import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description: `Historia y valores de ${SITE.name}: cerveza artesanal de proximidad, fábricas locales y comunidad cervecera.`,
  alternates: { canonical: '/quienes-somos' },
}

export default function QuienesSomosPage() {
  return (
    <div className='flex max-w-2xl flex-col gap-5'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Quiénes somos</h1>
      <p className='text-stout-800'>
        {SITE.name} nace con una idea sencilla: acercar las fábricas de cerveza artesanal de tu región a tu
        casa. Sin intermediarios innecesarios, sin cervezas que llevan meses en un almacén y con nombres y
        apellidos detrás de cada lata.
      </p>
      <p className='text-stout-800'>
        Somos un proyecto en construcción: el nombre y la identidad visual son provisionales y están abiertos
        a lo que la comunidad — y los cerveceros con quienes trabajamos — nos pida. Lo que no cambiará son
        nuestras tres bases:
      </p>
      <ul className='flex flex-col gap-2 text-stout-800'>
        <li>
          <strong>Proximidad:</strong> cerveza de fábricas cercanas, más fresca y con menos viaje.
        </li>
        <li>
          <strong>Variedad:</strong> cada mes estilos distintos, para que nunca te acostumbres a lo mismo.
        </li>
        <li>
          <strong>Comunidad:</strong> blog, newsletter y eventos para aprender y compartir, no solo comprar.
        </li>
      </ul>
      <p className='text-stout-800'>
        ¿Fabricas cerveza local? Nos encantaría conocerte: escríbenos desde la{' '}
        <a href='/contacto' className='font-semibold text-brand-700 hover:text-brand-800'>
          página de contacto
        </a>
        .
      </p>
    </div>
  )
}
