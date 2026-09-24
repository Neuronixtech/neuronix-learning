/* Neuronix UI motion: staggered reveal, count-up numbers, progress bars, completion pop.
   Skipped entirely for users who prefer reduced motion. Public pages keep their own .reveal effect. */
(function () {
  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;

  var REVEAL = [
    '.stat-card', '.panel', '.continue-card', '.settings-section', '.rm-phase', '.ach-card', '.auth-card',
    '.bl-example', '.bl-artifact', '.bl-tbl-wrap', '.bl-code-wrap', '.bl-diagram', '.bl-quiz-q', '.bl-methods',
    '.bl-prob', '.bl-math'
  ].join(',');
  var COUNT = '.stat-num, .stat-card .num';
  var BARS = '.rm-phase-fill, .progress-fill, .prog-fill';

  var CSS = [
    '@keyframes nxPageIn{from{opacity:0}to{opacity:1}}',
    'body{animation:nxPageIn .45s ease both}',
    '.nx-in{opacity:0;transform:translateY(14px);transition:opacity .55s ease,transform .55s cubic-bezier(.22,1,.36,1);transition-delay:var(--nx-d,0ms)}',
    '.nx-in.nx-show{opacity:1;transform:none}',
    '.stat-card{transition:transform .2s ease,box-shadow .2s ease}',
    '.stat-card:hover{transform:translateY(-2px)}',
    '.btn:active,.complete-btn:active,.nav-prev:active,.nav-next:active{transform:scale(.97)}',
    '@keyframes nxPop{0%{transform:scale(1)}40%{transform:scale(1.12)}100%{transform:scale(1)}}',
    '@keyframes nxRing{0%{box-shadow:0 0 0 0 rgba(111,209,140,.55)}100%{box-shadow:0 0 0 16px rgba(111,209,140,0)}}',
    '.complete-btn.nx-pop{animation:nxPop .45s ease,nxRing .8s ease-out}',
    '@media (prefers-reduced-motion:reduce){.nx-in{opacity:1;transform:none;transition:none}body{animation:none}}',
    '.reduce-motion .nx-in{opacity:1!important;transform:none!important;transition:none!important}',
    '@media print{.nx-in{opacity:1!important;transform:none!important}}'
  ].join('\n');

  function reduced() { return document.documentElement.classList.contains('reduce-motion'); }

  var st = document.createElement('style');
  st.textContent = CSS;
  document.head.appendChild(st);

  /* ---------- staggered reveal ---------- */
  var seen = new WeakSet();
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    var batch = 0;
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      io.unobserve(el);
      el.style.setProperty('--nx-d', Math.min(batch++ * 60, 300) + 'ms');
      el.classList.add('nx-show');
      var done = function () { el.classList.remove('nx-in', 'nx-show'); el.style.removeProperty('--nx-d'); };
      el.addEventListener('transitionend', function h(e) { if (e.propertyName === 'opacity') { el.removeEventListener('transitionend', h); done(); } });
      setTimeout(done, 1400);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }) : null;

  function prepare(el) {
    if (seen.has(el) || !io || reduced()) return;
    if (el.closest('.reveal, .nx-no-anim')) return;
    seen.add(el);
    el.classList.add('nx-in');
    io.observe(el);
  }

  /* ---------- count-up numbers ---------- */
  var counted = new WeakMap();
  function countUp(el) {
    if (reduced()) return;
    var m = /^(\D*)(\d[\d,]*)(.*)$/.exec((el.textContent || '').trim());
    if (!m) return;
    var target = parseInt(m[2].replace(/,/g, ''), 10);
    if (el.__nxCounting || !isFinite(target) || target < 2 || counted.get(el) === el.textContent.trim()) return;
    var final = el.textContent.trim();
    counted.set(el, final);
    el.__nxCounting = true;
    var start = null, dur = 800;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      var v = Math.round(target * e);
      el.textContent = p >= 1 ? final : m[1] + v.toLocaleString('en-IN') + m[3];
      if (p < 1) requestAnimationFrame(step); else el.__nxCounting = false;
    }
    requestAnimationFrame(step);
  }

  /* ---------- progress bars ---------- */
  var barred = new WeakMap();
  function animateBar(el) {
    if (reduced()) return;
    var w = el.style.width;
    if (!w || w === '0%' || w === '0px' || barred.get(el) === w) return;
    barred.set(el, w);
    el.style.transition = 'none';
    el.style.width = '0%';
    void el.offsetWidth;
    el.style.transition = 'width .9s cubic-bezier(.22,1,.36,1)';
    el.style.width = w;
  }

  function scan(root) {
    if (!root.querySelectorAll) return;
    var i, list;
    if (root.matches && root.matches(REVEAL)) prepare(root);
    list = root.querySelectorAll(REVEAL); for (i = 0; i < list.length; i++) prepare(list[i]);
    list = root.querySelectorAll(COUNT); for (i = 0; i < list.length; i++) countUp(list[i]);
    list = root.querySelectorAll(BARS); for (i = 0; i < list.length; i++) animateBar(list[i]);
  }

  /* ---------- completion pop ---------- */
  function watchComplete() {
    var btn = document.getElementById('completeBtn');
    if (!btn) return;
    var was = btn.classList.contains('done');
    new MutationObserver(function () {
      var now = btn.classList.contains('done');
      if (now && !was && !reduced()) {
        btn.classList.remove('nx-pop'); void btn.offsetWidth; btn.classList.add('nx-pop');
        setTimeout(function () { btn.classList.remove('nx-pop'); }, 1000);
      }
      was = now;
    }).observe(btn, { attributes: true, attributeFilter: ['class'] });
  }

  function init() {
    scan(document.body);
    watchComplete();
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) { var n = m.addedNodes[j]; if (n.nodeType === 1) scan(n); }
          if (m.target && m.target.nodeType === 1 && m.target.matches && m.target.matches(COUNT)) countUp(m.target);
        } else if (m.type === 'characterData') {
          var p = m.target.parentElement; if (p && p.matches && p.matches(COUNT)) countUp(p);
        } else if (m.type === 'attributes' && m.target.matches && m.target.matches(BARS)) animateBar(m.target);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
