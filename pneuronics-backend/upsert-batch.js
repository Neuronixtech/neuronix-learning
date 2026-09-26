// Usage: node upsert-batch.js lesson-defs/batches/<file>.json
// Upserts every lesson in the file (matched by moduleId + order), same fields as upsert-lesson.js.
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
(async () => {
  const lessons = require(require('path').resolve(process.argv[2]));
  await mongoose.connect(process.env.MONGODB_URI);
  let created = 0, updated = 0;
  for (const def of lessons) {
    const builderJson = JSON.stringify(def.blocks);
    const payload = {
      title: def.title, titleKn: def.titleKn, desc: def.desc, phaseId: def.phaseId, moduleId: def.moduleId,
      type: def.type || 'reading', duration: def.duration, difficulty: def.difficulty || 'intermediate',
      objectives: def.objectives, objectivesKn: def.objectivesKn, builderEn: builderJson, builderKn: builderJson,
      order: def.order, status: def.status || 'published',
    };
    const ex = await Lesson.findOne({ moduleId: def.moduleId, order: def.order });
    if (ex) { Object.assign(ex, payload); await ex.save(); updated++; }
    else { await Lesson.create(payload); created++; }
  }
  console.log(`created ${created}, updated ${updated}, total ${lessons.length}`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
