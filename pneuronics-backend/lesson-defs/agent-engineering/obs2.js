module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6266020ed05b321553",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Agent Observability: Traces, Evaluations and Dashboards (Part 2 of 3) — Evaluations, Judges and Guardrails",
 "titleKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 2 / 3) — Evaluations, Judges ಮತ್ತು Guardrails",
 "desc": "Build EvalResult, lexical relevance, groundedness, a scripted judge and a guardrail, then test where overlap scoring is fooled, how a rubric and judge noise change verdicts, what a low-confidence band buys and how a keyword guardrail leaks.",
 "descKn": "EvalResult, lexical relevance, groundedness, ಸ್ಕ್ರಿಪ್ಟ್ judge ಮತ್ತು guardrail ನಿರ್ಮಿಸಿ, ನಂತರ ಅತಿಕ್ರಮಣ ಅಂಕನ ಎಲ್ಲಿ ಮೋಸಗೊಳ್ಳುತ್ತದೆ, rubric ಮತ್ತು judge ಶಬ್ದ ತೀರ್ಪುಗಳನ್ನು ಹೇಗೆ ಬದಲಿಸುತ್ತವೆ, ಕಡಿಮೆ-ವಿಶ್ವಾಸ ಪಟ್ಟಿ ಏನು ನೀಡುತ್ತದೆ ಮತ್ತು ಕೀವರ್ಡ್ guardrail ಹೇಗೆ ಸೋರುತ್ತದೆ ಎಂದು ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Return evaluations in one stable shape.",
  "Score retrieval and generation separately.",
  "Know what overlap scoring cannot see.",
  "Use a low-confidence band.",
  "Treat a guardrail miss as a safety gap."
 ],
 "objectivesKn": [
  "Evaluations ಅನ್ನು ಒಂದೇ ಸ್ಥಿರ ಆಕಾರದಲ್ಲಿ ಮರಳಿಸಿ.",
  "Retrieval ಮತ್ತು generation ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಅಂಕಿಸಿ.",
  "ಅತಿಕ್ರಮಣ ಅಂಕನ ಏನನ್ನು ನೋಡಲಾರದು ಎಂದು ತಿಳಿಯಿರಿ.",
  "ಕಡಿಮೆ-ವಿಶ್ವಾಸ ಪಟ್ಟಿ ಬಳಸಿ.",
  "Guardrail ತಪ್ಪನ್ನು ಸುರಕ್ಷತಾ ಅಂತರ ಎಂದು ಪರಿಗಣಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Agent Observability: Traces, Evaluations and Dashboards (Part 2 of 3)",
    "textKn": "Agent Observability: Traces, Evaluations ಮತ್ತು Dashboards (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: evaluations: relevance, groundedness, a scripted judge and a guardrail. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Langfuse, Phoenix and Opik style agent observability, not the real software, and agents are scripted, the judge is a deterministic stand-in and no platform is called, so no real LLM behaviour is measured. The scripted judge is a deterministic stand-in for an LLM judge; its noise level in section 4 is an assumption. The 12 question and passage pairs, the answers and the score distributions are written for this lab, so the rates describe them only and say nothing about real evaluators or real RAG systems. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: evaluations: relevance, groundedness, ಸ್ಕ್ರಿಪ್ಟ್ judge ಮತ್ತು guardrail. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Langfuse, Phoenix ಮತ್ತು Opik ಶೈಲಿಯ agent observability ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು agents ಸ್ಕ್ರಿಪ್ಟ್, judge ನಿರ್ಧಾರಿತ ಬದಲಿ ಮತ್ತು ಯಾವುದೇ platform ಕರೆಯಲ್ಪಡುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಸ್ಕ್ರಿಪ್ಟ್ judge LLM judge ಗೆ ನಿರ್ಧಾರಿತ ಬದಲಿ; ವಿಭಾಗ 4 ರ ಅದರ ಶಬ್ದ ಮಟ್ಟ ಊಹೆ. 12 ಪ್ರಶ್ನೆ-ಪಠ್ಯ ಜೋಡಿಗಳು, ಉತ್ತರಗಳು ಮತ್ತು ಅಂಕ ವಿತರಣೆಗಳು ಈ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದವು, ಆದ್ದರಿಂದ ದರಗಳು ಅವನ್ನು ಮಾತ್ರ ವಿವರಿಸುತ್ತವೆ ಮತ್ತು ನಿಜ evaluators ಅಥವಾ ನಿಜ RAG ವ್ಯವಸ್ಥೆಗಳ ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Scoring the Answer, Not Just Recording It",
    "textKn": "ಉತ್ತರವನ್ನು ದಾಖಲಿಸುವುದಲ್ಲ, ಅಂಕ ನೀಡುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Evaluations Turn Traces into Judgements",
    "headingKn": "Evaluations traces ಅನ್ನು ತೀರ್ಪುಗಳಾಗಿಸುತ್ತವೆ",
    "bodyEn": "A trace shows what happened; an evaluation says whether it was good. An EvalResult carries a name, a score, a pass flag and a reason, because a score alone is hard to act on. Deterministic checks (a blocked term, a length limit) are cheap and repeatable; model-based judging handles meaning but varies. For RAG the retrieval and the generation are scored separately: retrieval relevance asks whether the passage fits the question, groundedness asks whether the answer follows from the evidence. A guardrail is an evaluation that can block.",
    "bodyKn": "Trace ಏನಾಯಿತು ಎಂದು ತೋರಿಸುತ್ತದೆ; evaluation ಅದು ಒಳ್ಳೆಯದಾಗಿತ್ತೇ ಎಂದು ಹೇಳುತ್ತದೆ. EvalResult ಹೆಸರು, ಅಂಕ, ಪಾಸ್ ಧ್ವಜ ಮತ್ತು ಕಾರಣ ಹೊತ್ತಿದೆ, ಏಕೆಂದರೆ ಅಂಕ ಮಾತ್ರ ಆಧರಿಸಿ ಕ್ರಮ ಕೈಗೊಳ್ಳುವುದು ಕಷ್ಟ. ನಿರ್ಧಾರಿತ ಪರಿಶೀಲನೆಗಳು (ನಿರ್ಬಂಧಿತ ಪದ, ಉದ್ದ ಮಿತಿ) ಅಗ್ಗ ಮತ್ತು ಪುನರಾವರ್ತನೀಯ; ಮಾದರಿ-ಆಧಾರಿತ ತೀರ್ಪು ಅರ್ಥವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ ಆದರೆ ಬದಲಾಗುತ್ತದೆ. RAG ಗೆ retrieval ಮತ್ತು generation ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಅಂಕಿಸಲಾಗುತ್ತದೆ: retrieval relevance ಪಠ್ಯ ಪ್ರಶ್ನೆಗೆ ಹೊಂದುತ್ತದೆಯೇ ಎಂದು ಕೇಳುತ್ತದೆ, groundedness ಉತ್ತರ ಸಾಕ್ಷ್ಯದಿಂದ ಬರುತ್ತದೆಯೇ ಎಂದು ಕೇಳುತ್ತದೆ. Guardrail ತಡೆಯಬಲ್ಲ evaluation."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Evaluators and EvalResult",
    "headingKn": "Evaluators ಮತ್ತು EvalResult",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Traces say what happened; evaluations say how good</text><rect x=\"10\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"50\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">trace</text><text x=\"50\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">spans, timing, tokens</text><rect x=\"110\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"150\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">evaluators</text><text x=\"150\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">relevance, grounded</text><rect x=\"210\" y=\"40\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"250\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">guardrail</text><text x=\"250\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">can block</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">EvalResult</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">score, passed, reason</text><path d=\"M150,74 V110 M50,74 L110,110 M250,74 L190,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">attach every result to its trace id</text></svg>",
    "captionEn": "Every evaluation returns the same shape, so the dashboard code never changes.",
    "captionKn": "ಪ್ರತಿ evaluation ಅದೇ ಆಕಾರ ಮರಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ dashboard ಕೋಡ್ ಎಂದೂ ಬದಲಾಗುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Evaluation kinds",
    "headingKn": "Evaluation ಪ್ರಕಾರಗಳು",
    "headers": [
     "Kind",
     "Strength",
     "Weakness"
    ],
    "rows": [
     [
      "deterministic check",
      "cheap, repeatable",
      "rigid; misses paraphrase"
     ],
     [
      "model judge",
      "handles meaning",
      "varies; needs a rubric and evidence"
     ],
     [
      "guardrail",
      "can block before delivery",
      "a miss is a safety gap"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Evaluators",
    "textKn": "Evaluators ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_2.py",
    "headingEn": "EvalResult, lexical relevance, groundedness, guardrail and ScriptedJudge",
    "headingKn": "EvalResult, lexical relevance, groundedness, guardrail ಮತ್ತು ScriptedJudge",
    "descEn": "normalize_words lowercases and strips punctuation, optionally dropping stop words. lexical_relevance and groundedness both score word overlap. guardrail blocks on a short keyword list. ScriptedJudge maps groundedness to a score with optional Gaussian noise, standing in for a model judge.",
    "descKn": "normalize_words ಸಣ್ಣಕ್ಷರ ಮಾಡಿ ವಿರಾಮಚಿಹ್ನೆ ತೆಗೆಯುತ್ತದೆ, ಐಚ್ಛಿಕವಾಗಿ stop words ಬಿಡುತ್ತದೆ. lexical_relevance ಮತ್ತು groundedness ಎರಡೂ ಪದ ಅತಿಕ್ರಮಣಕ್ಕೆ ಅಂಕ ನೀಡುತ್ತವೆ. guardrail ಸಣ್ಣ ಕೀವರ್ಡ್ ಪಟ್ಟಿಯಲ್ಲಿ ತಡೆಯುತ್ತದೆ. ScriptedJudge groundedness ಅನ್ನು ಐಚ್ಛಿಕ Gaussian ಶಬ್ದದೊಂದಿಗೆ ಅಂಕಕ್ಕೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ, ಮಾದರಿ judge ಅನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ.",
    "code": "@dataclass\nclass EvalResult:\n    name: str\n    score: float\n    passed: bool\n    reason: str\n\n\nSTOP = {\"the\", \"a\", \"an\", \"is\", \"are\", \"was\", \"of\", \"to\", \"in\", \"my\", \"me\", \"and\", \"when\", \"will\", \"where\", \"what\", \"how\", \"do\", \"i\", \"it\", \"can\", \"you\", \"for\"}\n\n\ndef normalize_words(text, drop_stop=False):\n    words = set(re.sub(r\"[^a-z0-9 ]\", \" \", text.lower()).split())\n    return words - STOP if drop_stop else words\n\n\ndef lexical_relevance(question, passage, threshold=0.34, drop_stop=False):\n    q, p = normalize_words(question, drop_stop), normalize_words(passage, drop_stop)\n    score = len(q & p) / len(q) if q else 0.0\n    return EvalResult(\"retrieval_relevance\", round(score, 2), score >= threshold, f\"{len(q & p)} of {len(q)} question terms found\")\n\n\ndef groundedness(answer, evidence, threshold=0.99):\n    a, e = normalize_words(answer), normalize_words(evidence)\n    score = len(a & e) / len(a) if a else 0.0\n    return EvalResult(\"groundedness\", round(score, 2), score >= threshold, f\"{len(a & e)} of {len(a)} answer terms appear in the evidence\")\n\n\nBLOCKED = (\"password\", \"ssn\", \"credit card\")\n\n\ndef guardrail(text):\n    hit = next((b for b in BLOCKED if b in text.lower()), None)\n    return EvalResult(\"guardrail\", 0.0 if hit else 1.0, hit is None, f\"blocked term: {hit}\" if hit else \"no blocked term\")\n\n\nclass ScriptedJudge:\n    \"\"\"Deterministic stand-in for an LLM judge. `noise` models run-to-run variation of a real judge (ASSUMED).\"\"\"\n\n    def __init__(self, noise=0.0, seed=0):\n        self.noise, self.rng = noise, random.Random(seed)\n\n    def judge(self, question, evidence, answer):\n        base = groundedness(answer, evidence).score\n        score = min(1.0, max(0.0, base + self.rng.gauss(0, self.noise)))\n        return EvalResult(\"judge\", round(score, 2), score >= 0.7, \"scripted rubric: overlap with evidence\")"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "obs_2.py",
    "headingEn": "The labelled pairs and main()",
    "headingKn": "ಲೇಬಲ್ ಮಾಡಿದ ಜೋಡಿಗಳು ಮತ್ತು main()",
    "descEn": "PAIRS holds 12 hand-written question and passage pairs with a relevance label. main() runs the evaluators on the lesson cases, sweeps relevance thresholds, probes groundedness with tricky answers, adds noise to the judge, compares a single threshold with a low-confidence band and attacks the guardrail.",
    "descKn": "PAIRS ಸಂಬಂಧ ಲೇಬಲ್ ಇರುವ 12 ಕೈಬರಹದ ಪ್ರಶ್ನೆ-ಪಠ್ಯ ಜೋಡಿಗಳನ್ನು ಹೊಂದಿದೆ. main() ಲೆಸನ್ ಪ್ರಕರಣಗಳ ಮೇಲೆ evaluators ಚಲಾಯಿಸುತ್ತದೆ, relevance ಮಿತಿಗಳನ್ನು ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ, groundedness ಅನ್ನು ಕಠಿಣ ಉತ್ತರಗಳಿಂದ ಪರೀಕ್ಷಿಸುತ್ತದೆ, judge ಗೆ ಶಬ್ದ ಸೇರಿಸುತ್ತದೆ, ಒಂದು ಮಿತಿಯನ್ನು ಕಡಿಮೆ-ವಿಶ್ವಾಸ ಪಟ್ಟಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ ಮತ್ತು guardrail ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ.",
    "code": "PAIRS = [  # (question, passage, relevant?)\n    (\"Where is order 52?\", \"Order 52 is in transit.\", True),\n    (\"What is the refund policy?\", \"Refunds are accepted within 30 days.\", True),\n    (\"When will my package arrive?\", \"Shipment 52 is expected tomorrow.\", True),\n    (\"How do I reset my password?\", \"To change credentials open Settings then Security.\", True),\n    (\"Can I cancel my subscription?\", \"Plans can be ended any time from the billing page.\", True),\n    (\"Where is order 52?\", \"Our refund policy lasts 30 days.\", False),\n    (\"What is the refund policy?\", \"Order 52 is in transit.\", False),\n    (\"How do I reset my password?\", \"The warehouse opens at nine.\", False),\n    (\"When will my package arrive?\", \"The refund policy allows returns.\", False),\n    (\"Can I cancel my subscription?\", \"Order 52 is in transit.\", False),\n    (\"Is the store open on Sunday?\", \"Opening hours: Sunday 10 to 4.\", True),\n    (\"Is the store open on Sunday?\", \"Refunds are accepted within 30 days.\", False),\n]\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    section(\"1. The evaluators on the lesson's cases\")\n    ev = \"Order 52 is in transit.\"\n    for label, ans in ((\"matching answer\", \"Order 52 is in transit.\"), (\"delivered claim\", \"Order 52 was delivered yesterday.\"), (\"unsupported answer\", \"I am not sure.\")):\n        print(f\"{label:20} {groundedness(ans, ev)}\")\n    print(\"relevance, right passage:\", lexical_relevance(\"Where is order 52?\", \"Order 52 is in transit.\"))\n    print(\"relevance, wrong passage:\", lexical_relevance(\"Where is order 52?\", \"Our refund policy lasts 30 days.\"))\n    print(\"guardrail:\", guardrail(\"Please send me your password\"), \"|\", guardrail(\"Order is in transit\"))\n\n    section(\"2. Genuinely measuring: lexical relevance on 12 hand-written question and passage pairs\")\n    print(f\"{'rule':34} {'threshold':>9} {'right passages kept':>20} {'wrong passages kept':>20}\")\n    for drop in (False, True):\n        for th in (0.2, 0.34, 0.5, 0.75):\n            tp = fp = 0\n            for q, p, rel in PAIRS:\n                ok = lexical_relevance(q, p, th, drop).passed\n                tp += ok and rel\n                fp += ok and not rel\n            print(f\"{'stop words removed' if drop else 'all words':34} {th:>9.2f} {tp:>14}/{sum(r for *_, r in PAIRS)} {fp:>14}/{sum(not r for *_, r in PAIRS)}\")\n    print(\"recall was poor at every setting: at most 2 of the 6 right passages were kept, because the right passages it missed share few words with the question (for example 'package' / 'shipment' and 'reset' / 'change'); the only wrong passage let through was at threshold 0.2 with stop words counted. The pairs were written by us, so the numbers are a demonstration\")\n\n    section(\"3. Genuinely checking: where the groundedness overlap is fooled\")\n    ev = \"The order is in transit.\"\n    cases = [(\"The order is in transit.\", \"faithful\"), (\"The order is not in transit.\", \"contradicts the evidence\"), (\"The order is in transit and will be free of charge.\", \"adds an unsupported claim\"),\n             (\"The in transit order is.\", \"scrambled words\"), (\"In transit.\", \"tiny but faithful\"), (\"The order is delivered.\", \"wrong status\")]\n    r2 = groundedness(\"The order is delivered.\", \"The order is not delivered.\")\n    print(f\"evidence 'The order is not delivered.' vs answer 'The order is delivered.' -> score {r2.score:.2f} passed={r2.passed}\")\n    for ans, kind in cases:\n        r = groundedness(ans, ev)\n        print(f\"{ans:52} {kind:28} score {r.score:.2f} passed={r.passed}\")\n    print(\"the contradiction 'not in transit' failed only because 'not' is a word the evidence lacks; when the evidence itself contains 'not' (not delivered) the opposite claim scored 1.00 and passed, and scrambled words passed too: overlap measures shared words, not agreement\")\n\n    section(\"4. Genuinely measuring: a noisy judge flipping the verdict (noise ASSUMED, seed 17, 2000 judgments each)\")\n    answers = [(\"The order is in transit.\", \"faithful\"), (\"The order is delivered.\", \"wrong status\")]\n    print(f\"{'noise sd':>9} {'faithful answer passes':>24} {'wrong answer passes':>21}\")\n    for noise in (0.0, 0.1, 0.2, 0.3):\n        j = ScriptedJudge(noise, 17)\n        rates = []\n        for ans, _ in answers:\n            rates.append(sum(j.judge(\"q\", \"The order is in transit.\", ans).passed for _ in range(2000)) / 2000)\n        print(f\"{noise:>9.1f} {rates[0]:>24.1%} {rates[1]:>21.1%}\")\n    print(\"with no noise the judge passed the wrong-status answer 100 percent of the time: its overlap score of 0.75 clears the 0.7 pass mark, so the rubric, not the noise, was the problem. Noise then made verdicts inconsistent in both directions (faithful answers failing, wrong ones passing less often); the noise levels are assumptions\")\n\n    section(\"5. Genuinely measuring: a low-confidence band instead of a single threshold\")\n    rng = random.Random(5)\n    scores = [min(1, max(0, rng.gauss(0.8, 0.2))) for _ in range(5000)] + [min(1, max(0, rng.gauss(0.35, 0.2))) for _ in range(5000)]\n    truth = [True] * 5000 + [False] * 5000\n    single = sum((s >= 0.7) == t for s, t in zip(scores, truth)) / len(scores)\n    sure = [(s, t) for s, t in zip(scores, truth) if s >= 0.75 or s <= 0.45]\n    acc_sure = sum((s >= 0.75) == t for s, t in sure) / len(sure)\n    print(f\"single threshold 0.7: {single:.1%} of verdicts correct on all 10000 | band (pass at 0.75+, fail at 0.45-, else send to a human): {acc_sure:.1%} correct on the {len(sure) / len(scores):.1%} it decided\")\n    print(\"score distributions are ASSUMED; abstaining on the middle band raises accuracy on what is decided and costs a share of decisions that go to review\")\n\n    section(\"6. Genuinely checking: the keyword guardrail\")\n    for text in (\"my password is hunter2\", \"my p@ssword is hunter2\", \"my pass word is hunter2\", \"credit-card 4111\", \"My Credit Card is 4111\", \"SSN 123-45-6789\", \"social security number 123-45-6789\"):\n        print(f\"{text:40} passed={guardrail(text).passed}\")\n    print(\"the guardrail is an evaluation with teeth: it can block, so its misses (spacing, symbols, synonyms) are safety gaps and not just a lower score\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. The evaluators on the lesson's cases ---\nmatching answer      EvalResult(name='groundedness', score=1.0, passed=True, reason='5 of 5 answer terms appear in the evidence')\ndelivered claim      EvalResult(name='groundedness', score=0.4, passed=False, reason='2 of 5 answer terms appear in the evidence')\nunsupported answer   EvalResult(name='groundedness', score=0.0, passed=False, reason='0 of 4 answer terms appear in the evidence')\nrelevance, right passage: EvalResult(name='retrieval_relevance', score=0.75, passed=True, reason='3 of 4 question terms found')\nrelevance, wrong passage: EvalResult(name='retrieval_relevance', score=0.0, passed=False, reason='0 of 4 question terms found')\nguardrail: EvalResult(name='guardrail', score=0.0, passed=False, reason='blocked term: password') | EvalResult(name='guardrail', score=1.0, passed=True, reason='no blocked term')\n\n--- 2. Genuinely measuring: lexical relevance on 12 hand-written question and passage pairs ---\nrule                               threshold  right passages kept  wrong passages kept\nall words                               0.20              2/6              1/6\nall words                               0.34              1/6              0/6\nall words                               0.50              1/6              0/6\nall words                               0.75              1/6              0/6\nstop words removed                      0.20              2/6              0/6\nstop words removed                      0.34              1/6              0/6\nstop words removed                      0.50              1/6              0/6\nstop words removed                      0.75              1/6              0/6\nrecall was poor at every setting: at most 2 of the 6 right passages were kept, because the right passages it missed share few words with the question (for example 'package' / 'shipment' and 'reset' / 'change'); the only wrong passage let through was at threshold 0.2 with stop words counted. The pairs were written by us, so the numbers are a demonstration\n\n--- 3. Genuinely checking: where the groundedness overlap is fooled ---\nevidence 'The order is not delivered.' vs answer 'The order is delivered.' -> score 1.00 passed=True\nThe order is in transit.                             faithful                     score 1.00 passed=True\nThe order is not in transit.                         contradicts the evidence     score 0.83 passed=False\nThe order is in transit and will be free of charge.  adds an unsupported claim    score 0.45 passed=False\nThe in transit order is.                             scrambled words              score 1.00 passed=True\nIn transit.                                          tiny but faithful            score 1.00 passed=True\nThe order is delivered.                              wrong status                 score 0.75 passed=False\nthe contradiction 'not in transit' failed only because 'not' is a word the evidence lacks; when the evidence itself contains 'not' (not delivered) the opposite claim scored 1.00 and passed, and scrambled words passed too: overlap measures shared words, not agreement\n\n--- 4. Genuinely measuring: a noisy judge flipping the verdict (noise ASSUMED, seed 17, 2000 judgments each) ---\n noise sd   faithful answer passes   wrong answer passes\n      0.0                   100.0%                100.0%\n      0.1                    99.9%                 67.2%\n      0.2                    93.0%                 59.0%\n      0.3                    84.4%                 56.5%\nwith no noise the judge passed the wrong-status answer 100 percent of the time: its overlap score of 0.75 clears the 0.7 pass mark, so the rubric, not the noise, was the problem. Noise then made verdicts inconsistent in both directions (faithful answers failing, wrong ones passing less often); the noise levels are assumptions\n\n--- 5. Genuinely measuring: a low-confidence band instead of a single threshold ---\nsingle threshold 0.7: 82.3% of verdicts correct on all 10000 | band (pass at 0.75+, fail at 0.45-, else send to a human): 95.1% correct on the 67.9% it decided\nscore distributions are ASSUMED; abstaining on the middle band raises accuracy on what is decided and costs a share of decisions that go to review\n\n--- 6. Genuinely checking: the keyword guardrail ---\nmy password is hunter2                   passed=False\nmy p@ssword is hunter2                   passed=True\nmy pass word is hunter2                  passed=True\ncredit-card 4111                         passed=True\nMy Credit Card is 4111                   passed=False\nSSN 123-45-6789                          passed=False\nsocial security number 123-45-6789       passed=True\nthe guardrail is an evaluation with teeth: it can block, so its misses (spacing, symbols, synonyms) are safety gaps and not just a lower score"
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
    "headingEn": "Genuinely Found: Word Overlap Has Poor Recall and Can Be Fooled Both Ways",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಪದ ಅತಿಕ್ರಮಣಕ್ಕೆ ಕಳಪೆ recall ಇದೆ ಮತ್ತು ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ಮೋಸಗೊಳಿಸಬಹುದು",
    "bodyEn": "Section 2, on 12 pairs we wrote: at every threshold and with or without stop words, the relevance score kept at most 2 of the 6 right passages, because the missed ones share few words with the question (for example \"package\" and \"shipment\"); the only wrong passage let through was at threshold 0.2 with stop words counted. Section 3: \"The order is not in transit.\" failed only because \"not\" is a word the evidence lacks; with the evidence \"The order is not delivered.\", the opposite claim \"The order is delivered.\" scored 1.00 and passed, and the scrambled \"The in transit order is.\" also scored 1.00. Overlap measures shared words, not agreement.",
    "bodyKn": "ವಿಭಾಗ 2, ನಾವು ಬರೆದ 12 ಜೋಡಿಗಳಲ್ಲಿ: ಪ್ರತಿ ಮಿತಿಯಲ್ಲಿ ಮತ್ತು stop words ಇದ್ದು ಇಲ್ಲದೆ relevance ಅಂಕ 6 ಸರಿಯಾದ ಪಠ್ಯಗಳಲ್ಲಿ ಹೆಚ್ಚೆಂದರೆ 2 ಉಳಿಸಿತು, ಏಕೆಂದರೆ ತಪ್ಪಿದವು ಪ್ರಶ್ನೆಯೊಂದಿಗೆ ಕಡಿಮೆ ಪದ ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ (ಉದಾ. \"package\" ಮತ್ತು \"shipment\"); ಹಾದುಹೋದ ಏಕೈಕ ತಪ್ಪು ಪಠ್ಯ stop words ಎಣಿಸಿದ ಮಿತಿ 0.2 ರಲ್ಲಿ. ವಿಭಾಗ 3: \"The order is not in transit.\" ವಿಫಲವಾದದ್ದು \"not\" ಸಾಕ್ಷ್ಯದಲ್ಲಿಲ್ಲದ ಪದವಾದ್ದರಿಂದ ಮಾತ್ರ; ಸಾಕ್ಷ್ಯ \"The order is not delivered.\" ಇದ್ದಾಗ ವಿರುದ್ಧ ಹೇಳಿಕೆ \"The order is delivered.\" 1.00 ಅಂಕ ಪಡೆದು ಪಾಸ್ ಆಯಿತು, ಮತ್ತು ಗೊಂದಲದ \"The in transit order is.\" ಕೂಡ 1.00. ಅತಿಕ್ರಮಣ ಹಂಚಿದ ಪದಗಳನ್ನು ಅಳೆಯುತ್ತದೆ, ಒಪ್ಪಿಗೆಯನ್ನಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: The Rubric Was the Problem, Noise Added Inconsistency, a Band Helps, a Guardrail Leaks",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Rubric ಸಮಸ್ಯೆ, ಶಬ್ದ ಅಸಂಗತತೆ ಸೇರಿಸಿತು, ಪಟ್ಟಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ, guardrail ಸೋರುತ್ತದೆ",
    "bodyEn": "Section 4 (assumed noise, seed 17, 2,000 judgments per row): with no noise the scripted judge passed the wrong-status answer 100 percent of the time, because its overlap score of 0.75 clears the 0.7 pass mark; so the rubric was the problem. Adding noise made verdicts inconsistent in both directions: at standard deviation 0.3 the faithful answer passed 84.4 percent of the time and the wrong one 56.5. Section 5 (assumed score distributions): a single 0.7 threshold was right on 82.3 percent of 10,000 verdicts, while a band (pass at 0.75 or more, fail at 0.45 or less, otherwise review) was right on 95.1 percent of the 67.9 percent it decided. Section 6: the keyword guardrail blocked \"my password is hunter2\" and \"My Credit Card is 4111\" but passed \"my p@ssword\", \"my pass word\", \"credit-card 4111\" and \"social security number\".",
    "bodyKn": "ವಿಭಾಗ 4 (ಊಹಿಸಿದ ಶಬ್ದ, seed 17, ಪ್ರತಿ ಸಾಲಿಗೆ 2,000 ತೀರ್ಪುಗಳು): ಶಬ್ದ ಇಲ್ಲದೆ ಸ್ಕ್ರಿಪ್ಟ್ judge ತಪ್ಪು-ಸ್ಥಿತಿ ಉತ್ತರವನ್ನು 100 ಶೇಕಡಾ ಪಾಸ್ ಮಾಡಿತು, ಏಕೆಂದರೆ ಅದರ ಅತಿಕ್ರಮಣ ಅಂಕ 0.75 ಪಾಸ್ ಗುರುತು 0.7 ದಾಟುತ್ತದೆ; ಆದ್ದರಿಂದ rubric ಸಮಸ್ಯೆ. ಶಬ್ದ ಸೇರಿಸಿದ್ದು ತೀರ್ಪುಗಳನ್ನು ಎರಡೂ ದಿಕ್ಕಿನಲ್ಲಿ ಅಸಂಗತಗೊಳಿಸಿತು: ಪ್ರಮಾಣಿತ ವಿಚಲನ 0.3 ರಲ್ಲಿ ನಿಷ್ಠ ಉತ್ತರ 84.4 ಶೇಕಡಾ ಮತ್ತು ತಪ್ಪು ಉತ್ತರ 56.5 ಶೇಕಡಾ ಪಾಸ್ ಆದವು. ವಿಭಾಗ 5 (ಊಹಿಸಿದ ಅಂಕ ವಿತರಣೆಗಳು): ಒಂದು 0.7 ಮಿತಿ 10,000 ತೀರ್ಪುಗಳಲ್ಲಿ 82.3 ಶೇಕಡಾ ಸರಿ, ಆದರೆ ಪಟ್ಟಿ (0.75 ಅಥವಾ ಹೆಚ್ಚಿಗೆ ಪಾಸ್, 0.45 ಅಥವಾ ಕಡಿಮೆಗೆ ವಿಫಲ, ಇಲ್ಲದಿದ್ದರೆ ಪರಿಶೀಲನೆ) ಅದು ನಿರ್ಧರಿಸಿದ 67.9 ಶೇಕಡಾದಲ್ಲಿ 95.1 ಶೇಕಡಾ ಸರಿ. ವಿಭಾಗ 6: ಕೀವರ್ಡ್ guardrail \"my password is hunter2\" ಮತ್ತು \"My Credit Card is 4111\" ತಡೆಯಿತು ಆದರೆ \"my p@ssword\", \"my pass word\", \"credit-card 4111\" ಮತ್ತು \"social security number\" ಹಾದುಹೋಗಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Tracing tells you what an agent did; evaluation tells you whether it was right, which is the question users care about. Because scores come from imperfect evaluators, their blind spots need to be measured and stated.",
    "bodyKn": "Tracing agent ಏನು ಮಾಡಿತು ಎಂದು ಹೇಳುತ್ತದೆ; evaluation ಅದು ಸರಿಯಾಗಿತ್ತೇ ಎಂದು ಹೇಳುತ್ತದೆ, ಬಳಕೆದಾರರು ಕಾಳಜಿ ವಹಿಸುವ ಪ್ರಶ್ನೆ ಅದು. ಅಂಕಗಳು ಅಪೂರ್ಣ evaluators ನಿಂದ ಬರುವುದರಿಂದ ಅವರ ಕುರುಡು ಬಿಂದುಗಳನ್ನು ಅಳೆದು ಹೇಳಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a high groundedness score means the answer is correct.\" Overlap scored an answer that contradicted its evidence 1.00, and a judge rubric with a 0.7 pass mark accepted a wrong answer scoring 0.75.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಹೆಚ್ಚಿನ groundedness ಅಂಕ ಎಂದರೆ ಉತ್ತರ ಸರಿ.\" ಅತಿಕ್ರಮಣ ತನ್ನ ಸಾಕ್ಷ್ಯಕ್ಕೆ ವಿರುದ್ಧವಾದ ಉತ್ತರಕ್ಕೆ 1.00 ನೀಡಿತು, ಮತ್ತು 0.7 ಪಾಸ್ ಗುರುತಿನ judge rubric 0.75 ಅಂಕದ ತಪ್ಪು ಉತ್ತರ ಸ್ವೀಕರಿಸಿತು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "EvalResult: name, score, passed, reason. Groundedness: whether the answer follows from the evidence. Retrieval relevance: whether the retrieved passage fits the question. LLM judge: a model that scores an answer against a rubric. Guardrail: an evaluation that can block output. Abstain band: scores sent to a human instead of decided.",
    "bodyKn": "EvalResult: ಹೆಸರು, ಅಂಕ, passed, ಕಾರಣ. Groundedness: ಉತ್ತರ ಸಾಕ್ಷ್ಯದಿಂದ ಬರುತ್ತದೆಯೇ. Retrieval relevance: ಪಡೆದ ಪಠ್ಯ ಪ್ರಶ್ನೆಗೆ ಹೊಂದುತ್ತದೆಯೇ. LLM judge: rubric ವಿರುದ್ಧ ಉತ್ತರಕ್ಕೆ ಅಂಕ ನೀಡುವ ಮಾದರಿ. Guardrail: ಔಟ್‌ಪುಟ್ ತಡೆಯಬಲ್ಲ evaluation. Abstain band: ನಿರ್ಧರಿಸದೆ ಮಾನವನಿಗೆ ಕಳುಹಿಸುವ ಅಂಕಗಳು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) Word-overlap relevance kept at most 2 of 6 right passages on our pairs. 2) A contradiction with a shared word scored 1.00. 3) The judge rubric passed a wrong answer with no noise at all. 4) Noise made verdicts inconsistent both ways. 5) A low-confidence band gave 95.1 percent accuracy on 67.9 percent decided against 82.3 percent for a single threshold. 6) The keyword guardrail missed spacing, symbols and synonyms.",
    "bodyKn": "1) ಪದ-ಅತಿಕ್ರಮಣ relevance ನಮ್ಮ ಜೋಡಿಗಳಲ್ಲಿ 6 ಸರಿಯಾದವುಗಳಲ್ಲಿ ಹೆಚ್ಚೆಂದರೆ 2 ಉಳಿಸಿತು. 2) ಹಂಚಿದ ಪದ ಇರುವ ವಿರೋಧಾಭಾಸ 1.00 ಅಂಕ ಪಡೆಯಿತು. 3) ಶಬ್ದವೇ ಇಲ್ಲದೆ judge rubric ತಪ್ಪು ಉತ್ತರ ಪಾಸ್ ಮಾಡಿತು. 4) ಶಬ್ದ ತೀರ್ಪುಗಳನ್ನು ಎರಡೂ ರೀತಿಯಲ್ಲಿ ಅಸಂಗತಗೊಳಿಸಿತು. 5) ಕಡಿಮೆ-ವಿಶ್ವಾಸ ಪಟ್ಟಿ ನಿರ್ಧರಿಸಿದ 67.9 ಶೇಕಡಾದಲ್ಲಿ 95.1 ಶೇಕಡಾ ನಿಖರತೆ ನೀಡಿತು, ಒಂದು ಮಿತಿ 82.3 ಶೇಕಡಾ. 6) ಕೀವರ್ಡ್ guardrail ಅಂತರ, ಚಿಹ್ನೆಗಳು ಮತ್ತು ಸಮಾನಾರ್ಥಕಗಳನ್ನು ತಪ್ಪಿಸಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did \"The order is delivered.\" pass against the evidence \"The order is not delivered.\"?",
      "qKn": "ಸಾಕ್ಷ್ಯ \"The order is not delivered.\" ವಿರುದ್ಧ \"The order is delivered.\" ಏಕೆ ಪಾಸ್ ಆಯಿತು?",
      "opts": [
       "The judge understood it",
       "Every answer word appears in the evidence, so overlap scored 1.00",
       "The threshold was 0",
       "The guardrail allowed it"
      ],
      "optsKn": [
       "Judge ಅರ್ಥಮಾಡಿಕೊಂಡಿತು",
       "ಉತ್ತರದ ಪ್ರತಿ ಪದ ಸಾಕ್ಷ್ಯದಲ್ಲಿದೆ, ಆದ್ದರಿಂದ ಅತಿಕ್ರಮಣ 1.00 ನೀಡಿತು",
       "ಮಿತಿ 0 ಆಗಿತ್ತು",
       "Guardrail ಅನುಮತಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why did the noiseless judge pass the wrong-status answer?",
      "qKn": "ಶಬ್ದರಹಿತ judge ತಪ್ಪು-ಸ್ಥಿತಿ ಉತ್ತರ ಏಕೆ ಪಾಸ್ ಮಾಡಿತು?",
      "opts": [
       "Noise was hidden",
       "Its overlap score of 0.75 cleared the 0.7 pass mark; the rubric was the problem",
       "The evidence was missing",
       "The model refused"
      ],
      "optsKn": [
       "ಶಬ್ದ ಮರೆಯಾಗಿತ್ತು",
       "ಅದರ ಅತಿಕ್ರಮಣ ಅಂಕ 0.75 ಪಾಸ್ ಗುರುತು 0.7 ದಾಟಿತು; rubric ಸಮಸ್ಯೆ",
       "ಸಾಕ್ಷ್ಯ ಇರಲಿಲ್ಲ",
       "ಮಾದರಿ ನಿರಾಕರಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What did the low-confidence band trade?",
      "qKn": "ಕಡಿಮೆ-ವಿಶ್ವಾಸ ಪಟ್ಟಿ ಏನನ್ನು ವಿನಿಮಯ ಮಾಡಿತು?",
      "opts": [
       "Accuracy for nothing",
       "Higher accuracy on the 67.9 percent it decided, with the rest sent to review",
       "Speed for accuracy",
       "Cost for tokens"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲದೆ ನಿಖರತೆ",
       "ಅದು ನಿರ್ಧರಿಸಿದ 67.9 ಶೇಕಡಾದಲ್ಲಿ ಹೆಚ್ಚಿನ ನಿಖರತೆ, ಉಳಿದವು ಪರಿಶೀಲನೆಗೆ",
       "ನಿಖರತೆಗೆ ವೇಗ",
       "tokens ಗೆ ವೆಚ್ಚ"
      ],
      "correct": 1
     },
     {
      "q": "Which inputs did the keyword guardrail miss?",
      "qKn": "ಕೀವರ್ಡ್ guardrail ಯಾವ ಇನ್‌ಪುಟ್‌ಗಳನ್ನು ತಪ್ಪಿಸಿತು?",
      "opts": [
       "\"my password is hunter2\"",
       "\"my p@ssword\" and \"my pass word\"",
       "\"SSN 123-45-6789\"",
       "None"
      ],
      "optsKn": [
       "\"my password is hunter2\"",
       "\"my p@ssword\" ಮತ್ತು \"my pass word\"",
       "\"SSN 123-45-6789\"",
       "ಯಾವುದೂ ಇಲ್ಲ"
      ],
      "correct": 1
     },
     {
      "q": "What status do the 12 pairs and score distributions have?",
      "qKn": "12 ಜೋಡಿಗಳು ಮತ್ತು ಅಂಕ ವಿತರಣೆಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Real production data",
       "Written or assumed for this lab, so they demonstrate and do not measure real evaluators",
       "Published benchmarks",
       "Customer logs"
      ],
      "optsKn": [
       "ನಿಜ production ದತ್ತಾಂಶ",
       "ಈ ಲ್ಯಾಬ್‌ಗಾಗಿ ಬರೆದ ಅಥವಾ ಊಹಿಸಿದ, ಆದ್ದರಿಂದ ಪ್ರದರ್ಶಿಸುತ್ತವೆ, ನಿಜ evaluators ಅಳೆಯುವುದಿಲ್ಲ",
       "ಪ್ರಕಟಿತ benchmarks",
       "ಗ್ರಾಹಕ ಲಾಗ್‌ಗಳು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
