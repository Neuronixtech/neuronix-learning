const express  = require('express');
const router   = express.Router();
const Student  = require('../models/Student');
const { authStudent } = require('../middleware/auth');

// ── Helpers ───────────────────────────────────────────────────────
function todayStr() {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}
function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

// Recalculate currentStreak from activityLog (sorted dates)
function calcStreak(log) {
  if (!log || !log.length) return 0;
  const sorted = [...new Set(log)].sort().reverse(); // newest first, unique
  const today = todayStr();
  const yesterday = yesterdayStr();

  // Streak only counts if last activity was today or yesterday
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 0;
  let expected = sorted[0] === today ? today : yesterday;

  for (const day of sorted) {
    if (day === expected) {
      streak++;
      // Walk back one day
      const d = new Date(expected);
      d.setDate(d.getDate() - 1);
      expected = d.toISOString().slice(0, 10);
    } else {
      break;
    }
  }
  return streak;
}

// ── POST /api/streak/ping ─────────────────────────────────────────
// Call this once per day (on page load) to record activity and update streak.
router.post('/ping', authStudent, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);
    if (!student) return res.status(404).json({ error: 'Student not found.' });

    const today = todayStr();

    // Only update if we haven't logged today yet
    if (!student.activityLog.includes(today)) {
      student.activityLog.push(today);
      student.lastActivityAt = new Date();

      const current = calcStreak(student.activityLog);
      student.currentStreak = current;
      if (current > (student.bestStreak || 0)) student.bestStreak = current;

      await student.save();
    }

    res.json({
      success: true,
      currentStreak: student.currentStreak,
      bestStreak:    student.bestStreak,
      todayLogged:   true,
      activityLog:   student.activityLog,
    });
  } catch (err) {
    console.error('Streak ping error:', err.message);
    res.status(500).json({ error: 'Could not update streak.' });
  }
});

// ── GET /api/streak ───────────────────────────────────────────────
// Returns streak data + activity log for the heatmap
router.get('/', authStudent, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('currentStreak bestStreak activityLog lastActivityAt');
    if (!student) return res.status(404).json({ error: 'Student not found.' });

    // Recalculate live (in case last activity was yesterday and streak should still be valid)
    const current = calcStreak(student.activityLog);

    res.json({
      success: true,
      currentStreak: current,
      bestStreak:    student.bestStreak || 0,
      lastActivityAt: student.lastActivityAt,
      activityLog:   student.activityLog || [],
    });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch streak.' });
  }
});

module.exports = router;
