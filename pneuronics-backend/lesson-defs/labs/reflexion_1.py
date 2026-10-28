"""Teaching implementation (our own): Reflexion Part 1 - Candidate, Actor, Evaluator and why a bare retry learns nothing."""
from dataclasses import dataclass


@dataclass
class Candidate:
    values: list[int]

    @property
    def total(self) -> int:
        return sum(self.values)


class Actor:
    """Part 1 Actor: reads only the most recent reflection. (Part 2 shows what is wrong with that.)"""

    def act(self, target: int, reflections: list[str]) -> Candidate:
        if not reflections:
            return Candidate([4, 4, 4])
        previous = reflections[-1]
        if "too low" in previous:
            return Candidate([target // 3 - 1, target // 3, target // 3])
        if "too high" in previous:
            return Candidate([target // 3, target // 3, target // 3])
        return Candidate([4, 4, 4])


class Evaluator:
    def binary(self, candidate: Candidate, target: int) -> bool:
        return candidate.total == target


# --- three evaluator types -------------------------------------------------

def scalar_unit_test(add_fn):
    """Scalar evaluator: ground truth, like a unit test returning PASS or FAIL."""
    return "PASS" if add_fn(2, 3) == 5 else "FAIL"


def heuristic_stuck(actions, window=5):
    """Heuristic evaluator: not proof of failure, a failure signature (the same action repeated)."""
    return len(actions) >= window and len(set(actions[-window:])) == 1


KNOWN_BELIEF = {"python creator": "Microsoft"}  # a belief the generator and its self-critic both hold


def generator_claim(topic):
    return f"Python was created by {KNOWN_BELIEF[topic]}."


def self_evaluator(topic, claim):
    """Self-evaluator that consults the SAME belief as the generator: it cannot disagree with it."""
    return "approved" if KNOWN_BELIEF[topic] in claim else "rejected"


def classify_failure(error: str) -> str:
    """Operational failures need a retry policy; actionable strategy failures deserve a reflection."""
    operational = ("503", "timeout", "rate limit", "connection", "unavailable")
    return "operational retry (backoff)" if any(w in error.lower() for w in operational) else "reflect (strategy failure)"


def words(items):
    return sum(len(i.split()) for i in items)


def section(t):
    print(f"\n--- {t} ---")


def main():
    target = 24
    actor, evaluator = Actor(), Evaluator()

    section("1. The Part 1 snapshot")
    c = actor.act(target, [])
    print("Candidate:", c.values)
    print("Total:", c.total)
    print("Passed:", evaluator.binary(c, target))

    section("2. Blind retry: three attempts, no memory")
    for trial in range(1, 4):
        c = actor.act(target, [])
        print(f"Trial {trial}: {c.values} total={c.total} passed={evaluator.binary(c, target)}")

    section("3. The three evaluator types")
    print("scalar     : add(a, b) = a - b     ->", scalar_unit_test(lambda a, b: a - b))
    print("scalar     : add(a, b) = a + b     ->", scalar_unit_test(lambda a, b: a + b))
    calls = ["search('weather')"] * 5
    print("heuristic  : same call x5          ->", "STUCK" if heuristic_stuck(calls) else "ok")
    print("heuristic  : calls differ          ->", "STUCK" if heuristic_stuck(["a", "b", "a", "b", "a"]) else "ok")
    claim = generator_claim("python creator")
    print("generator  :", claim)
    print("self-eval  :", self_evaluator("python creator", claim), "(it shares the generator's belief)")

    section("4. Operational failure versus strategy failure")
    for err in ("HTTP 503 Service Unavailable", "connection timeout", "no such column: customer_name", "wrong total: 23 != 24"):
        print(f"{err:<34} -> {classify_failure(err)}")

    section("5. What unbounded reflection memory costs (word counts, not tokens)")
    memory = []
    for n in range(1, 201):
        memory.append(f"Previous total {n} was too low for target 24; increase the values.")
        if n in (1, 10, 50, 100, 200):
            print(f"after {n:>3} reflections the prompt carries {words(memory):>5} words of reflections")
    print("each trial adds the same ~12 words, so the prompt grows linearly and old lessons never expire")


if __name__ == "__main__":
    main()
