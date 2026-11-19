module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215ce",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "CAIS, CAISI, and Societal-Scale Risk (Part 3 of 3) — Claims, Controls and Evidence",
 "titleKn": "CAIS, CAISI, ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 3 / 3) — ಹೇಳಿಕೆಗಳು, ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯ",
 "desc": "Test each control against a broken version, find the untested claims and keep legal reportability with a person.",
 "descKn": "ಪ್ರತಿ ನಿಯಂತ್ರಣವನ್ನು ಮುರಿದ ಆವೃತ್ತಿಯ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ, ಪರೀಕ್ಷಿಸದ ಹೇಳಿಕೆಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ಕಾನೂನು ವರದಿಯನ್ನು ವ್ಯಕ್ತಿಯ ಬಳಿ ಇಡಿ.",
 "objectives": [
  "Test against a broken control.",
  "Find a weak test.",
  "List untested claims.",
  "Climb an evidence ladder.",
  "Leave legal calls to people."
 ],
 "objectivesKn": [
  "ಮುರಿದ ನಿಯಂತ್ರಣದ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ.",
  "ದುರ್ಬಲ ಪರೀಕ್ಷೆ ಹುಡುಕಿ.",
  "ಪರೀಕ್ಷಿಸದ ಹೇಳಿಕೆ ಪಟ್ಟಿ ಮಾಡಿ.",
  "ಸಾಕ್ಷ್ಯ ಏಣಿ ಏರಿ.",
  "ಕಾನೂನು ನಿರ್ಧಾರ ಜನರಿಗೆ ಬಿಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "CAIS, CAISI, and Societal-Scale Risk (Part 3 of 3)",
    "textKn": "CAIS, CAISI, ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: a test for each of five controls run against a correct and a broken version, a weak test that misses its bug, claims with no test, an evidence ladder that refuses skipped steps, incident triage that leaves legal reportability to a person and a structured audit question. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind CAIS, CAISI and societal-scale risk (a multi-label four-risk screening tool, its false positives and negatives, a governance gate with control evidence, approval binding and separation of duties, tests of controls against broken versions, an evidence ladder, incident triage and an explicit unknown for legal reportability), not the real software, and the indicators, labelled descriptions, control mapping and the five tiny controls with their broken versions are written by the lab author, reviewers, evidence and the clock are strings and numbers, no classification comes from CAIS, CAISI or any regulator and no legal question is decided, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of CAIS, CAISI at NIST, the 2023 extinction-risk statement, the four-risk taxonomy attributed to CAIS and California SB-53 is conceptual or cited and was not checked here; the lesson itself says that SB-53 was signed on September 29, 2025 and that its exact obligations depend on statutory definitions, and this module does not interpret the statute or decide whether any organisation is covered or any incident is reportable. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಐದು ನಿಯಂತ್ರಣಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸರಿಯಾದ ಮತ್ತು ಮುರಿದ ಆವೃತ್ತಿಯ ವಿರುದ್ಧ ಓಡಿಸಿದ ಪರೀಕ್ಷೆ, ತನ್ನ ದೋಷ ತಪ್ಪಿಸುವ ದುರ್ಬಲ ಪರೀಕ್ಷೆ, ಪರೀಕ್ಷೆ ಇಲ್ಲದ ಹೇಳಿಕೆಗಳು, ಬಿಟ್ಟ ಹಂತಗಳನ್ನು ನಿರಾಕರಿಸುವ ಸಾಕ್ಷ್ಯ ಏಣಿ, ಕಾನೂನು ವರದಿಯನ್ನು ವ್ಯಕ್ತಿಗೆ ಬಿಡುವ ಘಟನೆ triage ಮತ್ತು ರಚನಾತ್ಮಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಪ್ರಶ್ನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CAIS, CAISI ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಬಹು-ಲೇಬಲ್ ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ, ಅದರ ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ, ನಿಯಂತ್ರಣ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆ ಬಂಧ ಮತ್ತು ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ ಇರುವ ಆಡಳಿತ gate, ಮುರಿದ ಆವೃತ್ತಿಗಳ ವಿರುದ್ಧ ನಿಯಂತ್ರಣ ಪರೀಕ್ಷೆಗಳು, ಸಾಕ್ಷ್ಯ ಏಣಿ, ಘಟನೆ triage ಮತ್ತು ಕಾನೂನು ವರದಿಗೆ ಸ್ಪಷ್ಟ ಅಜ್ಞಾತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸೂಚಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳು, ನಿಯಂತ್ರಣ ನಕ್ಷೆ ಮತ್ತು ಐದು ಚಿಕ್ಕ ನಿಯಂತ್ರಣಗಳು ಹಾಗೂ ಅವುಗಳ ಮುರಿದ ಆವೃತ್ತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದಿದ್ದಾರೆ, ವಿಮರ್ಶಕರು, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಗಡಿಯಾರ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಸಂಖ್ಯೆಗಳು, ಯಾವ ವರ್ಗೀಕರಣವೂ CAIS, CAISI ಅಥವಾ ಯಾವುದೇ ನಿಯಂತ್ರಕರಿಂದ ಬರುವುದಿಲ್ಲ ಮತ್ತು ಯಾವ ಕಾನೂನು ಪ್ರಶ್ನೆಯನ್ನೂ ನಿರ್ಧರಿಸಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. CAIS, NIST ನಲ್ಲಿ CAISI, 2023 ನಾಶ-ಅಪಾಯ ಹೇಳಿಕೆ, CAIS ಗೆ ಹೇಳಲಾದ ನಾಲ್ಕು-ಅಪಾಯ ವರ್ಗೀಕರಣ ಮತ್ತು California SB-53 ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ; SB-53 ಅನ್ನು ಸೆಪ್ಟೆಂಬರ್ 29, 2025 ರಂದು ಸಹಿ ಮಾಡಲಾಯಿತು ಮತ್ತು ಅದರ ನಿಖರ ಬಾಧ್ಯತೆಗಳು ಶಾಸನಬದ್ಧ ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಅವಲಂಬಿಸಿವೆ ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ಈ ಮಾಡ್ಯೂಲ್ ಶಾಸನ ವ್ಯಾಖ್ಯಾನಿಸುವುದಿಲ್ಲ ಅಥವಾ ಯಾವ ಸಂಸ್ಥೆ ಒಳಪಡುತ್ತದೆ ಅಥವಾ ಯಾವ ಘಟನೆ ವರದಿಗೆ ಅರ್ಹ ಎಂದು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Passing Test Means Little If It Cannot Fail",
    "textKn": "ವಿಫಲವಾಗಲಾರದ ಪರೀಕ್ಷೆ ಪಾಸ್ ಆದರೂ ಅರ್ಥ ಕಡಿಮೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Controls, Broken Controls and the Ladder",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು, ಮುರಿದ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಏಣಿ",
    "bodyEn": "This part turns safety claims into evidence. It writes five tiny controls, an approval gate, a file scope, a kill switch, a rollback and a credential scope, each with a deliberately broken version, and runs a test against both to see whether the test can tell them apart. It shows a weak rollback test that passes on both, lists the claims that have no test at all, moves a finding up an evidence ladder one step at a time, triages an incident while leaving legal reportability to a person, and shows how a structured question treats a missing answer.",
    "bodyKn": "ಈ ಭಾಗ ಸುರಕ್ಷತಾ ಹೇಳಿಕೆಗಳನ್ನು ಸಾಕ್ಷ್ಯವಾಗಿ ಬದಲಿಸುತ್ತದೆ. ಅದು ಐದು ಚಿಕ್ಕ ನಿಯಂತ್ರಣ, ಅನುಮೋದನೆ gate, ಫೈಲ್ ವ್ಯಾಪ್ತಿ, kill switch, rollback ಮತ್ತು ರುಜುವಾತು ವ್ಯಾಪ್ತಿ, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಉದ್ದೇಶಪೂರ್ವಕ ಮುರಿದ ಆವೃತ್ತಿ ಬರೆದು, ಪರೀಕ್ಷೆ ಅವುಗಳನ್ನು ಬೇರ್ಪಡಿಸಬಲ್ಲದೇ ನೋಡಲು ಎರಡರ ವಿರುದ್ಧವೂ ಓಡಿಸುತ್ತದೆ. ಎರಡರಲ್ಲೂ ಪಾಸ್ ಆಗುವ ದುರ್ಬಲ rollback ಪರೀಕ್ಷೆ ತೋರಿಸುತ್ತದೆ, ಯಾವ ಪರೀಕ್ಷೆಯೂ ಇಲ್ಲದ ಹೇಳಿಕೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ, ಸಂಶೋಧನೆಯನ್ನು ಸಾಕ್ಷ್ಯ ಏಣಿಯಲ್ಲಿ ಒಂದೊಂದು ಹಂತ ಮೇಲೆ ಸರಿಸುತ್ತದೆ, ಕಾನೂನು ವರದಿಯನ್ನು ವ್ಯಕ್ತಿಗೆ ಬಿಟ್ಟು ಘಟನೆ triage ಮಾಡುತ್ತದೆ, ಮತ್ತು ರಚನಾತ್ಮಕ ಪ್ರಶ್ನೆ ಕಾಣೆಯಾದ ಉತ್ತರವನ್ನು ಹೇಗೆ ಪರಿಗಣಿಸುತ್ತದೆ ತೋರಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Claim, Control, Evidence",
    "headingKn": "ಹೇಳಿಕೆ, ನಿಯಂತ್ರಣ, ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a test is only evidence if it can fail</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">claim</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a safety statement</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">control</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">what enforces it</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">test</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">must fail when broken</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the proof</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a test is only evidence if it can fail</text></svg>",
    "captionEn": "A claim becomes evidence only when a test that can fail has passed.",
    "captionKn": "ವಿಫಲವಾಗಬಲ್ಲ ಪರೀಕ್ಷೆ ಪಾಸ್ ಆದಾಗ ಮಾತ್ರ ಹೇಳಿಕೆ ಸಾಕ್ಷ್ಯವಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "captionEn": "The five controls and the tests",
    "captionKn": "ಐದು ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "rows": "Control|Test result against the broken version\napproval gate|caught, an approval for another target is refused\nfile scope|caught, a look-alike folder and the monitoring file are refused\nkill switch|caught, stops at step 4 of 10\nrollback, strong hash test|caught\nrollback, weak key-count test|MISSED, passes on both\ncredential scope|caught"
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
    "filename": "cs_3.py",
    "headingEn": "Controls, broken versions, tests and the ladder",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು, ಮುರಿದ ಆವೃತ್ತಿಗಳು, ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಏಣಿ",
    "descEn": "IMPLS pairs each correct control with a broken one, TESTS runs a test on both, advance moves an evidence level up exactly one step and triage leaves legal reportability as NEEDS_LEGAL_REVIEW until a person supplies it.",
    "descKn": "IMPLS ಪ್ರತಿ ಸರಿಯಾದ ನಿಯಂತ್ರಣವನ್ನು ಮುರಿದದ್ದರೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ, TESTS ಎರಡರ ಮೇಲೂ ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ, advance ಸಾಕ್ಷ್ಯ ಮಟ್ಟವನ್ನು ಸರಿಯಾಗಿ ಒಂದು ಹಂತ ಮೇಲೆ ಸರಿಸುತ್ತದೆ ಮತ್ತು triage ವ್ಯಕ್ತಿ ನೀಡುವವರೆಗೆ ಕಾನೂನು ವರದಿಯನ್ನು NEEDS_LEGAL_REVIEW ಆಗಿ ಬಿಡುತ್ತದೆ.",
    "code": "ALLOWED_PATHS = {\"src/application.py\", \"tests/test_application.py\"}\n\n\n# --- correct controls ---\ndef approval_gate_ok(request, approvals):\n    return any(a[\"target\"] == request[\"target\"] and a[\"decision\"] == \"approved\" for a in approvals)\n\n\ndef scope_ok(path):\n    return path in ALLOWED_PATHS\n\n\ndef run_with_kill_ok(steps, kill_at):\n    done = 0\n    for i in range(steps):\n        if kill_at is not None and i >= kill_at:\n            break\n        done += 1\n    return done\n\n\ndef rollback_ok(state, change):\n    before = dict(state)\n    state.update(change)\n    state.clear()\n    state.update(before)\n    return state\n\n\ndef read_ok(token, resource):\n    return resource in token[\"scopes\"]\n\n\n# --- broken variants ---\ndef approval_gate_bad(request, approvals):\n    return len(approvals) > 0\n\n\ndef scope_bad(path):\n    return path.startswith(\"src\")\n\n\ndef run_with_kill_bad(steps, kill_at):\n    return steps if kill_at is None or kill_at > 0 else 0\n\n\ndef rollback_bad(state, change):\n    before = dict(state)\n    state.update(change)\n    state.clear()\n    state.update({k: str(v)[::-1] for k, v in before.items()})\n    return state\n\n\ndef read_bad(token, resource):\n    return bool(token[\"scopes\"])\n\n\nIMPLS = {\n    \"approval_gate\": (approval_gate_ok, approval_gate_bad),\n    \"file_scope\": (scope_ok, scope_bad),\n    \"kill_switch\": (run_with_kill_ok, run_with_kill_bad),\n    \"rollback\": (rollback_ok, rollback_bad),\n    \"credential_scope\": (read_ok, read_bad),\n}\n\n\ndef t_approval(f):\n    return f({\"target\": \"prod\"}, [{\"target\": \"staging\", \"decision\": \"approved\"}]) is False and f({\"target\": \"prod\"}, [{\"target\": \"prod\", \"decision\": \"approved\"}]) is True\n\n\ndef t_scope(f):\n    return f(\"config/monitoring.yaml\") is False and f(\"src-private/keys.txt\") is False and f(\"src/application.py\") is True\n\n\ndef t_kill(f):\n    return f(10, 4) == 4 and f(10, None) == 10\n\n\ndef t_rollback_strong(f):\n    s = {\"quantity\": 100, \"name\": \"widget\"}\n    h = hashlib.sha256(repr(sorted(s.items())).encode()).hexdigest()\n    out = f(s, {\"quantity\": 90})\n    return hashlib.sha256(repr(sorted(out.items())).encode()).hexdigest() == h\n\n\ndef t_rollback_weak(f):\n    s = {\"quantity\": 100, \"name\": \"widget\"}\n    return len(f(s, {\"quantity\": 90})) == 2\n\n\ndef t_cred(f):\n    return f({\"scopes\": [\"orders\"]}, \"orders\") is True and f({\"scopes\": [\"orders\"]}, \"secrets\") is False\n\n\nTESTS = [(\"approval_gate\", \"refuses an approval for another target\", t_approval), (\"file_scope\", \"refuses a look-alike folder and the monitoring file\", t_scope),\n         (\"kill_switch\", \"stops at step 4 of 10 and runs all 10 without a stop\", t_kill), (\"rollback\", \"state hash equals the hash before the change\", t_rollback_strong),\n         (\"rollback\", \"state has the same number of keys\", t_rollback_weak), (\"credential_scope\", \"denies a resource outside the token scopes\", t_cred)]\n\nCLAIMS = {\"Agent cannot deploy without approval\": \"approval_gate\", \"Agent respects file boundaries\": \"file_scope\", \"Agent can be stopped\": \"kill_switch\",\n          \"Failed operations can be recovered\": \"rollback\", \"Credential access is scoped\": \"credential_scope\", \"Incidents are investigated and closed\": None, \"Safety findings are resolved\": None}\n\nLEVELS = [\"UNVERIFIED_DESCRIPTION\", \"DOCUMENTED_FINDING\", \"REPRODUCED_FINDING\", \"REMEDIATED_FINDING\", \"VERIFIED_REMEDIATION\"]\n\n\ndef advance(level, target):\n    if LEVELS.index(target) != LEVELS.index(level) + 1:\n        raise ValueError(f\"cannot move from {level} to {target}\")\n    return target\n\n\ndef triage(incident, statutory_assessment=None):\n    sev = \"HIGH\" if incident.get(\"unauthorised_action\") and incident.get(\"real_data\") else (\"MEDIUM\" if incident.get(\"unauthorised_action\") else \"LOW\")\n    return {\"severity\": sev, \"legally_reportable\": \"NEEDS_LEGAL_REVIEW\" if statutory_assessment is None else statutory_assessment}\n\n\ndef check_audit_status(dep):\n    if dep.get(\"external_audit_completed\") is False:\n        return {\"category\": \"organizational_risks\", \"finding\": \"External audit not completed\", \"review_required\": True}\n    return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cs_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs each test on both versions, lists the untested claims, compares the weak and strong rollback tests, moves a finding up the ladder, triages incidents and applies the structured question.",
    "descKn": "main() ಪ್ರತಿ ಪರೀಕ್ಷೆಯನ್ನು ಎರಡೂ ಆವೃತ್ತಿಗಳ ಮೇಲೆ ಓಡಿಸಿ, ಪರೀಕ್ಷಿಸದ ಹೇಳಿಕೆ ಪಟ್ಟಿ ಮಾಡಿ, ದುರ್ಬಲ ಮತ್ತು ಬಲವಾದ rollback ಪರೀಕ್ಷೆ ಹೋಲಿಸಿ, ಸಂಶೋಧನೆಯನ್ನು ಏಣಿಯಲ್ಲಿ ಮೇಲೆ ಸರಿಸಿ, ಘಟನೆ triage ಮಾಡಿ ಮತ್ತು ರಚನಾತ್ಮಕ ಪ್ರಶ್ನೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: each control test against a correct and a broken version\")\n    print(f\"{'control':17} {'test':52} {'correct':8} {'broken':7} verdict\")\n    caught = 0\n    for control, name, fn in TESTS:\n        ok, bad = IMPLS[control]\n        a, b = fn(ok), fn(bad)\n        caught += (a and not b)\n        print(f\"{control:17} {name:52} {a!s:8} {b!s:7} {'catches the bug' if (a and not b) else 'MISSES the bug' if a else 'test fails on a correct control'}\")\n    print(f\"tests that pass on the correct control and fail on the broken one: {caught} of {len(TESTS)}\")\n    print(\"five of the six tests passed on the correct control and failed on the broken one, and the weak rollback test that only counts keys passed on both, so it would have reported the rollback as working when it restored reversed values; a passing test only means something if the same test fails on a version that is wrong\")\n\n    section(\"2. Genuinely running: which claims have a test at all\")\n    for claim, control in CLAIMS.items():\n        print(f\"{claim:42} -> {'tested by ' + control if control else 'NO TEST, unsubstantiated'}\")\n    print(f\"claims with a test: {sum(1 for c in CLAIMS.values() if c)} of {len(CLAIMS)}\")\n    print(\"five of seven claims have a test behind them and two have none, and a claim with no test is not necessarily false but nothing here shows that it is true; the two untested claims are the ones about people and process rather than code\")\n\n    section(\"3. Genuinely running: the weak and the strong rollback test side by side\")\n    for name, fn in ((\"strong, hash comparison\", t_rollback_strong), (\"weak, key count\", t_rollback_weak)):\n        print(f\"{name:26} correct {fn(rollback_ok)!s:5} broken {fn(rollback_bad)}\")\n    print(\"the broken rollback restored every value reversed, the hash comparison saw the difference and the key count did not; comparing the whole restored state to what it was before is the check that matters\")\n\n    section(\"4. Genuinely running: an evidence ladder that cannot be skipped\")\n    level = LEVELS[0]\n    for target in (LEVELS[1], LEVELS[2], LEVELS[3], LEVELS[4]):\n        level = advance(level, target)\n        print(\"->\", level)\n    for frm, to in ((LEVELS[1], LEVELS[4]), (LEVELS[3], LEVELS[2])):\n        try:\n            advance(frm, to)\n        except ValueError as e:\n            print(\"refused:\", e)\n    print(\"a finding moved up one step at a time to a verified remediation, a jump from a documented finding to a verified remediation and a step backwards were both refused; these labels are the lesson's proposed workflow and not official CAIS evidence levels\")\n\n    section(\"5. Genuinely running: incident triage and who decides reportability\")\n    for inc in ({\"unauthorised_action\": True, \"real_data\": True}, {\"unauthorised_action\": True, \"real_data\": False}, {\"unauthorised_action\": False}):\n        print(inc, \"->\", triage(inc))\n    print(\"with a person's assessment:\", triage({\"unauthorised_action\": True, \"real_data\": True}, statutory_assessment=False))\n    print(\"severity came from the incident facts and legal reportability stayed as needs legal review until a person supplied it, because whether an incident is reportable depends on the statute's definitions and on who is covered, which a function like this cannot know and the lab does not claim to know\")\n\n    section(\"6. Genuinely running: a structured question instead of free text\")\n    print(check_audit_status({\"external_audit_completed\": False}))\n    print(check_audit_status({\"external_audit_completed\": True}))\n    print(check_audit_status({}))\n    print(\"an explicit false produced a finding and an explicit true produced none, and a record with the field left out also produced none, so a missing answer is silently treated as fine and the rule has to be extended to treat absence as unknown; the field is also only a claim until evidence is attached\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: each control test against a correct and a broken version ---\ncontrol           test                                                 correct  broken  verdict\napproval_gate     refuses an approval for another target               True     False   catches the bug\nfile_scope        refuses a look-alike folder and the monitoring file  True     False   catches the bug\nkill_switch       stops at step 4 of 10 and runs all 10 without a stop True     False   catches the bug\nrollback          state hash equals the hash before the change         True     False   catches the bug\nrollback          state has the same number of keys                    True     True    MISSES the bug\ncredential_scope  denies a resource outside the token scopes           True     False   catches the bug\ntests that pass on the correct control and fail on the broken one: 5 of 6\nfive of the six tests passed on the correct control and failed on the broken one, and the weak rollback test that only counts keys passed on both, so it would have reported the rollback as working when it restored reversed values; a passing test only means something if the same test fails on a version that is wrong\n\n--- 2. Genuinely running: which claims have a test at all ---\nAgent cannot deploy without approval       -> tested by approval_gate\nAgent respects file boundaries             -> tested by file_scope\nAgent can be stopped                       -> tested by kill_switch\nFailed operations can be recovered         -> tested by rollback\nCredential access is scoped                -> tested by credential_scope\nIncidents are investigated and closed      -> NO TEST, unsubstantiated\nSafety findings are resolved               -> NO TEST, unsubstantiated\nclaims with a test: 5 of 7\nfive of seven claims have a test behind them and two have none, and a claim with no test is not necessarily false but nothing here shows that it is true; the two untested claims are the ones about people and process rather than code\n\n--- 3. Genuinely running: the weak and the strong rollback test side by side ---\nstrong, hash comparison    correct True  broken False\nweak, key count            correct True  broken True\nthe broken rollback restored every value reversed, the hash comparison saw the difference and the key count did not; comparing the whole restored state to what it was before is the check that matters\n\n--- 4. Genuinely running: an evidence ladder that cannot be skipped ---\n-> DOCUMENTED_FINDING\n-> REPRODUCED_FINDING\n-> REMEDIATED_FINDING\n-> VERIFIED_REMEDIATION\nrefused: cannot move from DOCUMENTED_FINDING to VERIFIED_REMEDIATION\nrefused: cannot move from REMEDIATED_FINDING to REPRODUCED_FINDING\na finding moved up one step at a time to a verified remediation, a jump from a documented finding to a verified remediation and a step backwards were both refused; these labels are the lesson's proposed workflow and not official CAIS evidence levels\n\n--- 5. Genuinely running: incident triage and who decides reportability ---\n{'unauthorised_action': True, 'real_data': True} -> {'severity': 'HIGH', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\n{'unauthorised_action': True, 'real_data': False} -> {'severity': 'MEDIUM', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\n{'unauthorised_action': False} -> {'severity': 'LOW', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\nwith a person's assessment: {'severity': 'HIGH', 'legally_reportable': False}\nseverity came from the incident facts and legal reportability stayed as needs legal review until a person supplied it, because whether an incident is reportable depends on the statute's definitions and on who is covered, which a function like this cannot know and the lab does not claim to know\n\n--- 6. Genuinely running: a structured question instead of free text ---\n{'category': 'organizational_risks', 'finding': 'External audit not completed', 'review_required': True}\nNone\nNone\nan explicit false produced a finding and an explicit true produced none, and a record with the field left out also produced none, so a missing answer is silently treated as fine and the rule has to be extended to treat absence as unknown; the field is also only a claim until evidence is attached"
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
    "headingEn": "Experiment 1: Each control test against a correct and a broken version",
    "headingKn": "ಪ್ರಯೋಗ 1: Each control test against a correct and a broken version",
    "bodyEn": "What it ran: Each control test against a correct and a broken version. What the lab concluded: five of the six tests passed on the correct control and failed on the broken one, and the weak rollback test that only counts keys passed on both, so it would have reported the rollback as working when it restored reversed values; a passing test only means something if the same test fails on a version that is wrong",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Each control test against a correct and a broken version. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): five of the six tests passed on the correct control and failed on the broken one, and the weak rollback test that only counts keys passed on both, so it would have reported the rollback as working when it restored reversed values; a passing test only means something if the same test fails on a version that is wrong"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: each control test against a correct and a broken version ---\ncontrol           test                                                 correct  broken  verdict\napproval_gate     refuses an approval for another target               True     False   catches the bug\nfile_scope        refuses a look-alike folder and the monitoring file  True     False   catches the bug\nkill_switch       stops at step 4 of 10 and runs all 10 without a stop True     False   catches the bug\nrollback          state hash equals the hash before the change         True     False   catches the bug\nrollback          state has the same number of keys                    True     True    MISSES the bug\ncredential_scope  denies a resource outside the token scopes           True     False   catches the bug\ntests that pass on the correct control and fail on the broken one: 5 of 6"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Which claims have a test at all",
    "headingKn": "ಪ್ರಯೋಗ 2: Which claims have a test at all",
    "bodyEn": "What it ran: Which claims have a test at all. What the lab concluded: five of seven claims have a test behind them and two have none, and a claim with no test is not necessarily false but nothing here shows that it is true; the two untested claims are the ones about people and process rather than code",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Which claims have a test at all. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): five of seven claims have a test behind them and two have none, and a claim with no test is not necessarily false but nothing here shows that it is true; the two untested claims are the ones about people and process rather than code"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: which claims have a test at all ---\nAgent cannot deploy without approval       -> tested by approval_gate\nAgent respects file boundaries             -> tested by file_scope\nAgent can be stopped                       -> tested by kill_switch\nFailed operations can be recovered         -> tested by rollback\nCredential access is scoped                -> tested by credential_scope\nIncidents are investigated and closed      -> NO TEST, unsubstantiated\nSafety findings are resolved               -> NO TEST, unsubstantiated\nclaims with a test: 5 of 7"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: The weak and the strong rollback test side by side",
    "headingKn": "ಪ್ರಯೋಗ 3: The weak and the strong rollback test side by side",
    "bodyEn": "What it ran: The weak and the strong rollback test side by side. What the lab concluded: the broken rollback restored every value reversed, the hash comparison saw the difference and the key count did not; comparing the whole restored state to what it was before is the check that matters",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The weak and the strong rollback test side by side. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the broken rollback restored every value reversed, the hash comparison saw the difference and the key count did not; comparing the whole restored state to what it was before is the check that matters"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: the weak and the strong rollback test side by side ---\nstrong, hash comparison    correct True  broken False\nweak, key count            correct True  broken True"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: An evidence ladder that cannot be skipped",
    "headingKn": "ಪ್ರಯೋಗ 4: An evidence ladder that cannot be skipped",
    "bodyEn": "What it ran: An evidence ladder that cannot be skipped. What the lab concluded: a finding moved up one step at a time to a verified remediation, a jump from a documented finding to a verified remediation and a step backwards were both refused; these labels are the lesson's proposed workflow and not official CAIS evidence levels",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An evidence ladder that cannot be skipped. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a finding moved up one step at a time to a verified remediation, a jump from a documented finding to a verified remediation and a step backwards were both refused; these labels are the lesson's proposed workflow and not official CAIS evidence levels"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: an evidence ladder that cannot be skipped ---\n-> DOCUMENTED_FINDING\n-> REPRODUCED_FINDING\n-> REMEDIATED_FINDING\n-> VERIFIED_REMEDIATION\nrefused: cannot move from DOCUMENTED_FINDING to VERIFIED_REMEDIATION\nrefused: cannot move from REMEDIATED_FINDING to REPRODUCED_FINDING"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Incident triage and who decides reportability",
    "headingKn": "ಪ್ರಯೋಗ 5: Incident triage and who decides reportability",
    "bodyEn": "What it ran: Incident triage and who decides reportability. What the lab concluded: severity came from the incident facts and legal reportability stayed as needs legal review until a person supplied it, because whether an incident is reportable depends on the statute's definitions and on who is covered, which a function like this cannot know and the lab does not claim to know",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Incident triage and who decides reportability. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): severity came from the incident facts and legal reportability stayed as needs legal review until a person supplied it, because whether an incident is reportable depends on the statute's definitions and on who is covered, which a function like this cannot know and the lab does not claim to know"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: incident triage and who decides reportability ---\n{'unauthorised_action': True, 'real_data': True} -> {'severity': 'HIGH', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\n{'unauthorised_action': True, 'real_data': False} -> {'severity': 'MEDIUM', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\n{'unauthorised_action': False} -> {'severity': 'LOW', 'legally_reportable': 'NEEDS_LEGAL_REVIEW'}\nwith a person's assessment: {'severity': 'HIGH', 'legally_reportable': False}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A structured question instead of free text",
    "headingKn": "ಪ್ರಯೋಗ 6: A structured question instead of free text",
    "bodyEn": "What it ran: A structured question instead of free text. What the lab concluded: an explicit false produced a finding and an explicit true produced none, and a record with the field left out also produced none, so a missing answer is silently treated as fine and the rule has to be extended to treat absence as unknown; the field is also only a claim until evidence is attached",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A structured question instead of free text. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an explicit false produced a finding and an explicit true produced none, and a record with the field left out also produced none, so a missing answer is silently treated as fine and the rule has to be extended to treat absence as unknown; the field is also only a claim until evidence is attached"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a structured question instead of free text ---\n{'category': 'organizational_risks', 'finding': 'External audit not completed', 'review_required': True}\nNone\nNone"
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
    "headingEn": "Genuinely Found: Tests Against Broken Controls",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮುರಿದ ನಿಯಂತ್ರಣಗಳ ವಿರುದ್ಧ ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 1: five of six tests passed on the correct control and failed on the broken one, while the weak rollback test that counts keys passed on both. Section 2: five of seven claims had a test and the two about investigated incidents and resolved safety findings had none. Section 3: the strong hash test gave correct True and broken False, the weak test gave True and True because the broken rollback restored every value reversed.",
    "bodyKn": "ವಿಭಾಗ 1: ಆರು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಐದು ಸರಿಯಾದ ನಿಯಂತ್ರಣದಲ್ಲಿ ಪಾಸ್ ಆಗಿ ಮುರಿದದ್ದರಲ್ಲಿ ವಿಫಲವಾದವು, ಆದರೆ keys ಎಣಿಸುವ ದುರ್ಬಲ rollback ಪರೀಕ್ಷೆ ಎರಡರಲ್ಲೂ ಪಾಸ್ ಆಯಿತು. ವಿಭಾಗ 2: ಏಳು ಹೇಳಿಕೆಗಳಲ್ಲಿ ಐದಕ್ಕೆ ಪರೀಕ್ಷೆ ಇತ್ತು ಮತ್ತು ತನಿಖೆ ಮಾಡಿದ ಘಟನೆಗಳು ಹಾಗೂ ಪರಿಹರಿಸಿದ ಸುರಕ್ಷತಾ ಸಂಶೋಧನೆಗಳ ಬಗ್ಗೆ ಎರಡಕ್ಕೆ ಇರಲಿಲ್ಲ. ವಿಭಾಗ 3: ಬಲವಾದ hash ಪರೀಕ್ಷೆ ಸರಿಯಾದದಕ್ಕೆ True ಮತ್ತು ಮುರಿದದ್ದಕ್ಕೆ False ನೀಡಿತು, ದುರ್ಬಲ ಪರೀಕ್ಷೆ ಮುರಿದ rollback ಪ್ರತಿ ಮೌಲ್ಯ ಹಿಮ್ಮುಖವಾಗಿ ಮರುಸ್ಥಾಪಿಸಿದ್ದರಿಂದ True ಮತ್ತು True ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Ladder, Triage and the Missing Answer",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಏಣಿ, Triage ಮತ್ತು ಕಾಣೆಯಾದ ಉತ್ತರ",
    "bodyEn": "Section 4: a finding moved up four steps to VERIFIED_REMEDIATION, and a jump from DOCUMENTED_FINDING to VERIFIED_REMEDIATION and a step back from REMEDIATED_FINDING to REPRODUCED_FINDING were refused. Section 5: the three incidents were HIGH, MEDIUM and LOW and all stayed NEEDS_LEGAL_REVIEW until a person supplied False. Section 6: an explicit false gave a finding, an explicit true gave None and a record with the field missing also gave None.",
    "bodyKn": "ವಿಭಾಗ 4: ಸಂಶೋಧನೆ ನಾಲ್ಕು ಹಂತ ಮೇಲೆ ಸರಿದು VERIFIED_REMEDIATION ತಲುಪಿತು, ಮತ್ತು DOCUMENTED_FINDING ನಿಂದ VERIFIED_REMEDIATION ಗೆ ಜಿಗಿತ ಹಾಗೂ REMEDIATED_FINDING ನಿಂದ REPRODUCED_FINDING ಗೆ ಹಿಂದಡಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟವು. ವಿಭಾಗ 5: ಮೂರು ಘಟನೆಗಳು HIGH, MEDIUM ಮತ್ತು LOW ಆಗಿ ವ್ಯಕ್ತಿ False ನೀಡುವವರೆಗೆ ಎಲ್ಲವೂ NEEDS_LEGAL_REVIEW ಆಗಿ ಉಳಿದವು. ವಿಭಾಗ 6: ಸ್ಪಷ್ಟ false ಸಂಶೋಧನೆ ನೀಡಿತು, ಸ್ಪಷ್ಟ true None ನೀಡಿತು ಮತ್ತು ಕ್ಷೇತ್ರ ಇಲ್ಲದ ದಾಖಲೆಯೂ None ನೀಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A claim is only evidenced by a test that would fail if the control were broken, and a rule that treats a missing answer as fine hides the cases that matter most.",
    "bodyKn": "ನಿಯಂತ್ರಣ ಮುರಿದರೆ ವಿಫಲವಾಗುವ ಪರೀಕ್ಷೆಯಿಂದ ಮಾತ್ರ ಹೇಳಿಕೆ ಸಾಕ್ಷ್ಯಾಧಾರಿತ, ಮತ್ತು ಕಾಣೆಯಾದ ಉತ್ತರವನ್ನು ಸರಿ ಎಂದು ಪರಿಗಣಿಸುವ ನಿಯಮ ಅತಿ ಮುಖ್ಯ ಪ್ರಕರಣಗಳನ್ನು ಮರೆಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"all our tests pass, so the controls work.\" The weak rollback test passed on a rollback that restored every value reversed.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನಮ್ಮ ಎಲ್ಲಾ ಪರೀಕ್ಷೆಗಳು ಪಾಸ್ ಆದವು, ಆದ್ದರಿಂದ ನಿಯಂತ್ರಣಗಳು ಕೆಲಸ ಮಾಡುತ್ತವೆ.\" ದುರ್ಬಲ rollback ಪರೀಕ್ಷೆ ಪ್ರತಿ ಮೌಲ್ಯ ಹಿಮ್ಮುಖವಾಗಿ ಮರುಸ್ಥಾಪಿಸಿದ rollback ಮೇಲೆಯೂ ಪಾಸ್ ಆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Broken variant: a copy of a control with a chosen bug. Evidence ladder: ordered levels of proof. Triage: ranking an incident by its facts. Reportable: a legal status a person decides.",
    "bodyKn": "ಮುರಿದ ಆವೃತ್ತಿ: ಆಯ್ದ ದೋಷ ಇರುವ ನಿಯಂತ್ರಣದ ನಕಲು. ಸಾಕ್ಷ್ಯ ಏಣಿ: ಪುರಾವೆಯ ಕ್ರಮಬದ್ಧ ಮಟ್ಟಗಳು. Triage: ಘಟನೆಯನ್ನು ಅದರ ಸತ್ಯಗಳಿಂದ ಶ್ರೇಣೀಕರಿಸುವುದು. ವರದಿಗೆ ಅರ್ಹ: ವ್ಯಕ್ತಿ ನಿರ್ಧರಿಸುವ ಕಾನೂನು ಸ್ಥಿತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Five of six tests caught their broken control. 2) The weak rollback test missed it. 3) Two of seven claims had no test. 4) The evidence ladder refused a skip and a step back. 5) Legal reportability stayed with a person.",
    "bodyKn": "1) ಆರು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಐದು ತಮ್ಮ ಮುರಿದ ನಿಯಂತ್ರಣ ಹಿಡಿದವು. 2) ದುರ್ಬಲ rollback ಪರೀಕ್ಷೆ ಅದನ್ನು ತಪ್ಪಿಸಿತು. 3) ಏಳು ಹೇಳಿಕೆಗಳಲ್ಲಿ ಎರಡಕ್ಕೆ ಪರೀಕ್ಷೆ ಇರಲಿಲ್ಲ. 4) ಸಾಕ್ಷ್ಯ ಏಣಿ ಜಿಗಿತ ಮತ್ತು ಹಿಂದಡಿ ನಿರಾಕರಿಸಿತು. 5) ಕಾನೂನು ವರದಿ ವ್ಯಕ್ತಿಯ ಬಳಿ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many of the six tests failed on the broken control?",
      "qKn": "ಆರು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಎಷ್ಟು ಮುರಿದ ನಿಯಂತ್ರಣದಲ್ಲಿ ವಿಫಲವಾದವು?",
      "opts": [
       "5",
       "6",
       "4",
       "0"
      ],
      "optsKn": [
       "5",
       "6",
       "4",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "Which test passed on both the correct and the broken control?",
      "qKn": "ಯಾವ ಪರೀಕ್ಷೆ ಸರಿಯಾದ ಮತ್ತು ಮುರಿದ ಎರಡೂ ನಿಯಂತ್ರಣಗಳಲ್ಲಿ ಪಾಸ್ ಆಯಿತು?",
      "opts": [
       "The rollback test that counts keys",
       "The approval gate test",
       "The kill switch test",
       "The credential test"
      ],
      "optsKn": [
       "keys ಎಣಿಸುವ rollback ಪರೀಕ್ಷೆ",
       "ಅನುಮೋದನೆ gate ಪರೀಕ್ಷೆ",
       "kill switch ಪರೀಕ್ಷೆ",
       "ರುಜುವಾತು ಪರೀಕ್ಷೆ"
      ],
      "correct": 0
     },
     {
      "q": "How many of the seven claims had no test?",
      "qKn": "ಏಳು ಹೇಳಿಕೆಗಳಲ್ಲಿ ಎಷ್ಟಕ್ಕೆ ಪರೀಕ್ಷೆ ಇರಲಿಲ್ಲ?",
      "opts": [
       "2",
       "5",
       "0",
       "7"
      ],
      "optsKn": [
       "2",
       "5",
       "0",
       "7"
      ],
      "correct": 0
     },
     {
      "q": "What did triage return for legal reportability without a person assessment?",
      "qKn": "ವ್ಯಕ್ತಿ ಮೌಲ್ಯಮಾಪನ ಇಲ್ಲದೆ ಕಾನೂನು ವರದಿಗೆ triage ಏನು ಹಿಂತಿರುಗಿಸಿತು?",
      "opts": [
       "NEEDS_LEGAL_REVIEW",
       "True",
       "False",
       "HIGH"
      ],
      "optsKn": [
       "NEEDS_LEGAL_REVIEW (ಕಾನೂನು ವಿಮರ್ಶೆ ಅಗತ್ಯ)",
       "True",
       "False",
       "HIGH (ಹೆಚ್ಚು)"
      ],
      "correct": 0
     },
     {
      "q": "What did a deployment record with the audit field missing produce?",
      "qKn": "ಆಡಿಟ್ ಕ್ಷೇತ್ರ ಇಲ್ಲದ ನಿಯೋಜನೆ ದಾಖಲೆ ಏನು ನೀಡಿತು?",
      "opts": [
       "None, so absence passed silently",
       "A finding",
       "An error",
       "A block"
      ],
      "optsKn": [
       "None, ಆದ್ದರಿಂದ ಕೊರತೆ ಮೌನವಾಗಿ ಹಾದುಹೋಯಿತು",
       "ಒಂದು ಸಂಶೋಧನೆ",
       "ಒಂದು ದೋಷ",
       "ಒಂದು ತಡೆ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
