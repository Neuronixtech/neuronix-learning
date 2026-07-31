# Frontend Integration — DONE

The frontend HTML files are already wired to this backend. All API calls go through
a shared helper at `neuronix-learning/js/api.js`.

## The only thing you must change

Open `neuronix-learning/js/api.js` and set your backend URL:
```javascript
const API_BASE = 'http://localhost:3000';   // local testing
// const API_BASE = 'https://your-backend.onrender.com';  // production
```
Every page reads from this one place.

## What each page now does

| Page | Connected to |
|------|--------------|
| login.html | `/api/auth/register`, `/api/auth/login`, `/api/otp/*` (forgot password) |
| pricing.html | `/api/payment/create-order`, `/api/payment/verify` |
| curriculum.html | `/api/auth/me` (checks enrollment to unlock lessons) |
| admin-login.html | `/api/auth/login` (admin role) |
| admin-curriculum.html | `/api/curriculum/*` full CRUD for phases/modules/lessons/quizzes |
| admin-students.html | `/api/admin/students` (list + delete) |
| admin-payments.html | `/api/admin/payments` (list + CSV export) |
| admin-dashboard.html | `/api/admin/stats` |

## How auth works on the frontend

- On login/register the JWT is saved to `localStorage` as `pnl_token`
- `js/api.js` automatically attaches it as `Authorization: Bearer <token>` on every request
- Admin pages check for both `pnl_admin_session` and the token before loading
- Logout clears both

## Testing locally

1. Start the backend: `cd neuronix-backend && npm install && npm run seed && npm run dev`
2. Make sure `API_BASE` in `js/api.js` is `http://localhost:3000`
3. Serve the frontend (any static server), e.g.:
   ```bash
   cd neuronix-learning
   npx serve .      # or: python3 -m http.server 8080
   ```
4. Open the served URL and test register → login → enroll → admin

Note: opening the HTML files directly via `file://` will hit CORS issues —
always serve them over http. The backend's `CORS_ORIGIN` defaults to `*` for
local testing; lock it to your real domain in production.
