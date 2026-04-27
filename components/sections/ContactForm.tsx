'use client'

import { useRef, useState } from 'react'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    const formData = new FormData(formRef.current)
    try {
      const response = await fetch('https://formspree.io/f/mojnvrpp', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const data = await response.json()
      if (data.ok) {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            service_type: formData.get('service') || 'neuvedeno',
            method: 'contact_form',
          })
        }
        setMessage('Zpráva byla odeslána. Děkuji, ozvu se vám co nejdříve.')
        setStatus('success')
        formRef.current.reset()
      } else {
        throw new Error(data.error || 'Chyba')
      }
    } catch {
      setMessage('Něco se pokazilo. Zkuste to prosím znovu nebo mi napište přímo na zdenek@zdenekpodany.cz.')
      setStatus('error')
    }
  }

  return (
    <>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Jméno</label>
          <input type="text" id="name" name="name" required placeholder="Vaše jméno" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="vas@email.cz" />
        </div>
        <div className="form-group">
          <label htmlFor="service">Požadovaná služba</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Vyberte službu</option>
            <option value="Jednoduchý prezentační web">Jednoduchý prezentační web</option>
            <option value="Web na rozjezd podnikání">Web na rozjezd podnikání</option>
            <option value="UI/UX Audit">UI/UX Audit</option>
            <option value="Ještě nevím">Ještě nevím</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Co vás zajímá?</label>
          <textarea id="message" name="message" rows={4} required placeholder="Napište mi, co potřebujete – typ webu, termín, dotazy..." />
        </div>
        <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
          {status === 'sending' ? 'Odesílám...' : 'Odeslat zprávu'}
        </button>
      </form>
      {status !== 'idle' && status !== 'sending' && (
        <div
          className={`form-feedback form-feedback--${status === 'success' ? 'success' : 'error'}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}
    </>
  )
}
