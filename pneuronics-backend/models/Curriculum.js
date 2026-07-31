const mongoose = require('mongoose');

// ── Phase ──────────────────────────────────────────────
const phaseSchema = new mongoose.Schema({
  name:   { type: String, required: true, trim: true },
  nameKn: { type: String, default: '' },
  desc:   { type: String, default: '' },
  descKn: { type: String, default: '' },
  order:  { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

// ── Module ─────────────────────────────────────────────
const moduleSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  nameKn:  { type: String, default: '' },
  desc:    { type: String, default: '' },
  phaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase', required: true },
  order:   { type: Number, default: 0 },
  status:  { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

// ── Lesson ─────────────────────────────────────────────
const lessonSchema = new mongoose.Schema({
  title:    { type: String, required: true, trim: true },
  titleKn:  { type: String, default: '' },
  desc:     { type: String, default: '' },                // short lesson description
  phaseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  type:     { type: String, enum: ['video', 'reading', 'interactive'], default: 'reading' },
  duration: { type: Number, default: 0 },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
  objectives:   [{ type: String }],                        // learning objectives (English)
  objectivesKn: [{ type: String }],                        // learning objectives (Kannada)

  // Bilingual content
  contentEn: { type: String, default: '' },
  contentKn: { type: String, default: '' },
  content:   { type: String, default: '' }, // legacy
  // Rich lesson-builder block data (JSON). Kept separate from contentEn so the
  // simple lesson modal / student renderer can never overwrite the builder blocks.
  builderEn: { type: String, default: '' },
  builderKn: { type: String, default: '' },
  order:    { type: Number, default: 0 },
  status:   { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

// ── Quiz ───────────────────────────────────────────────
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options:  [{ type: String }],
  correct:  { type: Number, required: true }, // index of correct option
}, { _id: false });

const quizSchema = new mongoose.Schema({
  title:     { type: String, required: true, trim: true },
  phaseId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  moduleId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  lessonId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  questions: [questionSchema],
  status:    { type: String, enum: ['draft', 'published'], default: 'draft' },
}, { timestamps: true });

// ── GlossaryTerm ────────────────────────────────────────────────
const glossaryTermSchema = new mongoose.Schema({
  term:         { type: String, required: true, trim: true },
  termKn:       { type: String, default: '' },
  definition:   { type: String, required: true },
  definitionKn: { type: String, default: '' },
  example:      { type: String, default: '' },   // short code snippet
  phaseId:      { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  category:     { type: String, default: '' },   // e.g. 'data-types', 'control-flow'
  order:        { type: Number, default: 0 },
  status:       { type: String, enum: ['draft', 'published'], default: 'published' },
}, { timestamps: true });

// ── Practice ────────────────────────────────────────────────────
const practiceSchema = new mongoose.Schema({
  title:     { type: String, required: true, trim: true },
  titleKn:   { type: String, default: '' },
  problem:   { type: String, default: '' },   // EN problem statement
  problemKn: { type: String, default: '' },   // KN problem statement
  phaseId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  moduleId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  lessonId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  order:     { type: Number, default: 0 },
  difficulty:{ type: String, enum: ['beginner','intermediate','advanced'], default: 'beginner' },
  status:    { type: String, enum: ['draft','published'], default: 'draft' },
}, { timestamps: true });

module.exports = {
  Phase:        mongoose.model('Phase',        phaseSchema),
  Module:       mongoose.model('Module',       moduleSchema),
  Lesson:       mongoose.model('Lesson',       lessonSchema),
  Quiz:         mongoose.model('Quiz',         quizSchema),
  Practice:     mongoose.model('Practice',     practiceSchema),
  GlossaryTerm: mongoose.model('GlossaryTerm', glossaryTermSchema),
};
