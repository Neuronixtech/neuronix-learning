// Table blocks that carry bodyEn/bodyKn instead of rows are really text lists; convert them to concept blocks so they render.
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  let n = 0;
  for (const l of await Lesson.find({})) {
    let changed = false;
    for (const k of ['builderEn', 'builderKn']) {
      let a; try { a = JSON.parse(l[k] || '[]'); } catch (e) { continue; }
      if (!Array.isArray(a)) continue;
      let dirty = false;
      for (const b of a) {
        const d = b.data || {};
        if (b.type === 'table' && typeof d.rows !== 'string' && (d.bodyEn || d.bodyKn)) {
          b.type = 'concept';
          b.data = { headingEn: d.captionEn || d.headingEn || '', headingKn: d.captionKn || d.headingKn || '', bodyEn: d.bodyEn || '', bodyKn: d.bodyKn || '' };
          dirty = true; n++;
        }
      }
      if (dirty) { l[k] = JSON.stringify(a); changed = true; }
    }
    if (changed) await l.save();
  }
  console.log('converted', n, 'blocks');
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
