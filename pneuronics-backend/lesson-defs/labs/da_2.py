"""Teaching implementation (our own): Darwin Godel Machine style safety, Part 2 - reward hacking against a naive evaluator, an evaluator firewall that the candidate cannot reach, and HMAC-signed evidence that a gate can verify.
Agents here are plain Python callables written for the lab, including deliberate cheaters. The HMAC key is generated fresh in each run; nothing is a real secret and no language model is used."""
import hashlib
import hmac
import json
import secrets

TESTS = [(x, 3 * x + 5) for x in range(-5, 6)]
HELD = [(x, 3 * x + 5) for x in range(20, 30)]


def honest(x):
    return 3 * x + 5


def weak(x):
    return 3 * x


class AlwaysEqual:
    def __eq__(self, other):
        return True

    def __ne__(self, other):
        return False

    __hash__ = None


def equal_cheat(x):
    return AlwaysEqual()


def tamper_cheat(x):
    TESTS.clear()
    return 0


def naive_eval(agent):
    """Reads the shared TESTS list at call time and trusts == on whatever the agent returns."""
    agent(0)  # warm-up call, as many harnesses make before scoring
    results = [agent(x) == y for x, y in TESTS]
    return sum(results) / len(results) if results else 1.0


class Firewall:
    """Holds its own immutable copies of the tests, checks result types and counts, and scores held-out cases too."""

    def __init__(self, train, held):
        self.train, self.held = tuple(train), tuple(held)

    def score(self, agent, cases):
        ok = 0
        for x, y in cases:
            out = agent(x)
            if type(out) is int and y == out:
                ok += 1
        return ok / len(cases)

    def evaluate(self, agent):
        return {"train": self.score(agent, self.train), "held": self.score(agent, self.held), "n_train": len(self.train)}


def canonical(d):
    return json.dumps(d, sort_keys=True, separators=(",", ":")).encode()


class Signer:
    def __init__(self):
        self._key = secrets.token_bytes(32)

    def sign(self, record):
        return hmac.new(self._key, canonical(record), hashlib.sha256).hexdigest()

    def verify(self, record, tag):
        return hmac.compare_digest(self.sign(record), tag)


def candidate_hash(name):
    return hashlib.sha256(name.encode()).hexdigest()[:12]


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: a naive evaluator against four candidates")
    agents = {"honest": honest, "weak": weak, "equal_cheat": equal_cheat, "tamper_cheat": tamper_cheat}
    saved = list(TESTS)
    for name, ag in agents.items():
        TESTS[:] = saved
        print(f"{name:13} naive score {naive_eval(ag):.3f}")
    TESTS[:] = saved
    print("the honest agent scores 1.000 and the weak one 0.000, but the equal-claiming cheater scores 1.000 because it returns an object that claims to equal anything, and the tampering cheater also scores 1.000 because it empties the shared test list during the evaluator's warm-up call, so the average runs over no tests and defaults to 1.0; the evaluator trusted both the candidate's return values and the shared state")

    section("2. Genuinely running: the same candidates behind an evaluator firewall")
    fw = Firewall(TESTS, HELD)
    for name, ag in agents.items():
        TESTS[:] = saved
        res = fw.evaluate(ag)
        print(f"{name:13} train {res['train']:.3f} | held-out {res['held']:.3f} | tests run {res['n_train']}")
    TESTS[:] = saved
    print("the firewall keeps its own immutable copy of the tests, accepts only plain integers and also scores held-out cases, so the honest agent still gets 1.000 and the weak agent and both cheaters get 0.000; the cheating code is the same, it simply has nothing to tamper with")

    section("3. Genuinely running: HMAC-signed evidence and a verifier")
    signer = Signer()
    record = {"candidate": candidate_hash("honest"), "train": 1.0, "held": 1.0, "n_train": 11}
    tag = signer.sign(record)
    print("genuine record verifies:", signer.verify(record, tag))
    edited = dict(record, held=1.0, candidate=candidate_hash("equal_cheat"))
    print("record moved to another candidate verifies:", signer.verify(edited, tag))
    inflated = dict(record, train=1.0, held=0.0)
    inflated["held"] = 1.0
    weak_rec = {"candidate": candidate_hash("weak"), "train": 0.091, "held": 0.0, "n_train": 11}
    forged = dict(weak_rec, train=1.0, held=1.0)
    print("weak record with inflated scores and the original tag verifies:", signer.verify(forged, signer.sign(weak_rec)))
    guess = hmac.new(b"guessed-key", canonical(forged), hashlib.sha256).hexdigest()
    print("tag made with a guessed key verifies:", signer.verify(forged, guess))
    print("a tag is bound to the exact record contents under a key the candidate never sees, so changing the candidate, the scores or the key breaks verification; this lab key lives in the same process, so it only illustrates the check, and a real system keeps the key in a separate service")

    section("4. Genuinely running: a verification gate over several checks")
    def gate(res, tag_ok, human_ok):
        checks = {"train_perfect": res["train"] == 1.0, "held_perfect": res["held"] == 1.0, "tests_complete": res["n_train"] == 11, "evidence_signed": tag_ok, "human_approved": human_ok}
        return [k for k, v in checks.items() if not v]
    TESTS[:] = saved
    res = fw.evaluate(honest)
    print("honest, all evidence present, no human approval ->", gate(res, True, False) or "approved")
    print("honest, all evidence present, human approved    ->", gate(res, True, True) or "approved")
    res = fw.evaluate(tamper_cheat)
    TESTS[:] = saved
    print("tamper cheater, human approved                  ->", gate(res, True, True) or "approved")
    print("a candidate passes only when every named check passes, the failing checks are listed by name, and human approval is a boolean here that a real system must replace with an authenticated decision the candidate cannot set")


if __name__ == "__main__":
    main()
