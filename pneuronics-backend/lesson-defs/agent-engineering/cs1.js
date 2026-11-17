module.exports = {
 "phaseId": "6a369d6366020ed05b32158c",
 "moduleId": "6a369d6466020ed05b3215ce",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "CAIS, CAISI and Societal-Scale Risk (Part 1 of 3) — The Four-Risk Screen",
 "titleKn": "CAIS, CAISI ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 1 / 3) — ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನ್",
 "desc": "Build a multi-label four-risk screening tool and measure its false positives, misses, precision and recall.",
 "descKn": "ಬಹು-ಲೇಬಲ್ ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ ನಿರ್ಮಿಸಿ ಮತ್ತು ಅದರ ತಪ್ಪು ಧನಾತ್ಮಕ, ತಪ್ಪಿಸುವಿಕೆ, precision ಮತ್ತು recall ಅಳೆಯಿರಿ.",
 "objectives": [
  "Screen with phrase matching.",
  "Return every matching category.",
  "Keep review pending.",
  "Spot a false positive.",
  "Measure precision and recall."
 ],
 "objectivesKn": [
  "ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆಯಿಂದ ಸ್ಕ್ರೀನ್ ಮಾಡಿ.",
  "ಹೊಂದಿದ ಪ್ರತಿ ವರ್ಗ ಹಿಂತಿರುಗಿಸಿ.",
  "ವಿಮರ್ಶೆ ಬಾಕಿ ಇಡಿ.",
  "ತಪ್ಪು ಧನಾತ್ಮಕ ಗುರುತಿಸಿ.",
  "precision ಮತ್ತು recall ಅಳೆಯಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "CAIS, CAISI and Societal-Scale Risk (Part 1 of 3)",
    "textKn": "CAIS, CAISI ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: a multi-label four-risk screening tool on word-boundary phrase matching, its report, false positives and false negatives, precision and recall on twelve labelled descriptions against plain keywords, mitigation matching and nine unit tests that are run. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind CAIS, CAISI and societal-scale risk (a multi-label four-risk screening tool, its false positives and negatives, a governance gate with control evidence, approval binding and separation of duties, tests of controls against broken versions, an evidence ladder, incident triage and an explicit unknown for legal reportability), not the real software, and the indicators, labelled descriptions, control mapping and the five tiny controls with their broken versions are written by the lab author, reviewers, evidence and the clock are strings and numbers, no classification comes from CAIS, CAISI or any regulator and no legal question is decided, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in fragments, so the labs are our own implementation and the outputs were produced by running them. The lesson description of CAIS, CAISI at NIST, the 2023 extinction-risk statement, the four-risk taxonomy attributed to CAIS and California SB-53 is conceptual or cited and was not checked here; the lesson itself says that SB-53 was signed on September 29, 2025 and that its exact obligations depend on statutory definitions, and this module does not interpret the statute or decide whether any organisation is covered or any incident is reportable. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ಪದ-ಗಡಿ ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆಯ ಮೇಲೆ ಬಹು-ಲೇಬಲ್ ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ, ಅದರ ವರದಿ, ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ, ಸರಳ ಕೀವರ್ಡ್‌ಗಳ ವಿರುದ್ಧ ಹನ್ನೆರಡು ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳ ಮೇಲೆ precision ಮತ್ತು recall, ತಗ್ಗಿಸುವಿಕೆ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಓಡಿಸಿದ ಒಂಬತ್ತು unit ಪರೀಕ್ಷೆಗಳು. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು CAIS, CAISI ಮತ್ತು ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯ (ಬಹು-ಲೇಬಲ್ ನಾಲ್ಕು-ಅಪಾಯ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ, ಅದರ ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ, ನಿಯಂತ್ರಣ ಸಾಕ್ಷ್ಯ, ಅನುಮೋದನೆ ಬಂಧ ಮತ್ತು ಕರ್ತವ್ಯ ಪ್ರತ್ಯೇಕತೆ ಇರುವ ಆಡಳಿತ gate, ಮುರಿದ ಆವೃತ್ತಿಗಳ ವಿರುದ್ಧ ನಿಯಂತ್ರಣ ಪರೀಕ್ಷೆಗಳು, ಸಾಕ್ಷ್ಯ ಏಣಿ, ಘಟನೆ triage ಮತ್ತು ಕಾನೂನು ವರದಿಗೆ ಸ್ಪಷ್ಟ ಅಜ್ಞಾತ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಸೂಚಕಗಳು, ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳು, ನಿಯಂತ್ರಣ ನಕ್ಷೆ ಮತ್ತು ಐದು ಚಿಕ್ಕ ನಿಯಂತ್ರಣಗಳು ಹಾಗೂ ಅವುಗಳ ಮುರಿದ ಆವೃತ್ತಿಗಳನ್ನು ಲ್ಯಾಬ್ ಲೇಖಕ ಬರೆದಿದ್ದಾರೆ, ವಿಮರ್ಶಕರು, ಸಾಕ್ಷ್ಯ ಮತ್ತು ಗಡಿಯಾರ ಸ್ಟ್ರಿಂಗ್ ಮತ್ತು ಸಂಖ್ಯೆಗಳು, ಯಾವ ವರ್ಗೀಕರಣವೂ CAIS, CAISI ಅಥವಾ ಯಾವುದೇ ನಿಯಂತ್ರಕರಿಂದ ಬರುವುದಿಲ್ಲ ಮತ್ತು ಯಾವ ಕಾನೂನು ಪ್ರಶ್ನೆಯನ್ನೂ ನಿರ್ಧರಿಸಲಾಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ತುಣುಕುಗಳಲ್ಲಿ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. CAIS, NIST ನಲ್ಲಿ CAISI, 2023 ನಾಶ-ಅಪಾಯ ಹೇಳಿಕೆ, CAIS ಗೆ ಹೇಳಲಾದ ನಾಲ್ಕು-ಅಪಾಯ ವರ್ಗೀಕರಣ ಮತ್ತು California SB-53 ಬಗ್ಗೆ lesson ವಿವರಣೆ ಪರಿಕಲ್ಪನಾತ್ಮಕ ಅಥವಾ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ; SB-53 ಅನ್ನು ಸೆಪ್ಟೆಂಬರ್ 29, 2025 ರಂದು ಸಹಿ ಮಾಡಲಾಯಿತು ಮತ್ತು ಅದರ ನಿಖರ ಬಾಧ್ಯತೆಗಳು ಶಾಸನಬದ್ಧ ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಅವಲಂಬಿಸಿವೆ ಎಂದು lesson ಸ್ವತಃ ಹೇಳುತ್ತದೆ, ಮತ್ತು ಈ ಮಾಡ್ಯೂಲ್ ಶಾಸನ ವ್ಯಾಖ್ಯಾನಿಸುವುದಿಲ್ಲ ಅಥವಾ ಯಾವ ಸಂಸ್ಥೆ ಒಳಪಡುತ್ತದೆ ಅಥವಾ ಯಾವ ಘಟನೆ ವರದಿಗೆ ಅರ್ಹ ಎಂದು ನಿರ್ಧರಿಸುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A First-Pass Screen, Not a Verdict",
    "textKn": "ಮೊದಲ-ಹಂತದ ಸ್ಕ್ರೀನ್, ತೀರ್ಪಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Four Categories, Indicators and Their Limits",
    "headingKn": "ನಾಲ್ಕು ವರ್ಗಗಳು, ಸೂಚಕಗಳು ಮತ್ತು ಅವುಗಳ ಮಿತಿಗಳು",
    "bodyEn": "This part builds a screening tool for the four-risk framework the lesson describes: malicious use, AI races, organisational risks and rogue AIs. It matches phrases on word boundaries, returns every category that matched with the phrases that triggered it, attaches mitigation lists, and always marks the report as needing human review. It then looks at what phrase matching gets wrong, measures precision and recall on twelve descriptions labelled by the lab author against a plain keyword version, and runs nine unit tests. The taxonomy comes from the lesson and is not checked against CAIS.",
    "bodyKn": "ಈ ಭಾಗ lesson ವಿವರಿಸುವ ನಾಲ್ಕು-ಅಪಾಯ ಚೌಕಟ್ಟಿಗೆ ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ ನಿರ್ಮಿಸುತ್ತದೆ: ದುರುಪಯೋಗ, AI ಓಟಗಳು, ಸಾಂಸ್ಥಿಕ ಅಪಾಯಗಳು ಮತ್ತು ಬಂಡುಕೋರ AI ಗಳು. ಅದು ಪದ ಗಡಿಗಳಲ್ಲಿ ಪದಗುಚ್ಛ ಹೊಂದಿಸುತ್ತದೆ, ಹೊಂದಿದ ಪ್ರತಿ ವರ್ಗವನ್ನು ಅದನ್ನು ಪ್ರಚೋದಿಸಿದ ಪದಗುಚ್ಛಗಳೊಂದಿಗೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, ತಗ್ಗಿಸುವಿಕೆ ಪಟ್ಟಿ ಜೋಡಿಸುತ್ತದೆ, ಮತ್ತು ವರದಿಯನ್ನು ಯಾವಾಗಲೂ ಮಾನವ ವಿಮರ್ಶೆ ಬೇಕು ಎಂದು ಗುರುತಿಸುತ್ತದೆ. ನಂತರ ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆ ಏನು ತಪ್ಪುತ್ತದೆ ನೋಡುತ್ತದೆ, ಲ್ಯಾಬ್ ಲೇಖಕ ಲೇಬಲ್ ಮಾಡಿದ ಹನ್ನೆರಡು ವಿವರಣೆಗಳ ಮೇಲೆ ಸರಳ ಕೀವರ್ಡ್ ಆವೃತ್ತಿಯ ವಿರುದ್ಧ precision ಮತ್ತು recall ಅಳೆಯುತ್ತದೆ, ಮತ್ತು ಒಂಬತ್ತು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ. ವರ್ಗೀಕರಣ lesson ನಿಂದ ಬಂದದ್ದು ಮತ್ತು CAIS ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿಲ್ಲ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Four Overlapping Risks",
    "headingKn": "ನಾಲ್ಕು ಅತಿಕ್ರಮಿಸುವ ಅಪಾಯಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">one deployment can carry several risk labels</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">malicious use</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">an adversary</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">AI races</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">pressure on safety</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">organisation</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">controls not enforced</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">rogue AI</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">authority exceeded</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one deployment can carry several risk labels</text></svg>",
    "captionEn": "A screening tool flags categories for a reviewer and never certifies anything.",
    "captionKn": "ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ ವಿಮರ್ಶಕನಿಗಾಗಿ ವರ್ಗಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ಏನನ್ನೂ ಪ್ರಮಾಣೀಕರಿಸುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The screening tool",
    "headingKn": "ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ",
    "headers": [
     "Part",
     "What it does"
    ],
    "rows": [
     [
      "taxonomy",
      "four categories, four phrases each"
     ],
     [
      "matcher",
      "word-boundary phrase match after normalisation"
     ],
     [
      "report",
      "findings with matched phrases, always human_review_required and pending"
     ],
     [
      "mitigations",
      "a recommended list per flagged category, copied so callers cannot edit the source"
     ],
     [
      "limits",
      "four sentences carried in every report"
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
    "filename": "cs_1.py",
    "headingEn": "Taxonomy, matcher, report and tests",
    "headingKn": "ವರ್ಗೀಕರಣ, ಹೊಂದಾಣಿಕೆ, ವರದಿ ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "descEn": "classify matches indicators on word boundaries and returns every category that matched, build_report validates the record and always sets human review and a pending status, and score computes precision and recall against labelled descriptions.",
    "descKn": "classify ಪದ ಗಡಿಗಳಲ್ಲಿ ಸೂಚಕಗಳನ್ನು ಹೊಂದಿಸಿ ಹೊಂದಿದ ಪ್ರತಿ ವರ್ಗ ಹಿಂತಿರುಗಿಸುತ್ತದೆ, build_report ದಾಖಲೆ ಮೌಲ್ಯೀಕರಿಸಿ ಯಾವಾಗಲೂ ಮಾನವ ವಿಮರ್ಶೆ ಮತ್ತು ಬಾಕಿ ಸ್ಥಿತಿ ಹೊಂದಿಸುತ್ತದೆ, ಮತ್ತು score ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳ ವಿರುದ್ಧ precision ಮತ್ತು recall ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ.",
    "code": "TAXONOMY = {\r\n    \"malicious_use\": {\"title\": \"Malicious Use\", \"indicators\": [\"attacker misuse\", \"fraud campaign\", \"unauthorized disclosure\", \"malicious exploitation\"],\r\n                      \"mitigations\": [\"Enforce least-privilege access\", \"Perform adversarial testing\", \"Monitor suspicious usage\", \"Review capability restrictions\"]},\r\n    \"ai_races\": {\"title\": \"AI Races\", \"indicators\": [\"competitive pressure\", \"rushed deployment\", \"accelerated launch\", \"market deadline\"],\r\n                 \"mitigations\": [\"Define minimum safety gates\", \"Protect evaluation schedules\", \"Require deployment approval\", \"Document safety exceptions\"]},\r\n    \"organizational_risks\": {\"title\": \"Organizational Risks\", \"indicators\": [\"missing audit\", \"incomplete security review\", \"weak oversight\", \"unresolved safety finding\"],\r\n                             \"mitigations\": [\"Conduct independent audits\", \"Create escalation procedures\", \"Strengthen information security\", \"Apply defense in depth\"]},\r\n    \"rogue_ais\": {\"title\": \"Rogue AIs\", \"indicators\": [\"evade shutdown\", \"bypass human approval\", \"unauthorized self-modification\", \"uncontrolled autonomous action\"],\r\n                  \"mitigations\": [\"Limit autonomous permissions\", \"Require approval for high-impact actions\", \"Implement external kill switches\", \"Verify actions after execution\"]},\r\n}\r\nSIMPLE_KEYWORDS = {\"malicious_use\": [\"attacker\", \"fraud\", \"misuse\"], \"ai_races\": [\"competition\", \"deadline\", \"rush\"], \"organizational_risks\": [\"audit\", \"security\", \"oversight\"], \"rogue_ais\": [\"shutdown\", \"autonomy\", \"approval\"]}\r\nLIMITS = [\"Keyword matches are not proof of risk.\", \"Unmatched categories may still be relevant.\", \"Controls have not been independently verified.\", \"The report does not authorize deployment.\"]\r\n\r\n\r\ndef validate_deployment(d):\r\n    if not isinstance(d, dict):\r\n        raise TypeError(\"Deployment must be a dictionary.\")\r\n    for k in (\"name\", \"description\"):\r\n        if not isinstance(d.get(k), str) or not d[k].strip():\r\n            raise ValueError(f\"Field {k} must be a non-empty string.\")\r\n    return d\r\n\r\n\r\ndef normalize_text(t):\r\n    return re.sub(r\"\\s+\", \" \", unicodedata.normalize(\"NFKC\", t).casefold())\r\n\r\n\r\ndef match_indicator(text, indicator):\r\n    return re.search(r\"(?<!\\w)\" + re.escape(indicator) + r\"(?!\\w)\", text) is not None\r\n\r\n\r\ndef classify(description):\r\n    text = normalize_text(description)\r\n    out = []\r\n    for cid, d in TAXONOMY.items():\r\n        hits = [i for i in d[\"indicators\"] if match_indicator(text, i)]\r\n        if hits:\r\n            out.append({\"category\": cid, \"title\": d[\"title\"], \"matched_indicators\": hits})\r\n    return out\r\n\r\n\r\ndef classify_simple(description):\r\n    t = normalize_text(description)\r\n    return [{\"category\": c, \"matched_indicators\": [k for k in ks if k in t]} for c, ks in SIMPLE_KEYWORDS.items() if any(k in t for k in ks)]\r\n\r\n\r\ndef match_mitigations(findings):\r\n    return {f[\"category\"]: list(TAXONOMY[f[\"category\"]][\"mitigations\"]) for f in findings}\r\n\r\n\r\ndef build_report(deployment):\r\n    validate_deployment(deployment)\r\n    findings = classify(deployment[\"description\"])\r\n    return {\"deployment_name\": deployment[\"name\"], \"classification_method\": \"Rule-based phrase matching\", \"findings\": findings,\r\n            \"mitigations\": match_mitigations(findings), \"human_review_required\": True, \"review_status\": \"pending\", \"limitations\": LIMITS}\r\n\r\n\r\n# (description, categories a reviewer would assign, written by the lab author)\r\nLABELLED = [\r\n    (\"Competitive pressure caused a rushed deployment with an incomplete security review.\", {\"ai_races\", \"organizational_risks\"}),\r\n    (\"The deployment faces attacker misuse attempts involving unauthorized disclosure.\", {\"malicious_use\"}),\r\n    (\"The autonomous research agent attempted to bypass human approval.\", {\"rogue_ais\"}),\r\n    (\"Competitive pressure caused a rushed deployment with a missing audit. The platform faces attacker misuse, and the agent may bypass human approval.\", {\"ai_races\", \"organizational_risks\", \"malicious_use\", \"rogue_ais\"}),\r\n    (\"The missing audit issue has been fully resolved.\", set()),\r\n    (\"The team completed an independent audit and closed every finding.\", set()),\r\n    (\"Management removed independent testing to meet an aggressive release schedule.\", {\"ai_races\", \"organizational_risks\"}),\r\n    (\"The agent tried to keep running after the operator pressed stop.\", {\"rogue_ais\"}),\r\n    (\"A fraud campaign is using the assistant to write convincing messages.\", {\"malicious_use\"}),\r\n    (\"Routine documentation update for the support portal.\", set()),\r\n    (\"There is competition for the same market, but all safety gates are scheduled and protected.\", set()),\r\n    (\"An unresolved safety finding has been open for six months.\", {\"organizational_risks\"}),\r\n]\r\n\r\n\r\ndef score(classifier):\r\n    tp = fp = fn = 0\r\n    for desc, truth in LABELLED:\r\n        got = {f[\"category\"] for f in classifier(desc)}\r\n        tp += len(got & truth)\r\n        fp += len(got - truth)\r\n        fn += len(truth - got)\r\n    p = tp / (tp + fp) if tp + fp else 0.0\r\n    r = tp / (tp + fn) if tp + fn else 0.0\r\n    return tp, fp, fn, p, r\r\n\r\n\r\nclass Tests(unittest.TestCase):\r\n    def test_normalisation(self):\r\n        self.assertEqual(normalize_text(\"RUSHED\\n\\nDEPLOYMENT\"), \"rushed deployment\")\r\n\r\n    def test_phrase_match(self):\r\n        self.assertTrue(match_indicator(\"a rushed deployment\", \"rushed deployment\"))\r\n\r\n    def test_non_match(self):\r\n        self.assertFalse(match_indicator(\"routine deployment\", \"rushed deployment\"))\r\n\r\n    def test_boundary(self):\r\n        self.assertFalse(match_indicator(\"weak oversights\", \"weak oversight\"))\r\n\r\n    def test_multi_label(self):\r\n        cats = {f[\"category\"] for f in classify(\"competitive pressure and a missing audit\")}\r\n        self.assertEqual(cats, {\"ai_races\", \"organizational_risks\"})\r\n\r\n    def test_empty_is_not_approval(self):\r\n        r = build_report({\"name\": \"x\", \"description\": \"nothing special here\"})\r\n        self.assertEqual((r[\"findings\"], r[\"human_review_required\"], r[\"review_status\"]), ([], True, \"pending\"))\r\n\r\n    def test_invalid_type(self):\r\n        with self.assertRaises(TypeError):\r\n            validate_deployment(\"agent\")\r\n\r\n    def test_blank_description(self):\r\n        with self.assertRaises(ValueError):\r\n            validate_deployment({\"name\": \"x\", \"description\": \"   \"})\r\n\r\n    def test_mitigations_are_copies(self):\r\n        m = match_mitigations(classify(\"attacker misuse\"))\r\n        m[\"malicious_use\"].append(\"x\")\r\n        self.assertNotIn(\"x\", TAXONOMY[\"malicious_use\"][\"mitigations\"])"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "cs_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() classifies four deployments, builds a report, shows false positives and negatives, scores two matchers and runs nine unit tests.",
    "descKn": "main() ನಾಲ್ಕು ನಿಯೋಜನೆಗಳನ್ನು ವರ್ಗೀಕರಿಸಿ, ವರದಿ ನಿರ್ಮಿಸಿ, ತಪ್ಪು ಧನಾತ್ಮಕ ಮತ್ತು ಋಣಾತ್ಮಕ ತೋರಿಸಿ, ಎರಡು ಹೊಂದಾಣಿಕೆ ಅಂಕಿಸಿ ಮತ್ತು ಒಂಬತ್ತು unit ಪರೀಕ್ಷೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: four example deployments\")\r\n    for desc in (LABELLED[0][0], LABELLED[1][0], LABELLED[2][0], LABELLED[3][0]):\r\n        print(desc)\r\n        for f in classify(desc):\r\n            print(f\"   {f['category']:22} matched {f['matched_indicators']}\")\r\n    print(\"the first description matched two categories, the second one, the third a rogue-AI phrase and the fourth all four, so the taxonomy is multi-label; a match means a phrase appeared and says nothing about whether the described situation is real, observed or severe\")\r\n\r\n    section(\"2. Genuinely running: a report and what it leaves out\")\r\n    r = build_report({\"name\": \"Autonomous Enterprise Agent\", \"description\": LABELLED[0][0]})\r\n    print(json.dumps({k: r[k] for k in (\"deployment_name\", \"classification_method\", \"human_review_required\", \"review_status\")}, indent=1))\r\n    print(\"limitations:\", r[\"limitations\"])\r\n    print(\"mitigation lists for\", sorted(r[\"mitigations\"]))\r\n    print(\"the report is always marked as needing human review with a pending status and carries its own four limitations, and the mitigation lists are recommendations that say nothing about whether any control exists\")\r\n\r\n    section(\"3. Genuinely running: false positives and false negatives\")\r\n    for desc in (LABELLED[4][0], LABELLED[5][0], LABELLED[10][0], LABELLED[6][0]):\r\n        print(f\"{[f['category'] for f in classify(desc)]!s:38} {desc}\")\r\n    print(\"the resolved audit issue was flagged as a missing audit, which is a false positive on a closed finding, the sentence about management removing independent testing matched nothing although it describes both schedule pressure and an organisational failure, and a phrase-level matcher cannot see negation, time or evidence quality; an empty result is not a clean bill\")\r\n\r\n    section(\"4. Genuinely measuring: precision and recall on twelve labelled descriptions\")\r\n    for label, fn_ in ((\"phrase matcher\", classify), (\"plain keywords\", classify_simple)):\r\n        tp, fp, fn, p, rr = score(fn_)\r\n        print(f\"{label:15} TP {tp:2} FP {fp:2} FN {fn:2} | precision {p:.3f} | recall {rr:.3f}\")\r\n    print(\"the phrase matcher found 10 of the 13 labelled category assignments with 1 false positive and 3 misses, giving precision 0.909 and recall 0.769, while the broad plain keywords found 9 with 3 false positives and 4 misses, giving 0.750 and 0.692, so on this set the plain version was worse on both; twelve descriptions written by the lab author are far too few to estimate a real rate, and recall matters more than precision when a missed concern never reaches a reviewer\")\r\n\r\n    section(\"5. Genuinely running: the unit tests\")\r\n    stream = io.StringIO()\r\n    res = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(Tests))\r\n    print(f\"ran {res.testsRun} tests | failures {len(res.failures)} | errors {len(res.errors)} | passed {res.wasSuccessful()}\")\r\n    print(\"the tests cover normalisation, phrase and boundary matching, multi-label output, an empty result that is still pending review, input validation and copied mitigation lists, on this lab's own matcher; they do not show that the indicators are right\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: four example deployments ---\nCompetitive pressure caused a rushed deployment with an incomplete security review.\n   ai_races               matched ['competitive pressure', 'rushed deployment']\n   organizational_risks   matched ['incomplete security review']\nThe deployment faces attacker misuse attempts involving unauthorized disclosure.\n   malicious_use          matched ['attacker misuse', 'unauthorized disclosure']\nThe autonomous research agent attempted to bypass human approval.\n   rogue_ais              matched ['bypass human approval']\nCompetitive pressure caused a rushed deployment with a missing audit. The platform faces attacker misuse, and the agent may bypass human approval.\n   malicious_use          matched ['attacker misuse']\n   ai_races               matched ['competitive pressure', 'rushed deployment']\n   organizational_risks   matched ['missing audit']\n   rogue_ais              matched ['bypass human approval']\nthe first description matched two categories, the second one, the third a rogue-AI phrase and the fourth all four, so the taxonomy is multi-label; a match means a phrase appeared and says nothing about whether the described situation is real, observed or severe\n\n--- 2. Genuinely running: a report and what it leaves out ---\n{\n \"deployment_name\": \"Autonomous Enterprise Agent\",\n \"classification_method\": \"Rule-based phrase matching\",\n \"human_review_required\": true,\n \"review_status\": \"pending\"\n}\nlimitations: ['Keyword matches are not proof of risk.', 'Unmatched categories may still be relevant.', 'Controls have not been independently verified.', 'The report does not authorize deployment.']\nmitigation lists for ['ai_races', 'organizational_risks']\nthe report is always marked as needing human review with a pending status and carries its own four limitations, and the mitigation lists are recommendations that say nothing about whether any control exists\n\n--- 3. Genuinely running: false positives and false negatives ---\n['organizational_risks']               The missing audit issue has been fully resolved.\n[]                                     The team completed an independent audit and closed every finding.\n[]                                     There is competition for the same market, but all safety gates are scheduled and protected.\n[]                                     Management removed independent testing to meet an aggressive release schedule.\nthe resolved audit issue was flagged as a missing audit, which is a false positive on a closed finding, the sentence about management removing independent testing matched nothing although it describes both schedule pressure and an organisational failure, and a phrase-level matcher cannot see negation, time or evidence quality; an empty result is not a clean bill\n\n--- 4. Genuinely measuring: precision and recall on twelve labelled descriptions ---\nphrase matcher  TP 10 FP  1 FN  3 | precision 0.909 | recall 0.769\nplain keywords  TP  9 FP  3 FN  4 | precision 0.750 | recall 0.692\nthe phrase matcher found 10 of the 13 labelled category assignments with 1 false positive and 3 misses, giving precision 0.909 and recall 0.769, while the broad plain keywords found 9 with 3 false positives and 4 misses, giving 0.750 and 0.692, so on this set the plain version was worse on both; twelve descriptions written by the lab author are far too few to estimate a real rate, and recall matters more than precision when a missed concern never reaches a reviewer\n\n--- 5. Genuinely running: the unit tests ---\nran 9 tests | failures 0 | errors 0 | passed True\nthe tests cover normalisation, phrase and boundary matching, multi-label output, an empty result that is still pending review, input validation and copied mitigation lists, on this lab's own matcher; they do not show that the indicators are right"
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
    "headingEn": "Genuinely Found: Categories, Report and Mistakes",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವರ್ಗಗಳು, ವರದಿ ಮತ್ತು ತಪ್ಪುಗಳು",
    "bodyEn": "Section 1: the four example descriptions matched two categories, one, one and all four, so the taxonomy is multi-label. Section 2: the report was marked human_review_required true with the status pending and carried four limitations. Section 3: the resolved missing-audit sentence was flagged as organizational_risks, which is a false positive on a closed finding, while the sentence about management removing independent testing matched nothing.",
    "bodyKn": "ವಿಭಾಗ 1: ನಾಲ್ಕು ಉದಾಹರಣೆ ವಿವರಣೆಗಳು ಎರಡು ವರ್ಗ, ಒಂದು, ಒಂದು ಮತ್ತು ಎಲ್ಲಾ ನಾಲ್ಕು ಹೊಂದಿದವು, ಆದ್ದರಿಂದ ವರ್ಗೀಕರಣ ಬಹು-ಲೇಬಲ್. ವಿಭಾಗ 2: ವರದಿ human_review_required true ಮತ್ತು ಬಾಕಿ ಸ್ಥಿತಿಯೊಂದಿಗೆ ಗುರುತಿಸಲ್ಪಟ್ಟು ನಾಲ್ಕು ಮಿತಿಗಳನ್ನು ಹೊಂದಿತ್ತು. ವಿಭಾಗ 3: ಪರಿಹರಿಸಿದ missing-audit ವಾಕ್ಯ organizational_risks ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿತು, ಇದು ಮುಚ್ಚಿದ ಸಂಶೋಧನೆಯ ಮೇಲೆ ತಪ್ಪು ಧನಾತ್ಮಕ, ಆದರೆ ನಿರ್ವಹಣೆ ಸ್ವತಂತ್ರ ಪರೀಕ್ಷೆ ತೆಗೆದಿತು ಎಂಬ ವಾಕ್ಯ ಏನನ್ನೂ ಹೊಂದಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Precision, Recall and Tests",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Precision, Recall ಮತ್ತು ಪರೀಕ್ಷೆಗಳು",
    "bodyEn": "Section 4: on twelve labelled descriptions the phrase matcher got TP 10, FP 1 and FN 3 for precision 0.909 and recall 0.769, and the plain keywords got TP 9, FP 3 and FN 4 for 0.750 and 0.692. Section 5: the nine unit tests ran with 0 failures and 0 errors.",
    "bodyKn": "ವಿಭಾಗ 4: ಹನ್ನೆರಡು ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳಲ್ಲಿ ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆ TP 10, FP 1 ಮತ್ತು FN 3 ಪಡೆದು precision 0.909 ಮತ್ತು recall 0.769, ಮತ್ತು ಸರಳ ಕೀವರ್ಡ್‌ಗಳು TP 9, FP 3 ಮತ್ತು FN 4 ಪಡೆದು 0.750 ಮತ್ತು 0.692. ವಿಭಾಗ 5: ಒಂಬತ್ತು unit ಪರೀಕ್ಷೆಗಳು 0 ವೈಫಲ್ಯ ಮತ್ತು 0 ದೋಷದೊಂದಿಗೆ ಓಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A screening tool is useful for getting the right items in front of a reviewer, and the report has to say what it cannot see because an empty result is not an all clear.",
    "bodyKn": "ಸ್ಕ್ರೀನಿಂಗ್ ಸಾಧನ ಸರಿಯಾದ ವಿಷಯಗಳನ್ನು ವಿಮರ್ಶಕನ ಮುಂದೆ ತರಲು ಉಪಯುಕ್ತ, ಮತ್ತು ಖಾಲಿ ಫಲಿತಾಂಶ ಎಲ್ಲಾ ಸರಿ ಎಂದಲ್ಲದ್ದರಿಂದ ವರದಿ ತಾನು ನೋಡಲಾಗದ್ದನ್ನು ಹೇಳಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"no category matched, so the deployment has no societal-scale risk.\" The sentence about removing independent testing matched nothing at all.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಯಾವ ವರ್ಗವೂ ಹೊಂದಲಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಯೋಜನೆಗೆ ಸಮಾಜ-ಮಟ್ಟದ ಅಪಾಯವಿಲ್ಲ.\" ಸ್ವತಂತ್ರ ಪರೀಕ್ಷೆ ತೆಗೆಯುವ ಬಗ್ಗೆ ವಾಕ್ಯ ಏನನ್ನೂ ಹೊಂದಲಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Multi-label: a case can carry several categories. Indicator: a phrase that suggests a category. Precision: flagged categories that are right. Recall: right categories that were flagged.",
    "bodyKn": "ಬಹು-ಲೇಬಲ್: ಒಂದು ಪ್ರಕರಣ ಹಲವು ವರ್ಗ ಹೊಂದಬಹುದು. ಸೂಚಕ: ವರ್ಗ ಸೂಚಿಸುವ ಪದಗುಚ್ಛ. Precision: ಗುರುತಿಸಿದ ವರ್ಗಗಳಲ್ಲಿ ಸರಿಯಾದವು. Recall: ಸರಿಯಾದ ವರ್ಗಗಳಲ್ಲಿ ಗುರುತಿಸಲ್ಪಟ್ಟವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) One description matched all four categories. 2) Every report was pending human review. 3) A resolved issue was flagged. 4) A rewording of schedule pressure matched nothing. 5) The phrase matcher scored precision 0.909 and recall 0.769 on twelve texts.",
    "bodyKn": "1) ಒಂದು ವಿವರಣೆ ನಾಲ್ಕೂ ವರ್ಗ ಹೊಂದಿತು. 2) ಪ್ರತಿ ವರದಿ ಮಾನವ ವಿಮರ್ಶೆಗೆ ಬಾಕಿ ಇತ್ತು. 3) ಪರಿಹರಿಸಿದ ವಿಷಯ ಗುರುತಿಸಲ್ಪಟ್ಟಿತು. 4) ವೇಳಾಪಟ್ಟಿ ಒತ್ತಡದ ಮರುಪದ ಬಳಕೆ ಏನನ್ನೂ ಹೊಂದಲಿಲ್ಲ. 5) ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆ ಹನ್ನೆರಡು ಪಠ್ಯಗಳಲ್ಲಿ precision 0.909 ಮತ್ತು recall 0.769 ಪಡೆಯಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many categories did the fourth example description match?",
      "qKn": "ನಾಲ್ಕನೇ ಉದಾಹರಣೆ ವಿವರಣೆ ಎಷ್ಟು ವರ್ಗ ಹೊಂದಿತು?",
      "opts": [
       "4",
       "1",
       "2",
       "0"
      ],
      "optsKn": [
       "4",
       "1",
       "2",
       "0"
      ],
      "correct": 0
     },
     {
      "q": "What precision did the phrase matcher get on the twelve labelled descriptions?",
      "qKn": "ಹನ್ನೆರಡು ಲೇಬಲ್ ಮಾಡಿದ ವಿವರಣೆಗಳಲ್ಲಿ ಪದಗುಚ್ಛ ಹೊಂದಾಣಿಕೆ ಯಾವ precision ಪಡೆಯಿತು?",
      "opts": [
       "0.909",
       "0.750",
       "0.769",
       "1.000"
      ],
      "optsKn": [
       "0.909",
       "0.750",
       "0.769",
       "1.000"
      ],
      "correct": 0
     },
     {
      "q": "What did the report say about review?",
      "qKn": "ವಿಮರ್ಶೆ ಬಗ್ಗೆ ವರದಿ ಏನು ಹೇಳಿತು?",
      "opts": [
       "human_review_required true and status pending",
       "Review was optional",
       "Review was complete",
       "Nothing"
      ],
      "optsKn": [
       "human_review_required true ಮತ್ತು ಸ್ಥಿತಿ pending",
       "ವಿಮರ್ಶೆ ಐಚ್ಛಿಕ",
       "ವಿಮರ್ಶೆ ಪೂರ್ಣ",
       "ಏನೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "Which sentence was a false positive on a closed finding?",
      "qKn": "ಮುಚ್ಚಿದ ಸಂಶೋಧನೆಯ ಮೇಲೆ ತಪ್ಪು ಧನಾತ್ಮಕ ಯಾವ ವಾಕ್ಯ?",
      "opts": [
       "The missing audit issue has been fully resolved",
       "Routine documentation update",
       "The agent tried to keep running after stop",
       "A fraud campaign is using the assistant"
      ],
      "optsKn": [
       "The missing audit issue has been fully resolved (ಕಾಣೆಯಾದ ಆಡಿಟ್ ಸಮಸ್ಯೆ ಸಂಪೂರ್ಣ ಪರಿಹಾರವಾಗಿದೆ)",
       "Routine documentation update (ಸಾಮಾನ್ಯ ದಸ್ತಾವೇಜು ನವೀಕರಣ)",
       "The agent tried to keep running after stop (ನಿಲ್ಲಿಸಿದ ನಂತರವೂ agent ಓಡಲು ಪ್ರಯತ್ನಿಸಿತು)",
       "A fraud campaign is using the assistant (ವಂಚನೆ ಅಭಿಯಾನ ಸಹಾಯಕ ಬಳಸುತ್ತಿದೆ)"
      ],
      "correct": 0
     },
     {
      "q": "Does an empty classification mean the deployment is safe?",
      "qKn": "ಖಾಲಿ ವರ್ಗೀಕರಣ ಎಂದರೆ ನಿಯೋಜನೆ ಸುರಕ್ಷಿತ ಎಂದೇ?",
      "opts": [
       "No, only that no configured phrase matched",
       "Yes",
       "Yes, if the report is pending",
       "Only for malicious use"
      ],
      "optsKn": [
       "ಇಲ್ಲ, ಯಾವುದೇ ಸಂರಚಿತ ಪದಗುಚ್ಛ ಹೊಂದಲಿಲ್ಲ ಎಂದಷ್ಟೇ",
       "ಹೌದು",
       "ವರದಿ ಬಾಕಿ ಇದ್ದರೆ ಹೌದು",
       "ದುರುಪಯೋಗಕ್ಕೆ ಮಾತ್ರ"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
