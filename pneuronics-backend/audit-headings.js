require('dotenv').config();
const m = require('mongoose');
const { Lesson, Phase, Module } = require('./models/Curriculum');
(async () => {
  await m.connect(process.env.MONGODB_URI);
  const ph = await Phase.find({}).lean(); const po = {}; ph.forEach((p) => (po[String(p._id)] = p.order));
  const mods = await Module.find({}).lean(); const mn = {}; mods.forEach((x) => (mn[String(x._id)] = x));
  const ls = await Lesson.find({}).lean();
  const issues = { numericPrefix: [], h1NotTitle: [], partMismatch: [], emptyHeading: [], dupH2: [], noInfo: [], noH1: [], knHeadingMissing: [], notArray: [] };
  for (const l of ls) {
    let b = JSON.parse(l.builderEn || '[]');
    const tag = po[String(l.phaseId)] + '/' + (mn[String(l.moduleId)] || {}).order + ':' + l.title.slice(0, 55);
    if (!Array.isArray(b)) { issues.notArray.push(tag); b = Array.isArray(b && b.blocks) ? b.blocks : []; }
    const heads = b.filter((x) => x.type === 'heading');
    if (!heads.length) { issues.noH1.push(tag); continue; }
    for (const h of heads) {
      const e = h.data.textEn || '';
      if (!e.trim()) issues.emptyHeading.push(tag);
      if (/^\s*\d+[\.\)]\s/.test(e)) issues.numericPrefix.push(tag + ' => ' + e.slice(0, 50));
      if (!(h.data.textKn || '').trim()) issues.knHeadingMissing.push(tag);
    }
    const h1 = heads.find((h) => h.data.level === 'H1');
    if (!h1) issues.noH1.push(tag);
    else if (h1.data.textEn.replace(/\s+/g, ' ').trim() !== l.title.replace(/\s+/g, ' ').trim()) issues.h1NotTitle.push(tag + ' | H1=' + h1.data.textEn.slice(0, 55));
    const seen = new Set();
    for (const x of heads.filter((h) => h.data.level === 'H2').map((h) => h.data.textEn)) { if (seen.has(x)) issues.dupH2.push(tag + ' => ' + x.slice(0, 40)); seen.add(x); }
    const pm = l.title.match(/Part (\d) of (\d)/i);
    const info = b.find((x) => x.type === 'concept' && /Lesson Info/i.test(x.data.headingEn || ''));
    if (!info && po[String(l.phaseId)] >= 4) issues.noInfo.push(tag);
    if (pm && info) { const im = (info.data.bodyEn || '').match(/Part (\d) of (\d)/i); if (im && (im[1] !== pm[1] || im[2] !== pm[2])) issues.partMismatch.push(tag + ' info=' + im[0]); }
  }
  for (const [k, v] of Object.entries(issues)) { console.log(k, v.length); v.slice(0, 5).forEach((x) => console.log('   ', x)); }
  process.exit(0);
})();
