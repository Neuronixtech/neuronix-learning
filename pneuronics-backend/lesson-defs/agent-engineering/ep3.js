module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af752671dabe46ef6f6e37d",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build an Evidence-Backed Execution Plan (Part 3 of 3) — Execution State, Gates and Recovery",
 "titleKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 3 / 3) — ಕಾರ್ಯಗತ ಸ್ಥಿತಿ, Gates ಮತ್ತು ಮರುಪಡೆಯುವಿಕೆ",
 "desc": "Keep a durable execution state, release work only after verification, resume safely after interruption and gate a real diff.",
 "descKn": "ಬಾಳಿಕೆ ಬರುವ ಕಾರ್ಯಗತ ಸ್ಥಿತಿ ಇಟ್ಟುಕೊಂಡು, ಪರಿಶೀಲನೆಯ ನಂತರ ಮಾತ್ರ ಕೆಲಸ ಬಿಡುಗಡೆ ಮಾಡಿ, ಅಡಚಣೆಯ ನಂತರ ಸುರಕ್ಷಿತವಾಗಿ ಪುನರಾರಂಭಿಸಿ ಮತ್ತು ನಿಜ diff ಅನ್ನು gate ಮಾಡಿ.",
 "objectives": [
  "Keep four statuses.",
  "Release work on verification.",
  "Recover interrupted items.",
  "Write state atomically.",
  "Gate the real diff."
 ],
 "objectivesKn": [
  "ನಾಲ್ಕು ಸ್ಥಿತಿ ಇಟ್ಟುಕೊಳ್ಳಿ.",
  "ಪರಿಶೀಲನೆಯಲ್ಲಿ ಕೆಲಸ ಬಿಡುಗಡೆ ಮಾಡಿ.",
  "ಅಡಚಣೆಯ ಘಟಕಗಳನ್ನು ಮರುಪಡೆಯಿರಿ.",
  "ಸ್ಥಿತಿಯನ್ನು atomic ಆಗಿ ಬರೆಯಿರಿ.",
  "ನಿಜ diff ಅನ್ನು gate ಮಾಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build an Evidence-Backed Execution Plan (Part 3 of 3)",
    "textKn": "ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ ನಿರ್ಮಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: durable execution state, resume after interruption, atomic state writes, a gate over a real git diff, stale proof and an ordering rule for irreversible work. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind an evidence-backed execution plan (work items, dependency waves, evidence receipts, proof runs and durable state), not the real software, and the repository, evidence and durations are made up by the lab and no language model is involved, so no real LLM behaviour is measured. In the pasted lesson several code listings were cut off partway and the original main.py was not supplied, so the labs are our own implementation of the behaviour the surrounding text describes. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಬಾಳಿಕೆ ಬರುವ ಕಾರ್ಯಗತ ಸ್ಥಿತಿ, ಅಡಚಣೆಯ ನಂತರ ಪುನರಾರಂಭ, atomic ಸ್ಥಿತಿ ಬರಹಗಳು, ನಿಜ git diff ಮೇಲಿನ gate, ಹಳೆಯ ಪುರಾವೆ ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದ ಕೆಲಸಕ್ಕೆ ಕ್ರಮ ನಿಯಮ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಸಾಕ್ಷ್ಯ-ಆಧಾರಿತ ಕಾರ್ಯಗತ ಯೋಜನೆ (ಕೆಲಸ ಘಟಕಗಳು, ಅವಲಂಬನೆ ಅಲೆಗಳು, ಸಾಕ್ಷ್ಯ ರಸೀದಿಗಳು, ಪುರಾವೆ ಓಟಗಳು ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಥಿತಿ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು repository, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಅವಧಿಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ lesson ನಲ್ಲಿ ಹಲವು ಕೋಡ್ ಪಟ್ಟಿಗಳು ಅರ್ಧದಲ್ಲಿ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿದ್ದವು ಮತ್ತು ಮೂಲ main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ಸುತ್ತಲಿನ ಪಠ್ಯ ವಿವರಿಸುವ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Plan Survives; a Session Does Not",
    "textKn": "ಯೋಜನೆ ಉಳಿಯುತ್ತದೆ; ಸೆಷನ್ ಉಳಿಯುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "State, Gates and the Order of Irreversible Work",
    "headingKn": "ಸ್ಥಿತಿ, Gates ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದ ಕೆಲಸದ ಕ್ರಮ",
    "bodyEn": "A schedule says what could run; an execution state says what has been verified. This part keeps four statuses, releases work only after its prerequisites are verified, recovers items left running by an interrupted session, writes state atomically, and runs a gate over a real git diff that blocks a forbidden change even when every test passes. It ends with a rule of our own for irreversible work, which the lesson says needs judgement and not only a graph.",
    "bodyKn": "ವೇಳಾಪಟ್ಟಿ ಏನು ಓಡಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ; ಕಾರ್ಯಗತ ಸ್ಥಿತಿ ಏನು ಪರಿಶೀಲಿತವಾಗಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ. ಈ ಭಾಗ ನಾಲ್ಕು ಸ್ಥಿತಿ ಇಟ್ಟುಕೊಂಡು, ಪೂರ್ವಾಪೇಕ್ಷಿತಗಳು ಪರಿಶೀಲಿತವಾದ ನಂತರ ಮಾತ್ರ ಕೆಲಸ ಬಿಡುಗಡೆ ಮಾಡಿ, ಅಡಚಣೆಯ ಸೆಷನ್ ಓಡುತ್ತಿರುವಂತೆ ಬಿಟ್ಟ ಘಟಕಗಳನ್ನು ಮರುಪಡೆದು, ಸ್ಥಿತಿಯನ್ನು atomic ಆಗಿ ಬರೆದು, ಎಲ್ಲಾ ಪರೀಕ್ಷೆ ಪಾಸ್ ಆದರೂ ನಿಷೇಧಿತ ಬದಲಾವಣೆ ತಡೆಯುವ ನಿಜ git diff ಮೇಲಿನ gate ಓಡಿಸುತ್ತದೆ. ಹಿಂತಿರುಗಿಸಲಾಗದ ಕೆಲಸಕ್ಕೆ ನಮ್ಮದೇ ನಿಯಮದೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳುತ್ತದೆ, ಅದಕ್ಕೆ ಗ್ರಾಫ್ ಮಾತ್ರವಲ್ಲ ವಿವೇಚನೆ ಬೇಕು ಎಂದು lesson ಹೇಳುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Verified Decides What Runs Next",
    "headingKn": "Verified ಮುಂದೆ ಏನು ಓಡುತ್ತದೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Verified decides what runs next</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">state</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pending..verified</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">resume</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">running = unfinished</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">gate</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">scope + proof + count</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">stale proof</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reopen on change</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">schedule is a plan, state is a fact</text></svg>",
    "captionEn": "The schedule is a plan; the state is a fact.",
    "captionKn": "ವೇಳಾಪಟ್ಟಿ ಯೋಜನೆ; ಸ್ಥಿತಿ ಸತ್ಯ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Schedule versus state",
    "headingKn": "ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಸ್ಥಿತಿ",
    "headers": [
     "Question",
     "Schedule answers",
     "State answers"
    ],
    "rows": [
     [
      "can W-002 start",
      "after W-001 is in an earlier wave",
      "after W-001 is verified"
     ],
     [
      "W-001 failed",
      "still released W-002",
      "releases nothing"
     ],
     [
      "session died mid-item",
      "cannot tell",
      "item left running, reset to pending"
     ],
     [
      "proof was for old code",
      "cannot tell",
      "needs the content hash in the receipt"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building and Testing the Ideas",
    "textKn": "ಕಲ್ಪನೆಗಳನ್ನು ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ep_3.py",
    "headingEn": "State transitions, recovery, the gate and the irreversible-work rule",
    "headingKn": "ಸ್ಥಿತಿ ಪರಿವರ್ತನೆಗಳು, ಮರುಪಡೆಯುವಿಕೆ, gate ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದ-ಕೆಲಸ ನಿಯಮ",
    "descEn": "set_status refuses unknown statuses and a verified status with no receipt. ready_to_execute releases only pending items whose prerequisites are verified. recover resets running items. scope_gate checks the real diff against allowed and forbidden patterns and requires a proof that ran at least one test. irreversible_before_approval is our own rule.",
    "descKn": "set_status ಅಜ್ಞಾತ ಸ್ಥಿತಿ ಮತ್ತು ರಸೀದಿ ಇಲ್ಲದ verified ಸ್ಥಿತಿ ನಿರಾಕರಿಸುತ್ತದೆ. ready_to_execute ಪೂರ್ವಾಪೇಕ್ಷಿತಗಳು ಪರಿಶೀಲಿತವಾದ pending ಘಟಕಗಳನ್ನು ಮಾತ್ರ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ. recover ಓಡುತ್ತಿರುವ ಘಟಕಗಳನ್ನು ಮರುಹೊಂದಿಸುತ್ತದೆ. scope_gate ನಿಜ diff ಅನ್ನು ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ ಮಾದರಿಗಳಿಗೆ ಹೋಲಿಸಿ ಕನಿಷ್ಠ ಒಂದು ಪರೀಕ್ಷೆ ಓಡಿಸಿದ ಪುರಾವೆ ಬಯಸುತ್ತದೆ. irreversible_before_approval ನಮ್ಮದೇ ನಿಯಮ.",
    "code": "def new_state():\n    return {k: {\"status\": \"pending\", \"proof_receipt\": None} for k in PLAN}\n\n\ndef set_status(state, k, status, receipt=None):\n    if k not in state:\n        raise KeyError(f\"unknown item {k}\")\n    if status not in STATUSES:\n        raise ValueError(f\"unknown status {status}\")\n    if status == \"verified\" and not receipt:\n        raise ValueError(\"verified requires a proof receipt\")\n    state[k] = {\"status\": status, \"proof_receipt\": receipt}\n\n\ndef ready_to_execute(state):\n    return sorted(k for k, v in state.items() if v[\"status\"] == \"pending\" and all(state[d][\"status\"] == \"verified\" for d in PLAN[k]))\n\n\ndef recover(state):\n    interrupted = [k for k, v in state.items() if v[\"status\"] == \"running\"]\n    for k in interrupted:\n        state[k] = {\"status\": \"pending\", \"proof_receipt\": None}\n    return interrupted\n\n\ndef scope_gate(changed, allowed, forbidden, proof):\n    reasons = []\n    for f in changed:\n        if any(fnmatch(f, p) for p in forbidden):\n            reasons.append(f\"forbidden change: {f}\")\n        elif not any(fnmatch(f, p) for p in allowed):\n            reasons.append(f\"outside allowed paths: {f}\")\n    if proof is None:\n        reasons.append(\"no proof receipt\")\n    elif proof[\"timed_out\"] or proof[\"exit_code\"] != proof[\"expected\"]:\n        reasons.append(\"proof failed\")\n    elif proof.get(\"tests_ran\", 0) < 1:\n        reasons.append(\"proof ran no tests\")\n    return (\"PASS\" if not reasons else \"BLOCK\"), reasons\n\n\ndef irreversible_before_approval(items):\n    \"\"\"Our own rule: an item marked irreversible must depend, directly or indirectly, on an item marked approval.\"\"\"\n    by = {i[\"id\"]: i for i in items}\n\n    def ancestors(k, seen=None):\n        seen = seen or set()\n        for d in by[k][\"deps\"]:\n            if d not in seen:\n                seen.add(d)\n                ancestors(d, seen)\n        return seen\n    return [i[\"id\"] for i in items if i.get(\"irreversible\") and not any(by[a].get(\"approval\") for a in ancestors(i[\"id\"]))]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ep_3.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() walks one item through its statuses, saves and reloads an interrupted state, compares an in-place write with a temp-file write, gates a real git diff four ways, shows a stale receipt and checks four items for an approval ancestor.",
    "descKn": "main() ಒಂದು ಘಟಕವನ್ನು ಅದರ ಸ್ಥಿತಿಗಳ ಮೂಲಕ ನಡೆಸಿ, ಅಡಚಣೆಯ ಸ್ಥಿತಿ ಉಳಿಸಿ ಮರುಲೋಡ್ ಮಾಡಿ, ಸ್ಥಳದಲ್ಲೇ ಬರಹವನ್ನು temp-ಫೈಲ್ ಬರಹಕ್ಕೆ ಹೋಲಿಸಿ, ನಿಜ git diff ಅನ್ನು ನಾಲ್ಕು ರೀತಿ gate ಮಾಡಿ, ಹಳೆಯ ರಸೀದಿ ತೋರಿಸಿ ಮತ್ತು ನಾಲ್ಕು ಘಟಕಗಳನ್ನು ಅನುಮೋದನೆ ಪೂರ್ವಜನಿಗಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: what can run next depends on verification, not on the schedule\")\n    s = new_state()\n    print(\"start:\", ready_to_execute(s))\n    set_status(s, \"W-001\", \"running\")\n    print(\"W-001 running:\", ready_to_execute(s))\n    set_status(s, \"W-001\", \"failed\")\n    print(\"W-001 failed :\", ready_to_execute(s))\n    set_status(s, \"W-001\", \"verified\", \"receipts/w001.json\")\n    print(\"W-001 verified:\", ready_to_execute(s))\n    try:\n        set_status(s, \"W-002\", \"verified\")\n    except ValueError as e:\n        print(\"verifying W-002 with no receipt:\", e)\n    print(\"the wave schedule would have released W-002 and W-003 as soon as W-001 was placed in wave 1, while the execution state released them only once W-001 was verified; a failed prerequisite releases nothing\")\n\n    section(\"2. Genuinely running: resuming after an interruption\")\n    s = new_state()\n    set_status(s, \"W-001\", \"verified\", \"receipts/w001.json\")\n    set_status(s, \"W-002\", \"running\")\n    path = Path(tempfile.mkdtemp()) / \"state.json\"\n    path.write_text(json.dumps(s), encoding=\"utf-8\")\n    loaded = json.loads(path.read_text(encoding=\"utf-8\"))\n    print(\"state on disk after the session ended:\", {k: v[\"status\"] for k, v in loaded.items()})\n    print(\"interrupted items found:\", recover(loaded), \"| now ready:\", ready_to_execute(loaded))\n    print(\"W-002 was left running with no receipt, so the next session treated it as unfinished and reset it to pending instead of assuming success; the workspace and logs still have to be inspected before it is rerun, because the first attempt may have changed files\")\n\n    section(\"3. Genuinely running: a torn state file versus an atomic replace\")\n    good = Path(tempfile.mkdtemp()) / \"state.json\"\n    good.write_text(json.dumps(new_state()), encoding=\"utf-8\")\n    good.write_text(json.dumps(new_state())[:25], encoding=\"utf-8\")\n    try:\n        json.loads(good.read_text(encoding=\"utf-8\"))\n        print(\"torn write: parsed\")\n    except json.JSONDecodeError:\n        print(\"torn write (cut short on purpose): unreadable\")\n    safe = Path(tempfile.mkdtemp()) / \"state.json\"\n    safe.write_text(json.dumps(new_state()), encoding=\"utf-8\")\n    tmp = safe.with_suffix(\".tmp\")\n    tmp.write_text(json.dumps(new_state())[:25], encoding=\"utf-8\")\n    print(\"crash while writing the temp file, state file still parses:\", isinstance(json.loads(safe.read_text(encoding=\"utf-8\")), dict))\n    os.replace(safe, safe.with_suffix(\".bak\"))\n    print(\"the in-place write left an unreadable file, and writing a temp file first kept the last good state when the simulated crash hit the temp file\")\n\n    section(\"4. Genuinely running: the gate on a real git diff, tests passing and a forbidden file changed\")\n    with tempfile.TemporaryDirectory() as d:\n        repo = Path(d)\n        git(repo, \"init\", \"-q\")\n        (repo / \"app\").mkdir()\n        (repo / \"app/checkout.py\").write_text(\"x = 1\" + chr(10), encoding=\"utf-8\")\n        (repo / \"production.env\").write_text(\"KEY=old\" + chr(10), encoding=\"utf-8\")\n        git(repo, \"add\", \"-A\")\n        git(repo, \"commit\", \"-q\", \"-m\", \"base\")\n        base = git(repo, \"rev-parse\", \"HEAD\")\n        (repo / \"app/checkout.py\").write_text(\"x = 2\" + chr(10), encoding=\"utf-8\")\n        proof = {\"exit_code\": 0, \"expected\": 0, \"timed_out\": False, \"tests_ran\": 3}\n        allowed, forbidden = [\"app/*\", \"tests/*\"], [\"production.env\"]\n        changed = sorted(set(git(repo, \"diff\", \"--name-only\", base).splitlines()))\n        print(\"changed:\", changed, \"->\", scope_gate(changed, allowed, forbidden, proof))\n        (repo / \"production.env\").write_text(\"KEY=new\" + chr(10), encoding=\"utf-8\")\n        changed = sorted(set(git(repo, \"diff\", \"--name-only\", base).splitlines()))\n        print(\"changed:\", changed, \"->\", scope_gate(changed, allowed, forbidden, proof))\n        print(\"no proof            ->\", scope_gate(changed[:1], allowed, forbidden, None))\n        print(\"proof ran zero tests ->\", scope_gate(changed[:1], allowed, forbidden, dict(proof, tests_ran=0)))\n    print(\"with every test passing the gate still blocked once production.env was in the diff, and it also blocked a missing proof and a proof that ran no tests; the changed-file list came from git and not from the worker\")\n\n    section(\"5. Genuinely running: stale proof after a later edit\")\n    with tempfile.TemporaryDirectory() as d:\n        f = Path(d) / \"calc.py\"\n        f.write_text(\"v1\", encoding=\"utf-8\")\n        import hashlib\n        receipt = {\"file\": \"calc.py\", \"sha\": hashlib.sha256(f.read_bytes()).hexdigest()[:10]}\n        f.write_text(\"v2\", encoding=\"utf-8\")\n        now = hashlib.sha256(f.read_bytes()).hexdigest()[:10]\n        print(\"receipt sha:\", receipt[\"sha\"], \"| file now:\", now, \"| proof still applies:\", receipt[\"sha\"] == now)\n    print(\"a proof that passed on the first version says nothing about the second, so a verified item must record what it was verified against and be reopened when that content changes\")\n\n    section(\"6. Genuinely checking: irreversible work before approval (a rule of our own)\")\n    items = [{\"id\": \"W-1\", \"deps\": []}, {\"id\": \"W-2\", \"deps\": [\"W-1\"], \"irreversible\": True}, {\"id\": \"W-3\", \"deps\": [\"W-1\"], \"approval\": True}, {\"id\": \"W-4\", \"deps\": [\"W-3\"], \"irreversible\": True}]\n    print(\"irreversible items with no approval ancestor:\", irreversible_before_approval(items))\n    print(\"the structural validator accepts both W-2 and W-4 because both have valid dependencies, and only this extra rule noticed that W-2 can run without an approval step before it; deciding which items are irreversible is a judgement, not something the graph can infer\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: what can run next depends on verification, not on the schedule ---\nstart: ['W-001']\nW-001 running: []\nW-001 failed : []\nW-001 verified: ['W-002', 'W-003']\nverifying W-002 with no receipt: verified requires a proof receipt\nthe wave schedule would have released W-002 and W-003 as soon as W-001 was placed in wave 1, while the execution state released them only once W-001 was verified; a failed prerequisite releases nothing\n\n--- 2. Genuinely running: resuming after an interruption ---\nstate on disk after the session ended: {'W-001': 'verified', 'W-002': 'running', 'W-003': 'pending', 'W-004': 'pending'}\ninterrupted items found: ['W-002'] | now ready: ['W-002', 'W-003']\nW-002 was left running with no receipt, so the next session treated it as unfinished and reset it to pending instead of assuming success; the workspace and logs still have to be inspected before it is rerun, because the first attempt may have changed files\n\n--- 3. Genuinely running: a torn state file versus an atomic replace ---\ntorn write (cut short on purpose): unreadable\ncrash while writing the temp file, state file still parses: True\nthe in-place write left an unreadable file, and writing a temp file first kept the last good state when the simulated crash hit the temp file\n\n--- 4. Genuinely running: the gate on a real git diff, tests passing and a forbidden file changed ---\nchanged: ['app/checkout.py'] -> ('PASS', [])\nchanged: ['app/checkout.py', 'production.env'] -> ('BLOCK', ['forbidden change: production.env'])\nno proof            -> ('BLOCK', ['no proof receipt'])\nproof ran zero tests -> ('BLOCK', ['proof ran no tests'])\nwith every test passing the gate still blocked once production.env was in the diff, and it also blocked a missing proof and a proof that ran no tests; the changed-file list came from git and not from the worker\n\n--- 5. Genuinely running: stale proof after a later edit ---\nreceipt sha: 3bfc269594 | file now: fb04dcb697 | proof still applies: False\na proof that passed on the first version says nothing about the second, so a verified item must record what it was verified against and be reopened when that content changes\n\n--- 6. Genuinely checking: irreversible work before approval (a rule of our own) ---\nirreversible items with no approval ancestor: ['W-2']\nthe structural validator accepts both W-2 and W-4 because both have valid dependencies, and only this extra rule noticed that W-2 can run without an approval step before it; deciding which items are irreversible is a judgement, not something the graph can infer"
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
    "headingEn": "Genuinely Found: Verification Released Work, Not the Schedule",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವೇಳಾಪಟ್ಟಿಯಲ್ಲ, ಪರಿಶೀಲನೆ ಕೆಲಸ ಬಿಡುಗಡೆ ಮಾಡಿತು",
    "bodyEn": "Section 1: only W-001 was ready at the start; while it was running or failed nothing was released; once it was verified W-002 and W-003 were ready; verifying W-002 with no receipt raised \"verified requires a proof receipt\". Section 2: after an interrupted session W-002 was left running, was found by recover and reset, and W-002 and W-003 became ready. Section 3: an in-place write cut short left an unreadable state file, while a crash during a temp-file write left the last good state parseable.",
    "bodyKn": "ವಿಭಾಗ 1: ಆರಂಭದಲ್ಲಿ W-001 ಮಾತ್ರ ಸಿದ್ಧವಿತ್ತು; ಅದು ಓಡುತ್ತಿರುವಾಗ ಅಥವಾ ವಿಫಲವಾದಾಗ ಏನೂ ಬಿಡುಗಡೆಯಾಗಲಿಲ್ಲ; ಪರಿಶೀಲಿತವಾದ ನಂತರ W-002 ಮತ್ತು W-003 ಸಿದ್ಧವಾದವು; ರಸೀದಿ ಇಲ್ಲದೆ W-002 ಪರಿಶೀಲಿಸಿದಾಗ \"verified requires a proof receipt\" ಎತ್ತಿತು. ವಿಭಾಗ 2: ಅಡಚಣೆಯ ಸೆಷನ್ ನಂತರ W-002 ಓಡುತ್ತಿರುವಂತೆ ಉಳಿದಿತ್ತು, recover ಅದನ್ನು ಕಂಡು ಮರುಹೊಂದಿಸಿತು, ಮತ್ತು W-002 ಹಾಗೂ W-003 ಸಿದ್ಧವಾದವು. ವಿಭಾಗ 3: ಅರ್ಧದಲ್ಲಿ ನಿಂತ ಸ್ಥಳದಲ್ಲೇ ಬರಹ ಓದಲಾಗದ ಸ್ಥಿತಿ ಫೈಲ್ ಬಿಟ್ಟಿತು, ಆದರೆ temp-ಫೈಲ್ ಬರಹದ ಸಮಯದ crash ಕೊನೆಯ ಒಳ್ಳೆಯ ಸ್ಥಿತಿಯನ್ನು parse ಆಗುವಂತೆ ಬಿಟ್ಟಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Gate Blocked a Passing Run, and Irreversible Needs Judgement",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Gate ಪಾಸ್ ಆದ ಓಟ ತಡೆಯಿತು, ಮತ್ತು ಹಿಂತಿರುಗಿಸಲಾಗದ್ದಕ್ಕೆ ವಿವೇಚನೆ ಬೇಕು",
    "bodyEn": "Section 4: with a proof of 3 tests the diff containing only app/checkout.py passed; adding production.env to the diff gave \"forbidden change: production.env\"; a missing proof and a proof that ran zero tests each blocked. Section 5: a receipt hash 3bfc269594 no longer matched the file after an edit (fb04dcb697). Section 6: of four items, W-2, an irreversible item with no approval ancestor, was flagged by our own rule; W-4, which depends on the approval item W-3, was not.",
    "bodyKn": "ವಿಭಾಗ 4: 3 ಪರೀಕ್ಷೆಗಳ ಪುರಾವೆಯೊಂದಿಗೆ app/checkout.py ಮಾತ್ರ ಇರುವ diff ಪಾಸ್ ಆಯಿತು; diff ಗೆ production.env ಸೇರಿಸಿದಾಗ \"forbidden change: production.env\" ಬಂತು; ಕಾಣೆಯಾದ ಪುರಾವೆ ಮತ್ತು ಶೂನ್ಯ ಪರೀಕ್ಷೆ ಓಡಿಸಿದ ಪುರಾವೆ ಪ್ರತಿಯೊಂದೂ ತಡೆದವು. ವಿಭಾಗ 5: ರಸೀದಿ hash 3bfc269594 ಸಂಪಾದನೆಯ ನಂತರ ಫೈಲ್ (fb04dcb697) ಗೆ ಹೊಂದಲಿಲ್ಲ. ವಿಭಾಗ 6: ನಾಲ್ಕು ಘಟಕಗಳಲ್ಲಿ, ಅನುಮೋದನೆ ಪೂರ್ವಜ ಇಲ್ಲದ ಹಿಂತಿರುಗಿಸಲಾಗದ W-2 ಅನ್ನು ನಮ್ಮದೇ ನಿಯಮ ಗುರುತಿಸಿತು; ಅನುಮೋದನೆ ಘಟಕ W-3 ಅನ್ನು ಅವಲಂಬಿಸುವ W-4 ಗುರುತಿಸಲ್ಪಡಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Resuming safely means trusting recorded facts over remembered progress: verified status needs a receipt, proofs are tied to content, and the gate reads the diff itself.",
    "bodyKn": "ಸುರಕ್ಷಿತವಾಗಿ ಪುನರಾರಂಭಿಸುವುದೆಂದರೆ ನೆನಪಿನ ಪ್ರಗತಿಗಿಂತ ದಾಖಲಿತ ಸತ್ಯಗಳನ್ನು ನಂಬುವುದು: verified ಸ್ಥಿತಿಗೆ ರಸೀದಿ ಬೇಕು, ಪುರಾವೆಗಳು ವಿಷಯಕ್ಕೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿವೆ, ಮತ್ತು gate ಸ್ವತಃ diff ಓದುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"all tests passed, so the item is done.\" A forbidden file was in the diff.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಎಲ್ಲಾ ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು, ಆದ್ದರಿಂದ ಘಟಕ ಮುಗಿದಿದೆ.\" ನಿಷೇಧಿತ ಫೈಲ್ diff ನಲ್ಲಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Execution state: the recorded status of each item. Verified: passed proof with a receipt. Recovery: resetting items left running. Scope gate: checking the real diff against allowed and forbidden paths. Approval ancestor: an approval item that an irreversible item depends on.",
    "bodyKn": "Execution state: ಪ್ರತಿ ಘಟಕದ ದಾಖಲಿತ ಸ್ಥಿತಿ. Verified: ರಸೀದಿ ಇರುವ ಪಾಸ್ ಆದ ಪುರಾವೆ. Recovery: ಓಡುತ್ತಿರುವಂತೆ ಬಿಟ್ಟ ಘಟಕಗಳನ್ನು ಮರುಹೊಂದಿಸುವುದು. Scope gate: ನಿಜ diff ಅನ್ನು ಅನುಮತಿಸಿದ ಮತ್ತು ನಿಷೇಧಿತ paths ಗೆ ಹೋಲಿಸುವುದು. Approval ancestor: ಹಿಂತಿರುಗಿಸಲಾಗದ ಘಟಕ ಅವಲಂಬಿಸುವ ಅನುಮೋದನೆ ಘಟಕ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Verification, not the schedule, released dependent work. 2) An interrupted running item was reset, not assumed done. 3) A temp-file write kept the last good state. 4) The gate blocked a forbidden file though tests passed. 5) A receipt hash no longer matched the edited file.",
    "bodyKn": "1) ವೇಳಾಪಟ್ಟಿಯಲ್ಲ, ಪರಿಶೀಲನೆ ಅವಲಂಬಿತ ಕೆಲಸ ಬಿಡುಗಡೆ ಮಾಡಿತು. 2) ಅಡಚಣೆಯ ಓಡುತ್ತಿರುವ ಘಟಕ ಮುಗಿದಿದೆ ಎಂದು ಊಹಿಸದೆ ಮರುಹೊಂದಿಸಲ್ಪಟ್ಟಿತು. 3) temp-ಫೈಲ್ ಬರಹ ಕೊನೆಯ ಒಳ್ಳೆಯ ಸ್ಥಿತಿ ಉಳಿಸಿತು. 4) ಪರೀಕ್ಷೆ ಪಾಸ್ ಆದರೂ gate ನಿಷೇಧಿತ ಫೈಲ್ ತಡೆಯಿತು. 5) ರಸೀದಿ hash ಸಂಪಾದಿತ ಫೈಲ್‌ಗೆ ಇನ್ನು ಹೊಂದಲಿಲ್ಲ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What was ready after W-001 failed?",
      "qKn": "W-001 ವಿಫಲವಾದ ನಂತರ ಏನು ಸಿದ್ಧವಿತ್ತು?",
      "opts": [
       "Nothing",
       "W-002 and W-003",
       "W-004",
       "Everything"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "W-002 ಮತ್ತು W-003",
       "W-004",
       "ಎಲ್ಲವೂ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to W-002 left running after the interruption?",
      "qKn": "ಅಡಚಣೆಯ ನಂತರ ಓಡುತ್ತಿರುವಂತೆ ಉಳಿದ W-002 ಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was reset to pending",
       "It was marked verified",
       "It was deleted",
       "It was ignored"
      ],
      "optsKn": [
       "pending ಗೆ ಮರುಹೊಂದಿಸಲಾಯಿತು",
       "verified ಎಂದು ಗುರುತಿಸಲಾಯಿತು",
       "ಅಳಿಸಲಾಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why did the gate block the change that included production.env?",
      "qKn": "production.env ಒಳಗೊಂಡ ಬದಲಾವಣೆಯನ್ನು gate ಏಕೆ ತಡೆಯಿತು?",
      "opts": [
       "production.env is a forbidden path",
       "The tests failed",
       "The proof timed out",
       "The diff was empty"
      ],
      "optsKn": [
       "production.env ನಿಷೇಧಿತ path",
       "ಪರೀಕ್ಷೆಗಳು ವಿಫಲವಾದವು",
       "ಪುರಾವೆ timeout ಆಯಿತು",
       "diff ಖಾಲಿಯಾಗಿತ್ತು"
      ],
      "correct": 0
     },
     {
      "q": "Which item did the irreversible-work rule flag?",
      "qKn": "ಹಿಂತಿರುಗಿಸಲಾಗದ-ಕೆಲಸ ನಿಯಮ ಯಾವ ಘಟಕ ಗುರುತಿಸಿತು?",
      "opts": [
       "W-2",
       "W-4",
       "W-3",
       "W-1"
      ],
      "optsKn": [
       "W-2",
       "W-4",
       "W-3",
       "W-1"
      ],
      "correct": 0
     },
     {
      "q": "What does a verified status require?",
      "qKn": "verified ಸ್ಥಿತಿಗೆ ಏನು ಬೇಕು?",
      "opts": [
       "A proof receipt",
       "A timestamp",
       "A reviewer name only",
       "Nothing"
      ],
      "optsKn": [
       "ಪುರಾವೆ ರಸೀದಿ",
       "ಸಮಯಮುದ್ರೆ",
       "ಪರಿಶೀಲಕರ ಹೆಸರು ಮಾತ್ರ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
