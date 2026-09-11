require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const { Lesson } = require('./models/Curriculum');

const configPath = process.argv[2];
const config = require(require('path').resolve(configPath));

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const l = await Lesson.findById(config.lessonId);
  const parsed = JSON.parse(l.builderEn);
  const blocks = Array.isArray(parsed) ? parsed : parsed.blocks;
  let quizIdx = 0;
  blocks.forEach((b) => {
    if (b.id && config.fills[b.id]) {
      Object.assign(b.data, config.fills[b.id]);
    }
    if (b.type === 'quiz' && config.quizKn) {
      b.data.questions.forEach((q) => {
        Object.assign(q, config.quizKn[quizIdx]);
        quizIdx++;
      });
    }
  });
  const out = {
    phaseId: l.phaseId.toString(),
    moduleId: l.moduleId.toString(),
    order: l.order,
    type: l.type,
    duration: l.duration,
    difficulty: l.difficulty,
    status: l.status,
    title: l.title,
    titleKn: l.titleKn,
    desc: l.desc,
    descKn: config.descKn || l.descKn || l.desc,
    objectives: l.objectives,
    objectivesKn: l.objectivesKn,
    blocks,
  };
  fs.writeFileSync(config.outFile, 'module.exports = ' + JSON.stringify(out, null, 2) + ';\n');
  console.log('wrote', config.outFile, '| blocks:', blocks.length, '| quizIdx used:', quizIdx, '/ expected', (config.quizKn||[]).length);
  process.exit(0);
})();
