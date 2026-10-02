import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { faqs, plan } from '@/lib/data/plans'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Suscripción anual de cerveza artesanal local',
  description:
    'Club La Chona: una caja mensual con 6 cervezas de fábricas de tu región, eventos con los cerveceros, newsletter de cata y 10% de descuento en la tienda. 149 € al año.',
  alternates: { canonical: '/suscripcion' },
}

export default function SuscripcionPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${plan.name} — suscripción anual`,
    description: plan.highlight,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    areaServed: 'ES',
    offers: {
      '@type': 'Offer',
      price: plan.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/suscripcion`,
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div className='flex flex-col gap-12'>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <header className='flex flex-col items-start gap-4 rounded-2xl bg-linear-to-br from-brand-100 to-brand-300 p-8 sm:p-12'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Club La Chona: tu suscripción anual de cerveza local</h1>
        <p className='max-w-2xl text-stout-800'>
          Una caja mensual con seis cervezas de fábricas de tu región, encuentros con los cerveceros y una
          comunidad digital para ir más allá de la copa. Todo por {plan.price} € al año.
        </p>
        <Link
          href='/contacto'
          className='rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800'
        >
          Reservar mi plaza
        </Link>
      </header>

      <section aria-labelledby='como-funciona' className='flex flex-col gap-4'>
        <h2 id='como-funciona' className='text-2xl font-bold'>
          Cómo funciona
        </h2>
        <ol className='grid gap-4 sm:grid-cols-3'>
          {[
            {
              step: '1',
              title: 'Elige tus preferencias',
              text: 'Al apuntarte nos dices qué estilos y qué intensidades te gustan.',
            },
            {
              step: '2',
              title: 'Recibe tu caja mensual',
              text: 'Cada mes seleccionamos seis cervezas de fábricas locales y te la enviamos a casa.',
            },
            {
              step: '3',
              title: 'Catas, eventos y comunidad',
              text: 'Fichas de cata en la newsletter, encuentros con los cerveceros y votos para la próxima caja.',
            },
          ].map((item) => (
            <li key={item.step} className='flex flex-col gap-2 rounded-xl border border-brand-200 bg-white p-5'>
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 font-bold text-white'>
                {item.step}
              </span>
              <h3 className='font-semibold'>{item.title}</h3>
              <p className='text-sm text-stout-700'>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='que-incluye' className='flex flex-col gap-4'>
        <h2 id='que-incluye' className='text-2xl font-bold'>
          Qué incluye
        </h2>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='flex flex-col gap-3 rounded-xl border border-brand-200 bg-white p-6'>
            <h3 className='font-bold text-brand-800'>En tu casa</h3>
            <ul className='flex flex-col gap-2 text-sm text-stout-800'>
              {plan.physicalPerks.map((perk) => (
                <li key={perk}>✔ {perk}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-3 rounded-xl border border-brand-200 bg-white p-6'>
            <h3 className='font-bold text-brand-800'>En tu bolsillo</h3>
            <ul className='flex flex-col gap-2 text-sm text-stout-800'>
              {plan.digitalPerks.map((perk) => (
                <li key={perk}>✔ {perk}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby='precio' className='flex flex-col items-start gap-3 rounded-2xl bg-stout-900 p-8 text-brand-50'>
        <h2 id='precio' className='text-2xl font-bold'>
          Plan anual
        </h2>
        <p className='text-sm text-brand-100'>{plan.highlight}</p>
        <p className='text-4xl font-bold'>
          {plan.price} € <span className='text-base font-normal text-brand-200'>/ año · IVA incluido</span>
        </p>
        <Link
          href='/contacto'
          className='mt-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-stout-900 hover:bg-brand-400'
        >
          Reservar mi plaza
        </Link>
      </section>

      <section aria-labelledby='faq' className='flex flex-col gap-4'>
        <h2 id='faq' className='text-2xl font-bold'>
          Preguntas frecuentes
        </h2>
        <div className='flex flex-col gap-3'>
          {faqs.map((faq) => (
            <details key={faq.q} className='rounded-xl border border-brand-200 bg-white p-5'>
              <summary className='cursor-pointer font-semibold text-stout-800'>{faq.q}</summary>
              <p className='mt-2 text-sm text-stout-700'>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
