"""Teaching implementation (our own): Reflexion Part 2 - SelfReflector, EpisodicMemory, history-aware Actor, the loop."""
from typing import Optional

from reflexion_1 import Candidate, Evaluator, Actor as Part1Actor


class SelfReflector:
    def reflect(self, candidate: Candidate, target: int) -> str:
        difference = target - candidate.total
        if difference > 0:
            return f"Previous total {candidate.total} was too low for target {target}; increase the values."
        if difference < 0:
            return f"Previous total {candidate.total} was too high for target {target}; decrease the values."
        return "The candidate already satisfies the target."


class EpisodicMemory:
    def __init__(self, capacity: int = 3):
        self.capacity = capacity
        self._items: list[str] = []

    def add(self, reflection: str) -> None:
        self._items.append(reflection)
        if len(self._items) > self.capacity:
            self._items.pop(0)

    def recall(self) -> list[str]:
        return list(self._items)


class Actor:
    """Part 2 Actor: uses the whole reflection history, so a repeated 'too low' escalates the correction."""

    def act(self, target: int, reflections: list[str]) -> Candidate:
        if not reflections:
            return Candidate([4, 4, 4])
        latest = reflections[-1]
        low_count = sum("too low" in r for r in reflections)
        base, remainder = target // 3, target % 3
        if "too low" in latest:
            if low_count == 1:
                return Candidate([base - 1, base, base])
            values = [base, base, base]
            values[0] += remainder
            return Candidate(values)
        if "too high" in latest:
            values = [base, base, base]
            values[-1] += remainder
            return Candidate(values)
        return Candidate([4, 4, 4])


class ReflexionAgent:
    def __init__(self, actor, evaluator: Evaluator, reflector: SelfReflector, memory: EpisodicMemory):
        self.actor, self.evaluator, self.reflector, self.memory = actor, evaluator, reflector, memory
        self.history: list[dict] = []

    def solve(self, target: int, max_trials: int = 3, verbose: bool = False) -> Optional[Candidate]:
        for trial in range(1, max_trials + 1):
            reflections = self.memory.recall()                               # RECALL
            candidate = self.actor.act(target=target, reflections=reflections)   # ACT (fresh attempt)
            passed = self.evaluator.binary(candidate=candidate, target=target)   # EVALUATE
            self.history.append({"trial": trial, "memory": len(reflections), "values": candidate.values,
                                 "total": candidate.total, "passed": passed})
            if verbose:
                print(f"Trial {trial}: memory={len(reflections)} candidate={candidate.values} total={candidate.total} passed={passed}")
            if passed:
                return candidate
            reflection = self.reflector.reflect(candidate=candidate, target=target)  # REFLECT
            self.memory.add(reflection)                                      # REMEMBER
        return None


class BaselineAgent:
    """Same Actor, Evaluator and budget. The only difference: nothing is carried between trials."""

    def __init__(self, actor, evaluator):
        self.actor, self.evaluator = actor, evaluator
        self.history = []

    def solve(self, target, max_trials=3, verbose=False):
        for trial in range(1, max_trials + 1):
            candidate = self.actor.act(target=target, reflections=[])
            passed = self.evaluator.binary(candidate, target)
            self.history.append({"trial": trial, "total": candidate.total, "passed": passed})
            if verbose:
                print(f"Trial {trial}: candidate={candidate.values} total={candidate.total} passed={passed}")
            if passed:
                return candidate
        return None


def section(t):
    print(f"\n--- {t} ---")


def run(actor, target=24, trials=3, capacity=3, verbose=False):
    agent = ReflexionAgent(actor, Evaluator(), SelfReflector(), EpisodicMemory(capacity))
    result = agent.solve(target, trials, verbose)
    return agent, result


def main():
    section("1. The Self-Reflector turns a failure into a direction")
    r = SelfReflector()
    for total in (12, 23, 30, 24):
        print(f"total {total:>2} vs target 24 -> {r.reflect(Candidate([total]), 24)}")

    section("2. Reflexion with the history-aware Actor")
    agent, result = run(Actor(), verbose=True)
    print("solved:", result.values if result else None)
    print("memory at the end:")
    for m in agent.memory.recall():
        print("  -", m)

    section("3. The no-reflection baseline: same Actor, same Evaluator, same 3 trials")
    base = BaselineAgent(Actor(), Evaluator())
    result = base.solve(24, 3, verbose=True)
    print("solved:", result.values if result else None)

    section("4. Comparison")
    print(f"{'trial':<6}{'Reflexion total':<18}{'Baseline total'}")
    ref_agent, _ = run(Actor())
    for a, b in zip(ref_agent.history, base.history):
        print(f"{a['trial']:<6}{str(a['total']) + (' PASS' if a['passed'] else ' FAIL'):<18}{b['total']} {'PASS' if b['passed'] else 'FAIL'}")

    section("5. Part 1's Actor inside the same loop (reads only the latest reflection), 6 trials")
    agent, result = run(Part1Actor(), trials=6, verbose=True)
    print("solved:", result.values if result else None)

    section("6. Memory capacity changes behaviour (history-aware Actor, 6 trials)")
    for cap in (1, 2, 3):
        agent, result = run(Actor(), trials=6, capacity=cap)
        totals = [h["total"] for h in agent.history]
        print(f"capacity={cap}: totals {totals} -> {'solved at trial ' + str(len(totals)) if result else 'NOT solved'}")

    section("7. recall() returns a copy")
    mem = EpisodicMemory()
    mem.add("a lesson")
    got = mem.recall()
    got.clear()
    print("caller cleared its copy; memory still holds:", mem.recall())


if __name__ == "__main__":
    main()
