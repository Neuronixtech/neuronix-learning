// Raises every Phase 17 lesson to at least MIN blocks without inventing content.
// For each lesson-defs/agent-engineering/*.js it (1) splits the lesson's own cached lab output into one walkthrough pair per experiment
// (what it ran + the lab's own conclusion, then the output lines), and (2) adds run / predict / change-one-thing / variation / limits / checklist blocks
// until the lesson has MIN blocks. Idempotent: a lesson that already has the walkthrough heading is left alone.
// Usage: node expand-blocks.js [--apply] [--min 30] [file.js ...]   (no --apply = dry run; no files = every def in the folder)
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'lesson-defs/agent-engineering');
const PHASE = '6a369d6066020ed05b32150b';
const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const MIN = args.includes('--min') ? Number(args[args.indexOf('--min') + 1]) : 30;
const named = args.filter((a, i) => a.endsWith('.js') && args[i - 1] !== '--min');

const H2 = (en, kn) => ({ type: 'heading', data: { textEn: en, textKn: kn, level: 'H2' } });
const C = (hEn, hKn, bEn, bKn) => ({ type: 'concept', data: { headingEn: hEn, headingKn: hKn, bodyEn: bEn, bodyKn: bKn } });
const OUT = (output) => ({ type: 'output', data: { output } });
const WALK_EN = 'Experiment Walkthrough';

function sections(text) {
  const parts = text.replace(/\r\n/g, '\n').split(/^--- (.+?) ---$/m);
  const out = [];
  for (let i = 1; i < parts.length; i += 2) {
    const lines = parts[i + 1].split('\n').map((l) => l.replace(/\s+$/, '')).filter((l) => l.length);
    let note = null;
    if (lines.length && lines[lines.length - 1].length >= 90) note = lines.pop();
    out.push({ title: parts[i], note, lines });
  }
  return out;
}

const shortTitle = (t) => t.replace(/^\d+\.\s*/, '').replace(/^Genuinely [a-z]+[^:]*:\s*/i, '').replace(/^./, (c) => c.toUpperCase());
const clip = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

