/**
 * Neuronix Learning — Shared API helper
 * Edit API_BASE once here and every page uses it.
 */

// ─────────────────────────────────────────────────────────────────
// API_BASE: empty string = relative URLs (works on any port/host).
// The backend now serves the frontend, so they share the same origin.
// For a separate deployed backend, set this to 'https://your-api.com'
// ─────────────────────────────────────────────────────────────────
const API_BASE = '';

// ── Token helpers ─────────────────────────────────────────────────
function getToken()  { return localStorage.getItem('pnl_token'); }
function setToken(t) { localStorage.setItem('pnl_token', t); localStorage.setItem('pnl_last_activity', String(Date.now())); }
function clearToken(){ localStorage.removeItem('pnl_token'); localStorage.removeItem('pnl_last_activity'); }

function getSession() {
  try { return JSON.parse(localStorage.getItem('pnl_student_session')); } catch { return null; }
}
function setSession(s) { localStorage.setItem('pnl_student_session', JSON.stringify(s)); }

// ── Core fetch wrapper ────────────────────────────────────────────
// Automatically attaches JWT, parses JSON, throws on error.
async function apiFetch(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  const token = getToken();
  if (token) headers['Authorization'] = 'Bearer ' + token;

  let res;
  try {
    res = await fetch(API_BASE + path, { ...options, headers });
  } catch (networkErr) {
    throw new Error('Cannot reach the server. Please check your connection.');
  }

  let data = {};
  try { data = await res.json(); } catch { /* no body */ }

  if (!res.ok) {
    // 401 or SESSION_INVALID → token expired or used on another device → send to login.
    // Excludes the login endpoint itself: a 401 there means "wrong credentials," not
    // "your existing session became invalid" -- it must throw so the login form can
    // show the error, not silently redirect back to the same page.
    const isLoginAttempt = path === '/api/auth/login';
    if (!isLoginAttempt && (res.status === 401 || data.code === 'SESSION_INVALID')) {
      clearToken();
      localStorage.removeItem('pnl_student_session');
      if (sessionStorage.getItem('pnl_admin_session') !== 'true') {
        window.location.href = '/login.html?reason=session';
        return; // stop — redirect is in progress
      }
    }
    throw new Error(data.error || `Request failed (${res.status}).`);
  }
  return data;
}

// Convenience methods
const api = {
  get:    (path)        => apiFetch(path, { method: 'GET' }),
  post:   (path, body)  => apiFetch(path, { method: 'POST', body: JSON.stringify(body) }),
  put:    (path, body)  => apiFetch(path, { method: 'PUT',  body: JSON.stringify(body) }),
  delete: (path)        => apiFetch(path, { method: 'DELETE' }),
};

// ── Admin guard ───────────────────────────────────────────────────
// Call at the top of every admin page.
function requireStudent() {
  if (!getToken()) {
    window.location.href = '/login.html';
  }
}

function requireAdmin() {
  if (sessionStorage.getItem('pnl_admin_session') !== 'true' || !getToken()) {
    window.location.href = '/admin/admin-login.html';
  }
}

// ── Logout ────────────────────────────────────────────────────────
async function logout(redirect = 'admin-login.html') {
  // Tell the backend to free the session (so the account can log in again)
  try {
    if (getToken()) {
      await fetch(API_BASE + '/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() },
      });
    }
  } catch (e) { /* ignore network errors on logout */ }
  clearToken();
  sessionStorage.removeItem('pnl_admin_session');
  localStorage.removeItem('pnl_student_session');
  window.location.href = redirect;
}

// ── Student logout (frees session, returns to home page) ──────────
async function studentLogout() {
  await logout('/index.html');
}

// ══════════════════════════════════════════════════════════════════
// Global language preference (English / Kannada)
// Shared across all pages. Persisted in localStorage.
// ══════════════════════════════════════════════════════════════════
const LANG_KEY = 'pnl_lang';

function getLang() {
  const l = localStorage.getItem(LANG_KEY);
  return (l === 'kn') ? 'kn' : 'en';   // default English
}

function setLang(lang) {
  const value = (lang === 'kn') ? 'kn' : 'en';
  localStorage.setItem(LANG_KEY, value);
  // Notify any open listeners on the page (and the document)
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: value } }));
  return value;
}

// Pick the right field for the current language, with a graceful fallback.
// e.g. langField(lesson, 'content') -> lesson.contentKn || lesson.contentEn || lesson.content
function langField(obj, base) {
  if (!obj) return '';
  const lang = getLang();
  const en = obj[base + 'En'] || obj[base] || '';
  const kn = obj[base + 'Kn'] || '';
  if (lang === 'kn') return kn || en;   // fall back to English if no Kannada yet
  return en || kn;
}

// ══════════════════════════════════════════════════════════════════
// Idle session timeout — auto-logout after 8 hours of inactivity.
// Activity (clicks, keypresses, scrolls, navigation) resets the timer.
// Applies to logged-in students; only logs out when truly idle.
// ══════════════════════════════════════════════════════════════════
(function () {
  const IDLE_KEY = 'pnl_last_activity';
  const IDLE_LIMIT_MS = 8 * 60 * 60 * 1000;   // 8 hours
  const CHECK_EVERY_MS = 60 * 1000;           // check every minute

  // Only run for a logged-in user (has a token)
  function isLoggedIn() {
    try { return !!localStorage.getItem('pnl_token'); } catch (e) { return false; }
  }

  function markActivity() {
    if (!isLoggedIn()) return;
    try { localStorage.setItem(IDLE_KEY, String(Date.now())); } catch (e) { /* ignore */ }
  }

  function isAdmin() {
    try { return sessionStorage.getItem('pnl_admin_session') === 'true'; } catch (e) { return false; }
  }

  async function idleLogout() {
    // Free the backend session, clear local state, and return home.
    try {
      const token = localStorage.getItem('pnl_token');
      if (token) {
        await fetch(API_BASE + '/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
        });
      }
    } catch (e) { /* ignore network errors */ }
    try {
      localStorage.removeItem('pnl_token');
      localStorage.removeItem(IDLE_KEY);
      localStorage.removeItem('pnl_student_session');
      sessionStorage.removeItem('pnl_admin_session');
    } catch (e) { /* ignore */ }
    // Students go home; admins go to the admin login.
    window.location.href = isAdmin() ? 'admin/admin-login.html' : 'index.html';
  }

  function checkIdle() {
    if (!isLoggedIn()) return;
    let last = parseInt(localStorage.getItem(IDLE_KEY) || '0', 10);
    if (!last) { markActivity(); return; }   // first run — start the clock
    if (Date.now() - last >= IDLE_LIMIT_MS) {
      idleLogout();
    }
  }

  // Wire up only in a browser context
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Any of these interactions counts as activity (throttled to once per 30s)
    let lastMark = 0;
    function onActivity() {
      const now = Date.now();
      if (now - lastMark > 30 * 1000) { lastMark = now; markActivity(); }
    }
    ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, onActivity, { passive: true });
    });

    // On load: navigating counts as activity, then check immediately.
    if (isLoggedIn()) {
      // If there's no timestamp yet (e.g. just logged in), start it now.
      if (!localStorage.getItem(IDLE_KEY)) markActivity();
      else checkIdle();
      // Periodic check so an idle open tab logs out on its own.
      setInterval(checkIdle, CHECK_EVERY_MS);
      // Re-check when a backgrounded tab becomes visible again.
      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) checkIdle();
      });
    }
  }
})();
