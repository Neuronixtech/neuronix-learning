/* Neuronix theme switcher: applies the saved theme before first paint, then adds a toggle to the page header. */
(function () {
  var KEY = 'nx-theme';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#EEF3FB' : '#0F1B2D');
  }

  apply(saved() === 'dark' ? 'dark' : 'light');

  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  var HOSTS = ['.nav-right', '.topbar-right', '.dash-right', '.ntb-right', '.sb-foot'];

  var paints = [];
  var mounted = false;
  function repaintAll() { paints.forEach(function (f) { f(); }); }

  // Same-origin pages (including embedded iframes) follow theme changes made in any other tab/frame.
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) { apply(e.newValue === 'dark' ? 'dark' : 'light'); repaintAll(); }
  });

  function makeButton() {
    var btn = document.createElement('button');
    btn.className = 'nx-theme-btn';
    btn.type = 'button';
    function paint() {
      var light = root.getAttribute('data-theme') === 'light';
      btn.innerHTML = light ? MOON : SUN;
      btn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      btn.title = light ? 'Dark mode' : 'Light mode';
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      repaintAll();
    });
    paint();
    paints.push(paint);
    return btn;
  }

  function placeInHeader(btn) {
    for (var i = 0; i < HOSTS.length; i++) {
      var host = document.querySelector(HOSTS[i]);
      if (host) { host.insertBefore(btn, host.firstChild); return true; }
    }
    return false;
  }

  // Tabbed pages (student dashboard): put a toggle in every tab's header so it is always reachable.
  function mountTabbed() {
    var dr = document.querySelector('.dash-right');
    if (dr) dr.insertBefore(makeButton(), dr.firstChild);
    var heads = document.querySelectorAll('.tab-pane .panel-head');
    for (var i = 0; i < heads.length; i++) {
      var ph = heads[i], btn = makeButton();
      if (ph.children.length <= 1) { ph.appendChild(btn); continue; }
      var last = ph.lastElementChild, wrap = document.createElement('div');
      wrap.className = 'nx-right';
      ph.replaceChild(wrap, last);
      wrap.appendChild(btn);
      wrap.appendChild(last);
    }
  }

  function mount() {
    if (window.self !== window.top) return; // embedded previews follow the parent page; no toggle of their own
    if (mounted) return;
    mounted = true;

    if (document.querySelector('.tab-pane')) { mountTabbed(); return; }

    var btn = makeButton();

    // Login-style nav: keep the existing right-hand element, put the toggle next to it.
    var inner = document.querySelector('.nav-inner');
    var hasHost = HOSTS.some(function (s) { return document.querySelector(s); });
    if (!hasHost && inner && inner.lastElementChild) {
      var last = inner.lastElementChild;
      var wrap = document.createElement('div');
      wrap.className = 'nx-right';
      inner.replaceChild(wrap, last);
      wrap.appendChild(btn);
      wrap.appendChild(last);
      return;
    }

    if (placeInHeader(btn)) return;

    // Header may be rendered later by topbar.js; wait briefly, then fall back to a floating button.
    var obs = new MutationObserver(function () {
      if (placeInHeader(btn)) { obs.disconnect(); clearTimeout(timer); }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    var timer = setTimeout(function () {
      obs.disconnect();
      if (!btn.parentNode) { btn.classList.add('nx-float'); document.body.appendChild(btn); }
    }, 2500);
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
