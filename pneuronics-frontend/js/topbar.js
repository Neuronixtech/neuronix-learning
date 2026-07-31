/* ══════════════════════════════════════════════════════════════════
 * Neuronix shared top bar — search, language toggle, bell, avatar.
 * Requires api.js (getLang/setLang) loaded first.
 * Usage: call NeuronixTopbar.init({ role:'student'|'admin', avatar:'A', onMenu:fn })
 * ════════════════════════════════════════════════════════════════ */
(function (global) {
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

  function render(opts) {
    const lang = (typeof getLang === 'function') ? getLang() : 'en';
    const enActive = lang === 'en' ? ' active' : '';
    const knActive = lang === 'kn' ? ' active' : '';
    const avatar = esc(opts.avatar || 'A');
    const placeholder = opts.placeholder || 'Search lessons, modules...';
    return ''
      + '<button class="ntb-menu" id="ntbMenu" aria-label="Menu">'
      + '<span></span><span></span><span></span></button>'
      + '<div class="ntb-search">'
      + '<svg class="ntb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'
      + '<input type="text" id="ntbSearchInput" placeholder="' + esc(placeholder) + '" autocomplete="off" />'
      + '<div class="ntb-search-results" id="ntbSearchResults"></div>'
      + '</div>'
      + '<div class="ntb-right">'
      + '<div class="ntb-lang" role="group" aria-label="Content language">'
      + '<button class="ntb-lang-btn' + enActive + '" id="ntbLangEn" data-lang="en">English</button>'
      + '<button class="ntb-lang-btn ntb-kn' + knActive + '" id="ntbLangKn" data-lang="kn">ಕನ್ನಡ</button>'
      + '</div>'
      + '<button class="ntb-bell" id="ntbBell" aria-label="Notifications">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>'
      + '<span class="ntb-bell-dot" id="ntbBellDot"></span>'
      + '</button>'
      + '<div class="ntb-avatar" id="ntbAvatar">' + avatar + '</div>'
      + '</div>';
  }

  function init(opts) {
    opts = opts || {};
    const host = document.getElementById('neuronixTopbar');
    if (!host) return;
    host.className = 'ntb';
    host.innerHTML = render(opts);

    // Language toggle
    const enBtn = document.getElementById('ntbLangEn');
    const knBtn = document.getElementById('ntbLangKn');
    function paint(lang) {
      enBtn.classList.toggle('active', lang === 'en');
      knBtn.classList.toggle('active', lang === 'kn');
    }
    enBtn.addEventListener('click', function () { if (typeof setLang==='function') setLang('en'); paint('en'); });
    knBtn.addEventListener('click', function () { if (typeof setLang==='function') setLang('kn'); paint('kn'); });
    document.addEventListener('langchange', function (e) { paint(e.detail.lang); });

    // Hamburger -> caller hook (toggles sidebar)
    const menu = document.getElementById('ntbMenu');
    if (menu && typeof opts.onMenu === 'function') menu.addEventListener('click', opts.onMenu);

    // Bell -> caller hook (optional)
    const bell = document.getElementById('ntbBell');
    if (bell && typeof opts.onBell === 'function') bell.addEventListener('click', opts.onBell);

    // Avatar -> caller hook (optional)
    const avatar = document.getElementById('ntbAvatar');
    if (avatar && typeof opts.onAvatar === 'function') avatar.addEventListener('click', opts.onAvatar);

    // Search
    if (typeof opts.onSearch === 'function') {
      const input = document.getElementById('ntbSearchInput');
      const results = document.getElementById('ntbSearchResults');
      let timer = null;
      input.addEventListener('input', function () {
        clearTimeout(timer);
        const q = input.value.trim();
        timer = setTimeout(function () { opts.onSearch(q, results); }, 220);
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.ntb-search')) results.classList.remove('show');
      });
      input.addEventListener('focus', function () {
        if (results.innerHTML.trim()) results.classList.add('show');
      });
    }
  }

  global.NeuronixTopbar = { init: init };
})(window);
