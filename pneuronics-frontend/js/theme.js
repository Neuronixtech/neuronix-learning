/* Neuronix theme switcher: applies the saved theme before first paint, then injects a toggle. */
(function () {
  var KEY = 'nx-theme';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#F6F4EE' : '#0F1B2D');
  }

  apply(saved() === 'light' ? 'light' : 'dark');

  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function mount() {
    if (document.getElementById('nxThemeToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'nxThemeToggle';
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
      paint();
    });
    paint();
    document.body.appendChild(btn);
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
