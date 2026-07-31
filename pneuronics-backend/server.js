/**
 * Neuronix Learning — Production Backend
 * Express + MongoDB + JWT + Razorpay + MSG91
 */

require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const connectDB = require('./config/db');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Connect to database ──────────────────────────────────────────
connectDB();

// ── Middleware ───────────────────────────────────────────────────
const allowedOrigins = (process.env.CORS_ORIGIN || '*').split(',');
app.use(cors({
  origin: allowedOrigins.includes('*') ? '*' : allowedOrigins,
}));
app.use(express.json({ limit: '10mb' }));

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// ── Serve frontend static files ──────────────────────────────────
const path = require('path');
const frontendPath = path.join(__dirname, '../pneuronics-frontend');
app.use(express.static(frontendPath));

// ── Routes ───────────────────────────────────────────────────────
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/otp',         require('./routes/otp'));
app.use('/api/payment',     require('./routes/payment'));
app.use('/api/curriculum',  require('./routes/curriculum'));
app.use('/api/admin',       require('./routes/admin'));
app.use('/api/streak',      require('./routes/streak'));
app.use('/api/notes',       require('./routes/notes'));
app.use('/api/progress',    require('./routes/progress'));
app.use('/api/certificates',require('./routes/certificates'));
app.use('/api/contact',     require('./routes/contact'));

// ── Health check ─────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Neuronix Backend', time: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'Neuronix Learning API is running.' });
});

// ── Frontend fallback (serve index.html for non-API routes) ─────
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Endpoint not found.' });
  }
  res.sendFile(path.join(__dirname, '../pneuronics-frontend/index.html'));
});

// ── Error handler ────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error.' });
});

// ── Start ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Neuronix backend running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});
