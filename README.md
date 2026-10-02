# La Chona Brew — proyecto base (marca provisional)

Web MVP de cerveza artesanal con tres verticales organizados desde el minuto uno:

- **Eshop** (`/tienda`): venta online de cerveza de fábricas locales, con fichas de producto (estilo, ABV, IBU, precio) y pack de degustación.
- **Blog editorial** (`/blog`): guías, estilos, maridaje, homebrew, eventos y contenido local. Categorías filtrables sin backend.
- **Suscripción anual híbrida** (`/suscripcion`): Club La Chona — caja mensual física (6 cervezas locales) + capa digital (newsletter de cata, eventos, descuento 10%, comunidad).

## Origen del concepto (factores tomados del sitio de referencia)

Tomado de `factoriadecerveza.com` (listado de tiendas y fábricas con venta online):

| Factor observado | Decisión en este proyecto |
| --- | --- |
| Newsletter semanal (resumen del viernes) | Newsletter propia en footer + sección en home (retención) |
| Categorías editoriales amplias (eventos, producto, homebrew, innovación…) | 6 categorías de blog: Guías, Estilos, Local, Eventos, Maridaje, Homebrew |
| Directorio de fábricas/tiendas como imán de tráfico y enlaces | Descartado como directorio; absorbido por el blog local y el CTA de alta para fábricas en `/contacto` |
| Ferias y eventos como contenido recurrente | Categoría Eventos + perks de acceso a eventos en el club |
| Partners / patrocinios | Vía futura de monetización (documentada, no implementada) |

## Stack

Next.js 16 (App Router, Server Components, metadata routes) · React 19 · Tailwind CSS 4 (`@theme` tokens) · TypeScript strict · sin CMS, sin backend de pagos todavía.

## Estructura

```
src/
├── app/
│   ├── layout.tsx            # header, footer, metadata global, JSON-LD Organization/WebSite
│   ├── page.tsx              # home: hero, destacados, blog, club, newsletter
│   ├── tienda/               # eshop: listado + ficha [slug]
│   ├── blog/                 # blog: listado con filtro ?categoria + entrada [slug]
│   ├── suscripcion/          # club anual: pasos, perks, precio, FAQ
│   ├── quienes-somos/        # historia y valores
│   ├── contacto/             # contacto + alta de fábricas locales
│   ├── aviso-legal/ privacidad/  # placeholders legales (noindex)
│   ├── not-found.tsx         # 404
│   ├── sitemap.ts            # sitemap.xml dinámico (rutas + productos + posts)
│   └── robots.ts             # robots.txt con referencia al sitemap
├── components/               # Header, Footer, NewsletterForm, ProductCard, PostCard, JsonLd
└── lib/
    ├── site.ts               # ⭐ marca provisional centralizada (naming, dominio, email)
    ├── types.ts              # tipos Product / Post / Plan / Faq
    └── data/                 # seed de contenido (products, posts, plans)
```

## SEO implementado

- `metadata` por página con `title` template, `description`, `canonical` y OpenGraph/Twitter.
- JSON-LD: Organization, WebSite, Product+Offer, CollectionPage, ItemList, BreadcrumbList, Article, Blog, Service+Offer y FAQPage.
- `sitemap.xml` y `robots.txt` generados desde el contenido (rutas estáticas, productos y posts).
- HTML semántico: un único `h1` por página, jerarquía h2/h3, `nav` con `aria-label`, `time` con `dateTime`, migas de pan en fichas y entradas.
- Internal linking: chips de categorías en home y blog, relacionados en el post, CTA cruzado tienda ↔ club.

## Marca provisional

Todo el naming vive en `src/lib/site.ts` y los colores en los tokens `@theme` de `src/app/globals.css` (`--color-brand-*`, `--color-stout-*`). Cambiar marca = editar un archivo + una paleta.

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL` — dominio final para canonical/sitemap (por defecto `https://lachonabrew.es`).

## Comandos

```bash
pnpm install
pnpm dev     # desarrollo
pnpm build   # build de producción
pnpm start   # servir build
```

## Siguientes pasos sugeridos

1. Marca definitiva: naming, logo, tipografía y tokens definitivos.
2. Carrito + pagos (Stripe) para tienda y alta de suscripción.
3. Newsletter con backend real (Resend/Mailchimp + endpoint).
4. Blog a CMS o MDX cuando el seed se quede corto.
5. Analítica (Plausible/GA4) y validación Search Console.
6. ESLint + Prettier + tests cuando el equipo crezca.
