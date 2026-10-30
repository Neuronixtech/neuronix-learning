"""Teaching implementation (our own): voice agent latency budget and turn detection - cascaded versus direct, streaming overlap, endpointing."""
import random
import statistics

# ASSUMED stage latencies in milliseconds (median, lognormal sigma). They are illustrative, not measurements of any provider.
STAGES = {"vad+endpoint": (200, 0.25), "stt final": (150, 0.35), "llm first token": (350, 0.45), "tts first audio": (150, 0.35), "network": (80, 0.40)}


def sample(rng, median, sigma):
    return rng.lognormvariate(__import__("math").log(median), sigma)


def pct(xs, p):
    xs = sorted(xs)
    return xs[min(len(xs) - 1, int(p * len(xs)))]


def cascaded_ttfa(rng, streaming=True):
    """Time to first audio. Without streaming each stage must finish its whole output before the next starts."""
    t = {k: sample(rng, *v) for k, v in STAGES.items()}
    if streaming:
        return sum(t.values())
    return sum(t.values()) + sample(rng, 400, 0.4) + sample(rng, 300, 0.4)  # whole LLM reply, then whole TTS render (assumed extra)


def direct_ttfa(rng):
    t = sample(rng, 300, 0.40)  # speech-to-speech model first audio (ASSUMED)
    return sample(rng, 200, 0.25) + t + sample(rng, 80, 0.40)


UTTERANCES = [
    ("What's the weather in Bengaluru today?", False, [0]),
    ("I would like to book a table for, um,", True, [0.9]),
    ("My order number is 4 8 1 5 and", True, [0.7, 1.2]),
    ("Yes.", False, [0]),
    ("Can you tell me about the refund policy for", True, [0.8]),
    ("Please cancel my subscription.", False, [0]),
    ("So the problem started when I updated the app and then", True, [1.0]),
    ("No thanks, that's all.", False, [0]),
]


def silence_endpoint_cuts(timeout_s, rng):
    """For utterances with a mid-thought pause, count how many were cut off by a fixed silence timeout."""
    cuts = total = 0
    wait_added = []
    for text, has_pause, pauses in UTTERANCES:
        for p in pauses:
            if p > 0:
                total += 1
                jitter = p * rng.uniform(0.85, 1.15)
                cuts += jitter > timeout_s
        wait_added.append(timeout_s)
    return cuts, total, statistics.mean(wait_added)


def semantic_complete(text):
    t = text.strip().lower()
    if t.endswith((".", "?", "!")):
        return True
    return not t.endswith(("and", "um,", "for", "then", "so", "but", ","))


def section(t):
    print(f"\n--- {t} ---")


