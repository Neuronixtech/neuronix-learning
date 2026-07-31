require('dotenv').config();
const mongoose = require('mongoose');
const { Phase, Module, Lesson } = require('./models/Curriculum');

// Collapses extra blank-line gaps that sit between already-bulleted lines,
// e.g. "• item1\n\n• item2" -> "• item1\n• item2". Does not touch genuine
// paragraph breaks (blank line before a non-bullet line).
const BULLET_START_RE = /^[ \t]*(?:[••\-–—>]|\d+[.)])\s/;

function tightenGaps(text) {
  if (typeof text !== 'string' || !text.includes('\n\n')) return { changed: false, text };
  const tightened = text.replace(/\n[ \t]*\n+(?=[ \t]*(?:[••\-–—>]|\d+[.)])\s)/g, '\n');
  return { changed: tightened !== text, text: tightened };
}

const FIELDS = ['bodyEn', 'bodyKn', 'textEn', 'textKn', 'descEn', 'descKn'];
function getBlocks(parsed) { return Array.isArray(parsed) ? parsed : parsed.blocks; }
function setBlocks(parsed, blocks) { if (Array.isArray(parsed)) return blocks; parsed.blocks = blocks; return parsed; }

async function main() {
  const phaseArg = process.argv[2];
  const dry = process.argv.includes('--dry');
  await mongoose.connect(process.env.MONGODB_URI);

  const phase = await Phase.findOne({ order: Number(phaseArg) }) || await Phase.findById(phaseArg);
  if (!phase) { console.log('Phase not found'); process.exit(1); }
  console.log(`Phase: ${phase.name}`);

  const modules = await Module.find({ phaseId: phase._id }).sort({ order: 1 });
  const moduleIds = modules.map(m => m._id);
  const lessons = await Lesson.find({ moduleId: { $in: moduleIds } }).sort({ order: 1 });
  console.log(`Lessons: ${lessons.length}`);

  let changedCount = 0;
  for (const lesson of lessons) {
    const updates = {};
    for (const field of ['builderEn', 'builderKn']) {
      const raw = lesson[field];
      if (!raw) continue;
      let parsed;
      try { parsed = JSON.parse(raw); } catch (e) { continue; }
      const blocks = getBlocks(parsed);
      if (!blocks) continue;
      let fieldChanged = false;
      for (const block of blocks) {
        if (!block.data) continue;
        for (const key of FIELDS) {
          if (block.data[key]) {
            const { changed, text } = tightenGaps(block.data[key]);
            if (changed) {
              block.data[key] = text;
              fieldChanged = true;
            }
          }
        }
      }
      if (fieldChanged) {
        updates[field] = JSON.stringify(setBlocks(parsed, blocks));
      }
    }
    if (Object.keys(updates).length > 0) {
      changedCount++;
      console.log(`  ${lesson.title} (${lesson._id}): ${Object.keys(updates).join(', ')}`);
      if (!dry) {
        await Lesson.updateOne({ _id: lesson._id }, { $set: updates });
      }
    }
  }

  console.log(dry ? `\n[DRY RUN] Would change ${changedCount} lesson(s).` : `\nChanged ${changedCount} lesson(s).`);
  await mongoose.disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
