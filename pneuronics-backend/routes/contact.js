const express    = require('express');
const router     = express.Router();
const { Resend } = require('resend');

// ── POST /api/contact ─────────────────────────────────────────────
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact email error: RESEND_API_KEY is not set.');
    return res.status(500).json({ error: 'Failed to send message. Please try WhatsApp or email us directly.' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Neuronix Contact Form <noreply@neuronixtech.cloud>',
      to:   process.env.CONTACT_EMAIL,
      reply_to: `"${name}" <${email}>`,
      subject: `New message from ${name} — Neuronix Learning`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0F1B2D;color:#F3F1EA;border-radius:12px;overflow:hidden;">
          <div style="background:#1a2d47;padding:24px 32px;border-bottom:2px solid #F4B740;">
            <span style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F4B740;font-family:monospace;">Neuronix Learning</span>
            <h2 style="margin:8px 0 0;color:#F3F1EA;font-size:20px;">New Contact Message</h2>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#8AA0BD;font-size:12px;letter-spacing:.12em;text-transform:uppercase;width:100px;">Name</td><td style="padding:8px 0;color:#F3F1EA;font-size:15px;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#8AA0BD;font-size:12px;letter-spacing:.12em;text-transform:uppercase;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#5FD4D6;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#8AA0BD;font-size:12px;letter-spacing:.12em;text-transform:uppercase;">Phone</td><td style="padding:8px 0;color:#F3F1EA;">${phone}</td></tr>` : ''}
            </table>
            <div style="margin-top:20px;padding:20px;background:#0B1018;border-radius:8px;border-left:3px solid #5FD4D6;">
              <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8AA0BD;margin-bottom:10px;">Message</div>
              <p style="margin:0;color:#C8D3E3;font-size:14px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin-top:20px;font-size:12px;color:#4A5A6F;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>`,
      text: `New contact message\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Contact email error:', error.message || error);
      return res.status(500).json({ error: 'Failed to send message. Please try WhatsApp or email us directly.' });
    }

    res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact email error:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try WhatsApp or email us directly.' });
  }
});

module.exports = router;
