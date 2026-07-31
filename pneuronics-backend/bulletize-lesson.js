require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');

// Converts paragraph-style text (paragraphs separated by blank lines, no bullet
// markers) into a bulleted list, one bullet per paragraph. Leaves already-bulleted
// or single-paragraph text untouched.
const BULLET_RE = /^\s*[••–→↑↓←–—>-]\s/;
const NUM_RE = /^\s*\d+[.)]\s/;
function isBulletLine(line) {
  return BULLET_RE.test(line) || NUM_RE.test(line);
}

function bulletizeIfNeeded(text) {
  if (typeof text !== 'string' || !text.includes('\n\n')) return { changed: false, text };
  const paras = text.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  if (paras.length < 2) return { changed: false, text };
  // Skip if already bulleted (first para already starts with a bullet marker)
  if (paras.every(p => isBulletLine(p))) return { changed: false, text };
  const bulleted = paras.map(p => (isBulletLine(p) ? p : `• ${p}`)).join('\n');
  return { changed: true, text: bulleted };
}

const FIELDS = ['bodyEn', 'bodyKn', 'textEn', 'textKn', 'descEn', 'descKn'];
function getBlocks(parsed) { return Array.isArray(parsed) ? parsed : parsed.blocks; }
function setBlocks(parsed, blocks) { if (Array.isArray(parsed)) return blocks; parsed.blocks = blocks; return parsed; }

async function main() {
  const lessonId = process.argv[2];
  const dry = process.argv.includes('--dry');
  await mongoose.connect(process.env.MONGODB_URI);
  const lesson = await Lesson.findById(lessonId);
  if (!lesson) { console.log('Lesson not found'); process.exit(1); }

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
      if (!block.data || block.type !== 'concept') continue;
      for (const key of FIELDS) {
        if (block.data[key]) {
          const { changed, text } = bulletizeIfNeeded(block.data[key]);
          if (changed) {
            console.log(`  [${field}] block heading="${block.data.headingEn || ''}" field=${key}`);
            console.log(`    BEFORE: ${block.data[key].slice(0, 80).replace(/\n/g, ' ')}...`);
            console.log(`    AFTER:  ${text.slice(0, 80).replace(/\n/g, ' ')}...`);
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

  if (Object.keys(updates).length === 0) {
    console.log('No changes needed.');
  } else if (dry) {
    console.log('\n[DRY RUN] Would update:', Object.keys(updates).join(', '));
  } else {
    await Lesson.updateOne({ _id: lesson._id }, { $set: updates });
    console.log('\nUpdated:', Object.keys(updates).join(', '));
  }
  await mongoose.disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