function build(def) {
  const blocks = def.blocks;
  const outIdx = blocks.findIndex((b) => b.type === 'output');
  const quizIdx = blocks.map((b) => b.type).lastIndexOf('quiz');
  const codeBlock = blocks.find((b) => b.type === 'code');
  const file = (codeBlock && codeBlock.data.filename) || 'the lab file';
  if (outIdx < 0 || quizIdx < 0) throw new Error('no output or quiz block');
  const secs = sections(blocks[outIdx].data.output);
  if (secs.length < 1) throw new Error('no sections found in output');

  const walk = [H2(WALK_EN, 'Experiment ನಡೆದಾಟ')];
  secs.forEach((s, i) => {
    const n = i + 1, short = shortTitle(s.title);
    const concl = s.note ? s.note : 'This experiment prints data only; read the lines in the output below.';
    walk.push(C(`Experiment ${n}: ${clip(short, 90)}`, `ಪ್ರಯೋಗ ${n}: ${clip(short, 90)}`,
      `What it ran: ${short}. What the lab concluded: ${concl}`,
      `ಇದು ಓಡಿಸಿದ್ದು: ${short}. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): ${concl}`));
    const data = s.lines.slice(0, 14).map((l) => clip(l, 220));
    if (data.length) walk.push(OUT(`--- ${s.title} ---\n${data.join('\n')}${s.lines.length > 14 ? '\n…' : ''}`));
  });

  const list = secs.map((s, i) => `${i + 1}. ${clip(shortTitle(s.title), 100)}`).join('\n');
  const groups = [
    [H2('Try It Yourself', 'ನೀವೇ ಪ್ರಯತ್ನಿಸಿ'),
      C('Run the lab', 'ಲ್ಯಾಬ್ ಓಡಿಸಿ',
        `1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B ${file} (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B ${file}). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.`,
        `1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B ${file} (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B ${file}). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ.`)],
    [C('Predict before you run', 'ಓಡಿಸುವ ಮುನ್ನ ಊಹಿಸಿ',
      `Before rerunning, write down what you expect each experiment to print, then compare:\n${list}`,
      `ಮರುಓಡಿಸುವ ಮುನ್ನ ಪ್ರತಿ ಪ್ರಯೋಗ ಏನು ಮುದ್ರಿಸುತ್ತದೆ ಎಂದು ನಿರೀಕ್ಷಿಸುವುದನ್ನು ಬರೆಯಿರಿ, ನಂತರ ಹೋಲಿಸಿ:\n${list}`)],
    [C('Change one thing', 'ಒಂದನ್ನು ಬದಲಿಸಿ',
      'Pick one constant, threshold or input in the code shown above, change it, and predict which experiment will change before you rerun. If an experiment you did not expect changes, you have found a coupling worth understanding.',
      'ಮೇಲೆ ತೋರಿಸಿದ ಕೋಡ್‌ನಲ್ಲಿ ಒಂದು ಸ್ಥಿರಾಂಕ, ಮಿತಿ ಅಥವಾ ಇನ್‌ಪುಟ್ ಆಯ್ದು ಬದಲಿಸಿ, ಮರುಓಡಿಸುವ ಮುನ್ನ ಯಾವ ಪ್ರಯೋಗ ಬದಲಾಗುತ್ತದೆ ಎಂದು ಊಹಿಸಿ. ನೀವು ನಿರೀಕ್ಷಿಸದ ಪ್ರಯೋಗ ಬದಲಾದರೆ, ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾದ ಸಂಬಂಧವನ್ನು ನೀವು ಕಂಡುಕೊಂಡಿದ್ದೀರಿ.')],
    [C('Where your numbers may differ', 'ನಿಮ್ಮ ಸಂಖ್ಯೆಗಳು ಎಲ್ಲಿ ಭಿನ್ನವಾಗಬಹುದು',
      'Timings, temporary paths, hashes and commit ids differ between runs and machines. Counts, verdicts and error messages should match unless your Python version or operating system differs from the one named in Lesson Info.',
      'ಸಮಯಗಳು, ತಾತ್ಕಾಲಿಕ paths, hashes ಮತ್ತು commit ids ಓಟಗಳ ಮತ್ತು ಯಂತ್ರಗಳ ನಡುವೆ ಭಿನ್ನವಾಗುತ್ತವೆ. ಎಣಿಕೆಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ದೋಷ ಸಂದೇಶಗಳು ನಿಮ್ಮ Python ಆವೃತ್ತಿ ಅಥವಾ ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ Lesson Info ನಲ್ಲಿ ಹೆಸರಿಸಿದ್ದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿಲ್ಲದಿದ್ದರೆ ಹೊಂದಬೇಕು.')],
    [C('What this lab does not show', 'ಈ ಲ್ಯಾಬ್ ಏನನ್ನು ತೋರಿಸುವುದಿಲ್ಲ',
      'A lab that runs proves the behaviour it exercised, on one machine. It does not prove behaviour on other inputs, at scale, with a real model or in production, and any agent in it is a scripted stand-in unless Lesson Info says otherwise.',
      'ಓಡುವ ಲ್ಯಾಬ್ ಅದು ಪರೀಕ್ಷಿಸಿದ ವರ್ತನೆಯನ್ನು ಒಂದು ಯಂತ್ರದಲ್ಲಿ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ. ಇದು ಇತರ ಇನ್‌ಪುಟ್‌ಗಳಲ್ಲಿ, ದೊಡ್ಡ ಪ್ರಮಾಣದಲ್ಲಿ, ನಿಜ ಮಾದರಿಯೊಂದಿಗೆ ಅಥವಾ production ನಲ್ಲಿ ವರ್ತನೆಯನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ, ಮತ್ತು Lesson Info ಬೇರೆ ಹೇಳದ ಹೊರತು ಅದರಲ್ಲಿರುವ ಯಾವುದೇ agent ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಬದಲಿ.')],
    [H2('Self-Check', 'ಸ್ವಯಂ ಪರಿಶೀಲನೆ'),
      C('Checklist', 'ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
        `• I can run the lab and get the same verdicts and counts.\n${secs.map((s, i) => `• I can explain, in my own words, what experiment ${i + 1} shows.`).join('\n')}\n• I can name one thing this lab does not prove.`,
        `• ನಾನು ಲ್ಯಾಬ್ ಓಡಿಸಿ ಅದೇ ತೀರ್ಪುಗಳು ಮತ್ತು ಎಣಿಕೆಗಳನ್ನು ಪಡೆಯಬಲ್ಲೆ.\n${secs.map((s, i) => `• ಪ್ರಯೋಗ ${i + 1} ಏನು ತೋರಿಸುತ್ತದೆ ಎಂದು ನನ್ನ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಬಲ್ಲೆ.`).join('\n')}\n• ಈ ಲ್ಯಾಬ್ ಸಾಬೀತುಪಡಿಸದ ಒಂದು ವಿಷಯ ಹೆಸರಿಸಬಲ್ಲೆ.`)],
  ];

  let extras = [];
  let total = blocks.length + walk.length;
  for (const g of groups) { if (total >= MIN) break; extras = extras.concat(g); total += g.length; }
  return blocks.slice(0, outIdx + 1).concat(walk, blocks.slice(outIdx + 1, quizIdx), extras, blocks.slice(quizIdx));
}

