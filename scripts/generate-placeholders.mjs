import sharp from 'sharp'

const products = [
  { slug: 'ipa-local-68', name: 'IPA Local 68', sub: 'IPA · 6,2% ABV', from: '#d19d48', to: '#a4641f' },
  { slug: 'lager-de-barrio', name: 'Lager de Barrio', sub: 'Lager · 4,8% ABV', from: '#f6ead0', to: '#ddb970' },
  { slug: 'amber-del-pueblo', name: 'Amber del Pueblo', sub: 'Amber Ale · 5,6% ABV', from: '#e0a860', to: '#844c1c' },
  { slug: 'stout-del-norte', name: 'Stout del Norte', sub: 'Stout · 6,0% ABV', from: '#6b5b4a', to: '#1a1511' },
  { slug: 'weiss-de-verano', name: 'Weiss de Verano', sub: 'Weiss · 5,0% ABV', from: '#fbf6ec', to: '#ead4a2' },
  { slug: 'pack-degustacion-local', name: 'Pack de degustación', sub: 'Pack variado · 6 latas', from: '#ddb970', to: '#59331e' },
]

const posts = [
  { slug: 'como-empezar-cerveza-artesanal', title: 'Cómo empezar con la cerveza artesanal' },
  { slug: 'mapa-estilos-ipa-lager-stout', title: 'Mapa rápido de estilos' },
  { slug: 'por-que-comprar-cerveza-local', title: 'Por qué comprar cerveza local' },
  { slug: 'calendario-ferias-cerveza-artesanal', title: 'Ferias y festivales' },
  { slug: 'maridajes-faciles-cerveza-comida', title: 'Maridajes fáciles' },
  { slug: 'homebrewing-primeros-pasos', title: 'Homebrewing 101' },
]

const productSvg = (p) => `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${p.from}"/><stop offset="100%" stop-color="${p.to}"/>
  </linearGradient></defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="400" cy="240" r="150" fill="#fbf6ec" opacity="0.35"/>
  <text x="400" y="255" font-family="sans-serif" font-size="44" font-weight="bold" fill="#1a1511" text-anchor="middle">${p.name}</text>
  <text x="400" y="310" font-family="sans-serif" font-size="30" fill="#2b241d" text-anchor="middle">${p.sub}</text>
</svg>`

const blogSvg = (p) => `<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ead4a2"/><stop offset="100%" stop-color="#844c1c"/>
  </linearGradient></defs>
  <rect width="1200" height="675" fill="url(#g)"/>
  <text x="600" y="330" font-family="sans-serif" font-size="56" font-weight="bold" fill="#fbf6ec" text-anchor="middle">${p.title}</text>
  <text x="600" y="400" font-family="sans-serif" font-size="30" fill="#f6ead0" text-anchor="middle">La Chona Brew · Blog</text>
</svg>`

for (const p of products) {
  await sharp(Buffer.from(productSvg(p))).webp({ quality: 80 }).toFile(`public/images/products/${p.slug}.webp`)
  console.log('ok', p.slug)
}
for (const p of posts) {
  await sharp(Buffer.from(blogSvg(p))).webp({ quality: 80 }).toFile(`public/images/blog/${p.slug}.webp`)
  console.log('ok', p.slug)
}
