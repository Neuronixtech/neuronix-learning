const express  = require('express');
const router   = express.Router();
const Certificate = require('../models/Certificate');
const Student  = require('../models/Student');
const { Phase, Module, Lesson } = require('../models/Curriculum');
const { authAdmin, authStudent } = require('../middleware/auth');

// ── Generate cert ID: NXL-PY-2026-000001 ─────────────────────────
async function genCertId(type) {
  const prefix = type === 'python' ? 'NXL-PY' : 'NXL-AI';
  const year = new Date().getFullYear();
  const count = await Certificate.countDocuments({ type });
  const seq = String(count + 1).padStart(6, '0');
  return `${prefix}-${year}-${seq}`;
}

// ── Check if student qualifies ────────────────────────────────────
async function checkEligibility(studentId, type) {
  const student = await Student.findById(studentId);
  if (!student || !student.enrolled) return { eligible: false, reason: 'Student not enrolled' };

  // Get phases for this cert type
  const pythonPhaseNames = ['Phase 1: Python Fundamentals', 'Phase 2: Intermediate Python', 'Phase 3: Advanced Python'];
  const targetPhases = type === 'python'
    ? await Phase.find({ name: { $in: pythonPhaseNames } })
    : await Phase.find({});

  const phaseIds = targetPhases.map(p => p._id.toString());
  const lessons  = await Lesson.find({ phaseId: { $in: phaseIds }, status: 'published' });

  if (!lessons.length) return { eligible: true, reason: 'No published lessons found — issuing anyway' };

  const completed = new Set(student.completedLessons.map(String));
  const total     = lessons.length;
  const done      = lessons.filter(l => completed.has(l._id.toString())).length;
  const pct       = Math.round((done / total) * 100);

  if (done < total) return { eligible: false, reason: `${done}/${total} lessons completed (${pct}%)` };
  return { eligible: true, reason: `All ${total} lessons completed` };
}

// ── GET /api/certificates — list all (admin) ──────────────────────
router.get('/', authAdmin, async (req, res) => {
  try {
    const certs = await Certificate.find().sort({ issuedAt: -1 }).populate('studentId', 'name email');
    res.json({ certificates: certs });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── GET /api/certificates/mine — student's own certs ──────────────
router.get('/mine', authStudent, async (req, res) => {
  try {
    const certs = await Certificate.find({ studentId: req.user.id, status: 'active' }).sort({ issuedAt: -1 });
    res.json({ certificates: certs });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── GET /api/certificates/verify/:certId — public verify ─────────
router.get('/verify/:certId', async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certId: req.params.certId }).populate('studentId', 'name email');
    if (!cert) return res.status(404).json({ error: 'Certificate not found' });
    res.json({ certificate: cert });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── POST /api/certificates/issue — admin manual issue ────────────
router.post('/issue', authAdmin, async (req, res) => {
  try {
    const { studentId, type, force } = req.body;
    if (!studentId || !type) return res.status(400).json({ error: 'studentId and type required' });

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    // Check for duplicate
    const exists = await Certificate.findOne({ studentId, type, status: 'active' });
    if (exists) return res.status(409).json({ error: 'Certificate already issued', certId: exists.certId });

    // Eligibility check (admin can force)
    if (!force) {
      const { eligible, reason } = await checkEligibility(studentId, type);
      if (!eligible) return res.status(400).json({ error: `Not eligible: ${reason}` });
    }

    const certId = await genCertId(type);
    const cert   = await Certificate.create({
      certId, type, studentId,
      studentName: student.name, studentEmail: student.email,
      completedAt: student.lastActivityAt || new Date(),
      issuedBy: 'admin',
    });
    res.json({ certificate: cert });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── POST /api/certificates/auto-check — called after lesson complete
router.post('/auto-check', authStudent, async (req, res) => {
  try {
    const studentId = req.user.id;
    const student   = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: 'Student not found.' });
    const issued = [];
    for (const type of ['python', 'ai-engineer']) {
      const exists = await Certificate.findOne({ studentId, type, status: 'active' });
      if (exists) continue;
      const { eligible } = await checkEligibility(studentId, type);
      if (eligible) {
        const certId = await genCertId(type);
        const cert   = await Certificate.create({
          certId, type, studentId,
          studentName: student.name, studentEmail: student.email,
          completedAt: student.lastActivityAt || new Date(),
          issuedBy: 'auto',
        });
        issued.push(cert);
      }
    }
    res.json({ issued });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── POST /api/certificates/issue-test — issue test cert (no eligibility check)
router.post('/issue-test', authStudent, async (req, res) => {
  try {
    const studentId = req.user.id;
    const student   = await Student.findById(studentId);
    if (!student) return res.status(404).json({ error: 'Student not found.' });

    const type = req.body.type || 'python';
    if (!['python', 'ai-engineer'].includes(type)) {
      return res.status(400).json({ error: 'type must be python or ai-engineer' });
    }

    // Return existing cert if already issued
    const exists = await Certificate.findOne({ studentId, type, status: 'active' });
    if (exists) return res.json({ certificate: exists });

    const certId = await genCertId(type);
    const cert   = await Certificate.create({
      certId, type, studentId,
      studentName: student.name, studentEmail: student.email,
      issuedBy: 'test',
    });
    res.json({ certificate: cert });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ── DELETE /api/certificates/:id — revoke ────────────────────────
router.delete('/:id', authAdmin, async (req, res) => {
  try {
    const cert = await Certificate.findByIdAndUpdate(req.params.id, { status: 'revoked' }, { new: true });
    if (!cert) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Certificate revoked', certificate: cert });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