def main():
    rng = random.Random(77)
    N = 20000

    section("1. Genuinely measuring: the sum of stage latencies (stage medians and spreads ASSUMED, seed 77, 20000 turns)")
    print(f"{'stage':18} {'median':>8} {'p95':>8}")
    per_stage = {k: [sample(rng, *v) for _ in range(N)] for k, v in STAGES.items()}
    for k, xs in per_stage.items():
        print(f"{k:18} {statistics.median(xs):>8.0f} {pct(xs, .95):>8.0f}")
    total = [sum(per_stage[k][i] for k in STAGES) for i in range(N)]
    print(f"{'sum of the five':18} {statistics.median(total):>8.0f} {pct(total, .95):>8.0f}   (ms)")
    print(f"adding the five p95 values gives {sum(pct(xs, .95) for xs in per_stage.values()):.0f} ms, but the p95 of the per-turn totals is {pct(total, .95):.0f} ms")
    print("stage delays rarely all hit their worst case on the same turn, so summing p95s overstates the p95 of the whole; it also hides that the sum is the wrong model when stages overlap")

    section("2. Genuinely measuring: streaming versus waiting for each stage to finish (extra waits ASSUMED)")
    rng = random.Random(78)
    for streaming in (False, True):
        xs = [cascaded_ttfa(rng, streaming) for _ in range(N)]
        print(f"{'streaming' if streaming else 'batch per stage':16} time to first audio: median {statistics.median(xs):>5.0f} ms | p95 {pct(xs, .95):>5.0f} ms | share over 1000 ms {sum(x > 1000 for x in xs) / N:.1%}")
    ys = [direct_ttfa(rng) for _ in range(N)]
    print(f"{'direct audio model':16} time to first audio: median {statistics.median(ys):>5.0f} ms | p95 {pct(ys, .95):>5.0f} ms | share over 1000 ms {sum(y > 1000 for y in ys) / N:.1%}")
    print("the ranking follows from the assumed numbers; the point is that time to first audio, not total time, is what the caller feels, and streaming changes which stage's delay counts")

    section("3. Genuinely measuring: fixed silence timeout versus cut-offs (pauses and jitter ASSUMED)")
    rng = random.Random(79)
    print(f"{'timeout':>9} {'utterances cut off mid-thought':>32} {'delay added to every turn':>27}")
    for timeout in (0.3, 0.5, 0.7, 0.9, 1.2, 1.5):
        cuts = total = 0
        for _ in range(2000):
            c, t, w = silence_endpoint_cuts(timeout, rng)
            cuts += c; total += t
        print(f"{timeout:>8.1f}s {cuts / total:>32.1%} {timeout * 1000:>25.0f}ms")
    print("a short timeout feels quick but interrupts people who pause to think; a long one is polite and makes every reply wait. A single timeout pays the full wait even for 'Yes.'")

    section("4. Genuinely checking: a simple semantic completeness rule on eight hand-written utterances")
    ok = 0
    for text, incomplete, _ in UTTERANCES:
        guess_done = semantic_complete(text)
        correct = guess_done == (not incomplete)
        ok += correct
        print(f"{text[:48]:50} predicted done={guess_done!s:5} truth done={(not incomplete)!s:5} {'ok' if correct else 'WRONG'}")
    print(f"{ok}/8 correct")
    for text in ("I'd like a table for four.", "Thanks, that's it!", "My order number is 4815", "I think it's the second", "Uh, let me see"):
        print(f"  extra check: {text!r:36} predicted done={semantic_complete(text)}")
    print("the rule is a handful of trailing words and punctuation and was written while looking at these eight, so 8/8 proves little; 'My order number is 4815', 'I think it's the second' and 'Uh, let me see' are unfinished but end in no marker, and it calls all three finished. Real turn detection needs a model of meaning")

    section("5. Genuinely measuring: fixed timeouts versus a semantic rule plus timeouts (13 hand-labelled utterances, pauses ASSUMED at 0.9 s)")
    extra = [("I'd like a table for four.", False), ("Thanks, that's it!", False), ("My order number is 4815", True), ("I think it's the second", True), ("Uh, let me see", True)]
    pool = [(t, inc, (pauses[0] if pauses[0] else 0.0)) for t, inc, pauses in UTTERANCES] + [(t, inc, 0.9 if inc else 0.0) for t, inc in extra]
    print(f"{'policy':36} {'cut off mid-thought':>20} {'mean wait before replying':>27}")
    policies = {
        "fixed 0.5 s": lambda text: 0.5,
        "fixed 1.2 s": lambda text: 1.2,
        "semantic rule: 0.15 s if done, else 1.2 s": lambda text: 0.15 if semantic_complete(text) else 1.2,
    }
    for name, wait_fn in policies.items():
        cut = sum(1 for t, inc, p in pool if inc and p > wait_fn(t))
        mean_wait = statistics.mean(wait_fn(t) for t, inc, p in pool)
        print(f"{name:36} {cut:>13}/{sum(inc for _, inc, _ in pool)} {mean_wait * 1000:>24.0f} ms")
    print("the rule waits briefly for sentences that look finished and long for ones that look unfinished, so its mean wait (473 ms) came out below even the fixed 0.5 s (500 ms) while cutting off 3 of the 7 unfinished utterances instead of 7 of 7; the fixed 1.2 s cut none but made every turn wait 1,200 ms. The 3 it cut off are the unfinished ones it called finished. The utterances are hand-labelled by us and the rule was written while looking at the first eight, so this is a demonstration, not an accuracy result")

if __name__ == "__main__":
    main()
