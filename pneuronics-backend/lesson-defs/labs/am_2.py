"""Teaching implementation (our own): mapping assumptions and resolving the riskiest one first, Part 2 - a decisive experiment with a threshold fixed before the data, a real Wilson confidence interval to
separate supports, rejects and ambiguous, a threshold that is moved after the data, a biased sample, and append-only evidence. The alert samples are made up. No language model is used."""
import hashlib
import json
import math


def wilson(successes, n, z=1.96):
    if n == 0:
        return (0.0, 1.0)
    p = successes / n
    d = 1 + z * z / n
    centre = (p + z * z / (2 * n)) / d
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return (max(0.0, centre - half), min(1.0, centre + half))


def verdict(successes, n, threshold):
    lo, hi = wilson(successes, n)
    if lo >= threshold:
        return "supports", (round(lo, 3), round(hi, 3))
    if hi < threshold:
        return "rejects", (round(lo, 3), round(hi, 3))
    return "ambiguous", (round(lo, 3), round(hi, 3))


def lock(experiment):
    return hashlib.sha256(json.dumps(experiment, sort_keys=True).encode()).hexdigest()[:10]


class EvidenceLog:
    def __init__(self):
        self.entries = []

    def add(self, exp_hash, successes, n, note):
        self.entries.append({"exp": exp_hash, "successes": successes, "n": n, "note": note})

    def supersede(self, index, note):
        self.entries.append({"supersedes": index, "note": note})


def section(t):
    print(f"\n--- {t} ---")


def main():
    exp = {"claim": "at least 90 percent of alerts identify the failing service", "threshold": 0.90, "population": "alerts from the last 30 days", "min_sample": 50}
    section("1. Genuinely running: the experiment is fixed before the data (made-up alert counts)")
    h = lock(exp)
    print("experiment:", exp, "| lock:", h)
    print("the claim, the threshold, the population and the sample minimum were written down and hashed before any alert was looked at, so a changed threshold shows up as a different hash")

    section("2. Genuinely computing: the same observed rate gives different verdicts at different sample sizes")
    for ok, n in ((46, 50), (92, 100), (460, 500), (475, 500), (45, 50), (400, 500)):
        v, ci = verdict(ok, n, exp["threshold"])
        print(f"{ok:4}/{n:<4} rate={ok / n:.2f}  95% Wilson interval={ci}  verdict={v}")
    print("the same 92 percent was ambiguous at 50, 100 and even 500 alerts because the lower end of the interval stayed under 0.90 (0.893 at 500), and only 475/500 = 95 percent cleared the threshold; 400/500 = 80 percent was the one far enough below for the whole interval to sit under 0.90; a point estimate alone would have said supports for the first four rows")

    section("3. Genuinely running: moving the threshold after the data is detectable")
    after = dict(exp, threshold=0.80)
    print("original lock:", lock(exp), "| lock after edit:", lock(after), "| same:", lock(exp) == lock(after))
    print("verdict at 0.90 for 46/50:", verdict(46, 50, 0.90)[0], "| at the edited 0.80:", verdict(46, 50, 0.80)[0])
    print("lowering the threshold from 0.90 to 0.80 turned the same 46 of 50 from ambiguous into supports, which is exactly the move the lock exposes; the lab compares hashes and a team would have to check them in review")

    section("4. Genuinely measuring: a sample that does not represent the population")
    population = [("payments", 0.70)] * 40 + [("search", 0.97)] * 60
    overall = sum(p for _, p in population) / len(population)
    biased = [p for s, p in population if s == "search"]
    print(f"rate over all alerts (service mix 40 payments, 60 search): {overall:.3f}")
    print(f"rate over a sample drawn only from search: {sum(biased) / len(biased):.3f}")
    print("an experiment that only looked at the well-behaved service reported 0.97 while the mixed population was 0.862, so the population definition has to say which alerts count; the numbers are invented for the lab")

    section("5. Genuinely running: evidence is appended and never overwritten")
    log = EvidenceLog()
    log.add(h, 46, 50, "first pass")
    log.add(h, 460, 500, "full 30 days")
    log.supersede(0, "first pass used only the first week")
    for e in log.entries:
        print(e)
    print("the first result is still in the log with a note saying it was superseded, so a reader can see what was believed at each point; an update in place would have lost the earlier reading")


if __name__ == "__main__":
    main()
