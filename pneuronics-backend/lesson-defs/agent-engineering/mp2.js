module.exports = {
 "phaseId": "6a369d6666020ed05b321622",
 "moduleId": "6a369d6666020ed05b321625",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Managed LLM Platforms — Bedrock, Vertex AI, Azure OpenAI (Part 2 of 3) — The Two-Provider Gateway",
 "titleKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು — Bedrock, Vertex AI, Azure OpenAI (ಭಾಗ 2 / 3) — ಎರಡು-ಪೂರೈಕೆದಾರ Gateway",
 "desc": "Build and exercise a gateway with eligibility checks, retries, a breaker, a deadline and idempotent side effects.",
 "descKn": "ಅರ್ಹತೆ ಪರಿಶೀಲನೆ, ಮರುಪ್ರಯತ್ನ, breaker, ಗಡುವು ಮತ್ತು idempotent ಅಡ್ಡ ಪರಿಣಾಮಗಳಿರುವ gateway ನಿರ್ಮಿಸಿ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Check eligibility before calling.",
  "Back off with jitter.",
  "Open a breaker.",
  "Keep a total deadline.",
  "Key side effects."
 ],
 "objectivesKn": [
  "ಕರೆಯುವ ಮೊದಲು ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ.",
  "jitter ಜೊತೆ backoff ಮಾಡಿ.",
  "breaker ತೆರೆಯಿರಿ.",
  "ಒಟ್ಟು ಗಡುವು ಇಡಿ.",
  "ಅಡ್ಡ ಪರಿಣಾಮಗಳಿಗೆ key ಕೊಡಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Managed LLM Platforms — Bedrock, Vertex AI, Azure OpenAI (Part 2 of 3)",
    "textKn": "ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು — Bedrock, Vertex AI, Azure OpenAI (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: a two-provider gateway on a virtual clock with capability and sensitivity routing, retries with exponential backoff and jitter, errors that are not retried, a circuit breaker timeline, retry amplification over 1000 requests, a total deadline, a tool call that may already have run and the request cost formula. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind managed LLM platforms (request latency and TTFT, percentiles, an M/M/1 queue, the break-even of a reservation, a two-provider gateway with capability and sensitivity routing, retries with backoff, a circuit breaker, deadlines, the duplicate-execution problem, percentile dashboards, request-level cost attribution, log redaction, fallback evaluation and a readiness check), not the real software, and the providers are simulators with scripted or seeded failures on a virtual clock, the latencies, prices, bills, usage records and evaluation counts are simulated or invented by the lab, no Bedrock, Azure OpenAI or Vertex AI call is made and nothing says a configuration is compliant, so no real LLM behaviour is measured. The original code/main.py was not supplied and the lesson code was shown only in part, so the labs are our own implementation and the outputs were produced by running them. Parts 2 and 3 of the pasted lesson are cut off: Part 2 stops in section 11.4 on Bedrock attribution, so the Azure subscription and resource-group attribution, the Vertex AI project-per-team billing, the BigQuery billing-export analysis and the comparator walkthrough are missing, and Part 3 stops in section 14.2 on Vertex attribution and its code listing ends after the enumerations, so the Azure attribution, the production checklist, the final exercise and the quiz are missing. The checklist in the third lab is therefore our own teaching list. The lesson figures of about 50 ms against 75 ms TTFT, the 40 to 60 percent break-even band, the 21 to 50 dollars per hour range and every statement about Bedrock, Azure OpenAI, Vertex AI, PTUs, Gemini, IAM, BAA or HIPAA are cited and were not checked or measured here. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: ವರ್ಚುವಲ್ ಗಡಿಯಾರದಲ್ಲಿ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆ ರೂಟಿಂಗ್ ಇರುವ ಎರಡು-ಪೂರೈಕೆದಾರ gateway, ಘಾತೀಯ backoff ಮತ್ತು jitter ಜೊತೆ ಮರುಪ್ರಯತ್ನ, ಮರುಪ್ರಯತ್ನಿಸದ ದೋಷಗಳು, circuit breaker ಸಮಯರೇಖೆ, 1000 ವಿನಂತಿಗಳ ಮೇಲೆ ಮರುಪ್ರಯತ್ನ ವರ್ಧನೆ, ಒಟ್ಟು ಗಡುವು, ಈಗಾಗಲೇ ಓಡಿರಬಹುದಾದ ಸಾಧನ ಕರೆ ಮತ್ತು ವಿನಂತಿ ವೆಚ್ಚ ಸೂತ್ರ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು ನಿರ್ವಹಿತ LLM ವೇದಿಕೆಗಳು (ವಿನಂತಿ ವಿಳಂಬ ಮತ್ತು TTFT, ಶತಮಾನಾಂಶಗಳು, M/M/1 ಸರದಿ, ಮೀಸಲಿನ ಸಮಭಾರ ಬಿಂದು, ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆ ರೂಟಿಂಗ್ ಇರುವ ಎರಡು-ಪೂರೈಕೆದಾರ gateway, backoff ಜೊತೆ ಮರುಪ್ರಯತ್ನ, circuit breaker, ಗಡುವುಗಳು, ನಕಲು-ಕಾರ್ಯಗತಗೊಳಿಕೆ ಸಮಸ್ಯೆ, ಶತಮಾನಾಂಶ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್, ವಿನಂತಿ-ಮಟ್ಟದ ವೆಚ್ಚ ಹಂಚಿಕೆ, ಲಾಗ್ ಮರೆಮಾಚುವಿಕೆ, fallback ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಸಿದ್ಧತೆ ಪರಿಶೀಲನೆ) ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು ಪೂರೈಕೆದಾರರು ವರ್ಚುವಲ್ ಗಡಿಯಾರದಲ್ಲಿ ಸ್ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಅಥವಾ seeded ವೈಫಲ್ಯಗಳಿರುವ ಸಿಮ್ಯುಲೇಟರ್‌ಗಳು, ವಿಳಂಬ, ಬೆಲೆ, ಬಿಲ್, ಬಳಕೆ ದಾಖಲೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ ಎಣಿಕೆಗಳನ್ನು ಲ್ಯಾಬ್ ಅನುಕರಿಸಿದೆ ಅಥವಾ ಕಲ್ಪಿಸಿದೆ, ಯಾವುದೇ Bedrock, Azure OpenAI ಅಥವಾ Vertex AI ಕರೆ ಮಾಡಿಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಸಂರಚನೆ ಅನುಸರಣೆಯದ್ದು ಎಂದು ಏನೂ ಹೇಳುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಮೂಲ code/main.py ಒದಗಿಸಿರಲಿಲ್ಲ ಮತ್ತು lesson ಕೋಡ್ ಭಾಗಶಃ ಮಾತ್ರ ತೋರಿಸಲ್ಪಟ್ಟಿತು, ಆದ್ದರಿಂದ ಲ್ಯಾಬ್‌ಗಳು ನಮ್ಮದೇ ಅನುಷ್ಠಾನ ಮತ್ತು ಔಟ್‌ಪುಟ್ ಅನ್ನು ಅವನ್ನು ಓಡಿಸಿ ಪಡೆಯಲಾಗಿದೆ. ಅಂಟಿಸಿದ lesson ನ ಭಾಗ 2 ಮತ್ತು 3 ಕತ್ತರಿಸಲ್ಪಟ್ಟಿವೆ: ಭಾಗ 2 ವಿಭಾಗ 11.4 ರಲ್ಲಿ Bedrock ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ, ಆದ್ದರಿಂದ Azure subscription ಮತ್ತು resource-group ಹಂಚಿಕೆ, Vertex AI project-per-team ಬಿಲ್ಲಿಂಗ್, BigQuery billing-export ವಿಶ್ಲೇಷಣೆ ಮತ್ತು comparator ವಿವರಣೆ ಕಾಣೆಯಾಗಿವೆ, ಮತ್ತು ಭಾಗ 3 ವಿಭಾಗ 14.2 ರಲ್ಲಿ Vertex ಹಂಚಿಕೆಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ ಮತ್ತು ಅದರ ಕೋಡ್ ಪಟ್ಟಿ enumerations ನಂತರ ಮುಗಿಯುತ್ತದೆ, ಆದ್ದರಿಂದ Azure ಹಂಚಿಕೆ, ಉತ್ಪಾದನಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ, ಅಂತಿಮ ಅಭ್ಯಾಸ ಮತ್ತು ರಸಪ್ರಶ್ನೆ ಕಾಣೆಯಾಗಿವೆ. ಮೂರನೇ ಲ್ಯಾಬ್‌ನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ ಆದ್ದರಿಂದ ನಮ್ಮದೇ ಬೋಧನಾ ಪಟ್ಟಿ. ಸುಮಾರು 50 ms ವಿರುದ್ಧ 75 ms TTFT, 40 ರಿಂದ 60 ಶೇಕಡಾ ಸಮಭಾರ ಬ್ಯಾಂಡ್, ಗಂಟೆಗೆ 21 ರಿಂದ 50 ಡಾಲರ್ ವ್ಯಾಪ್ತಿ ಮತ್ತು Bedrock, Azure OpenAI, Vertex AI, PTU, Gemini, IAM, BAA ಅಥವಾ HIPAA ಬಗ್ಗೆ ಪ್ರತಿ ಹೇಳಿಕೆ ಉಲ್ಲೇಖಿತ ಮತ್ತು ಇಲ್ಲಿ ಪರಿಶೀಲಿಸಿಲ್ಲ ಅಥವಾ ಅಳೆಯಲಾಗಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Available Is Not the Same as Allowed",
    "textKn": "ಲಭ್ಯ ಎಂದರೆ ಅನುಮತಿಸಿದ್ದು ಅಲ್ಲ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "A Two-Provider Gateway on a Virtual Clock",
    "headingKn": "ವರ್ಚುವಲ್ ಗಡಿಯಾರದಲ್ಲಿ ಎರಡು-ಪೂರೈಕೆದಾರ Gateway",
    "bodyEn": "The lesson original gateway code was cut off, so this part builds a gateway of its own and runs it against simulated providers. It checks that a provider has the capabilities a request needs and is approved for its data class before calling it, retries retryable errors with exponential backoff and jitter inside a total deadline, never retries an invalid request, opens a circuit breaker after consecutive failures and probes it after a cooldown, and falls back to a second provider. It then measures retry amplification over 1000 requests, shows a refund that ran twice when a timeout was ambiguous, and prices a request. Time is a virtual clock that nothing waits on.",
    "bodyKn": "lesson ನ ಮೂಲ gateway ಕೋಡ್ ಕತ್ತರಿಸಲ್ಪಟ್ಟಿತ್ತು, ಆದ್ದರಿಂದ ಈ ಭಾಗ ತನ್ನದೇ gateway ನಿರ್ಮಿಸಿ ಸಿಮ್ಯುಲೇಟೆಡ್ ಪೂರೈಕೆದಾರರ ವಿರುದ್ಧ ಓಡಿಸುತ್ತದೆ. ಪೂರೈಕೆದಾರನನ್ನು ಕರೆಯುವ ಮೊದಲು ಅವನಿಗೆ ವಿನಂತಿಗೆ ಬೇಕಾದ ಸಾಮರ್ಥ್ಯಗಳಿವೆ ಮತ್ತು ಅದರ ದತ್ತಾಂಶ ವರ್ಗಕ್ಕೆ ಅನುಮೋದಿತ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ, ಮರುಪ್ರಯತ್ನಿಸಬಹುದಾದ ದೋಷಗಳನ್ನು ಒಟ್ಟು ಗಡುವಿನೊಳಗೆ ಘಾತೀಯ backoff ಮತ್ತು jitter ಜೊತೆ ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಅಮಾನ್ಯ ವಿನಂತಿಯನ್ನು ಎಂದಿಗೂ ಮರುಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ, ಸತತ ವೈಫಲ್ಯಗಳ ನಂತರ circuit breaker ತೆರೆದು ಕೂಲ್‌ಡೌನ್ ನಂತರ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ಎರಡನೇ ಪೂರೈಕೆದಾರನಿಗೆ ಹಿಂತಿರುಗುತ್ತದೆ. ನಂತರ 1000 ವಿನಂತಿಗಳ ಮೇಲೆ ಮರುಪ್ರಯತ್ನ ವರ್ಧನೆ ಅಳೆಯುತ್ತದೆ, ಟೈಮ್‌ಔಟ್ ಅಸ್ಪಷ್ಟವಾದಾಗ ಎರಡು ಬಾರಿ ಓಡಿದ ಮರುಪಾವತಿ ತೋರಿಸುತ್ತದೆ, ಮತ್ತು ವಿನಂತಿಗೆ ಬೆಲೆ ಕಟ್ಟುತ್ತದೆ. ಸಮಯ ಯಾವುದೂ ಕಾಯದ ವರ್ಚುವಲ್ ಗಡಿಯಾರ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Gateway",
    "headingKn": "Gateway",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">a fallback must be eligible, not just available</text><rect x=\"10\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">policy</text><text x=\"50\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">capability and data class</text><rect x=\"110\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">route</text><text x=\"150\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">primary then secondary</text><rect x=\"210\" y=\"30\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"250\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">retry</text><text x=\"250\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">backoff and a cap</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">breaker</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">stop calling a sick provider</text><path d=\"M150,64 V110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">a fallback must be eligible, not just available</text></svg>",
    "captionEn": "Eligibility, retries, a breaker and a deadline decide which provider answers.",
    "captionKn": "ಅರ್ಹತೆ, ಮರುಪ್ರಯತ್ನ, breaker ಮತ್ತು ಗಡುವು ಯಾವ ಪೂರೈಕೆದಾರ ಉತ್ತರಿಸುತ್ತದೆ ನಿರ್ಧರಿಸುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "The gateway decisions",
    "headingKn": "Gateway ನಿರ್ಧಾರಗಳು",
    "headers": [
     "Situation",
     "Decision in the lab"
    ],
    "rows": [
     [
      "request needs image input",
      "skip the primary, use the secondary"
     ],
     [
      "restricted data, no approved provider",
      "refuse"
     ],
     [
      "rate limit or temporary error",
      "retry with 200 ms, 400 ms backoff and jitter"
     ],
     [
      "invalid request",
      "raise at once, no retry, no fallback"
     ],
     [
      "authentication failure",
      "no retry, move to the secondary"
     ],
     [
      "3 consecutive failures",
      "open the breaker, probe after 5000 ms"
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
    "filename": "mp_2.py",
    "headingEn": "Providers, breaker and gateway",
    "headingKn": "ಪೂರೈಕೆದಾರರು, breaker ಮತ್ತು gateway",
    "descEn": "Gateway.eligible checks capability and sensitivity, Gateway.generate walks the providers with a deadline, retries and backoff, Breaker tracks closed, open and half-open and Effects deduplicates a side effect only when it is given a key.",
    "descKn": "Gateway.eligible ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸೂಕ್ಷ್ಮತೆ ಪರಿಶೀಲಿಸುತ್ತದೆ, Gateway.generate ಗಡುವು, ಮರುಪ್ರಯತ್ನ ಮತ್ತು backoff ಜೊತೆ ಪೂರೈಕೆದಾರರ ಮೂಲಕ ನಡೆಯುತ್ತದೆ, Breaker closed, open ಮತ್ತು half-open ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ ಮತ್ತು Effects key ನೀಡಿದಾಗ ಮಾತ್ರ ಅಡ್ಡ ಪರಿಣಾಮ ನಕಲು ತೆಗೆಯುತ್ತದೆ.",
    "code": "class Sens(Enum):\r\n    PUBLIC = 0\r\n    INTERNAL = 1\r\n    CONFIDENTIAL = 2\r\n    RESTRICTED = 3\r\n\r\n\r\nclass Err(Enum):\r\n    RATE_LIMIT = \"rate_limit\"\r\n    TEMPORARY = \"temporary\"\r\n    UNAVAILABLE = \"unavailable\"\r\n    INVALID = \"invalid_request\"\r\n    AUTH = \"authentication\"\r\n    TIMEOUT_AFTER_EFFECT = \"timeout_after_effect\"\r\n\r\n\r\nRETRYABLE = {Err.RATE_LIMIT, Err.TEMPORARY, Err.UNAVAILABLE, Err.TIMEOUT_AFTER_EFFECT}\r\n\r\n\r\nclass ProviderError(Exception):\r\n    def __init__(self, kind):\r\n        super().__init__(kind.value)\r\n        self.kind = kind\r\n\r\n\r\nclass Clock:\r\n    def __init__(self):\r\n        self.ms = 0.0\r\n\r\n    def advance(self, d):\r\n        self.ms += d\r\n\r\n\r\n@dataclass\r\nclass Request:\r\n    request_id: str\r\n    task: str\r\n    sensitivity: Sens\r\n    capabilities: frozenset\r\n    budget_ms: int = 5000\r\n    allow_fallback: bool = True\r\n    team: str = \"support\"\r\n    side_effect: str = \"\"\r\n\r\n\r\n@dataclass\r\nclass Config:\r\n    name: str\r\n    model: str\r\n    capabilities: frozenset\r\n    max_sensitivity: Sens\r\n    p_in: float\r\n    p_out: float\r\n    latency_ms: int\r\n\r\n\r\nclass Provider:\r\n    def __init__(self, cfg, clock, script=None, failure_rate=0.0, seed=0, effects=None):\r\n        self.cfg, self.clock, self.script = cfg, clock, list(script or [])\r\n        self.failure_rate, self.rng, self.calls, self.effects = failure_rate, random.Random(seed), 0, effects\r\n\r\n    def generate(self, req, idem_key=None):\r\n        self.calls += 1\r\n        self.clock.advance(self.cfg.latency_ms)\r\n        err = self.script.pop(0) if self.script else (Err.UNAVAILABLE if self.rng.random() < self.failure_rate else None)\r\n        if err is not None:\r\n            if err == Err.TIMEOUT_AFTER_EFFECT and self.effects is not None and req.side_effect:\r\n                self.effects.run(req.side_effect, idem_key)\r\n            raise ProviderError(err)\r\n        if self.effects is not None and req.side_effect:\r\n            self.effects.run(req.side_effect, idem_key)\r\n        return {\"provider\": self.cfg.name, \"model\": self.cfg.model, \"input_tokens\": 1200, \"output_tokens\": 300}\r\n\r\n\r\nclass Effects:\r\n    \"\"\"The external side effect, for example a payment. With a key it deduplicates, without one it repeats.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.done, self.count = set(), 0\r\n\r\n    def run(self, name, key):\r\n        if key is not None and (name, key) in self.done:\r\n            return\r\n        self.done.add((name, key))\r\n        self.count += 1\r\n\r\n\r\nclass Breaker:\r\n    def __init__(self, clock, threshold=3, recovery_ms=5000):\r\n        self.clock, self.threshold, self.recovery_ms = clock, threshold, recovery_ms\r\n        self.state, self.fails, self.opened_at = \"closed\", 0, 0.0\r\n\r\n    def allow(self):\r\n        if self.state == \"open\":\r\n            if self.clock.ms - self.opened_at >= self.recovery_ms:\r\n                self.state = \"half_open\"\r\n                return True\r\n            return False\r\n        return True\r\n\r\n    def success(self):\r\n        self.state, self.fails = \"closed\", 0\r\n\r\n    def failure(self):\r\n        self.fails += 1\r\n        if self.state == \"half_open\" or self.fails >= self.threshold:\r\n            self.state, self.opened_at = \"open\", self.clock.ms\r\n\r\n\r\nclass Gateway:\r\n    def __init__(self, primary, secondary, clock, max_attempts=3, use_breaker=True, seed=1):\r\n        self.providers = [primary, secondary]\r\n        self.clock, self.max_attempts = clock, max_attempts\r\n        self.breakers = {p.cfg.name: Breaker(clock) for p in self.providers} if use_breaker else {}\r\n        self.rng, self.log = random.Random(seed), []\r\n\r\n    @staticmethod\r\n    def eligible(cfg, req):\r\n        if not req.capabilities <= cfg.capabilities:\r\n            return False, \"missing capability \" + \",\".join(sorted(req.capabilities - cfg.capabilities))\r\n        if req.sensitivity.value > cfg.max_sensitivity.value:\r\n            return False, f\"not approved for {req.sensitivity.name.lower()} data\"\r\n        return True, \"ok\"\r\n\r\n    def generate(self, req, idempotent=True):\r\n        deadline = self.clock.ms + req.budget_ms\r\n        order = self.providers if req.allow_fallback else self.providers[:1]\r\n        for prov in order:\r\n            ok, why = self.eligible(prov.cfg, req)\r\n            if not ok:\r\n                self.log.append((req.request_id, prov.cfg.name, \"skipped\", why))\r\n                continue\r\n            br = self.breakers.get(prov.cfg.name)\r\n            if br and not br.allow():\r\n                self.log.append((req.request_id, prov.cfg.name, \"skipped\", \"circuit open\"))\r\n                continue\r\n            for attempt in range(self.max_attempts):\r\n                if self.clock.ms + prov.cfg.latency_ms > deadline:\r\n                    self.log.append((req.request_id, prov.cfg.name, \"stopped\", \"deadline\"))\r\n                    raise TimeoutError(\"deadline exceeded\")\r\n                try:\r\n                    res = prov.generate(req, req.request_id if idempotent else None)\r\n                    if br:\r\n                        br.success()\r\n                    self.log.append((req.request_id, prov.cfg.name, \"ok\", f\"attempt {attempt + 1}\"))\r\n                    res[\"fallback_used\"] = prov is not order[0]\r\n                    return res\r\n                except ProviderError as e:\r\n                    self.log.append((req.request_id, prov.cfg.name, \"error\", e.kind.value))\r\n                    if e.kind == Err.INVALID:\r\n                        raise\r\n                    if e.kind == Err.AUTH:\r\n                        break\r\n                    if br:\r\n                        br.failure()\r\n                    if e.kind not in RETRYABLE or attempt == self.max_attempts - 1 or (br and br.state == \"open\"):\r\n                        break\r\n                    back = min(200 * 2 ** attempt, 1000) * self.rng.uniform(0.8, 1.2)\r\n                    if self.clock.ms + back + prov.cfg.latency_ms > deadline:\r\n                        self.log.append((req.request_id, prov.cfg.name, \"stopped\", \"deadline\"))\r\n                        raise TimeoutError(\"deadline exceeded\")\r\n                    self.clock.advance(back)\r\n        raise RuntimeError(\"no provider could serve the request\")\r\n\r\n\r\nBEDROCK = Config(\"bedrock\", \"model-b\", frozenset({\"text\", \"json\", \"tools\"}), Sens.CONFIDENTIAL, 3.0, 15.0, 800)\r\nAZURE = Config(\"azure\", \"model-a\", frozenset({\"text\", \"json\", \"tools\", \"image\"}), Sens.CONFIDENTIAL, 2.5, 10.0, 700)\r\n\r\n\r\ndef cost(cfg, tin, tout):\r\n    return tin / 1e6 * cfg.p_in + tout / 1e6 * cfg.p_out\r\n\r\n\r\ndef make(script_b=None, script_a=None, fr_b=0.0, fr_a=0.0, **kw):\r\n    clock = Clock()\r\n    eff = Effects()\r\n    b = Provider(BEDROCK, clock, script_b, fr_b, 1, eff)\r\n    a = Provider(AZURE, clock, script_a, fr_a, 2, eff)\r\n    return clock, b, a, eff, Gateway(b, a, clock, **kw)"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "mp_2.py",
    "headingEn": "main(): experiments",
    "headingKn": "main(): ಪ್ರಯೋಗಗಳು",
    "descEn": "main() runs eight experiments on the simulated gateway.",
    "descKn": "main() ಸಿಮ್ಯುಲೇಟೆಡ್ gateway ಮೇಲೆ ಎಂಟು ಪ್ರಯೋಗ ಓಡಿಸುತ್ತದೆ.",
    "code": "def main():\r\n    section(\"1. Genuinely running: routing by capability and sensitivity\")\r\n    reqs = [Request(\"r1\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})), Request(\"r2\", \"extract\", Sens.CONFIDENTIAL, frozenset({\"text\", \"json\"})),\r\n            Request(\"r3\", \"image analysis\", Sens.INTERNAL, frozenset({\"text\", \"image\"})), Request(\"r4\", \"regulated\", Sens.RESTRICTED, frozenset({\"text\"}))]\r\n    clock, b, a, eff, gw = make()\r\n    for r in reqs:\r\n        try:\r\n            res = gw.generate(r)\r\n            print(f\"{r.task:15} -> {res['provider']} (fallback used: {res['fallback_used']})\")\r\n        except RuntimeError as e:\r\n            print(f\"{r.task:15} -> refused: {e}\")\r\n    for entry in gw.log:\r\n        if entry[2] == \"skipped\":\r\n            print(\"   skipped:\", entry[1], \"-\", entry[3], \"for\", entry[0])\r\n    print(\"the plain summary and the extraction went to the primary, the image request skipped it for lacking image input and went to the secondary without any failure, and the restricted request was refused because neither simulated provider is approved for it; routing here is by a label and a capability set, which is a simplification of a real data-governance decision\")\r\n\r\n    section(\"2. Genuinely running: retries with exponential backoff and jitter\")\r\n    clock, b, a, eff, gw = make(script_b=[Err.RATE_LIMIT, Err.RATE_LIMIT])\r\n    res = gw.generate(Request(\"r5\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})))\r\n    print(\"log:\", [(e[1], e[2], e[3]) for e in gw.log])\r\n    print(f\"served by {res['provider']} after {b.calls} primary calls | virtual time used {clock.ms:.0f} ms | base delays 200, 400 ms with plus or minus 20 percent jitter\")\r\n    print(\"the first two attempts were rate limited, the gateway waited about 200 ms and then about 400 ms and the third attempt succeeded on the same provider without any fallback, and the total time of roughly 3 seconds is three provider latencies of 800 ms plus the two waits; the clock is virtual and nothing slept\")\r\n\r\n    section(\"3. Genuinely running: errors that should not be retried\")\r\n    for kind in (Err.INVALID, Err.AUTH):\r\n        clock, b, a, eff, gw = make(script_b=[kind, kind, kind])\r\n        try:\r\n            res = gw.generate(Request(\"r6\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})))\r\n            out = f\"served by {res['provider']}\"\r\n        except ProviderError as e:\r\n            out = f\"raised {e.kind.value}\"\r\n        print(f\"{kind.value:16} primary calls {b.calls} | secondary calls {a.calls} | {out}\")\r\n    print(\"an invalid request was sent once and surfaced as an error, because repeating it or sending it to another provider would only repeat the mistake, while an authentication failure on the primary was not retried and moved to the secondary, since the fault is that provider's configuration; this is the lab's policy choice and a real policy should follow each provider's documented error semantics\")\r\n\r\n    section(\"4. Genuinely running: a circuit breaker over time\")\r\n    clock, b, a, eff, gw = make(script_b=[Err.UNAVAILABLE] * 4)\r\n    print(f\"{'t (ms)':>8} {'breaker':>10} {'primary calls':>14} {'served by':>10}\")\r\n    print(f\"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {'-':>10}   before any request\")\r\n    for i in range(1, 7):\r\n        res = gw.generate(Request(f\"c{i}\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})))\r\n        print(f\"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}\")\r\n    clock.advance(6000)\r\n    res = gw.generate(Request(\"c7\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})))\r\n    print(f\"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}   after 6000 ms: a half-open probe failed\")\r\n    clock.advance(6000)\r\n    res = gw.generate(Request(\"c8\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"})))\r\n    print(f\"{clock.ms:>8.0f} {gw.breakers['bedrock'].state:>10} {b.calls:>14} {res['provider']:>10}   after another 6000 ms: the probe succeeded\")\r\n    print(\"the three attempts of the very first request were enough to open the breaker, the next five requests went straight to the secondary and the primary call count stayed at 3, the first probe after the cooldown failed and reopened it, and the next probe succeeded, closed the breaker and was served by the primary again; this breaker lives in one process and a fleet of gateways would each have its own\")\r\n\r\n    section(\"5. Genuinely measuring: retry amplification over 1000 requests\")\r\n    for label, br in ((\"no breaker\", False), (\"with breaker\", True)):\r\n        clock, b, a, eff, gw = make(fr_b=0.5, fr_a=0.0, use_breaker=br)\r\n        served = Counter()\r\n        for i in range(1000):\r\n            clock.advance(10)\r\n            r = Request(f\"a{i}\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"}), allow_fallback=False)\r\n            try:\r\n                gw.generate(r)\r\n                served[\"ok\"] += 1\r\n            except (RuntimeError, TimeoutError):\r\n                served[\"failed\"] += 1\r\n        print(f\"{label:13} logical requests 1000 | provider attempts {b.calls} | per request {b.calls / 1000:.2f} | succeeded {served['ok']}\")\r\n    print(\"with half the attempts failing and up to three attempts per request the primary received 1717 attempts for 1000 requests, close to the expected 1 plus 0.5 plus 0.25 per request, and 888 succeeded against an expected 875; with the breaker the primary received only 26 attempts and 11 requests succeeded, because the breaker kept it closed off for most of the 10 virtual seconds and the other requests failed immediately, since this run has no fallback; retries multiply load, a breaker removes that load, and without a second provider the cost of removing it is failed requests\")\r\n\r\n    section(\"6. Genuinely running: a total deadline\")\r\n    clock, b, a, eff, gw = make(script_b=[Err.TEMPORARY] * 6)\r\n    try:\r\n        gw.generate(Request(\"d1\", \"summarise\", Sens.INTERNAL, frozenset({\"text\"}), budget_ms=1500, allow_fallback=False))\r\n    except TimeoutError as e:\r\n        print(\"raised:\", e, \"| primary calls\", b.calls, \"| virtual time\", f\"{clock.ms:.0f} ms\", \"| budget 1500 ms\")\r\n    print(\"with a 1500 ms budget and 800 ms per attempt the gateway made one attempt, saw that waiting and trying again could not finish inside the budget, and stopped instead of spending time on a doomed retry; a budget has to cover every attempt together and not each one separately\")\r\n\r\n    section(\"7. Genuinely running: a tool call that may already have happened\")\r\n    for label, idem in ((\"no idempotency key\", False), (\"same key on both providers\", True)):\r\n        clock, b, a, eff, gw = make(script_b=[Err.TIMEOUT_AFTER_EFFECT])\r\n        gw.generate(Request(\"pay-1\", \"refund\", Sens.INTERNAL, frozenset({\"text\"}), side_effect=\"refund-order-77\"), idempotent=idem)\r\n        print(f\"{label:28} side effects executed: {eff.count}\")\r\n    print(\"the primary carried out the refund and then the connection timed out, so the gateway could not tell and tried the secondary; without a key the refund ran twice and with one key shared across providers it ran once, which is why model calls and external side effects have to be separated and the effect made idempotent\")\r\n\r\n    section(\"8. Genuinely computing: the cost of one request\")\r\n    for cfg in (BEDROCK, AZURE):\r\n        print(f\"{cfg.name:8} 1200 input and 300 output tokens at {cfg.p_in} and {cfg.p_out} per million: {cost(cfg, 1200, 300):.6f}\")\r\n    print(\"the cost is input tokens over a million times the input price plus output tokens over a million times the output price, and it comes to 0.0081 for the first provider and 0.006 for the second with these invented prices; real bills add charges for caching, batch, images and reserved capacity\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely running: routing by capability and sensitivity ---\nsummarise       -> bedrock (fallback used: False)\nextract         -> bedrock (fallback used: False)\nimage analysis  -> azure (fallback used: True)\nregulated       -> refused: no provider could serve the request\n   skipped: bedrock - missing capability image for r3\n   skipped: bedrock - not approved for restricted data for r4\n   skipped: azure - not approved for restricted data for r4\nthe plain summary and the extraction went to the primary, the image request skipped it for lacking image input and went to the secondary without any failure, and the restricted request was refused because neither simulated provider is approved for it; routing here is by a label and a capability set, which is a simplification of a real data-governance decision\n\n--- 2. Genuinely running: retries with exponential backoff and jitter ---\nlog: [('bedrock', 'error', 'rate_limit'), ('bedrock', 'error', 'rate_limit'), ('bedrock', 'ok', 'attempt 3')]\nserved by bedrock after 3 primary calls | virtual time used 3026 ms | base delays 200, 400 ms with plus or minus 20 percent jitter\nthe first two attempts were rate limited, the gateway waited about 200 ms and then about 400 ms and the third attempt succeeded on the same provider without any fallback, and the total time of roughly 3 seconds is three provider latencies of 800 ms plus the two waits; the clock is virtual and nothing slept\n\n--- 3. Genuinely running: errors that should not be retried ---\ninvalid_request  primary calls 1 | secondary calls 0 | raised invalid_request\nauthentication   primary calls 1 | secondary calls 1 | served by azure\nan invalid request was sent once and surfaced as an error, because repeating it or sending it to another provider would only repeat the mistake, while an authentication failure on the primary was not retried and moved to the secondary, since the fault is that provider's configuration; this is the lab's policy choice and a real policy should follow each provider's documented error semantics\n\n--- 4. Genuinely running: a circuit breaker over time ---\n  t (ms)    breaker  primary calls  served by\n       0     closed              0          -   before any request\n    3726       open              3      azure\n    4426       open              3      azure\n    5126       open              3      azure\n    5826       open              3      azure\n    6526       open              3      azure\n    7226       open              3      azure\n   14726       open              4      azure   after 6000 ms: a half-open probe failed\n   21526     closed              5    bedrock   after another 6000 ms: the probe succeeded\nthe three attempts of the very first request were enough to open the breaker, the next five requests went straight to the secondary and the primary call count stayed at 3, the first probe after the cooldown failed and reopened it, and the next probe succeeded, closed the breaker and was served by the primary again; this breaker lives in one process and a fleet of gateways would each have its own\n\n--- 5. Genuinely measuring: retry amplification over 1000 requests ---\nno breaker    logical requests 1000 | provider attempts 1717 | per request 1.72 | succeeded 888\nwith breaker  logical requests 1000 | provider attempts 26 | per request 0.03 | succeeded 11\nwith half the attempts failing and up to three attempts per request the primary received 1717 attempts for 1000 requests, close to the expected 1 plus 0.5 plus 0.25 per request, and 888 succeeded against an expected 875; with the breaker the primary received only 26 attempts and 11 requests succeeded, because the breaker kept it closed off for most of the 10 virtual seconds and the other requests failed immediately, since this run has no fallback; retries multiply load, a breaker removes that load, and without a second provider the cost of removing it is failed requests\n\n--- 6. Genuinely running: a total deadline ---\nraised: deadline exceeded | primary calls 1 | virtual time 800 ms | budget 1500 ms\nwith a 1500 ms budget and 800 ms per attempt the gateway made one attempt, saw that waiting and trying again could not finish inside the budget, and stopped instead of spending time on a doomed retry; a budget has to cover every attempt together and not each one separately\n\n--- 7. Genuinely running: a tool call that may already have happened ---\nno idempotency key           side effects executed: 2\nsame key on both providers   side effects executed: 1\nthe primary carried out the refund and then the connection timed out, so the gateway could not tell and tried the secondary; without a key the refund ran twice and with one key shared across providers it ran once, which is why model calls and external side effects have to be separated and the effect made idempotent\n\n--- 8. Genuinely computing: the cost of one request ---\nbedrock  1200 input and 300 output tokens at 3.0 and 15.0 per million: 0.008100\nazure    1200 input and 300 output tokens at 2.5 and 10.0 per million: 0.006000\nthe cost is input tokens over a million times the input price plus output tokens over a million times the output price, and it comes to 0.0081 for the first provider and 0.006 for the second with these invented prices; real bills add charges for caching, batch, images and reserved capacity"
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
    "headingEn": "Experiment 1: Routing by capability and sensitivity",
    "headingKn": "ಪ್ರಯೋಗ 1: Routing by capability and sensitivity",
    "bodyEn": "What it ran: Routing by capability and sensitivity. What the lab concluded: the plain summary and the extraction went to the primary, the image request skipped it for lacking image input and went to the secondary without any failure, and the restricted request was refused because neither simulated provider is approved for it; routing here is by a label and a capability set, which is a simplification of a real data-governance decision",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Routing by capability and sensitivity. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the plain summary and the extraction went to the primary, the image request skipped it for lacking image input and went to the secondary without any failure, and the restricted request was refused because neither simulated provider is approved for it; routing here is by a label and a capability set, which is a simplification of a real data-governance decision"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 1. Genuinely running: routing by capability and sensitivity ---\nsummarise       -> bedrock (fallback used: False)\nextract         -> bedrock (fallback used: False)\nimage analysis  -> azure (fallback used: True)\nregulated       -> refused: no provider could serve the request\n   skipped: bedrock - missing capability image for r3\n   skipped: bedrock - not approved for restricted data for r4\n   skipped: azure - not approved for restricted data for r4"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 2: Retries with exponential backoff and jitter",
    "headingKn": "ಪ್ರಯೋಗ 2: Retries with exponential backoff and jitter",
    "bodyEn": "What it ran: Retries with exponential backoff and jitter. What the lab concluded: the first two attempts were rate limited, the gateway waited about 200 ms and then about 400 ms and the third attempt succeeded on the same provider without any fallback, and the total time of roughly 3 seconds is three provider latencies of 800 ms plus the two waits; the clock is virtual and nothing slept",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Retries with exponential backoff and jitter. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the first two attempts were rate limited, the gateway waited about 200 ms and then about 400 ms and the third attempt succeeded on the same provider without any fallback, and the total time of roughly 3 seconds is three provider latencies of 800 ms plus the two waits; the clock is virtual and nothing slept"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 2. Genuinely running: retries with exponential backoff and jitter ---\nlog: [('bedrock', 'error', 'rate_limit'), ('bedrock', 'error', 'rate_limit'), ('bedrock', 'ok', 'attempt 3')]\nserved by bedrock after 3 primary calls | virtual time used 3026 ms | base delays 200, 400 ms with plus or minus 20 percent jitter"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 3: Errors that should not be retried",
    "headingKn": "ಪ್ರಯೋಗ 3: Errors that should not be retried",
    "bodyEn": "What it ran: Errors that should not be retried. What the lab concluded: an invalid request was sent once and surfaced as an error, because repeating it or sending it to another provider would only repeat the mistake, while an authentication failure on the primary was not retried and moved to the secondary, since the fault is that provider's configuration; this is the lab's policy choice and a real policy should follow each provider's documented error semantics",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Errors that should not be retried. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): an invalid request was sent once and surfaced as an error, because repeating it or sending it to another provider would only repeat the mistake, while an authentication failure on the primary was not retried and moved to the secondary, since the fault is that provider's configuration; this is the lab's policy choice and a real policy should follow each provider's documented error semantics"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 3. Genuinely running: errors that should not be retried ---\ninvalid_request  primary calls 1 | secondary calls 0 | raised invalid_request\nauthentication   primary calls 1 | secondary calls 1 | served by azure"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 4: A circuit breaker over time",
    "headingKn": "ಪ್ರಯೋಗ 4: A circuit breaker over time",
    "bodyEn": "What it ran: A circuit breaker over time. What the lab concluded: the three attempts of the very first request were enough to open the breaker, the next five requests went straight to the secondary and the primary call count stayed at 3, the first probe after the cooldown failed and reopened it, and the next probe succeeded, closed the breaker and was served by the primary again; this breaker lives in one process and a fleet of gateways would each have its own",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A circuit breaker over time. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the three attempts of the very first request were enough to open the breaker, the next five requests went straight to the secondary and the primary call count stayed at 3, the first probe after the cooldown failed and reopened it, and the next probe succeeded, closed the breaker and was served by the primary again; this breaker lives in one process and a fleet of gateways would each have its own"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 4. Genuinely running: a circuit breaker over time ---\n  t (ms)    breaker  primary calls  served by\n       0     closed              0          -   before any request\n    3726       open              3      azure\n    4426       open              3      azure\n    5126       open              3      azure\n    5826       open              3      azure\n    6526       open              3      azure\n    7226       open              3      azure\n   14726       open              4      azure   after 6000 ms: a half-open probe failed\n   21526     closed              5    bedrock   after another 6000 ms: the probe succeeded"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 5: Retry amplification over 1000 requests",
    "headingKn": "ಪ್ರಯೋಗ 5: Retry amplification over 1000 requests",
    "bodyEn": "What it ran: Retry amplification over 1000 requests. What the lab concluded: with half the attempts failing and up to three attempts per request the primary received 1717 attempts for 1000 requests, close to the expected 1 plus 0.5 plus 0.25 per request, and 888 succeeded against an expected 875; with the breaker the primary received only 26 attempts and 11 requests succeeded, because the breaker kept it closed off for most of the 10 virtual seconds and the other requests failed immediately, since this run has no fallback; retries multiply load, a breaker removes that load, and without a second provider the cost of removing it is failed requests",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: Retry amplification over 1000 requests. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with half the attempts failing and up to three attempts per request the primary received 1717 attempts for 1000 requests, close to the expected 1 plus 0.5 plus 0.25 per request, and 888 succeeded against an expected 875; with the breaker the primary received only 26 attempts and 11 requests succeeded, because the breaker kept it closed off for most of the 10 virtual seconds and the other requests failed immediately, since this run has no fallback; retries multiply load, a breaker removes that load, and without a second provider the cost of removing it is failed requests"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 5. Genuinely measuring: retry amplification over 1000 requests ---\nno breaker    logical requests 1000 | provider attempts 1717 | per request 1.72 | succeeded 888\nwith breaker  logical requests 1000 | provider attempts 26 | per request 0.03 | succeeded 11"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 6: A total deadline",
    "headingKn": "ಪ್ರಯೋಗ 6: A total deadline",
    "bodyEn": "What it ran: A total deadline. What the lab concluded: with a 1500 ms budget and 800 ms per attempt the gateway made one attempt, saw that waiting and trying again could not finish inside the budget, and stopped instead of spending time on a doomed retry; a budget has to cover every attempt together and not each one separately",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A total deadline. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): with a 1500 ms budget and 800 ms per attempt the gateway made one attempt, saw that waiting and trying again could not finish inside the budget, and stopped instead of spending time on a doomed retry; a budget has to cover every attempt together and not each one separately"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 6. Genuinely running: a total deadline ---\nraised: deadline exceeded | primary calls 1 | virtual time 800 ms | budget 1500 ms"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 7: A tool call that may already have happened",
    "headingKn": "ಪ್ರಯೋಗ 7: A tool call that may already have happened",
    "bodyEn": "What it ran: A tool call that may already have happened. What the lab concluded: the primary carried out the refund and then the connection timed out, so the gateway could not tell and tried the secondary; without a key the refund ran twice and with one key shared across providers it ran once, which is why model calls and external side effects have to be separated and the effect made idempotent",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: A tool call that may already have happened. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the primary carried out the refund and then the connection timed out, so the gateway could not tell and tried the secondary; without a key the refund ran twice and with one key shared across providers it ran once, which is why model calls and external side effects have to be separated and the effect made idempotent"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 7. Genuinely running: a tool call that may already have happened ---\nno idempotency key           side effects executed: 2\nsame key on both providers   side effects executed: 1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Experiment 8: The cost of one request",
    "headingKn": "ಪ್ರಯೋಗ 8: The cost of one request",
    "bodyEn": "What it ran: The cost of one request. What the lab concluded: the cost is input tokens over a million times the input price plus output tokens over a million times the output price, and it comes to 0.0081 for the first provider and 0.006 for the second with these invented prices; real bills add charges for caching, batch, images and reserved capacity",
    "bodyKn": "ಇದು ಓಡಿಸಿದ್ದು: The cost of one request. ಲ್ಯಾಬ್ ತೀರ್ಮಾನ (ಮೂಲ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯ ಯಥಾವತ್ತಾಗಿ): the cost is input tokens over a million times the input price plus output tokens over a million times the output price, and it comes to 0.0081 for the first provider and 0.006 for the second with these invented prices; real bills add charges for caching, batch, images and reserved capacity"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "--- 8. Genuinely computing: the cost of one request ---\nbedrock  1200 input and 300 output tokens at 3.0 and 15.0 per million: 0.008100\nazure    1200 input and 300 output tokens at 2.5 and 10.0 per million: 0.006000"
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
    "headingEn": "Genuinely Found: Routing, Retries and Errors",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ರೂಟಿಂಗ್, ಮರುಪ್ರಯತ್ನ ಮತ್ತು ದೋಷಗಳು",
    "bodyEn": "Section 1: the summary and the extraction went to bedrock, the image request skipped it for the missing image capability and went to azure with fallback used, and the restricted request was refused because neither was approved. Section 2: two rate limits then success on attempt 3 took 3026 ms of virtual time. Section 3: an invalid request was sent once and raised, and an authentication failure was not retried and was served by azure.",
    "bodyKn": "ವಿಭಾಗ 1: ಸಾರಾಂಶ ಮತ್ತು ಹೊರತೆಗೆಯುವಿಕೆ bedrock ಗೆ ಹೋದವು, ಚಿತ್ರ ವಿನಂತಿ ಕಾಣೆಯಾದ ಚಿತ್ರ ಸಾಮರ್ಥ್ಯಕ್ಕಾಗಿ ಅದನ್ನು ಬಿಟ್ಟು fallback ಬಳಸಿ azure ಗೆ ಹೋಯಿತು, ಮತ್ತು ನಿರ್ಬಂಧಿತ ವಿನಂತಿ ಎರಡೂ ಅನುಮೋದಿತವಲ್ಲದ್ದರಿಂದ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿತು. ವಿಭಾಗ 2: ಎರಡು ದರ ಮಿತಿ ನಂತರ ಪ್ರಯತ್ನ 3 ರಲ್ಲಿ ಯಶಸ್ಸು 3026 ms ವರ್ಚುವಲ್ ಸಮಯ ತೆಗೆದುಕೊಂಡಿತು. ವಿಭಾಗ 3: ಅಮಾನ್ಯ ವಿನಂತಿ ಒಮ್ಮೆ ಕಳುಹಿಸಿ ದೋಷ ಎತ್ತಿತು, ಮತ್ತು ದೃಢೀಕರಣ ವೈಫಲ್ಯ ಮರುಪ್ರಯತ್ನಿಸದೆ azure ನಿಂದ ಸೇವೆ ಪಡೆಯಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Breaker, Amplification, Deadline and Duplicates",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Breaker, ವರ್ಧನೆ, ಗಡುವು ಮತ್ತು ನಕಲುಗಳು",
    "bodyEn": "Section 4: the first request alone opened the breaker, the next five went straight to azure with the primary call count at 3, the first probe failed and the next probe succeeded and closed the breaker. Section 5: with half the attempts failing the primary received 1717 attempts for 1000 requests and 888 succeeded, and with the breaker only 26 attempts and 11 successes. Section 6: a 1500 ms budget allowed one 800 ms attempt and then a deadline error. Section 7: a refund ran twice without an idempotency key and once with one. Section 8: 1200 input and 300 output tokens cost 0.0081 and 0.006.",
    "bodyKn": "ವಿಭಾಗ 4: ಮೊದಲ ವಿನಂತಿ ಮಾತ್ರ breaker ತೆರೆಯಿತು, ಮುಂದಿನ ಐದು ಪ್ರಾಥಮಿಕ ಕರೆ ಎಣಿಕೆ 3 ರೊಂದಿಗೆ ನೇರ azure ಗೆ ಹೋದವು, ಮೊದಲ probe ವಿಫಲವಾಗಿ ಮುಂದಿನ probe ಯಶಸ್ವಿಯಾಗಿ breaker ಮುಚ್ಚಿತು. ವಿಭಾಗ 5: ಅರ್ಧ ಪ್ರಯತ್ನ ವಿಫಲವಾದಾಗ ಪ್ರಾಥಮಿಕ 1000 ವಿನಂತಿಗಳಿಗೆ 1717 ಪ್ರಯತ್ನ ಪಡೆದು 888 ಯಶಸ್ವಿಯಾದವು, ಮತ್ತು breaker ನೊಂದಿಗೆ ಕೇವಲ 26 ಪ್ರಯತ್ನ ಮತ್ತು 11 ಯಶಸ್ಸು. ವಿಭಾಗ 6: 1500 ms ಬಜೆಟ್ ಒಂದು 800 ms ಪ್ರಯತ್ನ ಅನುಮತಿಸಿ ನಂತರ ಗಡುವು ದೋಷ ನೀಡಿತು. ವಿಭಾಗ 7: ಮರುಪಾವತಿ idempotency key ಇಲ್ಲದೆ ಎರಡು ಬಾರಿ ಮತ್ತು ಇದ್ದಾಗ ಒಮ್ಮೆ ಓಡಿತು. ವಿಭಾಗ 8: 1200 input ಮತ್ತು 300 output tokens 0.0081 ಮತ್ತು 0.006 ವೆಚ್ಚವಾದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A fallback that is merely reachable can break a capability, a data rule or a deadline, and a retry that is not capped, bounded or keyed multiplies load and side effects.",
    "bodyKn": "ಕೇವಲ ತಲುಪಬಹುದಾದ fallback ಸಾಮರ್ಥ್ಯ, ದತ್ತಾಂಶ ನಿಯಮ ಅಥವಾ ಗಡುವು ಮುರಿಯಬಹುದು, ಮತ್ತು ಮಿತಿ, ಗಡಿ ಅಥವಾ key ಇಲ್ಲದ ಮರುಪ್ರಯತ್ನ ಭಾರ ಮತ್ತು ಅಡ್ಡ ಪರಿಣಾಮಗಳನ್ನು ಗುಣಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"retries make the system more reliable.\" Half-failing attempts sent 1717 attempts to the primary for 1000 requests.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಮರುಪ್ರಯತ್ನ ವ್ಯವಸ್ಥೆಯನ್ನು ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹಗೊಳಿಸುತ್ತದೆ.\" ಅರ್ಧ ವಿಫಲವಾಗುವ ಪ್ರಯತ್ನಗಳು 1000 ವಿನಂತಿಗಳಿಗೆ ಪ್ರಾಥಮಿಕಕ್ಕೆ 1717 ಪ್ರಯತ್ನ ಕಳುಹಿಸಿದವು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Eligibility: capability and data approval. Backoff: a growing wait between retries. Circuit breaker: a switch that stops calls to a failing provider. Idempotency key: one identity for one side effect.",
    "bodyKn": "ಅರ್ಹತೆ: ಸಾಮರ್ಥ್ಯ ಮತ್ತು ದತ್ತಾಂಶ ಅನುಮೋದನೆ. Backoff: ಮರುಪ್ರಯತ್ನಗಳ ನಡುವೆ ಬೆಳೆಯುವ ಕಾಯುವಿಕೆ. Circuit breaker: ವಿಫಲ ಪೂರೈಕೆದಾರನಿಗೆ ಕರೆ ನಿಲ್ಲಿಸುವ ಸ್ವಿಚ್. Idempotency key: ಒಂದು ಅಡ್ಡ ಪರಿಣಾಮಕ್ಕೆ ಒಂದು ಗುರುತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The image request went to the secondary with no failure. 2) An invalid request was not retried. 3) The breaker stopped calls to the primary after the first request. 4) 1000 requests became 1717 attempts. 5) A refund ran twice without a key.",
    "bodyKn": "1) ಚಿತ್ರ ವಿನಂತಿ ವೈಫಲ್ಯವಿಲ್ಲದೆ ಎರಡನೆಯದಕ್ಕೆ ಹೋಯಿತು. 2) ಅಮಾನ್ಯ ವಿನಂತಿ ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಡಲಿಲ್ಲ. 3) ಮೊದಲ ವಿನಂತಿಯ ನಂತರ breaker ಪ್ರಾಥಮಿಕಕ್ಕೆ ಕರೆ ನಿಲ್ಲಿಸಿತು. 4) 1000 ವಿನಂತಿಗಳು 1717 ಪ್ರಯತ್ನಗಳಾದವು. 5) key ಇಲ್ಲದೆ ಮರುಪಾವತಿ ಎರಡು ಬಾರಿ ಓಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "How many provider attempts did 1000 requests produce without the breaker when half the attempts failed?",
      "qKn": "ಅರ್ಧ ಪ್ರಯತ್ನ ವಿಫಲವಾದಾಗ breaker ಇಲ್ಲದೆ 1000 ವಿನಂತಿಗಳು ಎಷ್ಟು ಪೂರೈಕೆದಾರ ಪ್ರಯತ್ನ ಉಂಟುಮಾಡಿದವು?",
      "opts": [
       "1717",
       "1000",
       "3000",
       "875"
      ],
      "optsKn": [
       "1717",
       "1000",
       "3000",
       "875"
      ],
      "correct": 0
     },
     {
      "q": "How many times did the refund run with an idempotency key shared across providers?",
      "qKn": "ಪೂರೈಕೆದಾರರ ನಡುವೆ ಹಂಚಿದ idempotency key ಇದ್ದಾಗ ಮರುಪಾವತಿ ಎಷ್ಟು ಬಾರಿ ಓಡಿತು?",
      "opts": [
       "Once",
       "Twice",
       "Three times",
       "Never"
      ],
      "optsKn": [
       "ಒಮ್ಮೆ",
       "ಎರಡು ಬಾರಿ",
       "ಮೂರು ಬಾರಿ",
       "ಎಂದಿಗೂ ಇಲ್ಲ"
      ],
      "correct": 0
     },
     {
      "q": "What happened to an invalid request?",
      "qKn": "ಅಮಾನ್ಯ ವಿನಂತಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "It was sent once and raised, with no retry or fallback",
       "It was retried three times",
       "It went to the secondary",
       "It was ignored"
      ],
      "optsKn": [
       "ಅದು ಒಮ್ಮೆ ಕಳುಹಿಸಲ್ಪಟ್ಟು ಮರುಪ್ರಯತ್ನ ಅಥವಾ fallback ಇಲ್ಲದೆ ದೋಷ ಎತ್ತಿತು",
       "ಅದು ಮೂರು ಬಾರಿ ಮರುಪ್ರಯತ್ನಿಸಲ್ಪಟ್ಟಿತು",
       "ಅದು ಎರಡನೆಯದಕ್ಕೆ ಹೋಯಿತು",
       "ಅದನ್ನು ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "Why did the image request go to azure?",
      "qKn": "ಚಿತ್ರ ವಿನಂತಿ azure ಗೆ ಏಕೆ ಹೋಯಿತು?",
      "opts": [
       "The primary lacked image input",
       "The primary failed",
       "The breaker was open",
       "The deadline passed"
      ],
      "optsKn": [
       "ಪ್ರಾಥಮಿಕಕ್ಕೆ ಚಿತ್ರ ಇನ್‌ಪುಟ್ ಇರಲಿಲ್ಲ",
       "ಪ್ರಾಥಮಿಕ ವಿಫಲವಾಯಿತು",
       "breaker ತೆರೆದಿತ್ತು",
       "ಗಡುವು ಮುಗಿಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "How many attempts did the gateway make inside a 1500 ms budget with 800 ms per attempt?",
      "qKn": "800 ms ಪ್ರತಿ ಪ್ರಯತ್ನದೊಂದಿಗೆ 1500 ms ಬಜೆಟ್‌ನೊಳಗೆ gateway ಎಷ್ಟು ಪ್ರಯತ್ನ ಮಾಡಿತು?",
      "opts": [
       "1",
       "3",
       "2",
       "0"
      ],
      "optsKn": [
       "1",
       "3",
       "2",
       "0"
      ],
      "correct": 0
     }
    ]
   }
  }
 ]
};
