const express = require('express');
const router  = express.Router();
const Student = require('../models/Student');
const Payment = require('../models/Payment');
const { Phase, Module, Lesson, Quiz } = require('../models/Curriculum');
const { authAdmin } = require('../middleware/auth');

// ── GET /api/admin/students ───────────────────────────────────────
router.get('/students', authAdmin, async (req, res) => {
  try {
    const students = await Student.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, students });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch students.' });
  }
});

// ── GET /api/admin/payments ───────────────────────────────────────
router.get('/payments', authAdmin, async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json({ success: true, payments });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch payments.' });
  }
});

// ── GET /api/admin/stats ──────────────────────────────────────────
router.get('/stats', authAdmin, async (req, res) => {
  try {
    const [totalStudents, enrolledStudents, totalPayments, phases, modules, lessons, quizzes, activeSessionCount] = await Promise.all([
      Student.countDocuments(),
      Student.countDocuments({ enrolled: true }),
      Payment.countDocuments({ status: 'paid' }),
      Phase.countDocuments(),
      Module.countDocuments(),
      Lesson.countDocuments(),
      Quiz.countDocuments(),
      Student.countDocuments({ activeSessionId: { $ne: null } }),
    ]);

    const paidPayments = await Payment.find({ status: 'paid' });
    const totalRevenue = paidPayments.reduce((sum, p) => sum + p.amount, 0) / 100;

    res.json({
      success: true,
      stats: {
        totalStudents, enrolledStudents, totalPayments, totalRevenue,
        phases, modules, lessons, quizzes, activeSessionCount,
        enrollmentRate: totalStudents > 0 ? Math.round((enrolledStudents / totalStudents) * 100) : 0,
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch stats.' });
  }
});

// ── GET /api/admin/analytics ──────────────────────────────────────
// Rich analytics: registrations/revenue over time, top streaks, activity
router.get('/analytics', authAdmin, async (req, res) => {
  try {
    const now = new Date();

    // ── Last 12 months: registrations + revenue per month ──────────
    const months = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push({
        label: d.toLocaleString('en-IN', { month: 'short', year: '2-digit' }),
        start: new Date(d.getFullYear(), d.getMonth(), 1),
        end:   new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59),
      });
    }

    const registrationsByMonth = await Promise.all(months.map(m =>
      Student.countDocuments({ createdAt: { $gte: m.start, $lte: m.end } })
    ));

    const enrollmentsByMonth = await Promise.all(months.map(m =>
      Student.countDocuments({ enrolledAt: { $gte: m.start, $lte: m.end } })
    ));

    const revenueByMonth = await Promise.all(months.map(async m => {
      const pays = await Payment.find({ status: 'paid', createdAt: { $gte: m.start, $lte: m.end } });
      return pays.reduce((s, p) => s + p.amount, 0) / 100;
    }));

    // ── Last 30 days: daily registrations ──────────────────────────
    const dailyLabels = [], dailyRegs = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i); d.setHours(0,0,0,0);
      const end = new Date(d); end.setHours(23,59,59,999);
      dailyLabels.push(d.toLocaleDateString('en-IN', { day:'numeric', month:'short' }));
      dailyRegs.push(await Student.countDocuments({ createdAt: { $gte: d, $lte: end } }));
    }

    // ── Top students by streak ──────────────────────────────────────
    const topStreaks = await Student.find({ currentStreak: { $gt: 0 } })
      .select('name email currentStreak bestStreak')
      .sort({ bestStreak: -1 })
      .limit(5);

    // ── Payment status breakdown ────────────────────────────────────
    const [payPaid, payPending, payFailed] = await Promise.all([
      Payment.countDocuments({ status: 'paid' }),
      Payment.countDocuments({ status: 'created' }),
      Payment.countDocuments({ status: 'failed' }),
    ]);

    // ── Recent activity (last 10 registrations) ────────────────────
    const recentStudents = await Student.find()
      .select('name email enrolled createdAt')
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      analytics: {
        monthly: {
          labels: months.map(m => m.label),
          registrations: registrationsByMonth,
          enrollments:   enrollmentsByMonth,
          revenue:       revenueByMonth,
        },
        daily: { labels: dailyLabels, registrations: dailyRegs },
        topStreaks,
        paymentBreakdown: { paid: payPaid, pending: payPending, failed: payFailed },
        recentStudents,
      },
    });
  } catch (err) {
    console.error('Analytics error:', err.message);
    res.status(500).json({ error: 'Could not fetch analytics.' });
  }
});

// ── POST /api/admin/enroll-test ───────────────────────────────────
// Manually enroll any student by email — for testing without Razorpay
router.post('/enroll-test', authAdmin, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required.' });
    const student = await Student.findOneAndUpdate(
      { email: email.toLowerCase() },
      { enrolled: true, enrolledAt: new Date() },
      { new: true }
    );
    if (!student) return res.status(404).json({ error: 'No student found with that email.' });
    res.json({ success: true, message: student.name + ' is now enrolled.', student: { name: student.name, email: student.email, enrolled: student.enrolled } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── POST /api/admin/unenroll-test ─────────────────────────────────
// Unenroll a student — useful to re-test the enroll flow
router.post('/unenroll-test', authAdmin, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required.' });
    const student = await Student.findOneAndUpdate(
      { email: email.toLowerCase() },
      { enrolled: false, enrolledAt: null },
      { new: true }
    );
    if (!student) return res.status(404).json({ error: 'No student found with that email.' });
    res.json({ success: true, message: student.name + ' has been unenrolled.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete('/students/:id', authAdmin, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete student.' });
  }
});

// ── POST /api/admin/students/:id/reset-session ────────────────────
// Admin can free a stuck session (e.g. user locked out after closing browser)
router.post('/students/:id/reset-session', authAdmin, async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, { activeSessionId: null, sessionLastActive: null });
    res.json({ success: true, message: 'Session reset. Student can log in again.' });
  } catch (err) {
    res.status(500).json({ error: 'Could not reset session.' });
  }
});

module.exports = router;
