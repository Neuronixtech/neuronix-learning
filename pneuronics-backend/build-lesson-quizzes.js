// Creates a Quiz document for every lesson from the quiz block already embedded in that lesson (English text, as the Quiz model has no Kannada fields).
// Idempotent: lessons that already have a Quiz with questions are left alone; an existing empty Quiz for a lesson is filled in. Pass --dry to only count.
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson, Quiz } = require('./models/Curriculum');

async function main() {
  const dry = process.argv.includes('--dry');
  await mongoose.connect(process.env.MONGODB_URI);
  const existing = await Quiz.find({ lessonId: { $ne: null } }).select('lessonId questions').lean();
  const filled = new Set(existing.filter((q) => q.questions && q.questions.length).map((q) => String(q.lessonId)));
  const emptyByLesson = new Map(existing.filter((q) => !q.questions || !q.questions.length).map((q) => [String(q.lessonId), q._id]));
  let created = 0, filledIn = 0, skipped = 0, noBlock = 0, bad = 0, batch = [];
  const flush = async () => { if (batch.length && !dry) await Quiz.insertMany(batch); batch = []; };
  const cursor = Lesson.find({}).select('title phaseId moduleId status builderEn').lean().cursor();
  for await (const l of cursor) {
    const id = String(l._id);
    if (filled.has(id)) { skipped++; continue; }
    let blocks = [];
    try { blocks = JSON.parse(l.builderEn || '[]'); } catch { bad++; continue; }
    if (!Array.isArray(blocks)) blocks = Array.isArray(blocks && blocks.blocks) ? blocks.blocks : [];
    const qb = blocks.find((b) => b.type === 'quiz');
    if (!qb || !qb.data.questions || !qb.data.questions.length) { noBlock++; continue; }
    const questions = qb.data.questions.map((q) => ({ question: q.q, options: q.opts, correct: q.correct }));
    if (questions.some((q) => !q.question || !Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length)) { bad++; continue; }
    if (emptyByLesson.has(id)) {
      if (!dry) await Quiz.updateOne({ _id: emptyByLesson.get(id) }, { $set: { questions, status: 'published' } });
      filledIn++;
      continue;
    }
    batch.push({ title: `${l.title} Quiz`, phaseId: l.phaseId, moduleId: l.moduleId, lessonId: l._id, questions, status: 'published' });
    created++;
    if (batch.length >= 100) await flush();
  }
  await flush();
  console.log({ dry, created, filledIn, alreadyHadQuiz: skipped, lessonsWithoutQuizBlock: noBlock, malformed: bad, totalQuizzes: await Quiz.countDocuments() });
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
