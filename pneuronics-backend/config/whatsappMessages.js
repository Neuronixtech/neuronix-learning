// Edit the wording here. Each message has:
//   template: the approved WhatsApp template (name + language) used in production
//   params:   values that fill the template's {{1}}, {{2}}, ... placeholders, in order
//   text:     plain-text version, used when WHATSAPP_MODE=text (testing / within 24h of a user message)
const SITE_URL = process.env.SITE_URL || 'https://neuronix-learning.neuronixtech.cloud';

module.exports = {
  welcome: {
    template: { name: process.env.WHATSAPP_WELCOME_TEMPLATE || 'neuronix_welcome', language: 'en' },
    params: (student) => [student.name],
    text: (student) =>
      `Hi ${student.name}, thank you for registering with Neuronix Learning! ` +
      `We're glad to have you. Explore the curriculum, bilingual lessons and more at ${SITE_URL}`,
  },
};
