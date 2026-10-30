module.exports = {
 "phaseId": "6a369d6066020ed05b32150b",
 "moduleId": "6a369d6166020ed05b32154d",
 "order": 0,
 "type": "interactive",
 "duration": 60,
 "difficulty": "intermediate",
 "status": "published",
 "title": "Voice Agents: Pipecat and LiveKit Ideas (Part 1 of 3) — Frames, Processors and Voice Activity Detection",
 "titleKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 1 / 3) — Frames, Processors ಮತ್ತು Voice Activity Detection",
 "desc": "Build a five-stage frame pipeline and an energy-based VAD, then measure what the toy VAD passes, how a hangover and a threshold trade clipped speech against passed silence, frames that vanish silently and the pipeline's own cost.",
 "descKn": "ಐದು-ಹಂತದ frame ಪೈಪ್‌ಲೈನ್ ಮತ್ತು ಶಕ್ತಿ-ಆಧಾರಿತ VAD ನಿರ್ಮಿಸಿ, ನಂತರ ಆಟಿಕೆ VAD ಏನು ಹಾದುಹೋಗಿಸುತ್ತದೆ, hangover ಮತ್ತು ಮಿತಿ ಕತ್ತರಿಸಿದ ಮಾತು ಮತ್ತು ಹಾದುಹೋದ ಮೌನದ ನಡುವೆ ಹೇಗೆ ಹೊಂದಾಣಿಕೆ ಮಾಡುತ್ತವೆ, ಮೌನವಾಗಿ ಮಾಯವಾಗುವ frames ಮತ್ತು ಪೈಪ್‌ಲೈನ್‌ನ ಸ್ವಂತ ವೆಚ್ಚ ಅಳೆಯಿರಿ.",
 "objectives": [
  "Describe frames and processors.",
  "Build a pipeline that fans frames out.",
  "Explain VAD thresholds and hangover.",
  "Spot silently dropped frames.",
  "Separate plumbing cost from model cost."
 ],
 "objectivesKn": [
  "Frames ಮತ್ತು processors ವಿವರಿಸಿ.",
  "Frames ಹರಡುವ ಪೈಪ್‌ಲೈನ್ ನಿರ್ಮಿಸಿ.",
  "VAD ಮಿತಿ ಮತ್ತು hangover ವಿವರಿಸಿ.",
  "ಮೌನವಾಗಿ ಬಿದ್ದ frames ಗುರುತಿಸಿ.",
  "ನಳ ವೆಚ್ಚ ಮತ್ತು ಮಾದರಿ ವೆಚ್ಚ ಬೇರ್ಪಡಿಸಿ."
 ],
 "blocks": [
  {
   "type": "heading",
   "data": {
    "textEn": "Voice Agents: Pipecat and LiveKit Ideas (Part 1 of 3)",
    "textKn": "Voice Agents: Pipecat ಮತ್ತು LiveKit ಕಲ್ಪನೆಗಳು (ಭಾಗ 1 / 3)",
    "level": "H1"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Lesson Info",
    "headingKn": "Lesson ಮಾಹಿತಿ",
    "bodyEn": "• Type: Build · Language: Python (stdlib only) · Time: ~60 minutes. Part 1 of 3: frames, processors and voice activity detection. Every output below was genuinely produced by the lab file on Python 3.14.5. This is our own stdlib model of the ideas behind Pipecat and LiveKit voice agents, not the real software, and STT, the LLM and TTS are scripted stand-ins and audio is a list of energy values, so no real LLM behaviour is measured. The pasted lesson describes a Pipecat-shaped pipeline in toy code; this lab rebuilds it and adds an energy-based VAD. No Pipecat or LiveKit code, no audio and no real STT, LLM or TTS is used, and the audio levels in the VAD experiments are assumed values. This lesson replaces the earlier lesson at this position.",
    "bodyKn": "• Type: Build · ಭಾಷೆ: Python (stdlib ಮಾತ್ರ) · ಸಮಯ: ~60 ನಿಮಿಷ. ಮೂರು ಭಾಗಗಳಲ್ಲಿ 1ನೆಯದು: frames, processors ಮತ್ತು voice activity detection. ಕೆಳಗಿನ ಎಲ್ಲಾ output ಲ್ಯಾಬ್ ಫೈಲ್ ಮೂಲಕ Python 3.14.5 ನಲ್ಲಿ ನಿಜವಾಗಿ ಪಡೆದದ್ದು. ಇದು Pipecat ಮತ್ತು LiveKit voice agents ಹಿಂದಿನ ಕಲ್ಪನೆಗಳ ನಮ್ಮದೇ stdlib ಮಾದರಿ, ನಿಜವಾದ ಸಾಫ್ಟ್‌ವೇರ್ ಅಲ್ಲ, ಮತ್ತು STT, LLM ಮತ್ತು TTS ಸ್ಕ್ರಿಪ್ಟ್ ಬದಲಿಗಳು ಮತ್ತು ಆಡಿಯೋ ಶಕ್ತಿ ಮೌಲ್ಯಗಳ ಪಟ್ಟಿ, ಆದ್ದರಿಂದ ನಿಜವಾದ LLM ವರ್ತನೆ ಅಳೆಯಲ್ಪಟ್ಟಿಲ್ಲ. ಅಂಟಿಸಿದ ಲೆಸನ್ ಆಟಿಕೆ ಕೋಡ್‌ನಲ್ಲಿ Pipecat-ಶೈಲಿಯ ಪೈಪ್‌ಲೈನ್ ವಿವರಿಸುತ್ತದೆ; ಈ ಲ್ಯಾಬ್ ಅದನ್ನು ಮರುನಿರ್ಮಿಸಿ ಶಕ್ತಿ-ಆಧಾರಿತ VAD ಸೇರಿಸುತ್ತದೆ. ಯಾವುದೇ Pipecat ಅಥವಾ LiveKit ಕೋಡ್, ಆಡಿಯೋ ಅಥವಾ ನಿಜ STT, LLM, TTS ಬಳಸಿಲ್ಲ, ಮತ್ತು VAD ಪ್ರಯೋಗಗಳ ಆಡಿಯೋ ಮಟ್ಟಗಳು ಊಹಿಸಿದ ಮೌಲ್ಯಗಳು. ಈ lesson ಈ ಸ್ಥಾನದ ಹಿಂದಿನ lesson ಅನ್ನು ಬದಲಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "A Pipeline of Frames",
    "textKn": "Frames ನ ಪೈಪ್‌ಲೈನ್",
    "level": "H2"
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Frames, Processors and the Forward Path",
    "headingKn": "Frames, Processors ಮತ್ತು ಮುಂದಿನ ಮಾರ್ಗ",
    "bodyEn": "A voice agent moves typed frames (audio, speech, transcript, text, tts_audio) through processors: VAD decides whether audio is speech, STT turns speech into text, an LLM writes a reply, TTS turns it into audio and a transport sends it. Each processor passes along frames it does not understand and may return zero, one or many frames. The pipeline itself is cheap; what matters is how each stage decides, which is where this lab probes.",
    "bodyKn": "ಧ್ವನಿ agent ಟೈಪ್ ಮಾಡಿದ frames (audio, speech, transcript, text, tts_audio) ಅನ್ನು processors ಮೂಲಕ ಚಲಿಸುತ್ತದೆ: VAD ಆಡಿಯೋ ಮಾತು ಹೌದೇ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ, STT ಮಾತನ್ನು ಪಠ್ಯವಾಗಿ ಬದಲಿಸುತ್ತದೆ, LLM ಉತ್ತರ ಬರೆಯುತ್ತದೆ, TTS ಅದನ್ನು ಆಡಿಯೋ ಮಾಡುತ್ತದೆ ಮತ್ತು transport ಕಳುಹಿಸುತ್ತದೆ. ಪ್ರತಿ processor ತನಗೆ ಅರ್ಥವಾಗದ frames ಮುಂದೆ ಕಳುಹಿಸುತ್ತದೆ ಮತ್ತು ಶೂನ್ಯ, ಒಂದು ಅಥವಾ ಹಲವು frames ಮರಳಿಸಬಹುದು. ಪೈಪ್‌ಲೈನ್ ಸ್ವತಃ ಅಗ್ಗ; ಮುಖ್ಯವಾದದ್ದು ಪ್ರತಿ ಹಂತ ಹೇಗೆ ನಿರ್ಧರಿಸುತ್ತದೆ ಎಂಬುದು, ಈ ಲ್ಯಾಬ್ ಅದನ್ನೇ ಪರೀಕ್ಷಿಸುತ್ತದೆ."
   }
  },
  {
   "type": "diagram",
   "data": {
    "headingEn": "The Forward Pipeline",
    "headingKn": "ಮುಂದಿನ ಪೈಪ್‌ಲೈನ್",
    "svgCode": "<svg viewBox=\"0 0 300 190\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"monospace\" font-size=\"7\"><rect width=\"300\" height=\"190\" rx=\"8\" fill=\"#0f172a\"/><text x=\"150\" y=\"14\" fill=\"#94a3b8\" text-anchor=\"middle\">The forward voice pipeline</text><rect x=\"5\" y=\"40\" width=\"52\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"31\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">VAD</text><text x=\"31\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">speech?</text><rect x=\"65\" y=\"40\" width=\"52\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"91\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">STT</text><text x=\"91\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">text</text><rect x=\"125\" y=\"40\" width=\"52\" height=\"34\" rx=\"5\" fill=\"#422006\" stroke=\"#fbbf24\"/><text x=\"151\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">LLM</text><text x=\"151\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">reply</text><rect x=\"185\" y=\"40\" width=\"52\" height=\"34\" rx=\"5\" fill=\"#1e1b4b\" stroke=\"#a78bfa\"/><text x=\"211\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">TTS</text><text x=\"211\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">audio</text><rect x=\"245\" y=\"40\" width=\"50\" height=\"34\" rx=\"5\" fill=\"#022c22\" stroke=\"#34d399\"/><text x=\"270\" y=\"55\" fill=\"#e2e8f0\" text-anchor=\"middle\">transport</text><text x=\"270\" y=\"67\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">out</text><path d=\"M57,57 H65 M117,57 H125 M177,57 H185 M237,57 H245\" stroke=\"#475569\"/><rect x=\"70\" y=\"110\" width=\"160\" height=\"34\" rx=\"5\" fill=\"#450a0a\" stroke=\"#f87171\"/><text x=\"150\" y=\"125\" fill=\"#e2e8f0\" text-anchor=\"middle\">frames flow downstream</text><text x=\"150\" y=\"137\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">every stage can drop or split them</text><text x=\"150\" y=\"180\" fill=\"#94a3b8\" text-anchor=\"middle\" font-size=\"6\">frames are the unit that moves between processors</text></svg>",
    "captionEn": "Frames flow from the microphone to the speaker through five processors.",
    "captionKn": "Frames ಮೈಕ್ರೊಫೋನ್‌ನಿಂದ ಸ್ಪೀಕರ್‌ಗೆ ಐದು processors ಮೂಲಕ ಹರಿಯುತ್ತವೆ."
   }
  },
  {
   "type": "table",
   "data": {
    "headingEn": "Processors in the lab",
    "headingKn": "ಲ್ಯಾಬ್‌ನ processors",
    "headers": [
     "Processor",
     "Consumes",
     "Produces"
    ],
    "rows": [
     [
      "VAD",
      "audio",
      "speech or silence"
     ],
     [
      "STT",
      "speech",
      "transcript"
     ],
     [
      "LLM",
      "transcript",
      "text"
     ],
     [
      "TTS",
      "text",
      "one tts_audio frame per word"
     ]
    ]
   }
  },
  {
   "type": "heading",
   "data": {
    "textEn": "Building the Pipeline and the VAD",
    "textKn": "ಪೈಪ್‌ಲೈನ್ ಮತ್ತು VAD ನಿರ್ಮಿಸುವುದು",
    "level": "H2"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_1.py",
    "headingEn": "Frame, Processor, the five stages and Pipeline",
    "headingKn": "Frame, Processor, ಐದು ಹಂತಗಳು ಮತ್ತು Pipeline",
    "descEn": "ToyVAD turns every audio frame into speech, as the lesson does. STT here returns a fixed sentence, LLM a fixed reply and TTS splits it into one frame per word. Pipeline.run_downstream feeds every output frame of a stage into the next stage.",
    "descKn": "ToyVAD ಲೆಸನ್‌ನಂತೆ ಪ್ರತಿ audio frame ಅನ್ನು speech ಮಾಡುತ್ತದೆ. ಇಲ್ಲಿ STT ನಿಗದಿತ ವಾಕ್ಯ, LLM ನಿಗದಿತ ಉತ್ತರ ಮರಳಿಸುತ್ತದೆ ಮತ್ತು TTS ಅದನ್ನು ಪ್ರತಿ ಪದಕ್ಕೆ ಒಂದು frame ಆಗಿ ವಿಭಜಿಸುತ್ತದೆ. Pipeline.run_downstream ಹಂತದ ಪ್ರತಿ output frame ಅನ್ನು ಮುಂದಿನ ಹಂತಕ್ಕೆ ನೀಡುತ್ತದೆ.",
    "code": "@dataclass\nclass Frame:\n    kind: str\n    data: Any = None\n\n\nclass Processor:\n    def __init__(self, name):\n        self.name = name\n\n    def process(self, frame):\n        return [frame]\n\n\nclass ToyVAD(Processor):\n    \"\"\"As taught: every audio frame becomes speech.\"\"\"\n\n    def process(self, frame):\n        if frame.kind != \"audio\":\n            return [frame]\n        return [Frame(\"speech\", frame.data)]\n\n\nclass STTProcessor(Processor):\n    def __init__(self, name, transcript=\"Hello, can you explain voice agents?\"):\n        super().__init__(name)\n        self.transcript, self.calls = transcript, 0\n\n    def process(self, frame):\n        if frame.kind != \"speech\":\n            return [frame]\n        self.calls += 1\n        return [Frame(\"transcript\", self.transcript)]\n\n\nclass LLMProcessor(Processor):\n    def process(self, frame):\n        if frame.kind != \"transcript\":\n            return [frame]\n        if not frame.data.strip():\n            return []\n        return [Frame(\"text\", \"A voice agent processes speech through VAD, STT, an LLM, and TTS.\")]\n\n\nclass TTSProcessor(Processor):\n    def process(self, frame):\n        if frame.kind != \"text\":\n            return [frame]\n        return [Frame(\"tts_audio\", w) for w in frame.data.split()]\n\n\nclass TransportProcessor(Processor):\n    def __init__(self, name):\n        super().__init__(name)\n        self.sent = []\n\n    def process(self, frame):\n        if frame.kind == \"tts_audio\":\n            self.sent.append(frame.data)\n        return [frame]\n\n\nclass Pipeline:\n    def __init__(self, processors):\n        self.processors = processors\n\n    def run_downstream(self, frame):\n        frames = [frame]\n        for p in self.processors:\n            nxt = []\n            for f in frames:\n                nxt.extend(p.process(f))\n            frames = nxt\n        return frames"
   }
  },
  {
   "type": "code",
   "data": {
    "filename": "vo_1.py",
    "headingEn": "EnergyVAD, synthetic audio and main()",
    "headingKn": "EnergyVAD, ಕೃತಕ ಆಡಿಯೋ ಮತ್ತು main()",
    "descEn": "EnergyVAD treats a frame as speech when its level passes a threshold and keeps the gate open for a few frames after (hangover). synthetic_audio makes clips of speech and pauses with occasional dips, using assumed levels. main() runs six experiments on frame fan-out, silence handling, VAD choice, threshold, silently dropped frames and pipeline overhead.",
    "descKn": "EnergyVAD ಮಟ್ಟ ಮಿತಿ ದಾಟಿದಾಗ frame ಅನ್ನು ಮಾತು ಎಂದು ಪರಿಗಣಿಸಿ ನಂತರ ಕೆಲವು frames ವರೆಗೆ ಗೇಟ್ ತೆರೆದಿಡುತ್ತದೆ (hangover). synthetic_audio ಊಹಿಸಿದ ಮಟ್ಟಗಳೊಂದಿಗೆ ಮಾತು ಮತ್ತು ವಿರಾಮಗಳ ಕ್ಲಿಪ್‌ಗಳನ್ನು, ಅಪರೂಪದ ಇಳಿತಗಳೊಂದಿಗೆ, ಮಾಡುತ್ತದೆ. main() frame ಹರಡುವಿಕೆ, ಮೌನ ನಿರ್ವಹಣೆ, VAD ಆಯ್ಕೆ, ಮಿತಿ, ಮೌನವಾಗಿ ಬಿದ್ದ frames ಮತ್ತು ಪೈಪ್‌ಲೈನ್ ಓವರ್‌ಹೆಡ್ ಬಗ್ಗೆ ಆರು ಪ್ರಯೋಗಗಳನ್ನು ನಡೆಸುತ್ತದೆ.",
    "code": "class EnergyVAD(Processor):\n    \"\"\"Our version: a frame is speech if its energy exceeds a threshold; a hangover keeps the gate open through short dips.\"\"\"\n\n    def __init__(self, name, threshold=0.3, hangover=3):\n        super().__init__(name)\n        self.threshold, self.hangover, self.left = threshold, hangover, 0\n\n    def process(self, frame):\n        if frame.kind != \"audio\":\n            return [frame]\n        if frame.data >= self.threshold:\n            self.left = self.hangover\n            return [Frame(\"speech\", frame.data)]\n        if self.left > 0:\n            self.left -= 1\n            return [Frame(\"speech\", frame.data)]\n        return [Frame(\"silence\", frame.data)]\n\n\ndef synthetic_audio(rng, speech_frames=(12, 25), pause=(6, 15), noise=0.08, speech_level=0.6, dips=True):\n    \"\"\"Returns (frames, truth) where truth marks frames that are inside a spoken segment. Levels are ASSUMED.\"\"\"\n    frames, truth = [], []\n    for _ in range(rng.randint(2, 4)):\n        for _ in range(rng.randint(*pause)):\n            frames.append(max(0.0, rng.gauss(noise, noise / 2))); truth.append(False)\n        n = rng.randint(*speech_frames)\n        for i in range(n):\n            level = rng.gauss(speech_level, 0.15)\n            if dips and rng.random() < 0.15:\n                level = rng.gauss(noise, noise / 2)\n            frames.append(max(0.0, level)); truth.append(True)\n    return frames, truth\n\n\ndef section(t):\n    print(f\"\\n--- {t} ---\")\n\n\ndef main():\n    stt = STTProcessor(\"stt\")\n    tts = TTSProcessor(\"tts\")\n    transport = TransportProcessor(\"transport\")\n    pipe = Pipeline([ToyVAD(\"vad\"), stt, LLMProcessor(\"llm\"), tts, transport])\n\n    section(\"1. One audio frame through the pipeline\")\n    out = pipe.run_downstream(Frame(\"audio\", 0.7))\n    print(\"kinds of frames leaving the pipeline:\", [f.kind for f in out][:3], \"... total\", len(out))\n    print(\"words sent by the transport:\", transport.sent)\n    print(\"one input frame became\", len(out), \"output frames; frames fan out at the TTS stage, one per word\")\n\n    section(\"2. Genuinely checking: the toy VAD treats silence as speech\")\n    stt.calls = 0\n    pipe.run_downstream(Frame(\"audio\", 0.0))\n    print(\"a frame of pure silence (level 0.0) reached STT:\", stt.calls == 1, \"| transcript produced from silence\")\n    print(\"STT here returns a fixed sentence whatever it is given, so the toy cannot show that it was fed nothing; a real STT would hallucinate or return empty text\")\n\n    section(\"3. Genuinely measuring: toy VAD versus an energy VAD on synthetic audio (levels ASSUMED, seed 14, 300 clips)\")\n    rng = random.Random(14)\n    print(f\"{'detector':26} {'speech frames kept':>19} {'silence passed as speech':>25} {'words clipped (mid-speech gaps)':>32}\")\n    clips = [synthetic_audio(rng) for _ in range(300)]\n    detectors = {\"toy (always speech)\": lambda: ToyVAD(\"v\"), \"energy, no hangover\": lambda: EnergyVAD(\"v\", 0.3, 0),\n                 \"energy, hangover 3\": lambda: EnergyVAD(\"v\", 0.3, 3)}\n    for name, make in detectors.items():\n        kept = fp = total_speech = total_sil = gaps = 0\n        for frames, truth in clips:\n            v = make()\n            decisions = [v.process(Frame(\"audio\", x))[0].kind == \"speech\" for x in frames]\n            for d, t in zip(decisions, truth):\n                if t:\n                    total_speech += 1; kept += d\n                    gaps += not d\n                else:\n                    total_sil += 1; fp += d\n        print(f\"{name:26} {kept / total_speech:>19.1%} {fp / total_sil:>25.1%} {gaps:>32}\")\n    print(\"the toy keeps every speech frame and passes every silent one; the energy VAD without hangover dropped frames from dips inside words, and a hangover of 3 frames recovered most of them (clipped frames 2782 to 159) at the price of passing 18 percent of silent frames, which are the tails kept open after each segment\")\n\n    section(\"4. Genuinely measuring: threshold trade-off (same synthetic clips, hangover 3)\")\n    print(f\"{'threshold':>10} {'speech kept':>12} {'silence passed':>15}\")\n    for th in (0.1, 0.2, 0.3, 0.4, 0.5):\n        kept = fp = ts = tn = 0\n        for frames, truth in clips:\n            v = EnergyVAD(\"v\", th, 3)\n            for x, t in zip(frames, truth):\n                d = v.process(Frame(\"audio\", x))[0].kind == \"speech\"\n                if t:\n                    ts += 1; kept += d\n                else:\n                    tn += 1; fp += d\n        print(f\"{th:>10.1f} {kept / ts:>12.1%} {fp / tn:>15.1%}\")\n    print(\"a low threshold keeps nearly all speech but lets background noise through; a high one is quiet but cuts speech. The levels are assumed, so the shape matters and not the numbers\")\n\n    section(\"5. Genuinely checking: frames dropped without an error\")\n    stt2 = STTProcessor(\"stt\", transcript=\"   \")\n    p2 = Pipeline([ToyVAD(\"vad\"), stt2, LLMProcessor(\"llm\"), TTSProcessor(\"tts\"), TransportProcessor(\"transport\")])\n    out = p2.run_downstream(Frame(\"audio\", 0.7))\n    print(\"blank transcript -> frames out:\", len(out), \"| exceptions: none | the user hears nothing and no log line says why\")\n    print(\"a processor that returns [] makes a frame vanish; a pipeline needs a trace or a dead-frame counter to notice\")\n\n    section(\"6. Genuinely measuring: the pipeline's own per-frame overhead (real timing)\")\n    p3 = Pipeline([ToyVAD(\"vad\"), STTProcessor(\"stt\"), LLMProcessor(\"llm\"), TTSProcessor(\"tts\"), TransportProcessor(\"transport\")])\n    runs = []\n    for _ in range(3000):\n        t0 = time.perf_counter_ns()\n        p3.run_downstream(Frame(\"audio\", 0.7))\n        runs.append(time.perf_counter_ns() - t0)\n    print(f\"five processors, one utterance: median {statistics.median(runs) / 1000:.1f} us, p99 {sorted(runs)[int(.99 * len(runs))] / 1000:.1f} us\")\n    print(\"plumbing costs microseconds, so a voice pipeline's latency comes from the models and the network, not from the frame passing\")"
   }
  },
  {
   "type": "output",
   "data": {
    "output": "\n--- 1. One audio frame through the pipeline ---\nkinds of frames leaving the pipeline: ['tts_audio', 'tts_audio', 'tts_audio'] ... total 12\nwords sent by the transport: ['A', 'voice', 'agent', 'processes', 'speech', 'through', 'VAD,', 'STT,', 'an', 'LLM,', 'and', 'TTS.']\none input frame became 12 output frames; frames fan out at the TTS stage, one per word\n\n--- 2. Genuinely checking: the toy VAD treats silence as speech ---\na frame of pure silence (level 0.0) reached STT: True | transcript produced from silence\nSTT here returns a fixed sentence whatever it is given, so the toy cannot show that it was fed nothing; a real STT would hallucinate or return empty text\n\n--- 3. Genuinely measuring: toy VAD versus an energy VAD on synthetic audio (levels ASSUMED, seed 14, 300 clips) ---\ndetector                    speech frames kept  silence passed as speech  words clipped (mid-speech gaps)\ntoy (always speech)                     100.0%                    100.0%                                0\nenergy, no hangover                      83.2%                      0.0%                             2782\nenergy, hangover 3                       99.0%                     18.0%                              159\nthe toy keeps every speech frame and passes every silent one; the energy VAD without hangover dropped frames from dips inside words, and a hangover of 3 frames recovered most of them (clipped frames 2782 to 159) at the price of passing 18 percent of silent frames, which are the tails kept open after each segment\n\n--- 4. Genuinely measuring: threshold trade-off (same synthetic clips, hangover 3) ---\n threshold  speech kept  silence passed\n       0.1        99.8%           79.8%\n       0.2        99.1%           18.4%\n       0.3        99.0%           18.0%\n       0.4        98.3%           17.3%\n       0.5        95.4%           15.7%\na low threshold keeps nearly all speech but lets background noise through; a high one is quiet but cuts speech. The levels are assumed, so the shape matters and not the numbers\n\n--- 5. Genuinely checking: frames dropped without an error ---\nblank transcript -> frames out: 0 | exceptions: none | the user hears nothing and no log line says why\na processor that returns [] makes a frame vanish; a pipeline needs a trace or a dead-frame counter to notice\n\n--- 6. Genuinely measuring: the pipeline's own per-frame overhead (real timing) ---\nfive processors, one utterance: median 6.8 us, p99 24.9 us\nplumbing costs microseconds, so a voice pipeline's latency comes from the models and the network, not from the frame passing"
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
    "headingEn": "Genuinely Found: The Toy VAD Passes Silence; a Gate Needs a Threshold and a Hangover",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: ಆಟಿಕೆ VAD ಮೌನ ಹಾದುಹೋಗಿಸುತ್ತದೆ; ಗೇಟ್‌ಗೆ ಮಿತಿ ಮತ್ತು hangover ಬೇಕು",
    "bodyEn": "Section 2: a frame of pure silence (level 0.0) reached STT through the toy VAD. Section 3, on 300 synthetic clips with assumed levels (seed 14): the toy VAD kept 100 percent of speech frames and passed 100 percent of silent frames; an energy VAD with no hangover passed 0.0 percent of silence but kept only 83.2 percent of speech, clipping 2,782 frames inside words; with a hangover of 3 frames it kept 99.0 percent and clipped 159, at the price of passing 18.0 percent of silent frames (the tails kept open after each segment). Section 4: raising the threshold from 0.1 to 0.5 cut the silence passed from 79.8 to 15.7 percent and the speech kept from 99.8 to 95.4 percent. The levels are assumptions, so the shape of the trade-off matters and the numbers do not.",
    "bodyKn": "ವಿಭಾಗ 2: ಶುದ್ಧ ಮೌನದ frame (ಮಟ್ಟ 0.0) ಆಟಿಕೆ VAD ಮೂಲಕ STT ತಲುಪಿತು. ವಿಭಾಗ 3, ಊಹಿಸಿದ ಮಟ್ಟಗಳ 300 ಕೃತಕ ಕ್ಲಿಪ್‌ಗಳಲ್ಲಿ (seed 14): ಆಟಿಕೆ VAD ಮಾತಿನ frames ನ 100 ಶೇಕಡಾ ಉಳಿಸಿ ಮೌನ frames ನ 100 ಶೇಕಡಾ ಹಾದುಹೋಗಿಸಿತು; hangover ಇಲ್ಲದ ಶಕ್ತಿ VAD ಮೌನದ 0.0 ಶೇಕಡಾ ಹಾದುಹೋಗಿಸಿತು ಆದರೆ ಮಾತಿನ 83.2 ಶೇಕಡಾ ಮಾತ್ರ ಉಳಿಸಿ ಪದಗಳೊಳಗೆ 2,782 frames ಕತ್ತರಿಸಿತು; 3 frames hangover ನೊಂದಿಗೆ 99.0 ಶೇಕಡಾ ಉಳಿಸಿ 159 ಕತ್ತರಿಸಿತು, ಮೌನ frames ನ 18.0 ಶೇಕಡಾ ಹಾದುಹೋಗಿಸುವ ಬೆಲೆಯಲ್ಲಿ (ಪ್ರತಿ ವಿಭಾಗದ ನಂತರ ತೆರೆದಿಟ್ಟ ಬಾಲಗಳು). ವಿಭಾಗ 4: ಮಿತಿಯನ್ನು 0.1 ರಿಂದ 0.5 ಕ್ಕೆ ಏರಿಸಿದಾಗ ಹಾದುಹೋದ ಮೌನ 79.8 ರಿಂದ 15.7 ಶೇಕಡಾಕ್ಕೆ ಮತ್ತು ಉಳಿದ ಮಾತು 99.8 ರಿಂದ 95.4 ಶೇಕಡಾಕ್ಕೆ ಇಳಿಯಿತು. ಮಟ್ಟಗಳು ಊಹೆಗಳು, ಆದ್ದರಿಂದ ಹೊಂದಾಣಿಕೆಯ ಆಕಾರ ಮುಖ್ಯ, ಸಂಖ್ಯೆಗಳಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Genuinely Found: Frames Vanish Silently and the Plumbing Is Cheap",
    "headingKn": "ನಿಜವಾಗಿ ಕಂಡುಬಂದದ್ದು: Frames ಮೌನವಾಗಿ ಮಾಯವಾಗುತ್ತವೆ ಮತ್ತು ನಳ ಅಗ್ಗ",
    "bodyEn": "Section 1: one audio frame became 12 output frames, one per word of the reply. Section 5: a blank transcript made the LLM stage return no frames, so 0 frames left the pipeline, no exception was raised and nothing in a log said why; a dead-frame counter or trace is needed to notice. Section 6 (real timing, 3,000 runs): five processors handling one utterance took a median of 6.8 microseconds and a p99 of 24.9, so a voice pipeline's latency comes from the models and the network, not from passing frames.",
    "bodyKn": "ವಿಭಾಗ 1: ಒಂದು audio frame 12 output frames ಆಯಿತು, ಉತ್ತರದ ಪ್ರತಿ ಪದಕ್ಕೆ ಒಂದು. ವಿಭಾಗ 5: ಖಾಲಿ transcript LLM ಹಂತ ಯಾವುದೇ frame ಮರಳಿಸದಂತೆ ಮಾಡಿತು, ಆದ್ದರಿಂದ 0 frames ಪೈಪ್‌ಲೈನ್ ಬಿಟ್ಟವು, ಯಾವುದೇ exception ಎತ್ತಲಿಲ್ಲ ಮತ್ತು ಲಾಗ್‌ನಲ್ಲಿ ಏಕೆಂದು ಹೇಳುವುದು ಏನೂ ಇರಲಿಲ್ಲ; ಗಮನಿಸಲು dead-frame ಕೌಂಟರ್ ಅಥವಾ trace ಬೇಕು. ವಿಭಾಗ 6 (ನಿಜ ಸಮಯ, 3,000 ಓಟಗಳು): ಒಂದು ಮಾತನ್ನು ನಿರ್ವಹಿಸುವ ಐದು processors ಮಧ್ಯಮ 6.8 ಮೈಕ್ರೋಸೆಕೆಂಡ್ ಮತ್ತು p99 24.9 ತೆಗೆದುಕೊಂಡವು, ಆದ್ದರಿಂದ ಧ್ವನಿ ಪೈಪ್‌ಲೈನ್‌ನ ವಿಳಂಬ ಮಾದರಿಗಳು ಮತ್ತು ನೆಟ್‌ವರ್ಕ್‌ನಿಂದ ಬರುತ್ತದೆ, frames ಹಾಯಿಸುವುದರಿಂದ ಅಲ್ಲ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Why AI Uses This",
    "headingKn": "AI ಇದನ್ನು ಏಕೆ ಬಳಸುತ್ತದೆ",
    "bodyEn": "A voice agent hears first and thinks later, so the earliest stage decides what everything downstream sees. A VAD that passes silence or clips words poisons STT, the LLM and the reply no matter how good those are.",
    "bodyKn": "ಧ್ವನಿ agent ಮೊದಲು ಕೇಳಿ ನಂತರ ಯೋಚಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಮೊದಲ ಹಂತ ಕೆಳಗಿನ ಎಲ್ಲವೂ ಏನು ನೋಡುತ್ತವೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ. ಮೌನ ಹಾದುಹೋಗಿಸುವ ಅಥವಾ ಪದಗಳನ್ನು ಕತ್ತರಿಸುವ VAD ಆ ಹಂತಗಳು ಎಷ್ಟೇ ಉತ್ತಮವಾಗಿದ್ದರೂ STT, LLM ಮತ್ತು ಉತ್ತರವನ್ನು ಹಾಳುಮಾಡುತ್ತದೆ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Common Misconception",
    "headingKn": "ಸಾಮಾನ್ಯ ತಪ್ಪು ಕಲ್ಪನೆ",
    "bodyEn": "Misconception: \"a voice pipeline is slow because of the plumbing.\" Passing frames cost microseconds here; the delays that matter are model and network time.",
    "bodyKn": "ತಪ್ಪು ಕಲ್ಪನೆ: \"ನಳದಿಂದಾಗಿ ಧ್ವನಿ ಪೈಪ್‌ಲೈನ್ ನಿಧಾನ.\" ಇಲ್ಲಿ frames ಹಾಯಿಸುವುದು ಮೈಕ್ರೋಸೆಕೆಂಡ್‌ಗಳು ವೆಚ್ಚ ಮಾಡಿತು; ಮುಖ್ಯ ವಿಳಂಬಗಳು ಮಾದರಿ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್ ಸಮಯ."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Terms",
    "headingKn": "ಪ್ರಮುಖ ಪದಗಳು",
    "bodyEn": "Frame: a typed unit of data. Processor: a stage that maps frames to frames. VAD: voice activity detection. Hangover: keeping the gate open after speech. Dead frame: a frame a stage dropped without trace. Fan-out: one frame becoming many.",
    "bodyKn": "Frame: ಟೈಪ್ ಮಾಡಿದ ದತ್ತಾಂಶ ಘಟಕ. Processor: frames ಅನ್ನು frames ಗೆ ಮ್ಯಾಪ್ ಮಾಡುವ ಹಂತ. VAD: voice activity detection. Hangover: ಮಾತಿನ ನಂತರ ಗೇಟ್ ತೆರೆದಿಡುವುದು. Dead frame: ಹಂತ ಗುರುತಿಲ್ಲದೆ ಬಿಟ್ಟ frame. Fan-out: ಒಂದು frame ಹಲವಾಗುವುದು."
   }
  },
  {
   "type": "concept",
   "data": {
    "headingEn": "Key Takeaways",
    "headingKn": "ಪ್ರಮುಖ ಅಂಶಗಳು",
    "bodyEn": "1) One audio frame fanned out to 12 TTS frames. 2) The toy VAD passed silence to STT. 3) An energy VAD without hangover clipped 2,782 speech frames; a hangover cut that to 159. 4) A higher threshold passed less silence and kept less speech. 5) A blank transcript made frames vanish with no error. 6) Frame passing took microseconds.",
    "bodyKn": "1) ಒಂದು audio frame 12 TTS frames ಗೆ ಹರಡಿತು. 2) ಆಟಿಕೆ VAD ಮೌನವನ್ನು STT ಗೆ ಹಾದುಹೋಗಿಸಿತು. 3) hangover ಇಲ್ಲದ ಶಕ್ತಿ VAD 2,782 ಮಾತಿನ frames ಕತ್ತರಿಸಿತು; hangover ಅದನ್ನು 159 ಕ್ಕೆ ಇಳಿಸಿತು. 4) ಹೆಚ್ಚಿನ ಮಿತಿ ಕಡಿಮೆ ಮೌನ ಹಾದುಹೋಗಿಸಿ ಕಡಿಮೆ ಮಾತು ಉಳಿಸಿತು. 5) ಖಾಲಿ transcript frames ಅನ್ನು ದೋಷವಿಲ್ಲದೆ ಮಾಯವಾಗಿಸಿತು. 6) frames ಹಾಯಿಸುವಿಕೆ ಮೈಕ್ರೋಸೆಕೆಂಡ್‌ಗಳು ತೆಗೆದುಕೊಂಡಿತು."
   }
  },
  {
   "type": "quiz",
   "data": {
    "questions": [
     {
      "q": "What does the toy VAD do with a silent frame?",
      "qKn": "ಆಟಿಕೆ VAD ಮೌನ frame ಗೆ ಏನು ಮಾಡುತ್ತದೆ?",
      "opts": [
       "Drops it",
       "Turns it into speech and sends it to STT",
       "Raises an error",
       "Buffers it"
      ],
      "optsKn": [
       "ಬಿಡುತ್ತದೆ",
       "ಅದನ್ನು ಮಾತು ಮಾಡಿ STT ಗೆ ಕಳುಹಿಸುತ್ತದೆ",
       "ದೋಷ ಎತ್ತುತ್ತದೆ",
       "ಬಫರ್ ಮಾಡುತ್ತದೆ"
      ],
      "correct": 1
     },
     {
      "q": "What did a hangover of 3 frames change?",
      "qKn": "3 frames hangover ಏನು ಬದಲಿಸಿತು?",
      "opts": [
       "Clipped frames fell from 2,782 to 159 while passing 18.0 percent of silence",
       "Nothing",
       "It removed all silence",
       "It made STT faster"
      ],
      "optsKn": [
       "ಕತ್ತರಿಸಿದ frames 2,782 ರಿಂದ 159 ಕ್ಕೆ ಇಳಿದವು, ಮೌನದ 18.0 ಶೇಕಡಾ ಹಾದುಹೋಗುತ್ತಾ",
       "ಏನೂ ಇಲ್ಲ",
       "ಎಲ್ಲಾ ಮೌನ ತೆಗೆಯಿತು",
       "STT ವೇಗವಾಯಿತು"
      ],
      "correct": 0
     },
     {
      "q": "What happened when STT produced a blank transcript?",
      "qKn": "STT ಖಾಲಿ transcript ನೀಡಿದಾಗ ಏನಾಯಿತು?",
      "opts": [
       "An exception was raised",
       "No frames left the pipeline and no error was logged",
       "The LLM answered anyway",
       "TTS spoke silence"
      ],
      "optsKn": [
       "Exception ಎತ್ತಲಾಯಿತು",
       "ಯಾವುದೇ frame ಪೈಪ್‌ಲೈನ್ ಬಿಡಲಿಲ್ಲ ಮತ್ತು ದೋಷ ದಾಖಲಾಗಲಿಲ್ಲ",
       "LLM ಹೇಗೂ ಉತ್ತರಿಸಿತು",
       "TTS ಮೌನ ಮಾತನಾಡಿತು"
      ],
      "correct": 1
     },
     {
      "q": "What status do the audio levels in the VAD experiments have?",
      "qKn": "VAD ಪ್ರಯೋಗಗಳ ಆಡಿಯೋ ಮಟ್ಟಗಳ ಸ್ಥಿತಿ ಏನು?",
      "opts": [
       "Recorded from real speech",
       "Assumed values, so the shape of the trade-off matters, not the numbers",
       "Published benchmarks",
       "Always 0.3"
      ],
      "optsKn": [
       "ನಿಜ ಮಾತಿನಿಂದ ದಾಖಲಿಸಿದವು",
       "ಊಹಿಸಿದ ಮೌಲ್ಯಗಳು, ಆದ್ದರಿಂದ ಹೊಂದಾಣಿಕೆಯ ಆಕಾರ ಮುಖ್ಯ, ಸಂಖ್ಯೆಗಳಲ್ಲ",
       "ಪ್ರಕಟಿತ benchmarks",
       "ಯಾವಾಗಲೂ 0.3"
      ],
      "correct": 1
     },
     {
      "q": "Where does a voice pipeline's latency mainly come from here?",
      "qKn": "ಇಲ್ಲಿ ಧ್ವನಿ ಪೈಪ್‌ಲೈನ್‌ನ ವಿಳಂಬ ಮುಖ್ಯವಾಗಿ ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ?",
      "opts": [
       "Passing frames (about 7 microseconds)",
       "Models and the network, not the plumbing",
       "The dataclass",
       "Python itself"
      ],
      "optsKn": [
       "frames ಹಾಯಿಸುವುದು (ಸುಮಾರು 7 ಮೈಕ್ರೋಸೆಕೆಂಡ್)",
       "ಮಾದರಿಗಳು ಮತ್ತು ನೆಟ್‌ವರ್ಕ್, ನಳ ಅಲ್ಲ",
       "dataclass",
       "Python ಸ್ವತಃ"
      ],
      "correct": 1
     }
    ]
   }
  }
 ]
};
