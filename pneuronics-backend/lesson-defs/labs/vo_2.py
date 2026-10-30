"""Teaching implementation (our own): barge-in - sequential versus concurrent cancellation, buffered audio, upstream propagation, false interruptions."""
import queue
import random
import threading
import time

WORDS = "A voice agent processes speech through VAD STT an LLM and TTS so the reply starts before the whole answer is ready".split()
WORD_S = 0.04


class TTS:
    def __init__(self, chunk_words=1):
        self.cancelled = threading.Event()
        self.chunk_words = chunk_words
        self.spoken = []

    def speak(self, words, out=None):
        for i in range(0, len(words), self.chunk_words):
            if self.cancelled.is_set():
                break
            chunk = words[i:i + self.chunk_words]
            time.sleep(WORD_S * len(chunk))
            for w in chunk:
                self.spoken.append((time.perf_counter(), w))
                if out is not None:
                    out.put(w)
        if out is not None:
            out.put(None)


def toy_sequential(interrupt_after_s):
    """As taught: run the whole downstream first, then deliver the cancel."""
    tts = TTS()
    t0 = time.perf_counter()
    tts.speak(WORDS)
    done = time.perf_counter() - t0
    tts.cancelled.set()
    return len(tts.spoken), done


def concurrent(interrupt_at_s, chunk_words=1):
    tts = TTS(chunk_words)
    t0 = time.perf_counter()
    th = threading.Thread(target=tts.speak, args=(WORDS,))
    th.start()
    time.sleep(interrupt_at_s)
    t_cancel = time.perf_counter()
    tts.cancelled.set()
    th.join()
    last = tts.spoken[-1][0] if tts.spoken else t_cancel
    return len(tts.spoken), max(0.0, last - t_cancel)


def buffered_transport(buffer_size, flush):
    """TTS fills a bounded queue and a transport drains it at playback speed; cancel may or may not flush the queue."""
    q = queue.Queue(maxsize=buffer_size)
    played = []
    tts = TTS()
    stop = threading.Event()

    def producer():
        for w in WORDS:
            if tts.cancelled.is_set():
                break
            time.sleep(0.005)
            q.put(w)
        q.put(None)

    def consumer():
        while True:
            w = q.get()
            if w is None or stop.is_set():
                return
            time.sleep(WORD_S)
            played.append((time.perf_counter(), w))

    pt, ct = threading.Thread(target=producer), threading.Thread(target=consumer)
    pt.start(); ct.start()
    time.sleep(0.15)
    t_cancel = time.perf_counter()
    tts.cancelled.set()
    if flush:
        try:
            while True:
                q.get_nowait()
        except queue.Empty:
            pass
        stop.set()
    pt.join()
    try:
        q.put_nowait(None)
    except queue.Full:
        pass
    ct.join(timeout=3)
    after = [w for t, w in played if t > t_cancel]
    return len(played), len(after)


class LLMStream:
    def __init__(self):
        self.cancelled = threading.Event()
        self.generated = 0

    def run(self, n_tokens, per_token_s=0.01):
        for _ in range(n_tokens):
            if self.cancelled.is_set():
                break
            time.sleep(per_token_s)
            self.generated += 1


def llm_after_cancel(propagate):
    llm = LLMStream()
    th = threading.Thread(target=llm.run, args=(60,))
    th.start()
    time.sleep(0.12)
    at_cancel = llm.generated
    if propagate:
        llm.cancelled.set()
    th.join()
    return at_cancel, llm.generated


def section(t):
    print(f"\n--- {t} ---")


def main():
    total_s = WORD_S * len(WORDS)
    section("1. Genuinely checking: the sequential toy cannot interrupt anything")
    spoken, done = toy_sequential(0.2)
    print(f"user interrupts at 0.2s; the toy delivers the cancel after the run: words spoken {spoken}/{len(WORDS)}, the speech took {done:.2f}s")
    print("the cancel arrived after all", len(WORDS), "words, so the mechanism exists but nothing was actually cut off")

    section("2. Genuinely measuring: concurrent cancellation (real threads, 0.04 s per word)")
    print(f"{'interrupt at':>13} {'words spoken':>13} {'of':>4}")
    for at in (0.0, 0.1, 0.2, 0.4):
        n, lag = concurrent(at)
        print(f"{at:>12.2f}s {n:>13} {len(WORDS):>4}")
    print("cancelling from another thread stopped the speech at the point of the interruption, within about one word")

    section("3. Genuinely measuring: cancellation latency against chunk size (mean of 8 runs each)")
    print(f"{'words per chunk':>16} {'mean lag after cancel (ms)':>28} {'worst lag (ms)':>16}")
    rng = random.Random(2)
    for chunk in (1, 3, 6):
        lags = []
        for _ in range(8):
            _, lag = concurrent(rng.uniform(0.1, 0.3), chunk)
            lags.append(lag * 1000)
        print(f"{chunk:>16} {sum(lags) / len(lags):>28.0f} {max(lags):>16.0f}")
    print("a cancel flag is only checked between chunks, so audio keeps coming for up to one chunk; larger chunks are cheaper to synthesise but cut off later")

    section("4. Genuinely measuring: audio already buffered in the transport")
    print(f"{'buffer':>7} {'flush on cancel':>16} {'words played after cancel':>26}")
    for buf in (1, 5, 10):
        for flush in (False, True):
            played, after = buffered_transport(buf, flush)
            print(f"{buf:>7} {str(flush):>16} {after:>26}")
    print("without flushing, the user kept hearing words that were already queued; the larger the buffer, the longer the voice talks over the interruption")

    section("5. Genuinely measuring: does the cancel reach the LLM")
    for propagate in (False, True):
        at_cancel, final = llm_after_cancel(propagate)
        print(f"cancel propagated upstream to the LLM: {propagate!s:5} | tokens at cancel {at_cancel} | tokens generated in total {final} | wasted {final - at_cancel}")
    print("cancelling only the speech left the LLM generating a reply nobody would hear; the cancel has to travel up the pipeline as well as stop the speaker")

    section("6. Genuinely measuring: false and missed interruptions (energy levels ASSUMED, seed 31, 5000 events each)")
    rng = random.Random(31)
    print(f"{'threshold':>10} {'real interruptions caught':>26} {'noises mistaken for one':>25}")
    for th in (0.2, 0.3, 0.4, 0.5, 0.6):
        caught = sum(rng.gauss(0.55, 0.15) >= th for _ in range(5000))
        false = sum(rng.gauss(0.25, 0.12) >= th for _ in range(5000))
        print(f"{th:>10.1f} {caught / 5000:>26.1%} {false / 5000:>25.1%}")
    print("a sensitive threshold makes the agent stop for a cough, and a strict one makes the user shout to be heard; the two curves are assumptions chosen to show the trade-off, not measurements")


if __name__ == "__main__":
    main()
