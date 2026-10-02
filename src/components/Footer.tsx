import Link from 'next/link'
import { NewsletterForm } from '@/components/NewsletterForm'
import { NAV, SITE } from '@/lib/site'

export function Footer() {
  return (
    <footer className='mt-16 border-t border-brand-200 bg-white'>
      <div className='mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3'>
        <div>
          <p className='text-lg font-bold text-brand-800'>{SITE.name}</p>
          <p className='mt-2 text-sm text-stout-700'>
            {SITE.tagline}. Eshop, blog y club de suscripción anual.
          </p>
        </div>
        <nav aria-label='pie de página' className='flex flex-col gap-2 text-sm'>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className='text-stout-700 hover:text-brand-600'>
              {item.label}
            </Link>
          ))}
          <Link href='/aviso-legal' className='text-stout-700 hover:text-brand-600'>
            Aviso legal
          </Link>
          <Link href='/privacidad' className='text-stout-700 hover:text-brand-600'>
            Política de privacidad
          </Link>
        </nav>
        <div>
          <p className='text-sm font-semibold text-stout-800'>Newsletter cervecera</p>
          <p className='mt-1 text-sm text-stout-700'>Cada viernes: novedades, guías y lanzamientos locales.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className='border-t border-brand-100 px-4 py-4 text-center text-xs text-stout-600'>
        © {new Date().getFullYear()} {SITE.name} · Marca provisional en construcción
      </div>
    </footer>
  )
}
