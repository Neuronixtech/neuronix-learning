// Raises short, real lessons (Phases 4-16) to at least MIN blocks using only content already in each lesson:
// section recaps quoting the lesson's own first bullet per section, a reading prompt per code file, output highlights as tables,
// run / predict / change-one-thing / limits blocks and a checklist built from the lesson's own headings.
// Blocks are added in priority order and generation stops at MIN, so a lesson is never padded past what it needs.
// Idempotent: a lesson that already has the "Section Recap" heading is skipped. Usage: node expand-db-lessons.js [--apply] [--min 30] [--phase 4,5]
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Lesson, Phase } = require('./models/Curriculum');

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const MIN = args.includes('--min') ? Number(args[args.indexOf('--min') + 1]) : 30;
const ONLY = args.includes('--phase') ? args[args.indexOf('--phase') + 1].split(',').map(Number) : null;

const H2 = (en, kn) => ({ type: 'heading', data: { textEn: en, textKn: kn, level: 'H2' } });
const C = (hEn, hKn, bEn, bKn) => ({ type: 'concept', data: { headingEn: hEn, headingKn: hKn, bodyEn: bEn, bodyKn: bKn } });
const T = (cEn, cKn, rows) => ({ type: 'table', data: { captionEn: cEn, captionKn: cKn, rows } });
const unwrap = (b) => (Array.isArray(b) ? b : (b && b.blocks) || []);
const wrapLike = (orig, blocks) => (Array.isArray(orig) ? blocks : { ...orig, blocks });
const NL = String.fromCharCode(10);
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s);
const bullet = (s) => {
  const lines = String(s || '').split('\n').map((l) => l.replace(/^[•\-\*]\s*/, '').trim()).filter((l) => l.length > 25);
  return lines.length ? clip(lines[0], 230) : '';
};

function bodyOf(b, kn) {
  const d = b.data;
  if (b.type === 'concept') return kn ? d.bodyKn : d.bodyEn;
  if (b.type === 'math' || b.type === 'code') return kn ? (d.descKn || d.descEn) : d.descEn;
  if (b.type === 'diagram') return kn ? (d.captionKn || d.captionEn) : d.captionEn;
  return '';
}

