"""Teaching implementation (our own): orchestration patterns, Part 1 - a Supervisor-Worker system with a scripted classifier, specialist workers, a worker
registry, an execution trace, and experiments on routing accuracy, central dependency and supervisor context growth. No language model is involved."""
import re
from dataclasses import dataclass, field


@dataclass
class Task:
    text: str


@dataclass
class Trace:
    events: list = field(default_factory=list)

    def add(self, actor, action, detail=""):
        self.events.append((actor, action, detail))

    def show(self):
        for i, (a, act, d) in enumerate(self.events, 1):
            print(f"  {i:2}. {a:12} {act:10} {d}")


class ScriptedLLM:
    """A keyword classifier standing in for a model. Counts how many times it is called."""
    RULES = (("refund", ("refund", "money back", "charged twice")), ("bug", ("bug", "crash", "error", "stack trace")), ("sales", ("price", "quote", "upgrade", "buy")))

    def __init__(self):
        self.calls = 0

    def classify(self, text):
        self.calls += 1
        t = text.lower()
        for label, words in self.RULES:
            if any(w in t for w in words):
                return label
        return "unknown"


def refund_worker(task):
    return f"refund case opened for: {task.text[:30]}"


def bug_worker(task):
    return f"bug ticket filed for: {task.text[:30]}"


def sales_worker(task):
    return f"sales lead created for: {task.text[:30]}"


REGISTRY = {"refund": refund_worker, "bug": bug_worker, "sales": sales_worker}


def run_supervisor(task, llm, registry=REGISTRY, supervisor_ok=True):
    trace = Trace()
    trace.add("user", "task", task.text)
    if not supervisor_ok:
        trace.add("supervisor", "FAILED", "no routing possible")
        return "no result", trace
    label = llm.classify(task.text)
    trace.add("supervisor", "route", label)
    worker = registry.get(label)
    if worker is None:
        trace.add("supervisor", "escalate", "no worker for this label")
        return "escalated to a human", trace
    result = worker(task)
    trace.add(label + "_worker", "result", result)
    trace.add("supervisor", "answer", result)
    return result, trace


def supervisor_prompt_size(n_workers, words_per_description=60):
    """Rough size of a routing prompt that lists every worker; an assumption, not a measurement of any model."""
    return 40 + n_workers * words_per_description


def section(t):
    print(f"\n--- {t} ---")


def main():
    llm = ScriptedLLM()

    section("1. One execution trace per request type")
    for text in ("I was charged twice and want a refund", "The app shows a stack trace on login", "What is the price to upgrade to the team plan", "Tell me a joke"):
        result, tr = run_supervisor(Task(text), llm)
        print(f"task: {text}")
        tr.show()
        print(f"  -> {result}")
    print("each line of the trace names which actor decided or acted; the supervisor routes and the worker does the work, and an unknown label ends with an escalation instead of a guess")

    section("2. Genuinely measuring: the scripted router on 14 hand-written tasks")
    tasks = [("I need a refund for order 5", "refund"), ("Please give me my money back", "refund"), ("I was charged twice", "refund"), ("The app crashes on start", "bug"),
             ("Error 500 when I save", "bug"), ("Here is a stack trace from production", "bug"), ("How much is the pro plan price", "sales"), ("I want a quote for 50 seats", "sales"),
             ("Can I upgrade my plan", "sales"), ("My refund request caused an error in the app", "refund"), ("The upgrade button crashes the page", "bug"),
             ("Cancel my subscription", "refund"), ("It is broken", "bug"), ("Hello", "unknown")]
    right = 0
    for text, want in tasks:
        got = ScriptedLLM().classify(text)
        right += got == want
        print(f"{text[:44]:46} want={want:8} got={got:8} {'ok' if got == want else 'WRONG'}")
    print(f"{right} of {len(tasks)} routed as intended")
    print("a task with two intents is routed by whichever rule comes first, and tasks that use words the rules do not list fall to unknown; the routing quality is the quality of the classifier, and the 14 tasks are ours, so this shows the failure shape, not a rate")

    section("3. Genuinely checking: the supervisor is a single point of failure, a worker is not")
    for label, kw in (("healthy", {}), ("supervisor down", {"supervisor_ok": False}), ("refund worker missing", {"registry": {k: v for k, v in REGISTRY.items() if k != "refund"}})):
        outcomes = [run_supervisor(Task(t), ScriptedLLM(), **kw)[0] for t in ("I want a refund", "app crash bug", "price quote")]
        print(f"{label:22} -> {[o[:22] for o in outcomes]}")
    print("when the supervisor fails every request fails; when one worker is missing only its own requests escalate, which is the control-versus-dependency trade of centralisation")

    section("4. Genuinely measuring: supervisor model calls and coordination edges as workers are added")
    print(f"{'workers':>8} {'edges (hub)':>12} {'routing prompt words (assumed 60 per worker)':>46}")
    for n in (3, 10, 30, 100):
        print(f"{n:>8} {n:>12} {supervisor_prompt_size(n):>46}")
    print("the hub has one edge per worker, so the edge count grows linearly, but a routing prompt that lists every worker grows with the roster too; this is why very large rosters need a second level (Part 3)")

    section("5. Genuinely checking: model calls per request in this design")
    l2 = ScriptedLLM()
    for t, _ in tasks[:6]:
        run_supervisor(Task(t), l2)
    print(f"6 requests -> {l2.calls} classifier calls (one per request), workers made 0 model calls because they are plain functions")
    print("a supervisor that also asks a model to summarise each worker result would add one more call per request; counting calls per pattern is how the four patterns are compared in Part 3")


if __name__ == "__main__":
    main()
