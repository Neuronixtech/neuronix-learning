"""Teaching implementation (our own): Reflexion Part 3 - generalisation, a bad evaluator, TTL memory, rich evaluation."""
from dataclasses import dataclass

from reflexion_1 import Candidate, Evaluator
from reflexion_2 import Actor, SelfReflector, EpisodicMemory, ReflexionAgent, BaselineAgent


def solved(agent_cls_args, target, trials):
    agent = ReflexionAgent(*agent_cls_args)
    return agent.solve(target, trials) is not None, agent


class OffByOneEvaluator(Evaluator):
    """A systematically wrong ground truth: it accepts target+1 and rejects the true answer."""

    def binary(self, candidate, target):
        return candidate.total == target + 1


class TimedMemory:
    """Capacity AND time-to-live. The clock is injected so the demo is deterministic."""

    def __init__(self, capacity=3, ttl=100, clock=lambda: 0):
        self.capacity, self.ttl, self.clock = capacity, ttl, clock
        self._items: list[tuple[str, float]] = []

    def add(self, text):
        self._items.append((text, self.clock()))
        self._items = self._items[-self.capacity:]

    def recall(self):
        now = self.clock()
        return [t for t, born in self._items if now - born <= self.ttl]


@dataclass
class Evaluation:
    passed: bool
    score: float
    error: int


class RichEvaluator:
    def evaluate(self, candidate, target):
        error = target - candidate.total
        return Evaluation(error == 0, round(1 - abs(error) / target, 3), error)


class RichReflector:
    def reflect(self, ev: Evaluation, total: int, target: int) -> str:
        if ev.passed:
            return "The candidate already satisfies the target."
        direction = "low" if ev.error > 0 else "high"
        return f"Total {total} was too {direction} by {abs(ev.error)} (score {ev.score}); change the values by about that much."


def section(t):
    print(f"\n--- {t} ---")


def mk(capacity=3, ev=None):
    return (Actor(), ev or Evaluator(), SelfReflector(), EpisodicMemory(capacity))


def main():
    section("1. The complete experiment at target 24")
    ok, agent = solved(mk(), 24, 3)
    base = BaselineAgent(Actor(), Evaluator())
    base.solve(24, 3)
    print("Reflexion:", [h["total"] for h in agent.history], "->", "PASS" if ok else "FAIL")
    print("Baseline :", [h["total"] for h in base.history], "->", "FAIL")

    section("2. Does the learned correction generalise? targets 25 and 26")
    for t in (25, 26):
        ok, agent = solved(mk(), t, 3)
        print(f"target {t}: totals {[h['total'] for h in agent.history]} values {agent.history[-1]['values']} -> {'PASS' if ok else 'FAIL'}")

    section("3. Sweep: every target from 3 to 60")
    for trials in (3, 5):
        wins = [t for t in range(3, 61) if solved(mk(), t, trials)[0]]
        lost = [t for t in range(3, 61) if t not in wins]
        print(f"max_trials={trials}: solved {len(wins)} of 58; unsolved targets: {lost}")

    section("4. Targets below 12 start on the 'too high' branch: target 10")
    ok, agent = solved(mk(), 10, 6)
    for h in agent.history:
        print(f"trial {h['trial']}: values={h['values']} total={h['total']} passed={h['passed']}")
    print("solved:", ok)

    section("5. A systematically wrong evaluator (accepts target+1)")
    agent = ReflexionAgent(*mk(ev=OffByOneEvaluator()))
    result = agent.solve(24, 6)
    for h in agent.history:
        print(f"trial {h['trial']}: values={h['values']} total={h['total']} evaluator says passed={h['passed']}")
    print("agent returned:", result.values if result else None)
    hit = [h["trial"] for h in agent.history if h["total"] == 24]
    print("trials where the candidate really summed to 24:", hit, "- every one was rejected")
    print("memory:", agent.memory.recall())

    section("6. TTL memory: lessons expire")
    now = [0]
    tm = TimedMemory(capacity=3, ttl=100, clock=lambda: now[0])
    tm.add("lesson A (t=0)")
    now[0] = 50
    tm.add("lesson B (t=50)")
    for t in (60, 120, 200):
        now[0] = t
        print(f"t={t:>3}: recall -> {tm.recall()}")

    section("7. A richer evaluation object")
    ev, rf = RichEvaluator(), RichReflector()
    for total in (12, 23, 24, 30):
        e = ev.evaluate(Candidate([total]), 24)
        print(f"total {total:>2}: {e}")
        print("          ", rf.reflect(e, total, 24))


if __name__ == "__main__":
    main()