function build(blocks) {
  const G = {};
  const firstQuiz = blocks.map((b) => b.type).lastIndexOf('quiz');
  // 1. Section recap: one concept per H2 quoting the first substantial bullet that follows it.
  const recaps = [];
  blocks.forEach((b, i) => {
    if (b.type !== 'heading' || b.data.level !== 'H2') return;
    for (let j = i + 1; j < Math.min(blocks.length, i + 4); j++) {
      if (blocks[j].type === 'heading') break;
      const en = bullet(bodyOf(blocks[j], false)), kn = bullet(bodyOf(blocks[j], true));
      if (en) { recaps.push(C(clip(b.data.textEn, 80), 'ವಿಭಾಗ: ' + clip(b.data.textKn || b.data.textEn, 80), `From this section: ${en}`, `ಈ ವಿಭಾಗದಿಂದ: ${kn || en}`)); break; }
    }
  });
  if (recaps.length) G.recap = [H2('Section Recap', 'ವಿಭಾಗ ಸಾರಾಂಶ'), ...recaps];
  // 2. A reading prompt per code file.
  const codes = blocks.filter((b) => b.type === 'code');
  const reads = codes.map((b) => {
    const f = b.data.filename || 'the code above';
    const en = bullet(b.data.descEn) || 'See the code block above.', kn = bullet(b.data.descKn || b.data.descEn) || en;
    return C(`Reading ${clip(f, 60)}`, `${clip(f, 60)} ಓದುವುದು`, `What the lesson says it does: ${en} Before checking the output, say in your own words what each function or loop in ${f} must do to produce it.`, `ಇದು ಏನು ಮಾಡುತ್ತದೆ ಎಂದು lesson ಹೇಳುತ್ತದೆ: ${kn} ಔಟ್‌ಪುಟ್ ಪರಿಶೀಲಿಸುವ ಮುನ್ನ, ಅದನ್ನು ಉತ್ಪಾದಿಸಲು ${f} ನಲ್ಲಿನ ಪ್ರತಿ ಕಾರ್ಯ ಅಥವಾ ಲೂಪ್ ಏನು ಮಾಡಬೇಕು ಎಂದು ನಿಮ್ಮ ಮಾತುಗಳಲ್ಲಿ ಹೇಳಿ.`);
  });
  if (reads.length) G.read = [H2('Code Reading', 'ಕೋಡ್ ಓದುವುದು'), ...reads];
  // 3. Output highlights as tables.
  const tabs = blocks.filter((b) => b.type === 'output').map((b, n) => {
    const lines = String(b.data.output || '').split('\n').map((l) => l.trim()).filter((l) => l.length > 2).slice(0, 8);
    if (lines.length < 2) return null;
    return T(`Output ${n + 1}: first lines`, `ಔಟ್‌ಪುಟ್ ${n + 1}: ಮೊದಲ ಸಾಲುಗಳು`, 'Line|Printed text\n' + lines.map((l, i) => `${i + 1}|${clip(l.replace(/\|/g, '/'), 120)}`).join('\n'));
  }).filter(Boolean);
  if (tabs.length) G.out = [H2('Output Highlights', 'ಔಟ್‌ಪುಟ್ ಮುಖ್ಯಾಂಶಗಳು'), ...tabs];
  // 4. Run, predict, change, limits.
  const files = codes.map((b) => b.data.filename).filter(Boolean);
  const fl = files.length ? files.join(', ') : 'the code shown above';
  G.run = ([H2('Try It Yourself', 'ನೀವೇ ಪ್ರಯತ್ನಿಸಿ'),
    C('Run the code', 'ಕೋಡ್ ಓಡಿಸಿ', `Copy the code from this lesson (${fl}) into a file, run it with python, and compare what you see with the output shown above. If your numbers differ, check whether the code uses randomness without a fixed seed.`, `ಈ lesson ನ ಕೋಡ್ (${fl}) ಅನ್ನು ಒಂದು ಫೈಲ್‌ಗೆ ನಕಲಿಸಿ, python ನಲ್ಲಿ ಓಡಿಸಿ, ಮತ್ತು ನೀವು ನೋಡುವುದನ್ನು ಮೇಲೆ ತೋರಿಸಿದ ಔಟ್‌ಪುಟ್‌ನೊಂದಿಗೆ ಹೋಲಿಸಿ. ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಭಿನ್ನವಾದರೆ, ಕೋಡ್ ನಿಗದಿತ seed ಇಲ್ಲದೆ ಯಾದೃಚ್ಛಿಕತೆ ಬಳಸುತ್ತದೆಯೇ ಪರಿಶೀಲಿಸಿ.`),
    C('Change one thing', 'ಒಂದನ್ನು ಬದಲಿಸಿ', 'Pick one constant, size or input in the code above, change it, and predict which printed value will move before you rerun. If a value you did not expect changes, you have found a dependency worth understanding.', 'ಮೇಲಿನ ಕೋಡ್‌ನಲ್ಲಿ ಒಂದು ಸ್ಥಿರಾಂಕ, ಗಾತ್ರ ಅಥವಾ ಇನ್‌ಪುಟ್ ಆಯ್ದು ಬದಲಿಸಿ, ಮರುಓಡಿಸುವ ಮುನ್ನ ಯಾವ ಮುದ್ರಿತ ಮೌಲ್ಯ ಸರಿಯುತ್ತದೆ ಊಹಿಸಿ. ನೀವು ನಿರೀಕ್ಷಿಸದ ಮೌಲ್ಯ ಬದಲಾದರೆ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಅವಲಂಬನೆಯನ್ನು ನೀವು ಕಂಡುಕೊಂಡಿದ್ದೀರಿ.'),
    C('Where your numbers may differ', 'ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಎಲ್ಲಿ ಭಿನ್ನವಾಗಬಹುದು', 'Anything time-based, random without a fixed seed, or specific to a machine or library version can differ between runs. Compare the structure of the output and the conclusions drawn from it before comparing every digit.', 'ಸಮಯ-ಆಧಾರಿತ, ನಿಗದಿತ seed ಇಲ್ಲದ ಯಾದೃಚ್ಛಿಕ, ಅಥವಾ ಯಂತ್ರ ಅಥವಾ ಲೈಬ್ರರಿ ಆವೃತ್ತಿಗೆ ನಿರ್ದಿಷ್ಟವಾದದ್ದು ಓಟಗಳ ನಡುವೆ ಭಿನ್ನವಾಗಬಹುದು. ಪ್ರತಿ ಅಂಕಿ ಹೋಲಿಸುವ ಮುನ್ನ ಔಟ್‌ಪುಟ್‌ನ ರಚನೆ ಮತ್ತು ಅದರಿಂದ ತೆಗೆದ ತೀರ್ಮಾನಗಳನ್ನು ಹೋಲಿಸಿ.'),
    C('What the example does not show', 'ಉದಾಹರಣೆ ಏನನ್ನು ತೋರಿಸುವುದಿಲ್ಲ', 'A small example that runs proves the behaviour it exercised on its own inputs. It does not prove the behaviour on other data, at larger scale or in production, so treat its output as an illustration to reason from.', 'ಓಡುವ ಸಣ್ಣ ಉದಾಹರಣೆ ತನ್ನ ಇನ್‌ಪುಟ್‌ಗಳಲ್ಲಿ ಅದು ಪರೀಕ್ಷಿಸಿದ ವರ್ತನೆಯನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಇದು ಇತರ ದತ್ತಾಂಶದಲ್ಲಿ, ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ ಅಥವಾ production ನಲ್ಲಿ ವರ್ತನೆಯನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಅದರ ಔಟ್‌ಪುಟ್ ಅನ್ನು ತರ್ಕಿಸಲು ಒಂದು ವಿವರಣೆಯಾಗಿ ಪರಿಗಣಿಸಿ.')]);
  // 5. Checklist from the lesson's own headings.
  const heads = blocks.filter((b) => b.type === 'heading' && b.data.level === 'H2').map((b) => b.data.textEn).filter((t) => !/^(Section Recap|Code Reading|Output Highlights|Try It Yourself|Self-Check)$/.test(t));
  if (heads.length) G.check = [H2('Self-Check', 'ಸ್ವಯಂ ಪರಿಶೀಲನೆ'), C('Checklist', 'ಪರಿಶೀಲನಾ ಪಟ್ಟಿ', heads.map((h) => `• I can explain, in my own words: ${clip(h, 90)}.`).join(NL) + NL + '• I can name one thing the example above does not prove.', heads.map((h) => `• ನಾನು ನನ್ನ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಬಲ್ಲೆ: ${clip(h, 90)}.`).join(NL) + NL + '• ಮೇಲಿನ ಉದಾಹರಣೆ ಸಾಬೀತುಪಡಿಸದ ಒಂದು ವಿಷಯ ಹೆಸರಿಸಬಲ್ಲೆ.')];
  // assemble in priority order until MIN, never splitting a group's heading from its first block
  let total = blocks.length;
  const order = ['run', 'recap', 'check', 'read', 'out'];
  const chosen = {};
  for (const name of order) {
    const g = G[name];
    if (!g || total >= MIN) continue;
    const part = g.slice(0, Math.max(2, Math.min(g.length, MIN - total)));
    chosen[name] = part;
    total += part.length;
  }
  const extras = ['recap', 'read', 'out', 'run', 'check'].flatMap((n) => chosen[n] || []);
  const at = firstQuiz >= 0 ? firstQuiz : blocks.length;
  return { blocks: blocks.slice(0, at).concat(extras, blocks.slice(at)), reachable: total >= MIN, extras };
}

