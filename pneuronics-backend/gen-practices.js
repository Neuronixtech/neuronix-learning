// Creates 3 placeholder practice problems (EN/KN) for every lesson in lesson-defs/batches/*.json that has none.
// Built from each lesson's own concept headings and objectives. Intended to be rewritten later.
require('dotenv').config();
const fs = require('fs'), path = require('path');
const mongoose = require('mongoose');
const { Lesson, Practice } = require('./models/Curriculum');

const short = t => (t.split(' — ').slice(1).join(' — ') || t).trim();
const shortKn = t => (t.split(' — ').slice(1).join(' — ') || t).trim();

function tpl(l, concepts, objs, objsKn) {
  const [c1, c2] = concepts;
  const topic = short(l.title), topicKn = shortKn(l.titleKn || l.title);
  return [
    { difficulty: 'beginner',
      title: `Explain: ${topic}`, titleKn: `ವಿವರಿಸಿ: ${topicKn}`,
      problem: `In your own words, write two short paragraphs. First explain "${c1.en}", then "${c2.en}". For each, give one concrete example from a system or project you know, and say what would go wrong if the idea were ignored.`,
      problemKn: `ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ಎರಡು ಚಿಕ್ಕ ಪ್ಯಾರಾಗ್ರಾಫ್ ಬರೆಯಿರಿ. ಮೊದಲು "${c1.kn}" ವಿವರಿಸಿ, ನಂತರ "${c2.kn}". ಪ್ರತಿಯೊಂದಕ್ಕೆ ನಿಮಗೆ ತಿಳಿದ ವ್ಯವಸ್ಥೆ ಅಥವಾ ಪ್ರಾಜೆಕ್ಟ್‌ನಿಂದ ಒಂದು ನಿರ್ದಿಷ್ಟ ಉದಾಹರಣೆ ನೀಡಿ, ಆ ಕಲ್ಪನೆ ನಿರ್ಲಕ್ಷಿಸಿದರೆ ಏನು ತಪ್ಪಾಗುತ್ತದೆ ಎಂದು ಹೇಳಿ.` },
    { difficulty: 'intermediate',
      title: `Apply: ${topic}`, titleKn: `ಅನ್ವಯಿಸಿ: ${topicKn}`,
      problem: `A team is about to work on this topic: ${topic}. Write a checklist of 5 concrete, checkable actions that apply the lesson. Base it on these learning goals: ${objs.join(' ')} For each action, state how you would verify it was done.`,
      problemKn: `ಒಂದು ತಂಡ ಈ ವಿಷಯದ ಮೇಲೆ ಕೆಲಸ ಆರಂಭಿಸಲಿದೆ: ${topicKn}. ಪಾಠವನ್ನು ಅನ್ವಯಿಸುವ 5 ನಿರ್ದಿಷ್ಟ, ಪರಿಶೀಲಿಸಬಹುದಾದ ಕ್ರಿಯೆಗಳ ಚೆಕ್‌ಲಿಸ್ಟ್ ಬರೆಯಿರಿ. ಈ ಕಲಿಕಾ ಗುರಿಗಳ ಆಧಾರದಲ್ಲಿ: ${objsKn.join(' ')} ಪ್ರತಿ ಕ್ರಿಯೆ ಮಾಡಲಾಗಿದೆ ಎಂದು ಹೇಗೆ ಪರಿಶೀಲಿಸುತ್ತೀರಿ ಎಂದು ತಿಳಿಸಿ.` },
    { difficulty: 'advanced',
      title: `Critique and improve: ${topic}`, titleKn: `ಟೀಕಿಸಿ ಮತ್ತು ಸುಧಾರಿಸಿ: ${topicKn}`,
      problem: `Choose a real or realistic system where "${c1.en}" matters. Describe how it currently handles this, find one weakness using what the lesson taught, propose a specific change, and design a small measurement (a metric, a test or an experiment) that would show whether your change helped. Note one way your measurement could mislead you.`,
      problemKn: `"${c1.kn}" ಮುಖ್ಯವಾಗಿರುವ ನಿಜ ಅಥವಾ ವಾಸ್ತವಿಕ ವ್ಯವಸ್ಥೆ ಆರಿಸಿ. ಅದು ಈಗ ಇದನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸುತ್ತದೆ ವಿವರಿಸಿ, ಪಾಠ ಕಲಿಸಿದ್ದನ್ನು ಬಳಸಿ ಒಂದು ದೌರ್ಬಲ್ಯ ಕಂಡುಹಿಡಿಯಿರಿ, ನಿರ್ದಿಷ್ಟ ಬದಲಾವಣೆ ಪ್ರಸ್ತಾಪಿಸಿ, ಮತ್ತು ನಿಮ್ಮ ಬದಲಾವಣೆ ಸಹಾಯ ಮಾಡಿತೇ ಎಂದು ತೋರಿಸುವ ಸಣ್ಣ ಅಳತೆ (ಮೆಟ್ರಿಕ್, test ಅಥವಾ ಪ್ರಯೋಗ) ವಿನ್ಯಾಸ ಮಾಡಿ. ನಿಮ್ಮ ಅಳತೆ ದಾರಿ ತಪ್ಪಿಸಬಹುದಾದ ಒಂದು ರೀತಿ ಗಮನಿಸಿ.` },
  ];
}

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const dir = path.join(__dirname, 'lesson-defs', 'batches');
  let created = 0, skipped = 0;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.json')).sort()) {
    for (const def of require(path.join(dir, f))) {
      const l = await Lesson.findOne({ moduleId: def.moduleId, order: def.order });
      if (!l) continue;
      if (await Practice.countDocuments({ lessonId: String(l._id) }) > 0 || await Practice.countDocuments({ lessonId: l._id }) > 0) { skipped++; continue; }
      const blocks = JSON.parse(l.builderEn);
      const concepts = blocks.filter(b => b.type === 'concept' && b.data.headingEn && b.data.headingEn !== 'Lesson Info')
        .map(b => ({ en: b.data.headingEn, kn: b.data.headingKn || b.data.headingEn }));
      while (concepts.length < 2) concepts.push(concepts[0] || { en: short(l.title), kn: short(l.titleKn || l.title) });
      const items = tpl(l, concepts, l.objectives || [], l.objectivesKn || l.objectives || []);
      for (let i = 0; i < 3; i++) {
        await Practice.create({ ...items[i], phaseId: l.phaseId, moduleId: l.moduleId, lessonId: l._id, order: i + 1, status: 'published' });
        created++;
      }
    }
  }
  console.log(`created ${created} practices, skipped ${skipped} lessons that already had some`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
