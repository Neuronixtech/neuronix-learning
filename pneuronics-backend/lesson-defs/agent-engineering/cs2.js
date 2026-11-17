module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215ce",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "CAIS, CAISI, and Societal-Scale Risk (Part 2 of 3) — The Governance Gate",
 "titleKn": "CAIS, CAISI, ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 2 / 3) — ಆಡಳಿತ Gate",
 "desc": "Map risk labels to controls, demand evidence for each control and bind approval to one deployment.",
 "descKn": "ಅಪಾಯ ಲೇಬಲ್‌ಗಳನ್ನು ನಿಯಂತ್ರಣಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡಿ, ಪ್ರತಿ ನಿಯಂತ್ರಣಕ್ಕೆ ಸಾಕ್ಷ್ಯ ಬೇಡಿ ಮತ್ತು ಅನುಮೋದನೆಯನ್ನು ಒಂದು ನಿಯೋಜನೆಗೆ ಬಂಧಿಸಿ.",
 "objectives": [
  "Derive required controls.",
  "Demand real evidence.",
  "Bind approval to a digest.",
  "Separate author and reviewer.",
  "Never report safe."
 ],
 "objectivesKn": [
  "ಅಗತ್ಯ ನಿಯಂತ್ರಣ ಪಡೆಯಿರಿ.",
  "ನಿಜ ಸಾಕ್ಷ್ಯ ಬೇಡಿ.",
  "ಅನುಮೋದನೆಯನ್ನು digest ಗೆ ಬಂಧಿಸಿ.",
  "ಲೇಖಕ ಮತ್ತು ವಿಮರ್ಶಕ ಬೇರ್ಪಡಿಸಿ.",
  "ಎಂದಿಗೂ ಸುರಕ್ಷಿತ ಎನ್ನಬೇಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "CAIS, CAISI, and Societal-Scale Risk (Part 2 of 3)",
    "textKn": "CAIS, CAISI, ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a governance gate mapping flagged categories to required controls, a structural control check against one backed by an evidence store and a roster, approval binding to a deployment digest, expiry, separation of duties, status counts over eight combinations and thirteen unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind CAIS, CAISI and societal-scale risk (a multi-label four-risk screening tool, its false positives and negatives, a governance gate with control evidence, approval binding and separation of duties, tests of controls against broken versions, an evidence ladder, incident triage and an explicit unknown for legal reportability), not the real software, and the indicators, labelled descriptions, control mapping and the five tiny controls with their broken versions are written by the lab author, reviewers, evidence and the clock are strings and numbers, no classification comes from CAIS, CAISI or any regulator and no legal question is decided, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of CAIS, CAISI at NIST, the 2023 extinction-risk statement, the four-risk taxonomy attributed to CAIS and California SB-53 is conceptual or cited and was not checked here; the lesson itself says that SB-53 was signed on September 29, 2025 and that its exact obligations depend on statutory definitions, and this module does not interpret the statute or decide whether any organisation is covered or any incident is reportable. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದ ವರ್ಗಗಳನ್ನು ಅಗತ್ಯ ನಿಯಂತ್ರಣಗಳಿಗೆ ನಕ್ಷೆ ಮಾಡುವ ಆಡಳಿತ gate, ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ ಮತ್ತು ಪಟ್ಟಿಯಿಂದ ಬೆಂಬಲಿತವಾದ ಒಂದರ ವಿರುದ್ಧ ರಚನಾತ್ಮಕ ನಿಯಂತ್ರಣ ಪರಿಶೀಲನೆ, ನಿಯೋಜನೆ digest ಗೆ ಅನುಮೋದನೆ ಬಂಧ, ಮುಕ್ತಾಯ, ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ, ಎಂಟು ಸಂಯೋಜನೆಗಳ ಸ್ಥಿತಿ ಎಣಿಕೆ ಮತ್ತು ಓಡಿಸಿದ ಹದಿಮೂರು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CAIS, CAISI ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಬಹು-ಲೇಬಲ್ ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ, ಅದರ ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ, ನಿಯಂತ್ರಣ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆ ಬಂಧ ಮತ್ತು ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ ಇರುವ ಆಡಳಿತ gate, ಮುರಿದ ಆವೃತ್ತಿಗಳ ವಿರುದ್ಧ ನಿಯಂತ್ರಣ ಪರೀಕ್ಷೆಗಳು, ಸಾಕ್ಷ್ಯ ಏಣಿ, ಘಟನೆ triage ಮತ್ತು ಕಾನೂನು ವರದಿಗೆ ಸ್ಪಷ್ಟ ಅಜ್ಞಾತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸೂಚಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳು, ನಿಯಂತ್ರಣ ನಕ್ಷೆ ಮತ್ತು ಐದು ಚಿಕ್ಕ ನಿಯಂತ್ರಣಗಳು ಹಾಗೂ ಅವುಗಳ ಮುರಿದ ಆವೃತ್ತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದಿದ್ದಾರೆ, ವಿಮರ್ಶಕರು, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಗಡಿಯಾರ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಸಂಖ್ಯೆಗಳು, ಯಾವ ವರ್ಗೀಕರಣವೂ CAIS, CAISI ಅಥವಾ ಯಾವುದೇ ನಿಯಂತ್ರಕರಿಂದ ಬರುವುದಿಲ್ಲ ಮತ್ತು ಯಾವ ಕಾನೂನು ಪ್ರಶ್ನೆಯನ್ನೂ ನಿರ್ಧರಿಸಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. CAIS, NIST ನಲ್ಲಿ CAISI, 2023 ನಾಶ-ಅಪಾಯ ಹೇಳಿಕೆ, CAIS ಗೆ ಹೇಳಲಾದ ನಾಲ್ಕು-ಅಪಾಯ ವರ್ಗೀಕರಣ ಮತ್ತು California SB-53 ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ; SB-53 ಅನ್ನು ಸೆಪ್ಟೆಂಬರ್ 29, 2025 ರಂದು ಸಹಿ ಮಾಡಲಾಯಿತು ಮತ್ತು ಅದರ ನಿಖರ ಬಾಧ್ಯತೆಗಳು ಶಾಸನಬದ್ಧ ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಅವಲಂಬಿಸಿವೆ ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ಈ ಮಾಡ್ಯೂಲ್ ಶಾಸನ ವ್ಯಾಖ್ಯಾನಿಸುವುದಿಲ್ಲ ಅಥವಾ ಯಾವ ಸಂಸ್ಥೆ ಒಳಪಡುತ್ತದೆ ಅಥವಾ ಯಾವ ಘಟನೆ ವರದಿಗೆ ಅರ್ಹ ಎಂದು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Control Record Is a Claim Until Something Backs It",
    "textKn": "ನಿಯಂತ್ರಣ ದಾಖಲೆ ಏನಾದರೂ ಬೆಂಬಲಿಸುವವರೆಗೆ ಒಂದು ಹೇಳಿಕೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Controls, Evidence, Approval and Four Statuses",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು, ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆ ಮತ್ತು ನಾಲ್ಕು ಸ್ಥಿತಿಗಳು",
    "bodyEn": "This part extends the screen into a gate. Flagged categories imply required controls, each control needs a record, and a human approval has to be bound to the exact deployment. The statuses are MANUAL_REVIEW_REQUIRED, BLOCKED_MISSING_CONTROLS, AWAITING_HUMAN_APPROVAL and GOVERNANCE_CHECKS_SATISFIED, and none of them says safe. The lab then shows a record that is well formed but made up, a stricter check backed by an evidence store and a roster, an approval invalidated by a changed deployment, an expiry or a self-approval, counts every combination and runs thirteen unit tests. The control mapping is a teaching policy.",
    "bodyKn": "ಈ ಭಾಗ ಸ್ಕ್ರೀನ್ ಅನ್ನು gate ಆಗಿ ವಿಸ್ತರಿಸುತ್ತದೆ. ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದ ವರ್ಗಗಳು ಅಗತ್ಯ ನಿಯಂತ್ರಣಗಳನ್ನು ಸೂಚಿಸುತ್ತವೆ, ಪ್ರತಿ ನಿಯಂತ್ರಣಕ್ಕೆ ದಾಖಲೆ ಬೇಕು, ಮತ್ತು ಮಾನವ ಅನುಮೋದನೆ ನಿಖರ ನಿಯೋಜನೆಗೆ ಬಂಧಿತವಾಗಿರಬೇಕು. ಸ್ಥಿತಿಗಳು MANUAL_REVIEW_REQUIRED, BLOCKED_MISSING_CONTROLS, AWAITING_HUMAN_APPROVAL ಮತ್ತು GOVERNANCE_CHECKS_SATISFIED, ಮತ್ತು ಯಾವುದೂ ಸುರಕ್ಷಿತ ಎನ್ನುವುದಿಲ್ಲ. ನಂತರ ಲ್ಯಾಬ್ ಚೆನ್ನಾಗಿ ರೂಪಿತವಾದ ಆದರೆ ಕಲ್ಪಿತ ದಾಖಲೆ, ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ ಮತ್ತು ಪಟ್ಟಿಯಿಂದ ಬೆಂಬಲಿತ ಕಠಿಣ ಪರಿಶೀಲನೆ, ಬದಲಾದ ನಿಯೋಜನೆ, ಮುಕ್ತಾಯ ಅಥವಾ ಸ್ವಯಂ-ಅನುಮೋದನೆಯಿಂದ ಅಮಾನ್ಯವಾದ ಅನುಮೋದನೆ ತೋರಿಸುತ್ತದೆ, ಪ್ರತಿ ಸಂಯೋಜನೆ ಎಣಿಸುತ್ತದೆ ಮತ್ತು ಹದಿಮೂರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ. ನಿಯಂತ್ರಣ ನಕ್ಷೆ ಬೋಧನಾ ನೀತಿ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "From Risk to Required Control",
    "headingKn": "ಅಪಾಯದಿಂದ ಅಗತ್ಯ ನಿಯಂತ್ರಣಕ್ಕೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">missing evidence must not become approval</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">risk labels</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">map to controls</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">control records</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">need real evidence</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">approval</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bound to the deployment</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">status</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">never says safe</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">missing evidence must not become approval</text></svg>",
    "captionEn": "Flagged categories imply controls, controls need evidence and approval needs a binding.",
    "captionKn": "ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದ ವರ್ಗಗಳು ನಿಯಂತ್ರಣಗಳನ್ನು ಸೂಚಿಸುತ್ತವೆ, ನಿಯಂತ್ರಣಗಳಿಗೆ ಸಾಕ್ಷ್ಯ ಬೇಕು ಮತ್ತು ಅನುಮೋದನೆಗೆ ಬಂಧ ಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The four statuses",
    "headingKn": "ನಾಲ್ಕು ಸ್ಥಿತಿಗಳು",
    "headers": [
     "Status",
     "When"
    ],
    "rows": [
     [
      "MANUAL_REVIEW_REQUIRED",
      "no indicator matched, so nothing is concluded"
     ],
     [
      "BLOCKED_MISSING_CONTROLS",
      "a required control record is missing or invalid"
     ],
     [
      "AWAITING_HUMAN_APPROVAL",
      "controls present, approval missing or invalid"
     ],
     [
      "GOVERNANCE_CHECKS_SATISFIED",
      "the configured checks passed, which is not a safety finding"
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
    "filename": "cs_2.py",
    "headingEn": "Rules, control checks, approval and the gate",
    "headingKn": "ನಿಯಮಗಳು, ನಿಯಂತ್ರಣ ಪರಿಶೀಲನೆ, ಅನುಮೋದನೆ ಮತ್ತು gate",
    "descEn": "collect_required_controls returns the sorted union of controls, verify_control_backed also needs the evidence, the author and the roster to agree, validate_approval checks id, digest, expiry and requester, and assess returns one of four statuses.",
    "descKn": "collect_required_controls ನಿಯಂತ್ರಣಗಳ ವಿಂಗಡಿಸಿದ ಸಂಯೋಜನೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, verify_control_backed ಗೆ ಸಾಕ್ಷ್ಯ, ಲೇಖಕ ಮತ್ತು ಪಟ್ಟಿ ಒಪ್ಪಬೇಕು, validate_approval id, digest, ಮುಕ್ತಾಯ ಮತ್ತು ವಿನಂತಿದಾರ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮತ್ತು assess ನಾಲ್ಕು ಸ್ಥಿತಿಗಳಲ್ಲಿ ಒಂದು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.",
    "code": "RISK_RULES = {\n    \"malicious_use\": {\"indicators\": [\"attacker misuse\", \"unauthorized disclosure\", \"malicious exploitation\"], \"controls\": [\"access_controls\", \"adversarial_testing\"]},\n    \"ai_races\": {\"indicators\": [\"competitive pressure\", \"rushed deployment\", \"accelerated launch\"], \"controls\": [\"external_audit\", \"human_approval\"]},\n    \"organizational_risks\": {\"indicators\": [\"missing audit\", \"incomplete security review\", \"unresolved safety finding\"], \"controls\": [\"external_audit\", \"incident_response\"]},\n    \"rogue_ais\": {\"indicators\": [\"evade shutdown\", \"bypass human approval\", \"unauthorized self-modification\"], \"controls\": [\"kill_switch\", \"human_approval\", \"runtime_monitoring\"]},\n}\n\n\ndef digest(v):\n    return hashlib.sha256(json.dumps(v, sort_keys=True, separators=(\",\", \":\")).encode()).hexdigest()\n\n\ndef classify_risks(description):\n    text = re.sub(r\"\\s+\", \" \", description.casefold())\n    return [{\"category\": c, \"indicators\": [i for i in r[\"indicators\"] if re.search(r\"(?<!\\w)\" + re.escape(i) + r\"(?!\\w)\", text)]} for c, r in RISK_RULES.items()\n            if any(re.search(r\"(?<!\\w)\" + re.escape(i) + r\"(?!\\w)\", text) for i in r[\"indicators\"])]\n\n\ndef collect_required_controls(findings):\n    req = set()\n    for f in findings:\n        req.update(RISK_RULES[f[\"category\"]][\"controls\"])\n    return sorted(req)\n\n\ndef verify_control(rec, control_id):\n    return (isinstance(rec, dict) and rec.get(\"control_id\") == control_id and rec.get(\"status\") == \"verified\"\n            and bool(rec.get(\"evidence_id\")) and bool(rec.get(\"reviewer_id\")))\n\n\ndef verify_control_backed(rec, control_id, evidence_store, roster):\n    if not verify_control(rec, control_id):\n        return False\n    ev = evidence_store.get(rec[\"evidence_id\"])\n    return ev is not None and ev[\"control_id\"] == control_id and rec[\"reviewer_id\"] in roster and ev[\"author\"] != rec[\"reviewer_id\"]\n\n\ndef evaluate_controls(required, records, checker=verify_control):\n    ok = {c: checker(records.get(c), c) for c in required}\n    return ok, [c for c, v in ok.items() if not v]\n\n\ndef validate_approval(approval, deployment, now=None, requester=None):\n    if not approval or approval.get(\"decision\") != \"approved\" or not approval.get(\"approver_id\"):\n        return False, \"no approval\"\n    if approval.get(\"deployment_id\") != deployment[\"deployment_id\"]:\n        return False, \"approval is for another deployment\"\n    if approval.get(\"deployment_digest\") != digest(deployment):\n        return False, \"deployment changed after approval\"\n    if approval.get(\"expires_at\") is not None and now is not None and now >= approval[\"expires_at\"]:\n        return False, \"approval expired\"\n    if requester is not None and approval[\"approver_id\"] == requester:\n        return False, \"requester approved their own deployment\"\n    return True, \"valid\"\n\n\ndef assess(deployment, records, approval, checker=verify_control, now=None):\n    findings = classify_risks(deployment[\"description\"])\n    required = collect_required_controls(findings)\n    if not findings:\n        status, missing = \"MANUAL_REVIEW_REQUIRED\", []\n    else:\n        _, missing = evaluate_controls(required, records, checker)\n        if missing:\n            status = \"BLOCKED_MISSING_CONTROLS\"\n        elif not validate_approval(approval, deployment, now, deployment.get(\"requester\"))[0]:\n            status = \"AWAITING_HUMAN_APPROVAL\"\n        else:\n            status = \"GOVERNANCE_CHECKS_SATISFIED\"\n    return {\"status\": status, \"flagged\": [f[\"category\"] for f in findings], \"required\": required, \"missing\": missing}\n\n\ndef rec(cid, evidence=\"evidence-\" + \"x\", reviewer=\"independent-reviewer\"):\n    return {\"control_id\": cid, \"status\": \"verified\", \"evidence_id\": f\"evidence-{cid}\", \"reviewer_id\": reviewer}\n\n\nDEP = {\"deployment_id\": \"agent-release-001\", \"name\": \"Enterprise Autonomous Agent\", \"requester\": \"team-lead\",\n       \"description\": \"Competitive pressure caused a rushed deployment with a missing audit.\"}\n\n\ndef approval_for(dep, approver=\"reviewer-9\", expires=None):\n    return {\"deployment_id\": dep[\"deployment_id\"], \"deployment_digest\": digest(dep), \"decision\": \"approved\", \"approver_id\": approver, \"expires_at\": expires}\n\n\nALL3 = {c: rec(c) for c in (\"external_audit\", \"human_approval\", \"incident_response\")}\n\n\nclass Tests(unittest.TestCase):\n    def test_malicious_use(self):\n        self.assertEqual([f[\"category\"] for f in classify_risks(\"The system faces attacker misuse.\")], [\"malicious_use\"])\n\n    def test_required_controls_sorted_unique(self):\n        f = classify_risks(\"competitive pressure and a missing audit\")\n        self.assertEqual(collect_required_controls(f), [\"external_audit\", \"human_approval\", \"incident_response\"])\n\n    def test_structural_pass(self):\n        self.assertTrue(verify_control(rec(\"external_audit\"), \"external_audit\"))\n\n    def test_wrong_control_id_fails(self):\n        self.assertFalse(verify_control(rec(\"kill_switch\"), \"external_audit\"))\n\n    def test_missing_evidence_fails(self):\n        r = rec(\"external_audit\")\n        r[\"evidence_id\"] = \"\"\n        self.assertFalse(verify_control(r, \"external_audit\"))\n\n    def test_missing_control_blocks_even_with_approval(self):\n        recs = {k: v for k, v in ALL3.items() if k != \"external_audit\"}\n        self.assertEqual(assess(DEP, recs, approval_for(DEP))[\"status\"], \"BLOCKED_MISSING_CONTROLS\")\n\n    def test_no_approval_waits(self):\n        self.assertEqual(assess(DEP, ALL3, None)[\"status\"], \"AWAITING_HUMAN_APPROVAL\")\n\n    def test_all_checks_satisfied(self):\n        self.assertEqual(assess(DEP, ALL3, approval_for(DEP))[\"status\"], \"GOVERNANCE_CHECKS_SATISFIED\")\n\n    def test_no_indicators_is_manual_review(self):\n        d = dict(DEP, description=\"Routine update\")\n        self.assertEqual(assess(d, {}, approval_for(d))[\"status\"], \"MANUAL_REVIEW_REQUIRED\")\n\n    def test_changed_deployment_invalidates_approval(self):\n        ap = approval_for(DEP)\n        changed = dict(DEP, name=\"Another name\")\n        self.assertFalse(validate_approval(ap, changed)[0])\n\n    def test_wrong_deployment_id(self):\n        ap = dict(approval_for(DEP), deployment_id=\"other\")\n        self.assertFalse(validate_approval(ap, DEP)[0])\n\n    def test_self_approval_rejected(self):\n        self.assertFalse(validate_approval(approval_for(DEP, approver=\"team-lead\"), DEP, requester=\"team-lead\")[0])\n\n    def test_expired(self):\n        self.assertFalse(validate_approval(approval_for(DEP, expires=100), DEP, now=100)[0])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cs_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the lesson example, the status transitions, the made-up record, approval binding, the no-indicator case, the status count and thirteen unit tests.",
    "descKn": "main() lesson ಉದಾಹರಣೆ, ಸ್ಥಿತಿ ಪರಿವರ್ತನೆ, ಕಲ್ಪಿತ ದಾಖಲೆ, ಅನುಮೋದನೆ ಬಂಧ, ಸೂಚಕ-ಇಲ್ಲದ ಪ್ರಕರಣ, ಸ್ಥಿತಿ ಎಣಿಕೆ ಮತ್ತು ಹದಿಮೂರು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: the lesson example with the audit control missing\")\n    r = assess(DEP, {\"human_approval\": rec(\"human_approval\"), \"incident_response\": rec(\"incident_response\")}, None)\n    print(json.dumps(r, indent=1))\n    print(\"the description flagged AI races and organisational risks, the three required controls were the union of both lists with the shared external audit counted once, and the missing audit blocked the gate; the lesson's status was written by hand and this one comes from running the code\")\n\n    section(\"2. Genuinely running: how the status moves\")\n    print(\"all three controls, no approval:\", assess(DEP, ALL3, None)[\"status\"])\n    print(\"all three controls, approved:   \", assess(DEP, ALL3, approval_for(DEP))[\"status\"])\n    recs = {k: v for k, v in ALL3.items() if k != \"incident_response\"}\n    print(\"one control missing, approved:  \", assess(DEP, recs, approval_for(DEP))[\"status\"])\n    print(\"the status moved from awaiting approval to satisfied only when every control record and the approval were present, and an approval did not make up for a missing control; GOVERNANCE_CHECKS_SATISFIED is deliberately not called safe\")\n\n    section(\"3. Genuinely running: a record that is well formed but made up\")\n    fake = {c: {\"control_id\": c, \"status\": \"verified\", \"evidence_id\": \"evidence-999\", \"reviewer_id\": \"reviewer-07\"} for c in (\"external_audit\", \"human_approval\", \"incident_response\")}\n    print(\"structural check:\", assess(DEP, fake, approval_for(DEP))[\"status\"])\n    store = {f\"evidence-{c}\": {\"control_id\": c, \"author\": \"builder-1\"} for c in ALL3}\n    roster = {\"independent-reviewer\"}\n    print(\"backed by an evidence store and a roster:\", assess(DEP, fake, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))[\"status\"])\n    print(\"genuine records, same backed check:\", assess(DEP, ALL3, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))[\"status\"])\n    store[\"evidence-external_audit\"][\"author\"] = \"independent-reviewer\"\n    print(\"the reviewer wrote the evidence:\", assess(DEP, ALL3, approval_for(DEP), checker=lambda rr, c: verify_control_backed(rr, c, store, roster))[\"status\"])\n    print(\"records pointing at evidence-999 and reviewer-07 passed the structural check, failed once the evidence and the reviewer had to exist, and a reviewer who wrote the evidence was refused; an evidence store and a roster in the same process are still only simulated and a real one is authenticated and kept elsewhere\")\n\n    section(\"4. Genuinely running: an approval is bound to one exact deployment\")\n    ap = approval_for(DEP, expires=100)\n    print(\"as approved:\", validate_approval(ap, DEP, now=50))\n    print(\"description edited afterwards:\", validate_approval(ap, dict(DEP, description=DEP[\"description\"] + \" Plus production access.\"), now=50))\n    print(\"another deployment id:\", validate_approval(dict(ap, deployment_id=\"agent-release-002\"), DEP, now=50))\n    print(\"at the expiry time:\", validate_approval(ap, DEP, now=100))\n    print(\"approver is the requester:\", validate_approval(approval_for(DEP, approver=\"team-lead\"), DEP, now=50, requester=\"team-lead\"))\n    print(\"every change to the deployment, its identity, the clock or the approver invalidated the approval, which prevents a team from approving one thing and shipping another; the clock is a number the lab chooses and the names are strings\")\n\n    section(\"5. Genuinely running: no indicator is not a pass\")\n    quiet = dict(DEP, description=\"Routine update of the support portal.\")\n    print(assess(quiet, {}, approval_for(quiet)))\n    print(\"a description with no indicator went to manual review even with an approval attached, because nothing matched does not mean nothing applies\")\n\n    section(\"6. Genuinely counting: every combination of three conditions\")\n    counts = Counter()\n    for has_ind, ctl, appr in itertools.product((True, False), (True, False), (True, False)):\n        d = DEP if has_ind else dict(DEP, description=\"Routine update\")\n        counts[assess(d, ALL3 if ctl else {}, approval_for(d) if appr else None)[\"status\"]] += 1\n    print(dict(counts))\n    print(\"of the eight combinations of indicator, controls and approval only one reached GOVERNANCE_CHECKS_SATISFIED, four went to manual review, two were blocked for missing controls and one waited for approval; the counts follow from the status order the lab chose and are a design check and not a measurement\")\n\n    section(\"7. Genuinely running: the thirteen unit tests\")\n    stream = io.StringIO()\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\n    print(\"the tests cover classification, the union of required controls, the structural check and its failures, a block despite approval, a wait for approval, satisfaction, manual review, a changed deployment, a wrong id, self-approval and expiry, on this lab's own gate\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: the lesson example with the audit control missing ---\n{\n \"status\": \"BLOCKED_MISSING_CONTROLS\",\n \"flagged\": [\n  \"ai_races\",\n  \"organizational_risks\"\n ],\n \"required\": [\n  \"external_audit\",\n  \"human_approval\",\n  \"incident_response\"\n ],\n \"missing\": [\n  \"external_audit\"\n ]\n}\nthe description flagged AI races and organisational risks, the three required controls were the union of both lists with the shared external audit counted once, and the missing audit blocked the gate; the lesson's status was written by hand and this one comes from running the code\n\n--- 2. Genuinely running: how the status moves ---\nall three controls, no approval: AWAITING_HUMAN_APPROVAL\nall three controls, approved:    GOVERNANCE_CHECKS_SATISFIED\none control missing, approved:   BLOCKED_MISSING_CONTROLS\nthe status moved from awaiting approval to satisfied only when every control record and the approval were present, and an approval did not make up for a missing control; GOVERNANCE_CHECKS_SATISFIED is deliberately not called safe\n\n--- 3. Genuinely running: a record that is well formed but made up ---\nstructural check: GOVERNANCE_CHECKS_SATISFIED\nbacked by an evidence store and a roster: BLOCKED_MISSING_CONTROLS\ngenuine records, same backed check: GOVERNANCE_CHECKS_SATISFIED\nthe reviewer wrote the evidence: BLOCKED_MISSING_CONTROLS\nrecords pointing at evidence-999 and reviewer-07 passed the structural check, failed once the evidence and the reviewer had to exist, and a reviewer who wrote the evidence was refused; an evidence store and a roster in the same process are still only simulated and a real one is authenticated and kept elsewhere\n\n--- 4. Genuinely running: an approval is bound to one exact deployment ---\nas approved: (True, 'valid')\ndescription edited afterwards: (False, 'deployment changed after approval')\nanother deployment id: (False, 'approval is for another deployment')\nat the expiry time: (False, 'approval expired')\napprover is the requester: (False, 'requester approved their own deployment')\nevery change to the deployment, its identity, the clock or the approver invalidated the approval, which prevents a team from approving one thing and shipping another; the clock is a number the lab chooses and the names are strings\n\n--- 5. Genuinely running: no indicator is not a pass ---\n{'status': 'MANUAL_REVIEW_REQUIRED', 'flagged': [], 'required': [], 'missing': []}\na description with no indicator went to manual review even with an approval attached, because nothing matched does not mean nothing applies\n\n--- 6. Genuinely counting: every combination of three conditions ---\n{'GOVERNANCE_CHECKS_SATISFIED': 1, 'AWAITING_HUMAN_APPROVAL': 1, 'BLOCKED_MISSING_CONTROLS': 2, 'MANUAL_REVIEW_REQUIRED': 4}\nof the eight combinations of indicator, controls and approval only one reached GOVERNANCE_CHECKS_SATISFIED, four went to manual review, two were blocked for missing controls and one waited for approval; the counts follow from the status order the lab chose and are a design check and not a measurement\n\n--- 7. Genuinely running: the thirteen unit tests ---\nran 13 tests | failures 0 | errors 0 | passed True\nthe tests cover classification, the union of required controls, the structural check and its failures, a block despite approval, a wait for approval, satisfaction, manual review, a changed deployment, a wrong id, self-approval and expiry, on this lab's own gate"
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
    "headingEn": "Experiment 1: The lesson example with the audit control missing",
    "headingKn": "ಪ್ರಯೋಗ 1: The lesson example with the audit control missing",
    "bodyEn": "What it ran: The lesson example with the audit control missing. What the lab concluded: the description flagged AI races and organisational risks, the three required controls were the union of both lists with the shared external audit counted once, and the missing audit blocked the gate; the lesson's status was written by hand and this one comes from running the code",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The lesson example with the audit control missing. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the description flagged AI races and organisational risks, the three required controls were the union of both lists with the shared external audit counted once, and the missing audit blocked the gate; the lesson's status was written by hand and this one comes from running the code"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: the lesson example with the audit control missing ---\n{\n \"status\": \"BLOCKED_MISSING_CONTROLS\",\n \"flagged\": [\n  \"ai_races\",\n  \"organizational_risks\"\n ],\n \"required\": [\n  \"external_audit\",\n  \"human_approval\",\n  \"incident_response\"\n ],\n \"missing\": [\n  \"external_audit\"\n ]\n…"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: How the status moves",
    "headingKn": "ಪ್ರಯೋಗ 2: How the status moves",
    "bodyEn": "What it ran: How the status moves. What the lab concluded: the status moved from awaiting approval to satisfied only when every control record and the approval were present, and an approval did not make up for a missing control; GOVERNANCE_CHECKS_SATISFIED is deliberately not called safe",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: How the status moves. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the status moved from awaiting approval to satisfied only when every control record and the approval were present, and an approval did not make up for a missing control; GOVERNANCE_CHECKS_SATISFIED is deliberately not called safe"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: how the status moves ---\nall three controls, no approval: AWAITING_HUMAN_APPROVAL\nall three controls, approved:    GOVERNANCE_CHECKS_SATISFIED\none control missing, approved:   BLOCKED_MISSING_CONTROLS"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: A record that is well formed but made up",
    "headingKn": "ಪ್ರಯೋಗ 3: A record that is well formed but made up",
    "bodyEn": "What it ran: A record that is well formed but made up. What the lab concluded: records pointing at evidence-999 and reviewer-07 passed the structural check, failed once the evidence and the reviewer had to exist, and a reviewer who wrote the evidence was refused; an evidence store and a roster in the same process are still only simulated and a real one is authenticated and kept elsewhere",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A record that is well formed but made up. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): records pointing at evidence-999 and reviewer-07 passed the structural check, failed once the evidence and the reviewer had to exist, and a reviewer who wrote the evidence was refused; an evidence store and a roster in the same process are still only simulated and a real one is authenticated and kept elsewhere"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: a record that is well formed but made up ---\nstructural check: GOVERNANCE_CHECKS_SATISFIED\nbacked by an evidence store and a roster: BLOCKED_MISSING_CONTROLS\ngenuine records, same backed check: GOVERNANCE_CHECKS_SATISFIED\nthe reviewer wrote the evidence: BLOCKED_MISSING_CONTROLS"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: An approval is bound to one exact deployment",
    "headingKn": "ಪ್ರಯೋಗ 4: An approval is bound to one exact deployment",
    "bodyEn": "What it ran: An approval is bound to one exact deployment. What the lab concluded: every change to the deployment, its identity, the clock or the approver invalidated the approval, which prevents a team from approving one thing and shipping another; the clock is a number the lab chooses and the names are strings",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: An approval is bound to one exact deployment. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): every change to the deployment, its identity, the clock or the approver invalidated the approval, which prevents a team from approving one thing and shipping another; the clock is a number the lab chooses and the names are strings"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: an approval is bound to one exact deployment ---\nas approved: (True, 'valid')\ndescription edited afterwards: (False, 'deployment changed after approval')\nanother deployment id: (False, 'approval is for another deployment')\nat the expiry time: (False, 'approval expired')\napprover is the requester: (False, 'requester approved their own deployment')"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: No indicator is not a pass",
    "headingKn": "ಪ್ರಯೋಗ 5: No indicator is not a pass",
    "bodyEn": "What it ran: No indicator is not a pass. What the lab concluded: a description with no indicator went to manual review even with an approval attached, because nothing matched does not mean nothing applies",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: No indicator is not a pass. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): a description with no indicator went to manual review even with an approval attached, because nothing matched does not mean nothing applies"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely running: no indicator is not a pass ---\n{'status': 'MANUAL_REVIEW_REQUIRED', 'flagged': [], 'required': [], 'missing': []}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: Every combination of three conditions",
    "headingKn": "ಪ್ರಯೋಗ 6: Every combination of three conditions",
    "bodyEn": "What it ran: Every combination of three conditions. What the lab concluded: of the eight combinations of indicator, controls and approval only one reached GOVERNANCE_CHECKS_SATISFIED, four went to manual review, two were blocked for missing controls and one waited for approval; the counts follow from the status order the lab chose and are a design check and not a measurement",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Every combination of three conditions. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): of the eight combinations of indicator, controls and approval only one reached GOVERNANCE_CHECKS_SATISFIED, four went to manual review, two were blocked for missing controls and one waited for approval; the counts follow from the status order the lab chose and are a design check and not a measurement"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely counting: every combination of three conditions ---\n{'GOVERNANCE_CHECKS_SATISFIED': 1, 'AWAITING_HUMAN_APPROVAL': 1, 'BLOCKED_MISSING_CONTROLS': 2, 'MANUAL_REVIEW_REQUIRED': 4}"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: The thirteen unit tests",
    "headingKn": "ಪ್ರಯೋಗ 7: The thirteen unit tests",
    "bodyEn": "What it ran: The thirteen unit tests. What the lab concluded: the tests cover classification, the union of required controls, the structural check and its failures, a block despite approval, a wait for approval, satisfaction, manual review, a changed deployment, a wrong id, self-approval and expiry, on this lab's own gate",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The thirteen unit tests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the tests cover classification, the union of required controls, the structural check and its failures, a block despite approval, a wait for approval, satisfaction, manual review, a changed deployment, a wrong id, self-approval and expiry, on this lab's own gate"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: the thirteen unit tests ---\nran 13 tests | failures 0 | errors 0 | passed True"
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
    "headingEn": "Genuinely Found: Example, Status Moves and a Made-Up Record",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಉದಾಹರಣೆ, ಸ್ಥಿತಿ ಚಲನೆ ಮತ್ತು ಕಲ್ಪಿತ ದಾಖಲೆ",
    "bodyEn": "Section 1: the example flagged ai_races and organizational_risks, required external_audit, human_approval and incident_response, and was BLOCKED_MISSING_CONTROLS with external_audit missing. Section 2: all controls with no approval gave AWAITING_HUMAN_APPROVAL, with approval GOVERNANCE_CHECKS_SATISFIED, and one missing control with approval BLOCKED_MISSING_CONTROLS. Section 3: records naming evidence-999 and reviewer-07 passed the structural check, failed the check backed by an evidence store and roster, genuine records passed it again, and a reviewer who wrote the evidence was refused.",
    "bodyKn": "ವಿಭಾಗ 1: ಉದಾಹರಣೆ ai_races ಮತ್ತು organizational_risks ಗುರುತಿಸಿತು, external_audit, human_approval ಮತ್ತು incident_response ಬೇಕಾಯಿತು, ಮತ್ತು external_audit ಕಾಣೆಯಾದ್ದರಿಂದ BLOCKED_MISSING_CONTROLS ಆಯಿತು. ವಿಭಾಗ 2: ಅನುಮೋದನೆ ಇಲ್ಲದ ಎಲ್ಲಾ ನಿಯಂತ್ರಣಗಳು AWAITING_HUMAN_APPROVAL ನೀಡಿದವು, ಅನುಮೋದನೆ ಸಹಿತ GOVERNANCE_CHECKS_SATISFIED, ಮತ್ತು ಅನುಮೋದನೆ ಸಹಿತ ಒಂದು ಕಾಣೆಯಾದ ನಿಯಂತ್ರಣ BLOCKED_MISSING_CONTROLS. ವಿಭಾಗ 3: evidence-999 ಮತ್ತು reviewer-07 ಹೆಸರಿಸಿದ ದಾಖಲೆಗಳು ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿ ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ ಮತ್ತು ಪಟ್ಟಿ ಬೆಂಬಲಿತ ಪರಿಶೀಲನೆಯಲ್ಲಿ ವಿಫಲವಾದವು, ನಿಜ ದಾಖಲೆಗಳು ಮತ್ತೆ ಪಾಸ್ ಆದವು, ಮತ್ತು ಸಾಕ್ಷ್ಯ ಬರೆದ ವಿಮರ್ಶಕ ನಿರಾಕರಿಸಲ್ಪಟ್ಟನು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Binding, Counts and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಬಂಧ, ಎಣಿಕೆಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: the approval was valid as issued and was invalidated by an edited description, another deployment id, the expiry time and the requester approving their own deployment. Section 5: a description with no indicator gave MANUAL_REVIEW_REQUIRED even with an approval. Section 6: over the eight combinations the counts were 1 GOVERNANCE_CHECKS_SATISFIED, 1 AWAITING_HUMAN_APPROVAL, 2 BLOCKED_MISSING_CONTROLS and 4 MANUAL_REVIEW_REQUIRED. Section 7: the thirteen unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಅನುಮೋದನೆ ನೀಡಿದಂತೆ ಮಾನ್ಯವಾಗಿತ್ತು ಮತ್ತು ಸಂಪಾದಿಸಿದ ವಿವರಣೆ, ಇನ್ನೊಂದು ನಿಯೋಜನೆ id, ಮುಕ್ತಾಯ ಸಮಯ ಮತ್ತು ವಿನಂತಿದಾರ ತನ್ನದೇ ನಿಯೋಜನೆ ಅನುಮೋದಿಸಿದ್ದರಿಂದ ಅಮಾನ್ಯವಾಯಿತು. ವಿಭಾಗ 5: ಸೂಚಕ ಇಲ್ಲದ ವಿವರಣೆ ಅನುಮೋದನೆ ಇದ್ದರೂ MANUAL_REVIEW_REQUIRED ನೀಡಿತು. ವಿಭಾಗ 6: ಎಂಟು ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಣಿಕೆಗಳು 1 GOVERNANCE_CHECKS_SATISFIED, 1 AWAITING_HUMAN_APPROVAL, 2 BLOCKED_MISSING_CONTROLS ಮತ್ತು 4 MANUAL_REVIEW_REQUIRED. ವಿಭಾಗ 7: ಹದಿಮೂರು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A control record that only has the right fields proves nothing, so the stricter check asks for evidence that exists, a reviewer on a roster and someone other than the author, and the approval is tied to the exact deployment.",
    "bodyKn": "ಸರಿಯಾದ ಕ್ಷೇತ್ರಗಳಿರುವ ನಿಯಂತ್ರಣ ದಾಖಲೆ ಏನನ್ನೂ ಸಾಬೀತು ಮಾಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ಕಠಿಣ ಪರಿಶೀಲನೆ ಇರುವ ಸಾಕ್ಷ್ಯ, ಪಟ್ಟಿಯಲ್ಲಿರುವ ವಿಮರ್ಶಕ ಮತ್ತು ಲೇಖಕನಲ್ಲದ ಒಬ್ಬರನ್ನು ಕೇಳುತ್ತದೆ, ಮತ್ತು ಅನುಮೋದನೆ ನಿಖರ ನಿಯೋಜನೆಗೆ ಬಂಧಿತ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"GOVERNANCE_CHECKS_SATISFIED means the deployment is safe.\" It means four configured checks passed, and the evidence behind them was only simulated.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"GOVERNANCE_CHECKS_SATISFIED ಎಂದರೆ ನಿಯೋಜನೆ ಸುರಕ್ಷಿತ.\" ಅದು ನಾಲ್ಕು ಸಂರಚಿತ ಪರಿಶೀಲನೆಗಳು ಪಾಸ್ ಆದವು ಎಂದರ್ಥ, ಮತ್ತು ಅವುಗಳ ಹಿಂದಿನ ಸಾಕ್ಷ್ಯ ಅನುಕರಿತವಾಗಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Required control: a safeguard implied by a flagged category. Evidence store: where proof lives. Approval binding: approval tied to a deployment digest. Separation of duties: author and reviewer differ.",
    "bodyKn": "ಅಗತ್ಯ ನಿಯಂತ್ರಣ: ಫ್ಲ್ಯಾಗ್ ಮಾಡಿದ ವರ್ಗ ಸೂಚಿಸುವ ರಕ್ಷಣೆ. ಸಾಕ್ಷ್ಯ ಸಂಗ್ರಹ: ಪುರಾವೆ ಇರುವ ಸ್ಥಳ. ಅನುಮೋದನೆ ಬಂಧ: ನಿಯೋಜನೆ digest ಗೆ ಜೋಡಿಸಿದ ಅನುಮೋದನೆ. ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ: ಲೇಖಕ ಮತ್ತು ವಿಮರ್ಶಕ ಭಿನ್ನ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Shared controls were counted once. 2) A missing control blocked despite an approval. 3) A made-up but well formed record passed the structural check. 4) Any change to the deployment voided its approval. 5) Only 1 of 8 combinations reached satisfied.",
    "bodyKn": "1) ಹಂಚಿದ ನಿಯಂತ್ರಣಗಳನ್ನು ಒಮ್ಮೆ ಎಣಿಸಲಾಯಿತು. 2) ಅನುಮೋದನೆ ಇದ್ದರೂ ಕಾಣೆಯಾದ ನಿಯಂತ್ರಣ ತಡೆಯಿತು. 3) ಕಲ್ಪಿತ ಆದರೆ ಚೆನ್ನಾಗಿ ರೂಪಿತ ದಾಖಲೆ ರಚನಾತ್ಮಕ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿತು. 4) ನಿಯೋಜನೆಯ ಯಾವುದೇ ಬದಲಾವಣೆ ಅದರ ಅನುಮೋದನೆ ರದ್ದುಗೊಳಿಸಿತು. 5) 8 ಸಂಯೋಜನೆಗಳಲ್ಲಿ 1 ಮಾತ್ರ satisfied ತಲುಪಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Which control was missing in the first example?",
      "qKn": "ಮೊದಲ ಉದಾಹರಣೆಯಲ್ಲಿ ಯಾವ ನಿಯಂತ್ರಣ ಕಾಣೆಯಾಗಿತ್ತು?",
      "opts": [
       "external_audit",
       "human_approval",
       "incident_response",
       "kill_switch"
      ],
      "optsKn": [
       "external_audit",
       "human_approval",
       "incident_response",
       "kill_switch"
      ],
      "correct": 0
     },
     {
      "q": "How many of the eight combinations reached GOVERNANCE_CHECKS_SATISFIED?",
      "qKn": "ಎಂಟು ಸಂಯೋಜನೆಗಳಲ್ಲಿ ಎಷ್ಟು GOVERNANCE_CHECKS_SATISFIED ತಲುಪಿದವು?",
      "opts": [
       "1",
       "4",
       "2",
       "8"
      ],
      "optsKn": [
       "1",
       "4",
       "2",
       "8"
      ],
      "correct": 0
     },
     {
      "q": "What status did a description with no indicator get, even with an approval?",
      "qKn": "ಸೂಚಕ ಇಲ್ಲದ ವಿವರಣೆ ಅನುಮೋದನೆ ಇದ್ದರೂ ಯಾವ ಸ್ಥಿತಿ ಪಡೆಯಿತು?",
      "opts": [
       "MANUAL_REVIEW_REQUIRED",
       "GOVERNANCE_CHECKS_SATISFIED",
       "BLOCKED_MISSING_CONTROLS",
       "AWAITING_HUMAN_APPROVAL"
      ],
      "optsKn": [
       "MANUAL_REVIEW_REQUIRED (ಹಸ್ತಚಾಲಿತ ವಿಮರ್ಶೆ ಅಗತ್ಯ)",
       "GOVERNANCE_CHECKS_SATISFIED (ಆಡಳಿತ ಪರಿಶೀಲನೆ ತೃಪ್ತ)",
       "BLOCKED_MISSING_CONTROLS (ಕಾಣೆಯಾದ ನಿಯಂತ್ರಣ ತಡೆ)",
       "AWAITING_HUMAN_APPROVAL (ಮಾನವ ಅನುಮೋದನೆಗೆ ಕಾಯುತ್ತಿದೆ)"
      ],
      "correct": 0
     },
     {
      "q": "Why did the records naming evidence-999 fail the backed check?",
      "qKn": "evidence-999 ಹೆಸರಿಸಿದ ದಾಖಲೆಗಳು ಬೆಂಬಲಿತ ಪರಿಶೀಲನೆಯಲ್ಲಿ ಏಕೆ ವಿಫಲವಾದವು?",
      "opts": [
       "The evidence and the reviewer did not exist in the store and roster",
       "The status was wrong",
       "The approval expired",
       "The deployment changed"
      ],
      "optsKn": [
       "ಸಾಕ್ಷ್ಯ ಮತ್ತು ವಿಮರ್ಶಕ ಸಂಗ್ರಹ ಮತ್ತು ಪಟ್ಟಿಯಲ್ಲಿ ಇರಲಿಲ್ಲ",
       "ಸ್ಥಿತಿ ತಪ್ಪಾಗಿತ್ತು",
       "ಅನುಮೋದನೆ ಮುಕ್ತಾಯವಾಯಿತು",
       "ನಿಯೋಜನೆ ಬದಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What invalidated an approval besides an edited description?",
      "qKn": "ಸಂಪಾದಿಸಿದ ವಿವರಣೆಯ ಹೊರತು ಅನುಮೋದನೆಯನ್ನು ಯಾವುದು ಅಮಾನ್ಯಗೊಳಿಸಿತು?",
      "opts": [
       "Another id, the expiry time and self-approval",
       "Nothing",
       "A longer name",
       "A new reviewer"
      ],
      "optsKn": [
       "ಇನ್ನೊಂದು id, ಮುಕ್ತಾಯ ಸಮಯ ಮತ್ತು ಸ್ವಯಂ-ಅನುಮೋದನೆ",
       "ಏನೂ ಇಲ್ಲ",
       "ಉದ್ದದ ಹೆಸರು",
       "ಹೊಸ ವಿಮರ್ಶಕ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
