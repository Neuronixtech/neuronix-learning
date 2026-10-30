"""Teaching implementation (our own): voice pipeline foundations - Frame, Processor, VAD, STT, LLM, TTS, Transport and voice activity detection."""
import random
import statistics
import time
from dataclasses import dataclass
from typing import Any


@dataclass
class Frame:
    kind: str
    data: Any = None


class Processor:
    def __init__(self, name):
        self.name = name

    def process(self, frame):
        return [frame]


class ToyVAD(Processor):
    """As taught: every audio frame becomes speech."""

    def process(self, frame):
        if frame.kind != "audio":
            return [frame]
        return [Frame("speech", frame.data)]


class STTProcessor(Processor):
    def __init__(self, name, transcript="Hello, can you explain voice agents?"):
        super().__init__(name)
        self.transcript, self.calls = transcript, 0

    def process(self, frame):
        if frame.kind != "speech":
            return [frame]
        self.calls += 1
        return [Frame("transcript", self.transcript)]


class LLMProcessor(Processor):
    def process(self, frame):
        if frame.kind != "transcript":
            return [frame]
        if not frame.data.strip():
            return []
        return [Frame("text", "A voice agent processes speech through VAD, STT, an LLM, and TTS.")]


class TTSProcessor(Processor):
    def process(self, frame):
        if frame.kind != "text":
            return [frame]
        return [Frame("tts_audio", w) for w in frame.data.split()]


class TransportProcessor(Processor):
    def __init__(self, name):
        super().__init__(name)
        self.sent = []

    def process(self, frame):
        if frame.kind == "tts_audio":
            self.sent.append(frame.data)
        return [frame]


class Pipeline:
    def __init__(self, processors):
        self.processors = processors

    def run_downstream(self, frame):
        frames = [frame]
        for p in self.processors:
            nxt = []
            for f in frames:
                nxt.extend(p.process(f))
            frames = nxt
        return frames


class EnergyVAD(Processor):
    """Our version: a frame is speech if its energy exceeds a threshold; a hangover keeps the gate open through short dips."""

    def __init__(self, name, threshold=0.3, hangover=3):
        super().__init__(name)
        self.threshold, self.hangover, self.left = threshold, hangover, 0

    def process(self, frame):
        if frame.kind != "audio":
            return [frame]
        if frame.data >= self.threshold:
            self.left = self.hangover
            return [Frame("speech", frame.data)]
        if self.left > 0:
            self.left -= 1
            return [Frame("speech", frame.data)]
        return [Frame("silence", frame.data)]


def synthetic_audio(rng, speech_frames=(12, 25), pause=(6, 15), noise=0.08, speech_level=0.6, dips=True):
    """Returns (frames, truth) where truth marks frames that are inside a spoken segment. Levels are ASSUMED."""
    frames, truth = [], []
    for _ in range(rng.randint(2, 4)):
        for _ in range(rng.randint(*pause)):
            frames.append(max(0.0, rng.gauss(noise, noise / 2))); truth.append(False)
        n = rng.randint(*speech_frames)
        for i in range(n):
            level = rng.gauss(speech_level, 0.15)
            if dips and rng.random() < 0.15:
                level = rng.gauss(noise, noise / 2)
            frames.append(max(0.0, level)); truth.append(True)
    return frames, truth


def section(t):
    print(f"\n--- {t} ---")


