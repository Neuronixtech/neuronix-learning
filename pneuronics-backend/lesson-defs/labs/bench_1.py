"""Teaching implementation (our own): SWE-bench-style evaluator - FAIL_TO_PASS and PASS_TO_PASS gates run against candidate patches."""
import multiprocessing as mp
import random
import time
from dataclasses import dataclass
from typing import Any, Callable, List, Tuple


@dataclass
class TestCase:
    name: str
    args: Tuple[Any, ...]
    expected: Any


@dataclass
class TestResult:
    name: str
    passed: bool
    detail: str


@dataclass
class BenchmarkTask:
    task_id: str
    title: str
    buggy_function: Callable
    fail_to_pass: List[TestCase]
    pass_to_pass: List[TestCase]


def buggy_add(a, b):
    if b < 0:
        return a - b
    return a + b


def patched_add(a, b):
    return a + b


def run_test(function, test):
    try:
        got = function(*test.args)
    except Exception as e:
        return TestResult(test.name, False, f"{type(e).__name__}: {e}")
    return TestResult(test.name, got == test.expected, f"got {got!r}, expected {test.expected!r}")


def evaluate(task, candidate):
    f2p = [run_test(candidate, t) for t in task.fail_to_pass]
    p2p = [run_test(candidate, t) for t in task.pass_to_pass]
    return {"resolved": all(r.passed for r in f2p) and all(r.passed for r in p2p),
            "f2p": f"{sum(r.passed for r in f2p)}/{len(f2p)}", "p2p": f"{sum(r.passed for r in p2p)}/{len(p2p)}"}


TASK = BenchmarkTask("toy-001", "add() mishandles negative b", buggy_add,
                     [TestCase("neg_b", (5, -3), 2)],
                     [TestCase("pos", (2, 3), 5), TestCase("zero", (4, 0), 4)])

STRONG_P2P = TASK.pass_to_pass + [TestCase("neg_a", (-4, 3), -1), TestCase("both_neg", (-2, -5), -7), TestCase("float", (0.5, 0.25), 0.75),
                                  TestCase("str", ("a", "b"), "ab"), TestCase("big", (10 ** 12, 1), 10 ** 12 + 1)]


def hardcoded(a, b):
    return 2 if (a, b) == (5, -3) else buggy_add(a, b)


def no_op(a, b):
    return buggy_add(a, b)


def int_only(a, b):
    return int(a) + int(b)


def always_five(a, b):
    return 5


def crashing(a, b):
    raise ValueError("patch does not apply")


def flaky(a, b):
    return a + b if random.random() < 0.8 else a - b


def spin(a, b):
    while True:
        pass


def _child(fn, task, q):
    q.put(evaluate(task, fn))


def evaluate_with_timeout(task, fn, seconds):
    q = mp.Queue()
    p = mp.Process(target=_child, args=(fn, task, q))
    t0 = time.perf_counter()
    p.start()
    p.join(seconds)
    if p.is_alive():
        p.terminate(); p.join()
        return {"resolved": False, "detail": f"killed after {time.perf_counter() - t0:.1f}s timeout"}
    return q.get()


def mutants():
    """Six single-edit variants of the correct function; a good suite should reject all of them."""
    return {
        "a - b": lambda a, b: a - b, "a * b": lambda a, b: a * b, "a + b + 1": lambda a, b: a + b + 1,
        "abs(b) added": lambda a, b: a + abs(b), "b<0 -> a-b (original bug)": buggy_add, "int() cast": int_only,
    }


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. The two gates")
    print("buggy :", evaluate(TASK, buggy_add))
    print("fixed :", evaluate(TASK, patched_add))
    print("buggy fails FAIL_TO_PASS (it reproduces the bug) and passes PASS_TO_PASS; the fix passes both")

    section("2. Genuinely checking: candidates that satisfy the gates in the wrong way (3 visible tests)")
    cands = {"correct patch": patched_add, "no-op": no_op, "hard-coded test input": hardcoded, "always returns 5": always_five,
             "int-only cast": int_only, "crashes": crashing}
    for name, fn in cands.items():
        print(f"{name:22} {evaluate(TASK, fn)}")
    print("'hard-coded test input' resolved the task without fixing the bug, and 'int-only cast' resolved it while breaking floats and strings")

    section("3. Genuinely checking: the same candidates against a stronger PASS_TO_PASS suite")
    strong = BenchmarkTask("toy-001+", TASK.title, buggy_add, TASK.fail_to_pass, STRONG_P2P)
    for name, fn in cands.items():
        print(f"{name:22} {evaluate(strong, fn)}")
    print("adding 5 regression tests rejected both: the int-only patch broke the float and string cases, and the hard-coded patch still contained the original bug for (-2,-5) and for strings, which the new tests exercised; a hard-coded fix survives only while the suite never touches the same defect again")

    section("4. Genuinely measuring: how strong is each test suite (mutation score)")
    for label, task in (("3 tests (original)", TASK), ("8 tests (stronger)", strong)):
        muts = mutants()
        killed = [n for n, fn in muts.items() if not evaluate(task, fn)["resolved"]]
        print(f"{label:20} mutants rejected {len(killed)}/{len(muts)} | survived: {[n for n in muts if n not in killed]}")
    print("a resolved patch means 'passed these tests', and the suite's mutation score says how much that is worth")

    section("5. Genuinely checking: text comparison with a human patch versus execution")
    human = "def add(a, b):\n    return a + b\n"
    agent = "def add(a, b):\n    result = a + b\n    return result\n"
    ns1, ns2 = {}, {}
    exec(human, ns1); exec(agent, ns2)
    print("source strings equal:", human == agent, "| behaviour on the tests:", evaluate(TASK, ns2["add"])["resolved"])
    wrong = "def add(a, b):\n    return a+b  # same logic, different spacing\n"
    print("whitespace-only variant equal to human text:", wrong == human)
    print("string matching rejects a correct patch; execution accepts it")

    section("6. Genuinely measuring: a flaky candidate (passes ~80 percent per call)")
    random.seed(3)
    outcomes = [evaluate(TASK, flaky)["resolved"] for _ in range(1000)]
    print(f"resolved in {sum(outcomes)} of 1000 evaluations ({sum(outcomes) / 10:.1f} percent)")
    print("the expected rate is 0.8^2 = 64 percent, not 0.8^3, because the (4, 0) test passes whichever branch runs; a single run is not a verdict, so evaluators rerun or require determinism")

    section("7. Genuinely checking: a patch that never returns")
    r = evaluate_with_timeout(TASK, spin, 1.0)
    print("spin():", r)
    print("without a timeout the evaluator itself would hang; a child process lets it kill the candidate")


if __name__ == "__main__":
    main()
