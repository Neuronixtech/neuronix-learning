require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');

async function main() {
  const defFile = process.argv[2];
  const def = require(require('path').resolve(defFile));
  await mongoose.connect(process.env.MONGODB_URI);

  const builderJson = JSON.stringify(def.blocks);

  const payload = {
    title: def.title,
    titleKn: def.titleKn,
    desc: def.desc,
    phaseId: def.phaseId,
    moduleId: def.moduleId,
    type: def.type || 'reading',
    duration: def.duration,
    difficulty: def.difficulty || 'intermediate',
    objectives: def.objectives,
    objectivesKn: def.objectivesKn,
    builderEn: builderJson,
    builderKn: builderJson,
    order: def.order,
    status: def.status || 'published',
  };

  let lesson = await Lesson.findOne({ moduleId: def.moduleId, order: def.order });
  if (lesson) {
    Object.assign(lesson, payload);
    await lesson.save();
    console.log('Updated existing lesson:', lesson._id, lesson.title);
  } else {
    lesson = await Lesson.create(payload);
    console.log('Created new lesson:', lesson._id, lesson.title);
  }

  console.log('blocks:', def.blocks.length);
  await mongoose.disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
