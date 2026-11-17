module.exports = {
 "phaseId": "6a369d6666020ed05b321622",
 "moduleId": "6a369d6666020ed05b321625",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Managed LLM Platforms (Part 3 of 3) — Observe, Attribute, Evaluate",
 "titleKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ಭಾಗ 3 / 3) — ಗಮನಿಸಿ, ಹಂಚಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ",
 "desc": "Build percentile tables and request-level attribution, redact logs and judge a fallback with intervals.",
 "descKn": "ಶತಮಾನಾಂಶ ಕೋಷ್ಟಕ ಮತ್ತು ವಿನಂತಿ-ಮಟ್ಟದ ಹಂಚಿಕೆ ನಿರ್ಮಿಸಿ, ಲಾಗ್ ಮರೆಮಾಚಿ ಮತ್ತು fallback ಅನ್ನು ಅಂತರಗಳಿಂದ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ.",
 "objectives": [
  "Group by provider and workload.",
  "Attribute cost by request.",
  "Reconcile with a bill.",
  "Redact before logging.",
  "Size a fallback evaluation."
 ],
 "objectivesKn": [
  "ಪೂರೈಕೆದಾರ ಮತ್ತು ಕೆಲಸದ ಮೂಲಕ ಗುಂಪು ಮಾಡಿ.",
  "ವಿನಂತಿಯಿಂದ ವೆಚ್ಚ ಹಂಚಿ.",
  "ಬಿಲ್‌ನೊಂದಿಗೆ ಹೊಂದಿಸಿ.",
  "ಲಾಗ್ ಮಾಡುವ ಮೊದಲು ಮರೆಮಾಚಿ.",
  "fallback ಮೌಲ್ಯಮಾಪನ ಗಾತ್ರ ನಿರ್ಧರಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Managed LLM Platforms (Part 3 of 3)",
    "textKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: percentile tables over simulated usage records, a workload-mix pitfall, request-level cost attribution in SQLite, billing reconciliation, log redaction, a fallback evaluation with Wilson intervals and a readiness check. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind managed LLM platforms (request latency and TTFT, percentiles, an M/M/1 queue, the break-even of a reservation, a two-provider gateway with capability and sensitivity routing, retries with backoff, a circuit breaker, deadlines, the duplicate-execution problem, percentile dashboards, request-level cost attribution, log redaction, fallback evaluation and a readiness check), not the real software, and the providers are simulators with scripted or seeded failures on a virtual clock, the latencies, prices, bills, usage records and evaluation counts are simulated or invented by the lab, no Bedrock, Azure OpenAI or Vertex AI call is made and nothing says a configuration is compliant, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in part, so the labs are our own implementation and the outputs were produced by running them. Parts 2 and 3 of the pasted lesson are cut off: Part 2 stops in section 11.4 on Bedrock attribution, so the Azure subscription and resource-group attribution, the Vertex AI project-per-team billing, the BigQuery billing-export analysis and the comparator walkthrough are missing, and Part 3 stops in section 14.2 on Vertex attribution and its code listing ends after the enumerations, so the Azure attribution, the production checklist, the final exercise and the quiz are missing. The checklist in the third lab is therefore our own teaching list. The lesson figures of about 50 ms against 75 ms TTFT, the 40 to 60 percent break-even band, the 21 to 50 dollars per hour range and every statement about Bedrock, Azure OpenAI, Vertex AI, PTUs, Gemini, IAM, BAA or HIPAA are cited and were not checked or measured here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ಸಿಮ್ಯುಲೇಟೆಡ್ ಬಳಕೆ ದಾಖಲೆಗಳ ಮೇಲೆ ಶತಮಾನಾಂಶ ಕೋಷ್ಟಕ, ಕೆಲಸ-ಮಿಶ್ರಣ ಬಲೆ, SQLite ನಲ್ಲಿ ವಿನಂತಿ-ಮಟ್ಟದ ವೆಚ್ಚ ಹಂಚಿಕೆ, ಬಿಲ್ಲಿಂಗ್ ಹೊಂದಾಣಿಕೆ, ಲಾಗ್ ಮರೆಮಾಚುವಿಕೆ, Wilson ಅಂತರಗಳೊಂದಿಗೆ fallback ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ವಿನಂತಿ ವಿಳಂಬ ಮತ್ತು TTFT, ಶತಮಾನಾಂಶಗಳು, M/M/1 ಸರದಿ, ಮೀಸಲಿನ ಸಮಭಾರ ಬಿಂದು, ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆ ರೂಟಿಂಗ್ ಇರುವ ಎರಡು-ಪೂರೈಕೆದಾರ gateway, backoff ಜೊತೆ ಮರುಪ್ರಯತ್ನ, circuit breaker, ಗಡುವುಗಳು, ನಕಲು-ಕಾರ್ಯಗತಗೊಳಿಕೆ ಸಮಸ್ಯೆ, ಶತಮಾನಾಂಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್, ವಿನಂತಿ-ಮಟ್ಟದ ವೆಚ್ಚ ಹಂಚಿಕೆ, ಲಾಗ್ ಮರೆಮಾಚುವಿಕೆ, fallback ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪೂರೈಕೆದಾರರು ವರ್ಚುವಲ್ ಗಡಿಯಾರದಲ್ಲಿ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಅಥವಾ seeded ವೈಫಲ್ಯಗಳಿರುವ ಸಿಮ್ಯುಲೇಟರ್‌ಗಳು, ವಿಳಂಬ, ಬೆಲೆ, ಬಿಲ್, ಬಳಕೆ ದಾಖಲೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಅನುಕರಿಸಿದೆ ಅಥವಾ ಕಲ್ಪಿಸಿದೆ, ಯಾವುದೇ Bedrock, Azure OpenAI ಅಥವಾ Vertex AI ಕರೆ ಮಾಡಿಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಸಂರಚನೆ ಅನುಸರಣೆಯದ್ದು ಎಂದು ಏನೂ ಹೇಳುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ಭಾಗಶಃ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಅಂಟಿಸಿದ lesson ನ ಭಾಗ 2 ಮತ್ತು 3 ಕತ್ತರಿಸಲ್ಪಟ್ಟಿವೆ: ಭಾಗ 2 ವಿಭಾಗ 11.4 ರಲ್ಲಿ Bedrock ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ, ಆದ್ದರಿಂದ Azure subscription ಮತ್ತು resource-group ಹಂಚಿಕೆ, Vertex AI project-per-team ಬಿಲ್ಲಿಂಗ್, BigQuery billing-export ವಿಶ್ಲೇಷಣೆ ಮತ್ತು comparator ವಿವರಣೆ ಕಾಣೆಯಾಗಿವೆ, ಮತ್ತು ಭಾಗ 3 ವಿಭಾಗ 14.2 ರಲ್ಲಿ Vertex ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಅದರ ಕೋಡ್ ಪಟ್ಟಿ enumerations ನಂತರ ಮುಗಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ Azure ಹಂಚಿಕೆ, ಉತ್ಪಾದನಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ, ಅಂತಿಮ ಅಭ್ಯಾಸ ಮತ್ತು ರಸಪ್ರಶ್ನೆ ಕಾಣೆಯಾಗಿವೆ. ಮೂರನೇ ಲ್ಯಾಬ್‌ನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಆದ್ದರಿಂದ ನಮ್ಮದೇ ಬೋಧನಾ ಪಟ್ಟಿ. ಸುಮಾರು 50 ms ವಿರುದ್ಧ 75 ms TTFT, 40 ರಿಂದ 60 ಶೇಕಡಾ ಸಮಭಾರ ಬ್ಯಾಂಡ್, ಗಂಟೆಗೆ 21 ರಿಂದ 50 ಡಾಲರ್ ವ್ಯಾಪ್ತಿ ಮತ್ತು Bedrock, Azure OpenAI, Vertex AI, PTU, Gemini, IAM, BAA ಅಥವಾ HIPAA ಬಗ್ಗೆ ಪ್ರತಿ ಹೇಳಿಕೆ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ ಅಥವಾ ಅಳೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Dashboard Number Is Only as Good as Its Grouping",
    "textKn": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸಂಖ್ಯೆ ಅದರ ಗುಂಪುಗಾರಿಕೆಯಷ್ಟೇ ಒಳ್ಳೆಯದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Percentiles, Attribution, Redaction and Fallback Quality",
    "headingKn": "ಶತಮಾನಾಂಶ, ಹಂಚಿಕೆ, ಮರೆಮಾಚುವಿಕೆ ಮತ್ತು Fallback ಗುಣಮಟ್ಟ",
    "bodyEn": "This part covers the observability and governance half of the lesson. It builds percentile tables by provider and workload and shows how mixing workloads can reverse a ranking, attributes a shared bill by request in an in-memory SQLite table with a GROUP BY and compares it with equal and request-count splits, reconciles an estimate with a bill that has an unattributed line, redacts prompts by pattern and shows what the patterns miss, asks how many evaluation items are needed before a fallback can be certified against the primary, and runs a twelve-item readiness check on a sample configuration. The lesson own checklist was not supplied, so the list is ours.",
    "bodyKn": "ಈ ಭಾಗ lesson ನ ಗಮನಿಸುವಿಕೆ ಮತ್ತು ಆಡಳಿತ ಅರ್ಧವನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ. ಇದು ಪೂರೈಕೆದಾರ ಮತ್ತು ಕೆಲಸದ ಮೂಲಕ ಶತಮಾನಾಂಶ ಕೋಷ್ಟಕ ನಿರ್ಮಿಸಿ ಕೆಲಸಗಳನ್ನು ಬೆರೆಸುವುದು ಶ್ರೇಣಿಯನ್ನು ಹೇಗೆ ಹಿಮ್ಮುಖಗೊಳಿಸಬಹುದು ತೋರಿಸುತ್ತದೆ, ಹಂಚಿದ ಬಿಲ್ ಅನ್ನು ಮೆಮೊರಿ SQLite ಟೇಬಲ್‌ನಲ್ಲಿ GROUP BY ನೊಂದಿಗೆ ವಿನಂತಿಯಿಂದ ಹಂಚಿ ಸಮಾನ ಮತ್ತು ವಿನಂತಿ-ಎಣಿಕೆ ಹಂಚಿಕೆಗಳೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಹಂಚದ ಸಾಲು ಇರುವ ಬಿಲ್‌ನೊಂದಿಗೆ ಅಂದಾಜು ಹೊಂದಿಸುತ್ತದೆ, ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಮಾದರಿಯಿಂದ ಮರೆಮಾಚಿ ಮಾದರಿಗಳು ಏನನ್ನು ತಪ್ಪಿಸುತ್ತವೆ ತೋರಿಸುತ್ತದೆ, fallback ಅನ್ನು ಪ್ರಾಥಮಿಕದ ವಿರುದ್ಧ ಪ್ರಮಾಣೀಕರಿಸುವ ಮೊದಲು ಎಷ್ಟು ಮೌಲ್ಯಮಾಪನ ಅಂಶ ಬೇಕು ಕೇಳುತ್ತದೆ, ಮತ್ತು ಮಾದರಿ ಸಂರಚನೆಯ ಮೇಲೆ ಹನ್ನೆರಡು-ಅಂಶ ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ಓಡಿಸುತ್ತದೆ. lesson ನ ಸ್ವಂತ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಒದಗಿಸಿರಲಿಲ್ಲ, ಆದ್ದರಿಂದ ಪಟ್ಟಿ ನಮ್ಮದು."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Observe, Attribute, Evaluate",
    "headingKn": "ಗಮನಿಸಿ, ಹಂಚಿ, ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">observability decides whether switching is safe</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">usage record</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">one row per request</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">percentiles</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by provider and workload</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">attribution</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">by tokens, not equal share</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">readiness</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a list of checks</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">observability decides whether switching is safe</text></svg>",
    "captionEn": "Per-request records make latency, cost and fallback quality answerable.",
    "captionKn": "ಪ್ರತಿ-ವಿನಂತಿ ದಾಖಲೆಗಳು ವಿಳಂಬ, ವೆಚ್ಚ ಮತ್ತು fallback ಗುಣಮಟ್ಟಕ್ಕೆ ಉತ್ತರಿಸುವಂತೆ ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The measurements",
    "headingKn": "ಮಾಪನಗಳು",
    "headers": [
     "Experiment",
     "Result in the lab"
    ],
    "rows": [
     [
      "mixed workloads",
      "provider A built 10 percent slower looked faster overall"
     ],
     [
      "attribution of a shared bill",
      "by tokens 42.5, 32.0 and 25.5 percent against 33.3 equal and 18.8, 6.2 and 75.0 by count"
     ],
     [
      "reconciliation",
      "estimate 63.21 against a bill of 67.64, 6.5 percent unattributed"
     ],
     [
      "redaction",
      "email, card and phone replaced, name and address missed"
     ],
     [
      "fallback evaluation",
      "95 from 90 needs 434 items, 95 from 93 needs 2210"
     ],
     [
      "readiness check",
      "9 of 12 pass"
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
    "filename": "mp_3.py",
    "headingEn": "Records, intervals, redaction and the checklist",
    "headingKn": "ದಾಖಲೆಗಳು, ಅಂತರಗಳು, ಮರೆಮಾಚುವಿಕೆ ಮತ್ತು ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
    "descEn": "make_records builds seeded usage rows, wilson gives an interval for a proportion, needed_n estimates items per model, redact replaces matched identifiers and CHECKLIST holds twelve checks over a configuration dictionary.",
    "descKn": "make_records seeded ಬಳಕೆ ಸಾಲುಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, wilson ಅನುಪಾತಕ್ಕೆ ಅಂತರ ನೀಡುತ್ತದೆ, needed_n ಪ್ರತಿ ಮಾದರಿಗೆ ಅಂಶಗಳನ್ನು ಅಂದಾಜಿಸುತ್ತದೆ, redact ಹೊಂದಿದ ಗುರುತುಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ ಮತ್ತು CHECKLIST ಸಂರಚನೆ ನಿಘಂಟಿನ ಮೇಲೆ ಹನ್ನೆರಡು ಪರಿಶೀಲನೆ ಹೊಂದಿದೆ.",
    "code": "def percentile(values, f):\r\n    o = sorted(values)\r\n    pos = f * (len(o) - 1)\r\n    lo, hi = math.floor(pos), math.ceil(pos)\r\n    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)\r\n\r\n\r\nBASE_MS = {\"classification\": 350, \"summarization\": 900}\r\n\r\n\r\ndef make_records(n, seed, mix, slow_factor):\r\n    rng = random.Random(seed)\r\n    out = []\r\n    for i in range(n):\r\n        wl = \"classification\" if rng.random() < mix else \"summarization\"\r\n        provider = \"A\"\r\n        out.append({\"provider\": provider, \"workload\": wl, \"team\": rng.choice([\"support\", \"engineering\", \"finance\"]),\r\n                    \"latency\": rng.lognormvariate(math.log(BASE_MS[wl] * slow_factor), 0.35)})\r\n    return out\r\n\r\n\r\ndef wilson(k, n, z=1.96):\r\n    p = k / n\r\n    d = 1 + z * z / n\r\n    c = (p + z * z / (2 * n)) / d\r\n    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d\r\n    return c - h, c + h\r\n\r\n\r\ndef needed_n(p1, p2, z_a=1.96, z_b=0.84):\r\n    pbar = (p1 + p2) / 2\r\n    return ((z_a * math.sqrt(2 * pbar * (1 - pbar)) + z_b * math.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) / (p1 - p2)) ** 2\r\n\r\n\r\nPATTERNS = {\"email\": re.compile(r\"[\\w.+-]+@[\\w-]+\\.[\\w.]+\"), \"card\": re.compile(r\"\\b(?:\\d[ -]*?){13,16}\\b\"), \"phone\": re.compile(r\"\\+?\\d[\\d\\s-]{8,}\\d\")}\r\n\r\n\r\ndef redact(text):\r\n    for name, pat in PATTERNS.items():\r\n        text = pat.sub(f\"[{name}]\", text)\r\n    return text\r\n\r\n\r\nCHECKLIST = [\r\n    (\"two usable provider paths\", lambda c: len(c[\"providers\"]) >= 2 and all(p[\"tested_last_30_days\"] for p in c[\"providers\"])),\r\n    (\"credentials come from managed identity\", lambda c: not c[\"hardcoded_keys\"]),\r\n    (\"least-privilege roles\", lambda c: c[\"roles_scoped\"]),\r\n    (\"data classes mapped to approved routes\", lambda c: c[\"sensitivity_policy\"]),\r\n    (\"fallback evaluated against a quality threshold\", lambda c: c[\"fallback_eval_passed\"]),\r\n    (\"retries capped with a total deadline\", lambda c: c[\"max_attempts\"] <= 3 and c[\"deadline_ms\"] > 0),\r\n    (\"circuit breaker configured\", lambda c: c[\"breaker\"]),\r\n    (\"tool calls idempotent\", lambda c: c[\"idempotency_keys\"]),\r\n    (\"prompts redacted before general logs\", lambda c: c[\"redaction\"]),\r\n    (\"percentile latency by provider and workload\", lambda c: c[\"percentile_dashboards\"]),\r\n    (\"cost attributed per request\", lambda c: c[\"request_level_attribution\"]),\r\n    (\"quota and capacity alarms\", lambda c: c[\"quota_alarms\"]),\r\n]"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mp_3.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs the percentile tables, the attribution, the reconciliation, the redaction, the fallback evaluation and the readiness check.",
    "descKn": "main() ಶತಮಾನಾಂಶ ಕೋಷ್ಟಕ, ಹಂಚಿಕೆ, ಹೊಂದಾಣಿಕೆ, ಮರೆಮಾಚುವಿಕೆ, fallback ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely measuring: percentiles by provider and workload, and the pitfall of a mixed workload\")\r\n    prov = {\"A\": make_records(5000, 1, mix=0.80, slow_factor=1.10), \"B\": make_records(5000, 2, mix=0.20, slow_factor=1.00)}\r\n    print(f\"{'provider':8} {'workload':15} {'P50':>7} {'P95':>7} {'P99':>7}\")\r\n    for p, recs in prov.items():\r\n        for wl in (\"classification\", \"summarization\"):\r\n            v = [r[\"latency\"] for r in recs if r[\"workload\"] == wl]\r\n            print(f\"{p:8} {wl:15} {percentile(v, .5):>7.0f} {percentile(v, .95):>7.0f} {percentile(v, .99):>7.0f}\")\r\n    for p, recs in prov.items():\r\n        v = [r[\"latency\"] for r in recs]\r\n        print(f\"{p:8} {'all requests':15} {percentile(v, .5):>7.0f} {percentile(v, .95):>7.0f} {percentile(v, .99):>7.0f}\")\r\n    print(\"provider A was built to be 10 percent slower than B on both workloads, yet on the combined numbers A looks much faster, because 80 percent of A's requests are short classifications and only 20 percent of B's are; a ranking has to compare the same workload, and the lognormal latencies are simulated and not measured\")\r\n\r\n    section(\"2. Genuinely computing: attribution by request against an equal split\")\r\n    db = sqlite3.connect(\":memory:\")\r\n    db.execute(\"CREATE TABLE usage (request_id INTEGER, team TEXT, product TEXT, input_tokens INTEGER, output_tokens INTEGER)\")\r\n    rng = random.Random(3)\r\n    rows = []\r\n    profile = {\"support\": (400, 100, 6000), \"engineering\": (2500, 700, 1500), \"finance\": (6000, 1500, 500)}\r\n    rid = 0\r\n    for team, (tin, tout, count) in profile.items():\r\n        for _ in range(count):\r\n            rid += 1\r\n            rows.append((rid, team, team + \"-assistant\", int(rng.gauss(tin, tin * .1)), int(rng.gauss(tout, tout * .1))))\r\n    db.executemany(\"INSERT INTO usage VALUES (?,?,?,?,?)\", rows)\r\n    P_IN, P_OUT = 3.0, 15.0\r\n    q = \"SELECT team, COUNT(*) AS requests, SUM(input_tokens / 1e6 * ? + output_tokens / 1e6 * ?) AS cost FROM usage GROUP BY team ORDER BY cost DESC\"\r\n    res = db.execute(q, (P_IN, P_OUT)).fetchall()\r\n    total = sum(r[2] for r in res)\r\n    print(f\"{'team':12} {'requests':>9} {'cost by request':>16} {'share':>7} {'equal split share':>18}\")\r\n    for team, cnt, cost in res:\r\n        print(f\"{team:12} {cnt:>9} {cost:>16.2f} {cost / total:>7.1%} {1 / 3:>18.1%}\")\r\n    counts = {t: c for t, c, _ in res}\r\n    print(\"split by request count instead:\", {t: f\"{c / sum(counts.values()):.1%}\" for t, c in counts.items()})\r\n    print(\"the same shared bill allocated by the tokens each request used puts 42.5 percent on engineering, 32.0 on finance and 25.5 on support, an equal split would charge each team 33.3 percent, and a split by request count would charge support 75 percent for 25.5 percent of the use and finance 6.2 percent for 32.0; the query is a GROUP BY like the lesson's illustration run on a toy table, and a real billing export has its own schema\")\r\n\r\n    section(\"3. Genuinely computing: reconciling an estimate with a bill\")\r\n    billed = total * 1.03 + total * 0.04\r\n    print(f\"estimated from tokens {total:.2f} | billed {billed:.2f} | difference {billed - total:.2f} = {(billed - total) / billed:.1%} of the bill\")\r\n    print(\"the estimate was 93.5 percent of a bill that carried a 3 percent price difference and a further 4 percent line that no request could be tied to, so an estimate is a way to attribute cost and the provider's bill stays the authority; the percentages are invented\")\r\n\r\n    section(\"4. Genuinely running: redacting prompts before they reach logs\")\r\n    samples = [\"Contact me at jane.doe@example.com about the refund\", \"Call +91 98765 43210 tomorrow\", \"Card 4111 1111 1111 1111 was charged twice\", \"My name is Jane Doe and I live at 12 Park Street\", \"Order 77 shipped on Monday\"]\r\n    for s in samples:\r\n        print(f\"{s!r:58} -> {redact(s)!r}\")\r\n    print(\"the email address, the phone number and the card number were replaced, while the name and the street address in the fourth line went through untouched and the order number was left alone, so pattern redaction catches structured identifiers and misses free-text personal data; it reduces what reaches a log and does not make a log safe\")\r\n\r\n    section(\"5. Genuinely computing: when is a fallback good enough\")\r\n    for name, k in ((\"primary\", 95), (\"fallback\", 82), (\"fallback B\", 90), (\"fallback C\", 93)):\r\n        lo, hi = wilson(k, 100)\r\n        print(f\"{name:11} {k}/100 correct | 95% interval [{lo:.3f}, {hi:.3f}]\")\r\n    print(\"tasks needed per model to tell 95 from 90 percent with about 80 percent power:\", math.ceil(needed_n(.95, .90)), \"| 95 from 93:\", math.ceil(needed_n(.95, .93)), \"| 95 from 82:\", math.ceil(needed_n(.95, .82)))\r\n    print(\"with 100 items the interval of the 90 percent fallback overlaps the primary's and the 82 percent one does not, and telling 95 from 90 reliably would take roughly 434 items per model while telling 95 from 93 would take about 2210 and 95 from 82 only 94, so a small evaluation set can show a clearly worse fallback and cannot certify a close one; the outcomes are invented counts\")\r\n\r\n    section(\"6. Genuinely running: a production-readiness check on a sample configuration\")\r\n    cfg = {\"providers\": [{\"name\": \"primary\", \"tested_last_30_days\": True}, {\"name\": \"secondary\", \"tested_last_30_days\": False}], \"hardcoded_keys\": False, \"roles_scoped\": True,\r\n           \"sensitivity_policy\": True, \"fallback_eval_passed\": False, \"max_attempts\": 3, \"deadline_ms\": 5000, \"breaker\": True, \"idempotency_keys\": True,\r\n           \"redaction\": True, \"percentile_dashboards\": True, \"request_level_attribution\": False, \"quota_alarms\": True}\r\n    results = [(n, f(cfg)) for n, f in CHECKLIST]\r\n    for n, ok in results:\r\n        print(f\"{'PASS' if ok else 'FAIL'}  {n}\")\r\n    print(f\"{sum(ok for _, ok in results)} of {len(results)} checks pass\")\r\n    print(\"nine of the twelve checks pass, and the three failures are a secondary provider that was not exercised in the last 30 days, a fallback that has not passed a quality evaluation and cost that is attributed per resource and not per request; the checklist is a teaching list and a passing configuration is not a finding of compliance\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: percentiles by provider and workload, and the pitfall of a mixed workload ---\nprovider workload            P50     P95     P99\nA        classification      382     681     854\nA        summarization       950    1716    2155\nB        classification      358     635     838\nB        summarization       897    1579    1988\nA        all requests        424    1204    1702\nB        all requests        803    1522    1923\nprovider A was built to be 10 percent slower than B on both workloads, yet on the combined numbers A looks much faster, because 80 percent of A's requests are short classifications and only 20 percent of B's are; a ranking has to compare the same workload, and the lognormal latencies are simulated and not measured\n\n--- 2. Genuinely computing: attribution by request against an equal split ---\nteam          requests  cost by request   share  equal split share\nengineering       1500            26.85   42.5%              33.3%\nfinance            500            20.21   32.0%              33.3%\nsupport           6000            16.15   25.5%              33.3%\nsplit by request count instead: {'engineering': '18.8%', 'finance': '6.2%', 'support': '75.0%'}\nthe same shared bill allocated by the tokens each request used puts 42.5 percent on engineering, 32.0 on finance and 25.5 on support, an equal split would charge each team 33.3 percent, and a split by request count would charge support 75 percent for 25.5 percent of the use and finance 6.2 percent for 32.0; the query is a GROUP BY like the lesson's illustration run on a toy table, and a real billing export has its own schema\n\n--- 3. Genuinely computing: reconciling an estimate with a bill ---\nestimated from tokens 63.21 | billed 67.64 | difference 4.42 = 6.5% of the bill\nthe estimate was 93.5 percent of a bill that carried a 3 percent price difference and a further 4 percent line that no request could be tied to, so an estimate is a way to attribute cost and the provider's bill stays the authority; the percentages are invented\n\n--- 4. Genuinely running: redacting prompts before they reach logs ---\n'Contact me at jane.doe@example.com about the refund'      -> 'Contact me at [email] about the refund'\n'Call +91 98765 43210 tomorrow'                            -> 'Call [phone] tomorrow'\n'Card 4111 1111 1111 1111 was charged twice'               -> 'Card [card] was charged twice'\n'My name is Jane Doe and I live at 12 Park Street'         -> 'My name is Jane Doe and I live at 12 Park Street'\n'Order 77 shipped on Monday'                               -> 'Order 77 shipped on Monday'\nthe email address, the phone number and the card number were replaced, while the name and the street address in the fourth line went through untouched and the order number was left alone, so pattern redaction catches structured identifiers and misses free-text personal data; it reduces what reaches a log and does not make a log safe\n\n--- 5. Genuinely computing: when is a fallback good enough ---\nprimary     95/100 correct | 95% interval [0.888, 0.978]\nfallback    82/100 correct | 95% interval [0.733, 0.883]\nfallback B  90/100 correct | 95% interval [0.826, 0.945]\nfallback C  93/100 correct | 95% interval [0.863, 0.966]\ntasks needed per model to tell 95 from 90 percent with about 80 percent power: 434 | 95 from 93: 2210 | 95 from 82: 94\nwith 100 items the interval of the 90 percent fallback overlaps the primary's and the 82 percent one does not, and telling 95 from 90 reliably would take roughly 434 items per model while telling 95 from 93 would take about 2210 and 95 from 82 only 94, so a small evaluation set can show a clearly worse fallback and cannot certify a close one; the outcomes are invented counts\n\n--- 6. Genuinely running: a production-readiness check on a sample configuration ---\nFAIL  two usable provider paths\nPASS  credentials come from managed identity\nPASS  least-privilege roles\nPASS  data classes mapped to approved routes\nFAIL  fallback evaluated against a quality threshold\nPASS  retries capped with a total deadline\nPASS  circuit breaker configured\nPASS  tool calls idempotent\nPASS  prompts redacted before general logs\nPASS  percentile latency by provider and workload\nFAIL  cost attributed per request\nPASS  quota and capacity alarms\n9 of 12 checks pass\nnine of the twelve checks pass, and the three failures are a secondary provider that was not exercised in the last 30 days, a fallback that has not passed a quality evaluation and cost that is attributed per resource and not per request; the checklist is a teaching list and a passing configuration is not a finding of compliance"
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
    "headingEn": "Genuinely Found: Percentiles and Attribution",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಶತಮಾನಾಂಶ ಮತ್ತು ಹಂಚಿಕೆ",
    "bodyEn": "Section 1: provider A was built 10 percent slower than B on both workloads, yet on all requests its P50 was 424 against 803 because 80 percent of its requests were short classifications. Section 2: a shared bill allocated by tokens charged engineering 42.5 percent, finance 32.0 and support 25.5, while an equal split charged 33.3 each and a split by request count charged support 75.0, engineering 18.8 and finance 6.2. Section 3: the estimate of 63.21 was 93.5 percent of a bill of 67.64, leaving 6.5 percent unattributed.",
    "bodyKn": "ವಿಭಾಗ 1: ಪೂರೈಕೆದಾರ A ಅನ್ನು ಎರಡೂ ಕೆಲಸಗಳಲ್ಲಿ B ಗಿಂತ 10 ಶೇಕಡಾ ನಿಧಾನವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿತ್ತು, ಆದರೂ ಎಲ್ಲಾ ವಿನಂತಿಗಳಲ್ಲಿ ಅದರ P50 803 ವಿರುದ್ಧ 424 ಆಗಿತ್ತು ಏಕೆಂದರೆ ಅದರ 80 ಶೇಕಡಾ ವಿನಂತಿಗಳು ಚಿಕ್ಕ ವರ್ಗೀಕರಣಗಳು. ವಿಭಾಗ 2: tokens ಮೂಲಕ ಹಂಚಿದ ಬಿಲ್ engineering ಗೆ 42.5 ಶೇಕಡಾ, finance ಗೆ 32.0 ಮತ್ತು support ಗೆ 25.5 ವಿಧಿಸಿತು, ಸಮಾನ ಹಂಚಿಕೆ ಪ್ರತಿಯೊಂದಕ್ಕೂ 33.3 ಮತ್ತು ವಿನಂತಿ ಎಣಿಕೆ ಹಂಚಿಕೆ support ಗೆ 75.0, engineering ಗೆ 18.8 ಮತ್ತು finance ಗೆ 6.2 ವಿಧಿಸಿತು. ವಿಭಾಗ 3: 63.21 ಅಂದಾಜು 67.64 ಬಿಲ್‌ನ 93.5 ಶೇಕಡಾ ಆಗಿದ್ದು 6.5 ಶೇಕಡಾ ಹಂಚದೆ ಉಳಿಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Redaction, Fallback Quality and Readiness",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಮರೆಮಾಚುವಿಕೆ, Fallback ಗುಣಮಟ್ಟ ಮತ್ತು ಸಿದ್ಧತೆ",
    "bodyEn": "Section 4: the email, the card number and the phone number were replaced, while a name and a street address passed through. Section 5: the Wilson interval was [0.888, 0.978] for the primary at 95 of 100, [0.733, 0.883] for 82, [0.826, 0.945] for 90 and [0.863, 0.966] for 93, and telling 95 from 90 needed 434 items per model, 95 from 93 needed 2210 and 95 from 82 needed 94. Section 6: 9 of 12 readiness checks passed and the three failures were an unexercised secondary provider, an unevaluated fallback and per-resource cost attribution.",
    "bodyKn": "ವಿಭಾಗ 4: ಇಮೇಲ್, ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ಮತ್ತು ಫೋನ್ ಸಂಖ್ಯೆ ಬದಲಿಸಲ್ಪಟ್ಟವು, ಹೆಸರು ಮತ್ತು ರಸ್ತೆ ವಿಳಾಸ ಹಾದುಹೋದವು. ವಿಭಾಗ 5: Wilson ಅಂತರ 100 ರಲ್ಲಿ 95 ಇರುವ ಪ್ರಾಥಮಿಕಕ್ಕೆ [0.888, 0.978], 82 ಕ್ಕೆ [0.733, 0.883], 90 ಕ್ಕೆ [0.826, 0.945] ಮತ್ತು 93 ಕ್ಕೆ [0.863, 0.966], ಮತ್ತು 95 ಅನ್ನು 90 ರಿಂದ ಬೇರ್ಪಡಿಸಲು ಪ್ರತಿ ಮಾದರಿಗೆ 434 ಅಂಶ, 95 ವರ್ಸಸ್ 93 ಗೆ 2210 ಮತ್ತು 95 ವರ್ಸಸ್ 82 ಗೆ 94 ಬೇಕಾದವು. ವಿಭಾಗ 6: 12 ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆಗಳಲ್ಲಿ 9 ಪಾಸ್ ಆದವು ಮತ್ತು ಮೂರು ವೈಫಲ್ಯಗಳು ಪರೀಕ್ಷಿಸದ ದ್ವಿತೀಯ ಪೂರೈಕೆದಾರ, ಮೌಲ್ಯಮಾಪನ ಮಾಡದ fallback ಮತ್ತು ಪ್ರತಿ-ಸಂಪನ್ಮೂಲ ವೆಚ್ಚ ಹಂಚಿಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A ranking, a cost share and a fallback decision all depend on how requests are grouped and how many were observed, so the grouping and the sample size have to be part of the answer.",
    "bodyKn": "ಶ್ರೇಣಿ, ವೆಚ್ಚ ಪಾಲು ಮತ್ತು fallback ನಿರ್ಧಾರ ಎಲ್ಲವೂ ವಿನಂತಿಗಳನ್ನು ಹೇಗೆ ಗುಂಪು ಮಾಡಲಾಗಿದೆ ಮತ್ತು ಎಷ್ಟು ಗಮನಿಸಲಾಗಿದೆ ಎಂಬುದನ್ನು ಅವಲಂಬಿಸಿವೆ, ಆದ್ದರಿಂದ ಗುಂಪುಗಾರಿಕೆ ಮತ್ತು ಮಾದರಿ ಗಾತ್ರ ಉತ್ತರದ ಭಾಗವಾಗಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a lower overall P50 means a faster provider.\" Provider A was slower on both workloads and still looked faster overall.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಕಡಿಮೆ ಒಟ್ಟಾರೆ P50 ಎಂದರೆ ವೇಗದ ಪೂರೈಕೆದಾರ.\" ಪೂರೈಕೆದಾರ A ಎರಡೂ ಕೆಲಸಗಳಲ್ಲಿ ನಿಧಾನವಾಗಿದ್ದರೂ ಒಟ್ಟಾರೆ ವೇಗವಾಗಿ ಕಂಡಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Attribution: tying cost to the team or request that caused it. Wilson interval: a confidence interval for a proportion. Redaction: replacing sensitive text before it is logged. Reconciliation: comparing an estimate with a bill.",
    "bodyKn": "ಹಂಚಿಕೆ: ವೆಚ್ಚವನ್ನು ಅದನ್ನು ಉಂಟುಮಾಡಿದ ತಂಡ ಅಥವಾ ವಿನಂತಿಗೆ ಜೋಡಿಸುವುದು. Wilson ಅಂತರ: ಅನುಪಾತಕ್ಕೆ ವಿಶ್ವಾಸ ಅಂತರ. ಮರೆಮಾಚುವಿಕೆ: ಲಾಗ್ ಮಾಡುವ ಮೊದಲು ಸೂಕ್ಷ್ಮ ಪಠ್ಯ ಬದಲಿಸುವುದು. ಹೊಂದಾಣಿಕೆ: ಅಂದಾಜನ್ನು ಬಿಲ್‌ನೊಂದಿಗೆ ಹೋಲಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A slower provider looked faster on a different mix. 2) Splitting by request count would have charged support 75 percent. 3) 6.5 percent of the bill could not be tied to requests. 4) Redaction missed a name and an address. 5) 95 against 93 would need 2210 items per model.",
    "bodyKn": "1) ನಿಧಾನ ಪೂರೈಕೆದಾರ ಬೇರೆ ಮಿಶ್ರಣದಲ್ಲಿ ವೇಗವಾಗಿ ಕಂಡಿತು. 2) ವಿನಂತಿ ಎಣಿಕೆಯಿಂದ ಹಂಚಿದ್ದರೆ support ಗೆ 75 ಶೇಕಡಾ ವಿಧಿಸಲಾಗುತ್ತಿತ್ತು. 3) ಬಿಲ್‌ನ 6.5 ಶೇಕಡಾ ವಿನಂತಿಗಳಿಗೆ ಜೋಡಿಸಲಾಗಲಿಲ್ಲ. 4) ಮರೆಮಾಚುವಿಕೆ ಹೆಸರು ಮತ್ತು ವಿಳಾಸ ತಪ್ಪಿಸಿತು. 5) 95 ವಿರುದ್ಧ 93 ಗೆ ಪ್ರತಿ ಮಾದರಿಗೆ 2210 ಅಂಶ ಬೇಕು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many evaluation items per model were needed to tell 95 from 90 percent with about 80 percent power?",
      "qKn": "ಸುಮಾರು 80 ಶೇಕಡಾ ಶಕ್ತಿಯೊಂದಿಗೆ 95 ಅನ್ನು 90 ಶೇಕಡಾದಿಂದ ಬೇರ್ಪಡಿಸಲು ಪ್ರತಿ ಮಾದರಿಗೆ ಎಷ್ಟು ಮೌಲ್ಯಮಾಪನ ಅಂಶ ಬೇಕಾಯಿತು?",
      "opts": [
       "434",
       "100",
       "94",
       "2210"
      ],
      "optsKn": [
       "434",
       "100",
       "94",
       "2210"
      ],
      "correct": 0
     },
     {
      "q": "What share of the shared bill did support carry when it was split by request count?",
      "qKn": "ವಿನಂತಿ ಎಣಿಕೆಯಿಂದ ಹಂಚಿದಾಗ support ಎಷ್ಟು ಪಾಲು ಹೊತ್ತಿತು?",
      "opts": [
       "75.0 percent",
       "25.5 percent",
       "33.3 percent",
       "6.2 percent"
      ],
      "optsKn": [
       "75.0 ಶೇಕಡಾ",
       "25.5 ಶೇಕಡಾ",
       "33.3 ಶೇಕಡಾ",
       "6.2 ಶೇಕಡಾ"
      ],
      "correct": 0
     },
     {
      "q": "How many of the twelve readiness checks passed?",
      "qKn": "ಹನ್ನೆರಡು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆಗಳಲ್ಲಿ ಎಷ್ಟು ಪಾಸ್ ಆದವು?",
      "opts": [
       "9",
       "12",
       "6",
       "3"
      ],
      "optsKn": [
       "9",
       "12",
       "6",
       "3"
      ],
      "correct": 0
     },
     {
      "q": "What did the redaction patterns miss?",
      "qKn": "ಮರೆಮಾಚುವಿಕೆ ಮಾದರಿಗಳು ಏನನ್ನು ತಪ್ಪಿಸಿದವು?",
      "opts": [
       "A name and a street address in free text",
       "The email address",
       "The card number",
       "The phone number"
      ],
      "optsKn": [
       "ಮುಕ್ತ ಪಠ್ಯದಲ್ಲಿ ಹೆಸರು ಮತ್ತು ರಸ್ತೆ ವಿಳಾಸ",
       "ಇಮೇಲ್ ವಿಳಾಸ",
       "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
       "ಫೋನ್ ಸಂಖ್ಯೆ"
      ],
      "correct": 0
     },
     {
      "q": "Why did provider A look faster overall although it was built 10 percent slower per workload?",
      "qKn": "ಪ್ರತಿ ಕೆಲಸಕ್ಕೆ 10 ಶೇಕಡಾ ನಿಧಾನವಾಗಿ ನಿರ್ಮಿಸಿದ್ದರೂ ಪೂರೈಕೆದಾರ A ಒಟ್ಟಾರೆ ವೇಗವಾಗಿ ಏಕೆ ಕಂಡಿತು?",
      "opts": [
       "Most of its requests were short classifications",
       "It really was faster",
       "It had a breaker",
       "It used a reservation"
      ],
      "optsKn": [
       "ಅದರ ಹೆಚ್ಚಿನ ವಿನಂತಿಗಳು ಚಿಕ್ಕ ವರ್ಗೀಕರಣಗಳು",
       "ಅದು ನಿಜವಾಗಿಯೂ ವೇಗವಾಗಿತ್ತು",
       "ಅದಕ್ಕೆ breaker ಇತ್ತು",
       "ಅದು ಮೀಸಲು ಬಳಸಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
