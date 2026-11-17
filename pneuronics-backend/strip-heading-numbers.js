// Removes leading "N. " or "N) " from heading block text (English and Kannada) in every lesson, per the no-numeric-prefix rule.
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
const RE = /^\s*\d+[\.\)]\s+/;
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const all = await Lesson.find({}).lean();
  const backup = []; let headings = 0;
  for (const l of all) {
    for (const field of ['builderEn', 'builderKn']) {
      let b; try { b = JSON.parse(l[field] || '[]'); } catch { continue; }
      const arr = Array.isArray(b) ? b : (b && b.blocks);
      if (!Array.isArray(arr)) continue;
      let changed = false;
      for (const x of arr) if (x.type === 'heading') for (const k of ['textEn', 'textKn']) if (typeof x.data[k] === 'string' && RE.test(x.data[k])) { x.data[k] = x.data[k].replace(RE, ''); changed = true; headings++; }
      if (changed) { if (!backup.find((y) => String(y._id) === String(l._id))) backup.push(l); l['_new_' + field] = JSON.stringify(b); }
    }
  }
  const dir = path.join(__dirname, 'lesson-defs/backups/expand-all-lessons');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'heading-numbers-before.json'), JSON.stringify(backup));
  for (const l of all) {
    const set = {};
    if (l._new_builderEn) set.builderEn = l._new_builderEn;
    if (l._new_builderKn) set.builderKn = l._new_builderKn;
    if (Object.keys(set).length) await Lesson.updateOne({ _id: l._id }, { $set: set });
  }
  console.log({ lessonsChanged: backup.length, headingFieldsChanged: headings });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
