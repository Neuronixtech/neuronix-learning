module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32153e",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 3 of 3) — Sessions, Hooks and Trace Propagation",
 "titleKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 3 / 3) — Sessions, Hooks ಮತ್ತು Trace ಪ್ರಸರಣ",
 "desc": "Build the session store, hook manager and trace context, then test child-id collisions, a check-then-act race, string versus resolved path hooks, crashing hooks, context propagation to threads and trace-label collisions.",
 "descKn": "Session store, hook manager ಮತ್ತು trace context ನಿರ್ಮಿಸಿ, ನಂತರ ಮಗು-id ಘರ್ಷಣೆ, check-then-act ಓಟ, ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು resolve ಮಾರ್ಗ hooks, ಕುಸಿಯುವ hooks, threads ಗೆ context ಪ್ರಸರಣ ಮತ್ತು trace-label ಘರ್ಷಣೆ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Build a hierarchical session store.",
  "Register hooks at named events.",
  "Choose fail-open or fail-closed per hook.",
  "Compare resolved paths, not strings.",
  "Propagate a trace id into worker threads."
 ],
 "objectivesKn": [
  "ಶ್ರೇಣೀಕೃತ session store ನಿರ್ಮಿಸಿ.",
  "ಹೆಸರಿನ ಘಟನೆಗಳಲ್ಲಿ hooks ನೋಂದಾಯಿಸಿ.",
  "ಪ್ರತಿ hook ಗೆ fail-open ಅಥವಾ fail-closed ಆರಿಸಿ.",
  "ಸ್ಟ್ರಿಂಗ್ ಅಲ್ಲ, resolve ಮಾರ್ಗ ಹೋಲಿಸಿ.",
  "ಕೆಲಸಗಾರ threads ಗೆ trace id ಹರಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Claude Agent SDK: The Harness, Subagents and Sessions (Part 3 of 3)",
    "textKn": "Claude Agent SDK: Harness, Subagents ಮತ್ತು Sessions (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: the session store, hooks, trace propagation and a complete run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the Claude Agent SDK, not the SDK itself, and the subagents are simulated workers, so no real LLM behaviour is measured. The pasted Part 3 was cut off at its section 174, so the program is rebuilt from its descriptions. One check depends on the filesystem: the upper-case path result is from Windows, where paths are case-insensitive, and may differ on Linux. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: session store, hooks, trace ಪ್ರಸರಣ ಮತ್ತು ಸಂಪೂರ್ಣ ಓಟ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Claude Agent SDK ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, SDK ಸ್ವತಃ ಅಲ್ಲ, ಮತ್ತು subagents ಅನುಕರಿಸಿದ ಕೆಲಸಗಾರರು, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 ತನ್ನ ವಿಭಾಗ 174 ರಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಅದರ ವಿವರಣೆಗಳಿಂದ ಪ್ರೋಗ್ರಾಂ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ. ಒಂದು ಪರೀಕ್ಷೆ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಮೇಲೆ ಅವಲಂಬಿತ: ದೊಡ್ಡಕ್ಷರ ಮಾರ್ಗದ ಫಲಿತಾಂಶ Windows ನದು, ಅಲ್ಲಿ ಮಾರ್ಗಗಳು ಕೇಸ್-ಅಸೂಕ್ಷ್ಮ, Linux ನಲ್ಲಿ ಭಿನ್ನವಾಗಬಹುದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "State, Policy and Correlation",
    "textKn": "State, ನೀತಿ ಮತ್ತು ಸಂಬಂಧ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Three Cross-Cutting Concerns",
    "headingKn": "ಮೂರು ಅಡ್ಡ-ಕತ್ತರಿಸುವ ವಿಷಯಗಳು",
    "bodyEn": "A harness needs memory that survives a tool call (the session store, with child sessions under parent:subagent:name), policy that can stop an action (hooks at session_start, pre_tool_use, post_tool_use and session_end) and a way to link everything that belongs to one run (a trace id passed to each child). Each is small in code and easy to get subtly wrong, which is what this part tests.",
    "bodyKn": "ಉಪಕರಣ ಕರೆ ಮೀರಿ ಉಳಿಯುವ ನೆನಪು (session store, parent:subagent:name ಅಡಿಯ ಮಗು sessions), ಕ್ರಿಯೆಯನ್ನು ನಿಲ್ಲಿಸಬಲ್ಲ ನೀತಿ (session_start, pre_tool_use, post_tool_use ಮತ್ತು session_end ನಲ್ಲಿ hooks) ಮತ್ತು ಒಂದು ಓಟಕ್ಕೆ ಸೇರಿದ ಎಲ್ಲವನ್ನೂ ಜೋಡಿಸುವ ಮಾರ್ಗ (ಪ್ರತಿ ಮಗುವಿಗೆ ನೀಡುವ trace id) harness ಗೆ ಬೇಕು. ಪ್ರತಿಯೊಂದೂ ಕೋಡ್‌ನಲ್ಲಿ ಚಿಕ್ಕದು ಮತ್ತು ಸೂಕ್ಷ್ಮವಾಗಿ ತಪ್ಪಾಗುವುದು ಸುಲಭ, ಈ ಭಾಗ ಅದನ್ನೇ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Hooks Around a Tool and a Shared Trace",
    "headingKn": "Tool ಸುತ್ತ Hooks ಮತ್ತು ಹಂಚಿದ Trace",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Hooks wrap each tool call; a trace id links the run</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">pre_tool_use</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">may raise to block</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">tool.run</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the real work</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">post_tool_use</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">success only</text><path d=\"M90,57 H110 M190,57 H210\" stroke=\"#475569\"/><rect x=\"60\" y=\"110\" width=\"180\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">TraceContext(trace_id)</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">passed to every child</text><path d=\"M150,74 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">an exception skips the post event, so failures need their own record</text></svg>",
    "captionEn": "A raising pre hook blocks the tool; a post hook only follows success.",
    "captionKn": "ಎತ್ತುವ pre hook tool ತಡೆಯುತ್ತದೆ; post hook ಯಶಸ್ಸಿನ ನಂತರ ಮಾತ್ರ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Hook failure policy",
    "headingKn": "Hook ವೈಫಲ್ಯ ನೀತಿ",
    "headers": [
     "",
     "fail closed",
     "fail open"
    ],
    "rows": [
     [
      "Buggy logging hook",
      "every tool call fails",
      "error recorded, call proceeds"
     ],
     [
      "Policy denial (PermissionError)",
      "blocks the call",
      "must still re-raise"
     ],
     [
      "Use for",
      "security gates",
      "logging and metrics"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Session Store, Hooks and Trace",
    "textKn": "Session store, Hooks ಮತ್ತು Trace ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_3.py",
    "headingEn": "SessionStore, HookManager and TraceContext",
    "headingKn": "SessionStore, HookManager ಮತ್ತು TraceContext",
    "descEn": "SessionStore keeps messages by hierarchical id with a lock. HookManager rejects unknown events and runs hooks in registration order; our fail_open option records non-policy errors and still re-raises PermissionError. block_exact_etc_passwd is the lesson's string comparison and block_resolved is our path-resolving fix. TraceContext carries a 32-hex trace id.",
    "descKn": "SessionStore ಸಂದೇಶಗಳನ್ನು ಶ್ರೇಣೀಕೃತ id ಮತ್ತು lock ಜೊತೆ ಇಡುತ್ತದೆ. HookManager ಅಜ್ಞಾತ ಘಟನೆಗಳನ್ನು ತಿರಸ್ಕರಿಸಿ hooks ಅನ್ನು ನೋಂದಣಿ ಕ್ರಮದಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ; ನಮ್ಮ fail_open ಆಯ್ಕೆ ನೀತಿಯಲ್ಲದ ದೋಷಗಳನ್ನು ದಾಖಲಿಸಿ PermissionError ಅನ್ನು ಮತ್ತೆ ಎತ್ತುತ್ತದೆ. block_exact_etc_passwd ಲೆಸನ್‌ನ ಸ್ಟ್ರಿಂಗ್ ಹೋಲಿಕೆ ಮತ್ತು block_resolved ನಮ್ಮ ಮಾರ್ಗ-resolve ಪರಿಹಾರ. TraceContext 32-hex trace id ಒಯ್ಯುತ್ತದೆ.",
    "code": "class SessionStore:\n    def __init__(self):\n        self._sessions, self._lock = {}, threading.Lock()\n\n    def append(self, session_id, message):\n        with self._lock:\n            self._sessions.setdefault(session_id, []).append(message)\n\n    def load(self, session_id):\n        with self._lock:\n            return list(self._sessions.get(session_id, []))\n\n    def list_sessions(self):\n        with self._lock:\n            return sorted(self._sessions)\n\n    def list_subkeys(self, session_id):\n        prefix = f\"{session_id}:subagent:\"\n        with self._lock:\n            return sorted(k for k in self._sessions if k.startswith(prefix))\n\n    def delete(self, session_id):\n        prefix = f\"{session_id}:subagent:\"\n        with self._lock:\n            for k in [k for k in self._sessions if k == session_id or k.startswith(prefix)]:\n                del self._sessions[k]\n\n\nclass HookManager:\n    EVENTS = (\"session_start\", \"session_end\", \"pre_tool_use\", \"post_tool_use\")\n\n    def __init__(self, fail_open=False):\n        self._hooks, self.fail_open, self.errors = {e: [] for e in self.EVENTS}, fail_open, []\n\n    def register(self, event, hook):\n        if event not in self._hooks:\n            raise ValueError(f\"Unknown hook event: {event}\")\n        self._hooks[event].append(hook)\n\n    def emit(self, event, **payload):\n        for hook in self._hooks.get(event, []):\n            if self.fail_open:\n                try:\n                    hook(**payload)\n                except PermissionError:\n                    raise\n                except Exception as e:\n                    self.errors.append(f\"{event}: {type(e).__name__}: {e}\")\n            else:\n                hook(**payload)\n\n\nclass HookedRegistry(ToolRegistry):\n    def __init__(self, hooks, agent=\"main\"):\n        super().__init__()\n        self.hook_manager, self.agent = hooks, agent\n\n    def execute(self, name, **kwargs):\n        self.hook_manager.emit(\"pre_tool_use\", agent=self.agent, tool=name, arguments=kwargs)\n        result = self.get(name).run(**kwargs)\n        self.hook_manager.emit(\"post_tool_use\", agent=self.agent, tool=name, result=result)\n        return result\n\n\ndef block_exact_etc_passwd(agent, tool, arguments, **_):\n    \"\"\"As taught: compare the path string with one forbidden literal.\"\"\"\n    if tool == \"write_file\" and arguments.get(\"path\") == \"protected/secret.txt\":\n        raise PermissionError(\"Write blocked\")\n\n\ndef block_resolved(agent, tool, arguments, **_):\n    \"\"\"Our fix: compare resolved paths.\"\"\"\n    if tool == \"write_file\" and Path(arguments.get(\"path\", \"\")).resolve() == Path(\"protected/secret.txt\").resolve():\n        raise PermissionError(\"Write blocked\")\n\n\n@dataclass\nclass TraceContext:\n    trace_id: str\n\n    @classmethod\n    def create(cls):\n        return cls(trace_id=uuid.uuid4().hex)\n\n    def child_label(self, name):\n        return f\"{self.trace_id[:8]}:{name}\"\n\n\nCURRENT_TRACE = contextvars.ContextVar(\"current_trace\", default=None)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cas_3.py",
    "headingEn": "main(): nine experiments and the whole program",
    "headingKn": "main(): ಒಂಬತ್ತು ಪ್ರಯೋಗಗಳು ಮತ್ತು ಸಂಪೂರ್ಣ ಪ್ರೋಗ್ರಾಂ",
    "descEn": "main() tests id collisions in child sessions, a check-then-act race under eight threads, hook order and blocking, string versus resolved path checks, crashing hooks, whether a ContextVar reaches pool threads, trace-label collisions and finally runs hooks, three traced subagents and the store together.",
    "descKn": "main() ಮಗು sessions ನ id ಘರ್ಷಣೆ, ಎಂಟು threads ಅಡಿ check-then-act ಓಟ, hook ಕ್ರಮ ಮತ್ತು ತಡೆ, ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು resolve ಮಾರ್ಗ ಪರಿಶೀಲನೆ, ಕುಸಿಯುವ hooks, ContextVar pool threads ತಲುಪುತ್ತದೆಯೇ, trace-label ಘರ್ಷಣೆ ಮತ್ತು ಕೊನೆಗೆ hooks, ಮೂರು traced subagents ಮತ್ತು store ಒಟ್ಟಿಗೆ ಚಲಾಯಿಸುವುದನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def build_registry(hooks):\n    reg = HookedRegistry(hooks)\n    reg.register(Tool(\"read_file\", \"Read a UTF-8 text file\", read_file))\n    reg.register(Tool(\"write_file\", \"Write a UTF-8 text file\", write_file))\n    reg.register(Tool(\"list_dir\", \"List entries in a directory\", list_dir))\n    return reg\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef attempt(label, fn):\n    try:\n        print(f\"{label}: {fn()}\")\n    except Exception as e:\n        print(f\"{label}: {type(e).__name__}: {e}\")\n\n\ndef main():\n    work = Path(tempfile.mkdtemp(prefix=\"cas3_\"))\n    old = Path.cwd()\n    os.chdir(work)\n    try:\n        section(\"1. The lesson's session store demo\")\n        store = SessionStore()\n        store.append(\"parent\", {\"role\": \"user\", \"content\": \"hello\"})\n        store.append(\"parent:subagent:a\", {\"role\": \"assistant\", \"content\": \"A result\"})\n        store.append(\"parent:subagent:b\", {\"role\": \"assistant\", \"content\": \"B result\"})\n        print(store.load(\"parent\"))\n        print(store.list_subkeys(\"parent\"))\n        print(store.list_sessions())\n\n        section(\"2. Genuinely checking: hierarchical ids are strings, so names can collide\")\n        s = SessionStore()\n        s.append(\"p\", {\"role\": \"user\", \"content\": \"parent p\"})\n        s.append(\"p:subagent:x\", {\"role\": \"assistant\", \"content\": \"child x\"})\n        s.append(\"p:subagent:x:subagent:y\", {\"role\": \"assistant\", \"content\": \"grandchild y\"})\n        s.append(\"p:subagent:z:subagent:q\", {\"role\": \"assistant\", \"content\": \"a child literally named 'z:subagent:q'\"})\n        print(\"subkeys of p:\", s.list_subkeys(\"p\"))\n        print(\"list_subkeys cannot tell a grandchild from a child whose name contains ':subagent:'\")\n        s.delete(\"p:subagent:x\")\n        print(\"after delete('p:subagent:x'):\", s.list_sessions())\n        print(\"deleting a child also deleted its grandchild (prefix match), and the literal name ambiguity was never rejected\")\n        s2 = SessionStore()\n        s2.append(\"job\", {\"role\": \"user\", \"content\": \"j\"})\n        s2.append(\"job2\", {\"role\": \"user\", \"content\": \"j2\"})\n        s2.append(\"job2:subagent:a\", {\"role\": \"assistant\", \"content\": \"a\"})\n        s2.delete(\"job\")\n        print(\"delete('job') leaves unrelated 'job2' and its child:\", s2.list_sessions())\n\n        section(\"3. Genuinely measuring: the lock protects append, not a check-then-act sequence\")\n        for use_lock in (False, True):\n            st = SessionStore()\n            gate = threading.Lock()\n            sys.setswitchinterval(1e-6)\n\n            def add_numbered(sid):\n                for _ in range(300):\n                    if use_lock:\n                        with gate:\n                            st.append(sid, {\"n\": len(st.load(sid)) + 1})\n                    else:\n                        st.append(sid, {\"n\": len(st.load(sid)) + 1})\n            threads = [threading.Thread(target=add_numbered, args=(\"s\",)) for _ in range(8)]\n            [t.start() for t in threads]; [t.join() for t in threads]\n            nums = [m[\"n\"] for m in st.load(\"s\")]\n            print(f\"extra gate around next-number: {use_lock!s:5} | messages {len(nums)} | distinct numbers {len(set(nums))} | duplicates {len(nums) - len(set(nums))}\")\n        sys.setswitchinterval(0.005)\n        print(\"every append succeeded either way (no lost messages), but numbering computed from load() raced without a wider lock\")\n\n        section(\"4. Hooks: order, blocking and the audit trail\")\n        calls = []\n        hooks = HookManager()\n        hooks.register(\"pre_tool_use\", lambda agent, tool, arguments, **_: calls.append((\"pre-A\", tool)))\n        hooks.register(\"pre_tool_use\", block_exact_etc_passwd)\n        hooks.register(\"pre_tool_use\", lambda agent, tool, arguments, **_: calls.append((\"pre-B\", tool)))\n        hooks.register(\"post_tool_use\", lambda agent, tool, result, **_: calls.append((\"post\", tool)))\n        reg = build_registry(hooks)\n        Path(\"protected\").mkdir()\n        attempt(\"write allowed file\", lambda: reg.execute(\"write_file\", path=\"notes.txt\", content=\"ok\"))\n        attempt(\"write protected/secret.txt\", lambda: reg.execute(\"write_file\", path=\"protected/secret.txt\", content=\"x\"))\n        print(\"hook calls in order:\", calls)\n        print(\"pre-B never ran for the blocked call (the first raising hook stops the chain) and no post event exists for it\")\n        attempt(\"unknown event name\", lambda: hooks.register(\"pre_tool_usee\", print))\n\n        section(\"5. Genuinely checking: the blocking hook compares strings, not files\")\n        for label_p, p in ((\"exact spelling\", \"protected/secret.txt\"), (\"with ..\", \"protected/../protected/secret.txt\"), (\"with ./\", \"./protected/secret.txt\"),\n                           (\"absolute path\", str(work / \"protected\" / \"secret.txt\")), (\"upper-case dir\", \"PROTECTED/secret.txt\")):\n            for label, fn in ((\"string hook\", block_exact_etc_passwd), (\"resolved hook\", block_resolved)):\n                h = HookManager(); h.register(\"pre_tool_use\", fn)\n                r = build_registry(h)\n                try:\n                    r.execute(\"write_file\", path=p, content=\"X\")\n                    outcome = \"WRITTEN\"\n                except PermissionError:\n                    outcome = \"blocked\"\n                print(f\"{label_p:16} {label:13} {outcome}\")\n        print(\"on this case-insensitive Windows filesystem 'PROTECTED/secret.txt' is the same file; the resolved hook caught it because resolve() normalises the path\")\n        print(\"the string hook only blocked the one exact spelling\")\n\n        section(\"6. Genuinely checking: a hook that crashes\")\n        for fail_open in (False, True):\n            h = HookManager(fail_open=fail_open)\n            h.register(\"pre_tool_use\", lambda **_: 1 / 0)\n            r = build_registry(h)\n            attempt(f\"fail_open={fail_open}: list_dir\", lambda: r.execute(\"list_dir\", path=\".\"))\n            print(\"   recorded hook errors:\", h.errors)\n        print(\"a buggy logging hook stops every tool call when hooks fail closed; failing open keeps the agent running but must still re-raise real policy denials\")\n\n        section(\"7. Genuinely checking: does the trace reach worker threads\")\n        trace = TraceContext.create()\n        CURRENT_TRACE.set(trace)\n        seen = {}\n\n        def worker(label):\n            seen[label] = CURRENT_TRACE.get()\n        with ThreadPoolExecutor(max_workers=2) as pool:\n            pool.submit(worker, \"plain submit\").result()\n            pool.submit(contextvars.copy_context().run, worker, \"copy_context\").result()\n        for k, v in seen.items():\n            print(f\"{k:14} sees trace: {v.trace_id[:8] if v else None}\")\n        print(\"a ContextVar set in the parent is invisible in a pool thread unless the context is copied; the lesson avoids this by passing TraceContext as an argument\")\n\n        section(\"8. Genuinely measuring: the 8-character trace label\")\n        n, seen_labels, clashes = 200_000, set(), 0\n        for _ in range(n):\n            lab = TraceContext.create().child_label(\"auth\")\n            if lab in seen_labels:\n                clashes += 1\n            seen_labels.add(lab)\n        print(f\"{n} traces, child labels that repeated: {clashes} (birthday estimate about {n * n / 2 / 16 ** 8:.1f})\")\n        print(\"the full trace_id is 32 hex characters and is unique; only the shortened label can repeat, so search logs by the full id\")\n\n        section(\"9. Whole program: hooks + traced subagents + session store\")\n        store, log = SessionStore(), []\n        hooks = HookManager()\n        hooks.register(\"session_start\", lambda session_id, trace: log.append(f\"[SessionStart] session={session_id} trace={trace[:8]}\"))\n        hooks.register(\"pre_tool_use\", lambda agent, tool, arguments, **_: log.append(f\"[PreToolUse] agent={agent} tool={tool}\"))\n        hooks.register(\"post_tool_use\", lambda agent, tool, result, **_: log.append(f\"[PostToolUse] agent={agent} tool={tool}\"))\n        hooks.register(\"session_end\", lambda session_id, count: log.append(f\"[SessionEnd] session={session_id} summaries={count}\"))\n        base = build_registry(hooks)\n        for k in (\"auth\", \"billing\", \"search\"):\n            base.execute(\"write_file\", path=f\"agent_demo/{k}.txt\", content=f\"{k} notes\\n\" + f\"{k} detail \" * 50)\n        log.clear()\n        trace = TraceContext.create()\n        hooks.emit(\"session_start\", session_id=\"demo\", trace=trace.trace_id)\n\n        def child(name, path):\n            r = build_registry(hooks); r.agent = name\n            text = r.execute(\"read_file\", path=path)\n            store.append(f\"demo:subagent:{name}\", {\"role\": \"assistant\", \"content\": text[:20]})\n            return f\"{trace.child_label(name)} read {len(text)} chars\"\n        with ThreadPoolExecutor(max_workers=3) as pool:\n            futs = [pool.submit(child, f\"{k}-researcher\", f\"agent_demo/{k}.txt\") for k in (\"auth\", \"billing\", \"search\")]\n            summaries = [f.result() for f in futs]\n        hooks.emit(\"session_end\", session_id=\"demo\", count=len(summaries))\n        for line in log:\n            print(line)\n        print(summaries)\n        print(\"session keys:\", store.list_subkeys(\"demo\"))\n        print(\"the three PreToolUse lines carry an agent field but no trace id, so correlating them with the trace needs the thread or the call order\")\n    finally:\n        os.chdir(old)\n        shutil.rmtree(work, ignore_errors=True)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's session store demo ---\n[{'role': 'user', 'content': 'hello'}]\n['parent:subagent:a', 'parent:subagent:b']\n['parent', 'parent:subagent:a', 'parent:subagent:b']\n\n--- 2. Genuinely checking: hierarchical ids are strings, so names can collide ---\nsubkeys of p: ['p:subagent:x', 'p:subagent:x:subagent:y', 'p:subagent:z:subagent:q']\nlist_subkeys cannot tell a grandchild from a child whose name contains ':subagent:'\nafter delete('p:subagent:x'): ['p', 'p:subagent:z:subagent:q']\ndeleting a child also deleted its grandchild (prefix match), and the literal name ambiguity was never rejected\ndelete('job') leaves unrelated 'job2' and its child: ['job2', 'job2:subagent:a']\n\n--- 3. Genuinely measuring: the lock protects append, not a check-then-act sequence ---\nextra gate around next-number: False | messages 2400 | distinct numbers 1970 | duplicates 430\nextra gate around next-number: True  | messages 2400 | distinct numbers 2400 | duplicates 0\nevery append succeeded either way (no lost messages), but numbering computed from load() raced without a wider lock\n\n--- 4. Hooks: order, blocking and the audit trail ---\nwrite allowed file: Wrote 2 characters to notes.txt\nwrite protected/secret.txt: PermissionError: Write blocked\nhook calls in order: [('pre-A', 'write_file'), ('pre-B', 'write_file'), ('post', 'write_file'), ('pre-A', 'write_file')]\npre-B never ran for the blocked call (the first raising hook stops the chain) and no post event exists for it\nunknown event name: ValueError: Unknown hook event: pre_tool_usee\n\n--- 5. Genuinely checking: the blocking hook compares strings, not files ---\nexact spelling   string hook   blocked\nexact spelling   resolved hook blocked\nwith ..          string hook   WRITTEN\nwith ..          resolved hook blocked\nwith ./          string hook   WRITTEN\nwith ./          resolved hook blocked\nabsolute path    string hook   WRITTEN\nabsolute path    resolved hook blocked\nupper-case dir   string hook   WRITTEN\nupper-case dir   resolved hook blocked\non this case-insensitive Windows filesystem 'PROTECTED/secret.txt' is the same file; the resolved hook caught it because resolve() normalises the path\nthe string hook only blocked the one exact spelling\n\n--- 6. Genuinely checking: a hook that crashes ---\nfail_open=False: list_dir: ZeroDivisionError: division by zero\n   recorded hook errors: []\nfail_open=True: list_dir: ['notes.txt', 'protected']\n   recorded hook errors: ['pre_tool_use: ZeroDivisionError: division by zero']\na buggy logging hook stops every tool call when hooks fail closed; failing open keeps the agent running but must still re-raise real policy denials\n\n--- 7. Genuinely checking: does the trace reach worker threads ---\nplain submit   sees trace: None\ncopy_context   sees trace: 32b68f3e\na ContextVar set in the parent is invisible in a pool thread unless the context is copied; the lesson avoids this by passing TraceContext as an argument\n\n--- 8. Genuinely measuring: the 8-character trace label ---\n200000 traces, child labels that repeated: 4 (birthday estimate about 4.7)\nthe full trace_id is 32 hex characters and is unique; only the shortened label can repeat, so search logs by the full id\n\n--- 9. Whole program: hooks + traced subagents + session store ---\n[SessionStart] session=demo trace=c7ed363f\n[PreToolUse] agent=auth-researcher tool=read_file\n[PreToolUse] agent=billing-researcher tool=read_file\n[PreToolUse] agent=search-researcher tool=read_file\n[PostToolUse] agent=auth-researcher tool=read_file\n[PostToolUse] agent=billing-researcher tool=read_file\n[PostToolUse] agent=search-researcher tool=read_file\n[SessionEnd] session=demo summaries=3\n['c7ed363f:auth-researcher read 611 chars', 'c7ed363f:billing-researcher read 764 chars', 'c7ed363f:search-researcher read 713 chars']\nsession keys: ['demo:subagent:auth-researcher', 'demo:subagent:billing-researcher', 'demo:subagent:search-researcher']\nthe three PreToolUse lines carry an agent field but no trace id, so correlating them with the trace needs the thread or the call order"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Reading the Verified Output",
    "textKn": "ಪರಿಶೀಲಿತ Output ಓದುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Lock Protects append, Not Numbering Built on load",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Lock append ಅನ್ನು ರಕ್ಷಿಸುತ್ತದೆ, load ಮೇಲೆ ಕಟ್ಟಿದ ಸಂಖ್ಯೆಯನ್ನಲ್ಲ",
    "bodyEn": "Section 3: eight threads each added 300 messages numbered len(load)+1. All 2,400 messages were stored in both runs, so no append was lost. Without an outer gate only 1,970 distinct numbers appeared (430 duplicates); with one shared gate around the whole read-then-write, all 2,400 were distinct. The store's internal lock is correct for each call but cannot make a two-call sequence atomic. Section 2: child ids are plain strings, so list_subkeys listed a grandchild beside children, a child literally named \"z:subagent:q\" was indistinguishable from a grandchild, and delete(\"p:subagent:x\") also removed p:subagent:x:subagent:y by prefix. Deleting \"job\" left the unrelated \"job2\" intact.",
    "bodyKn": "ವಿಭಾಗ 3: ಎಂಟು threads ತಲಾ len(load)+1 ಎಂದು ಸಂಖ್ಯೆ ನೀಡಿದ 300 ಸಂದೇಶ ಸೇರಿಸಿದವು. ಎರಡೂ ಓಟಗಳಲ್ಲಿ ಎಲ್ಲಾ 2,400 ಸಂದೇಶಗಳು ಸಂಗ್ರಹವಾದವು, ಆದ್ದರಿಂದ ಯಾವುದೇ append ಕಳೆದುಹೋಗಲಿಲ್ಲ. ಹೊರಗಿನ gate ಇಲ್ಲದೆ ಕೇವಲ 1,970 ವಿಭಿನ್ನ ಸಂಖ್ಯೆಗಳು ಕಾಣಿಸಿದವು (430 ನಕಲು); ಓದು-ನಂತರ-ಬರೆ ಸಂಪೂರ್ಣಕ್ಕೆ ಒಂದು ಹಂಚಿದ gate ಇದ್ದಾಗ ಎಲ್ಲಾ 2,400 ವಿಭಿನ್ನವಾಗಿದ್ದವು. Store ನ ಆಂತರಿಕ lock ಪ್ರತಿ ಕರೆಗೆ ಸರಿ ಆದರೆ ಎರಡು-ಕರೆಯ ಅನುಕ್ರಮವನ್ನು ಅಣುವಾಗಿಸಲಾಗದು. ವಿಭಾಗ 2: ಮಗು id ಗಳು ಸಾದಾ ಸ್ಟ್ರಿಂಗ್‌ಗಳಾದ್ದರಿಂದ list_subkeys ಮೊಮ್ಮಗುವನ್ನು ಮಕ್ಕಳ ಪಕ್ಕ ಪಟ್ಟಿ ಮಾಡಿತು, \"z:subagent:q\" ಎಂಬ ಹೆಸರಿನ ಮಗು ಮೊಮ್ಮಗುವಿನಿಂದ ಬೇರ್ಪಡಿಸಲಾಗಲಿಲ್ಲ, ಮತ್ತು delete(\"p:subagent:x\") ಪೂರ್ವಪ್ರತ್ಯಯದಿಂದ p:subagent:x:subagent:y ಅನ್ನೂ ತೆಗೆಯಿತು. \"job\" ಅಳಿಸಿದಾಗ ಸಂಬಂಧವಿಲ್ಲದ \"job2\" ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A String-Matching Hook Blocks One Spelling",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸ್ಟ್ರಿಂಗ್-ಹೊಂದಾಣಿಕೆ hook ಒಂದು ಕಾಗುಣಿತ ಮಾತ್ರ ತಡೆಯುತ್ತದೆ",
    "bodyEn": "Section 5: the lesson-style hook that compares the path with one literal blocked only the exact spelling \"protected/secret.txt\". The same file written as \"protected/../protected/secret.txt\", \"./protected/secret.txt\", an absolute path or \"PROTECTED/secret.txt\" was WRITTEN. The resolved-path hook blocked all five. The upper-case case depends on the filesystem (this run was on Windows, which ignores case). Section 4: the first raising hook stopped the chain, so a hook registered after it never ran, and a blocked call produced no post event.",
    "bodyKn": "ವಿಭಾಗ 5: ಮಾರ್ಗವನ್ನು ಒಂದು literal ಜೊತೆ ಹೋಲಿಸುವ ಲೆಸನ್-ಶೈಲಿಯ hook ಕೇವಲ ನಿಖರ ಕಾಗುಣಿತ \"protected/secret.txt\" ತಡೆಯಿತು. ಅದೇ ಫೈಲ್ ಅನ್ನು \"protected/../protected/secret.txt\", \"./protected/secret.txt\", ಸಂಪೂರ್ಣ ಮಾರ್ಗ ಅಥವಾ \"PROTECTED/secret.txt\" ಎಂದು ಬರೆದಾಗ ಬರೆಯಲಾಯಿತು. Resolve ಮಾರ್ಗ hook ಎಲ್ಲಾ ಐದನ್ನೂ ತಡೆಯಿತು. ದೊಡ್ಡಕ್ಷರ ಪ್ರಕರಣ ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಮೇಲೆ ಅವಲಂಬಿತ (ಈ ಓಟ Windows ನಲ್ಲಿ, ಅದು ಕೇಸ್ ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ). ವಿಭಾಗ 4: ಮೊದಲ ಎತ್ತುವ hook ಸರಪಳಿ ನಿಲ್ಲಿಸಿತು, ಆದ್ದರಿಂದ ಅದರ ನಂತರ ನೋಂದಾಯಿಸಿದ hook ಚಲಿಸಲಿಲ್ಲ ಮತ್ತು ತಡೆದ ಕರೆ post ಘಟನೆ ನೀಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Crashing Hooks, Lost Context and Short Labels",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಕುಸಿಯುವ Hooks, ಕಳೆದುಹೋದ Context ಮತ್ತು ಚಿಕ್ಕ Labels",
    "bodyEn": "Section 6: a hook that divided by zero made list_dir fail when hooks fail closed; with fail_open the call succeeded and the error was recorded. Section 7: a ContextVar set in the parent was None inside a plain pool.submit worker and visible only through contextvars.copy_context().run, so the trace has to be passed as an argument or the context copied. Section 8: the 8-character label from the trace id repeated 4 times in 200,000 traces (about 4.7 expected), while the full 32-hex id stays unique. Section 9: the three PreToolUse lines carry an agent but no trace id, and the post lines arrived in a different order from the pre lines because the children ran concurrently.",
    "bodyKn": "ವಿಭಾಗ 6: ಶೂನ್ಯದಿಂದ ಭಾಗಿಸಿದ hook hooks fail closed ಆಗಿದ್ದಾಗ list_dir ವಿಫಲಗೊಳಿಸಿತು; fail_open ಇದ್ದಾಗ ಕರೆ ಯಶಸ್ವಿಯಾಗಿ ದೋಷ ದಾಖಲಾಯಿತು. ವಿಭಾಗ 7: ಪೋಷಕದಲ್ಲಿ ಹೊಂದಿಸಿದ ContextVar ಸಾದಾ pool.submit ಕೆಲಸಗಾರನೊಳಗೆ None ಆಗಿತ್ತು ಮತ್ತು contextvars.copy_context().run ಮೂಲಕ ಮಾತ್ರ ಕಾಣಿಸಿತು, ಆದ್ದರಿಂದ trace ಅನ್ನು ಆರ್ಗ್ಯುಮೆಂಟ್ ಆಗಿ ನೀಡಬೇಕು ಅಥವಾ context ನಕಲಿಸಬೇಕು. ವಿಭಾಗ 8: trace id ಯ 8-ಅಕ್ಷರದ label 200,000 traces ನಲ್ಲಿ 4 ಬಾರಿ ಪುನರಾವರ್ತನೆಯಾಯಿತು (ಸುಮಾರು 4.7 ನಿರೀಕ್ಷೆ), ಪೂರ್ಣ 32-hex id ಅನನ್ಯವಾಗಿ ಉಳಿಯುತ್ತದೆ. ವಿಭಾಗ 9: ಮೂರು PreToolUse ಸಾಲುಗಳು agent ಹೊಂದಿವೆ ಆದರೆ trace id ಇಲ್ಲ, ಮತ್ತು ಮಕ್ಕಳು ಏಕಕಾಲಿಕವಾಗಿ ಚಲಿಸಿದ ಕಾರಣ post ಸಾಲುಗಳು pre ಸಾಲುಗಳಿಗಿಂತ ಬೇರೆ ಕ್ರಮದಲ್ಲಿ ಬಂದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "What This Model Does Not Prove",
    "headingKn": "ಈ ಮಾದರಿ ಏನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ",
    "bodyEn": "Nothing here calls the real Claude Agent SDK or a real model. The subagents are scripted workers that read a file and return a summary, and the race and timing results are specific to CPython threads and this machine. What the lab does show is where a harness's own bookkeeping (ids, locks, hook order, context) can go wrong independent of the model.",
    "bodyKn": "ಇಲ್ಲಿ ಯಾವುದೂ ನಿಜವಾದ Claude Agent SDK ಅಥವಾ ನಿಜವಾದ ಮಾದರಿಯನ್ನು ಕರೆಯುವುದಿಲ್ಲ. Subagents ಫೈಲ್ ಓದಿ ಸಾರಾಂಶ ಮರಳಿಸುವ ಸ್ಕ್ರಿಪ್ಟ್ ಕೆಲಸಗಾರರು, ಮತ್ತು ಓಟ ಹಾಗೂ ಸಮಯದ ಫಲಿತಾಂಶಗಳು CPython threads ಮತ್ತು ಈ ಯಂತ್ರಕ್ಕೆ ನಿರ್ದಿಷ್ಟ. ಮಾದರಿಯನ್ನು ಅವಲಂಬಿಸದೆ harness ನ ತನ್ನದೇ ಲೆಕ್ಕಾಚಾರ (ids, locks, hook ಕ್ರಮ, context) ಎಲ್ಲಿ ತಪ್ಪಬಹುದು ಎಂಬುದನ್ನು ಲ್ಯಾಬ್ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Sessions, hooks and traces are what let a team trust and debug an agent run. Each is a small piece of bookkeeping whose edge cases (ids, ordering, failure policy, context) decide whether the safety and audit story actually holds.",
    "bodyKn": "Sessions, hooks ಮತ್ತು traces ತಂಡವು agent ಓಟವನ್ನು ನಂಬಲು ಮತ್ತು ಡೀಬಗ್ ಮಾಡಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ. ಪ್ರತಿಯೊಂದೂ ಸಣ್ಣ ಲೆಕ್ಕಾಚಾರದ ತುಣುಕು, ಅದರ ಅಂಚಿನ ಪ್ರಕರಣಗಳು (ids, ಕ್ರಮ, ವೈಫಲ್ಯ ನೀತಿ, context) ಸುರಕ್ಷತೆ ಮತ್ತು audit ಕಥೆ ನಿಜವಾಗಿ ನಿಲ್ಲುತ್ತದೆಯೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a lock inside the store makes concurrent use safe.\" It protected each append, but numbering built from load() still produced 430 duplicates until one gate covered both steps.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"store ಒಳಗಿನ lock ಏಕಕಾಲಿಕ ಬಳಕೆಯನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುತ್ತದೆ.\" ಅದು ಪ್ರತಿ append ಅನ್ನು ರಕ್ಷಿಸಿತು, ಆದರೆ load() ನಿಂದ ಕಟ್ಟಿದ ಸಂಖ್ಯೆ ಎರಡೂ ಹಂತಗಳನ್ನು ಒಂದು gate ಆವರಿಸುವವರೆಗೆ 430 ನಕಲು ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Session store: messages by hierarchical id. Hook: a function run at a named event. Fail closed: a hook error blocks the call. Fail open: the error is recorded and the call proceeds. Trace id: one value linking a run's work. ContextVar: per-context state that does not cross threads by itself.",
    "bodyKn": "Session store: ಶ್ರೇಣೀಕೃತ id ಯ ಸಂದೇಶಗಳು. Hook: ಹೆಸರಿನ ಘಟನೆಯಲ್ಲಿ ಚಲಿಸುವ ಕಾರ್ಯ. Fail closed: hook ದೋಷ ಕರೆ ತಡೆಯುತ್ತದೆ. Fail open: ದೋಷ ದಾಖಲಾಗಿ ಕರೆ ಮುಂದುವರಿಯುತ್ತದೆ. Trace id: ಓಟದ ಕೆಲಸ ಜೋಡಿಸುವ ಒಂದು ಮೌಲ್ಯ. ContextVar: ತಾನಾಗಿ threads ದಾಟದ ಪ್ರತಿ-context state."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) 2,400 appends all landed, but numbering from load() gave 430 duplicates without a wider gate. 2) Prefix-based child ids cannot distinguish names containing \":subagent:\". 3) A literal-match hook blocked 1 of 5 spellings; the resolved-path hook blocked all 5. 4) A crashing hook breaks every call when hooks fail closed. 5) A ContextVar does not reach pool threads unless copied. 6) 8-character trace labels repeated 4 times in 200,000.",
    "bodyKn": "1) ಎಲ್ಲಾ 2,400 appends ಸೇರಿದವು, ಆದರೆ ವಿಶಾಲ gate ಇಲ್ಲದೆ load() ನಿಂದ ಸಂಖ್ಯೆ 430 ನಕಲು ನೀಡಿತು. 2) ಪೂರ್ವಪ್ರತ್ಯಯ-ಆಧಾರಿತ ಮಗು id \":subagent:\" ಹೊಂದಿದ ಹೆಸರುಗಳನ್ನು ಬೇರ್ಪಡಿಸಲಾಗದು. 3) Literal-ಹೊಂದಾಣಿಕೆ hook 5 ಕಾಗುಣಿತಗಳಲ್ಲಿ 1 ತಡೆಯಿತು; resolve ಮಾರ್ಗ hook ಎಲ್ಲಾ 5 ತಡೆಯಿತು. 4) hooks fail closed ಆದಾಗ ಕುಸಿಯುವ hook ಪ್ರತಿ ಕರೆ ಮುರಿಯುತ್ತದೆ. 5) ContextVar ನಕಲಿಸದಿದ್ದರೆ pool threads ತಲುಪುವುದಿಲ್ಲ. 6) 8-ಅಕ್ಷರದ trace labels 200,000 ರಲ್ಲಿ 4 ಬಾರಿ ಪುನರಾವರ್ತನೆಯಾದವು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did numbering from load() give 430 duplicates even with a locked store?",
      "qKn": "Locked store ಇದ್ದರೂ load() ನಿಂದ ಸಂಖ್ಯೆ 430 ನಕಲು ಏಕೆ ನೀಡಿತು?",
      "opts": [
       "The lock was broken",
       "The lock covers one call, not the read-then-write sequence",
       "Threads were disabled",
       "Messages were lost"
      ],
      "optsKn": [
       "Lock ಮುರಿದಿತ್ತು",
       "Lock ಒಂದು ಕರೆಯನ್ನು ಆವರಿಸುತ್ತದೆ, ಓದು-ನಂತರ-ಬರೆ ಅನುಕ್ರಮವನ್ನಲ್ಲ",
       "Threads ನಿಷ್ಕ್ರಿಯವಾಗಿದ್ದವು",
       "ಸಂದೇಶಗಳು ಕಳೆದುಹೋದವು"
      ],
      "correct": 1
     },
     {
      "q": "How many of the five path spellings did the literal-match hook block?",
      "qKn": "Literal-ಹೊಂದಾಣಿಕೆ hook ಐದು ಮಾರ್ಗ ಕಾಗುಣಿತಗಳಲ್ಲಿ ಎಷ್ಟು ತಡೆಯಿತು?",
      "opts": [
       "All five",
       "One",
       "Three",
       "None"
      ],
      "optsKn": [
       "ಎಲ್ಲಾ ಐದು",
       "ಒಂದು",
       "ಮೂರು",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What did a ContextVar look like inside a plain pool.submit worker?",
      "qKn": "ಸಾದಾ pool.submit ಕೆಲಸಗಾರನೊಳಗೆ ContextVar ಹೇಗೆ ಕಂಡಿತು?",
      "opts": [
       "It held the parent's trace",
       "It was None; only copy_context().run showed the trace",
       "It raised",
       "It was a list"
      ],
      "optsKn": [
       "ಪೋಷಕನ trace ಹೊಂದಿತ್ತು",
       "ಅದು None ಆಗಿತ್ತು; copy_context().run ಮಾತ್ರ trace ತೋರಿಸಿತು",
       "ದೋಷ ಎತ್ತಿತು",
       "ಅದು ಪಟ್ಟಿ ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What did fail_open change when a hook divided by zero?",
      "qKn": "Hook ಶೂನ್ಯದಿಂದ ಭಾಗಿಸಿದಾಗ fail_open ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "Nothing",
       "The tool call succeeded and the hook error was recorded",
       "The hook was deleted",
       "It blocked all calls"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "Tool ಕರೆ ಯಶಸ್ವಿಯಾಗಿ hook ದೋಷ ದಾಖಲಾಯಿತು",
       "Hook ಅಳಿಸಲಾಯಿತು",
       "ಎಲ್ಲಾ ಕರೆ ತಡೆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why should logs be searched by the full trace id?",
      "qKn": "Logs ಅನ್ನು ಪೂರ್ಣ trace id ಯಿಂದ ಏಕೆ ಹುಡುಕಬೇಕು?",
      "opts": [
       "It is shorter",
       "The 8-character label repeated 4 times in 200,000 traces; the 32-hex id stayed unique",
       "Labels are encrypted",
       "The label is private"
      ],
      "optsKn": [
       "ಅದು ಚಿಕ್ಕದು",
       "8-ಅಕ್ಷರದ label 200,000 traces ನಲ್ಲಿ 4 ಬಾರಿ ಪುನರಾವರ್ತನೆಯಾಯಿತು; 32-hex id ಅನನ್ಯವಾಗಿತ್ತು",
       "Labels ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿವೆ",
       "Label ಖಾಸಗಿ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
