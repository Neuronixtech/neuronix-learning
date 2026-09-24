/* Neuronix in-browser Python editor (Pyodide in a Web Worker). Loaded only on lessons in Python phases. */
(function (global) {
  if (global.NeuronixPy) return;

  var PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
  var TIME_LIMIT_MS = 10000;
  var STORE_KEY = 'nx-py-code';
  var DEFAULT_CODE = 'print("Hello, Neuronix!")\n';

  var WORKER_SRC = [
    "importScripts('" + PYODIDE_URL + "');",
    "var py = null, stdinLines = [];",
    "async function init() {",
    "  py = await loadPyodide();",
    "  py.setStdout({ batched: function (s) { postMessage({ type: 'out', text: s + '\\n' }); } });",
    "  py.setStderr({ batched: function (s) { postMessage({ type: 'err', text: s + '\\n' }); } });",
    "  py.setStdin({ stdin: function () { return stdinLines.length ? stdinLines.shift() : null; } });",
    "  postMessage({ type: 'ready' });",
    "}",
    "onmessage = async function (e) {",
    "  if (e.data.type !== 'run') return;",
    "  stdinLines = e.data.stdin || [];",
    "  var g = py.globals.get('dict')();",
    "  g.set('__name__', '__main__');",
    "  try { await py.runPythonAsync(e.data.code, { globals: g }); postMessage({ type: 'done' }); }",
    "  catch (err) { postMessage({ type: 'error', text: String(err && err.message || err) }); }",
    "  finally { g.destroy(); }",
    "};",
    "init().catch(function (err) { postMessage({ type: 'fatal', text: String(err && err.message || err) }); });"
  ].join('\n');

  var CSS = [
    '#pyLauncher{position:fixed;right:1.1rem;bottom:5.4rem;z-index:140;display:flex;align-items:center;gap:.5rem;padding:.6rem 1rem;border-radius:999px;border:1px solid var(--line-strong,rgba(241,238,230,.18));background:var(--surface,#1C3050);color:var(--text,#F3F1EA);font:600 .82rem var(--font-display,"Space Grotesk",sans-serif);cursor:pointer;box-shadow:0 10px 26px -12px rgba(0,0,0,.55);transition:transform .15s}',
    '#pyLauncher:hover{transform:translateY(-2px)}',
    '#pyLauncher svg{width:16px;height:16px;color:var(--gold,#F4B740)}',
    '#pyPanel{position:fixed;top:52px;bottom:0;right:0;width:min(560px,100vw);z-index:150;display:none;flex-direction:column;background:var(--bg-soft,#142337);border-left:1px solid var(--line-strong,rgba(241,238,230,.18));box-shadow:-18px 0 40px -24px rgba(0,0,0,.6)}',
    '#pyPanel.open{display:flex}',
    '.py-head{display:flex;align-items:center;gap:.6rem;padding:.75rem 1rem;border-bottom:1px solid var(--line,rgba(241,238,230,.1))}',
    '.py-title{font:700 .95rem var(--font-display,"Space Grotesk",sans-serif);color:var(--text,#F3F1EA);flex:1}',
    '.py-status{font:500 .68rem var(--font-mono,"IBM Plex Mono",monospace);color:var(--muted,#8AA0BD)}',
    '.py-x{background:none;border:none;color:var(--muted,#8AA0BD);font-size:1.3rem;line-height:1;cursor:pointer;padding:.1rem .4rem}',
    '.py-x:hover{color:var(--text,#F3F1EA)}',
    '.py-editor{flex:0 0 46%;margin:0;padding:.9rem 1rem;border:none;border-bottom:1px solid var(--line,rgba(241,238,230,.1));outline:none;resize:none;background:#0E1726;color:#E6E9F2;font:400 .85rem/1.7 var(--font-mono,"IBM Plex Mono",monospace);tab-size:4;white-space:pre;overflow:auto}',
    '.py-bar{display:flex;align-items:center;gap:.5rem;padding:.55rem 1rem;border-bottom:1px solid var(--line,rgba(241,238,230,.1))}',
    '.py-btn{padding:.4rem .9rem;border-radius:8px;border:1px solid var(--line-strong,rgba(241,238,230,.18));background:transparent;color:var(--text-dim,#C8D3E3);font:600 .78rem var(--font-display,"Space Grotesk",sans-serif);cursor:pointer}',
    '.py-btn:hover{border-color:var(--cyan,#5FD4D6);color:var(--cyan,#5FD4D6)}',
    '.py-btn:disabled{opacity:.45;cursor:not-allowed}',
    '.py-run{background:#6FD18C;border-color:#6FD18C;color:#0F1B2D}',
    '.py-run:hover{background:#86dc9f;border-color:#86dc9f;color:#0F1B2D}',
    '.py-hint{margin-left:auto;font:400 .68rem var(--font-mono,"IBM Plex Mono",monospace);color:var(--muted,#8AA0BD)}',
    '.py-stdin{display:block;width:100%;box-sizing:border-box;padding:.5rem 1rem;border:none;border-bottom:1px solid var(--line,rgba(241,238,230,.1));outline:none;resize:none;height:2.9rem;background:var(--surface,#1C3050);color:var(--text-dim,#C8D3E3);font:400 .78rem var(--font-mono,"IBM Plex Mono",monospace)}',
    '.py-out{flex:1;margin:0;padding:.9rem 1rem;overflow:auto;white-space:pre-wrap;word-break:break-word;background:#0A111E;color:#CFE6FF;font:400 .82rem/1.65 var(--font-mono,"IBM Plex Mono",monospace)}',
    '.py-out .py-err{color:#FF8B8B}',
    '.py-out .py-info{color:#8AA0BD;font-style:italic}',
    '.bl-try{background:rgba(111,209,140,.16);border:1px solid rgba(111,209,140,.4);color:#6FD18C;font:600 .7rem var(--font-mono,"IBM Plex Mono",monospace);padding:.2rem .6rem;border-radius:5px;cursor:pointer;margin-right:.4rem}',
    '.bl-try:hover{background:rgba(111,209,140,.3)}',
    '@media (max-width:640px){#pyPanel{top:0}#pyLauncher{bottom:5rem}}',
    /* light theme */
    'html[data-theme="light"] #pyLauncher{background:#fff;color:#1A1446;box-shadow:0 10px 26px -12px rgba(40,24,110,.35)}',
    'html[data-theme="light"] #pyPanel{background:#fff;box-shadow:-18px 0 40px -24px rgba(40,24,110,.35)}',
    'html[data-theme="light"] .py-editor{background:#F6F8FA;color:#24292E}',
    'html[data-theme="light"] .py-stdin{background:#F1ECFF;color:#3D3670}',
    'html[data-theme="light"] .py-out{background:#F6F8FA;color:#1E40AF}',
    'html[data-theme="light"] .py-out .py-err{color:#C62828}',
    'html[data-theme="light"] .py-out .py-info{color:#6A737D}',
    'html[data-theme="light"] .bl-try{background:rgba(15,169,104,.12);border-color:rgba(15,169,104,.4);color:#0B7A4B}'
  ].join('\n');

  var worker = null, ready = false, running = false, timer = null;
  var el = {};

  function saved() { try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; } }
  function persist(v) { try { localStorage.setItem(STORE_KEY, v); } catch (e) {} }

  function setStatus(t) { el.status.textContent = t; }
  function append(text, cls) {
    var s = document.createElement('span');
    if (cls) s.className = cls;
    s.textContent = text;
    el.out.appendChild(s);
    el.out.scrollTop = el.out.scrollHeight;
  }

  function cleanTraceback(msg) {
    var i = msg.indexOf('File "<exec>"');
    if (i < 0) return msg;
    return 'Traceback (most recent call last):\n  ' + msg.slice(i);
  }

  function finishRun() {
    running = false;
    clearTimeout(timer);
    el.run.disabled = !ready;
    el.stop.disabled = true;
    if (ready) setStatus('Python ready');
  }

  function startWorker() {
    ready = false;
    setStatus('Loading Python…');
    el.run.disabled = true;
    var url = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' }));
    worker = new Worker(url);
    worker.onmessage = function (e) {
      var m = e.data;
      if (m.type === 'ready') { ready = true; setStatus('Python ready'); el.run.disabled = running; }
      else if (m.type === 'out') append(m.text);
      else if (m.type === 'err') append(m.text, 'py-err');
      else if (m.type === 'done') { finishRun(); }
      else if (m.type === 'error') { append(cleanTraceback(m.text) + '\n', 'py-err'); finishRun(); }
      else if (m.type === 'fatal') { setStatus('Could not load Python'); append('Python could not be loaded. Check your internet connection and try again.\n', 'py-err'); finishRun(); }
    };
    worker.onerror = function () { setStatus('Could not load Python'); finishRun(); };
  }

  function stopWorker(message) {
    if (worker) { worker.terminate(); worker = null; }
    if (message) append(message + '\n', 'py-info');
    finishRun();
    startWorker();
  }

  function run() {
    if (running || !ready) return;
    var code = el.editor.value;
    persist(code);
    el.out.textContent = '';
    running = true;
    el.run.disabled = true;
    el.stop.disabled = false;
    setStatus('Running…');
    var stdin = el.stdin.value ? el.stdin.value.split('\n') : [];
    timer = setTimeout(function () {
      stopWorker('Stopped: the program ran for more than ' + (TIME_LIMIT_MS / 1000) + ' seconds (is there an infinite loop?).');
    }, TIME_LIMIT_MS);
    worker.postMessage({ type: 'run', code: code, stdin: stdin });
  }

  function open(code) {
    ensureUI();
    if (typeof code === 'string') { el.editor.value = code; persist(code); }
    el.panel.classList.add('open');
    if (!worker) startWorker();
    el.editor.focus();
  }
  function close() { if (el.panel) el.panel.classList.remove('open'); }

  function ensureUI() {
    if (el.panel) return;
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var launcher = document.createElement('button');
    launcher.id = 'pyLauncher';
    launcher.type = 'button';
    launcher.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg> Python Editor';
    launcher.addEventListener('click', function () { el.panel.classList.contains('open') ? close() : open(); });
    document.body.appendChild(launcher);

    var panel = document.createElement('div');
    panel.id = 'pyPanel';
    panel.innerHTML =
      '<div class="py-head"><div class="py-title">Python Editor</div><span class="py-status" id="pyStatus"></span><button class="py-x" id="pyClose" aria-label="Close">&times;</button></div>' +
      '<textarea class="py-editor" id="pyEditor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>' +
      '<div class="py-bar"><button class="py-btn py-run" id="pyRun">&#9654; Run</button><button class="py-btn" id="pyStop" disabled>Stop</button><button class="py-btn" id="pyClear">Clear output</button><button class="py-btn" id="pyReset">Reset code</button><span class="py-hint">Ctrl + Enter to run</span></div>' +
      '<textarea class="py-stdin" id="pyStdin" placeholder="Input for input() calls, one line per call (optional)" spellcheck="false"></textarea>' +
      '<pre class="py-out" id="pyOut"></pre>';
    document.body.appendChild(panel);

    el.panel = panel;
    el.editor = panel.querySelector('#pyEditor');
    el.run = panel.querySelector('#pyRun');
    el.stop = panel.querySelector('#pyStop');
    el.stdin = panel.querySelector('#pyStdin');
    el.out = panel.querySelector('#pyOut');
    el.status = panel.querySelector('#pyStatus');

    el.editor.value = saved() || DEFAULT_CODE;
    el.editor.addEventListener('input', function () { persist(el.editor.value); });
    el.editor.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        var s = el.editor.selectionStart, t = el.editor.selectionEnd;
        el.editor.value = el.editor.value.slice(0, s) + '    ' + el.editor.value.slice(t);
        el.editor.selectionStart = el.editor.selectionEnd = s + 4;
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); run(); }
    });
    el.run.addEventListener('click', run);
    el.stop.addEventListener('click', function () { if (running) stopWorker('Stopped.'); });
    panel.querySelector('#pyClear').addEventListener('click', function () { el.out.textContent = ''; });
    panel.querySelector('#pyReset').addEventListener('click', function () { el.editor.value = DEFAULT_CODE; persist(DEFAULT_CODE); });
    panel.querySelector('#pyClose').addEventListener('click', close);
  }

  // Adds a "Try it" button to every Python code block in the lesson body (re-run whenever the lesson re-renders).
  function decorate(root) {
    var wraps = root.querySelectorAll('.bl-code-wrap');
    for (var i = 0; i < wraps.length; i++) {
      var w = wraps[i];
      if (w.querySelector('.bl-try')) continue;
      var name = (w.querySelector('.bl-fname') || {}).textContent || '';
      if (name && !/\.py$/i.test(name.trim())) continue;
      var bar = w.querySelector('.bl-code-bar'), copy = w.querySelector('.bl-copy');
      if (!bar) continue;
      var b = document.createElement('button');
      b.className = 'bl-try';
      b.type = 'button';
      b.textContent = '▶ Try it';
      b.addEventListener('click', function (ev) {
        var pre = ev.currentTarget.closest('.bl-code-wrap').querySelector('.bl-code');
        open(pre ? pre.textContent : '');
      });
      bar.insertBefore(b, copy || null);
    }
  }

  function init() {
    ensureUI();
    var body = document.getElementById('contentBody') || document.body;
    decorate(body);
    new MutationObserver(function () { decorate(body); }).observe(body, { childList: true, subtree: true });
  }

  global.NeuronixPy = { init: init, open: open, close: close };
})(window);
