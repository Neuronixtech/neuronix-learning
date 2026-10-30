"""Teaching implementation (our own): evaluation layer - EvalResult, scripted judge, groundedness, retrieval relevance, guardrail and thresholds."""
import random
import re
import statistics
from dataclasses import dataclass


@dataclass
class EvalResult:
    name: str
    score: float
    passed: bool
    reason: str


STOP = {"the", "a", "an", "is", "are", "was", "of", "to", "in", "my", "me", "and", "when", "will", "where", "what", "how", "do", "i", "it", "can", "you", "for"}


def normalize_words(text, drop_stop=False):
    words = set(re.sub(r"[^a-z0-9 ]", " ", text.lower()).split())
    return words - STOP if drop_stop else words


def lexical_relevance(question, passage, threshold=0.34, drop_stop=False):
    q, p = normalize_words(question, drop_stop), normalize_words(passage, drop_stop)
    score = len(q & p) / len(q) if q else 0.0
    return EvalResult("retrieval_relevance", round(score, 2), score >= threshold, f"{len(q & p)} of {len(q)} question terms found")


def groundedness(answer, evidence, threshold=0.99):
    a, e = normalize_words(answer), normalize_words(evidence)
    score = len(a & e) / len(a) if a else 0.0
    return EvalResult("groundedness", round(score, 2), score >= threshold, f"{len(a & e)} of {len(a)} answer terms appear in the evidence")


BLOCKED = ("password", "ssn", "credit card")


def guardrail(text):
    hit = next((b for b in BLOCKED if b in text.lower()), None)
    return EvalResult("guardrail", 0.0 if hit else 1.0, hit is None, f"blocked term: {hit}" if hit else "no blocked term")


class ScriptedJudge:
    """Deterministic stand-in for an LLM judge. `noise` models run-to-run variation of a real judge (ASSUMED)."""

    def __init__(self, noise=0.0, seed=0):
        self.noise, self.rng = noise, random.Random(seed)

    def judge(self, question, evidence, answer):
        base = groundedness(answer, evidence).score
        score = min(1.0, max(0.0, base + self.rng.gauss(0, self.noise)))
        return EvalResult("judge", round(score, 2), score >= 0.7, "scripted rubric: overlap with evidence")


