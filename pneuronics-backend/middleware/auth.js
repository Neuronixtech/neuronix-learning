const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret_in_production';

// How long a session stays "active" without any activity before it frees up.
// Prevents permanent lockout if a user closes the browser without logging out.
const SESSION_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

// Verify a logged-in student AND enforce single active session
async function authStudent(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided.' });
  }
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'student') return res.status(403).json({ error: 'Not authorized.' });

    // Enforce single-session: token's session id must match the stored one
    const student = await Student.findById(decoded.id).select('activeSessionId sessionLastActive');
    if (!student) return res.status(401).json({ error: 'Account not found.' });

    if (!decoded.sid || student.activeSessionId !== decoded.sid) {
      return res.status(401).json({ error: 'Session ended. You may have logged in on another device.', code: 'SESSION_INVALID' });
    }

    // Refresh activity timestamp (keeps the session alive while in use)
    student.sessionLastActive = new Date();
    await student.save();

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

// Verify an admin
function authAdmin(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided.' });
  }
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') return res.status(403).json({ error: 'Admin access required.' });
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

module.exports = { authStudent, authAdmin, signToken, JWT_SECRET, SESSION_TIMEOUT_MS };
