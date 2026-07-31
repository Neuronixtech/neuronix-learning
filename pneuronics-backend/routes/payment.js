const express = require('express');
const crypto  = require('crypto');
const Razorpay = require('razorpay');
const router  = express.Router();
const Payment = require('../models/Payment');
const Student = require('../models/Student');

const RAZORPAY_KEY_ID     = process.env.RAZORPAY_KEY_ID     || 'YOUR_RAZORPAY_KEY_ID';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'YOUR_RAZORPAY_KEY_SECRET';

const COURSE_AMOUNT = 149900; // ₹1,499 in paise

const razorpay = new Razorpay({
  key_id:     RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

// ── POST /api/payment/create-order ────────────────────────────────
// Frontend calls this to start a payment
router.post('/create-order', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required.' });

    const options = {
      amount:   COURSE_AMOUNT,
      currency: 'INR',
      receipt:  'rcpt_' + Date.now(),
      notes:    { course: 'AI Engineering Program', email },
    };

    const order = await razorpay.orders.create(options);

    // Record the order
    await Payment.create({
      studentEmail:    email.toLowerCase(),
      razorpayOrderId: order.id,
      amount:          COURSE_AMOUNT,
      status:          'created',
    });

    res.json({
      success: true,
      orderId: order.id,
      amount:  order.amount,
      currency: order.currency,
      keyId:   RAZORPAY_KEY_ID, // public key for frontend checkout
    });
  } catch (err) {
    console.error('Create order error:', err.message);
    res.status(500).json({ error: 'Could not create payment order.' });
  }
});

// ── POST /api/payment/verify ──────────────────────────────────────
// Frontend calls this after payment to verify signature
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment details.' });
    }

    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      await Payment.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: 'failed' }
      );
      return res.status(400).json({ error: 'Payment verification failed. Invalid signature.' });
    }

    // Mark payment as paid
    await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      { status: 'paid', razorpayPaymentId: razorpay_payment_id, razorpaySignature: razorpay_signature }
    );

    // Enroll the student
    if (email) {
      await Student.findOneAndUpdate(
        { email: email.toLowerCase() },
        { enrolled: true, enrolledAt: new Date() }
      );
    }

    res.json({ success: true, message: 'Payment verified and enrollment complete.' });
  } catch (err) {
    console.error('Verify payment error:', err.message);
    res.status(500).json({ error: 'Payment verification failed.' });
  }
});

module.exports = router;
