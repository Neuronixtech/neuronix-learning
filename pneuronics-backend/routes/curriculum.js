const express = require('express');
const router  = express.Router();
const { Phase, Module, Lesson, Quiz, Practice, GlossaryTerm } = require('../models/Curriculum');
const { authAdmin } = require('../middleware/auth');

// Helper to build CRUD routes for a model
// ── GET /api/curriculum/lessons/:id ──────────────────────────────
// Get a single lesson by ID (for the student lesson reader)
router.get('/lessons/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found.' });
    res.set('Cache-Control', 'no-store');
    res.json({ success: true, lesson });
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch lesson.' });
  }
});

function crud(model, name, opts = {}) {
  // GET all (public — but only published unless ?all=true with admin)
  // excludeWhenPublic: field names stripped from the response when the caller
  // is not passing ?all=true (i.e. the public/unauthenticated list view, which
  // never needs heavy fields like full lesson body content).
  const { excludeWhenPublic } = opts;
  router.get(`/${name}`, async (req, res) => {
    try {
      const isAdminView = req.query.all === 'true';
      const filter = isAdminView ? {} : { status: 'published' };
      if (req.query.lessonId)  filter.lessonId  = req.query.lessonId;
      if (req.query.phaseId)   filter.phaseId   = req.query.phaseId;
      if (req.query.moduleId)  filter.moduleId  = req.query.moduleId;
      let query = model.find(filter).sort({ order: 1, createdAt: 1 });
      if (excludeWhenPublic && !isAdminView) {
        query = query.select(excludeWhenPublic.map(f => `-${f}`).join(' '));
      }
      const items = await query;
      res.set('Cache-Control', 'no-store');
      res.json({ success: true, [name]: items });
    } catch (err) {
      res.status(500).json({ error: `Could not fetch ${name}.` });
    }
  });

  // POST create (admin only)
  router.post(`/${name}`, authAdmin, async (req, res) => {
    try {
      const item = await model.create(req.body);
      res.status(201).json({ success: true, item });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // PUT update (admin only)
  router.put(`/${name}/:id`, authAdmin, async (req, res) => {
    try {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!item) return res.status(404).json({ error: 'Not found.' });
      res.json({ success: true, item });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // DELETE (admin only)
  router.delete(`/${name}/:id`, authAdmin, async (req, res) => {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
}

crud(Phase,        'phases');
crud(Module,       'modules');
// Public lesson-list callers (curriculum tree, lesson prev/next nav) only ever
// use metadata — never the full lesson body — so strip the heavy fields unless
// an admin explicitly asks for everything via ?all=true.
crud(Lesson,       'lessons', { excludeWhenPublic: ['contentEn', 'contentKn', 'content', 'builderEn', 'builderKn'] });
crud(Quiz,         'quizzes');
crud(Practice,     'practices');
crud(GlossaryTerm, 'glossary');

// ── GET /api/curriculum/full ──────────────────────────────────────
// Returns the entire nested curriculum (for the public curriculum page)
router.get('/full', async (req, res) => {
  try {
    const adminView = req.query.all === 'true';
    const filter = adminView ? {} : { status: 'published' };

    const phases  = await Phase.find(filter).sort({ order: 1 });
    const modules = await Module.find(filter).sort({ order: 1 });
    // The curriculum tree view only ever renders lesson metadata (title, order,
    // duration, etc.) — never the full body/builder JSON, which can be large
    // (embedded SVGs across many blocks). Excluding it here is what actually
    // fixes the slow curriculum-page load.
    const lessons = await Lesson.find(filter)
      .select('-contentEn -contentKn -content -builderEn -builderKn')
      .sort({ order: 1, createdAt: 1 });

    const nested = phases.map(phase => {
      const phaseId = String(phase._id);
      const phaseModules = modules
        .filter(m => String(m.phaseId) === phaseId)
        .map(module => ({
          ...module.toObject(),
          lessons: lessons.filter(l => String(l.moduleId) === String(module._id)),
        }));

      // Lessons saved without a module (rich-editor lessons with only phaseId set)
      const directLessons = lessons.filter(l =>
        String(l.phaseId) === phaseId && !l.moduleId
      );

      return {
        ...phase.toObject(),
        modules: phaseModules,
        lessons: directLessons,
      };
    });

    // Orphan lessons: no phaseId and no moduleId
    const orphans = lessons.filter(l => !l.phaseId && !l.moduleId);

    const totalLessonCount = nested.reduce((s, ph) => {
      const modLessons = (ph.modules||[]).reduce((ms,m) => ms+(m.lessons||[]).length, 0);
      return s + modLessons + (ph.lessons||[]).length;
    }, 0) + orphans.length;
    res.set('Cache-Control', 'no-store');
    res.json({ success: true, curriculum: nested, orphans, totalLessonCount });
  } catch (err) {
    console.error('Full curriculum error:', err.message);
    res.status(500).json({ error: 'Could not fetch curriculum.' });
  }
});

// ── GET /api/curriculum/debug-ids ────────────────────────────────
// Check if the phase and module containing your lesson are published.
router.get('/debug-ids', async (req, res) => {
  try {
    const phaseId  = '6a358e5ffc29b5a47144467a';
    const moduleId = '6a358e5ffc29b5a47144467d';
    const phase  = await Phase.findById(phaseId).select('name status');
    const module = await Module.findById(moduleId).select('name status phaseId');
    const lesson = await Lesson.findOne({ status:'published', phaseId, moduleId }).select('title status phaseId moduleId');
    res.json({ phase, module, lesson });
  } catch(err) { res.status(500).json({ error: err.message }); }
});

// ── GET /api/curriculum/debug-lessons ─────────────────────────────
// Shows raw lesson data so you can diagnose visibility issues.
// Remove this after debugging.
router.get('/debug-lessons', async (req, res) => {
  try {
    const all = await Lesson.find({}).sort({ createdAt: -1 }).limit(20);
    res.json({
      count: all.length,
      lessons: all.map(l => ({
        id: l._id,
        title: l.title,
        status: l.status,
        phaseId: l.phaseId,
        moduleId: l.moduleId,
        hasBuilderEn: !!l.builderEn,
        builderEnLen: (l.builderEn||'').length,
        createdAt: l.createdAt,
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
