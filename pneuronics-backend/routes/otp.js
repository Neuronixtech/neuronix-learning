const express = require('express');
const axios   = require('axios');
const bcrypt  = require('bcryptjs');
const router  = express.Router();
const Student = require('../models/Student');

// ── MSG91 Config ──────────────────────────────────────────────────
const MSG91_AUTH_KEY    = process.env.MSG91_AUTH_KEY    || 'YOUR_MSG91_AUTH_KEY';
const MSG91_SENDER_ID   = process.env.MSG91_SENDER_ID   || 'PNRONC';
const MSG91_TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

// ── OTP store (in-memory; use Redis for production scale) ─────────
const otpStore = {};
const OTP_EXPIRY_MS = 10 * 60 * 1000;

function generateOTP() {
  return String(Math.floor(100000 + Math.random() * 900000));
}
function cleanPhone(phone) {
  let c = phone.replace(/\s+/g, '').replace(/^\+/, '');
  if (c.startsWith('0')) c = '91' + c.slice(1);
  if (c.length === 10) c = '91' + c;
  return c;
}

// ── POST /api/otp/send ────────────────────────────────────────────
router.post('/send', async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number is required.' });

  // Verify a student exists with this phone
  const cleaned = cleanPhone(phone);
  const student = await Student.findOne({
    phone: { $regex: phone.replace(/\s+/g, '').replace(/^\+/, '').slice(-10) }
  });
  if (!student) return res.status(404).json({ error: 'No account found with that phone number.' });

  const otp = generateOTP();
  otpStore[cleaned] = { otp, expiresAt: Date.now() + OTP_EXPIRY_MS, attempts: 0 };

  try {
    await axios.post('https://api.msg91.com/api/v5/otp', {
      authkey:     MSG91_AUTH_KEY,
      mobile:      cleaned,
      message:     `Your Neuronix Learning OTP is ${otp}. Valid for 10 minutes. Do not share this with anyone.`,
      sender:      MSG91_SENDER_ID,
      otp:         otp,
      template_id: MSG91_TEMPLATE_ID,
    }, { headers: { 'Content-Type': 'application/json' } });

    console.log(`[OTP] Sent to ${cleaned}`);
    res.json({ success: true, message: 'OTP sent successfully.' });
  } catch (err) {
    console.error('[OTP] MSG91 error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to send OTP. Please try again.' });
  }
});

// ── POST /api/otp/verify ──────────────────────────────────────────
router.post('/verify', (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP are required.' });

  const cleaned = cleanPhone(phone);
  const record = otpStore[cleaned];

  if (!record) return res.status(400).json({ error: 'No OTP found. Please request a new one.' });
  if (Date.now() > record.expiresAt) {
    delete otpStore[cleaned];
    return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
  }
  record.attempts += 1;
  if (record.attempts > 5) {
    delete otpStore[cleaned];
    return res.status(429).json({ error: 'Too many attempts. Please request a new OTP.' });
  }
  if (record.otp !== otp.trim()) {
    return res.status(400).json({ error: `Incorrect OTP. ${5 - record.attempts} attempts remaining.` });
  }

  // Mark as verified (keep a short-lived flag for reset step)
  record.verified = true;
  res.json({ success: true, message: 'OTP verified.' });
});

// ── POST /api/otp/reset-password ──────────────────────────────────
router.post('/reset-password', async (req, res) => {
  const { phone, newPassword } = req.body;
  if (!phone || !newPassword) return res.status(400).json({ error: 'Phone and new password are required.' });
  if (newPassword.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters.' });

  const cleaned = cleanPhone(phone);
  const record = otpStore[cleaned];
  if (!record || !record.verified) {
    return res.status(403).json({ error: 'OTP not verified. Please complete verification first.' });
  }

  try {
    const last10 = cleaned.slice(-10);
    const student = await Student.findOne({ phone: { $regex: last10 } });
    if (!student) return res.status(404).json({ error: 'Account not found.' });

    student.password = await bcrypt.hash(newPassword, 10);
    await student.save();

    delete otpStore[cleaned]; // clear OTP after successful reset
    res.json({ success: true, message: 'Password updated successfully.' });
  } catch (err) {
    console.error('Reset error:', err.message);
    res.status(500).json({ error: 'Could not reset password. Please try again.' });
  }
});

module.exports = router;
