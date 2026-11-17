module.exports = {
 "phaseId": "6a369d6666020ed05b321622",
 "moduleId": "6a369d6666020ed05b321625",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Managed LLM Platforms (Part 1 of 3) — Latency, Queues and Break-Even",
 "titleKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ಭಾಗ 1 / 3) — ವಿಳಂಬ, ಸರದಿಗಳು ಮತ್ತು ಸಮಭಾರ",
 "desc": "Compute request latency, percentiles, queueing delay and the break-even of a capacity reservation.",
 "descKn": "ವಿನಂತಿ ವಿಳಂಬ, ಶತಮಾನಾಂಶ, ಸರದಿ ವಿಳಂಬ ಮತ್ತು ಸಾಮರ್ಥ್ಯ ಮೀಸಲಿನ ಸಮಭಾರ ಲೆಕ್ಕ ಹಾಕಿ.",
 "objectives": [
  "Add up request stages.",
  "Read P95 and P99.",
  "Check a queue formula.",
  "Find a break-even.",
  "Compare reservation plans."
 ],
 "objectivesKn": [
  "ವಿನಂತಿ ಹಂತಗಳನ್ನು ಕೂಡಿಸಿ.",
  "P95 ಮತ್ತು P99 ಓದಿ.",
  "ಸರದಿ ಸೂತ್ರ ಪರಿಶೀಲಿಸಿ.",
  "ಸಮಭಾರ ಕಂಡುಹಿಡಿಯಿರಿ.",
  "ಮೀಸಲು ಯೋಜನೆ ಹೋಲಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Managed LLM Platforms (Part 1 of 3)",
    "textKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: the latency arithmetic of a request, median against P95 and P99, an M/M/1 queue checked against a seeded simulation, the break-even utilisation of a reservation, the effective cost of an under-used reservation and a reserve-the-base comparison on an hourly profile. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind managed LLM platforms (request latency and TTFT, percentiles, an M/M/1 queue, the break-even of a reservation, a two-provider gateway with capability and sensitivity routing, retries with backoff, a circuit breaker, deadlines, the duplicate-execution problem, percentile dashboards, request-level cost attribution, log redaction, fallback evaluation and a readiness check), not the real software, and the providers are simulators with scripted or seeded failures on a virtual clock, the latencies, prices, bills, usage records and evaluation counts are simulated or invented by the lab, no Bedrock, Azure OpenAI or Vertex AI call is made and nothing says a configuration is compliant, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in part, so the labs are our own implementation and the outputs were produced by running them. Parts 2 and 3 of the pasted lesson are cut off: Part 2 stops in section 11.4 on Bedrock attribution, so the Azure subscription and resource-group attribution, the Vertex AI project-per-team billing, the BigQuery billing-export analysis and the comparator walkthrough are missing, and Part 3 stops in section 14.2 on Vertex attribution and its code listing ends after the enumerations, so the Azure attribution, the production checklist, the final exercise and the quiz are missing. The checklist in the third lab is therefore our own teaching list. The lesson figures of about 50 ms against 75 ms TTFT, the 40 to 60 percent break-even band, the 21 to 50 dollars per hour range and every statement about Bedrock, Azure OpenAI, Vertex AI, PTUs, Gemini, IAM, BAA or HIPAA are cited and were not checked or measured here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: ವಿನಂತಿಯ ವಿಳಂಬ ಅಂಕಗಣಿತ, ಮಧ್ಯಾಂಕ ಮತ್ತು P95 ಹಾಗೂ P99, seeded ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸಿದ M/M/1 ಸರದಿ, ಮೀಸಲಿನ ಸಮಭಾರ ಬಳಕೆ, ಕಡಿಮೆ ಬಳಸಿದ ಮೀಸಲಿನ ಪರಿಣಾಮಕಾರಿ ವೆಚ್ಚ ಮತ್ತು ಗಂಟೆ ಪ್ರೊಫೈಲ್‌ನಲ್ಲಿ ಆಧಾರ-ಮೀಸಲು ಹೋಲಿಕೆ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ವಿನಂತಿ ವಿಳಂಬ ಮತ್ತು TTFT, ಶತಮಾನಾಂಶಗಳು, M/M/1 ಸರದಿ, ಮೀಸಲಿನ ಸಮಭಾರ ಬಿಂದು, ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆ ರೂಟಿಂಗ್ ಇರುವ ಎರಡು-ಪೂರೈಕೆದಾರ gateway, backoff ಜೊತೆ ಮರುಪ್ರಯತ್ನ, circuit breaker, ಗಡುವುಗಳು, ನಕಲು-ಕಾರ್ಯಗತಗೊಳಿಕೆ ಸಮಸ್ಯೆ, ಶತಮಾನಾಂಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್, ವಿನಂತಿ-ಮಟ್ಟದ ವೆಚ್ಚ ಹಂಚಿಕೆ, ಲಾಗ್ ಮರೆಮಾಚುವಿಕೆ, fallback ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪೂರೈಕೆದಾರರು ವರ್ಚುವಲ್ ಗಡಿಯಾರದಲ್ಲಿ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಅಥವಾ seeded ವೈಫಲ್ಯಗಳಿರುವ ಸಿಮ್ಯುಲೇಟರ್‌ಗಳು, ವಿಳಂಬ, ಬೆಲೆ, ಬಿಲ್, ಬಳಕೆ ದಾಖಲೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಅನುಕರಿಸಿದೆ ಅಥವಾ ಕಲ್ಪಿಸಿದೆ, ಯಾವುದೇ Bedrock, Azure OpenAI ಅಥವಾ Vertex AI ಕರೆ ಮಾಡಿಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಸಂರಚನೆ ಅನುಸರಣೆಯದ್ದು ಎಂದು ಏನೂ ಹೇಳುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ಭಾಗಶಃ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಅಂಟಿಸಿದ lesson ನ ಭಾಗ 2 ಮತ್ತು 3 ಕತ್ತರಿಸಲ್ಪಟ್ಟಿವೆ: ಭಾಗ 2 ವಿಭಾಗ 11.4 ರಲ್ಲಿ Bedrock ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ, ಆದ್ದರಿಂದ Azure subscription ಮತ್ತು resource-group ಹಂಚಿಕೆ, Vertex AI project-per-team ಬಿಲ್ಲಿಂಗ್, BigQuery billing-export ವಿಶ್ಲೇಷಣೆ ಮತ್ತು comparator ವಿವರಣೆ ಕಾಣೆಯಾಗಿವೆ, ಮತ್ತು ಭಾಗ 3 ವಿಭಾಗ 14.2 ರಲ್ಲಿ Vertex ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಅದರ ಕೋಡ್ ಪಟ್ಟಿ enumerations ನಂತರ ಮುಗಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ Azure ಹಂಚಿಕೆ, ಉತ್ಪಾದನಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ, ಅಂತಿಮ ಅಭ್ಯಾಸ ಮತ್ತು ರಸಪ್ರಶ್ನೆ ಕಾಣೆಯಾಗಿವೆ. ಮೂರನೇ ಲ್ಯಾಬ್‌ನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಆದ್ದರಿಂದ ನಮ್ಮದೇ ಬೋಧನಾ ಪಟ್ಟಿ. ಸುಮಾರು 50 ms ವಿರುದ್ಧ 75 ms TTFT, 40 ರಿಂದ 60 ಶೇಕಡಾ ಸಮಭಾರ ಬ್ಯಾಂಡ್, ಗಂಟೆಗೆ 21 ರಿಂದ 50 ಡಾಲರ್ ವ್ಯಾಪ್ತಿ ಮತ್ತು Bedrock, Azure OpenAI, Vertex AI, PTU, Gemini, IAM, BAA ಅಥವಾ HIPAA ಬಗ್ಗೆ ಪ್ರತಿ ಹೇಳಿಕೆ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ ಅಥವಾ ಅಳೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Median Hides the Tail and a Reservation Hides Idle Time",
    "textKn": "ಮಧ್ಯಾಂಕ ಬಾಲ ಮರೆಮಾಡುತ್ತದೆ ಮತ್ತು ಮೀಸಲು ಖಾಲಿ ಸಮಯ ಮರೆಮಾಡುತ್ತದೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Latency Arithmetic, Queueing and Break-Even",
    "headingKn": "ವಿಳಂಬ ಅಂಕಗಣಿತ, ಸರದಿ ಮತ್ತು ಸಮಭಾರ",
    "bodyEn": "This part turns the lesson latency and cost discussion into arithmetic you can run. It adds up the stages of a request and the completion time of a long answer, computes percentiles on a skewed simulated sample, checks the M/M/1 formula for time in the system against a seeded simulation at four loads, derives the break-even utilisation of a reservation as the reserved price over the full-use on-demand price, shows that an under-used reservation multiplies the price of each unit of work, and compares reserving the peak, reserving the average and reserving the base on the lesson hourly request profile. No cloud platform is measured and the lesson price examples are illustrative.",
    "bodyKn": "ಈ ಭಾಗ lesson ನ ವಿಳಂಬ ಮತ್ತು ವೆಚ್ಚ ಚರ್ಚೆಯನ್ನು ಓಡಿಸಬಹುದಾದ ಅಂಕಗಣಿತವಾಗಿ ಬದಲಿಸುತ್ತದೆ. ಇದು ವಿನಂತಿಯ ಹಂತಗಳನ್ನು ಮತ್ತು ದೀರ್ಘ ಉತ್ತರದ ಪೂರ್ಣಗೊಳ್ಳುವ ಸಮಯವನ್ನು ಕೂಡಿಸುತ್ತದೆ, ಓರೆಯಾದ ಸಿಮ್ಯುಲೇಟೆಡ್ ಮಾದರಿಯಲ್ಲಿ ಶತಮಾನಾಂಶ ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ, ವ್ಯವಸ್ಥೆಯಲ್ಲಿನ ಸಮಯಕ್ಕೆ M/M/1 ಸೂತ್ರವನ್ನು ನಾಲ್ಕು ಭಾರಗಳಲ್ಲಿ seeded ಸಿಮ್ಯುಲೇಶನ್ ವಿರುದ್ಧ ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮೀಸಲಿನ ಸಮಭಾರ ಬಳಕೆಯನ್ನು ಮೀಸಲು ಬೆಲೆ ಭಾಗಿಸು ಪೂರ್ಣ-ಬಳಕೆ ಆನ್-ಡಿಮ್ಯಾಂಡ್ ಬೆಲೆ ಎಂದು ಪಡೆಯುತ್ತದೆ, ಕಡಿಮೆ ಬಳಸಿದ ಮೀಸಲು ಪ್ರತಿ ಕೆಲಸ ಘಟಕದ ಬೆಲೆ ಗುಣಿಸುತ್ತದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಮತ್ತು lesson ನ ಗಂಟೆ ವಿನಂತಿ ಪ್ರೊಫೈಲ್‌ನಲ್ಲಿ ಗರಿಷ್ಠ ಮೀಸಲು, ಸರಾಸರಿ ಮೀಸಲು ಮತ್ತು ಆಧಾರ ಮೀಸಲು ಹೋಲಿಸುತ್ತದೆ. ಯಾವ ಕ್ಲೌಡ್ ವೇದಿಕೆಯನ್ನೂ ಅಳೆಯಲಾಗಿಲ್ಲ ಮತ್ತು lesson ಬೆಲೆ ಉದಾಹರಣೆಗಳು ವಿವರಣಾತ್ಮಕ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Latency, Queues and Reservations",
    "headingKn": "ವಿಳಂಬ, ಸರದಿಗಳು ಮತ್ತು ಮೀಸಲುಗಳು",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">speed, tail and cost are different questions</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">TTFT</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">first token</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">tail</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">P95 and P99</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">queue</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">delay grows with load</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">reserve</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">break-even R over V</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">speed, tail and cost are different questions</text></svg>",
    "captionEn": "A fast first token, a bounded tail and a fair price are three separate measurements.",
    "captionKn": "ವೇಗದ ಮೊದಲ token, ಮಿತಿಯೊಳಗಿನ ಬಾಲ ಮತ್ತು ನ್ಯಾಯಯುತ ಬೆಲೆ ಮೂರು ಬೇರೆ ಮಾಪನಗಳು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The numbers",
    "headingKn": "ಸಂಖ್ಯೆಗಳು",
    "headers": [
     "Item",
     "Value in the lab"
    ],
    "rows": [
     [
      "five stages of one request",
      "20 + 15 + 65 + 2000 + 30 = 2130 ms"
     ],
     [
      "500 tokens at 30 ms after a 100 ms TTFT",
      "15070 ms"
     ],
     [
      "M/M/1 at 80 and 95 per second against 100",
      "W = 0.05 s and 0.2 s"
     ],
     [
      "reserved 6,00,000 against 12,00,000 on demand",
      "break-even 50 percent"
     ],
     [
      "reservation used at 20 percent",
      "each unit of work costs 5 times the full-use price"
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
    "filename": "mp_1.py",
    "headingEn": "Percentiles, queue simulation, break-even and plan cost",
    "headingKn": "ಶತಮಾನಾಂಶ, ಸರದಿ ಸಿಮ್ಯುಲೇಶನ್, ಸಮಭಾರ ಮತ್ತು ಯೋಜನೆ ವೆಚ್ಚ",
    "descEn": "percentile interpolates a sorted sample, mm1_sojourn_simulated runs a Lindley recursion with exponential arrivals and service, breakeven returns R over V and plan_cost prices a reserved base plus on-demand overflow.",
    "descKn": "percentile ವಿಂಗಡಿಸಿದ ಮಾದರಿಯನ್ನು ಅಂತರ್ವೇಶಿಸುತ್ತದೆ, mm1_sojourn_simulated ಘಾತೀಯ ಆಗಮನ ಮತ್ತು ಸೇವೆಯೊಂದಿಗೆ Lindley ಪುನರಾವರ್ತನೆ ಓಡಿಸುತ್ತದೆ, breakeven R ಭಾಗಿಸು V ಹಿಂತಿರುಗಿಸುತ್ತದೆ ಮತ್ತು plan_cost ಮೀಸಲು ಆಧಾರ ಜೊತೆ ಆನ್-ಡಿಮ್ಯಾಂಡ್ ಉಕ್ಕುವಿಕೆಗೆ ಬೆಲೆ ಕಟ್ಟುತ್ತದೆ.",
    "code": "def percentile(values, f):\r\n    o = sorted(values)\r\n    pos = f * (len(o) - 1)\r\n    lo, hi = math.floor(pos), math.ceil(pos)\r\n    return o[lo] * (1 - (pos - lo)) + o[hi] * (pos - lo)\r\n\r\n\r\ndef mm1_sojourn_simulated(lam, mu, n=400000, seed=5):\r\n    rng = random.Random(seed)\r\n    wait = 0.0\r\n    total = 0.0\r\n    for _ in range(n):\r\n        service = rng.expovariate(mu)\r\n        total += wait + service\r\n        wait = max(0.0, wait + service - rng.expovariate(lam))\r\n    return total / n\r\n\r\n\r\ndef breakeven(reserved, on_demand_full):\r\n    return reserved / on_demand_full\r\n\r\n\r\nHOURLY = [200, 500, 1000, 1200, 1300, 1250, 1100, 1000, 900, 600]\r\n\r\n\r\ndef plan_cost(base, demand, c_reserved, c_on_demand):\r\n    return sum(c_reserved * base + c_on_demand * max(0, d - base) for d in demand)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mp_1.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() adds up request stages, measures percentiles, compares the queue formula with a simulation, tabulates the break-even and compares three reservation plans.",
    "descKn": "main() ವಿನಂತಿ ಹಂತಗಳನ್ನು ಕೂಡಿಸಿ, ಶತಮಾನಾಂಶ ಅಳೆದು, ಸರದಿ ಸೂತ್ರವನ್ನು ಸಿಮ್ಯುಲೇಶನ್‌ನೊಂದಿಗೆ ಹೋಲಿಸಿ, ಸಮಭಾರ ಕೋಷ್ಟಕ ಮಾಡಿ ಮತ್ತು ಮೂರು ಮೀಸಲು ಯೋಜನೆ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely computing: the arithmetic of one request\")\r\n    stages = {\"network and application\": 20, \"scheduling\": 15, \"prefill and first token\": 65, \"remaining token generation\": 2000, \"final delivery\": 30}\r\n    print(stages, \"| total:\", sum(stages.values()), \"ms\")\r\n    ttft, n, itl = 100, 500, 30\r\n    print(f\"completion time with TTFT {ttft} ms, {n} tokens, {itl} ms between tokens: {ttft + (n - 1) * itl} ms | decode speed {1000 / itl:.2f} tokens per second\")\r\n    print(\"the five stages add up to 2130 ms and the first token arrives long before that, and a 100 ms TTFT with 500 tokens at 30 ms each finishes after 15070 ms, so a fast first token and a fast finish are different measurements; the formula assumes a constant gap between tokens, which a real serving system does not have\")\r\n\r\n    section(\"2. Genuinely measuring: median, P95 and P99 on a skewed distribution\")\r\n    print(\"median of 40, 45, 48, 50, 55, 60, 70:\", percentile([40, 45, 48, 50, 55, 60, 70], 0.5), \"ms\")\r\n    rng = random.Random(11)\r\n    lat = [rng.lognormvariate(math.log(50), 0.6) for _ in range(100000)]\r\n    print(f\"100000 simulated TTFTs: mean {sum(lat) / len(lat):.1f} | P50 {percentile(lat, .5):.1f} | P95 {percentile(lat, .95):.1f} | P99 {percentile(lat, .99):.1f} ms\")\r\n    print(\"requests above the P99 value out of a million:\", int(1_000_000 * 0.01))\r\n    print(\"the median of the seven values is 50, and the skewed simulated sample has a median near 50 ms, a mean of 59.8, a P95 of 134.0 that is about 2.7 times the median and a P99 of 202.9 that is about 4 times it, so a median alone hides the slow tail; one percent of a million requests is 10000 users, and the lognormal shape is the lab's assumption and not a measurement of any provider\")\r\n\r\n    section(\"3. Genuinely measuring: an M/M/1 queue against its formula\")\r\n    print(f\"{'arrival rate':>12} {'utilisation':>12} {'formula W':>10} {'simulated W':>12}\")\r\n    for lam in (50, 80, 90, 95):\r\n        print(f\"{lam:>12} {lam / 100:>12.2f} {1 / (100 - lam):>10.4f} {mm1_sojourn_simulated(lam, 100):>12.4f}\")\r\n    print(\"at 80 requests per second against a capacity of 100 the expected time in the system is 0.05 s and at 95 it is 0.2 s, a fourfold rise for a fifteen-point rise in utilisation, and the simulation agrees with the formula to within about 3 percent at the highest load; a real inference service is not a single M/M/1 queue, so this shows only why delay grows faster than load\")\r\n\r\n    section(\"4. Genuinely computing: break-even utilisation u = R / V\")\r\n    for r, v in ((6_00_000, 12_00_000), (4_80_000, 12_00_000), (7_20_000, 12_00_000)):\r\n        print(f\"reserved {r:>9,} against on-demand {v:,} at full use: break-even {breakeven(r, v):.0%}\")\r\n    print(f\"{'utilisation':>11} {'on-demand equivalent':>21} {'reserved':>10} cheaper\")\r\n    for u in (0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1.0):\r\n        od = 12_00_000 * u\r\n        print(f\"{u:>11.0%} {od:>21,.0f} {6_00_000:>10,} {'on-demand' if od < 6_00_000 else 'break-even' if od == 6_00_000 else 'reserved'}\")\r\n    print(\"1000 per hour for 720 hours is\", 1000 * 720, \"| 30 dollars per hour for 720 hours is\", 30 * 720)\r\n    print(\"effective cost per unit of use at 20 percent utilisation is\", f\"{1 / 0.2:.0f}\", \"times the full-use price\")\r\n    print(\"with a reservation of half the full-use on-demand cost the break-even is 50 percent, a cheaper reservation moves it down to 40 percent and a dearer one up to 60 percent, which is the arithmetic behind a 40 to 60 percent band, and at 20 percent utilisation each unit of work costs five times what it would at full use; the lesson's price examples are illustrative and the linear model ignores minimum commitments and token charges\")\r\n\r\n    section(\"5. Genuinely computing: how much to reserve for a changing day\")\r\n    print(\"hourly requests per minute from the lesson:\", HOURLY, \"| average\", sum(HOURLY) / len(HOURLY), \"| peak\", max(HOURLY))\r\n    avg = sum(HOURLY) / len(HOURLY)\r\n    for label, cap in ((\"reserve the peak\", max(HOURLY)), (\"reserve the average\", avg)):\r\n        over = sum(1 for d in HOURLY if d > cap)\r\n        print(f\"{label:20} capacity {cap:7.1f} | average utilisation {avg / cap:.0%} | hours above capacity {over} of {len(HOURLY)}\")\r\n    c_r, c_o = 1.0, 2.0\r\n    best = min(range(0, 1401, 50), key=lambda b: plan_cost(b, HOURLY, c_r, c_o))\r\n    print(f\"reservation costs {c_r} per unit-hour and on-demand {c_o}, so the break-even is {c_r / c_o:.0%}\")\r\n    for b in (0, 400, 900, best, 1300):\r\n        print(f\"  reserve {b:5}: cost {plan_cost(b, HOURLY, c_r, c_o):9.0f}{'  <- lowest on this grid' if b == best else ''}\")\r\n    print(\"reserving the peak keeps the average utilisation near 70 percent but pays for idle capacity most hours, reserving the average leaves 6 of 10 hours above it, and with an on-demand price twice the reserved price the cheapest plan on the grid reserves 1000, a level that demand exceeds in 4 of the 10 hours, just under the half that the price ratio sets; the profile is the lesson's and the prices are invented, and a real quote has minimum terms\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely computing: the arithmetic of one request ---\n{'network and application': 20, 'scheduling': 15, 'prefill and first token': 65, 'remaining token generation': 2000, 'final delivery': 30} | total: 2130 ms\ncompletion time with TTFT 100 ms, 500 tokens, 30 ms between tokens: 15070 ms | decode speed 33.33 tokens per second\nthe five stages add up to 2130 ms and the first token arrives long before that, and a 100 ms TTFT with 500 tokens at 30 ms each finishes after 15070 ms, so a fast first token and a fast finish are different measurements; the formula assumes a constant gap between tokens, which a real serving system does not have\n\n--- 2. Genuinely measuring: median, P95 and P99 on a skewed distribution ---\nmedian of 40, 45, 48, 50, 55, 60, 70: 50.0 ms\n100000 simulated TTFTs: mean 59.8 | P50 49.9 | P95 134.0 | P99 202.9 ms\nrequests above the P99 value out of a million: 10000\nthe median of the seven values is 50, and the skewed simulated sample has a median near 50 ms, a mean of 59.8, a P95 of 134.0 that is about 2.7 times the median and a P99 of 202.9 that is about 4 times it, so a median alone hides the slow tail; one percent of a million requests is 10000 users, and the lognormal shape is the lab's assumption and not a measurement of any provider\n\n--- 3. Genuinely measuring: an M/M/1 queue against its formula ---\narrival rate  utilisation  formula W  simulated W\n          50         0.50     0.0200       0.0200\n          80         0.80     0.0500       0.0499\n          90         0.90     0.1000       0.1015\n          95         0.95     0.2000       0.2056\nat 80 requests per second against a capacity of 100 the expected time in the system is 0.05 s and at 95 it is 0.2 s, a fourfold rise for a fifteen-point rise in utilisation, and the simulation agrees with the formula to within about 3 percent at the highest load; a real inference service is not a single M/M/1 queue, so this shows only why delay grows faster than load\n\n--- 4. Genuinely computing: break-even utilisation u = R / V ---\nreserved   600,000 against on-demand 1,200,000 at full use: break-even 50%\nreserved   480,000 against on-demand 1,200,000 at full use: break-even 40%\nreserved   720,000 against on-demand 1,200,000 at full use: break-even 60%\nutilisation  on-demand equivalent   reserved cheaper\n        20%               240,000    600,000 on-demand\n        30%               360,000    600,000 on-demand\n        40%               480,000    600,000 on-demand\n        50%               600,000    600,000 break-even\n        60%               720,000    600,000 reserved\n        80%               960,000    600,000 reserved\n       100%             1,200,000    600,000 reserved\n1000 per hour for 720 hours is 720000 | 30 dollars per hour for 720 hours is 21600\neffective cost per unit of use at 20 percent utilisation is 5 times the full-use price\nwith a reservation of half the full-use on-demand cost the break-even is 50 percent, a cheaper reservation moves it down to 40 percent and a dearer one up to 60 percent, which is the arithmetic behind a 40 to 60 percent band, and at 20 percent utilisation each unit of work costs five times what it would at full use; the lesson's price examples are illustrative and the linear model ignores minimum commitments and token charges\n\n--- 5. Genuinely computing: how much to reserve for a changing day ---\nhourly requests per minute from the lesson: [200, 500, 1000, 1200, 1300, 1250, 1100, 1000, 900, 600] | average 905.0 | peak 1300\nreserve the peak     capacity  1300.0 | average utilisation 70% | hours above capacity 0 of 10\nreserve the average  capacity   905.0 | average utilisation 100% | hours above capacity 6 of 10\nreservation costs 1.0 per unit-hour and on-demand 2.0, so the break-even is 50%\n  reserve     0: cost     18100\n  reserve   400: cost     14500\n  reserve   900: cost     11900\n  reserve  1000: cost     11700  <- lowest on this grid\n  reserve  1300: cost     13000\nreserving the peak keeps the average utilisation near 70 percent but pays for idle capacity most hours, reserving the average leaves 6 of 10 hours above it, and with an on-demand price twice the reserved price the cheapest plan on the grid reserves 1000, a level that demand exceeds in 4 of the 10 hours, just under the half that the price ratio sets; the profile is the lesson's and the prices are invented, and a real quote has minimum terms"
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
    "headingEn": "Genuinely Found: Request Arithmetic, Percentiles and Queue",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ವಿನಂತಿ ಅಂಕಗಣಿತ, ಶತಮಾನಾಂಶ ಮತ್ತು ಸರದಿ",
    "bodyEn": "Section 1: the five stages added to 2130 ms, and 500 tokens at 30 ms after a 100 ms TTFT took 15070 ms at 33.33 tokens per second. Section 2: the median of the seven values was 50 ms, and 100000 simulated TTFTs had a mean of 59.8, a P50 of 49.9, a P95 of 134.0 and a P99 of 202.9 ms, and one percent of a million is 10000. Section 3: the formula and the simulation gave 0.0200 and 0.0200 at 50 per second, 0.0500 and 0.0499 at 80, 0.1000 and 0.1015 at 90 and 0.2000 and 0.2056 at 95.",
    "bodyKn": "ವಿಭಾಗ 1: ಐದು ಹಂತಗಳು 2130 ms ಗೆ ಕೂಡಿದವು, ಮತ್ತು 100 ms TTFT ನಂತರ 30 ms ನಲ್ಲಿ 500 tokens ಸೆಕೆಂಡಿಗೆ 33.33 tokens ವೇಗದಲ್ಲಿ 15070 ms ತೆಗೆದುಕೊಂಡವು. ವಿಭಾಗ 2: ಏಳು ಮೌಲ್ಯಗಳ ಮಧ್ಯಾಂಕ 50 ms, ಮತ್ತು 100000 ಸಿಮ್ಯುಲೇಟೆಡ್ TTFT ಸರಾಸರಿ 59.8, P50 49.9, P95 134.0 ಮತ್ತು P99 202.9 ms ಹೊಂದಿದ್ದವು, ಮತ್ತು ಒಂದು ಮಿಲಿಯನ್‌ನ ಒಂದು ಶೇಕಡಾ 10000. ವಿಭಾಗ 3: ಸೂತ್ರ ಮತ್ತು ಸಿಮ್ಯುಲೇಶನ್ ಸೆಕೆಂಡಿಗೆ 50 ರಲ್ಲಿ 0.0200 ಮತ್ತು 0.0200, 80 ರಲ್ಲಿ 0.0500 ಮತ್ತು 0.0499, 90 ರಲ್ಲಿ 0.1000 ಮತ್ತು 0.1015 ಮತ್ತು 95 ರಲ್ಲಿ 0.2000 ಮತ್ತು 0.2056 ನೀಡಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Break-Even and Reservation Plans",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸಮಭಾರ ಮತ್ತು ಮೀಸಲು ಯೋಜನೆಗಳು",
    "bodyEn": "Section 4: reserved costs of 6,00,000, 4,80,000 and 7,20,000 against 12,00,000 gave break-evens of 50, 40 and 60 percent, 1000 per hour for 720 hours was 7,20,000, 30 dollars per hour for 720 hours was 21,600, and at 20 percent utilisation each unit of work cost 5 times the full-use price. Section 5: the lesson profile had an average of 905 and a peak of 1300, reserving the peak gave 70 percent average utilisation with no hour above capacity, reserving the average left 6 of 10 hours above it, and with an on-demand price twice the reserved price the lowest cost on the grid came from reserving 1000, at a cost of 11700 against 13000 for the peak and 18100 for nothing.",
    "bodyKn": "ವಿಭಾಗ 4: 12,00,000 ವಿರುದ್ಧ 6,00,000, 4,80,000 ಮತ್ತು 7,20,000 ಮೀಸಲು ವೆಚ್ಚಗಳು 50, 40 ಮತ್ತು 60 ಶೇಕಡಾ ಸಮಭಾರ ನೀಡಿದವು, ಗಂಟೆಗೆ 1000 ರಂತೆ 720 ಗಂಟೆ 7,20,000, ಗಂಟೆಗೆ 30 ಡಾಲರ್‌ನಂತೆ 720 ಗಂಟೆ 21,600, ಮತ್ತು 20 ಶೇಕಡಾ ಬಳಕೆಯಲ್ಲಿ ಪ್ರತಿ ಕೆಲಸ ಘಟಕ ಪೂರ್ಣ-ಬಳಕೆ ಬೆಲೆಯ 5 ಪಟ್ಟು ವೆಚ್ಚವಾಯಿತು. ವಿಭಾಗ 5: lesson ಪ್ರೊಫೈಲ್ ಸರಾಸರಿ 905 ಮತ್ತು ಗರಿಷ್ಠ 1300 ಹೊಂದಿತ್ತು, ಗರಿಷ್ಠ ಮೀಸಲು ಯಾವುದೇ ಗಂಟೆ ಸಾಮರ್ಥ್ಯ ಮೀರದೆ 70 ಶೇಕಡಾ ಸರಾಸರಿ ಬಳಕೆ ನೀಡಿತು, ಸರಾಸರಿ ಮೀಸಲು 10 ಗಂಟೆಗಳಲ್ಲಿ 6 ಅದರ ಮೇಲೆ ಬಿಟ್ಟಿತು, ಮತ್ತು ಆನ್-ಡಿಮ್ಯಾಂಡ್ ಬೆಲೆ ಮೀಸಲು ಬೆಲೆಯ ಎರಡು ಪಟ್ಟು ಇದ್ದಾಗ ಗ್ರಿಡ್‌ನಲ್ಲಿ ಕಡಿಮೆ ವೆಚ್ಚ 1000 ಮೀಸಲಿನಿಂದ ಬಂತು, ವೆಚ್ಚ 11700, ಗರಿಷ್ಠಕ್ಕೆ 13000 ಮತ್ತು ಏನೂ ಇಲ್ಲದಕ್ಕೆ 18100."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A fast median, an even reservation and a low unit price are each easy to quote and each depends on assumptions about the tail, the load and the utilisation that the number itself does not show.",
    "bodyKn": "ವೇಗದ ಮಧ್ಯಾಂಕ, ಸಮ ಮೀಸಲು ಮತ್ತು ಕಡಿಮೆ ಘಟಕ ಬೆಲೆ ಪ್ರತಿಯೊಂದನ್ನೂ ಉಲ್ಲೇಖಿಸುವುದು ಸುಲಭ ಮತ್ತು ಪ್ರತಿಯೊಂದೂ ಸಂಖ್ಯೆ ತಾನೇ ತೋರಿಸದ ಬಾಲ, ಭಾರ ಮತ್ತು ಬಳಕೆ ಬಗ್ಗೆ ಊಹೆಗಳನ್ನು ಅವಲಂಬಿಸಿದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a reservation is always cheaper per request.\" At 20 percent utilisation each unit of work cost 5 times the full-use price.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮೀಸಲು ಯಾವಾಗಲೂ ಪ್ರತಿ ವಿನಂತಿಗೆ ಅಗ್ಗ.\" 20 ಶೇಕಡಾ ಬಳಕೆಯಲ್ಲಿ ಪ್ರತಿ ಕೆಲಸ ಘಟಕ ಪೂರ್ಣ-ಬಳಕೆ ಬೆಲೆಯ 5 ಪಟ್ಟು ವೆಚ್ಚವಾಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "TTFT: time to the first token. P99: the value 99 percent of requests stay below. Utilisation: used capacity over available capacity. Break-even: the utilisation where two plans cost the same.",
    "bodyKn": "TTFT: ಮೊದಲ token ವರೆಗಿನ ಸಮಯ. P99: 99 ಶೇಕಡಾ ವಿನಂತಿಗಳು ಕೆಳಗಿರುವ ಮೌಲ್ಯ. ಬಳಕೆ: ಬಳಸಿದ ಸಾಮರ್ಥ್ಯ ಭಾಗಿಸು ಲಭ್ಯ ಸಾಮರ್ಥ್ಯ. ಸಮಭಾರ: ಎರಡು ಯೋಜನೆಗಳ ವೆಚ್ಚ ಸಮನಾಗುವ ಬಳಕೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) A 2130 ms request and a 15070 ms answer differ from their first-token time. 2) The simulated P99 was about 4 times the median. 3) Delay at 95 percent load was 4 times the delay at 80 percent. 4) Break-even was 50 percent for half-price reservation. 5) Reserving 1000 of a 1300 peak was cheapest on the grid.",
    "bodyKn": "1) 2130 ms ವಿನಂತಿ ಮತ್ತು 15070 ms ಉತ್ತರ ತಮ್ಮ ಮೊದಲ-token ಸಮಯದಿಂದ ಭಿನ್ನ. 2) ಸಿಮ್ಯುಲೇಟೆಡ್ P99 ಮಧ್ಯಾಂಕದ ಸುಮಾರು 4 ಪಟ್ಟು. 3) 95 ಶೇಕಡಾ ಭಾರದಲ್ಲಿ ವಿಳಂಬ 80 ಶೇಕಡಾ ಭಾರದ ವಿಳಂಬದ 4 ಪಟ್ಟು. 4) ಅರ್ಧ-ಬೆಲೆ ಮೀಸಲಿಗೆ ಸಮಭಾರ 50 ಶೇಕಡಾ. 5) 1300 ಗರಿಷ್ಠದಲ್ಲಿ 1000 ಮೀಸಲು ಗ್ರಿಡ್‌ನಲ್ಲಿ ಅಗ್ಗ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How long did 500 tokens take with a 100 ms TTFT and 30 ms between tokens?",
      "qKn": "100 ms TTFT ಮತ್ತು tokens ನಡುವೆ 30 ms ಇದ್ದಾಗ 500 tokens ಎಷ್ಟು ಸಮಯ ತೆಗೆದುಕೊಂಡವು?",
      "opts": [
       "15070 ms",
       "2130 ms",
       "100 ms",
       "30000 ms"
      ],
      "optsKn": [
       "15070 ms",
       "2130 ms",
       "100 ms",
       "30000 ms"
      ],
      "correct": 0
     },
     {
      "q": "What was the break-even utilisation for a 6,00,000 reservation against 12,00,000 on demand?",
      "qKn": "12,00,000 ಆನ್-ಡಿಮ್ಯಾಂಡ್ ವಿರುದ್ಧ 6,00,000 ಮೀಸಲಿಗೆ ಸಮಭಾರ ಬಳಕೆ ಎಷ್ಟು?",
      "opts": [
       "50 percent",
       "40 percent",
       "60 percent",
       "100 percent"
      ],
      "optsKn": [
       "50 ಶೇಕಡಾ",
       "40 ಶೇಕಡಾ",
       "60 ಶೇಕಡಾ",
       "100 ಶೇಕಡಾ"
      ],
      "correct": 0
     },
     {
      "q": "What expected time in the system did the formula give at 95 requests per second against 100?",
      "qKn": "100 ವಿರುದ್ಧ ಸೆಕೆಂಡಿಗೆ 95 ವಿನಂತಿಯಲ್ಲಿ ಸೂತ್ರ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಯಾವ ನಿರೀಕ್ಷಿತ ಸಮಯ ನೀಡಿತು?",
      "opts": [
       "0.2 s",
       "0.05 s",
       "0.01 s",
       "1 s"
      ],
      "optsKn": [
       "0.2 s",
       "0.05 s",
       "0.01 s",
       "1 s"
      ],
      "correct": 0
     },
     {
      "q": "Which reservation level gave the lowest cost on the grid for the hourly profile?",
      "qKn": "ಗಂಟೆ ಪ್ರೊಫೈಲ್‌ಗೆ ಗ್ರಿಡ್‌ನಲ್ಲಿ ಯಾವ ಮೀಸಲು ಮಟ್ಟ ಕಡಿಮೆ ವೆಚ್ಚ ನೀಡಿತು?",
      "opts": [
       "1000",
       "1300",
       "0",
       "905"
      ],
      "optsKn": [
       "1000",
       "1300",
       "0",
       "905"
      ],
      "correct": 0
     },
     {
      "q": "What did the lab say about the 50 ms against 75 ms TTFT figure?",
      "qKn": "50 ms ವಿರುದ್ಧ 75 ms TTFT ಅಂಕಿ ಬಗ್ಗೆ ಲ್ಯಾಬ್ ಏನು ಹೇಳಿತು?",
      "opts": [
       "It is cited from the lesson and was not measured",
       "It was measured on Bedrock",
       "It was measured on Azure",
       "It was reproduced"
      ],
      "optsKn": [
       "ಇದು lesson ನಿಂದ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ",
       "ಇದನ್ನು Bedrock ನಲ್ಲಿ ಅಳೆಯಲಾಯಿತು",
       "ಇದನ್ನು Azure ನಲ್ಲಿ ಅಳೆಯಲಾಯಿತು",
       "ಇದನ್ನು ಪುನರುತ್ಪಾದಿಸಲಾಯಿತು"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
