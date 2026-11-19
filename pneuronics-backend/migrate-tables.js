// Converts table blocks stored as {headers:[..], rows:[[..]]} (+headingEn/Kn) to the renderer format {captionEn, captionKn, rows:"h1|h2\nr1|r2"}.
require('dotenv').config();
const fs = require('fs'), path = require('path'), mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
function fix(blocks) {
  let n = 0;
  for (const x of blocks) {
    if (x.type !== 'table' || !x.data || typeof x.data.rows === 'string') continue;
    const d = x.data;
    const rows = [].concat(Array.isArray(d.headers) ? [d.headers] : [], d.rows || []);
    const nd = { captionEn: d.captionEn || d.headingEn || '', captionKn: d.captionKn || d.headingKn || '',
      rows: rows.map(r => (Array.isArray(r) ? r : [r]).map(c => String(c == null ? '' : c).replace(/\|/g, '/').replace(/\n/g, ' ')).join('|')).join('\n') };
    x.data = nd; n++;
  }
  return n;
}
(async () => {
  let defsFixed = 0;
  const dd = path.join(__dirname, 'lesson-defs/agent-engineering');
  for (const f of fs.readdirSync(dd).filter(f => f.endsWith('.js'))) {
    const p = path.join(dd, f); const d = require(p);
    if (!Array.isArray(d.blocks)) continue;
    const n = fix(d.blocks);
    if (n) { fs.writeFileSync(p, 'module.exports = ' + JSON.stringify(d, null, 1) + ';\n'); defsFixed++; }
  }
  await mongoose.connect(process.env.MONGODB_URI);
  const all = await Lesson.find({}).lean(); const backup = []; let tables = 0;
  for (const l of all) {
    const set = {};
    for (const field of ['builderEn', 'builderKn']) {
      let b; try { b = JSON.parse(l[field] || '[]'); } catch { continue; }
      const arr = Array.isArray(b) ? b : (b && b.blocks);
      if (!Array.isArray(arr)) continue;
      const n = fix(arr);
      if (n) { tables += n; set[field] = JSON.stringify(b); }
    }
    if (Object.keys(set).length) { backup.push({ _id: l._id, builderEn: l.builderEn, builderKn: l.builderKn }); await Lesson.updateOne({ _id: l._id }, { $set: set }); }
  }
  const dir = path.join(__dirname, 'lesson-defs/backups/expand-all-lessons'); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'tables-before.json'), JSON.stringify(backup));
  console.log({ defsFixed, lessonsChanged: backup.length, tableFieldBlocks: tables });
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
