import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const { name, email, service, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Chybí povinná pole' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Kontaktní formulář <kontakt@zdenekpodany.cz>',
    to: 'zdenek@zdenekpodany.cz',
    replyTo: email,
    subject: `Nová zpráva od ${name} — ${service || 'neuvedeno'}`,
    text: `Jméno: ${name}\nEmail: ${email}\nSlužba: ${service || 'neuvedeno'}\n\nZpráva:\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
