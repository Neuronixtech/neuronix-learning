const express = require('express');
const router  = express.Router();
const Note    = require('../models/Note');
const { authStudent } = require('../middleware/auth');

// All routes require a logged-in student
router.use(authStudent);

// ── GET /api/notes ────────────────────────────────────────────────
// List all notes for the student, with optional search + filter
router.get('/', async (req, res) => {
  try {
    const { q, tag, phaseId, pinned } = req.query;
    const filter = { studentId: req.user.id };

    if (q)       filter.$text = { $search: q };
    if (tag)     filter.tag = tag;
    if (phaseId) filter.phaseId = phaseId;
    if (pinned === 'true') filter.pinned = true;

    const notes = await Note.find(filter).sort({ pinned: -1, updatedAt: -1 });
    res.json({ success: true, notes });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch notes.' });
  }
});

// ── POST /api/notes ───────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { title, content, phaseId, moduleId, lessonId, tag } = req.body;
    const hasTitle   = title   && title.trim()   && title.trim()   !== 'Untitled note';
    const hasContent = content && content.trim();
    if (!hasTitle && !hasContent) {
      return res.status(400).json({ error: 'Note must have a title or content before saving.' });
    }
    const note = await Note.create({
      studentId: req.user.id, title, content, phaseId, moduleId, lessonId, tag,
    });
    res.status(201).json({ success: true, note });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── GET /api/notes/:id ────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, studentId: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found.' });
    res.json({ success: true, note });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch note.' });
  }
});

// ── PUT /api/notes/:id ────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const { title, content, tag, phaseId, moduleId, lessonId, pinned } = req.body;
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, studentId: req.user.id },
      { title, content, tag, phaseId, moduleId, lessonId, pinned },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: 'Note not found.' });
    res.json({ success: true, note });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── DELETE /api/notes/:id ─────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    await Note.findOneAndDelete({ _id: req.params.id, studentId: req.user.id });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PATCH /api/notes/:id/pin ──────────────────────────────────────
router.patch('/:id/pin', async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, studentId: req.user.id });
    if (!note) return res.status(404).json({ error: 'Note not found.' });
    note.pinned = !note.pinned;
    await note.save();
    res.json({ success: true, pinned: note.pinned });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
