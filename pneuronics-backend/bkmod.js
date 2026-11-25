// Backs up the lessons, practices and quizzes of one module. Usage: node bkmod.js <moduleId> <label>
require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const { Lesson, Practice, Quiz } = require('./models/Curriculum');
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const lessons = await Lesson.find({ moduleId: process.argv[2] }).lean();
  const ids = lessons.map((l) => String(l._id));
  const practices = await Practice.find({ lessonId: { $in: ids } }).lean();
  const quizzes = await Quiz.find({ lessonId: { $in: ids } }).lean();
  fs.mkdirSync('lesson-defs/backups/phase19-before-rebuild', { recursive: true });
  fs.writeFileSync(`lesson-defs/backups/phase19-before-rebuild/module_${process.argv[3]}.json`, JSON.stringify({ lessons, practices, quizzes }));
  console.log('backed up lessons', lessons.length, 'practices', practices.length, 'quizzes', quizzes.length);
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
