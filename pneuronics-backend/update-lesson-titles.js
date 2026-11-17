// Aligns the lesson title, Kannada title and H1 heading of ten rebuilt modules with the full source / curriculum titles.
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Lesson, Module } = require('./models/Curriculum');
const MAP = {
  315: ['lh', 'From Chatbots to Long-Horizon Agents (METR)', 'Chatbots ನಿಂದ ದೀರ್ಘ-ಅವಧಿ Agents ಗೆ (METR)'],
  320: ['ar', 'Automated Alignment Research (Anthropic AAR)', 'ಸ್ವಯಂಚಾಲಿತ Alignment ಸಂಶೋಧನೆ (Anthropic AAR)'],
  323: ['ca', 'Autonomous Coding Agent Landscape (SWE-bench, CodeAct)', 'ಸ್ವಾಯತ್ತ ಕೋಡಿಂಗ್ Agent ಭೂದೃಶ್ಯ (SWE-bench, CodeAct)'],
  324: ['pm', 'Claude Code Permission Modes and Auto Mode', 'Claude Code ಅನುಮತಿ ಮೋಡ್‌ಗಳು ಮತ್ತು Auto ಮೋಡ್'],
  329: ['pc', 'Human-in-the-Loop: Propose-Then-Commit', 'Human-in-the-Loop: Propose-Then-Commit'],
  333: ['rp', 'Anthropic Responsible Scaling Policy v3.0', 'Anthropic Responsible Scaling Policy v3.0'],
  334: ['pf', 'OpenAI Preparedness Framework and DeepMind Frontier Safety Framework', 'OpenAI Preparedness Framework ಮತ್ತು DeepMind Frontier Safety Framework'],
  335: ['mt', 'METR Time Horizons and External Capability Evaluation', 'METR ಸಮಯ Horizons ಮತ್ತು ಬಾಹ್ಯ ಸಾಮರ್ಥ್ಯ ಮೌಲ್ಯಮಾಪನ'],
  336: ['cs', 'CAIS, CAISI, and Societal-Scale Risk', 'CAIS, CAISI, ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ'],
  363: ['mp', 'Managed LLM Platforms — Bedrock, Vertex AI, Azure OpenAI', 'ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು — Bedrock, Vertex AI, Azure OpenAI'],
};
const swap = (s, oldBase, newBase) => (typeof s === 'string' && s.startsWith(oldBase) ? newBase + s.slice(oldBase.length) : s);
(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const backup = [];
  for (const [order, [pfx, en, kn]] of Object.entries(MAP)) {
    const mod = await Module.findOne({ order: Number(order), name: new RegExp('^Module ' + order + ':') }).lean();
    const lessons = await Lesson.find({ moduleId: String(mod._id) }).sort({ order: 1 }).lean();
    for (const l of lessons) {
      backup.push(l);
      const oldEn = l.title.split(' (Part')[0], oldKn = (l.titleKn || '').split(' (ಭಾಗ')[0];
      const blocks = JSON.parse(l.builderEn);
      const h1 = blocks.find((b) => b.type === 'heading' && b.data.level === 'H1');
      if (h1) { h1.data.textEn = swap(h1.data.textEn, oldEn, en); h1.data.textKn = swap(h1.data.textKn, oldKn, kn); }
      const json = JSON.stringify(blocks);
      await Lesson.updateOne({ _id: l._id }, { $set: { title: swap(l.title, oldEn, en), titleKn: swap(l.titleKn, oldKn, kn), builderEn: json, builderKn: json } });
      const f = path.join(__dirname, 'lesson-defs/agent-engineering', `${pfx}${l.order + 1}.js`);
      if (fs.existsSync(f)) {
        const def = require(f);
        def.title = swap(def.title, oldEn, en); def.titleKn = swap(def.titleKn, oldKn, kn);
        def.blocks = blocks;
        fs.writeFileSync(f, 'module.exports = ' + JSON.stringify(def, null, 1) + ';\n');
      }
    }
  }
  const dir = path.join(__dirname, 'lesson-defs/backups/expand-all-lessons');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'titles-before.json'), JSON.stringify(backup));
  console.log({ lessonsUpdated: backup.length });
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
