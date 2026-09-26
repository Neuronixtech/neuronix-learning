// Converts table blocks whose data.rows is an array of arrays (+ data.headers) into the pipe/newline string the lesson page renders.
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
const cell = c => String(c == null ? '' : c).replace(/\|/g, '/').replace(/\n/g, ' ');
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  let blocks = 0, lessons = 0;
  for (const l of await Lesson.find({})) {
    let changed = false;
    for (const k of ['builderEn', 'builderKn']) {
      let a; try { a = JSON.parse(l[k] || '[]'); } catch (e) { continue; }
      if (!Array.isArray(a)) continue;
      let dirty = false;
      for (const b of a) {
        const d = b.data || {};
        if (b.type === 'table' && Array.isArray(d.rows)) {
          const hdr = (k === 'builderKn' && Array.isArray(d.headersKn) && d.headersKn.length ? d.headersKn : d.headers) || [];
          const body = (k === 'builderKn' && Array.isArray(d.rowsKn) && d.rowsKn.length ? d.rowsKn : d.rows);
          d.rows = [hdr, ...body].map(r => r.map(cell).join('|')).join('\n');
          delete d.headers; delete d.headersKn; delete d.rowsKn;
          dirty = true; blocks++;
        }
      }
      if (dirty) { l[k] = JSON.stringify(a); changed = true; }
    }
    if (changed) { await l.save(); lessons++; }
  }
  console.log(`converted ${blocks} table blocks in ${lessons} lessons`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
