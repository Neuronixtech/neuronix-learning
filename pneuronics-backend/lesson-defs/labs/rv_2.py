"""Teaching implementation (our own): reviewer agent, Part 2 - why a reviewer must not just trust the builder's flags. A real check-then-act payment function with a deliberately forced interleaving,
a sequential test that passes, a concurrent probe that fails, a reviewer that reads flags versus one that runs the probe, and a rubric policy weakness (empty assumptions). No language model is used."""
import threading
import time


class Payments:
    def __init__(self, safe=False):
        self.charges = []
        self.seen = set()
        self.lock = threading.Lock() if safe else None

    def _charge(self, key):
        if key not in self.seen:
            time.sleep(0.05)
            self.seen.add(key)
            self.charges.append(key)

    def pay(self, key):
        if self.lock:
            with self.lock:
                self._charge(key)
        else:
            self._charge(key)


def sequential_test(cls):
    p = cls()
    p.pay("k1"); p.pay("k1")
    return len(p.charges) == 1


def concurrent_probe(cls, workers=4):
    p = cls()
    ts = [threading.Thread(target=p.pay, args=("k1",)) for _ in range(workers)]
    for t in ts:
        t.start()
    for t in ts:
        t.join()
    return len(p.charges)


class Safe(Payments):
    def __init__(self):
        super().__init__(safe=True)


def problem_fit_from_flags(state):
    return 2 if state.get("solves_requested_problem") else 0


def problem_fit_from_probe(cls):
    return 2 if concurrent_probe(cls) == 1 else 0


def assumptions_score(assumptions, material):
    return 0 if not assumptions else 2


def assumptions_score_fixed(assumptions, material):
    if not material:
        return 2
    return 2 if assumptions else 0


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Genuinely running: the sequential test passes and hides the defect")
    print("sequential test, unsafe implementation:", sequential_test(Payments))
    print("sequential test, locked implementation:", sequential_test(Safe))
    print("both versions pass the only test the builder wrote, so a verification gate that ran it would report success for the unsafe one; the test never asked the question the task was about")

    section("2. Genuinely running: a concurrent probe on the same two implementations")
    for name, cls in (("unsafe", Payments), ("locked", Safe)):
        print(f"{name:7} charges created by 4 simultaneous requests with one key: {concurrent_probe(cls)}")
    print("the unsafe version charged the same key several times because the check and the insert are separate steps with a delay between them (the delay was added to force the overlap, so the number of duplicates is an artefact of the lab), and the locked version charged once")

    section("3. Genuinely comparing: a reviewer that reads flags versus one that runs the probe")
    builder_state = {"solves_requested_problem": True}
    print("builder reports it solved the problem; the unsafe code was submitted")
    print("flag-reading reviewer problem_fit    :", problem_fit_from_flags(builder_state))
    print("probe-running reviewer problem_fit   :", problem_fit_from_probe(Payments))
    print("probe-running reviewer on locked code:", problem_fit_from_probe(Safe))
    print("the flag-reading reviewer gave full marks because it read the builder's own claim, which is the failure the separation of builder and marker is meant to prevent; the reviewer that ran an independent probe scored the same code 0, and a reviewer is only independent if its evidence is")

    section("4. Genuinely measuring: the probe is a sample, not a proof")
    counts = [concurrent_probe(Payments, workers=2) for _ in range(5)]
    print("duplicates seen over 5 runs with 2 workers on the unsafe code:", counts)
    print("with the delay forced into the code, every run exposed the race; this lab did not measure a race without the forced delay, but a probe can only show that an overlap happened in the runs tried, so a failing probe demonstrates a defect and a passing probe does not demonstrate its absence, which is one reason the human approval step remains")

    section("5. Genuinely checking: a rubric policy that punishes a correct simple task")
    print("simple task, no material assumptions, none listed -> lesson policy:", assumptions_score((), material=False), "| refined policy:", assumptions_score_fixed((), material=False))
    print("payment task with a material assumption, none listed -> lesson policy:", assumptions_score((), material=True), "| refined policy:", assumptions_score_fixed((), material=True))
    print("the simple rule 'empty assumptions scores 0' hard-fails a correct one-line change because a zero forces hard_fail; asking whether the task has material assumptions first avoids that, and still scores a payment task with unstated assumptions 0")


if __name__ == "__main__":
    main()
