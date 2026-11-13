// Creates a published Phase 17 module (idempotent by phase + order). Usage: node create-module.js <order> "<name>" "<nameKn>"
// Copies the shape of the existing highest module: { name, nameKn, desc, phaseId, order, status }.
require('dotenv').config();
const mongoose = require('mongoose');
const { Module } = require('./models/Curriculum');

async function main() {
  const [order, title, titleKn] = [Number(process.argv[2]), process.argv[3], process.argv[4]];
  if (!order || !title || !titleKn) throw new Error('usage: node create-module.js <order> "<name>" "<nameKn>"');
  await mongoose.connect(process.env.MONGODB_URI);
  const phaseId = '6a369d6066020ed05b32150b';
  let m = await Module.findOne({ phaseId, order });
  if (m) {
    console.log('exists', String(m._id), m.name);
  } else {
    m = await Module.create({ name: `Module ${order}: ${title}`, nameKn: titleKn, desc: '', phaseId, order, status: 'published' });
    console.log('created', String(m._id), m.name);
  }
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
