const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone:    { type: String, required: true, trim: true },
  dob:      { type: String },
  password: { type: String, required: true }, // stored hashed

  enrolled:   { type: Boolean, default: false },
  enrolledAt: { type: Date },

  // Single-session lock: only one active session per account
  activeSessionId:  { type: String, default: null },
  sessionLastActive: { type: Date },

  // Track completed lessons (array of lesson IDs)
  completedLessons: [{ type: String }],

  // Streak tracking
  currentStreak:  { type: Number, default: 0 },
  bestStreak:     { type: Number, default: 0 },
  lastActivityAt: { type: Date },                    // last day the student was active
  activityLog:    [{ type: String }],                // array of 'YYYY-MM-DD' strings (unique days)

  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
