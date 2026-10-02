export const SITE = {
  name: 'La Chona Brew',
  tagline: 'Cerveza artesanal de proximidad',
  description:
    'Compra cerveza artesanal de fábricas locales, lee guías y estilos en nuestro blog cervecero y únete al club de suscripción anual con cajas mensuales de cerveza local.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lachonabrew.es',
  email: 'hola@lachonabrew.es',
} as const

export const NAV = [
  { href: '/tienda', label: 'Tienda' },
  { href: '/blog', label: 'Blog' },
  { href: '/suscripcion', label: 'Suscripción' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/contacto', label: 'Contacto' },
] as const
