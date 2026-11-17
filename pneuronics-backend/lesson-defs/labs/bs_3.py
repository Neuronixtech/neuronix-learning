"""Teaching implementation (our own): bounded self-improvement, Part 3 - a BoundedImprover that combines all four primitives (invariants, an anchor, a multi-objective rule and a regression suite), eight unittest tests that are actually run, and a test-suite-shrinking attack that a size check catches.
The 'agent' is a vector of numbers, the proposer is random and every limit is invented; nothing here is a real system and no language model is used."""
import io
import random
import unittest
from statistics import mean

ANCHOR = (0.0, 0.0, 0.0)
TESTS = {"t_small": lambda p: abs(p[0]) <= 2.0, "t_balance": lambda p: abs(p[1] - p[2]) <= 3.0, "t_sum": lambda p: sum(p) <= 4.0}


def cap_score(p):
    return p[0] + p[1] + p[2]


def safety_score(p):
    return 10.0 - abs(p[0]) - abs(p[1] - p[2])


class BoundedImprover:
    def __init__(self, tests=None, radius=4.0, max_step=1.0, safety_floor=5.0):
        self.policy = ANCHOR
        self.tests = dict(TESTS if tests is None else tests)
        self.baseline_tests = frozenset(self.tests)
        self.radius, self.max_step, self.safety_floor = radius, max_step, safety_floor
        self.log = []

    def _dist(self, p, q):
        return sum((a - b) ** 2 for a, b in zip(p, q)) ** 0.5

    def evaluate(self, cand):
        """Return (accepted, reason)."""
        if frozenset(self.tests) != self.baseline_tests:
            return False, "test suite changed"
        if max(abs(a - b) for a, b in zip(cand, self.policy)) > self.max_step:
            return False, "step too large"
        if self._dist(cand, ANCHOR) > self.radius:
            return False, "outside anchor radius"
        if safety_score(cand) < self.safety_floor:
            return False, "safety floor"
        if cap_score(cand) <= cap_score(self.policy):
            return False, "no capability gain"
        for name, t in self.tests.items():
            if not t(cand):
                return False, f"regression {name}"
        return True, "ok"

    def try_step(self, cand):
        ok, why = self.evaluate(cand)
        self.log.append(why)
        if ok:
            self.policy = cand
        return ok


class BoundedTests(unittest.TestCase):
    def test_accepts_small_improvement(self):
        self.assertTrue(BoundedImprover().try_step((0.5, 0.5, 0.0)))

    def test_rejects_large_step(self):
        self.assertFalse(BoundedImprover().try_step((1.5, 0.0, 0.0)))

    def test_rejects_outside_anchor(self):
        b = BoundedImprover(radius=0.5)
        self.assertFalse(b.try_step((0.6, 0.0, 0.0)))

    def test_rejects_low_safety(self):
        b = BoundedImprover(safety_floor=9.5)
        self.assertFalse(b.try_step((0.9, 0.0, 0.0)))

    def test_rejects_no_gain(self):
        b = BoundedImprover()
        self.assertFalse(b.try_step((0.0, 0.0, 0.0)))

    def test_rejects_regression(self):
        b = BoundedImprover(radius=100.0, max_step=100.0, safety_floor=-100.0)
        self.assertFalse(b.try_step((0.0, 5.0, 0.0)))
        self.assertEqual(b.log[-1], "regression t_balance")

    def test_rejects_changed_suite(self):
        b = BoundedImprover()
        b.tests.pop("t_sum")
        self.assertFalse(b.try_step((0.5, 0.5, 0.0)))
        self.assertEqual(b.log[-1], "test suite changed")

    def test_policy_unchanged_after_rejection(self):
        b = BoundedImprover()
        b.try_step((1.5, 0.0, 0.0))
        self.assertEqual(b.policy, ANCHOR)


def run_improver(seed, steps=400, **kw):
    r = random.Random(seed)
    b = BoundedImprover(**kw)
    for _ in range(steps):
        cand = tuple(p + r.gauss(0.15, 0.5) for p in b.policy)
        b.try_step(cand)
    return b


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the eight unit tests")
    stream = io.StringIO()
    result = unittest.TextTestRunner(stream=stream, verbosity=0).run(unittest.defaultTestLoader.loadTestsFromTestCase(BoundedTests))
    print(f"ran {result.testsRun} tests | failures {len(result.failures)} | errors {len(result.errors)} | passed {result.wasSuccessful()}")
    print("the tests cover acceptance of a small improvement, rejection for step size, anchor radius, safety floor, no capability gain, a regression and a changed suite, and that a rejection leaves the policy alone; they test this toy class and say nothing about a real system")

    section("2. Genuinely measuring: why each proposal was rejected (400 proposals, seeds 1 to 30)")
    counts = {}
    final_caps, final_safe, final_dist = [], [], []
    for seed in range(1, 31):
        b = run_improver(seed)
        for why in b.log:
            counts[why] = counts.get(why, 0) + 1
        final_caps.append(cap_score(b.policy))
        final_safe.append(safety_score(b.policy))
        final_dist.append(b._dist(b.policy, ANCHOR))
    total = sum(counts.values())
    for why, n in sorted(counts.items(), key=lambda kv: -kv[1]):
        print(f"{why:28} {n:6d}  ({n / total:.3f})")
    print(f"final policies: mean capability {mean(final_caps):.2f} | min safety {min(final_safe):.2f} | max distance from anchor {max(final_dist):.2f}")
    print("most random proposals are refused for one reason or another, and every final policy sits inside the radius with safety above the floor, which follows from the checks and does not show the checks are the right ones; the order of the checks decides which reason is logged when several apply")

    section("3. Genuinely measuring: loosening one check at a time")
    for label, kw in (("default", {}), ("no anchor radius", {"radius": 1e9}), ("no safety floor", {"safety_floor": -1e9}), ("no regression tests", {"tests": {}}), ("no tests, no anchor", {"tests": {}, "radius": 1e9}), ("no tests, no floor", {"tests": {}, "safety_floor": -1e9}), ("no tests, anchor, floor", {"tests": {}, "radius": 1e9, "safety_floor": -1e9})):
        res = [run_improver(seed, **kw) for seed in range(1, 31)]
        print(f"{label:20}: mean capability {mean(cap_score(b.policy) for b in res):6.2f} | min safety {min(safety_score(b.policy) for b in res):6.2f} | policies failing a regression test {sum(1 for b in res if not all(t(b.policy) for t in TESTS.values()))}/30")
    print("removing the anchor radius or the safety floor alone changes nothing here, because the step limit and the regression tests already keep the policy inside both, while removing the regression tests raises mean capability from 3.99 to 6.88 and leaves every policy failing a rule; removing the tests and the anchor together gives 63.84, and removing all three gives 174.17 with a minimum safety of -66.66, so each layer only becomes visible once the layers above it are gone, which is the case for keeping several overlapping checks")

    section("4. Genuinely running: a modification that shrinks the test suite")
    b = BoundedImprover()
    b.tests.pop("t_balance")
    print("proposal that deletes a failing test then improves capability:", b.try_step((0.5, 0.5, 0.0)), "| reason:", b.log[-1])
    print("because the improver compares the current test names with the baseline it started with, deleting a test is refused even when every remaining test passes; the baseline is stored in the same object, so a real system must keep it somewhere the agent cannot edit")


if __name__ == "__main__":
    main()
