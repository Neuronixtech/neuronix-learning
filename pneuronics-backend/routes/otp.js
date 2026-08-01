const express = require('express');
const bcrypt  = require('bcryptjs');
const { Resend } = require('resend');
const router  = express.Router();
const Student = require('../models/Student');

// ── OTP store (in-memory; use Redis for production scale) ─────────
const otpStore = {};
const OTP_EXPIRY_MS = 10 * 60 * 1000;

function generateOTP() {
  return String(Math.floor(100000 + Math.random() * 900000));
}
function cleanEmail(email) {
  return String(email).trim().toLowerCase();
}

// ── POST /api/otp/send ────────────────────────────────────────────
router.post('/send', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required.' });

  const cleaned = cleanEmail(email);
  const student = await Student.findOne({ email: cleaned });
  if (!student) return res.status(404).json({ error: 'No account found with that email address.' });

  if (!process.env.RESEND_API_KEY) {
    console.error('[OTP] RESEND_API_KEY is not set.');
    return res.status(500).json({ error: 'Failed to send OTP. Please try again.' });
  }

  const otp = generateOTP();
  otpStore[cleaned] = { otp, expiresAt: Date.now() + OTP_EXPIRY_MS, attempts: 0 };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Neuronix Learning <onboarding@resend.dev>',
      to: cleaned,
      subject: 'Your Neuronix Learning password reset OTP',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0F1B2D;color:#F3F1EA;border-radius:12px;overflow:hidden;">
          <div style="background:#1a2d47;padding:24px 32px;border-bottom:2px solid #F4B740;">
            <span style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#F4B740;font-family:monospace;">Neuronix Learning</span>
            <h2 style="margin:8px 0 0;color:#F3F1EA;font-size:20px;">Password Reset OTP</h2>
          </div>
          <div style="padding:28px 32px;">
            <p style="margin:0 0 20px;color:#C8D3E3;font-size:14px;line-height:1.7;">Use the code below to reset your password. It is valid for 10 minutes.</p>
            <div style="margin:0 0 20px;padding:20px;background:#0B1018;border-radius:8px;border-left:3px solid #5FD4D6;text-align:center;">
              <span style="font-size:28px;letter-spacing:.3em;font-family:monospace;color:#F4B740;">${otp}</span>
            </div>
            <p style="margin:0;font-size:12px;color:#4A5A6F;">If you didn't request this, you can safely ignore this email.</p>
          </div>
        </div>`,
      text: `Your Neuronix Learning password reset OTP is ${otp}. Valid for 10 minutes. If you didn't request this, you can safely ignore this email.`,
    });

    if (error) {
      console.error('[OTP] Resend error:', error.message || error);
      delete otpStore[cleaned];
      return res.status(500).json({ error: 'Failed to send OTP. Please try again.' });
    }

    console.log(`[OTP] Sent to ${cleaned}`);
    res.json({ success: true, message: 'OTP sent successfully.' });
  } catch (err) {
    console.error('[OTP] Resend error:', err.message);
    delete otpStore[cleaned];
    res.status(500).json({ error: 'Failed to send OTP. Please try again.' });
  }
});

// ── POST /api/otp/verify ──────────────────────────────────────────
router.post('/verify', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: 'Email and OTP are required.' });

  const cleaned = cleanEmail(email);
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
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).json({ error: 'Email and new password are required.' });
  if (newPassword.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters.' });

  const cleaned = cleanEmail(email);
  const record = otpStore[cleaned];
  if (!record || !record.verified) {
    return res.status(403).json({ error: 'OTP not verified. Please complete verification first.' });
  }

  try {
    const student = await Student.findOne({ email: cleaned });
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
