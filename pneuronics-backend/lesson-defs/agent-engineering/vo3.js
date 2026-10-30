module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32154d",
 "order": 2,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Voice Agents: Pipecat and LiveKit Ideas (Part 3 of 3) — Latency Budgets and Turn Detection",
 "titleKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 3 / 3) — ವಿಳಂಬ ಬಜೆಟ್‌ಗಳು ಮತ್ತು Turn Detection",
 "desc": "Model a voice agent's time to first audio with assumed stage latencies, compare batch, streaming and direct audio designs, and test fixed silence timeouts against a toy semantic turn rule on hand-written utterances.",
 "descKn": "ಊಹಿಸಿದ ಹಂತ ವಿಳಂಬಗಳೊಂದಿಗೆ ಧ್ವನಿ agent ನ ಮೊದಲ ಆಡಿಯೋ ಸಮಯ ಮಾದರಿ ಮಾಡಿ, batch, streaming ಮತ್ತು direct ಆಡಿಯೋ ವಿನ್ಯಾಸ ಹೋಲಿಸಿ, ನಿಗದಿತ ಮೌನ timeouts ಅನ್ನು ಕೈಬರಹದ ಮಾತುಗಳ ಮೇಲೆ ಆಟಿಕೆ ಅರ್ಥಪೂರ್ಣ ತಿರುವು ನಿಯಮದ ವಿರುದ್ಧ ಪರೀಕ್ಷಿಸಿ.",
 "objectives": [
  "Treat latency as a distribution.",
  "Explain why summing p95s is wrong.",
  "Compare cascaded and direct designs.",
  "Choose an endpointing policy.",
  "Be honest about assumed numbers."
 ],
 "objectivesKn": [
  "ವಿಳಂಬವನ್ನು ವಿತರಣೆಯಾಗಿ ಪರಿಗಣಿಸಿ.",
  "p95 ಕೂಡುವುದು ತಪ್ಪು ಏಕೆ ಎಂದು ವಿವರಿಸಿ.",
  "Cascaded ಮತ್ತು direct ವಿನ್ಯಾಸ ಹೋಲಿಸಿ.",
  "Endpointing ನೀತಿ ಆರಿಸಿ.",
  "ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳ ಬಗ್ಗೆ ಪ್ರಾಮಾಣಿಕರಾಗಿರಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Voice Agents: Pipecat and LiveKit Ideas (Part 3 of 3)",
    "textKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 3 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 3 of 3: latency budgets, cascaded versus direct audio, and turn detection. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Pipecat and LiveKit voice agents, not the real software, and STT, the LLM and TTS are scripted stand-ins and audio is a list of energy values, so no real LLM behaviour is measured. The pasted Part 3 compares Pipecat with LiveKit and cascaded with direct voice architectures in prose. Every stage latency, pause length and utterance here is an assumption or a hand-written example; no provider or product was measured, and the semantic rule is a toy. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 3ನೆಯದು: ವಿಳಂಬ ಬಜೆಟ್‌ಗಳು, cascaded ಮತ್ತು direct ಆಡಿಯೋ, ಮತ್ತು turn detection. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Pipecat ಮತ್ತು LiveKit voice agents ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು STT, LLM ಮತ್ತು TTS ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು ಮತ್ತು ಆಡಿಯೋ ಶಕ್ತಿ ಮೌಲ್ಯಗಳ ಪಟ್ಟಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 3 Pipecat ಅನ್ನು LiveKit ಜೊತೆ ಮತ್ತು cascaded ಅನ್ನು direct ಧ್ವನಿ ವಾಸ್ತುಶಿಲ್ಪಗಳೊಂದಿಗೆ ಗದ್ಯದಲ್ಲಿ ಹೋಲಿಸುತ್ತದೆ. ಇಲ್ಲಿನ ಪ್ರತಿ ಹಂತ ವಿಳಂಬ, ವಿರಾಮ ಉದ್ದ ಮತ್ತು ಮಾತು ಒಂದು ಊಹೆ ಅಥವಾ ಕೈಬರಹದ ಉದಾಹರಣೆ; ಯಾವುದೇ provider ಅಥವಾ ಉತ್ಪನ್ನ ಅಳೆಯಲಾಗಿಲ್ಲ, ಮತ್ತು ಅರ್ಥಪೂರ್ಣ ನಿಯಮ ಆಟಿಕೆ. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "The Caller Feels Time to First Audio",
    "textKn": "ಕರೆ ಮಾಡುವವ ಮೊದಲ ಆಡಿಯೋ ಸಮಯ ಅನುಭವಿಸುತ್ತಾನೆ",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Budgets, Overlap and the End of the Turn",
    "headingKn": "ಬಜೆಟ್‌ಗಳು, ಅತಿಕ್ರಮಣ ಮತ್ತು ತಿರುವಿನ ಅಂತ್ಯ",
    "bodyEn": "A voice agent's quality is largely the delay between the user finishing a thought and the first audio of the reply. That delay includes deciding the user has finished (endpointing), speech recognition, the first model token, the first synthesised audio and the network. A cascaded design pays for each stage; a direct audio model has fewer hops. Adding stage numbers is the wrong arithmetic when stages overlap or vary, and deciding when a turn has ended is itself part of the budget.",
    "bodyKn": "ಧ್ವನಿ agent ನ ಗುಣಮಟ್ಟ ಬಹುಮಟ್ಟಿಗೆ ಬಳಕೆದಾರ ಆಲೋಚನೆ ಮುಗಿಸಿದ ಮತ್ತು ಉತ್ತರದ ಮೊದಲ ಆಡಿಯೋ ನಡುವಿನ ವಿಳಂಬ. ಆ ವಿಳಂಬ ಬಳಕೆದಾರ ಮುಗಿಸಿದ್ದಾನೆ ಎಂದು ನಿರ್ಧರಿಸುವುದು (endpointing), ಮಾತು ಗುರುತಿಸುವಿಕೆ, ಮೊದಲ ಮಾದರಿ token, ಮೊದಲ ಸಂಶ್ಲೇಷಿತ ಆಡಿಯೋ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಒಳಗೊಂಡಿದೆ. Cascaded ವಿನ್ಯಾಸ ಪ್ರತಿ ಹಂತಕ್ಕೆ ಬೆಲೆ ತೆರುತ್ತದೆ; direct ಆಡಿಯೋ ಮಾದರಿಗೆ ಕಡಿಮೆ ಹಾಪ್‌ಗಳು. ಹಂತಗಳು ಅತಿಕ್ರಮಿಸಿದಾಗ ಅಥವಾ ಬದಲಾದಾಗ ಹಂತ ಸಂಖ್ಯೆಗಳನ್ನು ಕೂಡುವುದು ತಪ್ಪು ಅಂಕಗಣಿತ, ಮತ್ತು ತಿರುವು ಮುಗಿದಿದೆಯೇ ಎಂದು ನಿರ್ಧರಿಸುವುದು ಸ್ವತಃ ಬಜೆಟ್‌ನ ಭಾಗ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Where the Time Goes",
    "headingKn": "ಸಮಯ ಎಲ್ಲಿ ಹೋಗುತ್ತದೆ",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Latency is time to first audio</text><rect x=\"10\" y=\"30\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"75\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">cascaded</text><text x=\"75\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">VAD, STT, LLM, TTS</text><rect x=\"160\" y=\"30\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"225\" y=\"45\" fill=\"#e2e8f0\" text-anchor=\"middle\">direct audio model</text><text x=\"225\" y=\"57\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">fewer hops</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">turn detection</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">when has the user finished?</text><path d=\"M75,64 L130,110 M225,64 L170,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">the wait for the end of the turn is part of the budget</text></svg>",
    "captionEn": "Time to first audio is what the caller experiences.",
    "captionKn": "ಮೊದಲ ಆಡಿಯೋ ಸಮಯವೇ ಕರೆ ಮಾಡುವವ ಅನುಭವಿಸುವುದು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Cascaded versus direct (assumed numbers)",
    "headingKn": "Cascaded ಮತ್ತು direct (ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳು)",
    "headers": [
     "Design",
     "Median time to first audio",
     "p95"
    ],
    "rows": [
     [
      "cascaded, batch per stage",
      "1,725 ms",
      "2,315 ms"
     ],
     [
      "cascaded, streaming",
      "967 ms",
      "1,385 ms"
     ],
     [
      "direct audio model",
      "599 ms",
      "896 ms"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Latency and Turn Models",
    "textKn": "ವಿಳಂಬ ಮತ್ತು ತಿರುವು ಮಾದರಿಗಳ ನಿರ್ಮಾಣ",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_3.py",
    "headingEn": "Assumed stage latencies, TTFA models and turn rules",
    "headingKn": "ಊಹಿಸಿದ ಹಂತ ವಿಳಂಬಗಳು, TTFA ಮಾದರಿಗಳು ಮತ್ತು ತಿರುವು ನಿಯಮಗಳು",
    "descEn": "STAGES holds assumed median latencies with lognormal spread. cascaded_ttfa sums stage samples, adding whole-reply and whole-render waits when streaming is off. direct_ttfa models one speech-to-speech model. UTTERANCES are eight hand-written lines with mid-thought pauses. semantic_complete is a small rule on trailing words and punctuation.",
    "descKn": "STAGES ಲಾಗ್‌ನಾರ್ಮಲ್ ಹರಡುವಿಕೆಯ ಊಹಿಸಿದ ಮಧ್ಯಮ ವಿಳಂಬಗಳನ್ನು ಹೊಂದಿದೆ. cascaded_ttfa ಹಂತ ಮಾದರಿಗಳನ್ನು ಕೂಡುತ್ತದೆ, streaming ಆಫ್ ಆದಾಗ ಇಡೀ-ಉತ್ತರ ಮತ್ತು ಇಡೀ-render ಕಾಯುವಿಕೆ ಸೇರಿಸುತ್ತದೆ. direct_ttfa ಒಂದು speech-to-speech ಮಾದರಿ ಮಾಡುತ್ತದೆ. UTTERANCES ಮಧ್ಯ-ಆಲೋಚನೆ ವಿರಾಮಗಳಿರುವ ಎಂಟು ಕೈಬರಹದ ಸಾಲುಗಳು. semantic_complete ಕೊನೆಯ ಪದಗಳು ಮತ್ತು ವಿರಾಮಚಿಹ್ನೆಯ ಮೇಲೆ ಸಣ್ಣ ನಿಯಮ.",
    "code": "STAGES = {\"vad+endpoint\": (200, 0.25), \"stt final\": (150, 0.35), \"llm first token\": (350, 0.45), \"tts first audio\": (150, 0.35), \"network\": (80, 0.40)}\n\n\ndef sample(rng, median, sigma):\n    return rng.lognormvariate(__import__(\"math\").log(median), sigma)\n\n\ndef pct(xs, p):\n    xs = sorted(xs)\n    return xs[min(len(xs) - 1, int(p * len(xs)))]\n\n\ndef cascaded_ttfa(rng, streaming=True):\n    \"\"\"Time to first audio. Without streaming each stage must finish its whole output before the next starts.\"\"\"\n    t = {k: sample(rng, *v) for k, v in STAGES.items()}\n    if streaming:\n        return sum(t.values())\n    return sum(t.values()) + sample(rng, 400, 0.4) + sample(rng, 300, 0.4)  # whole LLM reply, then whole TTS render (assumed extra)\n\n\ndef direct_ttfa(rng):\n    t = sample(rng, 300, 0.40)  # speech-to-speech model first audio (ASSUMED)\n    return sample(rng, 200, 0.25) + t + sample(rng, 80, 0.40)\n\n\nUTTERANCES = [\n    (\"What's the weather in Bengaluru today?\", False, [0]),\n    (\"I would like to book a table for, um,\", True, [0.9]),\n    (\"My order number is 4 8 1 5 and\", True, [0.7, 1.2]),\n    (\"Yes.\", False, [0]),\n    (\"Can you tell me about the refund policy for\", True, [0.8]),\n    (\"Please cancel my subscription.\", False, [0]),\n    (\"So the problem started when I updated the app and then\", True, [1.0]),\n    (\"No thanks, that's all.\", False, [0]),\n]\n\n\ndef silence_endpoint_cuts(timeout_s, rng):\n    \"\"\"For utterances with a mid-thought pause, count how many were cut off by a fixed silence timeout.\"\"\"\n    cuts = total = 0\n    wait_added = []\n    for text, has_pause, pauses in UTTERANCES:\n        for p in pauses:\n            if p > 0:\n                total += 1\n                jitter = p * rng.uniform(0.85, 1.15)\n                cuts += jitter > timeout_s\n        wait_added.append(timeout_s)\n    return cuts, total, statistics.mean(wait_added)\n\n\ndef semantic_complete(text):\n    t = text.strip().lower()\n    if t.endswith((\".\", \"?\", \"!\")):\n        return True\n    return not t.endswith((\"and\", \"um,\", \"for\", \"then\", \"so\", \"but\", \",\"))"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_3.py",
    "headingEn": "main(): five experiments",
    "headingKn": "main(): ಐದು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares summed p95 values with the p95 of totals, streaming with batch and direct audio, sweeps a fixed silence timeout against cut-offs, tests the semantic rule on its eight examples and five extra lines, and compares fixed timeouts with the rule on 13 labelled utterances.",
    "descKn": "main() ಕೂಡಿದ p95 ಮೌಲ್ಯಗಳನ್ನು ಒಟ್ಟು ಮೊತ್ತಗಳ p95 ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ, streaming ಅನ್ನು batch ಮತ್ತು direct ಆಡಿಯೋ ಜೊತೆ ಹೋಲಿಸುತ್ತದೆ, ನಿಗದಿತ ಮೌನ timeout ಅನ್ನು ಕತ್ತರಿಸುವಿಕೆಗಳ ವಿರುದ್ಧ ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ, ಅರ್ಥಪೂರ್ಣ ನಿಯಮವನ್ನು ಅದರ ಎಂಟು ಉದಾಹರಣೆಗಳು ಮತ್ತು ಐದು ಹೆಚ್ಚುವರಿ ಸಾಲುಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಮತ್ತು ನಿಗದಿತ timeouts ಅನ್ನು ನಿಯಮದೊಂದಿಗೆ 13 ಲೇಬಲ್ ಮಾಡಿದ ಮಾತುಗಳಲ್ಲಿ ಹೋಲಿಸುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    rng = random.Random(77)\n    N = 20000\n\n    section(\"1. Genuinely measuring: the sum of stage latencies (stage medians and spreads ASSUMED, seed 77, 20000 turns)\")\n    print(f\"{'stage':18} {'median':>8} {'p95':>8}\")\n    per_stage = {k: [sample(rng, *v) for _ in range(N)] for k, v in STAGES.items()}\n    for k, xs in per_stage.items():\n        print(f\"{k:18} {statistics.median(xs):>8.0f} {pct(xs, .95):>8.0f}\")\n    total = [sum(per_stage[k][i] for k in STAGES) for i in range(N)]\n    print(f\"{'sum of the five':18} {statistics.median(total):>8.0f} {pct(total, .95):>8.0f}   (ms)\")\n    print(f\"adding the five p95 values gives {sum(pct(xs, .95) for xs in per_stage.values()):.0f} ms, but the p95 of the per-turn totals is {pct(total, .95):.0f} ms\")\n    print(\"stage delays rarely all hit their worst case on the same turn, so summing p95s overstates the p95 of the whole; it also hides that the sum is the wrong model when stages overlap\")\n\n    section(\"2. Genuinely measuring: streaming versus waiting for each stage to finish (extra waits ASSUMED)\")\n    rng = random.Random(78)\n    for streaming in (False, True):\n        xs = [cascaded_ttfa(rng, streaming) for _ in range(N)]\n        print(f\"{'streaming' if streaming else 'batch per stage':16} time to first audio: median {statistics.median(xs):>5.0f} ms | p95 {pct(xs, .95):>5.0f} ms | share over 1000 ms {sum(x > 1000 for x in xs) / N:.1%}\")\n    ys = [direct_ttfa(rng) for _ in range(N)]\n    print(f\"{'direct audio model':16} time to first audio: median {statistics.median(ys):>5.0f} ms | p95 {pct(ys, .95):>5.0f} ms | share over 1000 ms {sum(y > 1000 for y in ys) / N:.1%}\")\n    print(\"the ranking follows from the assumed numbers; the point is that time to first audio, not total time, is what the caller feels, and streaming changes which stage's delay counts\")\n\n    section(\"3. Genuinely measuring: fixed silence timeout versus cut-offs (pauses and jitter ASSUMED)\")\n    rng = random.Random(79)\n    print(f\"{'timeout':>9} {'utterances cut off mid-thought':>32} {'delay added to every turn':>27}\")\n    for timeout in (0.3, 0.5, 0.7, 0.9, 1.2, 1.5):\n        cuts = total = 0\n        for _ in range(2000):\n            c, t, w = silence_endpoint_cuts(timeout, rng)\n            cuts += c; total += t\n        print(f\"{timeout:>8.1f}s {cuts / total:>32.1%} {timeout * 1000:>25.0f}ms\")\n    print(\"a short timeout feels quick but interrupts people who pause to think; a long one is polite and makes every reply wait. A single timeout pays the full wait even for 'Yes.'\")\n\n    section(\"4. Genuinely checking: a simple semantic completeness rule on eight hand-written utterances\")\n    ok = 0\n    for text, incomplete, _ in UTTERANCES:\n        guess_done = semantic_complete(text)\n        correct = guess_done == (not incomplete)\n        ok += correct\n        print(f\"{text[:48]:50} predicted done={guess_done!s:5} truth done={(not incomplete)!s:5} {'ok' if correct else 'WRONG'}\")\n    print(f\"{ok}/8 correct\")\n    for text in (\"I'd like a table for four.\", \"Thanks, that's it!\", \"My order number is 4815\", \"I think it's the second\", \"Uh, let me see\"):\n        print(f\"  extra check: {text!r:36} predicted done={semantic_complete(text)}\")\n    print(\"the rule is a handful of trailing words and punctuation and was written while looking at these eight, so 8/8 proves little; 'My order number is 4815', 'I think it's the second' and 'Uh, let me see' are unfinished but end in no marker, and it calls all three finished. Real turn detection needs a model of meaning\")\n\n    section(\"5. Genuinely measuring: fixed timeouts versus a semantic rule plus timeouts (13 hand-labelled utterances, pauses ASSUMED at 0.9 s)\")\n    extra = [(\"I'd like a table for four.\", False), (\"Thanks, that's it!\", False), (\"My order number is 4815\", True), (\"I think it's the second\", True), (\"Uh, let me see\", True)]\n    pool = [(t, inc, (pauses[0] if pauses[0] else 0.0)) for t, inc, pauses in UTTERANCES] + [(t, inc, 0.9 if inc else 0.0) for t, inc in extra]\n    print(f\"{'policy':36} {'cut off mid-thought':>20} {'mean wait before replying':>27}\")\n    policies = {\n        \"fixed 0.5 s\": lambda text: 0.5,\n        \"fixed 1.2 s\": lambda text: 1.2,\n        \"semantic rule: 0.15 s if done, else 1.2 s\": lambda text: 0.15 if semantic_complete(text) else 1.2,\n    }\n    for name, wait_fn in policies.items():\n        cut = sum(1 for t, inc, p in pool if inc and p > wait_fn(t))\n        mean_wait = statistics.mean(wait_fn(t) for t, inc, p in pool)\n        print(f\"{name:36} {cut:>13}/{sum(inc for _, inc, _ in pool)} {mean_wait * 1000:>24.0f} ms\")\n    print(\"the rule waits briefly for sentences that look finished and long for ones that look unfinished, so its mean wait (473 ms) came out below even the fixed 0.5 s (500 ms) while cutting off 3 of the 7 unfinished utterances instead of 7 of 7; the fixed 1.2 s cut none but made every turn wait 1,200 ms. The 3 it cut off are the unfinished ones it called finished. The utterances are hand-labelled by us and the rule was written while looking at the first eight, so this is a demonstration, not an accuracy result\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely measuring: the sum of stage latencies (stage medians and spreads ASSUMED, seed 77, 20000 turns) ---\nstage                median      p95\nvad+endpoint            200      301\nstt final               150      266\nllm first token         350      736\ntts first audio         150      269\nnetwork                  80      155\nsum of the five         971     1387   (ms)\nadding the five p95 values gives 1726 ms, but the p95 of the per-turn totals is 1387 ms\nstage delays rarely all hit their worst case on the same turn, so summing p95s overstates the p95 of the whole; it also hides that the sum is the wrong model when stages overlap\n\n--- 2. Genuinely measuring: streaming versus waiting for each stage to finish (extra waits ASSUMED) ---\nbatch per stage  time to first audio: median  1725 ms | p95  2315 ms | share over 1000 ms 100.0%\nstreaming        time to first audio: median   967 ms | p95  1385 ms | share over 1000 ms 43.1%\ndirect audio model time to first audio: median   599 ms | p95   896 ms | share over 1000 ms 2.0%\nthe ranking follows from the assumed numbers; the point is that time to first audio, not total time, is what the caller feels, and streaming changes which stage's delay counts\n\n--- 3. Genuinely measuring: fixed silence timeout versus cut-offs (pauses and jitter ASSUMED) ---\n  timeout   utterances cut off mid-thought   delay added to every turn\n     0.3s                           100.0%                       300ms\n     0.5s                           100.0%                       500ms\n     0.7s                            88.6%                       700ms\n     0.9s                            48.5%                       900ms\n     1.2s                            10.4%                      1200ms\n     1.5s                             0.0%                      1500ms\na short timeout feels quick but interrupts people who pause to think; a long one is polite and makes every reply wait. A single timeout pays the full wait even for 'Yes.'\n\n--- 4. Genuinely checking: a simple semantic completeness rule on eight hand-written utterances ---\nWhat's the weather in Bengaluru today?             predicted done=True  truth done=True  ok\nI would like to book a table for, um,              predicted done=False truth done=False ok\nMy order number is 4 8 1 5 and                     predicted done=False truth done=False ok\nYes.                                               predicted done=True  truth done=True  ok\nCan you tell me about the refund policy for        predicted done=False truth done=False ok\nPlease cancel my subscription.                     predicted done=True  truth done=True  ok\nSo the problem started when I updated the app an   predicted done=False truth done=False ok\nNo thanks, that's all.                             predicted done=True  truth done=True  ok\n8/8 correct\n  extra check: \"I'd like a table for four.\"         predicted done=True\n  extra check: \"Thanks, that's it!\"                 predicted done=True\n  extra check: 'My order number is 4815'            predicted done=True\n  extra check: \"I think it's the second\"            predicted done=True\n  extra check: 'Uh, let me see'                     predicted done=True\nthe rule is a handful of trailing words and punctuation and was written while looking at these eight, so 8/8 proves little; 'My order number is 4815', 'I think it's the second' and 'Uh, let me see' are unfinished but end in no marker, and it calls all three finished. Real turn detection needs a model of meaning\n\n--- 5. Genuinely measuring: fixed timeouts versus a semantic rule plus timeouts (13 hand-labelled utterances, pauses ASSUMED at 0.9 s) ---\npolicy                                cut off mid-thought   mean wait before replying\nfixed 0.5 s                                      7/7                      500 ms\nfixed 1.2 s                                      0/7                     1200 ms\nsemantic rule: 0.15 s if done, else 1.2 s             3/7                      473 ms\nthe rule waits briefly for sentences that look finished and long for ones that look unfinished, so its mean wait (473 ms) came out below even the fixed 0.5 s (500 ms) while cutting off 3 of the 7 unfinished utterances instead of 7 of 7; the fixed 1.2 s cut none but made every turn wait 1,200 ms. The 3 it cut off are the unfinished ones it called finished. The utterances are hand-labelled by us and the rule was written while looking at the first eight, so this is a demonstration, not an accuracy result"
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
    "headingEn": "Genuinely Found: The Sum of p95s Overstates the p95 of the Whole",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: p95 ಗಳ ಮೊತ್ತ ಒಟ್ಟಿನ p95 ಅನ್ನು ಉತ್ಪ್ರೇಕ್ಷಿಸುತ್ತದೆ",
    "bodyEn": "Section 1 (assumed medians and spreads, seed 77, 20,000 turns): the five stages had medians of 200, 150, 350, 150 and 80 ms. Adding the five p95 values gives 1,726 ms, but the p95 of the per-turn totals was 1,387 ms, with a median total of 971 ms: stages rarely all hit their worst case on the same turn. Section 2 (assumed extra waits): batching each stage gave a median time to first audio of 1,725 ms with 100 percent of turns over 1,000 ms; streaming gave 967 ms (p95 1,385) with 43.1 percent over 1,000 ms; the direct audio model gave 599 ms (p95 896) with 2.0 percent over. These follow from the assumed numbers and say nothing about any real provider.",
    "bodyKn": "ವಿಭಾಗ 1 (ಊಹಿಸಿದ ಮಧ್ಯಮಗಳು ಮತ್ತು ಹರಡುವಿಕೆ, seed 77, 20,000 ತಿರುವುಗಳು): ಐದು ಹಂತಗಳ ಮಧ್ಯಮಗಳು 200, 150, 350, 150 ಮತ್ತು 80 ms. ಐದು p95 ಮೌಲ್ಯಗಳನ್ನು ಕೂಡಿದರೆ 1,726 ms, ಆದರೆ ಪ್ರತಿ-ತಿರುವಿನ ಒಟ್ಟು ಮೊತ್ತಗಳ p95 1,387 ms ಆಗಿತ್ತು, ಮಧ್ಯಮ ಒಟ್ಟು 971 ms: ಹಂತಗಳು ಒಂದೇ ತಿರುವಿನಲ್ಲಿ ಎಲ್ಲವೂ ಕೆಟ್ಟ ಸ್ಥಿತಿ ತಲುಪುವುದು ಅಪರೂಪ. ವಿಭಾಗ 2 (ಊಹಿಸಿದ ಹೆಚ್ಚುವರಿ ಕಾಯುವಿಕೆ): ಪ್ರತಿ ಹಂತ batch ಮಾಡಿದಾಗ ಮೊದಲ ಆಡಿಯೋ ಮಧ್ಯಮ ಸಮಯ 1,725 ms, 100 ಶೇಕಡಾ ತಿರುವುಗಳು 1,000 ms ಮೇಲೆ; streaming 967 ms (p95 1,385) ಮತ್ತು 43.1 ಶೇಕಡಾ ಮೇಲೆ; direct ಆಡಿಯೋ ಮಾದರಿ 599 ms (p95 896) ಮತ್ತು 2.0 ಶೇಕಡಾ ಮೇಲೆ. ಇವು ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳಿಂದ ಬರುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ ನಿಜ provider ಬಗ್ಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: A Timeout Trades Cut-Offs for Delay, and a Keyword Rule Is Not Turn Detection",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Timeout ಕತ್ತರಿಸುವಿಕೆಯನ್ನು ವಿಳಂಬಕ್ಕೆ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ಕೀವರ್ಡ್ ನಿಯಮ turn detection ಅಲ್ಲ",
    "bodyEn": "Section 3 (assumed pauses of 0.7 to 1.2 s in the four unfinished utterances): a 0.3 s or 0.5 s silence timeout cut off 100 percent of mid-thought pauses, 0.7 s cut off 88.6, 0.9 s 48.5, 1.2 s 10.4 and 1.5 s none, while every turn paid the whole timeout as delay. Section 4: the semantic rule scored 8 of 8 on the examples it was written against, which proves little; \"My order number is 4815\", \"I think it's the second\" and \"Uh, let me see\" are unfinished but end in no marker, and it called all three finished. Section 5 (13 hand-labelled utterances, assumed 0.9 s pauses): a fixed 0.5 s timeout cut off 7 of 7 unfinished utterances at a mean wait of 500 ms; a fixed 1.2 s cut none at 1,200 ms; the rule (0.15 s if it looks finished, else 1.2 s) cut 3 of 7 at a mean wait of 473 ms. This is a demonstration on examples we wrote, not an accuracy result.",
    "bodyKn": "ವಿಭಾಗ 3 (ನಾಲ್ಕು ಅಪೂರ್ಣ ಮಾತುಗಳಲ್ಲಿ ಊಹಿಸಿದ 0.7 ರಿಂದ 1.2 s ವಿರಾಮಗಳು): 0.3 s ಅಥವಾ 0.5 s ಮೌನ timeout 100 ಶೇಕಡಾ ಮಧ್ಯ-ಆಲೋಚನೆ ವಿರಾಮಗಳನ್ನು ಕತ್ತರಿಸಿತು, 0.7 s 88.6, 0.9 s 48.5, 1.2 s 10.4 ಮತ್ತು 1.5 s ಯಾವುದನ್ನೂ ಇಲ್ಲ, ಆದರೆ ಪ್ರತಿ ತಿರುವು ಇಡೀ timeout ಅನ್ನು ವಿಳಂಬವಾಗಿ ತೆತ್ತಿತು. ವಿಭಾಗ 4: ಅರ್ಥಪೂರ್ಣ ನಿಯಮ ತಾನು ಬರೆಯಲ್ಪಟ್ಟ ಉದಾಹರಣೆಗಳಲ್ಲಿ 8 ರಲ್ಲಿ 8 ಪಡೆಯಿತು, ಇದು ಕಡಿಮೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ; \"My order number is 4815\", \"I think it's the second\" ಮತ್ತು \"Uh, let me see\" ಅಪೂರ್ಣ ಆದರೆ ಯಾವುದೇ ಗುರುತಿಲ್ಲದೆ ಮುಗಿಯುತ್ತವೆ, ಮತ್ತು ಅದು ಮೂರನ್ನೂ ಮುಗಿದವು ಎಂದಿತು. ವಿಭಾಗ 5 (13 ಕೈಯಿಂದ ಲೇಬಲ್ ಮಾಡಿದ ಮಾತುಗಳು, ಊಹಿಸಿದ 0.9 s ವಿರಾಮ): ನಿಗದಿತ 0.5 s timeout 7 ಅಪೂರ್ಣ ಮಾತುಗಳಲ್ಲಿ 7 ಕತ್ತರಿಸಿ ಸರಾಸರಿ ಕಾಯುವಿಕೆ 500 ms; ನಿಗದಿತ 1.2 s ಯಾವುದನ್ನೂ ಕತ್ತರಿಸದೆ 1,200 ms; ನಿಯಮ (ಮುಗಿದಂತೆ ಕಂಡರೆ 0.15 s, ಇಲ್ಲದಿದ್ದರೆ 1.2 s) 7 ರಲ್ಲಿ 3 ಕತ್ತರಿಸಿ ಸರಾಸರಿ ಕಾಯುವಿಕೆ 473 ms. ಇದು ನಾವು ಬರೆದ ಉದಾಹರಣೆಗಳ ಪ್ರದರ್ಶನ, ನಿಖರತೆ ಫಲಿತಾಂಶವಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Callers judge a voice agent by when it starts talking and whether it talks over them. Treating latency as a distribution, measuring time to first audio, and choosing an endpointing policy deliberately are what turn a working demo into one that feels natural.",
    "bodyKn": "ಕರೆ ಮಾಡುವವರು ಧ್ವನಿ agent ಅನ್ನು ಅದು ಯಾವಾಗ ಮಾತನಾಡಲು ಆರಂಭಿಸುತ್ತದೆ ಮತ್ತು ಅವರ ಮೇಲೆ ಮಾತನಾಡುತ್ತದೆಯೇ ಎಂದು ಅಳೆಯುತ್ತಾರೆ. ವಿಳಂಬವನ್ನು ವಿತರಣೆಯಾಗಿ ಪರಿಗಣಿಸುವುದು, ಮೊದಲ ಆಡಿಯೋ ಸಮಯ ಅಳೆಯುವುದು ಮತ್ತು endpointing ನೀತಿಯನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಆರಿಸುವುದು ಕೆಲಸ ಮಾಡುವ ಡೆಮೊವನ್ನು ಸಹಜ ಅನಿಸುವಂತೆ ಮಾಡುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"total latency is the sum of the stage latencies.\" Stages overlap when streaming and vary independently; here the sum of p95s was 1,726 ms against a true p95 of 1,387 ms.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ಒಟ್ಟು ವಿಳಂಬ ಹಂತ ವಿಳಂಬಗಳ ಮೊತ್ತ.\" Streaming ಇದ್ದಾಗ ಹಂತಗಳು ಅತಿಕ್ರಮಿಸುತ್ತವೆ ಮತ್ತು ಸ್ವತಂತ್ರವಾಗಿ ಬದಲಾಗುತ್ತವೆ; ಇಲ್ಲಿ p95 ಗಳ ಮೊತ್ತ 1,726 ms ಆದರೆ ನಿಜ p95 1,387 ms."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Time to first audio: delay from the end of the user's turn to the first reply audio. Endpointing: deciding the user has finished. Cascaded: separate VAD, STT, LLM and TTS stages. Direct audio model: speech in, speech out. p95: the value 95 percent of turns stay under.",
    "bodyKn": "Time to first audio: ಬಳಕೆದಾರರ ತಿರುವಿನ ಅಂತ್ಯದಿಂದ ಉತ್ತರದ ಮೊದಲ ಆಡಿಯೋ ವರೆಗಿನ ವಿಳಂಬ. Endpointing: ಬಳಕೆದಾರ ಮುಗಿಸಿದ್ದಾನೆ ಎಂದು ನಿರ್ಧರಿಸುವುದು. Cascaded: ಪ್ರತ್ಯೇಕ VAD, STT, LLM ಮತ್ತು TTS ಹಂತಗಳು. Direct audio model: ಮಾತು ಒಳಗೆ, ಮಾತು ಹೊರಗೆ. p95: 95 ಶೇಕಡಾ ತಿರುವುಗಳು ಕೆಳಗೆ ಇರುವ ಮೌಲ್ಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The sum of five p95s (1,726 ms) overstated the p95 of totals (1,387 ms). 2) Under assumed numbers, streaming cut the median time to first audio from 1,725 to 967 ms. 3) A 0.5 s timeout cut off every unfinished utterance; 1.5 s cut none but added 1,500 ms to every turn. 4) A keyword rule scored 8 of 8 on examples it was written for and failed on unfinished sentences without markers. 5) The hybrid cut 3 of 7 at a mean wait of 473 ms. 6) All of this rests on assumed numbers.",
    "bodyKn": "1) ಐದು p95 ಗಳ ಮೊತ್ತ (1,726 ms) ಒಟ್ಟು ಮೊತ್ತಗಳ p95 (1,387 ms) ಅನ್ನು ಉತ್ಪ್ರೇಕ್ಷಿಸಿತು. 2) ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳಲ್ಲಿ streaming ಮೊದಲ ಆಡಿಯೋ ಮಧ್ಯಮ ಸಮಯವನ್ನು 1,725 ರಿಂದ 967 ms ಗೆ ಇಳಿಸಿತು. 3) 0.5 s timeout ಪ್ರತಿ ಅಪೂರ್ಣ ಮಾತನ್ನು ಕತ್ತರಿಸಿತು; 1.5 s ಯಾವುದನ್ನೂ ಕತ್ತರಿಸಲಿಲ್ಲ ಆದರೆ ಪ್ರತಿ ತಿರುವಿಗೆ 1,500 ms ಸೇರಿಸಿತು. 4) ಕೀವರ್ಡ್ ನಿಯಮ ತಾನು ಬರೆಯಲ್ಪಟ್ಟ ಉದಾಹರಣೆಗಳಲ್ಲಿ 8 ರಲ್ಲಿ 8 ಪಡೆದು ಗುರುತಿಲ್ಲದ ಅಪೂರ್ಣ ವಾಕ್ಯಗಳಲ್ಲಿ ವಿಫಲವಾಯಿತು. 5) Hybrid ಸರಾಸರಿ ಕಾಯುವಿಕೆ 473 ms ನೊಂದಿಗೆ 7 ರಲ್ಲಿ 3 ಕತ್ತರಿಸಿತು. 6) ಇದೆಲ್ಲವೂ ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳ ಮೇಲೆ ನಿಂತಿದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why was the sum of the five p95 values larger than the p95 of the totals?",
      "qKn": "ಐದು p95 ಮೌಲ್ಯಗಳ ಮೊತ್ತ ಒಟ್ಟು ಮೊತ್ತಗಳ p95 ಗಿಂತ ದೊಡ್ಡದು ಏಕೆ?",
      "opts": [
       "A bug",
       "Stages rarely all hit their worst case on the same turn",
       "p95 cannot be summed",
       "Streaming was on"
      ],
      "optsKn": [
       "ದೋಷ",
       "ಹಂತಗಳು ಒಂದೇ ತಿರುವಿನಲ್ಲಿ ಎಲ್ಲವೂ ಕೆಟ್ಟ ಸ್ಥಿತಿ ತಲುಪುವುದು ಅಪರೂಪ",
       "p95 ಕೂಡಲಾಗದು",
       "Streaming ಆನ್ ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "What is the status of the stage latencies and the 599/967/1,725 ms results?",
      "qKn": "ಹಂತ ವಿಳಂಬಗಳು ಮತ್ತು 599/967/1,725 ms ಫಲಿತಾಂಶಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Measured from products",
       "Consequences of assumed numbers, not provider measurements",
       "Published benchmarks",
       "Real call logs"
      ],
      "optsKn": [
       "ಉತ್ಪನ್ನಗಳಿಂದ ಅಳೆದವು",
       "ಊಹಿಸಿದ ಸಂಖ್ಯೆಗಳ ಪರಿಣಾಮಗಳು, provider ಅಳತೆಗಳಲ್ಲ",
       "ಪ್ರಕಟಿತ benchmarks",
       "ನಿಜ ಕರೆ ಲಾಗ್‌ಗಳು"
      ],
      "correct": 1
     },
     {
      "q": "What did a 0.5 s fixed timeout do to unfinished utterances with 0.7 to 1.2 s pauses?",
      "qKn": "0.7 ರಿಂದ 1.2 s ವಿರಾಮಗಳ ಅಪೂರ್ಣ ಮಾತುಗಳಿಗೆ 0.5 s ನಿಗದಿತ timeout ಏನು ಮಾಡಿತು?",
      "opts": [
       "Cut none",
       "Cut off all of them",
       "Cut half",
       "Doubled them"
      ],
      "optsKn": [
       "ಯಾವುದನ್ನೂ ಕತ್ತರಿಸಲಿಲ್ಲ",
       "ಎಲ್ಲವನ್ನೂ ಕತ್ತರಿಸಿತು",
       "ಅರ್ಧ ಕತ್ತರಿಸಿತು",
       "ದ್ವಿಗುಣಗೊಳಿಸಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why does 8 of 8 for the semantic rule prove little?",
      "qKn": "ಅರ್ಥಪೂರ್ಣ ನಿಯಮದ 8 ರಲ್ಲಿ 8 ಏಕೆ ಕಡಿಮೆ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ?",
      "opts": [
       "It was tested on real calls",
       "The rule was written while looking at those same eight utterances",
       "It used a model",
       "It was too slow"
      ],
      "optsKn": [
       "ಅದನ್ನು ನಿಜ ಕರೆಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸಲಾಗಿತ್ತು",
       "ಅದೇ ಎಂಟು ಮಾತುಗಳನ್ನು ನೋಡುತ್ತಾ ನಿಯಮ ಬರೆಯಲಾಗಿತ್ತು",
       "ಅದು ಮಾದರಿ ಬಳಸಿತು",
       "ಅದು ತುಂಬಾ ನಿಧಾನ"
      ],
      "correct": 1
     },
     {
      "q": "What happened to unfinished sentences with no ending marker, like \"I think it's the second\"?",
      "qKn": "\"I think it's the second\" ನಂತಹ ಅಂತ್ಯ ಗುರುತಿಲ್ಲದ ಅಪೂರ್ಣ ವಾಕ್ಯಗಳಿಗೆ ಏನಾಯಿತು?",
      "opts": [
       "The rule called them unfinished",
       "The rule called them finished, so they were cut off",
       "They were ignored",
       "They were completed"
      ],
      "optsKn": [
       "ನಿಯಮ ಅವನ್ನು ಅಪೂರ್ಣ ಎಂದಿತು",
       "ನಿಯಮ ಅವನ್ನು ಮುಗಿದವು ಎಂದಿತು, ಆದ್ದರಿಂದ ಕತ್ತರಿಸಲ್ಪಟ್ಟವು",
       "ನಿರ್ಲಕ್ಷಿಸಲಾಯಿತು",
       "ಪೂರ್ಣಗೊಳಿಸಲಾಯಿತು"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
