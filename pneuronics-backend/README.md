# Neuronix Learning — Backend

Production backend for the Neuronix Learning platform. Handles authentication, OTP-based password reset (via email, using Resend), payments (Razorpay), and curriculum management.

## Tech Stack

- **Node.js + Express** — REST API
- **MongoDB + Mongoose** — database
- **JWT** — authentication tokens
- **bcryptjs** — password hashing
- **Razorpay** — payment processing
- **Resend** — transactional email (contact form + OTP password reset)

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set up MongoDB
- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a database user and get your connection string
- Add it to `.env` as `MONGODB_URI`

### 3. Configure environment
```bash
cp .env.example .env
```
Then fill in all values in `.env` (MongoDB URI, JWT secret, Resend API key, Razorpay keys).

Generate a JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Seed initial curriculum (20 phases)
```bash
npm run seed
```

### 5. Run the server
```bash
npm run dev      # development (auto-restart)
npm start        # production
```

Server runs at `http://localhost:3000`. Test with `http://localhost:3000/api/health`.

---

## API Endpoints

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | — | Register a new student |
| POST | `/api/auth/login` | — | Login (student or admin) |
| GET | `/api/auth/me` | Student | Get current student profile |

### OTP / Password Reset
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/otp/send` | Send OTP to registered phone |
| POST | `/api/otp/verify` | Verify the OTP |
| POST | `/api/otp/reset-password` | Set new password after OTP verify |

### Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-order` | Create a Razorpay order |
| POST | `/api/payment/verify` | Verify payment & enroll student |

### Curriculum
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/curriculum/full` | — | Full nested curriculum (published) |
| GET | `/api/curriculum/phases` | — | List phases |
| POST | `/api/curriculum/phases` | Admin | Create phase |
| PUT | `/api/curriculum/phases/:id` | Admin | Update phase |
| DELETE | `/api/curriculum/phases/:id` | Admin | Delete phase |

Same pattern for `modules`, `lessons`, `quizzes`.
Add `?all=true` to GET requests (with admin token) to include drafts.

### Admin
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/admin/students` | Admin | List all students |
| GET | `/api/admin/payments` | Admin | List all payments |
| GET | `/api/admin/stats` | Admin | Dashboard statistics |
| DELETE | `/api/admin/students/:id` | Admin | Delete a student |

---

## Authentication

Protected endpoints require a JWT in the header:
```
Authorization: Bearer <token>
```
Tokens are returned by `/api/auth/login` and `/api/auth/register`.

---

## Deployment

### Render
1. Push this folder to a GitHub repo
2. [render.com](https://render.com) → New Web Service → connect repo
3. Build command: `npm install`
4. Start command: `npm start`
5. Add all `.env` variables in the Environment tab
6. Deploy, then run the seed once via Render Shell: `node seed.js`

### Railway
1. [railway.app](https://railway.app) → New Project → Deploy from GitHub
2. Add environment variables
3. Railway auto-detects and runs `npm start`

After deploying, update `API_BASE` in your frontend files to the deployed URL.

---

## Connecting the Frontend

In your frontend HTML files, update the API base URL:
- `login.html` → `const API_BASE = 'https://your-backend-url.com'`
- `pricing.html` → point payment calls to `/api/payment/*`
- `admin-curriculum.html` → point CRUD calls to `/api/curriculum/*`

See `FRONTEND_INTEGRATION.md` for the exact changes.
