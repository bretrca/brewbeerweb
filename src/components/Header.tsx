import Link from 'next/link'
import { NAV, SITE } from '@/lib/site'

export function Header() {
  return (
    <header className='border-b border-brand-200 bg-white'>
      <div className='mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4'>
        <Link href='/' className='text-xl font-bold tracking-tight text-brand-800'>
          {SITE.name}
        </Link>
        <nav aria-label='navegación principal' className='hidden gap-6 text-sm font-medium sm:flex'>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className='text-stout-800 hover:text-brand-600'>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href='/suscripcion'
          className='rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700'
        >
          Únete al club
        </Link>
      </div>
      <details className='sm:hidden'>
        <summary className='cursor-pointer px-4 py-2 text-sm font-medium text-stout-700'>Menú</summary>
        <nav aria-label='navegación móvil' className='flex flex-col gap-2 px-4 pb-4 text-sm'>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className='text-stout-800 hover:text-brand-600'>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  )
}
