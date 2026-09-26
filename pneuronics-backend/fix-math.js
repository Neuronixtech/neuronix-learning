// Math blocks that use data.equation/captionEn are remapped to the formula/descEn fields the lesson page renders.
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
        if (b.type === 'math' && !d.formula && d.equation) {
          d.formula = d.equation; d.descEn = d.descEn || d.captionEn || ''; d.descKn = d.descKn || d.captionKn || '';
          delete d.equation; b.data = d; dirty = true; n++;
        }
      }
      if (dirty) { l[k] = JSON.stringify(a); changed = true; }
    }
    if (changed) await l.save();
  }
  console.log('converted', n, 'math blocks');
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
