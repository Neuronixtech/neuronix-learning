const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  studentEmail:      { type: String, required: true, lowercase: true },
  razorpayOrderId:   { type: String, required: true },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  amount:            { type: Number, required: true }, // in paise
  currency:          { type: String, default: 'INR' },
  status:            { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
