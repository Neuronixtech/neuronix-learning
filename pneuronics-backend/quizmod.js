// Rebuilds the Quiz documents of one module from the quiz block embedded in each of its lessons.
// Usage: node quizmod.js <moduleId>. Deletes the module's existing quizzes first, so only use it on freshly rebuilt lessons.
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson, Quiz } = require('./models/Curriculum');
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const lessons = await Lesson.find({ moduleId: process.argv[2] }).sort({ order: 1 }).lean();
  if (!lessons.length) throw new Error('no lessons for module');
  const del = await Quiz.deleteMany({ lessonId: { $in: lessons.map((l) => String(l._id)) } });
  let made = 0;
  for (const l of lessons) {
    let blocks = JSON.parse(l.builderEn || '[]');
    if (!Array.isArray(blocks)) blocks = blocks.blocks || [];
    const qb = blocks.find((b) => b.type === 'quiz');
    if (!qb) throw new Error('no quiz block in lesson ' + l.order);
    const questions = qb.data.questions.map((q) => ({ question: q.q, options: q.opts, correct: q.correct }));
    if (questions.some((q) => !q.question || q.options.length < 2 || !Number.isInteger(q.correct) || q.correct >= q.options.length)) throw new Error('malformed quiz in lesson ' + l.order);
    await Quiz.create({ title: `${l.title} Quiz`, phaseId: l.phaseId, moduleId: l.moduleId, lessonId: l._id, questions, status: 'published' });
    made++;
  }
  console.log({ deleted: del.deletedCount, created: made });
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
