const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true, index: true },
  title:     { type: String, default: 'Untitled note', trim: true },
  content:   { type: String, default: '' },

  // Optional: tag a note to a curriculum item
  phaseId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Phase', default: null },
  moduleId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Module', default: null },
  lessonId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', default: null },
  tag:       { type: String, default: '' }, // free-form label
  pinned:    { type: Boolean, default: false },
}, { timestamps: true });

// Text search on title and content
noteSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Note', noteSchema);
