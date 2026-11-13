module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6af75bb955828a2469a99e70",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Choose Prototype, Pilot, or Production Deliberately (Part 2 of 3) — Stage Controls and Drift",
 "titleKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 2 / 3) — ಹಂತ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಡ್ರಿಫ್ಟ್",
 "desc": "Give each stage limits and exit criteria, detect drift against the claimed stage and check pilot readiness.",
 "descKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ ಮಿತಿ ಮತ್ತು ನಿರ್ಗಮನ ಮಾನದಂಡ ನೀಡಿ, ಹೇಳಿದ ಹಂತದ ವಿರುದ್ಧ ಡ್ರಿಫ್ಟ್ ಪತ್ತೆ ಮಾಡಿ ಮತ್ತು ಪೈಲಟ್ ಸಿದ್ಧತೆ ಪರಿಶೀಲಿಸಿ.",
 "objectives": [
  "Set limits per stage.",
  "Write exit criteria first.",
  "Detect stage drift.",
  "Bound a pilot audience.",
  "Check pilot readiness."
 ],
 "objectivesKn": [
  "ಪ್ರತಿ ಹಂತಕ್ಕೆ ಮಿತಿ ಹೊಂದಿಸಿ.",
  "ಮೊದಲು ನಿರ್ಗಮನ ಮಾನದಂಡ ಬರೆಯಿರಿ.",
  "ಹಂತ ಡ್ರಿಫ್ಟ್ ಪತ್ತೆ ಮಾಡಿ.",
  "ಪೈಲಟ್ ಪ್ರೇಕ್ಷಕ ಮಿತಿಗೊಳಿಸಿ.",
  "ಪೈಲಟ್ ಸಿದ್ಧತೆ ಪರಿಶೀಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Choose Prototype, Pilot, or Production Deliberately (Part 2 of 3)",
    "textKn": "ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸಿ (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: stage-specific controls and exit criteria, stage-drift detection as data, audience and permissions grow, the pilot modification that adds a tested rollback and a decision artifact. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind choosing prototype, pilot or production deliberately (stage selection, stage controls, drift, promotion evidence and rollback), not the real software, and the systems, evidence and deployments are made up by the lab and no language model is involved, so no real LLM behaviour is measured. The original code/main.py was not supplied, and the lesson text says its Python is a teaching reference implementation, so the labs are our own implementation of the behaviour described. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ಹಂತ-ನಿರ್ದಿಷ್ಟ ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ನಿರ್ಗಮನ ಮಾನದಂಡ, ದತ್ತಾಂಶ, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಅನುಮತಿಗಳು ಬೆಳೆದಂತೆ ಹಂತ-ಡ್ರಿಫ್ಟ್ ಪತ್ತೆ, ಪರೀಕ್ಷಿತ rollback ಸೇರಿಸುವ ಪೈಲಟ್ ಮಾರ್ಪಾಡು ಮತ್ತು ನಿರ್ಧಾರ ಕಲಾಕೃತಿ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ಮೂಲಮಾದರಿ, ಪೈಲಟ್ ಅಥವಾ ಉತ್ಪಾದನೆಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸುವುದು (ಹಂತ ಆಯ್ಕೆ, ಹಂತ ನಿಯಂತ್ರಣಗಳು, ಡ್ರಿಫ್ಟ್, ಬಡ್ತಿ ಸಾಕ್ಷ್ಯ ಮತ್ತು rollback) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ವ್ಯವಸ್ಥೆಗಳು, ಸಾಕ್ಷ್ಯ ಮತ್ತು deployments ಅನ್ನು ಲ್ಯಾಬ್ ಕಲ್ಪಿಸಿದ್ದು ಮತ್ತು ಭಾಷಾ ಮಾದರಿ ಇಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ, ಮತ್ತು lesson ಪಠ್ಯ ತನ್ನ Python ಬೋಧನಾ ಉಲ್ಲೇಖ ಅನುಷ್ಠಾನ ಎಂದು ಹೇಳುತ್ತದೆ, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ವಿವರಿಸಿದ ವರ್ತನೆಯ ನಮ್ಮದೇ ಅನುಷ್ಠಾನ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Stage Label Can Quietly Stop Being True",
    "textKn": "ಹಂತ ಲೇಬಲ್ ಮೌನವಾಗಿ ಸತ್ಯವಲ್ಲದಾಗಬಹುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Each Stage Has Limits and Exit Criteria",
    "headingKn": "ಪ್ರತಿ ಹಂತಕ್ಕೆ ಮಿತಿಗಳು ಮತ್ತು ನಿರ್ಗಮನ ಮಾನದಂಡ ಇವೆ",
    "bodyEn": "This part gives each stage an allowed data set, an audience bound and forbidden permissions, and exit criteria fixed before the stage starts. It then follows a made-up system that began as a prototype and was never promoted yet reached production data, forty users and production writes, and shows how a pilot outgrows its 25-person bound. A pilot-readiness check requires an owner, a rollback owner and a tested rollback.",
    "bodyKn": "ಈ ಭಾಗ ಪ್ರತಿ ಹಂತಕ್ಕೆ ಅನುಮತಿಸಿದ ದತ್ತಾಂಶ ಸೆಟ್, ಪ್ರೇಕ್ಷಕ ಮಿತಿ ಮತ್ತು ನಿಷೇಧಿತ ಅನುಮತಿಗಳು, ಹಾಗೂ ಹಂತ ಆರಂಭಕ್ಕೆ ಮುನ್ನ ನಿಗದಿಯಾದ ನಿರ್ಗಮನ ಮಾನದಂಡ ನೀಡುತ್ತದೆ. ನಂತರ ಮೂಲಮಾದರಿಯಾಗಿ ಆರಂಭವಾಗಿ ಎಂದೂ ಬಡ್ತಿ ಪಡೆಯದಿದ್ದರೂ production ದತ್ತಾಂಶ, ನಲವತ್ತು ಬಳಕೆದಾರರು ಮತ್ತು production ಬರಹ ತಲುಪಿದ ಕಲ್ಪಿತ ವ್ಯವಸ್ಥೆಯನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಮತ್ತು ಪೈಲಟ್ ತನ್ನ 25-ವ್ಯಕ್ತಿ ಮಿತಿ ಮೀರುವುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಪೈಲಟ್-ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ಮಾಲೀಕ, rollback ಮಾಲೀಕ ಮತ್ತು ಪರೀಕ್ಷಿತ rollback ಬಯಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Controls and Drift",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು ಮತ್ತು ಡ್ರಿಫ್ಟ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">the stage label must match what the system has</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">controls</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">per stage</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">drift</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">claimed vs actual</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">audience</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">bounded</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">exit criteria</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">written first</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the stage label must match what the system has</text></svg>",
    "captionEn": "The claimed stage is checked against the real data, audience and permissions.",
    "captionKn": "ಹೇಳಿದ ಹಂತವನ್ನು ನಿಜ ದತ್ತಾಂಶ, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಅನುಮತಿಗಳ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Stage controls used in the lab (limits invented)",
    "headingKn": "ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಬಳಸಿದ ಹಂತ ನಿಯಂತ್ರಣಗಳು (ಮಿತಿಗಳು ಕಲ್ಪಿತ)",
    "headers": [
     "Stage",
     "Data",
     "Audience",
     "Forbidden"
    ],
    "rows": [
     [
      "prototype",
      "synthetic",
      "0",
      "prod_read, prod_write, send_email"
     ],
     [
      "pilot",
      "synthetic, real_sample",
      "25",
      "prod_write"
     ],
     [
      "production",
      "any",
      "unbounded",
      "none"
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
    "filename": "ps_2.py",
    "headingEn": "Controls, drift and pilot readiness",
    "headingKn": "ನಿಯಂತ್ರಣಗಳು, ಡ್ರಿಫ್ಟ್ ಮತ್ತು ಪೈಲಟ್ ಸಿದ್ಧತೆ",
    "descEn": "CONTROLS holds each stage's limits, EXIT its exit criteria, drift compares the claimed stage with the system's data, audience and permissions, and pilot_ready lists the missing owner, rollback owner or rollback test.",
    "descKn": "CONTROLS ಪ್ರತಿ ಹಂತದ ಮಿತಿಗಳನ್ನು, EXIT ಅದರ ನಿರ್ಗಮನ ಮಾನದಂಡವನ್ನು ಹೊಂದಿದೆ, drift ಹೇಳಿದ ಹಂತವನ್ನು ವ್ಯವಸ್ಥೆಯ ದತ್ತಾಂಶ, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಅನುಮತಿಗಳೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಮತ್ತು pilot_ready ಕಾಣೆಯಾದ ಮಾಲೀಕ, rollback ಮಾಲೀಕ ಅಥವಾ rollback ಪರೀಕ್ಷೆ ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.",
    "code": "CONTROLS = {\n    \"prototype\": {\"data\": {\"synthetic\"}, \"max_audience\": 0, \"forbidden_permissions\": {\"prod_read\", \"prod_write\", \"send_email\"}},\n    \"pilot\": {\"data\": {\"synthetic\", \"real_sample\"}, \"max_audience\": 25, \"forbidden_permissions\": {\"prod_write\"}},\n    \"production\": {\"data\": {\"synthetic\", \"real_sample\", \"production\"}, \"max_audience\": None, \"forbidden_permissions\": set()},\n}\nEXIT = {\"prototype\": [\"mechanism works on the synthetic set\", \"known failure modes listed\"], \"pilot\": [\"outcome metrics met on the pilot cohort\", \"no guardrail breach\", \"rollback exercised once\"], \"production\": [\"SLOs defined and monitored\", \"on-call owner named\"]}\n\n\ndef drift(system):\n    c = CONTROLS[system[\"stage\"]]\n    found = []\n    if system[\"data\"] not in c[\"data\"]:\n        found.append(f\"data '{system['data']}' is not allowed in {system['stage']}\")\n    if c[\"max_audience\"] is not None and system[\"audience\"] > c[\"max_audience\"]:\n        found.append(f\"audience {system['audience']} exceeds {c['max_audience']}\")\n    bad = sorted(set(system[\"permissions\"]) & c[\"forbidden_permissions\"])\n    if bad:\n        found.append(\"forbidden permissions: \" + \", \".join(bad))\n    return found\n\n\ndef pilot_ready(system):\n    miss = [k for k in (\"owner\", \"rollback_owner\", \"rollback_tested\") if not system.get(k)]\n    return not miss, miss"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "ps_2.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() prints each stage's limits, follows a three-week drift, tests a pilot audience bound, checks pilot readiness three ways and prints a decision artifact.",
    "descKn": "main() ಪ್ರತಿ ಹಂತದ ಮಿತಿ ಮುದ್ರಿಸಿ, ಮೂರು-ವಾರ ಡ್ರಿಫ್ಟ್ ಅನುಸರಿಸಿ, ಪೈಲಟ್ ಪ್ರೇಕ್ಷಕ ಮಿತಿ ಪರೀಕ್ಷಿಸಿ, ಮೂರು ರೀತಿ ಪೈಲಟ್ ಸಿದ್ಧತೆ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿರ್ಧಾರ ಕಲಾಕೃತಿ ಮುದ್ರಿಸುತ್ತದೆ.",
    "code": "def main():\n    section(\"1. Genuinely running: what each stage allows and what must be true to leave it\")\n    for st in CONTROLS:\n        c = CONTROLS[st]\n        print(f\"{st:11} data={sorted(c['data'])} audience<= {c['max_audience']} forbidden={sorted(c['forbidden_permissions'])}\")\n        print(f\"            exit: {EXIT[st]}\")\n    print(\"each stage has an allowed data set, an audience bound and forbidden permissions, and each has exit criteria written before the stage starts; the audience of 25 and the permission lists are invented\")\n\n    section(\"2. Genuinely running: drift in a system that started as a prototype\")\n    timeline = [(\"week 1\", dict(stage=\"prototype\", data=\"synthetic\", audience=0, permissions=[\"read_docs\"])),\n                (\"week 3\", dict(stage=\"prototype\", data=\"real_sample\", audience=3, permissions=[\"read_docs\", \"prod_read\"])),\n                (\"week 6\", dict(stage=\"prototype\", data=\"production\", audience=40, permissions=[\"read_docs\", \"prod_read\", \"prod_write\"]))]\n    for wk, s in timeline:\n        print(f\"{wk}: {drift(s) or 'no drift'}\")\n    print(\"nothing was ever promoted and the system still moved from synthetic data to production writes, one reasonable-looking step at a time; the check compares the claimed stage with what the system really has, so the prototype label stopped being true at week 3\")\n\n    section(\"3. Genuinely running: a pilot that outgrows its audience\")\n    for aud in (10, 25, 26, 300):\n        print(f\"audience {aud:3}: {drift(dict(stage='pilot', data='real_sample', audience=aud, permissions=['read_docs'])) or 'within bounds'}\")\n    print(\"the bound is inclusive at 25 and 26 is drift; a pilot that quietly reaches 300 people is a production launch without the production controls\")\n\n    section(\"4. Genuinely running: the pilot modification, a rollback owner who has tested rollback\")\n    for label, s in ((\"owner only\", dict(owner=\"ana\")), (\"owner and rollback owner\", dict(owner=\"ana\", rollback_owner=\"ben\")), (\"all three\", dict(owner=\"ana\", rollback_owner=\"ben\", rollback_tested=True))):\n        print(f\"{label:26} {pilot_ready(s)}\")\n    print(\"a named rollback owner is not the same as a tested rollback, and the readiness check asks for both; whether the rollback was tested is a flag here and a team would attach the evidence\")\n\n    section(\"5. Genuinely running: the decision artifact\")\n    system = dict(stage=\"pilot\", data=\"real_sample\", audience=30, permissions=[\"read_docs\"], owner=\"ana\", rollback_owner=\"ben\", rollback_tested=True)\n    art = {\"stage\": system[\"stage\"], \"drift\": drift(system), \"pilot_ready\": pilot_ready(system)[0], \"exit_criteria\": EXIT[\"pilot\"]}\n    print(json.dumps(art, sort_keys=True))\n    print(\"the artifact lists the drift found, the readiness result and the exit criteria still to meet; a pilot that has outgrown its audience shows up here even though the owner and rollback are fine, and the lab prints it instead of writing outputs/stage-decisions.json\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: what each stage allows and what must be true to leave it ---\nprototype   data=['synthetic'] audience<= 0 forbidden=['prod_read', 'prod_write', 'send_email']\n            exit: ['mechanism works on the synthetic set', 'known failure modes listed']\npilot       data=['real_sample', 'synthetic'] audience<= 25 forbidden=['prod_write']\n            exit: ['outcome metrics met on the pilot cohort', 'no guardrail breach', 'rollback exercised once']\nproduction  data=['production', 'real_sample', 'synthetic'] audience<= None forbidden=[]\n            exit: ['SLOs defined and monitored', 'on-call owner named']\neach stage has an allowed data set, an audience bound and forbidden permissions, and each has exit criteria written before the stage starts; the audience of 25 and the permission lists are invented\n\n--- 2. Genuinely running: drift in a system that started as a prototype ---\nweek 1: no drift\nweek 3: [\"data 'real_sample' is not allowed in prototype\", 'audience 3 exceeds 0', 'forbidden permissions: prod_read']\nweek 6: [\"data 'production' is not allowed in prototype\", 'audience 40 exceeds 0', 'forbidden permissions: prod_read, prod_write']\nnothing was ever promoted and the system still moved from synthetic data to production writes, one reasonable-looking step at a time; the check compares the claimed stage with what the system really has, so the prototype label stopped being true at week 3\n\n--- 3. Genuinely running: a pilot that outgrows its audience ---\naudience  10: within bounds\naudience  25: within bounds\naudience  26: ['audience 26 exceeds 25']\naudience 300: ['audience 300 exceeds 25']\nthe bound is inclusive at 25 and 26 is drift; a pilot that quietly reaches 300 people is a production launch without the production controls\n\n--- 4. Genuinely running: the pilot modification, a rollback owner who has tested rollback ---\nowner only                 (False, ['rollback_owner', 'rollback_tested'])\nowner and rollback owner   (False, ['rollback_tested'])\nall three                  (True, [])\na named rollback owner is not the same as a tested rollback, and the readiness check asks for both; whether the rollback was tested is a flag here and a team would attach the evidence\n\n--- 5. Genuinely running: the decision artifact ---\n{\"drift\": [\"audience 30 exceeds 25\"], \"exit_criteria\": [\"outcome metrics met on the pilot cohort\", \"no guardrail breach\", \"rollback exercised once\"], \"pilot_ready\": true, \"stage\": \"pilot\"}\nthe artifact lists the drift found, the readiness result and the exit criteria still to meet; a pilot that has outgrown its audience shows up here even though the owner and rollback are fine, and the lab prints it instead of writing outputs/stage-decisions.json"
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
    "headingEn": "Genuinely Found: A Prototype That Was Never Promoted Reached Production Writes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಎಂದೂ ಬಡ್ತಿ ಪಡೆಯದ ಮೂಲಮಾದರಿ production ಬರಹ ತಲುಪಿತು",
    "bodyEn": "Section 2: week 1 had no drift; at week 3 the prototype used real_sample data, had 3 users and prod_read, so three drift findings appeared; at week 6 it had production data, 40 users and prod_read plus prod_write. Section 3: a pilot with 10 and 25 users was within bounds, 26 and 300 exceeded 25.",
    "bodyKn": "ವಿಭಾಗ 2: ವಾರ 1 ರಲ್ಲಿ ಡ್ರಿಫ್ಟ್ ಇರಲಿಲ್ಲ; ವಾರ 3 ರಲ್ಲಿ ಮೂಲಮಾದರಿ real_sample ದತ್ತಾಂಶ, 3 ಬಳಕೆದಾರರು ಮತ್ತು prod_read ಬಳಸಿ ಮೂರು ಡ್ರಿಫ್ಟ್ ಶೋಧನೆ ಕಂಡವು; ವಾರ 6 ರಲ್ಲಿ production ದತ್ತಾಂಶ, 40 ಬಳಕೆದಾರರು ಮತ್ತು prod_read ಜೊತೆ prod_write ಇದ್ದವು. ವಿಭಾಗ 3: 10 ಮತ್ತು 25 ಬಳಕೆದಾರರ ಪೈಲಟ್ ಮಿತಿಯೊಳಗೆ, 26 ಮತ್ತು 300 25 ಮೀರಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Readiness Needs a Tested Rollback and the Artifact Shows Drift",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಿದ್ಧತೆಗೆ ಪರೀಕ್ಷಿತ Rollback ಬೇಕು ಮತ್ತು ಕಲಾಕೃತಿ ಡ್ರಿಫ್ಟ್ ತೋರಿಸುತ್ತದೆ",
    "bodyEn": "Section 4: owner only was not ready and missed rollback_owner and rollback_tested, owner plus rollback owner still missed rollback_tested, and all three was ready. Section 5: the artifact for a pilot with 30 users listed \"audience 30 exceeds 25\" and pilot_ready true, so drift and readiness are separate findings.",
    "bodyKn": "ವಿಭಾಗ 4: ಮಾಲೀಕ ಮಾತ್ರ ಸಿದ್ಧವಾಗಿರಲಿಲ್ಲ ಮತ್ತು rollback_owner ಹಾಗೂ rollback_tested ತಪ್ಪಿಸಿತು, ಮಾಲೀಕ ಮತ್ತು rollback ಮಾಲೀಕ ಇನ್ನೂ rollback_tested ತಪ್ಪಿಸಿತು, ಮತ್ತು ಮೂರೂ ಇದ್ದಾಗ ಸಿದ್ಧ. ವಿಭಾಗ 5: 30 ಬಳಕೆದಾರರ ಪೈಲಟ್‌ನ ಕಲಾಕೃತಿ \"audience 30 exceeds 25\" ಮತ್ತು pilot_ready true ಪಟ್ಟಿ ಮಾಡಿತು, ಆದ್ದರಿಂದ ಡ್ರಿಫ್ಟ್ ಮತ್ತು ಸಿದ್ಧತೆ ಬೇರೆ ಶೋಧನೆಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Systems move between stages by small steps nobody calls a promotion, and only a check of the real data, audience and permissions notices.",
    "bodyKn": "ವ್ಯವಸ್ಥೆಗಳು ಯಾರೂ ಬಡ್ತಿ ಎನ್ನದ ಸಣ್ಣ ಹೆಜ್ಜೆಗಳಿಂದ ಹಂತಗಳ ನಡುವೆ ಚಲಿಸುತ್ತವೆ, ಮತ್ತು ನಿಜ ದತ್ತಾಂಶ, ಪ್ರೇಕ್ಷಕರು ಮತ್ತು ಅನುಮತಿಗಳ ಪರಿಶೀಲನೆ ಮಾತ್ರ ಗಮನಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"it is still a prototype, it was never promoted.\" By week 6 it held production write access.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಇದು ಇನ್ನೂ ಮೂಲಮಾದರಿ, ಎಂದೂ ಬಡ್ತಿ ಪಡೆದಿಲ್ಲ.\" ವಾರ 6 ರ ವೇಳೆಗೆ ಅದು production ಬರಹ ಪ್ರವೇಶ ಹೊಂದಿತ್ತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Stage drift: the system holds more than its stage allows. Audience bound: the maximum number of users. Exit criteria: what must be true to leave a stage. Rollback owner: the person who can undo the change.",
    "bodyKn": "Stage drift: ವ್ಯವಸ್ಥೆ ತನ್ನ ಹಂತ ಅನುಮತಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಹೊಂದಿದೆ. Audience bound: ಗರಿಷ್ಠ ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ. Exit criteria: ಹಂತ ಬಿಡಲು ಸತ್ಯವಾಗಿರಬೇಕಾದದ್ದು. Rollback owner: ಬದಲಾವಣೆ ರದ್ದುಗೊಳಿಸಬಲ್ಲ ವ್ಯಕ್ತಿ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Each stage has data, audience and permission limits. 2) A prototype drifted to production writes. 3) 26 users exceeded a 25-user pilot. 4) Readiness needs a tested rollback. 5) Drift and readiness are separate findings.",
    "bodyKn": "1) ಪ್ರತಿ ಹಂತಕ್ಕೆ ದತ್ತಾಂಶ, ಪ್ರೇಕ್ಷಕ ಮತ್ತು ಅನುಮತಿ ಮಿತಿಗಳಿವೆ. 2) ಮೂಲಮಾದರಿ production ಬರಹಕ್ಕೆ ಡ್ರಿಫ್ಟ್ ಆಯಿತು. 3) 26 ಬಳಕೆದಾರರು 25-ಬಳಕೆದಾರ ಪೈಲಟ್ ಮೀರಿದರು. 4) ಸಿದ್ಧತೆಗೆ ಪರೀಕ್ಷಿತ rollback ಬೇಕು. 5) ಡ್ರಿಫ್ಟ್ ಮತ್ತು ಸಿದ್ಧತೆ ಬೇರೆ ಶೋಧನೆಗಳು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "At which week did the prototype first show drift?",
      "qKn": "ಮೂಲಮಾದರಿ ಮೊದಲು ಯಾವ ವಾರ ಡ್ರಿಫ್ಟ್ ತೋರಿಸಿತು?",
      "opts": [
       "Week 3",
       "Week 1",
       "Week 6",
       "Never"
      ],
      "optsKn": [
       "ವಾರ 3",
       "ವಾರ 1",
       "ವಾರ 6",
       "ಎಂದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened at a pilot audience of 25?",
      "qKn": "25 ಪೈಲಟ್ ಪ್ರೇಕ್ಷಕರಲ್ಲಿ ಏನಾಯಿತು?",
      "opts": [
       "Within bounds",
       "Drift",
       "Blocked",
       "Promoted"
      ],
      "optsKn": [
       "ಮಿತಿಯೊಳಗೆ",
       "ಡ್ರಿಫ್ಟ್",
       "blocked",
       "ಬಡ್ತಿ"
      ],
      "correct": 0
     },
     {
      "q": "What did \"owner and rollback owner\" still miss?",
      "qKn": "\"owner and rollback owner\" ಇನ್ನೂ ಏನು ತಪ್ಪಿಸಿತು?",
      "opts": [
       "rollback_tested",
       "owner",
       "rollback_owner",
       "nothing"
      ],
      "optsKn": [
       "rollback_tested",
       "owner",
       "rollback_owner",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which permission is forbidden in a pilot?",
      "qKn": "ಪೈಲಟ್‌ನಲ್ಲಿ ಯಾವ ಅನುಮತಿ ನಿಷೇಧ?",
      "opts": [
       "prod_write",
       "read_docs",
       "prod_read",
       "none"
      ],
      "optsKn": [
       "prod_write",
       "read_docs",
       "prod_read",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Was outputs/stage-decisions.json written?",
      "qKn": "outputs/stage-decisions.json ಬರೆಯಲಾಯಿತೇ?",
      "opts": [
       "No, the lab printed the artifact",
       "Yes",
       "Only for pilots",
       "Only on drift"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಲ್ಯಾಬ್ ಕಲಾಕೃತಿ ಮುದ್ರಿಸಿತು",
       "ಹೌದು",
       "ಪೈಲಟ್‌ಗಳಿಗೆ ಮಾತ್ರ",
       "ಡ್ರಿಫ್ಟ್‌ನಲ್ಲಿ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
