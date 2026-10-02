import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/JsonLd'
import { SITE } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'cerveza artesanal',
    'cerveza local',
    'comprar cerveza online',
    'club de cerveza',
    'suscripción cerveza artesanal',
    'fábricas de cerveza',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }

  return (
    <html lang='es'>
      <body className='flex min-h-screen flex-col antialiased'>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Header />
        <main className='mx-auto w-full max-w-5xl flex-1 px-4 py-10'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
