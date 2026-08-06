const express = require('express');
const router  = express.Router();
const { Phase, Module, Lesson, Quiz, Practice, GlossaryTerm } = require('../models/Curriculum');
const { authAdmin } = require('../middleware/auth');

// ── In-process cache for public (published-only) curriculum reads ─────────
// The curriculum barely changes between requests (only when an admin
// publishes/edits something), so repeated public reads within a short window
// are served from memory instead of hitting MongoDB. Writes below invalidate
// the relevant keys immediately, so admin edits are never stale for readers —
// the TTL is only a safety net, not the primary invalidation mechanism.
const CACHE_TTL_MS = 60 * 1000;
const cache = new Map();
function cacheGet(key) {
  const hit = cache.get(key);
  if (!hit || hit.expiresAt < Date.now()) return null;
  return hit.data;
}
function cacheSet(key, data) {
  cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}
function cacheInvalidate(prefix) {
  for (const key of cache.keys()) {
    if (key.startsWith(prefix)) cache.delete(key);
  }
}

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
  // postProcess: optional (item, isAdminView) => plainObject hook run over
  // every fetched item before it's sent — used to derive lightweight summary
  // fields (like a block count) and then drop the heavy source field from the
  // response, so list views stay fast even when a single record's content is
  // large. Runs for both public and admin callers; when set, it takes over
  // field-trimming entirely (excludeWhenPublic is ignored for this route).
  // invalidatesFull: whether writes to this model should also bust the
  // combined /full cache (only Phase/Module/Lesson feed that route).
  const { excludeWhenPublic, postProcess, invalidatesFull } = opts;
  router.get(`/${name}`, async (req, res) => {
    try {
      const isAdminView = req.query.all === 'true';
      const cacheKey = `${name}:${req.query.lessonId||''}:${req.query.phaseId||''}:${req.query.moduleId||''}`;
      if (!isAdminView) {
        const cached = cacheGet(cacheKey);
        if (cached) {
          res.set('Cache-Control', 'public, max-age=30');
          return res.json(cached);
        }
      }
      const filter = isAdminView ? {} : { status: 'published' };
      if (req.query.lessonId)  filter.lessonId  = req.query.lessonId;
      if (req.query.phaseId)   filter.phaseId   = req.query.phaseId;
      if (req.query.moduleId)  filter.moduleId  = req.query.moduleId;
      let query = model.find(filter).sort({ order: 1, createdAt: 1 });
      if (excludeWhenPublic && !isAdminView && !postProcess) {
        query = query.select(excludeWhenPublic.map(f => `-${f}`).join(' '));
      }
      let items = await query;
      if (postProcess) items = items.map(item => postProcess(item, isAdminView));
      const payload = { success: true, [name]: items };
      if (isAdminView) {
        res.set('Cache-Control', 'no-store');
      } else {
        cacheSet(cacheKey, payload);
        res.set('Cache-Control', 'public, max-age=30');
      }
      res.json(payload);
    } catch (err) {
      res.status(500).json({ error: `Could not fetch ${name}.` });
    }
  });

  function invalidate() {
    cacheInvalidate(`${name}:`);
    if (invalidatesFull) cacheInvalidate('full:');
  }

  // POST create (admin only)
  router.post(`/${name}`, authAdmin, async (req, res) => {
    try {
      const item = await model.create(req.body);
      invalidate();
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
      invalidate();
      res.json({ success: true, item });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // DELETE (admin only)
  router.delete(`/${name}/:id`, authAdmin, async (req, res) => {
    try {
      await model.findByIdAndDelete(req.params.id);
      invalidate();
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
}

crud(Phase,        'phases',   { invalidatesFull: true });
crud(Module,       'modules',  { invalidatesFull: true });

// No lesson *list* view (public or admin) renders full block content — the
// Rich Editor always loads a single lesson by ID (GET /lessons/:id) instead.
// The admin "All Lessons" table only needs a block *count* (for its RICH
// badge), so compute that server-side and drop the heavy source fields
// (builderEn/builderKn/content) from every list response. contentEn/contentKn
// (the smaller legacy fields) stay in for admins, since the admin
// dual-editor's lesson dropdown reads them straight from this list.
function countBlocks(raw) {
  if (typeof raw !== 'string') return 0;
  const t = raw.trim();
  try {
    if (t.startsWith('{')) { const p = JSON.parse(t); return (p && Array.isArray(p.blocks)) ? p.blocks.length : 0; }
    if (t.startsWith('[')) { const p = JSON.parse(t); return Array.isArray(p) ? p.length : 0; }
  } catch (e) { /* malformed content — treat as zero blocks */ }
  return 0;
}
function summarizeLesson(item, isAdminView) {
  const obj = item.toObject();
  obj.blockCount = countBlocks(obj.builderEn) || countBlocks(obj.contentEn);
  delete obj.builderEn;
  delete obj.builderKn;
  delete obj.content;
  if (!isAdminView) {
    delete obj.contentEn;
    delete obj.contentKn;
  }
  return obj;
}
crud(Lesson,       'lessons', { postProcess: summarizeLesson, invalidatesFull: true });
crud(Quiz,         'quizzes');
crud(Practice,     'practices');
crud(GlossaryTerm, 'glossary');

// ── GET /api/curriculum/full ──────────────────────────────────────
// Returns the entire nested curriculum (for the public curriculum page)
router.get('/full', async (req, res) => {
  try {
    const adminView = req.query.all === 'true';
    const cacheKey = 'full:public';
    if (!adminView) {
      const cached = cacheGet(cacheKey);
      if (cached) {
        res.set('Cache-Control', 'public, max-age=30');
        return res.json(cached);
      }
    }
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
    const payload = { success: true, curriculum: nested, orphans, totalLessonCount };
    if (adminView) {
      res.set('Cache-Control', 'no-store');
    } else {
      cacheSet(cacheKey, payload);
      res.set('Cache-Control', 'public, max-age=30');
    }
    res.json(payload);
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
