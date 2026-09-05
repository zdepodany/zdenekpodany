const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Chybí povinná pole' });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'Kontaktní formulář <kontakt@zdenekpodany.cz>',
    to: 'zdenek@zdenekpodany.cz',
    replyTo: email,
    subject: `Nová zpráva od ${name}`,
    text: `Jméno: ${name}\nEmail: ${email}\n\nZpráva:\n${message}`,
  });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json({ ok: true });
};
