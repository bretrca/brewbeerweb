'use client'

import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  if (done) {
    return <p className='mt-2 rounded-lg bg-brand-100 px-3 py-2 text-sm text-brand-800'>¡Dentro! Nos vemos el viernes.</p>
  }

  return (
    <form
      className='mt-2 flex gap-2'
      onSubmit={(event) => {
        event.preventDefault()
        if (email.includes('@')) setDone(true)
      }}
    >
      <input
        type='email'
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='tu@email.com'
        aria-label='Tu email'
        className='w-full rounded-lg border border-brand-200 px-3 py-2 text-sm outline-none focus:border-brand-500'
      />
      <button type='submit' className='rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700'>
        Apuntarme
      </button>
    </form>
  )
}
