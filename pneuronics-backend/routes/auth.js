const express = require('express');
const bcrypt  = require('bcryptjs');
const crypto  = require('crypto');
const router  = express.Router();
const Student = require('../models/Student');
const { signToken, SESSION_TIMEOUT_MS } = require('../middleware/auth');

// Admin credentials (from env)
const ADMIN_EMAIL    = process.env.ADMIN_EMAIL    || 'admin@neuronixlearning.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Admin@123';

// ── POST /api/auth/register ───────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, dob, password } = req.body;
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters.' });
    }

    const existing = await Student.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(409).json({ error: 'An account with this email already exists.' });

    const hashed = await bcrypt.hash(password, 10);
    const sessionId = crypto.randomUUID();
    const student = await Student.create({
      name, email: email.toLowerCase(), phone, dob, password: hashed,
      activeSessionId: sessionId, sessionLastActive: new Date(),
    });

    const token = signToken({ id: student._id, email: student.email, role: 'student', sid: sessionId });
    res.status(201).json({
      success: true,
      token,
      student: { _id: student._id, name: student.name, email: student.email, enrolled: student.enrolled },
    });
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// ── POST /api/auth/login ──────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required.' });

    const lowerEmail = email.toLowerCase();

    // Check admin first
    if (lowerEmail === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      const token = signToken({ email: ADMIN_EMAIL, role: 'admin' });
      return res.json({ success: true, token, role: 'admin' });
    }

    // Student login
    const student = await Student.findOne({ email: lowerEmail });
    if (!student) return res.status(401).json({ error: 'No account matches that email and password.' });

    const match = await bcrypt.compare(password, student.password);
    if (!match) return res.status(401).json({ error: 'No account matches that email and password.' });

    // ── Single-session enforcement ──────────────────────────────────
    // If a session is already active and was used recently, block this login.
    const now = Date.now();
    const lastActive = student.sessionLastActive ? new Date(student.sessionLastActive).getTime() : 0;
    const sessionStillActive = student.activeSessionId && (now - lastActive) < SESSION_TIMEOUT_MS;

    if (sessionStillActive) {
      return res.status(409).json({
        error: 'This account is already logged in on another device. Please log out there first, or try again after a period of inactivity.',
        code: 'ALREADY_LOGGED_IN',
      });
    }

    // Start a fresh session
    const sessionId = crypto.randomUUID();
    student.activeSessionId = sessionId;
    student.sessionLastActive = new Date();
    await student.save();

    const token = signToken({ id: student._id, email: student.email, role: 'student', sid: sessionId });
    res.json({
      success: true,
      token,
      role: 'student',
      student: { _id: student._id, name: student.name, email: student.email, enrolled: student.enrolled },
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────
// Returns current student info (requires token)
const { authStudent } = require('../middleware/auth');
router.get('/me', authStudent, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');
    if (!student) return res.status(404).json({ error: 'Student not found.' });
    res.json({ success: true, student });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch profile.' });
  }
});

// ── POST /api/auth/change-password ────────────────────────────────
router.post('/change-password', authStudent, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current and new password are required.' });
    }
    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'New password must be at least 8 characters.' });
    }

    const student = await Student.findById(req.user.id);
    if (!student) return res.status(404).json({ error: 'Student not found.' });

    const match = await bcrypt.compare(currentPassword, student.password);
    if (!match) return res.status(401).json({ error: 'Current password is incorrect.' });

    student.password = await bcrypt.hash(newPassword, 10);
    await student.save();

    res.json({ success: true, message: 'Password changed successfully.' });
  } catch (err) {
    console.error('Change password error:', err.message);
    res.status(500).json({ error: 'Could not change password.' });
  }
});

// ── POST /api/auth/logout ─────────────────────────────────────────
// Frees the active session so the account can log in again elsewhere
router.post('/logout', authStudent, async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.user.id, { activeSessionId: null, sessionLastActive: null });
    res.json({ success: true, message: 'Logged out.' });
  } catch (err) {
    res.status(500).json({ error: 'Logout failed.' });
  }
});

module.exports = router;
