require('dotenv').config();
const mongoose = require('mongoose');
const { Practice } = require('./models/Curriculum');

async function main() {
  const defFile = process.argv[2];
  const defs = require(require('path').resolve(defFile));
  await mongoose.connect(process.env.MONGODB_URI);

  let created = 0, updated = 0;
  for (const def of defs) {
    const payload = {
      title: def.title,
      titleKn: def.titleKn || '',
      problem: def.problem,
      problemKn: def.problemKn || '',
      phaseId: def.phaseId,
      moduleId: def.moduleId,
      lessonId: def.lessonId,
      order: def.order,
      difficulty: def.difficulty || 'intermediate',
      status: def.status || 'published',
    };

    let practice = await Practice.findOne({ lessonId: def.lessonId, order: def.order });
    if (practice) {
      Object.assign(practice, payload);
      await practice.save();
      updated++;
    } else {
      await Practice.create(payload);
      created++;
    }
  }

  console.log(`Created: ${created}, Updated: ${updated}, Total: ${defs.length}`);
  await mongoose.disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
