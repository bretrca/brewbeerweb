import { type Faq, type Plan } from '@/lib/types'

export const plan: Plan = {
  id: 'club-anual',
  name: 'Club La Chona',
  period: 'anual',
  price: 149,
  highlight: '12 cajas al año con cerveza local + comunidad digital',
  physicalPerks: [
    'Una caja mensual con 6 cervezas de fábricas de tu región',
    'Envío incluido en península con seguimiento',
    'Ediciones especiales de temporada y colaboraciones con fábricas locales',
    'Acceso prioritario a ferias y eventos del club',
  ],
  digitalPerks: [
    'Newsletter exclusiva con fichas de cata y maridajes de cada caja',
    '10% de descuento permanente en toda la tienda online',
    'Encuentros digitales con los cerveceros y comunidad privada',
    'Votaciones sobre los estilos del mes siguiente',
  ],
}

export const faqs: Faq[] = [
  {
    q: '¿Qué incluye exactamente la suscripción anual?',
    a: 'Doce cajas mensuales de seis cervezas de fábricas locales, envío incluido en península, descuento permanente del 10% en la tienda online, newsletter exclusiva y acceso anticipado a eventos del club.',
  },
  {
    q: '¿Puedo indicar mis estilos preferidos?',
    a: 'Sí. Al suscribirte eliges tus preferencias de estilo e intensidad y la selección se adapta. Además, cada mes puedes votar los estilos de la siguiente caja desde el área de socio.',
  },
  {
    q: '¿Cómo y cuándo puedo cancelar?',
    a: 'Tienes 30 días de garantía de satisfacción sin preguntas. Después, puedes cancelar antes de la fecha de renovación anual desde tu cuenta o escribiéndonos, y dejarás de recibir cargos.',
  },
  {
    q: '¿Qué zonas de envío cubrís?',
    a: 'De momento enviamos a toda la península con coste incluido. Baleares y Canarias tienen recargo y plazos propios; escríbenos y te confirmamos opciones.',
  },
]
