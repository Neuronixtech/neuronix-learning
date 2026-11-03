module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321559",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Failure Modes: Detect, Ground and Contain (Part 2 of 3) — Grounding, Retries and the Dependency Graph",
 "titleKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 2 / 3) — ಆಧಾರ, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ಅವಲಂಬನೆ ಗ್ರಾಫ್",
 "desc": "Extend the detectors with grounding, retry metadata, required steps and a consumes graph, score seven synthetic traces, then break each new rule and read a drift table.",
 "descKn": "Detectors ಅನ್ನು ಆಧಾರ, retry metadata, ಅಗತ್ಯ ಹಂತಗಳು ಮತ್ತು consumes ಗ್ರಾಫ್‌ನೊಂದಿಗೆ ವಿಸ್ತರಿಸಿ, ಏಳು ಕೃತಕ traces ಅಂಕಿಸಿ, ನಂತರ ಪ್ರತಿ ಹೊಸ ನಿಯಮ ಮುರಿದು drift ಕೋಷ್ಟಕ ಓದಿ.",
 "objectives": [
  "Score detectors against expected labels.",
  "Explain why equality grounding misfires.",
  "Model required steps as a partial order.",
  "Distinguish temporal and dependency cascades.",
  "Read per-mode drift."
 ],
 "objectivesKn": [
  "ನಿರೀಕ್ಷಿತ ಲೇಬಲ್‌ಗಳ ವಿರುದ್ಧ detectors ಅಂಕಿಸಿ.",
  "ಸಮಾನತೆ ಆಧಾರ ಏಕೆ ತಪ್ಪುತ್ತದೆ ವಿವರಿಸಿ.",
  "ಅಗತ್ಯ ಹಂತಗಳನ್ನು ಭಾಗಶಃ ಕ್ರಮವಾಗಿ ಮಾದರಿ ಮಾಡಿ.",
  "ತಾತ್ಕಾಲಿಕ ಮತ್ತು ಅವಲಂಬನೆ cascades ಬೇರ್ಪಡಿಸಿ.",
  "ಪ್ರತಿ-ವಿಧ drift ಓದಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Failure Modes: Detect, Ground and Contain (Part 2 of 3)",
    "textKn": "Agent ವೈಫಲ್ಯ ವಿಧಗಳು: ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a fuller taxonomy, grounding, retry metadata, partial orders and the dependency graph. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind agent failure modes (detection, grounding and containment), not the real software, and every trace, tool and environment is hand-written or simulated with assumed rates, so no language model and no real agent is measured, so no real LLM behaviour is measured. The pasted lesson described its detectors but its programs were not supplied, so the lab is written from the descriptions. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹೆಚ್ಚು ಪೂರ್ಣ ವರ್ಗೀಕರಣ, ಆಧಾರ, retry metadata, ಭಾಗಶಃ ಕ್ರಮಗಳು ಮತ್ತು ಅವಲಂಬನೆ ಗ್ರಾಫ್. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು agent ವೈಫಲ್ಯ ವಿಧಗಳು (ಪತ್ತೆ, ಆಧಾರ ಮತ್ತು ನಿಯಂತ್ರಣ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪ್ರತಿ trace, tool ಮತ್ತು ಪರಿಸರ ಕೈಬರಹ ಅಥವಾ ಊಹಿಸಿದ ದರಗಳೊಂದಿಗೆ ಅನುಕರಿಸಲಾಗಿದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಭಾಷಾ ಮಾದರಿ ಮತ್ತು ನಿಜ agent ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ತನ್ನ detectors ಅನ್ನು ವಿವರಿಸಿತ್ತು ಆದರೆ ಪ್ರೋಗ್ರಾಂಗಳನ್ನು ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್ ಆ ವಿವರಣೆಗಳಿಂದ ಬರೆಯಲಾಗಿದೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Sharper Rules Need Richer Evidence",
    "textKn": "ಹರಿತ ನಿಯಮಗಳಿಗೆ ಶ್ರೀಮಂತ ಸಾಕ್ಷ್ಯ ಬೇಕು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "From Five Rules to Eight Modes",
    "headingKn": "ಐದು ನಿಯಮಗಳಿಂದ ಎಂಟು ವಿಧಗಳಿಗೆ",
    "bodyEn": "Part 1 showed rules that look only at event order and names. This part adds evidence: which values were grounded in the request, whether a repeat was flagged as a retry, which steps a plan requires, and which later calls actually consume a failed result. It grows the taxonomy to tool misuse, context loss, redundancy, omission, disorder and a dependency-based cascade, runs seven synthetic traces whose expected labels we wrote in advance, and then attacks each new rule. The finding to keep: every extra field is another thing that can be wrong or missing.",
    "bodyKn": "ಭಾಗ 1 ಕೇವಲ event ಕ್ರಮ ಮತ್ತು ಹೆಸರುಗಳನ್ನು ನೋಡುವ ನಿಯಮಗಳನ್ನು ತೋರಿಸಿತು. ಈ ಭಾಗ ಸಾಕ್ಷ್ಯ ಸೇರಿಸುತ್ತದೆ: ಯಾವ ಮೌಲ್ಯಗಳು ವಿನಂತಿಯಲ್ಲಿ ಆಧಾರಿತ, ಪುನರಾವರ್ತನೆ retry ಎಂದು ಫ್ಲ್ಯಾಗ್ ಆಗಿತ್ತೇ, ಯೋಜನೆ ಯಾವ ಹಂತಗಳನ್ನು ಬೇಕು ಎನ್ನುತ್ತದೆ, ಮತ್ತು ನಂತರದ ಯಾವ ಕರೆಗಳು ವಿಫಲ ಫಲಿತಾಂಶವನ್ನು ನಿಜವಾಗಿ ಬಳಸುತ್ತವೆ. ಇದು ವರ್ಗೀಕರಣವನ್ನು tool misuse, context loss, redundancy, omission, disorder ಮತ್ತು ಅವಲಂಬನೆ-ಆಧಾರಿತ cascade ಗೆ ಬೆಳೆಸಿ, ನಾವು ಮುಂಚಿತವಾಗಿ ಬರೆದ ನಿರೀಕ್ಷಿತ ಲೇಬಲ್‌ಗಳಿರುವ ಏಳು ಕೃತಕ traces ಚಲಾಯಿಸಿ, ನಂತರ ಪ್ರತಿ ಹೊಸ ನಿಯಮದ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ. ನೆನಪಿಡಬೇಕಾದ ಅಂಶ: ಪ್ರತಿ ಹೆಚ್ಚುವರಿ ಕ್ಷೇತ್ರ ತಪ್ಪಾಗಬಹುದಾದ ಅಥವಾ ಕಾಣೆಯಾಗಬಹುದಾದ ಇನ್ನೊಂದು ವಿಷಯ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evidence Behind Each Rule",
    "headingKn": "ಪ್ರತಿ ನಿಯಮದ ಹಿಂದಿನ ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Richer evidence, sharper rules</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">grounding</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">where values came from</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry metadata</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">did it really fail</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">dependency graph</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">consumes edges</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">annotations can lie</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">or be missing</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a rule is only as good as its annotations</text></svg>",
    "captionEn": "Annotations improve rules and become new failure points.",
    "captionKn": "Annotations ನಿಯಮಗಳನ್ನು ಸುಧಾರಿಸುತ್ತವೆ ಮತ್ತು ಹೊಸ ವೈಫಲ್ಯ ಬಿಂದುಗಳಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "New rules and their evidence",
    "headingKn": "ಹೊಸ ನಿಯಮಗಳು ಮತ್ತು ಅವುಗಳ ಸಾಕ್ಷ್ಯ",
    "headers": [
     "Mode",
     "Needs",
     "Breaks when"
    ],
    "rows": [
     [
      "tool_misuse",
      "a grounded-values set per argument",
      "a derived value (half of 100) is not in the set"
     ],
     [
      "context_loss",
      "constraints recorded in the trace",
      "constraint text is missing or paraphrased"
     ],
     [
      "redundancy",
      "a call signature and a retry flag",
      "the flag is written by the agent and excuses a duplicate send"
     ],
     [
      "omission and disorder",
      "a list of required steps",
      "a flat list cannot express either-order steps and trusts labels"
     ],
     [
      "cascading_error",
      "consumes edges between events",
      "a missing edge hides a real cascade"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Detectors and the Experiments",
    "textKn": "Detectors ಮತ್ತು ಪ್ರಯೋಗಗಳು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_2.py",
    "headingEn": "Dataclasses, detectors and the cascade search",
    "headingKn": "Dataclasses, detectors ಮತ್ತು cascade ಹುಡುಕಾಟ",
    "descEn": "Trace now carries known, allowed, read, write, send and destructive tools, constraints, grounded values and required steps. Each detector returns Detection(severity, evidence). descendants_of walks the consumes edges from a failed result, and detect_success_hallucination takes a matched flag so a recovery must match the failed tool.",
    "descKn": "Trace ಈಗ known, allowed, read, write, send ಮತ್ತು destructive tools, constraints, grounded values ಮತ್ತು required steps ಹೊತ್ತಿದೆ. ಪ್ರತಿ detector Detection(severity, evidence) ಮರಳಿಸುತ್ತದೆ. descendants_of ವಿಫಲ ಫಲಿತಾಂಶದಿಂದ consumes edges ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು detect_success_hallucination matched ಫ್ಲ್ಯಾಗ್ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಚೇತರಿಕೆ ವಿಫಲ tool ಗೆ ಹೊಂದಬೇಕು.",
    "code": "def detect_hallucinated_actions(t):\n    return [Detection(\"hallucinated_action\", f\"{e.tool} is not a known tool\", i, \"high\", {\"tool\": e.tool}) for i, e in calls(t) if e.tool not in t.known_tools]\n\n\ndef detect_scope_creep(t):\n    out = []\n    for i, e in calls(t):\n        if e.tool not in t.known_tools:\n            continue\n        if e.tool not in t.allowed_tools:\n            sev = \"critical\" if e.tool in t.destructive_tools or e.tool in t.send_tools else \"high\"\n            out.append(Detection(\"scope_creep\", f\"{e.tool} is outside the allowed tools\", i, sev, {\"tool\": e.tool}))\n    return out\n\n\ndef detect_ungrounded_arguments(t):\n    out = []\n    for i, e in calls(t):\n        for name, value in e.args.items():\n            allowed = t.grounded_values.get(name)\n            if allowed is not None and value not in allowed:\n                out.append(Detection(\"tool_misuse\", f\"argument {name} is not grounded\", i, \"high\", {\"argument\": name, \"observed\": value, \"grounded\": sorted(allowed)}))\n    return out\n\n\ndef detect_constraint_violations(t):\n    out = []\n    for i, e in calls(t):\n        if t.constraints.get(\"read_only\") and e.tool in t.write_tools:\n            out.append(Detection(\"context_loss\", f\"{e.tool} writes in a read-only task\", i, \"high\", {\"constraint\": \"read_only\"}))\n        if t.constraints.get(\"allow_send\") is False and e.tool in t.send_tools:\n            out.append(Detection(\"context_loss\", f\"{e.tool} sends although sending is not allowed\", i, \"critical\", {\"constraint\": \"allow_send\"}))\n    return out\n\n\ndef signature(e):\n    return (e.tool, tuple(sorted(e.args.items())))\n\n\ndef detect_redundancy(t):\n    out, seen = [], set()\n    for i, e in calls(t):\n        sig = signature(e)\n        if sig in seen and not e.metadata.get(\"retry\"):\n            out.append(Detection(\"redundancy\", f\"{e.tool} repeated with identical arguments\", i, \"medium\", {\"signature\": str(sig)}))\n        seen.add(sig)\n    return out\n\n\ndef detect_omission(t):\n    observed = [e.step for e in t.events if e.kind == \"tool_call\" and e.step]\n    return [Detection(\"omission\", f\"required step {r} never happened\", None, \"high\", {\"required_step\": r}) for r in t.required_steps if r not in observed]\n\n\ndef detect_disorder(t):\n    observed = [e.step for e in t.events if e.kind == \"tool_call\" and e.step in t.required_steps]\n    first = {}\n    for k, s in enumerate(observed):\n        first.setdefault(s, k)\n    out = []\n    for a_i, a in enumerate(t.required_steps):\n        for b in t.required_steps[a_i + 1:]:\n            if a in first and b in first and first[b] < first[a]:\n                out.append(Detection(\"disorder\", f\"{b} ran before {a}\", None, \"high\", {\"expected\": f\"{a} then {b}\"}))\n    return out\n\n\ndef detect_success_hallucination(t, matched=False):\n    failed = [i for i, e in enumerate(t.events) if is_failed(e)]\n    if not failed:\n        return []\n    last = failed[-1]\n    if matched:\n        # a later success counts as recovery only if the same tool was called again and succeeded\n        failed_tool = t.events[last - 1].tool if last > 0 else None\n        recovered = any(t.events[j].kind == \"tool_call\" and t.events[j].tool == failed_tool and j + 1 < len(t.events) and is_ok(t.events[j + 1]) for j in range(last + 1, len(t.events)))\n    else:\n        recovered = any(is_ok(e) for e in t.events[last + 1:])\n    if recovered:\n        return []\n    return [Detection(\"success_hallucination\", \"completion claim although the last failure was never recovered\", i, \"high\") for i, e in enumerate(t.events)\n            if i > last and e.kind == \"assistant\" and any(w in e.text.lower() for w in (\"success\", \"done\", \"created\", \"sent\", \"completed\"))]\n\n\ndef descendants_of(t, source):\n    desc = set()\n    changed = True\n    while changed:\n        changed = False\n        for i, e in enumerate(t.events):\n            if i not in desc and (source in e.consumes or desc & set(e.consumes)):\n                desc.add(i)\n                changed = True\n    return desc\n\n\ndef detect_cascades(t):\n    out = []\n    for i, e in enumerate(t.events):\n        if is_failed(e):\n            tainted_calls = [j for j in descendants_of(t, i) if t.events[j].kind == \"tool_call\"]\n            if tainted_calls:\n                out.append(Detection(\"cascading_error\", f\"{len(tainted_calls)} tool call(s) depend on the failed result at event {i}\", tainted_calls[0], \"critical\", {\"source\": i, \"downstream\": sorted(tainted_calls)}))\n    return out"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fm_2.py",
    "headingEn": "main(): seven sections",
    "headingKn": "main(): ಏಳು ವಿಭಾಗಗಳು",
    "descEn": "main() scores the seven synthetic traces against their expected labels, then probes grounding, retry flags, required-step lists, the two cascade rules, recovery matching and a seeded drift table.",
    "descKn": "main() ಏಳು ಕೃತಕ traces ಅನ್ನು ಅವುಗಳ ನಿರೀಕ್ಷಿತ ಲೇಬಲ್‌ಗಳ ವಿರುದ್ಧ ಅಂಕಿಸಿ, ನಂತರ ಆಧಾರ, retry ಫ್ಲ್ಯಾಗ್‌ಗಳು, ಅಗತ್ಯ-ಹಂತ ಪಟ್ಟಿಗಳು, ಎರಡು cascade ನಿಯಮಗಳು, ಚೇತರಿಕೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು seeded drift ಕೋಷ್ಟಕ ಪರೀಕ್ಷಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef prf(tp, fp, fn):\n    p = tp / (tp + fp) if tp + fp else 0.0\n    r = tp / (tp + fn) if tp + fn else 0.0\n    return p, r, (2 * p * r / (p + r) if p + r else 0.0)\n\n\ndef main():\n    section(\"1. The seven synthetic traces: expected labels against detected labels\")\n    tp = fp = fn = 0\n    print(f\"{'trace':16} {'expected':40} {'detected':40}\")\n    for tid, expected, t in SYNTH:\n        got = {d.mode for d in analyze(t)}\n        tp += len(expected & got); fp += len(got - expected); fn += len(expected - got)\n        print(f\"{tid:16} {str(sorted(expected)):40} {str(sorted(got)):40} {'ok' if got == expected else 'MISMATCH'}\")\n    print(\"precision %.2f recall %.2f f1 %.2f on the 7 traces\" % prf(tp, fp, fn))\n    print(\"CASCADE-001 is a genuine mismatch: the success-claim detector did not fire, because notify_user returned 200 after the failures and the simple recovery rule counts any later success as recovery (section 6 shows the fix). On traces we wrote ourselves, even this small set exposed a flaw; the rest of the lab looks for inputs the rules were not written for\")\n\n    section(\"2. Genuinely checking: grounding by equality rejects a correctly derived value\")\n    t = base(\"G\", allowed_tools={\"refund_order\"}, known_tools={\"refund_order\"}, grounded_values={\"amount\": {100.0}},\n             events=[call(\"refund_order\", amount=50.0), res(200)])\n    print(\"request 'refund half of the $100 charge', agent sends amount=50.0 ->\", [(d.mode, d.reason) for d in detect_ungrounded_arguments(t)])\n    t2 = base(\"G2\", allowed_tools={\"refund_order\"}, known_tools={\"refund_order\"}, grounded_values={\"amount\": {100.0, 50.0}}, events=[call(\"refund_order\", amount=5000.0), res(200)])\n    print(\"a grounded set that also lists 50.0 still catches amount=5000.0 ->\", [d.reason for d in detect_ungrounded_arguments(t2)])\n    t3 = base(\"G3\", allowed_tools={\"get_order\"}, events=[call(\"get_order\", order_id=\"ORD-900\"), res(200)])\n    print(\"the same fabricated id with no grounding rule defined ->\", detect_ungrounded_arguments(t3))\n    print(\"equality is a false positive on derived values and silent when nobody wrote a rule for the argument; provenance (where a value came from) is what separates 50 from 5000\")\n\n    section(\"3. Genuinely checking: retry versus redundancy\")\n    for label, evs in ((\"identical repeat, no retry flag\", [call(\"send_invoice\", invoice=\"INV-1\"), res(200), call(\"send_invoice\", invoice=\"INV-1\"), res(200)]),\n                       (\"identical repeat after a timeout, retry flagged\", [call(\"send_invoice\", invoice=\"INV-1\"), res(504), Event(\"tool_call\", tool=\"send_invoice\", args={\"invoice\": \"INV-1\"}, metadata={\"retry\": True}), res(200)]),\n                       (\"retry flag on a call that follows a SUCCESS\", [call(\"send_invoice\", invoice=\"INV-1\"), res(200), Event(\"tool_call\", tool=\"send_invoice\", args={\"invoice\": \"INV-1\"}, metadata={\"retry\": True}), res(200)]),\n                       (\"same tool, different recipients\", [call(\"send_invoice\", invoice=\"INV-1\"), res(200), call(\"send_invoice\", invoice=\"INV-2\"), res(200)])):\n        print(f\"{label:48} -> {[d.mode for d in detect_redundancy(base('R', allowed_tools={'send_invoice'}, events=evs))] or 'none'}\")\n    print(\"the retry flag is whatever the agent or orchestrator wrote: the third case is a duplicate send that the rule excuses because it never checks that the earlier attempt actually failed\")\n\n    section(\"4. Genuinely checking: a list of required steps cannot express steps that may run in either order\")\n    t = base(\"D\", required_steps=[\"retrieve\", \"validate_a\", \"validate_b\", \"combine\"],\n             events=[call(\"x\", step=\"retrieve\"), call(\"x\", step=\"validate_b\"), call(\"x\", step=\"validate_a\"), call(\"x\", step=\"combine\")])\n    print(\"validate_b before validate_a (both are required before combine, order between them is free) ->\", [d.reason for d in detect_disorder(t)])\n    print(\"a flat list turned a legal concurrent order into 'disorder'; a partial order (A before C, B before C) is the right model\")\n    t = base(\"O\", required_steps=[\"test\", \"validate\", \"deploy\"], events=[call(\"x\", step=\"test\"), call(\"x\", step=\"validate\"), call(\"x\", step=\"deploy\")])\n    t.events[1] = call(\"noop\", step=\"validate\")\n    print(\"an agent that labels a no-op as step 'validate' ->\", [d.mode for d in detect_omission(t)] or \"no omission reported\")\n    print(\"omission detection trusts the step label the agent or planner attached; it cannot tell that nothing was validated\")\n\n    section(\"5. Genuinely checking: temporal order versus the dependency graph for cascades\")\n    evs_unrelated = [call(\"create_file\", consumes=[]), res(400, [0]), call(\"log_cleanup\", consumes=[]), res(200, [2])]\n    evs_dependent = [call(\"create_file\"), res(400, [0]), call(\"upload_file\", consumes=[1]), res(404, [2])]\n    evs_unannotated = [call(\"create_file\"), res(400, [0]), call(\"upload_file\"), res(404)]\n    for label, evs in ((\"later unrelated call (consumes nothing)\", evs_unrelated), (\"later call consuming the failed result\", evs_dependent), (\"same dependency but 'consumes' not recorded\", evs_unannotated)):\n        t = base(\"C\", events=evs)\n        part1 = bool([i for i, e in enumerate(evs) if i > 1 and e.kind == \"tool_call\"])\n        print(f\"{label:46} Part 1 rule (any later call): {part1!s:5} | dependency rule: {bool(detect_cascades(t))}\")\n    print(\"the dependency rule ignores unrelated cleanup, but it is only as good as the 'consumes' annotations, so a missing edge hides a real cascade\")\n\n    section(\"6. Genuinely checking: which success counts as recovery\")\n    mixed = base(\"S\", events=[call(\"create_file\"), res(400), call(\"get_weather\"), res(200), say(\"The file was successfully created.\")])\n    for matched in (False, True):\n        print(f\"matched recovery={matched!s:5}: {[d.mode for d in detect_success_hallucination(mixed, matched)] or 'no false claim reported'}\")\n    recovered = base(\"S2\", events=[call(\"create_file\"), res(400), call(\"create_file\"), res(200), say(\"The file was successfully created.\")])\n    print(\"a genuine retry of the same tool:\", [d.mode for d in detect_success_hallucination(recovered, True)] or \"correctly not flagged\")\n    cas = SYNTH[6][2]\n    print(\"CASCADE-001 with matched recovery:\", sorted({d.mode for d in analyze(cas)} | {d.mode for d in detect_success_hallucination(cas, True)}))\n    print(\"an unrelated success (get_weather, or notify_user in CASCADE-001) cleared the claim under the simple rule; matching the recovery to the failed tool caught it, and still only checks tool names, not that the file exists\")\n\n    section(\"7. Genuinely measuring: failure distribution and drift on seeded simulated traffic (mix ASSUMED)\")\n    def distribution(mix, n, seed):\n        rng = random.Random(seed)\n        c = Counter()\n        modes = list(mix)\n        for _ in range(n):\n            r, acc = rng.random(), 0.0\n            for m in modes:\n                acc += mix[m]\n                if r < acc:\n                    c[m] += 1\n                    break\n        return {m: c[m] / n for m in modes}\n    base_mix = {\"context_loss\": 0.012, \"tool_misuse\": 0.020, \"scope_creep\": 0.004, \"cascading_error\": 0.006}\n    new_mix = {\"context_loss\": 0.049, \"tool_misuse\": 0.021, \"scope_creep\": 0.004, \"cascading_error\": 0.006}\n    b = distribution(base_mix, 20000, 1)\n    c = distribution(new_mix, 20000, 2)\n    print(f\"{'mode':18} {'baseline':>9} {'current':>9} {'abs change':>11} {'relative':>9}\")\n    for m in base_mix:\n        print(f\"{m:18} {b[m]:>9.2%} {c[m]:>9.2%} {(c[m] - b[m]) * 100:>+10.2f}p {c[m] / b[m] if b[m] else float('inf'):>8.1f}x\")\n    print(\"the total failure rate moved from about 4 to about 8 percent, but the table shows it is context loss that quadrupled while the others stayed put; the traffic mix is assumed, the comparison method is the point\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The seven synthetic traces: expected labels against detected labels ---\ntrace            expected                                 detected                                \nNORMAL-001       []                                       []                                       ok\nMISUSE-001       ['tool_misuse']                          ['tool_misuse']                          ok\nCONTEXT-001      ['context_loss', 'scope_creep']          ['context_loss', 'scope_creep']          ok\nREDUNDANCY-001   ['redundancy']                           ['redundancy']                           ok\nDISORDER-001     ['disorder']                             ['disorder']                             ok\nOMISSION-001     ['omission']                             ['omission']                             ok\nCASCADE-001      ['cascading_error', 'success_hallucination'] ['cascading_error']                      MISMATCH\nprecision 1.00 recall 0.88 f1 0.93 on the 7 traces\nCASCADE-001 is a genuine mismatch: the success-claim detector did not fire, because notify_user returned 200 after the failures and the simple recovery rule counts any later success as recovery (section 6 shows the fix). On traces we wrote ourselves, even this small set exposed a flaw; the rest of the lab looks for inputs the rules were not written for\n\n--- 2. Genuinely checking: grounding by equality rejects a correctly derived value ---\nrequest 'refund half of the $100 charge', agent sends amount=50.0 -> [('tool_misuse', 'argument amount is not grounded')]\na grounded set that also lists 50.0 still catches amount=5000.0 -> ['argument amount is not grounded']\nthe same fabricated id with no grounding rule defined -> []\nequality is a false positive on derived values and silent when nobody wrote a rule for the argument; provenance (where a value came from) is what separates 50 from 5000\n\n--- 3. Genuinely checking: retry versus redundancy ---\nidentical repeat, no retry flag                  -> ['redundancy']\nidentical repeat after a timeout, retry flagged  -> none\nretry flag on a call that follows a SUCCESS      -> none\nsame tool, different recipients                  -> none\nthe retry flag is whatever the agent or orchestrator wrote: the third case is a duplicate send that the rule excuses because it never checks that the earlier attempt actually failed\n\n--- 4. Genuinely checking: a list of required steps cannot express steps that may run in either order ---\nvalidate_b before validate_a (both are required before combine, order between them is free) -> ['validate_b ran before validate_a']\na flat list turned a legal concurrent order into 'disorder'; a partial order (A before C, B before C) is the right model\nan agent that labels a no-op as step 'validate' -> no omission reported\nomission detection trusts the step label the agent or planner attached; it cannot tell that nothing was validated\n\n--- 5. Genuinely checking: temporal order versus the dependency graph for cascades ---\nlater unrelated call (consumes nothing)        Part 1 rule (any later call): True  | dependency rule: False\nlater call consuming the failed result         Part 1 rule (any later call): True  | dependency rule: True\nsame dependency but 'consumes' not recorded    Part 1 rule (any later call): True  | dependency rule: False\nthe dependency rule ignores unrelated cleanup, but it is only as good as the 'consumes' annotations, so a missing edge hides a real cascade\n\n--- 6. Genuinely checking: which success counts as recovery ---\nmatched recovery=False: no false claim reported\nmatched recovery=True : ['success_hallucination']\na genuine retry of the same tool: correctly not flagged\nCASCADE-001 with matched recovery: ['cascading_error', 'success_hallucination']\nan unrelated success (get_weather, or notify_user in CASCADE-001) cleared the claim under the simple rule; matching the recovery to the failed tool caught it, and still only checks tool names, not that the file exists\n\n--- 7. Genuinely measuring: failure distribution and drift on seeded simulated traffic (mix ASSUMED) ---\nmode                baseline   current  abs change  relative\ncontext_loss           1.32%     4.99%      +3.67p      3.8x\ntool_misuse            2.02%     1.97%      -0.05p      1.0x\nscope_creep            0.37%     0.37%      +0.00p      1.0x\ncascading_error        0.60%     0.65%      +0.05p      1.1x\nthe total failure rate moved from about 4 to about 8 percent, but the table shows it is context loss that quadrupled while the others stayed put; the traffic mix is assumed, the comparison method is the point"
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
    "headingEn": "Genuinely Found: Our Own Dataset Disagreed With Us on the First Run",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಮ್ಮದೇ ಡೇಟಾಸೆಟ್ ಮೊದಲ ಓಟದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಭಿನ್ನವಾಯಿತು",
    "bodyEn": "Section 1: six of the seven traces matched their expected labels. CASCADE-001 did not: it expected cascading_error and success_hallucination but only cascading_error was detected, because notify_user returned 200 after the failures and the simple recovery rule counted any later success as recovery. Precision was 1.00, recall 0.88 and F1 0.93 on the seven traces. Section 6 shows the fix: matching the recovery to the failed tool made CASCADE-001 produce both labels, and a genuine retry of the same tool was still not flagged. The fix still checks tool names, not that the file exists.",
    "bodyKn": "ವಿಭಾಗ 1: ಏಳು traces ಗಳಲ್ಲಿ ಆರು ತಮ್ಮ ನಿರೀಕ್ಷಿತ ಲೇಬಲ್‌ಗಳಿಗೆ ಹೊಂದಿದವು. CASCADE-001 ಹೊಂದಲಿಲ್ಲ: ಅದು cascading_error ಮತ್ತು success_hallucination ನಿರೀಕ್ಷಿಸಿತ್ತು ಆದರೆ cascading_error ಮಾತ್ರ ಪತ್ತೆಯಾಯಿತು, ಏಕೆಂದರೆ ವೈಫಲ್ಯಗಳ ನಂತರ notify_user 200 ಮರಳಿಸಿತು ಮತ್ತು ಸರಳ ಚೇತರಿಕೆ ನಿಯಮ ನಂತರದ ಯಾವುದೇ ಯಶಸ್ಸನ್ನು ಚೇತರಿಕೆ ಎಂದು ಎಣಿಸಿತು. ಏಳು traces ಮೇಲೆ precision 1.00, recall 0.88 ಮತ್ತು F1 0.93. ವಿಭಾಗ 6 ಪರಿಹಾರ ತೋರಿಸುತ್ತದೆ: ಚೇತರಿಕೆಯನ್ನು ವಿಫಲ tool ಗೆ ಹೊಂದಿಸಿದಾಗ CASCADE-001 ಎರಡೂ ಲೇಬಲ್ ನೀಡಿತು, ಮತ್ತು ಅದೇ tool ನ ನಿಜ ಮರುಪ್ರಯತ್ನ ಇನ್ನೂ ಫ್ಲ್ಯಾಗ್ ಆಗಲಿಲ್ಲ. ಪರಿಹಾರ ಇನ್ನೂ tool ಹೆಸರುಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಫೈಲ್ ಅಸ್ತಿತ್ವವನ್ನಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Grounding, Retry Flags and Step Lists Each Fail in a Specific Way",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆಧಾರ, retry ಫ್ಲ್ಯಾಗ್‌ಗಳು ಮತ್ತು ಹಂತ ಪಟ್ಟಿಗಳು ಪ್ರತಿಯೊಂದೂ ನಿರ್ದಿಷ್ಟ ರೀತಿ ವಿಫಲ",
    "bodyEn": "Section 2: \"refund half of the $100 charge\" with amount=50.0 was flagged as ungrounded because 50 is derived, not stated, while amount=5000.0 was still caught, and with no rule for an argument a fabricated id passed with no flag. Section 3: a retry flag on a call that followed a success was excused, so a duplicate send passed. Section 4: validate_b before validate_a was reported as disorder although both are required before combine in either order, and a no-op labelled \"validate\" produced no omission.",
    "bodyKn": "ವಿಭಾಗ 2: amount=50.0 ಇರುವ \"refund half of the $100 charge\" ಆಧಾರರಹಿತ ಎಂದು ಫ್ಲ್ಯಾಗ್ ಆಯಿತು ಏಕೆಂದರೆ 50 ಉತ್ಪನ್ನ ಮೌಲ್ಯ, ಹೇಳಿದ್ದಲ್ಲ, ಆದರೆ amount=5000.0 ಇನ್ನೂ ಹಿಡಿಯಲ್ಪಟ್ಟಿತು, ಮತ್ತು ಆರ್ಗ್ಯುಮೆಂಟ್‌ಗೆ ನಿಯಮ ಇಲ್ಲದಿದ್ದಾಗ ಕಲ್ಪಿತ id ಫ್ಲ್ಯಾಗ್ ಇಲ್ಲದೆ ಹಾದುಹೋಯಿತು. ವಿಭಾಗ 3: ಯಶಸ್ಸಿನ ನಂತರದ ಕರೆಯ ಮೇಲಿನ retry ಫ್ಲ್ಯಾಗ್ ಕ್ಷಮಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ನಕಲು send ಹಾದುಹೋಯಿತು. ವಿಭಾಗ 4: combine ಮುನ್ನ ಎರಡೂ ಯಾವ ಕ್ರಮದಲ್ಲಾದರೂ ಬೇಕಿದ್ದರೂ validate_b, validate_a ಮುನ್ನ disorder ಎಂದು ವರದಿಯಾಯಿತು, ಮತ್ತು \"validate\" ಲೇಬಲ್ ಇರುವ no-op omission ನೀಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Dependency Edges Remove False Cascades and Add a New Blind Spot; Drift Needs a Table",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅವಲಂಬನೆ edges ತಪ್ಪು cascades ತೆಗೆಯುತ್ತವೆ ಮತ್ತು ಹೊಸ ಕುರುಡು ಬಿಂದು ಸೇರಿಸುತ್ತವೆ; drift ಗೆ ಕೋಷ್ಟಕ ಬೇಕು",
    "bodyEn": "Section 5: for a later unrelated call the Part 1 any-later-call rule said True and the dependency rule said False; for a call consuming the failed result both said True; when the same dependency was not recorded the dependency rule said False, so a real cascade was hidden. Section 7 (seeded traffic, mix assumed): the total failure rate moved from about 4 to about 8 percent, and the table shows context_loss rising from 1.32 to 4.99 percent (3.8 times) while tool_misuse (2.02 to 1.97), scope_creep (0.37 to 0.37) and cascading_error (0.60 to 0.65) stayed put.",
    "bodyKn": "ವಿಭಾಗ 5: ನಂತರದ ಸಂಬಂಧವಿಲ್ಲದ ಕರೆಗೆ ಭಾಗ 1 ರ ಯಾವುದೇ-ನಂತರದ-ಕರೆ ನಿಯಮ True ಮತ್ತು ಅವಲಂಬನೆ ನಿಯಮ False ಎಂದಿತು; ವಿಫಲ ಫಲಿತಾಂಶ ಬಳಸುವ ಕರೆಗೆ ಎರಡೂ True ಎಂದವು; ಅದೇ ಅವಲಂಬನೆ ದಾಖಲಾಗದಿದ್ದಾಗ ಅವಲಂಬನೆ ನಿಯಮ False ಎಂದಿತು, ಆದ್ದರಿಂದ ನಿಜ cascade ಮರೆಯಾಯಿತು. ವಿಭಾಗ 7 (seeded ಟ್ರಾಫಿಕ್, ಮಿಶ್ರಣ ಊಹೆ): ಒಟ್ಟು ವೈಫಲ್ಯ ದರ ಸುಮಾರು 4 ರಿಂದ ಸುಮಾರು 8 ಶೇಕಡಾಕ್ಕೆ ಹೋಯಿತು, ಮತ್ತು ಕೋಷ್ಟಕ context_loss 1.32 ರಿಂದ 4.99 ಶೇಕಡಾಕ್ಕೆ (3.8 ಪಟ್ಟು) ಏರಿದ್ದನ್ನು ತೋರಿಸುತ್ತದೆ, tool_misuse (2.02 ರಿಂದ 1.97), scope_creep (0.37 ರಿಂದ 0.37) ಮತ್ತು cascading_error (0.60 ರಿಂದ 0.65) ಸ್ಥಿರವಾಗಿ ಉಳಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Each added field sharpens one rule and creates a new way to be wrong, so you need to know which annotations your agent or orchestrator writes itself and which a trusted component records.",
    "bodyKn": "ಪ್ರತಿ ಸೇರಿಸಿದ ಕ್ಷೇತ್ರ ಒಂದು ನಿಯಮವನ್ನು ಹರಿತಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ತಪ್ಪಾಗಲು ಹೊಸ ದಾರಿ ಸೃಷ್ಟಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ನಿಮ್ಮ agent ಅಥವಾ orchestrator ತಾನೇ ಯಾವ annotations ಬರೆಯುತ್ತದೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಘಟಕ ಯಾವುದನ್ನು ದಾಖಲಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a detector that passes its own test set is correct.\" On seven traces we wrote ourselves, recall was still 0.88 and one trace disagreed with us.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ತನ್ನದೇ ಪರೀಕ್ಷಾ ಸೆಟ್ ಹಾದುಹೋಗುವ detector ಸರಿ.\" ನಾವೇ ಬರೆದ ಏಳು traces ಮೇಲೂ recall 0.88 ಆಗಿತ್ತು ಮತ್ತು ಒಂದು trace ನಮ್ಮೊಂದಿಗೆ ಭಿನ್ನವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Grounding: a value traceable to the request or a tool result. Provenance: where a value came from. Partial order: A before C and B before C with A, B free. Consumes edge: this event used that result. Matched recovery: a later success of the same tool.",
    "bodyKn": "Grounding: ವಿನಂತಿ ಅಥವಾ tool ಫಲಿತಾಂಶಕ್ಕೆ ಗುರುತಿಸಬಹುದಾದ ಮೌಲ್ಯ. Provenance: ಮೌಲ್ಯ ಎಲ್ಲಿಂದ ಬಂತು. Partial order: A, C ಮುನ್ನ ಮತ್ತು B, C ಮುನ್ನ, A ಮತ್ತು B ಮುಕ್ತ. Consumes edge: ಈ event ಆ ಫಲಿತಾಂಶ ಬಳಸಿತು. Matched recovery: ಅದೇ tool ನ ನಂತರದ ಯಶಸ್ಸು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Six of seven traces matched; CASCADE-001 did not (precision 1.00, recall 0.88, F1 0.93). 2) Equality grounding flagged a derived 50 and was silent with no rule. 3) A retry flag after a success excused a duplicate send. 4) A flat step list flagged a legal order and trusted a no-op label. 5) Dependency edges removed false cascades but a missing edge hid a real one. 6) Matching recovery to the failed tool fixed CASCADE-001. 7) Context loss rose 3.8 times while the other modes stayed flat.",
    "bodyKn": "1) ಏಳರಲ್ಲಿ ಆರು traces ಹೊಂದಿದವು; CASCADE-001 ಹೊಂದಲಿಲ್ಲ (precision 1.00, recall 0.88, F1 0.93). 2) ಸಮಾನತೆ ಆಧಾರ ಉತ್ಪನ್ನ 50 ಅನ್ನು ಫ್ಲ್ಯಾಗ್ ಮಾಡಿ ನಿಯಮ ಇಲ್ಲದಾಗ ಮೌನವಾಗಿತ್ತು. 3) ಯಶಸ್ಸಿನ ನಂತರದ retry ಫ್ಲ್ಯಾಗ್ ನಕಲು send ಕ್ಷಮಿಸಿತು. 4) ಸಮತಟ್ಟಾದ ಹಂತ ಪಟ್ಟಿ ಕಾನೂನುಬದ್ಧ ಕ್ರಮವನ್ನು ಫ್ಲ್ಯಾಗ್ ಮಾಡಿ no-op ಲೇಬಲ್ ನಂಬಿತು. 5) ಅವಲಂಬನೆ edges ತಪ್ಪು cascades ತೆಗೆದವು ಆದರೆ ಕಾಣೆಯಾದ edge ನಿಜವಾದದ್ದನ್ನು ಮರೆಮಾಡಿತು. 6) ಚೇತರಿಕೆಯನ್ನು ವಿಫಲ tool ಗೆ ಹೊಂದಿಸಿದ್ದು CASCADE-001 ಸರಿಪಡಿಸಿತು. 7) ಇತರ ವಿಧಗಳು ಸ್ಥಿರವಾಗಿದ್ದಾಗ context loss 3.8 ಪಟ್ಟು ಏರಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did CASCADE-001 mismatch its expected labels on the first run?",
      "qKn": "ಮೊದಲ ಓಟದಲ್ಲಿ CASCADE-001 ತನ್ನ ನಿರೀಕ್ಷಿತ ಲೇಬಲ್‌ಗಳಿಗೆ ಏಕೆ ಹೊಂದಲಿಲ್ಲ?",
      "opts": [
       "The trace was empty",
       "A later unrelated success (notify_user, 200) counted as recovery",
       "The tool was unknown",
       "The status was 404"
      ],
      "optsKn": [
       "Trace ಖಾಲಿಯಾಗಿತ್ತು",
       "ನಂತರದ ಸಂಬಂಧವಿಲ್ಲದ ಯಶಸ್ಸು (notify_user, 200) ಚೇತರಿಕೆ ಎಂದು ಎಣಿಕೆಯಾಯಿತು",
       "Tool ಅಜ್ಞಾತ",
       "Status 404 ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What went wrong with equality grounding on \"refund half of the $100 charge\"?",
      "qKn": "\"refund half of the $100 charge\" ಮೇಲೆ ಸಮಾನತೆ ಆಧಾರದಲ್ಲಿ ಏನು ತಪ್ಪಾಯಿತು?",
      "opts": [
       "It missed 5000",
       "It flagged the derived value 50 as ungrounded",
       "It crashed",
       "Nothing"
      ],
      "optsKn": [
       "5000 ತಪ್ಪಿಸಿತು",
       "ಉತ್ಪನ್ನ ಮೌಲ್ಯ 50 ಅನ್ನು ಆಧಾರರಹಿತ ಎಂದು ಫ್ಲ್ಯಾಗ್ ಮಾಡಿತು",
       "ಕ್ರ್ಯಾಶ್ ಆಯಿತು",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What did the retry flag on a call after a success do?",
      "qKn": "ಯಶಸ್ಸಿನ ನಂತರದ ಕರೆಯ ಮೇಲಿನ retry ಫ್ಲ್ಯಾಗ್ ಏನು ಮಾಡಿತು?",
      "opts": [
       "Caught the duplicate",
       "Excused a duplicate send",
       "Blocked the call",
       "Removed the trace"
      ],
      "optsKn": [
       "ನಕಲು ಹಿಡಿಯಿತು",
       "ನಕಲು send ಕ್ಷಮಿಸಿತು",
       "ಕರೆ ತಡೆಯಿತು",
       "Trace ತೆಗೆಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What is the weakness of the dependency-based cascade rule?",
      "qKn": "ಅವಲಂಬನೆ-ಆಧಾರಿತ cascade ನಿಯಮದ ದೌರ್ಬಲ್ಯ ಏನು?",
      "opts": [
       "It flags unrelated cleanup",
       "A missing consumes annotation hides a real cascade",
       "It needs a model",
       "It is slower"
      ],
      "optsKn": [
       "ಸಂಬಂಧವಿಲ್ಲದ ಸ್ವಚ್ಛತೆಯನ್ನು ಫ್ಲ್ಯಾಗ್ ಮಾಡುತ್ತದೆ",
       "ಕಾಣೆಯಾದ consumes annotation ನಿಜ cascade ಮರೆಮಾಡುತ್ತದೆ",
       "ಮಾದರಿ ಬೇಕು",
       "ನಿಧಾನ"
      ],
      "correct": 1
     },
     {
      "q": "In the seeded drift table, which mode rose?",
      "qKn": "Seeded drift ಕೋಷ್ಟಕದಲ್ಲಿ ಯಾವ ವಿಧ ಏರಿತು?",
      "opts": [
       "tool_misuse",
       "context_loss, from 1.32 to 4.99 percent",
       "scope_creep",
       "cascading_error"
      ],
      "optsKn": [
       "tool_misuse",
       "context_loss, 1.32 ರಿಂದ 4.99 ಶೇಕಡಾ",
       "scope_creep",
       "cascading_error"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