PAIRS = [  # (question, passage, relevant?)
    ("Where is order 52?", "Order 52 is in transit.", True),
    ("What is the refund policy?", "Refunds are accepted within 30 days.", True),
    ("When will my package arrive?", "Shipment 52 is expected tomorrow.", True),
    ("How do I reset my password?", "To change credentials open Settings then Security.", True),
    ("Can I cancel my subscription?", "Plans can be ended any time from the billing page.", True),
    ("Where is order 52?", "Our refund policy lasts 30 days.", False),
    ("What is the refund policy?", "Order 52 is in transit.", False),
    ("How do I reset my password?", "The warehouse opens at nine.", False),
    ("When will my package arrive?", "The refund policy allows returns.", False),
    ("Can I cancel my subscription?", "Order 52 is in transit.", False),
    ("Is the store open on Sunday?", "Opening hours: Sunday 10 to 4.", True),
    ("Is the store open on Sunday?", "Refunds are accepted within 30 days.", False),
]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The evaluators on the lesson's cases")
    ev = "Order 52 is in transit."
    for label, ans in (("matching answer", "Order 52 is in transit."), ("delivered claim", "Order 52 was delivered yesterday."), ("unsupported answer", "I am not sure.")):
        print(f"{label:20} {groundedness(ans, ev)}")
    print("relevance, right passage:", lexical_relevance("Where is order 52?", "Order 52 is in transit."))
    print("relevance, wrong passage:", lexical_relevance("Where is order 52?", "Our refund policy lasts 30 days."))
    print("guardrail:", guardrail("Please send me your password"), "|", guardrail("Order is in transit"))

    section("2. Genuinely measuring: lexical relevance on 12 hand-written question and passage pairs")
    print(f"{'rule':34} {'threshold':>9} {'right passages kept':>20} {'wrong passages kept':>20}")
    for drop in (False, True):
        for th in (0.2, 0.34, 0.5, 0.75):
            tp = fp = 0
            for q, p, rel in PAIRS:
                ok = lexical_relevance(q, p, th, drop).passed
                tp += ok and rel
                fp += ok and not rel
            print(f"{'stop words removed' if drop else 'all words':34} {th:>9.2f} {tp:>14}/{sum(r for *_, r in PAIRS)} {fp:>14}/{sum(not r for *_, r in PAIRS)}")
    print("recall was poor at every setting: at most 2 of the 6 right passages were kept, because the right passages it missed share few words with the question (for example 'package' / 'shipment' and 'reset' / 'change'); the only wrong passage let through was at threshold 0.2 with stop words counted. The pairs were written by us, so the numbers are a demonstration")

    section("3. Genuinely checking: where the groundedness overlap is fooled")
    ev = "The order is in transit."
    cases = [("The order is in transit.", "faithful"), ("The order is not in transit.", "contradicts the evidence"), ("The order is in transit and will be free of charge.", "adds an unsupported claim"),
             ("The in transit order is.", "scrambled words"), ("In transit.", "tiny but faithful"), ("The order is delivered.", "wrong status")]
    r2 = groundedness("The order is delivered.", "The order is not delivered.")
    print(f"evidence 'The order is not delivered.' vs answer 'The order is delivered.' -> score {r2.score:.2f} passed={r2.passed}")
    for ans, kind in cases:
        r = groundedness(ans, ev)
        print(f"{ans:52} {kind:28} score {r.score:.2f} passed={r.passed}")
    print("the contradiction 'not in transit' failed only because 'not' is a word the evidence lacks; when the evidence itself contains 'not' (not delivered) the opposite claim scored 1.00 and passed, and scrambled words passed too: overlap measures shared words, not agreement")

    section("4. Genuinely measuring: a noisy judge flipping the verdict (noise ASSUMED, seed 17, 2000 judgments each)")
    answers = [("The order is in transit.", "faithful"), ("The order is delivered.", "wrong status")]
    print(f"{'noise sd':>9} {'faithful answer passes':>24} {'wrong answer passes':>21}")
    for noise in (0.0, 0.1, 0.2, 0.3):
        j = ScriptedJudge(noise, 17)
        rates = []
        for ans, _ in answers:
            rates.append(sum(j.judge("q", "The order is in transit.", ans).passed for _ in range(2000)) / 2000)
        print(f"{noise:>9.1f} {rates[0]:>24.1%} {rates[1]:>21.1%}")
    print("with no noise the judge passed the wrong-status answer 100 percent of the time: its overlap score of 0.75 clears the 0.7 pass mark, so the rubric, not the noise, was the problem. Noise then made verdicts inconsistent in both directions (faithful answers failing, wrong ones passing less often); the noise levels are assumptions")

    section("5. Genuinely measuring: a low-confidence band instead of a single threshold")
    rng = random.Random(5)
    scores = [min(1, max(0, rng.gauss(0.8, 0.2))) for _ in range(5000)] + [min(1, max(0, rng.gauss(0.35, 0.2))) for _ in range(5000)]
    truth = [True] * 5000 + [False] * 5000
    single = sum((s >= 0.7) == t for s, t in zip(scores, truth)) / len(scores)
    sure = [(s, t) for s, t in zip(scores, truth) if s >= 0.75 or s <= 0.45]
    acc_sure = sum((s >= 0.75) == t for s, t in sure) / len(sure)
    print(f"single threshold 0.7: {single:.1%} of verdicts correct on all 10000 | band (pass at 0.75+, fail at 0.45-, else send to a human): {acc_sure:.1%} correct on the {len(sure) / len(scores):.1%} it decided")
    print("score distributions are ASSUMED; abstaining on the middle band raises accuracy on what is decided and costs a share of decisions that go to review")

    section("6. Genuinely checking: the keyword guardrail")
    for text in ("my password is hunter2", "my p@ssword is hunter2", "my pass word is hunter2", "credit-card 4111", "My Credit Card is 4111", "SSN 123-45-6789", "social security number 123-45-6789"):
        print(f"{text:40} passed={guardrail(text).passed}")
    print("the guardrail is an evaluation with teeth: it can block, so its misses (spacing, symbols, synonyms) are safety gaps and not just a lower score")


if __name__ == "__main__":
    main()
