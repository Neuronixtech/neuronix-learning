module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75c91b6f053d75364816f",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Build a Feedback Ratchet with Ownership and Retirement (Part 1 of 3) — Signals, Routing and Priority",
 "titleKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 1 / 3) — Signals, ರೂಟಿಂಗ್ ಮತ್ತು ಆದ್ಯತೆ",
 "desc": "Route signals from four sources to owning layers, rank them and classify a real timeout.",
 "descKn": "ನಾಲ್ಕು ಮೂಲಗಳ signals ಅನ್ನು ಮಾಲೀಕತ್ವದ ಪದರಗಳಿಗೆ ರೂಟ್ ಮಾಡಿ, ಶ್ರೇಣೀಕರಿಸಿ ಮತ್ತು ನಿಜ timeout ವರ್ಗೀಕರಿಸಿ.",
 "objectives": [
  "Route signals to layers.",
  "Name an owner per layer.",
  "Rank by severity and recurrence.",
  "Classify a real timeout.",
  "Send unknown kinds to triage."
 ],
 "objectivesKn": [
  "signals ಅನ್ನು ಪದರಗಳಿಗೆ ರೂಟ್ ಮಾಡಿ.",
  "ಪ್ರತಿ ಪದರಕ್ಕೆ ಮಾಲೀಕರ ಹೆಸರಿಡಿ.",
  "ತೀವ್ರತೆ ಮತ್ತು ಪುನರಾವರ್ತನೆಯಿಂದ ಶ್ರೇಣೀಕರಿಸಿ.",
  "ನಿಜ timeout ವರ್ಗೀಕರಿಸಿ.",
  "ಅಜ್ಞಾತ ವಿಧಗಳನ್ನು triage ಗೆ ಕಳುಹಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Build a Feedback Ratchet with Ownership and Retirement (Part 1 of 3)",
    "textKn": "ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ Ratchet ನಿರ್ಮಿಸಿ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: routing signals from four sources to the layer that owns them, a severity-times-recurrence priority and a runtime timeout signal classified from a real subprocess. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind building a feedback ratchet with ownership and retirement (signal routing, priority, owned actions, evidence labels and keep, revise or retire decisions), not the real software, and the signals, owners, dates and counts are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says only its concepts, lab instructions and acceptance criteria were given, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ನಾಲ್ಕು ಮೂಲಗಳ signals ಅನ್ನು ಅವುಗಳ ಮಾಲೀಕತ್ವದ ಪದರಕ್ಕೆ ರೂಟ್ ಮಾಡುವುದು, ತೀವ್ರತೆ-ಗುಣಿಸು-ಪುನರಾವರ್ತನೆ ಆದ್ಯತೆ ಮತ್ತು ನಿಜ subprocess ನಿಂದ ವರ್ಗೀಕರಿಸಿದ runtime timeout signal. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮಾಲೀಕತ್ವ ಮತ್ತು ನಿವೃತ್ತಿಯೊಂದಿಗೆ ಪ್ರತಿಕ್ರಿಯೆ ratchet ನಿರ್ಮಾಣ (signal ರೂಟಿಂಗ್, ಆದ್ಯತೆ, ಮಾಲೀಕತ್ವದ ಕ್ರಿಯೆಗಳು, ಸಾಕ್ಷ್ಯ ಲೇಬಲ್‌ಗಳು ಮತ್ತು ಇರಿಸಿ, ಪರಿಷ್ಕರಿಸಿ ಅಥವಾ ನಿವೃತ್ತಗೊಳಿಸಿ ನಿರ್ಧಾರಗಳು) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು signals, ಮಾಲೀಕರು, ದಿನಾಂಕಗಳು ಮತ್ತು ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು ಕೇವಲ ಅದರ ಪರಿಕಲ್ಪನೆಗಳು, ಲ್ಯಾಬ್ ಸೂಚನೆಗಳು ಮತ್ತು ಸ್ವೀಕಾರ ಮಾನದಂಡ ನೀಡಲಾಗಿತ್ತು ಎಂದು lesson ಪಠ್ಯ ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Evidence That Changes Nothing Is Telemetry",
    "textKn": "ಏನನ್ನೂ ಬದಲಿಸದ ಸಾಕ್ಷ್ಯ ಕೇವಲ ಟೆಲಿಮೆಟ್ರಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Route, Rank, and Name an Owner",
    "headingKn": "ರೂಟ್, ಶ್ರೇಣಿ ಮತ್ತು ಮಾಲೀಕರ ಹೆಸರು",
    "bodyEn": "Shipping closes the build loop and opens the learning loop. This part takes six invented signals from users, agent corrections, evaluations and incidents, routes each to the layer that owns it, ranks them by severity times recurrence and adds a timeout signal that is classified from a real subprocess that exceeds its limit. It also shows what happens when a layer is added without an owner. The signals and severities are invented.",
    "bodyKn": "ಬಿಡುಗಡೆ build ಲೂಪ್ ಮುಚ್ಚಿ learning ಲೂಪ್ ತೆರೆಯುತ್ತದೆ. ಈ ಭಾಗ ಬಳಕೆದಾರರು, agent ತಿದ್ದುಪಡಿಗಳು, ಮೌಲ್ಯಮಾಪನಗಳು ಮತ್ತು incidents ನ ಆರು ಕಲ್ಪಿತ signals ತೆಗೆದುಕೊಂಡು, ಪ್ರತಿಯೊಂದನ್ನು ಅದನ್ನು ಹೊಂದಿರುವ ಪದರಕ್ಕೆ ರೂಟ್ ಮಾಡಿ, ತೀವ್ರತೆ ಗುಣಿಸು ಪುನರಾವರ್ತನೆಯಿಂದ ಶ್ರೇಣೀಕರಿಸಿ ಮತ್ತು ತನ್ನ ಮಿತಿ ಮೀರುವ ನಿಜ subprocess ನಿಂದ ವರ್ಗೀಕರಿಸಿದ timeout signal ಸೇರಿಸುತ್ತದೆ. ಮಾಲೀಕರಿಲ್ಲದೆ ಪದರ ಸೇರಿಸಿದರೆ ಏನಾಗುತ್ತದೆ ಎಂದೂ ತೋರಿಸುತ್ತದೆ. signals ಮತ್ತು ತೀವ್ರತೆಗಳು ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Signals to Owners",
    "headingKn": "Signals ನಿಂದ ಮಾಲೀಕರಿಗೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">every signal reaches an owner</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">signal</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">4 sources</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">router</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">to a layer</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">owner</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">named</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">priority</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">severity x recurrence</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every signal reaches an owner</text></svg>",
    "captionEn": "Each signal is routed to a layer with a named owner and a priority.",
    "captionKn": "ಪ್ರತಿ signal ಹೆಸರಿಸಿದ ಮಾಲೀಕ ಮತ್ತು ಆದ್ಯತೆ ಇರುವ ಪದರಕ್ಕೆ ರೂಟ್ ಆಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Routing table in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ರೂಟಿಂಗ್ ಕೋಷ್ಟಕ",
    "headers": [
     "Signal kind",
     "Layer",
     "Owner"
    ],
    "rows": [
     [
      "scope",
      "scope_policy",
      "platform"
     ],
     [
      "format",
      "schema_validator",
      "api-team"
     ],
     [
      "wrong_answer",
      "test_suite",
      "quality"
     ],
     [
      "timeout",
      "runtime_limits",
      "sre"
     ],
     [
      "preference",
      "human_decision",
      "product"
     ],
     [
      "anything else",
      "triage",
      "triage-rota"
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
    "filename": "fb_1.py",
    "headingEn": "Routing, priority and the timeout classifier",
    "headingKn": "ರೂಟಿಂಗ್, ಆದ್ಯತೆ ಮತ್ತು timeout ವರ್ಗೀಕಾರಕ",
    "descEn": "route maps a signal kind to a layer and an owner with a triage default, priority multiplies severity by recurrence, and classify_command runs a command with a time limit and returns ok, failed or timeout.",
    "descKn": "route ಒಂದು signal ವಿಧವನ್ನು ಪದರ ಮತ್ತು ಮಾಲೀಕರಿಗೆ triage ಡೀಫಾಲ್ಟ್‌ನೊಂದಿಗೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, priority ತೀವ್ರತೆಯನ್ನು ಪುನರಾವರ್ತನೆಯಿಂದ ಗುಣಿಸುತ್ತದೆ, ಮತ್ತು classify_command ಸಮಯ ಮಿತಿಯೊಂದಿಗೆ ಆಜ್ಞೆ ಓಡಿಸಿ ok, failed ಅಥವಾ timeout ಮರಳಿಸುತ್ತದೆ.",
    "code": "LAYER_OF = {\"scope\": \"scope_policy\", \"format\": \"schema_validator\", \"wrong_answer\": \"test_suite\", \"timeout\": \"runtime_limits\", \"preference\": \"human_decision\"}\nOWNER_OF = {\"scope_policy\": \"platform\", \"schema_validator\": \"api-team\", \"test_suite\": \"quality\", \"runtime_limits\": \"sre\", \"human_decision\": \"product\", \"triage\": \"triage-rota\"}\n\n\ndef route(signal):\n    kind = signal[\"kind\"]\n    layer = LAYER_OF.get(kind, \"triage\")\n    return {\"id\": signal[\"id\"], \"layer\": layer, \"owner\": OWNER_OF[layer]}\n\n\ndef priority(sev, recurrence):\n    return sev * recurrence\n\n\ndef classify_command(cmd, limit_s):\n    try:\n        p = subprocess.run(cmd, capture_output=True, text=True, timeout=limit_s)\n        return \"failed\" if p.returncode else \"ok\"\n    except subprocess.TimeoutExpired:\n        return \"timeout\""
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "fb_1.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() routes six signals, ranks them, classifies three real commands including one that hangs, adds a timeout signal and then adds a layer with no owner.",
    "descKn": "main() ಆರು signals ರೂಟ್ ಮಾಡಿ, ಶ್ರೇಣೀಕರಿಸಿ, ಸ್ಥಗಿತಗೊಳ್ಳುವುದು ಸೇರಿ ಮೂರು ನಿಜ ಆಜ್ಞೆ ವರ್ಗೀಕರಿಸಿ, timeout signal ಸೇರಿಸಿ ಮತ್ತು ನಂತರ ಮಾಲೀಕರಿಲ್ಲದ ಪದರ ಸೇರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: six signals from four sources routed to owning layers (signals invented)\")\n    for s in SIGNALS:\n        r = route(s)\n        print(f\"{s['id']} {s['source']:17} {s['kind']:15} -> layer={r['layer']:17} owner={r['owner']}\")\n    print(\"each signal landed on a layer with a named owner, and the unfamiliar kind tone_complaint went to triage instead of being dropped or guessed; a route table is only as complete as its entries\")\n\n    section(\"2. Genuinely computing: priority = severity x recurrence\")\n    ranked = sorted(SIGNALS, key=lambda s: (-priority(s[\"sev\"], s[\"n\"]), s[\"id\"]))\n    for s in ranked:\n        print(f\"{s['id']} sev={s['sev']} n={s['n']} priority={priority(s['sev'], s['n']):2}\")\n    print(\"the wrong refund answer (4 x 6 = 24) outranked the format failure that happened nine times (2 x 9 = 18) and the single worst incident, a timeout at severity 5 seen twice (10), came fourth; the ranking depends on the scoring rule, and the severities here are invented\")\n\n    section(\"3. Genuinely running: a timeout classified from a real subprocess\")\n    quick = [sys.executable, \"-c\", \"print('done')\"]\n    failing = [sys.executable, \"-c\", \"raise SystemExit(3)\"]\n    hanging = [sys.executable, \"-c\", \"import time; time.sleep(5)\"]\n    for label, cmd in ((\"quick command\", quick), (\"failing command\", failing), (\"hanging command, limit 1 s\", hanging)):\n        print(f\"{label:28} -> {classify_command(cmd, 1)}\")\n    print(\"the hanging command was stopped after one second and reported as a timeout, which is a different signal from a command that ran and failed; the first routes to runtime limits and the second to the test suite, and treating both as 'failed' would send them to the wrong owner\")\n\n    section(\"4. Genuinely running: the timeout signal joins the router\")\n    sig = {\"id\": \"S007\", \"source\": \"incident\", \"kind\": \"timeout\", \"sev\": 4, \"n\": 1}\n    print(route(sig), \"| priority:\", priority(sig[\"sev\"], sig[\"n\"]))\n    print(\"adding the timeout kind needed one line in each of two tables and no change to the router function, so a new signal kind is cheap to add as long as its owner is named\")\n\n    section(\"5. Genuinely running: a signal with no owner for its layer\")\n    LAYER_OF[\"legal\"] = \"legal_review\"\n    try:\n        route({\"id\": \"S008\", \"kind\": \"legal\", \"sev\": 3, \"n\": 1})\n    except KeyError as e:\n        print(\"routing failed with KeyError:\", e)\n    print(\"a layer added without an owner raised a KeyError, which is better than routing to nobody, and it shows why every layer in the table needs an owner entry before a signal can be sent to it\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: six signals from four sources routed to owning layers (signals invented) ---\nS001 user              wrong_answer    -> layer=test_suite        owner=quality\nS002 agent_correction  scope           -> layer=scope_policy      owner=platform\nS003 evaluation        format          -> layer=schema_validator  owner=api-team\nS004 incident          timeout         -> layer=runtime_limits    owner=sre\nS005 user              preference      -> layer=human_decision    owner=product\nS006 user              tone_complaint  -> layer=triage            owner=triage-rota\neach signal landed on a layer with a named owner, and the unfamiliar kind tone_complaint went to triage instead of being dropped or guessed; a route table is only as complete as its entries\n\n--- 2. Genuinely computing: priority = severity x recurrence ---\nS001 sev=4 n=6 priority=24\nS003 sev=2 n=9 priority=18\nS002 sev=3 n=5 priority=15\nS004 sev=5 n=2 priority=10\nS006 sev=2 n=2 priority= 4\nS005 sev=1 n=3 priority= 3\nthe wrong refund answer (4 x 6 = 24) outranked the format failure that happened nine times (2 x 9 = 18) and the single worst incident, a timeout at severity 5 seen twice (10), came fourth; the ranking depends on the scoring rule, and the severities here are invented\n\n--- 3. Genuinely running: a timeout classified from a real subprocess ---\nquick command                -> ok\nfailing command              -> failed\nhanging command, limit 1 s   -> timeout\nthe hanging command was stopped after one second and reported as a timeout, which is a different signal from a command that ran and failed; the first routes to runtime limits and the second to the test suite, and treating both as 'failed' would send them to the wrong owner\n\n--- 4. Genuinely running: the timeout signal joins the router ---\n{'id': 'S007', 'layer': 'runtime_limits', 'owner': 'sre'} | priority: 4\nadding the timeout kind needed one line in each of two tables and no change to the router function, so a new signal kind is cheap to add as long as its owner is named\n\n--- 5. Genuinely running: a signal with no owner for its layer ---\nrouting failed with KeyError: 'legal_review'\na layer added without an owner raised a KeyError, which is better than routing to nobody, and it shows why every layer in the table needs an owner entry before a signal can be sent to it"
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
    "headingEn": "Experiment 1: Six signals from four sources routed to owning layers (signals invented)",
    "headingKn": "ಪ್ರಯೋಗ 1: Six signals from four sources routed to owning layers (signals invented)",
    "bodyEn": "What it ran: Six signals from four sources routed to owning layers (signals invented). What the lab concluded: each signal landed on a layer with a named owner, and the unfamiliar kind tone_complaint went to triage instead of being dropped or guessed; a route table is only as complete as its entries",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Six signals from four sources routed to owning layers (signals invented). ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): each signal landed on a layer with a named owner, and the unfamiliar kind tone_complaint went to triage instead of being dropped or guessed; a route table is only as complete as its entries"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: six signals from four sources routed to owning layers (signals invented) ---\nS001 user              wrong_answer    -> layer=test_suite        owner=quality\nS002 agent_correction  scope           -> layer=scope_policy      owner=platform\nS003 evaluation        format          -> layer=schema_validator  owner=api-team\nS004 incident          timeout         -> layer=runtime_limits    owner=sre\nS005 user              preference      -> layer=human_decision    owner=product\nS006 user              tone_complaint  -> layer=triage            owner=triage-rota"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Priority = severity x recurrence",
    "headingKn": "ಪ್ರಯೋಗ 2: Priority = severity x recurrence",
    "bodyEn": "What it ran: Priority = severity x recurrence. What the lab concluded: the wrong refund answer (4 x 6 = 24) outranked the format failure that happened nine times (2 x 9 = 18) and the single worst incident, a timeout at severity 5 seen twice (10), came fourth; the ranking depends on the scoring rule, and the severities here are invented",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Priority = severity x recurrence. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the wrong refund answer (4 x 6 = 24) outranked the format failure that happened nine times (2 x 9 = 18) and the single worst incident, a timeout at severity 5 seen twice (10), came fourth; the ranking depends on the scoring rule, and the severities here are invented"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely computing: priority = severity x recurrence ---\nS001 sev=4 n=6 priority=24\nS003 sev=2 n=9 priority=18\nS002 sev=3 n=5 priority=15\nS004 sev=5 n=2 priority=10\nS006 sev=2 n=2 priority= 4\nS005 sev=1 n=3 priority= 3"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A timeout classified from a real subprocess",
    "headingKn": "ಪ್ರಯೋಗ 3: A timeout classified from a real subprocess",
    "bodyEn": "What it ran: A timeout classified from a real subprocess. What the lab concluded: the hanging command was stopped after one second and reported as a timeout, which is a different signal from a command that ran and failed; the first routes to runtime limits and the second to the test suite, and treating both as 'failed' would send them to the wrong owner",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A timeout classified from a real subprocess. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the hanging command was stopped after one second and reported as a timeout, which is a different signal from a command that ran and failed; the first routes to runtime limits and the second to the test suite, and treating both as 'failed' would send them to the wrong owner"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a timeout classified from a real subprocess ---\nquick command                -> ok\nfailing command              -> failed\nhanging command, limit 1 s   -> timeout"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: The timeout signal joins the router",
    "headingKn": "ಪ್ರಯೋಗ 4: The timeout signal joins the router",
    "bodyEn": "What it ran: The timeout signal joins the router. What the lab concluded: adding the timeout kind needed one line in each of two tables and no change to the router function, so a new signal kind is cheap to add as long as its owner is named",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The timeout signal joins the router. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): adding the timeout kind needed one line in each of two tables and no change to the router function, so a new signal kind is cheap to add as long as its owner is named"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: the timeout signal joins the router ---\n{'id': 'S007', 'layer': 'runtime_limits', 'owner': 'sre'} | priority: 4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: A signal with no owner for its layer",
    "headingKn": "ಪ್ರಯೋಗ 5: A signal with no owner for its layer",
    "bodyEn": "What it ran: A signal with no owner for its layer. What the lab concluded: a layer added without an owner raised a KeyError, which is better than routing to nobody, and it shows why every layer in the table needs an owner entry before a signal can be sent to it",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A signal with no owner for its layer. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a layer added without an owner raised a KeyError, which is better than routing to nobody, and it shows why every layer in the table needs an owner entry before a signal can be sent to it"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: a signal with no owner for its layer ---\nrouting failed with KeyError: 'legal_review'"
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
    "headingEn": "Genuinely Found: Six Signals, Six Owners, One Unknown Kind",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆರು Signals, ಆರು ಮಾಲೀಕರು, ಒಂದು ಅಜ್ಞಾತ ವಿಧ",
    "bodyEn": "Section 1: wrong_answer went to test_suite and quality, scope to scope_policy and platform, format to schema_validator and api-team, timeout to runtime_limits and sre, preference to human_decision and product, and the unfamiliar tone_complaint to triage and triage-rota. Section 2: priorities were S001 24, S003 18, S002 15, S004 10, S006 4 and S005 3.",
    "bodyKn": "ವಿಭಾಗ 1: wrong_answer test_suite ಮತ್ತು quality ಗೆ, scope scope_policy ಮತ್ತು platform ಗೆ, format schema_validator ಮತ್ತು api-team ಗೆ, timeout runtime_limits ಮತ್ತು sre ಗೆ, preference human_decision ಮತ್ತು product ಗೆ, ಮತ್ತು ಅಪರಿಚಿತ tone_complaint triage ಮತ್ತು triage-rota ಗೆ ಹೋದವು. ವಿಭಾಗ 2: ಆದ್ಯತೆಗಳು S001 24, S003 18, S002 15, S004 10, S006 4 ಮತ್ತು S005 3."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Real Timeout and a Layer Without an Owner",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ನಿಜ Timeout ಮತ್ತು ಮಾಲೀಕರಿಲ್ಲದ ಪದರ",
    "bodyEn": "Section 3: the quick command returned ok, the command that exits with 3 returned failed and the command that sleeps 5 seconds with a 1-second limit returned timeout. Section 4: a new timeout signal routed to runtime_limits and sre with priority 4 without changing the router. Section 5: a layer added to the table with no owner entry raised KeyError \"legal_review\".",
    "bodyKn": "ವಿಭಾಗ 3: ತ್ವರಿತ ಆಜ್ಞೆ ok ಮರಳಿಸಿತು, 3 ನೊಂದಿಗೆ ನಿರ್ಗಮಿಸುವ ಆಜ್ಞೆ failed ಮರಳಿಸಿತು ಮತ್ತು 1-ಸೆಕೆಂಡ್ ಮಿತಿಯೊಂದಿಗೆ 5 ಸೆಕೆಂಡ್ ನಿದ್ರಿಸುವ ಆಜ್ಞೆ timeout ಮರಳಿಸಿತು. ವಿಭಾಗ 4: ಹೊಸ timeout signal ರೂಟರ್ ಬದಲಿಸದೆ ಆದ್ಯತೆ 4 ನೊಂದಿಗೆ runtime_limits ಮತ್ತು sre ಗೆ ರೂಟ್ ಆಯಿತು. ವಿಭಾಗ 5: ಮಾಲೀಕ ನಮೂದಿಲ್ಲದೆ ಕೋಷ್ಟಕಕ್ಕೆ ಸೇರಿಸಿದ ಪದರ KeyError \"legal_review\" ಎತ್ತಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A signal with no owner is telemetry, and a failure that times out routed as a plain failure goes to a team that cannot fix it.",
    "bodyKn": "ಮಾಲೀಕರಿಲ್ಲದ signal ಕೇವಲ ಟೆಲಿಮೆಟ್ರಿ, ಮತ್ತು ಸಮಯ ಮೀರಿದ ವೈಫಲ್ಯ ಸಾಮಾನ್ಯ ವೈಫಲ್ಯವಾಗಿ ರೂಟ್ ಆದರೆ ಅದನ್ನು ಸರಿಪಡಿಸಲಾಗದ ತಂಡಕ್ಕೆ ಹೋಗುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"the loudest signal goes first.\" The nine-times format failure ranked second and the severity-5 timeout fourth under this rule.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಜೋರಾದ signal ಮೊದಲು.\" ಈ ನಿಯಮದಲ್ಲಿ ಒಂಬತ್ತು-ಬಾರಿ format ವೈಫಲ್ಯ ಎರಡನೇ ಮತ್ತು ತೀವ್ರತೆ-5 timeout ನಾಲ್ಕನೇ ಸ್ಥಾನ ಪಡೆದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Signal: evidence of a problem. Owning layer: where the fix belongs. Triage: the default for unknown kinds. Timeout: a command stopped by its time limit.",
    "bodyKn": "Signal: ಸಮಸ್ಯೆಯ ಸಾಕ್ಷ್ಯ. Owning layer: ಸರಿಪಡಿಕೆ ಸೇರುವ ಸ್ಥಳ. Triage: ಅಜ್ಞಾತ ವಿಧಗಳ ಡೀಫಾಲ್ಟ್. Timeout: ಸಮಯ ಮಿತಿಯಿಂದ ನಿಲ್ಲಿಸಿದ ಆಜ್ಞೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Six signals reached named owners. 2) Priority was severity times recurrence. 3) A real hang was classified as timeout. 4) A new kind needed one line per table. 5) A layer without an owner raised.",
    "bodyKn": "1) ಆರು signals ಹೆಸರಿಸಿದ ಮಾಲೀಕರನ್ನು ತಲುಪಿದವು. 2) ಆದ್ಯತೆ ತೀವ್ರತೆ ಗುಣಿಸು ಪುನರಾವರ್ತನೆ. 3) ನಿಜ ಸ್ಥಗಿತ timeout ಎಂದು ವರ್ಗೀಕೃತ. 4) ಹೊಸ ವಿಧಕ್ಕೆ ಪ್ರತಿ ಕೋಷ್ಟಕಕ್ಕೆ ಒಂದು ಸಾಲು ಬೇಕಿತ್ತು. 5) ಮಾಲೀಕರಿಲ್ಲದ ಪದರ ಅಪವಾದ ಎತ್ತಿತು."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Try It Yourself",
    "textKn": "ನೀವೇ ಪ್ರಯತ್ನಿಸಿ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Run the lab",
    "headingKn": "ಲ್ಯಾಬ್ ಓಡಿಸಿ",
    "bodyEn": "1) Open a terminal in pneuronics-backend/lesson-defs/labs. 2) Run: python -B fb_1.py (in Git Bash on Windows: PYTHONIOENCODING=utf-8 python -B fb_1.py). 3) Compare each section with the walkthrough above. The -B flag stops Python from writing __pycache__ folders.",
    "bodyKn": "1) pneuronics-backend/lesson-defs/labs ನಲ್ಲಿ ಟರ್ಮಿನಲ್ ತೆರೆಯಿರಿ. 2) ಓಡಿಸಿ: python -B fb_1.py (Windows Git Bash ನಲ್ಲಿ: PYTHONIOENCODING=utf-8 python -B fb_1.py). 3) ಪ್ರತಿ ವಿಭಾಗವನ್ನು ಮೇಲಿನ ನಡೆದಾಟಕ್ಕೆ ಹೋಲಿಸಿ. -B ಧ್ವಜ Python __pycache__ ಫೋಲ್ಡರ್‌ಗಳನ್ನು ಬರೆಯುವುದನ್ನು ತಡೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Where did tone_complaint go?",
      "qKn": "tone_complaint ಎಲ್ಲಿಗೆ ಹೋಯಿತು?",
      "opts": [
       "triage",
       "test_suite",
       "scope_policy",
       "nowhere"
      ],
      "optsKn": [
       "triage",
       "test_suite",
       "scope_policy",
       "ಎಲ್ಲಿಯೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What priority did S001 get?",
      "qKn": "S001 ಗೆ ಯಾವ ಆದ್ಯತೆ ಸಿಕ್ಕಿತು?",
      "opts": [
       "24",
       "18",
       "10",
       "3"
      ],
      "optsKn": [
       "24",
       "18",
       "10",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What did the command that slept 5 seconds with a 1-second limit return?",
      "qKn": "1-ಸೆಕೆಂಡ್ ಮಿತಿಯೊಂದಿಗೆ 5 ಸೆಕೆಂಡ್ ನಿದ್ರಿಸಿದ ಆಜ್ಞೆ ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "timeout",
       "failed",
       "ok",
       "KeyError"
      ],
      "optsKn": [
       "timeout",
       "failed",
       "ok",
       "KeyError"
      ],
      "correct": 0
     },
     {
      "q": "Which owner got the timeout signal?",
      "qKn": "timeout signal ಯಾವ ಮಾಲೀಕರಿಗೆ ಹೋಯಿತು?",
      "opts": [
       "sre",
       "quality",
       "platform",
       "product"
      ],
      "optsKn": [
       "sre",
       "quality",
       "platform",
       "product"
      ],
      "correct": 0
     },
     {
      "q": "What happened when a layer had no owner entry?",
      "qKn": "ಪದರಕ್ಕೆ ಮಾಲೀಕ ನಮೂದು ಇಲ್ಲದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "A KeyError was raised",
       "It went to triage",
       "It was ignored",
       "It was signed"
      ],
      "optsKn": [
       "KeyError ಎತ್ತಲಾಯಿತು",
       "ಅದು triage ಗೆ ಹೋಯಿತು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು",
       "ಅದಕ್ಕೆ ಸಹಿ ಆಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
