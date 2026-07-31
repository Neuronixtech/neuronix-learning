# Neuronix Learning — Frontend

## Folder Structure

```
neuronix-frontend/
├── index.html              ← Home page (entry point)
│
├── Public pages (root)     ← Pages visitors see
│   ├── about.html
│   ├── contact.html
│   ├── curriculum.html     ← Full roadmap; unlocks lessons for enrolled students
│   ├── faq.html
│   ├── login.html          ← Login + Register + Forgot Password
│   ├── pricing.html        ← Enroll / Razorpay payment
│   ├── certificate.html
│   ├── enroll-required.html
│   ├── privacy-policy.html
│   └── terms-and-conditions.html
│
├── admin/                  ← Admin panel (all admin pages together)
│   ├── admin-login.html
│   ├── admin-dashboard.html
│   ├── admin-curriculum.html   ← Manage phases / modules / lessons / quizzes
│   ├── admin-students.html
│   ├── admin-payments.html
│   └── admin-certificates.html
│
└── js/
    └── api.js              ← Shared backend connection (EDIT THE URL HERE)
```

## The one thing to configure

Open `js/api.js` and set your backend URL:
```javascript
const API_BASE = 'http://localhost:3000';   // local testing
// const API_BASE = 'https://your-backend.onrender.com';  // production
```

## Running locally

The site must be served over http (not opened as a `file://` path), otherwise
the browser blocks the API calls.

```bash
cd neuronix-frontend
npx serve .
# or
python3 -m http.server 8080
```

Then open the URL it prints (e.g. http://localhost:8080).

## How the pages connect

- Public pages link to the admin panel via `admin/admin-login.html`
- Admin pages link back to the public site via `../index.html`
- Every page loads `js/api.js` (admin pages use `../js/api.js`)
- All internal links are relative, so you can host this anywhere
  (Netlify, Vercel, GitHub Pages, S3, your own server)

## Deployment

Upload the whole `neuronix-frontend/` folder to any static host.
Make sure `js/api.js` points to your live backend URL before deploying.
