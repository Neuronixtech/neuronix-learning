const express = require('express');
const router  = express.Router();
const Student = require('../models/Student');
const Certificate = require('../models/Certificate');
const { Phase, Lesson } = require('../models/Curriculum');
const { authStudent } = require('../middleware/auth');

// ── Auto-check and issue certificates ────────────────────────────
async function autoIssueCerts(student) {
  const issued = [];
  const pythonPhaseNames = ['Phase 1: Python Fundamentals', 'Phase 2: Intermediate Python', 'Phase 3: Advanced Python'];
  for (const type of ['python', 'ai-engineer']) {
    try {
      const exists = await Certificate.findOne({ studentId: student._id, type, status: 'active' });
      if (exists) continue;
      const targetPhases = type === 'python'
        ? await Phase.find({ name: { $in: pythonPhaseNames } })
        : await Phase.find({});
      const phaseIds = targetPhases.map(p => p._id.toString());
      const lessons  = await Lesson.find({ phaseId: { $in: phaseIds }, status: 'published' });
      if (!lessons.length) continue;
      const completed = new Set(student.completedLessons.map(String));
      const allDone   = lessons.every(l => completed.has(l._id.toString()));
      if (!allDone) continue;
      const prefix = type === 'python' ? 'NXL-PY' : 'NXL-AI';
      const year   = new Date().getFullYear();
      const count  = await Certificate.countDocuments({ type });
      const certId = `${prefix}-${year}-${String(count + 1).padStart(6, '0')}`;
      const cert   = await Certificate.create({
        certId, type, studentId: student._id,
        studentName: student.name, studentEmail: student.email,
        issuedBy: 'auto',
      });
      issued.push(cert);
    } catch (e) { console.error('Auto-cert error:', e.message); }
  }
  return issued;
}

// ── POST /api/progress/complete ───────────────────────────────────
router.post('/complete', authStudent, async (req, res) => {
  try {
    const { lessonId } = req.body;
    if (!lessonId) return res.status(400).json({ error: 'lessonId is required.' });

    const student = await Student.findById(req.user.id);
    if (!student) return res.status(404).json({ error: 'Student not found.' });

    if (!student.completedLessons.includes(lessonId)) {
      student.completedLessons.push(lessonId);
      await student.save();
    }

    // Auto-issue certificates if eligible
    const newCerts = await autoIssueCerts(student);

    res.json({
      success: true,
      completedLessons: student.completedLessons,
      completedCount: student.completedLessons.length,
      newCertificates: newCerts,
    });
  } catch (err) {
    console.error('Progress error:', err.message);
    res.status(500).json({ error: 'Could not save progress.' });
  }
});

// ── DELETE /api/progress/complete/:lessonId ───────────────────────
// Unmark a lesson as completed (undo)
router.delete('/complete/:lessonId', authStudent, async (req, res) => {
  try {
    const { lessonId } = req.params;
    await Student.findByIdAndUpdate(req.user.id, {
      $pull: { completedLessons: lessonId }
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not update progress.' });
  }
});

module.exports = router;
