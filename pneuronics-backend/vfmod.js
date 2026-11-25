// Prints block, practice and quiz counts per lesson of a module. Usage: node vfmod.js <moduleId>
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson, Practice, Quiz } = require('./models/Curriculum');
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const ls = await Lesson.find({ moduleId: process.argv[2] }).sort({ order: 1 }).lean();
  for (const l of ls) {
    const b = JSON.parse(l.builderEn); const n = Array.isArray(b) ? b.length : b.blocks.length;
    const p = await Practice.countDocuments({ lessonId: String(l._id) });
    const q = await Quiz.findOne({ lessonId: String(l._id) }).lean();
    console.log(l.order, l.status, n, 'blocks |', p, 'practices | quiz Qs', q && q.questions.length, '|', l.title.slice(0, 70));
  }
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
