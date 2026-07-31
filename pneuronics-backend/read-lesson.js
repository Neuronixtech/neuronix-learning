require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');

function getBlocks(parsed) { return Array.isArray(parsed) ? parsed : parsed.blocks; }

async function main() {
  const lessonId = process.argv[2];
  const noSvg = process.argv.includes('--nosvg');
  await mongoose.connect(process.env.MONGODB_URI);
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) { console.log('Lesson not found'); process.exit(1); }

  console.log(`Title: ${lesson.title}`);
  console.log(`TitleKn: ${lesson.titleKn}`);

  for (const field of ['builderEn']) {
    const raw = lesson[field];
    if (!raw) continue;
    let parsed;
    try { parsed = JSON.parse(raw); } catch (e) { console.log(`[${field}] not JSON`); continue; }
    const blocks = getBlocks(parsed);
    if (!blocks) continue;
    blocks.forEach((block, i) => {
      console.log(`--- [${i}] id=${block.id} type=${block.type} ---`);
      const data = { ...block.data };
      if (noSvg && data && data.svgCode) data.svgCode = '[omitted]';
      console.log(JSON.stringify(data, null, 2));
    });
  }

  await mongoose.disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
