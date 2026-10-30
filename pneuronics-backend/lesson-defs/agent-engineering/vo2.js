module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32154d",
 "order": 1,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Voice Agents: Pipecat and LiveKit Ideas (Part 2 of 3) — Barge-In, Buffers and Cancellation",
 "titleKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 2 / 3) — Barge-In, ಬಫರ್‌ಗಳು ಮತ್ತು ರದ್ದತಿ",
 "desc": "Run a speaker and a listener on real threads, then measure how fast a cancel stops speech, how chunk size and a transport buffer change it, whether the cancel reaches the LLM and how a VAD threshold trades missed against false interruptions.",
 "descKn": "ಮಾತನಾಡುವವ ಮತ್ತು ಕೇಳುವವನನ್ನು ನಿಜ threads ನಲ್ಲಿ ಚಲಾಯಿಸಿ, ನಂತರ cancel ಮಾತನ್ನು ಎಷ್ಟು ವೇಗವಾಗಿ ನಿಲ್ಲಿಸುತ್ತದೆ, ಚಂಕ್ ಗಾತ್ರ ಮತ್ತು transport ಬಫರ್ ಅದನ್ನು ಹೇಗೆ ಬದಲಿಸುತ್ತವೆ, cancel LLM ತಲುಪುತ್ತದೆಯೇ ಮತ್ತು VAD ಮಿತಿ ತಪ್ಪಿದ ಹಾಗೂ ಸುಳ್ಳು ಅಡಚಣೆಗಳನ್ನು ಹೇಗೆ ಹೊಂದಿಸುತ್ತದೆ ಎಂದು ಅಳೆಯಿರಿ.",
 "objectives": [
  "Explain why barge-in needs concurrency.",
  "Measure cancel latency against chunk size.",
  "Flush queued audio on cancel.",
  "Propagate cancel to earlier stages.",
  "Reason about false and missed interruptions."
 ],
 "objectivesKn": [
  "Barge-in ಗೆ ಏಕಕಾಲಿಕತೆ ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸಿ.",
  "ಚಂಕ್ ಗಾತ್ರದ ವಿರುದ್ಧ cancel ವಿಳಂಬ ಅಳೆಯಿರಿ.",
  "Cancel ನಲ್ಲಿ ಸರತಿ ಆಡಿಯೋ flush ಮಾಡಿ.",
  "Cancel ಅನ್ನು ಹಿಂದಿನ ಹಂತಗಳಿಗೆ ಹರಡಿ.",
  "ಸುಳ್ಳು ಮತ್ತು ತಪ್ಪಿದ ಅಡಚಣೆಗಳ ಬಗ್ಗೆ ತರ್ಕಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Voice Agents: Pipecat and LiveKit Ideas (Part 2 of 3)",
    "textKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 2 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 2 of 3: barge-in: cancelling speech, buffered audio and upstream propagation. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Pipecat and LiveKit voice agents, not the real software, and STT, the LLM and TTS are scripted stand-ins and audio is a list of energy values, so no real LLM behaviour is measured. The pasted Part 2 delivers a cancel frame to TTS only after the whole downstream run has finished, and says so itself. This lab uses real threads and real sleeps, so its timings are real, but the speech is a list of words and the interruption times and energy levels are assumed. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 2ನೆಯದು: barge-in: ಮಾತು ರದ್ದುಪಡಿಸುವುದು, ಬಫರ್ ಆದ ಆಡಿಯೋ ಮತ್ತು ಮೇಲ್ಮುಖ ಪ್ರಸರಣ. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Pipecat ಮತ್ತು LiveKit voice agents ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು STT, LLM ಮತ್ತು TTS ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು ಮತ್ತು ಆಡಿಯೋ ಶಕ್ತಿ ಮೌಲ್ಯಗಳ ಪಟ್ಟಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಭಾಗ 2 ಇಡೀ downstream ಓಟ ಮುಗಿದ ನಂತರವೇ cancel frame ಅನ್ನು TTS ಗೆ ತಲುಪಿಸುತ್ತದೆ, ಮತ್ತು ಅದನ್ನು ಸ್ವತಃ ಹೇಳುತ್ತದೆ. ಈ ಲ್ಯಾಬ್ ನಿಜ threads ಮತ್ತು ನಿಜ sleeps ಬಳಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದರ ಸಮಯಗಳು ನಿಜ, ಆದರೆ ಮಾತು ಪದಗಳ ಪಟ್ಟಿ ಮತ್ತು ಅಡಚಣೆ ಸಮಯ ಹಾಗೂ ಶಕ್ತಿ ಮಟ್ಟಗಳು ಊಹಿಸಿದ್ದು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Interrupting a Voice That Is Already Talking",
    "textKn": "ಈಗಾಗಲೇ ಮಾತನಾಡುತ್ತಿರುವ ಧ್ವನಿಗೆ ಅಡ್ಡಿ ಮಾಡುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Barge-In Is a Second Thread of Control",
    "headingKn": "Barge-In ಎರಡನೇ ನಿಯಂತ್ರಣ thread",
    "bodyEn": "When a user talks over the agent, something has to listen while the agent speaks, detect the interruption, and cancel every stage still working: the speaker, any audio already queued, and the LLM that is still generating. The pasted toy shows the cancel mechanism but runs it after the speech has finished, so nothing is actually interrupted. This part runs the speaker and the listener on separate threads and measures how fast, how completely and how reliably the interruption works.",
    "bodyKn": "ಬಳಕೆದಾರ agent ಮೇಲೆ ಮಾತನಾಡಿದಾಗ agent ಮಾತನಾಡುತ್ತಿರುವಾಗಲೇ ಏನಾದರೂ ಕೇಳಬೇಕು, ಅಡಚಣೆ ಪತ್ತೆ ಮಾಡಬೇಕು ಮತ್ತು ಇನ್ನೂ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಪ್ರತಿ ಹಂತ ರದ್ದುಪಡಿಸಬೇಕು: ಮಾತನಾಡುವವ, ಈಗಾಗಲೇ ಸರತಿಯಲ್ಲಿರುವ ಆಡಿಯೋ ಮತ್ತು ಇನ್ನೂ ಉತ್ಪಾದಿಸುತ್ತಿರುವ LLM. ಅಂಟಿಸಿದ ಆಟಿಕೆ cancel ಯಾಂತ್ರಿಕತೆ ತೋರಿಸುತ್ತದೆ ಆದರೆ ಮಾತು ಮುಗಿದ ನಂತರ ಚಲಾಯಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ನಿಜವಾಗಿ ಯಾವುದೂ ಅಡ್ಡಿಯಾಗುವುದಿಲ್ಲ. ಈ ಭಾಗ ಮಾತನಾಡುವವ ಮತ್ತು ಕೇಳುವವನನ್ನು ಬೇರೆ threads ನಲ್ಲಿ ಚಲಾಯಿಸಿ ಅಡಚಣೆ ಎಷ್ಟು ವೇಗ, ಎಷ್ಟು ಸಂಪೂರ್ಣ ಮತ್ತು ಎಷ್ಟು ವಿಶ್ವಾಸಾರ್ಹ ಎಂದು ಅಳೆಯುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "Speaker and Listener Threads",
    "headingKn": "ಮಾತನಾಡುವವ ಮತ್ತು ಕೇಳುವವ Threads",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">Barge-in needs a second thread of control</text><rect x=\"10\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"75\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">speaker thread</text><text x=\"75\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">TTS streaming words</text><rect x=\"160\" y=\"40\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"225\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">listener thread</text><text x=\"225\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">VAD hears the user</text><rect x=\"80\" y=\"110\" width=\"140\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">cancel upstream</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">TTS, LLM and buffered audio</text><path d=\"M225,74 L170,110 M75,74 L130,110\" stroke=\"#475569\"/><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">cancel must reach every stage that is still working</text></svg>",
    "captionEn": "The cancel must reach the speaker, the queued audio and the LLM.",
    "captionKn": "Cancel ಮಾತನಾಡುವವ, ಸರತಿ ಆಡಿಯೋ ಮತ್ತು LLM ತಲುಪಬೇಕು."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "What a cancel has to stop",
    "headingKn": "Cancel ಏನನ್ನು ನಿಲ್ಲಿಸಬೇಕು",
    "headers": [
     "Stage",
     "If not cancelled",
     "Measured here"
    ],
    "rows": [
     [
      "TTS synthesis",
      "keeps producing words",
      "lag up to one chunk"
     ],
     [
      "Transport buffer",
      "plays queued words",
      "12 extra words at buffer 10"
     ],
     [
      "LLM generation",
      "wastes tokens nobody hears",
      "49 wasted tokens"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Concurrent Experiments",
    "textKn": "ಏಕಕಾಲಿಕ ಪ್ರಯೋಗಗಳ ನಿರ್ಮಾಣ",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_2.py",
    "headingEn": "TTS with a cancel Event, sequential toy and threaded versions",
    "headingKn": "cancel Event ಇರುವ TTS, ಅನುಕ್ರಮ ಆಟಿಕೆ ಮತ್ತು threaded ಆವೃತ್ತಿಗಳು",
    "descEn": "TTS.speak checks a threading.Event between chunks. toy_sequential delivers the cancel after the speech, as the lesson does. concurrent() runs the speech on a thread and sets the cancel at a chosen time. buffered_transport puts a bounded queue between TTS and a playback thread, with or without a flush on cancel. LLMStream models a generator that may or may not receive the cancel.",
    "descKn": "TTS.speak ಚಂಕ್‌ಗಳ ನಡುವೆ threading.Event ಪರಿಶೀಲಿಸುತ್ತದೆ. toy_sequential ಲೆಸನ್‌ನಂತೆ ಮಾತಿನ ನಂತರ cancel ತಲುಪಿಸುತ್ತದೆ. concurrent() ಮಾತನ್ನು thread ನಲ್ಲಿ ಚಲಾಯಿಸಿ ಆಯ್ದ ಸಮಯದಲ್ಲಿ cancel ಹೊಂದಿಸುತ್ತದೆ. buffered_transport TTS ಮತ್ತು playback thread ನಡುವೆ ಮಿತಿಯ ಸರತಿ ಇಟ್ಟು, cancel ನಲ್ಲಿ flush ಇದ್ದು ಅಥವಾ ಇಲ್ಲದೆ. LLMStream cancel ಪಡೆಯಬಹುದಾದ ಅಥವಾ ಪಡೆಯದ ಜನರೇಟರ್ ಮಾದರಿ ಮಾಡುತ್ತದೆ.",
    "code": "class TTS:\n    def __init__(self, chunk_words=1):\n        self.cancelled = threading.Event()\n        self.chunk_words = chunk_words\n        self.spoken = []\n\n    def speak(self, words, out=None):\n        for i in range(0, len(words), self.chunk_words):\n            if self.cancelled.is_set():\n                break\n            chunk = words[i:i + self.chunk_words]\n            time.sleep(WORD_S * len(chunk))\n            for w in chunk:\n                self.spoken.append((time.perf_counter(), w))\n                if out is not None:\n                    out.put(w)\n        if out is not None:\n            out.put(None)\n\n\ndef toy_sequential(interrupt_after_s):\n    \"\"\"As taught: run the whole downstream first, then deliver the cancel.\"\"\"\n    tts = TTS()\n    t0 = time.perf_counter()\n    tts.speak(WORDS)\n    done = time.perf_counter() - t0\n    tts.cancelled.set()\n    return len(tts.spoken), done\n\n\ndef concurrent(interrupt_at_s, chunk_words=1):\n    tts = TTS(chunk_words)\n    t0 = time.perf_counter()\n    th = threading.Thread(target=tts.speak, args=(WORDS,))\n    th.start()\n    time.sleep(interrupt_at_s)\n    t_cancel = time.perf_counter()\n    tts.cancelled.set()\n    th.join()\n    last = tts.spoken[-1][0] if tts.spoken else t_cancel\n    return len(tts.spoken), max(0.0, last - t_cancel)\n\n\ndef buffered_transport(buffer_size, flush):\n    \"\"\"TTS fills a bounded queue and a transport drains it at playback speed; cancel may or may not flush the queue.\"\"\"\n    q = queue.Queue(maxsize=buffer_size)\n    played = []\n    tts = TTS()\n    stop = threading.Event()\n\n    def producer():\n        for w in WORDS:\n            if tts.cancelled.is_set():\n                break\n            time.sleep(0.005)\n            q.put(w)\n        q.put(None)\n\n    def consumer():\n        while True:\n            w = q.get()\n            if w is None or stop.is_set():\n                return\n            time.sleep(WORD_S)\n            played.append((time.perf_counter(), w))\n\n    pt, ct = threading.Thread(target=producer), threading.Thread(target=consumer)\n    pt.start(); ct.start()\n    time.sleep(0.15)\n    t_cancel = time.perf_counter()\n    tts.cancelled.set()\n    if flush:\n        try:\n            while True:\n                q.get_nowait()\n        except queue.Empty:\n            pass\n        stop.set()\n    pt.join()\n    try:\n        q.put_nowait(None)\n    except queue.Full:\n        pass\n    ct.join(timeout=3)\n    after = [w for t, w in played if t > t_cancel]\n    return len(played), len(after)\n\n\nclass LLMStream:\n    def __init__(self):\n        self.cancelled = threading.Event()\n        self.generated = 0\n\n    def run(self, n_tokens, per_token_s=0.01):\n        for _ in range(n_tokens):\n            if self.cancelled.is_set():\n                break\n            time.sleep(per_token_s)\n            self.generated += 1\n\n\ndef llm_after_cancel(propagate):\n    llm = LLMStream()\n    th = threading.Thread(target=llm.run, args=(60,))\n    th.start()\n    time.sleep(0.12)\n    at_cancel = llm.generated\n    if propagate:\n        llm.cancelled.set()\n    th.join()\n    return at_cancel, llm.generated"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_2.py",
    "headingEn": "main(): six experiments",
    "headingKn": "main(): ಆರು ಪ್ರಯೋಗಗಳು",
    "descEn": "main() compares the sequential toy with concurrent cancellation at four interruption times, varies the chunk size, varies the transport buffer with and without flushing, tests cancel propagation to the LLM and sweeps a VAD threshold for real interruptions against noises.",
    "descKn": "main() ಅನುಕ್ರಮ ಆಟಿಕೆಯನ್ನು ನಾಲ್ಕು ಅಡಚಣೆ ಸಮಯಗಳಲ್ಲಿ ಏಕಕಾಲಿಕ ರದ್ದತಿಯೊಂದಿಗೆ ಹೋಲಿಸುತ್ತದೆ, ಚಂಕ್ ಗಾತ್ರ ಬದಲಿಸುತ್ತದೆ, transport ಬಫರ್ ಅನ್ನು flush ಇದ್ದು ಇಲ್ಲದೆ ಬದಲಿಸುತ್ತದೆ, LLM ಗೆ cancel ಪ್ರಸರಣ ಪರೀಕ್ಷಿಸುತ್ತದೆ ಮತ್ತು ನಿಜ ಅಡಚಣೆಗಳು ಮತ್ತು ಶಬ್ದಗಳಿಗೆ VAD ಮಿತಿ ಸ್ವೀಪ್ ಮಾಡುತ್ತದೆ.",
    "code": "def section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    total_s = WORD_S * len(WORDS)\n    section(\"1. Genuinely checking: the sequential toy cannot interrupt anything\")\n    spoken, done = toy_sequential(0.2)\n    print(f\"user interrupts at 0.2s; the toy delivers the cancel after the run: words spoken {spoken}/{len(WORDS)}, the speech took {done:.2f}s\")\n    print(\"the cancel arrived after all\", len(WORDS), \"words, so the mechanism exists but nothing was actually cut off\")\n\n    section(\"2. Genuinely measuring: concurrent cancellation (real threads, 0.04 s per word)\")\n    print(f\"{'interrupt at':>13} {'words spoken':>13} {'of':>4}\")\n    for at in (0.0, 0.1, 0.2, 0.4):\n        n, lag = concurrent(at)\n        print(f\"{at:>12.2f}s {n:>13} {len(WORDS):>4}\")\n    print(\"cancelling from another thread stopped the speech at the point of the interruption, within about one word\")\n\n    section(\"3. Genuinely measuring: cancellation latency against chunk size (mean of 8 runs each)\")\n    print(f\"{'words per chunk':>16} {'mean lag after cancel (ms)':>28} {'worst lag (ms)':>16}\")\n    rng = random.Random(2)\n    for chunk in (1, 3, 6):\n        lags = []\n        for _ in range(8):\n            _, lag = concurrent(rng.uniform(0.1, 0.3), chunk)\n            lags.append(lag * 1000)\n        print(f\"{chunk:>16} {sum(lags) / len(lags):>28.0f} {max(lags):>16.0f}\")\n    print(\"a cancel flag is only checked between chunks, so audio keeps coming for up to one chunk; larger chunks are cheaper to synthesise but cut off later\")\n\n    section(\"4. Genuinely measuring: audio already buffered in the transport\")\n    print(f\"{'buffer':>7} {'flush on cancel':>16} {'words played after cancel':>26}\")\n    for buf in (1, 5, 10):\n        for flush in (False, True):\n            played, after = buffered_transport(buf, flush)\n            print(f\"{buf:>7} {str(flush):>16} {after:>26}\")\n    print(\"without flushing, the user kept hearing words that were already queued; the larger the buffer, the longer the voice talks over the interruption\")\n\n    section(\"5. Genuinely measuring: does the cancel reach the LLM\")\n    for propagate in (False, True):\n        at_cancel, final = llm_after_cancel(propagate)\n        print(f\"cancel propagated upstream to the LLM: {propagate!s:5} | tokens at cancel {at_cancel} | tokens generated in total {final} | wasted {final - at_cancel}\")\n    print(\"cancelling only the speech left the LLM generating a reply nobody would hear; the cancel has to travel up the pipeline as well as stop the speaker\")\n\n    section(\"6. Genuinely measuring: false and missed interruptions (energy levels ASSUMED, seed 31, 5000 events each)\")\n    rng = random.Random(31)\n    print(f\"{'threshold':>10} {'real interruptions caught':>26} {'noises mistaken for one':>25}\")\n    for th in (0.2, 0.3, 0.4, 0.5, 0.6):\n        caught = sum(rng.gauss(0.55, 0.15) >= th for _ in range(5000))\n        false = sum(rng.gauss(0.25, 0.12) >= th for _ in range(5000))\n        print(f\"{th:>10.1f} {caught / 5000:>26.1%} {false / 5000:>25.1%}\")\n    print(\"a sensitive threshold makes the agent stop for a cough, and a strict one makes the user shout to be heard; the two curves are assumptions chosen to show the trade-off, not measurements\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. Genuinely checking: the sequential toy cannot interrupt anything ---\nuser interrupts at 0.2s; the toy delivers the cancel after the run: words spoken 22/22, the speech took 0.89s\nthe cancel arrived after all 22 words, so the mechanism exists but nothing was actually cut off\n\n--- 2. Genuinely measuring: concurrent cancellation (real threads, 0.04 s per word) ---\n interrupt at  words spoken   of\n        0.00s             1   22\n        0.10s             3   22\n        0.20s             5   22\n        0.40s            10   22\ncancelling from another thread stopped the speech at the point of the interruption, within about one word\n\n--- 3. Genuinely measuring: cancellation latency against chunk size (mean of 8 runs each) ---\n words per chunk   mean lag after cancel (ms)   worst lag (ms)\n               1                           18               35\n               3                           58              116\n               6                           94              190\na cancel flag is only checked between chunks, so audio keeps coming for up to one chunk; larger chunks are cheaper to synthesise but cut off later\n\n--- 4. Genuinely measuring: audio already buffered in the transport ---\n buffer  flush on cancel  words played after cancel\n      1            False                          3\n      1             True                          1\n      5            False                          7\n      5             True                          1\n     10            False                         12\n     10             True                          1\nwithout flushing, the user kept hearing words that were already queued; the larger the buffer, the longer the voice talks over the interruption\n\n--- 5. Genuinely measuring: does the cancel reach the LLM ---\ncancel propagated upstream to the LLM: False | tokens at cancel 11 | tokens generated in total 60 | wasted 49\ncancel propagated upstream to the LLM: True  | tokens at cancel 11 | tokens generated in total 12 | wasted 1\ncancelling only the speech left the LLM generating a reply nobody would hear; the cancel has to travel up the pipeline as well as stop the speaker\n\n--- 6. Genuinely measuring: false and missed interruptions (energy levels ASSUMED, seed 31, 5000 events each) ---\n threshold  real interruptions caught   noises mistaken for one\n       0.2                      98.8%                     65.9%\n       0.3                      95.2%                     34.5%\n       0.4                      84.0%                      9.9%\n       0.5                      63.4%                      1.7%\n       0.6                      36.7%                      0.1%\na sensitive threshold makes the agent stop for a cough, and a strict one makes the user shout to be heard; the two curves are assumptions chosen to show the trade-off, not measurements"
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
    "headingEn": "Genuinely Found: The Sequential Toy Interrupted Nothing; Threads Did, Within a Chunk",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಅನುಕ್ರಮ ಆಟಿಕೆ ಯಾವುದನ್ನೂ ತಡೆಯಲಿಲ್ಲ; threads ತಡೆದವು, ಒಂದು ಚಂಕ್‌ನೊಳಗೆ",
    "bodyEn": "Section 1: with the cancel delivered after the run, all 22 of 22 words were spoken and the speech took 0.90 s, so the user's interruption at 0.2 s changed nothing. Section 2 (real threads, 0.04 s per word): cancelling at 0.0, 0.1, 0.2 and 0.4 s stopped the speech after 1, 3, 5 and 10 words. Section 3 (8 runs each): the lag between the cancel and the last audio averaged 18 ms with one word per chunk (worst 35), 58 ms with 3 words (worst 116) and 94 ms with 6 words (worst 190), because the flag is only checked between chunks. These timings are real on this machine and will vary on others.",
    "bodyKn": "ವಿಭಾಗ 1: ಓಟದ ನಂತರ cancel ತಲುಪಿಸಿದಾಗ 22 ರಲ್ಲಿ 22 ಪದಗಳನ್ನೂ ಹೇಳಲಾಯಿತು ಮತ್ತು ಮಾತು 0.90 s ತೆಗೆದುಕೊಂಡಿತು, ಆದ್ದರಿಂದ 0.2 s ನಲ್ಲಿ ಬಳಕೆದಾರರ ಅಡಚಣೆ ಏನನ್ನೂ ಬದಲಿಸಲಿಲ್ಲ. ವಿಭಾಗ 2 (ನಿಜ threads, ಪ್ರತಿ ಪದಕ್ಕೆ 0.04 s): 0.0, 0.1, 0.2 ಮತ್ತು 0.4 s ನಲ್ಲಿ cancel ಮಾಡಿದಾಗ ಮಾತು 1, 3, 5 ಮತ್ತು 10 ಪದಗಳ ನಂತರ ನಿಂತಿತು. ವಿಭಾಗ 3 (ತಲಾ 8 ಓಟ): cancel ಮತ್ತು ಕೊನೆಯ ಆಡಿಯೋ ನಡುವಿನ ವಿಳಂಬ ಪ್ರತಿ ಚಂಕ್‌ಗೆ ಒಂದು ಪದದೊಂದಿಗೆ ಸರಾಸರಿ 18 ms (ಕೆಟ್ಟದ್ದು 35), 3 ಪದಗಳೊಂದಿಗೆ 58 ms (ಕೆಟ್ಟದ್ದು 116) ಮತ್ತು 6 ಪದಗಳೊಂದಿಗೆ 94 ms (ಕೆಟ್ಟದ್ದು 190), ಏಕೆಂದರೆ ಧ್ವಜ ಚಂಕ್‌ಗಳ ನಡುವೆ ಮಾತ್ರ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ. ಈ ಸಮಯಗಳು ಈ ಯಂತ್ರದಲ್ಲಿ ನಿಜ ಮತ್ತು ಬೇರೆ ಯಂತ್ರಗಳಲ್ಲಿ ಬದಲಾಗುತ್ತವೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Queued Audio, a Running LLM and Noise All Undermine the Cancel",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಸರತಿ ಆಡಿಯೋ, ಚಲಿಸುತ್ತಿರುವ LLM ಮತ್ತು ಶಬ್ದ ಎಲ್ಲವೂ cancel ಅನ್ನು ದುರ್ಬಲಗೊಳಿಸುತ್ತವೆ",
    "bodyEn": "Section 4: with the cancel set but the transport queue not flushed, the user still heard 3, 7 and 12 more words at buffer sizes 1, 5 and 10; with a flush it was 1 (the word in flight) at every size. Section 5: when only the speech was cancelled, the LLM kept going from 11 tokens at the cancel to 60, wasting 49; with the cancel propagated upstream it stopped at 12, wasting 1. Section 6 (assumed energy curves, seed 31, 5,000 events per row): at threshold 0.2 real interruptions were caught 98.8 percent of the time and noises mistaken for one 65.9 percent; at 0.4, 84.0 and 9.9 percent; at 0.6, 36.7 and 0.1 percent. The curves are assumptions chosen to show the trade-off, not measurements.",
    "bodyKn": "ವಿಭಾಗ 4: cancel ಹೊಂದಿಸಿದರೂ transport ಸರತಿ flush ಮಾಡದಿದ್ದಾಗ ಬಫರ್ ಗಾತ್ರ 1, 5 ಮತ್ತು 10 ರಲ್ಲಿ ಬಳಕೆದಾರ ಇನ್ನೂ 3, 7 ಮತ್ತು 12 ಪದ ಕೇಳಿದ; flush ಇದ್ದಾಗ ಪ್ರತಿ ಗಾತ್ರದಲ್ಲೂ 1 (ಸಾಗಣೆಯಲ್ಲಿದ್ದ ಪದ). ವಿಭಾಗ 5: ಮಾತನ್ನು ಮಾತ್ರ ರದ್ದುಪಡಿಸಿದಾಗ LLM cancel ನಲ್ಲಿ 11 tokens ನಿಂದ 60 ಕ್ಕೆ ಮುಂದುವರಿದು 49 ವ್ಯರ್ಥ ಮಾಡಿತು; cancel ಮೇಲ್ಮುಖ ಪ್ರಸರಣವಾದಾಗ 12 ರಲ್ಲಿ ನಿಂತು 1 ವ್ಯರ್ಥ ಮಾಡಿತು. ವಿಭಾಗ 6 (ಊಹಿಸಿದ ಶಕ್ತಿ ವಕ್ರಗಳು, seed 31, ಪ್ರತಿ ಸಾಲಿಗೆ 5,000 ಘಟನೆಗಳು): ಮಿತಿ 0.2 ನಲ್ಲಿ ನಿಜ ಅಡಚಣೆಗಳು 98.8 ಶೇಕಡಾ ಹಿಡಿಯಲ್ಪಟ್ಟವು ಮತ್ತು ಶಬ್ದಗಳು ಅಡಚಣೆ ಎಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸಲ್ಪಟ್ಟವು 65.9 ಶೇಕಡಾ; 0.4 ರಲ್ಲಿ 84.0 ಮತ್ತು 9.9 ಶೇಕಡಾ; 0.6 ರಲ್ಲಿ 36.7 ಮತ್ತು 0.1 ಶೇಕಡಾ. ವಕ್ರಗಳು ಹೊಂದಾಣಿಕೆ ತೋರಿಸಲು ಆರಿಸಿದ ಊಹೆಗಳು, ಅಳತೆಗಳಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "Natural conversation depends on being interruptible. A cancel that is late, partial or too eager makes the agent talk over people, waste money on speech nobody hears, or stop for a cough.",
    "bodyKn": "ಸಹಜ ಸಂಭಾಷಣೆ ಅಡ್ಡಿಪಡಿಸಲು ಸಾಧ್ಯವಾಗುವುದರ ಮೇಲೆ ಅವಲಂಬಿತ. ತಡವಾದ, ಅಪೂರ್ಣ ಅಥವಾ ಅತಿ ಉತ್ಸಾಹದ cancel agent ಅನ್ನು ಜನರ ಮೇಲೆ ಮಾತನಾಡುವಂತೆ, ಯಾರೂ ಕೇಳದ ಮಾತಿಗೆ ಹಣ ವ್ಯರ್ಥ ಮಾಡುವಂತೆ ಅಥವಾ ಕೆಮ್ಮಿಗೆ ನಿಲ್ಲುವಂತೆ ಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"having a cancel frame means the agent supports barge-in.\" In the toy the cancel arrived after all 22 words had been spoken; barge-in needs concurrency, flushed buffers and propagation.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"cancel frame ಇದ್ದರೆ agent barge-in ಬೆಂಬಲಿಸುತ್ತದೆ.\" ಆಟಿಕೆಯಲ್ಲಿ ಎಲ್ಲಾ 22 ಪದಗಳನ್ನು ಹೇಳಿದ ನಂತರ cancel ಬಂತು; barge-in ಗೆ ಏಕಕಾಲಿಕತೆ, flush ಮಾಡಿದ ಬಫರ್‌ಗಳು ಮತ್ತು ಪ್ರಸರಣ ಬೇಕು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Barge-in: the user speaking over the agent. Cancel flag: a signal checked by a worker. Chunk: the unit between cancel checks. Flush: discarding audio already queued. Upstream propagation: sending the cancel back to earlier stages. False interruption: noise treated as speech.",
    "bodyKn": "Barge-in: ಬಳಕೆದಾರ agent ಮೇಲೆ ಮಾತನಾಡುವುದು. Cancel flag: ಕೆಲಸಗಾರ ಪರಿಶೀಲಿಸುವ ಸಂಕೇತ. Chunk: cancel ಪರಿಶೀಲನೆಗಳ ನಡುವಿನ ಘಟಕ. Flush: ಈಗಾಗಲೇ ಸರತಿಯಲ್ಲಿರುವ ಆಡಿಯೋ ತ್ಯಜಿಸುವುದು. Upstream propagation: cancel ಅನ್ನು ಹಿಂದಿನ ಹಂತಗಳಿಗೆ ಕಳುಹಿಸುವುದು. False interruption: ಶಬ್ದವನ್ನು ಮಾತು ಎಂದು ಪರಿಗಣಿಸುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) The sequential toy spoke all 22 words despite the interruption. 2) Threads stopped speech within about one word. 3) Cancel lag grew with chunk size: 18, 58 and 94 ms on average. 4) Unflushed buffers kept talking for 3, 7 and 12 more words. 5) Without upstream propagation the LLM wasted 49 tokens, with it 1. 6) The threshold trades missed interruptions against false ones.",
    "bodyKn": "1) ಅನುಕ್ರಮ ಆಟಿಕೆ ಅಡಚಣೆಯ ಹೊರತಾಗಿಯೂ ಎಲ್ಲಾ 22 ಪದ ಹೇಳಿತು. 2) Threads ಮಾತನ್ನು ಸುಮಾರು ಒಂದು ಪದದೊಳಗೆ ನಿಲ್ಲಿಸಿದವು. 3) Cancel ವಿಳಂಬ ಚಂಕ್ ಗಾತ್ರದೊಂದಿಗೆ ಬೆಳೆಯಿತು: ಸರಾಸರಿ 18, 58 ಮತ್ತು 94 ms. 4) flush ಮಾಡದ ಬಫರ್‌ಗಳು ಇನ್ನೂ 3, 7 ಮತ್ತು 12 ಪದ ಮಾತನಾಡಿದವು. 5) ಮೇಲ್ಮುಖ ಪ್ರಸರಣ ಇಲ್ಲದೆ LLM 49 tokens ವ್ಯರ್ಥ ಮಾಡಿತು, ಇದ್ದಾಗ 1. 6) ಮಿತಿ ತಪ್ಪಿದ ಅಡಚಣೆಗಳನ್ನು ಸುಳ್ಳು ಅಡಚಣೆಗಳ ವಿರುದ್ಧ ಹೊಂದಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "Why did the sequential toy not interrupt anything?",
      "qKn": "ಅನುಕ್ರಮ ಆಟಿಕೆ ಏಕೆ ಯಾವುದನ್ನೂ ತಡೆಯಲಿಲ್ಲ?",
      "opts": [
       "The cancel was wrong",
       "The cancel was delivered after the whole speech had run",
       "TTS ignored flags",
       "The words were too short"
      ],
      "optsKn": [
       "Cancel ತಪ್ಪಾಗಿತ್ತು",
       "ಇಡೀ ಮಾತು ಚಲಿಸಿದ ನಂತರ cancel ತಲುಪಿತು",
       "TTS ಧ್ವಜ ನಿರ್ಲಕ್ಷಿಸಿತು",
       "ಪದಗಳು ತುಂಬಾ ಚಿಕ್ಕದಾಗಿದ್ದವು"
      ],
      "correct": 1
     },
     {
      "q": "Why did larger chunks increase the lag after a cancel?",
      "qKn": "ದೊಡ್ಡ ಚಂಕ್‌ಗಳು cancel ನಂತರದ ವಿಳಂಬವನ್ನು ಏಕೆ ಹೆಚ್ಚಿಸಿದವು?",
      "opts": [
       "They are slower to synthesise",
       "The flag is only checked between chunks, so a whole chunk may still play",
       "Threads wait longer",
       "The VAD was off"
      ],
      "optsKn": [
       "ಅವನ್ನು ಸಂಶ್ಲೇಷಿಸುವುದು ನಿಧಾನ",
       "ಧ್ವಜ ಚಂಕ್‌ಗಳ ನಡುವೆ ಮಾತ್ರ ಪರಿಶೀಲಿಸಲ್ಪಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಇಡೀ ಚಂಕ್ ಇನ್ನೂ ಪ್ಲೇ ಆಗಬಹುದು",
       "Threads ಹೆಚ್ಚು ಕಾಯುತ್ತವೆ",
       "VAD ಆಫ್ ಆಗಿತ್ತು"
      ],
      "correct": 1
     },
     {
      "q": "How many extra words played at buffer 10 without a flush?",
      "qKn": "flush ಇಲ್ಲದೆ ಬಫರ್ 10 ರಲ್ಲಿ ಎಷ್ಟು ಹೆಚ್ಚುವರಿ ಪದಗಳು ಪ್ಲೇ ಆದವು?",
      "opts": [
       "1",
       "3",
       "12",
       "0"
      ],
      "optsKn": [
       "1",
       "3",
       "12",
       "0"
      ],
      "correct": 2
     },
     {
      "q": "What did upstream propagation change for the LLM?",
      "qKn": "ಮೇಲ್ಮುಖ ಪ್ರಸರಣ LLM ಗೆ ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "Nothing",
       "Wasted tokens fell from 49 to 1",
       "It generated more",
       "It was deleted"
      ],
      "optsKn": [
       "ಏನೂ ಇಲ್ಲ",
       "ವ್ಯರ್ಥ tokens 49 ರಿಂದ 1 ಕ್ಕೆ ಇಳಿದವು",
       "ಹೆಚ್ಚು ಉತ್ಪಾದಿಸಿತು",
       "ಅಳಿಸಲಾಯಿತು"
      ],
      "correct": 1
     },
     {
      "q": "Why are the threshold curves in section 6 not evidence about real speech?",
      "qKn": "ವಿಭಾಗ 6 ರ ಮಿತಿ ವಕ್ರಗಳು ನಿಜ ಮಾತಿನ ಬಗ್ಗೆ ಸಾಕ್ಷ್ಯ ಏಕಲ್ಲ?",
      "opts": [
       "They were measured on a call centre",
       "They are assumed energy distributions chosen to show a trade-off",
       "They are published",
       "They use real audio"
      ],
      "optsKn": [
       "ಅವನ್ನು ಕಾಲ್ ಸೆಂಟರ್‌ನಲ್ಲಿ ಅಳೆಯಲಾಗಿದೆ",
       "ಅವು ಹೊಂದಾಣಿಕೆ ತೋರಿಸಲು ಆರಿಸಿದ ಊಹಿಸಿದ ಶಕ್ತಿ ವಿತರಣೆಗಳು",
       "ಅವು ಪ್ರಕಟಿತ",
       "ಅವು ನಿಜ ಆಡಿಯೋ ಬಳಸುತ್ತವೆ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