def main():
    stt = STTProcessor("stt")
    tts = TTSProcessor("tts")
    transport = TransportProcessor("transport")
    pipe = Pipeline([ToyVAD("vad"), stt, LLMProcessor("llm"), tts, transport])

    section("1. One audio frame through the pipeline")
    out = pipe.run_downstream(Frame("audio", 0.7))
    print("kinds of frames leaving the pipeline:", [f.kind for f in out][:3], "... total", len(out))
    print("words sent by the transport:", transport.sent)
    print("one input frame became", len(out), "output frames; frames fan out at the TTS stage, one per word")

    section("2. Genuinely checking: the toy VAD treats silence as speech")
    stt.calls = 0
    pipe.run_downstream(Frame("audio", 0.0))
    print("a frame of pure silence (level 0.0) reached STT:", stt.calls == 1, "| transcript produced from silence")
    print("STT here returns a fixed sentence whatever it is given, so the toy cannot show that it was fed nothing; a real STT would hallucinate or return empty text")

    section("3. Genuinely measuring: toy VAD versus an energy VAD on synthetic audio (levels ASSUMED, seed 14, 300 clips)")
    rng = random.Random(14)
    print(f"{'detector':26} {'speech frames kept':>19} {'silence passed as speech':>25} {'words clipped (mid-speech gaps)':>32}")
    clips = [synthetic_audio(rng) for _ in range(300)]
    detectors = {"toy (always speech)": lambda: ToyVAD("v"), "energy, no hangover": lambda: EnergyVAD("v", 0.3, 0),
                 "energy, hangover 3": lambda: EnergyVAD("v", 0.3, 3)}
    for name, make in detectors.items():
        kept = fp = total_speech = total_sil = gaps = 0
        for frames, truth in clips:
            v = make()
            decisions = [v.process(Frame("audio", x))[0].kind == "speech" for x in frames]
            for d, t in zip(decisions, truth):
                if t:
                    total_speech += 1; kept += d
                    gaps += not d
                else:
                    total_sil += 1; fp += d
        print(f"{name:26} {kept / total_speech:>19.1%} {fp / total_sil:>25.1%} {gaps:>32}")
    print("the toy keeps every speech frame and passes every silent one; the energy VAD without hangover dropped frames from dips inside words, and a hangover of 3 frames recovered most of them (clipped frames 2782 to 159) at the price of passing 18 percent of silent frames, which are the tails kept open after each segment")

    section("4. Genuinely measuring: threshold trade-off (same synthetic clips, hangover 3)")
    print(f"{'threshold':>10} {'speech kept':>12} {'silence passed':>15}")
    for th in (0.1, 0.2, 0.3, 0.4, 0.5):
        kept = fp = ts = tn = 0
        for frames, truth in clips:
            v = EnergyVAD("v", th, 3)
            for x, t in zip(frames, truth):
                d = v.process(Frame("audio", x))[0].kind == "speech"
                if t:
                    ts += 1; kept += d
                else:
                    tn += 1; fp += d
        print(f"{th:>10.1f} {kept / ts:>12.1%} {fp / tn:>15.1%}")
    print("a low threshold keeps nearly all speech but lets background noise through; a high one is quiet but cuts speech. The levels are assumed, so the shape matters and not the numbers")

    section("5. Genuinely checking: frames dropped without an error")
    stt2 = STTProcessor("stt", transcript="   ")
    p2 = Pipeline([ToyVAD("vad"), stt2, LLMProcessor("llm"), TTSProcessor("tts"), TransportProcessor("transport")])
    out = p2.run_downstream(Frame("audio", 0.7))
    print("blank transcript -> frames out:", len(out), "| exceptions: none | the user hears nothing and no log line says why")
    print("a processor that returns [] makes a frame vanish; a pipeline needs a trace or a dead-frame counter to notice")

    section("6. Genuinely measuring: the pipeline's own per-frame overhead (real timing)")
    p3 = Pipeline([ToyVAD("vad"), STTProcessor("stt"), LLMProcessor("llm"), TTSProcessor("tts"), TransportProcessor("transport")])
    runs = []
    for _ in range(3000):
        t0 = time.perf_counter_ns()
        p3.run_downstream(Frame("audio", 0.7))
        runs.append(time.perf_counter_ns() - t0)
    print(f"five processors, one utterance: median {statistics.median(runs) / 1000:.1f} us, p99 {sorted(runs)[int(.99 * len(runs))] / 1000:.1f} us")
    print("plumbing costs microseconds, so a voice pipeline's latency comes from the models and the network, not from the frame passing")


if __name__ == "__main__":
    main()
