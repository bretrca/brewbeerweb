import type { MetadataRoute } from 'next'
import { posts } from '@/lib/data/posts'
import { products } from '@/lib/data/products'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['', '/tienda', '/blog', '/suscripcion', '/quienes-somos', '/contacto', '/aviso-legal', '/privacidad']

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${SITE.url}/tienda/${product.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
