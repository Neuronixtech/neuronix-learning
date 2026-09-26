// Converts text-only diagram blocks (contentEn) into renderable svgCode, and maps math explanation -> desc.
// Usage: node fix-diagrams.js [--all]   (default: Phase 16 only)
require('dotenv').config();
const mongoose = require('mongoose');
const { Lesson } = require('./models/Curriculum');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function wrap(text, n) {
  const out = []; let cur = '';
  for (const w of text.split(/\s+/)) { if ((cur + ' ' + w).trim().length > n && cur) { out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
  if (cur) out.push(cur); return out;
}
function toSvg(content) {
  let steps = content.split(/\s*(?:-->|--[^>\n]{1,40}-->|->|→)\s*/).map(s => s.trim()).filter(Boolean);
  const labels = [...content.matchAll(/--([^>\n]{1,40})-->/g)].map(m => m[1].trim());
  if (steps.length < 2) steps = content.split(/\n+/).map(s => s.trim()).filter(Boolean);
  const W = 420, bw = 380, lh = 14, gap = 22; let y = 8; const parts = [];
  steps.forEach((s, i) => {
    const lines = wrap(s, 48), h = lines.length * lh + 14;
    parts.push(`<rect x="${(W-bw)/2}" y="${y}" width="${bw}" height="${h}" rx="6" fill="none" stroke="currentColor" stroke-width="1.2"/>`);
    lines.forEach((ln, j) => parts.push(`<text x="${W/2}" y="${y + 17 + j*lh}" text-anchor="middle" fill="currentColor">${esc(ln)}</text>`));
    y += h;
    if (i < steps.length - 1) {
      parts.push(`<line x1="${W/2}" y1="${y}" x2="${W/2}" y2="${y+gap-5}" stroke="currentColor" stroke-width="1.2" marker-end="url(#ah)"/>`);
      if (labels[i]) parts.push(`<text x="${W/2+8}" y="${y+gap/2+3}" font-size="9" fill="currentColor" opacity=".7">${esc(labels[i])}</text>`);
      y += gap;
    }
  });
  return `<svg viewBox="0 0 ${W} ${y+8}" xmlns="http://www.w3.org/2000/svg" font-family="monospace" font-size="11"><defs><marker id="ah" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="currentColor"/></marker></defs>${parts.join('')}</svg>`;
}
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const q = process.argv.includes('--all') ? {} : { phaseId: '6a369d5e66020ed05b3214c3' };
  let lessons = 0, dia = 0, math = 0;
  for (const l of await Lesson.find(q)) {
    let changed = false;
    for (const k of ['builderEn', 'builderKn']) {
      let arr; try { arr = JSON.parse(l[k] || '[]'); } catch (e) { continue; }
      for (const b of arr) {
        const d = b.data || {};
        if (b.type === 'diagram' && !(d.svgCode || d.svg) && d.contentEn) {
          d.svgCode = toSvg(d.contentEn); d.headingEn = d.headingEn || d.titleEn; d.headingKn = d.headingKn || d.titleKn;
          delete d.contentEn; delete d.contentKn; changed = true; dia++;
        }
        if (b.type === 'math' && !d.descEn && d.explanationEn) { d.descEn = d.explanationEn; d.descKn = d.explanationKn || ''; changed = true; math++; }
      }
      if (changed) l[k] = JSON.stringify(arr);
    }
    if (changed) { await l.save(); lessons++; }
  }
  console.log(`fixed ${dia} diagram blocks, ${math} math blocks in ${lessons} lessons (counted per builder)`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
