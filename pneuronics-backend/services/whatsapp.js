const messages = require('../config/whatsappMessages');

const API_BASE = process.env.WHATSAPP_API_BASE || 'https://graph.facebook.com/v21.0';

function isConfigured() {
  return Boolean(process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);
}

// Digits only, country code included. 10-digit numbers are treated as Indian (+91).
function normalizePhone(raw) {
  let digits = String(raw || '').replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  if (digits.length === 10) digits = '91' + digits;
  return digits.length >= 11 && digits.length <= 15 ? digits : null;
}

function buildPayload(to, def, student) {
  if ((process.env.WHATSAPP_MODE || 'template') === 'text') {
    return { messaging_product: 'whatsapp', to, type: 'text', text: { body: def.text(student) } };
  }
  return {
    messaging_product: 'whatsapp',
    to,
    type: 'template',
    template: {
      name: def.template.name,
      language: { code: def.template.language },
      components: [{ type: 'body', parameters: def.params(student).map((text) => ({ type: 'text', text: String(text) })) }],
    },
  };
}

// Never throws: a WhatsApp problem must not affect the caller (e.g. registration).
async function sendMessage(key, student) {
  try {
    const def = messages[key];
    if (!def) return { sent: false, reason: `unknown message "${key}"` };
    if (!isConfigured()) return { sent: false, reason: 'WhatsApp is not configured' };

    const to = normalizePhone(student.phone);
    if (!to) return { sent: false, reason: 'invalid phone number' };

    const res = await fetch(`${API_BASE}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(buildPayload(to, def, student)),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = (body.error && body.error.message) || `HTTP ${res.status}`;
      console.error(`[WhatsApp] ${key} to ${to} failed: ${msg}`);
      return { sent: false, reason: msg };
    }
    return { sent: true, id: body.messages && body.messages[0] && body.messages[0].id };
  } catch (err) {
    console.error(`[WhatsApp] ${key} error:`, err.message);
    return { sent: false, reason: err.message };
  }
}

module.exports = { sendMessage, normalizePhone, isConfigured };