function knCheck(def) {
  const bad = [];
  const hasKn = (s) => /[ಀ-೿]/.test(s);
  const latinWords = (s) => (s.match(/[A-Za-z]{3,}/g) || []).length;
  const looksLikeCode = (s) => /[()=]/.test(s) && !/\s(the|is|and|of|to)\s/i.test(s);
  const nameList = (s) => /^[A-Za-z0-9\-\/ ]+(, [A-Za-z0-9\-\/ ]+)+$/.test(s) && s.split(' ').length <= 8;
  const check = (label, s) => { if (typeof s === 'string' && s.trim() && latinWords(s) >= 4 && !hasKn(s) && !looksLikeCode(s) && !nameList(s)) bad.push(label + ': ' + s.slice(0, 60)); };
  def.blocks.forEach((b, i) => {
    const d = b.data;
    for (const k of Object.keys(d)) if (k.endsWith('Kn') && typeof d[k] === 'string') check(`b${i}.${b.type}.${k}`, d[k]);
  });
  return bad;
}

(async () => {
  const files = (named.length ? named : fs.readdirSync(DIR).filter((f) => f.endsWith('.js'))).map((f) => path.join(DIR, path.basename(f)));
  const changed = [], skipped = [], failed = [];
  let minAfter = Infinity, maxAfter = 0;
  for (const f of files) {
    const def = require(f);
    if (def.phaseId !== PHASE) continue;
    if (def.blocks.some((b) => b.type === 'heading' && b.data.textEn === WALK_EN)) { skipped.push(path.basename(f)); continue; }
    try {
      const nb = build(def);
      const nd = { ...def, blocks: nb };
      const bad = knCheck(nd);
      if (bad.length) throw new Error('Kannada check: ' + bad.slice(0, 2).join(' | '));
      if (nb.length < MIN) throw new Error(`only ${nb.length} blocks`);
      minAfter = Math.min(minAfter, nb.length); maxAfter = Math.max(maxAfter, nb.length);
      changed.push({ f, nd, before: def.blocks.length });
    } catch (e) { failed.push(path.basename(f) + ': ' + e.message); }
  }
  console.log({ apply: APPLY, min: MIN, wouldChange: changed.length, alreadyDone: skipped.length, failed: failed.length, blocksAfterMin: minAfter, blocksAfterMax: maxAfter });
  failed.forEach((x) => console.log('FAILED', x));
  if (!APPLY || failed.length) { if (!APPLY) console.log('dry run only; pass --apply to write files and update the database'); return; }

  const mongoose = require('mongoose');
  const { Lesson } = require('./models/Curriculum');
  await mongoose.connect(process.env.MONGODB_URI);
  const bdir = path.join(__dirname, 'lesson-defs/backups/phase17-before-expand');
  fs.mkdirSync(bdir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const existing = await Lesson.find({ moduleId: { $in: [...new Set(changed.map((c) => c.nd.moduleId))] } }).lean();
  fs.writeFileSync(path.join(bdir, `lessons-${stamp}-${changed.length}.json`), JSON.stringify(existing));
  let updated = 0;
  for (const { f, nd } of changed) {
    fs.writeFileSync(f, 'module.exports = ' + JSON.stringify(nd, null, 1) + ';\n');
    const json = JSON.stringify(nd.blocks);
    const ex = await Lesson.findOne({ moduleId: nd.moduleId, order: nd.order });
    if (!ex) throw new Error('lesson missing in database for ' + path.basename(f));
    ex.builderEn = json; ex.builderKn = json;
    await ex.save(); updated++;
  }
  console.log({ filesWritten: changed.length, databaseUpdated: updated, backup: `lesson-defs/backups/phase17-before-expand/lessons-${stamp}-${changed.length}.json` });
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
