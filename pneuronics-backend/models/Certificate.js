const mongoose = require('mongoose');

const certSchema = new mongoose.Schema({
  certId:    { type: String, unique: true }, // NXL-PY-2026-000001
  type:      { type: String, enum: ['python', 'ai-engineer'], required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  studentName:  { type: String },
  studentEmail: { type: String },
  completedAt: { type: Date },
  issuedAt:  { type: Date, default: Date.now },
  issuedBy:  { type: String, default: 'admin' }, // 'auto' or 'admin'
  status:    { type: String, enum: ['active', 'revoked'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certSchema);
