import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-start gap-4 py-20'>
      <h1 className='text-3xl font-bold'>Página no encontrada</h1>
      <p className='text-stout-700'>Esta cerveza se ha acabado. Prueba con otra ruta.</p>
      <Link href='/' className='rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700'>
        Volver al inicio
      </Link>
    </div>
  )
}
