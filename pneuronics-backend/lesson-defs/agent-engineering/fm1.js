module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321559",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Failure Modes: Detect, Ground and Contain (Part 1 of 3) — Traces and the First Detectors",
 "titleKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 1 / 3) — Traces ಮತ್ತು ಮೊದಲ Detectors",
 "desc": "Write five trace detectors, run them on four hand-written traces and then feed each one inputs it was not designed for, from keyword phrasing to a fabricated id and a small baseline.",
 "descKn": "ಐದು trace detectors ಬರೆದು, ನಾಲ್ಕು ಕೈಬರಹ traces ಮೇಲೆ ಚಲಾಯಿಸಿ, ನಂತರ ಕೀವರ್ಡ್ ಪದಪ್ರಯೋಗದಿಂದ ಕಲ್ಪಿತ id ಮತ್ತು ಸಣ್ಣ ಮೂಲ ದರದವರೆಗೆ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಅದು ವಿನ್ಯಾಸಗೊಳ್ಳದ ಇನ್‌ಪುಟ್ ಕೊಡಿ.",
 "objectives": [
  "Represent a run as events.",
  "Write rule-based detectors.",
  "Find where each rule fails.",
  "Compute per-step reliability decay.",
  "Judge when a baseline is large enough."
 ],
 "objectivesKn": [
  "ಒಂದು ಓಟವನ್ನು events ಆಗಿ ನಿರೂಪಿಸಿ.",
  "ನಿಯಮ-ಆಧಾರಿತ detectors ಬರೆಯಿರಿ.",
  "ಪ್ರತಿ ನಿಯಮ ಎಲ್ಲಿ ವಿಫಲ ಎಂದು ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ಪ್ರತಿ-ಹಂತ ವಿಶ್ವಾಸಾರ್ಹತೆ ಕ್ಷೀಣತೆ ಲೆಕ್ಕಿಸಿ.",
  "ಮೂಲ ದರ ಸಾಕಷ್ಟು ದೊಡ್ಡದೇ ಎಂದು ತೀರ್ಮಾನಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Failure Modes: Detect, Ground and Contain (Part 1 of 3)",
    "textKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: event traces, five first detectors and where each one breaks. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent failure modes (detection, grounding and containment), not the real software, and every trace, tool and environment is hand-written or simulated with assumed rates, so no language model and no real agent is measured, so no real LLM behaviour is measured. The pasted lesson described its detectors but its programs were not supplied, so the lab is written from the descriptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: event traces, ಐದು ಮೊದಲ detectors ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಎಲ್ಲಿ ಮುರಿಯುತ್ತದೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ವೈಫಲ್ಯ ವಿಧಗಳು (ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ trace, tool ಮತ್ತು ಪರಿಸರ ಕೈಬರಹ ಅಥವಾ ಊಹಿಸಿದ ದರಗಳೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ agent ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ detectors ಅನ್ನು ವಿವರಿಸಿತ್ತು ಆದರೆ ಪ್ರೋಗ್ರಾಂಗಳನ್ನು ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಆ ವಿವರಣೆಗಳಿಂದ ಬರೆಯಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Failures as Patterns in a Trace",
    "textKn": "Trace ನಲ್ಲಿನ ಮಾದರಿಗಳಾಗಿ ವೈಫಲ್ಯಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why Name the Modes",
    "headingKn": "ವಿಧಗಳಿಗೆ ಹೆಸರು ಏಕೆ",
    "bodyEn": "An agent run is a list of events: tool calls, tool results and assistant messages. Most production failures are recognisable patterns in that list: a call to a tool that does not exist, a call to a real tool the task never allowed, a completion claim after a failed result, and later calls built on a failed one. This part writes one small detector for each pattern on four hand-written traces, then deliberately feeds each detector inputs it was not designed for and records what happens.",
    "bodyKn": "Agent ಓಟ ಎಂದರೆ events ಪಟ್ಟಿ: tool ಕರೆಗಳು, tool ಫಲಿತಾಂಶಗಳು ಮತ್ತು assistant ಸಂದೇಶಗಳು. ಹೆಚ್ಚಿನ production ವೈಫಲ್ಯಗಳು ಆ ಪಟ್ಟಿಯಲ್ಲಿ ಗುರುತಿಸಬಹುದಾದ ಮಾದರಿಗಳು: ಇಲ್ಲದ tool ಗೆ ಕರೆ, ಕಾರ್ಯ ಅನುಮತಿಸದ ನಿಜ tool ಗೆ ಕರೆ, ವಿಫಲ ಫಲಿತಾಂಶದ ನಂತರ ಪೂರ್ಣಗೊಂಡ ಹೇಳಿಕೆ, ಮತ್ತು ವಿಫಲದ ಮೇಲೆ ಕಟ್ಟಿದ ನಂತರದ ಕರೆಗಳು. ಈ ಭಾಗ ನಾಲ್ಕು ಕೈಬರಹ traces ಮೇಲೆ ಪ್ರತಿ ಮಾದರಿಗೂ ಒಂದು ಸಣ್ಣ detector ಬರೆದು, ನಂತರ ಪ್ರತಿ detector ಗೂ ಅದು ವಿನ್ಯಾಸಗೊಳ್ಳದ ಇನ್‌ಪುಟ್ ಕೊಟ್ಟು ಏನಾಗುತ್ತದೆ ಎಂದು ದಾಖಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Trace to Labels",
    "headingKn": "Trace ನಿಂದ ಲೇಬಲ್‌ಗಳಿಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">A failure is a pattern in a trace</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">trace</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">events in order</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">detectors</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one rule per mode</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">labels</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">can overlap</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">known limits</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">phrasing, recovery, grounding</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every rule has inputs it was not written for</text></svg>",
    "captionEn": "Every detector is a rule with inputs it was not written for.",
    "captionKn": "ಪ್ರತಿ detector ಬರೆಯದ ಇನ್‌ಪುಟ್ ಇರುವ ನಿಯಮ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The five rules of this part",
    "headingKn": "ಈ ಭಾಗದ ಐದು ನಿಯಮಗಳು",
    "headers": [
     "Rule",
     "Fires when",
     "Known weakness"
    ],
    "rows": [
     [
      "hallucinated_action",
      "called tool is not in the known set",
      "exact string match: case or a trailing space counts"
     ],
     [
      "scope_creep",
      "tool is known but not allowed for the task",
      "depends on the allowed set being right"
     ],
     [
      "failed result",
      "success is False or status is 400 or above",
      "a result with neither signal is never a failure"
     ],
     [
      "success_hallucination",
      "a keyword like \"done\" after a failure",
      "phrasing and negation"
     ],
     [
      "possible_cascade",
      "any tool call after the first failure",
      "cannot tell recovery from a cascade"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Writing the Detectors and Running Them",
    "textKn": "Detectors ಬರೆದು ಚಲಾಯಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_1.py",
    "headingEn": "Event, Trace, Detection and the five detectors",
    "headingKn": "Event, Trace, Detection ಮತ್ತು ಐದು detectors",
    "descEn": "Event, Trace and Detection are dataclasses. Each detector takes a Trace and returns Detection objects. detect_failed_tools counts a result as failed when success is False or the status is 400 or more. The success rule searches assistant text after the first failure for a keyword list, and the cascade rule counts any tool call after it.",
    "descKn": "Event, Trace ಮತ್ತು Detection dataclasses. ಪ್ರತಿ detector Trace ತೆಗೆದುಕೊಂಡು Detection ವಸ್ತುಗಳನ್ನು ಮರಳಿಸುತ್ತದೆ. success False ಅಥವಾ status 400 ಅಥವಾ ಹೆಚ್ಚಿದ್ದಾಗ detect_failed_tools ಫಲಿತಾಂಶವನ್ನು ವಿಫಲ ಎಂದು ಎಣಿಸುತ್ತದೆ. success ನಿಯಮ ಮೊದಲ ವೈಫಲ್ಯದ ನಂತರದ assistant ಪಠ್ಯದಲ್ಲಿ ಕೀವರ್ಡ್ ಪಟ್ಟಿ ಹುಡುಕುತ್ತದೆ, cascade ನಿಯಮ ಅದರ ನಂತರದ ಯಾವುದೇ tool ಕರೆ ಎಣಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass Event:\n    kind: str\n    tool: Optional[str] = None\n    args: dict = field(default_factory=dict)\n    status: Optional[int] = None\n    success: Optional[bool] = None\n    text: str = \"\"\n\n\n@dataclass\nclass Trace:\n    trace_id: str\n    request: str\n    known_tools: set\n    allowed_tools: set\n    constraints: set\n    events: list\n\n\n@dataclass\nclass Detection:\n    mode: str\n    reason: str\n    event_index: Optional[int] = None\n\n\ndef detect_hallucinated_actions(trace):\n    return [Detection(\"hallucinated_action\", f\"{e.tool} is not a known tool\", i) for i, e in enumerate(trace.events)\n            if e.kind == \"tool_call\" and e.tool not in trace.known_tools]\n\n\ndef detect_scope_creep(trace):\n    return [Detection(\"scope_creep\", f\"{e.tool} exists but is not allowed for this task\", i) for i, e in enumerate(trace.events)\n            if e.kind == \"tool_call\" and e.tool in trace.known_tools and e.tool not in trace.allowed_tools]\n\n\ndef detect_failed_tools(trace):\n    return [i for i, e in enumerate(trace.events) if e.kind == \"tool_result\" and (e.success is False or (e.status is not None and e.status >= 400))]\n\n\nCLAIMS = (\"successfully\", \"completed\", \"done\", \"created\", \"sent\")\n\n\ndef detect_success_hallucination(trace):\n    failed = detect_failed_tools(trace)\n    out = []\n    if not failed:\n        return out\n    first = failed[0]\n    for i, e in enumerate(trace.events):\n        if i > first and e.kind == \"assistant\" and any(c in e.text.lower() for c in CLAIMS):\n            out.append(Detection(\"success_hallucination\", \"completion claim after a failed tool result\", i))\n    return out\n\n\ndef detect_possible_cascade(trace):\n    failed = detect_failed_tools(trace)\n    if not failed:\n        return []\n    later = [i for i, e in enumerate(trace.events) if i > failed[0] and e.kind == \"tool_call\"]\n    return [Detection(\"possible_cascade\", f\"{len(later)} tool call(s) after the first failure\", later[0])] if later else []\n\n\nDETECTORS = (detect_hallucinated_actions, detect_scope_creep, detect_success_hallucination, detect_possible_cascade)\n\n\ndef analyze(trace):\n    found = []\n    for d in DETECTORS:\n        found.extend(d(trace))\n    return found\n\n\ndef call(tool, **args):\n    return Event(\"tool_call\", tool=tool, args=args)\n\n\ndef result(status=200, success=None):\n    return Event(\"tool_result\", status=status, success=success if success is not None else status < 400)\n\n\ndef say(text):\n    return Event(\"assistant\", text=text)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_1.py",
    "headingEn": "main(): eight sections",
    "headingKn": "main(): ಎಂಟು ವಿಭಾಗಗಳು",
    "descEn": "main() replays the four traces, then tests recovery, phrasing, tool-name variants, status handling, long-chain arithmetic with a seeded simulation, a verification gate and the noise in a baseline rate.",
    "descKn": "main() ನಾಲ್ಕು traces ಪುನಃ ಚಲಾಯಿಸಿ, ನಂತರ ಚೇತರಿಕೆ, ಪದಪ್ರಯೋಗ, tool-ಹೆಸರು ರೂಪಾಂತರಗಳು, status ನಿರ್ವಹಣೆ, seeded ಅನುಕರಣೆಯೊಂದಿಗೆ ಉದ್ದ ಸರಪಳಿ ಗಣಿತ, ಪರಿಶೀಲನಾ gate ಮತ್ತು ಮೂಲ ದರದ ಗದ್ದಲ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef show(trace):\n    found = analyze(trace)\n    print(f\"{trace.trace_id}: {sorted({d.mode for d in found}) or 'none'}\")\n    for d in found:\n        print(f\"    [{d.event_index}] {d.mode}: {d.reason}\")\n\n\ndef main():\n    section(\"1. The four demo traces\")\n    for t in (T001, T002, T003, T004):\n        show(t)\n    print(\"one trace can carry several labels: T003 is both a hallucinated action and a success hallucination, T004 a cascade and a success hallucination\")\n\n    section(\"2. Genuinely checking: recovery looks like a cascade and a success hallucination\")\n    recover = Trace(\"R1\", \"Create the report\", {\"create_file\", \"verify_file\"}, {\"create_file\", \"verify_file\"}, set(),\n                    [call(\"create_file\", name=\"r.txt\"), result(400), call(\"create_file\", name=\"r.txt\"), result(200),\n                     call(\"verify_file\", name=\"r.txt\"), result(200), say(\"The report was successfully created and verified.\")])\n    show(recover)\n    print(\"the agent failed, retried, verified and then told the truth, yet both rules fired: they compare the order of events and do not understand recovery\")\n\n    section(\"3. Genuinely measuring: the completion-claim rule against phrasing (hand-written replies after a failed call)\")\n    base = [call(\"create_file\", name=\"r.txt\"), result(400)]\n    replies = [(\"The file was successfully created.\", True), (\"Done.\", True), (\"Finished. Everything is in place.\", True), (\"All set, your report is ready.\", True),\n               (\"I could not create the file.\", False), (\"The file was not successfully created.\", False), (\"Creation failed, so nothing was completed.\", False),\n               (\"Sorry, the file has not been created yet.\", False), (\"The report exists now.\", True), (\"Task complete.\", True)]\n    tp = fn = fp = tn = 0\n    rows = []\n    for text, is_false_claim in replies:\n        tr = Trace(\"X\", \"r\", {\"create_file\"}, {\"create_file\"}, set(), base + [say(text)])\n        flagged = bool(detect_success_hallucination(tr))\n        tp += flagged and is_false_claim; fn += (not flagged) and is_false_claim; fp += flagged and not is_false_claim; tn += (not flagged) and not is_false_claim\n        rows.append((text, is_false_claim, flagged))\n    for text, truth, flagged in rows:\n        print(f\"{text[:48]:50} false claim={truth!s:5} flagged={flagged!s:5} {'ok' if truth == flagged else 'WRONG'}\")\n    print(f\"caught {tp} of {tp + fn} false claims, and wrongly flagged {fp} of {fp + tn} honest replies\")\n    print(\"the keyword list misses claims phrased another way ('All set', 'is ready', 'exists now', 'Finished') and flags honest replies that contain a keyword plus a negation ('not successfully', 'nothing was completed'); the 10 replies are written by us, so this shows the failure shape, not a rate\")\n\n    section(\"4. Genuinely checking: tool names, identifiers and what 'known' means\")\n    t = Trace(\"N\", \"Check order ORD-100\", {\"get_order\", \"cancel_order\"}, {\"get_order\"}, set(), [call(\"Get_Order\", order_id=\"ORD-100\"), call(\"get_order \", order_id=\"ORD-100\"), call(\"get_order\", order_id=\"ORD-900\")])\n    show(t)\n    print(\"'Get_Order' and 'get_order ' (trailing space) were reported as hallucinated actions although the model meant a real tool; the third call used a fabricated order id and nothing flagged it: structural checks cannot see an ungrounded argument\")\n\n    section(\"5. Genuinely checking: how the failure test treats unusual statuses\")\n    for status, success in ((200, None), (204, None), (302, None), (400, None), (500, None), (200, False), (None, None), (400, True)):\n        tr = Trace(\"S\", \"r\", {\"x\"}, {\"x\"}, set(), [call(\"x\"), Event(\"tool_result\", status=status, success=success)])\n        print(f\"status={str(status):5} success={str(success):5} -> counted as failed: {bool(detect_failed_tools(tr))}\")\n    print(\"either signal is enough to count a result as failed: a 200 that says success=False failed, and so did a 400 that says success=True (the status won); a result with neither signal is never a failure, so a tool that returns nothing useful passes silently\")\n\n    section(\"6. Genuinely measuring: per-step reliability over long chains (arithmetic and a seeded simulation, seed 5)\")\n    rng = random.Random(5)\n    print(f\"{'steps':>6} {'p^n':>8} {'simulated':>10}\")\n    for p, n in ((0.99, 1), (0.99, 10), (0.99, 50), (0.95, 10)):\n        N = 20000\n        sim = sum(all(rng.random() < p for _ in range(n)) for _ in range(N)) / N\n        print(f\"p={p} n={n:>3} {p ** n:>7.1%} {sim:>10.1%}\")\n    print(\"0.99 per step gives 90.4 percent at 10 steps and 60.5 percent at 50, matching the lesson; this assumes independent steps. If an error makes later steps more likely to fail the whole chain still needs every step right, but failures then cluster in the same runs and one bad run contains many bad actions\")\n    b, depth = 3, 4\n    print(f\"cascade amplification: with {b} downstream operations per level, depth {depth} can touch up to {b ** depth} operations (b^d)\")\n\n    section(\"7. Genuinely measuring: a verification gate stops a cascade (T004 replayed)\")\n    def run_with_gate(trace):\n        done = []\n        for e in trace.events:\n            if e.kind == \"tool_call\":\n                done.append(e.tool)\n            if e.kind == \"tool_result\" and (e.success is False or (e.status or 0) >= 400):\n                return done, \"stopped at the gate\"\n        return done, \"ran to the end\"\n    for label, tr in ((\"T004 without a gate\", T004), (\"T001 healthy\", T001)):\n        calls = [e.tool for e in tr.events if e.kind == \"tool_call\"]\n        print(f\"{label:22} tool calls made: {len(calls)} {calls}\")\n    calls, how = run_with_gate(T004)\n    print(f\"T004 with a gate after each result: tool calls made: {len(calls)} {calls} | {how}\")\n    print(\"with the gate the agent never reaches upload_file or notify_user, so the user-facing notification about a report that does not exist is never sent\")\n\n    section(\"8. Genuinely checking: a baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9)\")\n    rng = random.Random(9)\n    for n in (50, 500, 5000):\n        rates = [sum(rng.random() < 0.03 for _ in range(n)) / n for _ in range(1000)]\n        rates.sort()\n        print(f\"{n:>5} traces per day: the observed rate ranged from {rates[25]:.1%} to {rates[974]:.1%} across 95 percent of days with no real change\")\n    print(\"with 50 traces a day a 3 percent failure rate wanders between about 0 and 8 percent by chance alone, so an alert on 'drift' needs either more traces or a statistical test, not a fixed threshold\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The four demo traces ---\nT001: none\nT002: ['scope_creep']\n    [0] scope_creep: cancel_order exists but is not allowed for this task\nT003: ['hallucinated_action', 'success_hallucination']\n    [0] hallucinated_action: reserve_product is not a known tool\n    [2] success_hallucination: completion claim after a failed tool result\nT004: ['possible_cascade', 'success_hallucination']\n    [6] success_hallucination: completion claim after a failed tool result\n    [2] possible_cascade: 2 tool call(s) after the first failure\none trace can carry several labels: T003 is both a hallucinated action and a success hallucination, T004 a cascade and a success hallucination\n\n--- 2. Genuinely checking: recovery looks like a cascade and a success hallucination ---\nR1: ['possible_cascade', 'success_hallucination']\n    [6] success_hallucination: completion claim after a failed tool result\n    [2] possible_cascade: 2 tool call(s) after the first failure\nthe agent failed, retried, verified and then told the truth, yet both rules fired: they compare the order of events and do not understand recovery\n\n--- 3. Genuinely measuring: the completion-claim rule against phrasing (hand-written replies after a failed call) ---\nThe file was successfully created.                 false claim=True  flagged=True  ok\nDone.                                              false claim=True  flagged=True  ok\nFinished. Everything is in place.                  false claim=True  flagged=False WRONG\nAll set, your report is ready.                     false claim=True  flagged=False WRONG\nI could not create the file.                       false claim=False flagged=False ok\nThe file was not successfully created.             false claim=False flagged=True  WRONG\nCreation failed, so nothing was completed.         false claim=False flagged=True  WRONG\nSorry, the file has not been created yet.          false claim=False flagged=True  WRONG\nThe report exists now.                             false claim=True  flagged=False WRONG\nTask complete.                                     false claim=True  flagged=False WRONG\ncaught 2 of 6 false claims, and wrongly flagged 3 of 4 honest replies\nthe keyword list misses claims phrased another way ('All set', 'is ready', 'exists now', 'Finished') and flags honest replies that contain a keyword plus a negation ('not successfully', 'nothing was completed'); the 10 replies are written by us, so this shows the failure shape, not a rate\n\n--- 4. Genuinely checking: tool names, identifiers and what 'known' means ---\nN: ['hallucinated_action']\n    [0] hallucinated_action: Get_Order is not a known tool\n    [1] hallucinated_action: get_order  is not a known tool\n'Get_Order' and 'get_order ' (trailing space) were reported as hallucinated actions although the model meant a real tool; the third call used a fabricated order id and nothing flagged it: structural checks cannot see an ungrounded argument\n\n--- 5. Genuinely checking: how the failure test treats unusual statuses ---\nstatus=200   success=None  -> counted as failed: False\nstatus=204   success=None  -> counted as failed: False\nstatus=302   success=None  -> counted as failed: False\nstatus=400   success=None  -> counted as failed: True\nstatus=500   success=None  -> counted as failed: True\nstatus=200   success=False -> counted as failed: True\nstatus=None  success=None  -> counted as failed: False\nstatus=400   success=True  -> counted as failed: True\neither signal is enough to count a result as failed: a 200 that says success=False failed, and so did a 400 that says success=True (the status won); a result with neither signal is never a failure, so a tool that returns nothing useful passes silently\n\n--- 6. Genuinely measuring: per-step reliability over long chains (arithmetic and a seeded simulation, seed 5) ---\n steps      p^n  simulated\np=0.99 n=  1   99.0%      99.0%\np=0.99 n= 10   90.4%      90.5%\np=0.99 n= 50   60.5%      60.3%\np=0.95 n= 10   59.9%      59.5%\n0.99 per step gives 90.4 percent at 10 steps and 60.5 percent at 50, matching the lesson; this assumes independent steps. If an error makes later steps more likely to fail the whole chain still needs every step right, but failures then cluster in the same runs and one bad run contains many bad actions\ncascade amplification: with 3 downstream operations per level, depth 4 can touch up to 81 operations (b^d)\n\n--- 7. Genuinely measuring: a verification gate stops a cascade (T004 replayed) ---\nT004 without a gate    tool calls made: 3 ['create_file', 'upload_file', 'notify_user']\nT001 healthy           tool calls made: 1 ['get_order']\nT004 with a gate after each result: tool calls made: 1 ['create_file'] | stopped at the gate\nwith the gate the agent never reaches upload_file or notify_user, so the user-facing notification about a report that does not exist is never sent\n\n--- 8. Genuinely checking: a baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9) ---\n   50 traces per day: the observed rate ranged from 0.0% to 8.0% across 95 percent of days with no real change\n  500 traces per day: the observed rate ranged from 1.6% to 4.6% across 95 percent of days with no real change\n 5000 traces per day: the observed rate ranged from 2.5% to 3.5% across 95 percent of days with no real change\nwith 50 traces a day a 3 percent failure rate wanders between about 0 and 8 percent by chance alone, so an alert on 'drift' needs either more traces or a statistical test, not a fixed threshold"
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Experiment Walkthrough",
    "textKn": "Experiment ನಡೆದಾಟ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 1: The four demo traces",
    "headingKn": "ಪ್ರಯೋಗ 1: The four demo traces",
    "bodyEn": "What it ran: The four demo traces. What the lab concluded: one trace can carry several labels: T003 is both a hallucinated action and a success hallucination, T004 a cascade and a success hallucination",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The four demo traces. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): one trace can carry several labels: T003 is both a hallucinated action and a success hallucination, T004 a cascade and a success hallucination"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. The four demo traces ---\nT001: none\nT002: ['scope_creep']\n    [0] scope_creep: cancel_order exists but is not allowed for this task\nT003: ['hallucinated_action', 'success_hallucination']\n    [0] hallucinated_action: reserve_product is not a known tool\n    [2] success_hallucination: completion claim after a failed tool result\nT004: ['possible_cascade', 'success_hallucination']\n    [6] success_hallucination: completion claim after a failed tool result\n    [2] possible_cascade: 2 tool call(s) after the first failure"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Recovery looks like a cascade and a success hallucination",
    "headingKn": "ಪ್ರಯೋಗ 2: Recovery looks like a cascade and a success hallucination",
    "bodyEn": "What it ran: Recovery looks like a cascade and a success hallucination. What the lab concluded: the agent failed, retried, verified and then told the truth, yet both rules fired: they compare the order of events and do not understand recovery",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Recovery looks like a cascade and a success hallucination. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the agent failed, retried, verified and then told the truth, yet both rules fired: they compare the order of events and do not understand recovery"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely checking: recovery looks like a cascade and a success hallucination ---\nR1: ['possible_cascade', 'success_hallucination']\n    [6] success_hallucination: completion claim after a failed tool result\n    [2] possible_cascade: 2 tool call(s) after the first failure"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The completion-claim rule against phrasing (hand-written replies after a failed call)",
    "headingKn": "ಪ್ರಯೋಗ 3: The completion-claim rule against phrasing (hand-written replies after a failed call)",
    "bodyEn": "What it ran: The completion-claim rule against phrasing (hand-written replies after a failed call). What the lab concluded: the keyword list misses claims phrased another way ('All set', 'is ready', 'exists now', 'Finished') and flags honest replies that contain a keyword plus a negation ('not successfully', 'nothing was completed'); the 10 replies are written by us, so this shows the failure shape, not a rate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The completion-claim rule against phrasing (hand-written replies after a failed call). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the keyword list misses claims phrased another way ('All set', 'is ready', 'exists now', 'Finished') and flags honest replies that contain a keyword plus a negation ('not successfully', 'nothing was completed'); the 10 replies are written by us, so this shows the failure shape, not a rate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely measuring: the completion-claim rule against phrasing (hand-written replies after a failed call) ---\nThe file was successfully created.                 false claim=True  flagged=True  ok\nDone.                                              false claim=True  flagged=True  ok\nFinished. Everything is in place.                  false claim=True  flagged=False WRONG\nAll set, your report is ready.                     false claim=True  flagged=False WRONG\nI could not create the file.                       false claim=False flagged=False ok\nThe file was not successfully created.             false claim=False flagged=True  WRONG\nCreation failed, so nothing was completed.         false claim=False flagged=True  WRONG\nSorry, the file has not been created yet.          false claim=False flagged=True  WRONG\nThe report exists now.                             false claim=True  flagged=False WRONG\nTask complete.                                     false claim=True  flagged=False WRONG\ncaught 2 of 6 false claims, and wrongly flagged 3 of 4 honest replies"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: Tool names, identifiers and what 'known' means",
    "headingKn": "ಪ್ರಯೋಗ 4: Tool names, identifiers and what 'known' means",
    "bodyEn": "What it ran: Tool names, identifiers and what 'known' means. What the lab concluded: 'Get_Order' and 'get_order ' (trailing space) were reported as hallucinated actions although the model meant a real tool; the third call used a fabricated order id and nothing flagged it: structural checks cannot see an ungrounded argument",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Tool names, identifiers and what 'known' means. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): 'Get_Order' and 'get_order ' (trailing space) were reported as hallucinated actions although the model meant a real tool; the third call used a fabricated order id and nothing flagged it: structural checks cannot see an ungrounded argument"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely checking: tool names, identifiers and what 'known' means ---\nN: ['hallucinated_action']\n    [0] hallucinated_action: Get_Order is not a known tool\n    [1] hallucinated_action: get_order  is not a known tool"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: How the failure test treats unusual statuses",
    "headingKn": "ಪ್ರಯೋಗ 5: How the failure test treats unusual statuses",
    "bodyEn": "What it ran: How the failure test treats unusual statuses. What the lab concluded: either signal is enough to count a result as failed: a 200 that says success=False failed, and so did a 400 that says success=True (the status won); a result with neither signal is never a failure, so a tool that returns nothing useful passes silently",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How the failure test treats unusual statuses. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): either signal is enough to count a result as failed: a 200 that says success=False failed, and so did a 400 that says success=True (the status won); a result with neither signal is never a failure, so a tool that returns nothing useful passes silently"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely checking: how the failure test treats unusual statuses ---\nstatus=200   success=None  -> counted as failed: False\nstatus=204   success=None  -> counted as failed: False\nstatus=302   success=None  -> counted as failed: False\nstatus=400   success=None  -> counted as failed: True\nstatus=500   success=None  -> counted as failed: True\nstatus=200   success=False -> counted as failed: True\nstatus=None  success=None  -> counted as failed: False\nstatus=400   success=True  -> counted as failed: True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Per-step reliability over long chains (arithmetic and a seeded simulation, seed 5)",
    "headingKn": "ಪ್ರಯೋಗ 6: Per-step reliability over long chains (arithmetic and a seeded simulation, seed 5)",
    "bodyEn": "What it ran: Per-step reliability over long chains (arithmetic and a seeded simulation, seed 5). What the lab concluded: cascade amplification: with 3 downstream operations per level, depth 4 can touch up to 81 operations (b^d)",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Per-step reliability over long chains (arithmetic and a seeded simulation, seed 5). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): cascade amplification: with 3 downstream operations per level, depth 4 can touch up to 81 operations (b^d)"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely measuring: per-step reliability over long chains (arithmetic and a seeded simulation, seed 5) ---\n steps      p^n  simulated\np=0.99 n=  1   99.0%      99.0%\np=0.99 n= 10   90.4%      90.5%\np=0.99 n= 50   60.5%      60.3%\np=0.95 n= 10   59.9%      59.5%\n0.99 per step gives 90.4 percent at 10 steps and 60.5 percent at 50, matching the lesson; this assumes independent steps. If an error makes later steps more likely to fail the whole chain still needs every step right, b…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: A verification gate stops a cascade (T004 replayed)",
    "headingKn": "ಪ್ರಯೋಗ 7: A verification gate stops a cascade (T004 replayed)",
    "bodyEn": "What it ran: A verification gate stops a cascade (T004 replayed). What the lab concluded: with the gate the agent never reaches upload_file or notify_user, so the user-facing notification about a report that does not exist is never sent",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A verification gate stops a cascade (T004 replayed). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with the gate the agent never reaches upload_file or notify_user, so the user-facing notification about a report that does not exist is never sent"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely measuring: a verification gate stops a cascade (T004 replayed) ---\nT004 without a gate    tool calls made: 3 ['create_file', 'upload_file', 'notify_user']\nT001 healthy           tool calls made: 1 ['get_order']\nT004 with a gate after each result: tool calls made: 1 ['create_file'] | stopped at the gate"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 8: A baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9)",
    "headingKn": "ಪ್ರಯೋಗ 8: A baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9)",
    "bodyEn": "What it ran: A baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9). What the lab concluded: with 50 traces a day a 3 percent failure rate wanders between about 0 and 8 percent by chance alone, so an alert on 'drift' needs either more traces or a statistical test, not a fixed threshold",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with 50 traces a day a 3 percent failure rate wanders between about 0 and 8 percent by chance alone, so an alert on 'drift' needs either more traces or a statistical test, not a fixed threshold"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 8. Genuinely checking: a baseline needs enough traces (failure rate ASSUMED at 3 percent, seed 9) ---\n   50 traces per day: the observed rate ranged from 0.0% to 8.0% across 95 percent of days with no real change\n  500 traces per day: the observed rate ranged from 1.6% to 4.6% across 95 percent of days with no real change\n 5000 traces per day: the observed rate ranged from 2.5% to 3.5% across 95 percent of days with no real change"
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
    "headingEn": "Genuinely Found: Recovery Looks Like a Cascade, and Phrasing Beats the Keyword List",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಚೇತರಿಕೆ cascade ನಂತೆ ಕಾಣುತ್ತದೆ, ಮತ್ತು ಪದಪ್ರಯೋಗ ಕೀವರ್ಡ್ ಪಟ್ಟಿಯನ್ನು ಮೀರುತ್ತದೆ",
    "bodyEn": "Section 1: T003 carried two labels (a hallucinated action and a success hallucination) and T004 two (a cascade and a success hallucination). Section 2: trace R1 failed, retried, verified and then told the truth, yet both the cascade rule and the success rule fired, because they compare the order of events and do not understand recovery. Section 3, on ten replies we wrote ourselves: the keyword rule caught 2 of 6 false claims and wrongly flagged 3 of 4 honest replies. It missed \"Finished. Everything is in place.\", \"All set, your report is ready.\", \"The report exists now.\" and \"Task complete.\", and it flagged \"not successfully created\", \"nothing was completed\" and \"has not been created yet\". This shows the failure shape, not a rate, because the replies are hand-written.",
    "bodyKn": "ವಿಭಾಗ 1: T003 ಎರಡು ಲೇಬಲ್ ಹೊತ್ತಿತ್ತು (hallucinated action ಮತ್ತು success hallucination) ಮತ್ತು T004 ಎರಡು (cascade ಮತ್ತು success hallucination). ವಿಭಾಗ 2: trace R1 ವಿಫಲವಾಗಿ, ಮರುಪ್ರಯತ್ನಿಸಿ, ಪರಿಶೀಲಿಸಿ, ನಂತರ ಸತ್ಯ ಹೇಳಿತು, ಆದರೂ cascade ನಿಯಮ ಮತ್ತು success ನಿಯಮ ಎರಡೂ ಬೆಂಕಿ ಹೊತ್ತಿದವು, ಏಕೆಂದರೆ ಅವು events ಕ್ರಮ ಹೋಲಿಸುತ್ತವೆ ಮತ್ತು ಚೇತರಿಕೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದಿಲ್ಲ. ವಿಭಾಗ 3, ನಾವೇ ಬರೆದ ಹತ್ತು ಉತ್ತರಗಳ ಮೇಲೆ: ಕೀವರ್ಡ್ ನಿಯಮ 6 ರಲ್ಲಿ 2 ಸುಳ್ಳು ಹೇಳಿಕೆಗಳನ್ನು ಹಿಡಿದು 4 ರಲ್ಲಿ 3 ಪ್ರಾಮಾಣಿಕ ಉತ್ತರಗಳನ್ನು ತಪ್ಪಾಗಿ ಗುರುತಿಸಿತು. ಇದು ವೈಫಲ್ಯದ ಆಕಾರ ತೋರಿಸುತ್ತದೆ, ದರವಲ್ಲ, ಏಕೆಂದರೆ ಉತ್ತರಗಳು ಕೈಬರಹ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Names, Statuses and Fabricated Values Slip Through",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಹೆಸರುಗಳು, status ಗಳು ಮತ್ತು ಕಲ್ಪಿತ ಮೌಲ್ಯಗಳು ಜಾರಿಕೊಳ್ಳುತ್ತವೆ",
    "bodyEn": "Section 4: \"Get_Order\" and \"get_order \" (trailing space) were reported as hallucinated actions although they name a real tool, while a call with a fabricated order id (ORD-900) raised no flag at all. Section 5: a 400 or 500 counted as failed, a 200 with success=False counted as failed, and a 400 with success=True also counted as failed; a result with neither signal never counts, so a tool that returns nothing useful passes silently.",
    "bodyKn": "ವಿಭಾಗ 4: \"Get_Order\" ಮತ್ತು \"get_order \" (ಕೊನೆಯಲ್ಲಿ ಖಾಲಿ ಸ್ಥಳ) ನಿಜ tool ಹೆಸರಿಸಿದರೂ hallucinated actions ಎಂದು ವರದಿಯಾದವು, ಆದರೆ ಕಲ್ಪಿತ order id (ORD-900) ಇರುವ ಕರೆಗೆ ಯಾವುದೇ ಫ್ಲ್ಯಾಗ್ ಬರಲಿಲ್ಲ. ವಿಭಾಗ 5: 400 ಅಥವಾ 500 ವಿಫಲ ಎಂದು ಎಣಿಕೆಯಾದವು, success=False ಇರುವ 200 ವಿಫಲ ಎಂದು ಎಣಿಕೆಯಾಯಿತು, ಮತ್ತು success=True ಇರುವ 400 ಕೂಡ ವಿಫಲ ಎಂದು ಎಣಿಕೆಯಾಯಿತು; ಎರಡೂ ಸಂಕೇತ ಇಲ್ಲದ ಫಲಿತಾಂಶ ಎಂದೂ ಎಣಿಕೆಯಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಉಪಯುಕ್ತವಾದುದನ್ನು ಮರಳಿಸದ tool ಮೌನವಾಗಿ ಹಾದುಹೋಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Chains Decay, Gates Contain, and Small Samples Mislead",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸರಪಳಿಗಳು ಕ್ಷೀಣಿಸುತ್ತವೆ, gates ನಿಯಂತ್ರಿಸುತ್ತವೆ, ಸಣ್ಣ ಮಾದರಿಗಳು ದಾರಿತಪ್ಪಿಸುತ್ತವೆ",
    "bodyEn": "Section 6 (seed 5, 20,000 runs per row): at 0.99 per step the chain succeeded 90.4 percent of the time at 10 steps (simulated 90.5) and 60.5 percent at 50 steps (simulated 60.3); at 0.95 and 10 steps, 59.9 (simulated 59.5). This assumes independent steps. Section 7: T004 made 3 tool calls without a gate and 1 with a gate after each result, so upload_file and notify_user were never reached. Section 8 (failure rate assumed at 3 percent, seed 9): with 50 traces a day the observed rate ranged from 0.0 to 8.0 percent across 95 percent of days with no real change, with 500 traces from 1.6 to 4.6 and with 5,000 from 2.5 to 3.5.",
    "bodyKn": "ವಿಭಾಗ 6 (seed 5, ಪ್ರತಿ ಸಾಲಿಗೆ 20,000 ಓಟಗಳು): ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 ರಲ್ಲಿ ಸರಪಳಿ 10 ಹಂತಗಳಲ್ಲಿ 90.4 ಶೇಕಡಾ ಯಶಸ್ವಿ (ಅನುಕರಣೆ 90.5) ಮತ್ತು 50 ಹಂತಗಳಲ್ಲಿ 60.5 (ಅನುಕರಣೆ 60.3); 0.95 ಮತ್ತು 10 ಹಂತಗಳಲ್ಲಿ 59.9 (ಅನುಕರಣೆ 59.5). ಇದು ಹಂತಗಳು ಸ್ವತಂತ್ರ ಎಂದು ಊಹಿಸುತ್ತದೆ. ವಿಭಾಗ 7: T004 gate ಇಲ್ಲದೆ 3 tool ಕರೆಗಳನ್ನು ಮತ್ತು ಪ್ರತಿ ಫಲಿತಾಂಶದ ನಂತರ gate ಜೊತೆ 1 ಕರೆ ಮಾಡಿತು, ಆದ್ದರಿಂದ upload_file ಮತ್ತು notify_user ಎಂದೂ ತಲುಪಲಿಲ್ಲ. ವಿಭಾಗ 8 (ವೈಫಲ್ಯ ದರ 3 ಶೇಕಡಾ ಎಂದು ಊಹೆ, seed 9): ದಿನಕ್ಕೆ 50 traces ಇದ್ದಾಗ ನಿಜ ಬದಲಾವಣೆ ಇಲ್ಲದ 95 ಶೇಕಡಾ ದಿನಗಳಲ್ಲಿ ಗಮನಿಸಿದ ದರ 0.0 ರಿಂದ 8.0 ಶೇಕಡಾ, 500 traces ಗೆ 1.6 ರಿಂದ 4.6 ಮತ್ತು 5,000 ಕ್ಕೆ 2.5 ರಿಂದ 3.5."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Detectors turn vague worry into countable labels, but each one encodes an assumption. Knowing exactly which assumption (exact names, keyword phrasing, event order) lets you choose richer evidence before you trust an alert.",
    "bodyKn": "Detectors ಅಸ್ಪಷ್ಟ ಚಿಂತೆಯನ್ನು ಎಣಿಸಬಹುದಾದ ಲೇಬಲ್‌ಗಳಾಗಿ ಮಾರ್ಪಡಿಸುತ್ತವೆ, ಆದರೆ ಪ್ರತಿಯೊಂದೂ ಒಂದು ಊಹೆ ಒಳಗೊಂಡಿದೆ. ಯಾವ ಊಹೆ (ನಿಖರ ಹೆಸರುಗಳು, ಕೀವರ್ಡ್ ಪದಪ್ರಯೋಗ, event ಕ್ರಮ) ಎಂದು ನಿಖರವಾಗಿ ತಿಳಿದರೆ ಎಚ್ಚರಿಕೆಯನ್ನು ನಂಬುವ ಮುನ್ನ ಶ್ರೀಮಂತ ಸಾಕ್ಷ್ಯ ಆಯ್ಕೆಮಾಡಬಹುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a flagged trace is a failed trace.\" R1 recovered correctly and was still flagged twice.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಫ್ಲ್ಯಾಗ್ ಆದ trace ವಿಫಲ trace.\" R1 ಸರಿಯಾಗಿ ಚೇತರಿಸಿಕೊಂಡರೂ ಎರಡು ಬಾರಿ ಫ್ಲ್ಯಾಗ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Hallucinated action: a call to a tool that does not exist. Scope creep: a real tool the task did not allow. Success hallucination: claiming completion after a failure. Cascade: later calls built on a failed result. Verification gate: stop after each failed result.",
    "bodyKn": "Hallucinated action: ಇಲ್ಲದ tool ಗೆ ಕರೆ. Scope creep: ಕಾರ್ಯ ಅನುಮತಿಸದ ನಿಜ tool. Success hallucination: ವೈಫಲ್ಯದ ನಂತರ ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಹೇಳುವುದು. Cascade: ವಿಫಲ ಫಲಿತಾಂಶದ ಮೇಲೆ ಕಟ್ಟಿದ ನಂತರದ ಕರೆಗಳು. Verification gate: ಪ್ರತಿ ವಿಫಲ ಫಲಿತಾಂಶದ ನಂತರ ನಿಲ್ಲಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A trace can carry several labels. 2) Order-based rules flagged a correct recovery twice. 3) The keyword rule caught 2 of 6 false claims and wrongly flagged 3 of 4 honest replies. 4) Case and whitespace produced false hallucination flags; a fabricated id produced none. 5) 0.99 per step gives 60.5 percent over 50 steps. 6) A gate cut T004 from 3 calls to 1. 7) A 50-trace baseline swings 0 to 8 percent by chance.",
    "bodyKn": "1) ಒಂದು trace ಹಲವು ಲೇಬಲ್ ಹೊತ್ತಬಹುದು. 2) ಕ್ರಮ-ಆಧಾರಿತ ನಿಯಮಗಳು ಸರಿಯಾದ ಚೇತರಿಕೆಯನ್ನು ಎರಡು ಬಾರಿ ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದವು. 3) ಕೀವರ್ಡ್ ನಿಯಮ 6 ರಲ್ಲಿ 2 ಸುಳ್ಳು ಹೇಳಿಕೆಗಳನ್ನು ಹಿಡಿದು 4 ರಲ್ಲಿ 3 ಪ್ರಾಮಾಣಿಕ ಉತ್ತರಗಳನ್ನು ತಪ್ಪಾಗಿ ಗುರುತಿಸಿತು. 4) ಕೇಸ್ ಮತ್ತು ಖಾಲಿ ಸ್ಥಳ ತಪ್ಪು hallucination ಫ್ಲ್ಯಾಗ್ ನೀಡಿತು; ಕಲ್ಪಿತ id ಯಾವುದನ್ನೂ ನೀಡಲಿಲ್ಲ. 5) ಪ್ರತಿ ಹಂತಕ್ಕೆ 0.99 50 ಹಂತಗಳಲ್ಲಿ 60.5 ಶೇಕಡಾ ನೀಡುತ್ತದೆ. 6) Gate T004 ಅನ್ನು 3 ಕರೆಗಳಿಂದ 1 ಕ್ಕೆ ಇಳಿಸಿತು. 7) 50-trace ಮೂಲ ದರ ಕೇವಲ ಆಕಸ್ಮಿಕವಾಗಿ 0 ರಿಂದ 8 ಶೇಕಡಾ ಓಲಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did trace R1, which recovered and told the truth, get flagged?",
      "qKn": "ಚೇತರಿಸಿಕೊಂಡು ಸತ್ಯ ಹೇಳಿದ trace R1 ಏಕೆ ಫ್ಲ್ಯಾಗ್ ಆಯಿತು?",
      "opts": [
       "The agent lied",
       "The rules compare event order and cannot see recovery",
       "The status was 500",
       "The tool was unknown"
      ],
      "optsKn": [
       "Agent ಸುಳ್ಳು ಹೇಳಿತು",
       "ನಿಯಮಗಳು event ಕ್ರಮ ಹೋಲಿಸುತ್ತವೆ ಮತ್ತು ಚೇತರಿಕೆ ಕಾಣುವುದಿಲ್ಲ",
       "Status 500 ಆಗಿತ್ತು",
       "Tool ಅಜ್ಞಾತವಾಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "How did the keyword completion-claim rule do on the ten hand-written replies?",
      "qKn": "ಹತ್ತು ಕೈಬರಹ ಉತ್ತರಗಳ ಮೇಲೆ ಕೀವರ್ಡ್ ಪೂರ್ಣಗೊಂಡ-ಹೇಳಿಕೆ ನಿಯಮ ಹೇಗಿತ್ತು?",
      "opts": [
       "Caught all 6 false claims",
       "Caught 2 of 6 and wrongly flagged 3 of 4 honest replies",
       "Caught none and flagged none",
       "Flagged only honest replies"
      ],
      "optsKn": [
       "6 ಸುಳ್ಳು ಹೇಳಿಕೆಗಳೂ ಹಿಡಿಯಿತು",
       "6 ರಲ್ಲಿ 2 ಹಿಡಿದು 4 ಪ್ರಾಮಾಣಿಕ ಉತ್ತರಗಳಲ್ಲಿ 3 ತಪ್ಪಾಗಿ ಗುರುತಿಸಿತು",
       "ಯಾವುದೂ ಹಿಡಿಯಲಿಲ್ಲ ಮತ್ತು ಗುರುತಿಸಲಿಲ್ಲ",
       "ಪ್ರಾಮಾಣಿಕ ಉತ್ತರಗಳನ್ನು ಮಾತ್ರ ಗುರುತಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did the fabricated order id ORD-900 show?",
      "qKn": "ಕಲ್ಪಿತ order id ORD-900 ಏನು ತೋರಿಸಿತು?",
      "opts": [
       "Structural checks cannot see an ungrounded argument",
       "The rule caught it",
       "It was a hallucinated tool",
       "It was scope creep"
      ],
      "optsKn": [
       "ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆಗಳು ಆಧಾರರಹಿತ ಆರ್ಗ್ಯುಮೆಂಟ್ ಕಾಣುವುದಿಲ್ಲ",
       "ನಿಯಮ ಅದನ್ನು ಹಿಡಿಯಿತು",
       "ಅದು hallucinated tool ಆಗಿತ್ತು",
       "ಅದು scope creep ಆಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "What did a gate after each failed result change for T004?",
      "qKn": "ಪ್ರತಿ ವಿಫಲ ಫಲಿತಾಂಶದ ನಂತರದ gate T004 ಗೆ ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "3 calls became 1 and notify_user was never reached",
       "Nothing",
       "It added retries",
       "It made 5 calls"
      ],
      "optsKn": [
       "3 ಕರೆಗಳು 1 ಆದವು ಮತ್ತು notify_user ತಲುಪಲಿಲ್ಲ",
       "ಏನೂ ಇಲ್ಲ",
       "ಮರುಪ್ರಯತ್ನ ಸೇರಿಸಿತು",
       "5 ಕರೆಗಳು ಮಾಡಿತು"
      ],
      "correct": 0
     },
     {
      "q": "With 50 traces a day and an assumed 3 percent rate, what range did the observed rate span?",
      "qKn": "ದಿನಕ್ಕೆ 50 traces ಮತ್ತು ಊಹಿಸಿದ 3 ಶೇಕಡಾ ದರದಲ್ಲಿ ಗಮನಿಸಿದ ದರ ಯಾವ ವ್ಯಾಪ್ತಿ ಹೊಂದಿತ್ತು?",
      "opts": [
       "2.5 to 3.5 percent",
       "1.6 to 4.6 percent",
       "0.0 to 8.0 percent",
       "Exactly 3 percent"
      ],
      "optsKn": [
       "2.5 ರಿಂದ 3.5 ಶೇಕಡಾ",
       "1.6 ರಿಂದ 4.6 ಶೇಕಡಾ",
       "0.0 ರಿಂದ 8.0 ಶೇಕಡಾ",
       "ನಿಖರವಾಗಿ 3 ಶೇಕಡಾ"
      ],
      "correct": 2
     }
    ]
   }
  }
 ]
};
