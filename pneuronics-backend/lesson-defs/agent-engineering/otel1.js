module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b321550",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "OpenTelemetry for GenAI Agents: Spans, Attributes and Content (Part 1 of 3) — Spans, Hierarchy and Kinds",
 "titleKn": "GenAI Agents ಗಾಗಿ OpenTelemetry: Spans, Attributes ಮತ್ತು ವಿಷಯ (ಭಾಗ 1 / 3) — Spans, ಶ್ರೇಣಿ ಮತ್ತು Kinds",
 "desc": "Build Span and build_tree, then test orphans, invalid kinds, double finishing, 8-hex span-id collisions, wall versus monotonic clocks, span-name cardinality and local versus remote agent kinds.",
 "descKn": "Span ಮತ್ತು build_tree ನಿರ್ಮಿಸಿ, ನಂತರ orphans, ಅಮಾನ್ಯ kinds, ಎರಡು ಬಾರಿ finish, 8-hex span-id ಘರ್ಷಣೆ, ಗೋಡೆ ಮತ್ತು ಏಕಮುಖ ಗಡಿಯಾರಗಳು, span-ಹೆಸರಿನ ವೈವಿಧ್ಯ ಮತ್ತು ಸ್ಥಳೀಯ ಹಾಗೂ ದೂರದ agent kinds ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Name the three GenAI span categories.",
  "Build a trace tree from parent ids.",
  "Choose INTERNAL or CLIENT correctly.",
  "Keep variable values out of span names.",
  "Use a monotonic clock for durations."
 ],
 "objectivesKn": [
  "ಮೂರು GenAI span ವರ್ಗಗಳನ್ನು ಹೆಸರಿಸಿ.",
  "Parent ids ನಿಂದ trace ಮರ ನಿರ್ಮಿಸಿ.",
  "INTERNAL ಅಥವಾ CLIENT ಸರಿಯಾಗಿ ಆರಿಸಿ.",
  "ಬದಲಾಗುವ ಮೌಲ್ಯಗಳನ್ನು span ಹೆಸರುಗಳಿಂದ ಹೊರಗಿಡಿ.",
  "ಅವಧಿಗೆ ಏಕಮುಖ ಗಡಿಯಾರ ಬಳಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "OpenTelemetry for GenAI Agents: Spans, Attributes and Content (Part 1 of 3)",
    "textKn": "GenAI Agents ಗಾಗಿ OpenTelemetry: Spans, Attributes ಮತ್ತು ವಿಷಯ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: spans, parent-child structure, naming and kinds. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind the OpenTelemetry GenAI semantic conventions, not the real software, and the agent, model and tools are scripted stand-ins and no OpenTelemetry SDK or exporter is used, so no real LLM behaviour is measured. The pasted lesson describes the GenAI span categories and a hand-built Span class. This lab rebuilds the Span and probes it; it does not use the OpenTelemetry SDK and states nothing about the exact current text of the convention, which is still evolving. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: spans, parent-child ರಚನೆ, ಹೆಸರಿಸುವಿಕೆ ಮತ್ತು kinds. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು OpenTelemetry GenAI semantic conventions ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agent, ಮಾದರಿ ಮತ್ತು tools ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು ಮತ್ತು ಯಾವುದೇ OpenTelemetry SDK ಅಥವಾ exporter ಬಳಸಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಲೆಸನ್ GenAI span ವರ್ಗಗಳು ಮತ್ತು ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ Span ವರ್ಗ ವಿವರಿಸುತ್ತದೆ. ಈ ಲ್ಯಾಬ್ Span ಮರುನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ; ಇದು OpenTelemetry SDK ಬಳಸುವುದಿಲ್ಲ ಮತ್ತು ಇನ್ನೂ ವಿಕಸಿಸುತ್ತಿರುವ convention ನ ಸದ್ಯದ ನಿಖರ ಪಠ್ಯದ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Run as a Tree of Spans",
    "textKn": "ಒಂದು ಓಟ spans ನ ಮರವಾಗಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Standard Names Matter",
    "headingKn": "ಪ್ರಮಾಣಿತ ಹೆಸರುಗಳು ಏಕೆ ಮುಖ್ಯ",
    "bodyEn": "A trace is a tree of timed spans. For agent systems the conventions name three categories: invoke_agent for an agent run, chat (or another operation) for a model call and execute_tool for a tool call. A local agent running in your process is an INTERNAL span; a remote agent service you call over the network is a CLIENT span; model calls are CLIENT spans. Standard names and kinds let one dashboard read traces from different frameworks. This part builds Span and build_tree and tests everything a hand-built version gets wrong.",
    "bodyKn": "Trace ಎಂದರೆ ಸಮಯ ಅಳತೆಯ spans ನ ಮರ. Agent ವ್ಯವಸ್ಥೆಗಳಿಗೆ conventions ಮೂರು ವರ್ಗಗಳನ್ನು ಹೆಸರಿಸುತ್ತವೆ: agent ಓಟಕ್ಕೆ invoke_agent, ಮಾದರಿ ಕರೆಗೆ chat (ಅಥವಾ ಬೇರೆ operation) ಮತ್ತು tool ಕರೆಗೆ execute_tool. ನಿಮ್ಮ process ನಲ್ಲಿ ಚಲಿಸುವ ಸ್ಥಳೀಯ agent INTERNAL span; ನೆಟ್‌ವರ್ಕ್ ಮೂಲಕ ಕರೆಯುವ ದೂರದ agent ಸೇವೆ CLIENT span; ಮಾದರಿ ಕರೆಗಳು CLIENT spans. ಪ್ರಮಾಣಿತ ಹೆಸರು ಮತ್ತು kinds ಒಂದು dashboard ಗೆ ಬೇರೆ ಬೇರೆ frameworks ನ traces ಓದಲು ಅವಕಾಶ ನೀಡುತ್ತವೆ. ಈ ಭಾಗ Span ಮತ್ತು build_tree ನಿರ್ಮಿಸಿ ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ ಆವೃತ್ತಿ ತಪ್ಪುವ ಎಲ್ಲವನ್ನೂ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Agent, Model and Tool Spans",
    "headingKn": "Agent, ಮಾದರಿ ಮತ್ತು Tool Spans",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Agent, model and tool spans form a tree</text><rect x=\"100\" y=\"26\" width=\"100\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"41\" fill=\"#e2e8f0\" text-anchor=\"middle\">invoke_agent</text><text x=\"150\" y=\"53\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">INTERNAL (local)</text><rect x=\"10\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">chat model</text><text x=\"50\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">CLIENT</text><rect x=\"110\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">execute_tool</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">INTERNAL</text><rect x=\"210\" y=\"110\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"250\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">chat model</text><text x=\"250\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">CLIENT</text><path d=\"M130,60 L50,110 M150,60 V110 M170,60 L250,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">parent_id recorded at start time is what makes the tree</text></svg>",
    "captionEn": "The tree exists only because each child recorded its parent.",
    "captionKn": "ಪ್ರತಿ ಮಗು ತನ್ನ ಪೋಷಕನನ್ನು ದಾಖಲಿಸಿದ್ದರಿಂದಲೇ ಮರ ಇದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The three span categories",
    "headingKn": "ಮೂರು span ವರ್ಗಗಳು",
    "headers": [
     "Span",
     "Typical kind",
     "Name pattern"
    ],
    "rows": [
     [
      "agent run",
      "INTERNAL (local) or CLIENT (remote service)",
      "invoke_agent <agent name>"
     ],
     [
      "model call",
      "CLIENT",
      "chat <model>"
     ],
     [
      "tool call",
      "INTERNAL",
      "execute_tool <tool name>"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building Span and the Tree",
    "textKn": "Span ಮತ್ತು ಮರ ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "otel_1.py",
    "headingEn": "Span and build_tree",
    "headingKn": "Span ಮತ್ತು build_tree",
    "descEn": "Span carries name, kind, attributes, parent id, its own id and start and end times from perf_counter. build_tree links children to parents by id and returns the roots and the orphans, spans whose parent id was never seen.",
    "descKn": "Span name, kind, attributes, ಪೋಷಕ id, ತನ್ನ id ಮತ್ತು perf_counter ನ ಆರಂಭ ಹಾಗೂ ಅಂತ್ಯ ಸಮಯ ಹೊಂದಿದೆ. build_tree ಮಕ್ಕಳನ್ನು id ಮೂಲಕ ಪೋಷಕರಿಗೆ ಜೋಡಿಸಿ roots ಮತ್ತು orphans (ಪೋಷಕ id ಎಂದೂ ಕಾಣದ spans) ಮರಳಿಸುತ್ತದೆ.",
    "code": "KINDS = (\"INTERNAL\", \"CLIENT\", \"SERVER\", \"PRODUCER\", \"CONSUMER\")\n\n\n@dataclass\nclass Span:\n    name: str\n    kind: str = \"INTERNAL\"\n    attributes: dict = field(default_factory=dict)\n    parent_id: Optional[str] = None\n    span_id: str = field(default_factory=lambda: uuid.uuid4().hex[:8])\n    start: float = field(default_factory=time.perf_counter)\n    end: Optional[float] = None\n    children: list = field(default_factory=list)\n\n    def finish(self):\n        self.end = time.perf_counter()\n\n    @property\n    def duration_ms(self):\n        return None if self.end is None else (self.end - self.start) * 1000\n\n\ndef build_tree(spans):\n    \"\"\"Returns (roots, orphans). A span whose parent id is not in the list is an orphan.\"\"\"\n    by_id = {s.span_id: s for s in spans}\n    roots, orphans = [], []\n    for s in spans:\n        s.children = []\n    for s in spans:\n        if s.parent_id is None:\n            roots.append(s)\n        elif s.parent_id in by_id:\n            by_id[s.parent_id].children.append(s)\n        else:\n            orphans.append(s)\n    return roots, orphans\n\n\ndef depth_of(span, by_id, limit=50):\n    d = 0\n    while span.parent_id is not None and d < limit:\n        span = by_id.get(span.parent_id)\n        if span is None:\n            return None\n        d += 1\n    return d if d < limit else \"cycle\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "otel_1.py",
    "headingEn": "main(): seven experiments",
    "headingKn": "main(): ಏಳು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() builds the three-span hierarchy, removes parent ids, checks what a Span accepts, counts id collisions at 8 hex characters, contrasts the wall clock with a monotonic clock, counts span-name cardinality and compares local and remote agent kinds.",
    "descKn": "main() ಮೂರು-span ಶ್ರೇಣಿ ನಿರ್ಮಿಸುತ್ತದೆ, ಪೋಷಕ ids ತೆಗೆಯುತ್ತದೆ, Span ಏನು ಸ್ವೀಕರಿಸುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, 8 hex ಅಕ್ಷರಗಳಲ್ಲಿ id ಘರ್ಷಣೆ ಎಣಿಸುತ್ತದೆ, ಗೋಡೆ ಗಡಿಯಾರವನ್ನು ಏಕಮುಖ ಗಡಿಯಾರದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, span-ಹೆಸರಿನ ವೈವಿಧ್ಯ ಎಣಿಸುತ್ತದೆ ಮತ್ತು ಸ್ಥಳೀಯ ಹಾಗೂ ದೂರದ agent kinds ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef render(span, indent=0):\n    print(f\"{'  ' * indent}{span.name} [{span.kind}] id={span.span_id}\")\n    for c in span.children:\n        render(c, indent + 1)\n\n\ndef main():\n    section(\"1. The lesson's hierarchy as data\")\n    root = Span(\"invoke_agent researcher\", \"INTERNAL\", {\"gen_ai.operation.name\": \"invoke_agent\", \"gen_ai.agent.name\": \"researcher\"})\n    chat = Span(\"chat gpt-4o\", \"CLIENT\", {\"gen_ai.operation.name\": \"chat\"}, parent_id=root.span_id)\n    tool = Span(\"execute_tool search\", \"INTERNAL\", {\"gen_ai.operation.name\": \"execute_tool\"}, parent_id=root.span_id)\n    for s in (chat, tool, root):\n        s.finish()\n    roots, orphans = build_tree([root, chat, tool])\n    for r in roots:\n        render(r)\n    print(\"roots:\", len(roots), \"| orphans:\", len(orphans))\n\n    section(\"2. Genuinely checking: a flat list of spans without parent ids says nothing about structure\")\n    a, b, c = Span(\"invoke_agent x\"), Span(\"chat m\"), Span(\"execute_tool t\")\n    roots, orphans = build_tree([a, b, c])\n    print(\"three spans with no parent ids -> roots:\", len(roots), \"| orphans:\", len(orphans))\n    print(\"every span became its own root: the tree exists only if parent_id was recorded when the span started\")\n    lost = Span(\"chat m\", parent_id=\"deadbeef\")\n    roots, orphans = build_tree([a, lost])\n    print(\"a child whose parent was never exported -> roots:\", len(roots), \"| orphans:\", len(orphans), \"(its parent id is\", lost.parent_id + \")\")\n\n    section(\"3. Genuinely checking: a Span accepts values it should not\")\n    s = Span(\"x\", kind=\"BANANA\")\n    print(\"kind='BANANA' accepted:\", s.kind not in KINDS)\n    s.finish(); first = s.end\n    time.sleep(0.01); s.finish()\n    print(\"finish() twice moved the end time by\", f\"{(s.end - first) * 1000:.1f} ms\", \"(the span silently grew)\")\n    s.attributes[\"gen_ai.request.model\"] = \"late-edit\"\n    print(\"attributes changed after finish:\", s.attributes)\n    print(\"nothing in the dataclass stops invalid kinds, double finishing or edits after the span has ended\")\n\n    section(\"4. Genuinely measuring: span-id collisions at 8 hex characters\")\n    for n in (10_000, 100_000, 400_000):\n        seen, clashes = set(), 0\n        for _ in range(n):\n            i = uuid.uuid4().hex[:8]\n            clashes += i in seen\n            seen.add(i)\n        print(f\"{n:>8} ids: {clashes} repeated (birthday estimate {n * n / 2 / 16 ** 8:.1f})\")\n    print(\"OpenTelemetry span ids are 64 bits (16 hex characters); at 8 characters a busy service would link unrelated spans\")\n    p1, p2 = Span(\"invoke_agent first\", span_id=\"aaaa1111\"), Span(\"invoke_agent second\", span_id=\"aaaa1111\")\n    kid = Span(\"chat m\", parent_id=\"aaaa1111\")\n    build_tree([p1, p2, kid])\n    print(\"two parents share id aaaa1111; the child's parent list: first has\", len(p1.children), \"child, second has\", len(p2.children),\n          \"-> it was attached to\", \"the second\" if p2.children else \"the first\")\n    print(\"a clash attaches the child to whichever span was indexed last, with no error, so the tree is silently wrong\")\n\n    section(\"5. Genuinely checking: wall clock versus monotonic clock for durations\")\n    t0 = time.time()\n    fake_wall_after_adjustment = t0 - 2.0\n    print(f\"if the wall clock is stepped back 2 s mid-span, time.time() reports a duration of {(fake_wall_after_adjustment - t0) * 1000:.0f} ms\")\n    m0 = time.perf_counter(); time.sleep(0.02); m1 = time.perf_counter()\n    print(f\"perf_counter() measured {(m1 - m0) * 1000:.1f} ms and cannot go backwards\")\n    print(\"the wall-clock step is simulated by subtracting 2 s, not by changing the system clock, so it shows what such a step would do to a duration\")\n\n    section(\"6. Genuinely measuring: span-name cardinality\")\n    rng = random.Random(5)\n    users = [f\"user-{rng.randint(1, 5000)}\" for _ in range(2000)]\n    bad = {f\"invoke_agent {u}\" for u in users}\n    good = {\"invoke_agent researcher\" for _ in users}\n    print(f\"2000 requests, name includes the user id: {len(bad)} distinct span names | name is the agent name and the user is an attribute: {len(good)}\")\n    print(\"names are what dashboards group by; per-user names made 1,618 groups from 2,000 requests, so put variable values in attributes\")\n\n    section(\"7. Genuinely checking: local versus remote agent kind\")\n    local = Span(\"invoke_agent researcher\", \"INTERNAL\")\n    remote = Span(\"invoke_agent planner\", \"CLIENT\", {\"server.address\": \"agents.example.internal\"})\n    print(f\"local agent in-process -> {local.kind}; remote agent service over the network -> {remote.kind}\")\n    wrong = [Span(\"invoke_agent planner\", \"INTERNAL\") for _ in range(3)] + [Span(\"invoke_agent planner\", \"CLIENT\") for _ in range(7)]\n    client_share = sum(s.kind == \"CLIENT\" for s in wrong) / len(wrong)\n    print(f\"if 3 of 10 remote calls are recorded as INTERNAL, a 'client call' dashboard sees {client_share:.0%} of them\")\n    print(\"kind is not decoration; backends use it to separate network calls from in-process work, so it has to follow where the work runs\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The lesson's hierarchy as data ---\ninvoke_agent researcher [INTERNAL] id=e2ceebc1\n  chat gpt-4o [CLIENT] id=dde51c61\n  execute_tool search [INTERNAL] id=b510246c\nroots: 1 | orphans: 0\n\n--- 2. Genuinely checking: a flat list of spans without parent ids says nothing about structure ---\nthree spans with no parent ids -> roots: 3 | orphans: 0\nevery span became its own root: the tree exists only if parent_id was recorded when the span started\na child whose parent was never exported -> roots: 1 | orphans: 1 (its parent id is deadbeef)\n\n--- 3. Genuinely checking: a Span accepts values it should not ---\nkind='BANANA' accepted: True\nfinish() twice moved the end time by 10.3 ms (the span silently grew)\nattributes changed after finish: {'gen_ai.request.model': 'late-edit'}\nnothing in the dataclass stops invalid kinds, double finishing or edits after the span has ended\n\n--- 4. Genuinely measuring: span-id collisions at 8 hex characters ---\n   10000 ids: 0 repeated (birthday estimate 0.0)\n  100000 ids: 0 repeated (birthday estimate 1.2)\n  400000 ids: 21 repeated (birthday estimate 18.6)\nOpenTelemetry span ids are 64 bits (16 hex characters); at 8 characters a busy service would link unrelated spans\ntwo parents share id aaaa1111; the child's parent list: first has 0 child, second has 1 -> it was attached to the second\na clash attaches the child to whichever span was indexed last, with no error, so the tree is silently wrong\n\n--- 5. Genuinely checking: wall clock versus monotonic clock for durations ---\nif the wall clock is stepped back 2 s mid-span, time.time() reports a duration of -2000 ms\nperf_counter() measured 20.4 ms and cannot go backwards\nthe wall-clock step is simulated by subtracting 2 s, not by changing the system clock, so it shows what such a step would do to a duration\n\n--- 6. Genuinely measuring: span-name cardinality ---\n2000 requests, name includes the user id: 1618 distinct span names | name is the agent name and the user is an attribute: 1\nnames are what dashboards group by; per-user names made 1,618 groups from 2,000 requests, so put variable values in attributes\n\n--- 7. Genuinely checking: local versus remote agent kind ---\nlocal agent in-process -> INTERNAL; remote agent service over the network -> CLIENT\nif 3 of 10 remote calls are recorded as INTERNAL, a 'client call' dashboard sees 70% of them\nkind is not decoration; backends use it to separate network calls from in-process work, so it has to follow where the work runs"
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
    "headingEn": "Genuinely Found: Structure Exists Only if the Parent Was Recorded, and IDs Must Be Wide",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪೋಷಕ ದಾಖಲಾಗಿದ್ದರೆ ಮಾತ್ರ ರಚನೆ ಇರುತ್ತದೆ, ಮತ್ತು ids ಅಗಲವಾಗಿರಬೇಕು",
    "bodyEn": "Section 2: three spans with no parent ids became 3 roots and 0 orphans, a flat list with no tree; a child whose parent was never exported became an orphan. Section 4: with 8-hex-character ids, 400,000 spans produced 21 repeated ids (the birthday estimate is 18.6), none at 10,000 or 100,000 in this run. When two parents shared the id aaaa1111, the child was attached to the second one with no error, so the tree is silently wrong. OpenTelemetry span ids are 64 bits, 16 hex characters.",
    "bodyKn": "ವಿಭಾಗ 2: ಪೋಷಕ ids ಇಲ್ಲದ ಮೂರು spans 3 roots ಮತ್ತು 0 orphans ಆದವು, ಮರವಿಲ್ಲದ ಸಮತಟ್ಟಾದ ಪಟ್ಟಿ; ಪೋಷಕ ಎಂದೂ ರಫ್ತಾಗದ ಮಗು orphan ಆಯಿತು. ವಿಭಾಗ 4: 8-hex-ಅಕ್ಷರ ids ಜೊತೆ 400,000 spans 21 ಪುನರಾವರ್ತಿತ ids ನೀಡಿತು (ಜನ್ಮದಿನ ಅಂದಾಜು 18.6), ಈ ಓಟದಲ್ಲಿ 10,000 ಮತ್ತು 100,000 ರಲ್ಲಿ ಯಾವುದೂ ಇಲ್ಲ. ಇಬ್ಬರು ಪೋಷಕರು id aaaa1111 ಹಂಚಿಕೊಂಡಾಗ ಮಗು ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ ಎರಡನೆಯದಕ್ಕೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಮರ ಮೌನವಾಗಿ ತಪ್ಪು. OpenTelemetry span ids 64 ಬಿಟ್, 16 hex ಅಕ್ಷರಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Class Accepts Nonsense; Names and Kinds Carry Meaning",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವರ್ಗ ಅರ್ಥಹೀನವನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ; ಹೆಸರುಗಳು ಮತ್ತು kinds ಅರ್ಥ ಹೊತ್ತಿವೆ",
    "bodyEn": "Section 3: kind=\"BANANA\" was accepted, calling finish() twice moved the end time by 10.3 ms so the span silently grew, and attributes could be changed after the span ended. Section 5: if the wall clock is stepped back 2 s, a time.time() duration is -2000 ms (this step is simulated by subtracting 2 s, not by altering the system clock); perf_counter() cannot go backwards. Section 6: putting the user id in the span name gave 1,618 distinct names from 2,000 requests, against 1 name when the user is an attribute. Section 7: if 3 of 10 remote calls were recorded as INTERNAL, a client-call dashboard would see 70 percent of them.",
    "bodyKn": "ವಿಭಾಗ 3: kind=\"BANANA\" ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟಿತು, finish() ಎರಡು ಬಾರಿ ಕರೆದಾಗ ಅಂತ್ಯ ಸಮಯ 10.3 ms ಸರಿದು span ಮೌನವಾಗಿ ಬೆಳೆಯಿತು, ಮತ್ತು span ಮುಗಿದ ನಂತರವೂ attributes ಬದಲಿಸಬಹುದಾಗಿತ್ತು. ವಿಭಾಗ 5: ಗೋಡೆ ಗಡಿಯಾರ 2 s ಹಿಂದಕ್ಕೆ ಸರಿದರೆ time.time() ಅವಧಿ -2000 ms (ಈ ಸರಿತ 2 s ಕಳೆದು ಅನುಕರಿಸಲಾಗಿದೆ, ಸಿಸ್ಟಮ್ ಗಡಿಯಾರ ಬದಲಿಸಿ ಅಲ್ಲ); perf_counter() ಹಿಂದೆ ಹೋಗಲಾರದು. ವಿಭಾಗ 6: span ಹೆಸರಿನಲ್ಲಿ ಬಳಕೆದಾರ id ಇಟ್ಟಾಗ 2,000 ವಿನಂತಿಗಳಿಂದ 1,618 ವಿಭಿನ್ನ ಹೆಸರುಗಳು, ಬಳಕೆದಾರ attribute ಆದಾಗ 1 ಹೆಸರು. ವಿಭಾಗ 7: 10 ದೂರದ ಕರೆಗಳಲ್ಲಿ 3 INTERNAL ಎಂದು ದಾಖಲಾದರೆ client-ಕರೆ dashboard ಅವುಗಳ 70 ಶೇಕಡಾ ನೋಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A shared vocabulary lets any backend answer the same questions about any agent framework: how long did the agent take, which model, which tool. That only works if the hierarchy, names and kinds are recorded correctly, which is easy to get subtly wrong in a hand-built tracer.",
    "bodyKn": "ಹಂಚಿದ ಶಬ್ದಕೋಶ ಯಾವುದೇ backend ಗೆ ಯಾವುದೇ agent framework ಬಗ್ಗೆ ಒಂದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ: agent ಎಷ್ಟು ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು, ಯಾವ ಮಾದರಿ, ಯಾವ tool. ಶ್ರೇಣಿ, ಹೆಸರುಗಳು ಮತ್ತು kinds ಸರಿಯಾಗಿ ದಾಖಲಾದರೆ ಮಾತ್ರ ಅದು ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಕೈಯಿಂದ ನಿರ್ಮಿಸಿದ tracer ನಲ್ಲಿ ಅದು ಸೂಕ್ಷ್ಮವಾಗಿ ತಪ್ಪುವುದು ಸುಲಭ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"span kind is just a label.\" Backends use it to separate network calls from in-process work, so recording a remote agent as INTERNAL hides it from client-call views.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"span kind ಕೇವಲ ಲೇಬಲ್.\" Backends ನೆಟ್‌ವರ್ಕ್ ಕರೆಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಯೊಳಗಿನ ಕೆಲಸದಿಂದ ಬೇರ್ಪಡಿಸಲು ಅದನ್ನು ಬಳಸುತ್ತವೆ, ಆದ್ದರಿಂದ ದೂರದ agent ಅನ್ನು INTERNAL ಎಂದು ದಾಖಲಿಸಿದರೆ client-ಕರೆ ನೋಟಗಳಿಂದ ಮರೆಯಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Span: one timed operation. Trace: the tree of spans for one request. Parent id: the link that builds the tree. Kind: INTERNAL, CLIENT and others. Orphan: a span whose parent was never seen. Cardinality: the number of distinct values a name or label takes.",
    "bodyKn": "Span: ಒಂದು ಸಮಯ ಅಳತೆಯ ಕಾರ್ಯಾಚರಣೆ. Trace: ಒಂದು ವಿನಂತಿಯ spans ಮರ. Parent id: ಮರ ನಿರ್ಮಿಸುವ ಕೊಂಡಿ. Kind: INTERNAL, CLIENT ಮತ್ತು ಇತರೆ. Orphan: ಪೋಷಕ ಎಂದೂ ಕಾಣದ span. Cardinality: ಹೆಸರು ಅಥವಾ ಲೇಬಲ್ ತೆಗೆದುಕೊಳ್ಳುವ ವಿಭಿನ್ನ ಮೌಲ್ಯಗಳ ಸಂಖ್ಯೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Spans form a tree only if parent ids were recorded. 2) An orphan is a child whose parent was never exported. 3) At 8 hex characters, 400,000 ids gave 21 repeats and a repeat mis-parents a child silently. 4) The class accepted an invalid kind, double finish and late edits. 5) Per-user span names gave 1,618 names from 2,000 requests. 6) Kind must follow where the work runs.",
    "bodyKn": "1) Parent ids ದಾಖಲಾಗಿದ್ದರೆ ಮಾತ್ರ spans ಮರ ರೂಪಿಸುತ್ತವೆ. 2) Orphan ಎಂದರೆ ಪೋಷಕ ಎಂದೂ ರಫ್ತಾಗದ ಮಗು. 3) 8 hex ಅಕ್ಷರಗಳಲ್ಲಿ 400,000 ids 21 ಪುನರಾವರ್ತನೆ ನೀಡಿತು ಮತ್ತು ಪುನರಾವರ್ತನೆ ಮೌನವಾಗಿ ಮಗುವಿನ ಪೋಷಕನನ್ನು ತಪ್ಪಿಸುತ್ತದೆ. 4) ವರ್ಗ ಅಮಾನ್ಯ kind, ಎರಡು ಬಾರಿ finish ಮತ್ತು ತಡವಾದ ಸಂಪಾದನೆ ಸ್ವೀಕರಿಸಿತು. 5) ಬಳಕೆದಾರ-ಪ್ರತಿ span ಹೆಸರುಗಳು 2,000 ವಿನಂತಿಗಳಿಂದ 1,618 ಹೆಸರು ನೀಡಿದವು. 6) Kind ಕೆಲಸ ಎಲ್ಲಿ ನಡೆಯುತ್ತದೆ ಎಂಬುದನ್ನು ಅನುಸರಿಸಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What makes the trace a tree rather than a flat list?",
      "qKn": "Trace ಅನ್ನು ಸಮತಟ್ಟಾದ ಪಟ್ಟಿಯ ಬದಲು ಮರವಾಗಿಸುವುದು ಯಾವುದು?",
      "opts": [
       "Span names",
       "The parent id recorded when each span starts",
       "The kind",
       "The duration"
      ],
      "optsKn": [
       "Span ಹೆಸರುಗಳು",
       "ಪ್ರತಿ span ಆರಂಭವಾದಾಗ ದಾಖಲಿಸಿದ ಪೋಷಕ id",
       "Kind",
       "ಅವಧಿ"
      ],
      "correct": 1
     },
     {
      "q": "What happened when two parents shared one span id?",
      "qKn": "ಇಬ್ಬರು ಪೋಷಕರು ಒಂದು span id ಹಂಚಿಕೊಂಡಾಗ ಏನಾಯಿತು?",
      "opts": [
       "An error was raised",
       "The child attached to the later one with no error",
       "The child was dropped",
       "Both got the child"
      ],
      "optsKn": [
       "ದೋಷ ಎತ್ತಲಾಯಿತು",
       "ಯಾವುದೇ ದೋಷವಿಲ್ಲದೆ ಮಗು ನಂತರದ್ದಕ್ಕೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿತು",
       "ಮಗುವನ್ನು ಬಿಡಲಾಯಿತು",
       "ಇಬ್ಬರಿಗೂ ಮಗು ಸಿಕ್ಕಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why put the user id in an attribute rather than the span name?",
      "qKn": "ಬಳಕೆದಾರ id ಅನ್ನು span ಹೆಸರಿನ ಬದಲು attribute ನಲ್ಲಿ ಏಕೆ ಇಡಬೇಕು?",
      "opts": [
       "Names are encrypted",
       "Per-user names made 1,618 distinct names from 2,000 requests",
       "Attributes are faster",
       "Names must be short"
      ],
      "optsKn": [
       "ಹೆಸರುಗಳು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿವೆ",
       "ಬಳಕೆದಾರ-ಪ್ರತಿ ಹೆಸರುಗಳು 2,000 ವಿನಂತಿಗಳಿಂದ 1,618 ವಿಭಿನ್ನ ಹೆಸರು ನೀಡಿದವು",
       "Attributes ವೇಗ",
       "ಹೆಸರುಗಳು ಚಿಕ್ಕದಾಗಿರಬೇಕು"
      ],
      "correct": 1
     },
     {
      "q": "How was the wall-clock hazard shown?",
      "qKn": "ಗೋಡೆ-ಗಡಿಯಾರ ಅಪಾಯ ಹೇಗೆ ತೋರಿಸಲ್ಪಟ್ಟಿತು?",
      "opts": [
       "By changing the system clock",
       "By simulating a 2 s step back, giving a duration of -2000 ms, while perf_counter is monotonic",
       "It was not shown",
       "By waiting an hour"
      ],
      "optsKn": [
       "ಸಿಸ್ಟಮ್ ಗಡಿಯಾರ ಬದಲಿಸಿ",
       "2 s ಹಿಂದಿನ ಸರಿತ ಅನುಕರಿಸಿ -2000 ms ಅವಧಿ ನೀಡಿ, perf_counter ಏಕಮುಖ ಎಂದು",
       "ತೋರಿಸಲ್ಪಡಲಿಲ್ಲ",
       "ಒಂದು ಗಂಟೆ ಕಾದು"
      ],
      "correct": 1
     },
     {
      "q": "Which kind fits a remote agent service called over the network?",
      "qKn": "ನೆಟ್‌ವರ್ಕ್ ಮೂಲಕ ಕರೆಯುವ ದೂರದ agent ಸೇವೆಗೆ ಯಾವ kind ಹೊಂದುತ್ತದೆ?",
      "opts": [
       "INTERNAL",
       "CLIENT",
       "SERVER",
       "None"
      ],
      "optsKn": [
       "INTERNAL",
       "CLIENT",
       "SERVER",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
