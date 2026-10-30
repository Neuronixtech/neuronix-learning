"""Teaching implementation (our own): GAIA-style tasks - operation chains, a difficulty classifier, exact-answer scoring and chain reliability."""
import random
import re
import statistics
from dataclasses import dataclass
from enum import Enum
from typing import List


class GaiaDifficulty(Enum):
    LEVEL_1 = "Level 1"
    LEVEL_2 = "Level 2"
    LEVEL_3 = "Level 3"


@dataclass
class GaiaTask:
    task_id: str
    question: str
    operations: List[str]
    modalities: List[str]
    answer: str


def classify_gaia_difficulty(task):
    depth, modes = len(task.operations), len(set(task.modalities))
    if depth <= 2 and modes <= 1:
        return GaiaDifficulty.LEVEL_1
    if depth <= 5 and modes <= 2:
        return GaiaDifficulty.LEVEL_2
    return GaiaDifficulty.LEVEL_3


TASKS = [
    GaiaTask("g1", "Capital of France?", ["search", "extract"], ["text"], "Paris"),
    GaiaTask("g2", "Years between director's birth and film release", ["search", "extract", "search", "extract", "calculate"], ["text"], "12"),
    GaiaTask("g3", "Total cost of items in the attached spreadsheet and chart", ["open_file", "parse_table", "read_chart", "search", "extract", "calculate", "format"], ["file", "image", "text"], "1,250"),
]


def normalise(s):
    s = s.strip().lower().rstrip(".")
    return re.sub(r"\s+", " ", s)


def normalise_numbers(s):
    s = normalise(s).replace(",", "")
    try:
        f = float(s)
        return str(int(f)) if f == int(f) else str(f)
    except ValueError:
        return s


def exact(a, b):
    return a == b


def section(t):
    print(f"\n--- {t} ---")


def main():
    section("1. Classifier on the three sample tasks")
    for t in TASKS:
        print(f"{t.task_id}: depth {len(t.operations)}, modalities {sorted(set(t.modalities))} -> {classify_gaia_difficulty(t).value}")

    section("2. Genuinely checking: the classifier counts operations, not difficulty")
    easy_padded = GaiaTask("p", "Capital of France?", ["search", "extract"] + ["noop"] * 6, ["text"], "Paris")
    hard_short = GaiaTask("h", "Reconcile the attached audio and chart", ["transcribe", "calculate"], ["audio", "image", "text"], "?")
    print("one-hop question padded with 6 no-op steps ->", classify_gaia_difficulty(easy_padded).value)
    print("two operations over audio+image+text           ->", classify_gaia_difficulty(hard_short).value)
    print("padding with no-op steps raised a one-hop question to Level 3, and the modality count alone made a two-operation task Level 3, so the label is a proxy for chain length and modality count, not for how hard the reasoning is")

    section("3. Genuinely measuring: how answer normalisation changes the score")
    gold = ["Paris", "12", "1,250", "New York", "0.5", "no"]
    answers = ["paris.", "12.0", "1250", "new  york", "1/2", "No."]
    for g, a in zip(gold, answers):
        print(f"gold {g!r:10} answer {a!r:10} raw exact={exact(g, a)!s:5} lowercase/strip={normalise(g) == normalise(a)!s:5} +number-aware={normalise_numbers(g) == normalise_numbers(a)!s:5}")
    raw = sum(exact(g, a) for g, a in zip(gold, answers))
    mid = sum(normalise(g) == normalise(a) for g, a in zip(gold, answers))
    full = sum(normalise_numbers(g) == normalise_numbers(a) for g, a in zip(gold, answers))
    print(f"score: raw {raw}/6, lowercase/strip {mid}/6, number-aware {full}/6")
    print("the same six answers score 0, 3 and 5 out of 6 depending on normalisation; the fraction '1/2' still fails")

    section("4. Genuinely checking: normalisation that accepts too much")
    for g, a in (("1999", "1,999"), ("1.5", "1,5"), ("2023", "2,023"), ("10", "1e1"), ("true", "True.")):
        print(f"gold {g!r:7} answer {a!r:7} number-aware match={normalise_numbers(g) == normalise_numbers(a)}")
    print("gold '15' vs answer '1,5' (a decimal comma) match=" + str(normalise_numbers("15") == normalise_numbers("1,5")))
    print("stripping commas accepted '1,999' and '2,023', accepted scientific notation '1e1' for 10, and turned a decimal-comma answer '1,5' into 15 so it matches gold '15' but not '1.5'; each rule needs a justification")

    section("5. Genuinely measuring: tool-chain reliability (per-step success ASSUMED, seed 4, 20000 runs)")
    rng = random.Random(4)
    print(f"{'steps':>6} {'p=0.99':>8} {'p=0.95':>8} {'p=0.90':>8}   (simulated; analytic p^n in brackets for p=0.95)")
    for n in (2, 5, 7, 12):
        row = []
        for p in (0.99, 0.95, 0.90):
            ok = sum(all(rng.random() < p for _ in range(n)) for _ in range(20000))
            row.append(ok / 20000)
        print(f"{n:>6} " + " ".join(f"{r:>8.1%}" for r in row) + f"   [{0.95 ** n:.1%}]")
    print("a level-3 style chain of 7 steps at 95 percent per step finishes only about 70 percent of the time, which is arithmetic from the assumed rate and not a measurement of any model")

    section("6. Genuinely checking: tools available versus tools used")
    toolbox = {"search", "extract", "calculate", "open_file", "parse_table", "read_chart", "format"}
    for t in TASKS:
        missing = [o for o in t.operations if o not in toolbox]
        print(f"{t.task_id}: needs {sorted(set(t.operations))} | missing tools: {missing}")
    hit = {t.task_id: len(set(t.operations)) for t in TASKS}
    print("distinct tools required per task:", hit, "| mean", round(statistics.mean(hit.values()), 1))
    print("owning every tool says nothing about choosing them in the right order; the benchmark measures the chain, so ordering errors need their own check")
    wrong_order = ["extract", "search"]
    ok = wrong_order == TASKS[0].operations
    print("a plan with the right tools in the wrong order matches the reference chain:", ok)


if __name__ == "__main__":
    main()
