module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75bb955828a2469a99e70",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose Prototype, Pilot, or Production Deliberately (Part 3 of 3) — Promotion Evidence and Rollback",
 "titleKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 3 / 3) — ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು Rollback",
 "desc": "Authorize promotion on fresh, passing evidence, exercise a rollback and compare a system's behaviour with its claimed stage.",
 "descKn": "ತಾಜಾ, ಪಾಸ್ ಆದ ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಬಡ್ತಿ ಅಧಿಕೃತಗೊಳಿಸಿ, rollback ನಡೆಸಿ ಮತ್ತು ವ್ಯವಸ್ಥೆಯ ವರ್ತನೆಯನ್ನು ಅದರ ಹೇಳಿದ ಹಂತದೊಂದಿಗೆ ಹೋಲಿಸಿ.",
 "objectives": [
  "Separate selection from promotion.",
  "Require fresh evidence.",
  "Execute a rollback.",
  "Tune an alert window.",
  "Compare behaviour with the claimed stage."
 ],
 "objectivesKn": [
  "ಆಯ್ಕೆ ಮತ್ತು ಬಡ್ತಿ ಬೇರ್ಪಡಿಸಿ.",
  "ತಾಜಾ ಸಾಕ್ಷ್ಯ ಬಯಸಿ.",
  "rollback ನಡೆಸಿ.",
  "alert ಕಿಟಕಿ ಹೊಂದಿಸಿ.",
  "ವರ್ತನೆಯನ್ನು ಹೇಳಿದ ಹಂತದೊಂದಿಗೆ ಹೋಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose Prototype, Pilot, or Production Deliberately (Part 3 of 3)",
    "textKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: promotion authorization separate from stage selection, evidence that expires, a rollback executed on a toy deployment, an alert rule over invented rates and ownership as a promotion requirement. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing prototype, pilot or production deliberately (stage selection, stage controls, drift, promotion evidence and rollback), not the real software, and the systems, evidence and deployments are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says its Python is a teaching reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಹಂತ ಆಯ್ಕೆಗಿಂತ ಬೇರೆ ಬಡ್ತಿ ಅಧಿಕಾರ, ಅವಧಿ ಮುಗಿಯುವ ಸಾಕ್ಷ್ಯ, ಆಟಿಕೆ deployment ಮೇಲೆ ನಡೆಸಿದ rollback, ಕಲ್ಪಿತ ದರಗಳ ಮೇಲೆ alert ನಿಯಮ ಮತ್ತು ಬಡ್ತಿ ಅಗತ್ಯವಾಗಿ ಮಾಲೀಕತ್ವ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸುವುದು (ಹಂತ ಆಯ್ಕೆ, ಹಂತ ನಿಯಂತ್ರಣಗಳು, ಡ್ರಿಫ್ಟ್, ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು deployments ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಬೋಧನಾ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Selecting a Stage Does Not Authorize a Promotion",
    "textKn": "ಹಂತ ಆರಿಸುವುದು ಬಡ್ತಿಗೆ ಅಧಿಕಾರ ನೀಡುವುದಿಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evidence That Is Fresh, Passing and Owned",
    "headingKn": "ತಾಜಾ, ಪಾಸ್ ಆದ ಮತ್ತು ಮಾಲೀಕತ್ವದ ಸಾಕ್ಷ್ಯ",
    "bodyEn": "Stage selection says which stage can answer the open question; promotion asks whether the evidence for the next stage exists. This part checks five required items (an SLO, a tested alert, a tested rollback, a privacy review and an on-call owner) against a fixed date and a 30-day freshness window, executes a rollback on a toy deployment, runs an alert rule over invented error rates and compares a system that acts as production with its evidence. Dates, rates and the deployment model are made up.",
    "bodyKn": "ಹಂತ ಆಯ್ಕೆ ತೆರೆದ ಪ್ರಶ್ನೆಗೆ ಯಾವ ಹಂತ ಉತ್ತರಿಸಬಹುದು ಎಂದು ಹೇಳುತ್ತದೆ; ಬಡ್ತಿ ಮುಂದಿನ ಹಂತದ ಸಾಕ್ಷ್ಯ ಇದೆಯೇ ಎಂದು ಕೇಳುತ್ತದೆ. ಈ ಭಾಗ ಐದು ಅಗತ್ಯ ಐಟಂಗಳನ್ನು (SLO, ಪರೀಕ್ಷಿತ alert, ಪರೀಕ್ಷಿತ rollback, ಗೌಪ್ಯತೆ ವಿಮರ್ಶೆ ಮತ್ತು on-call ಮಾಲೀಕ) ನಿಗದಿತ ದಿನಾಂಕ ಮತ್ತು 30-ದಿನ ತಾಜಾತನ ಕಿಟಕಿಯ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಆಟಿಕೆ deployment ಮೇಲೆ rollback ನಡೆಸುತ್ತದೆ, ಕಲ್ಪಿತ ದೋಷ ದರಗಳ ಮೇಲೆ alert ನಿಯಮ ಓಡಿಸುತ್ತದೆ ಮತ್ತು production ನಂತೆ ವರ್ತಿಸುವ ವ್ಯವಸ್ಥೆಯನ್ನು ಅದರ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ. ದಿನಾಂಕಗಳು, ದರಗಳು ಮತ್ತು deployment ಮಾದರಿ ಕಲ್ಪಿತ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Promotion Evidence",
    "headingKn": "ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">promotion needs fresh, passing evidence</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">evidence</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">five items</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">freshness</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">30 days</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">rollback</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">actually run</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">promote</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">or do not</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">promotion needs fresh, passing evidence</text></svg>",
    "captionEn": "Promotion needs five fresh, passing items including an owner.",
    "captionKn": "ಬಡ್ತಿಗೆ ಮಾಲೀಕ ಸೇರಿ ಐದು ತಾಜಾ, ಪಾಸ್ ಆದ ಐಟಂಗಳು ಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Required promotion evidence (lab list)",
    "headingKn": "ಅಗತ್ಯ ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ (ಲ್ಯಾಬ್ ಪಟ್ಟಿ)",
    "headers": [
     "Item",
     "Counts only if"
    ],
    "rows": [
     [
      "slo_defined",
      "present, passing, within 30 days"
     ],
     [
      "monitoring_alert_tested",
      "present, passing, within 30 days"
     ],
     [
      "rollback_tested",
      "present, passing, within 30 days"
     ],
     [
      "privacy_review",
      "present, passing, within 30 days"
     ],
     [
      "on_call_owner",
      "present, passing, within 30 days"
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
    "filename": "ps_3.py",
    "headingEn": "Promotion check, toy deployment and alert rule",
    "headingKn": "ಬಡ್ತಿ ಪರಿಶೀಲನೆ, ಆಟಿಕೆ deployment ಮತ್ತು alert ನಿಯಮ",
    "descEn": "promotion reports every item that is missing, stale or failed, Deployment keeps a version history and refuses a rollback below v1, and alert fires only after a number of consecutive windows above a threshold.",
    "descKn": "promotion ಕಾಣೆಯಾದ, ಹಳೆಯ ಅಥವಾ ವಿಫಲ ಪ್ರತಿ ಐಟಂ ವರದಿ ಮಾಡುತ್ತದೆ, Deployment ಆವೃತ್ತಿ ಇತಿಹಾಸ ಇಟ್ಟು v1 ಕೆಳಗೆ rollback ನಿರಾಕರಿಸುತ್ತದೆ, ಮತ್ತು alert ಮಿತಿ ಮೇಲಿನ ಸತತ ಕಿಟಕಿಗಳ ಸಂಖ್ಯೆಯ ನಂತರ ಮಾತ್ರ ಹೊತ್ತಿಕೊಳ್ಳುತ್ತದೆ.",
    "code": "def promotion(evidence, today=TODAY):\n    problems = []\n    for k in REQUIRED:\n        e = evidence.get(k)\n        if not e:\n            problems.append(f\"{k}: missing\")\n        elif (today - e[\"date\"]).days > MAX_AGE_DAYS:\n            problems.append(f\"{k}: stale ({(today - e['date']).days} days old)\")\n        elif not e[\"ok\"]:\n            problems.append(f\"{k}: failed\")\n    return (\"promote\" if not problems else \"do not promote\"), problems\n\n\nclass Deployment:\n    def __init__(self):\n        self.version, self.history = \"v1\", [\"v1\"]\n\n    def deploy(self, v):\n        self.version = v\n        self.history.append(v)\n\n    def rollback(self):\n        if len(self.history) < 2:\n            return False\n        self.history.pop()\n        self.version = self.history[-1]\n        return True\n\n\ndef alert(rates, threshold, windows):\n    run = 0\n    for i, r in enumerate(rates):\n        run = run + 1 if r > threshold else 0\n        if run >= windows:\n            return i\n    return None"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ps_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() checks promotion with all, partial and mixed evidence, rolls a toy deployment back three times, runs the alert rule at four window counts and compares a system with prod_write to its evidence.",
    "descKn": "main() ಎಲ್ಲಾ, ಭಾಗಶಃ ಮತ್ತು ಮಿಶ್ರ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಬಡ್ತಿ ಪರಿಶೀಲಿಸಿ, ಆಟಿಕೆ deployment ಅನ್ನು ಮೂರು ಬಾರಿ rollback ಮಾಡಿ, ನಾಲ್ಕು ಕಿಟಕಿ ಎಣಿಕೆಗಳಲ್ಲಿ alert ನಿಯಮ ಓಡಿಸಿ ಮತ್ತು prod_write ಇರುವ ವ್ಯವಸ್ಥೆಯನ್ನು ಅದರ ಸಾಕ್ಷ್ಯದೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\n    ev = lambda d, ok=True: {\"date\": TODAY - timedelta(days=d), \"ok\": ok}\n    section(\"1. Genuinely running: selection and promotion are different questions\")\n    print(\"selection answers which stage can produce the evidence; promotion answers whether the evidence for the next stage exists\")\n    full = {k: ev(5) for k in REQUIRED}\n    print(\"all five present and recent :\", promotion(full))\n    partial = {k: ev(5) for k in REQUIRED if k != \"on_call_owner\"}\n    print(\"everything but an owner     :\", promotion(partial))\n    print(\"a system can pass every technical check and still not be promotable because nobody is on call for it; the five required items are the lab's own list\")\n\n    section(\"2. Genuinely running: evidence expires (fixed today = 2026-11-14, window 30 days)\")\n    mixed = dict(full, rollback_tested=ev(45), privacy_review=ev(5, ok=False))\n    print(promotion(mixed))\n    print(\"a rollback test run 45 days ago was refused as stale and a failed privacy review was refused as failed, and the other three items still counted; the 30-day window is invented, and what counts as stale depends on how fast the system changes\")\n\n    section(\"3. Genuinely running: a rollback is exercised on a toy deployment\")\n    d = Deployment()\n    print(\"fresh deployment, rollback possible:\", d.rollback(), \"| version\", d.version)\n    d.deploy(\"v2\")\n    d.deploy(\"v3\")\n    hist = list(d.history)\n    print(\"after v2 and v3:\", hist, \"| rollback:\", d.rollback(), \"| now\", d.version, \"| rollback again:\", d.rollback(), \"| now\", d.version, \"| and again:\", d.rollback(), \"| now\", d.version)\n    print(\"the first two rollbacks worked, going from v3 to v2 and then to v1, and the third was refused at v1 because there is nothing earlier to return to; a rollback test records facts like that, which a written rollback plan never exercises, and this model has no database migration, which is where real rollbacks usually break\")\n\n    section(\"4. Genuinely running: an alert rule over invented error rates\")\n    rates = [0.01, 0.02, 0.09, 0.02, 0.11, 0.12, 0.13, 0.02]\n    print(\"rates:\", rates)\n    print(\"alert after 3 consecutive windows above 0.05 at index:\", alert(rates, 0.05, 3))\n    print(\"alert after 2 consecutive windows:\", alert(rates, 0.05, 2), \"| after 1:\", alert(rates, 0.05, 1), \"| after 4:\", alert(rates, 0.05, 4))\n    print(\"one window above the threshold fired at index 2 (a spike), two consecutive fired at 5 and three at 6, while four never fired in this series; the rule shows the trade between noise and delay, and the rates here are invented, not measured\")\n\n    section(\"5. Genuinely running: stage drift versus promotion\")\n    sys_ = {\"claimed\": \"pilot\", \"permissions\": [\"prod_write\"], \"evidence\": partial}\n    print(\"claimed stage:\", sys_[\"claimed\"], \"| has prod_write:\", \"prod_write\" in sys_[\"permissions\"], \"| promotion decision:\", promotion(sys_[\"evidence\"])[0])\n    print(\"the system acts as production with a production permission while its evidence says it cannot be promoted, and that mismatch is the finding: either remove the permission or finish the evidence; the lab reports it and takes no action\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: selection and promotion are different questions ---\nselection answers which stage can produce the evidence; promotion answers whether the evidence for the next stage exists\nall five present and recent : ('promote', [])\neverything but an owner     : ('do not promote', ['on_call_owner: missing'])\na system can pass every technical check and still not be promotable because nobody is on call for it; the five required items are the lab's own list\n\n--- 2. Genuinely running: evidence expires (fixed today = 2026-11-14, window 30 days) ---\n('do not promote', ['rollback_tested: stale (45 days old)', 'privacy_review: failed'])\na rollback test run 45 days ago was refused as stale and a failed privacy review was refused as failed, and the other three items still counted; the 30-day window is invented, and what counts as stale depends on how fast the system changes\n\n--- 3. Genuinely running: a rollback is exercised on a toy deployment ---\nfresh deployment, rollback possible: False | version v1\nafter v2 and v3: ['v1', 'v2', 'v3'] | rollback: True | now v2 | rollback again: True | now v1 | and again: False | now v1\nthe first two rollbacks worked, going from v3 to v2 and then to v1, and the third was refused at v1 because there is nothing earlier to return to; a rollback test records facts like that, which a written rollback plan never exercises, and this model has no database migration, which is where real rollbacks usually break\n\n--- 4. Genuinely running: an alert rule over invented error rates ---\nrates: [0.01, 0.02, 0.09, 0.02, 0.11, 0.12, 0.13, 0.02]\nalert after 3 consecutive windows above 0.05 at index: 6\nalert after 2 consecutive windows: 5 | after 1: 2 | after 4: None\none window above the threshold fired at index 2 (a spike), two consecutive fired at 5 and three at 6, while four never fired in this series; the rule shows the trade between noise and delay, and the rates here are invented, not measured\n\n--- 5. Genuinely running: stage drift versus promotion ---\nclaimed stage: pilot | has prod_write: True | promotion decision: do not promote\nthe system acts as production with a production permission while its evidence says it cannot be promoted, and that mismatch is the finding: either remove the permission or finish the evidence; the lab reports it and takes no action"
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
    "headingEn": "Genuinely Found: Fresh Evidence Promoted and a Missing Owner Did Not",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ತಾಜಾ ಸಾಕ್ಷ್ಯ ಬಡ್ತಿ ಪಡೆಯಿತು ಮತ್ತು ಕಾಣೆಯಾದ ಮಾಲೀಕ ಪಡೆಯಲಿಲ್ಲ",
    "bodyEn": "Section 1: all five items present and five days old gave promote, and the same set without on_call_owner gave \"do not promote\" with \"on_call_owner: missing\". Section 2: with a rollback test 45 days old and a failed privacy review the result listed \"rollback_tested: stale (45 days old)\" and \"privacy_review: failed\" and the other three still counted.",
    "bodyKn": "ವಿಭಾಗ 1: ಐದು ದಿನದ ಹಳೆಯ ಎಲ್ಲಾ ಐದು ಐಟಂಗಳು promote ನೀಡಿತು, ಮತ್ತು on_call_owner ಇಲ್ಲದ ಅದೇ ಸೆಟ್ \"on_call_owner: missing\" ಜೊತೆ \"do not promote\" ನೀಡಿತು. ವಿಭಾಗ 2: 45 ದಿನದ ಹಳೆಯ rollback ಪರೀಕ್ಷೆ ಮತ್ತು ವಿಫಲ ಗೌಪ್ಯತೆ ವಿಮರ್ಶೆಯೊಂದಿಗೆ ಫಲಿತಾಂಶ \"rollback_tested: stale (45 days old)\" ಮತ್ತು \"privacy_review: failed\" ಪಟ್ಟಿ ಮಾಡಿತು ಮತ್ತು ಉಳಿದ ಮೂರು ಇನ್ನೂ ಪರಿಗಣಿತವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Rollback, Alert Windows and Acting Like Production",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Rollback, Alert ಕಿಟಕಿಗಳು ಮತ್ತು Production ನಂತೆ ವರ್ತನೆ",
    "bodyEn": "Section 3: a fresh deployment could not roll back, and after v2 and v3 the history [v1, v2, v3] rolled back to v2 and then to v1, and a third rollback returned False. Section 4 (invented rates): one window above 0.05 alerted at index 2, two consecutive at 5, three at 6 and four never alerted. Section 5: a system claiming pilot with prod_write and incomplete evidence got \"do not promote\".",
    "bodyKn": "ವಿಭಾಗ 3: ಹೊಸ deployment rollback ಮಾಡಲಾಗಲಿಲ್ಲ, ಮತ್ತು v2 ಹಾಗೂ v3 ನಂತರ ಇತಿಹಾಸ [v1, v2, v3] v2 ಗೆ ಮತ್ತು ನಂತರ v1 ಗೆ rollback ಆಯಿತು, ಮೂರನೇ rollback False ಮರಳಿಸಿತು. ವಿಭಾಗ 4 (ಕಲ್ಪಿತ ದರಗಳು): 0.05 ಮೇಲಿನ ಒಂದು ಕಿಟಕಿ index 2 ರಲ್ಲಿ, ಎರಡು ಸತತ 5 ರಲ್ಲಿ, ಮೂರು 6 ರಲ್ಲಿ alert ಮಾಡಿತು ಮತ್ತು ನಾಲ್ಕು ಎಂದೂ ಮಾಡಲಿಲ್ಲ. ವಿಭಾಗ 5: prod_write ಮತ್ತು ಅಪೂರ್ಣ ಸಾಕ್ಷ್ಯದ ಪೈಲಟ್ ಎಂದು ಹೇಳುವ ವ್ಯವಸ್ಥೆ \"do not promote\" ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A system that passes every technical check but has no on-call owner, stale evidence or an untested rollback is not ready, and the checks have to say so.",
    "bodyKn": "ಪ್ರತಿ ತಾಂತ್ರಿಕ ಪರಿಶೀಲನೆ ಪಾಸ್ ಮಾಡಿ ಆದರೆ on-call ಮಾಲೀಕ, ಹಳೆಯ ಸಾಕ್ಷ್ಯ ಅಥವಾ ಪರೀಕ್ಷಿಸದ rollback ಇರುವ ವ್ಯವಸ್ಥೆ ಸಿದ್ಧವಲ್ಲ, ಮತ್ತು ಪರಿಶೀಲನೆಗಳು ಹಾಗೆ ಹೇಳಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"we tested rollback once, so it is covered.\" A 45-day-old test was refused as stale.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"rollback ಒಮ್ಮೆ ಪರೀಕ್ಷಿಸಿದೆವು, ಆದ್ದರಿಂದ ಒಳಗೊಂಡಿದೆ.\" 45-ದಿನದ ಹಳೆಯ ಪರೀಕ್ಷೆ ಹಳೆಯದು ಎಂದು ನಿರಾಕರಿಸಲಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Promotion: moving to the next stage on evidence. Stale evidence: older than the freshness window. SLO: a stated reliability target. On-call owner: who responds when it fails.",
    "bodyKn": "Promotion: ಸಾಕ್ಷ್ಯದ ಮೇಲೆ ಮುಂದಿನ ಹಂತಕ್ಕೆ ಹೋಗುವುದು. Stale evidence: ತಾಜಾತನ ಕಿಟಕಿಗಿಂತ ಹಳೆಯದು. SLO: ಹೇಳಿದ ವಿಶ್ವಾಸಾರ್ಹತೆ ಗುರಿ. On-call owner: ವಿಫಲವಾದಾಗ ಪ್ರತಿಕ್ರಿಯಿಸುವವರು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Selection and promotion are separate. 2) Evidence must be fresh and passing. 3) Rollback was run and the third attempt failed. 4) Alert windows trade noise for delay. 5) A system acting as production without evidence was flagged.",
    "bodyKn": "1) ಆಯ್ಕೆ ಮತ್ತು ಬಡ್ತಿ ಬೇರೆ. 2) ಸಾಕ್ಷ್ಯ ತಾಜಾ ಮತ್ತು ಪಾಸ್ ಆಗಿರಬೇಕು. 3) rollback ಓಡಿಸಲಾಯಿತು ಮತ್ತು ಮೂರನೇ ಪ್ರಯತ್ನ ವಿಫಲ. 4) Alert ಕಿಟಕಿಗಳು ಶಬ್ದ ಮತ್ತು ವಿಳಂಬ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ. 5) ಸಾಕ್ಷ್ಯವಿಲ್ಲದೆ production ನಂತೆ ವರ್ತಿಸುವ ವ್ಯವಸ್ಥೆ ಗುರುತಾಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What blocked promotion when the owner was missing?",
      "qKn": "ಮಾಲೀಕ ಕಾಣೆಯಾದಾಗ ಬಡ್ತಿ ಏನು ತಡೆಯಿತು?",
      "opts": [
       "on_call_owner: missing",
       "A stale rollback test",
       "A failed privacy review",
       "A low alert rate"
      ],
      "optsKn": [
       "on_call_owner: missing",
       "ಹಳೆಯ rollback ಪರೀಕ್ಷೆ",
       "ವಿಫಲ ಗೌಪ್ಯತೆ ವಿಮರ್ಶೆ",
       "ಕಡಿಮೆ alert ದರ"
      ],
      "correct": 0
     },
     {
      "q": "Why was the 45-day-old rollback test refused?",
      "qKn": "45-ದಿನದ ಹಳೆಯ rollback ಪರೀಕ್ಷೆ ಏಕೆ ನಿರಾಕರಿಸಲಾಯಿತು?",
      "opts": [
       "It was older than the 30-day window",
       "It failed",
       "It was unsigned",
       "It was too long"
      ],
      "optsKn": [
       "ಅದು 30-ದಿನ ಕಿಟಕಿಗಿಂತ ಹಳೆಯದು",
       "ಅದು ವಿಫಲ",
       "ಅದಕ್ಕೆ ಸಹಿ ಇರಲಿಲ್ಲ",
       "ಅದು ತುಂಬಾ ಉದ್ದ"
      ],
      "correct": 0
     },
     {
      "q": "What did the third rollback return?",
      "qKn": "ಮೂರನೇ rollback ಏನು ಮರಳಿಸಿತು?",
      "opts": [
       "False",
       "True",
       "v0",
       "An error"
      ],
      "optsKn": [
       "False",
       "True",
       "v0",
       "ದೋಷ"
      ],
      "correct": 0
     },
     {
      "q": "At which index did a three-window alert fire?",
      "qKn": "ಮೂರು-ಕಿಟಕಿ alert ಯಾವ index ನಲ್ಲಿ ಹೊತ್ತಿಕೊಂಡಿತು?",
      "opts": [
       "6",
       "2",
       "5",
       "Never"
      ],
      "optsKn": [
       "6",
       "2",
       "5",
       "ಎಂದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What does the toy deployment not model?",
      "qKn": "ಆಟಿಕೆ deployment ಯಾವುದನ್ನು ಮಾದರಿ ಮಾಡುವುದಿಲ್ಲ?",
      "opts": [
       "Database migrations",
       "Versions",
       "Rollback",
       "History"
      ],
      "optsKn": [
       "ಡೇಟಾಬೇಸ್ migrations",
       "ಆವೃತ್ತಿಗಳು",
       "Rollback",
       "ಇತಿಹಾಸ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