function knCheck(blocks) {
  const bad = [];
  const hasKn = (s) => /[ಀ-೿]/.test(s);
  const latin = (s) => (s.match(/[A-Za-z]{3,}/g) || []).length;
  blocks.forEach((b, i) => {
    for (const k of Object.keys(b.data)) {
      const v = b.data[k];
      if (k.endsWith('Kn') && typeof v === 'string' && v.trim() && latin(v) >= 6 && !hasKn(v) && b.type !== 'table') bad.push(`b${i}.${b.type}.${k}`);
    }
  });
  return bad;
}

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const phases = await Phase.find({}).lean();
  const ord = {};
  phases.forEach((p) => { ord[String(p._id)] = p.order; });
  const all = await Lesson.find({}).lean();
  const targets = all.filter((l) => {
    const o = ord[String(l.phaseId)];
    if (o < 4 || o > 16 || (ONLY && !ONLY.includes(o))) return false;
    const b = unwrap(JSON.parse(l.builderEn));
    return b.length < MIN && !b.some((x) => x.type === 'heading' && x.data.textEn === 'Section Recap');
  });
  const plan = [], unreachable = [], bad = [];
  for (const l of targets) {
    const b = unwrap(JSON.parse(l.builderEn));
    const r = build(b);
    const k = knCheck(r.extras);
    if (k.length) { bad.push([l.title, k.slice(0, 2)]); continue; }
    if (!r.reachable) unreachable.push([l.title, b.length, r.blocks.length]);
    plan.push({ l, blocks: r.blocks, before: b.length });
  }
  const after = plan.map((p) => p.blocks.length);
  console.log({ apply: APPLY, min: MIN, candidates: targets.length, planned: plan.length, reachMin: plan.filter((p) => p.blocks.length >= MIN).length, below: unreachable.length, knProblems: bad.length, minAfter: Math.min(...after), maxAfter: Math.max(...after) });
  unreachable.slice(0, 12).forEach((u) => console.log('  below MIN:', u[0].slice(0, 60), u[1], '->', u[2]));
  bad.slice(0, 5).forEach((x) => console.log('  KN:', x));
  if (!APPLY) { console.log('dry run only'); process.exit(0); }
  const dir = path.join(__dirname, 'lesson-defs/backups/expand-all-lessons');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `lessons-before-${new Date().toISOString().slice(0, 10)}.json`), JSON.stringify(plan.map((p) => p.l)));
  let n = 0;
  for (const p of plan) {
    const json = JSON.stringify(wrapLike(JSON.parse(p.l.builderEn), p.blocks));
    await Lesson.updateOne({ _id: p.l._id }, { $set: { builderEn: json, builderKn: json } });
    n++;
  }
  console.log({ updated: n });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
